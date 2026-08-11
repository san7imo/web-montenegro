import type { HTMLAttributes, ReactNode } from 'react'
import { useEffect, useMemo, useState } from 'react'
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import {
  FiArrowRight,
  FiCheckCircle,
  FiCopy,
  FiGift,
  FiHeart,
  FiMessageCircle,
  FiPlus,
  FiShare2,
  FiSmile,
  FiStar,
} from 'react-icons/fi'

import logo from '../../assets/logo/montenegro-logo-footer.webp'
import symbol from '../../assets/logo/montenegro-symbol.webp'
import { serviceNavigationLinks } from '../../data/navigation'
import { buildWhatsAppUrl, LINKS, MESSAGES } from './clubConfig'

type ClubCardProps = {
  children: ReactNode
  className?: string
  surface?: 'light' | 'dark' | 'solid' | 'warm'
} & HTMLAttributes<HTMLElement>

type ActionLinkProps = {
  children: ReactNode
  className?: string
  disabled?: boolean
  href?: string
  icon?: ReactNode
  onClick?: () => void
  target?: '_blank'
  tone?: 'primary' | 'light' | 'outline' | 'soft'
}

const clubServices = [
  ...serviceNavigationLinks,
  { label: 'ECO', href: '/eco', description: 'Universo Montenegro' },
]

const toneStyles = {
  primary:
    'border-pink bg-pink text-white shadow-[0_18px_36px_rgba(194,11,114,0.28)] hover:bg-pink-dark',
  light:
    'border-forest/10 bg-white text-forest-dark shadow-[0_12px_28px_rgba(36,61,49,0.08)] hover:border-pink/28 hover:text-pink',
  outline:
    'border-forest/18 bg-transparent text-forest-dark hover:border-pink/36 hover:bg-white/52',
  soft:
    'border-pink/14 bg-pink/8 text-pink hover:border-pink/28 hover:bg-pink/12',
}

const cardSurfaceStyles = {
  dark: 'border-forest bg-forest text-white',
  light: 'border-white/76 bg-white/72 text-forest-dark',
  solid: 'border-pink/18 bg-white text-forest-dark shadow-[0_22px_62px_rgba(194,11,114,0.14)]',
  warm: 'border-white/62 bg-[#efe4d4] text-forest-dark',
}

function ClubCard({ children, className = '', surface = 'light', ...props }: ClubCardProps) {
  return (
    <section
      className={[
        'rounded-[28px] border p-5 shadow-[0_20px_58px_rgba(36,61,49,0.1)] backdrop-blur-sm',
        cardSurfaceStyles[surface],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </section>
  )
}

function ActionLink({
  children,
  className = '',
  disabled = false,
  href,
  icon,
  onClick,
  target,
  tone = 'light',
}: ActionLinkProps) {
  const classes = [
    'inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full border px-5 py-3 text-center text-[0.82rem] font-semibold leading-5 transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2',
    toneStyles[tone],
    disabled ? 'cursor-not-allowed opacity-70 hover:bg-pink' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {icon ? <span className="shrink-0 text-[1.05rem]" aria-hidden="true">{icon}</span> : null}
      <span className="min-w-0">{children}</span>
    </>
  )

  if (href) {
    return (
      <a href={href} target={target} rel={target ? 'noreferrer' : undefined} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={classes}
      disabled={disabled}
      aria-disabled={disabled}
      title={disabled ? 'Enlace pendiente' : undefined}
    >
      {content}
    </button>
  )
}

function isMobileViewport() {
  if (typeof window === 'undefined') {
    return false
  }

  return window.matchMedia('(max-width: 767px), (pointer: coarse)').matches
}

export function ClubPage() {
  const [toast, setToast] = useState('')
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false)

  const reviewUrl = useMemo(() => LINKS.googleReview, [])

  useEffect(() => {
    document.title = 'Club Montenegro | Montenegro Salud y Belleza'

    const description =
      'Accede al Club Montenegro, activa beneficios exclusivos, reserva tu próxima cita, comparte tu experiencia y descubre tratamientos premium de belleza y bienestar.'
    let metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]')

    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.name = 'description'
      document.head.appendChild(metaDescription)
    }

    metaDescription.content = description
  }, [])

  useEffect(() => {
    if (!toast) {
      return
    }

    const timeout = window.setTimeout(() => setToast(''), 2600)

    return () => window.clearTimeout(timeout)
  }, [toast])

  function openInstagramStory() {
    if (!isMobileViewport()) {
      window.open(LINKS.instagram, '_blank', 'noreferrer')
      return
    }

    window.location.href = LINKS.instagramStory
    window.setTimeout(() => {
      window.location.href = LINKS.instagram
    }, 1000)
  }

  async function handleNativeShare() {
    const shareData = {
      title: 'Montenegro Salud y Belleza',
      text: MESSAGES.invite,
      url: LINKS.website,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
        return
      }

      await navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`)
      setToast('Enlace copiado al portapapeles.')
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        return
      }

      try {
        await navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`)
        setToast('Enlace copiado al portapapeles.')
      } catch {
        setToast('Copia este enlace: montenegrosaludybelleza.com')
      }
    }
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f3ea] px-4 py-5 text-forest-dark sm:px-6">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(241,198,218,0.28),transparent_32rem),linear-gradient(180deg,#fbf7ef_0%,#f1e8d9_100%)]" />

      <div className="mx-auto flex w-full max-w-[430px] flex-col gap-4 pb-8">
        <header className="rounded-b-[32px] px-4 pb-2 pt-4 text-center">
          <img
            src={logo}
            alt="Montenegro Salud y Belleza"
            className="mx-auto h-[8.25rem] w-auto object-contain opacity-95 [filter:brightness(0)_saturate(100%)_invert(25%)_sepia(17%)_saturate(651%)_hue-rotate(93deg)_brightness(92%)_contrast(88%)]"
            loading="eager"
          />
          <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-pink">
            Bienvenida al Club Montenegro
          </p>
          <h1 className="mt-3 font-heading text-[2.25rem] font-semibold leading-[0.95] text-forest-dark">
            Tu experiencia continúa después de tu visita.
          </h1>
          <p className="mx-auto mt-4 max-w-[19rem] text-[0.92rem] leading-6 text-forest-dark/70">
            Accede a beneficios, comparte tu experiencia y reserva tu próximo momento de bienestar.
          </p>
        </header>

        <ActionLink
          href={LINKS.lipoSweepstakes || undefined}
          target={LINKS.lipoSweepstakes ? '_blank' : undefined}
          disabled={!LINKS.lipoSweepstakes}
          tone="primary"
          icon={<FiGift />}
          className="min-h-14 text-[0.86rem] shadow-[0_20px_42px_rgba(194,11,114,0.3)]"
        >
          Sorteo: Lipo Sin Cirugía
        </ActionLink>

        <ClubCard surface="dark">
          <div className="flex items-start gap-4">
            <img src={symbol} alt="" className="mt-1 h-10 w-10 object-contain opacity-86" loading="lazy" />
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-pink-soft">
                Queremos escucharte
              </p>
              <h2 className="mt-4 font-heading text-[1.85rem] font-semibold leading-[1.08]">
                ¿Cómo ha sido tu experiencia hoy con nosotros?
              </h2>
            </div>
          </div>

          <div className="mt-5 grid gap-3">
            <ActionLink href={reviewUrl} target="_blank" tone="primary" icon={<FiSmile />}>
              ¡Genial!
            </ActionLink>
            <ActionLink href={buildWhatsAppUrl(MESSAGES.suggestion)} target="_blank" tone="outline" icon={<FiMessageCircle />} className="border-white/22 text-white hover:bg-white/10 hover:text-white">
              Quiero dejar una sugerencia
            </ActionLink>
          </div>
        </ClubCard>

        <ClubCard surface="solid" className="p-6 text-center">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-pink">
            Beneficio exclusivo
          </p>
          <h2 className="mt-3 font-heading text-[2rem] font-semibold leading-none text-forest-dark">
            Recibe un 5% de descuento por contar tu experiencia
          </h2>
          <p className="mx-auto mt-3 max-w-[18rem] text-[0.9rem] leading-6 text-forest-dark/68">
            Completa estos dos pasos para conseguirlo:
          </p>

          <div className="mt-5 grid gap-2.5 text-left">
            <a
              href={LINKS.googleReview}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-14 items-center gap-3 rounded-2xl border border-forest/10 bg-[#fbf8f1] px-4 py-3 text-forest-dark transition duration-300 hover:border-pink/28 hover:bg-white"
            >
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pink/10 text-pink">
                <FiStar aria-hidden="true" />
              </span>
              <span>
                <span className="block text-[0.82rem] font-semibold">1. Valóranos en Google</span>
                <span className="mt-0.5 block text-[0.74rem] leading-4 text-forest-dark/58">
                  Cuenta cómo fue tu visita de hoy.
                </span>
              </span>
            </a>

            <button
              type="button"
              onClick={openInstagramStory}
              className="flex min-h-14 items-center gap-3 rounded-2xl border border-forest/10 bg-[#fbf8f1] px-4 py-3 text-left text-forest-dark transition duration-300 hover:border-pink/28 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2"
            >
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pink/10 text-pink">
                <FaInstagram aria-hidden="true" />
              </span>
              <span>
                <span className="block text-[0.82rem] font-semibold">
                  2. Sube una story etiquetándonos
                </span>
                <span className="mt-0.5 block text-[0.74rem] leading-4 text-forest-dark/58">
                  Menciona a @montenegrosaludbelleza.
                </span>
              </span>
            </button>
          </div>

          <ActionLink
            href={buildWhatsAppUrl(MESSAGES.discount)}
            target="_blank"
            tone="primary"
            icon={<FiCheckCircle />}
            className="mt-5 min-h-14 text-[0.82rem] shadow-[0_20px_40px_rgba(194,11,114,0.32)]"
          >
            Listo, aplicar descuento.
          </ActionLink>
        </ClubCard>

        <ClubCard>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-pink">
            Reserva y regala
          </p>
          <h2 className="mt-2 font-heading text-[1.75rem] font-semibold leading-none">
            Continúa tu ritual cuando quieras.
          </h2>
          <div className="mt-5 grid gap-3">
            <ActionLink href={buildWhatsAppUrl(MESSAGES.booking)} target="_blank" icon={<FiHeart />}>
              Agendar mi próxima visita
            </ActionLink>
            <ActionLink href={buildWhatsAppUrl(MESSAGES.giftCards)} target="_blank" icon={<FiGift />}>
              Regalar una experiencia
            </ActionLink>
            <ActionLink href={buildWhatsAppUrl(MESSAGES.treatments)} target="_blank" tone="soft" icon={<FiArrowRight />}>
              Explorar tratamientos
            </ActionLink>
          </div>
        </ClubCard>

        <ClubCard id="tratamientos">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-pink">
            Tratamientos
          </p>
          <button
            type="button"
            aria-expanded={isTreatmentsOpen}
            aria-controls="club-treatments-menu"
            onClick={() => setIsTreatmentsOpen((current) => !current)}
            className="mt-2 flex w-full items-center justify-between gap-4 rounded-2xl border border-forest/10 bg-[#fbf8f1] px-4 py-3 text-left transition duration-300 hover:border-pink/28 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2"
          >
            <span className="font-heading text-[1.55rem] font-semibold leading-none text-forest-dark">
              Elige tu universo de cuidado.
            </span>
            <span
              aria-hidden="true"
              className={[
                'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-pink text-white shadow-[0_10px_24px_rgba(194,11,114,0.2)] transition duration-300',
                isTreatmentsOpen ? 'rotate-45' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <FiPlus className="h-5 w-5" />
            </span>
          </button>

          <div
            id="club-treatments-menu"
            className={[
              'grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-300 ease-out',
              isTreatmentsOpen ? 'mt-4 grid-rows-[1fr] opacity-100' : 'mt-0 grid-rows-[0fr] opacity-0',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <div className="min-h-0">
              <div className="grid gap-2.5">
                {clubServices.map((service) => (
                  <a
                    key={service.href}
                    href={service.href}
                    className="group flex min-h-14 items-center justify-between gap-4 rounded-2xl border border-forest/10 bg-[#fbf8f1] px-4 py-3 transition duration-300 hover:border-pink/28 hover:bg-white"
                  >
                    <span>
                      <span className="block text-[0.86rem] font-semibold uppercase tracking-[0.12em] text-forest-dark">
                        {service.label}
                      </span>
                      <span className="mt-1 block text-[0.78rem] leading-4 text-forest-dark/62">
                        {service.description}
                      </span>
                    </span>
                    <FiArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-pink transition duration-300 group-hover:translate-x-0.5"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </ClubCard>

        <ClubCard>
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-pink">
            Zona Selfie
          </p>
          <h2 className="mt-2 font-heading text-[1.75rem] font-semibold leading-none">
            Presume tu resultado.
          </h2>
          <div className="mt-5 grid gap-3">
            <ActionLink onClick={openInstagramStory} tone="primary" icon={<FaInstagram />}>
              Sube una Story
            </ActionLink>
            <ActionLink href={LINKS.instagram} target="_blank" tone="light" icon={<FiMessageCircle />}>
              Comenta en nuestro último post
            </ActionLink>
            <p className="px-2 pt-1 text-center text-[0.76rem] leading-5 text-forest-dark/62">
              Hazte una foto en nuestro espejo y menciona a @montenegrosaludbelleza.
              Aura te enviará un detalle exclusivo por privado.
            </p>
          </div>
        </ClubCard>

        <ClubCard surface="warm">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-pink">
            Club de Recomendaciones
          </p>
          <h2 className="mt-2 font-heading text-[1.8rem] font-semibold leading-none">
            Comparte Montenegro con alguien especial.
          </h2>
          <div className="mt-5 grid gap-3">
            <ActionLink href={buildWhatsAppUrl(MESSAGES.referral)} target="_blank" icon={<FaWhatsapp />}>
              Regalar un 5% dto
            </ActionLink>
            <ActionLink onClick={handleNativeShare} tone="soft" icon={<FiShare2 />}>
              Invitar amigos a Montenegro
            </ActionLink>
          </div>
        </ClubCard>

        <footer className="px-4 pb-3 pt-5 text-center">
          <div className="flex items-center justify-center gap-3 text-forest-dark">
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram de Montenegro Salud y Belleza"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-forest/10 bg-white/70 text-pink shadow-[0_10px_24px_rgba(36,61,49,0.08)]"
            >
              <FaInstagram aria-hidden="true" />
            </a>
            <a
              href={LINKS.tiktok}
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok de Montenegro Salud y Belleza"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-forest/10 bg-white/70 text-forest-dark shadow-[0_10px_24px_rgba(36,61,49,0.08)]"
            >
              <FaTiktok aria-hidden="true" />
            </a>
            <a
              href={LINKS.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook de Montenegro Salud y Belleza"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-forest/10 bg-white/70 text-forest-dark shadow-[0_10px_24px_rgba(36,61,49,0.08)]"
            >
              <FaFacebookF aria-hidden="true" />
            </a>
          </div>
          <p className="mt-5 text-[0.86rem] font-semibold text-forest-dark">
            Montenegro Salud y Belleza
          </p>
          <p className="mt-1 text-[0.75rem] uppercase tracking-[0.2em] text-forest-dark/52">
            Vitoria-Gasteiz
          </p>
          <p className="mt-4 text-[0.72rem] text-forest-dark/46">
            Desarrollado por{' '}
            <a
              href="https://mlanstudio.com/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-pink transition-opacity duration-200 hover:opacity-80"
            >
              MLaN Studio
            </a>
          </p>
        </footer>
      </div>

      <div
        role="status"
        aria-live="polite"
        className={[
          'fixed inset-x-4 bottom-5 z-[80] mx-auto max-w-[390px] rounded-2xl bg-forest-dark px-4 py-3 text-center text-[0.84rem] font-medium text-white shadow-[0_18px_42px_rgba(31,53,43,0.22)] transition duration-300',
          toast ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <span className="inline-flex items-center justify-center gap-2">
          <FiCopy aria-hidden="true" />
          {toast}
        </span>
      </div>
    </main>
  )
}
