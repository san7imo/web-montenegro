import { PageShell } from '../../components/layout/PageShell'
import { ContactAura } from './sections/ContactAura'
import { ContactDirect } from './sections/ContactDirect'
import { ContactForm } from './sections/ContactForm'
import { ContactHero } from './sections/ContactHero'
import { ContactIntro } from './sections/ContactIntro'

export function ContactoPage() {
  return (
    <PageShell footerTone="sage">
      <ContactHero />
      <ContactIntro />
      <ContactAura />
      <ContactDirect />
      <ContactForm />
    </PageShell>
  )
}
