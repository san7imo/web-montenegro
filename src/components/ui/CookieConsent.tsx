import { useEffect } from 'react'

import { initializeCookieConsent } from '../../utils/cookieConsent'

export function CookieConsent() {
  useEffect(() => {
    void initializeCookieConsent()
  }, [])

  return null
}
