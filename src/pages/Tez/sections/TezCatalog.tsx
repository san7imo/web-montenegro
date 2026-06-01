import { motion, useReducedMotion } from 'framer-motion'

import { TezCatalogCard } from '../../../components/cards/TezCatalogCard'
import { Container } from '../../../components/ui/Container'
import { SectionTitle } from '../../../components/ui/SectionTitle'
import { tezCatalogContent } from '../../../data/tez'

export function TezCatalog() {
  const shouldReduceMotion = useReducedMotion()

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24, filter: 'blur(6px)' },
          whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
          viewport: { once: true, amount: 0.12 },
          transition: {
            delay,
            duration: 0.78,
            ease: 'easeOut' as const,
          },
        }

  return (
    <section className="bg-cream py-14 text-forest sm:py-16 lg:py-[6rem]">
      <Container className="!max-w-[75rem] px-5 sm:px-6 lg:!px-0">
        {tezCatalogContent.sections.map((section, sectionIndex) => (
          <div
            key={section.id}
            className={sectionIndex === 0 ? '' : 'mt-20 sm:mt-24 lg:mt-[7rem]'}
          >
            <motion.div className="mx-auto max-w-[63rem] text-center" {...fadeUp(0.04)}>
              <SectionTitle
                as="h2"
                className="text-pink sm:text-[4.05rem] lg:text-[4.75rem]"
              >
                {section.title}
              </SectionTitle>
              <p className="mx-auto mt-4 max-w-[68rem] text-[0.98rem] font-semibold leading-7 text-forest-dark/78 sm:text-[1.04rem]">
                {section.description}
              </p>
            </motion.div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-9">
              {section.items.map((item, index) => (
                <motion.div key={item.id} {...fadeUp(0.08 + index * 0.035)}>
                  <TezCatalogCard
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    price={tezCatalogContent.price}
                    ctaHref={tezCatalogContent.ctaHref}
                    ctaLabel={tezCatalogContent.ctaLabel}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </Container>
    </section>
  )
}
