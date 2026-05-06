import { motion, useReducedMotion } from 'framer-motion'

import calmTreatmentImage from '../../../assets/home/despierta-tu-calma-interior-imagen.webp'
import { homeIntroContent } from '../../../data/home'
import { Button } from '../../../components/ui/Button'
import { Container } from '../../../components/ui/Container'
import { ImageLayer } from '../../../components/ui/ImageLayer'
import { SectionLabel } from '../../../components/ui/SectionLabel'
import { SectionTitle } from '../../../components/ui/SectionTitle'

export function HomeIntro() {
  const shouldReduceMotion = useReducedMotion()

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 26, filter: 'blur(8px)' },
          whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
          viewport: { once: true, amount: 0.3 },
          transition: {
            delay,
            duration: 0.78,
            ease: 'easeOut' as const,
          },
        }

  return (
    <section className="flex min-h-[100svh] items-center bg-cream py-12 text-forest-dark sm:py-16 lg:py-20">
      <Container className="w-full">
        <div className="flex min-h-[calc(100svh-6rem)] flex-col justify-center lg:min-h-[calc(100svh-8rem)]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.18fr)_minmax(0,0.96fr)] lg:items-start lg:gap-14">
            <motion.div
              className="max-w-[34rem] lg:max-w-none"
              {...fadeUp(0.08)}
            >
              <SectionLabel variant="pink">Respira relajación</SectionLabel>
              <SectionTitle
                as="h2"
                className="mt-5 max-w-[12ch] text-forest-dark sm:max-w-[11ch] lg:max-w-none lg:text-[4.2rem] xl:text-[4.55rem]"
              >
                {homeIntroContent.titleLines.map((line) => (
                  <span key={line} className="block lg:whitespace-nowrap">
                    {line}
                  </span>
                ))}
              </SectionTitle>
            </motion.div>

            <motion.div
              className="max-w-[38rem] pt-1 lg:justify-self-end"
              {...fadeUp(0.2)}
            >
              <p className="text-[1rem] leading-8 text-forest-dark/88 sm:text-[1.04rem] sm:leading-9 lg:text-[1.06rem] lg:leading-9">
                {homeIntroContent.description}
              </p>
            </motion.div>
          </div>

          <motion.div
            className="mt-10 sm:mt-12 lg:mt-14"
            {...fadeUp(0.32)}
          >
            <ImageLayer
              src={calmTreatmentImage}
              alt="Tratamiento de relajación con piedras calientes"
              className="h-[16.5rem] w-full rounded-[999px] object-cover object-center shadow-[0_24px_50px_rgba(36,61,49,0.12)] sm:h-[21rem] lg:h-[18.5rem] xl:h-[19.75rem]"
            />
          </motion.div>

          <motion.div
            className="mt-9 flex justify-center sm:mt-10"
            {...fadeUp(0.44)}
          >
            <Button
              to={homeIntroContent.ctaHref}
              variant="light"
              showArrow
              className="min-w-[14.5rem] border-forest-soft/45 px-8 text-[0.78rem] tracking-[0.12em] shadow-[0_10px_26px_rgba(47,77,60,0.12)] hover:border-forest-soft/60"
            >
              {homeIntroContent.ctaLabel}
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
