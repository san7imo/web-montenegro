import type { NavigationItem } from '../types/common'

export const navigationLinks: NavigationItem[] = [
  { label: 'INICIO', href: '/' },
  { label: 'ESENCIA', href: '/esencia' },
  { label: 'ORIGEN', href: '/origen' },
  { label: 'OASIS', href: '/oasis' },
  { label: 'TEZ', href: '/tez' },
  { label: 'HEBRA', href: '/hebra' },
  { label: 'TACTO', href: '/tacto' },
  { label: 'FILO', href: '/filo' },
  { label: 'BROTE', href: '/brote' },
  { label: 'RAÍZ', href: '/raiz' },
  { label: 'ECO', href: '/eco' },
  { label: 'CONTACTO', href: '/contacto' },
]

export const primaryNavigationLinks: NavigationItem[] = navigationLinks.filter((link) =>
  ['/', '/esencia', '/origen', '/oasis'].includes(link.href),
)

export const headerNavigationLinks: NavigationItem[] = [
  { label: 'INICIO', href: '/' },
  { label: 'ESENCIA', href: '/esencia' },
  { label: 'ORIGEN', href: '/origen' },
  { label: 'ECO', href: '/eco' },
  { label: 'CONTACTO', href: '/contacto' },
]

export const serviceNavigationLinks = [
  { label: 'OASIS', href: '/oasis', description: 'Rituales de purificación' },
  { label: 'TEZ', href: '/tez', description: 'Piel y contorno' },
  { label: 'HEBRA', href: '/hebra', description: 'Cuidado capilar' },
  { label: 'TACTO', href: '/tacto', description: 'Manos, pies y uñas' },
  { label: 'FILO', href: '/filo', description: 'Depilación y mirada' },
  { label: 'BROTE', href: '/brote', description: 'Spa infantil' },
  { label: 'RAÍZ', href: '/raiz', description: 'Bio-ciencia y tecnología' },
] satisfies Array<NavigationItem & { description?: string }>
