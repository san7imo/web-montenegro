import { buildCategoryServiceItems } from './servicePricing'

export const oasisHeroContent = {
  titleLines: ['Oasis:', 'Tu Ritual de Purificación.'],
  description:
    'El primer paso hacia la transformación. Limpia el ruido exterior, libera toxinas y prepara tu cuerpo para renacer.',
  bodyDescription:
    'En Montenegro, creemos que no se puede construir belleza sobre un cuerpo saturado. Oasis es nuestra estación de parada obligatoria. Inspirados en los baños medicinales del Amazonas, hemos creado un entorno de hidroterapia y detoxificación que resetea tu organismo. Aquí, el agua no solo hidrata; cura y purifica.',
} as const

export const oasisPurificationExperiencesContent = {
  titleLines: ['Experiencias de', 'Purificación'],
  items: buildCategoryServiceItems('oasis', [
    'ritualesEnTina',
    'exfoliacion',
    'drenajeLinfatico',
    'masajeRelajante',
    'ventosas',
    'ritualesEnTina',
    'exfoliacion',
    'ritualesEnTina',
    'masajeRelajante',
    'exfoliacion',
    'ritualesEnTina',
    'descontracturante',
    'ritualesEnTina',
  ] as const),
  ctaLabel: 'RESERVA TU CITA',
  ctaHref: '/contacto',
} as const

export const oasisBenefitsContent = {
  label: '¿Por qué hacerlo?',
  title: 'El Beneficio Oasis',
  items: [
    {
      id: 'desintoxicacion-profunda',
      label: 'Desintoxicación profunda:',
      text: 'Elimina metales pesados y retención de líquidos.',
    },
    {
      id: 'paz-mental',
      label: 'Paz Mental:',
      text: 'Reduce los niveles de cortisol',
    },
    {
      id: 'maximizacion-resultados',
      label: 'Maximización de resultados:',
      text: 'Un cuerpo limpio absorbe un 40% mejor cualquier tratamiento posterior de estética o capilar.',
    },
  ],
  description:
    'La pureza de Oasis es el lienzo perfecto para los tratamientos de avanzada en Tez o el cuidado de tu Hebra.',
  ctaLabel: 'RESERVA TU MOMENTO DE PAZ',
  ctaHref: '/contacto',
} as const
