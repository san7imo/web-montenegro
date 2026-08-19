import type { PagePlaceholderContent } from '../types/common'
import { buildWhatsAppContactUrl } from '../utils/whatsapp'

export const homePageContent: PagePlaceholderContent = {
  label: 'Home Hero',
  title: 'Sumérgete en el lujo, tu refugio de bienestar y belleza.',
  description:
    'Montenegro es el santuario donde la sabiduría ancestral, el lujo sensorial y la vanguardia de alta cosmética convergen para renovar tu ser integral.',
  ctaHref: buildWhatsAppContactUrl(
    'Hola, quiero reservar una cita en Montenegro Salud y Belleza. ¿Me puedes confirmar disponibilidad?',
  ),
  ctaLabel: 'RESERVA TU CITA',
}

export const homeHeroTitleLines = [
  'Sumérgete en el lujo,',
  'tu refugio de bienestar y belleza.',
] as const

export const homeIntroContent = {
  label: 'Respira relajación',
  title: 'Despierta tu calma interior.',
  titleLines: ['Despierta tu', 'calma interior.'],
  description:
    'En Montenegro, tu bienestar no es un lujo, es nuestra prioridad. Guiados por el legado botánico de Olga Lucia Montenegro y potenciados por la tecnología estética más avanzada, creamos rituales que fusionan el éxtasis sensorial con resultados visibles. Somos el equilibrio perfecto entre la sanación de la Tierra y la precisión de la Ciencia.',
  ctaHref: '/esencia',
  ctaLabel: 'NUESTRA ESENCIA',
} as const

export const homeServicesHighlightContent = {
  label: 'Servicios destacados',
  title: 'Especializados en brindar la experiencia ideal',
  titleLines: ['Especializados en brindar la', 'experiencia ideal'],
  ctaHref: '/servicios',
  ctaLabel: 'SERVICIOS',
} as const
