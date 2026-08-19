export const WHATSAPP_PHONE = '34614698393'

export function buildWhatsAppContactUrl(message: string, phone = WHATSAPP_PHONE) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export function buildWhatsAppShareUrl(message: string) {
  return `https://wa.me/?text=${encodeURIComponent(message)}`
}
