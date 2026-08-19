import type { ElementType, ReactNode } from 'react'

type SectionTitleProps = {
  as?: ElementType
  children: ReactNode
  className?: string
  variant?: 'display' | 'section' | 'feature' | 'card' | 'cardCompact'
}

const variantStyles = {
  display: 'type-display',
  section: 'type-section-title',
  feature: 'type-feature-title',
  card: 'type-card-title',
  cardCompact: 'type-card-title-compact',
} as const

export function SectionTitle({
  as: Tag = 'h2',
  children,
  className = '',
  variant = 'section',
}: SectionTitleProps) {
  return (
    <Tag
      className={[
        variantStyles[variant],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </Tag>
  )
}
