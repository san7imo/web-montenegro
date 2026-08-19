import { PageShell } from '../../components/layout/PageShell'
import { ServiceCategoryGrid } from './sections/ServiceCategoryGrid'
import { ServiciosHero } from './sections/ServiciosHero'

export function ServiciosPage() {
  return (
    <PageShell footerTone="dark">
      <ServiciosHero />
      <ServiceCategoryGrid />
    </PageShell>
  )
}
