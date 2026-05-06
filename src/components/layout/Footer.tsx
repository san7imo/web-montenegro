import { Link } from 'react-router-dom'

import footerLogo from '../../assets/logo/montenegro-logo-footer.webp'
import { footerContent } from '../../data/footer'
import { Container } from '../ui/Container'

type FooterTone = 'dark' | 'sage'

type FooterProps = {
  tone?: FooterTone
}

const toneStyles: Record<FooterTone, { wrapper: string; copy: string }> = {
  dark: {
    wrapper: 'bg-forest text-white',
    copy: 'text-cream-light/48',
  },
  sage: {
    wrapper: 'bg-[#8b977b] text-white',
    copy: 'text-forest-deep/52',
  },
}

function SocialIcon({ platform }: { platform: 'facebook' | 'instagram' | 'whatsapp' | 'tiktok' }) {
  const className = 'h-6 w-6'

  switch (platform) {
    case 'facebook':
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.2-1.4 1.4-1.4H16V5.5c-.3 0-1.1-.1-2.2-.1-2.2 0-3.8 1.3-3.8 3.8v2.1H7.8V14H10v7h3.5Z" />
        </svg>
      )
    case 'instagram':
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
          <circle cx="12" cy="12" r="4.2" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'whatsapp':
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20.3a8.2 8.2 0 0 0 7.9-8.2A8.2 8.2 0 0 0 12 4a8.2 8.2 0 0 0-8.2 8.1c0 1.4.4 2.8 1.1 4L4 20l4-1.1a8.1 8.1 0 0 0 4 .4Z" />
          <path d="M9.3 8.9c.2-.4.4-.4.7-.4h.5c.2 0 .3.1.4.3l.9 1.9c.1.2.1.3 0 .5l-.5.7c-.1.1-.1.3 0 .4.3.5.7 1 1.3 1.5.6.5 1.2.8 1.8 1 .2.1.3.1.4-.1l.8-.7c.1-.1.3-.1.5-.1l1.8.8c.2.1.3.3.3.5v.6c0 .2 0 .5-.4.7-.5.2-1.2.3-1.8.2-.8-.1-1.9-.5-3.3-1.5-1.6-1.2-2.8-3-3.2-3.8-.4-.8-.4-1.5-.2-2Z" />
        </svg>
      )
    case 'tiktok':
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M14.6 3h2.3c.2 1.6 1.2 3 2.8 3.7v2.4c-1.2 0-2.4-.4-3.3-1v6.4a5 5 0 1 1-5-5h.5v2.3h-.5a2.6 2.6 0 1 0 2.6 2.7V3Z" />
        </svg>
      )
  }
}

export function Footer({ tone = 'dark' }: FooterProps) {
  const toneClass = toneStyles[tone]

  return (
    <footer className={toneClass.wrapper}>
      <Container className="py-10 sm:py-11 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.18fr_0.66fr_0.66fr_1.02fr] lg:gap-10">
          <div className="space-y-4">
            <img
              src={footerLogo}
              alt="Montenegro Salud y Belleza"
              className="h-[5.4rem] w-auto sm:h-[6rem]"
              loading="lazy"
            />
            <div className="space-y-1 text-[0.96rem] leading-7 text-white/88 sm:text-[0.98rem]">
              {footerContent.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div className="space-y-1 text-[0.96rem] leading-7 text-white/88 sm:text-[0.98rem]">
              {footerContent.scheduleLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-white">
              Navegación
            </p>
            <ul className="space-y-1 text-[0.96rem] leading-8 text-white/88 sm:text-[0.98rem]">
              {footerContent.navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="transition-opacity duration-200 hover:opacity-80">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-white">
              Legal
            </p>
            <ul className="space-y-1 text-[0.96rem] leading-8 text-white/88 sm:text-[0.98rem]">
              {footerContent.legalLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="transition-opacity duration-200 hover:opacity-80">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-white">
              Newsletter
            </p>
            <p className="max-w-[18rem] text-[0.96rem] leading-7 text-white/88 sm:text-[0.98rem]">
              {footerContent.newsletter}
            </p>
            <div className="flex max-w-[294px] overflow-hidden rounded-[16px] bg-white/92">
              <input
                type="email"
                aria-label="Correo electrónico"
                placeholder={footerContent.newsletterPlaceholder}
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-[0.95rem] text-forest-dark placeholder:text-forest-dark/34 focus:outline-none"
              />
              <button
                type="button"
                className="bg-white/24 px-5 py-3 text-[0.95rem] font-medium text-white transition-colors duration-300 hover:bg-white/28"
              >
                {footerContent.newsletterButtonLabel}
              </button>
            </div>
            <div className="flex items-center gap-4 pt-1 text-white">
              {footerContent.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="transition-opacity duration-200 hover:opacity-80"
                >
                  <SocialIcon platform={link.platform} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={['pt-12 text-center text-[0.95rem] leading-8 sm:pt-14', toneClass.copy].join(' ')}>
          <p>{footerContent.copyright}</p>
          <p>
            {footerContent.creditHref ? (
              <a
                href={footerContent.creditHref}
                target="_blank"
                rel="noreferrer"
                className="transition-opacity duration-200 hover:opacity-80"
              >
                {footerContent.credit}
              </a>
            ) : (
              footerContent.credit
            )}
          </p>
        </div>
      </Container>
    </footer>
  )
}
