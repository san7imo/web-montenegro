import { motion, useReducedMotion } from 'framer-motion'

type FloatingWhatsAppButtonProps = {
  href?: string
}

export function FloatingWhatsAppButton({
  href = '#contacto',
}: FloatingWhatsAppButtonProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.a
      href={href}
      aria-label="Abrir contacto por WhatsApp"
      className="fixed right-5 bottom-5 z-[70] inline-flex h-14 w-14 items-center justify-center rounded-full bg-pink text-white shadow-[var(--shadow-pink)] transition-transform duration-300 hover:scale-[1.03] hover:bg-pink-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink focus-visible:ring-offset-2 sm:right-7 sm:bottom-7"
      initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.86, y: 20 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.95, duration: 0.75, ease: 'easeOut' }}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 28c6.6 0 12-5.2 12-11.7S22.6 4.7 16 4.7 4 9.8 4 16.3c0 2.3.7 4.5 1.9 6.4L4.8 28l5.7-1.5A12.3 12.3 0 0 0 16 28Z" />
        <path d="M12.1 12.1c.3-.7.7-.7 1-.7h.8c.2 0 .5.1.6.4l1.2 2.6c.1.2.1.5 0 .7l-.6 1c-.1.2-.1.4 0 .6.4.7 1 1.4 1.8 2 .8.6 1.7 1 2.5 1.3.2.1.4 0 .6-.1l1-.9c.2-.2.5-.2.7-.1l2.4 1.1c.3.1.5.4.4.7v.8c0 .3 0 .7-.6 1-.7.3-1.6.5-2.4.3-1.2-.2-2.6-.7-4.4-2-2.2-1.6-3.8-4-4.3-5.1-.5-1-.5-2 0-2.6Z" />
        <path d="M22.8 10.2h3.4" />
        <path d="M24.5 8.5v3.4" />
      </svg>
    </motion.a>
  )
}
