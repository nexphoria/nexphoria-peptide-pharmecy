"use client";

import { useMemo } from "react";

interface VialSVGProps {
  name: string;
  size: string;
  capColor: string;
  className?: string;
}

let _vialIdCounter = 0;

export default function VialSVG({ name, size, capColor, className = "" }: VialSVGProps) {
  // Generate unique IDs for gradients to avoid SVG ID collisions
  const uid = useMemo(() => {
    _vialIdCounter += 1;
    return `vial-${_vialIdCounter}-${Math.random().toString(36).slice(2, 7)}`;
  }, []);

  const glassGradient = `glass-${uid}`;
  const silverGradient = `silver-${uid}`;

  return (
    <svg
      viewBox="0 0 200 300"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: "block", width: "100%", height: "100%" }}
      aria-label={`${name} pharmaceutical vial`}
      role="img"
    >
      <defs>
        {/* Glass gradient - subtle blue-grey tint for clear glass */}
        <linearGradient id={glassGradient} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#c0d8e0" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#e0f0f8" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#c0d8e0" stopOpacity="0.1" />
        </linearGradient>

        {/* Silver aluminum crimp gradient */}
        <linearGradient id={silverGradient} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#a8a8a8" />
          <stop offset="50%" stopColor="#d8d8d8" />
          <stop offset="100%" stopColor="#a8a8a8" />
        </linearGradient>
      </defs>

      {/* Shadow at base */}
      <ellipse cx="100" cy="285" rx="45" ry="8" fill="black" opacity="0.12" />

      {/* Main glass vial body */}
      <rect
        x="60"
        y="80"
        width="80"
        height="190"
        rx="3"
        fill="rgba(245, 250, 252, 0.3)"
        stroke="rgba(140, 160, 180, 0.35)"
        strokeWidth="0.8"
      />

      {/* Glass tint overlay */}
      <rect
        x="60"
        y="80"
        width="80"
        height="190"
        rx="3"
        fill={`url(#${glassGradient})`}
      />

      {/* Vertical glass highlight */}
      <line
        x1="68"
        y1="85"
        x2="68"
        y2="265"
        stroke="rgba(255, 255, 255, 0.5)"
        strokeWidth="1.5"
      />

      {/* Lyophilized powder - white freeze-dried cake at bottom */}
      <ellipse cx="100" cy="255" rx="35" ry="5" fill="#f8f8f8" />
      <rect x="65" y="248" width="70" height="10" fill="#fafafa" />
      <ellipse cx="100" cy="248" rx="35" ry="5" fill="#ffffff" />

      {/* White label - center of vial */}
      <rect
        x="65"
        y="135"
        width="70"
        height="85"
        rx="2"
        fill="#ffffff"
        stroke="rgba(200, 200, 200, 0.5)"
        strokeWidth="0.5"
      />

      {/* NEXPHORIA brand name */}
      <text
        x="100"
        y="152"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="9"
        fontWeight="700"
        letterSpacing="2.5"
        fill="#1A1A1A"
      >
        NEXPHORIA
      </text>

      {/* Separator line */}
      <line
        x1="75"
        y1="160"
        x2="125"
        y2="160"
        stroke="rgba(180, 180, 180, 0.4)"
        strokeWidth="0.6"
      />

      {/* Product name - truncate if too long */}
      <text
        x="100"
        y="185"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="13"
        fontWeight="700"
        fill="#000000"
        letterSpacing="0.3"
      >
        {name.length > 12 ? name.substring(0, 12) + "..." : name}
      </text>

      {/* Size/dosage */}
      <text
        x="100"
        y="202"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="9"
        fill="#666666"
        letterSpacing="0.2"
      >
        {size}
      </text>

      {/* Research use disclaimer */}
      <text
        x="100"
        y="213"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="5"
        fill="#999999"
        letterSpacing="0.5"
      >
        FOR RESEARCH USE ONLY
      </text>

      {/* Narrow neck */}
      <rect
        x="72"
        y="60"
        width="56"
        height="22"
        rx="2"
        fill="rgba(245, 250, 252, 0.3)"
        stroke="rgba(140, 160, 180, 0.35)"
        strokeWidth="0.8"
      />
      <rect
        x="72"
        y="60"
        width="56"
        height="22"
        rx="2"
        fill={`url(#${glassGradient})`}
      />

      {/* Rubber stopper */}
      <rect
        x="68"
        y="48"
        width="64"
        height="14"
        rx="2"
        fill="#3A3A3A"
      />

      {/* Silver aluminum crimp collar */}
      <rect
        x="60"
        y="32"
        width="80"
        height="18"
        rx="3"
        fill={`url(#${silverGradient})`}
      />
      {/* Crimp texture lines */}
      <line x1="60" y1="38" x2="140" y2="38" stroke="rgba(80, 80, 80, 0.4)" strokeWidth="0.7" />
      <line x1="60" y1="43" x2="140" y2="43" stroke="rgba(80, 80, 80, 0.4)" strokeWidth="0.7" />

      {/* Colored flip-top cap */}
      <rect
        x="80"
        y="12"
        width="40"
        height="24"
        rx="12"
        fill={capColor}
      />
      {/* Cap highlight for dimension */}
      <ellipse
        cx="92"
        cy="18"
        rx="10"
        ry="4"
        fill="rgba(255, 255, 255, 0.35)"
      />
      {/* Cap outline */}
      <rect
        x="80"
        y="12"
        width="40"
        height="24"
        rx="12"
        fill="none"
        stroke="rgba(0, 0, 0, 0.15)"
        strokeWidth="0.7"
      />
    </svg>
  );
}
