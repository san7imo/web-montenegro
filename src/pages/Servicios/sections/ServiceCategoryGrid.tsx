import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'

import broteImage from '../../../assets/brote/herobrote.png'
import filoImage from '../../../assets/filo/hero-filo.png'
import hebraImage from '../../../assets/hebra/herohebra.png'
import oasisImage from '../../../assets/oasis/oasis-portada.webp'
import raizImage from '../../../assets/raiz/heroraiz.png'
import tactoImage from '../../../assets/tacto/hero.png'
import tezImage from '../../../assets/tez/herotez.png'
import { Container } from '../../../components/ui/Container'
import { ImageLayer } from '../../../components/ui/ImageLayer'
import { SectionTitle } from '../../../components/ui/SectionTitle'
import { serviceCategoryCards } from '../../../data/servicios'

const imageByKey = {
  brote: broteImage,
  filo: filoImage,
  hebra: hebraImage,
  oasis: oasisImage,
  raiz: raizImage,
  tacto: tactoImage,
  tez: tezImage,
} as const

export function ServiceCategoryGrid() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="bg-cream py-14 text-forest sm:py-18 lg:py-24">
      <Container className="!max-w-[76rem]">
        <div className="mx-auto max-w-[49rem] text-center">
          <SectionTitle as="h2" className="text-forest">
            Elige tu experiencia Montenegro
          </SectionTitle>
          <p className="type-body mx-auto mt-4 max-w-[43rem] font-medium text-forest-dark/82">
            Cada categoría reúne servicios especializados. Entra en la que más conecte contigo para consultar tratamientos, precios y bonos disponibles.
          </p>
        </div>

        <div className="mt-11 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {serviceCategoryCards.map((item, index) => (
            <motion.article
              key={item.id}
              className={index === serviceCategoryCards.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24, filter: 'blur(6px)' }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: Math.min(index * 0.06, 0.3), duration: 0.72, ease: 'easeOut' }}
            >
              <Link
                to={item.href}
                className="group flex h-full min-h-[32rem] flex-col overflow-hidden rounded-[1.8rem] border border-white/75 bg-cream-light/72 shadow-[0_14px_34px_rgba(31,53,43,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(31,53,43,0.21)]"
              >
                <div className="relative h-[17rem] shrink-0 overflow-hidden">
                  <ImageLayer
                    src={imageByKey[item.image]}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(27,46,37,0.04)_30%,rgba(27,46,37,0.72)_100%)]" />
                  <p className="type-eyebrow absolute inset-x-6 bottom-5 text-pink-soft">
                    {item.subtitle}
                  </p>
                </div>

                <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
                  <h3 className="type-card-title-compact text-forest">{item.title}</h3>
                  <p className="type-body-sm mt-3 font-medium text-forest-dark/84">
                    {item.description}
                  </p>
                  <span className="type-action mt-auto inline-flex items-center gap-3 pt-5 font-bold text-pink">
                    Explorar servicios <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}
