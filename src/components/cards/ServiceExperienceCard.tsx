import descontracturanteImage from '../../assets/oasis/descontracturante.png'
import drenajeLinfaticoImage from '../../assets/oasis/drenajelinfatico.png'
import exfoliacionImage from '../../assets/oasis/exfoliacion.png'
import masajeRelajanteImage from '../../assets/oasis/masajerelajante.png'
import presoterapiaImage from '../../assets/oasis/presoterapia.png'
import ritualesEnTinaImage from '../../assets/oasis/ritualesentina.png'
import ventosasImage from '../../assets/oasis/ventosas.png'
import { Button } from '../ui/Button'
import { ImageLayer } from '../ui/ImageLayer'
import { ServiceModal } from '../ui/ServiceModal'
import { useServiceModalState } from '../ui/useServiceModalState'

type ServiceExperienceImageKey =
  | 'ritualesEnTina'
  | 'exfoliacion'
  | 'drenajeLinfatico'
  | 'masajeRelajante'
  | 'presoterapia'
  | 'ventosas'
  | 'descontracturante'

type ServiceExperienceCardProps = {
  id: string
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
  id,
  title,
  description,
  duration,
  price,
  image,
  ctaLabel,
}: ServiceExperienceCardProps) {
  const { closeModal, isModalOpen, openModal } = useServiceModalState(id)
  const imageSrc = imageByKey[image]

  return (
    <>
    <article
      role="button"
      tabIndex={0}
      onClick={openModal}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          openModal()
        }
      }}
      className="grid cursor-pointer gap-5 rounded-[1.85rem] border border-cream-light/80 bg-cream/50 p-3 shadow-[0_2px_5px_rgba(36,61,49,0.2)] transition-transform duration-300 hover:-translate-y-0.5 sm:grid-cols-[12.8rem_1fr] sm:gap-8 sm:p-3.5 lg:min-h-[13.8rem] lg:grid-cols-[17.9rem_1fr] lg:gap-14 lg:rounded-[2rem]"
    >
      <div className="w-full overflow-hidden rounded-[1.35rem] sm:h-full lg:rounded-[1.55rem]">
        <ImageLayer
          src={imageSrc}
          alt={title}
          className="aspect-square h-full w-full object-cover"
        />
      </div>

      <div className="flex min-w-0 flex-col pb-1 pt-1 sm:pr-4 lg:pr-8 lg:pt-4">
        <h3 className="font-heading text-[2.4rem] font-semibold leading-[0.96] text-forest sm:text-[2.75rem] lg:text-[3.1rem]">
          {title}
        </h3>
        <p className="mt-1 max-w-[38rem] text-[0.92rem] font-medium leading-[1.45] text-forest-dark/90 sm:text-[0.98rem] lg:text-[1rem]">
          {description}
        </p>

        <dl className="mt-3 text-[0.9rem] font-semibold leading-5 text-forest-dark sm:mt-4 sm:text-[0.96rem]">
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
            variant="outline"
            onClick={(event) => {
              event.stopPropagation()
              openModal()
            }}
            className="min-h-10 min-w-[11rem] !border-pink bg-transparent px-5 py-2 text-[0.67rem] font-bold tracking-[0.03em] !text-pink shadow-none hover:!border-pink hover:!bg-pink hover:!text-white focus-visible:ring-pink sm:min-w-[13.7rem] lg:min-h-[2.6rem]"
          >
            {ctaLabel}
          </Button>
        </div>
      </div>
    </article>
    <ServiceModal
      isOpen={isModalOpen}
      onClose={closeModal}
      category="oasis"
      serviceId={id}
      title={title}
      description={description}
      duration={duration}
      price={price}
      image={imageSrc}
    />
    </>
  )
}
