import { motion, useReducedMotion } from 'framer-motion'

import tezHeroBackground from '../../../assets/tez/herotez.png'
import { Container } from '../../../components/ui/Container'
import { DecorativeLine } from '../../../components/ui/DecorativeLine'
import { ImageLayer } from '../../../components/ui/ImageLayer'
import { SectionTitle } from '../../../components/ui/SectionTitle'
import { tezHeroContent } from '../../../data/tez'

export function TezHero() {
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
      <div className="relative aspect-[1383/777] min-h-[25rem]">
        <ImageLayer
          src={tezHeroBackground}
          alt=""
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover object-[50%_center]"
        />
        <div className="absolute inset-0 bg-forest/18" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,22,18,0.1)_0%,rgba(31,53,43,0.16)_48%,rgba(31,53,43,0.54)_100%)]" />

        <div className="relative z-10 flex h-full items-end px-[5.1vw] pb-7 sm:pb-8 lg:pb-8">
          <motion.div className="max-w-[38rem]" {...fadeUp(0.08)}>
            <SectionTitle
              as="h1"
              className="text-pink-soft drop-shadow-[0_10px_20px_rgba(18,22,18,0.28)] sm:text-[4.05rem] lg:text-[4.8rem] lg:leading-[0.9]"
            >
              <span className="block">{tezHeroContent.titleLines[0]}</span>
              <span className="block">{tezHeroContent.titleLines[1]}</span>
              <span className="block">{tezHeroContent.titleLines[2]}</span>
            </SectionTitle>
            <p className="mt-3 max-w-[38rem] text-[0.95rem] leading-6 text-cream-light/96 sm:text-[1.04rem] lg:text-[1.08rem]">
              {tezHeroContent.description}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-forest">
        <Container className="px-7 py-12 sm:px-8 sm:py-[4.1rem] lg:px-12 lg:py-[5.1rem]">
          <motion.div className="mx-auto max-w-[58rem]" {...fadeUp(0.2)}>
            <p className="text-[0.98rem] font-semibold leading-[1.72] text-cream-light/96 sm:text-[1.08rem] sm:leading-[1.82]">
              {tezHeroContent.bodyDescription}
            </p>
            <DecorativeLine variant="light" className="mx-auto mt-10 w-[28rem] max-w-[72%] opacity-95" />
          </motion.div>
        </Container>
      </div>
    </section>
  )
}
