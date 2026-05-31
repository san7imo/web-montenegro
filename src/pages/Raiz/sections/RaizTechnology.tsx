import { motion, useReducedMotion } from 'framer-motion'

import { RaizTechnologyCard } from '../../../components/cards/RaizTechnologyCard'
import { SectionTitle } from '../../../components/ui/SectionTitle'
import { raizTechnologyContent } from '../../../data/raiz'

export function RaizTechnology() {
  const shouldReduceMotion = useReducedMotion()

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24, filter: 'blur(6px)' },
          whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
          viewport: { once: true, amount: 0.16 },
          transition: {
            delay,
            duration: 0.82,
            ease: 'easeOut' as const,
          },
        }

  return (
    <section className="bg-[linear-gradient(180deg,#87947b_0%,#2f4d3c_100%)] px-7 py-16 text-white sm:px-10 sm:py-20 lg:px-16 lg:py-[5.9rem]">
      <motion.div className="text-center" {...fadeUp(0.04)}>
        <span className="inline-flex min-w-[13.6rem] items-center justify-center rounded-full border border-cream-light/75 px-6 py-2 text-[1rem] font-semibold text-pink-soft">
          {raizTechnologyContent.label}
        </span>
        <SectionTitle
          as="h2"
          className="mx-auto mt-6 max-w-[44rem] text-pink-soft sm:text-[4.15rem] lg:max-w-[64rem] lg:text-[5rem]"
        >
          {raizTechnologyContent.title}
        </SectionTitle>
      </motion.div>

      <div className="mx-auto mt-14 grid max-w-[81rem] gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-6">
        {raizTechnologyContent.items.map((item, index) => (
          <motion.div key={item.id} {...fadeUp(0.08 + index * 0.04)}>
            <RaizTechnologyCard
              title={item.title}
              description={item.description}
              image={'image' in item ? item.image : undefined}
              placeholder={'placeholder' in item ? item.placeholder : undefined}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
