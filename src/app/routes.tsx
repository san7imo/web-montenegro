import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const BrotePage = lazy(() =>
  import('../pages/Brote/BrotePage').then(({ BrotePage }) => ({ default: BrotePage })),
)
const ContactoPage = lazy(() =>
  import('../pages/Contacto/ContactoPage').then(({ ContactoPage }) => ({ default: ContactoPage })),
)
const EcoPage = lazy(() =>
  import('../pages/Eco/EcoPage').then(({ EcoPage }) => ({ default: EcoPage })),
)
const EsenciaPage = lazy(() =>
  import('../pages/Esencia/EsenciaPage').then(({ EsenciaPage }) => ({ default: EsenciaPage })),
)
const FiloPage = lazy(() =>
  import('../pages/Filo/FiloPage').then(({ FiloPage }) => ({ default: FiloPage })),
)
const HebraPage = lazy(() =>
  import('../pages/Hebra/HebraPage').then(({ HebraPage }) => ({ default: HebraPage })),
)
const HomePage = lazy(() =>
  import('../pages/Home/HomePage').then(({ HomePage }) => ({ default: HomePage })),
)
const LegalPage = lazy(() =>
  import('../pages/Legal/LegalPage').then(({ LegalPage }) => ({ default: LegalPage })),
)
const OasisPage = lazy(() =>
  import('../pages/Oasis/OasisPage').then(({ OasisPage }) => ({ default: OasisPage })),
)
const NotFoundPage = lazy(() =>
  import('../pages/NotFound/NotFoundPage').then(({ NotFoundPage }) => ({ default: NotFoundPage })),
)
const OrigenPage = lazy(() =>
  import('../pages/Origen/OrigenPage').then(({ OrigenPage }) => ({ default: OrigenPage })),
)
const RaizPage = lazy(() =>
  import('../pages/Raiz/RaizPage').then(({ RaizPage }) => ({ default: RaizPage })),
)
const ServiciosPage = lazy(() =>
  import('../pages/Servicios/ServiciosPage').then(({ ServiciosPage }) => ({ default: ServiciosPage })),
)
const TactoPage = lazy(() =>
  import('../pages/Tacto/TactoPage').then(({ TactoPage }) => ({ default: TactoPage })),
)
const TezPage = lazy(() =>
  import('../pages/Tez/TezPage').then(({ TezPage }) => ({ default: TezPage })),
)
const VipPage = lazy(() =>
  import('../pages/Vip/VipPage').then(({ VipPage }) => ({ default: VipPage })),
)

export function AppRoutes() {
  return (
    <Suspense
      fallback={
        <main
          aria-busy="true"
          aria-label="Cargando página"
          className="grid min-h-screen place-items-center bg-forest-dark text-cream"
        >
          <span className="h-10 w-10 animate-spin rounded-full border-2 border-cream/30 border-t-pink" />
        </main>
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/esencia" element={<EsenciaPage />} />
        <Route path="/origen" element={<OrigenPage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/oasis" element={<OasisPage />} />
        <Route path="/tacto" element={<TactoPage />} />
        <Route path="/raiz" element={<RaizPage />} />
        <Route path="/brote" element={<BrotePage />} />
        <Route path="/filo" element={<FiloPage />} />
        <Route path="/hebra" element={<HebraPage />} />
        <Route path="/tez" element={<TezPage />} />
        <Route path="/eco" element={<EcoPage />} />
        <Route path="/vip" element={<VipPage />} />
        <Route path="/club" element={<Navigate to="/vip" replace />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/legal/aviso-legal" element={<LegalPage page="aviso-legal" />} />
        <Route path="/legal/privacidad" element={<LegalPage page="privacidad" />} />
        <Route path="/legal/politicas-de-seguridad" element={<LegalPage page="privacidad" />} />
        <Route path="/legal/cookies" element={<LegalPage page="cookies" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  )
}
