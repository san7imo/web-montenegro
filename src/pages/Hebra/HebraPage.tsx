import { PageShell } from '../../components/layout/PageShell'
import { HebraAtelier } from './sections/HebraAtelier'
import { HebraExperiences } from './sections/HebraExperiences'
import { HebraHero } from './sections/HebraHero'

export function HebraPage() {
  return (
    <PageShell footerTone="dark">
      <HebraHero />
      <HebraAtelier />
      <HebraExperiences />
    </PageShell>
  )
}
