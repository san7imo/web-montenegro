import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import {
  cookieCategories,
  cookieConsentChangeEvent,
  isCookieCategoryAccepted,
} from '../../utils/cookieConsent'
import { enableMetaPixel, trackMetaEvent, trackMetaPageView } from '../../utils/metaPixel'

const servicePaths = new Set([
  '/oasis', '/tacto', '/raiz', '/brote', '/lazo', '/filo', '/hebra', '/tez',
])

export function MetaPixelTracker() {
  const { pathname, search } = useLocation()
  const locationKey = pathname + search
  const lastTracked = useRef<string | null>(null)
  const previousConsent = useRef<boolean | null>(null)

  useEffect(() => {
    let active = true
    const syncConsent = async () => {
      const allowed = await isCookieCategoryAccepted(cookieCategories.marketing)
      if (!active) return

      if (!allowed) {
        // Reload after withdrawal to stop the already loaded third-party library.
        if (previousConsent.current === true) {
          window.location.reload()
          return
        }
        previousConsent.current = false
        lastTracked.current = null
        return
      }

      previousConsent.current = true
      await enableMetaPixel()
      if (!active || lastTracked.current === locationKey) return
      lastTracked.current = locationKey
      trackMetaPageView()
      if (servicePaths.has(pathname)) {
        trackMetaEvent('ViewContent', { content_name: pathname.slice(1), content_type: 'product_group' })
      }
    }

    void syncConsent()
    window.addEventListener(cookieConsentChangeEvent, syncConsent)
    return () => {
      active = false
      window.removeEventListener(cookieConsentChangeEvent, syncConsent)
    }
  }, [locationKey, pathname])

  return null
}
