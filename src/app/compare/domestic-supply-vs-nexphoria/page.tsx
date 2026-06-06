import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Domestic Supply: US Manufacturing & COA Verification 2026",
  description:
    "Domestic Supply markets on US sourcing claims but COA documentation lacks independent lab verification and cold-chain shipping is unspecified. Full side-by-side comparison with Nexphoria.",
  openGraph: {
    title: "Nexphoria vs. Domestic Supply: US Manufacturing & COA Verification 2026",
    description:
      "Domestic Supply vs Nexphoria: US sourcing verification, COA chain of custody, cold-chain shipping, and purity standards — full breakdown for research peptide buyers.",
    url: "https://nexphoria.com/compare/domestic-supply-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/domestic-supply-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Domestic Supply a legitimate research peptide vendor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Domestic Supply operates in the research compound market. The key concern for peptide researchers is documentation depth — COAs are provided but the testing lab identity and lot-specific verification pathway are not consistently published, making independent verification difficult.",
      },
    },
    {
      "@type": "Question",
      name: "How do I verify US manufacturing claims for peptide vendors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Legitimate US manufacturing claims should be verifiable through: (1) named US synthesis facility, (2) COAs from US-based testing labs (Janoshik is Czech-based — presence of Janoshik COAs doesn't confirm US synthesis), (3) ability to contact the testing lab and verify batch results. Marketing language about 'domestic' sourcing without these verification pathways is not independently confirmable.",
      },
    },
    {
      "@type": "Question",
      name: "Does Domestic Supply offer cold-chain shipping for peptides?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cold-chain shipping details are not clearly specified in Domestic Supply's standard ordering process. Researchers ordering temperature-sensitive lyophilized peptides should clarify shipping conditions before ordering. Nexphoria includes cold-pack packaging on every peptide order as a default, not an add-on.",
      },
    },
    {
      "@type": "Question",
      name: "What does 'unverifiable COA' mean in practice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An unverifiable COA is one where you cannot independently confirm with the testing lab that the document corresponds to a real test run on the claimed lot. Verifiable COAs include the testing lab's name, analyst contact, batch-specific reference number, and a way to cross-reference the result directly with the lab. Without these, the document's authenticity cannot be confirmed by the researcher.",
      },
    },
  ],
};

type RowStatus = "ok" | "warn" | "bad";

const comparisonRows: Array<{
  feature: string;
  ds: { label: string; status: RowStatus };
  nx: { label: string; status: RowStatus };
}> = [
  {
    feature: "Pricing",
    ds: { label: "Mid-range pricing", status: "ok" },
    nx: { label: "Competitive mid-tier", status: "ok" },
  },
  {
    feature: "COA Verifiability",
    ds: { label: "Provided, lab identity unverifiable", status: "warn" },
    nx: { label: "Independently verifiable, lot-specific", status: "ok" },
  },
  {
    feature: "US Manufacturing",
    ds: { label: "Marketing claim, not independently confirmed", status: "warn" },
    nx: { label: "Confirmed US synthesis", status: "ok" },
  },
  {
    feature: "Primary Focus",
    ds: { label: "Mixed compounds catalog", status: "warn" },
    nx: { label: "Peptide-focused catalog", status: "ok" },
  },
  {
    feature: "Delivery Format",
    ds: { label: "Lyophilized available", status: "ok" },
    nx: { label: "Lyophilized only (research standard)", status: "ok" },
  },
  {
    feature: "Cold-Chain Shipping",
    ds: { label: "Not specified in standard fulfillment", status: "bad" },
    nx: { label: "Cold-pack every order", status: "ok" },
  },
  {
    feature: "Purity Standard",
    ds: { label: "Claimed ≥98%, documentation unverified", status: "warn" },
    nx: { label: "≥99% HPLC + MS, publicly posted", status: "ok" },
  },
  {
    feature: "Research Content",
    ds: { label: "Minimal educational content", status: "bad" },
    nx: { label: "300+ technical articles", status: "ok" },
  },
  {
    feature: "Subscription Discount",
    ds: { label: "Occasional promos only", status: "bad" },
    nx: { label: "15% recurring discount", status: "ok" },
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
    title: "The US manufacturing verification problem",
    body: "Many vendors market 'domestic' or 'US-sourced' compounds without providing the infrastructure to verify those claims. US synthesis means: a named synthesis facility on US soil, COAs from a testing lab that can be contacted to verify the batch, and documentation that creates a traceable chain from synthesis to delivery.\n\nMarketing language like 'domestic supply' or 'US-based' is not verification. Researchers should ask: Can I identify the testing lab? Can I contact them with the lot number and confirm this test was run? Can the vendor name the synthesis facility?\n\nNexphoria's COAs are posted with the testing lab, analyst, lot-specific data, and methodology. The answer to each of those questions is yes.",
  },
  {
    title: "COA chain of custody: what unverifiable means",
    body: "A COA that cannot be independently verified represents an unknown in your research data chain. If you're running a protocol where compound identity and purity matter — and in peptide research, they always do — the COA is the document that stands behind your experimental results.\n\nAn unverifiable COA creates a gap between what you ordered and what you received. It doesn't prove the compound is bad. It means you cannot confirm it is what the vendor claims. For serious research protocols, that uncertainty is a problem.\n\nNexphoria posts lot-specific COAs with verifiable testing lab data. Researchers can confirm the result was actually run on their specific lot by contacting the lab directly.",
  },
  {
    title: "Infrastructure for serious research",
    body: "Cold-chain shipping isn't a premium feature for peptide vendors — it's a baseline requirement. Lyophilized peptides stored at -20°C can degrade significantly if exposed to ambient temperatures during multi-day shipping without thermal protection.\n\nA vendor that doesn't specify cold-chain handling in their standard fulfillment process is leaving a meaningful variable in your compound's pre-reconstitution integrity. Nexphoria cold-packs every order as a default, not an opt-in.\n\nResearchers who have invested in proper reconstitution equipment, sterile technique, and precise dosing protocols shouldn't have that investment undermined by shipping conditions.",
  },
];

const faqs = [
  {
    q: "Is Domestic Supply a legitimate research peptide vendor?",
    a: "Domestic Supply operates in the research compound market. The key concern for peptide researchers is documentation depth — COAs are provided but the testing lab identity and lot-specific verification pathway are not consistently published, making independent verification difficult.",
  },
  {
    q: "How do I verify US manufacturing claims for peptide vendors?",
    a: "Legitimate US manufacturing claims should be verifiable through: (1) named US synthesis facility, (2) COAs from US-based testing labs, (3) ability to contact the testing lab and verify batch results. Marketing language about 'domestic' sourcing without these verification pathways is not independently confirmable.",
  },
  {
    q: "Does Domestic Supply offer cold-chain shipping for peptides?",
    a: "Cold-chain shipping details are not clearly specified in Domestic Supply's standard ordering process. Researchers ordering temperature-sensitive lyophilized peptides should clarify shipping conditions before ordering. Nexphoria includes cold-pack packaging on every peptide order as a default.",
  },
  {
    q: "What does 'unverifiable COA' mean in practice?",
    a: "An unverifiable COA is one where you cannot independently confirm with the testing lab that the document corresponds to a real test run on the claimed lot. Without the testing lab name, analyst contact, and batch-specific reference number, the document's authenticity cannot be confirmed by the researcher.",
  },
];

export default function DomesticSupplyVsNexphoriaPage() {
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
                { label: "vs Domestic Supply" },
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
              Nexphoria vs. Domestic Supply.
            </h1>
            <p
              className="text-lg max-w-2xl mb-8"
              style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}
            >
              Domestic Supply markets on US sourcing. But unverifiable COA documentation and
              unspecified cold-chain handling leave gaps that matter for serious peptide
              research. Here&apos;s the full comparison.
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
              Domestic Supply vs. Nexphoria
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
                    Domestic Supply
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
                    <StatusCell label={row.ds.label} status={row.ds.status} />
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
