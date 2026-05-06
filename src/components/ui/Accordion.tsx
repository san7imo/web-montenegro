import { useState } from 'react'

type AccordionItem = {
  id: string
  title: string
  content: string
}

type AccordionProps = {
  items: readonly AccordionItem[]
  defaultOpenId?: string
  className?: string
}

export function Accordion({
  items,
  defaultOpenId,
  className = '',
}: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? items[0]?.id ?? null)

  return (
    <div className={['space-y-4', className].filter(Boolean).join(' ')}>
      {items.map((item) => {
        const isOpen = item.id === openId

        return (
          <div key={item.id} className="space-y-3">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between rounded-[1rem] border border-pink-soft/85 px-5 py-4 text-left text-pink-soft transition-colors duration-300 hover:bg-white/3 sm:px-6"
            >
              <span className="text-[1.1rem] leading-7 sm:text-[1.2rem]">{item.title}</span>
              <span className="ml-4 text-[2.2rem] leading-none" aria-hidden="true">
                {isOpen ? '−' : '+'}
              </span>
            </button>

            {isOpen ? (
              <div className="rounded-[0.95rem] bg-forest-dark/18 px-5 py-4 text-[1rem] leading-8 text-cream-light/96 sm:px-6 sm:text-[1.05rem]">
                {item.content}
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
