import { buildCategoryServiceItems } from './servicePricing'

export const tactoHeroContent = {
  titleLines: ['Tacto:', 'El Bienestar en tus uñas.'],
  description:
    'Mucho más que una manicura. Un ritual sensorial para reconectar con tus sentidos a través de tus pies y manos.',
  bodyDescription:
    'En Tacto, creemos que las manos son nuestra carta de presentación y los pies el soporte de nuestra vida. Por eso, hemos transformado el servicio convencional en una experiencia de spa profunda. Fusionamos la estética de alta precisión con masajes relajantes y nutrición botánica, devolviendo la suavidad y la salud a tu piel y uñas.',
} as const

export const tactoMenuContent = {
  titleLines: ['Menú de', 'Experiencias'],
  items: buildCategoryServiceItems('tacto', [
    'acrilicas',
    'cortarYLimar',
    'mantenimientoAcrilico',
    'mantenimientoAcrilico',
    'permanente',
    'pressOn',
    'reparaciones',
    'retiros',
    'esmalteTradicional',
  ] as const),
  ctaLabel: 'RESERVA TU CITA',
  ctaHref: '/contacto',
} as const

export const tactoClosingContent = {
  description:
    'Cada servicio en Tacto comienza con una breve inmersión en sales aromáticas, conectando este tratamiento con la energía de nuestro Oasis. Porque cada centímetro de tu cuerpo merece ser purificado.',
} as const
