import { PageShell } from '../../components/layout/PageShell'
import { Button } from '../../components/ui/Button'
import { Container } from '../../components/ui/Container'
import brandSymbol from '../../assets/logo/montenegro-symbol.webp'
import botanicalBranch from '../../assets/origen/rama.webp'

export function NotFoundPage() {
  return (
    <PageShell footerTone="sage" showFloatingButton={false}>
      <section className="relative flex min-h-[74svh] items-center overflow-hidden bg-forest px-0 pt-24 text-cream-light sm:pt-28">
        <img
          src={botanicalBranch}
          alt=""
          className="pointer-events-none absolute -left-24 bottom-0 w-[24rem] max-w-none opacity-20 sm:-left-16 sm:w-[30rem] lg:w-[36rem]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(241,198,218,0.11),transparent_36%)]" />

        <Container className="relative z-10 py-16 text-center sm:py-20 lg:py-24">
          <img
            src={brandSymbol}
            alt=""
            className="mx-auto h-16 w-auto opacity-85 sm:h-20"
          />
          <p className="type-eyebrow mt-7 text-pink-soft">Error 404</p>
          <h1 className="type-display mx-auto mt-4 max-w-[12ch] text-white">
            Este sendero no conduce a ningún lugar.
          </h1>
          <p className="type-lead mx-auto mt-6 max-w-[40rem] text-cream-light/82">
            La página que buscas puede haber cambiado de dirección o ya no estar disponible. Puedes regresar al inicio o continuar explorando nuestros servicios.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/" variant="primary">
              VOLVER AL INICIO
            </Button>
            <Button to="/servicios" variant="outline" showArrow>
              VER SERVICIOS
            </Button>
            <Button to="/contacto" variant="outline">
              CONTACTO
            </Button>
          </div>
        </Container>
      </section>
    </PageShell>
  )
}

