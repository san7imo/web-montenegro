import { motion, useReducedMotion } from 'framer-motion'

import auraImage from '../../../assets/contacto/contactoseccion2.png'
import { Button } from '../../../components/ui/Button'
import { ImageLayer } from '../../../components/ui/ImageLayer'
import { SectionLabel } from '../../../components/ui/SectionLabel'
import { SectionTitle } from '../../../components/ui/SectionTitle'
import { contactoAuraContent } from '../../../data/contacto'

export function ContactAura() {
  const shouldReduceMotion = useReducedMotion()

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24, filter: 'blur(6px)' },
          whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
          viewport: { once: true, amount: 0.2 },
          transition: { delay, duration: 0.78, ease: 'easeOut' as const },
        }

  return (
    <section className="grid overflow-hidden bg-forest lg:grid-cols-2">
      <div className="relative min-h-[25rem] lg:min-h-[41.75rem]">
        <ImageLayer
          src={auraImage}
          alt="Teléfono con asistente Aura junto a una hoja"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>

      <div className="flex items-center bg-forest-deep px-7 py-12 text-cream-light sm:px-10 lg:min-h-[41.75rem] lg:px-[4.2rem] lg:py-16">
        <div className="max-w-[39rem]">
          <motion.div {...fadeUp(0.04)}>
            <SectionLabel
              variant="dark"
              className="min-h-9 min-w-[13.3rem] justify-center border-white/62 bg-transparent py-1 normal-case tracking-[0.01em] text-cream-light"
            >
              {contactoAuraContent.label}
            </SectionLabel>
          </motion.div>

          <motion.div className="mt-5" {...fadeUp(0.12)}>
            <SectionTitle
              as="h2"
              className="text-white"
            >
              {contactoAuraContent.title}
            </SectionTitle>
          </motion.div>

          <motion.p
            className="type-body mt-2 max-w-[37rem] font-semibold text-cream-light/90"
            {...fadeUp(0.18)}
          >
            {contactoAuraContent.lead}
          </motion.p>

          <motion.p
            className="type-body mt-8 max-w-[37rem] font-semibold text-cream-light/92"
            {...fadeUp(0.24)}
          >
            {contactoAuraContent.description}
          </motion.p>

          <motion.div className="mt-14 flex justify-center lg:justify-start" {...fadeUp(0.32)}>
            <Button
              href={contactoAuraContent.ctaHref}
              target="_blank"
              rel="noreferrer"
              variant="outline"
              className="min-w-[18.5rem] border-pink-soft/80 bg-transparent px-7 tracking-[0.04em] text-pink-soft hover:border-white/70 hover:bg-white/10"
            >
              {contactoAuraContent.ctaLabel}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
