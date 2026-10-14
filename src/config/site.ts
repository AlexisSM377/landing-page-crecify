const whatsapp = import.meta.env.PUBLIC_WHATSAPP_NUMBER ?? '';
const booking = import.meta.env.PUBLIC_BOOKING_URL ?? '';

export const site = {
  name: 'Crecify',
  url: 'https://crecify.com',
  title: 'Crecify — Tu negocio en internet desde $690',
  description:
    'Creamos tu presencia digital completa: página web, WhatsApp, QR, horarios y Google Maps. Planes económicos para negocios locales, listos en días.',
  lang: 'es',
  whatsapp,
  booking,
} as const;

/** Enlace de WhatsApp con mensaje prellenado. Cae a "#contacto" si no hay número configurado. */
export function whatsappLink(message = 'Hola Crecify, quiero información sobre sus planes.') {
  if (!site.whatsapp) return '#contacto';
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const bookingLink =
  site.booking || whatsappLink('Hola Crecify, quiero agendar un diagnóstico gratuito.');
