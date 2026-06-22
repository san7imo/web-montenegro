import { motion, useReducedMotion } from 'framer-motion'

import { Button } from '../../../components/ui/Button'
import { Container } from '../../../components/ui/Container'
import { SectionTitle } from '../../../components/ui/SectionTitle'
import { ecoLeaveContent } from '../../../data/eco'

export function EcoLeaveReview() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="bg-forest py-16 text-center text-cream-light sm:py-20 lg:py-[6.35rem]">
      <Container>
        <motion.div
          className="mx-auto max-w-[72rem]"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 22, filter: 'blur(6px)' }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.78, ease: 'easeOut' }}
        >
          <SectionTitle as="h2" className="text-white sm:text-[4.1rem] lg:text-[4.9rem]">
            {ecoLeaveContent.title}
          </SectionTitle>
          <p className="mx-auto mt-5 max-w-[69rem] text-[0.98rem] font-semibold leading-7 text-cream-light/90 sm:text-[1.04rem]">
            {ecoLeaveContent.description}
          </p>
          <div className="mt-9">
            <Button
              href={ecoLeaveContent.ctaHref}
              target="_blank"
              rel="noreferrer"
              className="min-w-[15.3rem] px-8 text-[0.73rem] tracking-[0.05em]"
            >
              {ecoLeaveContent.ctaLabel}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
