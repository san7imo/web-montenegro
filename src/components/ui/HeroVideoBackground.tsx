import { useReducedMotion } from 'framer-motion'

import { ImageLayer } from './ImageLayer'

type HeroVideoBackgroundProps = {
  className?: string
  poster: string
  src: string
}

export function HeroVideoBackground({
  className = 'absolute inset-0 h-full w-full object-cover',
  poster,
  src,
}: HeroVideoBackgroundProps) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <ImageLayer src={poster} alt="" loading="eager" className={className} />
  }

  return (
    <video
      aria-hidden="true"
      autoPlay
      className={className}
      loop
      muted
      playsInline
      poster={poster}
      preload="metadata"
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}
