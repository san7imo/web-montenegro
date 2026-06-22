import type { NavigationItem } from '../types/common'

export const navigationLinks: NavigationItem[] = [
  { label: 'INICIO', href: '/' },
  { label: 'ORIGEN', href: '/origen' },
  { label: 'ESENCIA', href: '/esencia' },
  { label: 'OASIS', href: '/oasis' },
  { label: 'RAÍZ', href: '/raiz' },
  { label: 'TEZ', href: '/tez' },
  { label: 'FILO', href: '/filo' },
  { label: 'TACTO', href: '/tacto' },
  { label: 'HEBRA', href: '/hebra' },
  { label: 'BROTE', href: '/brote' },
  { label: 'ECO', href: '/eco' },
  { label: 'CONTACTO', href: '/contacto' },
]

export const primaryNavigationLinks: NavigationItem[] = navigationLinks.filter((link) =>
  ['/', '/esencia', '/origen', '/oasis'].includes(link.href),
)

export const headerNavigationLinks: NavigationItem[] = [
  { label: 'INICIO', href: '/' },
  { label: 'ORIGEN', href: '/origen' },
  { label: 'ESENCIA', href: '/esencia' },
  { label: 'ECO', href: '/eco' },
  { label: 'CONTACTO', href: '/contacto' },
]

export const serviceNavigationLinks = [
  { label: 'OASIS', href: '/oasis', description: 'Rituales de purificación' },
  { label: 'RAÍZ', href: '/raiz', description: 'Bio-ciencia y tecnología' },
  { label: 'TEZ', href: '/tez', description: 'Piel y contorno' },
  { label: 'FILO', href: '/filo', description: 'Depilación y mirada' },
  { label: 'TACTO', href: '/tacto', description: 'Manos, pies y uñas' },
  { label: 'HEBRA', href: '/hebra', description: 'Cuidado capilar' },
  { label: 'BROTE', href: '/brote', description: 'Spa infantil' },
] satisfies Array<NavigationItem & { description?: string }>
