type HeroOverlayProps = {
  className?: string
}

export function HeroOverlay({ className = '' }: HeroOverlayProps) {
  return (
    <div
      className={[
        'absolute inset-0 bg-[linear-gradient(180deg,rgba(21,35,28,0.16)_0%,rgba(47,77,60,0.22)_48%,rgba(47,77,60,0.62)_100%)]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    />
  )
}
