import { buildMappedCategoryServiceItems } from './servicePricing'

export const raizHeroContent = {
  titleLines: ['Raíz:', 'El Fundamento de tu Bienestar.'],
  description:
    'Conocimiento, ciencia y consejos ancestrales. Porque entender tu cuerpo es el primer paso para transformarlo.',
  bodyDescription:
    'Un tratamiento sin conocimiento es solo un resultado temporal. En Raíz, profundizamos en el porqué de cada ritual. Compartimos contigo la base científica de nuestra tecnología avanzada y la herencia botánica que sustenta nuestros consejos del Amazonas. Aquí es donde la curiosidad se convierte en salud.',
} as const

export const raizTechnologyContent = {
  label: 'Servicios Montenegro',
  title: 'Conoce nuestros servicios',
  items: buildMappedCategoryServiceItems('raiz', {
    criopolosis: 'criolipolisis',
    dermapen: 'dermapen',
    presoterapia: 'presoterapia',
    cavitacion: 'cavitacion',
    asiatica: 'asiatica',
    multifuncional: 'multifuncional',
    'radiofrecuencia-normal': 'radiofrecuencia',
    'radiofrecuencia-fracionada': 'radiofrecuenciaFraccionada',
    vacuum: 'vacuum',
    'laser-luminage': 'laserLuminage',
    'hollywood-pelling': 'hollywoodPeeling',
  } as const),
} as const
