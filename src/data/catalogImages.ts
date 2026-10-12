import { updatedCatalogImages } from './updatedCatalogImages'
import image0 from '../assets/brote/bolsa-de-regalo.webp'
import image1 from '../assets/brote/envoltura.webp'
import image2 from '../assets/brote/masajecorpotal.webp'
import image3 from '../assets/brote/merienda-saludable.webp'
import image4 from '../assets/brote/mini-spa-party.webp'
import image5 from '../assets/brote/minihairspa.webp'
import image6 from '../assets/brote/spafacial.webp'
import image7 from '../assets/brote/tinamagica.webp'
import image8 from '../assets/filo/depilacion-cejas-cera.webp'
import image9 from '../assets/filo/depilacionconcera.webp'
import image10 from '../assets/filo/depilacionipl.webp'
import image11 from '../assets/filo/depilacionlaserdiodo.webp'
import image12 from '../assets/filo/eliminacion-micropigmentacion-cejas.webp'
import image13 from '../assets/filo/extensionesdepestañas.webp'
import image14 from '../assets/hebra/spahairasiatico.webp'
import image15 from '../assets/oasis/cerrar-matriz.webp'
import image16 from '../assets/oasis/descontracturante.webp'
import image17 from '../assets/oasis/drenajelinfatico.webp'
import image18 from '../assets/oasis/exfoliacion.webp'
import image19 from '../assets/oasis/masajerelajante.webp'
import image20 from '../assets/oasis/ritual-botanico.webp'
import image21 from '../assets/raiz/laser-luminage.webp'
import image22 from '../assets/raiz/radiofrecuencia-fraccionada.webp'
import image23 from '../assets/tacto/laser-antihongos.webp'
import image24 from '../assets/tez/criolipolisiscontorno.webp'
import image25 from '../assets/tez/eliminacion-de-manchas.webp'
import image26 from '../assets/tez/eliminacion-de-tatuajes.webp'
import image27 from '../assets/tez/gimnasiapasiva.webp'
import image28 from '../assets/tez/limpiezafacial.webp'
import image29 from '../assets/tez/maderoterapia.webp'
import image30 from '../assets/tez/masajes-reductores.webp'
import image31 from '../assets/tez/metaloterapia.webp'
import image32 from '../assets/tez/micropigmentacion-de-labios.webp'
import image33 from '../assets/tez/packliposincirugia.webp'
import image34 from '../assets/tez/radifrecuenciageneralcorporal.webp'
import image35 from '../assets/tez/tratamientodevarices.webp'
const assets: Record<string, string> = {
  '../assets/brote/bolsa-de-regalo.webp': image0,
  '../assets/brote/envoltura.webp': image1,
  '../assets/brote/masajecorpotal.webp': image2,
  '../assets/brote/merienda-saludable.webp': image3,
  '../assets/brote/mini-spa-party.webp': image4,
  '../assets/brote/minihairspa.webp': image5,
  '../assets/brote/spafacial.webp': image6,
  '../assets/brote/tinamagica.webp': image7,
  '../assets/filo/depilacion-cejas-cera.webp': image8,
  '../assets/filo/depilacionconcera.webp': image9,
  '../assets/filo/depilacionipl.webp': image10,
  '../assets/filo/depilacionlaserdiodo.webp': image11,
  '../assets/filo/eliminacion-micropigmentacion-cejas.webp': image12,
  '../assets/filo/extensionesdepestañas.webp': image13,
  '../assets/hebra/spahairasiatico.webp': image14,
  '../assets/oasis/cerrar-matriz.webp': image15,
  '../assets/oasis/descontracturante.webp': image16,
  '../assets/oasis/drenajelinfatico.webp': image17,
  '../assets/oasis/exfoliacion.webp': image18,
  '../assets/oasis/masajerelajante.webp': image19,
  '../assets/oasis/ritual-botanico.webp': image20,
  '../assets/raiz/laser-luminage.webp': image21,
  '../assets/raiz/radiofrecuencia-fraccionada.webp': image22,
  '../assets/tacto/laser-antihongos.webp': image23,
  '../assets/tez/criolipolisiscontorno.webp': image24,
  '../assets/tez/eliminacion-de-manchas.webp': image25,
  '../assets/tez/eliminacion-de-tatuajes.webp': image26,
  '../assets/tez/gimnasiapasiva.webp': image27,
  '../assets/tez/limpiezafacial.webp': image28,
  '../assets/tez/maderoterapia.webp': image29,
  '../assets/tez/masajes-reductores.webp': image30,
  '../assets/tez/metaloterapia.webp': image31,
  '../assets/tez/micropigmentacion-de-labios.webp': image32,
  '../assets/tez/packliposincirugia.webp': image33,
  '../assets/tez/radifrecuenciageneralcorporal.webp': image34,
  '../assets/tez/tratamientodevarices.webp': image35,
}
// Images are mapped by treatment, never by list position.
export const catalogImagePaths: Record<string, string> = {
'tez:eliminacion-de-tatuajes': 'tez/eliminacion-de-tatuajes.webp',
'tez:eliminacion-de-micropigmentacion': 'filo/eliminacion-micropigmentacion-cejas.webp',
'tez:eliminacion-de-hongos-en-unas-laser-picosegundo': 'tacto/laser-antihongos.webp',
'tez:mejora-de-manchas': 'tez/eliminacion-de-manchas.webp',
'tez:curacion-de-varices': 'tez/tratamientodevarices.webp',
'tez:gym-pasiva': 'tez/gimnasiapasiva.webp',
'tez:limpieza-facial': 'tez/limpiezafacial.webp',
'tez:lipo-sin-cirugia': 'tez/packliposincirugia.webp',
'tez:micropigmentacion-de-labios': 'tez/micropigmentacion-de-labios.webp',
'tez:rejuvenecimiento-360-radiofrecuencia-bipolar': 'tez/radifrecuenciageneralcorporal.webp',
'tez:radiofrecuencia-fraccionada': 'raiz/radiofrecuencia-fraccionada.webp',
'tez:luminage': 'raiz/laser-luminage.webp',
'tez:criolipolisis': 'tez/criolipolisiscontorno.webp',
'brote:mini-spa-party': 'brote/mini-spa-party.webp',
'brote:bolsa-de-regalo': 'brote/bolsa-de-regalo.webp',
'brote:tina-magica-infantil': 'brote/tinamagica.webp',
'brote:envoltura-corporal-infantil': 'brote/envoltura.webp',
'brote:masaje-corporal-infantil': 'brote/masajecorpotal.webp',
'brote:merienda-saludable-infantil': 'brote/merienda-saludable.webp',
'brote:mini-hair-spa-infantil': 'brote/minihairspa.webp',
'brote:mini-spa-facial-infantil': 'brote/spafacial.webp',
'oasis:cerrar-matriz': 'oasis/cerrar-matriz.webp',
'oasis:ritual-botanico-linea-medicinal-hidroterapia': 'oasis/ritual-botanico.webp',
'oasis:exfoliaciones-frutales': 'oasis/exfoliacion.webp',
'oasis:exfoliaciones-sensoriales': 'oasis/exfoliacion.webp',
'tacto:drenaje-linfatico': 'oasis/drenajelinfatico.webp',
'tacto:masaje-relajante': 'oasis/masajerelajante.webp',
'tacto:masaje-descontracturante': 'oasis/descontracturante.webp',
'tacto:masajes-reductores': 'tez/masajes-reductores.webp',
'tacto:maderoterapia': 'tez/maderoterapia.webp',
'tacto:metaloterapia': 'tez/metaloterapia.webp',
'hebra:hair-spa': 'hebra/spahairasiatico.webp',
'filo:cejas': 'filo/depilacion-cejas-cera.webp',
'filo:pestanas': 'filo/extensionesdepestañas.webp',
}
export function getCatalogImage(category: string, id: string) {
  const updatedImage = updatedCatalogImages[`${category}:${id}`]
  if (updatedImage) return updatedImage
  let path = catalogImagePaths[`${category}:${id}`]
  if (category === 'filo' && id.includes('depilacion-con-cera')) path = 'filo/depilacionconcera.webp'
  if (category === 'filo' && id.includes('depilacion-ipl')) path = 'filo/depilacionipl.webp'
  if (category === 'filo' && id.includes('depilacion-laser-diodo')) path = 'filo/depilacionlaserdiodo.webp'
  return path ? assets[`../assets/${path}`] ?? '' : ''
}
