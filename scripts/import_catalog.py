"""Read the approved workbook without modifying it; retain source rows for review."""
import json
import sys
import re
import unicodedata
from pathlib import Path
import openpyxl

ROOT = Path(__file__).resolve().parents[1]
if len(sys.argv) != 2:
    raise SystemExit('Uso: python scripts/import_catalog.py /ruta/al/tarifario.xlsx')
SOURCE = Path(sys.argv[1])

def clean(value):
    return re.sub(r'\s+', ' ', str(value or '')).strip()

def slug(value):
    value = unicodedata.normalize('NFKD', value).encode('ascii', 'ignore').decode().lower()
    return re.sub(r'[^a-z0-9]+', '-', value).strip('-')

def money(value):
    if value is None or value == '':
        return 'Consultar'
    if isinstance(value, (int, float)):
        return f'{value:g} €'.replace('.', ',')
    return clean(value)

workbook = openpyxl.load_workbook(SOURCE, data_only=True)
catalog = {key: [] for key in ['oasis', 'tacto', 'tez', 'filo', 'hebra', 'lienzo', 'lazo', 'brote', 'raiz']}
counts = {}
for sheet in workbook:
    category = 'filo' if '(Filo)' in sheet.title else ('brote' if sheet.title == 'Brotes' else sheet.title.lower())
    current = None
    counts[sheet.title] = 0
    for row in range(5, sheet.max_row + 1):
        cells = {col: sheet[f'{col}{row}'].value for col in 'ADGHJKMOPQS'}
        if not cells['G'] and not (category == 'brote' and cells['D']):
            continue
        if cells['A']:
            title = clean(cells['A'])
            current = {'id': slug(title), 'title': title, 'description': '', 'options': []}
            catalog[category].append(current)
        if current is None:
            raise ValueError(f'No treatment at {sheet.title}:{row}')
        description = str(cells['D'] if category == 'brote' else cells['G']).strip()
        if not current['description']:
            current['description'] = description
        duration_col = {'Oasis': 'O', 'Tacto': 'P', 'Tez': 'Q', 'Lienzo': 'P', 'Brotes': 'J', 'Depilacion IPL (Filo)': 'Q', 'Depilacion Laser Diodo (Filo)': 'S'}.get(sheet.title, 'M')
        duration = clean(cells[duration_col])
        option = {'name': clean(cells['A'] if category == 'brote' else (cells['D'] or current['title'])), 'price': money(cells['H'] if category == 'brote' else cells['K']), 'description': description, 'duration': duration if duration and duration != '--' else 'Consultar', 'sourceSheet': sheet.title, 'sourceRow': row}
        if sheet.title in ['Oasis', 'Tacto', 'Tez', 'Lienzo'] and cells['M']:
            option['bonus'] = str(cells['M']).strip()
        if sheet.title == 'Depilacion IPL (Filo)':
            option['price'] = f"Primera Sesión: {money(cells['K'])} Sesión Individual: {money(cells['M'])} Bono de 6 Sesiones: {money(cells['O'])}"
        if sheet.title == 'Depilacion Laser Diodo (Filo)':
            option['bonus'] = '\n'.join(f'Bono {n} sesiones: {money(cells[col])}' for n, col in [(3, 'M'), (6, 'O'), (8, 'Q')] if cells[col] is not None)
        if current['id'] == 'criolipolisis':
            option['price'] = 'Consultar'
            option.pop('bonus', None)
        current['options'].append(option)
        counts[sheet.title] += 1

output = '// Generated from the approved September 2026 workbook by scripts/import_catalog.py.\n'
output += 'import type { PricingCategory, ServicePricing } from "./servicePricing"\n\n'
output += 'export const approvedServicePricing = ' + json.dumps(catalog, ensure_ascii=False, indent=2) + ' satisfies Record<PricingCategory, ServicePricing[]>\n'
(ROOT / 'src/data/approvedServicePricing.ts').write_text(output)
print(json.dumps(counts, ensure_ascii=False))
print('Treatment groups:', sum(len(items) for items in catalog.values()))
print('Options:', sum(len(service['options']) for items in catalog.values() for service in items))
