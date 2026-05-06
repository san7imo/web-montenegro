type ImageLayerProps = {
  src: string
  alt?: string
  className?: string
  loading?: 'lazy' | 'eager'
}

export function ImageLayer({
  src,
  alt = '',
  className = '',
  loading = 'lazy',
}: ImageLayerProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      draggable={false}
      className={['pointer-events-none select-none object-contain', className]
        .filter(Boolean)
        .join(' ')}
    />
  )
}
