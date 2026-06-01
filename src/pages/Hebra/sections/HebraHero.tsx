import { motion, useReducedMotion } from 'framer-motion'

import hebraHeroBackground from '../../../assets/hebra/herohebra.png'
import { Container } from '../../../components/ui/Container'
import { DecorativeLine } from '../../../components/ui/DecorativeLine'
import { ImageLayer } from '../../../components/ui/ImageLayer'
import { SectionTitle } from '../../../components/ui/SectionTitle'
import { hebraHeroContent } from '../../../data/hebra'

export function HebraHero() {
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
      <div className="relative aspect-[1438/742] min-h-[25rem]">
        <ImageLayer
          src={hebraHeroBackground}
          alt=""
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover object-[47%_center]"
        />
        <div className="absolute inset-0 bg-forest/12" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,22,18,0.08)_0%,rgba(31,53,43,0.12)_48%,rgba(31,53,43,0.5)_100%)]" />

        <div className="relative z-10 flex h-full items-end px-[6.2vw] pb-7 sm:pb-9 lg:pb-8">
          <motion.div className="max-w-[76rem]" {...fadeUp(0.08)}>
            <SectionTitle
              as="h1"
              className="text-pink-soft drop-shadow-[0_10px_20px_rgba(18,22,18,0.28)] sm:text-[4.05rem] lg:text-[4.9rem] lg:leading-[0.9]"
            >
              <span className="block">{hebraHeroContent.titleLines[0]}</span>
              <span className="block">{hebraHeroContent.titleLines[1]}</span>
            </SectionTitle>
            <p className="mt-3 max-w-[68rem] text-[0.98rem] leading-7 text-cream-light/96 sm:text-[1.08rem] lg:text-[1.14rem]">
              {hebraHeroContent.description}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-forest">
        <Container className="px-7 py-12 sm:px-8 sm:py-[4.2rem] lg:px-12 lg:py-[5.15rem]">
          <motion.div className="mx-auto max-w-[59rem]" {...fadeUp(0.2)}>
            <p className="text-[0.98rem] font-semibold leading-[1.72] text-cream-light/96 sm:text-[1.06rem] sm:leading-[1.82]">
              {hebraHeroContent.bodyDescription}
            </p>
            <DecorativeLine variant="light" className="mx-auto mt-10 w-[28rem] max-w-[72%] opacity-95" />
          </motion.div>
        </Container>
      </div>
    </section>
  )
}
