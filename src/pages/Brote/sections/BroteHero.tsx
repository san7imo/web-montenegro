import { motion, useReducedMotion } from 'framer-motion'

import broteHeroBackground from '../../../assets/brote/herobrote.png'
import { Container } from '../../../components/ui/Container'
import { DecorativeLine } from '../../../components/ui/DecorativeLine'
import { ImageLayer } from '../../../components/ui/ImageLayer'
import { SectionTitle } from '../../../components/ui/SectionTitle'
import { broteHeroContent } from '../../../data/brote'

export function BroteHero() {
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
      <div className="relative aspect-[1440/732] min-h-[24rem]">
        <ImageLayer
          src={broteHeroBackground}
          alt=""
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover object-[53%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,22,18,0.16)_0%,rgba(31,53,43,0.16)_48%,rgba(31,53,43,0.48)_100%)]" />

        <div className="relative z-10 flex h-full items-end px-[6.2vw] pb-8 sm:pb-10 lg:pb-9">
          <motion.div className="max-w-[67rem]" {...fadeUp(0.08)}>
            <SectionTitle
              as="h1"
              className="text-pink-soft drop-shadow-[0_10px_20px_rgba(18,22,18,0.28)] sm:text-[4.35rem] lg:text-[5.25rem] lg:leading-[0.9]"
            >
              <span className="block">{broteHeroContent.titleLines[0]}</span>
              <span className="block">{broteHeroContent.titleLines[1]}</span>
            </SectionTitle>
            <p className="mt-3 max-w-[42rem] text-[1rem] leading-7 text-cream-light/96 sm:text-[1.12rem] lg:text-[1.18rem]">
              {broteHeroContent.description}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-forest">
        <Container className="px-7 py-12 sm:px-8 sm:py-[4.2rem] lg:px-12 lg:py-[5.2rem]">
          <motion.div className="mx-auto max-w-[61rem]" {...fadeUp(0.2)}>
            <p className="text-[1.05rem] font-semibold leading-[1.72] text-cream-light/96 sm:text-[1.18rem] sm:leading-[1.82]">
              {broteHeroContent.bodyDescription}
            </p>
            <DecorativeLine variant="light" className="mx-auto mt-12 w-[28rem] max-w-[72%] opacity-95" />
          </motion.div>
        </Container>
      </div>
    </section>
  )
}
