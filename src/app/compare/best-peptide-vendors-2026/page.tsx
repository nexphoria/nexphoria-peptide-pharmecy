import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Best Peptide Vendors 2026: Complete Researcher's Guide | Nexphoria",
  description:
    "We compared the 8 major US research peptide vendors on purity standards, COA verifiability, cold-chain shipping, and pricing. The complete 2026 vendor comparison — including what happened to Peptide Sciences.",
  openGraph: {
    title: "Best Peptide Vendors 2026: Researcher's Comparison Guide",
    description:
      "Nexphoria, Biotech Peptides, Blue Sky, Amino Asylum, Limitless, Core Peptides compared. Full breakdown by purity, COAs, cold-chain, and pricing. Plus: what happened to Peptide Sciences.",
    url: "https://nexphoria.com/compare/best-peptide-vendors-2026",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/best-peptide-vendors-2026" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What happened to Peptide Sciences?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Peptide Sciences voluntarily ceased operations in March 2026. No acquisition, no successor, no public explanation. The site went offline and approximately 70,000+ monthly visitors were left without their primary vendor.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best Peptide Sciences alternative?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nexphoria holds the closest quality standard to Peptide Sciences: ≥99% HPLC purity, mass spectrometry on every compound, lot-specific third-party COAs publicly posted, US synthesis, and cold-chain shipping on every order.",
      },
    },
    {
      "@type": "Question",
      name: "How do I verify a research peptide vendor's COAs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A legitimate COA will include the testing laboratory name, analyst signature, batch/lot number, HPLC method details, and purity result. Contact the testing lab with the lot number to independently confirm the test was run. Vendors who won't disclose which lab ran their tests, or whose COAs lack traceable lot numbers, should be treated with skepticism.",
      },
    },
    {
      "@type": "Question",
      name: "Is cold-chain shipping necessary for research peptides?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lyophilized peptides have meaningful stability at ambient temperature for short periods, but thermal stress during shipping accelerates degradation — particularly in warmer months. Cold-pack + insulated mailer shipping is best practice for preserving compound integrity in transit.",
      },
    },
  ],
};

type RowStatus = "ok" | "warn" | "bad";

interface VendorRow {
  vendor: string;
  stars: number;
  status: RowStatus;
  purity: string;
  coa: string;
  coldChain: string;
  catalog: string;
  bestFor: string;
  avoidIf: string;
  compareSlug?: string;
}

const vendorRows: VendorRow[] = [
  {
    vendor: "Nexphoria",
    stars: 5,
    status: "ok",
    purity: "≥99% HPLC + MS",
    coa: "Publicly verifiable, lot-specific",
    coldChain: "Every order",
    catalog: "50+ compounds",
    bestFor: "COA transparency, cold-chain, full catalog",
    avoidIf: "—",
  },
  {
    vendor: "Biotech Peptides",
    stars: 4,
    status: "ok",
    purity: "≥99% HPLC",
    coa: "Good",
    coldChain: "$200+ orders only",
    catalog: "Moderate",
    bestFor: "Solid quality, no frills",
    avoidIf: "Need cold-chain or wide catalog",
    compareSlug: "biotech-peptides-vs-nexphoria",
  },
  {
    vendor: "Blue Sky Peptide",
    stars: 3,
    status: "warn",
    purity: "Claimed ≥98%",
    coa: "Limited public visibility",
    coldChain: "Standard packaging",
    catalog: "5mg vials only",
    bestFor: "Established vendor, budget pricing",
    avoidIf: "Need 10mg vials or cold-chain",
    compareSlug: "blue-sky-peptide-vs-nexphoria",
  },
  {
    vendor: "Limitless Life / Biotech",
    stars: 3,
    status: "warn",
    purity: "Claimed ≥98%",
    coa: "Moderate",
    coldChain: "Not guaranteed",
    catalog: "Wide (includes capsules)",
    bestFor: "Variety seekers",
    avoidIf: "Need brand stability or capsule-free options",
    compareSlug: "limitless-life-vs-nexphoria",
  },
  {
    vendor: "Core Peptides",
    stars: 3,
    status: "warn",
    purity: "Third-party (limited info)",
    coa: "Limited",
    coldChain: "Not emphasized",
    catalog: "Small",
    bestFor: "Simple single-compound purchases",
    avoidIf: "Need catalog depth",
    compareSlug: "core-peptides-vs-nexphoria",
  },
  {
    vendor: "Amino Asylum",
    stars: 2,
    status: "bad",
    purity: "Claimed",
    coa: "⚠️ Verification concerns (Reddit-documented)",
    coldChain: "Not specified",
    catalog: "SARMs-primary",
    bestFor: "Price-sensitive buyers",
    avoidIf: "COA verification is required",
    compareSlug: "amino-asylum-vs-nexphoria",
  },
  {
    vendor: "Swiss Chems",
    stars: 2,
    status: "bad",
    purity: "Claimed",
    coa: "Limited US verification",
    coldChain: "Not specified",
    catalog: "International sourced",
    bestFor: "International buyers",
    avoidIf: "US-based, customs-risk-averse",
  },
  {
    vendor: "Peptide Sciences",
    stars: 0,
    status: "bad",
    purity: "Was ≥99%",
    coa: "Was per-lot",
    coldChain: "Standard",
    catalog: "Was full spectrum",
    bestFor: "N/A — permanently closed",
    avoidIf: "All buyers — site offline March 2026",
    compareSlug: "peptide-sciences-alternative",
  },
];

const qualityCriteria = [
  {
    title: "HPLC purity documentation",
    body: "Any reputable vendor publishes HPLC data showing purity levels. The standard is ≥98%; premium vendors hold ≥99%. HPLC measures relative purity within the chromatographic window — it does not confirm molecular identity.",
  },
  {
    title: "Mass spectrometry (MS) identity verification",
    body: "MS confirms the compound is what it claims to be. Without MS, you know it's pure but not necessarily pure [correct compound]. ESI-MS or MALDI-TOF should be standard on every lot — not an optional add-on.",
  },
  {
    title: "Publicly verifiable COAs",
    body: "The COA needs to be traceable to a real lab batch. If a vendor won't disclose which testing lab ran the analysis, or if the COA lacks a lot number verifiable with that lab, the document is effectively unverifiable.",
  },
  {
    title: "Cold-chain shipping",
    body: "Lyophilized peptides have real stability at ambient temperature for limited windows, but shipping thermal stress accelerates degradation. Best practice is cold-pack + insulated packaging on every order — not just orders over a spending threshold.",
  },
  {
    title: "US manufacturing vs. international",
    body: "US-synthesized compounds don't face customs seizure risk and operate under domestic legal frameworks. International vendors introduce shipping delays and customs uncertainty — relevant factors for time-sensitive research.",
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={12}
          fill={i < count ? "#B8A44C" : "none"}
          style={{ color: i < count ? "#B8A44C" : "#ccc" }}
        />
      ))}
    </div>
  );
}

const faqs = [
  {
    q: "What happened to Peptide Sciences?",
    a: "Peptide Sciences voluntarily ceased operations in March 2026. No acquisition, no successor, no public explanation. The site went offline and approximately 70,000+ monthly visitors were left without their primary vendor.",
  },
  {
    q: "What is the best Peptide Sciences alternative?",
    a: "Nexphoria holds the closest quality standard to Peptide Sciences: ≥99% HPLC purity, mass spectrometry on every compound, lot-specific third-party COAs publicly posted, US synthesis, and cold-chain shipping on every order.",
  },
  {
    q: "How do I verify a research peptide vendor's COAs?",
    a: "A legitimate COA will include the testing lab name, analyst signature, batch/lot number, HPLC method details, and result. Contact the lab with the lot number to confirm the test was actually run. Vendors who won't disclose which lab ran their tests should be treated with skepticism.",
  },
  {
    q: "Is cold-chain shipping necessary for research peptides?",
    a: "Lyophilized peptides have meaningful stability at ambient temperature for short periods, but thermal stress during shipping accelerates degradation — particularly in warmer months. Cold-pack + insulated mailer shipping is best practice for preserving compound integrity.",
  },
];

export default function BestPeptideVendors2026Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div style={{ backgroundColor: "#F9F9F9" }}>
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
                { label: "Compare", href: "/compare" },
                { label: "Best Vendors 2026" },
              ]}
            />
            <p className="eyebrow mb-5" style={{ color: "#B8A44C" }}>
              2026 Vendor Guide
            </p>
            <h1
              className="text-4xl md:text-5xl mb-6"
              style={{
                fontWeight: 500,
                color: "#F9F9F9",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Best research peptide vendors in 2026.
            </h1>
            <p
              className="text-lg max-w-2xl mb-6"
              style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}
            >
              We compared the 8 major US vendors on purity documentation, COA verifiability,
              cold-chain practices, and pricing. Complete guide — including what happened to
              Peptide Sciences.
            </p>
            <div
              className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full mb-8"
              style={{ backgroundColor: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.3)", color: "#f87171" }}
            >
              <XCircle size={12} />
              Peptide Sciences closed March 2026 — 70,000+ buyers searching for alternatives
            </div>
            <div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#B8A44C", color: "#010101" }}
              >
                Browse Nexphoria Catalog <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Quick answer table */}
        <section className="px-6 py-20 md:py-28">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#B8A44C" }}>
              The Short Answer
            </p>
            <h2
              className="text-2xl md:text-3xl mb-10"
              style={{ fontWeight: 500, color: "#010101", letterSpacing: "-0.01em" }}
            >
              2026 vendor rankings at a glance
            </h2>

            <div className="rounded-lg overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
              {/* Header */}
              <div
                className="grid grid-cols-12 gap-0"
                style={{ backgroundColor: "#010101" }}
              >
                {["Vendor", "Rating", "Purity / COA", "Cold-Chain", "Best For", "Compare"].map((h, i) => (
                  <div
                    key={h}
                    className={`px-4 py-3 ${
                      i === 0 ? "col-span-2" :
                      i === 1 ? "col-span-1" :
                      i === 2 ? "col-span-3" :
                      i === 3 ? "col-span-2" :
                      i === 4 ? "col-span-3" :
                      "col-span-1"
                    }`}
                    style={{ borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.06)" : undefined }}
                  >
                    <span className="text-xs uppercase tracking-widest" style={{ color: "#666" }}>{h}</span>
                  </div>
                ))}
              </div>

              {vendorRows.map((row, i) => {
                const isClosed = row.stars === 0;
                const isNexphoria = row.vendor === "Nexphoria";
                const rowBg = isClosed
                  ? "rgba(239,68,68,0.03)"
                  : isNexphoria
                  ? "rgba(184,164,76,0.04)"
                  : i % 2 === 0
                  ? "#fff"
                  : "#fafafa";

                return (
                  <div
                    key={row.vendor}
                    className="grid grid-cols-12 gap-0"
                    style={{
                      borderTop: "1px solid rgba(0,0,0,0.06)",
                      backgroundColor: rowBg,
                    }}
                  >
                    {/* Vendor */}
                    <div className="col-span-2 px-4 py-4 flex items-center gap-2">
                      {isClosed && <XCircle size={13} style={{ color: "#ef4444", flexShrink: 0 }} />}
                      {isNexphoria && <CheckCircle2 size={13} style={{ color: "#22c55e", flexShrink: 0 }} />}
                      <span
                        className="text-sm"
                        style={{
                          fontWeight: isNexphoria ? 600 : 500,
                          color: isClosed ? "#999" : "#010101",
                          textDecoration: isClosed ? "line-through" : undefined,
                        }}
                      >
                        {row.vendor}
                      </span>
                    </div>

                    {/* Stars */}
                    <div
                      className="col-span-1 px-4 py-4 flex items-center"
                      style={{ borderLeft: "1px solid rgba(0,0,0,0.06)" }}
                    >
                      {isClosed ? (
                        <span className="text-xs" style={{ color: "#ef4444" }}>Closed</span>
                      ) : (
                        <StarRow count={row.stars} />
                      )}
                    </div>

                    {/* Purity / COA */}
                    <div
                      className="col-span-3 px-4 py-4"
                      style={{ borderLeft: "1px solid rgba(0,0,0,0.06)" }}
                    >
                      <p className="text-xs mb-1" style={{ color: "#010101", fontWeight: 500 }}>{row.purity}</p>
                      <p className="text-xs" style={{ color: "#777", fontWeight: 300, lineHeight: 1.5 }}>{row.coa}</p>
                    </div>

                    {/* Cold chain */}
                    <div
                      className="col-span-2 px-4 py-4 flex items-start gap-1.5"
                      style={{ borderLeft: "1px solid rgba(0,0,0,0.06)" }}
                    >
                      {row.coldChain === "Every order" ? (
                        <CheckCircle2 size={13} style={{ color: "#22c55e", flexShrink: 0, marginTop: 2 }} />
                      ) : row.coldChain.includes("Not") ? (
                        <XCircle size={13} style={{ color: "#ef4444", flexShrink: 0, marginTop: 2 }} />
                      ) : (
                        <AlertCircle size={13} style={{ color: "#f59e0b", flexShrink: 0, marginTop: 2 }} />
                      )}
                      <span className="text-xs" style={{ color: "#555", fontWeight: 300, lineHeight: 1.5 }}>
                        {row.coldChain}
                      </span>
                    </div>

                    {/* Best for */}
                    <div
                      className="col-span-3 px-4 py-4"
                      style={{ borderLeft: "1px solid rgba(0,0,0,0.06)" }}
                    >
                      <p className="text-xs mb-1" style={{ color: "#333", fontWeight: 300, lineHeight: 1.5 }}>
                        ✓ {row.bestFor}
                      </p>
                      {row.avoidIf !== "—" && (
                        <p className="text-xs" style={{ color: "#999", fontWeight: 300, lineHeight: 1.5 }}>
                          ✗ {row.avoidIf}
                        </p>
                      )}
                    </div>

                    {/* Compare link */}
                    <div
                      className="col-span-1 px-4 py-4 flex items-center"
                      style={{ borderLeft: "1px solid rgba(0,0,0,0.06)" }}
                    >
                      {row.compareSlug && (
                        <Link
                          href={`/compare/${row.compareSlug}`}
                          className="text-xs hover:opacity-70 transition-opacity"
                          style={{ color: "#B8A44C" }}
                        >
                          Compare →
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-xs mt-4" style={{ color: "#999", fontWeight: 300 }}>
              * This guide is published by Nexphoria. Ratings reflect publicly documented vendor attributes and community forum research (r/Peptides, r/PeptidesGains), not subjective preference.
            </p>
          </div>
        </section>

        {/* Peptide Sciences vacuum */}
        <section className="px-6 py-20 md:py-28" style={{ backgroundColor: "#010101" }}>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#ef4444" }}>
                  The Market Disruption
                </p>
                <h2
                  className="text-2xl md:text-3xl mb-6"
                  style={{ fontWeight: 500, color: "#F9F9F9", letterSpacing: "-0.01em" }}
                >
                  The Peptide Sciences vacuum
                </h2>
                <p className="text-base mb-4" style={{ color: "#A0A0A0", lineHeight: 1.8, fontWeight: 300 }}>
                  Peptide Sciences held the top position in this market for years — strongest SEO, most trusted brand, cleanest quality documentation. Their voluntary shutdown in March 2026 removed an estimated 70,000+ monthly buyers from the market.
                </p>
                <p className="text-base mb-6" style={{ color: "#A0A0A0", lineHeight: 1.8, fontWeight: 300 }}>
                  The remaining vendor field is uneven. Quality, pricing, and transparency vary widely. The "research only" legal positioning used across the category creates no real enforcement on quality standards — which means COA rigor becomes entirely vendor-discretionary.
                </p>
                <Link
                  href="/compare/peptide-sciences-alternative"
                  className="inline-flex items-center gap-2 text-sm"
                  style={{ color: "#B8A44C", fontWeight: 500 }}
                >
                  Full Peptide Sciences alternative guide <ArrowRight size={14} />
                </Link>
              </div>
              <div
                className="rounded-xl p-8"
                style={{ backgroundColor: "rgba(184,164,76,0.08)", border: "1px solid rgba(184,164,76,0.2)" }}
              >
                <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#B8A44C" }}>
                  Former PS Customer?
                </p>
                <h3 className="text-xl font-medium mb-4" style={{ color: "#F9F9F9" }}>
                  Switch to Nexphoria
                </h3>
                <ul className="space-y-3 mb-6">
                  {[
                    "Same ≥99% HPLC purity minimum",
                    "MS identity verification every lot",
                    "US-synthesized, cold-chain fulfilled",
                    "Publicly verifiable COAs",
                    "50+ compounds — full PS catalog covered",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={13} style={{ color: "#B8A44C", flexShrink: 0, marginTop: 2 }} />
                      <span className="text-sm" style={{ color: "#A0A0A0", fontWeight: 300, lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div
                  className="rounded-lg px-4 py-3 mb-4 text-center"
                  style={{ backgroundColor: "rgba(184,164,76,0.12)", border: "1px solid rgba(184,164,76,0.25)" }}
                >
                  <span className="text-xs" style={{ color: "#A0A0A0" }}>Use code </span>
                  <span className="text-lg font-semibold" style={{ color: "#B8A44C" }}>PS2026</span>
                  <span className="text-xs" style={{ color: "#A0A0A0" }}> for 10% off</span>
                </div>
                <Link
                  href="/products"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-medium transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#B8A44C", color: "#010101" }}
                >
                  Browse the Catalog <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quality criteria */}
        <section className="px-6 py-20 md:py-28" style={{ backgroundColor: "#EAE7E3" }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#B8A44C" }}>
              Evaluation Framework
            </p>
            <h2
              className="text-2xl md:text-3xl mb-10"
              style={{ fontWeight: 500, color: "#010101", letterSpacing: "-0.01em" }}
            >
              What makes a vendor trustworthy?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {qualityCriteria.map((c, i) => (
                <div
                  key={c.title}
                  className="rounded-lg p-6"
                  style={{
                    backgroundColor: "#F9F9F9",
                    border: "1px solid rgba(0,0,0,0.07)",
                    borderTop: `2px solid #B8A44C`,
                  }}
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold mb-4"
                    style={{ backgroundColor: "#B8A44C", color: "#010101" }}
                  >
                    {i + 1}
                  </div>
                  <h3
                    className="text-base font-medium mb-3"
                    style={{ color: "#010101", letterSpacing: "-0.01em" }}
                  >
                    {c.title}
                  </h3>
                  <p className="text-sm" style={{ color: "#555", lineHeight: 1.75, fontWeight: 300 }}>
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-20 md:py-28">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#B8A44C" }}>FAQ</p>
            <h2 className="text-2xl md:text-3xl mb-10" style={{ fontWeight: 500, color: "#010101", letterSpacing: "-0.01em" }}>
              Common questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-lg p-6"
                  style={{ backgroundColor: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
                >
                  <p className="text-base font-medium mb-2" style={{ color: "#010101" }}>{faq.q}</p>
                  <p className="text-sm" style={{ color: "#555", lineHeight: 1.75, fontWeight: 300 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Individual comparison links */}
        <section className="px-6 py-20 md:py-28" style={{ backgroundColor: "#EAE7E3" }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#B8A44C" }}>
              Deep Dives
            </p>
            <h2
              className="text-2xl md:text-3xl mb-8"
              style={{ fontWeight: 500, color: "#010101", letterSpacing: "-0.01em" }}
            >
              Individual vendor comparisons
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: "Peptide Sciences Alternative", slug: "peptide-sciences-alternative", hot: true },
                { label: "vs Blue Sky Peptide", slug: "blue-sky-peptide-vs-nexphoria" },
                { label: "vs Limitless Life", slug: "limitless-life-vs-nexphoria" },
                { label: "vs Amino Asylum", slug: "amino-asylum-vs-nexphoria" },
                { label: "vs Biotech Peptides", slug: "biotech-peptides-vs-nexphoria" },
                { label: "vs Core Peptides", slug: "core-peptides-vs-nexphoria" },
              ].map((link) => (
                <Link
                  key={link.slug}
                  href={`/compare/${link.slug}`}
                  className="flex items-center justify-between p-4 rounded-lg transition-opacity hover:opacity-80"
                  style={{
                    backgroundColor: "#F9F9F9",
                    border: `1px solid ${link.hot ? "rgba(184,164,76,0.4)" : "rgba(0,0,0,0.07)"}`,
                  }}
                >
                  <span className="text-sm font-medium" style={{ color: "#010101" }}>
                    {link.hot && <span style={{ color: "#B8A44C" }}>🔥 </span>}
                    {link.label}
                  </span>
                  <ArrowRight size={14} style={{ color: "#B8A44C" }} />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#B8A44C" }}>Research Catalog</p>
            <h2 className="text-3xl md:text-4xl mb-5 font-medium tracking-tight" style={{ color: "#010101" }}>
              Ready to source?
            </h2>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "#555", lineHeight: 1.7, fontWeight: 300 }}>
              Every compound ships with lot-specific COAs from independent laboratories. ≥99% HPLC purity, MS-verified identity, cold-chain handled.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/products" className="btn-primary">Browse the Catalog</Link>
              <Link
                href="/coa"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm"
                style={{ backgroundColor: "transparent", border: "1px solid rgba(0,0,0,0.15)", color: "#555" }}
              >
                View COAs First
              </Link>
            </div>
          </div>
        </section>

        <div
          className="mx-6 mb-6 max-w-3xl md:mx-auto px-5 py-4 rounded-lg text-xs"
          style={{ background: "rgba(0,0,0,0.04)", borderLeft: "3px solid #B8A44C", color: "#777", lineHeight: 1.7 }}
        >
          <strong style={{ color: "#010101" }}>Research Use Only: </strong>
          All Nexphoria compounds are sold exclusively for qualified research purposes and are not intended for human consumption, therapeutic use, or diagnostic purposes. Nothing on this site constitutes medical advice.
        </div>
      </div>
    </>
  );
}
