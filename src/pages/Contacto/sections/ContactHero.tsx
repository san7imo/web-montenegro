import { motion, useReducedMotion } from 'framer-motion'

import contactHeroImage from '../../../assets/contacto/portadacontacto.webp'
import { ImageLayer } from '../../../components/ui/ImageLayer'
import { SectionTitle } from '../../../components/ui/SectionTitle'
import { contactoHeroContent } from '../../../data/contacto'

export function ContactHero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative h-[46.5vw] min-h-[28rem] max-h-[42rem] overflow-hidden bg-forest text-white">
      <ImageLayer
        src={contactHeroImage}
        alt=""
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover object-[53%_center]"
      />
      <div className="absolute inset-0 bg-black/18" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,25,18,0.42)_0%,rgba(20,25,18,0.14)_45%,rgba(20,25,18,0.42)_100%)]" />

      <motion.div
        className="relative z-10 flex h-full items-end px-[6.2vw] pb-[4.25rem] sm:pb-[4.7rem] lg:pb-[4.9rem]"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 22, filter: 'blur(6px)' }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ delay: 0.22, duration: 0.82, ease: 'easeOut' }}
      >
        <SectionTitle
          as="h1"
          variant="display"
          className="max-w-[23rem] text-pink-soft drop-shadow-[0_10px_22px_rgba(19,22,18,0.38)] sm:max-w-none"
        >
          <span className="block">{contactoHeroContent.titleLines[0]}</span>
          <span className="block sm:whitespace-nowrap">{contactoHeroContent.titleLines[1]}</span>
        </SectionTitle>
      </motion.div>
    </section>
  )
}
