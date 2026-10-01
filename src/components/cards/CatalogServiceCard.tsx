import type { ServiceCatalogItem } from '../../data/serviceCatalog'
import { DeferredServiceModal } from '../ui/DeferredServiceModal'
import { PriceText } from '../ui/PriceText'
import { ServiceArtwork } from '../ui/ServiceArtwork'
import { useServiceModalState } from '../ui/useServiceModalState'

export function CatalogServiceCard({ service }: { service: ServiceCatalogItem }) {
  const { closeModal, isModalOpen, openModal } = useServiceModalState(service.id)
  return (
    <>
      <article className="overflow-hidden rounded-[2rem] border border-white/75 bg-cream-light p-3 shadow-[0_8px_24px_rgba(31,53,43,0.18)] sm:grid sm:grid-cols-[14rem_1fr] sm:gap-6">
        <div className="aspect-square w-full min-w-0 overflow-hidden rounded-[1.5rem] sm:aspect-auto sm:h-full sm:min-h-64">
          <ServiceArtwork image={service.image} title={service.title} />
        </div>
        <div className="flex min-w-0 flex-col p-4">
          <h3 className="type-card-title text-forest">{service.title}</h3>
          <p className="type-body-sm mt-3 line-clamp-4 text-forest-dark/90">{service.description.replace(/^Descripción:\s*/i, '')}</p>
          <dl className="type-body-sm mt-5 space-y-1 font-semibold">
            <div><dt className="inline">Duración: </dt><dd className="inline">{service.duration || 'Consultar'}</dd></div>
            <div><dt className="inline">Precio: </dt><dd className="inline"><PriceText value={service.price} /></dd></div>
          </dl>
          <button type="button" onClick={openModal} className="type-action mt-5 min-h-11 self-start rounded-full border border-pink px-6 py-2 font-bold text-pink transition-colors hover:bg-pink hover:text-white focus-visible:ring-2 focus-visible:ring-pink" aria-label={`Ver opciones, tarifas y bonos de ${service.title}`}>
            Ver opciones y reservar
          </button>
        </div>
      </article>
      <DeferredServiceModal isOpen={isModalOpen} onClose={closeModal} category={service.category} serviceId={service.id} title={service.title} description={service.description} image={service.image} price={service.price} duration={service.duration} />
    </>
  )
}
