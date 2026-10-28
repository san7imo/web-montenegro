import { cookieCategories, isCookieCategoryAccepted } from './cookieConsent'

const PIXEL_ID = '4615219068711620'

type PixelCommand = (action: string, event: string, parameters?: Record<string, string>) => void

declare global {
  interface Window {
    fbq?: PixelCommand & { queue?: unknown[][]; loaded?: boolean; version?: string }
    _fbq?: PixelCommand
  }
}

let pixelStarted = false

export async function enableMetaPixel() {
  if (pixelStarted || !(await isCookieCategoryAccepted(cookieCategories.marketing))) return
  pixelStarted = true

  const fbq = function (this: unknown, ...args: unknown[]) {
    const command = window.fbq as (PixelCommand & {
      callMethod?: (...args: unknown[]) => void
      queue?: unknown[][]
    })
    if (command.callMethod) command.callMethod(...args)
    else command.queue?.push(args)
  } as PixelCommand & { queue?: unknown[][]; loaded?: boolean; version?: string }

  fbq.queue = []
  fbq.loaded = true
  fbq.version = '2.0'
  window.fbq = fbq
  window._fbq = fbq

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://connect.facebook.net/en_US/fbevents.js'
  document.head.appendChild(script)
  window.fbq('init', PIXEL_ID)
}

export function trackMetaPageView() {
  if (pixelStarted) window.fbq?.('track', 'PageView')
}

export function trackMetaEvent(event: 'Contact' | 'ViewContent', params?: Record<string, string>) {
  if (pixelStarted) window.fbq?.('track', event, params)
}
