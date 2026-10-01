import { PageShell } from '../../components/layout/PageShell'
import { CategoryCatalog } from '../../components/ui/CategoryCatalog'
import { Container } from '../../components/ui/Container'
import { SectionTitle } from '../../components/ui/SectionTitle'

const content = {
  lienzo: { title: 'Lienzo', subtitle: 'Maquillaje para tus momentos especiales.', description: 'Maquillaje de novia, quinceañeras, social y propuestas creativas. Descubre las pruebas, los servicios y los packs disponibles.' },
  lazo: { title: 'Lazo', subtitle: 'Bienestar para compartir.', description: 'Hidroterapia, masajes y rituales de agua para dos. Elige una experiencia de cuidado y relajación en compañía.' },
}

// Reuse the site's visual foundations until the category designs and artwork are approved.
export function NewCategoryPage({ category }: { category: 'lienzo' | 'lazo' }) {
  const page = content[category]
  return (
    <PageShell footerTone="dark">
      <section className="bg-forest px-6 pb-16 pt-36 text-cream sm:pt-44">
        <Container>
          <SectionTitle as="h1" variant="display" className="text-pink-soft">{page.title}</SectionTitle>
          <p className="type-lead mt-4">{page.subtitle}</p>
          <p className="type-body mt-6 max-w-3xl">{page.description}</p>
        </Container>
      </section>
      <CategoryCatalog category={category} />
    </PageShell>
  )
}
