import { PageShell } from '../../components/layout/PageShell'
import { BroteExperiences } from './sections/BroteExperiences'
import { BroteHero } from './sections/BroteHero'

export function BrotePage() {
  return (
    <PageShell footerTone="sage">
      <BroteHero />
      <BroteExperiences />
    </PageShell>
  )
}
