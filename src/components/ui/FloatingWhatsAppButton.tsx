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
  return (
    <div className="fixed bottom-5 right-5 z-[90] flex items-center gap-3 sm:bottom-7 sm:right-7">
      <span className="aura-whatsapp-label pointer-events-none rounded-xl bg-white px-3 py-2 text-sm font-semibold text-[#174B32] shadow-[0_3px_16px_rgba(0,0,0,0.18)]">
        Reserva aquí
      </span>
      <a
        href={href}
        onClick={() => trackMetaEvent('Contact', { content_name: 'WhatsApp Aura' })}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Reservar con Aura por WhatsApp"
        title="Reserva aquí"
        className="aura-whatsapp-button inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_22px_rgba(0,0,0,0.22)] transition-colors duration-200 hover:bg-[#20BA5A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        transition={shouldReduceMotion ? undefined : {
          duration: 0.55,
          repeat: Infinity,
          repeatDelay: 4.45,
          ease: 'easeInOut',
        }}
      >
        <FaWhatsapp aria-hidden="true" className="h-7 w-7" />
      </a>
    </div>
  )
}
