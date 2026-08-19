import { motion, useReducedMotion } from 'framer-motion'

import ctaBackground from '../../../assets/esencia/tu-mejor-version-imagen.webp'
import { Button } from '../../../components/ui/Button'
import { ImageLayer } from '../../../components/ui/ImageLayer'
import { esenciaCtaContent } from '../../../data/esencia'

export function EsenciaCTA() {
  const shouldReduceMotion = useReducedMotion()

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24, filter: 'blur(6px)' },
          whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
          viewport: { once: true, amount: 0.25 },
          transition: {
            delay,
            duration: 0.8,
            ease: 'easeOut' as const,
          },
        }

  return (
    <section className="bg-cream">
      <div className="relative overflow-hidden min-h-[22rem] sm:min-h-[24rem] lg:h-[25.5rem]">
        <ImageLayer
          src={ctaBackground}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="relative z-10 flex h-full items-start">
          <div className="w-full max-w-[58rem] px-8 pt-10 pb-10 text-left sm:px-10 sm:pt-12 lg:px-12 lg:pt-16">
            <motion.h2
              className="type-feature-title max-w-[15ch] text-pink-soft drop-shadow-[0_10px_20px_rgba(31,53,43,0.16)] sm:max-w-[17ch] lg:max-w-none"
              {...fadeUp(0.06)}
            >
              <span className="block lg:whitespace-nowrap">Permítenos ayudarte a encontrar</span>
              <span className="block">tu mejor versión.</span>
            </motion.h2>

            <motion.p
              className="type-body mt-3 max-w-[35rem] text-cream-light/96"
              {...fadeUp(0.18)}
            >
              {esenciaCtaContent.description}
            </motion.p>

            <motion.div className="mt-6" {...fadeUp(0.3)}>
              <Button
                to={esenciaCtaContent.ctaHref}
                variant="outline"
                showArrow
                className="min-w-[18rem] border-cream-light/78 bg-white/4 px-7 tracking-[0.08em] text-cream-light shadow-[0_12px_32px_rgba(31,53,43,0.18)] hover:border-pink-soft hover:bg-pink-soft/14 hover:text-pink-soft"
              >
                {esenciaCtaContent.ctaLabel}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
