import { motion, useReducedMotion } from 'framer-motion'

import { PillarCard } from '../../../components/cards/PillarCard'
import { Container } from '../../../components/ui/Container'
import { SectionTitle } from '../../../components/ui/SectionTitle'
import { origenWisdomPillarsContent } from '../../../data/origen'

export function WisdomPillars() {
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
    <section className="bg-[linear-gradient(180deg,#2f4d3c_0%,#4b6352_38%,#6f8068_74%,#87947b_100%)] pt-6 pb-12 text-cream-light sm:pt-8 sm:pb-14 lg:pt-8 lg:pb-16">
      <Container>
        <motion.div className="mx-auto max-w-[22rem] sm:max-w-[30rem]" {...fadeUp(0.04)}>
          <SectionTitle
            as="h2"
            className="text-center text-pink-soft"
          >
            <span className="block">Los Pilares de la</span>
            <span className="block">Sabiduría</span>
          </SectionTitle>
        </motion.div>

        <div className="mt-8 grid gap-6 lg:mt-10 lg:grid-cols-3 lg:gap-8">
          {origenWisdomPillarsContent.items.map((item, index) => (
            <motion.div key={item.title} {...fadeUp(0.12 + index * 0.08)}>
              <PillarCard
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
                image={item.image}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
