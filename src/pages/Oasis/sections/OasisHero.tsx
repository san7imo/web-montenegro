import { motion, useReducedMotion } from 'framer-motion'

import oasisHeroBackground from '../../../assets/oasis/oasis-portada.webp'
import oasisHeroVideo from '../../../assets/videos-hero/optimized/oasis.mp4'
import { Container } from '../../../components/ui/Container'
import { DecorativeLine } from '../../../components/ui/DecorativeLine'
import { HeroOverlay } from '../../../components/ui/HeroOverlay'
import { HeroVideoBackground } from '../../../components/ui/HeroVideoBackground'
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
    <section className="overflow-hidden bg-forest text-white">
      <div className="relative h-[64svh] min-h-[25rem] max-h-[44rem]">
        <HeroVideoBackground
          src={oasisHeroVideo}
          poster={oasisHeroBackground}
          className="absolute inset-0 h-full w-full object-cover object-[57%_center] sm:object-center"
        />
        <HeroOverlay />

        <div className="relative z-10 flex h-full items-end px-[6.2vw] pb-8 sm:pb-10 lg:pb-9">
          <div className="max-w-[70rem]">
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
              className="mt-3 max-w-[52rem] text-[1rem] leading-7 text-cream-light/95 sm:text-[1.08rem] lg:text-[1.14rem]"
              {...fadeUp(0.18)}
            >
              {oasisHeroContent.description}
            </motion.p>
          </div>
        </div>
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
