import { motion, useReducedMotion } from 'framer-motion'

import raizHeroBackground from '../../../assets/raiz/heroraiz.png'
import raizHeroVideo from '../../../assets/videos-hero/optimized/raiz.mp4'
import { Container } from '../../../components/ui/Container'
import { DecorativeLine } from '../../../components/ui/DecorativeLine'
import { HeroOverlay } from '../../../components/ui/HeroOverlay'
import { HeroVideoBackground } from '../../../components/ui/HeroVideoBackground'
import { SectionTitle } from '../../../components/ui/SectionTitle'
import { raizHeroContent } from '../../../data/raiz'

export function RaizHero() {
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
          src={raizHeroVideo}
          poster={raizHeroBackground}
          className="absolute inset-0 h-full w-full object-cover object-[54%_center]"
        />
        <HeroOverlay />

        <div className="relative z-10 flex h-full items-end px-[6.2vw] pb-8 sm:pb-10 lg:pb-11">
          <motion.div className="max-w-[76rem]" {...fadeUp(0.08)}>
            <SectionTitle
              as="h1"
              className="text-pink-soft drop-shadow-[0_10px_20px_rgba(18,22,18,0.28)] sm:text-[4.5rem] lg:text-[5.45rem] lg:leading-[0.9]"
            >
              <span className="block">{raizHeroContent.titleLines[0]}</span>
              <span className="block">{raizHeroContent.titleLines[1]}</span>
            </SectionTitle>
            <p className="mt-3 max-w-[69rem] text-[1.05rem] leading-7 text-cream-light/96 sm:text-[1.18rem] lg:text-[1.28rem] lg:leading-8">
              {raizHeroContent.description}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-forest">
        <Container className="px-7 py-12 sm:px-8 sm:py-[4.25rem] lg:px-12 lg:py-[5.35rem]">
          <motion.div className="mx-auto max-w-[58rem]" {...fadeUp(0.2)}>
            <p className="text-[1.08rem] font-semibold leading-[1.65] text-cream-light/96 sm:text-[1.22rem] sm:leading-[1.72]">
              {raizHeroContent.bodyDescription}
            </p>
            <DecorativeLine variant="light" className="mx-auto mt-12 w-[28rem] max-w-[72%] opacity-95" />
          </motion.div>
        </Container>
      </div>
    </section>
  )
}
