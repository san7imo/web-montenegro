import { buildMappedCategoryServiceItems } from './servicePricing'

export const broteHeroContent = {
  titleLines: ['Brote:', 'Primeros Pasos en el Spa.'],
  description: 'Pequeños brotes, grandes momentos de calma y diversión.',
  bodyDescription:
    'Porque el bienestar no tiene edad. En Brote, cuidamos de los más pequeños de la casa con rituales diseñados exclusivamente para su delicadeza. Un espacio mágico donde la diversión se encuentra con la relajación, permitiéndoles florecer, conectar con sus sentidos y celebrar la vida de una manera sana, divertida y sofisticada.',
} as const

export const broteExperiencesContent = {
  title: 'Mimos & Bienestar',
  items: buildMappedCategoryServiceItems('brote', {
    'bolsa-de-regalo': 'bolsaRegalo',
    'tina-magica-infantil': 'tinaMagica',
    'envoltura-corporal': 'envoltura',
    'mini-spa-party': 'miniSpaParty',
    'manicura-y-pedicura-infantil': 'manicuraPedicura',
    'masaje-corporal-infantil': 'masajeCorporal',
    'merienda-saludable-infantil': 'meriendaSaludable',
    'mini-hair-spa-infantil': 'miniHairSpa',
    'mini-spa-facial-infantil': 'spaFacial',
    'peinados-infantil': 'peinados',
  } as const),
  ctaLabel: 'RESERVA TU CITA',
  ctaHref: '/contacto',
} as const
