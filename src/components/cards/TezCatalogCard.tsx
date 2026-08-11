import cavitacionImage from '../../assets/tez/cavitacion.png'
import criolipolisisImage from '../../assets/tez/criolipolisiscontorno.png'
import drenajeLinfaticoImage from '../../assets/tez/drenajelinfaticomanual.png'
import gimnasiaPasivaImage from '../../assets/tez/gimnasiapasiva.png'
import hydrafacialPielImage from '../../assets/tez/hydrafacialpiel.png'
import limpiezaFacialImage from '../../assets/tez/limpiezafacial.png'
import maderoterapiaImage from '../../assets/tez/maderoterapia.png'
import metaloterapiaImage from '../../assets/tez/metaloterapia.png'
import multifuncionalImage from '../../assets/tez/multifuncional.png'
import packLipoImage from '../../assets/tez/packliposincirugia.png'
import presoterapiaImage from '../../assets/tez/presoterapiacontorno.png'
import radiofrecuenciaCorporalImage from '../../assets/tez/radiofrecuenciafraccionadacorporal.png'
import radiofrecuenciaGeneralCorporalImage from '../../assets/tez/radifrecuenciageneralcorporal.png'
import radiofrecuenciaGeneralImage from '../../assets/tez/ragiofrecuengeneral.png'
import rejuvenecimientoVaginalImage from '../../assets/tez/rejuevenicmientovaginal.png'
import tratamientoVaricesImage from '../../assets/tez/tratamientodevarices.png'
import vendasFriasImage from '../../assets/tez/vendasfrias.png'
import { ImageLayer } from '../ui/ImageLayer'
import { PriceText } from '../ui/PriceText'
import { ServiceModal } from '../ui/ServiceModal'
import { useServiceModalState } from '../ui/useServiceModalState'

type TezCatalogImageKey =
  | 'hydrafacialPiel'
  | 'limpiezaFacial'
  | 'tratamientoVarices'
  | 'radiofrecuenciaFraccionada'
  | 'radiofrecuenciaGeneral'
  | 'rejuvenecimientoVaginal'
  | 'packLipo'
  | 'criolipolisis'
  | 'cavitacion'
  | 'presoterapia'
  | 'maderoterapia'
  | 'radiofrecuenciaCorporal'
  | 'gimnasiaPasiva'
  | 'radiofrecuenciaGeneralCorporal'
  | 'drenajeLinfatico'
  | 'metaloterapia'
  | 'vendasFrias'
  | 'multifuncional'

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
  hydrafacialPiel: hydrafacialPielImage,
  limpiezaFacial: limpiezaFacialImage,
  tratamientoVarices: tratamientoVaricesImage,
  radiofrecuenciaFraccionada: radiofrecuenciaCorporalImage,
  radiofrecuenciaGeneral: radiofrecuenciaGeneralImage,
  rejuvenecimientoVaginal: rejuvenecimientoVaginalImage,
  packLipo: packLipoImage,
  criolipolisis: criolipolisisImage,
  cavitacion: cavitacionImage,
  presoterapia: presoterapiaImage,
  maderoterapia: maderoterapiaImage,
  radiofrecuenciaCorporal: radiofrecuenciaCorporalImage,
  gimnasiaPasiva: gimnasiaPasivaImage,
  radiofrecuenciaGeneralCorporal: radiofrecuenciaGeneralCorporalImage,
  drenajeLinfatico: drenajeLinfaticoImage,
  metaloterapia: metaloterapiaImage,
  vendasFrias: vendasFriasImage,
  multifuncional: multifuncionalImage,
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
      className="flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-white/75 bg-cream/65 shadow-[0_0_18px_rgba(31,53,43,0.24),0_8px_18px_rgba(31,53,43,0.16)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_22px_rgba(31,53,43,0.28),0_10px_22px_rgba(31,53,43,0.18)]"
    >
      <div className="aspect-[390/292] overflow-hidden rounded-b-[1.15rem]">
        <ImageLayer
          src={imageSrc}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col px-4 pb-4 pt-3 text-center text-forest">
        <h3 className="font-heading text-[1.82rem] font-semibold leading-[0.98] text-forest sm:text-[2rem]">
          {title}
        </h3>
        <p className="mt-2 line-clamp-3 min-h-[3.9rem] text-justify text-[0.94rem] font-medium leading-[1.4] text-forest-dark/88">
          {description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-4 pt-4 text-left">
          <span className="font-heading text-[1.55rem] font-semibold leading-none text-forest">
            <PriceText value={price} />
          </span>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              openModal()
            }}
            className="min-h-10 min-w-[8.5rem] rounded-full border border-pink px-5 py-2 text-[0.82rem] font-bold text-pink no-underline transition-colors duration-200 hover:bg-pink hover:text-white"
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
