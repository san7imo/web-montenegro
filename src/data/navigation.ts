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
]

export const serviceNavigationLinks = [
  { label: 'OASIS', href: '/oasis', description: 'Rituales de purificación' },
  { label: 'TACTO', href: '/tacto', description: 'Manos, pies y uñas' },
  { label: 'RAÍZ', href: '/raiz', description: 'Bio-ciencia y tecnología' },
  { label: 'BROTE', href: '/brote', description: 'Spa infantil' },
  { label: 'FILO', href: '/filo', description: 'Depilación y mirada' },
  { label: 'HEBRA', href: '/hebra', description: 'Cuidado capilar' },
  { label: 'TEZ', href: '/tez', description: 'Piel y contorno' },
] satisfies Array<NavigationItem & { description?: string }>
