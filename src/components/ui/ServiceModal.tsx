import { useCallback, useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'

import { getRandomServiceRecommendation, type ServiceCategory } from '../../data/serviceCatalog'
import { getServiceModalDescription } from '../../data/serviceModalDescriptions'

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
  const [shareStatus, setShareStatus] = useState('')
  const navigate = useNavigate()
  const handleClose = useCallback(() => {
    setIsShareOpen(false)
    setShareStatus('')
    onClose()
  }, [onClose])
  const currentKey = `${category}:${serviceId}`
  const displayDescription = getServiceModalDescription(category, serviceId) || description
  const shareText = useMemo(
    () => buildShareText(title, displayDescription, duration, price),
    [displayDescription, duration, price, title],
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
  const sharePayload = {
    text: shareText,
    title,
    url: shareUrl,
  }

  const openRecommendation = () => {
    handleClose()
    navigate(recommendationHref)
  }

  const openResults = () => {
    handleClose()
    navigate('/eco#resultados')
  }

  const copyShareMessage = async (message = 'Mensaje copiado') => {
    try {
      await navigator.clipboard?.writeText(`${shareText} ${shareUrl}`.trim())
      setShareStatus(message)
    } catch {
      setShareStatus('Copia el enlace desde la barra del navegador')
    }
  }

  const shareNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share(sharePayload)
        setShareStatus('Compartido')
        setIsShareOpen(false)
        return
      } catch (error) {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return
        }
      }
    }

    await copyShareMessage()
  }

  const shareInstagram = async () => {
    await copyShareMessage('Mensaje copiado para Instagram')
    window.open('https://www.instagram.com/direct/inbox/', '_blank', 'noopener,noreferrer')
  }

  const modal = (
    <div
      role="presentation"
      className="fixed inset-0 isolate z-[9999] flex items-center justify-center bg-forest-deep/68 px-3 py-4 backdrop-blur-sm sm:px-4"
      onClick={handleClose}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="relative z-[10000] grid max-h-[94vh] w-full max-w-[64rem] overflow-hidden rounded-[1.6rem] border border-white/85 bg-cream p-3 text-forest shadow-[0_28px_90px_rgba(13,25,20,0.48)] sm:rounded-[2rem] sm:p-4 lg:grid-cols-[minmax(16rem,25rem)_1fr] lg:gap-x-5 lg:rounded-[2.35rem]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="overflow-hidden rounded-[1.25rem] lg:rounded-[1.75rem]">
          <img
            src={image}
            alt={title}
            className="h-[13rem] w-full object-cover sm:h-[15rem] lg:h-full lg:min-h-[26rem]"
          />
        </div>

        <div className="flex min-h-0 flex-col px-2 pb-1 pt-2 sm:px-1 sm:pt-3 lg:px-0">
          <div className="flex items-start justify-end gap-3">
            <div className="relative">
              <button
                type="button"
                aria-expanded={isShareOpen}
                aria-label="Compartir servicio"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-pink transition-colors duration-200 hover:bg-pink/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink"
                onClick={() => setIsShareOpen((current) => !current)}
              >
                <ModalIcon type="share" />
              </button>

              {isShareOpen ? (
                <div className="absolute right-0 top-10 z-[10001] min-w-[14rem] rounded-2xl border border-forest/15 bg-cream-light p-2 text-[0.8rem] font-semibold text-forest shadow-[0_16px_38px_rgba(13,25,20,0.2)]">
                  <button
                    type="button"
                    onClick={shareNative}
                    className="block w-full rounded-xl px-3 py-2 text-left transition-colors duration-200 hover:bg-pink/10 hover:text-pink"
                  >
                    Compartir desde el dispositivo
                  </button>
                  <a
                    href={`https://wa.me/?text=${encodedShareText}`}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-xl px-3 py-2 transition-colors duration-200 hover:bg-pink/10 hover:text-pink"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodedShareUrl}&quote=${encodedShareText}`}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-xl px-3 py-2 transition-colors duration-200 hover:bg-pink/10 hover:text-pink"
                  >
                    Facebook
                  </a>
                  <button
                    type="button"
                    onClick={shareInstagram}
                    className="block w-full rounded-xl px-3 py-2 text-left transition-colors duration-200 hover:bg-pink/10 hover:text-pink"
                  >
                    Instagram Direct
                  </button>
                  {shareStatus ? (
                    <p className="px-3 pb-1 pt-1 text-[0.72rem] leading-4 text-forest-dark/70">
                      {shareStatus}
                    </p>
                  ) : null}
                </div>
              ) : null}
            </div>

            <button
              type="button"
              aria-label="Cerrar modal"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-forest/20 bg-forest text-cream transition-colors duration-200 hover:bg-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink"
              onClick={handleClose}
            >
              <ModalIcon type="close" />
            </button>
          </div>

          <h2 className="mt-2 font-heading text-[2rem] font-semibold leading-[0.98] text-forest sm:mt-3 sm:text-[2.45rem] lg:text-[2.65rem]">
            {title}
          </h2>

          <p className="mt-3 line-clamp-[7] max-w-[42rem] text-[0.88rem] font-medium leading-6 text-forest-dark/88 sm:text-[0.94rem] sm:leading-7 lg:line-clamp-[8]">
            {displayDescription}
          </p>

          <div className="mt-auto grid gap-4 pt-5 sm:grid-cols-[1fr_auto] sm:items-end">
            <dl className="grid grid-cols-2 gap-4">
              <div>
                <dt className="text-[0.82rem] font-semibold text-forest-dark/80">Precio</dt>
                <dd className="mt-1 font-heading text-[1.38rem] font-semibold leading-none text-forest sm:text-[1.6rem]">
                  {price || 'Consultar'}
                </dd>
              </div>
              <div>
                <dt className="text-[0.82rem] font-semibold text-forest-dark/80">Duración</dt>
                <dd className="mt-1 font-heading text-[1.38rem] font-semibold leading-none text-forest sm:text-[1.6rem]">
                  {duration || 'Consultar'}
                </dd>
              </div>
            </dl>

            <div className="flex flex-row flex-wrap gap-2 sm:flex-col sm:items-end">
              <button
                type="button"
                onClick={openResults}
                className="inline-flex min-h-9 items-center justify-center justify-self-start rounded-full border border-forest/35 px-5 text-[0.82rem] font-bold text-forest no-underline transition-colors duration-200 hover:border-pink hover:bg-pink/8 hover:text-pink sm:justify-self-end"
              >
                Ver resultados
              </button>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-9 items-center justify-center justify-self-start rounded-full border border-pink px-5 text-[0.82rem] font-bold text-pink no-underline transition-colors duration-200 hover:bg-pink hover:text-white sm:justify-self-end"
              >
                {ctaLabel}
              </a>
            </div>
          </div>

          <button
            type="button"
            className="mt-4 grid w-full cursor-pointer gap-3 rounded-[1.2rem] border border-white/85 bg-cream-light/55 p-2 text-left shadow-[0_8px_22px_rgba(36,61,49,0.14)] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink sm:grid-cols-[5.6rem_1fr]"
            onClick={openRecommendation}
          >
            <div className="hidden overflow-hidden rounded-[0.85rem] sm:block">
              <img
                src={recommendation.image}
                alt={recommendation.title}
                className="aspect-square h-full w-full object-cover"
              />
            </div>

            <div className="min-w-0 py-1 pr-1">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-pink">
                Recomendación similar
              </p>
              <h3 className="mt-0.5 line-clamp-1 font-heading text-[1.45rem] font-semibold leading-none text-forest">
                {recommendation.title}
              </h3>
              <p className="mt-1 line-clamp-1 text-[0.78rem] font-medium leading-5 text-forest-dark/82">
                {recommendation.description}
              </p>
              <span className="mt-1 inline-block text-[0.8rem] font-bold text-pink">
                Ver servicio
              </span>
            </div>
          </button>
        </div>
      </section>
    </div>
  )

  return createPortal(modal, document.body)
}
