import { serviceCatalog, categoryLabels, type ServiceCategory } from '../../data/serviceCatalog'
import { CatalogServiceCard } from '../cards/CatalogServiceCard'
import { Container } from './Container'
import { SectionTitle } from './SectionTitle'

export function CategoryCatalog({ category }: { category: ServiceCategory }) {
  const items = serviceCatalog.filter((service) => service.category === category)
  return (
    <section className="bg-cream py-14 text-forest sm:py-20">
      <Container className="!max-w-[68rem]">
        <SectionTitle as="h2" className="text-center">Experiencias de {categoryLabels[category]}</SectionTitle>
        <p className="type-body mx-auto mt-4 max-w-2xl text-center">Consulta las opciones de cada tratamiento, su duración y los bonos disponibles.</p>
        <div className="mt-10 space-y-7">{items.map((service) => <CatalogServiceCard key={service.id} service={service} />)}</div>
      </Container>
    </section>
  )
}
