/**
 * RUOBanner — site-wide "For Research Use Only" disclaimer.
 *
 * Variants:
 *  - "band": slim full-width band intended for layout-level placement above the footer.
 *  - "card": bordered card for inline use on landing / purchase / about pages.
 *  - "inline": single compact line for tools, calculators, or product cards.
 *
 * This component is intentionally framework-light (no client hooks) so it can be
 * dropped into any server or client tree without bundle impact.
 */
import React from "react";

export type RUOBannerVariant = "band" | "card" | "inline";

interface RUOBannerProps {
  variant?: RUOBannerVariant;
  className?: string;
  tone?: "light" | "dark";
}

const COPY_PRIMARY =
  "For Research Use Only (RUO) — Not for human consumption, clinical use, diagnostic use, or veterinary applications.";

const COPY_SECONDARY =
  "All Nexphoria compounds are sold strictly for in vitro and preclinical laboratory research by qualified researchers. By accessing this site you confirm exclusive use for research and laboratory experimentation in accordance with all applicable institutional, federal, and local regulations.";

export default function RUOBanner({
  variant = "band",
  className = "",
  tone = "light",
}: RUOBannerProps) {
  if (variant === "inline") {
    return (
      <p
        role="note"
        aria-label="Research Use Only disclaimer"
        className={`text-[11px] tracking-widest uppercase ${className}`}
        style={{
          color: tone === "dark" ? "rgba(255,255,255,0.5)" : "#6B6B60",
          letterSpacing: "0.14em",
        }}
      >
        <strong>RUO</strong> · {COPY_PRIMARY}
      </p>
    );
  }

  if (variant === "card") {
    const isDark = tone === "dark";
    return (
      <aside
        role="note"
        aria-label="Research Use Only disclaimer"
        className={`w-full ${className}`}
        style={{
          backgroundColor: isDark ? "rgba(255,255,255,0.04)" : "#F5F3EE",
          border: `1px solid ${isDark ? "rgba(255,255,255,0.10)" : "#E8E5DF"}`,
          padding: "1.25rem 1.5rem",
          borderRadius: "2px",
          color: isDark ? "rgba(255,255,255,0.7)" : "#3D3D38",
        }}
      >
        <p
          className="text-[10px] uppercase mb-2"
          style={{
            letterSpacing: "0.22em",
            color: isDark ? "rgba(255,255,255,0.45)" : "#B8A44C",
            fontWeight: 600,
          }}
        >
          For Research Use Only
        </p>
        <p
          className="text-xs leading-relaxed"
          style={{
            color: isDark ? "rgba(255,255,255,0.62)" : "#5A5A52",
            lineHeight: 1.7,
          }}
        >
          {COPY_PRIMARY} {COPY_SECONDARY}
        </p>
      </aside>
    );
  }

  // band (default) — slim, site-wide above-the-footer
  return (
    <div
      role="note"
      aria-label="Research Use Only disclaimer"
      className={`w-full text-center ${className}`}
      style={{
        backgroundColor: "#1A1A1A",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "0.875rem 1rem",
      }}
    >
      <p
        className="text-[10px] uppercase mx-auto"
        style={{
          color: "rgba(255,255,255,0.55)",
          letterSpacing: "0.18em",
          maxWidth: "78ch",
          lineHeight: 1.7,
          fontWeight: 500,
        }}
      >
        <span style={{ color: "#B8A44C", marginRight: "0.5rem" }}>RUO</span>
        {COPY_PRIMARY}
      </p>
    </div>
  );
}
