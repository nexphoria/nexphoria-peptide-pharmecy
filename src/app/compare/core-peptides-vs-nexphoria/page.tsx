import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Core Peptides: Quality, COAs & Cold-Chain Compared 2026",
  description:
    "Core Peptides is a mid-tier vendor with decent reviews but gaps in transparency and cold-chain documentation. Here's a full side-by-side comparison with Nexphoria.",
  openGraph: {
    title: "Nexphoria vs. Core Peptides: Quality, COAs & Cold-Chain Compared 2026",
    description:
      "Comparing Core Peptides vs Nexphoria on purity standards, COA verifiability, cold-chain shipping, and catalog depth. Full breakdown for researchers.",
    url: "https://nexphoria.com/compare/core-peptides-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/core-peptides-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Core Peptides a reliable vendor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Core Peptides has a functional reputation in the research community with generally positive reviews. The primary concerns are limited COA transparency (third-party labs not always named) and cold-chain shipping that is not included by default.",
      },
    },
    {
      "@type": "Question",
      name: "How does Core Peptides' COA process compare to Nexphoria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Core Peptides provides COA documents but does not consistently name the testing lab or provide independently verifiable batch identifiers. Nexphoria posts lot-specific COAs that include the testing lab name, analyst credentials, batch number, and methodology — all independently confirmable.",
      },
    },
    {
      "@type": "Question",
      name: "Does Core Peptides ship with cold packs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Core Peptides' cold-chain shipping is not included by default and varies by order. Nexphoria ships every order with cold packs in insulated mailers regardless of order size.",
      },
    },
    {
      "@type": "Question",
      name: "Is Nexphoria more expensive than Core Peptides?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing is comparable on most compounds. The key difference is what's included: Nexphoria's price includes cold-chain shipping, independently verifiable COAs, and lot-specific mass spec data.",
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
    feature: "Pricing",
    cp: { label: "Mid-tier competitive", status: "ok" },
    nx: { label: "Competitive mid-tier", status: "ok" },
  },
  {
    feature: "COA Verifiability",
    cp: { label: "COAs provided; lab not always named", status: "warn" },
    nx: { label: "Named lab, lot-specific, independently verifiable", status: "ok" },
  },
  {
    feature: "Mass Spec Testing",
    cp: { label: "Not consistently documented", status: "warn" },
    nx: { label: "MS on every compound, publicly posted", status: "ok" },
  },
  {
    feature: "Cold-Chain Shipping",
    cp: { label: "Not included by default", status: "bad" },
    nx: { label: "Cold-pack every order, included", status: "ok" },
  },
  {
    feature: "US Manufacturing",
    cp: { label: "Claimed; documentation limited", status: "warn" },
    nx: { label: "Confirmed US synthesis", status: "ok" },
  },
  {
    feature: "Purity Standard",
    cp: { label: "≥98% HPLC stated", status: "warn" },
    nx: { label: "≥99% HPLC + MS verified", status: "ok" },
  },
  {
    feature: "Delivery Format",
    cp: { label: "Lyophilized (some liquid available)", status: "warn" },
    nx: { label: "Lyophilized only (research standard)", status: "ok" },
  },
  {
    feature: "Research Content",
    cp: { label: "Basic product descriptions", status: "bad" },
    nx: { label: "350+ technical research articles", status: "ok" },
  },
  {
    feature: "Subscription Discount",
    cp: { label: "Limited promotions", status: "warn" },
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
    title: "The COA transparency gap",
    body: "Core Peptides provides COA documents — which is the baseline expectation. The problem is verifiability. When a COA doesn't name the testing lab or include batch identifiers that map to a real lab record, it's a document, not evidence.\n\nNexphoria posts COAs that include the testing facility name, analyst details, lot-specific HPLC and MS data, and a batch number you can verify by contacting the lab directly. That's the difference between a printout and a data chain.",
  },
  {
    title: "Cold-chain by default, not by tier",
    body: "Lyophilized peptides are stable at room temperature for short periods — but degradation accelerates in heat. Transit through a summer warehouse, a delivery van parked in the sun, or a mailbox on a 95°F day can compromise compound integrity before it reaches your freezer.\n\nNexphoria includes cold packs and insulated mailers on every order — not just orders above a threshold. If you're running research protocols where compound integrity matters, this shouldn't be an add-on.",
  },
  {
    title: "≥99% vs ≥98%: the purity standard difference",
    body: "Core Peptides states ≥98% HPLC purity on most compounds. That's an industry-acceptable floor. But for research purposes, that 1% gap matters. At ≥98%, up to 2% of a preparation can be impurities, degradation products, or synthesis byproducts — all of which can confound experimental results.\n\nNexphoria's ≥99% HPLC standard, combined with mass spectrometry to confirm molecular identity, gives you the tightest documentation available from a commercial peptide vendor.",
  },
  {
    title: "Depth of research support",
    body: "Core Peptides' website focuses on catalog browsing. There's minimal educational content — basic product descriptions without the mechanistic depth researchers actually need for protocol design.\n\nNexphoria's 350+ article research library covers compound mechanisms, PubMed studies, dosing protocol frameworks, reconstitution guides, cold-chain science, and comparative vendor analysis. Whether you're designing a first protocol or going deep on a specific pathway, the information is there.",
  },
];

const faqs = [
  {
    q: "Is Core Peptides a reliable vendor?",
    a: "Core Peptides has a functional reputation in the research community with generally positive reviews. The primary concerns are limited COA transparency (third-party labs not always named) and cold-chain shipping that is not included by default.",
  },
  {
    q: "How does Core Peptides' COA process compare to Nexphoria?",
    a: "Core Peptides provides COA documents but does not consistently name the testing lab or provide independently verifiable batch identifiers. Nexphoria posts lot-specific COAs that include the testing lab name, analyst credentials, batch number, and methodology — all independently confirmable.",
  },
  {
    q: "Does Core Peptides ship with cold packs?",
    a: "Core Peptides' cold-chain shipping is not included by default and varies by order. Nexphoria ships every order with cold packs in insulated mailers regardless of order size.",
  },
  {
    q: "Is Nexphoria more expensive than Core Peptides?",
    a: "Pricing is comparable on most compounds. The key difference is what's included: Nexphoria's price includes cold-chain shipping, independently verifiable COAs, and lot-specific mass spec data.",
  },
];

export default function CorePeptidesVsNexphoriaPage() {
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
                { label: "vs Core Peptides" },
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
              Nexphoria vs. Core Peptides.
            </h1>
            <p
              className="text-lg max-w-2xl mb-8"
              style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}
            >
              Core Peptides is a mid-market vendor with decent community reviews. But when you
              look closely at COA verifiability, cold-chain defaults, and purity standards, the
              documentation gap becomes clear.
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
              Core Peptides vs. Nexphoria
            </h2>

            <div
              className="rounded-lg overflow-hidden"
              style={{ border: "1px solid rgba(0,0,0,0.08)" }}
            >
              {/* Header */}
              <div className="grid grid-cols-3" style={{ backgroundColor: "#010101" }}>
                <div className="px-5 py-4">
                  <span
                    className="text-xs uppercase tracking-widest"
                    style={{ color: "#666" }}
                  >
                    Feature
                  </span>
                </div>
                <div
                  className="px-5 py-4"
                  style={{ borderLeft: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <span className="text-xs font-medium" style={{ color: "#f9f9f9" }}>
                    Core Peptides
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
