# AGENTS.md — Montenegro Salud y Belleza

## 1. Objetivo del proyecto

Desarrollar la web **Montenegro Salud y Belleza** en **React + TypeScript + Tailwind CSS v4**, respetando con alta fidelidad visual el diseño entregado en Figma/capturas.

El proyecto debe construirse por **hitos verificables**, con arquitectura modular, secciones independientes por página y componentes reutilizables. La implementación debe permitir trabajar cada bloque de forma aislada sin romper las demás páginas.

Las páginas iniciales del diseño son:

1. `Home`
2. `Esencia`
3. `Origen`
4. `Oasis`

Cada página debe implementarse usando imágenes PNG separadas, trabajando por capas cuando el diseño lo requiera. Algunos banners están compuestos por varias imágenes superpuestas; por tanto, no se debe asumir que cada sección es una única imagen de fondo.

---

## 2. Stack obligatorio

Usar:

- React
- TypeScript
- Tailwind CSS v4
- Vite
- Componentes funcionales
- CSS variables / tokens visuales
- Arquitectura por páginas, secciones y componentes compartidos

No usar:

- Bootstrap
- jQuery
- CSS global desordenado
- Componentes monolíticos gigantes
- Estilos inline salvo casos puntuales de posicionamiento muy controlado
- Librerías UI pesadas que alteren la identidad visual

---

## 3. Principio rector de desarrollo

La prioridad es que la web quede **visualmente fiel al diseño**.

Antes de agregar lógica, animaciones o mejoras, se debe asegurar:

1. composición correcta;
2. proporciones correctas;
3. colores correctos;
4. tipografías correctas o lo más cercanas posible;
5. espaciados correctos;
6. imágenes bien posicionadas;
7. comportamiento responsive coherente;
8. reutilización limpia de componentes.

Cada hito debe poder validarse visualmente contra las capturas.

---

## 4. Identidad visual

### 4.1 Estilo general

La marca combina:

- estética wellness / spa / belleza;
- lujo natural;
- botánica amazónica;
- medicina ancestral;
- tecnología estética;
- calma, pureza y sofisticación.

La interfaz debe sentirse:

- elegante;
- orgánica;
- sensorial;
- premium;
- cálida;
- femenina sin perder sobriedad;
- natural y botánica.

Evitar una apariencia genérica de landing moderna. El diseño debe conservar el carácter artesanal y editorial del Figma.

---

## 5. Paleta de color

Crear tokens globales para estos colores aproximados:

```css
:root {
  --color-forest: #2f4d3c;
  --color-forest-dark: #243d31;
  --color-forest-soft: #6f8068;
  --color-sage: #87947b;
  --color-cream: #e8ddca;
  --color-cream-light: #f1e8d9;
  --color-pink: #c20b72;
  --color-pink-soft: #f1c6da;
  --color-white: #ffffff;
  --color-muted-white: #f7f2e8;
}
```

Uso visual:

- Verde oscuro: fondos principales, footer, overlays.
- Crema/beige: secciones informativas claras.
- Rosado/fucsia: CTA, bordes finos, acentos, títulos destacados.
- Blanco: textos sobre imágenes y fondos verdes.
- Rosa claro: títulos decorativos sobre fondos verdes.

---

## 6. Tipografía

El diseño usa una combinación editorial:

### 6.1 Títulos

Usar una fuente serif elegante similar a:

- `Cormorant Garamond`
- `Playfair Display`
- `Libre Baskerville`

Prioridad recomendada: **Cormorant Garamond**.

Características:

- títulos grandes;
- peso semibold/bold;
- alto contraste;
- interlineado ajustado;
- sensación editorial premium.

### 6.2 Textos

Usar una sans serif limpia y legible similar a:

- `Inter`
- `Montserrat`
- `Lato`
- `Nunito Sans`

Prioridad recomendada: **Inter** o **Lato**.

### 6.3 Logo

El logo debe usarse como imagen/SVG, no recrearse con texto.

---

## 7. Reglas de Tailwind CSS v4

Configurar tokens mediante `@theme` o variables CSS globales.

Ejemplo base:

```css
@import "tailwindcss";

@theme {
  --font-heading: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;

  --color-forest: #2f4d3c;
  --color-forest-dark: #243d31;
  --color-forest-soft: #6f8068;
  --color-sage: #87947b;
  --color-cream: #e8ddca;
  --color-cream-light: #f1e8d9;
  --color-pink: #c20b72;
  --color-pink-soft: #f1c6da;
}
```

Usar clases semánticas mediante componentes, no repetir combinaciones enormes en cada sección.

---

## 8. Estructura recomendada del proyecto

```txt
src/
  app/
    App.tsx
    routes.tsx

  assets/
    logo/
      montenegro-logo-white.png
      montenegro-symbol-white.svg

    home/
      hero-bath.png
      intro-massage.png
      services-highlight.png

    esencia/
      hero-clinic-bg.png
      olga.png
      leaves.png
      machine.png
      history-image.png
      cta-bg.png

    origen/
      hero-leaf-bg.png
      branch.png
      pillar-earth.png
      pillar-water.png
      pillar-time.png
      jungle-left.png

    oasis/
      hero-oasis-bg.png
      medicinal-bath.png
      detox-therapy.png
      cellular-hydration.png
      benefits-bg.png

  components/
    layout/
      Header.tsx
      Footer.tsx
      PageShell.tsx

    ui/
      Button.tsx
      SectionLabel.tsx
      SectionTitle.tsx
      Container.tsx
      DecorativeLine.tsx
      FloatingWhatsAppButton.tsx
      ImageLayer.tsx
      Accordion.tsx

    cards/
      ValueCard.tsx
      PillarCard.tsx
      ServiceExperienceCard.tsx
      BenefitItem.tsx

  data/
    navigation.ts
    footer.ts
    home.ts
    esencia.ts
    origen.ts
    oasis.ts

  pages/
    Home/
      HomePage.tsx
      sections/
        HomeHero.tsx
        HomeIntro.tsx
        HomeEssencePreview.tsx
        HomeServicesHighlight.tsx

    Esencia/
      EsenciaPage.tsx
      sections/
        EsenciaHero.tsx
        FounderQuote.tsx
        HistorySection.tsx
        ValuesSection.tsx
        EsenciaCTA.tsx

    Origen/
      OrigenPage.tsx
      sections/
        OrigenHero.tsx
        BridgeSection.tsx
        WisdomPillars.tsx
        GrandfatherCorner.tsx

    Oasis/
      OasisPage.tsx
      sections/
        OasisHero.tsx
        OasisIntro.tsx
        PurificationExperiences.tsx
        OasisBenefits.tsx

  styles/
    globals.css
    typography.css
    utilities.css

  types/
    common.ts
```

---

## 9. Reglas de arquitectura

### 9.1 Páginas

Cada página debe tener un componente principal:

- `HomePage.tsx`
- `EsenciaPage.tsx`
- `OrigenPage.tsx`
- `OasisPage.tsx`

Cada página solo debe ensamblar secciones. No debe contener lógica visual extensa.

Ejemplo:

```tsx
export function HomePage() {
  return (
    <PageShell>
      <HomeHero />
      <HomeIntro />
      <HomeEssencePreview />
      <HomeServicesHighlight />
    </PageShell>
  );
}
```

### 9.2 Secciones

Cada sección debe ser autónoma:

- recibe contenido desde `data/` cuando sea posible;
- encapsula su layout;
- usa componentes UI compartidos;
- no depende de secciones hermanas;
- debe poder ser modificada sin afectar otras páginas.

### 9.3 Componentes compartidos

Crear componentes reutilizables para:

- header;
- footer;
- botones CTA;
- etiquetas tipo pill;
- títulos grandes;
- tarjetas;
- acordeones;
- líneas decorativas;
- overlays;
- imagen por capas;
- botón flotante de WhatsApp/contacto.

### 9.4 Datos

Textos, navegación, servicios, valores, pilares y beneficios deben vivir en archivos de `data/` cuando sea práctico.

No hardcodear listas grandes dentro del JSX si pueden estar en data.

---

## 10. Reglas para trabajo con imágenes por capas

Algunas secciones del diseño no son una sola imagen; están compuestas por capas.

Ejemplo crítico:

- Página `Esencia`
- Hero con fondo clínico claro
- Foto de Olga Montenegro
- Hoja/planta decorativa detrás o al lado
- Caja verde con cita
- Posicionamiento superpuesto

Regla:

No convertir esta composición en una sola imagen plana si los assets están separados. Debe montarse con capas usando posicionamiento relativo/absoluto.

Crear componente base:

```tsx
type ImageLayerProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function ImageLayer({ src, alt, className }: ImageLayerProps) {
  return <img src={src} alt={alt} className={className} draggable={false} />;
}
```

Patrón recomendado:

```tsx
<section className="relative overflow-hidden">
  <img className="absolute inset-0 h-full w-full object-cover" src={background} alt="" />
  <div className="relative z-10">
    {/* contenido */}
  </div>
  <img className="absolute right-0 bottom-0 z-20" src={person} alt="Olga Montenegro" />
</section>
```

Capas obligatorias:

1. fondo;
2. overlay si aplica;
3. contenido;
4. imágenes decorativas/personajes;
5. CTA o elementos interactivos.

---

## 11. Header

El header debe ser común a todas las páginas.

Características visuales:

- logo blanco arriba a la izquierda;
- menú hamburguesa blanco arriba a la derecha;
- posición absoluta sobre el hero;
- alto visual pequeño;
- no debe ocupar una barra pesada;
- z-index alto;
- debe funcionar sobre fondos oscuros y claros.

Archivo:

```txt
src/components/layout/Header.tsx
```

Requisitos:

- logo como imagen;
- botón hamburguesa accesible;
- navegación preparada aunque inicialmente sea menú visual;
- sticky opcional solo si no rompe el diseño;
- en desktop debe conservar la estética minimalista del Figma.

---

## 12. Footer

Footer común para todas las páginas.

Características visuales:

- fondo verde oscuro o verde salvia según página;
- logo símbolo a la izquierda;
- bloque de dirección;
- navegación;
- legal;
- newsletter;
- redes sociales;
- copyright inferior;
- estructura en columnas en desktop;
- apilado ordenado en mobile.

Contenido base observado:

```txt
Badaia Kalea, 33, 01012 Vitoria-Gasteiz,
Araba, España.
De Lunes a Sabado
9:00 A.M. - 2:00 P.M. / 5:00 P.M. - 8:00 P.M.

NAVEGACIÓN
HOME
ESENCIA
SERVICIOS
FRUTO
AURA
CONTACTO

LEGAL
Aviso legal
Políticas de seguridad
Cookies

NEWSLETTER
Recibe novedades, promos y noticias sobre nuevos servicios.

© 2026 Montenegro Salud y Belleza. Todos los derechos reservados.
Desarrollado por MLaN Studio.
```

---

## 13. Botones

### 13.1 Botón primario

Usado en CTA como `RESERVA TU CITA`.

Estilo:

- fondo fucsia;
- texto blanco;
- forma pill;
- uppercase;
- altura aproximada 44-50 px;
- padding horizontal amplio;
- hover con leve oscurecimiento;
- transición suave.

### 13.2 Botón outline

Usado sobre fondos oscuros/fotos.

Estilo:

- borde blanco o rosa claro;
- fondo transparente;
- texto blanco;
- icono flecha a la derecha;
- forma ligeramente redondeada/pill;
- hover con fondo translúcido.

---

## 14. Responsive

El diseño base es desktop vertical. Se debe adaptar cuidadosamente a:

- mobile: 360px - 480px;
- tablet: 768px;
- desktop: 1024px+;
- wide: 1280px+.

Reglas:

1. No cortar textos importantes.
2. No aplastar imágenes humanas.
3. Mantener respiración visual.
4. Las composiciones por capas deben simplificarse en móvil.
5. En móvil, las tarjetas pasan a columna.
6. Los títulos reducen tamaño pero conservan presencia.
7. Los fondos hero deben usar `object-cover` con `object-position` específico por sección.
8. Las imágenes decorativas pueden ocultarse en móvil si comprometen legibilidad.
9. Los CTA deben tener ancho razonable, no necesariamente full width.

---

## 15. Accesibilidad mínima

Cada sección debe cumplir:

- imágenes decorativas con `alt=""`;
- imágenes informativas con `alt` descriptivo;
- botones con texto claro;
- contraste suficiente;
- estructura de headings ordenada;
- no usar solo color para comunicar acciones;
- links navegables por teclado;
- `aria-label` en menú hamburguesa y redes sociales.

---

# 16. Hitos de desarrollo

## Hito 0 — Setup base del proyecto

### Objetivo

Crear la base técnica del proyecto con React, TypeScript, Vite y Tailwind CSS v4.

### Tareas

- Crear proyecto Vite React TypeScript.
- Instalar Tailwind CSS v4.
- Configurar `globals.css`.
- Configurar fuentes.
- Crear tokens visuales.
- Crear estructura de carpetas.
- Crear rutas base.
- Crear layout general.
- Agregar assets iniciales en `src/assets`.
- Validar que el proyecto compile sin errores.

### Entregables

- Proyecto ejecutando con `npm run dev`.
- Tailwind funcionando.
- Estructura modular creada.
- Página home temporal renderizando.

### Criterios de aceptación

- `npm run dev` funciona.
- `npm run build` funciona.
- No hay errores TypeScript.
- Existe estructura base `pages`, `components`, `data`, `assets`, `styles`.

---

## Hito 1 — Componentes globales e identidad visual

### Objetivo

Crear el sistema visual reutilizable antes de implementar páginas completas.

### Subhitos

#### 1.1 Tokens visuales

Crear:

- colores;
- tipografías;
- tamaños de contenedor;
- sombras suaves;
- radios;
- overlays.

#### 1.2 Componentes UI base

Crear:

- `Container`;
- `SectionLabel`;
- `SectionTitle`;
- `Button`;
- `DecorativeLine`;
- `FloatingWhatsAppButton`;
- `ImageLayer`.

#### 1.3 Layout global

Crear:

- `Header`;
- `Footer`;
- `PageShell`.

#### 1.4 Data global

Crear:

- `navigation.ts`;
- `footer.ts`.

### Criterios de aceptación

- Header y Footer se ven parecidos al diseño.
- Botones primarios y outline coinciden con la estética.
- Los colores globales están centralizados.
- No hay estilos repetidos sin necesidad.

---

# 17. Hito 2 — Home

## Objetivo

Implementar la página Home completa, respetando la captura correspondiente.

Página visual:

- Hero con mujer en bañera/spa.
- Bloque principal verde con logo/símbolo.
- Texto central grande:
  `Sumérgete en el lujo, tu refugio de bienestar y belleza.`
- CTA `RESERVA TU CITA`.
- Sección beige `Despierta tu calma interior`.
- Imagen ovalada grande de masaje/piedras.
- CTA `NUESTRA ESENCIA`.
- Banner oscuro de servicios destacados.
- Footer.

Archivo principal:

```txt
src/pages/Home/HomePage.tsx
```

---

## Subhito 2.1 — HomeHero

Archivo:

```txt
src/pages/Home/sections/HomeHero.tsx
```

### Elementos

- Header superpuesto.
- Fondo superior con imagen de bañera/spa.
- Degradado/overlay verde oscuro desde la mitad inferior.
- Símbolo de marca centrado.
- Título grande blanco/crema.
- Texto descriptivo centrado.
- Botón fucsia.
- Botón flotante fucsia a la derecha.

### Criterios de aceptación

- El hero ocupa una altura amplia similar al diseño.
- La imagen se ve en la parte superior y el overlay verde permite leer el texto.
- El título está centrado.
- El CTA está centrado.
- En móvil, el texto no se corta.

---

## Subhito 2.2 — HomeIntro / Calm Section

Archivo:

```txt
src/pages/Home/sections/HomeIntro.tsx
```

### Elementos

- Fondo beige.
- Etiqueta tipo pill: `Respira relajación`.
- Título:
  `Despierta tu calma interior.`
- Texto descriptivo en columna derecha.
- Imagen ovalada grande de tratamiento.
- Botón outline claro:
  `NUESTRA ESENCIA`.

### Criterios de aceptación

- Layout en dos columnas en desktop.
- Imagen con borde ovalado grande.
- Título en verde oscuro.
- Botón centrado bajo la imagen.
- En mobile pasa a una columna.

---

## Subhito 2.3 — HomeServicesHighlight

Archivo:

```txt
src/pages/Home/sections/HomeServicesHighlight.tsx
```

### Elementos

- Banner con imagen de lavado capilar/spa.
- Overlay verde oscuro translúcido.
- Etiqueta `Servicios destacados`.
- Título:
  `Especializados en brindar la experiencia ideal`
- Botón outline `SERVICIOS`.

### Criterios de aceptación

- El texto queda ubicado hacia la derecha en desktop.
- La imagen de fondo mantiene protagonismo.
- El overlay mejora legibilidad.
- En móvil, texto centrado o alineado de forma legible.

---

## Subhito 2.4 — Integración Home + Footer

### Tareas

- Ensamblar secciones en `HomePage`.
- Añadir Footer.
- Revisar espacios entre secciones.
- Validar responsive.

### Criterios de aceptación

- Home completa se parece visualmente a la captura.
- No hay saltos raros entre hero, beige, banner y footer.
- Responsive aceptable.

---

# 18. Hito 3 — Página Esencia

## Objetivo

Implementar la página Esencia completa con composición por capas.

Página visual:

- Hero/fundadora con fondo clínico.
- Título fucsia:
  `Esencia: La visión detrás del bienestar.`
- Tarjeta verde con cita.
- Imagen de Olga superpuesta.
- Hojas decorativas.
- Historia con imagen y badge `+30 años a tu lado`.
- Valores.
- Frase testimonial.
- CTA final con imagen de tratamiento.
- Footer.

Archivo principal:

```txt
src/pages/Esencia/EsenciaPage.tsx
```

---

## Subhito 3.1 — EsenciaHero

Archivo:

```txt
src/pages/Esencia/sections/EsenciaHero.tsx
```

### Elementos por capas

1. Fondo clínico.
2. Header encima.
3. Título fucsia centrado/derecha.
4. Tarjeta verde oscura con cita.
5. Comillas decorativas.
6. Imagen de Olga.
7. Hoja/planta detrás o al lado de Olga.
8. Botón flotante fucsia.

### Criterios de aceptación

- Olga debe quedar superpuesta y no deformada.
- La tarjeta de cita debe ubicarse debajo del título, hacia el centro/izquierda.
- El fondo clínico se mantiene suave.
- En móvil, Olga puede pasar debajo del texto o reducirse.
- No se debe usar una única captura plana si existen assets separados.

---

## Subhito 3.2 — HistorySection

Archivo:

```txt
src/pages/Esencia/sections/HistorySection.tsx
```

### Elementos

- Fondo beige.
- Imagen izquierda con bordes grandes.
- Badge fucsia:
  `+30 años a tu lado`
- Etiqueta:
  `El Propósito`
- Título:
  `Nuestra historia`
- Texto descriptivo.
- Línea decorativa verde.

### Criterios de aceptación

- Imagen y texto quedan en dos columnas.
- Badge se superpone a la imagen.
- Título fucsia.
- En móvil, badge no debe tapar texto importante.

---

## Subhito 3.3 — ValuesSection

Archivo:

```txt
src/pages/Esencia/sections/ValuesSection.tsx
```

### Elementos

- Fondo verde oscuro.
- Título:
  `Nuestros valores`
- Tres tarjetas:
  - Identidad
  - Innovación
  - Legado
- Iconos lineales dentro de círculo.
- Texto descriptivo.
- Frase inferior con comillas.

### Criterios de aceptación

- Tarjetas con fondo verde suave.
- Bordes redondeados.
- Sombra sutil.
- Tres columnas en desktop.
- Una columna en mobile.

---

## Subhito 3.4 — EsenciaCTA

Archivo:

```txt
src/pages/Esencia/sections/EsenciaCTA.tsx
```

### Elementos

- Imagen de tratamiento como fondo.
- Overlay verde.
- Título rosa claro:
  `Permítenos ayudarte a encontrar tu mejor versión.`
- Texto pequeño.
- Botón outline:
  `RESERVA UNA ASESORÍA PERSONALIZADA`

### Criterios de aceptación

- El título queda alineado a la izquierda.
- El overlay permite lectura clara.
- En móvil, el CTA debe conservar jerarquía.

---

# 19. Hito 4 — Página Origen

## Objetivo

Implementar la página Origen completa.

Página visual:

- Hero de hoja/selva con título blanco.
- Sección verde con rama decorativa.
- Bloque `El Puente entre Mundos`.
- Sección `Los Pilares de la Sabiduría`.
- Tres tarjetas: Tierra, Agua, Tiempo.
- Sección dividida: imagen de selva izquierda y acordeón derecha.
- Footer.

Archivo principal:

```txt
src/pages/Origen/OrigenPage.tsx
```

---

## Subhito 4.1 — OrigenHero

Archivo:

```txt
src/pages/Origen/sections/OrigenHero.tsx
```

### Elementos

- Fondo de hoja/selva.
- Header superpuesto.
- Etiqueta:
  `Nuestro Origen`
- Título:
  `Sabiduría Centenaria: El Legado de la Selva.`
- Texto descriptivo.
- Overlay oscuro sutil.
- Botón flotante fucsia.

### Criterios de aceptación

- Título grande en blanco.
- Texto legible sobre fondo.
- El hero mantiene aspecto cinematográfico.

---

## Subhito 4.2 — BridgeSection

Archivo:

```txt
src/pages/Origen/sections/BridgeSection.tsx
```

### Elementos

- Fondo verde oscuro.
- Rama decorativa a la izquierda.
- Texto a la derecha:
  `El Puente entre Mundos`
- Párrafo descriptivo.
- Línea decorativa rosa claro.

### Criterios de aceptación

- Rama decorativa no debe afectar lectura.
- Texto centrado verticalmente.
- En móvil, la rama puede reducirse u ocultarse.

---

## Subhito 4.3 — WisdomPillars

Archivo:

```txt
src/pages/Origen/sections/WisdomPillars.tsx
```

### Elementos

- Fondo verde salvia.
- Título rosa:
  `Los Pilares de la Sabiduría`
- Tres tarjetas:
  - `La Tierra` / `Plantas`
  - `El Agua` / `Limpieza`
  - `El Tiempo` / `Paciencia`
- Imagen vertical por tarjeta.
- Texto explicativo.

### Criterios de aceptación

- Tarjetas con border radius grande.
- Imagen integrada dentro de la tarjeta.
- Sombra suave.
- En desktop, tres columnas.
- En mobile, una columna.

---

## Subhito 4.4 — GrandfatherCorner

Archivo:

```txt
src/pages/Origen/sections/GrandfatherCorner.tsx
```

### Elementos

- Layout dividido 50/50.
- Izquierda:
  - imagen de selva;
  - texto blanco inferior;
  - botón claro `RITUALES DE OASIS`.
- Derecha:
  - fondo verde oscuro;
  - etiqueta `Consejos Naturales`;
  - título `El Rincón del Abuelo`;
  - párrafo;
  - acordeón con cuatro items:
    1. Limpieza revitalizante
    2. El Respeto por lo Orgánico
    3. El Abrazo del Barro
    4. La Huella de la Constancia

### Criterios de aceptación

- Layout partido debe verse editorial.
- Acordeón visualmente similar, con bordes claros y signos `+`.
- Primer item puede aparecer abierto como en diseño.
- En mobile, izquierda arriba y derecha abajo.

---

# 20. Hito 5 — Página Oasis

## Objetivo

Implementar página Oasis completa.

Página visual:

- Hero con baño medicinal.
- Título rosa:
  `Oasis: Tu Ritual de Purificación.`
- Intro verde.
- Sección beige:
  `Experiencias de Purificación`
- Lista de tres experiencias.
- Banner de beneficios con imagen de fondo.
- Footer.

Archivo principal:

```txt
src/pages/Oasis/OasisPage.tsx
```

---

## Subhito 5.1 — OasisHero

Archivo:

```txt
src/pages/Oasis/sections/OasisHero.tsx
```

### Elementos

- Fondo con persona en baño medicinal.
- Header superpuesto.
- Título rosa:
  `Oasis: Tu Ritual de Purificación.`
- Texto descriptivo blanco.
- Overlay oscuro para legibilidad.
- Botón flotante fucsia.

### Criterios de aceptación

- El título debe mantener jerarquía y posición central.
- La imagen no debe perder la escena principal.
- Texto blanco legible.

---

## Subhito 5.2 — OasisIntro

Archivo:

```txt
src/pages/Oasis/sections/OasisIntro.tsx
```

### Elementos

- Fondo verde oscuro.
- Párrafo centrado/ancho medio.
- Línea decorativa horizontal clara.

### Criterios de aceptación

- Bloque sobrio, aireado y legible.
- Espaciado similar a captura.

---

## Subhito 5.3 — PurificationExperiences

Archivo:

```txt
src/pages/Oasis/sections/PurificationExperiences.tsx
```

### Elementos

- Fondo beige.
- Título:
  `Experiencias de Purificación`
- Tres filas de servicio:
  1. Baños Medicinales
  2. Terapias de Detoxificación
  3. Hidratación Celular
- Cada fila:
  - imagen cuadrada con bordes redondeados;
  - bloque duración/precio;
  - título;
  - descripción;
  - botón fucsia `RESERVA TU CITA`;
  - divisores fucsia finos.

### Criterios de aceptación

- En desktop, estructura horizontal.
- En móvil, cada experiencia se vuelve tarjeta vertical.
- Precios quedan como placeholder `XXX€`.
- Duración `1 Hora`.
- No romper alineación de líneas/divisores.

---

## Subhito 5.4 — OasisBenefits

Archivo:

```txt
src/pages/Oasis/sections/OasisBenefits.tsx
```

### Elementos

- Imagen de fondo spa/selva.
- Overlay verde.
- Etiqueta:
  `¿Por qué hacerlo?`
- Título:
  `El Beneficio Oasis`
- Lista de beneficios en cajas outline:
  - Desintoxicación profunda
  - Paz Mental
  - Maximización de resultados
- Texto final.
- Botón outline:
  `RESERVA TU MOMENTO DE PAZ`

### Criterios de aceptación

- Texto a la izquierda.
- Fondo visible pero sin afectar legibilidad.
- Cajas outline similares al diseño.
- CTA con flecha.

---

# 21. Hito 6 — Navegación y rutas

## Objetivo

Conectar páginas con rutas reales.

### Rutas sugeridas

```txt
/          -> Home
/esencia   -> Esencia
/origen    -> Origen
/oasis     -> Oasis
```

Preparar rutas futuras:

```txt
/servicios
/fruto
/aura
/contacto
/legal/aviso-legal
/legal/politicas-de-seguridad
/legal/cookies
```

### Tareas

- Instalar/configurar `react-router-dom` si aplica.
- Crear `routes.tsx`.
- Conectar navegación del footer.
- Preparar menú hamburguesa.

### Criterios de aceptación

- Todas las páginas principales son navegables.
- No hay recarga completa innecesaria.
- Links del footer apuntan a rutas coherentes.

---

# 22. Hito 7 — Responsive y ajuste fino

## Objetivo

Pulir comportamiento responsive.

### Tareas

- Revisar Home en mobile/tablet/desktop.
- Revisar Esencia en mobile/tablet/desktop.
- Revisar Origen en mobile/tablet/desktop.
- Revisar Oasis en mobile/tablet/desktop.
- Ajustar títulos grandes.
- Ajustar imágenes por capas.
- Validar footer en mobile.
- Validar que ningún CTA se salga del viewport.
- Validar que no existan espacios muertos excesivos.

### Criterios de aceptación

- Mobile usable desde 360px.
- Tablet no rompe layouts.
- Desktop mantiene fidelidad.
- No hay scroll horizontal.
- No hay imágenes humanas deformadas.

---

# 23. Hito 8 — Optimización, calidad y entrega

## Objetivo

Dejar el proyecto listo para entrega o despliegue.

### Tareas

- Revisar build.
- Optimizar imágenes.
- Añadir lazy loading donde aplique.
- Revisar `alt`.
- Revisar metadata básica.
- Revisar nombres de componentes.
- Eliminar código muerto.
- Validar TypeScript.
- Validar responsive final.
- Documentar cómo correr el proyecto.

### Criterios de aceptación

- `npm run build` exitoso.
- Proyecto sin errores TypeScript.
- Lighthouse aceptable.
- Assets organizados.
- Código claro y mantenible.

---

## 24. Checklist visual por página

### Home

- [ ] Header sobre hero.
- [ ] Logo blanco correcto.
- [ ] Hero con bañera/spa.
- [ ] Overlay verde inferior.
- [ ] Título grande centrado.
- [ ] CTA fucsia.
- [ ] Sección beige con título verde.
- [ ] Imagen ovalada.
- [ ] Banner servicios con overlay.
- [ ] Footer completo.

### Esencia

- [ ] Hero por capas.
- [ ] Olga posicionada correctamente.
- [ ] Planta/hojas como capa decorativa.
- [ ] Tarjeta verde de cita.
- [ ] Título fucsia.
- [ ] Historia con badge.
- [ ] Valores en tarjetas.
- [ ] CTA final con imagen.
- [ ] Footer completo.

### Origen

- [ ] Hero selva/hoja.
- [ ] Etiqueta `Nuestro Origen`.
- [ ] Puente entre mundos.
- [ ] Rama decorativa.
- [ ] Pilares en tarjetas.
- [ ] Sección 50/50 con acordeón.
- [ ] Footer completo.

### Oasis

- [ ] Hero baño medicinal.
- [ ] Título rosa.
- [ ] Intro verde.
- [ ] Experiencias de purificación.
- [ ] Filas con imagen, duración, precio y CTA.
- [ ] Beneficios Oasis.
- [ ] Footer completo.

---

## 25. Convenciones de nombres

### Componentes

Usar PascalCase:

```txt
HomeHero.tsx
EsenciaCTA.tsx
WisdomPillars.tsx
ServiceExperienceCard.tsx
```

### Variables

Usar camelCase:

```ts
const footerLinks = []
const purificationExperiences = []
```

### Assets

Usar kebab-case:

```txt
hero-bath.png
founder-olga.png
history-treatment.png
pillar-earth.png
```

---

## 26. Estándar de código

Cada componente debe:

- tener nombre claro;
- ser pequeño y legible;
- evitar lógica innecesaria;
- usar TypeScript cuando reciba props;
- exportarse de forma nombrada;
- usar `className` ordenado de forma razonable;
- no duplicar bloques largos;
- no mezclar data extensa con JSX.

Ejemplo esperado:

```tsx
type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <h2 className={`font-heading text-5xl leading-tight ${className}`}>
      {children}
    </h2>
  );
}
```

---

## 27. Reglas para Codex

Cuando trabajes en este proyecto:

1. Lee este archivo antes de modificar código.
2. Trabaja un solo hito a la vez.
3. No avances al siguiente hito sin dejar el anterior compilando.
4. No cambies la identidad visual sin justificación.
5. No reemplaces composiciones por capas con una imagen plana si existen assets separados.
6. No introduzcas librerías innecesarias.
7. Mantén los componentes pequeños.
8. Centraliza textos repetidos en `data/`.
9. Usa los nombres de archivos indicados cuando sea posible.
10. Después de cada hito ejecuta:
   - `npm run build`
   - validación visual manual
11. Si falta un asset, deja un placeholder claro y documenta el nombre esperado.
12. Si hay ambigüedad visual, prioriza la captura entregada.
13. No rompas páginas ya implementadas al trabajar una nueva.
14. Mantén responsive desde el inicio.
15. Cada sección debe poder ajustarse de forma aislada.

---

## 28. Comandos esperados

```bash
npm install
npm run dev
npm run build
npm run preview
```

Si se agregan comandos de lint o format:

```bash
npm run lint
npm run format
```

---

## 29. Definición de terminado

El proyecto se considera terminado cuando:

- Home está implementada.
- Esencia está implementada.
- Origen está implementada.
- Oasis está implementada.
- Header y footer son reutilizables.
- Las imágenes están organizadas.
- Las composiciones por capas funcionan.
- Mobile, tablet y desktop están revisados.
- `npm run build` pasa correctamente.
- La web mantiene la identidad visual del diseño.
- El código está organizado por páginas, secciones y componentes.
