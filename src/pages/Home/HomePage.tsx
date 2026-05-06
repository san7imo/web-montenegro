import { PageShell } from '../../components/layout/PageShell'
import { HomeHero } from './sections/HomeHero'
import { HomeIntro } from './sections/HomeIntro'
import { HomeServicesHighlight } from './sections/HomeServicesHighlight'

export function HomePage() {
  return (
    <PageShell footerTone="dark">
      <HomeHero />
      <HomeIntro />
      <HomeServicesHighlight />
    </PageShell>
  )
}
