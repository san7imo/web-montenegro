import { Navigate, Route, Routes } from 'react-router-dom'

import { BrotePage } from '../pages/Brote/BrotePage'
import { ContactoPage } from '../pages/Contacto/ContactoPage'
import { EcoPage } from '../pages/Eco/EcoPage'
import { EsenciaPage } from '../pages/Esencia/EsenciaPage'
import { FiloPage } from '../pages/Filo/FiloPage'
import { HebraPage } from '../pages/Hebra/HebraPage'
import { HomePage } from '../pages/Home/HomePage'
import { LegalPage } from '../pages/Legal/LegalPage'
import { OasisPage } from '../pages/Oasis/OasisPage'
import { OrigenPage } from '../pages/Origen/OrigenPage'
import { RaizPage } from '../pages/Raiz/RaizPage'
import { ServiciosPage } from '../pages/Servicios/ServiciosPage'
import { TactoPage } from '../pages/Tacto/TactoPage'
import { TezPage } from '../pages/Tez/TezPage'
import { VipPage } from '../pages/Vip/VipPage'

export function AppRoutes() {
  return (
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
    </Routes>
  )
}
