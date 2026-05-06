import type { HTMLAttributes, ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
  className?: string
} & HTMLAttributes<HTMLDivElement>

export function Container({
  children,
  className = '',
  ...props
}: ContainerProps) {
  return (
    <div
      className={['mx-auto w-full max-w-[var(--container-max)] px-5 sm:px-6 lg:px-8', className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}
