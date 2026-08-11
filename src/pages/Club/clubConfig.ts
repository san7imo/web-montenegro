export const WHATSAPP_PHONE = '34614698393'

const GOOGLE_REVIEW_PLACE_ID = 'ChIJtdGREVrDTw0R_AERQThipl4'
const GOOGLE_REVIEW_SOURCE = 'g.page.m.ia._'
const GOOGLE_REVIEW_LAA = 'nmx-review-solicitation-ia2'

export const LINKS = {
  lipoSweepstakes: '',
  googleReview: `https://search.google.com/local/writereview?placeid=${GOOGLE_REVIEW_PLACE_ID}&source=${GOOGLE_REVIEW_SOURCE}&laa=${GOOGLE_REVIEW_LAA}`,
  website: 'https://www.montenegrosaludybelleza.com',
  instagram: 'https://www.instagram.com/montenegrosaludbelleza/',
  instagramStory: 'instagram://story-camera',
  tiktok: 'https://www.tiktok.com/@montenegrosaludybelleza',
  facebook: 'https://www.facebook.com/MontenegroSaludyBelleza/',
  tez: 'https://www.montenegrosaludybelleza.com/tez',
  hebra: 'https://www.montenegrosaludybelleza.com/hebra',
  eco: 'https://www.montenegrosaludybelleza.com/eco',
}

export const MESSAGES = {
  suggestion: 'Hola, os comento un detalle sobre mi visita de hoy',
  discount:
    'Hola Aura, vengo desde el chip NFC de recepción de Montenegro Salud y Belleza. Ya dejé mi reseña en Google y publiqué una historia etiquetando a @montenegrosaludbelleza. Quiero hacer efectivo mi 5% de descuento para mi próximo tratamiento. Por favor, ayúdame a validar las condiciones y reservar mi cita.',
  booking: 'Hola, Aura. Me gustaría agendar mi próxima visita. ¿Me ayudas a elegir fecha y hora?',
  giftCards:
    'Hola, Aura. Quiero regalar una experiencia. ¿Me podrías dar información sobre los bonos y Gift Cards disponibles?',
  treatments: '¡Hola! Quiero agendar una cita para uno de los tratamientos.',
  referral:
    'Hola, os escribo para regalarle a alguien una experiencia con vosotros con el 5% de descuento.',
  invite:
    'Echa un vistazo a Montenegro Salud y Belleza. Es mi centro de confianza para cuidarme y desconectar, ¡te va a encantar!',
}

export function buildWhatsAppUrl(message: string, phone = WHATSAPP_PHONE) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export function buildWhatsAppShareUrl(message: string) {
  return `https://wa.me/?text=${encodeURIComponent(message)}`
}
