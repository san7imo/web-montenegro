import { Route, Routes } from 'react-router-dom'

import { BrotePage } from '../pages/Brote/BrotePage'
import { EsenciaPage } from '../pages/Esencia/EsenciaPage'
import { FiloPage } from '../pages/Filo/FiloPage'
import { HebraPage } from '../pages/Hebra/HebraPage'
import { HomePage } from '../pages/Home/HomePage'
import { OasisPage } from '../pages/Oasis/OasisPage'
import { OrigenPage } from '../pages/Origen/OrigenPage'
import { RaizPage } from '../pages/Raiz/RaizPage'
import { TactoPage } from '../pages/Tacto/TactoPage'
import { TezPage } from '../pages/Tez/TezPage'

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
      <Route path="/filo" element={<FiloPage />} />
      <Route path="/hebra" element={<HebraPage />} />
      <Route path="/tez" element={<TezPage />} />
    </Routes>
  )
}
