import media47 from '../assets/updates/47-tez-limpieza-facial.webp'
import media48 from '../assets/updates/48-tez-limpieza-facial.mp4'
import media50 from '../assets/updates/50-tez-presoterapia.webp'
import media51 from '../assets/updates/51-tez-presoterapia-1-.webp'
import media56 from '../assets/updates/56-tez-lipo-sin-cirugia2.mp4'
import media57 from '../assets/updates/57-tez-lipo-sin-cirugia.mp4'
import media58 from '../assets/updates/58-tez-lipo-sin-cirugia3.mp4'
import media45 from '../assets/updates/45-oasis-ritual-holistico-2.webp'
import media46 from '../assets/updates/46-oasis-ritual-holistico.webp'
import media55 from '../assets/updates/55-hebra-hair-spa-asiatico.mp4'
import media49 from '../assets/updates/49-filo-lifting-de-pestanas-1.webp'
import media52 from '../assets/updates/52-filo-extensiones-de-pestanas.webp'
import media53 from '../assets/updates/53-filo-lifting-de-pestanas-3.webp'
import media54 from '../assets/updates/54-filo-lifting-de-pestanas-2.webp'
import poster48 from '../assets/updates/48-tez-limpieza-facial-poster.webp'
import poster56 from '../assets/updates/56-tez-lipo-sin-cirugia2-poster.webp'
import poster57 from '../assets/updates/57-tez-lipo-sin-cirugia-poster.webp'
import poster58 from '../assets/updates/58-tez-lipo-sin-cirugia3-poster.webp'
import poster55 from '../assets/updates/55-hebra-hair-spa-asiatico-poster.webp'

export type EcoGalleryCategory = 'tez' | 'oasis' | 'hebra' | 'filo'
export type EcoMedia = {
  id: string
  category: EcoGalleryCategory
  title: string
  kind: 'image' | 'video'
  src: string
  poster?: string
}
export const ecoMedia: EcoMedia[] = [
  { id: 'drive-47', category: 'tez', title: "Limpieza facial", kind: 'image', src: media47 },
  { id: 'drive-48', category: 'tez', title: "Limpieza facial", kind: 'video', src: media48, poster: poster48 },
  { id: 'drive-50', category: 'tez', title: "Presoterapia", kind: 'image', src: media50 },
  { id: 'drive-51', category: 'tez', title: "Presoterapia", kind: 'image', src: media51 },
  { id: 'drive-56', category: 'tez', title: "Lipo sin cirugía", kind: 'video', src: media56, poster: poster56 },
  { id: 'drive-57', category: 'tez', title: "Lipo sin cirugía", kind: 'video', src: media57, poster: poster57 },
  { id: 'drive-58', category: 'tez', title: "Lipo sin cirugía", kind: 'video', src: media58, poster: poster58 },
  { id: 'drive-45', category: 'oasis', title: "Ritual holístico", kind: 'image', src: media45 },
  { id: 'drive-46', category: 'oasis', title: "Ritual holístico", kind: 'image', src: media46 },
  { id: 'drive-55', category: 'hebra', title: "Hair spa asiático", kind: 'video', src: media55, poster: poster55 },
  { id: 'drive-49', category: 'filo', title: "Lifting de pestañas", kind: 'image', src: media49 },
  { id: 'drive-52', category: 'filo', title: "Extensiones de pestañas", kind: 'image', src: media52 },
  { id: 'drive-53', category: 'filo', title: "Lifting de pestañas", kind: 'image', src: media53 },
  { id: 'drive-54', category: 'filo', title: "Lifting de pestañas", kind: 'image', src: media54 },
]
