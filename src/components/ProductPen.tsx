"use client";

interface Props {
  productName: string;
  dosage: string;
}

export default function ProductPen({ productName, dosage }: Props) {
  const sid = "p-" + productName.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const shortName = productName.length > 14
    ? productName.replace(" / ", "/").replace(/-/g, "-")
    : productName;

  return (
    <svg
      viewBox="0 0 500 140"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", width: "100%", height: "100%" }}
      aria-label={`${productName} injection pen`}
      role="img"
    >
      <defs>
        {/* ── MAIN BODY — top-lit 3D metallic cylinder ──
            Strong top-to-bottom gradient: bright highlight at top
            (light catches the curved upper face), then darkens steeply.
            Left/right edges darker to reinforce cylindrical depth. */}
        <linearGradient id={`${sid}-body`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#5A5A58" />
          <stop offset="5%"   stopColor="#484846" />
          <stop offset="18%"  stopColor="#323230" />
          <stop offset="42%"  stopColor="#242422" />
          <stop offset="72%"  stopColor="#1A1A18" />
          <stop offset="100%" stopColor="#111110" />
        </linearGradient>

        {/* Body left-right cylindrical shading — darker at edges */}
        <linearGradient id={`${sid}-bodySide`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.00)" />
          <stop offset="8%"   stopColor="rgba(255,255,255,0.11)" />
          <stop offset="22%"  stopColor="rgba(255,255,255,0.04)" />
          <stop offset="55%"  stopColor="rgba(255,255,255,0.00)" />
          <stop offset="88%"  stopColor="rgba(0,0,0,0.12)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.24)" />
        </linearGradient>

        {/* Click button end gradient */}
        <linearGradient id={`${sid}-btn`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#464644" />
          <stop offset="30%"  stopColor="#2E2E2C" />
          <stop offset="70%"  stopColor="#1E1E1C" />
          <stop offset="100%" stopColor="#101010" />
        </linearGradient>

        {/* Needle cap — darker than body, tapers to tip */}
        <linearGradient id={`${sid}-needle`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="#2A2A28" />
          <stop offset="35%"  stopColor="#1C1C1A" />
          <stop offset="100%" stopColor="#0A0A08" />
        </linearGradient>

        {/* Needle cap vertical shading */}
        <linearGradient id={`${sid}-needleV`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.08)" />
          <stop offset="30%"  stopColor="rgba(255,255,255,0.02)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.16)" />
        </linearGradient>

        {/* Dose window — deep inset dark glass */}
        <linearGradient id={`${sid}-win`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#1E1E1C" />
          <stop offset="45%"  stopColor="#2A2A28" />
          <stop offset="100%" stopColor="#303030" />
        </linearGradient>

        {/* Dose window inset shadow top (strong depth effect) */}
        <linearGradient id={`${sid}-winShad`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="rgba(0,0,0,0.48)" />
          <stop offset="50%"  stopColor="rgba(0,0,0,0.00)" />
        </linearGradient>

        {/* Dose window left inset shadow */}
        <linearGradient id={`${sid}-winShadL`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="rgba(0,0,0,0.36)" />
          <stop offset="30%"  stopColor="rgba(0,0,0,0.00)" />
        </linearGradient>

        {/* Acid-green stripe — top highlight, strong sheen */}
        <linearGradient id={`${sid}-stripe`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#E8FF9E" />
          <stop offset="28%"  stopColor="#c6f184" />
          <stop offset="72%"  stopColor="#9ED84A" />
          <stop offset="100%" stopColor="#80B830" />
        </linearGradient>

        {/* Drop shadow */}
        <radialGradient id={`${sid}-shadow`} cx="50%" cy="20%">
          <stop offset="0%"   stopColor="#000" stopOpacity="0.38" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.00" />
        </radialGradient>

        {/* Knurled grip texture — fine parallel rings */}
        <pattern id={`${sid}-knurl`} x="0" y="0" width="1" height="4" patternUnits="userSpaceOnUse">
          <rect x="0" y="0" width="1" height="2" fill="rgba(255,255,255,0.000)" />
          <rect x="0" y="1.5" width="1" height="0.8" fill="rgba(255,255,255,0.028)" />
        </pattern>

        {/* Horizontal machined lines — fine metallic surface detail */}
        <pattern id={`${sid}-lines`} x="0" y="0" width="1" height="3.5" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="500" y2="0" stroke="rgba(255,255,255,0.015)" strokeWidth="0.5" />
        </pattern>
      </defs>

      {/* ── Long horizontal drop shadow ── */}
      <ellipse cx="256" cy="133" rx="226" ry="7" fill={`url(#${sid}-shadow)`} />

      {/* ── Click button — raised cylinder cap on back end ── */}
      <rect x="8" y="30" width="52" height="80" rx="10" fill={`url(#${sid}-btn)`} />
      {/* Button face highlight (top) */}
      <rect x="8" y="30" width="52" height="5" rx="5" fill="rgba(255,255,255,0.09)" />
      {/* Button bottom shadow */}
      <rect x="8" y="105" width="52" height="5" rx="5" fill="rgba(0,0,0,0.22)" />
      {/* Concentric grip rings */}
      <circle cx="34" cy="70" r="18" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1.5" />
      <circle cx="34" cy="70" r="13" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1.2" />
      <circle cx="34" cy="70" r="8.5" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.0" />
      <circle cx="34" cy="70" r="4.5" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1.0" />
      <circle cx="34" cy="70" r="1.8" fill="rgba(255,255,255,0.14)" />
      {/* Brand accent line on button */}
      <rect x="26" y="90" width="16" height="1.8" rx="0.9" fill="#c6f184" opacity="0.60" />
      {/* Button edge highlight (left highlight for 3D cylinder) */}
      <rect x="8" y="30" width="8" height="80" rx="10" fill="rgba(255,255,255,0.04)" />

      {/* ── Connector ring (button → body junction) ── */}
      <rect x="57" y="34" width="8" height="72" rx="2"
        fill="rgba(80,78,70,0.45)"
        stroke="rgba(160,156,138,0.22)" strokeWidth="0.75"
      />
      <line x1="57" y1="46" x2="65" y2="47" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
      <line x1="57" y1="70" x2="65" y2="70" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
      <line x1="57" y1="94" x2="65" y2="93" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />

      {/* ── Main pen body ── */}
      <rect x="60" y="20" width="336" height="100" rx="13" fill={`url(#${sid}-body)`} />

      {/* Fine machined lines texture overlay */}
      <rect x="60" y="20" width="336" height="100" rx="13" fill={`url(#${sid}-lines)`} />

      {/* Body cylindrical shading (top lit, darker bottom) */}
      <rect x="60" y="20" width="336" height="100" rx="13" fill={`url(#${sid}-bodySide)`} />

      {/* ── Acid-green accent stripe at top — strong 3D beveled look ── */}
      {/* Base stripe */}
      <rect x="60" y="20" width="336" height="9" rx="7" fill={`url(#${sid}-stripe)`} opacity="0.96" />
      {/* Fill the flat section so rounded corners don't gap */}
      <rect x="67" y="25" width="329" height="4" fill={`url(#${sid}-stripe)`} opacity="0.96" />
      {/* Bright top edge of stripe (catches top light) */}
      <rect x="60" y="20" width="336" height="2.5" rx="7" fill="rgba(255,255,255,0.35)" />
      {/* Bottom shadow edge of stripe */}
      <rect x="63" y="27" width="330" height="1.5" fill="rgba(0,0,0,0.28)" />

      {/* ── NEXPHORIA engraved lettering ── */}
      <text
        x="120" y="65"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="10" fontWeight="700" letterSpacing="4"
        fill="rgba(255,255,255,0.22)"
      >
        NEXPHORIA
      </text>

      {/* ── Research grade sub-label ── */}
      <text
        x="120" y="82"
        fontFamily="'Courier New', Menlo, monospace"
        fontSize="6.5" fill="rgba(198,241,132,0.32)" letterSpacing="1.2"
      >
        Research Grade Peptide
      </text>

      {/* ── Grip section — knurled texture near back ── */}
      <rect x="65" y="22" width="52" height="96" rx="8" fill={`url(#${sid}-knurl)`} opacity="0.9" />
      {/* Grip end lines */}
      <line x1="117" y1="22" x2="117" y2="118" stroke="rgba(255,255,255,0.06)" strokeWidth="0.7" />

      {/* ── Dose window — deeply inset panel ── */}
      {/* Outer recess/border (dark inset bevel) */}
      <rect x="234" y="36" width="124" height="68" rx="5"
        fill="rgba(0,0,0,0.55)"
        stroke="rgba(0,0,0,0.60)" strokeWidth="1.5"
      />
      {/* Inner window face */}
      <rect x="237" y="39" width="118" height="62" rx="3.5"
        fill={`url(#${sid}-win)`}
      />
      {/* Inset top shadow */}
      <rect x="237" y="39" width="118" height="22" rx="3.5" fill={`url(#${sid}-winShad)`} />
      {/* Inset left shadow */}
      <rect x="237" y="39" width="30" height="62" rx="3.5" fill={`url(#${sid}-winShadL)`} />
      {/* Bottom inner reflection (light bouncing from below) */}
      <rect x="238" y="96" width="116" height="4" rx="2" fill="rgba(255,255,255,0.05)" />
      {/* Right inner highlight */}
      <line x1="354" y1="40" x2="354" y2="100" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />

      {/* Product name in dose window */}
      <text
        x="296" y="65"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="11" fontWeight="700"
        fill="rgba(247,244,238,0.92)"
        letterSpacing="0.3"
      >
        {shortName.length > 10 ? shortName.slice(0, 10) : shortName}
      </text>
      {shortName.length > 10 && (
        <text
          x="296" y="78"
          textAnchor="middle"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="9.5" fontWeight="700"
          fill="rgba(247,244,238,0.82)"
        >
          {shortName.slice(10)}
        </text>
      )}

      {/* Dosage in dose window */}
      <text
        x="296" y={shortName.length > 10 ? 92 : 82}
        textAnchor="middle"
        fontFamily="'Courier New', Menlo, monospace"
        fontSize="7.5"
        fill="rgba(198,241,132,0.85)"
        letterSpacing="0.6"
      >
        {dosage}
      </text>

      {/* DOSE WINDOW label below */}
      <text
        x="296" y="110"
        textAnchor="middle"
        fontFamily="'Courier New', Menlo, monospace"
        fontSize="5.5"
        fill="rgba(255,255,255,0.20)"
        letterSpacing="0.5"
      >
        DOSE WINDOW
      </text>

      {/* ── Connector ring between body and needle cap ── */}
      <rect x="392" y="28" width="10" height="84" rx="2"
        fill="rgba(100,98,88,0.30)"
        stroke="rgba(180,176,158,0.20)" strokeWidth="0.75"
      />
      {/* Ring ridge highlights */}
      <line x1="392" y1="42" x2="402" y2="44" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
      <line x1="392" y1="70" x2="402" y2="70" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
      <line x1="392" y1="96" x2="402" y2="94" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />

      {/* ── Needle cap — precision tapered cone ── */}
      <path
        d="M 398,30 L 475,50 L 480,70 L 475,90 L 398,110 Z"
        fill={`url(#${sid}-needle)`}
        stroke="rgba(70,68,60,0.40)" strokeWidth="0.7"
      />
      {/* Needle cap vertical shading */}
      <path
        d="M 398,30 L 475,50 L 480,70 L 475,90 L 398,110 Z"
        fill={`url(#${sid}-needleV)`}
      />
      {/* Needle cap top edge highlight */}
      <line x1="398" y1="31" x2="475" y2="51" stroke="rgba(255,255,255,0.09)" strokeWidth="1.5" />
      {/* Needle cap bottom shadow */}
      <line x1="398" y1="109" x2="475" y2="89" stroke="rgba(0,0,0,0.22)" strokeWidth="1.2" />
      {/* Needle rounded tip */}
      <ellipse cx="480" cy="70" rx="5.5" ry="20" fill="#080808" />
      <ellipse cx="479" cy="66" rx="2" ry="5" fill="rgba(255,255,255,0.06)" />
      {/* Acid-green tip band */}
      <rect x="468" y="59" width="9" height="22" rx="1.5"
        fill="rgba(198,241,132,0.26)"
        stroke="rgba(198,241,132,0.18)" strokeWidth="0.6"
      />

      {/* ── Body edge lines (top + bottom seams) ── */}
      <line x1="60" y1="20" x2="395" y2="20" stroke="rgba(255,255,255,0.09)" strokeWidth="0.8" />
      <line x1="60" y1="120" x2="395" y2="120" stroke="rgba(0,0,0,0.30)" strokeWidth="0.8" />

      {/* ── Top surface sheen — subtle second highlight ── */}
      <rect x="60" y="20" width="336" height="28" rx="13" fill="rgba(255,255,255,0.00)"
        stroke="none" />
    </svg>
  );
}
