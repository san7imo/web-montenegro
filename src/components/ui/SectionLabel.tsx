import type { ReactNode } from 'react'

type SectionLabelVariant = 'light' | 'dark' | 'pink'

type SectionLabelProps = {
  children: ReactNode
  className?: string
  variant?: SectionLabelVariant
}

const variantStyles: Record<SectionLabelVariant, string> = {
  light: 'border-forest/35 bg-white/24 text-forest-dark',
  dark: 'border-white/40 bg-white/8 text-cream-light',
  pink: 'border-pink/35 bg-white/36 text-pink',
}

export function SectionLabel({
  children,
  className = '',
  variant = 'light',
}: SectionLabelProps) {
  return (
    <span
      className={[
        'type-eyebrow inline-flex min-h-11 items-center rounded-full px-5 py-2',
        variantStyles[variant],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </span>
  )
}
