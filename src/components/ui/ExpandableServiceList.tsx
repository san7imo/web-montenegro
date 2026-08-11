import { useId, useState, type ReactNode } from 'react'

type ExpandableServiceListProps<T> = {
  buttonClassName?: string
  className?: string
  getKey: (item: T) => string
  initialVisible?: number
  items: readonly T[]
  renderItem: (item: T, index: number) => ReactNode
}

export function ExpandableServiceList<T>({
  buttonClassName = '',
  className = '',
  getKey,
  initialVisible = 3,
  items,
  renderItem,
}: ExpandableServiceListProps<T>) {
  const [isExpanded, setIsExpanded] = useState(false)
  const contentId = useId()
  const hasHiddenItems = items.length > initialVisible
  const visibleItems = isExpanded ? items : items.slice(0, initialVisible)

  return (
    <>
      <div id={contentId} className={className}>
        {visibleItems.map((item, index) => (
          <div key={getKey(item)}>{renderItem(item, index)}</div>
        ))}
      </div>

      {hasHiddenItems ? (
        <div className="mt-8 flex justify-center sm:mt-10">
          <button
            type="button"
            aria-controls={contentId}
            aria-expanded={isExpanded}
            onClick={() => setIsExpanded((current) => !current)}
            className={[
              'inline-flex min-h-11 items-center justify-center rounded-full border border-pink bg-pink px-8 py-3 text-[0.74rem] font-bold uppercase tracking-[0.14em] text-white shadow-[0_16px_34px_rgba(194,11,114,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-pink-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2 focus-visible:ring-offset-cream',
              buttonClassName,
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {isExpanded ? 'Ver menos' : 'Ver más'}
          </button>
        </div>
      ) : null}
    </>
  )
}
