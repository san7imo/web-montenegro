import { buildCategoryServiceItems } from './servicePricing'

export const tezHeroContent = {
  titleLines: ['Tez:', 'La Ciencia del', 'Rejuvenecimiento.'],
  description:
    'Tecnología de alta precisión para despertar la juventud de tu piel. Resultados visibles, sin cirugía y con el máximo confort.',
  bodyDescription:
    'En Tez, no solo cuidamos tu piel; la transformamos. Hemos incorporado la tecnología de radiofrecuencia más avanzada del mercado, diseñada para estimular la producción natural de colágeno y elastina desde las capas más profundas. Gracias a su sistema de refrigeración inteligente al 100%, garantizamos un tratamiento indoloro, seguro y altamente eficaz.',
} as const

export const tezCatalogContent = {
  sections: [
    {
      id: 'servicios',
      title: 'Servicios',
      description:
        'Protocolos faciales, corporales y de estética avanzada organizados con sus opciones y tarifas actualizadas.',
      items: buildCategoryServiceItems('tez', [
        'tratamientoVarices',
        'limpiezaFacial',
        'tratamientoVarices',
        'gimnasiaPasiva',
        'limpiezaFacial',
        'packLipo',
        'maderoterapia',
        'maderoterapia',
        'metaloterapia',
        'rejuvenecimientoVaginal',
        'radiofrecuenciaGeneralCorporal',
        'radiofrecuenciaGeneral',
        'rejuvenecimientoVaginal',
        'hydrafacialPiel',
        'hydrafacialPiel',
        'hydrafacialPiel',
      ] as const),
    },
  ],
  ctaLabel: 'Reservar Cita',
  ctaHref: '/contacto',
} as const
