import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

import navbarLogo from '../../assets/logo/montenegro-logo-navbar.webp'
import { headerNavigationLinks, serviceNavigationLinks } from '../../data/navigation'
import { Container } from '../ui/Container'

export function Header() {
  const shouldReduceMotion = useReducedMotion()
  const location = useLocation()
  const isServiceRoute = location.pathname === '/servicios'
    || serviceNavigationLinks.some((item) => item.href === location.pathname)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(isServiceRoute)

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

  const mainNavigationBeforeServices = headerNavigationLinks.filter((item) =>
    ['/', '/esencia', '/origen'].includes(item.href),
  )
  const mainNavigationAfterServices = headerNavigationLinks.filter((item) =>
    ['/eco', '/contacto'].includes(item.href),
  )

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={shouldReduceMotion ? false : { opacity: 0, y: -18 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <Container className="relative flex max-w-none items-start justify-between px-7 py-4 text-white sm:px-8 sm:py-5 lg:px-8">
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
              className="h-12 w-auto sm:h-[3.2rem] lg:h-[3.65rem]"
              loading="eager"
            />
          </Link>
        </motion.div>

        <motion.button
          type="button"
          aria-label={isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          aria-expanded={isMenuOpen}
          aria-controls="header-navigation-panel"
          onClick={() => {
            if (!isMenuOpen && isServiceRoute) {
              setIsServicesOpen(true)
            }

            setIsMenuOpen((current) => !current)
          }}
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
              className="absolute top-[3.6rem] right-5 z-50 max-h-[calc(100svh-5rem)] w-[15rem] overflow-y-auto rounded-[1.35rem] border border-white/16 bg-forest-dark/92 p-3 text-cream-light shadow-[0_24px_60px_rgba(11,18,14,0.24)] backdrop-blur-md sm:top-[4rem] sm:right-6 lg:right-8"
              initial={shouldReduceMotion ? false : { opacity: 0, y: -8, scale: 0.98 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
            >
              <ul className="space-y-1.5">
                {mainNavigationBeforeServices.map((item) => (
                  <li key={item.href}>
                    <NavLink
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        [
                          'type-action flex rounded-[0.95rem] px-4 py-3 font-medium transition-colors duration-200',
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
                <li>
                  <button
                    type="button"
                    aria-expanded={isServicesOpen}
                    aria-controls="header-services-submenu"
                    onClick={() => setIsServicesOpen((current) => !current)}
                    className={[
                      'type-action flex w-full items-center justify-between rounded-[0.95rem] px-4 py-3 text-left font-medium transition-colors duration-200',
                      isServiceRoute
                        ? 'bg-white/10 text-white'
                        : 'text-cream-light/88 hover:bg-white/6 hover:text-white',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    <span>Servicios</span>
                    <span
                      aria-hidden="true"
                      className={[
                        'inline-flex h-5 w-5 items-center justify-center text-[0.9rem] leading-none transition-transform duration-200',
                        isServicesOpen ? 'rotate-180' : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    >
                      ↓
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isServicesOpen ? (
                      <motion.ul
                        id="header-services-submenu"
                        className="mt-1.5 space-y-1 overflow-hidden rounded-[1rem] bg-black/10 p-1.5"
                        initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
                        animate={shouldReduceMotion ? undefined : { height: 'auto', opacity: 1 }}
                        exit={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                      >
                        <li>
                          <NavLink
                            to="/servicios"
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) =>
                              [
                                'type-action block rounded-[0.85rem] border border-pink-soft/20 px-3 py-2.5 font-semibold text-pink-soft transition-colors duration-200',
                                isActive ? 'bg-white/10' : 'hover:bg-white/6 hover:text-white',
                              ].join(' ')
                            }
                          >
                            Ver todos los servicios
                          </NavLink>
                        </li>
                        {serviceNavigationLinks.map((item) => (
                          <li key={item.href}>
                            <NavLink
                              to={item.href}
                              onClick={() => setIsMenuOpen(false)}
                              className={({ isActive }) =>
                                [
                                  'block rounded-[0.85rem] px-3 py-2 transition-colors duration-200',
                                  isActive
                                    ? 'bg-white/10 text-white'
                                    : 'text-cream-light/82 hover:bg-white/6 hover:text-white',
                                ]
                                  .filter(Boolean)
                                  .join(' ')
                              }
                            >
                              <span className="type-action block">
                                {item.label}
                              </span>
                              <span className="type-caption mt-1 block font-medium normal-case tracking-[0.01em] text-cream-light/62">
                                {item.description}
                              </span>
                            </NavLink>
                          </li>
                        ))}
                      </motion.ul>
                    ) : null}
                  </AnimatePresence>
                </li>
                {mainNavigationAfterServices.map((item) => (
                  <li key={item.href}>
                    <NavLink
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        [
                          'type-action flex rounded-[0.95rem] px-4 py-3 font-medium transition-colors duration-200',
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
