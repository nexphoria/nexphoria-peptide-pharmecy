"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function HeroParallaxImage() {
  const outerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    if (!outer) return;
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (outer) {
            const scrollY = window.scrollY;
            outer.style.transform = `translateY(calc(-50% + ${scrollY * 0.14}px))`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={outerRef}
      style={{
        position: "absolute",
        right: "-2%",
        top: "50%",
        transform: "translateY(-50%)",
        width: "72vw",
        maxWidth: "1100px",
        zIndex: 2,
        filter: "drop-shadow(0 32px 64px rgba(0,0,0,0.10))",
        willChange: "transform",
      }}
    >
      {/* Entrance animation layer */}
      <div className="hero-image-animate">
        {/* Scale-breathe layer */}
        <div className="hero-scale-breathe">
          <Image
            src="/brand/packaging-unboxing.png"
            alt="Nexphoria premium peptide presentation — vials, Certificate of Analysis, and cold-chain pack"
            width={1400}
            height={1400}
            className="w-full h-auto"
            priority
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
