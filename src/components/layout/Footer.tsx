import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import type { FormEvent } from 'react'
import { useState } from 'react'

import footerLogo from '../../assets/logo/montenegro-logo-footer.webp'
import { footerContent } from '../../data/footer'
import { formspreeEndpoints } from '../../data/forms'
import {
  FormSubmissionError,
  type FormSubmissionStatus,
  submitFormspreeForm,
} from '../../utils/formspree'
import { showCookiePreferences } from '../../utils/cookieConsent'
import { Container } from '../ui/Container'
import { PrivacyCheckbox } from '../ui/PrivacyCheckbox'

type FooterTone = 'dark' | 'sage'

type FooterProps = {
  tone?: FooterTone
}

const toneStyles: Record<FooterTone, { wrapper: string; copy: string }> = {
  dark: {
    wrapper: 'bg-forest text-white',
    copy: 'text-cream-light/48',
  },
  sage: {
    wrapper: 'bg-[#8b977b] text-white',
    copy: 'text-forest-deep/52',
  },
}

const socialIconMap = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  whatsapp: FaWhatsapp,
  tiktok: FaTiktok,
} as const

export function Footer({ tone = 'dark' }: FooterProps) {
  const toneClass = toneStyles[tone]
  const [submissionStatus, setSubmissionStatus] = useState<FormSubmissionStatus>('idle')
  const [submissionMessage, setSubmissionMessage] = useState('')

  const handleNewsletterSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (submissionStatus === 'submitting') return

    const form = event.currentTarget
    const formData = new FormData(form)
    const email = String(formData.get('newsletterEmail') ?? '').trim()

    if (!email) return

    formData.set('email', email)
    formData.set('subject', 'Nueva suscripción al newsletter de Montenegro')
    formData.set('formulario', 'Newsletter')
    formData.set('fecha', new Date().toISOString())
    formData.set('origen', window.location.href)
    formData.set('versionPrivacidad', '2026-08-19')

    setSubmissionStatus('submitting')
    setSubmissionMessage('Enviando…')

    try {
      await submitFormspreeForm(formspreeEndpoints.newsletter, formData)
      form.reset()
      setSubmissionStatus('success')
      setSubmissionMessage('¡Gracias! Hemos recibido tu suscripción.')
    } catch (error) {
      setSubmissionStatus('error')
      setSubmissionMessage(
        error instanceof FormSubmissionError
          ? error.message
          : 'No pudimos completar la suscripción. Inténtalo de nuevo.',
      )
    }
  }

  return (
    <footer className={toneClass.wrapper}>
      <Container className="py-10 sm:py-11 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.18fr_0.66fr_0.66fr_1.02fr] lg:gap-10">
          <div className="space-y-4">
            <img
              src={footerLogo}
              alt="Montenegro Salud y Belleza"
              className="h-[7.5rem] w-auto sm:h-[8.5rem] lg:h-[9rem]"
              loading="lazy"
            />
            <div className="type-body-sm space-y-0.5 text-white/88">
              {footerContent.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div className="type-body-sm space-y-0.5 text-white/88">
              {footerContent.scheduleLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="type-eyebrow text-white">
              Navegación
            </p>
            <ul className="type-body-sm space-y-0.5 text-white/88">
              {footerContent.navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="transition-opacity duration-200 hover:opacity-80">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="type-eyebrow text-white">
              Legal
            </p>
            <ul className="type-body-sm space-y-0.5 text-white/88">
              {footerContent.legalLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="transition-opacity duration-200 hover:opacity-80">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => void showCookiePreferences()}
              className="type-body-sm text-left text-white/88 underline decoration-white/35 underline-offset-4 transition-colors hover:text-white"
            >
              Configurar cookies
            </button>
          </div>

          <div className="space-y-4">
            <p className="type-eyebrow text-white">
              Newsletter
            </p>
            <p className="type-body-sm max-w-[18rem] text-white/88">
              {footerContent.newsletter}
            </p>
            <div className="max-w-[294px]">
              <form
                onSubmit={handleNewsletterSubmit}
                aria-busy={submissionStatus === 'submitting'}
                className="max-w-[294px]"
              >
                <div className="absolute left-[-9999px]" aria-hidden="true">
                  <label htmlFor="newsletter-website">No completar este campo</label>
                  <input
                    id="newsletter-website"
                    type="text"
                    name="_gotcha"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
                <div className="flex overflow-hidden rounded-[16px] bg-white/92">
                  <input
                    type="email"
                    name="newsletterEmail"
                    autoComplete="email"
                    required
                    disabled={submissionStatus === 'submitting'}
                    aria-label="Correo electrónico"
                    placeholder={footerContent.newsletterPlaceholder}
                    className="type-body-sm min-w-0 flex-1 bg-transparent px-4 py-3 text-forest-dark placeholder:text-forest-dark/34 focus:outline-none disabled:cursor-wait disabled:opacity-60"
                  />
                  <button
                    type="submit"
                    disabled={submissionStatus === 'submitting'}
                    className="type-body-sm bg-white/24 px-5 py-3 font-medium text-white transition-colors duration-300 hover:bg-white/28 disabled:cursor-wait disabled:opacity-60"
                  >
                    {submissionStatus === 'submitting'
                      ? 'Enviando…'
                      : footerContent.newsletterButtonLabel}
                  </button>
                </div>

                <div className="mt-3">
                  <PrivacyCheckbox
                    id="newsletter-privacy"
                    name="consentimientoComercial"
                    value="Sí, consentimiento expreso"
                    tone="dark"
                    label="Quiero recibir por correo novedades, promociones y noticias de Montenegro Salud y Belleza."
                    description="Puedes retirar tu consentimiento en cualquier momento."
                  />
                </div>

                <p
                  role={submissionStatus === 'error' ? 'alert' : 'status'}
                  aria-live="polite"
                  className={[
                    'type-caption mt-2 min-h-[1.25rem] max-w-[294px] font-semibold',
                    submissionStatus === 'error' ? 'text-pink-soft' : 'text-white/82',
                  ].join(' ')}
                >
                  {submissionMessage}
                </p>
              </form>
            </div>
            <div className="flex items-center gap-4 pt-1 text-white">
              {footerContent.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-opacity duration-200 hover:opacity-80"
                >
                  {(() => {
                    const Icon = socialIconMap[link.platform]
                    return <Icon aria-hidden="true" className="h-5 w-5" />
                  })()}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={['type-body-sm pt-10 text-center sm:pt-12', toneClass.copy].join(' ')}>
          <p>{footerContent.copyright}</p>
          <p>
            {footerContent.creditHref ? (
              <a
                href={footerContent.creditHref}
                target="_blank"
                rel="noreferrer"
                className="font-bold transition-opacity duration-200 hover:opacity-80"
              >
                {footerContent.credit}
              </a>
            ) : (
              footerContent.credit
            )}
          </p>
        </div>
      </Container>
    </footer>
  )
}
