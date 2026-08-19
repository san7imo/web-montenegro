import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'

const storageKey = 'montenegro-cookie-consent'

type CookieChoice = 'accepted' | 'rejected'

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(() => !window.localStorage.getItem(storageKey))
  const shouldReduceMotion = useReducedMotion()

  const saveChoice = (choice: CookieChoice) => {
    window.localStorage.setItem(storageKey, choice)
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <motion.aside
      aria-label="Aviso de cookies"
      className="fixed right-4 bottom-4 z-[80] w-[min(calc(100vw-2rem),25rem)] rounded-[1.45rem] border border-white/35 bg-cream-light/96 p-5 text-forest-dark shadow-[0_22px_60px_rgba(31,53,43,0.2)] backdrop-blur-md sm:right-6 sm:bottom-6"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.46, ease: 'easeOut' }}
    >
      <p className="type-card-title-compact text-forest">
        Cookies
      </p>
      <p className="type-body-sm mt-3 text-forest-dark/78">
        Usamos cookies técnicas y almacenamiento local para recordar tus preferencias.
        Puedes aceptar o rechazar su uso no esencial.
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => saveChoice('rejected')}
          className="type-action min-h-10 rounded-full border border-forest/24 px-4 py-2 text-forest transition-colors duration-200 hover:border-forest/50"
        >
          Rechazar
        </button>
        <button
          type="button"
          onClick={() => saveChoice('accepted')}
          className="type-action min-h-10 rounded-full border border-pink bg-pink px-4 py-2 text-white transition-colors duration-200 hover:border-pink-dark hover:bg-pink-dark"
        >
          Aceptar
        </button>
        <Link
          to="/legal/cookies"
          className="type-action inline-flex min-h-10 items-center rounded-full px-3 py-2 text-pink transition-opacity duration-200 hover:opacity-78"
        >
          Ver política
        </Link>
      </div>
    </motion.aside>
  )
}
