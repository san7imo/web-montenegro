import { PageShell } from '../../components/layout/PageShell'
import { EsenciaCTA } from './sections/EsenciaCTA'
import { EsenciaHero } from './sections/EsenciaHero'
import { HistorySection } from './sections/HistorySection'
import { ValuesSection } from './sections/ValuesSection'

export function EsenciaPage() {
  return (
    <PageShell footerTone="sage">
      <EsenciaHero />
      <HistorySection />
      <ValuesSection />
      <EsenciaCTA />
    </PageShell>
  )
}
