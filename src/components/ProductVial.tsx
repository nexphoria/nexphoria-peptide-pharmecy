"use client";

export const categoryAccentColors: Record<string, string> = {
  "Recovery & Healing": "#4A9B8E",
  "Tissue Repair": "#4A9B8E",
  "Growth Hormone": "#C9A24B",
  "Anti-Aging": "#8B5CF6",
  "Cognitive": "#3B82F6",
  "Weight Management": "#EF4444",
  "Wellness": "#22C55E",
};

interface Props {
  productName: string;
  dosage: string;
  category: string;
  accentColor?: string;
  size?: "default" | "thumbnail";
}

export default function ProductVial({ productName, dosage, category, accentColor, size = "default" }: Props) {
  const capColor = accentColor ?? categoryAccentColors[category] ?? "#A4B08A";

  return (
    <svg
      viewBox="0 0 120 300"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", width: "100%", height: "100%" }}
      aria-label={`${productName} pharmaceutical vial`}
      role="img"
    >
      <defs>
        {/* Simple glass with subtle blue-grey tint */}
        <linearGradient id="glass-tint" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#b8d0d8" stopOpacity="0.08" />
          <stop offset="50%" stopColor="#d8e8f0" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#b0c8d0" stopOpacity="0.08" />
        </linearGradient>

        {/* Aluminum crimp gradient */}
        <linearGradient id="aluminum" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#a0a0a0" />
          <stop offset="50%" stopColor="#d8d8d8" />
          <stop offset="100%" stopColor="#a8a8a8" />
        </linearGradient>
      </defs>

      {/* Shadow at base */}
      <ellipse cx="60" cy="290" rx="28" ry="6" fill="black" opacity="0.15" />

      {/* Main glass vial body - clear cylinder */}
      <rect
        x="35"
        y="60"
        width="50"
        height="210"
        rx="2"
        fill="rgba(240, 248, 252, 0.25)"
        stroke="rgba(140, 160, 180, 0.3)"
        strokeWidth="0.5"
      />

      {/* Glass tint overlay */}
      <rect
        x="35"
        y="60"
        width="50"
        height="210"
        rx="2"
        fill="url(#glass-tint)"
      />

      {/* Subtle vertical highlight on glass */}
      <line
        x1="40"
        y1="65"
        x2="40"
        y2="265"
        stroke="rgba(255, 255, 255, 0.4)"
        strokeWidth="1"
      />

      {/* Lyophilized powder at bottom - white cake */}
      <ellipse cx="60" cy="260" rx="22" ry="4" fill="#f5f5f5" />
      <rect x="38" y="255" width="44" height="8" fill="#fafafa" />
      <ellipse cx="60" cy="255" rx="22" ry="4" fill="#ffffff" />

      {/* White label - wrapped around middle third */}
      <rect
        x="38"
        y="115"
        width="44"
        height="80"
        rx="1"
        fill="#ffffff"
        stroke="rgba(200, 200, 200, 0.4)"
        strokeWidth="0.4"
      />

      {/* NEXPHORIA wordmark */}
      <text
        x="60"
        y="130"
        textAnchor="middle"
        fontFamily="system-ui, sans-serif"
        fontSize="5"
        fontWeight="600"
        letterSpacing="1.5"
        fill="#333"
      >
        NEXPHORIA
      </text>

      {/* Separator line */}
      <line
        x1="43"
        y1="134"
        x2="77"
        y2="134"
        stroke="rgba(180, 180, 180, 0.3)"
        strokeWidth="0.4"
      />

      {/* Product name - large bold */}
      <text
        x="60"
        y="152"
        textAnchor="middle"
        fontFamily="system-ui, sans-serif"
        fontSize="10"
        fontWeight="700"
        fill="#000"
        letterSpacing="0.2"
      >
        {productName}
      </text>

      {/* Dosage - medium grey */}
      <text
        x="60"
        y="166"
        textAnchor="middle"
        fontFamily="system-ui, sans-serif"
        fontSize="7"
        fill="#666"
      >
        {dosage}
      </text>

      {/* Colored accent line */}
      <rect
        x="45"
        y="171"
        width="30"
        height="1.5"
        rx="0.75"
        fill={capColor}
        opacity="0.8"
      />

      {/* For Research Use Only - small light grey */}
      <text
        x="60"
        y="187"
        textAnchor="middle"
        fontFamily="system-ui, sans-serif"
        fontSize="3.5"
        fill="#999"
        letterSpacing="0.3"
      >
        FOR RESEARCH USE ONLY
      </text>

      {/* Narrow neck */}
      <rect
        x="42"
        y="45"
        width="36"
        height="17"
        rx="1"
        fill="rgba(240, 248, 252, 0.25)"
        stroke="rgba(140, 160, 180, 0.3)"
        strokeWidth="0.5"
      />
      <rect
        x="42"
        y="45"
        width="36"
        height="17"
        rx="1"
        fill="url(#glass-tint)"
      />

      {/* Rubber stopper */}
      <rect
        x="40"
        y="35"
        width="40"
        height="12"
        rx="1.5"
        fill="#3a3a3a"
      />

      {/* Aluminum crimp cap - silver */}
      <rect
        x="35"
        y="22"
        width="50"
        height="15"
        rx="2"
        fill="url(#aluminum)"
      />
      {/* Crimp texture lines */}
      <line x1="35" y1="28" x2="85" y2="28" stroke="rgba(80, 80, 80, 0.3)" strokeWidth="0.5" />
      <line x1="35" y1="32" x2="85" y2="32" stroke="rgba(80, 80, 80, 0.3)" strokeWidth="0.5" />

      {/* Colored flip-top cap */}
      <rect
        x="48"
        y="8"
        width="24"
        height="18"
        rx="10"
        fill={capColor}
      />
      {/* Cap highlight for dimension */}
      <ellipse
        cx="56"
        cy="13"
        rx="6"
        ry="3"
        fill="rgba(255, 255, 255, 0.3)"
      />
      {/* Cap outline */}
      <rect
        x="48"
        y="8"
        width="24"
        height="18"
        rx="10"
        fill="none"
        stroke="rgba(0, 0, 0, 0.15)"
        strokeWidth="0.5"
      />
    </svg>
  );
}
