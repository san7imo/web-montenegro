import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

import navbarLogo from '../../assets/logo/montenegro-logo-navbar.webp'
import { headerNavigationLinks } from '../../data/navigation'
import { Container } from '../ui/Container'

export function Header() {
  const shouldReduceMotion = useReducedMotion()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) {
      return
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isMenuOpen])

  return (
    <motion.header
      className="absolute inset-x-0 top-0 z-50"
      initial={shouldReduceMotion ? false : { opacity: 0, y: -18 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <Container className="relative flex max-w-none items-start justify-between px-7 py-7 text-white sm:px-8 sm:py-8 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: -16 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
          transition={{ delay: 0.12, duration: 0.65, ease: 'easeOut' }}
        >
          <Link
            to="/"
            aria-label="Montenegro Salud y Belleza"
            onClick={() => setIsMenuOpen(false)}
            className="drop-shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
          >
            <img
              src={navbarLogo}
              alt="Montenegro Salud y Belleza"
              className="h-9 w-auto sm:h-10 lg:h-[3rem]"
              loading="eager"
            />
          </Link>
        </motion.div>

        <motion.button
          type="button"
          aria-label={isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          aria-expanded={isMenuOpen}
          aria-controls="header-navigation-panel"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center text-white transition-opacity duration-300 hover:opacity-82 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          initial={shouldReduceMotion ? false : { opacity: 0, x: 16 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
          transition={{ delay: 0.18, duration: 0.65, ease: 'easeOut' }}
        >
          <span className="sr-only">
            {isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          </span>
          <span className="relative flex h-5 w-5 items-center justify-center drop-shadow-[0_4px_8px_rgba(0,0,0,0.18)]">
            <span
              className={[
                'absolute block h-0.5 w-5 rounded-full bg-current transition-transform duration-300',
                isMenuOpen ? 'rotate-45' : '-translate-y-1.5',
              ]
                .filter(Boolean)
                .join(' ')}
            />
            <span
              className={[
                'absolute block h-0.5 w-5 rounded-full bg-current transition-all duration-300',
                isMenuOpen ? 'opacity-0' : 'opacity-100',
              ]
                .filter(Boolean)
                .join(' ')}
            />
            <span
              className={[
                'absolute block h-0.5 w-5 rounded-full bg-current transition-transform duration-300',
                isMenuOpen ? '-rotate-45' : 'translate-y-1.5',
              ]
                .filter(Boolean)
                .join(' ')}
            />
          </span>
        </motion.button>

        <AnimatePresence>
          {isMenuOpen ? (
            <motion.nav
              id="header-navigation-panel"
              aria-label="Navegación principal"
              className="absolute top-[3.6rem] right-5 z-50 w-[13.5rem] rounded-[1.35rem] border border-white/16 bg-forest-dark/92 p-3 text-cream-light shadow-[0_24px_60px_rgba(11,18,14,0.24)] backdrop-blur-md sm:top-[4rem] sm:right-6 lg:right-8"
              initial={shouldReduceMotion ? false : { opacity: 0, y: -8, scale: 0.98 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            >
              <ul className="space-y-1.5">
                {headerNavigationLinks.map((item) => (
                  <li key={item.href}>
                    <NavLink
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        [
                          'flex rounded-[0.95rem] px-4 py-3 text-[0.76rem] font-medium uppercase tracking-[0.16em] transition-colors duration-200',
                          isActive
                            ? 'bg-white/10 text-white'
                            : 'text-cream-light/88 hover:bg-white/6 hover:text-white',
                        ]
                          .filter(Boolean)
                          .join(' ')
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </Container>
    </motion.header>
  )
}
