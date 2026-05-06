import type { ReactNode } from 'react'

import { FloatingWhatsAppButton } from '../ui/FloatingWhatsAppButton'
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
  showFloatingButton = true,
}: PageShellProps) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-muted-white text-forest-dark">
      <Header />
      <main>{children}</main>
      {showFooter ? <Footer tone={footerTone} /> : null}
      {showFloatingButton ? <FloatingWhatsAppButton /> : null}
    </div>
  )
}
