import { PageShell } from '../../components/layout/PageShell'
import { TezCatalog } from './sections/TezCatalog'
import { TezHero } from './sections/TezHero'

export function TezPage() {
  return (
    <PageShell footerTone="dark">
      <TezHero />
      <TezCatalog />
    </PageShell>
  )
}
