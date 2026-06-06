import { useCallback, useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'

import { getRandomServiceRecommendation, type ServiceCategory } from '../../data/serviceCatalog'

type ServiceModalProps = {
  ctaLabel?: string
  category: ServiceCategory
  description: string
  duration?: string
  image: string
  isOpen: boolean
  onClose: () => void
  price?: string
  serviceId: string
  title: string
}

function buildWhatsAppHref(title: string, duration?: string, price?: string) {
  const details = [
    `Hola, quiero reservar una cita para ${title}.`,
    duration ? `Duración: ${duration}.` : '',
    price ? `Precio: ${price}.` : '',
    '¿Me puedes confirmar disponibilidad?',
  ]
    .filter(Boolean)
    .join(' ')

  return `https://wa.me/?text=${encodeURIComponent(details)}`
}

function buildShareText(title: string, description: string, duration?: string, price?: string) {
  const details = [
    `Mira este servicio de Montenegro Salud y Belleza: ${title}.`,
    description,
    duration ? `Duración: ${duration}.` : '',
    price ? `Precio: ${price}.` : '',
  ]
    .filter(Boolean)
    .join(' ')

  return details
}

function ModalIcon({ type }: { type: 'share' | 'close' }) {
  const commonProps = {
    'aria-hidden': true,
    className: 'h-7 w-7',
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    strokeWidth: 2,
    viewBox: '0 0 24 24',
  }

  if (type === 'share') {
    return (
      <svg {...commonProps}>
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="m8.6 13.5 6.8 4" />
        <path d="m15.4 6.5-6.8 4" />
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </svg>
  )
}

export function ServiceModal({
  ctaLabel = 'Reservar',
  category,
  description,
  duration,
  image,
  isOpen,
  onClose,
  price,
  serviceId,
  title,
}: ServiceModalProps) {
  const [isShareOpen, setIsShareOpen] = useState(false)
  const navigate = useNavigate()
  const handleClose = useCallback(() => {
    setIsShareOpen(false)
    onClose()
  }, [onClose])
  const currentKey = `${category}:${serviceId}`
  const shareText = useMemo(
    () => buildShareText(title, description, duration, price),
    [description, duration, price, title],
  )
  const recommendation = useMemo(
    () => getRandomServiceRecommendation(currentKey),
    [currentKey],
  )

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleClose, isOpen])

  if (!isOpen) {
    return null
  }

  const whatsappHref = buildWhatsAppHref(title, duration, price)
  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const encodedShareText = encodeURIComponent(`${shareText} ${shareUrl}`.trim())
  const encodedShareUrl = encodeURIComponent(shareUrl)
  const recommendationHref = `${recommendation.path}?service=${recommendation.id}`

  const openRecommendation = () => {
    handleClose()
    navigate(recommendationHref)
  }

  const modal = (
    <div
      role="presentation"
      className="fixed inset-0 isolate z-[9999] flex items-center justify-center bg-forest-deep/68 px-4 py-6 backdrop-blur-sm"
      onClick={handleClose}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="relative z-[10000] grid max-h-[92vh] w-full max-w-[72rem] overflow-y-auto rounded-[2.4rem] border border-white/85 bg-cream text-forest shadow-[0_28px_90px_rgba(13,25,20,0.48)] sm:p-4 lg:grid-cols-[minmax(20rem,31rem)_1fr] lg:gap-x-7 lg:rounded-[3.2rem]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="m-4 overflow-hidden rounded-[1.8rem] sm:m-0 lg:rounded-[2.6rem]">
          <img src={image} alt={title} className="h-full min-h-[18rem] w-full object-cover" />
        </div>

        <div className="flex min-h-[28rem] flex-col px-6 pb-6 pt-2 sm:px-4 sm:pt-4 lg:px-0 lg:pb-4">
          <div className="flex items-start justify-end gap-3">
            <div className="relative">
              <button
                type="button"
                aria-expanded={isShareOpen}
                aria-label="Compartir servicio"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-pink transition-colors duration-200 hover:bg-pink/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink"
                onClick={() => setIsShareOpen((current) => !current)}
              >
                <ModalIcon type="share" />
              </button>

              {isShareOpen ? (
                <div className="absolute right-0 top-12 z-[10001] min-w-[11.5rem] rounded-2xl border border-forest/15 bg-cream-light p-2 text-[0.86rem] font-semibold text-forest shadow-[0_16px_38px_rgba(13,25,20,0.2)]">
                  <a
                    href={`https://wa.me/?text=${encodedShareText}`}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-xl px-3 py-2 transition-colors duration-200 hover:bg-pink/10 hover:text-pink"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodedShareUrl}`}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-xl px-3 py-2 transition-colors duration-200 hover:bg-pink/10 hover:text-pink"
                  >
                    Facebook
                  </a>
                  <a
                    href={`https://www.instagram.com/direct/inbox/`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => navigator.clipboard?.writeText(`${shareText} ${shareUrl}`.trim())}
                    className="block rounded-xl px-3 py-2 transition-colors duration-200 hover:bg-pink/10 hover:text-pink"
                  >
                    Instagram
                  </a>
                </div>
              ) : null}
            </div>

            <button
              type="button"
              aria-label="Cerrar modal"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-forest/20 bg-forest text-cream transition-colors duration-200 hover:bg-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink"
              onClick={handleClose}
            >
              <ModalIcon type="close" />
            </button>
          </div>

          <h2 className="mt-11 font-heading text-[2.35rem] font-semibold leading-[0.98] text-forest sm:text-[2.9rem]">
            {title}
          </h2>

          <p className="mt-5 max-w-[42rem] text-[1rem] font-medium leading-8 text-forest-dark/88">
            {description}
          </p>

          <div className="mt-auto grid gap-5 pt-9 sm:grid-cols-[1fr_auto] sm:items-end">
            <dl className="grid gap-5 sm:grid-cols-2">
              <div>
                <dt className="text-[1rem] font-semibold text-forest-dark/80">Precio</dt>
                <dd className="mt-1 font-heading text-[2.1rem] font-semibold leading-none text-forest">
                  {price || 'Consultar'}
                </dd>
              </div>
              <div>
                <dt className="text-[1rem] font-semibold text-forest-dark/80">Duración</dt>
                <dd className="mt-1 font-heading text-[2.1rem] font-semibold leading-none text-forest">
                  {duration || 'Consultar'}
                </dd>
              </div>
            </dl>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center justify-center justify-self-start rounded-full border border-pink px-7 text-[0.95rem] font-bold text-pink no-underline transition-colors duration-200 hover:bg-pink hover:text-white sm:justify-self-end"
            >
              {ctaLabel}
            </a>
          </div>
        </div>

        <button
          type="button"
          className="mt-4 grid w-full cursor-pointer gap-4 rounded-[2rem] border border-white/85 bg-cream-light/55 p-3 text-left shadow-[0_8px_22px_rgba(36,61,49,0.18)] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink sm:grid-cols-[12rem_1fr] lg:col-span-2 lg:mt-5 lg:grid-cols-[18rem_1fr]"
          onClick={openRecommendation}
        >
          <div className="overflow-hidden rounded-[1.5rem]">
            <img
              src={recommendation.image}
              alt={recommendation.title}
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>

          <div className="flex min-w-0 flex-col justify-center py-1 pr-2">
            <p className="text-[0.86rem] font-bold uppercase tracking-[0.08em] text-pink">
              Recomendación similar
            </p>
            <h3 className="mt-1 font-heading text-[2rem] font-semibold leading-none text-forest sm:text-[2.35rem]">
              {recommendation.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-[0.98rem] font-medium leading-6 text-forest-dark/88">
              {recommendation.description}
            </p>

            <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
              <div>
                <span className="block text-[0.85rem] font-semibold text-forest-dark/78">
                  Precio base
                </span>
                <span className="font-heading text-[1.75rem] font-semibold leading-none text-forest">
                  {recommendation.price || 'Consultar'}
                </span>
              </div>
              <div>
                <span className="block text-[0.85rem] font-semibold text-forest-dark/78">
                  Duración
                </span>
                <span className="font-heading text-[1.75rem] font-semibold leading-none text-forest">
                  {recommendation.duration || 'Consultar'}
                </span>
              </div>
              <span className="text-[0.98rem] font-bold text-pink">
                Ver servicio
              </span>
            </div>
          </div>
        </button>
      </section>
    </div>
  )

  return createPortal(modal, document.body)
}
