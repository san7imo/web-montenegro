import { buildCategoryServiceItems } from './servicePricing'

export const hebraHeroContent = {
  titleLines: ['Hebra:', 'El Arte del Cuidado Capilar.'],
  description:
    'Diseño, color y salud para un cabello armonioso. Cada hebra como una pieza única para potenciar tu imagen.',
  bodyDescription:
    'En Hebra, entendemos que un cabello espectacular nace de un cuero cabelludo sano. Por eso, fusionamos la alta peluquería con rituales de nutrición profunda. No buscamos cambios efímeros, sino transformar la salud de tu fibra capilar desde el interior, utilizando productos que respetan tu biología y potencian tu brillo natural.',
} as const

export const hebraAtelierContent = {
  label: '¿Por qué elegirnos?',
  titleLines: ['Especialidades', 'del Atelier'],
  items: [
    {
      eyebrow: 'Arquitectura del corte',
      text: 'Diseños personalizados que se adaptan a tus facciones y a tu ritmo de vida.',
    },
    {
      eyebrow: 'Alquimia del color',
      text: 'Coloraciones orgánicas y técnicas de iluminación (balayage, babylights) que protegen la integridad de la hebra.',
    },
    {
      eyebrow: 'Terapias de rescate',
      text: 'Tratamientos de hidratación y reconstrucción intensiva para melenas castigadas.',
    },
    {
      eyebrow: 'Estilismo de eventos',
      text: 'Este es sin duda alguna el toque final para tus momentos más especiales.',
    },
  ],
} as const

export const hebraExperiencesContent = {
  titleLines: ['Experiencias de', 'Hebra'],
  items: buildCategoryServiceItems('hebra', [
    'cepillado',
    'coctelAnticaida',
    'corteCaballero',
    'corteDama',
    'extensiones',
    'spaHairAsiatico',
    'iluminaciones',
    'keratina',
    'mechas',
    'planchado',
    'tintes',
  ] as const),
  ctaLabel: 'RESERVA TU CITA',
  ctaHref: '/contacto',
} as const
