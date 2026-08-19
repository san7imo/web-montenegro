import { motion, useReducedMotion } from 'framer-motion'

import { Container } from '../../../components/ui/Container'
import { DecorativeLine } from '../../../components/ui/DecorativeLine'
import { ecoIntroContent } from '../../../data/eco'

export function EcoIntro() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="bg-forest py-16 text-cream-light sm:py-[4.6rem] lg:py-[5.3rem]">
      <Container>
        <motion.div
          className="mx-auto max-w-[55rem] text-left"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 22, filter: 'blur(6px)' }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.78, ease: 'easeOut' }}
        >
          <p className="type-body font-semibold text-cream-light/92">
            {ecoIntroContent.description}
          </p>
          <DecorativeLine
            variant="light"
            className="mx-auto mt-12 w-[62%] max-w-[28.5rem] opacity-95"
          />
        </motion.div>
      </Container>
    </section>
  )
}
