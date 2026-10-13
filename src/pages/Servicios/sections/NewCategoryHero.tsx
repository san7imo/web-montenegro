import { motion, useReducedMotion } from 'framer-motion'

import lienzoHeroImage from '../../../assets/updates/34-lienzo-maquillaje-de-novia.webp'
import lazoHeroVideo from '../../../assets/updates/0-lazo-portada.mp4'
import lazoHeroPoster from '../../../assets/updates/0-lazo-portada-poster.webp'
import { Container } from '../../../components/ui/Container'
import { DecorativeLine } from '../../../components/ui/DecorativeLine'
import { HeroOverlay } from '../../../components/ui/HeroOverlay'
import { HeroVideoBackground } from '../../../components/ui/HeroVideoBackground'
import { ImageLayer } from '../../../components/ui/ImageLayer'
import { SectionTitle } from '../../../components/ui/SectionTitle'
import { newCategoryContent } from '../../../data/newCategories'

export function NewCategoryHero({ category }: { category: 'lienzo' | 'lazo' }) {
  const page = newCategoryContent[category]
  const shouldReduceMotion = useReducedMotion()
  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24, filter: 'blur(6px)' },
          whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
          viewport: { once: true, amount: 0.3 },
          transition: { delay, duration: 0.82, ease: 'easeOut' as const },
        }

  return (
    <section className="overflow-hidden bg-forest text-white">
      <div className="relative h-[64svh] min-h-[25rem] max-h-[44rem]">
        {category === 'lazo' ? (
          <HeroVideoBackground src={lazoHeroVideo} poster={lazoHeroPoster} />
        ) : (
          <ImageLayer src={lienzoHeroImage} alt="" loading="eager" className="absolute inset-0 h-full w-full object-cover object-[50%_35%]" />
        )}
        <HeroOverlay />
        <div className="relative z-10 flex h-full items-end px-[6.2vw] pb-8 sm:pb-10 lg:pb-9">
          <motion.div className="w-full min-w-0 max-w-[70rem]" {...fadeUp(0.08)}>
            <SectionTitle as="h1" variant="display" className="text-pink-soft drop-shadow-[0_10px_20px_rgba(18,22,18,0.28)]">
              {page.title}
            </SectionTitle>
            <p className="type-lead mt-3 max-w-[56rem] text-cream-light/96">{page.description}</p>
          </motion.div>
        </div>
      </div>
      <div className="bg-forest">
        <Container className="px-7 py-12 sm:px-8 sm:py-[4.2rem] lg:px-12 lg:py-[5.2rem]">
          <motion.div className="mx-auto max-w-[55rem]" {...fadeUp(0.2)}>
            <p className="type-lead font-semibold text-cream-light/96">{page.bodyDescription}</p>
            <DecorativeLine variant="light" className="mx-auto mt-12 w-[28rem] max-w-[72%] opacity-95" />
          </motion.div>
        </Container>
      </div>
    </section>
  )
}
