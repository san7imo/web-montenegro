import type { NavigationItem } from '../types/common'

export const navigationLinks: NavigationItem[] = [
  { label: 'HOME', href: '/' },
  { label: 'ESENCIA', href: '/esencia' },
  { label: 'ORIGEN', href: '/origen' },
  { label: 'OASIS', href: '/oasis' },
  { label: 'SERVICIOS', href: '/servicios' },
  { label: 'FRUTO', href: '/fruto' },
  { label: 'AURA', href: '/aura' },
  { label: 'CONTACTO', href: '/contacto' },
]

export const primaryNavigationLinks: NavigationItem[] = navigationLinks.filter((link) =>
  ['/', '/esencia', '/origen', '/oasis'].includes(link.href),
)

export const headerNavigationLinks: NavigationItem[] = [
  { label: 'HOME', href: '/' },
  { label: 'ESENCIA', href: '/esencia' },
  { label: 'ORIGEN', href: '/origen' },
  { label: 'OASIS', href: '/oasis' },
  { label: 'TACTO', href: '/tacto' },
  { label: 'RAÍZ', href: '/raiz' },
  { label: 'BROTE', href: '/brote' },
  { label: 'FILO', href: '/filo' },
  { label: 'HEBRA', href: '/hebra' },
  { label: 'TEZ', href: '/tez' },
]
