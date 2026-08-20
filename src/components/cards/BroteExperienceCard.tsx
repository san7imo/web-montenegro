import envolturaImage from '../../assets/brote/envoltura.webp'
import manicuraPedicuraImage from '../../assets/brote/manicuraypedicura.webp'
import masajeCorporalImage from '../../assets/brote/masajecorpotal.webp'
import meriendaSaludableImage from '../../assets/brote/merienda-saludable.webp'
import miniHairSpaImage from '../../assets/brote/minihairspa.webp'
import miniSpaPartyImage from '../../assets/brote/mini-spa-party.webp'
import peinadosImage from '../../assets/brote/peinados.webp'
import spaFacialImage from '../../assets/brote/spafacial.webp'
import tinaMagicaImage from '../../assets/brote/tinamagica.webp'
import { Button } from '../ui/Button'
import { ImageLayer } from '../ui/ImageLayer'
import { PriceText } from '../ui/PriceText'
import { DeferredServiceModal } from '../ui/DeferredServiceModal'
import { useServiceModalState } from '../ui/useServiceModalState'

type BroteExperienceImageKey =
  | 'bolsaRegalo'
  | 'tinaMagica'
  | 'envoltura'
  | 'manicuraPedicura'
  | 'masajeCorporal'
  | 'miniHairSpa'
  | 'spaFacial'
  | 'peinados'
  | 'meriendaSaludable'
  | 'miniSpaParty'

type BroteExperienceCardProps = {
  id: string
  title: string
  description: string
  duration: string
  price: string
  image: BroteExperienceImageKey
  ctaHref: string
  ctaLabel: string
}

const imageByKey: Record<BroteExperienceImageKey, string> = {
  bolsaRegalo: bolsaRegaloImage,
  tinaMagica: tinaMagicaImage,
  envoltura: envolturaImage,
  manicuraPedicura: manicuraPedicuraImage,
  masajeCorporal: masajeCorporalImage,
  miniHairSpa: miniHairSpaImage,
  spaFacial: spaFacialImage,
  peinados: peinadosImage,
  meriendaSaludable: meriendaSaludableImage,
  miniSpaParty: miniSpaPartyImage,
}

export function BroteExperienceCard({
  id,
  title,
  description,
  duration,
  price,
  image,
  ctaLabel,
}: BroteExperienceCardProps) {
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
              <dt className="inline">Duración: </dt>
              <dd className="inline">{duration}</dd>
            </div>
            <div>
              <dt className="inline">Precio: </dt>
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
      category="brote"
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
import bolsaRegaloImage from '../../assets/brote/bolsa-de-regalo.webp'
