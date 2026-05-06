import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonVariant = 'primary' | 'outline' | 'light'

type ButtonProps = {
  children: ReactNode
  className?: string
  to?: string
  href?: string
  icon?: ReactNode
  showArrow?: boolean
  variant?: ButtonVariant
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>

const baseStyles =
  'inline-flex min-h-11 items-center justify-center gap-3 rounded-full border px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'border-pink bg-pink text-white shadow-[var(--shadow-pink)] hover:border-pink-dark hover:bg-pink-dark focus-visible:ring-pink',
  outline:
    'border-white/60 bg-white/6 text-white hover:bg-white/12 hover:text-cream-light focus-visible:ring-white',
  light:
    'border-forest-soft/30 bg-cream-light text-forest hover:bg-white hover:text-forest-dark focus-visible:ring-forest',
}

export function Button({
  children,
  className = '',
  href,
  icon,
  showArrow = false,
  to,
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonProps) {
  const classes = [baseStyles, variantStyles[variant], className].filter(Boolean).join(' ')
  const content = (
    <>
      <span>{children}</span>
      {icon}
      {!icon && showArrow ? <span aria-hidden="true">→</span> : null}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {content}
    </button>
  )
}
