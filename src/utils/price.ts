export function formatPrice(value?: string, fallback = 'Consultar') {
  const rawValue = value?.trim()

  if (!rawValue) {
    return fallback
  }

  const normalizedCurrency = rawValue
    .replace(/\$/g, '€')
    .replace(/\s*€/g, ' €')
    .replace(/\s+-\s+/g, ' - ')
    .replace(/\s{2,}/g, ' ')
    .trim()

  const lowerValue = normalizedCurrency.toLowerCase()
  const isPlaceholder =
    /^x+\s*€$/i.test(normalizedCurrency) ||
    /^0+\s*-\s*0+\s*€$/i.test(normalizedCurrency)

  if (isPlaceholder || lowerValue === 'consultar') {
    return fallback
  }

  return normalizedCurrency
}
