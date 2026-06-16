import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Prestige Peptides: Quality, COAs & Cold-Chain 2026",
  description:
    "How does Prestige Peptides compare to Nexphoria on purity documentation, COA verifiability, cold-chain shipping, and compound selection? Full 2026 breakdown for researchers.",
  openGraph: {
    title: "Nexphoria vs. Prestige Peptides: Quality, COAs & Cold-Chain 2026",
    description:
      "Prestige Peptides vs Nexphoria — a side-by-side comparison for researchers evaluating purity standards, COA transparency, cold-chain defaults, and research support depth.",
    url: "https://nexphoria.com/compare/prestige-peptides-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/prestige-peptides-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Prestige Peptides a reputable vendor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prestige Peptides has a presence in the research peptide market with community reviews. Primary documentation gaps include inconsistent COA lot traceability and cold-chain shipping that is not included as a default on standard orders.",
      },
    },
    {
      "@type": "Question",
      name: "How does Prestige Peptides' purity documentation compare to Nexphoria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Prestige Peptides provides COA documents on their products. Nexphoria provides lot-specific COAs that name the testing laboratory, include HPLC chromatogram data, mass spectrometry results confirming molecular identity, and a batch number independently verifiable by contacting the lab — a higher standard of documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Does Prestige Peptides ship with cold packs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cold-chain packaging with insulated mailers is not included by default on Prestige Peptides orders. Nexphoria includes cold packs on every order regardless of size.",
      },
    },
    {
      "@type": "Question",
      name: "Which is better for serious peptide researchers — Prestige or Nexphoria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Researchers who require ≥99% HPLC purity minimums, mass spectrometry confirmation on every compound, cold-chain shipping as a default, and deep technical research content will find Nexphoria purpose-built for that standard. Prestige Peptides operates at a general vendor level without the same documentation depth.",
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
    pp: { label: "Mid-tier; occasional promotions", status: "ok" },
    nx: { label: "Competitive mid-tier", status: "ok" },
  },
  {
    feature: "COA Verifiability",
    pp: { label: "COAs available; lot traceability inconsistent", status: "warn" },
    nx: { label: "Named lab, lot-specific, independently verifiable", status: "ok" },
  },
  {
    feature: "Mass Spec Testing",
    pp: { label: "Not consistently documented", status: "warn" },
    nx: { label: "MS on every compound, publicly posted", status: "ok" },
  },
  {
    feature: "Cold-Chain Shipping",
    pp: { label: "Not included by default", status: "bad" },
    nx: { label: "Cold-pack every order, included", status: "ok" },
  },
  {
    feature: "US Manufacturing",
    pp: { label: "Claimed; documentation limited", status: "warn" },
    nx: { label: "Confirmed US synthesis", status: "ok" },
  },
  {
    feature: "Purity Standard",
    pp: { label: "≥98% HPLC stated", status: "warn" },
    nx: { label: "≥99% HPLC + MS verified", status: "ok" },
  },
  {
    feature: "Delivery Format",
    pp: { label: "Lyophilized; some liquid options", status: "warn" },
    nx: { label: "Lyophilized only (research standard)", status: "ok" },
  },
  {
    feature: "Research Content",
    pp: { label: "Basic product descriptions", status: "bad" },
    nx: { label: "350+ technical research articles", status: "ok" },
  },
  {
    feature: "Subscription Discount",
    pp: { label: "None confirmed", status: "bad" },
    nx: { label: "15% recurring subscription discount", status: "ok" },
  },
  {
    feature: "Loyalty Program",
    pp: { label: "None", status: "bad" },
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
    title: "Lot-level COA traceability — the standard that matters",
    body: "When evaluating any peptide vendor, the question isn't whether a COA exists — it's whether the COA is independently verifiable. A document that doesn't identify the testing laboratory by name or include a batch number traceable to a real lab record is a marketing asset, not evidence.\n\nNexphoria's COAs include the named testing facility, analyst credentials, HPLC chromatogram data specific to each lot, mass spectrometry molecular identity confirmation, and a batch number you can verify by contacting the lab directly. That chain of evidence is what serious researchers require.",
  },
  {
    title: "Cold-chain by default, not exception",
    body: "Lyophilized peptides degrade under uncontrolled temperature exposure. A summer transit through a hot warehouse, a delivery vehicle left in the sun, or a residential mailbox that climbs to 100°F can compromise compound integrity in ways that aren't always visible on reconstitution.\n\nNexphoria includes cold packs and insulated mailers on every order. This isn't an optional upgrade or a threshold for qualifying orders. Every shipment. That's the standard that researchers running controlled protocols should expect from a dedicated peptide vendor.",
  },
  {
    title: "≥99% HPLC: the purity threshold for research-grade compounds",
    body: "The difference between ≥98% and ≥99% HPLC purity is not cosmetic. At ≥98%, up to 2% of a preparation may consist of impurities, synthesis byproducts, or degradation products — variables that can affect receptor binding, confound dose-response measurements, and introduce noise into experimental results.\n\nNexphoria's ≥99% HPLC minimum, combined with mass spectrometry confirmation of molecular identity on every compound, gives researchers the tightest commercially available documentation for research peptides.",
  },
  {
    title: "Research infrastructure that supports protocol design",
    body: "Nexphoria's 350+ article library covers compound mechanism deep dives, PubMed study summaries, dosing protocol frameworks, reconstitution methodology, cold-chain science, and comparative analysis. This isn't blog content. It's research infrastructure for the researcher who wants to understand the biology before they design an experiment.\n\nPrestige Peptides provides standard catalog descriptions. For researchers who want depth of mechanistic understanding alongside access to verified compounds, the content gap is significant.",
  },
];

const faqs = [
  {
    q: "Is Prestige Peptides a reputable vendor?",
    a: "Prestige Peptides has a presence in the research peptide market with community reviews. Primary documentation gaps include inconsistent COA lot traceability and cold-chain shipping that is not included as a default on standard orders.",
  },
  {
    q: "How does Prestige Peptides' purity documentation compare to Nexphoria?",
    a: "Prestige Peptides provides COA documents on their products. Nexphoria provides lot-specific COAs that name the testing laboratory, include HPLC chromatogram data, mass spectrometry results, and a batch number independently verifiable by contacting the lab.",
  },
  {
    q: "Does Prestige Peptides ship with cold packs?",
    a: "Cold-chain packaging with insulated mailers is not included by default on Prestige Peptides orders. Nexphoria includes cold packs on every order regardless of size.",
  },
  {
    q: "Which is better for serious peptide researchers — Prestige or Nexphoria?",
    a: "Researchers requiring ≥99% HPLC minimums, mass spectrometry confirmation on every compound, cold-chain shipping as a default, and deep technical research content will find Nexphoria purpose-built for that standard.",
  },
];

export default function PrestigePeptidesVsNexphoriaPage() {
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
                { label: "vs Prestige Peptides" },
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
              Nexphoria vs. Prestige Peptides.
            </h1>
            <p
              className="text-lg max-w-2xl mb-8"
              style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}
            >
              Prestige Peptides competes in the research peptide market. But when COA
              verifiability, cold-chain defaults, and purity documentation are examined closely,
              the documentation gap between a general vendor and a research-grade standard becomes
              clear.
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
              Prestige Peptides vs. Nexphoria
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
                    Prestige Peptides
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
