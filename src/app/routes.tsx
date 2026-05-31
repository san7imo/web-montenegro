import { Route, Routes } from 'react-router-dom'

import { BrotePage } from '../pages/Brote/BrotePage'
import { EsenciaPage } from '../pages/Esencia/EsenciaPage'
import { HomePage } from '../pages/Home/HomePage'
import { OasisPage } from '../pages/Oasis/OasisPage'
import { OrigenPage } from '../pages/Origen/OrigenPage'
import { RaizPage } from '../pages/Raiz/RaizPage'
import { TactoPage } from '../pages/Tacto/TactoPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/esencia" element={<EsenciaPage />} />
      <Route path="/origen" element={<OrigenPage />} />
      <Route path="/oasis" element={<OasisPage />} />
      <Route path="/tacto" element={<TactoPage />} />
      <Route path="/raiz" element={<RaizPage />} />
      <Route path="/brote" element={<BrotePage />} />
    </Routes>
  )
}
