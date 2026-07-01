"use client";
import { useEffect, useRef } from "react";

const WORDS = ["Recovery", "Performance", "Clarity", "Longevity", "Glow", "Growth"];

export function TypewriterHeadline() {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    function tick() {
      const word = WORDS[wordIndex];
      const el = spanRef.current;
      if (!el) return;

      if (!deleting) {
        el.textContent = word.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === word.length) {
          deleting = true;
          timeout = setTimeout(tick, 1800);
          return;
        }
      } else {
        el.textContent = word.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % WORDS.length;
          timeout = setTimeout(tick, 300);
          return;
        }
      }
      timeout = setTimeout(tick, deleting ? 45 : 90);
    }

    timeout = setTimeout(tick, 800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[1.0] tracking-[-0.03em] text-white mb-6">
      Peptides, prescribed<br />
      <span className="text-white">for </span>
      <span ref={spanRef} className="text-[#B8A44C] italic" />
      <span className="inline-block w-[2px] h-[0.8em] bg-[#B8A44C] ml-1 align-middle animate-pulse" />
    </h1>
  );
}

