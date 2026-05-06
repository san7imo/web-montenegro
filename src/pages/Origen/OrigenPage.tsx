import { PageShell } from '../../components/layout/PageShell'
import { BridgeSection } from './sections/BridgeSection'
import { GrandfatherCorner } from './sections/GrandfatherCorner'
import { OrigenHero } from './sections/OrigenHero'
import { WisdomPillars } from './sections/WisdomPillars'

export function OrigenPage() {
  return (
    <PageShell footerTone="sage">
      <OrigenHero />
      <BridgeSection />
      <WisdomPillars />
      <GrandfatherCorner />
    </PageShell>
  )
}
