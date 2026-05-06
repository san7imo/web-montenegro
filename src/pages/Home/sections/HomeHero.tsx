import { motion, useReducedMotion } from 'framer-motion'

import heroBath from '../../../assets/home/hero-bath.webp'
import symbolLogo from '../../../assets/logo/montenegro-symbol.webp'
import { homeHeroTitleLines, homePageContent } from '../../../data/home'
import { Button } from '../../../components/ui/Button'
import { Container } from '../../../components/ui/Container'
import { ImageLayer } from '../../../components/ui/ImageLayer'

export function HomeHero() {
  const shouldReduceMotion = useReducedMotion()

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24, filter: 'blur(8px)' },
          animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
          transition: {
            delay,
            duration: 0.8,
            ease: 'easeOut' as const,
          },
        }

  return (
    <section className="relative h-[100svh] min-h-[760px] overflow-hidden bg-forest text-white">
      <div className="absolute inset-x-0 top-0 h-[58svh] min-h-[420px] sm:h-[60svh] lg:h-[63svh]">
        <ImageLayer
          src={heroBath}
          alt=""
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover object-[56%_top] sm:object-[54%_top] lg:object-top"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,35,28,0.02)_0%,rgba(24,35,28,0.03)_56%,rgba(36,61,49,0.18)_70%,rgba(36,61,49,0.72)_86%,rgba(47,77,60,1)_100%)]" />
      </div>

      <div className="relative z-10 flex h-full items-end pb-10 sm:pb-12 lg:pb-14">
        <Container>
          <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
            <motion.div {...fadeUp(0.28)}>
              <ImageLayer
                src={symbolLogo}
                alt="Símbolo Montenegro Salud y Belleza"
                loading="eager"
                className="mb-5 w-24 sm:mb-6 sm:w-28 lg:mb-7 lg:w-[138px]"
              />
            </motion.div>

            <motion.h1
              className="max-w-[15ch] font-heading text-[2.4rem] leading-[0.95] tracking-[-0.038em] text-cream-light drop-shadow-[0_10px_24px_rgba(22,34,28,0.12)] sm:max-w-[18ch] sm:text-[3rem] lg:inline-block lg:max-w-none lg:text-[3rem]"
              {...fadeUp(0.42)}
            >
              {homeHeroTitleLines.map((line, index) => (
                <span
                  key={line}
                  className={[
                    'block',
                    index === 1 ? 'mt-1 whitespace-nowrap lg:mt-2' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  {line}
                </span>
              ))}
            </motion.h1>

            <motion.p
              className="mt-5 max-w-[21rem] text-[0.94rem] leading-7 text-cream-light/92 sm:mt-6 sm:max-w-[40rem] sm:text-base sm:leading-8 lg:max-w-[56rem] lg:text-[0.98rem] lg:leading-8"
              {...fadeUp(0.56)}
            >
              {homePageContent.description}
            </motion.p>

            <motion.div className="mt-10 sm:mt-11" {...fadeUp(0.7)}>
              <Button
                to={homePageContent.ctaHref}
                className="min-w-[14rem] px-8 text-[0.78rem] tracking-[0.12em] sm:min-w-[16rem] sm:px-10"
              >
                {homePageContent.ctaLabel}
              </Button>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  )
}
