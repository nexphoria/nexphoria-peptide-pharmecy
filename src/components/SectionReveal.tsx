"use client";

import { useEffect, useRef, ReactNode } from "react";

export default function SectionReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Add animation class after mount (content starts visible for SSR/SEO)
    el.classList.add("sr-animate");

    const reveal = () => {
      if (!el.classList.contains("is-visible")) {
        el.classList.add("is-visible");
      }
    };

    // Safety timeout: force-reveal after 1.5s in case observer never fires
    const safetyTimer = setTimeout(reveal, 1500);

    // If already in viewport, show immediately on next paint
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      requestAnimationFrame(reveal);
      return () => clearTimeout(safetyTimer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.unobserve(el);
        }
      },
      { threshold: 0.05, rootMargin: "100px" }
    );

    observer.observe(el);
    return () => {
      clearTimeout(safetyTimer);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className="section-reveal">
      {children}
    </div>
  );
}
