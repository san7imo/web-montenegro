export type NavigationItem = {
  label: string
  href: string
}

export type SocialLink = {
  label: string
  href: string
  platform: 'facebook' | 'instagram' | 'whatsapp' | 'tiktok'
}

export type FooterLink = {
  label: string
  href: string
}

export type FooterContent = {
  addressLines: string[]
  scheduleLines: string[]
  navigationLinks: FooterLink[]
  legalLinks: FooterLink[]
  newsletter: string
  newsletterPlaceholder: string
  newsletterButtonLabel: string
  socialLinks: SocialLink[]
  copyright: string
  credit: string
  creditHref?: string
}

export type PagePlaceholderContent = {
  label: string
  title: string
  description: string
  ctaLabel: string
  ctaHref: string
}
