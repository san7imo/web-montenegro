import { motion, useReducedMotion } from 'framer-motion'

import backgroundImage from '../../../assets/esencia/portada-fondo-estetica.webp'
import olgaWithLeavesImage from '../../../assets/esencia/olga-con-hojas.png'
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
    <section className="relative min-h-[100svh] overflow-hidden bg-cream">
      <ImageLayer
        src={backgroundImage}
        alt=""
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover object-[32%_center] sm:object-[36%_center] lg:object-center"
      />

      <div className="relative z-10 flex min-h-[100svh] items-end pt-28 pb-8 sm:pt-32 sm:pb-10 lg:block lg:pt-32 lg:pb-0">
        <Container className="w-full">
          <div className="relative flex min-h-[calc(100svh-8rem)] flex-col lg:min-h-[calc(100svh-10rem)]">
            <div className="relative z-30 mx-auto max-w-[22rem] sm:max-w-[28rem] lg:absolute lg:top-[1.7rem] lg:right-[24rem] lg:max-w-[28rem] xl:top-[1.45rem] xl:right-[26rem] xl:max-w-[30rem]">
              <motion.div {...fadeUp(0.06)}>
                <SectionTitle
                  as="h1"
                  variant="display"
                  className="text-center text-pink drop-shadow-[0_12px_18px_rgba(194,11,114,0.16)] lg:text-right"
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
              <div className="relative z-10 lg:min-h-[18rem] lg:max-w-[47%] xl:max-w-[45%]">
                <p className="type-quote max-w-[18rem] text-cream-light/96 sm:max-w-[21rem] lg:max-w-[30rem]">
                  {esenciaHeroContent.quote}
                </p>
                <div className="mt-8 sm:mt-10">
                  <p className="type-card-title text-cream-light">
                    {esenciaHeroContent.author}
                  </p>
                  <p className="type-body mt-1 text-cream-light/92">
                    {esenciaHeroContent.role}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative z-20 mt-8 ml-auto w-[14.25rem] sm:mt-10 sm:w-[17.5rem] lg:absolute lg:right-[-24px] lg:bottom-[1.35rem] lg:mt-0 lg:w-[34rem] xl:right-[-34px] xl:bottom-[1.55rem] xl:w-[36.5rem]"
              {...fadeUp(0.24)}
            >
              <ImageLayer
                src={olgaWithLeavesImage}
                alt="Olga Lucia Montenegro sosteniendo un equipo estético"
                className="w-full object-contain"
              />
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  )
}
