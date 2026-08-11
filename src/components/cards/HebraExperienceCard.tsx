import cepilladoImage from '../../assets/hebra/cepillado.png'
import coctelAnticaidaImage from '../../assets/hebra/coctelanticaida.png'
import corteCaballeroImage from '../../assets/hebra/cortecaballero.png'
import corteDamaImage from '../../assets/hebra/cortedama.png'
import extensionesImage from '../../assets/hebra/extenciones.png'
import iluminacionesImage from '../../assets/hebra/iluminaciones.png'
import keratinaImage from '../../assets/hebra/keratina.png'
import mechasImage from '../../assets/hebra/mechas.png'
import planchadoImage from '../../assets/hebra/planchado.png'
import spaHairAsiaticoImage from '../../assets/hebra/spahairasiatico.png'
import tintesImage from '../../assets/hebra/tintes.png'
import { Button } from '../ui/Button'
import { ImageLayer } from '../ui/ImageLayer'
import { PriceText } from '../ui/PriceText'
import { ServiceModal } from '../ui/ServiceModal'
import { useServiceModalState } from '../ui/useServiceModalState'

type HebraExperienceImageKey =
  | 'corteDama'
  | 'corteCaballero'
  | 'coctelAnticaida'
  | 'spaHairAsiatico'
  | 'keratina'
  | 'extensiones'
  | 'tintes'
  | 'mechas'
  | 'iluminaciones'
  | 'cepillado'
  | 'planchado'

type HebraExperienceCardProps = {
  id: string
  title: string
  description: string
  duration: string
  price: string
  image: HebraExperienceImageKey
  ctaHref: string
  ctaLabel: string
}

const imageByKey: Record<HebraExperienceImageKey, string> = {
  corteDama: corteDamaImage,
  corteCaballero: corteCaballeroImage,
  coctelAnticaida: coctelAnticaidaImage,
  spaHairAsiatico: spaHairAsiaticoImage,
  keratina: keratinaImage,
  extensiones: extensionesImage,
  tintes: tintesImage,
  mechas: mechasImage,
  iluminaciones: iluminacionesImage,
  cepillado: cepilladoImage,
  planchado: planchadoImage,
}

export function HebraExperienceCard({
  id,
  title,
  description,
  duration,
  price,
  image,
  ctaLabel,
}: HebraExperienceCardProps) {
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
      className="grid cursor-pointer gap-5 rounded-[1.85rem] border border-white/75 bg-cream/65 p-3 shadow-[0_0_18px_rgba(31,53,43,0.26),0_8px_18px_rgba(31,53,43,0.18)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_22px_rgba(31,53,43,0.3),0_10px_22px_rgba(31,53,43,0.2)] sm:grid-cols-[11.4rem_1fr] sm:gap-6 sm:p-3.5 lg:min-h-[11.75rem] lg:grid-cols-[14.8rem_1fr] lg:gap-6 lg:rounded-[2rem]"
    >
      <div className="w-full overflow-hidden rounded-[1.35rem] sm:h-full lg:rounded-[1.55rem]">
        <ImageLayer
          src={imageSrc}
          alt={title}
          className="aspect-square h-full w-full object-cover"
        />
      </div>

      <div className="flex min-w-0 flex-col justify-center pb-1 pt-1 sm:pr-4 lg:pr-6 lg:pt-2">
        <h3 className="font-heading text-[2.4rem] font-semibold leading-[0.96] text-forest sm:text-[2.75rem] lg:text-[3.1rem]">
          {title}
        </h3>
        <p className="mt-1 max-w-[38rem] text-[0.94rem] font-medium leading-[1.48] text-forest-dark/90 sm:text-[1rem] lg:text-[1.04rem]">
          {description}
        </p>

        <div className="mt-4 grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end lg:mt-5">
          <dl className="text-[0.9rem] font-semibold leading-5 text-forest-dark sm:text-[0.96rem]">
            <div>
              <dt className="inline">Duración </dt>
              <dd className="inline">{duration}</dd>
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
            className="min-h-11 !border-pink bg-transparent px-5 py-2 text-[0.72rem] font-bold tracking-[0.04em] !text-pink shadow-none hover:!border-pink hover:!bg-pink hover:!text-white focus-visible:ring-pink"
          >
            {ctaLabel}
          </Button>
        </div>
      </div>
    </article>
    <ServiceModal
      isOpen={isModalOpen}
      onClose={closeModal}
      category="hebra"
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
