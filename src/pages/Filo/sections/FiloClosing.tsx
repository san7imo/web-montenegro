import { motion, useReducedMotion } from 'framer-motion'

import filoClosingBackground from '../../../assets/filo/seccionfinal.png'
import { Container } from '../../../components/ui/Container'
import { DecorativeLine } from '../../../components/ui/DecorativeLine'
import { ImageLayer } from '../../../components/ui/ImageLayer'
import { filoClosingContent } from '../../../data/filo'

export function FiloClosing() {
  const shouldReduceMotion = useReducedMotion()

  const fadeUp = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20, filter: 'blur(6px)' },
        whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
        viewport: { once: true, amount: 0.35 },
        transition: {
          duration: 0.78,
          ease: 'easeOut' as const,
        },
      }

  return (
    <section className="relative overflow-hidden bg-forest text-white">
      <ImageLayer
        src={filoClosingBackground}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-forest/72" />

      <Container className="relative z-10 flex min-h-[17rem] items-center justify-center px-6 py-12 text-center sm:min-h-[20rem] lg:min-h-[22rem]">
        <motion.div className="mx-auto max-w-[58rem]" {...fadeUp}>
          <DecorativeLine variant="pink" className="mx-auto mb-10 w-[28rem] max-w-[68%] opacity-90" />
          <p className="text-[1.18rem] font-medium leading-8 text-pink-soft sm:text-[1.42rem] sm:leading-9 lg:text-[1.55rem]">
            {filoClosingContent.description}
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
