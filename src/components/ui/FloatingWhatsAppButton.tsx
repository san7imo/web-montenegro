import { motion, useReducedMotion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { buildWhatsAppContactUrl } from '../../utils/whatsapp'

type FloatingWhatsAppButtonProps = {
  href?: string
}

export function FloatingWhatsAppButton({
  href = buildWhatsAppContactUrl(
    'Hola, quiero reservar una cita en Montenegro Salud y Belleza. ¿Me puedes confirmar disponibilidad?',
  ),
}: FloatingWhatsAppButtonProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir contacto por WhatsApp"
      className="fixed right-5 bottom-5 z-[70] inline-flex h-14 w-14 items-center justify-center rounded-full bg-pink text-white shadow-[var(--shadow-pink)] transition-transform duration-300 hover:scale-[1.03] hover:bg-pink-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2 sm:right-7 sm:bottom-7"
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.86, y: 20 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.95, duration: 0.75, ease: 'easeOut' }}
    >
      <FaWhatsapp aria-hidden="true" className="h-7 w-7" />
    </motion.a>
  )
}
