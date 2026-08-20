import { useLocation } from 'react-router-dom'

import { AppRoutes } from './routes'
import { CookieConsent } from '../components/ui/CookieConsent'
import { ScrollToTop } from '../components/ui/ScrollToTop'
import { SeoManager } from '../components/ui/SeoManager'

export default function App() {
  const location = useLocation()
  const showCookieConsent = !['/vip', '/club'].includes(location.pathname)

  return (
    <>
      <ScrollToTop />
      <SeoManager />
      <AppRoutes />
      {showCookieConsent ? <CookieConsent /> : null}
    </>
  )
}
