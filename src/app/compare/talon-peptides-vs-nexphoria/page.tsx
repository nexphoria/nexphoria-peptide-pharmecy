import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Talon Peptides: Purity, COAs & Cold-Chain Compared 2026",
  description:
    "How does Talon Peptides stack up against Nexphoria on HPLC purity standards, COA transparency, cold-chain shipping, and catalog depth? Full 2026 comparison.",
  openGraph: {
    title: "Nexphoria vs. Talon Peptides: Purity, COAs & Cold-Chain Compared 2026",
    description:
      "Talon Peptides vs Nexphoria — a detailed comparison for researchers on purity documentation, COA verifiability, cold-chain defaults, and compound selection.",
    url: "https://nexphoria.com/compare/talon-peptides-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/talon-peptides-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Talon Peptides a legitimate vendor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Talon Peptides operates in the US research peptide space and has some community presence. Key gaps include inconsistent COA documentation with limited lab verification and cold-chain shipping that is not included by default on most orders.",
      },
    },
    {
      "@type": "Question",
      name: "How does Talon Peptides' purity standard compare to Nexphoria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Talon Peptides states ≥98% HPLC purity. Nexphoria holds a ≥99% HPLC minimum and backs every compound with mass spectrometry (MS) data confirming molecular identity — documentation that Talon does not consistently provide.",
      },
    },
    {
      "@type": "Question",
      name: "Does Talon Peptides include cold-chain shipping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Talon Peptides does not include cold packs by default on all orders. Nexphoria includes cold-pack insulated packaging on every order regardless of size or temperature.",
      },
    },
    {
      "@type": "Question",
      name: "Which vendor has better COA transparency — Talon or Nexphoria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nexphoria's COAs name the testing lab, include analyst credentials, batch-specific HPLC and MS data, and a lot number independently verifiable by contacting the lab. Talon's COA documentation is less consistent in these respects.",
      },
    },
  ],
};

type RowStatus = "ok" | "warn" | "bad";

const comparisonRows: Array<{
  feature: string;
  talon: { label: string; status: RowStatus };
  nx: { label: string; status: RowStatus };
}> = [
  {
    feature: "Pricing",
    talon: { label: "Mid-tier; some promotional pricing", status: "ok" },
    nx: { label: "Competitive mid-tier", status: "ok" },
  },
  {
    feature: "COA Verifiability",
    talon: { label: "COAs available; lab naming inconsistent", status: "warn" },
    nx: { label: "Named lab, lot-specific, independently verifiable", status: "ok" },
  },
  {
    feature: "Mass Spec Testing",
    talon: { label: "Not consistently documented", status: "warn" },
    nx: { label: "MS on every compound, publicly posted", status: "ok" },
  },
  {
    feature: "Cold-Chain Shipping",
    talon: { label: "Not included by default on all orders", status: "bad" },
    nx: { label: "Cold-pack every order, standard included", status: "ok" },
  },
  {
    feature: "US Manufacturing",
    talon: { label: "Claimed; synthesis documentation limited", status: "warn" },
    nx: { label: "Confirmed US synthesis", status: "ok" },
  },
  {
    feature: "Purity Standard",
    talon: { label: "≥98% HPLC stated", status: "warn" },
    nx: { label: "≥99% HPLC + MS verified", status: "ok" },
  },
  {
    feature: "Delivery Format",
    talon: { label: "Lyophilized; some liquid options", status: "warn" },
    nx: { label: "Lyophilized only (research standard)", status: "ok" },
  },
  {
    feature: "Research Content",
    talon: { label: "Basic product descriptions", status: "bad" },
    nx: { label: "350+ technical research articles", status: "ok" },
  },
  {
    feature: "Subscription Discount",
    talon: { label: "None confirmed", status: "bad" },
    nx: { label: "15% recurring subscription discount", status: "ok" },
  },
  {
    feature: "Loyalty Program",
    talon: { label: "None", status: "bad" },
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
    title: "COA documentation that researchers can actually verify",
    body: "When a COA doesn't name the testing laboratory or provide a batch identifier tied to a real lab record, it's a formatted document — not verifiable evidence of purity.\n\nNexphoria's COAs include the testing facility name, analyst credentials, lot-specific HPLC chromatogram data, mass spectrometry confirmation, and a batch number you can independently verify by contacting the lab. Every compound. Every lot. That's the standard researchers should expect.",
  },
  {
    title: "Cold-chain isn't optional — it's baseline",
    body: "Lyophilized peptides are stable at room temperature for limited periods. But transit through a warehouse, a delivery vehicle parked in summer heat, or a residential mailbox on a 90°F afternoon can compromise compound integrity before it arrives.\n\nNexphoria includes cold packs in insulated mailers on every order. Not orders over $200. Not express shipments only. Every order. If compound integrity matters to your research, shipping standards shouldn't be an upsell.",
  },
  {
    title: "The purity gap between 98% and 99%",
    body: "One percent sounds small. In practice, it means up to 2% of your preparation could be impurities, synthesis byproducts, or degradation products — all capable of confounding experimental results.\n\nNexphoria holds ≥99% HPLC purity minimums and verifies molecular identity with mass spectrometry on every compound. That extra layer of documentation is what separates a purity claim from confirmed purity data.",
  },
  {
    title: "Research support built for protocol design",
    body: "Talon's website focuses on catalog navigation. There's minimal educational depth for researchers who need to understand compound mechanisms, design dosing protocols, or evaluate study endpoints.\n\nNexphoria's 350+ article library covers BPC-157 mechanism pathways, GLP-1 receptor pharmacology, reconstitution protocols, cold-chain science, and comparative compound analysis. It's built for researchers who want to understand what they're working with — not just order it.",
  },
];

const faqs = [
  {
    q: "Is Talon Peptides a legitimate vendor?",
    a: "Talon Peptides operates in the US research peptide space and has some community presence. Key gaps include inconsistent COA documentation with limited lab verification and cold-chain shipping that is not included by default on most orders.",
  },
  {
    q: "How does Talon Peptides' purity standard compare to Nexphoria?",
    a: "Talon Peptides states ≥98% HPLC purity. Nexphoria holds a ≥99% HPLC minimum and backs every compound with mass spectrometry (MS) data confirming molecular identity — documentation that Talon does not consistently provide.",
  },
  {
    q: "Does Talon Peptides include cold-chain shipping?",
    a: "Talon Peptides does not include cold packs by default on all orders. Nexphoria includes cold-pack insulated packaging on every order regardless of size or temperature.",
  },
  {
    q: "Which vendor has better COA transparency — Talon or Nexphoria?",
    a: "Nexphoria's COAs name the testing lab, include analyst credentials, batch-specific HPLC and MS data, and a lot number independently verifiable by contacting the lab. Talon's COA documentation is less consistent in these respects.",
  },
];

export default function TalonPeptidesVsNexphoriaPage() {
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
                { label: "vs Talon Peptides" },
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
              Nexphoria vs. Talon Peptides.
            </h1>
            <p
              className="text-lg max-w-2xl mb-8"
              style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}
            >
              Talon Peptides has community visibility in the research peptide market. But COA
              verifiability, cold-chain defaults, and purity documentation reveal a meaningful
              gap when you look closely.
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
              Talon Peptides vs. Nexphoria
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
                    Talon Peptides
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
                    <StatusCell label={row.talon.label} status={row.talon.status} />
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
