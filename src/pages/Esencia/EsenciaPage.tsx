import { PageShell } from '../../components/layout/PageShell'
import { EsenciaCTA } from './sections/EsenciaCTA'
import { EsenciaHero } from './sections/EsenciaHero'
import { FounderLegacySection } from './sections/FounderLegacySection'
import { HistorySection } from './sections/HistorySection'
import { ValuesSection } from './sections/ValuesSection'

export function EsenciaPage() {
  return (
    <PageShell footerTone="dark">
      <EsenciaHero />
      <HistorySection />
      <ValuesSection />
      <FounderLegacySection />
      <EsenciaCTA />
    </PageShell>
  )
}
