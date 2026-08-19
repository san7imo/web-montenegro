import { motion, useReducedMotion } from 'framer-motion'
import type { FormEvent } from 'react'

import { Button } from '../../../components/ui/Button'
import { Container } from '../../../components/ui/Container'
import { SectionTitle } from '../../../components/ui/SectionTitle'
import { contactoFormContent } from '../../../data/contacto'
import { buildWhatsAppContactUrl } from '../../../utils/whatsapp'

const inputClasses =
  'type-body-sm h-12 w-full rounded-full bg-white px-4 font-medium text-forest-dark shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] placeholder:text-forest-soft/52 focus:outline-none focus:ring-2 focus:ring-pink/45'

export function ContactForm() {
  const shouldReduceMotion = useReducedMotion()
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const firstName = String(formData.get('firstName') ?? '').trim()
    const lastName = String(formData.get('lastName') ?? '').trim()
    const phone = String(formData.get('phone') ?? '').trim()
    const email = String(formData.get('email') ?? '').trim()
    const message = String(formData.get('message') ?? '').trim()
    const fullName = [firstName, lastName].filter(Boolean).join(' ')
    const whatsappMessage = [
      'Hola, quiero realizar una consulta desde la web de Montenegro Salud y Belleza.',
      fullName ? `Nombre: ${fullName}` : '',
      phone ? `Teléfono: ${phone}` : '',
      email ? `Correo: ${email}` : '',
      message ? `Mensaje: ${message}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    window.open(
      buildWhatsAppContactUrl(whatsappMessage),
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <section className="bg-cream px-0 pb-18 pt-14 text-forest sm:pb-22 sm:pt-16 lg:pb-[7.5rem] lg:pt-[4.8rem]">
      <Container className="!max-w-[74rem]">
        <motion.div
          className="text-center"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24, filter: 'blur(6px)' }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.78, ease: 'easeOut' }}
        >
          <SectionTitle
            as="h2"
            className="text-forest"
          >
            {contactoFormContent.title}
          </SectionTitle>
          <p className="type-body -mt-1 font-bold text-pink">
            {contactoFormContent.subtitle}
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="mt-6 rounded-[1.45rem] border border-white/75 bg-white/10 px-6 pb-6 pt-7 text-left shadow-[0_4px_7px_rgba(36,61,49,0.16)] sm:px-10 sm:pb-7 lg:px-[4rem]"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24, filter: 'blur(6px)' }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.16 }}
          transition={{ delay: 0.08, duration: 0.78, ease: 'easeOut' }}
        >
          <div className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
            <label className="block">
              <span className="type-caption mb-1.5 block font-bold text-forest-soft">
                {contactoFormContent.fields.firstName}
              </span>
              <input className={inputClasses} type="text" name="firstName" autoComplete="given-name" required />
            </label>
            <label className="block">
              <span className="type-caption mb-1.5 block font-bold text-forest-soft">
                {contactoFormContent.fields.lastName}
              </span>
              <input className={inputClasses} type="text" name="lastName" autoComplete="family-name" />
            </label>
            <label className="block">
              <span className="type-caption mb-1.5 block font-bold text-forest-soft">
                {contactoFormContent.fields.phone}
              </span>
              <input
                className={inputClasses}
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="XXX XX XX XX"
              />
            </label>
            <label className="block">
              <span className="type-caption mb-1.5 block font-bold text-forest-soft">
                {contactoFormContent.fields.email}
              </span>
              <input
                className={inputClasses}
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Ejemplo@montenegro.com"
                required
              />
            </label>
          </div>

          <label className="mt-4 block">
            <span className="type-caption mb-1.5 block font-bold text-forest-soft">
              {contactoFormContent.fields.message}
            </span>
            <textarea
              className="type-body-sm min-h-[11.5rem] w-full resize-y rounded-[1.35rem] bg-white px-4 py-4 font-medium text-forest-dark placeholder:text-forest-soft/52 focus:outline-none focus:ring-2 focus:ring-pink/45 sm:min-h-[12.5rem]"
              name="message"
              placeholder="Escribe tu mensaje..."
              required
            />
          </label>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="type-body-sm font-bold text-forest-soft">
              {contactoFormContent.helper}
            </p>
            <Button
              type="submit"
              variant="outline"
              className="min-h-10 min-w-[13rem] border-pink bg-transparent px-6 py-2 tracking-[0.04em] !text-pink shadow-none hover:bg-pink hover:!text-white"
            >
              {contactoFormContent.submitLabel}
            </Button>
          </div>
        </motion.form>
      </Container>
    </section>
  )
}
