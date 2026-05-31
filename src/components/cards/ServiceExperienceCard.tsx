import descontracturanteImage from '../../assets/oasis/descontracturante.png'
import drenajeLinfaticoImage from '../../assets/oasis/drenajelinfatico.png'
import exfoliacionImage from '../../assets/oasis/exfoliacion.png'
import masajeRelajanteImage from '../../assets/oasis/masajerelajante.png'
import presoterapiaImage from '../../assets/oasis/presoterapia.png'
import ritualesEnTinaImage from '../../assets/oasis/ritualesentina.png'
import ventosasImage from '../../assets/oasis/ventosas.png'
import { Button } from '../ui/Button'
import { ImageLayer } from '../ui/ImageLayer'

type ServiceExperienceImageKey =
  | 'ritualesEnTina'
  | 'exfoliacion'
  | 'drenajeLinfatico'
  | 'masajeRelajante'
  | 'presoterapia'
  | 'ventosas'
  | 'descontracturante'

type ServiceExperienceCardProps = {
  title: string
  description: string
  duration: string
  price: string
  image: ServiceExperienceImageKey
  ctaHref: string
  ctaLabel: string
}

const imageByKey: Record<ServiceExperienceImageKey, string> = {
  ritualesEnTina: ritualesEnTinaImage,
  exfoliacion: exfoliacionImage,
  drenajeLinfatico: drenajeLinfaticoImage,
  masajeRelajante: masajeRelajanteImage,
  presoterapia: presoterapiaImage,
  ventosas: ventosasImage,
  descontracturante: descontracturanteImage,
}

export function ServiceExperienceCard({
  title,
  description,
  duration,
  price,
  image,
  ctaHref,
  ctaLabel,
}: ServiceExperienceCardProps) {
  return (
    <article className="grid gap-4 rounded-[1.45rem] border border-cream-light/80 bg-cream/50 p-2.5 shadow-[0_2px_5px_rgba(36,61,49,0.16)] sm:grid-cols-[10.5rem_1fr] sm:gap-6 sm:p-3 lg:min-h-[11.4rem] lg:grid-cols-[14.7rem_1fr] lg:gap-10 lg:rounded-[1.65rem]">
      <div className="w-full overflow-hidden rounded-[1.1rem] sm:h-full lg:rounded-[1.25rem]">
        <ImageLayer
          src={imageByKey[image]}
          alt={title}
          className="aspect-square h-full w-full object-cover"
        />
      </div>

      <div className="flex min-w-0 flex-col pb-1 pt-1 sm:pr-3 lg:pr-6 lg:pt-3">
        <h3 className="font-heading text-[2.15rem] font-semibold leading-[0.96] text-forest sm:text-[2.35rem] lg:text-[2.75rem]">
          {title}
        </h3>
        <p className="mt-1 max-w-[34rem] text-[0.86rem] font-medium leading-[1.45] text-forest-dark/90 sm:text-[0.9rem] lg:text-[0.94rem]">
          {description}
        </p>

        <dl className="mt-3 text-[0.86rem] font-semibold leading-5 text-forest-dark sm:mt-4 sm:text-[0.9rem]">
          <div>
            <dt className="inline">Duración </dt>
            <dd className="inline">{duration}</dd>
          </div>
          <div>
            <dt className="inline">Precio </dt>
            <dd className="inline">{price}</dd>
          </div>
        </dl>

        <div className="mt-5 flex sm:mt-auto sm:justify-end">
          <Button
            to={ctaHref}
            variant="outline"
            className="min-h-9 min-w-[10.4rem] border-pink bg-transparent px-5 py-2 text-[0.66rem] font-bold tracking-[0.03em] text-pink shadow-none hover:border-pink-dark hover:bg-pink/8 hover:text-pink-dark focus-visible:ring-pink sm:min-w-[11.7rem] lg:min-h-[2.35rem]"
          >
            {ctaLabel}
          </Button>
        </div>
      </div>
    </article>
  )
}
