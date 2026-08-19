import { motion, useReducedMotion } from 'framer-motion'

import { TezCatalogCard } from '../../../components/cards/TezCatalogCard'
import { Container } from '../../../components/ui/Container'
import { ExpandableServiceList } from '../../../components/ui/ExpandableServiceList'
import { SectionTitle } from '../../../components/ui/SectionTitle'
import { tezCatalogContent } from '../../../data/tez'

type TezCatalogItem = (typeof tezCatalogContent.sections)[number]['items'][number]

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
                className="text-pink"
              >
                {section.title}
              </SectionTitle>
              <p className="type-body mx-auto mt-4 max-w-[68rem] font-semibold text-forest-dark/78">
                {section.description}
              </p>
            </motion.div>

            <ExpandableServiceList<TezCatalogItem>
              items={section.items}
              getKey={(item) => item.id}
              className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-9"
              renderItem={(item, index) => (
                <motion.div className="h-full" {...fadeUp(0.08 + index * 0.035)}>
                  <TezCatalogCard
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    price={item.price}
                    ctaHref={tezCatalogContent.ctaHref}
                    ctaLabel={tezCatalogContent.ctaLabel}
                  />
                </motion.div>
              )}
            />
          </div>
        ))}
      </Container>
    </section>
  )
}
