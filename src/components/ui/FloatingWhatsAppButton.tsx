import { motion, useReducedMotion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { trackMetaEvent } from '../../utils/metaPixel'
import { buildWhatsAppContactUrl } from '../../utils/whatsapp'

type FloatingWhatsAppButtonProps = {
  href?: string
}

export function FloatingWhatsAppButton({
  href = buildWhatsAppContactUrl(
    'Hola Aura, me gustaría recibir información sobre los servicios de Montenegro Salud y Belleza. ¿Me puedes ayudar?',
  ),
}: FloatingWhatsAppButtonProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.a
      href={href}
      onClick={() => trackMetaEvent("Contact", { content_name: "WhatsApp Aura" })}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar con Aura por WhatsApp"
      title="Hablar con Aura por WhatsApp"
      className="fixed bottom-5 left-5 z-[90] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_22px_rgba(0,0,0,0.22)] transition-colors duration-200 hover:bg-[#20BA5A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 sm:bottom-7 sm:left-7"
      initial={false}
      animate={shouldReduceMotion ? undefined : {
        rotate: [0, 0, -4, 4, -3, 3, 0, 0],
        scale: [1, 1, 1.025, 1.025, 1.015, 1.015, 1, 1],
      }}
      transition={shouldReduceMotion ? undefined : {
        duration: 0.8,
        repeat: Infinity,
        repeatDelay: 4.2,
        ease: 'easeInOut',
      }}
    >
      <FaWhatsapp aria-hidden="true" className="h-7 w-7" />
    </motion.a>
  )
}
