import { motion, useReducedMotion } from 'framer-motion'
import type { FormEvent } from 'react'
import { useState } from 'react'

import { Button } from '../../../components/ui/Button'
import { Container } from '../../../components/ui/Container'
import { PrivacyCheckbox } from '../../../components/ui/PrivacyCheckbox'
import { SectionTitle } from '../../../components/ui/SectionTitle'
import { contactoFormContent } from '../../../data/contacto'
import { formspreeEndpoints } from '../../../data/forms'
import {
  FormSubmissionError,
  type FormSubmissionStatus,
  submitFormspreeForm,
} from '../../../utils/formspree'

const inputClasses =
  'type-body-sm h-12 w-full rounded-full bg-white px-4 font-medium text-forest-dark shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] placeholder:text-forest-soft/52 focus:outline-none focus:ring-2 focus:ring-pink/45'

export function ContactForm() {
  const shouldReduceMotion = useReducedMotion()
  const [submissionStatus, setSubmissionStatus] = useState<FormSubmissionStatus>('idle')
  const [submissionMessage, setSubmissionMessage] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (submissionStatus === 'submitting') return

    const form = event.currentTarget
    const formData = new FormData(form)
    const firstName = String(formData.get('firstName') ?? '').trim()
    const lastName = String(formData.get('lastName') ?? '').trim()
    const fullName = [firstName, lastName].filter(Boolean).join(' ')

    formData.set('name', fullName || firstName)
    formData.set('subject', `Nuevo mensaje web de ${fullName || 'un visitante'}`)
    formData.set('formulario', 'Contacto web')
    formData.set('fecha', new Date().toISOString())
    formData.set('origen', window.location.href)
    formData.set('versionPrivacidad', '2026-08-19')

    setSubmissionStatus('submitting')
    setSubmissionMessage('Enviando tu mensaje…')

    try {
      await submitFormspreeForm(formspreeEndpoints.contact, formData)
      form.reset()
      setSubmissionStatus('success')
      setSubmissionMessage('Tu mensaje se envió correctamente. Nos pondremos en contacto contigo.')
    } catch (error) {
      setSubmissionStatus('error')
      setSubmissionMessage(
        error instanceof FormSubmissionError
          ? error.message
          : 'No pudimos enviar el mensaje. Inténtalo de nuevo en unos minutos.',
      )
    }
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
          aria-busy={submissionStatus === 'submitting'}
          className="mt-6 rounded-[1.45rem] border border-white/75 bg-white/10 px-6 pb-6 pt-7 text-left shadow-[0_4px_7px_rgba(36,61,49,0.16)] sm:px-10 sm:pb-7 lg:px-[4rem]"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24, filter: 'blur(6px)' }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.16 }}
          transition={{ delay: 0.08, duration: 0.78, ease: 'easeOut' }}
        >
          <div className="absolute left-[-9999px]" aria-hidden="true">
            <label htmlFor="contact-website">No completar este campo</label>
            <input
              id="contact-website"
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

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
                placeholder="600 000 000"
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
                placeholder="nombre@ejemplo.com"
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

          <div className="mt-5 rounded-[1.15rem] border border-forest/10 bg-white/26 px-4 py-4">
            <PrivacyCheckbox
              id="contact-privacy"
              name="informacionPrivacidadConfirmada"
              value="Sí, he sido informado/a"
              label="Confirmo que he leído la información sobre el tratamiento de mis datos."
              description="Responsable: Montenegro Salud y Belleza. Finalidad: responder a esta consulta y gestionar la solicitud enviada."
            />
          </div>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="type-body-sm font-bold text-forest-soft">
              {contactoFormContent.helper}
            </p>
            <Button
              type="submit"
              variant="outline"
              disabled={submissionStatus === 'submitting'}
              className="min-h-10 min-w-[13rem] border-pink bg-transparent px-6 py-2 tracking-[0.04em] !text-pink shadow-none hover:bg-pink hover:!text-white disabled:cursor-not-allowed disabled:opacity-55 disabled:hover:bg-transparent disabled:hover:!text-pink"
            >
              {submissionStatus === 'submitting' ? 'ENVIANDO…' : contactoFormContent.submitLabel}
            </Button>
          </div>

          <p
            role={submissionStatus === 'error' ? 'alert' : 'status'}
            aria-live="polite"
            className={[
              'type-body-sm mt-4 min-h-[1.5rem] text-center font-semibold sm:text-right',
              submissionStatus === 'error' ? 'text-pink-dark' : 'text-forest',
            ].join(' ')}
          >
            {submissionMessage}
          </p>
        </motion.form>
      </Container>
    </section>
  )
}
