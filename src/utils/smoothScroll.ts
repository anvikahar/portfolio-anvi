export function scrollToSection(sectionId: string, offset = 80) {
  const el = document.getElementById(sectionId);
  if (!el) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: Math.max(0, top),
    behavior: prefersReduced ? 'auto' : 'smooth',
  });
}

/** Lerp helper for scroll-driven animations */
export function lerp(current: number, target: number, factor: number) {
  return current + (target - current) * factor;
}
