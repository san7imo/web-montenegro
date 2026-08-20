import { useEffect, useState } from 'react'

import {
  cookieConsentChangeEvent,
  initializeCookieConsent,
  isCookieCategoryAccepted,
  type CookieCategory,
} from '../../utils/cookieConsent'

export function useCookieCategory(category: CookieCategory) {
  const [isAccepted, setIsAccepted] = useState(false)

  useEffect(() => {
    let isActive = true

    const updateState = () => {
      void isCookieCategoryAccepted(category).then((accepted) => {
        if (isActive) setIsAccepted(accepted)
      })
    }

    window.addEventListener(cookieConsentChangeEvent, updateState)
    void initializeCookieConsent().then(updateState)

    return () => {
      isActive = false
      window.removeEventListener(cookieConsentChangeEvent, updateState)
    }
  }, [category])

  return isAccepted
}
