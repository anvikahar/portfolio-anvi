import { useEffect, useRef, useState, RefObject } from 'react';

export function useInView<T extends Element>(options?: IntersectionObserverInit): [RefObject<T>, boolean] {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const threshold = options?.threshold ?? 0.15;
  const rootMargin = options?.rootMargin;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref as RefObject<T>, isVisible];
}
