import { motion, useReducedMotion } from 'framer-motion'
import { FaRegStar, FaStar } from 'react-icons/fa'

import { Container } from '../../../components/ui/Container'
import { SectionLabel } from '../../../components/ui/SectionLabel'
import { SectionTitle } from '../../../components/ui/SectionTitle'
import { ecoLeaveContent, ecoTestimonialsContent } from '../../../data/eco'

type Review = (typeof ecoTestimonialsContent.reviews)[number]

const reviewColumns: Review[][] = [
  [ecoTestimonialsContent.reviews[0], ecoTestimonialsContent.reviews[1]],
  [ecoTestimonialsContent.reviews[2], ecoTestimonialsContent.reviews[3]],
  [ecoTestimonialsContent.reviews[4], ecoTestimonialsContent.reviews[5]],
]

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-[#ffd719]" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, index) => {
        const Icon = index < rating ? FaStar : FaRegStar
        return <Icon key={index} aria-hidden="true" className="h-4 w-4" />
      })}
    </div>
  )
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="rounded-[0.95rem] border border-white/65 bg-white/8 p-4 text-white shadow-[0_2px_5px_rgba(24,35,28,0.16)]">
      <RatingStars rating={review.rating} />
      <p className="mt-2.5 text-[0.82rem] font-semibold leading-[1.58] text-white/95">
        {review.text}
      </p>
      <div className="mt-4 flex items-center gap-2.5">
        <span
          className={[
            'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[0.72rem] font-bold text-white shadow-[0_4px_10px_rgba(18,24,18,0.18)]',
            review.color,
          ].join(' ')}
        >
          {review.initials}
        </span>
        <p className="text-[0.8rem] font-semibold leading-4 text-white/96">
          <span className="block">{review.name}</span>
          <span className="block font-medium text-white/86">{review.date}</span>
        </p>
      </div>
    </article>
  )
}

export function EcoTestimonials() {
  const shouldReduceMotion = useReducedMotion()

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24, filter: 'blur(6px)' },
          whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
          viewport: { once: true, amount: 0.18 },
          transition: { delay, duration: 0.78, ease: 'easeOut' as const },
        }

  return (
    <section className="bg-[#7f8d77] py-14 text-white sm:py-18 lg:py-[6.2rem]">
      <Container className="!max-w-[76rem]">
        <motion.div className="text-center" {...fadeUp(0.04)}>
          <SectionLabel
            variant="dark"
            className="min-h-9 border-white/70 bg-transparent px-8 py-1 text-[0.78rem] normal-case tracking-[0.01em] text-white"
          >
            {ecoTestimonialsContent.label}
          </SectionLabel>
          <SectionTitle
            as="h2"
            className="mx-auto mt-5 max-w-[42rem] text-pink-soft sm:text-[3.45rem] lg:max-w-[65rem] lg:text-[3.65rem] lg:leading-[0.98]"
          >
            <span className="block">{ecoTestimonialsContent.titleLines[0]}</span>
            <span className="block">{ecoTestimonialsContent.titleLines[1]}</span>
          </SectionTitle>
        </motion.div>

        <div className="mt-9 grid gap-4 sm:mt-10 lg:grid-cols-3 lg:gap-4">
          {reviewColumns.map((column, columnIndex) => (
            <div key={column[0].id} className="space-y-4">
              {column.map((review, reviewIndex) => (
                <motion.div
                  key={review.id}
                  {...fadeUp(0.08 + columnIndex * 0.06 + reviewIndex * 0.07)}
                >
                  <ReviewCard review={review} />
                </motion.div>
              ))}
            </div>
          ))}
        </div>

        <motion.div className="mt-9 text-center sm:mt-10" {...fadeUp(0.18)}>
          <a
            href={ecoLeaveContent.ctaHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 border-b border-white/85 pb-0.5 text-[0.82rem] font-bold uppercase tracking-[0.03em] text-white transition-opacity duration-200 hover:opacity-80"
          >
            {ecoTestimonialsContent.moreLabel}
            <span aria-hidden="true">↘</span>
          </a>
        </motion.div>
      </Container>
    </section>
  )
}
