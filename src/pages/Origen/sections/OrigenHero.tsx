import { motion, useReducedMotion } from 'framer-motion'

import origenHeroBackground from '../../../assets/origen/origenportada-editada.webp'
import { Container } from '../../../components/ui/Container'
import { ImageLayer } from '../../../components/ui/ImageLayer'
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
    <section className="relative min-h-[100svh] overflow-hidden bg-forest-dark text-white">
      <ImageLayer
        src={origenHeroBackground}
        alt=""
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <Container className="relative z-10 flex min-h-[100svh] items-end pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pb-18">
        <div className="max-w-[22rem] sm:max-w-[34rem] lg:max-w-[66rem]">
          <motion.div {...fadeUp(0.06)}>
            <SectionLabel
              variant="dark"
              className="border-white/70 bg-white/6 px-8 text-[0.8rem] tracking-[0.05em] text-cream-light"
            >
              {origenHeroContent.label}
            </SectionLabel>
          </motion.div>

          <motion.div className="mt-5 sm:mt-6" {...fadeUp(0.18)}>
            <SectionTitle
              as="h1"
              className="max-w-[16ch] text-white drop-shadow-[0_14px_30px_rgba(23,34,28,0.18)] sm:max-w-[14ch] sm:text-[4.2rem] lg:max-w-[22ch] lg:text-[4.9rem] xl:text-[5.55rem]"
            >
              {origenHeroContent.title}
            </SectionTitle>
          </motion.div>

          <motion.p
            className="mt-5 max-w-[20rem] text-[1.02rem] leading-8 text-cream-light/96 sm:max-w-[32rem] sm:text-[1.08rem] sm:leading-8 lg:max-w-[54rem] lg:text-[1.14rem] lg:leading-9"
            {...fadeUp(0.3)}
          >
            {origenHeroContent.description}
          </motion.p>
        </div>
      </Container>
    </section>
  )
}
