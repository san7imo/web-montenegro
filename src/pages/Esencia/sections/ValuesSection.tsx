import { motion, useReducedMotion } from 'framer-motion'

import { ValueCard } from '../../../components/cards/ValueCard'
import { Container } from '../../../components/ui/Container'
import { SectionTitle } from '../../../components/ui/SectionTitle'
import { esenciaValuesContent } from '../../../data/esencia'

export function ValuesSection() {
  const shouldReduceMotion = useReducedMotion()

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24, filter: 'blur(6px)' },
          whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
          viewport: { once: true, amount: 0.22 },
          transition: {
            delay,
            duration: 0.8,
            ease: 'easeOut' as const,
          },
        }

  return (
    <section className="flex min-h-[100svh] items-center bg-forest py-14 text-cream-light sm:py-16 lg:py-18">
      <Container className="w-full">
        <div className="flex min-h-[calc(100svh-7rem)] flex-col justify-center lg:min-h-[calc(100svh-8rem)]">
          <motion.div className="mx-auto" {...fadeUp(0.04)}>
            <SectionTitle
              as="h2"
              className="text-center text-cream-light sm:text-[4.4rem] lg:text-[5.2rem]"
            >
              {esenciaValuesContent.title}
            </SectionTitle>
          </motion.div>

          <div className="mt-12 grid gap-8 lg:mt-14 lg:grid-cols-3 lg:gap-8">
            {esenciaValuesContent.items.map((item, index) => (
              <motion.div key={item.title} {...fadeUp(0.12 + index * 0.08)}>
                <ValueCard
                  title={item.title}
                  icon={item.icon}
                  description={item.description}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="relative mt-12 px-3 text-center lg:mt-14 lg:px-12"
            {...fadeUp(0.42)}
          >
            <p className="mx-auto max-w-[62rem] text-[1.02rem] leading-7 text-cream-light/94 sm:text-[1.08rem] sm:leading-8 lg:text-[1.1rem] lg:leading-[1.72]">
              {esenciaValuesContent.quote}
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
