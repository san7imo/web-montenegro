import criolipolisisImage from '../../assets/raiz/criolipolisis.png'
import gimnasiaPasivaImage from '../../assets/raiz/gimanisapasiva.png'
import hydrafacialImage from '../../assets/raiz/hydrafacial.png'
import presoterapiaImage from '../../assets/raiz/presoterapia1.png'
import radiofrecuenciaImage from '../../assets/raiz/radiofrecuencia.png'
import waterfallImage from '../../assets/raiz/waterfall.png'
import { ImageLayer } from '../ui/ImageLayer'

type RaizTechnologyImageKey =
  | 'hydrafacial'
  | 'gimnasiaPasiva'
  | 'presoterapia'
  | 'criolipolisis'
  | 'radiofrecuencia'
  | 'waterfall'

type RaizTechnologyCardProps = {
  title: string
  description: string
  image?: RaizTechnologyImageKey
  placeholder?: string
}

const imageByKey: Record<RaizTechnologyImageKey, string> = {
  hydrafacial: hydrafacialImage,
  gimnasiaPasiva: gimnasiaPasivaImage,
  presoterapia: presoterapiaImage,
  criolipolisis: criolipolisisImage,
  radiofrecuencia: radiofrecuenciaImage,
  waterfall: waterfallImage,
}

export function RaizTechnologyCard({
  title,
  description,
  image,
  placeholder,
}: RaizTechnologyCardProps) {
  return (
    <article className="overflow-hidden rounded-[1.9rem] border border-cream-light/35 bg-forest/18 text-white shadow-[0_14px_34px_rgba(18,34,27,0.22)] transition-shadow duration-300 hover:shadow-[0_18px_42px_rgba(18,34,27,0.26)]">
      <div className="relative aspect-square overflow-hidden">
        {image ? (
          <ImageLayer
            src={imageByKey[image]}
            alt={title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-start justify-center bg-cream px-6 pt-16 text-center text-[0.78rem] font-bold uppercase tracking-[0.04em] text-forest-deep">
            {placeholder}
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 h-[58%] bg-[linear-gradient(180deg,rgba(31,53,43,0)_0%,rgba(31,53,43,0.72)_58%,rgba(31,53,43,0.94)_100%)]" />
        <h3 className="absolute inset-x-5 bottom-5 text-center font-heading text-[2rem] font-semibold leading-[0.95] text-pink-soft drop-shadow-[0_8px_16px_rgba(18,28,22,0.42)] sm:text-[2.18rem] lg:text-[2.35rem]">
          {title}
        </h3>
      </div>

      <p className="min-h-[8.8rem] px-5 pb-5 pt-4 text-justify text-[0.98rem] font-medium leading-[1.45] text-white/95 sm:text-[1rem]">
        {description}
      </p>
    </article>
  )
}
