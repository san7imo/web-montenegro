import { Link } from 'react-router-dom'
import { Container } from '../../../components/ui/Container'
import { SectionTitle } from '../../../components/ui/SectionTitle'
export function RaizTechnology() {
  return <section className="bg-cream py-20 text-forest"><Container>
    <SectionTitle as="h2">Tecnología y cuidado de la piel</SectionTitle>
    <p className="type-body mt-5">Descubre los tratamientos faciales y corporales, con sus opciones y bonos, en Tez.</p>
    <Link to="/tez" className="type-action mt-6 inline-block rounded-full bg-pink px-6 py-3 text-white">Explorar Tez</Link>
  </Container></section>
}
