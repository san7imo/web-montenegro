import { motion, useReducedMotion } from 'framer-motion'

import benefitsBackground from '../../../assets/oasis/el-beneficio-de-oasis.webp'
import { BenefitItem } from '../../../components/cards/BenefitItem'
import { Button } from '../../../components/ui/Button'
import { Container } from '../../../components/ui/Container'
import { ImageLayer } from '../../../components/ui/ImageLayer'
import { SectionTitle } from '../../../components/ui/SectionTitle'
import { oasisBenefitsContent } from '../../../data/oasis'

export function OasisBenefits() {
  const shouldReduceMotion = useReducedMotion()

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24, filter: 'blur(6px)' },
          whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
          viewport: { once: true, amount: 0.2 },
          transition: {
            delay,
            duration: 0.82,
            ease: 'easeOut' as const,
          },
        }

  return (
    <section className="relative overflow-hidden bg-forest-dark text-white">
      <ImageLayer
        src={benefitsBackground}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <Container className="relative z-10 min-h-[34rem] px-5 py-10 sm:px-6 sm:py-12 lg:min-h-[36rem] lg:px-10 lg:py-12">
        <div className="max-w-[43rem]">
          <motion.p
            className="text-[1.1rem] leading-8 text-pink-soft sm:text-[1.18rem]"
            {...fadeUp(0.04)}
          >
            {oasisBenefitsContent.label}
          </motion.p>

          <motion.div className="mt-1" {...fadeUp(0.1)}>
            <SectionTitle
              as="h2"
              className="max-w-[14ch] text-white sm:text-[4.4rem] lg:text-[5.25rem]"
            >
              {oasisBenefitsContent.title}
            </SectionTitle>
          </motion.div>

          <motion.div className="mt-8 space-y-3" {...fadeUp(0.16)}>
            {oasisBenefitsContent.items.map((item) => (
              <BenefitItem key={item.id} label={item.label} text={item.text} />
            ))}
          </motion.div>

          <motion.p
            className="mx-auto mt-8 max-w-[46rem] text-center text-[1.08rem] leading-8 text-white/96 sm:text-[1.12rem] lg:mx-0 lg:max-w-[40rem] lg:text-center"
            {...fadeUp(0.22)}
          >
            {oasisBenefitsContent.description}
          </motion.p>

          <motion.div className="mt-6 flex justify-center lg:mt-7" {...fadeUp(0.28)}>
            <Button
              to={oasisBenefitsContent.ctaHref}
              variant="outline"
              showArrow
              className="min-w-[16rem] border-pink-soft bg-transparent px-8 text-[0.8rem] tracking-[0.08em] text-pink-soft hover:border-white hover:bg-white/10 hover:text-white"
            >
              {oasisBenefitsContent.ctaLabel}
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
