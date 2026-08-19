import { useLocation } from 'react-router-dom'

import { AppRoutes } from './routes'
import { CookieConsent } from '../components/ui/CookieConsent'
import { ScrollToTop } from '../components/ui/ScrollToTop'

export default function App() {
  const location = useLocation()
  const showCookieConsent = !['/vip', '/club'].includes(location.pathname)

  return (
    <>
      <ScrollToTop />
      <AppRoutes />
      {showCookieConsent ? <CookieConsent /> : null}
    </>
  )
}
