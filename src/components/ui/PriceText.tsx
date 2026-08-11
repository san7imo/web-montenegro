import { formatPrice } from '../../utils/price'

type PriceTextProps = {
  className?: string
  fallback?: string
  value?: string
}

export function PriceText({
  className = '',
  fallback,
  value,
}: PriceTextProps) {
  return (
    <span className={['font-body', className].filter(Boolean).join(' ')}>
      {formatPrice(value, fallback)}
    </span>
  )
}
