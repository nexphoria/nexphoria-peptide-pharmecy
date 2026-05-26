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
}

type NameLayout = { lines: string[]; fontSize: number };

function getNameLayout(name: string): NameLayout {
  if (name.length <= 7) return { lines: [name], fontSize: 16 };
  if (name.length <= 10) return { lines: [name], fontSize: 13 };
  if (name.includes(" / ")) {
    const parts = name.split(" / ", 2);
    return { lines: parts, fontSize: 11 };
  }
  if (name.length <= 13) return { lines: [name], fontSize: 10 };
  const mid = Math.floor(name.length / 2);
  const spaceIdx = name.lastIndexOf(" ", mid + 4);
  const breakIdx = spaceIdx > 2 ? spaceIdx : mid;
  return {
    lines: [name.slice(0, breakIdx).trim(), name.slice(breakIdx).trim()],
    fontSize: 9,
  };
}

// Glass body path — straight sides with rounded bottom (pharmaceutical vial shape)
const GLASS_PATH = "M 32,84 L 148,84 L 148,316 Q 148,358 90,358 Q 32,358 32,316 Z";

export default function ProductVial({ productName, dosage, category, accentColor }: Props) {
  const capColor = accentColor ?? categoryAccentColors[category] ?? "#C9A24B";
  const sid = "v-" + productName.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const { lines, fontSize } = getNameLayout(productName);

  const nameLine1Y = lines.length > 1 ? 146 : 162;
  const nameLine2Y = nameLine1Y + fontSize + 3;
  const dosageY = (lines.length > 1 ? nameLine2Y : nameLine1Y) + fontSize + 11;
  const accentLineY = dosageY + 9;
  const lyoY = accentLineY + 14;
  const purY = lyoY + 12;

  return (
    <svg
      viewBox="0 0 180 380"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", width: "100%", height: "100%" }}
      aria-label={`${productName} pharmaceutical vial`}
      role="img"
    >
      <defs>
        {/* ── GLASS CYLINDER GRADIENTS ──
            Simulates a transparent glass cylinder lit from upper-left.
            The cylinder edge is dark (curves away from viewer),
            then a bright white specular strip ~15% in from left,
            transparent center (label visible), subtle right rim. */}

        {/* Primary glass tint — cylindrical edge-to-edge shading */}
        <linearGradient id={`${sid}-gh`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#1A4A5C" stopOpacity="0.62" />
          <stop offset="6%"   stopColor="#4A8FA8" stopOpacity="0.38" />
          <stop offset="14%"  stopColor="#96C8D8" stopOpacity="0.18" />
          <stop offset="26%"  stopColor="#D4EEF4" stopOpacity="0.07" />
          <stop offset="50%"  stopColor="#F0F9FA" stopOpacity="0.03" />
          <stop offset="74%"  stopColor="#C4E4EC" stopOpacity="0.08" />
          <stop offset="86%"  stopColor="#72A8BC" stopOpacity="0.20" />
          <stop offset="94%"  stopColor="#3A7890" stopOpacity="0.36" />
          <stop offset="100%" stopColor="#1A4A5C" stopOpacity="0.58" />
        </linearGradient>

        {/* Left specular highlight — PRIMARY glass reflection (bright white strip) */}
        <linearGradient id={`${sid}-gl`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="white" stopOpacity="0.00" />
          <stop offset="3%"   stopColor="white" stopOpacity="0.38" />
          <stop offset="8%"   stopColor="white" stopOpacity="0.82" />
          <stop offset="13%"  stopColor="white" stopOpacity="0.48" />
          <stop offset="20%"  stopColor="white" stopOpacity="0.12" />
          <stop offset="32%"  stopColor="white" stopOpacity="0.02" />
          <stop offset="100%" stopColor="white" stopOpacity="0.00" />
        </linearGradient>

        {/* Right edge shadow — cylindrical wrap-around */}
        <linearGradient id={`${sid}-gr`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="rgba(0,0,0,0.00)" />
          <stop offset="68%"  stopColor="rgba(0,0,0,0.00)" />
          <stop offset="84%"  stopColor="rgba(0,0,0,0.08)" />
          <stop offset="94%"  stopColor="rgba(0,0,0,0.20)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.30)" />
        </linearGradient>

        {/* Vertical ambient occlusion — slightly darker at base */}
        <linearGradient id={`${sid}-gv`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="rgba(0,0,0,0.00)" />
          <stop offset="70%"  stopColor="rgba(0,0,0,0.00)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.16)" />
        </linearGradient>

        {/* Metallic aluminum crimp cap */}
        <linearGradient id={`${sid}-crimp`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#606060" />
          <stop offset="8%"   stopColor="#A8A8A8" />
          <stop offset="22%"  stopColor="#D0D0D0" />
          <stop offset="42%"  stopColor="#EBEBEB" />
          <stop offset="58%"  stopColor="#F4F4F4" />
          <stop offset="76%"  stopColor="#C8C8C8" />
          <stop offset="90%"  stopColor="#9A9A9A" />
          <stop offset="100%" stopColor="#626262" />
        </linearGradient>

        {/* Rubber stopper — horizontal side shading */}
        <linearGradient id={`${sid}-stH`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#1A1A18" />
          <stop offset="28%"  stopColor="#363634" />
          <stop offset="60%"  stopColor="#464644" />
          <stop offset="100%" stopColor="#262624" />
        </linearGradient>

        {/* Rubber stopper — vertical convex top highlight */}
        <linearGradient id={`${sid}-stV`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.10)" />
          <stop offset="50%"  stopColor="rgba(255,255,255,0.00)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.14)" />
        </linearGradient>

        {/* Flip-top cap — radial gradient, lighter upper-left, darker edges */}
        <radialGradient id={`${sid}-capR`} cx="34%" cy="26%" r="60%">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.44)" />
          <stop offset="38%"  stopColor="rgba(255,255,255,0.05)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.28)" />
        </radialGradient>

        {/* Liquid fill — strongly visible colored liquid at bottom */}
        <linearGradient id={`${sid}-liq`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={capColor} stopOpacity="0.28" />
          <stop offset="100%" stopColor={capColor} stopOpacity="0.62" />
        </linearGradient>

        {/* Liquid glass overlay — horizontal gradient to maintain cylinder effect over liquid */}
        <linearGradient id={`${sid}-liqGlass`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="rgba(0,0,0,0.18)" />
          <stop offset="10%"  stopColor="rgba(0,0,0,0.06)" />
          <stop offset="50%"  stopColor="rgba(0,0,0,0.00)" />
          <stop offset="90%"  stopColor="rgba(0,0,0,0.06)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.22)" />
        </linearGradient>

        {/* Drop shadow ellipse */}
        <radialGradient id={`${sid}-shad`} cx="50%" cy="35%">
          <stop offset="0%"   stopColor="#000" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.00" />
        </radialGradient>

        {/* Label drop shadow filter */}
        <filter id={`${sid}-lsf`} x="-10%" y="-8%" width="120%" height="118%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="2.5" floodColor="#000" floodOpacity="0.12" />
        </filter>

        {/* Soft blur for specular glow */}
        <filter id={`${sid}-blur`} x="-20%" y="-5%" width="140%" height="110%">
          <feGaussianBlur stdDeviation="3" />
        </filter>

        {/* Clip path: liquid fill clipped to glass body shape */}
        <clipPath id={`${sid}-liqClip`}>
          <path d={GLASS_PATH} />
        </clipPath>

        {/* Clip path: glass body for highlights */}
        <clipPath id={`${sid}-glassClip`}>
          <path d={GLASS_PATH} />
        </clipPath>
      </defs>

      {/* ── Elliptical drop shadow below vial ── */}
      <ellipse cx="90" cy="372" rx="52" ry="10" fill={`url(#${sid}-shad)`} />

      {/* ── Glass body — base glass fill (slightly tinted, translucent) ── */}
      <path d={GLASS_PATH} fill="rgba(195,228,238,0.22)" />

      {/* ── Rubber stopper (inside glass neck, before glass overlays) ── */}
      <rect x="35" y="66" width="110" height="24" rx="3" fill={`url(#${sid}-stH)`} />
      <rect x="35" y="66" width="110" height="24" rx="3" fill={`url(#${sid}-stV)`} />

      {/* ── Liquid fill — bottom ~30% of glass, with visible color ── */}
      <g clipPath={`url(#${sid}-liqClip)`}>
        {/* Solid colored liquid */}
        <rect x="32" y="268" width="116" height="90" fill={`url(#${sid}-liq)`} />
        {/* Glass cylinder overlay on liquid (preserves 3D effect) */}
        <rect x="32" y="268" width="116" height="90" fill={`url(#${sid}-liqGlass)`} />
        {/* Meniscus — concave curved top of liquid, clearly visible */}
        <path
          d="M 32,268 Q 90,260 148,268"
          fill="none"
          stroke={capColor}
          strokeWidth="1.2"
          strokeOpacity="0.52"
        />
        {/* Meniscus soft highlight just above line */}
        <path
          d="M 36,267 Q 90,259 144,267"
          fill="none"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="0.8"
        />
      </g>

      {/* ── Label paper — white rect with subtle drop shadow ── */}
      <rect
        x="38" y="102" width="104" height="162"
        rx="2.5"
        fill="rgba(253,251,248,0.96)"
        stroke="rgba(200,196,190,0.8)"
        strokeWidth="0.75"
        filter={`url(#${sid}-lsf)`}
      />

      {/* NEXPHORIA — brand name on label */}
      <text
        x="90" y="116"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="7" fontWeight="700" letterSpacing="3.2" fill="#555"
      >
        NEXPHORIA
      </text>
      <line x1="44" y1="121" x2="136" y2="121" stroke="rgba(58,58,58,0.12)" strokeWidth="0.5" />

      {/* Product name — BOLD — line 1 */}
      <text
        x="90" y={nameLine1Y}
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize={fontSize} fontWeight="700" fill="#111" letterSpacing="0.4"
      >
        {lines[0]}
      </text>

      {/* Product name — line 2 (multi-line products) */}
      {lines.length > 1 && (
        <text
          x="90" y={nameLine2Y}
          textAnchor="middle"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize={fontSize} fontWeight="700" fill="#111" letterSpacing="0.4"
        >
          {lines[1]}
        </text>
      )}

      {/* Dosage — monospace */}
      <text
        x="90" y={dosageY}
        textAnchor="middle"
        fontFamily="'Courier New', Menlo, monospace"
        fontSize="8" fill="#777" letterSpacing="0.5"
      >
        {dosage}
      </text>

      {/* Category accent color bar */}
      <rect x="74" y={accentLineY} width="32" height="1.8" rx="0.9" fill={capColor} opacity="0.85" />

      {/* Lyophilized Powder */}
      <text
        x="90" y={lyoY}
        textAnchor="middle"
        fontFamily="'Courier New', Menlo, monospace"
        fontSize="5.2" fill="#7A7A6A" letterSpacing="0.3"
      >
        Lyophilized Powder
      </text>

      {/* Purity */}
      <text
        x="90" y={purY}
        textAnchor="middle"
        fontFamily="'Courier New', Menlo, monospace"
        fontSize="5.2" fill="#7A7A6A" letterSpacing="0.3"
      >
        ≥99% HPLC Purity
      </text>

      {/* Hairline divider before RUO */}
      <line x1="44" y1="246" x2="136" y2="246" stroke="rgba(58,58,58,0.09)" strokeWidth="0.5" />

      {/* FOR RESEARCH USE ONLY */}
      <text
        x="90" y="255"
        textAnchor="middle"
        fontFamily="'Courier New', Menlo, monospace"
        fontSize="4.8" fill="#bbb" letterSpacing="0.5"
      >
        FOR RESEARCH USE ONLY
      </text>

      {/* ── Acid-green accent line at bottom of label ── */}
      <rect x="38" y="263" width="104" height="2" fill="#c6f184" />

      {/* ── GLASS SURFACE OVERLAYS — drawn over label for realism ── */}

      {/* Soft glow behind specular (blurred white ellipse) */}
      <g clipPath={`url(#${sid}-glassClip)`}>
        <ellipse
          cx="50" cy="180"
          rx="14" ry="75"
          fill="rgba(255,255,255,0.18)"
          filter={`url(#${sid}-blur)`}
        />
      </g>

      {/* Primary glass tint gradient (cylindrical shading) */}
      <path d={GLASS_PATH} fill={`url(#${sid}-gh)`} />

      {/* Left specular highlight strip — bright white curve */}
      <path d={GLASS_PATH} fill={`url(#${sid}-gl)`} />

      {/* Right edge shadow */}
      <path d={GLASS_PATH} fill={`url(#${sid}-gr)`} />

      {/* Vertical ambient occlusion at base */}
      <path d={GLASS_PATH} fill={`url(#${sid}-gv)`} />

      {/* Narrow bright specular line on left (thin vertical glint) */}
      <g clipPath={`url(#${sid}-glassClip)`}>
        <line
          x1="43" y1="88" x2="43" y2="315"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="1.2"
          style={{ filter: "blur(0.8px)" }}
        />
        {/* Secondary faint right-edge glint */}
        <line
          x1="145" y1="90" x2="145" y2="310"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="1.2"
        />
      </g>

      {/* Glass body outline stroke */}
      <path d={GLASS_PATH} fill="none" stroke="rgba(120,170,188,0.70)" strokeWidth="0.85" />

      {/* ── Rubber stopper horizontal ridges (on top of glass overlays) ── */}
      <line x1="35" y1="76" x2="145" y2="76" stroke="rgba(0,0,0,0.28)" strokeWidth="1.2" />
      <line x1="35" y1="83" x2="145" y2="83" stroke="rgba(0,0,0,0.28)" strokeWidth="1.2" />
      {/* Stopper top highlight */}
      <line x1="36" y1="67" x2="144" y2="67" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />

      {/* ── Aluminum crimp cap ── */}
      <rect x="26" y="48" width="128" height="22" rx="4" fill={`url(#${sid}-crimp)`} />
      {/* Crimp horizontal ridges */}
      <line x1="26" y1="55" x2="154" y2="55" stroke="rgba(50,50,50,0.18)" strokeWidth="0.7" />
      <line x1="26" y1="61" x2="154" y2="61" stroke="rgba(50,50,50,0.18)" strokeWidth="0.7" />
      <line x1="26" y1="67" x2="154" y2="67" stroke="rgba(50,50,50,0.18)" strokeWidth="0.7" />
      {/* Crimp top highlight */}
      <rect x="26" y="48" width="128" height="3.5" rx="2" fill="rgba(255,255,255,0.42)" />
      {/* Rim lip at bottom edge of cap */}
      <rect x="24" y="68" width="132" height="5" rx="2" fill={`url(#${sid}-crimp)`} />
      <line x1="24" y1="73" x2="156" y2="73" stroke="rgba(60,60,60,0.16)" strokeWidth="0.5" />
      {/* Crimp side shadows */}
      <rect x="26" y="48" width="10" height="22" rx="4" fill="rgba(0,0,0,0.10)" />
      <rect x="144" y="48" width="10" height="22" rx="4" fill="rgba(0,0,0,0.10)" />
      {/* Bright specular spot on crimp cap */}
      <ellipse cx="74" cy="52" rx="14" ry="3.5" fill="rgba(255,255,255,0.32)" />

      {/* ── Flip-top colored cap ── */}
      <rect x="66" y="8" width="48" height="44" rx="17" fill={capColor} />
      {/* Radial gradient overlay — 3D dome effect */}
      <rect x="66" y="8" width="48" height="44" rx="17" fill={`url(#${sid}-capR)`} />
      {/* Cap outline */}
      <rect x="66" y="8" width="48" height="44" rx="17" fill="none"
        stroke="rgba(0,0,0,0.12)" strokeWidth="0.75" />
      {/* Specular highlight on cap */}
      <ellipse cx="78" cy="18" rx="9" ry="4.5" fill="rgba(255,255,255,0.26)" />
    </svg>
  );
}
