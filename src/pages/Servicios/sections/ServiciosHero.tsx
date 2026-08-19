import { motion, useReducedMotion } from 'framer-motion'

import heroImage from '../../../assets/home/experiencia-ideal-imagen.webp'
import { Container } from '../../../components/ui/Container'
import { ImageLayer } from '../../../components/ui/ImageLayer'
import { SectionLabel } from '../../../components/ui/SectionLabel'
import { SectionTitle } from '../../../components/ui/SectionTitle'
import { serviciosHeroContent } from '../../../data/servicios'

export function ServiciosHero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative min-h-[34rem] overflow-hidden bg-forest-dark text-white sm:min-h-[39rem] lg:min-h-[43rem]">
      <ImageLayer
        src={heroImage}
        alt=""
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover object-[38%_center] sm:object-center"
      />
      <Container className="relative z-10 flex min-h-[34rem] items-end pb-12 pt-28 sm:min-h-[39rem] sm:pb-16 lg:min-h-[43rem] lg:pb-20">
        <motion.div
          className="max-w-[46rem]"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24, filter: 'blur(6px)' }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ delay: 0.18, duration: 0.82, ease: 'easeOut' }}
        >
          <SectionLabel variant="dark" className="border-pink-soft/65 bg-pink-soft/10 text-pink-soft">
            {serviciosHeroContent.label}
          </SectionLabel>
          <SectionTitle
            as="h1"
            variant="display"
            className="mt-5 max-w-[12ch] text-pink-soft drop-shadow-[0_12px_26px_rgba(12,22,17,0.38)] sm:max-w-[15ch]"
          >
            <span className="block">{serviciosHeroContent.titleLines[0]}</span>
            <span className="block">{serviciosHeroContent.titleLines[1]}</span>
          </SectionTitle>
          <p className="type-lead mt-5 max-w-[42rem] font-medium text-cream-light/94">
            {serviciosHeroContent.description}
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
