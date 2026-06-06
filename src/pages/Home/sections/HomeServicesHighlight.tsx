import { motion, useReducedMotion } from 'framer-motion'

import experienceHighlightImage from '../../../assets/home/experiencia-ideal-imagen.webp'
import { homeServicesHighlightContent } from '../../../data/home'
import { Button } from '../../../components/ui/Button'
import { Container } from '../../../components/ui/Container'
import { ImageLayer } from '../../../components/ui/ImageLayer'
import { SectionLabel } from '../../../components/ui/SectionLabel'
import { SectionTitle } from '../../../components/ui/SectionTitle'

export function HomeServicesHighlight() {
  const shouldReduceMotion = useReducedMotion()

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 26, filter: 'blur(8px)' },
          whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
          viewport: { once: true, amount: 0.35 },
          transition: {
            delay,
            duration: 0.8,
            ease: 'easeOut' as const,
          },
        }

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-forest-dark text-white">
      <ImageLayer
        src={experienceHighlightImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[42%_center] sm:object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,39,31,0.05)_0%,rgba(26,39,31,0.08)_52%,rgba(26,39,31,0.18)_100%)]" />

      <div className="relative z-10 flex min-h-[100svh] items-start py-7 sm:py-8 lg:py-10">
        <Container className="flex w-full">
          <div className="ml-auto flex w-full max-w-[22rem] flex-col items-start sm:max-w-[30rem] lg:max-w-[40rem] lg:items-end lg:pt-0">
            <motion.div {...fadeUp(0.08)}>
              <SectionLabel
                variant="dark"
                className="border-pink-soft/58 bg-pink-soft/12 px-4 text-[0.72rem] tracking-[0.04em] text-pink-soft shadow-[0_12px_30px_rgba(194,11,114,0.08)] sm:px-5"
              >
                {homeServicesHighlightContent.label}
              </SectionLabel>
            </motion.div>

            <motion.div className="mt-5 sm:mt-6 lg:mt-7" {...fadeUp(0.2)}>
              <SectionTitle
                as="h2"
                className="max-w-[13ch] text-left text-cream-light drop-shadow-[0_12px_24px_rgba(20,29,24,0.14)] sm:max-w-[14ch] sm:text-[3.5rem] lg:max-w-none lg:text-right lg:text-[4.35rem] xl:text-[4.8rem]"
              >
                {homeServicesHighlightContent.titleLines.map((line) => (
                  <span key={line} className="block lg:whitespace-nowrap">
                    {line}
                  </span>
                ))}
              </SectionTitle>
            </motion.div>

            <motion.div className="mt-7 sm:mt-8 lg:mt-9" {...fadeUp(0.34)}>
              <Button
                to={homeServicesHighlightContent.ctaHref}
                variant="outline"
                showArrow
                className="min-w-[12rem] border-pink-soft/72 bg-pink-soft/10 px-7 text-[0.78rem] tracking-[0.12em] text-pink-soft shadow-[0_14px_36px_rgba(194,11,114,0.1)] hover:border-pink-soft hover:bg-pink-soft/16 hover:text-pink-soft"
              >
                {homeServicesHighlightContent.ctaLabel}
              </Button>
            </motion.div>
          </div>
        </Container>
      </div>
    </section>
  )
}
