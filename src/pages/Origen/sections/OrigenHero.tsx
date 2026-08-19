import { motion, useReducedMotion } from 'framer-motion'

import origenHeroBackground from '../../../assets/origen/origenportada-editada.webp'
import origenHeroVideo from '../../../assets/videos-hero/optimized/origen.mp4'
import { Container } from '../../../components/ui/Container'
import { HeroOverlay } from '../../../components/ui/HeroOverlay'
import { HeroVideoBackground } from '../../../components/ui/HeroVideoBackground'
import { SectionLabel } from '../../../components/ui/SectionLabel'
import { SectionTitle } from '../../../components/ui/SectionTitle'
import { origenHeroContent } from '../../../data/origen'

export function OrigenHero() {
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
    <section className="relative h-[64svh] min-h-[25rem] max-h-[44rem] overflow-hidden bg-forest-dark text-white">
      <HeroVideoBackground
        src={origenHeroVideo}
        poster={origenHeroBackground}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <HeroOverlay className="bg-[linear-gradient(180deg,rgba(18,31,25,0.22)_0%,rgba(27,45,36,0.28)_44%,rgba(31,53,43,0.62)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,29,23,0.68)_0%,rgba(22,38,30,0.46)_36%,rgba(26,45,36,0.16)_66%,rgba(26,45,36,0.04)_100%)]" />

      <Container className="relative z-10 flex h-full items-end pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pb-18">
        <div className="w-full min-w-0 max-w-[22rem] sm:max-w-[34rem] lg:max-w-[66rem]">
          <motion.div {...fadeUp(0.06)}>
            <SectionLabel
              variant="dark"
              className="min-h-8 border-cream-light/70 bg-forest-deep/70 px-6 py-1.5 font-bold tracking-[0.18em] text-cream-light shadow-[0_12px_28px_rgba(10,20,16,0.28)] backdrop-blur-sm"
            >
              {origenHeroContent.label}
            </SectionLabel>
          </motion.div>

          <motion.div className="mt-5 sm:mt-6" {...fadeUp(0.18)}>
            <SectionTitle
              as="h1"
              variant="display"
              className="max-w-[16ch] text-white drop-shadow-[0_16px_34px_rgba(13,24,19,0.42)] sm:max-w-[14ch] lg:max-w-[22ch]"
            >
              {origenHeroContent.title}
            </SectionTitle>
          </motion.div>

          <motion.p
            className="type-lead mt-5 max-w-[20rem] font-medium text-cream-light drop-shadow-[0_10px_22px_rgba(13,24,19,0.38)] sm:max-w-[32rem] lg:max-w-[54rem]"
            {...fadeUp(0.3)}
          >
            {origenHeroContent.description}
          </motion.p>
        </div>
      </Container>
    </section>
  )
}
