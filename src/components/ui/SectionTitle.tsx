import type { ElementType, ReactNode } from 'react'

type SectionTitleProps = {
  as?: ElementType
  children: ReactNode
  className?: string
}

export function SectionTitle({
  as: Tag = 'h2',
  children,
  className = '',
}: SectionTitleProps) {
  return (
    <Tag
      className={[
        'font-heading text-[2.9rem] leading-[0.92] tracking-[-0.04em] sm:text-[3.8rem] lg:text-[5.1rem]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </Tag>
  )
}
