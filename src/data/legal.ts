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

export const legalPages: Record<LegalPageContent['slug'], LegalPageContent> = {
  'aviso-legal': {
    slug: 'aviso-legal',
    eyebrow: 'Información legal',
    title: 'Aviso legal',
    intro:
      'Este aviso regula el acceso y uso de la web de Montenegro Salud y Belleza. El contenido se ofrece con finalidad informativa y puede actualizarse para reflejar cambios del servicio o de la normativa aplicable.',
    updatedAt: 'Última actualización: junio de 2026',
    sections: [
      {
        title: 'Titularidad del sitio',
        paragraphs: [
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
    updatedAt: 'Última actualización: junio de 2026',
    sections: [
      {
        title: 'Responsable del tratamiento',
        paragraphs: [
          'El responsable del tratamiento es Montenegro Salud y Belleza, con dirección en Badaia Kalea, 33, 01012 Vitoria-Gasteiz, Araba, España.',
          'Correo de contacto: montenegrosaludybelleza@gmail.com.',
        ],
      },
      {
        title: 'Datos que podemos tratar',
        items: [
          'Datos identificativos y de contacto: nombre, apellidos, teléfono, correo electrónico y mensaje enviado.',
          'Datos derivados de solicitudes de cita, consultas comerciales o comunicaciones realizadas por WhatsApp, correo o formulario.',
          'Datos técnicos mínimos necesarios para el funcionamiento de la web y para recordar tus preferencias de cookies.',
        ],
      },
      {
        title: 'Finalidades',
        items: [
          'Responder solicitudes de información, citas o consultas.',
          'Gestionar comunicaciones relacionadas con servicios contratados o solicitados.',
          'Enviar novedades o promociones solo cuando exista una solicitud o consentimiento válido.',
          'Mantener la seguridad, funcionamiento y mejora de la web.',
        ],
      },
      {
        title: 'Base jurídica y conservación',
        paragraphs: [
          'El tratamiento puede basarse en el consentimiento de la persona usuaria, en la ejecución de medidas precontractuales o contractuales, y en el interés legítimo para mantener la seguridad y gestión ordinaria de la web.',
          'Los datos se conservarán durante el tiempo necesario para atender la solicitud y cumplir posibles obligaciones legales. Cuando dejen de ser necesarios, se bloquearán o eliminarán conforme a la normativa aplicable.',
        ],
      },
      {
        title: 'Derechos de las personas usuarias',
        paragraphs: [
          'Puedes solicitar el acceso, rectificación, supresión, oposición, limitación del tratamiento, portabilidad y retirada del consentimiento escribiendo a montenegrosaludybelleza@gmail.com.',
          'También puedes presentar una reclamación ante la Agencia Española de Protección de Datos si consideras que el tratamiento no se ajusta a la normativa.',
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
    updatedAt: 'Última actualización: junio de 2026',
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
          'Preferencia de cookies: se guarda localmente la decisión de aceptar o rechazar el aviso para no mostrarlo de nuevo en cada visita.',
          'Cookies técnicas: pueden utilizarse para navegación, seguridad o funcionamiento básico.',
          'Servicios de terceros: elementos externos como Google Maps, redes sociales o enlaces de mensajería pueden aplicar sus propias políticas al interactuar con ellos.',
        ],
      },
      {
        title: 'Cómo gestionar tus preferencias',
        paragraphs: [
          'Puedes aceptar o rechazar las cookies desde el aviso inicial. También puedes eliminar cookies o bloquearlas desde la configuración de tu navegador.',
          'Si en el futuro se incorporan cookies analíticas, publicitarias o de personalización no necesarias, se solicitará consentimiento previo antes de activarlas.',
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
