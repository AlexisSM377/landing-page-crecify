# Crecify — Landing page

Astro 7 + Tailwind CSS v4 + GSAP. Sitio estático, JS mínimo.

## Comandos

| Comando           | Acción                              |
| ----------------- | ----------------------------------- |
| `npm install`     | Instala dependencias                |
| `npm run dev`     | Servidor local en `localhost:4321`  |
| `npm run build`   | `astro check` + build de producción |
| `npm run preview` | Sirve el build local                |
| `npm run format`  | Prettier (Astro + orden de clases)  |

## Configuración

Copia `.env.example` a `.env` y completa:

- `PUBLIC_WHATSAPP_NUMBER`: formato internacional sin `+` (ej. `5215512345678`).
- `PUBLIC_BOOKING_URL`: enlace de agenda. Si falta, el botón abre WhatsApp.

Contenido (planes, FAQ, pasos, demos) en `src/data/content.ts`. Marca y enlaces en `src/config/site.ts`.
Tokens de diseño en `src/styles/global.css` (`@theme`).
