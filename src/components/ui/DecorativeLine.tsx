type DecorativeLineVariant = 'forest' | 'light' | 'pink'

type DecorativeLineProps = {
  className?: string
  variant?: DecorativeLineVariant
}

const variantStyles: Record<DecorativeLineVariant, string> = {
  forest: 'bg-forest-dark/85',
  light: 'bg-cream-light/80',
  pink: 'bg-pink-soft',
}

export function DecorativeLine({
  className = '',
  variant = 'forest',
}: DecorativeLineProps) {
  return (
    <span
      aria-hidden="true"
      className={['block h-px w-28 rounded-full', variantStyles[variant], className]
        .filter(Boolean)
        .join(' ')}
    />
  )
}
