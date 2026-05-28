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
  size?: "normal" | "thumbnail";
}

type NameLayout = { lines: string[]; fontSize: number };

function getNameLayout(name: string): NameLayout {
  if (name.length <= 7) return { lines: [name], fontSize: 11 };
  if (name.length <= 10) return { lines: [name], fontSize: 9.5 };
  if (name.includes(" / ")) {
    const parts = name.split(" / ", 2);
    return { lines: parts, fontSize: 8 };
  }
  if (name.length <= 13) return { lines: [name], fontSize: 8.5 };
  const mid = Math.floor(name.length / 2);
  const spaceIdx = name.lastIndexOf(" ", mid + 4);
  const breakIdx = spaceIdx > 2 ? spaceIdx : mid;
  return {
    lines: [name.slice(0, breakIdx).trim(), name.slice(breakIdx).trim()],
    fontSize: 7.5,
  };
}

export default function ProductVial({ productName, dosage, category, accentColor, size = "normal" }: Props) {
  const capColor = accentColor ?? categoryAccentColors[category] ?? "#C9A24B";
  const sid = "v-" + productName.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const { lines, fontSize } = getNameLayout(productName);

  // Scale for thumbnail view
  const scale = size === "thumbnail" ? 0.5 : 1;
  const viewBoxWidth = 180;
  const viewBoxHeight = 380;

  // Label positioning
  const labelTop = 130;
  const labelHeight = 90;
  const nameLine1Y = lines.length > 1 ? labelTop + 24 : labelTop + 32;
  const nameLine2Y = nameLine1Y + fontSize + 2;
  const dosageY = (lines.length > 1 ? nameLine2Y : nameLine1Y) + fontSize + 8;
  const ruoY = labelTop + labelHeight - 8;

  return (
    <svg
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        maxWidth: size === "thumbnail" ? "90px" : "180px"
      }}
      aria-label={`${productName} pharmaceutical vial`}
      role="img"
    >
      <defs>
        {/* Glass gradient - subtle blue-green tint */}
        <linearGradient id={`${sid}-glass`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#b8dfe0" stopOpacity="0.15" />
          <stop offset="15%" stopColor="#d5f0f0" stopOpacity="0.08" />
          <stop offset="50%" stopColor="#e8f8f8" stopOpacity="0.03" />
          <stop offset="85%" stopColor="#d0e8e8" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#a8d8d8" stopOpacity="0.15" />
        </linearGradient>

        {/* Glass specular highlight */}
        <linearGradient id={`${sid}-spec`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="12%" stopColor="white" stopOpacity="0.5" />
          <stop offset="18%" stopColor="white" stopOpacity="0" />
        </linearGradient>

        {/* Aluminum crimp cap */}
        <linearGradient id={`${sid}-crimp`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9a9a9a" />
          <stop offset="40%" stopColor="#d8d8d8" />
          <stop offset="60%" stopColor="#f0f0f0" />
          <stop offset="100%" stopColor="#a8a8a8" />
        </linearGradient>

        {/* Flip-top cap gradient */}
        <radialGradient id={`${sid}-cap`} cx="40%" cy="30%">
          <stop offset="0%" stopColor="white" stopOpacity="0.3" />
          <stop offset="60%" stopColor={capColor} stopOpacity="0" />
          <stop offset="100%" stopColor="black" stopOpacity="0.2" />
        </radialGradient>

        {/* Shadow */}
        <radialGradient id={`${sid}-shadow`}>
          <stop offset="0%" stopColor="black" stopOpacity="0.25" />
          <stop offset="100%" stopColor="black" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="90" cy="370" rx="40" ry="8" fill={`url(#${sid}-shadow)`} />

      {/* Main glass vial body - simple cylinder */}
      <rect
        x="45"
        y="80"
        width="90"
        height="260"
        rx="3"
        fill="rgba(220, 240, 242, 0.15)"
        stroke="rgba(140, 180, 185, 0.4)"
        strokeWidth="0.5"
      />

      {/* Glass gradient overlay */}
      <rect x="45" y="80" width="90" height="260" rx="3" fill={`url(#${sid}-glass)`} />

      {/* Glass specular highlight */}
      <rect x="45" y="80" width="90" height="260" rx="3" fill={`url(#${sid}-spec)`} />

      {/* Lyophilized powder at bottom - white cake */}
      <ellipse cx="90" cy="330" rx="38" ry="6" fill="#f8f8f8" opacity="0.95" />
      <ellipse cx="90" cy="328" rx="35" ry="5" fill="#ffffff" opacity="0.9" />
      <rect x="55" y="320" width="70" height="10" fill="#fafafa" opacity="0.85" />

      {/* White label - wrapped around middle, not full width */}
      <rect
        x="50"
        y={labelTop}
        width="80"
        height={labelHeight}
        rx="1.5"
        fill="#ffffff"
        stroke="rgba(180, 180, 180, 0.3)"
        strokeWidth="0.5"
      />

      {/* NEXPHORIA wordmark at top of label - small and elegant */}
      <text
        x="90"
        y={labelTop + 12}
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="5.5"
        fontWeight="600"
        letterSpacing="1.8"
        fill="#666"
      >
        NEXPHORIA
      </text>

      {/* Separator line */}
      <line
        x1="58"
        y1={labelTop + 16}
        x2="122"
        y2={labelTop + 16}
        stroke="rgba(150, 150, 150, 0.2)"
        strokeWidth="0.4"
      />

      {/* Product name - BOLD - line 1 */}
      <text
        x="90"
        y={nameLine1Y}
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize={fontSize}
        fontWeight="700"
        fill="#111"
        letterSpacing="0.2"
      >
        {lines[0]}
      </text>

      {/* Product name - line 2 (if multi-line) */}
      {lines.length > 1 && (
        <text
          x="90"
          y={nameLine2Y}
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontSize={fontSize}
          fontWeight="700"
          fill="#111"
          letterSpacing="0.2"
        >
          {lines[1]}
        </text>
      )}

      {/* Dosage */}
      <text
        x="90"
        y={dosageY}
        textAnchor="middle"
        fontFamily="'Courier New', monospace"
        fontSize="7"
        fill="#555"
        letterSpacing="0.3"
      >
        {dosage}
      </text>

      {/* Thin colored accent line */}
      <rect x="70" y={dosageY + 4} width="40" height="1.5" rx="0.75" fill={capColor} opacity="0.8" />

      {/* FOR RESEARCH USE ONLY - tiny at bottom */}
      <text
        x="90"
        y={ruoY}
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize="4"
        fill="#999"
        letterSpacing="0.4"
      >
        FOR RESEARCH USE ONLY
      </text>

      {/* Rubber stopper (gray) */}
      <rect x="48" y="68" width="84" height="14" rx="2" fill="#3a3a3a" opacity="0.85" />
      <line x1="48" y1="75" x2="132" y2="75" stroke="rgba(0,0,0,0.3)" strokeWidth="0.8" />

      {/* Aluminum crimp cap - silver */}
      <rect x="40" y="50" width="100" height="20" rx="3" fill={`url(#${sid}-crimp)`} />
      {/* Crimp ridges */}
      <line x1="40" y1="58" x2="140" y2="58" stroke="rgba(80,80,80,0.3)" strokeWidth="0.6" />
      <line x1="40" y1="64" x2="140" y2="64" stroke="rgba(80,80,80,0.3)" strokeWidth="0.6" />
      {/* Top highlight on crimp */}
      <rect x="40" y="50" width="100" height="3" rx="1.5" fill="rgba(255,255,255,0.5)" />

      {/* Colored flip-top cap */}
      <rect x="70" y="15" width="40" height="38" rx="15" fill={capColor} />
      {/* Cap gradient for 3D effect */}
      <rect x="70" y="15" width="40" height="38" rx="15" fill={`url(#${sid}-cap)`} />
      {/* Cap outline */}
      <rect
        x="70"
        y="15"
        width="40"
        height="38"
        rx="15"
        fill="none"
        stroke="rgba(0,0,0,0.15)"
        strokeWidth="0.6"
      />
      {/* Highlight on cap */}
      <ellipse cx="82" cy="24" rx="8" ry="4" fill="rgba(255,255,255,0.3)" />

      {/* Final glass shine - thin vertical highlight */}
      <line
        x1="52"
        y1="85"
        x2="52"
        y2="335"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="1.2"
      />
    </svg>
  );
}
