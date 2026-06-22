import { motion, useReducedMotion } from 'framer-motion'

import { Container } from '../../../components/ui/Container'
import { DecorativeLine } from '../../../components/ui/DecorativeLine'
import { contactoIntroContent } from '../../../data/contacto'

export function ContactIntro() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="bg-forest py-16 text-cream-light sm:py-[4.65rem] lg:py-[5.35rem]">
      <Container>
        <motion.div
          className="mx-auto max-w-[55rem] text-left"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 22, filter: 'blur(6px)' }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.78, ease: 'easeOut' }}
        >
          <p className="text-[1rem] font-semibold leading-[1.72] text-cream-light/92 sm:text-[1.04rem] lg:text-[1.08rem]">
            {contactoIntroContent.description}
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
