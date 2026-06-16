import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Peptide Bay: Purity, COAs & Cold-Chain Compared 2026",
  description:
    "How does Peptide Bay compare to Nexphoria on HPLC purity standards, COA transparency, mass spectrometry testing, and cold-chain shipping? Full 2026 researcher comparison.",
  openGraph: {
    title: "Nexphoria vs. Peptide Bay: Purity, COAs & Cold-Chain Compared 2026",
    description:
      "Peptide Bay vs Nexphoria — a detailed comparison for researchers on purity documentation, COA verifiability, cold-chain defaults, and compound selection.",
    url: "https://nexphoria.com/compare/peptide-bay-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/peptide-bay-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Peptide Bay a legitimate vendor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Peptide Bay operates in the US research peptide market with a broad catalog and competitive pricing. Key considerations for researchers include requesting method-specific COA documentation and confirming mass spectrometry identity data is included before ordering compounds where molecular identity confirmation is protocol-critical.",
      },
    },
    {
      "@type": "Question",
      name: "How does Peptide Bay's purity standard compare to Nexphoria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Peptide Bay provides COA documentation with orders. Nexphoria maintains a ≥99% HPLC minimum across all catalog peptides, specifies the independent third-party laboratory and full HPLC methodology in every COA, and includes mass spectrometry identity confirmation on all lots as a standard rather than optional component.",
      },
    },
    {
      "@type": "Question",
      name: "Does Peptide Bay include cold-chain shipping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Peptide Bay's cold-chain packaging practices should be confirmed at time of order. Nexphoria includes cold-pack insulated packaging on every order regardless of size or temperature — it is a default, not an upsell.",
      },
    },
    {
      "@type": "Question",
      name: "Which vendor provides better analytical documentation for preclinical research?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nexphoria's COAs include the named independent testing lab, analyst credentials, lot-specific HPLC chromatogram data with full methodology disclosure, mass spectrometry identity confirmation, and a batch number independently verifiable by contacting the lab. This level of traceability supports both institutional procurement standards and publication-ready research documentation.",
      },
    },
  ],
};

type RowStatus = "ok" | "warn" | "bad";

const comparisonRows: Array<{
  feature: string;
  pb: { label: string; status: RowStatus };
  nx: { label: string; status: RowStatus };
}> = [
  {
    feature: "Pricing",
    pb: { label: "Competitive; promotional pricing available", status: "ok" },
    nx: { label: "Competitive mid-tier", status: "ok" },
  },
  {
    feature: "COA Verifiability",
    pb: { label: "COAs available; method detail request required", status: "warn" },
    nx: { label: "Named lab, lot-specific, independently verifiable", status: "ok" },
  },
  {
    feature: "HPLC Methodology Disclosure",
    pb: { label: "Full method specs require direct request", status: "warn" },
    nx: { label: "Column, mobile phase, gradient disclosed on COA", status: "ok" },
  },
  {
    feature: "Mass Spec Testing",
    pb: { label: "Availability varies by compound and order type", status: "warn" },
    nx: { label: "MS on every compound, standard on all lots", status: "ok" },
  },
  {
    feature: "Cold-Chain Shipping",
    pb: { label: "Confirm default cold-pack inclusion at order", status: "warn" },
    nx: { label: "Cold-pack every order, standard included", status: "ok" },
  },
  {
    feature: "Independent 3rd-Party Testing",
    pb: { label: "Testing documentation; lab independence varies", status: "warn" },
    nx: { label: "Independent third-party lab named on all COAs", status: "ok" },
  },
  {
    feature: "Purity Standard",
    pb: { label: "≥98% HPLC stated on most compounds", status: "warn" },
    nx: { label: "≥99% HPLC + MS verified on all lots", status: "ok" },
  },
  {
    feature: "Delivery Format",
    pb: { label: "Lyophilized; some liquid formats", status: "warn" },
    nx: { label: "Lyophilized only (research standard)", status: "ok" },
  },
  {
    feature: "Research Content",
    pb: { label: "Basic product descriptions", status: "bad" },
    nx: { label: "350+ technical research articles", status: "ok" },
  },
  {
    feature: "Subscription Discount",
    pb: { label: "None confirmed", status: "bad" },
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
    title: "The purity number is only as good as the method behind it",
    body: "HPLC purity figures are the first checkpoint when evaluating a research peptide vendor. But the number alone — '98%', '99%' — tells you very little without the analytical method behind it. The discriminating power of an HPLC method varies substantially based on column chemistry, gradient conditions, mobile phase modifiers, and detection wavelength. A lenient fast-gradient method can report high purity while missing closely eluting deletion sequences or modification artifacts that a rigorous method would resolve.\n\nNexphoria COA documentation specifies the independent third-party laboratory, HPLC column and mobile phase conditions, detection parameters, and the purity result — allowing a technically literate researcher to evaluate whether the method is appropriate for the compound being tested.",
  },
  {
    title: "Mass spectrometry: confirming what you actually received",
    body: "HPLC confirms purity within the column's separation window; it does not confirm molecular identity. ESI-MS or MALDI-TOF mass spectrometry provides the necessary identity check by confirming the molecular weight of the major component.\n\nFor longer peptides, synthesis artifacts — missed couplings, racemization, incomplete side-chain deprotection — can produce impurities that co-chromatograph with the target compound but are detectable by mass. Nexphoria includes MS identity confirmation as a standard component of every lot COA, not as an optional add-on for premium orders.",
  },
  {
    title: "Cold-chain isn't optional — it's baseline",
    body: "Lyophilized peptides are stable at room temperature for limited periods. But transit through a warehouse, a delivery vehicle parked in summer heat, or a residential mailbox on a 90°F afternoon can compromise compound integrity before it arrives.\n\nNexphoria includes cold packs in insulated mailers on every order. Not orders over a threshold. Not express shipments only. Every order. If compound integrity matters to your research, shipping standards shouldn't be a question mark.",
  },
  {
    title: "Independent verification creates defensible documentation",
    body: "For institutional procurement, grant-funded research, or work heading toward publication, the independence of the testing laboratory matters. There's a meaningful distinction between analytical data from an internal lab and data from an independent third party with no commercial interest in the outcome.\n\nEvery Nexphoria lot is tested by a named independent laboratory. The COA includes the lab's identity, the analyst's credentials, and a batch number you can use to verify the record by contacting the lab directly — creating a documentation chain that supports both institutional compliance and publication-ready methods disclosure.",
  },
];

const faqs = [
  {
    q: "Is Peptide Bay a legitimate vendor?",
    a: "Peptide Bay operates in the US research peptide market with a broad catalog and competitive pricing. Key considerations for researchers include requesting method-specific COA documentation and confirming mass spectrometry identity data is included before ordering compounds where molecular identity confirmation is protocol-critical.",
  },
  {
    q: "How does Peptide Bay's purity standard compare to Nexphoria?",
    a: "Peptide Bay provides COA documentation with orders. Nexphoria maintains a ≥99% HPLC minimum across all catalog peptides, specifies the independent third-party laboratory and full HPLC methodology in every COA, and includes mass spectrometry identity confirmation on all lots as a standard rather than optional component.",
  },
  {
    q: "Does Peptide Bay include cold-chain shipping?",
    a: "Peptide Bay's cold-chain packaging practices should be confirmed at time of order. Nexphoria includes cold-pack insulated packaging on every order regardless of size or temperature — it is a default, not an upsell.",
  },
  {
    q: "Which vendor provides better analytical documentation for preclinical research?",
    a: "Nexphoria's COAs include the named independent testing lab, analyst credentials, lot-specific HPLC chromatogram data with full methodology disclosure, mass spectrometry identity confirmation, and a batch number independently verifiable by contacting the lab. This level of traceability supports both institutional procurement standards and publication-ready research documentation.",
  },
];

export default function PeptideBayVsNexphoriaPage() {
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
                { label: "vs Peptide Bay" },
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
              Nexphoria vs. Peptide Bay.
            </h1>
            <p
              className="text-lg max-w-2xl mb-8"
              style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}
            >
              Peptide Bay offers a broad catalog and competitive pricing. But when you look at
              COA methodology disclosure, mass spectrometry documentation, and cold-chain
              defaults, meaningful differences emerge for rigorous research procurement.
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
              Peptide Bay vs. Nexphoria
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
                    Peptide Bay
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
                    <StatusCell label={row.pb.label} status={row.pb.status} />
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
