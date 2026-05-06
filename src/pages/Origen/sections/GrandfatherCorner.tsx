import { motion, useReducedMotion } from 'framer-motion'

import grandfatherImage from '../../../assets/origen/el-rincon-del-abuelo.webp'
import { Accordion } from '../../../components/ui/Accordion'
import { Button } from '../../../components/ui/Button'
import { ImageLayer } from '../../../components/ui/ImageLayer'
import { SectionLabel } from '../../../components/ui/SectionLabel'
import { SectionTitle } from '../../../components/ui/SectionTitle'
import { origenGrandfatherContent } from '../../../data/origen'

export function GrandfatherCorner() {
  const shouldReduceMotion = useReducedMotion()

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24, filter: 'blur(6px)' },
          whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
          viewport: { once: true, amount: 0.2 },
          transition: {
            delay,
            duration: 0.82,
            ease: 'easeOut' as const,
          },
        }

  return (
    <section className="grid min-h-[100svh] overflow-hidden lg:grid-cols-2">
      <div className="relative min-h-[34rem] lg:min-h-[100svh]">
        <ImageLayer
          src={grandfatherImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,61,49,0.18)_0%,rgba(36,61,49,0.1)_42%,rgba(36,61,49,0.48)_100%)]" />

        <motion.div
          className="relative z-10 flex min-h-[34rem] items-end justify-center px-8 pb-8 text-center text-white sm:px-10 sm:pb-10 lg:min-h-[100svh] lg:px-12 lg:pb-10"
          {...fadeUp(0.06)}
        >
          <div className="w-full max-w-[29rem] lg:max-w-[33rem]">
            <p className="text-[1.28rem] leading-[1.34] tracking-[-0.03em] text-white drop-shadow-[0_12px_28px_rgba(23,34,28,0.18)] sm:text-[1.5rem] lg:text-[1.72rem]">
              {origenGrandfatherContent.imageDescription}
            </p>
            <div className="mt-5">
              <Button
                to={origenGrandfatherContent.ctaHref}
                variant="light"
                className="min-w-[11.75rem] border-transparent bg-white/88 px-6 text-[0.72rem] tracking-[0.06em] text-forest hover:bg-white hover:text-forest-dark"
              >
                {origenGrandfatherContent.ctaLabel}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="bg-forest px-6 py-10 text-cream-light sm:px-8 sm:py-12 lg:flex lg:min-h-[100svh] lg:items-center lg:px-12 lg:py-16 xl:px-16">
        <div className="w-full max-w-[37rem]">
          <motion.div {...fadeUp(0.1)}>
            <SectionLabel
              variant="dark"
              className="border-pink-soft/90 bg-transparent px-7 text-[0.8rem] tracking-[0.05em] text-pink-soft"
            >
              {origenGrandfatherContent.label}
            </SectionLabel>
          </motion.div>

          <motion.div className="mt-5" {...fadeUp(0.16)}>
            <SectionTitle
              as="h2"
              className="max-w-[14ch] text-white sm:max-w-[10ch] sm:text-[4.5rem] lg:text-[5.35rem] lg:leading-[0.92]"
            >
              {origenGrandfatherContent.title}
            </SectionTitle>
          </motion.div>

          <motion.p
            className="mt-5 max-w-[34rem] text-[1.05rem] leading-8 text-cream-light/96 sm:text-[1.12rem] sm:leading-9 lg:text-[1.16rem]"
            {...fadeUp(0.22)}
          >
            {origenGrandfatherContent.description}
          </motion.p>

          <motion.div className="mt-8 sm:mt-10" {...fadeUp(0.3)}>
            <Accordion
              items={origenGrandfatherContent.items}
              defaultOpenId={origenGrandfatherContent.items[0].id}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
