import symbol from '../../assets/logo/montenegro-symbol.webp'

export function ServiceArtwork({ image, title, className = '' }: { image?: string; title: string; className?: string }) {
  if (image) return <img src={image} alt={title} loading="lazy" className={`h-full w-full object-cover ${className}`} />
  return (
    <div className={`flex h-full min-h-48 w-full items-center justify-center bg-forest p-8 ${className}`} role="img" aria-label={`Montenegro · ${title}`}>
      <img src={symbol} alt="" className="h-24 w-24 object-contain opacity-70" />
    </div>
  )
}
