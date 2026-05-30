import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/products";
import { hasProductPhoto, getProductImagePath } from "@/lib/product-images";
import Breadcrumb from "@/components/Breadcrumb";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Top 5 Peptides Compared — BPC-157, Semaglutide, MK-677 & More | Nexphoria",
  description:
    "Side-by-side comparison of the 5 most researched peptides: BPC-157, Semaglutide, CJC-1295/Ipamorelin, MK-677, and Tirzepatide. Purity, mechanism, pricing, and research use cases.",
  openGraph: {
    title: "Top 5 Research Peptides Compared — Nexphoria",
    description:
      "BPC-157 vs Semaglutide vs CJC-1295/Ipamorelin vs MK-677 vs Tirzepatide. Full side-by-side breakdown.",
    images: [{ url: "https://nexphoria.com/og-image.jpg", width: 1200, height: 630 }],
  },
};

const TOP5_SLUGS = [
  "bpc-157",
  "semaglutide",
  "cjc-1295-ipamorelin",
  "mk-677",
  "tirzepatide",
] as const;

// Supplemental editorial data not in the product schema
const EDITORIAL: Record<
  string,
  {
    rank: number;
    rankLabel: string;
    researchArea: string;
    halfLife: string;
    route: string;
    highlight: string;
    bestFor: string[];
    notFor: string;
  }
> = {
  "bpc-157": {
    rank: 1,
    rankLabel: "#1 Most Researched",
    researchArea: "Recovery & Tissue Repair",
    halfLife: "~4 hours (SC)",
    route: "SC / IM / Oral",
    highlight:
      "Broadest preclinical tissue-repair literature of any research peptide. Studied across tendon, gut, and CNS models.",
    bestFor: ["Musculoskeletal repair models", "GI cytoprotection studies", "Neurological injury protocols"],
    notFor: "Not for human therapeutic use",
  },
  semaglutide: {
    rank: 2,
    rankLabel: "#2 Most Researched",
    researchArea: "Metabolic & GLP-1 Research",
    halfLife: "~7 days",
    route: "SC (once weekly)",
    highlight:
      "Longest half-life in the GLP-1 agonist class. Albumin-binding fatty acid chain enables once-weekly dosing in clinical analogues.",
    bestFor: ["Metabolic regulation studies", "Appetite signaling research", "GLP-1 pathway pharmacology"],
    notFor: "Not for human therapeutic use",
  },
  "cjc-1295-ipamorelin": {
    rank: 3,
    rankLabel: "#3 Most Researched",
    researchArea: "Growth Hormone Axis",
    halfLife: "CJC: ~6–8 days | Ipa: ~2 hours",
    route: "SC",
    highlight:
      "Only compound in catalog that targets two distinct nodes on the somatotropic axis simultaneously — GHRH receptor and GHS-R1a.",
    bestFor: ["GH pulse amplitude studies", "Synergistic GHRH/GHS-R signaling", "Body composition research models"],
    notFor: "Not for human therapeutic use",
  },
  "mk-677": {
    rank: 4,
    rankLabel: "#4 Most Researched",
    researchArea: "Oral GH Secretagogue",
    halfLife: "~24 hours",
    route: "Oral (non-peptide)",
    highlight:
      "Only non-peptide GH secretagogue in catalog. Oral bioavailability enables simplified administration protocols vs injectable alternatives.",
    bestFor: ["Oral GH secretagogue mechanistic studies", "Appetite and IGF-1 interaction research", "Sleep quality biomarker studies"],
    notFor: "Not for human therapeutic use",
  },
  tirzepatide: {
    rank: 5,
    rankLabel: "#5 Most Researched",
    researchArea: "Dual Incretin / GIP+GLP-1",
    halfLife: "~5 days",
    route: "SC (once weekly)",
    highlight:
      "Dual GIP/GLP-1 agonism. FDA-approved analogue (Mounjaro) provides the largest clinical evidence base of any compound on the Nexphoria catalog.",
    bestFor: ["Dual incretin pathway mechanistic research", "GIP vs GLP-1 receptor contribution studies", "Comparative metabolic pharmacology"],
    notFor: "Not for human therapeutic use",
  },
};

const COMPARISON_ROWS: { label: string; key: string; editorial?: string }[] = [
  { label: "Category", key: "category" },
  { label: "Research Area", key: "_researchArea" },
  { label: "Starting Price", key: "_price" },
  { label: "Purity", key: "purity" },
  { label: "Molecular Weight", key: "molecularWeight" },
  { label: "Half-Life", key: "_halfLife" },
  { label: "Route", key: "_route" },
  { label: "Storage", key: "storage" },
  { label: "CAS Number", key: "casNumber" },
];

function getCell(p: (typeof products)[0], key: string): string {
  const ed = EDITORIAL[p.slug];
  if (key === "_researchArea") return ed?.researchArea ?? p.category;
  if (key === "_price") {
    const base =
      p.dosages && p.dosages.length > 0
        ? Math.min(...p.dosages.map((d) => d.price))
        : p.price;
    return `$${base}`;
  }
  if (key === "_halfLife") return ed?.halfLife ?? "—";
  if (key === "_route") return ed?.route ?? "SC";
  const val = (p as Record<string, unknown>)[key];
  if (val === undefined || val === null) return "—";
  if (key === "storage") return String(val).split(".")[0]; // truncate storage
  return String(val);
}

export default function Top5ComparePage() {
  const top5 = TOP5_SLUGS.map((slug) => products.find((p) => p.slug === slug)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p)
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A0A0A" }}>
      {/* Hero */}
      <div
        className="pt-36 pb-14 border-b"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="container-nex">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Compare", href: "/compare" },
              { label: "Top 5 Peptides" },
            ]}
            variant="dark"
            className="mb-6"
          />
          <span className="eyebrow mb-5 block" style={{ color: "#C9A24B" }}>
            Curated Research Guide
          </span>
          <h1
            className="font-bold tracking-tight mb-5"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.75rem)",
              color: "#F9F9F9",
              lineHeight: 1.05,
              maxWidth: "700px",
            }}
          >
            Top 5 Research Peptides,{" "}
            <span style={{ color: "#C9A24B" }}>Side by Side</span>
          </h1>
          <p className="leading-relaxed mb-8" style={{ color: "#8A8A86", maxWidth: "600px" }}>
            The five most frequently referenced research compounds in the Nexphoria catalog — compared
            by purity, mechanism, administration route, half-life, and research application area.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/compare"
              className="inline-flex items-center gap-2 text-sm px-4 py-2.5 rounded-lg border transition-colors hover:opacity-80"
              style={{ borderColor: "rgba(255,255,255,0.15)", color: "#C9A24B" }}
            >
              Build custom comparison
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm px-4 py-2.5 rounded-lg transition-colors hover:opacity-80"
              style={{ backgroundColor: "#C9A24B", color: "#010101" }}
            >
              Browse full catalog <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Product cards grid */}
      <div className="container-nex py-14">
        <h2
          className="text-sm font-semibold uppercase tracking-widest mb-8"
          style={{ color: "#C9A24B" }}
        >
          Compound Overview
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {top5.map((p) => {
            const ed = EDITORIAL[p.slug];
            const basePrice =
              p.dosages && p.dosages.length > 0
                ? Math.min(...p.dosages.map((d) => d.price))
                : p.price;

            return (
              <div
                key={p.slug}
                className="rounded-2xl overflow-hidden flex flex-col"
                style={{ backgroundColor: "#F9F9F9", border: "1px solid #ECEAE4" }}
              >
                {/* Image */}
                <div
                  className="relative aspect-square overflow-hidden"
                  style={{ backgroundColor: "#F0EDE7" }}
                >
                  {hasProductPhoto(p.slug) ? (
                    <img
                      src={getProductImagePath(p.slug)}
                      alt={p.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center p-6">
                      <span
                        className="text-sm font-semibold text-center leading-tight"
                        style={{ color: "#B8A44C" }}
                      >
                        {p.name}
                      </span>
                    </div>
                  )}
                  {/* Rank badge */}
                  <div
                    className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                    style={{ backgroundColor: "#010101", color: "#C9A24B" }}
                  >
                    #{ed?.rank}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                  <p
                    className="text-[10px] font-semibold uppercase tracking-widest mb-1"
                    style={{ color: "#C9A24B" }}
                  >
                    {p.category}
                  </p>
                  <h3
                    className="font-bold mb-1 leading-tight"
                    style={{ fontSize: "1rem", color: "#010101" }}
                  >
                    {p.name}
                  </h3>
                  <p className="text-xs leading-snug mb-3 flex-1" style={{ color: "#666" }}>
                    {p.tagline}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-lg" style={{ color: "#010101" }}>
                      ${basePrice}
                    </span>
                    <span
                      className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                      style={{ backgroundColor: "#E8F5E9", color: "#2E7D32" }}
                    >
                      {p.purity}
                    </span>
                  </div>
                  <Link
                    href={`/products/${p.slug}`}
                    className="block text-center text-xs font-semibold uppercase tracking-wider py-2.5 rounded-lg transition-colors hover:opacity-80"
                    style={{ backgroundColor: "#010101", color: "#F9F9F9" }}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full comparison table */}
      <div
        className="border-t border-b py-14"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="container-nex">
          <h2
            className="text-sm font-semibold uppercase tracking-widest mb-8"
            style={{ color: "#C9A24B" }}
          >
            Specification Comparison
          </h2>
          <div className="overflow-x-auto">
            <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: "#F9F9F9" }}>
              <table className="w-full border-collapse" style={{ minWidth: "780px" }}>
                <thead>
                  <tr>
                    <th
                      className="text-left text-xs font-medium uppercase tracking-wider px-5 py-4 sticky left-0"
                      style={{
                        color: "#666",
                        backgroundColor: "#F0EDE7",
                        width: "140px",
                        borderBottom: "1px solid #ECEAE4",
                      }}
                    >
                      Attribute
                    </th>
                    {top5.map((p) => (
                      <th
                        key={p.slug}
                        className="text-center px-4 py-4"
                        style={{
                          borderBottom: "1px solid #ECEAE4",
                          minWidth: "140px",
                          backgroundColor: "#F9F9F9",
                        }}
                      >
                        <Link
                          href={`/products/${p.slug}`}
                          className="text-sm font-bold hover:opacity-70 transition-opacity"
                          style={{ color: "#010101" }}
                        >
                          {p.name}
                        </Link>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, idx) => (
                    <tr
                      key={row.label}
                      style={{ backgroundColor: idx % 2 === 0 ? "#F9F9F9" : "#F5F3F0" }}
                    >
                      <td
                        className="px-5 py-3 text-xs font-medium sticky left-0"
                        style={{
                          color: "#666",
                          backgroundColor: idx % 2 === 0 ? "#F0EDE7" : "#EEECE8",
                          borderBottom: "1px solid #ECEAE4",
                        }}
                      >
                        {row.label}
                      </td>
                      {top5.map((p) => {
                        const val = getCell(p, row.key);
                        const isPurity = row.key === "purity";
                        const isPrice = row.key === "_price";
                        return (
                          <td
                            key={p.slug}
                            className="px-4 py-3 text-sm text-center"
                            style={{ color: "#333", borderBottom: "1px solid #ECEAE4" }}
                          >
                            {isPurity ? (
                              <span
                                className="inline-block px-2 py-0.5 rounded-full text-xs font-medium"
                                style={{ backgroundColor: "#E8F5E9", color: "#2E7D32" }}
                              >
                                {val}
                              </span>
                            ) : isPrice ? (
                              <span className="font-bold text-base">{val}</span>
                            ) : (
                              <span className="text-xs">{val}</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}

                  {/* CTA row */}
                  <tr style={{ backgroundColor: "#F0EDE7" }}>
                    <td
                      className="px-5 py-4 sticky left-0"
                      style={{ backgroundColor: "#EEECE8" }}
                    />
                    {top5.map((p) => (
                      <td key={p.slug} className="px-4 py-4 text-center">
                        <Link
                          href={`/products/${p.slug}`}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors hover:opacity-80"
                          style={{ backgroundColor: "#010101", color: "#F9F9F9" }}
                        >
                          Order <ArrowRight size={10} />
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Research highlights — editorial cards */}
      <div className="container-nex py-14">
        <h2
          className="text-sm font-semibold uppercase tracking-widest mb-8"
          style={{ color: "#C9A24B" }}
        >
          Research Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {top5.map((p) => {
            const ed = EDITORIAL[p.slug];
            if (!ed) return null;
            return (
              <div
                key={p.slug}
                className="rounded-2xl p-6 border flex flex-col gap-4"
                style={{ backgroundColor: "#111", borderColor: "rgba(255,255,255,0.08)" }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: "rgba(201,162,75,0.15)", color: "#C9A24B" }}
                  >
                    {ed.rank}
                  </div>
                  <div>
                    <h3 className="font-bold text-base" style={{ color: "#F9F9F9" }}>
                      {p.name}
                    </h3>
                    <p className="text-xs mt-0.5" style={{ color: "#C9A24B" }}>
                      {ed.rankLabel} · {ed.researchArea}
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed" style={{ color: "#8A8A86" }}>
                  {ed.highlight}
                </p>

                <div>
                  <p
                    className="text-[10px] font-semibold uppercase tracking-widest mb-2"
                    style={{ color: "#555" }}
                  >
                    Best research applications
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {ed.bestFor.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs" style={{ color: "#888" }}>
                        <CheckCircle2
                          size={12}
                          className="mt-0.5 flex-shrink-0"
                          style={{ color: "#C9A24B" }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/products/${p.slug}`}
                  className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold transition-opacity hover:opacity-70"
                  style={{ color: "#C9A24B" }}
                >
                  Full compound profile <ArrowRight size={12} />
                </Link>
              </div>
            );
          })}

          {/* 6th card — use the compare tool */}
          <div
            className="rounded-2xl p-6 border flex flex-col gap-4 justify-between"
            style={{
              backgroundColor: "rgba(201,162,75,0.06)",
              borderColor: "rgba(201,162,75,0.25)",
            }}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#C9A24B" }}>
                Need a custom comparison?
              </p>
              <h3 className="font-bold text-base mb-2" style={{ color: "#F9F9F9" }}>
                Compare any compounds
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#8A8A86" }}>
                Use the interactive compare tool to build a side-by-side for any 3 compounds in the
                Nexphoria catalog.
              </p>
            </div>
            <Link
              href="/compare"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors hover:opacity-80"
              style={{ backgroundColor: "#C9A24B", color: "#010101" }}
            >
              Open compare tool <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Popular preset comparisons */}
      <div
        className="border-t py-14"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="container-nex">
          <h2
            className="text-sm font-semibold uppercase tracking-widest mb-8"
            style={{ color: "#C9A24B" }}
          >
            Related Comparisons
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "BPC-157 vs TB-500", slugs: "bpc-157,tb-500" },
              { label: "Semaglutide vs Tirzepatide", slugs: "semaglutide,tirzepatide" },
              { label: "Sema vs Tirzep vs Retatrutide", slugs: "semaglutide,tirzepatide,retatrutide" },
              { label: "CJC-1295 vs Sermorelin vs Tesamorelin", slugs: "cjc-1295-no-dac,sermorelin,tesamorelin" },
              { label: "Ipamorelin vs CJC-1295/Ipa vs MK-677", slugs: "ipamorelin,cjc-1295-ipamorelin,mk-677" },
              { label: "NAD+ vs Epitalon vs MOTS-c", slugs: "nad-plus,epitalon,mots-c" },
            ].map((preset) => (
              <Link
                key={preset.slugs}
                href={`/compare?slugs=${preset.slugs}`}
                className="flex items-center justify-between px-4 py-3 rounded-xl border transition-colors hover:border-[#C9A24B] group"
                style={{
                  borderColor: "rgba(255,255,255,0.1)",
                  backgroundColor: "#111",
                }}
              >
                <span className="text-sm" style={{ color: "#F9F9F9" }}>
                  {preset.label}
                </span>
                <ArrowRight
                  size={14}
                  className="transition-colors group-hover:text-[#C9A24B]"
                  style={{ color: "#555" }}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Tool links */}
      <div className="container-nex pb-16">
        <div
          className="rounded-xl p-6 border"
          style={{ backgroundColor: "#111", borderColor: "rgba(255,255,255,0.08)" }}
        >
          <h3 className="font-semibold mb-4" style={{ color: "#F9F9F9" }}>
            Protocol Tools
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/tools/reconstitution-calculator", label: "Reconstitution Calculator" },
              { href: "/tools/dosing-frequency-planner", label: "Dosing Planner" },
              { href: "/tools/stack-builder", label: "Stack Builder" },
              { href: "/tools/peptide-interaction-checker", label: "Interaction Checker" },
              { href: "/compounds", label: "Compounds Index" },
              { href: "/protocols", label: "Research Protocols" },
            ].map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="text-xs px-4 py-2 rounded-lg transition-colors hover:opacity-80"
                style={{
                  backgroundColor: "rgba(201,162,75,0.15)",
                  color: "#C9A24B",
                  border: "1px solid rgba(201,162,75,0.3)",
                }}
              >
                {tool.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* RUO disclaimer */}
      <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="container-nex py-6">
          <p className="text-xs text-center" style={{ color: "#555" }}>
            All compounds are for research use only. Not for human or veterinary diagnostic,
            therapeutic, or clinical use. Rankings reflect research volume and catalog popularity,
            not therapeutic efficacy or safety claims.
          </p>
        </div>
      </div>
    </div>
  );
}
