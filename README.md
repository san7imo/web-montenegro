# Montenegro Salud y Belleza

Sitio web oficial de **Montenegro Salud y Belleza**, desarrollado como una experiencia editorial y responsive para presentar la marca, sus universos de bienestar, el catálogo completo de servicios, precios, bonos, resultados y canales de contacto.

El proyecto también incluye una página independiente tipo *link-in-bio* para **Montenegro VIP**, páginas legales, consentimiento de cookies y enlaces directos de reserva mediante WhatsApp.

## Tabla de contenidos

- [Estado del proyecto](#estado-del-proyecto)
- [Tecnologías](#tecnologías)
- [Funcionalidades](#funcionalidades)
- [Rutas](#rutas)
- [Catálogo y precios](#catálogo-y-precios)
- [Arquitectura](#arquitectura)
- [Instalación y ejecución](#instalación-y-ejecución)
- [Scripts disponibles](#scripts-disponibles)
- [Configuración](#configuración)
- [Actualización de servicios y precios](#actualización-de-servicios-y-precios)
- [Gestión de imágenes y vídeos](#gestión-de-imágenes-y-vídeos)
- [Diseño y estilos](#diseño-y-estilos)
- [Accesibilidad y responsive](#accesibilidad-y-responsive)
- [SEO, cookies y páginas legales](#seo-cookies-y-páginas-legales)
- [Despliegue](#despliegue)
- [Validación y mantenimiento](#validación-y-mantenimiento)
- [Limitaciones actuales](#limitaciones-actuales)

## Estado del proyecto

La aplicación se encuentra funcional y compilable. Actualmente están implementados:

- Home y páginas editoriales de marca.
- Siete universos de servicios: Oasis, Tez, Hebra, Tacto, Filo, Brote y Raíz.
- 84 servicios y 236 opciones tarifarias.
- Precios, packs y bonos actualizados con base en `PRECIOS SERVICIOS MONTENEGRO (1).xlsx`.
- Modales detallados para cada servicio.
- Página Eco con testimonios, resultados y galería.
- Página de contacto.
- Formulario de contacto y newsletter conectados a Formspree.
- Montenegro VIP tipo *link-in-bio*.
- Aviso legal, privacidad y política de cookies.
- Consentimiento granular para contenido externo como Google Maps.
- Metadatos SEO por ruta, sitemap, robots y página 404 propia.
- Carga diferida por rutas y modales, fuentes locales e imágenes WebP optimizadas.
- Navegación responsive, footer común y acceso flotante a WhatsApp.

## Tecnologías

- React 19
- TypeScript 6
- Vite 8
- Tailwind CSS 4
- React Router 7
- Framer Motion
- React Icons
- ESLint

No se utiliza Bootstrap, jQuery ni una librería UI externa. Los componentes y el sistema visual son propios del proyecto.

## Funcionalidades

### Experiencia de marca

- Heroes con vídeo MP4 optimizado y poster estático.
- Fallback a imagen cuando la persona usuaria tiene activada la preferencia de movimiento reducido.
- Secciones editoriales construidas por capas, conservando la identidad botánica y premium.
- Header responsive con navegación principal y menú de servicios.
- Footer reutilizable con información de contacto, navegación, enlaces legales y redes sociales.

### Servicios y tarifas

- Catálogo organizado por categorías.
- Listados expandibles con controles “Ver más” y “Ver menos”.
- Tarjetas de servicio reutilizables.
- Precio resumen calculado a partir de las opciones disponibles.
- Modales con:
  - descripción extendida;
  - opciones y tarifas;
  - agrupación por zonas;
  - packs y bonos destacados;
  - desglose especial de IPL por primera sesión, sesión individual y bono;
  - reserva mediante WhatsApp;
  - compartir desde el dispositivo, WhatsApp, Facebook o Instagram;
  - enlace a resultados;
  - recomendación de otro servicio.
- Apertura directa de un modal mediante una URL como:

```text
/filo?service=depilacion-ipl
```

### Montenegro VIP

La ruta `/vip` funciona como una página compacta tipo *link-in-bio* y está pensada para enlaces de redes sociales, códigos QR, chips NFC y acciones posteriores a una visita.

Incluye:

- acceso directo a reseñas de Google;
- solicitud del beneficio por reseña e historia de Instagram;
- reserva, tarjetas regalo y exploración de tratamientos;
- selector de universos de servicio;
- acceso a Instagram Stories;
- acciones de recomendación y compartir;
- redes sociales;
- mensajes de confirmación mediante toast;
- botón preparado para **“Sorteo: Lipo Sin Cirugía”**.

El botón del sorteo está visible, muestra “Próximamente” y permanece desactivado mientras su bandera `isActive` sea `false`. La URL definitiva ya está configurada. La ruta VIP no muestra el banner global de cookies para conservar su formato compacto.

El Smart Link público es `https://www.montenegrosaludybelleza.com/vip`. Sus códigos QR listos para impresión están disponibles en `public/qr/montenegro-vip-smart-link.svg` y `public/qr/montenegro-vip-smart-link.png`. La ruta anterior `/club` solo se conserva como una redirección compatible hacia `/vip`.

### Contacto y conversión

- Accesos a teléfono, correo, dirección y Google Maps.
- CTAs con mensajes de WhatsApp predefinidos.
- Formulario de contacto enviado mediante Formspree.
- Newsletter enviado mediante un formulario independiente de Formspree.
- Estados de envío, confirmación y error sin recargar la página.
- Campos trampa contra bots y aceptación de privacidad obligatoria.
- El mapa de Google solo se carga después de autorizar contenido externo.
- Botón flotante de WhatsApp en las páginas principales.

Los endpoints están centralizados en:

```text
src/data/forms.ts
```

Formspree permite que ambos formularios lleguen al correo configurado sin mantener un backend propio. La dirección receptora debe verificarse y administrarse desde la cuenta propietaria de cada formulario.

## Rutas

| Ruta | Página | Propósito |
| --- | --- | --- |
| `/` | Home | Presentación general de la marca |
| `/esencia` | Esencia | Historia, fundadora, valores y legado |
| `/origen` | Origen | Sabiduría ancestral y pilares de la marca |
| `/oasis` | Oasis | Rituales, purificación y masajes |
| `/tez` | Tez | Estética facial, corporal y rejuvenecimiento |
| `/hebra` | Hebra | Peluquería, salud y cuidado capilar |
| `/tacto` | Tacto | Manos, pies y uñas |
| `/filo` | Filo | Depilación, cejas y pestañas |
| `/brote` | Brote | Bienestar y spa infantil |
| `/raiz` | Raíz | Tecnología estética y tratamientos avanzados |
| `/eco` | Eco | Testimonios, resultados y galería |
| `/contacto` | Contacto | Canales de contacto, ubicación y formulario |
| `/vip` | Montenegro VIP | Página tipo *link-in-bio* y destino del Smart Link |
| `/club` | Redirección compatible | Redirige automáticamente hacia `/vip` |
| `/legal/aviso-legal` | Aviso legal | Condiciones de uso del sitio |
| `/legal/privacidad` | Privacidad | Tratamiento de datos personales |
| `/legal/politicas-de-seguridad` | Privacidad | Alias compatible con la navegación existente |
| `/legal/cookies` | Cookies | Información sobre almacenamiento y terceros |

La aplicación usa `BrowserRouter` y carga cada página mediante un bloque JavaScript independiente. En Apache, las rutas conocidas sirven `index.html`, los aliases antiguos se redirigen de forma permanente y las rutas inexistentes conservan un estado HTTP 404 mientras React muestra la página de error de marca.

## Catálogo y precios

La fuente de datos utilizada por la aplicación es:

```text
src/data/servicePricing.ts
```

Este archivo centraliza:

- identificador estable del servicio;
- nombre visible;
- descripción;
- opciones o packs;
- precios;
- bonos;
- agrupaciones como zonas pequeñas, medianas o grandes.

Distribución actual:

| Categoría | Servicios | Opciones tarifarias |
| --- | ---: | ---: |
| Oasis | 13 | 27 |
| Tez | 16 | 43 |
| Filo | 14 | 65 |
| Brote | 10 | 10 |
| Hebra | 11 | 25 |
| Tacto | 9 | 20 |
| Raíz | 11 | 46 |
| **Total** | **84** | **236** |

El Excel es la referencia editorial para comprobar nombres y tarifas, pero **no se carga ni se interpreta en el navegador**. La web utiliza los datos TypeScript ya revisados, lo que evita depender de una hoja de cálculo durante la ejecución.

## Arquitectura

```text
src/
├── app/
│   ├── App.tsx                 # Composición global
│   └── routes.tsx              # Rutas públicas
├── assets/
│   ├── logo/                   # Logotipos y símbolo
│   ├── videos-hero/optimized/  # Vídeos MP4 de portada
│   └── {categoria}/            # Imágenes organizadas por universo
├── components/
│   ├── cards/                  # Tarjetas de servicios y contenidos
│   ├── layout/                 # Header, Footer y PageShell
│   └── ui/                     # Botones, modal, acordeón y utilidades visuales
├── data/                       # Textos, navegación, servicios y precios
├── pages/
│   └── {Pagina}/
│       ├── {Pagina}Page.tsx    # Ensamblaje de la página
│       └── sections/           # Secciones autónomas
├── styles/                     # Tokens, tipografía y utilidades globales
├── types/                      # Tipos compartidos
├── utils/                      # Formateo y lógica auxiliar
└── main.tsx                    # Punto de entrada
```

### Flujo de datos de un servicio

```text
servicePricing.ts
        ↓
data/{categoria}.ts
        ↓
tarjeta de la categoría
        ↓
ServiceModal.tsx
        ↓
reserva, compartir y recomendación
```

`serviceCatalog.ts` reúne servicios de todas las categorías para generar recomendaciones y resolver su imagen, ruta y metadatos.

`useServiceModalState.ts` sincroniza la apertura del modal con el parámetro `?service=` sin perder la posibilidad de abrirlo desde una tarjeta.

## Instalación y ejecución

### Requisitos

- Node.js `^20.19.0`, `^22.13.0` o `>=24`.
- npm.

La versión utilizada durante el desarrollo actual es Node.js 22.

### Instalación

```bash
git clone <URL_DEL_REPOSITORIO>
cd montenegro-landing
npm ci
```

Si no se dispone de un `package-lock.json` compatible:

```bash
npm install
```

### Desarrollo local

```bash
npm run dev
```

Vite mostrará la URL local, normalmente `http://localhost:5173`.

### Compilación de producción

```bash
npm run build
```

El resultado se genera en `dist/`.

### Previsualización del build

```bash
npm run preview
```

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia Vite en modo desarrollo |
| `npm run build` | Ejecuta TypeScript y genera el build de producción |
| `npm run lint` | Analiza el proyecto con ESLint |
| `npm run preview` | Sirve localmente el contenido compilado |

Actualmente no existe una suite automatizada de pruebas unitarias o E2E.

## Configuración

### Variables de entorno

El proyecto no necesita variables de entorno para ejecutarse en su estado actual. Los enlaces públicos y mensajes están centralizados en archivos de datos.

No deben incorporarse claves privadas, tokens o credenciales directamente al repositorio. Si se añade una API o backend, deberá utilizarse un archivo `.env.local` ignorado por Git y variables con prefijo `VITE_` únicamente para datos públicos del cliente.

### Navegación

Los menús se administran desde:

```text
src/data/navigation.ts
src/data/footer.ts
```

Al agregar una ruta también debe registrarse en `src/app/routes.tsx` y, si corresponde, en la navegación del header o footer.

### Montenegro VIP y enlaces externos

La configuración de Montenegro VIP se encuentra en:

```text
src/pages/Vip/vipConfig.ts
```

Allí se administran:

- teléfono de WhatsApp;
- reseñas de Google;
- web oficial;
- Instagram, TikTok y Facebook;
- mensajes predefinidos;
- URL y estado de activación del sorteo.

La URL definitiva del sorteo ya está guardada. Para activar el botón **Sorteo: Lipo Sin Cirugía** cuando comience la campaña, cambiar únicamente `isActive` a `true`:

```ts
export const VIP_CAMPAIGNS = {
  lipoSweepstakes: {
    href: 'https://docs.google.com/forms/d/e/.../viewform',
    isActive: true,
  },
}
```

El botón se convertirá automáticamente en un enlace externo y se abrirá en una pestaña nueva.

### Contacto

Los datos de contacto, ubicación, mapa y CTA principal están en:

```text
src/data/contacto.ts
```

Los enlaces sociales generales se encuentran en `src/data/footer.ts`.

## Actualización de servicios y precios

El archivo de referencia actual es:

```text
PRECIOS SERVICIOS MONTENEGRO (1).xlsx
```

Procedimiento recomendado:

1. Revisar en el Excel las categorías, nombres, packs, precios y bonos.
2. Actualizar `src/data/servicePricing.ts` conservando exactamente los nombres visibles aprobados.
3. Mantener un `id` único y estable en formato *slug* para cada servicio.
4. No duplicar servicios aunque aparezcan repetidos accidentalmente en la hoja de cálculo.
5. Asignar una imagen al servicio en el archivo de datos de su categoría.
6. Actualizar el mapa de imágenes de su tarjeta y `src/data/serviceCatalog.ts` cuando se incorpore una clave nueva.
7. En Filo, actualizar el mapa explícito de `src/data/filo.ts`; este mapa evita que las imágenes se desplacen cuando cambia el orden de los servicios.
8. Ejecutar lint y build.
9. Revisar visualmente tarjetas y modales en móvil y escritorio.

Formato base de un servicio:

```ts
{
  id: 'nombre-del-servicio',
  title: 'Nombre del Servicio',
  description: 'Descripción aprobada.',
  options: [
    {
      name: 'Sesión individual',
      price: '50 €',
      group: 'Grupo opcional',
      bonus: 'Bono opcional',
    },
  ],
}
```

No introducir importes inventados. Si un dato todavía no ha sido facilitado, utilizar `Consultar` de forma temporal y documentar el pendiente.

## Gestión de imágenes y vídeos

- Los assets se guardan por categoría en `src/assets/{categoria}/`.
- Los nombres nuevos deben utilizar `kebab-case`.
- Priorizar WebP para fotografías y posters.
- Usar MP4 optimizado para los heroes.
- Mantener una imagen poster para cada vídeo.
- Evitar incorporar PNG de varios megabytes cuando un WebP optimizado ofrece la misma calidad visible.
- Las imágenes informativas deben tener un `alt` descriptivo.
- Las imágenes decorativas deben utilizar `alt=""`.

Filo utiliza imágenes individuales para sus servicios de cejas y pestañas, además de una asignación explícita por identificador para evitar repeticiones accidentales.

## Diseño y estilos

Los estilos globales se cargan desde `src/styles/globals.css`, que importa Tailwind CSS v4, tipografía y utilidades propias.

### Tipografías

- Títulos: Cormorant Garamond.
- Textos: Inter.

Las fuentes se sirven localmente desde `@fontsource-variable` y se limita la compilación a los subconjuntos latinos necesarios. No se realizan solicitudes a Google Fonts.

La escala responsive está centralizada en `src/styles/typography.css`. Cada texto debe utilizar una categoría semántica en lugar de declarar un tamaño arbitrario dentro de la página:

| Categoría | Clase | Uso |
| --- | --- | --- |
| Display | `type-display` | Títulos principales de página y hero |
| Título de sección | `type-section-title` | Encabezados principales de cada sección |
| Título destacado | `type-feature-title` | Bloques editoriales y CTA destacados |
| Título de tarjeta | `type-card-title` | Tarjetas amplias y servicios |
| Título compacto | `type-card-title-compact` | Tarjetas pequeñas, modales y Montenegro VIP |
| Texto principal | `type-lead` | Introducciones y descripciones destacadas |
| Párrafo | `type-body` | Contenido general |
| Párrafo auxiliar | `type-body-sm` | Tarjetas, formularios y elementos compactos |
| Etiqueta | `type-eyebrow` | Categorías y antetítulos en mayúsculas |
| Texto auxiliar | `type-caption` | Notas, ayudas y metadatos |
| Acción | `type-action` | Botones y navegación |
| Cita | `type-quote` | Testimonios y frases destacadas |
| Precio | `type-price` | Tarifas y duraciones destacadas |

`SectionTitle` expone las variantes `display`, `section`, `feature`, `card` y `cardCompact`. Los componentes `SectionLabel` y `Button` ya aplican automáticamente las categorías de etiqueta y acción. Al crear una sección nueva se deben reutilizar estas categorías y evitar clases locales como `text-[…rem]` para contenido textual.

### Tokens principales

```css
--color-forest: #2f4d3c;
--color-forest-dark: #243d31;
--color-forest-deep: #1f352b;
--color-sage: #87947b;
--color-cream: #e8ddca;
--color-cream-light: #f1e8d9;
--color-pink: #c20b72;
--color-pink-soft: #f1c6da;
```

Los colores, sombras, radios, overlays y tipografías están disponibles como variables CSS y tokens de Tailwind. Se debe evitar introducir valores nuevos sin revisar primero el sistema existente.

## Accesibilidad y responsive

La interfaz contempla:

- navegación mediante teclado;
- estados de foco visibles;
- etiquetas ARIA en modales, menús y botones con iconos;
- cierre de modales con `Escape`;
- bloqueo del scroll del documento mientras un modal está abierto;
- textos alternativos en imágenes;
- adaptación desde móvil hasta escritorio;
- prevención del scroll horizontal;
- soporte para `prefers-reduced-motion` en vídeos y animaciones;
- controles expandibles con `aria-expanded` y `aria-controls`.

Antes de publicar cambios visuales, revisar como mínimo anchos cercanos a 360 px, 768 px, 1024 px y 1280 px.

## SEO, cookies y páginas legales

`index.html` contiene los valores generales de respaldo para:

- idioma español;
- descripción general;
- color del navegador;
- Open Graph;
- Twitter Card;
- imagen social de 1200 × 630;
- favicon.

`src/components/ui/SeoManager.tsx` y `src/data/seo.ts` actualizan por ruta:

- título y descripción;
- URL canonical;
- directiva de indexación;
- Open Graph;
- Twitter Card.

Las rutas inexistentes usan `noindex, follow`. `public/robots.txt` y `public/sitemap.xml` publican únicamente las rutas canónicas; `/club` y el alias antiguo de privacidad no se incluyen en el sitemap.

El consentimiento guarda la elección en una cookie propia bajo el nombre:

```text
montenegro_cookie_consent
```

La categoría necesaria conserva la preferencia durante 182 días. La categoría `functionality` controla Google Maps, que no se inserta en el documento antes del consentimiento. El enlace “Configurar cookies” del footer permite modificar la decisión.

Actualmente no hay scripts de analítica o publicidad. Si se incorporan, deben cargarse únicamente después del consentimiento correspondiente y deberán actualizarse el banner y las políticas legales.

Los textos legales se centralizan en `src/data/legal.ts`.

La razón social y el NIF/CIF permanecen marcados como pendientes de confirmación. Deben completarse antes de la publicación jurídica definitiva.

## Despliegue

### Apache o cPanel

1. Instalar dependencias.
2. Ejecutar:

```bash
npm run build
```

3. Subir el contenido de `dist/` al directorio público del dominio.
4. Confirmar que también se haya subido `dist/.htaccess`.
5. Verificar directamente rutas como `/filo`, `/vip` y `/legal/cookies`.

`public/.htaccess` contiene:

- reescritura de rutas conocidas para React Router;
- redirecciones 301 de aliases antiguos;
- respuesta 404 para rutas inexistentes;
- compresión de recursos de texto;
- caché prolongada para assets versionados;
- cabeceras básicas de seguridad y privacidad.

Vite lo copia automáticamente al build.

### Otros proveedores

En Vercel, Netlify, Cloudflare Pages o servicios similares se debe configurar:

- comando de build: `npm run build`;
- directorio de salida: `dist`;
- fallback SPA: todas las rutas de aplicación deben servir `index.html`.

No es necesario desplegar el Excel para que la web funcione.

## Validación y mantenimiento

Antes de entregar o desplegar:

```bash
npm run lint
npm run build
npm audit
```

Checklist recomendado:

- comprobar que no haya errores TypeScript o ESLint;
- revisar navegación y rutas directas;
- abrir y cerrar modales desde tarjetas y URLs compartidas;
- validar todos los precios, packs y bonos modificados;
- probar CTAs de WhatsApp;
- comprobar enlaces sociales y Google Maps;
- revisar vídeos y posters;
- confirmar que no exista scroll horizontal;
- revisar Montenegro VIP en móvil;
- verificar el banner de cookies y las páginas legales;
- revisar metadatos e imagen social en producción.
- confirmar la recepción real del formulario y newsletter en Formspree;
- comprobar que el servidor devuelve 301 en aliases y 404 en rutas inexistentes;
- completar razón social y NIF/CIF antes de la publicación legal definitiva.

## Limitaciones actuales

- La razón social y el NIF/CIF todavía no han sido facilitados y permanecen señalados en `src/data/legal.ts`.
- El botón **Sorteo: Lipo Sin Cirugía** ya tiene la URL definitiva, pero permanece desactivado mediante configuración hasta que comience la campaña.
- No hay pruebas unitarias, de integración o E2E automatizadas.
- No existe integración automática entre el Excel y `servicePricing.ts`; la sincronización debe revisarse antes de publicar.
- La entrega de formularios depende de la disponibilidad y configuración de los dos formularios de Formspree.

El bundle está dividido por rutas. Los modales y Cookie Consent también se cargan de forma diferida, y el build actual no genera advertencias por tamaño de JavaScript.

## Propiedad y uso

Este es un proyecto privado de Montenegro Salud y Belleza. El repositorio no incluye una licencia de código abierto; su código, contenido, identidad visual y recursos no deben redistribuirse sin autorización.

---

Desarrollado para **Montenegro Salud y Belleza**.
