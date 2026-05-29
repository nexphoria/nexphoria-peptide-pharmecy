"use client";

import { useEffect, useRef, ReactNode } from "react";

export default function SectionReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Add animation class after mount (content starts visible for SSR/SEO)
    el.classList.add("sr-animate");

    // If already in viewport, show immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      requestAnimationFrame(() => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="section-reveal">
      {children}
    </div>
  );
}
