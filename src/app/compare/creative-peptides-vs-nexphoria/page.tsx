import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Creative Peptides: Purity, COAs & Cold-Chain Compared 2026",
  description:
    "How does Creative Peptides compare to Nexphoria on HPLC purity standards, COA transparency, cold-chain shipping, and catalog focus? Full 2026 researcher comparison.",
  openGraph: {
    title: "Nexphoria vs. Creative Peptides: Purity, COAs & Cold-Chain Compared 2026",
    description:
      "Creative Peptides vs Nexphoria — a detailed comparison for researchers on purity documentation, COA verifiability, cold-chain defaults, and compound selection.",
    url: "https://nexphoria.com/compare/creative-peptides-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/creative-peptides-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Creative Peptides a legitimate research vendor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Creative Peptides is a long-established supplier offering a very broad catalog of catalog peptides and custom synthesis services. Key considerations include variable purity methodology disclosure across catalog items and cold-chain packaging that is not a documented default on all domestic orders.",
      },
    },
    {
      "@type": "Question",
      name: "How does Creative Peptides' purity standard compare to Nexphoria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Creative Peptides' purity ranges vary by catalog item; custom synthesis can be specified to ≥98% or ≥99%. Nexphoria maintains a ≥99% HPLC minimum across all catalog peptides and backs each lot with mass spectrometry identity confirmation from independent third-party laboratories.",
      },
    },
    {
      "@type": "Question",
      name: "Does Creative Peptides include cold-chain shipping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Creative Peptides' cold-chain packaging practices vary by order type and destination. Nexphoria includes cold-pack insulated packaging on every order regardless of size or ambient temperature.",
      },
    },
    {
      "@type": "Question",
      name: "Which vendor is better for researchers who need independently verifiable COAs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nexphoria's COAs include the named testing laboratory, analyst credentials, lot-specific HPLC chromatogram data, mass spectrometry identity confirmation, and a batch number independently verifiable by contacting the lab. This level of documentation traceability is not consistently available across Creative Peptides' catalog offerings.",
      },
    },
  ],
};

type RowStatus = "ok" | "warn" | "bad";

const comparisonRows: Array<{
  feature: string;
  cp: { label: string; status: RowStatus };
  nx: { label: string; status: RowStatus };
}> = [
  {
    feature: "Catalog Breadth",
    cp: { label: "Thousands of SKUs incl. custom synthesis", status: "ok" },
    nx: { label: "Focused catalog — research-active peptides only", status: "ok" },
  },
  {
    feature: "COA Verifiability",
    cp: { label: "Available; methodology detail varies by item", status: "warn" },
    nx: { label: "Named lab, lot-specific, independently verifiable", status: "ok" },
  },
  {
    feature: "Mass Spec Testing",
    cp: { label: "Available on custom synthesis; catalog varies", status: "warn" },
    nx: { label: "MS on every compound, publicly posted", status: "ok" },
  },
  {
    feature: "Cold-Chain Shipping",
    cp: { label: "Not a documented default on all domestic orders", status: "bad" },
    nx: { label: "Cold-pack every order, standard included", status: "ok" },
  },
  {
    feature: "Purity Standard",
    cp: { label: "Variable by catalog item; custom specifiable to ≥99%", status: "warn" },
    nx: { label: "≥99% HPLC minimum across all catalog peptides", status: "ok" },
  },
  {
    feature: "Independent 3rd-Party Testing",
    cp: { label: "In-house and third-party; varies by item", status: "warn" },
    nx: { label: "Independent third-party lab on all lots", status: "ok" },
  },
  {
    feature: "Delivery Format",
    cp: { label: "Lyophilized and liquid options available", status: "ok" },
    nx: { label: "Lyophilized only (research standard)", status: "ok" },
  },
  {
    feature: "Research Content",
    cp: { label: "Technical product sheets; limited protocol library", status: "warn" },
    nx: { label: "350+ technical research articles", status: "ok" },
  },
  {
    feature: "Subscription Discount",
    cp: { label: "Not available on standard catalog orders", status: "bad" },
    nx: { label: "15% recurring subscription discount", status: "ok" },
  },
  {
    feature: "Loyalty Program",
    cp: { label: "None", status: "bad" },
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
    title: "Breadth vs. depth — what researchers actually need",
    body: "Creative Peptides offers one of the broadest catalogs in the market — thousands of peptides, custom synthesis, specialty sequences. For researchers needing obscure or non-standard compounds, that breadth is valuable.\n\nNexphoria's approach is the opposite: a deliberately narrow catalog of research-active compounds, with every lot independently tested at third-party laboratories and shipped with cold-chain packaging. When you're working with the 50–100 most-studied peptides in preclinical literature, catalog depth matters less than documentation depth.",
  },
  {
    title: "Method disclosure: what's behind the purity number",
    body: "A purity figure of '99%' tells you very little without the analytical method behind it. HPLC purity discriminates based on the column chemistry, gradient conditions, and mobile phase chosen for the analysis. A method designed for small-molecule analysis may not adequately resolve deletion sequences or modification artifacts in peptide samples.\n\nNexphoria COA documentation specifies the independent third-party laboratory, HPLC column and mobile phase conditions, detection parameters, and the purity result — allowing a technically literate researcher to evaluate whether the method is appropriate for the compound being tested.",
  },
  {
    title: "Cold-chain isn't optional — it's baseline",
    body: "Lyophilized peptides tolerate room temperature for limited periods. But transit through a warehouse, a delivery vehicle, or a residential mailbox on a warm day can compromise compound integrity before it arrives.\n\nNexphoria includes cold packs in insulated mailers on every order. Not orders over a threshold. Not express shipments only. Every order. If compound integrity matters to your research, shipping standards shouldn't be an upsell.",
  },
  {
    title: "Independent verification vs. in-house testing",
    body: "There's a meaningful distinction between a supplier whose analytical data comes from an internal lab and one whose data comes from an independent third party with no commercial interest in the result. For institutional procurement, grant-funded research, or work heading toward publication, the independence of the testing lab is a documented parameter.\n\nEvery Nexphoria lot is tested by a named independent laboratory. The COA includes the lab's identity, the analyst's credentials, and a batch number you can use to verify the record by contacting the lab directly.",
  },
];

const faqs = [
  {
    q: "Is Creative Peptides a legitimate research vendor?",
    a: "Creative Peptides is a long-established supplier offering a very broad catalog of catalog peptides and custom synthesis services. Key considerations include variable purity methodology disclosure across catalog items and cold-chain packaging that is not a documented default on all domestic orders.",
  },
  {
    q: "How does Creative Peptides' purity standard compare to Nexphoria?",
    a: "Creative Peptides' purity ranges vary by catalog item; custom synthesis can be specified to ≥98% or ≥99%. Nexphoria maintains a ≥99% HPLC minimum across all catalog peptides and backs each lot with mass spectrometry identity confirmation from independent third-party laboratories.",
  },
  {
    q: "Does Creative Peptides include cold-chain shipping?",
    a: "Creative Peptides' cold-chain packaging practices vary by order type and destination. Nexphoria includes cold-pack insulated packaging on every order regardless of size or ambient temperature.",
  },
  {
    q: "Which vendor is better for researchers who need independently verifiable COAs?",
    a: "Nexphoria's COAs include the named testing laboratory, analyst credentials, lot-specific HPLC chromatogram data, mass spectrometry identity confirmation, and a batch number independently verifiable by contacting the lab. This level of documentation traceability is not consistently available across Creative Peptides' catalog offerings.",
  },
];

export default function CreativePeptidesVsNexphoriaPage() {
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
                { label: "vs Creative Peptides" },
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
              Nexphoria vs. Creative Peptides.
            </h1>
            <p
              className="text-lg max-w-2xl mb-8"
              style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}
            >
              Creative Peptides offers breadth — thousands of SKUs and custom synthesis. But when
              COA verifiability, cold-chain defaults, and independent testing documentation are
              examined closely, a gap emerges for routine preclinical research.
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
              Creative Peptides vs. Nexphoria
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
                    Creative Peptides
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
                    <StatusCell label={row.cp.label} status={row.cp.status} />
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
