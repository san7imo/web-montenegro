import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa'

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

const socialIconMap = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  whatsapp: FaWhatsapp,
  tiktok: FaTiktok,
} as const

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
            <div className="space-y-0.5 text-[0.86rem] leading-5 text-white/88 sm:text-[0.9rem]">
              {footerContent.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div className="space-y-0.5 text-[0.86rem] leading-5 text-white/88 sm:text-[0.9rem]">
              {footerContent.scheduleLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.14em] text-white">
              Navegación
            </p>
            <ul className="space-y-0.5 text-[0.86rem] leading-5 text-white/88 sm:text-[0.9rem]">
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
            <ul className="space-y-0.5 text-[0.86rem] leading-5 text-white/88 sm:text-[0.9rem]">
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
            <p className="max-w-[18rem] text-[0.86rem] leading-5 text-white/88 sm:text-[0.9rem]">
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
                target="_blank"
                rel="noreferrer"
                className="transition-opacity duration-200 hover:opacity-80"
              >
                  {(() => {
                    const Icon = socialIconMap[link.platform]
                    return <Icon aria-hidden="true" className="h-5 w-5" />
                  })()}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={['pt-10 text-center text-[0.86rem] leading-5 sm:pt-12', toneClass.copy].join(' ')}>
          <p>{footerContent.copyright}</p>
          <p>
            {footerContent.creditHref ? (
              <a
                href={footerContent.creditHref}
                target="_blank"
                rel="noreferrer"
                className="font-bold transition-opacity duration-200 hover:opacity-80"
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
