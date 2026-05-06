import { motion, useReducedMotion } from 'framer-motion'

import backgroundImage from '../../../assets/esencia/portada-fondo-estetica.webp'
import olgaWithLeavesImage from '../../../assets/esencia/olga-con-hojas.webp'
import { esenciaHeroContent } from '../../../data/esencia'
import { Container } from '../../../components/ui/Container'
import { ImageLayer } from '../../../components/ui/ImageLayer'
import { SectionTitle } from '../../../components/ui/SectionTitle'

export function EsenciaHero() {
  const shouldReduceMotion = useReducedMotion()

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 26, filter: 'blur(8px)' },
          whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
          viewport: { once: true, amount: 0.28 },
          transition: {
            delay,
            duration: 0.82,
            ease: 'easeOut' as const,
          },
        }

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-cream-light">
      <ImageLayer
        src={backgroundImage}
        alt=""
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover object-[32%_center] sm:object-[36%_center] lg:object-center"
      />

      <div className="relative z-10 flex min-h-[100svh] items-end pt-28 pb-8 sm:pt-32 sm:pb-10 lg:block lg:pt-32 lg:pb-0">
        <Container className="w-full">
          <div className="relative flex min-h-[calc(100svh-8rem)] flex-col lg:min-h-[calc(100svh-10rem)]">
            <div className="relative z-30 mx-auto max-w-[22rem] sm:max-w-[28rem] lg:absolute lg:top-[1.2rem] lg:right-[22.5rem] lg:max-w-[30rem] xl:top-[0.8rem] xl:right-[24.5rem] xl:max-w-[31rem]">
              <motion.div {...fadeUp(0.06)}>
                <SectionTitle
                  as="h1"
                  className="text-center text-[3rem] leading-[0.9] tracking-[-0.045em] text-pink drop-shadow-[0_12px_18px_rgba(194,11,114,0.18)] sm:text-[4.2rem] lg:text-right lg:text-[4.35rem] xl:text-[4.65rem]"
                >
                  {esenciaHeroContent.titleLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </SectionTitle>
              </motion.div>
            </div>

            <motion.div
              className="relative z-10 mt-8 max-w-[24rem] rounded-[2.75rem] bg-forest px-7 py-8 text-cream-light shadow-[0_26px_70px_rgba(31,53,43,0.22)] sm:mt-10 sm:max-w-[31rem] sm:px-9 sm:py-10 lg:absolute lg:inset-x-0 lg:bottom-[2.35rem] lg:mx-auto lg:mt-0 lg:w-[88%] lg:max-w-[72rem] lg:rounded-[3.4rem] lg:px-12 lg:py-[42px] xl:bottom-[2.55rem] xl:w-[90%] xl:px-14"
              {...fadeUp(0.18)}
            >
              <span className="pointer-events-none absolute top-5 left-6 text-[3rem] leading-none text-cream-light/88 sm:top-6 sm:left-8 lg:top-8 lg:left-10 lg:text-[4rem]" aria-hidden="true">
                “
              </span>
              <span className="pointer-events-none absolute top-5 left-[55%] text-[3rem] leading-none text-cream-light/88 sm:top-6 sm:left-[54%] lg:top-8 lg:left-[47%] lg:text-[4rem] xl:left-[45%]" aria-hidden="true">
                ”
              </span>
              <div className="relative z-10 pt-6 sm:pt-7 lg:min-h-[18rem] lg:max-w-[47%] lg:pt-9 xl:max-w-[45%]">
                <p className="max-w-[18rem] text-[1rem] leading-[1.18] text-cream-light/96 sm:max-w-[21rem] sm:text-[1.18rem] lg:max-w-[30rem] lg:text-[1.28rem] lg:leading-[1.16]">
                  {esenciaHeroContent.quote}
                </p>
                <div className="mt-8 sm:mt-10">
                  <p className="font-heading text-[2rem] leading-none tracking-[-0.03em] text-cream-light sm:text-[2.3rem] lg:text-[2.75rem]">
                    {esenciaHeroContent.author}
                  </p>
                  <p className="mt-1 text-[1.1rem] leading-7 text-cream-light/92 sm:text-[1.16rem] lg:text-[1.28rem]">
                    {esenciaHeroContent.role}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative z-20 mt-8 ml-auto w-[18rem] sm:mt-10 sm:w-[22rem] lg:absolute lg:right-[-122px] lg:bottom-[-81px] lg:mt-0 lg:w-[48rem] xl:right-[-122px] xl:bottom-[-81px] xl:w-[52rem]"
              {...fadeUp(0.24)}
            >
              <ImageLayer
                src={olgaWithLeavesImage}
                alt="Olga Montenegro sosteniendo un equipo estético"
                className="w-full object-contain"
              />
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  )
}
