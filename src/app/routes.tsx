import { Route, Routes } from 'react-router-dom'

import { EsenciaPage } from '../pages/Esencia/EsenciaPage'
import { HomePage } from '../pages/Home/HomePage'
import { OasisPage } from '../pages/Oasis/OasisPage'
import { OrigenPage } from '../pages/Origen/OrigenPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/esencia" element={<EsenciaPage />} />
      <Route path="/origen" element={<OrigenPage />} />
      <Route path="/oasis" element={<OasisPage />} />
    </Routes>
  )
}
