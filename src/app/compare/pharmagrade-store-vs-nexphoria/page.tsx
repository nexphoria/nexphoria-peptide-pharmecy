import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Pharmagrade Store: Research Peptide Vendor Comparison 2026",
  description:
    "Pharmagrade Store is a UK-based research compound supplier with a global customer base. We compare them to Nexphoria on purity documentation, cold-chain, US-based testing, and peptide-dedicated infrastructure.",
  openGraph: {
    title: "Nexphoria vs. Pharmagrade Store: Research Peptide Vendor Comparison 2026",
    description:
      "Pharmagrade Store vs Nexphoria: COA depth, cold-chain, US vs UK sourcing, and endotoxin testing compared for peptide researchers.",
    url: "https://nexphoria.com/compare/pharmagrade-store-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/pharmagrade-store-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Pharmagrade Store a legitimate peptide supplier?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pharmagrade Store is a UK-based research compound supplier with a global customer base. They provide COA documentation for their products. However, their testing is not US-based third-party verified to the same standard as Nexphoria, and cold-chain shipping practices for international orders are not documented as defaults.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between Pharmagrade Store and Nexphoria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nexphoria is a US-based, peptide-dedicated supplier with independent US lab COAs, HPLC+MS purity verification, LAL endotoxin testing, cold-pack default shipping, and lyophilized-only format. Pharmagrade Store is a UK-based supplier with a broader mixed catalog and COA documentation that varies in depth and verifiability.",
      },
    },
    {
      "@type": "Question",
      name: "Does Pharmagrade Store ship to the US with cold packs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pharmagrade Store's cold-chain practices for international shipping to the US are not documented as a default standard. Nexphoria ships domestically within the US with ice packs in insulated mailers on every order.",
      },
    },
    {
      "@type": "Question",
      name: "Does Pharmagrade Store provide LAL endotoxin testing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pharmagrade Store does not consistently provide LAL endotoxin testing as part of their standard COA documentation. Nexphoria runs LAL endotoxin screening on all peptide compounds.",
      },
    },
  ],
};

type RowStatus = "ok" | "warn" | "bad";

const comparisonRows: Array<{
  feature: string;
  pg: { label: string; status: RowStatus };
  nx: { label: string; status: RowStatus };
}> = [
  {
    feature: "Base of Operations",
    pg: { label: "UK-based; international shipping", status: "warn" },
    nx: { label: "US-based; domestic shipping", status: "ok" },
  },
  {
    feature: "Primary Focus",
    pg: { label: "Mixed catalog (pharma-grade chems)", status: "warn" },
    nx: { label: "Peptide-dedicated catalog", status: "ok" },
  },
  {
    feature: "COA Documentation",
    pg: { label: "COAs provided; lab verifiability varies", status: "warn" },
    nx: { label: "Named US lab, lot-specific, MS + HPLC", status: "ok" },
  },
  {
    feature: "Purity Standard",
    pg: { label: "≥98% stated; third-party depth varies", status: "warn" },
    nx: { label: "≥99% HPLC + mass spec confirmed", status: "ok" },
  },
  {
    feature: "Cold-Chain Shipping",
    pg: { label: "Not documented as default for intl. orders", status: "bad" },
    nx: { label: "Cold-pack every US order, included", status: "ok" },
  },
  {
    feature: "Endotoxin Testing",
    pg: { label: "Not consistently documented", status: "bad" },
    nx: { label: "LAL endotoxin screen on all peptides", status: "ok" },
  },
  {
    feature: "US-Based Testing Lab",
    pg: { label: "EU/UK laboratory; US researcher access limited", status: "warn" },
    nx: { label: "Independent US laboratory", status: "ok" },
  },
  {
    feature: "Delivery Format",
    pg: { label: "Lyophilized and liquid formats available", status: "warn" },
    nx: { label: "Lyophilized only (research standard)", status: "ok" },
  },
  {
    feature: "Customs / Import Risk",
    pg: { label: "International shipping; customs variable", status: "bad" },
    nx: { label: "Domestic US shipping; no customs", status: "ok" },
  },
  {
    feature: "Peptide Research Content",
    pg: { label: "Basic compound information", status: "warn" },
    nx: { label: "550+ technical peptide articles", status: "ok" },
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
    title: "US vs. UK sourcing: why it matters for American researchers",
    body: "Pharmagrade Store is a UK-based operation that ships internationally, including to the US. For American researchers, international sourcing introduces variables that domestic procurement eliminates: customs delays, cold-chain integrity over multi-day international transit, and COA documentation from EU/UK laboratories that may be harder to independently verify through US institutional processes.\n\nNexphoria is US-based. Compounds ship domestically, COAs are issued by independent US analytical laboratories with direct verification channels, and there is no customs clearance risk or international shipping delay. For researchers building experimental timelines where compound arrival is a scheduling variable, domestic sourcing is a practical advantage.",
  },
  {
    title: "COA verifiability: the difference between documentation and proof",
    body: "Pharmagrade Store provides COA documentation for their catalog. The depth and independent verifiability of that documentation varies. For researchers who need sourcing documentation that withstands audit — whether for publication disclosure, IACUC protocol review, or institutional procurement records — the ability to independently verify the testing laboratory is as important as the document itself.\n\nNexphoria's COAs are issued by named independent US-based analytical laboratories. The laboratory contact is listed on every COA and can be independently reached to confirm the testing event, batch number, and methodology. That level of provenance chain is what differentiates documentation from proof.",
  },
  {
    title: "Cold-chain integrity: the international shipping problem",
    body: "International shipments from the UK to the US commonly involve multi-day transit times — often 5-10 business days or more when customs processing is included. For thermally sensitive lyophilized peptides, that transit window without documented cold-chain protection is a compound integrity risk.\n\nNexphoria ships all peptide orders with ice packs in insulated mailers as a domestic standard. Transit time is 2-3 days within the continental US, and cold-chain documentation accompanies every order. For researchers where compound integrity on receipt is a controlled experimental variable, the difference between documented domestic cold-chain and undocumented international transit is material.",
  },
  {
    title: "LAL endotoxin testing: the metric that protects your experimental data",
    body: "HPLC purity measures compound identity and concentration. It does not detect bacterial endotoxins — pyrogens that can trigger inflammatory responses in cell culture and animal models at concentrations far below detectable impurity thresholds in HPLC analysis.\n\nPharmagrade Store does not consistently provide LAL endotoxin testing as part of their standard documentation. Nexphoria runs LAL endotoxin screening on every peptide compound as a standard part of the quality chain — in addition to HPLC purity and mass spectrometry. For researchers running in vitro cytokine assays, in vivo inflammation models, or any protocol where baseline inflammatory state is a controlled variable, unscreened endotoxin levels are a documented confound.",
  },
];

const faqs = [
  {
    q: "Is Pharmagrade Store a legitimate peptide supplier?",
    a: "Pharmagrade Store is a UK-based research compound supplier with a global customer base. They provide COA documentation for their products. However, their testing is not US-based third-party verified to the same standard as Nexphoria, and cold-chain shipping practices for international orders are not documented as defaults.",
  },
  {
    q: "What is the difference between Pharmagrade Store and Nexphoria?",
    a: "Nexphoria is a US-based, peptide-dedicated supplier with independent US lab COAs, HPLC+MS purity verification, LAL endotoxin testing, cold-pack default shipping, and lyophilized-only format. Pharmagrade Store is a UK-based supplier with a broader mixed catalog and COA documentation that varies in depth and verifiability.",
  },
  {
    q: "Does Pharmagrade Store ship to the US with cold packs?",
    a: "Pharmagrade Store's cold-chain practices for international shipping to the US are not documented as a default standard. Nexphoria ships domestically within the US with ice packs in insulated mailers on every order.",
  },
  {
    q: "Does Pharmagrade Store provide LAL endotoxin testing?",
    a: "Pharmagrade Store does not consistently provide LAL endotoxin testing as part of their standard COA documentation. Nexphoria runs LAL endotoxin screening on all peptide compounds.",
  },
];

export default function PhramagadeStoreVsNexphoriaPage() {
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
                { label: "vs Pharmagrade Store" },
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
              Nexphoria vs. Pharmagrade Store.
            </h1>
            <p
              className="text-lg max-w-2xl mb-8"
              style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}
            >
              Pharmagrade Store ships internationally from the UK. For US-based researchers, the
              differences in domestic cold-chain, US-verified COAs, and endotoxin documentation
              are worth examining before you order.
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
              Pharmagrade Store vs. Nexphoria
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
                    Pharmagrade Store
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
                    <StatusCell label={row.pg.label} status={row.pg.status} />
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
