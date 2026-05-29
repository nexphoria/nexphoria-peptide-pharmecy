import type { Metadata } from "next";
import Link from "next/link";
import { products, categories, Product } from "@/lib/products";
import { articles } from "@/lib/blog";
import CompoundsClient from "./CompoundsClient";

export const metadata: Metadata = {
  title: "Compound Index | Nexphoria",
  description:
    "Research-oriented index of all peptide compounds in the Nexphoria catalog. Category groupings, mechanism summaries, CAS numbers, molecular weights, and links to product pages and related research articles.",
  openGraph: {
    title: "Compound Index | Nexphoria",
    description:
      "Complete index of research peptide compounds: mechanisms, categories, CAS numbers, and related literature.",
    url: "https://nexphoria.com/compounds",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const compoundsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Nexphoria Compound Index",
  url: "https://nexphoria.com/compounds",
  description:
    "Research-oriented index of peptide compounds available for scientific research.",
  publisher: {
    "@type": "Organization",
    name: "Nexphoria",
    url: "https://nexphoria.com",
  },
};

// Map product slug keywords to related article slugs
const COMPOUND_TO_ARTICLES: Record<string, string[]> = {
  "bpc-157": ["bpc-157-researchers-complete-guide"],
  "tb-500": ["tb-500-thymosin-beta-4-researchers-complete-guide"],
  "ghk-cu": ["ghk-cu-copper-peptide-research-review"],
  "ipamorelin": ["ipamorelin-vs-ghrp2-vs-ghrp6-growth-hormone-secretagogue-comparison"],
  "cjc-1295-ipamorelin": ["ipamorelin-vs-ghrp2-vs-ghrp6-growth-hormone-secretagogue-comparison"],
  "cjc-1295": ["ipamorelin-vs-ghrp2-vs-ghrp6-growth-hormone-secretagogue-comparison"],
  "semaglutide": ["semaglutide-vs-tirzepatide-research-comparison"],
  "tirzepatide": ["semaglutide-vs-tirzepatide-research-comparison"],
};

// Category metadata (accent color, description, icon)
export const CATEGORY_META: Record<string, { color: string; bg: string; description: string }> = {
  "Recovery & Healing": {
    color: "#4A9B8E",
    bg: "rgba(74,155,142,0.08)",
    description: "Tissue repair, angiogenesis, anti-inflammatory signaling, and connective tissue remodeling.",
  },
  "Growth Hormone": {
    color: "#C9A24B",
    bg: "rgba(201,162,75,0.08)",
    description: "Somatotropic axis peptides: GHRH analogs, GHS-R1a agonists, and oral GH secretagogues.",
  },
  "Weight Management": {
    color: "#EF4444",
    bg: "rgba(239,68,68,0.08)",
    description: "GLP-1/GIP receptor agonists, lipolytic fragments, and metabolic regulatory peptides.",
  },
  "Anti-Aging": {
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.08)",
    description: "Telomerase activation, ECM restoration, mitochondrial protection, and longevity research.",
  },
  Cognitive: {
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.08)",
    description: "BDNF upregulation, anxiolytic mechanisms, neuroprotection, and CNS modulation.",
  },
  Wellness: {
    color: "#22C55E",
    bg: "rgba(34,197,94,0.08)",
    description: "Immune modulation, reproductive axis, social neuroscience, and broad metabolic support.",
  },
  Accessories: {
    color: "#64748B",
    bg: "rgba(100,116,139,0.08)",
    description: "USP-grade reconstitution supplies for peptide research protocols.",
  },
};

export interface CompoundEntry extends Product {
  relatedArticles: { slug: string; title: string }[];
}

export default function CompoundsPage() {
  // Build compound entries with related articles
  const compoundEntries: CompoundEntry[] = products
    .filter((p) => p.category !== "Accessories")
    .map((p) => {
      const relatedArticleSlugs = COMPOUND_TO_ARTICLES[p.slug] || [];
      const relatedArticles = relatedArticleSlugs
        .map((slug) => articles.find((a) => a.slug === slug))
        .filter(Boolean)
        .map((a) => ({ slug: a!.slug, title: a!.title }));
      return { ...p, relatedArticles };
    });

  // Group by category (maintain order)
  const categoryOrder = categories.filter((c) => c !== "All" && c !== "Accessories");
  const grouped: Record<string, CompoundEntry[]> = {};
  for (const cat of categoryOrder) {
    const entries = compoundEntries.filter((c) => c.category === cat);
    if (entries.length > 0) grouped[cat] = entries;
  }

  const totalCompounds = compoundEntries.length;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(compoundsSchema) }}
      />

      <div style={{ backgroundColor: "#FFFFF3" }}>
        {/* Hero */}
        <section
          className="relative px-6 pt-32 pb-16 md:pt-40 md:pb-20"
          style={{ backgroundColor: "#010101" }}
        >
          <div className="max-w-6xl mx-auto">
            <p className="eyebrow mb-5" style={{ color: "#A4B08A" }}>
              Research Reference
            </p>
            <h1
              className="text-4xl md:text-5xl mb-6"
              style={{
                fontWeight: 500,
                color: "#FFFFF3",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Compound Index
            </h1>
            <p
              className="text-lg max-w-2xl mb-8"
              style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}
            >
              {totalCompounds} research compounds organized by mechanism class. Each entry
              includes CAS number, molecular weight, primary mechanism summary, and links
              to product pages and related research articles.
            </p>

            {/* Category quick-jump */}
            <div className="flex flex-wrap gap-2">
              {categoryOrder.map((cat) => {
                const meta = CATEGORY_META[cat];
                return (
                  <a
                    key={cat}
                    href={`#${cat.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`}
                    className="text-xs px-3 py-1.5 rounded-full transition-opacity hover:opacity-80"
                    style={{
                      backgroundColor: meta?.color || "#A4B08A",
                      color: "#010101",
                      fontWeight: 500,
                      letterSpacing: "0.03em",
                    }}
                  >
                    {cat}
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats strip */}
        <section
          className="px-6 py-6 border-b"
          style={{ backgroundColor: "#F5F3EE", borderColor: "#E0DDD7" }}
        >
          <div className="max-w-6xl mx-auto flex flex-wrap gap-6 md:gap-12">
            <div>
              <span className="text-2xl font-semibold" style={{ color: "#010101" }}>
                {totalCompounds}
              </span>
              <span className="text-sm ml-2" style={{ color: "#888" }}>
                compounds
              </span>
            </div>
            {categoryOrder.map((cat) => {
              const count = grouped[cat]?.length || 0;
              if (!count) return null;
              return (
                <div key={cat}>
                  <span
                    className="text-2xl font-semibold"
                    style={{ color: CATEGORY_META[cat]?.color || "#010101" }}
                  >
                    {count}
                  </span>
                  <span className="text-sm ml-2" style={{ color: "#888" }}>
                    {cat}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Search + compound grid — client */}
        <CompoundsClient grouped={grouped} categoryOrder={categoryOrder} />

        {/* Bottom CTA */}
        <section
          className="px-6 py-20 md:py-28"
          style={{ backgroundColor: "#010101" }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: "#A4B08A" }}
            >
              Ready to Source
            </p>
            <h2
              className="text-3xl md:text-4xl mb-5 font-medium tracking-tight"
              style={{ color: "#FFFFF3" }}
            >
              Every compound ships with a COA.
            </h2>
            <p
              className="text-base mb-8 max-w-xl mx-auto"
              style={{ color: "#A0A0A0", lineHeight: 1.7, fontWeight: 300 }}
            >
              ≥99% HPLC purity, lot-specific certificates from independent
              laboratories, cold-chain fulfilled to your door.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/products" className="btn-primary">
                Browse Catalog
              </Link>
              <Link
                href="/blog"
                className="text-sm px-5 py-2.5 rounded-lg transition-opacity hover:opacity-80"
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  color: "#FFFFF3",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                Research Journal
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
