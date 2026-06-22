import { AppRoutes } from './routes'
import { CookieConsent } from '../components/ui/CookieConsent'

export default function App() {
  return (
    <>
      <AppRoutes />
      <CookieConsent />
    </>
  )
}
