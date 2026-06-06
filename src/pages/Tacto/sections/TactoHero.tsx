import { motion, useReducedMotion } from 'framer-motion'

import tactoHeroBackground from '../../../assets/tacto/hero.png'
import tactoHeroVideo from '../../../assets/videos-hero/optimized/tacto.mp4'
import { Container } from '../../../components/ui/Container'
import { DecorativeLine } from '../../../components/ui/DecorativeLine'
import { HeroOverlay } from '../../../components/ui/HeroOverlay'
import { HeroVideoBackground } from '../../../components/ui/HeroVideoBackground'
import { SectionTitle } from '../../../components/ui/SectionTitle'
import { tactoHeroContent } from '../../../data/tacto'

export function TactoHero() {
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
            duration: 0.82,
            ease: 'easeOut' as const,
          },
        }

  return (
    <section className="overflow-hidden bg-forest text-white">
      <div className="relative h-[64svh] min-h-[25rem] max-h-[44rem]">
        <HeroVideoBackground
          src={tactoHeroVideo}
          poster={tactoHeroBackground}
          className="absolute inset-0 h-full w-full object-cover object-[43%_center] sm:object-center"
        />
        <HeroOverlay />

        <div className="relative z-10 flex h-full items-end px-[6.2vw] pb-6 sm:pb-7 lg:pb-2">
          <motion.div className="max-w-[72rem]" {...fadeUp(0.08)}>
            <SectionTitle
              as="h1"
              className="text-pink-soft drop-shadow-[0_10px_20px_rgba(18,22,18,0.26)] sm:text-[4.2rem] lg:text-[5.2rem] lg:leading-[0.9]"
            >
              <span className="block">{tactoHeroContent.titleLines[0]}</span>
              <span className="block sm:whitespace-nowrap">{tactoHeroContent.titleLines[1]}</span>
            </SectionTitle>
            <p className="mt-3 max-w-[45rem] text-[0.96rem] leading-6 text-cream-light/96 sm:text-[1.08rem] lg:text-[1.12rem]">
              {tactoHeroContent.description}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-forest">
        <Container className="px-7 py-12 sm:px-8 sm:py-[4.15rem] lg:px-12 lg:py-[5.75rem]">
          <motion.div className="mx-auto max-w-[52rem]" {...fadeUp(0.2)}>
            <p className="text-[1rem] font-medium leading-[1.75] text-cream-light/96 sm:text-[1.08rem] sm:leading-[1.86]">
              {tactoHeroContent.bodyDescription}
            </p>
            <DecorativeLine variant="light" className="mx-auto mt-10 w-[28rem] max-w-[72%] opacity-95" />
          </motion.div>
        </Container>
      </div>
    </section>
  )
}
