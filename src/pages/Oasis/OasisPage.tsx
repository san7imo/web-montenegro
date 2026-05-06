import { PageShell } from '../../components/layout/PageShell'
import { OasisBenefits } from './sections/OasisBenefits'
import { OasisHero } from './sections/OasisHero'
import { PurificationExperiences } from './sections/PurificationExperiences'

export function OasisPage() {
  return (
    <PageShell footerTone="dark">
      <OasisHero />
      <PurificationExperiences />
      <OasisBenefits />
    </PageShell>
  )
}
