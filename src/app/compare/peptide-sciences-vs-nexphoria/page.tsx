import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Peptide Sciences: Research Peptide Vendor Comparison 2026",
  description:
    "Peptide Sciences was a benchmark vendor before their shutdown. We compare their former standards to Nexphoria on purity documentation, cold-chain shipping, and peptide catalog depth.",
  openGraph: {
    title: "Nexphoria vs. Peptide Sciences: Research Peptide Vendor Comparison 2026",
    description:
      "Peptide Sciences vs Nexphoria: COA verifiability, purity standards, cold-chain shipping, and peptide-specific expertise compared side by side.",
    url: "https://nexphoria.com/compare/peptide-sciences-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/peptide-sciences-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Peptide Sciences still operating?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Peptide Sciences shut down operations in 2024. Researchers who previously relied on them are actively seeking alternatives with comparable or better purity documentation, cold-chain protocols, and US-synthesized compounds. Nexphoria was built to meet that standard.",
      },
    },
    {
      "@type": "Question",
      name: "How does Nexphoria compare to Peptide Sciences on purity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Peptide Sciences set a community standard with HPLC-verified compounds and lot-specific COAs. Nexphoria matches and extends that standard: ≥99% HPLC purity with mass spectrometry confirmation, LAL endotoxin testing, and publicly posted COAs with named testing labs.",
      },
    },
    {
      "@type": "Question",
      name: "What's the best Peptide Sciences alternative in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The most consistent Peptide Sciences alternatives are vendors that maintained the same documentation standard: lot-specific COAs, US synthesis, lyophilized format, and independent lab verification. Nexphoria checks all four of those boxes with a catalog that covers 100+ compounds.",
      },
    },
    {
      "@type": "Question",
      name: "Does Nexphoria offer the same compounds Peptide Sciences had?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nexphoria carries all major peptide compounds that Peptide Sciences stocked — BPC-157, TB-500, CJC-1295, Ipamorelin, Semaglutide, Tirzepatide, NAD+, Epithalon, GHK-Cu, and 100+ more — with the same lyophilized format and lab-verified purity.",
      },
    },
  ],
};

type RowStatus = "ok" | "warn" | "bad";

const comparisonRows: Array<{
  feature: string;
  ps: { label: string; status: RowStatus };
  nx: { label: string; status: RowStatus };
}> = [
  {
    feature: "Operating Status",
    ps: { label: "Shut down (2024)", status: "bad" },
    nx: { label: "Active, US-based", status: "ok" },
  },
  {
    feature: "Pricing",
    ps: { label: "Was mid-to-premium tier", status: "warn" },
    nx: { label: "Competitive mid-tier", status: "ok" },
  },
  {
    feature: "Primary Focus",
    ps: { label: "Peptide-dedicated catalog", status: "ok" },
    nx: { label: "Peptide-dedicated catalog", status: "ok" },
  },
  {
    feature: "COA Verifiability",
    ps: { label: "Lot-specific COAs (while active)", status: "ok" },
    nx: { label: "Named lab, lot-specific, mass spec included", status: "ok" },
  },
  {
    feature: "Purity Standard",
    ps: { label: "≥98% HPLC (while active)", status: "ok" },
    nx: { label: "≥99% HPLC + MS confirmed", status: "ok" },
  },
  {
    feature: "Cold-Chain Shipping",
    ps: { label: "Cold-chain included (while active)", status: "ok" },
    nx: { label: "Cold-pack every order, included", status: "ok" },
  },
  {
    feature: "US Manufacturing",
    ps: { label: "US-synthesized (while active)", status: "ok" },
    nx: { label: "Confirmed US synthesis", status: "ok" },
  },
  {
    feature: "Availability",
    ps: { label: "Unavailable — no orders accepted", status: "bad" },
    nx: { label: "In-stock, ships within 24h", status: "ok" },
  },
  {
    feature: "Peptide Research Content",
    ps: { label: "Basic compound pages (archived)", status: "warn" },
    nx: { label: "550+ technical peptide articles", status: "ok" },
  },
  {
    feature: "Subscription Discount",
    ps: { label: "N/A", status: "bad" },
    nx: { label: "15% recurring subscription discount", status: "ok" },
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
    title: "Peptide Sciences set the documentation standard",
    body: "Peptide Sciences was among the first vendors to make lot-specific COA documentation a default rather than a premium feature. Their HPLC data, US synthesis, and lyophilized-only format became the reference point the research community used to evaluate every other vendor.\n\nWhen they shut down in 2024, the question researchers asked wasn't 'what's cheaper?' — it was 'who can meet the same standard?' Nexphoria was built with that benchmark in mind from day one.",
  },
  {
    title: "Same documentation architecture, active operations",
    body: "Nexphoria's COA system mirrors and extends what Peptide Sciences provided: lot-specific results, named testing lab, HPLC chromatogram, mass spectrometry molecular weight confirmation, and LAL endotoxin screening. The difference is that Nexphoria adds a public COA portal — every result is posted before the product ships, not just attached to an order.\n\nEvery researcher can verify a specific batch against a named lab before placing an order. Peptide Sciences' COA system was good. Nexphoria's is independently confirmable in real time.",
  },
  {
    title: "Cold-chain as a default, not a feature",
    body: "Peptide Sciences shipped with cold packs included. Nexphoria does the same — cold packs in insulated mailers on every order by default, regardless of order size or season.\n\nThe distinction matters in summer months and for cross-country transit. Lyophilized peptides are stable at room temperature short-term, but extended exposure to heat — especially across multiple distribution points — introduces measurable degradation risk. Default cold-chain eliminates the variable.",
  },
  {
    title: "100+ compounds, in stock now",
    body: "Peptide Sciences stocked a deep catalog. Nexphoria carries all the major research compounds — BPC-157, TB-500, Semaglutide, Tirzepatide, Retatrutide, CJC-1295, Ipamorelin, NAD+, GHK-Cu, Epithalon, Thymosin Alpha-1, and over 100 more — with the same lyophilized format, US synthesis, and independent lab verification.\n\nFor researchers who built their protocols around Peptide Sciences' catalog, the transition to Nexphoria requires no protocol changes. Same format, same purity standard, same documentation depth.",
  },
];

const faqs = [
  {
    q: "Is Peptide Sciences still operating?",
    a: "Peptide Sciences shut down operations in 2024. Researchers who previously relied on them are actively seeking alternatives with comparable or better purity documentation, cold-chain protocols, and US-synthesized compounds. Nexphoria was built to meet that standard.",
  },
  {
    q: "How does Nexphoria compare to Peptide Sciences on purity?",
    a: "Peptide Sciences set a community standard with HPLC-verified compounds and lot-specific COAs. Nexphoria matches and extends that standard: ≥99% HPLC purity with mass spectrometry confirmation, LAL endotoxin testing, and publicly posted COAs with named testing labs.",
  },
  {
    q: "What's the best Peptide Sciences alternative in 2026?",
    a: "The most consistent Peptide Sciences alternatives are vendors that maintained the same documentation standard: lot-specific COAs, US synthesis, lyophilized format, and independent lab verification. Nexphoria checks all four of those boxes with a catalog that covers 100+ compounds.",
  },
  {
    q: "Does Nexphoria offer the same compounds Peptide Sciences had?",
    a: "Nexphoria carries all major peptide compounds that Peptide Sciences stocked — BPC-157, TB-500, CJC-1295, Ipamorelin, Semaglutide, Tirzepatide, NAD+, Epithalon, GHK-Cu, and 100+ more — with the same lyophilized format and lab-verified purity.",
  },
];

export default function PeptideSciencesVsNexphoriaPage() {
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
                { label: "vs Peptide Sciences" },
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
              Nexphoria vs. Peptide Sciences.
            </h1>
            <p
              className="text-lg max-w-2xl mb-8"
              style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}
            >
              Peptide Sciences set the documentation standard for the research peptide industry.
              After their 2024 shutdown, Nexphoria carries the same benchmark forward — with
              active inventory, public COA verification, and cold-chain on every order.
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
              Peptide Sciences vs. Nexphoria
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
                    Peptide Sciences
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
                    <StatusCell label={row.ps.label} status={row.ps.status} />
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
              What Peptide Sciences built — and what comes next
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
