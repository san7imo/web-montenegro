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
          <motion.div className="w-full min-w-0 max-w-[72rem]" {...fadeUp(0.08)}>
            <SectionTitle
              as="h1"
              variant="display"
              className="text-pink-soft drop-shadow-[0_10px_20px_rgba(18,22,18,0.26)]"
            >
              <span className="block">{tactoHeroContent.titleLines[0]}</span>
              <span className="block sm:whitespace-nowrap">{tactoHeroContent.titleLines[1]}</span>
            </SectionTitle>
            <p className="type-lead mt-3 max-w-[45rem] text-cream-light/96">
              {tactoHeroContent.description}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-forest">
        <Container className="px-7 py-12 sm:px-8 sm:py-[4.15rem] lg:px-12 lg:py-[5.75rem]">
          <motion.div className="mx-auto max-w-[52rem]" {...fadeUp(0.2)}>
            <p className="type-lead font-medium text-cream-light/96">
              {tactoHeroContent.bodyDescription}
            </p>
            <DecorativeLine variant="light" className="mx-auto mt-10 w-[28rem] max-w-[72%] opacity-95" />
          </motion.div>
        </Container>
      </div>
    </section>
  )
}
