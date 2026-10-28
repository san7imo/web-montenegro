import type { ReactNode } from 'react'

import { Footer } from './Footer'
import { Header } from './Header'

type FooterTone = 'dark' | 'sage'

type PageShellProps = {
  children: ReactNode
  footerTone?: FooterTone
  showFooter?: boolean
  showFloatingButton?: boolean
}

export function PageShell({
  children,
  footerTone = 'dark',
  showFooter = true,
}: PageShellProps) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-muted-white text-forest-dark">
      <Header />
      <main>{children}</main>
      {showFooter ? <Footer tone={footerTone} /> : null}
    </div>
  )
}
