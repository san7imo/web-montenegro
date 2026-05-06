import type { FooterContent } from '../types/common'
import { navigationLinks } from './navigation'

export const footerContent: FooterContent = {
  addressLines: [
    'Badaia Kalea, 33, 01012 Vitoria-Gasteiz,',
    'Araba, España.',
  ],
  scheduleLines: [
    'De Lunes a Sabado',
    '9:00 A.M. - 2:00 P.M. / 5:00 P.M. - 8:00 P.M.',
  ],
  navigationLinks,
  legalLinks: [
    { label: 'Aviso legal', href: '/legal/aviso-legal' },
    { label: 'Políticas de seguridad', href: '/legal/politicas-de-seguridad' },
    { label: 'Cookies', href: '/legal/cookies' },
  ],
  newsletter: 'Recibe novedades, promos y noticias sobre nuevos servicios.',
  newsletterPlaceholder: 'Tu correo electronico',
  newsletterButtonLabel: 'Subscribirse',
  socialLinks: [
    { label: 'Facebook', href: '#', platform: 'facebook' },
    { label: 'Instagram', href: '#', platform: 'instagram' },
    { label: 'WhatsApp', href: '#', platform: 'whatsapp' },
    { label: 'TikTok', href: '#', platform: 'tiktok' },
  ],
  copyright:
    '© 2026 Montenegro Salud y Belleza. Todos los derechos reservados.',
  credit: 'Desarrollado por mlanstudio.',
  creditHref: 'https://www.mlanstudio.com',
}
