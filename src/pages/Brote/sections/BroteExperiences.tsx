import { motion, useReducedMotion } from 'framer-motion'

import { BroteExperienceCard } from '../../../components/cards/BroteExperienceCard'
import { Container } from '../../../components/ui/Container'
import { ExpandableServiceList } from '../../../components/ui/ExpandableServiceList'
import { SectionTitle } from '../../../components/ui/SectionTitle'
import { broteExperiencesContent } from '../../../data/brote'

export function BroteExperiences() {
  const shouldReduceMotion = useReducedMotion()

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24, filter: 'blur(6px)' },
          whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
          viewport: { once: true, amount: 0.16 },
          transition: {
            delay,
            duration: 0.82,
            ease: 'easeOut' as const,
          },
        }

  return (
    <section className="bg-cream py-14 text-forest sm:py-16 lg:py-[6.9rem]">
      <Container className="!max-w-[66.5rem] px-5 sm:px-6 lg:!px-0">
        <motion.div className="mx-auto max-w-[38rem] text-center" {...fadeUp(0.04)}>
          <SectionTitle
            as="h2"
            className="text-forest sm:text-[4.15rem] lg:text-[4.85rem]"
          >
            {broteExperiencesContent.title}
          </SectionTitle>
        </motion.div>

        <ExpandableServiceList
          items={broteExperiencesContent.items}
          getKey={(item) => item.id}
          className="mt-10 space-y-5 sm:mt-12 lg:mt-16 lg:space-y-7"
          renderItem={(item, index) => (
            <motion.div {...fadeUp(0.1 + index * 0.05)}>
              <BroteExperienceCard
                id={item.id}
                title={item.title}
                description={item.description}
                duration={item.duration}
                price={item.price}
                image={item.image}
                ctaHref={broteExperiencesContent.ctaHref}
                ctaLabel={broteExperiencesContent.ctaLabel}
              />
            </motion.div>
          )}
        />
      </Container>
    </section>
  )
}
