import { motion, useReducedMotion } from 'framer-motion'

import { ServiceExperienceCard } from '../../../components/cards/ServiceExperienceCard'
import { Container } from '../../../components/ui/Container'
import { SectionTitle } from '../../../components/ui/SectionTitle'
import { oasisPurificationExperiencesContent } from '../../../data/oasis'

export function PurificationExperiences() {
  const shouldReduceMotion = useReducedMotion()

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24, filter: 'blur(6px)' },
          whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
          viewport: { once: true, amount: 0.2 },
          transition: {
            delay,
            duration: 0.82,
            ease: 'easeOut' as const,
          },
        }

  return (
    <section className="bg-cream py-12 text-forest sm:py-14 lg:py-20">
      <Container className="!max-w-[66.5rem] px-5 sm:px-6 lg:!px-0">
        <motion.div className="mx-auto max-w-[23rem] text-center sm:max-w-[29rem]" {...fadeUp(0.04)}>
          <SectionTitle
            as="h2"
            className="text-forest sm:text-[3.55rem] lg:text-[4.05rem]"
          >
            <span className="block">{oasisPurificationExperiencesContent.titleLines[0]}</span>
            <span className="block">{oasisPurificationExperiencesContent.titleLines[1]}</span>
          </SectionTitle>
        </motion.div>

        <div className="mt-10 space-y-5 sm:mt-12 lg:mt-16 lg:space-y-7">
          {oasisPurificationExperiencesContent.items.map((item, index) => (
            <motion.div key={item.id} {...fadeUp(0.12 + index * 0.08)}>
              <ServiceExperienceCard
                id={item.id}
                title={item.title}
                description={item.description}
                duration={item.duration}
                price={item.price}
                image={item.image}
                ctaHref={oasisPurificationExperiencesContent.ctaHref}
                ctaLabel={oasisPurificationExperiencesContent.ctaLabel}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
