import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

import olgaOne from '../../../assets/esencia/olga1.png'
import olgaTwo from '../../../assets/esencia/olga2.png'
import olgaThree from '../../../assets/esencia/olga3.png'
import { ImageLayer } from '../../../components/ui/ImageLayer'
import { esenciaFounderLegacyContent } from '../../../data/esencia'

const founderImages = [olgaOne, olgaTwo, olgaThree] as const
const rotationDelay = 3500

export function FounderLegacySection() {
  const shouldReduceMotion = useReducedMotion()
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    if (shouldReduceMotion) return

    const intervalId = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % founderImages.length)
    }, rotationDelay)

    return () => window.clearInterval(intervalId)
  }, [shouldReduceMotion])

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24, filter: 'blur(6px)' },
          whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
          viewport: { once: true, amount: 0.24 },
          transition: {
            delay,
            duration: 0.8,
            ease: 'easeOut' as const,
          },
        }

  return (
    <section className="bg-forest">
      <div className="grid min-h-[34rem] overflow-hidden lg:grid-cols-[1fr_1fr]">
        <div className="relative min-h-[25rem] overflow-hidden bg-forest-dark sm:min-h-[31rem] lg:min-h-[35rem]">
          {founderImages.map((image, index) => (
            <ImageLayer
              key={image}
              src={image}
              alt={index === activeImage ? 'Olga Lucia Montenegro, fundadora de Montenegro Salud y Belleza' : ''}
              className={[
                'absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ease-out',
                index === activeImage ? 'opacity-100' : 'opacity-0',
              ]
                .filter(Boolean)
                .join(' ')}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-t from-forest/42 via-forest/10 to-transparent" />
        </div>

        <div className="flex items-center bg-sage px-8 py-14 text-cream-light sm:px-12 lg:px-16 lg:py-16 xl:px-20">
          <motion.div className="max-w-[38rem]" {...fadeUp(0.06)}>
            <p className="text-[0.98rem] font-medium text-cream-light/88 sm:text-[1.05rem]">
              {esenciaFounderLegacyContent.eyebrow}
            </p>

            <h2 className="mt-3 whitespace-pre-line font-heading text-[2.85rem] leading-[0.98] tracking-[-0.035em] text-white sm:text-[3.45rem] lg:text-[4rem]">
              {esenciaFounderLegacyContent.title}
            </h2>

            <div className="mt-7 space-y-6 text-[1.02rem] font-medium leading-8 text-cream-light/95 sm:text-[1.08rem] sm:leading-9">
              {esenciaFounderLegacyContent.paragraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={index === esenciaFounderLegacyContent.paragraphs.length - 1 ? 'font-bold' : ''}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 text-right text-[1.02rem] leading-7 text-cream-light sm:mt-16">
              <p className="font-heading text-[1.35rem] italic leading-none">
                {esenciaFounderLegacyContent.signature}
              </p>
              <p className="font-medium">{esenciaFounderLegacyContent.role}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
