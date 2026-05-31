"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";
import { products } from "@/lib/products";
import Breadcrumb from "@/components/Breadcrumb";
import { useState } from "react";

/* ─────────────────────────────────────────────
   BUNDLE DEFINITIONS
   ──────────────────────────────────────────── */
const BUNDLES = [
  {
    id: "recovery-stack",
    name: "Recovery Stack",
    tagline: "Tissue repair research — the two-compound protocol used in 90%+ of rodent recovery studies.",
    description:
      "BPC-157 and TB-500 target complementary phases of tissue repair. BPC-157 drives angiogenesis and NO-mediated healing via VEGFR2/FAK signaling; TB-500 sequests G-actin and activates the ILK/Akt/NF-κB cascade for anti-inflammatory protection and satellite cell activation. Together they cover the full inflammatory → proliferative → remodeling arc.",
    slugs: ["bpc-157", "tb-500"],
    badge: "Most Popular",
    badgeColor: "#C9A96E",
    accentColor: "#4A9B8E",
    synergy: [
      "BPC-157: VEGFR2 / FAK / NO — angiogenic & proliferative phase",
      "TB-500: ILK / Akt / NF-κB — anti-inflammatory & actin dynamics",
      "Non-competing receptors — additive, not antagonistic",
    ],
    protocols: [
      "BPC-157: 10 µg/kg IP daily",
      "TB-500: 150–600 µg/kg SC 2–3×/week",
      "Standard cycle: 8–12 weeks",
    ],
    reference: "Sikiric et al. (tendon/ligament); Bock-Marquette et al. Nature 2004",
    discountPct: 8,
  },
  {
    id: "gh-pulse-stack",
    name: "GH Pulse Stack",
    tagline: "The gold-standard dual-mechanism GH axis research protocol.",
    description:
      "CJC-1295 No DAC (Mod GRF 1-29) activates GHRHr via Gs/cAMP/PKA, while ipamorelin activates GHSR-1a via Gq/IP3/Ca²⁺ — orthogonal pathways that produce 8–12× supraadditive GH pulses vs either alone. Ipamorelin's selectivity ensures no cortisol or ACTH co-activation, making it the cleanest GHRP for GH axis research.",
    slugs: ["cjc-1295-no-dac", "ipamorelin"],
    badge: "Research Staple",
    badgeColor: "#7B9E87",
    accentColor: "#7B9E87",
    synergy: [
      "CJC-1295 No DAC: GHRHr / Gs / cAMP / PKA",
      "Ipamorelin: GHSR-1a / Gq / IP3 / Ca²⁺ — HPA-clean",
      "Orthogonal pathways → 8–12× GH amplification (Bowers 1998)",
    ],
    protocols: [
      "CJC-1295 No DAC: 100 mcg/kg SC, 2–3×/day",
      "Ipamorelin: 100–300 mcg/kg SC, same timing",
      "Co-inject for maximum synergy; 3–6 month cycles",
    ],
    reference: "Bowers et al. J Clin Endocrinol Metab 1998; Johansen et al. 1999",
    discountPct: 8,
  },
  {
    id: "longevity-pack",
    name: "Longevity Pack",
    tagline: "Three orthogonal longevity mechanisms in one curated protocol.",
    description:
      "NAD+ activates the sirtuin axis (SIRT1/SIRT3/PGC-1α), Epitalon restores telomerase activity via TERT upregulation and pineal melatonin function, and GHK-Cu upregulates Nrf2/GCLC antioxidant pathways plus collagen synthesis. Three non-competing upstream targets — designed for full-factorial combination longevity studies.",
    slugs: ["nad-plus", "epitalon", "ghk-cu"],
    badge: "Longevity Trio",
    badgeColor: "#9B7FD4",
    accentColor: "#9B7FD4",
    synergy: [
      "NAD+: SIRT1/SIRT3 → PGC-1α / SOD2 / mitochondrial biogenesis",
      "Epitalon: TERT telomerase / AANAT melatonin restoration",
      "GHK-Cu: Nrf2/Keap1 → GCLC/GSH / TGF-β1 / COL1A1",
    ],
    protocols: [
      "NAD+: 250–500 mg/kg IP (Gomes 2013) or NMN oral",
      "Epitalon: 1 µg/mouse SC, pulsatile 10-day courses",
      "GHK-Cu: 1–5 mg/kg/day SC; sterile saline preferred",
    ],
    reference: "Gomes 2013 Cell; Khavinson 2003 TRAP assay; Pickart GHK-Cu gene database",
    discountPct: 8,
  },
  {
    id: "metabolic-research-kit",
    name: "Metabolic Research Kit",
    tagline: "Side-by-side GLP-1 mono vs dual agonist comparison — the standard DIO study design.",
    description:
      "Semaglutide (GLP-1R monoagonist) alongside tirzepatide (GLP-1R/GIPR dual agonist) enables head-to-head comparison in DIO C57BL/6J models. Published SURMOUNT-1 vs STEP 1 data shows tirzepatide's additional 5–8% weight reduction. Designing a dual-arm study with these two compounds and a vehicle control is the standard approach for incretin mechanism dissection research.",
    slugs: ["semaglutide", "tirzepatide"],
    badge: "GLP-1 Comparison",
    badgeColor: "#4A90D9",
    accentColor: "#4A90D9",
    synergy: [
      "Semaglutide: GLP-1R monoagonism (STEP 1: −14.9% BW)",
      "Tirzepatide: GLP-1R/GIPR dual agonism (SURMOUNT-1: −20.9% BW)",
      "Head-to-head DIO study design — receptor mechanism dissection",
    ],
    protocols: [
      "Semaglutide: 0.1–1.0 mg/kg SC weekly, DIO C57BL/6J",
      "Tirzepatide: 0.03–3 mg/kg SC weekly, same model",
      "Pair-fed vehicle control arm essential",
    ],
    reference: "Wilding 2021 NEJM (STEP 1); Jastreboff 2022 NEJM (SURMOUNT-1)",
    discountPct: 5,
  },
];

/* ─────────────────────────────────────────────
   HELPER: find product by slug
   ──────────────────────────────────────────── */
function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

/* ─────────────────────────────────────────────
   BUNDLE CARD
   ──────────────────────────────────────────── */
function BundleCard({ bundle }: { bundle: (typeof BUNDLES)[number] }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const bundleProducts = bundle.slugs.map(getProduct).filter(Boolean) as NonNullable<ReturnType<typeof getProduct>>[];

  const originalTotal = bundleProducts.reduce((sum, p) => sum + p.price, 0);

  const handleAddAll = () => {
    bundleProducts.forEach((p) => {
      addItem(p, 'vial', undefined, 1, 0);
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Card Header */}
      <div
        className="relative px-7 pt-8 pb-6"
        style={{
          background: `linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 100%)`,
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {/* Badge */}
        <span
          className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest mb-4"
          style={{
            background: `${bundle.badgeColor}22`,
            color: bundle.badgeColor,
            border: `1px solid ${bundle.badgeColor}44`,
          }}
        >
          {bundle.badge}
        </span>

        <h2 className="text-2xl font-bold text-white tracking-tight mb-2">{bundle.name}</h2>
        <p className="text-sm text-[#888] leading-relaxed max-w-2xl">{bundle.tagline}</p>

        {/* Compound pills */}
        <div className="flex flex-wrap gap-2 mt-4">
          {bundleProducts.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors hover:opacity-80"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#ccc",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: bundle.accentColor }}
              />
              {p.name}
              <span style={{ color: "#666" }}>&nbsp;{p.size}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Card Body */}
      <div className="px-7 py-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: compounds */}
          <div>
            <p
              className="text-[10px] uppercase tracking-widest font-semibold mb-4"
              style={{ color: bundle.accentColor }}
            >
              Compounds Included
            </p>
            <div className="space-y-4">
              {bundleProducts.map((p) => (
                <div key={p.slug} className="flex items-start gap-3">
                  {/* Vial image placeholder */}
                  <div
                    className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <img
                      src={`/products/${p.slug}.png`}
                      alt={p.name}
                      className="w-8 h-8 object-contain"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <Link
                        href={`/products/${p.slug}`}
                        className="text-sm font-semibold text-white hover:text-[#C9A96E] transition-colors"
                      >
                        {p.name}
                      </Link>
                      <span className="text-sm font-medium" style={{ color: "#C9A96E" }}>
                        ${p.price}
                      </span>
                    </div>
                    <p className="text-xs text-[#777] mt-0.5 leading-relaxed line-clamp-2">
                      {p.tagline}
                    </p>
                    <div className="flex gap-2 mt-1.5">
                      <span
                        className="text-[10px] px-2 py-0.5 rounded-full"
                        style={{ background: "rgba(255,255,255,0.05)", color: "#888" }}
                      >
                        {p.size}
                      </span>
                      <span
                        className="text-[10px] px-2 py-0.5 rounded-full"
                        style={{ background: "rgba(255,255,255,0.05)", color: "#888" }}
                      >
                        {p.purity}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: protocol + pricing */}
          <div className="space-y-6">
            {/* Synergy */}
            <div>
              <p
                className="text-[10px] uppercase tracking-widest font-semibold mb-3"
                style={{ color: bundle.accentColor }}
              >
                Mechanistic Synergy
              </p>
              <ul className="space-y-1.5">
                {bundle.synergy.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <span
                      className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: bundle.accentColor }}
                    />
                    <span className="text-xs text-[#999] leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Research protocols */}
            <div>
              <p
                className="text-[10px] uppercase tracking-widest font-semibold mb-3"
                style={{ color: bundle.accentColor }}
              >
                Research Protocol
              </p>
              <ul className="space-y-1.5">
                {bundle.protocols.map((pr) => (
                  <li key={pr} className="flex items-start gap-2">
                    <svg
                      className="w-3 h-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 12 12"
                    >
                      <circle cx="6" cy="6" r="5" stroke={bundle.accentColor} strokeWidth="1.2" />
                      <path
                        d="M4 6l1.5 1.5L8 4"
                        stroke={bundle.accentColor}
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="text-xs text-[#888] leading-relaxed">{pr}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[10px] text-[#555] mt-3 italic">Ref: {bundle.reference}</p>
            </div>

            {/* Price block */}
            <div
              className="rounded-xl p-5"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-white">${originalTotal}</span>
                  </div>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {bundle.slugs.length} compounds · COA included
                  </p>
                </div>
              </div>

              {/* Per-item breakdown */}
              <div className="space-y-1.5 mb-4">
                {bundleProducts.map((p) => (
                  <div key={p.slug} className="flex justify-between text-xs">
                    <span className="text-[#666]">{p.name} ({p.size})</span>
                    <span className="text-[#888]">${p.price}</span>
                  </div>
                ))}

              </div>

              <button
                onClick={handleAddAll}
                className="w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2"
                style={{
                  background: added ? "#4ade80" : bundle.accentColor,
                  color: added ? "#000" : "#fff",
                }}
              >
                {added ? (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                      <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    Added to Order
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                      <path d="M2 2h1.5l1.75 7.5h6.5l1.5-5H5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <circle cx="7" cy="13" r="1" fill="currentColor" />
                      <circle cx="11" cy="13" r="1" fill="currentColor" />
                    </svg>
                    Add {bundle.slugs.length} Items to Order · ${originalTotal}
                  </>
                )}
              </button>

              <p className="text-center text-[10px] text-[#555] mt-3">
                Items added individually. COA + cold-chain shipping included.
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div
          className="mt-6 pt-6 text-sm text-[#888] leading-relaxed"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          {bundle.description}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE
   ──────────────────────────────────────────── */
export default function BundlesClient() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#0A0A08" }}>
      {/* Hero */}
      <section
        className="relative pt-28 pb-16 px-6"
        style={{
          background: "linear-gradient(180deg, #0D0D0B 0%, #111110 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Shop", href: "/products" },
              { label: "Bundles" },
            ]}
          />

          <div className="mt-6">
            <p
              className="text-[11px] uppercase tracking-[0.25em] font-medium mb-3"
              style={{ color: "#C9A96E" }}
            >
              Curated Research Protocols
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Compound Bundles
            </h1>
            <p className="mt-3 text-[#888] text-sm max-w-2xl leading-relaxed">
              Protocol-matched compound pairs and stacks — designed around published research
              synergies. Each bundle ships cold-chain together with full COA documentation.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mt-6">
              <div>
                <p className="text-2xl font-bold text-white">{BUNDLES.length}</p>
                <p className="text-[11px] uppercase tracking-widest text-[#666]">Research stacks</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">≥99%</p>
                <p className="text-[11px] uppercase tracking-widest text-[#666]">Purity verified</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">COA</p>
                <p className="text-[11px] uppercase tracking-widest text-[#666]">Every compound</p>
              </div>
            </div>
          </div>

          {/* Jump links */}
          <div className="flex flex-wrap gap-2 mt-8">
            {BUNDLES.map((b) => (
              <a
                key={b.id}
                href={`#${b.id}`}
                className="px-3 py-1.5 rounded-full text-xs font-medium transition-colors hover:opacity-80"
                style={{
                  background: `${b.badgeColor}18`,
                  color: b.badgeColor,
                  border: `1px solid ${b.badgeColor}33`,
                }}
              >
                {b.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Bundle cards */}
      <section className="max-w-5xl mx-auto px-6 py-12 space-y-10">
        {BUNDLES.map((bundle) => (
          <div key={bundle.id} id={bundle.id}>
            <BundleCard bundle={bundle} />
          </div>
        ))}
      </section>

      {/* Why bundles section */}
      <section
        className="border-t mx-6 max-w-5xl xl:mx-auto py-12"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <p
            className="text-[10px] uppercase tracking-widest font-semibold mb-3"
            style={{ color: "#C9A96E" }}
          >
            Why Bundles?
          </p>
          <h2 className="text-xl font-bold text-white mb-6 tracking-tight">
            Designed around real research protocols
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "Protocol-matched",
                body: "Every bundle maps to a published research methodology — not arbitrary pairings. Synergy is mechanistically justified.",
              },
              {
                title: "Single cold-chain shipment",
                body: "All bundle compounds ship together in one insulated package. No fragmented deliveries or staggered cold-chain logistics.",
              },
              {
                title: "COA for every vial",
                body: "Each compound in a bundle carries its own lot-specific Certificate of Analysis from Janoshik Analytical — HPLC + MS verified.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl px-5 py-5"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-[#777] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section
        className="px-6 py-12"
        style={{ background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-white mb-1">Not sure which bundle fits your research?</p>
            <p className="text-xs text-[#666]">
              Use the Protocol Finder quiz to get a personalized compound recommendation.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link
              href="/quiz"
              className="text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
              style={{ background: "#C9A96E", color: "#000" }}
            >
              Find Your Protocol →
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium px-5 py-2.5 rounded-xl border transition-colors hover:bg-white/5"
              style={{ borderColor: "rgba(255,255,255,0.15)", color: "#aaa" }}
            >
              Browse All
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="max-w-5xl mx-auto px-6 pb-12">
        <p className="text-[10px] text-[#444] leading-relaxed text-center">
          All compounds sold for research use only (RUO). Not for human or veterinary use. Not for
          use in food, drugs, or cosmetics. By purchasing you confirm you are a qualified researcher
          operating within applicable regulations.{" "}
          <Link href="/terms" className="underline hover:text-[#666]">
            Terms of Service
          </Link>
          .
        </p>
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Compound Bundles — Nexphoria Research",
            description:
              "Curated research peptide bundles with protocol-matched compound stacks. Cold-chain shipping. COA included.",
            url: "https://nexphoria.com/products/bundles",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://nexphoria.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Shop",
                  item: "https://nexphoria.com/products",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Bundles",
                  item: "https://nexphoria.com/products/bundles",
                },
              ],
            },
          }),
        }}
      />
    </main>
  );
}
