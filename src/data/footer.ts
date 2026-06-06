import type { FooterContent } from '../types/common'
import { navigationLinks } from './navigation'

export const footerContent: FooterContent = {
  addressLines: [
    'Badaia Kalea, 33, 01012 Vitoria-Gasteiz,',
    'Araba, España.',
  ],
  scheduleLines: [
    'Lunes a Viernes',
    '9:00 - 14:00 hrs / 17:00 - 20:00 hrs',
    'Sábados',
    '9:00 - 14:00 hrs',
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
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/montenegrosaludybelleza',
      platform: 'facebook',
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/montenegrosaludybelleza/',
      platform: 'instagram',
    },
    {
      label: 'WhatsApp',
      href: `https://wa.me/?text=${encodeURIComponent('Hola, quiero reservar una cita en Montenegro Salud y Belleza. ¿Me puedes confirmar disponibilidad?')}`,
      platform: 'whatsapp',
    },
    {
      label: 'TikTok',
      href: 'https://www.tiktok.com/@montenegrosaludybelleza',
      platform: 'tiktok',
    },
  ],
  copyright:
    '© 2026 Montenegro Salud y Belleza. Todos los derechos reservados.',
  credit: 'Desarrollado por MLaNStudio.',
  creditHref: 'https://www.mlanstudio.com',
}
