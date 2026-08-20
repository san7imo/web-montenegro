import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useState } from 'react'

import galleryHebraImage from '../../../assets/eco/galeriahebra.webp'
import galleryTactoImage from '../../../assets/eco/galeriatacto.webp'
import galleryTezImage from '../../../assets/eco/galeriatez.webp'
import { Container } from '../../../components/ui/Container'
import { ImageLayer } from '../../../components/ui/ImageLayer'
import { SectionLabel } from '../../../components/ui/SectionLabel'
import { SectionTitle } from '../../../components/ui/SectionTitle'
import { ecoGalleryContent } from '../../../data/eco'

const imageByKey = {
  hebra: galleryHebraImage,
  tacto: galleryTactoImage,
  tez: galleryTezImage,
} as const

export function EcoGallery() {
  const shouldReduceMotion = useReducedMotion()
  const [firstVisibleIndex, setFirstVisibleIndex] = useState(0)
  const orderedItems = ecoGalleryContent.items.map(
    (_, index) => ecoGalleryContent.items[(firstVisibleIndex + index) % ecoGalleryContent.items.length],
  )

  const showPrevious = () => {
    setFirstVisibleIndex((current) =>
      (current - 1 + ecoGalleryContent.items.length) % ecoGalleryContent.items.length,
    )
  }

  const showNext = () => {
    setFirstVisibleIndex((current) => (current + 1) % ecoGalleryContent.items.length)
  }

  return (
    <section
      id="resultados"
      className="relative scroll-mt-20 overflow-hidden bg-cream py-14 text-forest sm:py-18 lg:py-[5.15rem]"
    >
      <button
        type="button"
        aria-label="Galería anterior"
        onClick={showPrevious}
        className="absolute left-0 top-[55%] hidden h-[15rem] w-[3.4rem] -translate-y-1/2 items-center justify-center rounded-r-[0.9rem] bg-[#d7d9d0] text-pink shadow-[0_12px_24px_rgba(36,61,49,0.06)] transition-colors duration-200 hover:bg-[#ccd1c7] lg:flex"
      >
        <FaChevronLeft aria-hidden="true" className="h-7 w-7" />
      </button>
      <button
        type="button"
        aria-label="Galería siguiente"
        onClick={showNext}
        className="absolute right-0 top-[55%] hidden h-[15rem] w-[3.4rem] -translate-y-1/2 items-center justify-center rounded-l-[0.9rem] bg-[#d7d9d0] text-pink shadow-[0_12px_24px_rgba(36,61,49,0.06)] transition-colors duration-200 hover:bg-[#ccd1c7] lg:flex"
      >
        <FaChevronRight aria-hidden="true" className="h-7 w-7" />
      </button>

      <Container className="!max-w-[72rem]">
        <motion.div
          className="text-center"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 22, filter: 'blur(6px)' }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.78, ease: 'easeOut' }}
        >
          <SectionLabel
            variant="pink"
            className="min-h-10 min-w-[12.2rem] justify-center border-pink/70 bg-transparent py-1 normal-case tracking-[0.01em]"
          >
            {ecoGalleryContent.label}
          </SectionLabel>
          <SectionTitle
            as="h2"
            className="mt-4 text-forest"
          >
            {ecoGalleryContent.title}
          </SectionTitle>
          <p className="type-body mx-auto mt-1 max-w-[61rem] font-semibold text-forest-dark/84">
            {ecoGalleryContent.description}
          </p>
        </motion.div>

        <div className="mt-10 grid items-end gap-7 sm:mt-12 lg:grid-cols-[1fr_1.16fr_1fr] lg:gap-6">
          {orderedItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24, filter: 'blur(6px)' }}
              whileInView={
                shouldReduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }
              }
              viewport={{ once: true, amount: 0.18 }}
              transition={{ delay: 0.08 + index * 0.06, duration: 0.78, ease: 'easeOut' }}
            >
              <Link
                to={item.href}
                className="group block text-center text-forest transition-transform duration-300 hover:-translate-y-1"
              >
                <ImageLayer
                  src={imageByKey[item.image]}
                  alt={item.title}
                  className={[
                    'mx-auto w-full rounded-[1.35rem] object-cover shadow-[0_14px_26px_rgba(36,61,49,0.13)]',
                    index === 1
                      ? 'max-w-[390px] lg:h-[442px]'
                      : 'max-w-[318px] lg:h-[360px]',
                  ].join(' ')}
                />
                <h3
                  className={[
                    'mt-6 font-body font-bold uppercase tracking-[0.02em] text-forest-soft group-hover:text-forest-dark',
                    index === 1 ? 'type-lead' : 'type-body-sm',
                  ].join(' ')}
                >
                  {item.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
