import { motion, useReducedMotion } from 'framer-motion'

import branchImage from '../../../assets/origen/rama.webp'
import { Container } from '../../../components/ui/Container'
import { DecorativeLine } from '../../../components/ui/DecorativeLine'
import { ImageLayer } from '../../../components/ui/ImageLayer'
import { origenBridgeContent } from '../../../data/origen'

export function BridgeSection() {
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
    <section className="flex min-h-[50svh] items-center bg-forest py-10 text-cream-light sm:py-12 lg:min-h-[50vh] lg:py-0">
      <Container className="w-full">
        <div className="grid items-center gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-2">
          <motion.div
            className="pointer-events-none relative hidden lg:block"
            {...fadeUp(0.06)}
          >
            <ImageLayer
              src={branchImage}
              alt=""
              className="w-[34rem] max-w-none -translate-x-[9.5rem] object-contain xl:w-[38rem] xl:-translate-x-[10.5rem]"
            />
          </motion.div>

          <motion.div className="lg:-ml-24 lg:pr-0" {...fadeUp(0.14)}>
            <h2 className="font-heading text-[2.65rem] leading-[0.96] tracking-[-0.04em] text-pink-soft sm:text-[3.25rem] lg:text-[3.3rem] lg:whitespace-nowrap xl:text-[3.5rem]">
              {origenBridgeContent.title}
            </h2>
            <p className="mt-4 max-w-[44rem] text-[1rem] leading-8 text-cream-light/95 sm:text-[1.08rem] sm:leading-9 lg:max-w-[58rem] lg:text-[1.02rem] lg:leading-[2.05rem] xl:max-w-[62rem]">
              {origenBridgeContent.description}
            </p>
            <DecorativeLine
              variant="pink"
              className="mt-8 w-full max-w-[30rem] opacity-90 lg:mt-10 lg:max-w-[40rem]"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
