import asiaticaImage from '../../assets/raiz/asiatica.webp'
import cavitacionImage from '../../assets/raiz/cavitacion.webp'
import criolipolisisImage from '../../assets/raiz/criolipolisis.png'
import dermapenImage from '../../assets/raiz/dermapen.webp'
import hollywoodPeelingImage from '../../assets/raiz/hollywood-peeling.webp'
import laserLuminageImage from '../../assets/raiz/laser-luminage.webp'
import multifuncionalImage from '../../assets/raiz/multifuncional.webp'
import presoterapiaImage from '../../assets/raiz/presoterapia1.png'
import radiofrecuenciaFraccionadaImage from '../../assets/raiz/radiofrecuencia-fraccionada.webp'
import radiofrecuenciaImage from '../../assets/raiz/radiofrecuencia.png'
import vacuumImage from '../../assets/raiz/vacuum.webp'
import { ImageLayer } from '../ui/ImageLayer'
import { PriceText } from '../ui/PriceText'
import { ServiceModal } from '../ui/ServiceModal'
import { useServiceModalState } from '../ui/useServiceModalState'

type RaizTechnologyImageKey =
  | 'asiatica'
  | 'cavitacion'
  | 'dermapen'
  | 'hollywoodPeeling'
  | 'laserLuminage'
  | 'multifuncional'
  | 'presoterapia'
  | 'criolipolisis'
  | 'radiofrecuencia'
  | 'radiofrecuenciaFraccionada'
  | 'vacuum'

type RaizTechnologyCardProps = {
  id: string
  title: string
  description: string
  duration: string
  price: string
  image?: RaizTechnologyImageKey
  placeholder?: string
}

const imageByKey: Record<RaizTechnologyImageKey, string> = {
  asiatica: asiaticaImage,
  cavitacion: cavitacionImage,
  dermapen: dermapenImage,
  hollywoodPeeling: hollywoodPeelingImage,
  laserLuminage: laserLuminageImage,
  multifuncional: multifuncionalImage,
  presoterapia: presoterapiaImage,
  criolipolisis: criolipolisisImage,
  radiofrecuencia: radiofrecuenciaImage,
  radiofrecuenciaFraccionada: radiofrecuenciaFraccionadaImage,
  vacuum: vacuumImage,
}

export function RaizTechnologyCard({
  id,
  title,
  description,
  duration,
  price,
  image,
  placeholder,
}: RaizTechnologyCardProps) {
  const { closeModal, isModalOpen, openModal } = useServiceModalState(id)
  const imageSrc = image ? imageByKey[image] : dermapenImage

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
      className="flex h-[40rem] cursor-pointer flex-col overflow-hidden rounded-[1.9rem] border border-cream-light/35 bg-forest/18 text-white shadow-[0_14px_34px_rgba(18,34,27,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(18,34,27,0.26)] lg:h-[42rem]"
    >
      <div className="relative aspect-square shrink-0 overflow-hidden">
        {image ? (
          <ImageLayer
            src={imageSrc}
            alt={title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="type-eyebrow flex h-full w-full items-start justify-center bg-cream px-6 pt-16 text-center text-forest-deep">
            {placeholder}
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 h-[58%] bg-[linear-gradient(180deg,rgba(31,53,43,0)_0%,rgba(31,53,43,0.72)_58%,rgba(31,53,43,0.94)_100%)]" />
        <h3 title={title} className="type-card-title-compact absolute inset-x-5 bottom-5 line-clamp-2 text-center text-pink-soft drop-shadow-[0_8px_16px_rgba(18,28,22,0.42)]">
          {title}
        </h3>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <p title={description} className="type-body line-clamp-6 min-h-[10.5rem] text-justify font-medium text-white/95">
          {description}
        </p>
        <div className="mt-auto flex items-center justify-between gap-4 pt-4">
          <PriceText value={price} className="type-price text-pink-soft" />
          <span className="type-eyebrow rounded-full border border-pink-soft/70 px-4 py-2 text-pink-soft">
            Ver tarifas
          </span>
        </div>
      </div>
    </article>
    <ServiceModal
      isOpen={isModalOpen}
      onClose={closeModal}
      category="raiz"
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
