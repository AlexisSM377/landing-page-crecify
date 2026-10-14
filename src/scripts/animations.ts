import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function init() {
  if (reduceMotion.matches) return;

  gsap.from('[data-hero]', {
    opacity: 0,
    y: 36,
    duration: 0.9,
    ease: 'power3.out',
    stagger: 0.12,
  });

  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 88%',
    once: true,
    onEnter: (els) =>
      gsap.to(els, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
        overwrite: true,
      }),
  });
}

try {
  init();
} catch (error) {
  // Si la animación falla, el contenido debe seguir siendo visible.
  console.error(error);
  document.documentElement.classList.remove('js');
}
