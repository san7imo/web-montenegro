import { buildWhatsAppContactUrl } from '../utils/whatsapp'

export const contactoHeroContent = {
  titleLines: ['Contacto:', 'Todo comienza con una conversación.'],
} as const

export const contactoIntroContent = {
  description:
    'Antes de iniciar tu tratamiento, hay un espacio para la escucha. Queremos conocer qué necesita tu cuerpo, qué busca tu mente y cuál es el origen del equilibrio que deseas recuperar. Escríbenos, tómate tu tiempo y permítenos diseñar un santuario a tu medida. Tu viaje hacia una transformación profunda comienza con este primer mensaje.',
} as const

export const contactoAuraContent = {
  label: 'Asistente IA',
  title: 'Conversa con Aura.',
  lead: 'Para potenciar la automatización y agendar de inmediato a través de WhatsApp.',
  description:
    'Aura es nuestra guía virtual está disponible las 24 horas del día para ayudarte a elegir el ritual perfecto según tus objetivos de salud y bienestar, resolver dudas sobre nuestro catálogo clínico o agendar tu próxima cita en segundos.',
  ctaLabel: 'INICIAR CONSULTA POR WHATSAPP',
  ctaHref: buildWhatsAppContactUrl(
    'Hola Aura, quiero iniciar una consulta personalizada en Montenegro Salud y Belleza.',
  ),
} as const

export const contactoDirectContent = {
  title: 'Atención Directa en el Santuario',
  subtitle: 'Para quienes prefieren la gestión tradicional o llamadas de consulta.',
  cards: [
    {
      id: 'telefono',
      type: 'phone',
      title: 'Teléfono',
      text: '614 69 83 93',
      href: 'tel:+34614698393',
    },
    {
      id: 'correo',
      type: 'email',
      title: 'Correo',
      text: 'montenegrosaludybelleza@gmail.com',
      href: 'mailto:montenegrosaludybelleza@gmail.com',
    },
    {
      id: 'locacion',
      type: 'location',
      title: 'Locación',
      text: 'C/. Badaia 33 Bajo, 01012. Vitoria-Gasteiz, España.',
      href: 'https://maps.google.com/?q=C%2F+Badaia+33+Bajo%2C+01012+Vitoria-Gasteiz%2C+Espa%C3%B1a',
    },
  ],
  schedule:
    'Lunes a viernes de 9:30am a 2:30pm y de 5:00pm a 8:00pm. Sábados de 9:30am a 2:30pm.',
  mapTitle: 'Ubicación de Montenegro Salud y Belleza en Google Maps',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=C%2F%20Badaia%2033%20Bajo%2C%2001012%20Vitoria-Gasteiz%2C%20Espa%C3%B1a&z=16&output=embed',
  mapHref:
    'https://www.google.com/maps/search/?api=1&query=C%2F%20Badaia%2033%20Bajo%2C%2001012%20Vitoria-Gasteiz%2C%20Espa%C3%B1a',
} as const

export const contactoFormContent = {
  title: 'Formulario de Mensajería',
  subtitle: 'Envíanos un mensaje sin necesidad de salir de nuestra web.',
  helper: 'Gracias por tu preferencia. Nos pondremos en contacto contigo.',
  submitLabel: 'ENVIAR MENSAJE',
  fields: {
    firstName: 'Nombre',
    lastName: 'Apellido',
    phone: 'Número de teléfono',
    email: 'Correo',
    message: 'Mensaje',
  },
} as const
