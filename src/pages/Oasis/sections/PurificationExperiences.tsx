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
    <section className="bg-cream py-14 text-forest sm:py-16 lg:py-20">
      <Container className="max-w-[78rem] px-0 sm:px-0">
        <motion.div className="mx-auto max-w-[25rem] px-5 text-center sm:max-w-[33rem] sm:px-6" {...fadeUp(0.04)}>
          <SectionTitle
            as="h2"
            className="text-forest sm:text-[4.15rem] lg:text-[4.7rem]"
          >
            <span className="block">{oasisPurificationExperiencesContent.titleLines[0]}</span>
            <span className="block">{oasisPurificationExperiencesContent.titleLines[1]}</span>
          </SectionTitle>
        </motion.div>

        <div className="mt-12 lg:mt-14">
          {oasisPurificationExperiencesContent.items.map((item, index) => (
            <motion.div key={item.id} {...fadeUp(0.12 + index * 0.08)}>
              <div className="border-t border-pink/55 px-5 py-3 sm:px-6 lg:px-8">
                <ServiceExperienceCard
                  title={item.title}
                  description={item.description}
                  duration={item.duration}
                  price={item.price}
                  image={item.image}
                  ctaHref={oasisPurificationExperiencesContent.ctaHref}
                  ctaLabel={oasisPurificationExperiencesContent.ctaLabel}
                />
              </div>
            </motion.div>
          ))}
          <div className="border-t border-pink/55" />
        </div>
      </Container>
    </section>
  )
}
