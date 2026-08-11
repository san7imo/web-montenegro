import { useLocation } from 'react-router-dom'

import { AppRoutes } from './routes'
import { CookieConsent } from '../components/ui/CookieConsent'

export default function App() {
  const location = useLocation()
  const showCookieConsent = location.pathname !== '/club'

  return (
    <>
      <AppRoutes />
      {showCookieConsent ? <CookieConsent /> : null}
    </>
  )
}
