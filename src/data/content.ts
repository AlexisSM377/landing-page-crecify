export const steps = [
  {
    title: 'Diagnóstico',
    text: 'Una llamada corta para entender tu negocio, tus clientes y qué necesitas vender.',
  },
  {
    title: 'Diseño',
    text: 'Armamos tu página con tu marca, fotos, servicios, horarios y botón de WhatsApp.',
  },
  {
    title: 'Publicación',
    text: 'Dominio, Google Maps y código QR listos. Tu negocio ya se puede encontrar.',
  },
  {
    title: 'Crecimiento',
    text: 'Te acompañamos con ajustes y mejoras para que sigas recibiendo clientes.',
  },
] as const;

export const demos = [
  {
    name: 'Barbería',
    tag: 'Citas por WhatsApp',
    blurb: 'Servicios, precios y reserva en un toque. El QR en el espejo hace el resto.',
  },
  {
    name: 'Estética automotriz',
    tag: 'Cotización rápida',
    blurb: 'Antes y después, paquetes de detallado y ubicación para que te encuentren.',
  },
  {
    name: 'Repostería',
    tag: 'Pedidos por encargo',
    blurb: 'Catálogo visual, sabores y pedidos con anticipación directo a tu chat.',
  },
] as const;

export const plans = [
  {
    name: 'Presencia',
    price: '$390',
    note: 'Para empezar a aparecer',
    features: [
      'Página de una sección',
      'Botón de WhatsApp',
      'Ubicación en Google Maps',
      'Código QR',
    ],
    featured: false,
  },
  {
    name: 'Negocio Digital',
    price: '$690',
    note: 'El más elegido',
    features: [
      'Página completa de negocio',
      'WhatsApp con mensaje prellenado',
      'Horarios, servicios y galería',
      'Google Maps + QR imprimible',
      'Dominio incluido el primer año',
    ],
    featured: true,
  },
  {
    name: 'Crecimiento',
    price: '$1,190',
    note: 'Para vender más',
    features: [
      'Todo en Negocio Digital',
      'SEO local básico',
      'Analítica mensual',
      'Soporte prioritario',
    ],
    featured: false,
  },
] as const;

export const founders = {
  title: 'Clientes fundadores',
  text: 'Estamos abriendo con un grupo reducido de negocios. Precio especial, atención directa del equipo y tu caso como referencia.',
  perks: [
    'Precio de lanzamiento congelado',
    'Prioridad en tiempos de entrega',
    'Ajustes ilimitados el primer mes',
  ],
} as const;

export const niches = [
  'Barberías',
  'Estéticas automotrices',
  'Reposterías',
  'Salones de belleza',
  'Talleres',
  'Consultorios',
  'Tiendas locales',
  'Fotógrafos',
  'Entrenadores',
] as const;

export const faqs = [
  {
    q: '¿Cuánto tarda en estar lista mi página?',
    a: 'Normalmente entre 5 y 7 días hábiles desde que recibimos tu información y fotos.',
  },
  {
    q: '¿Necesito tener dominio o hosting?',
    a: 'No. Nosotros lo gestionamos y el primer año de dominio va incluido en el plan Negocio Digital.',
  },
  {
    q: '¿Puedo pedir cambios después?',
    a: 'Sí. Cada plan incluye una ronda de ajustes y puedes solicitar cambios puntuales cuando quieras.',
  },
  {
    q: '¿Cómo funciona el pago?',
    a: 'Un anticipo para arrancar y el resto al publicar. Sin mensualidades ocultas.',
  },
  {
    q: '¿Y si no tengo fotos ni logotipo?',
    a: 'Te ayudamos a armar lo esencial con lo que tengas. Podemos mejorarlo después.',
  },
] as const;
