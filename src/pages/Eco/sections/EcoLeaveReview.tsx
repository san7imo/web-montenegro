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
          <SectionTitle as="h2" className="text-white">
            {ecoLeaveContent.title}
          </SectionTitle>
          <p className="type-body mx-auto mt-5 max-w-[69rem] font-semibold text-cream-light/90">
            {ecoLeaveContent.description}
          </p>
          <div className="mt-9">
            <Button
              href={ecoLeaveContent.ctaHref}
              target="_blank"
              rel="noreferrer"
              className="min-w-[15.3rem] px-8 tracking-[0.05em]"
            >
              {ecoLeaveContent.ctaLabel}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
