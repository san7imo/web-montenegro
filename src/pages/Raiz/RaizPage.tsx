import { PageShell } from '../../components/layout/PageShell'
import { RaizHero } from './sections/RaizHero'
import { RaizTechnology } from './sections/RaizTechnology'

export function RaizPage() {
  return (
    <PageShell footerTone="sage">
      <RaizHero />
      <RaizTechnology />
    </PageShell>
  )
}
