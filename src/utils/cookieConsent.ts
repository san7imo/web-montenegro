const legacyStorageKey = 'montenegro-cookie-consent'

export const cookieConsentChangeEvent = 'montenegro:cookie-consent-change'

export const cookieCategories = {
  necessary: 'necessary',
  externalMedia: 'functionality',
} as const

export type CookieCategory = (typeof cookieCategories)[keyof typeof cookieCategories]

let initializationPromise: Promise<void> | null = null
let apiPromise: Promise<typeof import('vanilla-cookieconsent')> | null = null

function getCookieConsentApi() {
  apiPromise ??= import('vanilla-cookieconsent')

  return apiPromise
}

function notifyConsentChange() {
  window.dispatchEvent(new Event(cookieConsentChangeEvent))
}

function migrateLegacyConsent(api: typeof import('vanilla-cookieconsent')) {
  if (api.validConsent()) return

  const legacyChoice = window.localStorage.getItem(legacyStorageKey)

  if (legacyChoice === 'accepted') {
    api.acceptCategory('all')
  } else if (legacyChoice === 'rejected') {
    api.acceptCategory(cookieCategories.necessary)
  } else {
    return
  }

  window.localStorage.removeItem(legacyStorageKey)
}

export function initializeCookieConsent() {
  if (initializationPromise) return initializationPromise

  initializationPromise = getCookieConsentApi().then(async (api) => {
    await api.run({
      mode: 'opt-in',
      revision: 1,
      autoClearCookies: true,
      disablePageInteraction: false,
      cookie: {
        name: 'montenegro_cookie_consent',
        expiresAfterDays: 182,
        sameSite: 'Lax',
        secure: window.location.protocol === 'https:',
      },
      guiOptions: {
        consentModal: {
          layout: 'box wide',
          position: 'bottom right',
          equalWeightButtons: true,
        },
        preferencesModal: {
          layout: 'box',
          equalWeightButtons: true,
        },
      },
      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        functionality: {
          enabled: false,
          services: {
            googleMaps: {
              label: 'Google Maps',
            },
          },
        },
      },
      language: {
        default: 'es',
        translations: {
          es: {
            consentModal: {
              label: 'Preferencias de privacidad',
              title: 'Tu privacidad, en tus manos',
              description:
                'Utilizamos almacenamiento técnico para recordar tus preferencias. El contenido externo, como Google Maps, solo se carga si nos das permiso.',
              acceptAllBtn: 'Aceptar',
              acceptNecessaryBtn: 'Rechazar',
              showPreferencesBtn: 'Configurar',
              revisionMessage:
                'Hemos actualizado nuestras categorías y necesitamos que revises nuevamente tus preferencias.',
              footer: '<a href="/legal/cookies">Política de cookies</a>',
            },
            preferencesModal: {
              title: 'Preferencias de privacidad',
              acceptAllBtn: 'Aceptar todo',
              acceptNecessaryBtn: 'Rechazar no necesarias',
              savePreferencesBtn: 'Guardar preferencias',
              closeIconLabel: 'Cerrar preferencias',
              serviceCounterLabel: 'Servicio|Servicios',
              sections: [
                {
                  title: 'Elige cómo navegar',
                  description:
                    'Puedes aceptar o rechazar las categorías no necesarias. Tu elección se puede modificar en cualquier momento desde el pie de página.',
                  },
                {
                  title: 'Necesarias',
                  description:
                    'Permiten guardar esta decisión y mantener funciones básicas de seguridad. No pueden desactivarse.',
                  linkedCategory: 'necessary',
                  cookieTable: {
                    headers: {
                      name: 'Nombre',
                      purpose: 'Finalidad',
                      duration: 'Duración',
                    },
                    body: [
                      {
                        name: 'montenegro_cookie_consent',
                        purpose: 'Conservar las preferencias de privacidad seleccionadas.',
                        duration: '182 días',
                      },
                    ],
                  },
                },
                {
                  title: 'Contenido externo',
                  description:
                    'Autoriza la carga del mapa interactivo de Google Maps en la página de contacto. Si se rechaza, la dirección y el enlace externo siguen disponibles.',
                  linkedCategory: 'functionality',
                },
                {
                  title: 'Más información',
                  description:
                    'Consulta todos los detalles en nuestra <a class="cc__link" href="/legal/cookies">Política de cookies</a>.',
                },
              ],
            },
          },
        },
      },
      onFirstConsent: notifyConsentChange,
      onConsent: notifyConsentChange,
      onChange: notifyConsentChange,
    })

    migrateLegacyConsent(api)
    notifyConsentChange()
  })

  return initializationPromise
}

export async function acceptCookieCategory(category: CookieCategory) {
  const api = await getCookieConsentApi()
  await initializeCookieConsent()
  api.acceptCategory(category)
  api.hide()
  notifyConsentChange()
}

export async function showCookiePreferences() {
  const api = await getCookieConsentApi()
  await initializeCookieConsent()
  api.showPreferences()
}

export async function isCookieCategoryAccepted(category: CookieCategory) {
  const api = await getCookieConsentApi()

  return api.acceptedCategory(category)
}
