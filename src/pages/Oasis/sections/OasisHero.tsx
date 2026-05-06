import { motion, useReducedMotion } from 'framer-motion'

import oasisHeroBackground from '../../../assets/oasis/oasis-portada.webp'
import { Container } from '../../../components/ui/Container'
import { DecorativeLine } from '../../../components/ui/DecorativeLine'
import { ImageLayer } from '../../../components/ui/ImageLayer'
import { SectionTitle } from '../../../components/ui/SectionTitle'
import { oasisHeroContent } from '../../../data/oasis'

export function OasisHero() {
  const shouldReduceMotion = useReducedMotion()

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24, filter: 'blur(6px)' },
          whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
          viewport: { once: true, amount: 0.3 },
          transition: {
            delay,
            duration: 0.8,
            ease: 'easeOut' as const,
          },
        }

  return (
    <section className="min-h-[100svh] overflow-hidden bg-forest text-white">
      <div className="relative min-h-[68svh] sm:min-h-[70svh] lg:min-h-[69svh]">
        <ImageLayer
          src={oasisHeroBackground}
          alt=""
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover object-[57%_center] sm:object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,14,11,0.34)_0%,rgba(31,53,43,0.28)_48%,rgba(31,53,43,0.46)_100%)]" />

        <Container className="relative z-10 flex min-h-[68svh] items-center justify-center px-6 pt-24 pb-12 text-center sm:min-h-[70svh] sm:pt-28 lg:min-h-[69svh] lg:pt-28 lg:pb-14">
          <div className="max-w-[21rem] sm:max-w-[40rem] lg:max-w-[55rem]">
            <motion.div {...fadeUp(0.06)}>
              <SectionTitle
                as="h1"
                className="text-pink-soft drop-shadow-[0_10px_20px_rgba(18,22,18,0.3)] sm:text-[4.25rem] lg:text-[5.2rem] lg:leading-[0.9]"
              >
                <span className="block">{oasisHeroContent.titleLines[0]}</span>
                <span className="block">{oasisHeroContent.titleLines[1]}</span>
              </SectionTitle>
            </motion.div>

            <motion.p
              className="mx-auto mt-4 max-w-[18rem] text-[1rem] leading-7 text-cream-light/95 sm:max-w-[34rem] sm:text-[1.12rem] sm:leading-8 lg:mt-5 lg:max-w-[50rem] lg:text-[1.18rem] lg:leading-9"
              {...fadeUp(0.18)}
            >
              {oasisHeroContent.description}
            </motion.p>
          </div>
        </Container>
      </div>

      <div className="bg-forest">
        <Container className="px-7 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
          <motion.div className="mx-auto max-w-[51rem]" {...fadeUp(0.24)}>
            <p className="text-[1.08rem] leading-[1.85] text-cream-light/96 sm:text-[1.18rem] sm:leading-[1.95] lg:text-[1.2rem] lg:leading-[2.05]">
              {oasisHeroContent.bodyDescription}
            </p>
            <DecorativeLine variant="light" className="mx-auto mt-10 w-[62%] max-w-[26rem] opacity-95" />
          </motion.div>
        </Container>
      </div>
    </section>
  )
}
