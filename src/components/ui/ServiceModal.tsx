import { useCallback, useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'

import { getRandomServiceRecommendation, type ServiceCategory } from '../../data/serviceCatalog'
import { getServiceModalDescription } from '../../data/serviceModalDescriptions'
import {
  getServicePricing,
  type ServicePriceOption,
} from '../../data/servicePricing'
import { formatPrice } from '../../utils/price'
import { PriceText } from './PriceText'

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
  const formattedPrice = formatPrice(price)
  const details = [
    `Hola, quiero reservar una cita para ${title}.`,
    duration ? `Duración: ${duration}.` : '',
    formattedPrice !== 'Consultar' ? `Precio: ${formattedPrice}.` : '',
    '¿Me puedes confirmar disponibilidad?',
  ]
    .filter(Boolean)
    .join(' ')

  return `https://wa.me/?text=${encodeURIComponent(details)}`
}

function buildShareText(title: string, description: string, duration?: string, price?: string) {
  const formattedPrice = formatPrice(price)
  const details = [
    `Mira este servicio de Montenegro Salud y Belleza: ${title}.`,
    description,
    duration ? `Duración: ${duration}.` : '',
    formattedPrice !== 'Consultar' ? `Precio: ${formattedPrice}.` : '',
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

function BonusNotice({ children }: { children: string }) {
  const text = children
    .replace(/^BONOS?:\s*/i, '')
    .replace(/\s+(?=(?:Bono|Pack)\s)/g, '\n')
    .replace(/\s+(?=\d+\s+Sesiones\b)/gi, '\n')

  return (
    <div className="mt-2 rounded-[1rem] border border-pink/25 bg-pink-soft/28 px-3 py-2.5 text-left">
      <span className="text-[0.66rem] font-extrabold uppercase tracking-[0.12em] text-pink">
        Bono disponible
      </span>
      <p className="mt-0.5 whitespace-pre-line text-[0.78rem] font-semibold leading-5 text-forest-dark/88">
        {text}
      </p>
    </div>
  )
}

type PriceBreakdown = {
  bonus: string
  bonusDetail?: string
  firstSession: string
  singleSession: string
}

function getPriceBreakdown(value: string): PriceBreakdown | null {
  const match = value.match(
    /^Primera Sesión:\s*([\d.]+(?:,\d+)?\s*€)\s+Sesión Individual:\s*([\d.]+(?:,\d+)?\s*€)\s+Bono de 6 Sesiones:\s*([\d.]+(?:,\d+)?\s*€)(?:\s*\(([^)]+)\))?$/i,
  )

  if (!match) {
    return null
  }

  return {
    firstSession: match[1],
    singleSession: match[2],
    bonus: match[3],
    bonusDetail: match[4],
  }
}

function PriceBreakdownGrid({ breakdown }: { breakdown: PriceBreakdown }) {
  const items = [
    {
      label: 'Primera sesión',
      value: breakdown.firstSession,
    },
    {
      label: 'Sesión individual',
      value: breakdown.singleSession,
    },
    {
      detail: breakdown.bonusDetail,
      label: 'Bono · 6 sesiones',
      value: breakdown.bonus,
    },
  ]

  return (
    <dl className="mt-2 grid grid-cols-3 gap-1.5 sm:gap-2">
      {items.map((item, index) => (
        <div
          key={item.label}
          className={[
            'min-w-0 rounded-xl border px-2 py-2.5 text-center',
            index === 2
              ? 'border-pink/28 bg-pink-soft/28'
              : 'border-forest/10 bg-white/42',
          ].join(' ')}
        >
          <dt className="text-[0.56rem] font-extrabold uppercase leading-3 tracking-[0.06em] text-forest-dark/65 sm:text-[0.61rem]">
            {item.label}
          </dt>
          <dd className="mt-1 font-heading text-[1.12rem] font-bold leading-none text-pink sm:text-[1.28rem]">
            {item.value}
          </dd>
          {item.detail ? (
            <span className="mt-1 block text-[0.58rem] font-bold leading-3 text-forest-dark/68">
              {item.detail}
            </span>
          ) : null}
        </div>
      ))}
    </dl>
  )
}

function PricingOptions({
  bonus,
  options,
}: {
  bonus?: string
  options: readonly ServicePriceOption[]
}) {
  return (
    <section aria-label="Tarifas y bonos" className="mt-5">
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-heading text-[1.45rem] font-semibold leading-none text-forest">
          Opciones y tarifas
        </h3>
        <span className="rounded-full border border-forest/15 bg-white/35 px-3 py-1 text-[0.64rem] font-bold uppercase tracking-[0.1em] text-forest-dark/68">
          {options.length} {options.length === 1 ? 'opción' : 'opciones'}
        </span>
      </div>

      {bonus ? <BonusNotice>{bonus}</BonusNotice> : null}

      <div className="mt-3 space-y-2.5">
        {options.map((option, index) => {
          const showGroup = option.group && option.group !== options[index - 1]?.group
          const isBonusOption = /^bono\b/i.test(option.name)
          const isPackOption = /^pack\b/i.test(option.name)
          const isBundle = isBonusOption || isPackOption
          const priceBreakdown = getPriceBreakdown(option.price)

          return (
            <div key={option.name + '-' + index}>
              {showGroup ? (
                <p className="mb-1.5 mt-4 text-[0.67rem] font-extrabold uppercase tracking-[0.11em] text-pink">
                  {option.group}
                </p>
              ) : null}

              <div
                className={[
                  'min-w-0 rounded-[1.1rem] border px-3.5 py-3 shadow-[0_6px_16px_rgba(36,61,49,0.06)]',
                  isBundle
                    ? 'border-pink/24 bg-pink-soft/18'
                    : 'border-forest/12 bg-white/38',
                ].join(' ')}
              >
                {isBundle ? (
                  <span className="mb-1.5 inline-flex rounded-full bg-pink px-2.5 py-1 text-[0.58rem] font-extrabold uppercase tracking-[0.11em] text-white">
                    {isBonusOption ? 'Bono' : 'Pack'}
                  </span>
                ) : null}
                <div className={priceBreakdown ? '' : 'grid min-w-0 gap-1.5 sm:grid-cols-[minmax(0,1fr)_minmax(7rem,auto)] sm:items-start sm:gap-5'}>
                  <p className="text-[0.84rem] font-semibold leading-5 text-forest-dark">
                    {option.name}
                  </p>
                  {priceBreakdown ? (
                    <PriceBreakdownGrid breakdown={priceBreakdown} />
                  ) : (
                    <PriceText
                      value={option.price}
                      className="min-w-0 break-words text-[0.9rem] font-extrabold leading-5 text-pink sm:max-w-[16rem] sm:text-right"
                    />
                  )}
                </div>
                {option.bonus ? <BonusNotice>{option.bonus}</BonusNotice> : null}
              </div>
            </div>
          )
        })}
      </div>
    </section>
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
  const pricing = getServicePricing(category, serviceId)
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
        className="relative z-[10000] grid max-h-[94vh] min-w-0 w-full max-w-[calc(100vw-1.5rem)] grid-cols-[minmax(0,1fr)] overflow-x-hidden overflow-y-auto rounded-[1.6rem] border border-white/85 bg-cream p-3 text-forest shadow-[0_28px_90px_rgba(13,25,20,0.48)] sm:max-w-[64rem] sm:rounded-[2rem] sm:p-4 lg:grid-cols-[minmax(16rem,25rem)_minmax(0,1fr)] lg:gap-x-5 lg:overflow-hidden lg:rounded-[2.35rem]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="min-w-0 overflow-hidden rounded-[1.25rem] lg:rounded-[1.75rem]">
          <img
            src={image}
            alt={title}
            className="h-[13rem] w-full object-cover sm:h-[15rem] lg:h-full lg:min-h-[26rem]"
          />
        </div>

        <div className="flex min-h-0 min-w-0 flex-col px-2 pb-1 pt-2 sm:px-1 sm:pt-3 lg:max-h-[calc(94vh-2rem)] lg:overflow-y-auto lg:px-0 lg:pr-2">
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

          <p className="mt-3 line-clamp-5 max-w-[42rem] text-[0.88rem] font-medium leading-6 text-forest-dark/88 sm:text-[0.94rem] sm:leading-7">
            {displayDescription}
          </p>

          {pricing ? (
            <PricingOptions bonus={pricing.bonus} options={pricing.options} />
          ) : null}

          <div className="mt-auto grid gap-4 pt-5 sm:grid-cols-[1fr_auto] sm:items-end">
            {pricing ? (
              <p className="max-w-[22rem] text-[0.78rem] font-semibold leading-5 text-forest-dark/68">
                Elige la opción que prefieras al solicitar tu cita. Te confirmaremos duración y disponibilidad.
              </p>
            ) : (
              <dl className="grid grid-cols-2 gap-4">
                <div>
                  <dt className="text-[0.82rem] font-semibold text-forest-dark/80">Precio</dt>
                  <dd className="mt-1 font-heading text-[1.38rem] font-semibold leading-none text-forest sm:text-[1.6rem]">
                    <PriceText value={price} />
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.82rem] font-semibold text-forest-dark/80">Duración</dt>
                  <dd className="mt-1 font-heading text-[1.38rem] font-semibold leading-none text-forest sm:text-[1.6rem]">
                    {duration || 'Consultar'}
                  </dd>
                </div>
              </dl>
            )}

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
