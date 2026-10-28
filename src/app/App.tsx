import { AppRoutes } from './routes'
import { CookieConsent } from '../components/ui/CookieConsent'
import { MetaPixelTracker } from '../components/ui/MetaPixelTracker'
import { FloatingWhatsAppButton } from '../components/ui/FloatingWhatsAppButton'
import { ScrollToTop } from '../components/ui/ScrollToTop'
import { SeoManager } from '../components/ui/SeoManager'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <SeoManager />
      <MetaPixelTracker />
      <AppRoutes />
      <FloatingWhatsAppButton />
      <CookieConsent />
    </>
  )
}
