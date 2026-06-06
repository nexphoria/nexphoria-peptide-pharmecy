import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Paradigm Peptides: Quality, COAs & Shipping Compared 2026",
  description:
    "Paradigm Peptides has a mid-tier reputation but gaps in COA verifiability and cold-chain defaults. Full side-by-side comparison with Nexphoria for research peptide buyers.",
  openGraph: {
    title: "Nexphoria vs. Paradigm Peptides: Quality, COAs & Shipping Compared 2026",
    description:
      "Paradigm Peptides vs Nexphoria: purity standards, COA transparency, cold-chain shipping, and US manufacturing. Full breakdown for serious researchers.",
    url: "https://nexphoria.com/compare/paradigm-peptides-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/paradigm-peptides-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Paradigm Peptides a reputable vendor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Paradigm Peptides has operated in the research peptide market for several years and has a mixed-to-positive community reputation. The primary gaps researchers identify are around COA depth — documents are provided but independent lab verification and lot-level mass spec data are not consistently available.",
      },
    },
    {
      "@type": "Question",
      name: "How does Paradigm Peptides' purity testing compare to Nexphoria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Paradigm Peptides provides COA documents with purity claims, but the depth of third-party verification — named testing facilities, lot-specific identifiers, mass spectrometry confirmation — is not consistently published. Nexphoria posts full HPLC and MS data on every compound, lot-specific, with the testing lab named.",
      },
    },
    {
      "@type": "Question",
      name: "Does Paradigm Peptides include cold packs with peptide orders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Paradigm Peptides does not consistently include cold-chain packaging on all orders. Nexphoria ships every order with cold packs in insulated mailers, regardless of order size or season.",
      },
    },
    {
      "@type": "Question",
      name: "Which is better for a first-time research peptide order: Paradigm or Nexphoria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For first-time researchers, documentation transparency matters most. Nexphoria provides independently verifiable COAs, a 500+ article research library, and cold-chain shipping on every order — a more complete starting point than Paradigm's catalog-focused approach.",
      },
    },
  ],
};

type RowStatus = "ok" | "warn" | "bad";

const comparisonRows: Array<{
  feature: string;
  pp: { label: string; status: RowStatus };
  nx: { label: string; status: RowStatus };
}> = [
  {
    feature: "Pricing",
    pp: { label: "Mid-tier pricing", status: "warn" },
    nx: { label: "Competitive mid-tier with testing included", status: "ok" },
  },
  {
    feature: "COA Verifiability",
    pp: { label: "COAs provided; third-party lab not always named", status: "warn" },
    nx: { label: "Named lab, lot-specific, mass spec, verifiable", status: "ok" },
  },
  {
    feature: "Purity Standard",
    pp: { label: "≥98% stated; mass spec not standard", status: "warn" },
    nx: { label: "≥99% HPLC + MS confirmed, publicly posted", status: "ok" },
  },
  {
    feature: "Cold-Chain Shipping",
    pp: { label: "Not included on all orders by default", status: "bad" },
    nx: { label: "Cold-pack every order, included", status: "ok" },
  },
  {
    feature: "US Manufacturing",
    pp: { label: "US-based; synthesis origin partially disclosed", status: "warn" },
    nx: { label: "Confirmed US synthesis, fully documented", status: "ok" },
  },
  {
    feature: "Delivery Format",
    pp: { label: "Lyophilized and liquid available", status: "warn" },
    nx: { label: "Lyophilized only (research standard)", status: "ok" },
  },
  {
    feature: "Research Content",
    pp: { label: "Limited blog; catalog-focused site", status: "bad" },
    nx: { label: "500+ technical research articles", status: "ok" },
  },
  {
    feature: "Catalog Depth",
    pp: { label: "Moderate — core compounds covered", status: "warn" },
    nx: { label: "Broad catalog with specialty compounds", status: "ok" },
  },
  {
    feature: "Subscription Discount",
    pp: { label: "Coupon codes only", status: "warn" },
    nx: { label: "15% recurring subscription discount", status: "ok" },
  },
  {
    feature: "Loyalty Program",
    pp: { label: "None documented", status: "bad" },
    nx: { label: "Points on every order", status: "ok" },
  },
];

const STATUS_COLORS: Record<RowStatus, string> = {
  ok: "#22c55e",
  warn: "#f59e0b",
  bad: "#ef4444",
};

const STATUS_ICONS: Record<RowStatus, typeof CheckCircle2> = {
  ok: CheckCircle2,
  warn: AlertCircle,
  bad: XCircle,
};

function StatusCell({ label, status }: { label: string; status: RowStatus }) {
  const Icon = STATUS_ICONS[status];
  const color = STATUS_COLORS[status];
  return (
    <div className="flex items-start gap-2">
      <Icon size={16} style={{ color, flexShrink: 0, marginTop: 2 }} />
      <span className="text-sm" style={{ color: "#2a2a2a", fontWeight: 300, lineHeight: 1.5 }}>
        {label}
      </span>
    </div>
  );
}

const differentiators = [
  {
    title: "COA transparency: what 'third-party tested' actually requires",
    body: "Paradigm Peptides includes COA documentation on their products. But the research community increasingly recognizes that COA presence ≠ COA verifiability. The meaningful verification chain requires a named testing laboratory (one you can look up), lot-specific batch identifiers that match the product you received, HPLC chromatogram data, and mass spectrometry confirmation of molecular identity.\n\nParadigm's COA system doesn't consistently deliver that chain. Nexphoria publishes all of it — lot number, named lab, HPLC output, and MS data — for every compound in the catalog.",
  },
  {
    title: "Liquid formats vs. lyophilized: why delivery form matters",
    body: "Paradigm Peptides offers some compounds in liquid format. In research contexts, liquid peptide formulations raise concerns around stability, contamination risk, and shelf life that lyophilized formats don't share. Lyophilized peptides are the scientific standard: they remain stable at ambient temperatures for shorter windows, but freeze-dried format dramatically extends shelf life and reduces degradation from handling.\n\nNexphoria sells exclusively lyophilized compounds. This is a deliberate standard, not a catalog limitation.",
  },
  {
    title: "Cold-chain shipping: the infrastructure most vendors skip",
    body: "Peptide degradation from thermal exposure is cumulative and irreversible. A package sitting on a hot doorstep, a summer delivery left in a mailbox, a transit hub without climate control — each event chips away at compound integrity before the researcher ever opens the package.\n\nParadigm does not include cold-pack shipping by default on all orders. Nexphoria ships every order with cold packs in insulated mailers. No exceptions. The cold chain starts at the warehouse and the goal is continuity through to the researcher's freezer.",
  },
  {
    title: "Research library vs. product catalog",
    body: "Paradigm Peptides' website is primarily a catalog. The research support content is minimal — there's no deep mechanistic coverage of compounds, no protocol design resources, no literature synthesis.\n\nNexphoria built a 500+ article research library because the researchers buying peptides need more than a product page. Understanding the signaling pathways BPC-157 modulates, the GH pulse timing relevant to ipamorelin dosing, or how to interpret HPLC purity data requires the kind of context that doesn't fit in a product description. That library is part of the product.",
  },
];

const faqs = [
  {
    q: "Is Paradigm Peptides a reputable vendor?",
    a: "Paradigm Peptides has operated in the research peptide market for several years and has a mixed-to-positive community reputation. The primary gaps researchers identify are around COA depth — documents are provided but independent lab verification and lot-level mass spec data are not consistently available.",
  },
  {
    q: "How does Paradigm Peptides' purity testing compare to Nexphoria?",
    a: "Paradigm Peptides provides COA documents with purity claims, but the depth of third-party verification — named testing facilities, lot-specific identifiers, mass spectrometry confirmation — is not consistently published. Nexphoria posts full HPLC and MS data on every compound, lot-specific, with the testing lab named.",
  },
  {
    q: "Does Paradigm Peptides include cold packs with peptide orders?",
    a: "Paradigm Peptides does not consistently include cold-chain packaging on all orders. Nexphoria ships every order with cold packs in insulated mailers, regardless of order size or season.",
  },
  {
    q: "Which is better for a first-time research peptide order: Paradigm or Nexphoria?",
    a: "For first-time researchers, documentation transparency matters most. Nexphoria provides independently verifiable COAs, a 500+ article research library, and cold-chain shipping on every order — a more complete starting point than Paradigm's catalog-focused approach.",
  },
];

export default function ParadigmPeptidesVsNexphoriaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        {/* Hero */}
        <section
          className="px-6 pt-20 pb-24 md:pt-28 md:pb-32"
          style={{ backgroundColor: "#010101" }}
        >
          <div className="max-w-4xl mx-auto">
            <Breadcrumb
              variant="dark"
              className="mb-6"
              items={[
                { label: "Home", href: "/" },
                { label: "Compare", href: "/compare" },
                { label: "vs Paradigm Peptides" },
              ]}
            />
            <p className="eyebrow mb-5" style={{ color: "#B8A44C" }}>
              Vendor Comparison
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
              Nexphoria vs. Paradigm Peptides.
            </h1>
            <p
              className="text-lg max-w-2xl mb-8"
              style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}
            >
              Paradigm has years in the market and a recognizable name. When you look at COA depth,
              cold-chain defaults, and what's actually verifiable — the comparison shifts toward
              documentation standards.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/coa"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#B8A44C", color: "#010101" }}
              >
                Verify Our COAs <ArrowRight size={16} />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#A0A0A0",
                }}
              >
                Browse Catalog
              </Link>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="px-6 py-20 md:py-28">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#B8A44C" }}>
              Side-by-Side
            </p>
            <h2
              className="text-2xl md:text-3xl mb-10"
              style={{ fontWeight: 500, color: "#010101", letterSpacing: "-0.01em" }}
            >
              Paradigm Peptides vs. Nexphoria
            </h2>

            <div
              className="rounded-lg overflow-hidden"
              style={{ border: "1px solid rgba(0,0,0,0.08)" }}
            >
              <div className="grid grid-cols-3" style={{ backgroundColor: "#010101" }}>
                <div className="px-5 py-4">
                  <span className="text-xs uppercase tracking-widest" style={{ color: "#666" }}>
                    Feature
                  </span>
                </div>
                <div
                  className="px-5 py-4"
                  style={{ borderLeft: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <span className="text-xs font-medium" style={{ color: "#f9f9f9" }}>
                    Paradigm Peptides
                  </span>
                </div>
                <div
                  className="px-5 py-4"
                  style={{
                    borderLeft: "1px solid rgba(255,255,255,0.06)",
                    backgroundColor: "rgba(184,164,76,0.08)",
                  }}
                >
                  <span className="text-xs font-medium" style={{ color: "#B8A44C" }}>
                    Nexphoria
                  </span>
                </div>
              </div>

              {comparisonRows.map((row, i) => (
                <div
                  key={row.feature}
                  className="grid grid-cols-3"
                  style={{
                    borderTop: "1px solid rgba(0,0,0,0.06)",
                    backgroundColor: i % 2 === 0 ? "#fff" : "#fafafa",
                  }}
                >
                  <div className="px-5 py-4">
                    <span className="text-sm" style={{ color: "#010101", fontWeight: 500 }}>
                      {row.feature}
                    </span>
                  </div>
                  <div
                    className="px-5 py-4"
                    style={{ borderLeft: "1px solid rgba(0,0,0,0.06)" }}
                  >
                    <StatusCell label={row.pp.label} status={row.pp.status} />
                  </div>
                  <div
                    className="px-5 py-4"
                    style={{
                      borderLeft: "1px solid rgba(0,0,0,0.06)",
                      backgroundColor: "rgba(184,164,76,0.03)",
                    }}
                  >
                    <StatusCell label={row.nx.label} status={row.nx.status} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key differentiators */}
        <section className="px-6 py-20 md:py-28" style={{ backgroundColor: "#EAE7E3" }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#B8A44C" }}>
              The Details That Matter
            </p>
            <h2
              className="text-2xl md:text-3xl mb-10"
              style={{ fontWeight: 500, color: "#010101", letterSpacing: "-0.01em" }}
            >
              Where the gap shows up
            </h2>
            <div className="space-y-8">
              {differentiators.map((d) => (
                <div
                  key={d.title}
                  className="rounded-lg p-8"
                  style={{
                    backgroundColor: "#F9F9F9",
                    border: "1px solid rgba(0,0,0,0.07)",
                    borderLeft: "3px solid #B8A44C",
                  }}
                >
                  <h3
                    className="text-lg mb-4"
                    style={{ fontWeight: 500, color: "#010101", letterSpacing: "-0.01em" }}
                  >
                    {d.title}
                  </h3>
                  {d.body.split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      className="text-base mb-3 last:mb-0"
                      style={{ color: "#444", lineHeight: 1.8, fontWeight: 300 }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-20 md:py-28">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#B8A44C" }}>
              FAQ
            </p>
            <h2
              className="text-2xl md:text-3xl mb-10"
              style={{ fontWeight: 500, color: "#010101", letterSpacing: "-0.01em" }}
            >
              Common questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-lg p-6"
                  style={{ backgroundColor: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
                >
                  <p className="text-base font-medium mb-2" style={{ color: "#010101" }}>
                    {faq.q}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "#555", lineHeight: 1.75, fontWeight: 300 }}
                  >
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20 md:py-28" style={{ backgroundColor: "#EAE7E3" }}>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#B8A44C" }}>
              Verify Before You Order
            </p>
            <h2
              className="text-3xl md:text-4xl mb-5 font-medium tracking-tight"
              style={{ color: "#010101" }}
            >
              See the COAs first.
            </h2>
            <p
              className="text-base mb-8 max-w-xl mx-auto"
              style={{ color: "#555", lineHeight: 1.7, fontWeight: 300 }}
            >
              Every Nexphoria lot is posted publicly. Check the testing lab, batch number, and
              methodology before placing an order.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/coa" className="btn-primary">
                View COAs
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid rgba(0,0,0,0.15)",
                  color: "#555",
                }}
              >
                Browse Catalog
              </Link>
            </div>
          </div>
        </section>

        <div
          className="mx-6 mb-6 max-w-3xl md:mx-auto px-5 py-4 rounded-lg text-xs"
          style={{
            background: "rgba(0,0,0,0.04)",
            borderLeft: "3px solid #B8A44C",
            color: "#777",
            lineHeight: 1.7,
          }}
        >
          <strong style={{ color: "#010101" }}>Research Use Only: </strong>
          All Nexphoria compounds are sold exclusively for qualified research purposes and are not
          intended for human consumption, therapeutic use, or diagnostic purposes.
        </div>
      </div>
    </>
  );
}
