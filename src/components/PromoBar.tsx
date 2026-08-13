"use client";

import { useState } from "react";

/**
 * PromoBar — dismissible announcement strip at the top of the homepage.
 *
 * Lives in its own Client Component because the dismiss control needs an
 * onClick handler, and src/app/page.tsx is a Server Component that exports
 * metadata. Event handlers cannot cross that boundary.
 */
export default function PromoBar() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div
      id="promo-bar"
      style={{ backgroundColor: "#0F0F0E", position: "relative", zIndex: 50 }}
      className="w-full py-2.5 px-4"
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-center gap-2 relative">
        <p className="text-white text-xs sm:text-sm text-center leading-snug" style={{ fontFamily: "var(--font-inter, sans-serif)" }}>
          Free Foundation bloodwork panel with every protocol.&nbsp;·&nbsp;Board-certified MDs&nbsp;·&nbsp;503A compounded&nbsp;
          <a href="/quiz" style={{ color: "#B8A44C", fontWeight: 600, textDecoration: "none" }}>
            Start now →
          </a>
        </p>
        <button
          aria-label="Dismiss promotion"
          style={{
            position: "absolute", right: 0,
            background: "none", border: "none",
            color: "rgba(255,255,255,0.5)",
            fontSize: "1.1rem", lineHeight: 1,
            cursor: "pointer", padding: "2px 6px",
          }}
          onClick={() => setDismissed(true)}
        >
          ×
        </button>
      </div>
    </div>
  );
}
