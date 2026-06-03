import { useEffect } from 'react';

/**
 * useScrollReveal
 * Attaches an IntersectionObserver to all elements with a `reveal-*` class
 * inside the given `containerRef`. Once an element enters the viewport,
 * the `is-visible` class is added and the CSS transition fires.
 *
 * @param {React.RefObject} containerRef - ref to the section wrapper element
 * @param {object} options - IntersectionObserver options
 */
export default function useScrollReveal(containerRef, options = {}) {
  useEffect(() => {
    const container = containerRef?.current;
    if (!container) return;

    const targets = container.querySelectorAll(
      '.reveal-up, .reveal-down, .reveal-left, .reveal-right, .reveal-zoom, .reveal-fade'
    );

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add is-visible to the container itself and all its reveal elements
            container.classList.add('is-visible');
            targets.forEach((el) => el.classList.add('is-visible'));
            observer.unobserve(container); // Stop observing after it fires once
          }
        });
      },
      {
        threshold: 0.05, // Trigger as soon as 5% of the section enters the viewport
        rootMargin: '0px 0px -40px 0px', // Responsive margin
        ...options,
      }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [containerRef]);
}
