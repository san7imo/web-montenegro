import { motion, useReducedMotion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

import { Container } from '../../../components/ui/Container'
import { useCookieCategory } from '../../../components/ui/useCookieCategory'
import { SectionTitle } from '../../../components/ui/SectionTitle'
import { contactoDirectContent } from '../../../data/contacto'
import { acceptCookieCategory, cookieCategories } from '../../../utils/cookieConsent'

const iconByType = {
  phone: FaPhoneAlt,
  email: FaEnvelope,
  location: FaMapMarkerAlt,
} as const

export function ContactDirect() {
  const shouldReduceMotion = useReducedMotion()
  const hasMapConsent = useCookieCategory(cookieCategories.externalMedia)

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24, filter: 'blur(6px)' },
          whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
          viewport: { once: true, amount: 0.2 },
          transition: { delay, duration: 0.78, ease: 'easeOut' as const },
        }

  return (
    <section className="bg-cream pt-14 text-center text-forest sm:pt-18 lg:pt-[6rem]">
      <Container className="!max-w-[74rem]">
        <motion.div {...fadeUp(0.04)}>
          <SectionTitle
            as="h2"
            className="text-forest"
          >
            {contactoDirectContent.title}
          </SectionTitle>
          <p className="type-body -mt-1 font-bold text-pink">
            {contactoDirectContent.subtitle}
          </p>
        </motion.div>

        <div className="mt-7 grid gap-4 sm:grid-cols-3 lg:gap-4">
          {contactoDirectContent.cards.map((card, index) => {
            const Icon = iconByType[card.type]

            return (
              <motion.a
                key={card.id}
                href={card.href}
                target={card.type === 'location' ? '_blank' : undefined}
                rel={card.type === 'location' ? 'noreferrer' : undefined}
                className="flex min-h-[7.85rem] flex-col items-center justify-center rounded-[1.8rem] bg-forest-soft px-4 py-4 text-cream-light shadow-[0_4px_7px_rgba(36,61,49,0.2)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-forest"
                {...fadeUp(0.08 + index * 0.07)}
              >
                <Icon aria-hidden="true" className="h-6 w-6 text-cream-light" />
                <h3 className="type-card-title-compact mt-2.5 text-cream-light">
                  {card.title}
                </h3>
                <p className="type-body-sm mt-1 max-w-[14rem] break-words font-semibold text-cream-light/92">
                  {card.text}
                </p>
              </motion.a>
            )
          })}
        </div>

        <motion.div
          className="relative mx-auto mt-10 overflow-hidden rounded-[1.55rem] border border-white/70 bg-white/18 shadow-[0_8px_22px_rgba(36,61,49,0.15)] sm:mt-12"
          {...fadeUp(0.16)}
        >
          {hasMapConsent ? (
            <iframe
              title={contactoDirectContent.mapTitle}
              src={contactoDirectContent.mapEmbedUrl}
              className="relative z-10 h-[17rem] w-full border-0 bg-transparent sm:h-[19rem] lg:h-[20rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="flex h-[17rem] flex-col items-center justify-center bg-[linear-gradient(135deg,rgba(111,128,104,0.3),rgba(47,77,60,0.18))] px-6 text-center text-forest sm:h-[19rem] lg:h-[20rem]">
              <p className="type-card-title-compact">
                Montenegro Salud y Belleza
              </p>
              <p className="type-body-sm mt-2 max-w-[32rem] font-semibold text-forest-dark/75">
                C/. Badaia 33 Bajo, 01012. Vitoria-Gasteiz, España. Autoriza el contenido externo para ver el mapa interactivo.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2.5">
                <button
                  type="button"
                  onClick={() => void acceptCookieCategory(cookieCategories.externalMedia)}
                  className="type-action rounded-full border border-pink bg-pink px-5 py-2 text-white transition-colors hover:border-pink-dark hover:bg-pink-dark"
                >
                  Permitir y cargar mapa
                </button>
                <a
                  href={contactoDirectContent.mapHref}
                  target="_blank"
                  rel="noreferrer"
                  className="type-action rounded-full border border-pink/55 px-5 py-2 text-pink transition-colors hover:border-pink hover:bg-white/35"
                >
                  Abrir en Google Maps
                </a>
              </div>
            </div>
          )}
        </motion.div>

        <motion.p
          className="type-body-sm mx-auto mt-8 max-w-[62rem] font-bold text-forest-soft sm:mt-9"
          {...fadeUp(0.2)}
        >
          {contactoDirectContent.schedule}
        </motion.p>
      </Container>
    </section>
  )
}
