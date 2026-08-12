import { useEffect, useRef } from 'react';

export function useScrollReveal(options = {}) {
  const threshold = options.threshold ?? 0.1;
  const rootMargin = options.rootMargin ?? '0px 0px -50px 0px';
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeSlideUp 0.8s ease-out forwards';
        observer.unobserve(entry.target);
      }
    }, { threshold, rootMargin });

    const element = ref.current;

    if (element) {
      // Inicia oculto para que la animación lo muestre
      element.style.opacity = '0';
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin]);

  return ref;
}
