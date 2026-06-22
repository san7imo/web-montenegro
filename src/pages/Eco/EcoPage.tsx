import { PageShell } from '../../components/layout/PageShell'
import { EcoGallery } from './sections/EcoGallery'
import { EcoHero } from './sections/EcoHero'
import { EcoIntro } from './sections/EcoIntro'
import { EcoLeaveReview } from './sections/EcoLeaveReview'
import { EcoTestimonials } from './sections/EcoTestimonials'

export function EcoPage() {
  return (
    <PageShell footerTone="sage">
      <EcoHero />
      <EcoIntro />
      <EcoTestimonials />
      <EcoLeaveReview />
      <EcoGallery />
    </PageShell>
  )
}
