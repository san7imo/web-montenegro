import broteEnvolturaImage from '../assets/brote/envoltura.png'
import broteManicuraPedicuraImage from '../assets/brote/manicuraypedicura.png'
import broteMasajeCorporalImage from '../assets/brote/masajecorpotal.png'
import broteMiniHairSpaImage from '../assets/brote/minihairspa.png'
import brotePeinadosImage from '../assets/brote/peinados.png'
import broteSpaFacialImage from '../assets/brote/spafacial.png'
import broteTinaMagicaImage from '../assets/brote/tinamagica.png'
import filoCejasHennaImage from '../assets/filo/cejasconhena.png'
import filoDepilacionCeraImage from '../assets/filo/depilacionconcera.png'
import filoDepilacionHiloImage from '../assets/filo/depilacionhilo.png'
import filoDepilacionIplImage from '../assets/filo/depilacionipl.png'
import filoLaserDiodoImage from '../assets/filo/depilacionlaserdiodo.png'
import filoExtensionesPestanasImage from '../assets/filo/extensionesdepestañas.png'
import filoLaminadoCejasImage from '../assets/filo/laminadodecejas.png'
import filoLiftingPestanasImage from '../assets/filo/liftingdepestañas.png'
import hebraCepilladoImage from '../assets/hebra/cepillado.png'
import hebraCoctelAnticaidaImage from '../assets/hebra/coctelanticaida.png'
import hebraCorteCaballeroImage from '../assets/hebra/cortecaballero.png'
import hebraCorteDamaImage from '../assets/hebra/cortedama.png'
import hebraExtensionesImage from '../assets/hebra/extenciones.png'
import hebraIluminacionesImage from '../assets/hebra/iluminaciones.png'
import hebraKeratinaImage from '../assets/hebra/keratina.png'
import hebraMechasImage from '../assets/hebra/mechas.png'
import hebraPlanchadoImage from '../assets/hebra/planchado.png'
import hebraSpaHairAsiaticoImage from '../assets/hebra/spahairasiatico.png'
import hebraTintesImage from '../assets/hebra/tintes.png'
import oasisDescontracturanteImage from '../assets/oasis/descontracturante.png'
import oasisDrenajeLinfaticoImage from '../assets/oasis/drenajelinfatico.png'
import oasisExfoliacionImage from '../assets/oasis/exfoliacion.png'
import oasisMasajeRelajanteImage from '../assets/oasis/masajerelajante.png'
import oasisPresoterapiaImage from '../assets/oasis/presoterapia.png'
import oasisRitualesEnTinaImage from '../assets/oasis/ritualesentina.png'
import oasisVentosasImage from '../assets/oasis/ventosas.png'
import tactoAcrilicasImage from '../assets/tacto/acrilicas.png'
import tactoCortarYLimarImage from '../assets/tacto/cortarylimar.png'
import tactoEsmalteTradicionalImage from '../assets/tacto/esmaltetradicional.png'
import tactoMantenimientoAcrilicoImage from '../assets/tacto/mantenimientoacrilico.png'
import tactoPermanenteImage from '../assets/tacto/permanente.png'
import tactoPressOnImage from '../assets/tacto/press-on.png'
import tactoReparacionesImage from '../assets/tacto/reparaciones.png'
import tactoRetirosImage from '../assets/tacto/retiros.png'
import tactoSemipermanenteImage from '../assets/tacto/semipermanente.png'
import tactoSpaManosPiesImage from '../assets/tacto/spamanosypies.png'
import tezCavitacionImage from '../assets/tez/cavitacion.png'
import tezCriolipolisisImage from '../assets/tez/criolipolisiscontorno.png'
import tezDrenajeLinfaticoImage from '../assets/tez/drenajelinfaticomanual.png'
import tezGimnasiaPasivaImage from '../assets/tez/gimnasiapasiva.png'
import tezHydrafacialPielImage from '../assets/tez/hydrafacialpiel.png'
import tezLimpiezaFacialImage from '../assets/tez/limpiezafacial.png'
import tezMaderoterapiaImage from '../assets/tez/maderoterapia.png'
import tezMetaloterapiaImage from '../assets/tez/metaloterapia.png'
import tezMultifuncionalImage from '../assets/tez/multifuncional.png'
import tezPackLipoImage from '../assets/tez/packliposincirugia.png'
import tezPresoterapiaImage from '../assets/tez/presoterapiacontorno.png'
import tezRadiofrecuenciaCorporalImage from '../assets/tez/radiofrecuenciafraccionadacorporal.png'
import tezRadiofrecuenciaGeneralCorporalImage from '../assets/tez/radifrecuenciageneralcorporal.png'
import tezRadiofrecuenciaGeneralImage from '../assets/tez/ragiofrecuengeneral.png'
import tezRejuvenecimientoVaginalImage from '../assets/tez/rejuevenicmientovaginal.png'
import tezTratamientoVaricesImage from '../assets/tez/tratamientodevarices.png'
import tezVendasFriasImage from '../assets/tez/vendasfrias.png'
import { broteExperiencesContent } from './brote'
import { filoExperiencesContent } from './filo'
import { hebraExperiencesContent } from './hebra'
import { oasisPurificationExperiencesContent } from './oasis'
import { tactoMenuContent } from './tacto'
import { tezCatalogContent } from './tez'

export type ServiceCategory = 'oasis' | 'tacto' | 'brote' | 'filo' | 'hebra' | 'tez'

export type ServiceCatalogItem = {
  category: ServiceCategory
  categoryLabel: string
  description: string
  duration?: string
  id: string
  image: string
  path: string
  price?: string
  title: string
}

const oasisImages = {
  ritualesEnTina: oasisRitualesEnTinaImage,
  exfoliacion: oasisExfoliacionImage,
  drenajeLinfatico: oasisDrenajeLinfaticoImage,
  masajeRelajante: oasisMasajeRelajanteImage,
  presoterapia: oasisPresoterapiaImage,
  ventosas: oasisVentosasImage,
  descontracturante: oasisDescontracturanteImage,
}

const tactoImages = {
  esmalteTradicional: tactoEsmalteTradicionalImage,
  semipermanente: tactoSemipermanenteImage,
  permanente: tactoPermanenteImage,
  cortarYLimar: tactoCortarYLimarImage,
  acrilicas: tactoAcrilicasImage,
  pressOn: tactoPressOnImage,
  spaManosPies: tactoSpaManosPiesImage,
  reparaciones: tactoReparacionesImage,
  retiros: tactoRetirosImage,
  mantenimientoAcrilico: tactoMantenimientoAcrilicoImage,
}

const broteImages = {
  tinaMagica: broteTinaMagicaImage,
  envoltura: broteEnvolturaImage,
  manicuraPedicura: broteManicuraPedicuraImage,
  masajeCorporal: broteMasajeCorporalImage,
  miniHairSpa: broteMiniHairSpaImage,
  spaFacial: broteSpaFacialImage,
  peinados: brotePeinadosImage,
}

const filoImages = {
  depilacionHilo: filoDepilacionHiloImage,
  laminadoCejas: filoLaminadoCejasImage,
  cejasHenna: filoCejasHennaImage,
  extensionesPestanas: filoExtensionesPestanasImage,
  liftingPestanas: filoLiftingPestanasImage,
  laserDiodo: filoLaserDiodoImage,
  depilacionCera: filoDepilacionCeraImage,
  depilacionIpl: filoDepilacionIplImage,
}

const hebraImages = {
  corteDama: hebraCorteDamaImage,
  corteCaballero: hebraCorteCaballeroImage,
  coctelAnticaida: hebraCoctelAnticaidaImage,
  spaHairAsiatico: hebraSpaHairAsiaticoImage,
  keratina: hebraKeratinaImage,
  extensiones: hebraExtensionesImage,
  tintes: hebraTintesImage,
  mechas: hebraMechasImage,
  iluminaciones: hebraIluminacionesImage,
  cepillado: hebraCepilladoImage,
  planchado: hebraPlanchadoImage,
}

const tezImages = {
  hydrafacialPiel: tezHydrafacialPielImage,
  limpiezaFacial: tezLimpiezaFacialImage,
  tratamientoVarices: tezTratamientoVaricesImage,
  radiofrecuenciaFraccionada: tezRadiofrecuenciaCorporalImage,
  radiofrecuenciaGeneral: tezRadiofrecuenciaGeneralImage,
  rejuvenecimientoVaginal: tezRejuvenecimientoVaginalImage,
  packLipo: tezPackLipoImage,
  criolipolisis: tezCriolipolisisImage,
  cavitacion: tezCavitacionImage,
  presoterapia: tezPresoterapiaImage,
  maderoterapia: tezMaderoterapiaImage,
  radiofrecuenciaCorporal: tezRadiofrecuenciaCorporalImage,
  gimnasiaPasiva: tezGimnasiaPasivaImage,
  radiofrecuenciaGeneralCorporal: tezRadiofrecuenciaGeneralCorporalImage,
  drenajeLinfatico: tezDrenajeLinfaticoImage,
  metaloterapia: tezMetaloterapiaImage,
  vendasFrias: tezVendasFriasImage,
  multifuncional: tezMultifuncionalImage,
}

function toCatalogItems<TImageKey extends string>(
  category: ServiceCategory,
  categoryLabel: string,
  path: string,
  items: readonly {
    description: string
    duration?: string
    id: string
    image: TImageKey
    price?: string
    title: string
  }[],
  images: Record<TImageKey, string>,
) {
  return items.map((item) => ({
    category,
    categoryLabel,
    description: item.description,
    duration: item.duration,
    id: item.id,
    image: images[item.image],
    path,
    price: item.price,
    title: item.title,
  }))
}

export const serviceCatalog: ServiceCatalogItem[] = [
  ...toCatalogItems('oasis', 'Oasis', '/oasis', oasisPurificationExperiencesContent.items, oasisImages),
  ...toCatalogItems('tacto', 'Tacto', '/tacto', tactoMenuContent.items, tactoImages),
  ...toCatalogItems('brote', 'Brote', '/brote', broteExperiencesContent.items, broteImages),
  ...toCatalogItems('filo', 'Filo', '/filo', filoExperiencesContent.items, filoImages),
  ...toCatalogItems('hebra', 'Hebra', '/hebra', hebraExperiencesContent.items, hebraImages),
  ...tezCatalogContent.sections.flatMap((section) =>
    toCatalogItems(
      'tez',
      `Tez · ${section.title}`,
      '/tez',
      section.items.map((item) => ({
        ...item,
        duration: 'Consultar',
        price: tezCatalogContent.price,
      })),
      tezImages,
    ),
  ),
]

export function getRandomServiceRecommendation(currentKey: string) {
  const options = serviceCatalog.filter(
    (service) => `${service.category}:${service.id}` !== currentKey,
  )

  return options[Math.floor(Math.random() * options.length)]
}
