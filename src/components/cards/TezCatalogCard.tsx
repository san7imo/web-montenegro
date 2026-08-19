import eliminacionManchasImage from '../../assets/tez/eliminacion-de-manchas.webp'
import eliminacionTatuajesImage from '../../assets/tez/eliminacion-de-tatuajes.webp'
import gimnasiaPasivaImage from '../../assets/tez/gimnasiapasiva.png'
import limpiezaFacialImage from '../../assets/tez/limpiezafacial.png'
import manicuraPedicuraSemipermanenteImage from '../../assets/tez/manicura-y-pedicura-semipermanente.webp'
import manicuraTradicionalImage from '../../assets/tez/manicura-tradicional.webp'
import maderoterapiaImage from '../../assets/tez/maderoterapia.png'
import metaloterapiaImage from '../../assets/tez/metaloterapia.png'
import masajesReductoresImage from '../../assets/tez/masajes-reductores.webp'
import micropigmentacionLabiosImage from '../../assets/tez/micropigmentacion-de-labios.webp'
import packLipoImage from '../../assets/tez/packliposincirugia.png'
import pedicuraCompletaTradicionalImage from '../../assets/tez/pedicura-completa-tradicional.webp'
import radiofrecuenciaGeneralCorporalImage from '../../assets/tez/radifrecuenciageneralcorporal.png'
import radiofrecuenciaGeneralImage from '../../assets/tez/ragiofrecuengeneral.png'
import rejuvenecimientoVaginalImage from '../../assets/tez/rejuevenicmientovaginal.png'
import tratamientoVaricesImage from '../../assets/tez/tratamientodevarices.png'
import { ImageLayer } from '../ui/ImageLayer'
import { PriceText } from '../ui/PriceText'
import { ServiceModal } from '../ui/ServiceModal'
import { useServiceModalState } from '../ui/useServiceModalState'

type TezCatalogImageKey =
  | 'limpiezaFacial'
  | 'eliminacionManchas'
  | 'eliminacionTatuajes'
  | 'tratamientoVarices'
  | 'radiofrecuenciaGeneral'
  | 'rejuvenecimientoVaginal'
  | 'packLipo'
  | 'maderoterapia'
  | 'gimnasiaPasiva'
  | 'radiofrecuenciaGeneralCorporal'
  | 'metaloterapia'
  | 'manicuraPedicuraSemipermanente'
  | 'manicuraTradicional'
  | 'masajesReductores'
  | 'micropigmentacionLabios'
  | 'pedicuraCompletaTradicional'

type TezCatalogCardProps = {
  id: string
  title: string
  description: string
  image: TezCatalogImageKey
  price: string
  ctaHref: string
  ctaLabel: string
}

const imageByKey: Record<TezCatalogImageKey, string> = {
  limpiezaFacial: limpiezaFacialImage,
  eliminacionManchas: eliminacionManchasImage,
  eliminacionTatuajes: eliminacionTatuajesImage,
  tratamientoVarices: tratamientoVaricesImage,
  radiofrecuenciaGeneral: radiofrecuenciaGeneralImage,
  rejuvenecimientoVaginal: rejuvenecimientoVaginalImage,
  packLipo: packLipoImage,
  maderoterapia: maderoterapiaImage,
  gimnasiaPasiva: gimnasiaPasivaImage,
  radiofrecuenciaGeneralCorporal: radiofrecuenciaGeneralCorporalImage,
  metaloterapia: metaloterapiaImage,
  manicuraPedicuraSemipermanente: manicuraPedicuraSemipermanenteImage,
  manicuraTradicional: manicuraTradicionalImage,
  masajesReductores: masajesReductoresImage,
  micropigmentacionLabios: micropigmentacionLabiosImage,
  pedicuraCompletaTradicional: pedicuraCompletaTradicionalImage,
}

export function TezCatalogCard({
  id,
  title,
  description,
  image,
  price,
  ctaLabel,
}: TezCatalogCardProps) {
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
      className="flex h-[36rem] flex-col overflow-hidden rounded-[1.6rem] border border-white/75 bg-cream/65 shadow-[0_0_18px_rgba(31,53,43,0.24),0_8px_18px_rgba(31,53,43,0.16)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_22px_rgba(31,53,43,0.28),0_10px_22px_rgba(31,53,43,0.18)] lg:h-[37rem]"
    >
      <div className="aspect-[390/292] shrink-0 overflow-hidden rounded-b-[1.15rem]">
        <ImageLayer
          src={imageSrc}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col px-4 pb-4 pt-3 text-center text-forest">
        <h3 title={title} className="type-card-title-compact line-clamp-2 min-h-[3.5rem] text-forest sm:min-h-[3.8rem]">
          {title}
        </h3>
        <p title={description} className="type-body-sm mt-2 line-clamp-6 min-h-[8.65rem] text-justify font-medium text-forest-dark/88 lg:line-clamp-7 lg:min-h-[10.1rem]">
          {description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-4 pt-4 text-left">
          <span className="type-price text-forest">
            <PriceText value={price} />
          </span>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              openModal()
            }}
            className="type-body-sm min-h-10 min-w-[8.5rem] shrink-0 rounded-full border border-pink px-5 py-2 font-bold text-pink no-underline transition-colors duration-200 hover:bg-pink hover:text-white"
          >
            {ctaLabel}
          </button>
        </div>
      </div>
    </article>
    <ServiceModal
      isOpen={isModalOpen}
      onClose={closeModal}
      category="tez"
      serviceId={id}
      title={title}
      description={description}
      price={price}
      image={imageSrc}
    />
    </>
  )
}
