import { motion, useReducedMotion } from 'framer-motion'

import filoHeroBackground from '../../../assets/filo/hero-filo.png'
import { Container } from '../../../components/ui/Container'
import { DecorativeLine } from '../../../components/ui/DecorativeLine'
import { ImageLayer } from '../../../components/ui/ImageLayer'
import { SectionTitle } from '../../../components/ui/SectionTitle'
import { filoHeroContent } from '../../../data/filo'

export function FiloHero() {
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
      <div className="relative aspect-[1440/701] min-h-[24rem]">
        <ImageLayer
          src={filoHeroBackground}
          alt=""
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover object-[52%_center]"
        />
        <div className="absolute inset-0 bg-forest/18" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,22,18,0.12)_0%,rgba(31,53,43,0.18)_48%,rgba(31,53,43,0.56)_100%)]" />

        <div className="relative z-10 flex h-full items-end px-[6.2vw] pb-8 sm:pb-10 lg:pb-9">
          <motion.div className="max-w-[70rem]" {...fadeUp(0.08)}>
            <SectionTitle
              as="h1"
              className="text-pink-soft drop-shadow-[0_10px_20px_rgba(18,22,18,0.28)] sm:text-[4.2rem] lg:text-[5.05rem] lg:leading-[0.9]"
            >
              {filoHeroContent.title}
            </SectionTitle>
            <p className="mt-3 max-w-[56rem] text-[1rem] leading-7 text-cream-light/96 sm:text-[1.1rem] lg:text-[1.16rem]">
              {filoHeroContent.description}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="bg-forest">
        <Container className="px-7 py-12 sm:px-8 sm:py-[4.2rem] lg:px-12 lg:py-[5.2rem]">
          <motion.div className="mx-auto max-w-[55rem]" {...fadeUp(0.2)}>
            <p className="text-[1.02rem] font-semibold leading-[1.72] text-cream-light/96 sm:text-[1.13rem] sm:leading-[1.82]">
              {filoHeroContent.bodyDescription}
            </p>
            <DecorativeLine variant="light" className="mx-auto mt-12 w-[28rem] max-w-[72%] opacity-95" />
          </motion.div>
        </Container>
      </div>
    </section>
  )
}
