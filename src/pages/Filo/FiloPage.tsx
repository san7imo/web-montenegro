import { PageShell } from '../../components/layout/PageShell'
import { FiloClosing } from './sections/FiloClosing'
import { FiloExperiences } from './sections/FiloExperiences'
import { FiloHero } from './sections/FiloHero'

export function FiloPage() {
  return (
    <PageShell footerTone="dark">
      <FiloHero />
      <FiloExperiences />
      <FiloClosing />
    </PageShell>
  )
}
