import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Umbrella Labs: Research Peptide Vendor Comparison 2026",
  description:
    "Umbrella Labs is known for SARMs but has expanded into peptides. We compare them to Nexphoria on purity documentation, cold-chain shipping, and peptide-specific expertise.",
  openGraph: {
    title: "Nexphoria vs. Umbrella Labs: Research Peptide Vendor Comparison 2026",
    description:
      "Umbrella Labs vs Nexphoria: COA verifiability, purity standards, cold-chain shipping, and peptide catalog depth compared side by side.",
    url: "https://nexphoria.com/compare/umbrella-labs-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/umbrella-labs-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Umbrella Labs a legitimate peptide vendor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Umbrella Labs is a well-established vendor primarily known for SARMs. Their peptide catalog is secondary to their core business. They have generally positive community reviews, with some concerns about inconsistent peptide-specific COA depth.",
      },
    },
    {
      "@type": "Question",
      name: "Does Umbrella Labs specialize in peptides?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Umbrella Labs is a SARMs-first vendor that added peptides to their catalog. Nexphoria is peptide-focused — every storage protocol, COA format, and technical resource is designed specifically for peptide research.",
      },
    },
    {
      "@type": "Question",
      name: "How does Umbrella Labs' COA system compare to Nexphoria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Umbrella Labs provides COA documentation but the depth and verifiability varies by compound. Nexphoria posts lot-specific COAs with named testing labs, HPLC chromatograms, mass spec data, and batch identifiers — independently confirmable before you order.",
      },
    },
    {
      "@type": "Question",
      name: "Does Umbrella Labs offer cold-chain shipping on peptides?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Umbrella Labs' cold-chain practices for peptides are not consistently documented. Nexphoria includes cold packs in insulated mailers on every peptide order by default.",
      },
    },
  ],
};

type RowStatus = "ok" | "warn" | "bad";

const comparisonRows: Array<{
  feature: string;
  ul: { label: string; status: RowStatus };
  nx: { label: string; status: RowStatus };
}> = [
  {
    feature: "Pricing",
    ul: { label: "Competitive mid-tier", status: "ok" },
    nx: { label: "Competitive mid-tier", status: "ok" },
  },
  {
    feature: "Primary Focus",
    ul: { label: "SARMs-first (peptides secondary)", status: "warn" },
    nx: { label: "Peptide-dedicated catalog", status: "ok" },
  },
  {
    feature: "COA Verifiability",
    ul: { label: "Varies by compound; not always lot-specific", status: "warn" },
    nx: { label: "Named lab, lot-specific, mass spec included", status: "ok" },
  },
  {
    feature: "Purity Standard",
    ul: { label: "≥98% stated on peptides", status: "warn" },
    nx: { label: "≥99% HPLC + MS confirmed", status: "ok" },
  },
  {
    feature: "Cold-Chain Shipping",
    ul: { label: "Not documented by default for peptides", status: "bad" },
    nx: { label: "Cold-pack every order, included", status: "ok" },
  },
  {
    feature: "US Manufacturing",
    ul: { label: "US company; synthesis origin varies", status: "warn" },
    nx: { label: "Confirmed US synthesis", status: "ok" },
  },
  {
    feature: "Delivery Format",
    ul: { label: "Lyophilized and liquid options available", status: "warn" },
    nx: { label: "Lyophilized only (research standard)", status: "ok" },
  },
  {
    feature: "Peptide Research Content",
    ul: { label: "Minimal peptide-specific resources", status: "bad" },
    nx: { label: "350+ technical peptide articles", status: "ok" },
  },
  {
    feature: "Subscription Discount",
    ul: { label: "Promotional only, not recurring", status: "warn" },
    nx: { label: "15% recurring subscription discount", status: "ok" },
  },
  {
    feature: "Loyalty Program",
    ul: { label: "None", status: "bad" },
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
    title: "SARMs catalog vs. peptide specialization",
    body: "Umbrella Labs built their reputation on SARMs research compounds. Their peptide expansion is real but secondary. When a vendor's expertise, QC procedures, and staff knowledge is centered on a different compound class, the downstream effects show up in documentation depth, storage protocol specificity, and the granularity of their COA data.\n\nNexphoria exists exclusively for peptide researchers. Every cold-chain protocol, every COA format, every shipping decision is made with peptide-specific stability curves in mind. That's not a marketing position — it's a supply chain architecture difference.",
  },
  {
    title: "Liquid format: the stability problem",
    body: "Umbrella Labs offers liquid peptides alongside lyophilized options. Liquid peptides are convenient but introduce a stability problem that lyophilized format avoids: aqueous solutions degrade faster, are more temperature-sensitive, and are susceptible to contamination once opened.\n\nEvery published peer-reviewed study on research peptides uses lyophilized powder reconstituted with sterile solvent at the time of administration. That's the reference format. Nexphoria ships in that format only.",
  },
  {
    title: "Verifiable COA data chains",
    body: "Umbrella Labs' COA documentation for peptides is functional but not always lot-specific. That means you may receive a COA that doesn't map to an identifiable batch run by a named lab.\n\nNexphoria's COAs are posted with: the testing lab name and location, the analyst's credentials, the lot number, the HPLC chromatogram, the mass spec molecular weight confirmation, and the date of analysis. Any researcher can contact the testing lab with the lot number and verify the analysis actually ran.",
  },
  {
    title: "Cold-chain defaults matter",
    body: "For SARMs, room-temperature shipping is generally fine. Lyophilized peptides are more stable than liquid — but they're not inert. Heat exposure over extended transit windows, combined with multiple handling points in summer months, creates real degradation risk.\n\nNexphoria includes cold packs in insulated packaging on every order by default. Not as a premium add-on. Not over a dollar threshold. On every order, because compound integrity is the product.",
  },
];

const faqs = [
  {
    q: "Is Umbrella Labs a legitimate peptide vendor?",
    a: "Umbrella Labs is a well-established vendor primarily known for SARMs. Their peptide catalog is secondary to their core business. They have generally positive community reviews, with some concerns about inconsistent peptide-specific COA depth.",
  },
  {
    q: "Does Umbrella Labs specialize in peptides?",
    a: "No. Umbrella Labs is a SARMs-first vendor that added peptides to their catalog. Nexphoria is peptide-focused — every storage protocol, COA format, and technical resource is designed specifically for peptide research.",
  },
  {
    q: "How does Umbrella Labs' COA system compare to Nexphoria?",
    a: "Umbrella Labs provides COA documentation but the depth and verifiability varies by compound. Nexphoria posts lot-specific COAs with named testing labs, HPLC chromatograms, mass spec data, and batch identifiers — independently confirmable before you order.",
  },
  {
    q: "Does Umbrella Labs offer cold-chain shipping on peptides?",
    a: "Umbrella Labs' cold-chain practices for peptides are not consistently documented. Nexphoria includes cold packs in insulated mailers on every peptide order by default.",
  },
];

export default function UmbrellaLabsVsNexphoriaPage() {
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
                { label: "vs Umbrella Labs" },
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
              Nexphoria vs. Umbrella Labs.
            </h1>
            <p
              className="text-lg max-w-2xl mb-8"
              style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}
            >
              Umbrella Labs is a respected SARMs vendor that added peptides to their catalog.
              But peptide-specific expertise, cold-chain defaults, and COA depth tell a different
              story when you look closely.
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
              Umbrella Labs vs. Nexphoria
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
                    Umbrella Labs
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
                    <StatusCell label={row.ul.label} status={row.ul.status} />
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
