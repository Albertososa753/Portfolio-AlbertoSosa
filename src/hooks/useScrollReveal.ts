"use client";

import { useEffect, useRef } from "react";

/**
 * Observa los elementos `.animate-on-scroll` dentro del contenedor referenciado
 * y les añade la clase `.animate-in` cuando entran en viewport.
 *
 * Centraliza el patrón de IntersectionObserver usado en varias secciones,
 * evitando duplicar la lógica de revelado al hacer scroll.
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  threshold = 0.1,
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold },
    );

    node.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
