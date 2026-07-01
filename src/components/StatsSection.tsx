"use client";
import { useEffect, useRef } from "react";

function useCountUp(target: number, duration = 2000) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 4);
            el.textContent = Math.floor(ease * target).toLocaleString();
            if (progress < 1) requestAnimationFrame(tick);
            else el.textContent = target.toLocaleString();
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return ref;
}

const STATS = [
  { value: 24, suffix: "–48h", label: "Physician Rx Turnaround", prefix: "" },
  { value: 503, suffix: "A", label: "US Compounding Standard", prefix: "" },
  { value: 50, suffix: " States", label: "Cold-Chain Coverage", prefix: "" },
  { value: 0.0001, suffix: "g", label: "Analytical Precision", prefix: "", fixed: true },
];

export function StatsSection() {
  const refs = [
    useCountUp(24),
    useCountUp(503),
    useCountUp(50),
  ];

  return (
    <section className="bg-[#080807] py-24 px-4 border-y border-[#1A1A18]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#1A1A18]">
          {STATS.map((stat, i) => (
            <div key={i} className="bg-[#080807] px-8 py-10 flex flex-col gap-2">
              <div className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none tracking-tight text-white">
                {stat.fixed ? (
                  <span>0.0001<span className="text-[#B8A44C]">{stat.suffix}</span></span>
                ) : (
                  <>
                    <span>{stat.prefix}</span>
                    <span ref={refs[i]}>0</span>
                    <span className="text-[#B8A44C]">{stat.suffix}</span>
                  </>
                )}
              </div>
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#4A4440]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

