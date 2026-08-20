export type LegalSection = {
  title: string
  paragraphs?: string[]
  items?: string[]
}

export type LegalPageContent = {
  slug: 'aviso-legal' | 'privacidad' | 'cookies'
  eyebrow: string
  title: string
  intro: string
  updatedAt: string
  sections: LegalSection[]
}

export const pendingLegalIdentity = {
  companyName: '[RAZÓN SOCIAL PENDIENTE DE CONFIRMAR]',
  taxId: '[NIF/CIF PENDIENTE DE CONFIRMAR]',
} as const

export const legalPages: Record<LegalPageContent['slug'], LegalPageContent> = {
  'aviso-legal': {
    slug: 'aviso-legal',
    eyebrow: 'Información legal',
    title: 'Aviso legal',
    intro:
      'Este aviso regula el acceso y uso de la web de Montenegro Salud y Belleza. El contenido se ofrece con finalidad informativa y puede actualizarse para reflejar cambios del servicio o de la normativa aplicable.',
    updatedAt: 'Última actualización: agosto de 2026',
    sections: [
      {
        title: 'Titularidad del sitio',
        paragraphs: [
          `Nombre comercial: Montenegro Salud y Belleza. Razón social: ${pendingLegalIdentity.companyName}. NIF/CIF: ${pendingLegalIdentity.taxId}.`,
          'Montenegro Salud y Belleza presta servicios de bienestar, salud estética y belleza en Badaia Kalea, 33, 01012 Vitoria-Gasteiz, Araba, España.',
          'Para cualquier comunicación relacionada con esta web puedes escribir a montenegrosaludybelleza@gmail.com o utilizar los canales indicados en la página de contacto.',
        ],
      },
      {
        title: 'Uso de la web',
        paragraphs: [
          'La persona usuaria se compromete a utilizar esta web de forma diligente, lícita y respetuosa, evitando cualquier uso que pueda dañar la página, impedir su funcionamiento normal o afectar a terceros.',
          'La información sobre tratamientos, precios, disponibilidad y promociones puede cambiar. La confirmación final de cualquier servicio se realiza siempre por los canales oficiales del centro.',
        ],
      },
      {
        title: 'Propiedad intelectual',
        paragraphs: [
          'Los textos, imágenes, logotipos, composición visual y demás elementos de la web pertenecen a Montenegro Salud y Belleza o se usan con autorización. No se permite su reproducción, distribución o transformación sin permiso previo.',
        ],
      },
      {
        title: 'Responsabilidad',
        paragraphs: [
          'Montenegro Salud y Belleza trabaja para mantener la información actualizada y el sitio disponible, aunque no puede garantizar la ausencia absoluta de errores técnicos, interrupciones o contenidos externos ajenos a su control.',
        ],
      },
    ],
  },
  privacidad: {
    slug: 'privacidad',
    eyebrow: 'Protección de datos',
    title: 'Política de privacidad',
    intro:
      'Esta política explica cómo se tratan los datos personales enviados a través de la web, formularios, WhatsApp, correo electrónico o solicitudes de información.',
    updatedAt: 'Última actualización: agosto de 2026',
    sections: [
      {
        title: 'Responsable del tratamiento',
        paragraphs: [
          `Nombre comercial: Montenegro Salud y Belleza. Razón social: ${pendingLegalIdentity.companyName}. NIF/CIF: ${pendingLegalIdentity.taxId}.`,
          'Dirección: Badaia Kalea, 33, 01012 Vitoria-Gasteiz, Araba, España.',
          'Correo de contacto: montenegrosaludybelleza@gmail.com.',
        ],
      },
      {
        title: 'Datos que podemos tratar',
        items: [
          'Datos identificativos y de contacto: nombre, apellidos, teléfono, correo electrónico y mensaje enviado.',
          'Datos derivados de solicitudes de cita, consultas comerciales o comunicaciones realizadas por WhatsApp, correo o formulario.',
          'En el newsletter se trata el correo electrónico, la confirmación del consentimiento comercial, la fecha y la página desde la que se realizó la suscripción.',
          'Datos técnicos mínimos necesarios para el funcionamiento de la web y para recordar tus preferencias de cookies.',
        ],
      },
      {
        title: 'Finalidades',
        items: [
          'Responder solicitudes de información, citas o consultas.',
          'Gestionar comunicaciones relacionadas con servicios contratados o solicitados.',
          'Enviar novedades, promociones y noticias únicamente cuando la persona haya marcado expresamente la casilla de suscripción al newsletter.',
          'Mantener la seguridad, funcionamiento y mejora de la web.',
        ],
      },
      {
        title: 'Base jurídica y conservación',
        paragraphs: [
          'Las consultas y solicitudes se tratan para atender las medidas precontractuales o contractuales solicitadas por la persona usuaria. El envío del newsletter se basa en el consentimiento expreso, que puede retirarse en cualquier momento. La seguridad y gestión técnica de la web pueden apoyarse en el interés legítimo del responsable.',
          'Los datos de contacto se conservarán durante el tiempo necesario para atender la solicitud y cumplir posibles obligaciones legales. Los datos del newsletter se conservarán hasta que la persona retire su consentimiento o solicite la supresión.',
        ],
      },
      {
        title: 'Proveedores y transferencias internacionales',
        paragraphs: [
          'Los formularios utilizan Formspree como proveedor técnico para recibir, procesar y remitir las solicitudes al correo aura@montenegrosaludybelleza.com. En el plan utilizado, Formspree conserva un historial de envíos durante 30 días.',
          'Formspree opera infraestructura alojada en Estados Unidos y declara utilizar cláusulas contractuales tipo como garantía para el tratamiento internacional de datos. No se ceden datos a otros terceros salvo obligación legal o cuando sea imprescindible para prestar el servicio solicitado.',
        ],
      },
      {
        title: 'Derechos de las personas usuarias',
        paragraphs: [
          'Puedes solicitar el acceso, rectificación, supresión, oposición, limitación del tratamiento, portabilidad y retirada del consentimiento escribiendo a montenegrosaludybelleza@gmail.com.',
          'También puedes presentar una reclamación ante la Agencia Española de Protección de Datos si consideras que el tratamiento no se ajusta a la normativa.',
          'La retirada del consentimiento para el newsletter no afecta a los tratamientos realizados antes de su retirada.',
        ],
      },
    ],
  },
  cookies: {
    slug: 'cookies',
    eyebrow: 'Preferencias de navegación',
    title: 'Política de cookies',
    intro:
      'Esta política explica el uso de cookies y tecnologías similares en la web de Montenegro Salud y Belleza.',
    updatedAt: 'Última actualización: agosto de 2026',
    sections: [
      {
        title: 'Qué son las cookies',
        paragraphs: [
          'Las cookies y tecnologías similares permiten almacenar o recuperar información del dispositivo de la persona usuaria. Pueden ser necesarias para que la web funcione o utilizarse, con consentimiento, para medición, personalización o publicidad.',
        ],
      },
      {
        title: 'Uso actual en esta web',
        items: [
          'Cookie necesaria montenegro_cookie_consent: conserva durante 182 días las categorías aceptadas o rechazadas y la versión de la configuración mostrada.',
          'Contenido externo: Google Maps permanece bloqueado hasta que la persona acepta expresamente la categoría funcional. La dirección y el enlace externo siguen disponibles aunque se rechace.',
          'Las tipografías de la web se alojan localmente y no generan conexiones con Google Fonts.',
          'Los enlaces a redes sociales o mensajería no cargan contenido de esos proveedores hasta que la persona decide abrirlos.',
        ],
      },
      {
        title: 'Cómo gestionar tus preferencias',
        paragraphs: [
          'El aviso inicial permite aceptar, rechazar o configurar las categorías con acciones situadas al mismo nivel. No se activa contenido externo antes de recibir una elección válida.',
          'Puedes cambiar o retirar tu decisión en cualquier momento mediante el botón “Configurar cookies” disponible en el pie de página. También puedes eliminar la cookie desde la configuración de tu navegador.',
          'Si en el futuro se incorporan herramientas analíticas, publicitarias o nuevas finalidades no necesarias, se actualizará la configuración y se solicitará nuevamente el consentimiento cuando corresponda.',
        ],
      },
      {
        title: 'Proveedores externos',
        paragraphs: [
          'Al aceptar contenido externo y cargar el mapa, el navegador se conecta con Google Maps. Google puede tratar datos técnicos como la dirección IP, el dispositivo o información de navegación conforme a sus propias políticas.',
          'Formspree se utiliza para procesar los formularios únicamente cuando la persona pulsa el botón de envío. Su tratamiento de datos se describe en la Política de privacidad.',
        ],
      },
      {
        title: 'Más información',
        paragraphs: [
          'Para dudas sobre esta política puedes escribir a montenegrosaludybelleza@gmail.com.',
        ],
      },
    ],
  },
}
