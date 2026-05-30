import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Peptide Storage Guide: Temperature, Stability & Best Practices | Nexphoria",
  description:
    "Comprehensive peptide storage reference: lyophilized vs reconstituted storage requirements, temperature per compound, freeze-thaw cycle limits, light sensitivity, and container recommendations — pulled from catalog data.",
  openGraph: {
    title: "Peptide Storage Guide — Nexphoria Research",
    description:
      "Storage requirements for every research peptide: lyophilized vs reconstituted, temperature ranges, light sensitivity, freeze-thaw limits, and best practices.",
    url: "https://nexphoria.com/guides/storage",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peptide Storage Guide — Nexphoria",
    description:
      "Temperature, stability, and handling requirements for research peptides. Research use only.",
  },
};

// Derived from products.ts storage field — classify each product
const STORAGE_DATA = products
  .filter((p) => p.category !== "Accessories")
  .map((p) => {
    const s = p.storage.toLowerCase();
    let tempClass: "minus20" | "fridge" | "room" | "cool-dry" = "minus20";
    let lightSensitive = false;
    let hygroscopic = false;
    let noFreeze = false;
    let stableYears = 2;

    if (s.includes("−20") || s.includes("-20")) tempClass = "minus20";
    else if (s.includes("2–8") || s.includes("2-8") || s.includes("refrigerate")) tempClass = "fridge";
    else if (s.includes("room temperature")) tempClass = "room";
    else if (s.includes("15–25") || s.includes("15-25") || s.includes("cool, dry")) tempClass = "cool-dry";

    if (s.includes("light") || s.includes("uv")) lightSensitive = true;
    if (s.includes("hygroscop")) hygroscopic = true;
    if (s.includes("do not freeze") || s.includes("avoid freeze")) noFreeze = true;
    if (s.includes("18 months")) stableYears = 1.5;
    if (s.includes("24 months")) stableYears = 2;

    return {
      slug: p.slug,
      name: p.name,
      category: p.category,
      storage: p.storage,
      tempClass,
      lightSensitive,
      hygroscopic,
      noFreeze,
      stableYears,
    };
  });

// Group by temp class
const groupByTemp = {
  minus20: STORAGE_DATA.filter((p) => p.tempClass === "minus20"),
  fridge: STORAGE_DATA.filter((p) => p.tempClass === "fridge"),
  "cool-dry": STORAGE_DATA.filter((p) => p.tempClass === "cool-dry"),
  room: STORAGE_DATA.filter((p) => p.tempClass === "room"),
};

const TEMP_INFO = {
  minus20: {
    label: "−20°C Freezer",
    color: "#6BA3D0",
    bg: "#6BA3D015",
    border: "#6BA3D040",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="2" x2="12" y2="22"/>
        <path d="m20 10-8-8-8 8"/>
        <path d="m4 14 8 8 8-8"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
      </svg>
    ),
    desc: "Standard deep-freeze. Use airtight desiccant storage. Allow vials to equilibrate to room temperature before opening to prevent condensation.",
  },
  fridge: {
    label: "2–8°C Refrigerator",
    color: "#B8A44C",
    bg: "#B8A44C15",
    border: "#B8A44C40",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <line x1="5" y1="10" x2="19" y2="10"/>
        <line x1="12" y1="6" x2="12" y2="8"/>
        <line x1="12" y1="14" x2="12" y2="18"/>
      </svg>
    ),
    desc: "Standard refrigerator. Do NOT freeze — ice crystal formation can denature the peptide structure. Keep away from door (temperature fluctuations).",
  },
  "cool-dry": {
    label: "Cool, Dry Place (15–25°C)",
    color: "#C9DD69",
    bg: "#C9DD6915",
    border: "#C9DD6940",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
    ),
    desc: "Room temperature storage in a cool, dry environment. Keep away from heat sources, direct sunlight, and humidity.",
  },
  room: {
    label: "Room Temperature",
    color: "#D4A373",
    bg: "#D4A37315",
    border: "#D4A37340",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    desc: "Store at room temperature in a dry, dark location. These are typically single-use vials or excipient-only products.",
  },
};

const CATEGORIES = ["All", ...Array.from(new Set(STORAGE_DATA.map((p) => p.category))).sort()];

export default function StorageGuidePage() {
  return (
    <div style={{ backgroundColor: "#F9F9F9", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        className="relative px-6 pt-32 pb-16 md:pt-40 md:pb-20"
        style={{ backgroundColor: "#010101" }}
      >
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            variant="dark"
            className="mb-6"
            items={[
              { label: "Home", href: "/" },
              { label: "Guides" },
              { label: "Peptide Storage" },
            ]}
          />
          <p className="text-xs uppercase tracking-widest mb-5" style={{ color: "#C9DD69" }}>
            Research Guides
          </p>
          <h1
            className="text-4xl md:text-5xl mb-5 tracking-tight"
            style={{ fontWeight: 200, color: "#F9F9F9", lineHeight: 1.05 }}
          >
            Peptide Storage Guide
          </h1>
          <p
            className="text-base md:text-lg max-w-2xl"
            style={{ fontWeight: 300, color: "#A0A0A0", lineHeight: 1.65 }}
          >
            Comprehensive storage reference for every compound in the Nexphoria catalog.
            Lyophilized vs reconstituted requirements, freeze-thaw cycle limits, light sensitivity,
            and container recommendations — sourced directly from technical specifications.
          </p>
          {/* Quick stats */}
          <div className="flex flex-wrap gap-8 mt-10">
            {[
              { value: `${groupByTemp.minus20.length}`, label: "−20°C compounds" },
              { value: `${groupByTemp.fridge.length}`, label: "Fridge-only compounds" },
              { value: `${STORAGE_DATA.filter((p) => p.lightSensitive).length}`, label: "Light-sensitive" },
              { value: `${STORAGE_DATA.filter((p) => p.hygroscopic).length}`, label: "Hygroscopic" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-light" style={{ color: "#C9DD69" }}>{s.value}</p>
                <p className="text-xs uppercase tracking-wider mt-1" style={{ color: "#606060" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core principles */}
      <section className="px-6 py-14 md:py-18" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight mb-10" style={{ color: "#010101" }}>
            Core Storage Principles
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Lyophilized (Dry Powder)",
                color: "#B8A44C",
                points: [
                  "Most stable form — typically 24 months at −20°C when stored desiccated",
                  "Keep sealed in original vial until ready to reconstitute",
                  "Desiccant packs in storage container prevent moisture uptake",
                  "Allow vial to warm to room temperature before opening to prevent condensation on the powder",
                  "Once a vial is opened, moisture exposure begins — reconstitute promptly",
                ],
              },
              {
                title: "Reconstituted (In Solution)",
                color: "#6BA3D0",
                points: [
                  "Significantly shorter stability: typically 30 days at 4°C, up to 6 months at −20°C",
                  "Use bacteriostatic water (BAC water) for multi-dose vials — 0.9% benzyl alcohol prevents bacterial growth",
                  "Use sterile water only if entire vial will be used within 24 hours",
                  "Minimize freeze-thaw cycles — each cycle risks protein denaturation and aggregation",
                  "Label vials with reconstitution date; discard at stability endpoint",
                ],
              },
              {
                title: "Freeze-Thaw Cycles",
                color: "#C9DD69",
                points: [
                  "Maximum recommended: 3–5 freeze-thaw cycles for most peptides",
                  "Aliquot reconstituted solution into single-use volumes to avoid repeated freeze-thaw",
                  "Use low-protein-binding microtubes (1.5mL polypropylene) for aliquots",
                  "Flash-freeze aliquots in dry ice / liquid nitrogen for best stability",
                  "Peptides with disulfide bonds (oxytocin, ss-31) are especially sensitive",
                ],
              },
              {
                title: "Light Sensitivity",
                color: "#D4A373",
                points: [
                  "UV exposure causes photodegradation — use amber vials or foil-wrapped storage for sensitive compounds",
                  "Melanotan-II, PT-141, and other melanocortin peptides require strict light protection",
                  "GHK-Cu oxidizes under UV — store in opaque container",
                  "Even short bench exposure during reconstitution can cause measurable degradation",
                  "Wrap vials in foil during reconstitution if working under bright lab lighting",
                ],
              },
              {
                title: "Hygroscopic Compounds",
                color: "#B084C4",
                points: [
                  "NAD+ is highly hygroscopic — absorbs atmospheric moisture rapidly",
                  "Store in airtight containers with silica gel desiccant",
                  "Work quickly when handling hygroscopic powder",
                  "If powder clumps after storage, it has absorbed moisture — assess purity before use",
                  "Nitrogen-purged storage vials provide optimal protection",
                ],
              },
              {
                title: "Container & Organization",
                color: "#E06B6B",
                points: [
                  "Use labeled cryovials (1.5mL, low-protein-binding polypropylene) for reconstituted aliquots",
                  "Label format: compound name | concentration | reconstitution date | lot #",
                  "Store in clearly labeled compartmentalized boxes — separate lyophilized from reconstituted",
                  "Keep a storage log: date received, lot #, reconstitution date, remaining volume",
                  "Do not store near ethanol or other volatile chemicals — vapor can contaminate",
                ],
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-sm p-6"
                style={{
                  border: `1px solid ${card.color}33`,
                  backgroundColor: `${card.color}08`,
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: card.color }} />
                  <h3 className="text-base font-semibold" style={{ color: "#010101" }}>
                    {card.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {card.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm" style={{ color: "#444444", lineHeight: 1.5 }}>
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: card.color }} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Temperature category sections */}
      <section className="px-6 py-14 md:py-18">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight mb-4" style={{ color: "#010101" }}>
            Storage by Temperature Class
          </h2>
          <p className="text-sm mb-10" style={{ color: "#666666" }}>
            Requirements sourced from individual product technical specifications.
          </p>

          {(["minus20", "fridge", "cool-dry", "room"] as const).map((key) => {
            const compounds = groupByTemp[key];
            if (!compounds.length) return null;
            const info = TEMP_INFO[key];

            return (
              <div key={key} className="mb-10">
                <div
                  className="rounded-sm p-5 mb-4 flex items-start gap-4"
                  style={{
                    backgroundColor: info.bg,
                    border: `1px solid ${info.border}`,
                  }}
                >
                  <div className="mt-0.5 flex-shrink-0" style={{ color: info.color }}>
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-1" style={{ color: "#010101" }}>
                      {info.label}
                      <span
                        className="ml-2 text-xs px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: info.bg, color: info.color, border: `1px solid ${info.border}`, fontWeight: 600 }}
                      >
                        {compounds.length} compounds
                      </span>
                    </h3>
                    <p className="text-sm" style={{ color: "#555555", lineHeight: 1.6 }}>{info.desc}</p>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr style={{ borderBottom: "2px solid #ECEAE4" }}>
                        <th className="text-left py-2.5 pr-4 font-medium text-xs uppercase tracking-wider" style={{ color: "#888888" }}>
                          Compound
                        </th>
                        <th className="text-left py-2.5 pr-4 font-medium text-xs uppercase tracking-wider" style={{ color: "#888888" }}>
                          Category
                        </th>
                        <th className="text-left py-2.5 pr-4 font-medium text-xs uppercase tracking-wider" style={{ color: "#888888" }}>
                          Stability
                        </th>
                        <th className="text-left py-2.5 pr-4 font-medium text-xs uppercase tracking-wider" style={{ color: "#888888" }}>
                          Flags
                        </th>
                        <th className="text-left py-2.5 font-medium text-xs uppercase tracking-wider" style={{ color: "#888888" }}>
                          Full Spec
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {compounds.map((p, i) => (
                        <tr
                          key={p.slug}
                          style={{
                            borderBottom: i < compounds.length - 1 ? "1px solid #F0EEE8" : "none",
                          }}
                        >
                          <td className="py-3 pr-4">
                            <Link
                              href={`/products/${p.slug}`}
                              className="font-medium hover:opacity-60 transition-opacity"
                              style={{ color: "#010101" }}
                            >
                              {p.name}
                            </Link>
                          </td>
                          <td className="py-3 pr-4 text-xs" style={{ color: "#888888" }}>
                            {p.category}
                          </td>
                          <td className="py-3 pr-4 text-xs font-medium" style={{ color: "#444444" }}>
                            {p.stableYears === 1.5 ? "18 months" : "24 months"}
                          </td>
                          <td className="py-3 pr-4">
                            <div className="flex flex-wrap gap-1">
                              {p.lightSensitive && (
                                <span
                                  className="text-xs px-1.5 py-0.5 rounded-sm"
                                  style={{ backgroundColor: "#D4A37318", color: "#B07830", border: "1px solid #D4A37340" }}
                                >
                                  Light
                                </span>
                              )}
                              {p.hygroscopic && (
                                <span
                                  className="text-xs px-1.5 py-0.5 rounded-sm"
                                  style={{ backgroundColor: "#B084C418", color: "#8060A0", border: "1px solid #B084C440" }}
                                >
                                  Hygroscopic
                                </span>
                              )}
                              {p.noFreeze && (
                                <span
                                  className="text-xs px-1.5 py-0.5 rounded-sm"
                                  style={{ backgroundColor: "#6BA3D018", color: "#3878A8", border: "1px solid #6BA3D040" }}
                                >
                                  No Freeze
                                </span>
                              )}
                              {!p.lightSensitive && !p.hygroscopic && !p.noFreeze && (
                                <span className="text-xs" style={{ color: "#CCCCCC" }}>—</span>
                              )}
                            </div>
                          </td>
                          <td className="py-3 text-xs leading-snug" style={{ color: "#666666" }}>
                            {p.storage}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Reconstituted stability table */}
      <section className="px-6 py-14 md:py-18" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight mb-4" style={{ color: "#010101" }}>
            Reconstituted Solution Stability
          </h2>
          <p className="text-sm mb-8" style={{ color: "#666666" }}>
            Once reconstituted, peptide solutions have significantly reduced stability compared to the lyophilized form.
            Use bacteriostatic water for multi-dose vials.
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ borderBottom: "2px solid #ECEAE4" }}>
                  {["Condition", "Solvent", "Stability", "Notes"].map((h) => (
                    <th
                      key={h}
                      className="text-left py-3 pr-6 font-medium text-xs uppercase tracking-wider"
                      style={{ color: "#888888" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    condition: "4°C (Refrigerator)",
                    solvent: "Bacteriostatic Water (BAC)",
                    stability: "30 days",
                    notes: "Recommended for active-use multi-dose vials. Benzyl alcohol prevents microbial growth.",
                    color: "#B8A44C",
                  },
                  {
                    condition: "4°C (Refrigerator)",
                    solvent: "Sterile Water",
                    stability: "24–48 hours",
                    notes: "Use only if entire vial will be consumed same day or next day.",
                    color: "#E06B6B",
                  },
                  {
                    condition: "−20°C (Freezer)",
                    solvent: "Bacteriostatic Water (BAC)",
                    stability: "3–6 months",
                    notes: "Preferred for long-term post-reconstitution storage. Aliquot to minimize freeze-thaw.",
                    color: "#6BA3D0",
                  },
                  {
                    condition: "−80°C (Ultra-low freezer)",
                    solvent: "Bacteriostatic Water (BAC)",
                    stability: "12+ months",
                    notes: "Research-lab optimal. Not standard for most users. Minimizes oxidative degradation.",
                    color: "#B084C4",
                  },
                  {
                    condition: "Room Temperature",
                    solvent: "Any",
                    stability: "<4 hours",
                    notes: "Working solution only. Never store at room temperature for extended periods.",
                    color: "#CCCCCC",
                  },
                ].map((row, i, arr) => (
                  <tr key={row.condition + row.solvent} style={{ borderBottom: i < arr.length - 1 ? "1px solid #F0EEE8" : "none" }}>
                    <td className="py-3 pr-6 font-medium" style={{ color: "#010101" }}>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: row.color }} />
                        {row.condition}
                      </div>
                    </td>
                    <td className="py-3 pr-6 text-xs" style={{ color: "#444444" }}>{row.solvent}</td>
                    <td className="py-3 pr-6 font-semibold text-sm" style={{ color: row.color === "#CCCCCC" ? "#888888" : row.color }}>
                      {row.stability}
                    </td>
                    <td className="py-3 text-xs leading-relaxed" style={{ color: "#666666" }}>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Aliquoting callout */}
          <div
            className="rounded-sm p-6"
            style={{ backgroundColor: "#6BA3D010", border: "1px solid #6BA3D040" }}
          >
            <h3 className="text-base font-semibold mb-3" style={{ color: "#010101" }}>
              Aliquoting Protocol
            </h3>
            <p className="text-sm mb-4" style={{ color: "#444444", lineHeight: 1.6 }}>
              To minimize freeze-thaw cycles, divide reconstituted solution into single-use volumes immediately after reconstitution:
            </p>
            <ol className="space-y-2">
              {[
                "Reconstitute in minimum needed BAC water volume (100–200 μL is typical for 10mg vials)",
                "Use a sterile 1 mL syringe to draw the full solution",
                "Dispense equal volumes into labeled 1.5mL low-protein-binding polypropylene microtubes",
                "Each microtube = one dose or one session's doses — never return to original vial",
                "Store all aliquots at −20°C; transfer one to fridge (4°C) 30 min before use",
                "Label: compound | concentration (e.g., 2 mg/mL) | date | lot #",
              ].map((step, i) => (
                <li key={step} className="flex items-start gap-3 text-sm" style={{ color: "#444444", lineHeight: 1.5 }}>
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
                    style={{ backgroundColor: "#6BA3D0", color: "#FFFFFF" }}
                  >
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Special compounds section */}
      <section className="px-6 py-14 md:py-18">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight mb-4" style={{ color: "#010101" }}>
            Special Handling Compounds
          </h2>
          <p className="text-sm mb-8" style={{ color: "#666666" }}>
            These compounds have above-average storage sensitivity and require additional precautions.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                name: "NAD+",
                slug: "nad-plus",
                reason: "Highly hygroscopic",
                color: "#B084C4",
                notes: [
                  "Store under anhydrous conditions — nitrogen purge recommended",
                  "Silica gel desiccant packs in airtight secondary container are essential",
                  "Work quickly during reconstitution; avoid extended air exposure",
                  "Clumping indicates moisture absorption — assess before use",
                ],
              },
              {
                name: "GHK-Cu",
                slug: "ghk-cu",
                reason: "Fridge-stable, light-sensitive",
                color: "#B8A44C",
                notes: [
                  "Do NOT freeze — ice crystal formation degrades the copper complex",
                  "Store at 2–8°C; avoid freeze-thaw cycles entirely",
                  "Protect from UV — copper peptides photodegrade rapidly",
                  "18-month lyophilized stability (shorter than most peptides)",
                ],
              },
              {
                name: "Melanotan-II",
                slug: "melanotan-ii",
                reason: "UV-sensitive, light-sensitive",
                color: "#D4A373",
                notes: [
                  "Particularly sensitive to UV and visible light — store in amber vials or foil-wrapped",
                  "Keep reconstituted solution in a dark refrigerator compartment",
                  "Even brief bench exposure under fluorescent lighting causes measurable degradation",
                  "Wrap vial in foil during reconstitution",
                ],
              },
              {
                name: "PT-141 (Bremelanotide)",
                slug: "pt-141",
                reason: "Light-sensitive melanocortin",
                color: "#D4A373",
                notes: [
                  "Same light-sensitivity profile as Melanotan-II",
                  "Store in dark, desiccated conditions at −20°C",
                  "Reconstituted: 30 days at 4°C in light-protected vial",
                  "Avoid turbid or discolored solutions — sign of degradation",
                ],
              },
              {
                name: "Tesamorelin",
                slug: "tesamorelin",
                reason: "Fridge-only, no freeze",
                color: "#6BA3D0",
                notes: [
                  "Refrigerate at 2–8°C — do not freeze",
                  "18-month stability (shorter lyophilized shelf life)",
                  "GRF analog with long chain susceptible to freeze-induced denaturation",
                  "Keep away from back of refrigerator (cold spots near cooling element)",
                ],
              },
              {
                name: "Snap-8",
                slug: "snap-8",
                reason: "Fridge-stable, no freeze",
                color: "#6BA3D0",
                notes: [
                  "Store at 2–8°C — do not freeze; cosmetic peptide with peptide-bond sensitivity",
                  "18-month stability lyophilized",
                  "Reconstituted solutions: use within 30 days at 4°C",
                  "Protect from light; carrier solvents may affect long-term stability",
                ],
              },
            ].map((item) => (
              <div
                key={item.slug}
                className="rounded-sm p-5"
                style={{ border: `1px solid ${item.color}33`, backgroundColor: `${item.color}08` }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Link
                    href={`/products/${item.slug}`}
                    className="text-base font-semibold hover:opacity-60 transition-opacity"
                    style={{ color: "#010101" }}
                  >
                    {item.name}
                  </Link>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: `${item.color}22`, color: item.color, border: `1px solid ${item.color}44`, fontWeight: 500 }}
                  >
                    {item.reason}
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {item.notes.map((n) => (
                    <li key={n} className="flex items-start gap-2 text-sm" style={{ color: "#444444", lineHeight: 1.5 }}>
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick-reference checklist */}
      <section className="px-6 py-14 md:py-18" style={{ backgroundColor: "#010101" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#C9DD69" }}>
            Quick Reference
          </p>
          <h2
            className="text-2xl mb-10 tracking-tight"
            style={{ fontWeight: 200, color: "#F9F9F9" }}
          >
            Storage Checklist
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "#B8A44C" }}>
                Do
              </h3>
              <ul className="space-y-3">
                {[
                  "Store lyophilized peptides at −20°C in desiccated, sealed vials",
                  "Use bacteriostatic water for multi-dose reconstituted vials",
                  "Aliquot reconstituted solution to minimize freeze-thaw cycles",
                  "Allow frozen vials to warm to room temp before opening",
                  "Label all vials with compound, concentration, date, lot #",
                  "Use amber vials or foil wrapping for light-sensitive compounds",
                  "Keep a detailed storage log for each compound",
                  "Store in low-protein-binding polypropylene containers",
                  "Use silica gel desiccant packs in the storage container",
                  "Check for turbidity or color change before each use",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B8A44C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "#E06B6B" }}>
                Don&apos;t
              </h3>
              <ul className="space-y-3">
                {[
                  "Freeze fridge-only compounds (GHK-Cu, Snap-8, Tesamorelin, Selank)",
                  "Store reconstituted solutions at room temperature for extended periods",
                  "Vortex peptide solutions — this shears and denatures peptides",
                  "Use glass containers for reconstituted solutions (protein binding risk)",
                  "Leave light-sensitive compounds exposed on the bench",
                  "Neglect to note reconstitution date — assume degradation after stability window",
                  "Return drawn solution back into the vial (contamination risk)",
                  "Open frozen vials before they reach room temperature",
                  "Store peptides near volatile chemicals (ethanol, acetone)",
                  "Exceed 5 freeze-thaw cycles on any reconstituted solution",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E06B6B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                      <line x1="18" y1="6" x2="6" y2="18"/>
                      <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related tools CTA */}
      <section className="px-6 py-14 md:py-18">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold tracking-tight mb-6" style={{ color: "#010101" }}>
            Related Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                href: "/tools/reconstitution-calculator",
                title: "Reconstitution Calculator",
                desc: "Calculate BAC water volume and dose volumes for any peptide vial.",
                badge: "Tool",
              },
              {
                href: "/tools/bac-water-guide",
                title: "BAC Water Guide",
                desc: "What bacteriostatic water is, why it works, and how to use it safely.",
                badge: "Guide",
              },
              {
                href: "/tools/half-life-calculator",
                title: "Half-Life Calculator",
                desc: "Plasma half-life, clearance milestones, and dosing intervals for 30+ compounds.",
                badge: "Tool",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group block rounded-sm p-5 transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: "#FFFFFF", border: "1px solid #ECEAE4", textDecoration: "none" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium group-hover:opacity-70 transition-opacity" style={{ color: "#010101" }}>
                    {link.title}
                  </span>
                  <span
                    className="text-xs px-1.5 py-0.5 rounded-sm"
                    style={{ backgroundColor: "#B8A44C22", color: "#7A8A60", border: "1px solid #B8A44C44", fontWeight: 500 }}
                  >
                    {link.badge}
                  </span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "#666666" }}>{link.desc}</p>
                <p className="text-xs mt-3 font-medium" style={{ color: "#B8A44C" }}>Open →</p>
              </Link>
            ))}
          </div>

          {/* Disclaimer */}
          <div
            className="mt-10 rounded-sm p-5 text-xs leading-relaxed"
            style={{ color: "#999999", backgroundColor: "#F5F5F0", border: "1px solid #ECEAE4" }}
          >
            <strong style={{ color: "#666666" }}>Research Use Only.</strong> Storage recommendations on this page are based on published stability data and technical specifications for research-grade lyophilized peptide compounds. This information is intended for qualified researchers operating in accordance with applicable institutional and regulatory guidelines. Nexphoria compounds are not approved for human therapeutic use.
          </div>
        </div>
      </section>
    </div>
  );
}
