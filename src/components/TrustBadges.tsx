import type { SVGProps } from "react";

type BadgeVariant = "light" | "dark" | "gold";

interface TrustBadgesProps {
  variant?: BadgeVariant;
  className?: string;
  /** Show larger, more detailed badges */
  size?: "sm" | "md";
}

const badges = [
  {
    icon: (props: SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M10 2L12.5 7.5H18L13.5 11.5L15.5 17L10 13.5L4.5 17L6.5 11.5L2 7.5H7.5L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    label: "≥99% HPLC Purity",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M10 2L17 5V10C17 14 13.5 17.5 10 18.5C6.5 17.5 3 14 3 10V5L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M7 10L9 12L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "cGMP Manufactured",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect x="3" y="6" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 6V5C7 3.9 7.9 3 9 3H11C12.1 3 13 3.9 13 5V6" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 10V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="10" cy="9.5" r="0.75" fill="currentColor"/>
      </svg>
    ),
    label: "Third-Party Tested",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M3 7L10 3L17 7V13L10 17L3 13V7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M10 3V17" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/>
        <path d="M3 7L17 7" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/>
        <path d="M3 13L17 13" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2"/>
      </svg>
    ),
    label: "Cold-Chain Shipped",
  },
  {
    icon: (props: SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 6V10.5L13 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "COA With Every Order",
  },
];

const variantStyles: Record<BadgeVariant, { wrapper: string; icon: string; text: string; border: string }> = {
  light: {
    wrapper: "bg-white/80 border-black/8",
    icon: "#8E6C2F",
    text: "#1A1A1A",
    border: "border",
  },
  dark: {
    wrapper: "bg-white/[0.06] border-white/[0.12]",
    icon: "#B8A44C",
    text: "rgba(255,255,255,0.75)",
    border: "border",
  },
  gold: {
    wrapper: "bg-[#B8A44C]/10 border-[#B8A44C]/30",
    icon: "#B8A44C",
    text: "#1A1A1A",
    border: "border",
  },
};

export default function TrustBadges({ variant = "light", className = "", size = "sm" }: TrustBadgesProps) {
  const styles = variantStyles[variant];
  const iconSize = size === "md" ? "w-5 h-5" : "w-4 h-4";
  const textSize = size === "md" ? "text-xs" : "text-[11px]";
  const padding = size === "md" ? "px-4 py-2.5" : "px-3 py-2";

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`} role="list" aria-label="Quality assurance badges">
      {badges.map((badge) => (
        <div
          key={badge.label}
          className={`inline-flex items-center gap-2 rounded-full ${padding} ${styles.border} ${styles.wrapper}`}
          role="listitem"
        >
          <badge.icon
            className={iconSize}
            style={{ color: styles.icon }}
            aria-hidden="true"
          />
          <span
            className={`${textSize} font-medium whitespace-nowrap`}
            style={{ color: styles.text }}
          >
            {badge.label}
          </span>
        </div>
      ))}
    </div>
  );
}
