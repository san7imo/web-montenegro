import cejasHennaImage from '../../assets/filo/cejasconhena.webp'
import depilacionCeraImage from '../../assets/filo/depilacionconcera.webp'
import depilacionCejasCeraImage from '../../assets/filo/depilacion-cejas-cera.webp'
import depilacionIplImage from '../../assets/filo/depilacionipl.webp'
import eliminacionMicropigmentacionCejasImage from '../../assets/filo/eliminacion-micropigmentacion-cejas.webp'
import laserDiodoImage from '../../assets/filo/depilacionlaserdiodo.webp'
import extensionesPestanasImage from '../../assets/filo/extensionesdepestañas.webp'
import laminadoCejasImage from '../../assets/filo/laminadodecejas.webp'
import liftingPestanasImage from '../../assets/filo/liftingdepestañas.webp'
import microbladingCejasImage from '../../assets/filo/microblading-cejas.webp'
import micropigmentacionCejasImage from '../../assets/filo/micropigmentacion-cejas.webp'
import pestanasOjoGatoImage from '../../assets/filo/pestanas-ojo-gato.webp'
import pestanasVolumenRusoImage from '../../assets/filo/pestanas-volumen-ruso.webp'
import pestanasWispyImage from '../../assets/filo/pestanas-wispy.webp'
import { Button } from '../ui/Button'
import { ImageLayer } from '../ui/ImageLayer'
import { PriceText } from '../ui/PriceText'
import { DeferredServiceModal } from '../ui/DeferredServiceModal'
import { useServiceModalState } from '../ui/useServiceModalState'

type FiloExperienceImageKey =
  | 'depilacionCejasCera'
  | 'laminadoCejas'
  | 'cejasHenna'
  | 'extensionesPestanas'
  | 'liftingPestanas'
  | 'laserDiodo'
  | 'depilacionCera'
  | 'depilacionIpl'
  | 'eliminacionMicropigmentacionCejas'
  | 'microbladingCejas'
  | 'micropigmentacionCejas'
  | 'pestanasOjoGato'
  | 'pestanasVolumenRuso'
  | 'pestanasWispy'

type FiloExperienceCardProps = {
  id: string
  title: string
  description: string
  duration: string
  price: string
  image: FiloExperienceImageKey
  ctaHref: string
  ctaLabel: string
}

const imageByKey: Record<FiloExperienceImageKey, string> = {
  depilacionCejasCera: depilacionCejasCeraImage,
  laminadoCejas: laminadoCejasImage,
  cejasHenna: cejasHennaImage,
  extensionesPestanas: extensionesPestanasImage,
  liftingPestanas: liftingPestanasImage,
  laserDiodo: laserDiodoImage,
  depilacionCera: depilacionCeraImage,
  depilacionIpl: depilacionIplImage,
  eliminacionMicropigmentacionCejas: eliminacionMicropigmentacionCejasImage,
  microbladingCejas: microbladingCejasImage,
  micropigmentacionCejas: micropigmentacionCejasImage,
  pestanasOjoGato: pestanasOjoGatoImage,
  pestanasVolumenRuso: pestanasVolumenRusoImage,
  pestanasWispy: pestanasWispyImage,
}

export function FiloExperienceCard({
  id,
  title,
  description,
  duration,
  price,
  image,
  ctaLabel,
}: FiloExperienceCardProps) {
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
      className="grid cursor-pointer gap-5 rounded-[1.85rem] border border-white/75 bg-cream/65 p-3 shadow-[0_0_18px_rgba(31,53,43,0.26),0_8px_18px_rgba(31,53,43,0.18)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_22px_rgba(31,53,43,0.3),0_10px_22px_rgba(31,53,43,0.2)] sm:h-[22rem] sm:grid-cols-[11.4rem_1fr] sm:gap-6 sm:p-3.5 lg:h-[21rem] lg:grid-cols-[14.8rem_1fr] lg:gap-6 lg:rounded-[2rem]"
    >
      <div className="w-full overflow-hidden rounded-[1.35rem] sm:h-full lg:rounded-[1.55rem]">
        <ImageLayer
          src={imageSrc}
          alt={title}
          className="aspect-square h-full w-full object-cover"
        />
      </div>

      <div className="flex min-w-0 flex-col pb-1 pt-1 sm:py-2 sm:pr-4 lg:pr-6">
        <h3 title={title} className="type-card-title line-clamp-2 min-h-[4.2rem] text-forest sm:min-h-[4.8rem] lg:min-h-[5.3rem]">
          {title}
        </h3>
        <p title={description} className="type-body mt-1 line-clamp-6 min-h-[10.5rem] max-w-[38rem] font-medium text-forest-dark/90 sm:line-clamp-5 sm:min-h-[8.75rem] lg:line-clamp-4 lg:min-h-[7rem]">
          {description}
        </p>

        <div className="mt-auto grid gap-4 pt-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
          <dl className="type-body-sm font-semibold text-forest-dark">
            <div>
              <dt className="sr-only">Duración y precio</dt>
              <dd>{duration}</dd>
            </div>
            <div>
              <dt className="inline">Precio </dt>
              <dd className="inline">
                <PriceText value={price} />
              </dd>
            </div>
          </dl>
          <Button
            variant="outline"
            onClick={(event) => {
              event.stopPropagation()
              openModal()
            }}
            className="min-h-11 !border-pink bg-transparent px-5 py-2 font-bold tracking-[0.04em] !text-pink shadow-none hover:!border-pink hover:!bg-pink hover:!text-white focus-visible:ring-pink"
          >
            {ctaLabel}
          </Button>
        </div>
      </div>
    </article>
    <DeferredServiceModal
      isOpen={isModalOpen}
      onClose={closeModal}
      category="filo"
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
