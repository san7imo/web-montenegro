import { PageShell } from '../../components/layout/PageShell'
import { TactoClosing } from './sections/TactoClosing'
import { TactoHero } from './sections/TactoHero'
import { TactoMenu } from './sections/TactoMenu'

export function TactoPage() {
  return (
    <PageShell footerTone="dark">
      <TactoHero />
      <TactoMenu />
      <TactoClosing />
    </PageShell>
  )
}
