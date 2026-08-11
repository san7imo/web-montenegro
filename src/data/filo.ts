import { buildMappedCategoryServiceItems } from './servicePricing'

export const filoHeroContent = {
  title: 'Filo: Depilación y Diseño',
  description:
    'Redefinimos tus rasgos y liberamos tu piel. Depilación avanzada y diseño de mirada con la exactitud que tu cuerpo merece.',
  bodyDescription:
    'En Filo, entendemos que cada vello tiene su razón de ser y cada rostro su arquitectura única. No solo depilamos; esculpimos. Utilizamos tecnología de última generación como la Sapphire Ls-1200 para una depilación definitiva indolora y técnicas artesanales para el diseño de cejas, garantizando resultados que realzan tu belleza natural sin irritaciones.',
} as const

export const filoExperiencesContent = {
  title: 'Experiencias de Filo',
  items: buildMappedCategoryServiceItems('filo', {
    'depilacion-con-cera': 'depilacionCera',
    'depilacion-laser': 'laserDiodo',
    'depilacion-ipl': 'depilacionIpl',
    'depilacion-de-cejas-con-cera': 'depilacionCejasCera',
    'depilacion-de-cejas-con-henna': 'cejasHenna',
    'laminado-de-cejas': 'laminadoCejas',
    'micropigmentacion-de-cejas': 'micropigmentacionCejas',
    'eliminacion-de-micropigmentacion-en-cejas': 'eliminacionMicropigmentacionCejas',
    'microblading-de-cejas': 'microbladingCejas',
    'extensiones-de-pestanas-clasicas': 'extensionesPestanas',
    'extensiones-efecto-ojo-de-gato': 'pestanasOjoGato',
    'extensiones-efecto-volumen-ruso': 'pestanasVolumenRuso',
    'extensiones-de-pestanas-efecto-wispy': 'pestanasWispy',
    'lifting-de-pestanas': 'liftingPestanas',
  } as const),
  ctaLabel: 'RESERVA TU CITA',
  ctaHref: '/contacto',
} as const

export const filoClosingContent = {
  description:
    'Complementamos nuestra técnica profesional con óleos y extractos botánicos inspirados en el Origen. Porque la naturaleza tiene todas las respuestas para un cabello fuerte y vital.',
} as const
