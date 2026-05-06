import { motion, useReducedMotion } from 'framer-motion'

import historyImage from '../../../assets/esencia/nuestra-historia-imagen.webp'
import { esenciaHistoryContent } from '../../../data/esencia'
import { Container } from '../../../components/ui/Container'
import { DecorativeLine } from '../../../components/ui/DecorativeLine'
import { ImageLayer } from '../../../components/ui/ImageLayer'
import { SectionLabel } from '../../../components/ui/SectionLabel'
import { SectionTitle } from '../../../components/ui/SectionTitle'

export function HistorySection() {
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
            duration: 0.78,
            ease: 'easeOut' as const,
          },
        }

  return (
    <section className="bg-cream py-18 sm:py-20 lg:py-22">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,1fr)] lg:items-start lg:gap-12">
          <motion.div className="relative" {...fadeUp(0.08)}>
            <ImageLayer
              src={historyImage}
              alt="Tratamiento corporal sobre la espalda con una marca botánica"
              className="h-auto w-full object-contain"
            />
            <div className="absolute right-[-0.25rem] bottom-[-1.4rem] rounded-[1.8rem] bg-pink px-5 py-4 text-center font-heading text-[2rem] leading-[0.96] tracking-[-0.03em] text-white shadow-[0_18px_38px_rgba(194,11,114,0.24)] sm:right-3 sm:bottom-[-1.8rem] sm:px-6 sm:py-5 sm:text-[2.45rem] lg:right-[-0.6rem] lg:bottom-[-2rem]">
              {esenciaHistoryContent.badge.split('\n').map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div className="pt-2 lg:pt-0" {...fadeUp(0.18)}>
            <SectionLabel variant="light" className="border-forest bg-transparent px-7 text-forest">
              {esenciaHistoryContent.label}
            </SectionLabel>
            <SectionTitle
              as="h2"
              className="mt-5 text-pink sm:text-[4.15rem] lg:text-[4.75rem] xl:text-[5rem]"
            >
              {esenciaHistoryContent.title}
            </SectionTitle>
            <p className="mt-5 max-w-[40rem] text-[1.02rem] leading-8 text-forest-dark/86 sm:text-[1.08rem] sm:leading-9 lg:max-w-[36rem] lg:text-[1.04rem] lg:leading-8">
              {esenciaHistoryContent.description}
            </p>
            <DecorativeLine variant="forest" className="mt-8 w-full max-w-[26rem] opacity-85 lg:mt-10 lg:max-w-[28rem]" />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
