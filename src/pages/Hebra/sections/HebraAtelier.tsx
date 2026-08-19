import { motion, useReducedMotion } from 'framer-motion'

import atelierImage from '../../../assets/hebra/segundaseccion.png'
import { ImageLayer } from '../../../components/ui/ImageLayer'
import { SectionTitle } from '../../../components/ui/SectionTitle'
import { hebraAtelierContent } from '../../../data/hebra'

export function HebraAtelier() {
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
            duration: 0.82,
            ease: 'easeOut' as const,
          },
        }

  return (
    <section className="grid bg-forest text-white lg:grid-cols-[1.05fr_1fr]">
      <div className="flex min-h-[36rem] items-center px-7 py-14 sm:px-10 lg:min-h-[43.75rem] lg:px-[7vw] lg:py-16">
        <motion.div className="w-full max-w-[39rem]" {...fadeUp(0.04)}>
          <p className="type-body font-semibold text-pink-soft">
            {hebraAtelierContent.label}
          </p>
          <SectionTitle
            as="h2"
            className="mt-2 text-white"
          >
            <span className="block">{hebraAtelierContent.titleLines[0]}</span>
            <span className="block">{hebraAtelierContent.titleLines[1]}</span>
          </SectionTitle>

          <div className="mt-7 space-y-3">
            {hebraAtelierContent.items.map((item) => (
              <div
                key={item.eyebrow}
                className="rounded-[1.4rem] bg-white/8 px-6 py-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03),0_12px_28px_rgba(13,25,20,0.12)]"
              >
                <p className="type-eyebrow text-pink-soft/90">
                  {item.eyebrow}
                </p>
                <p className="type-body-sm mt-2 font-medium text-cream-light/94">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="relative min-h-[30rem] overflow-hidden lg:min-h-[43.75rem]">
        <ImageLayer
          src={atelierImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>
    </section>
  )
}
