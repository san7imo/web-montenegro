export const siteUrl = 'https://www.montenegrosaludybelleza.com'
export const siteName = 'Montenegro Salud y Belleza'

export type SeoMetadata = {
  title: string
  description: string
  canonicalPath?: string
  noindex?: boolean
}

export const seoByPath: Record<string, SeoMetadata> = {
  '/': {
    title: 'Montenegro Salud y Belleza | Bienestar en Vitoria-Gasteiz',
    description:
      'Rituales de bienestar, estética avanzada y experiencias sensoriales en Vitoria-Gasteiz inspiradas en la naturaleza y la ciencia cosmética.',
  },
  '/esencia': {
    title: 'Nuestra esencia | Montenegro Salud y Belleza',
    description:
      'Conoce la visión, la historia y los valores que dan forma a Montenegro Salud y Belleza y a su manera de acompañar el bienestar integral.',
  },
  '/origen': {
    title: 'Nuestro origen | Montenegro Salud y Belleza',
    description:
      'Descubre la sabiduría ancestral, la conexión con la naturaleza y los pilares que inspiran los rituales de Montenegro Salud y Belleza.',
  },
  '/servicios': {
    title: 'Servicios de bienestar y belleza | Montenegro',
    description:
      'Explora todas las categorías de servicios Montenegro: rituales, estética facial y corporal, cuidado capilar, uñas, mirada y bienestar infantil.',
  },
  '/oasis': {
    title: 'Oasis: rituales de purificación | Montenegro',
    description:
      'Experiencias de purificación, baños medicinales y rituales sensoriales para liberar tensiones y recuperar el equilibrio del cuerpo y la mente.',
  },
  '/tacto': {
    title: 'Tacto: manos, pies y uñas | Montenegro',
    description:
      'Manicura, pedicura, cuidado de uñas y rituales de spa para manos y pies con atención estética precisa y nutrición botánica.',
  },
  '/raiz': {
    title: 'Raíz: estética corporal avanzada | Montenegro',
    description:
      'Tratamientos corporales y tecnología estética para modelar, tonificar y cuidar el cuerpo mediante protocolos personalizados.',
  },
  '/brote': {
    title: 'Brote: spa y bienestar infantil | Montenegro',
    description:
      'Experiencias de spa infantil, celebraciones y rituales de bienestar diseñados para que los más pequeños disfruten y se relajen.',
  },
  '/filo': {
    title: 'Filo: depilación, cejas y pestañas | Montenegro',
    description:
      'Servicios de depilación láser e IPL, diseño de cejas, pestañas y micropigmentación adaptados a cada mirada y tipo de piel.',
  },
  '/hebra': {
    title: 'Hebra: peluquería y salud capilar | Montenegro',
    description:
      'Peluquería, coloración y rituales de salud capilar que cuidan el cuero cabelludo y transforman la fibra desde el interior.',
  },
  '/tez': {
    title: 'Tez: estética facial y corporal | Montenegro',
    description:
      'Tecnología estética avanzada y protocolos faciales y corporales para cuidar la piel, estimular el colágeno y mejorar su apariencia.',
  },
  '/eco': {
    title: 'Eco: experiencias y testimonios | Montenegro',
    description:
      'Conoce experiencias de quienes han vivido los rituales Montenegro y descubre cómo el bienestar continúa más allá de cada visita.',
  },
  '/contacto': {
    title: 'Contacto y ubicación | Montenegro Salud y Belleza',
    description:
      'Contacta con Montenegro Salud y Belleza, consulta horarios, encuentra nuestro centro en Vitoria-Gasteiz o envíanos tu solicitud desde la web.',
  },
  '/vip': {
    title: 'Montenegro VIP | Montenegro Salud y Belleza',
    description:
      'Accede a Montenegro VIP, activa beneficios exclusivos, reserva tu próxima cita, comparte tu experiencia y descubre tratamientos premium.',
  },
  '/club': {
    title: 'Montenegro VIP | Montenegro Salud y Belleza',
    description: 'Acceso compatible a Montenegro VIP.',
    canonicalPath: '/vip',
    noindex: true,
  },
  '/legal/aviso-legal': {
    title: 'Aviso legal | Montenegro Salud y Belleza',
    description: 'Información legal y condiciones de uso de la web de Montenegro Salud y Belleza.',
  },
  '/legal/privacidad': {
    title: 'Política de privacidad | Montenegro Salud y Belleza',
    description: 'Información sobre el tratamiento y protección de datos personales en Montenegro Salud y Belleza.',
  },
  '/legal/politicas-de-seguridad': {
    title: 'Política de privacidad | Montenegro Salud y Belleza',
    description: 'Información sobre el tratamiento y protección de datos personales en Montenegro Salud y Belleza.',
    canonicalPath: '/legal/privacidad',
    noindex: true,
  },
  '/legal/cookies': {
    title: 'Política de cookies | Montenegro Salud y Belleza',
    description: 'Información y configuración del uso de cookies y contenido externo en la web de Montenegro Salud y Belleza.',
  },
}

export const notFoundSeo: SeoMetadata = {
  title: 'Página no encontrada | Montenegro Salud y Belleza',
  description: 'La página solicitada no existe o ha cambiado de ubicación.',
  noindex: true,
}

export function normalizePathname(pathname: string) {
  if (pathname === '/') return pathname
  return pathname.replace(/\/+$/, '') || '/'
}

export function getSeoMetadata(pathname: string) {
  const normalizedPath = normalizePathname(pathname)
  return {
    path: normalizedPath,
    metadata: seoByPath[normalizedPath] ?? notFoundSeo,
  }
}

