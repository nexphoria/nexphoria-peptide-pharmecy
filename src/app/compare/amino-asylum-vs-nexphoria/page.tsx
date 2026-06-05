import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Amino Asylum: COA Verification & Quality Compared 2026",
  description:
    "Amino Asylum has the lowest prices in the peptide market — but Reddit researchers have raised serious questions about their COA verification. Here's what the data shows, and how Nexphoria compares.",
  openGraph: {
    title: "Nexphoria vs. Amino Asylum: COA Verification & Quality Compared 2026",
    description:
      "Amino Asylum's Janoshik COAs have faced Reddit scrutiny over verifiability. Nexphoria offers independently verifiable lot-specific COAs. Full comparison inside.",
    url: "https://nexphoria.com/compare/amino-asylum-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/amino-asylum-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Amino Asylum a legitimate peptide vendor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Amino Asylum is an established vendor with years in the market. The COA verification concern is specific and documented in Reddit communities — not a blanket quality claim. Researchers should evaluate their own tolerance for documentation uncertainty.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Janoshik COA controversy with Amino Asylum?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Multiple Reddit threads on r/Peptides and r/researchchemicals documented instances of Amino Asylum's Janoshik COAs lacking the verifiable batch and order IDs that Janoshik typically includes — meaning researchers couldn't independently confirm the documents matched actual tested lots.",
      },
    },
    {
      "@type": "Question",
      name: "Is Nexphoria significantly more expensive than Amino Asylum?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On BPC-157 10mg, typically $10–15 more than Amino Asylum's entry price. In return you receive 10mg single lyophilized vials, independently verifiable lot-specific COAs, and cold-chain shipping included on every order.",
      },
    },
    {
      "@type": "Question",
      name: "Why does Nexphoria only offer lyophilized vials instead of sprays?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Spray pumps deliver doses by volume, not weight. Any evaporation or concentration change alters the effective dose without visible indication. For research protocols requiring precise dosing, lyophilized powder with BAC water reconstitution is the documented standard.",
      },
    },
  ],
};

type RowStatus = "ok" | "warn" | "bad";

const comparisonRows: Array<{
  feature: string;
  aa: { label: string; status: RowStatus };
  nx: { label: string; status: RowStatus };
}> = [
  {
    feature: "Pricing",
    aa: { label: "Lowest on market", status: "ok" },
    nx: { label: "Competitive mid-tier", status: "ok" },
  },
  {
    feature: "COA Verifiability",
    aa: { label: "⚠️ Reported verification failures (Reddit)", status: "bad" },
    nx: { label: "Independently verifiable, lot-specific", status: "ok" },
  },
  {
    feature: "US Manufacturing",
    aa: { label: "Claimed (unverified)", status: "warn" },
    nx: { label: "Confirmed US synthesis", status: "ok" },
  },
  {
    feature: "Primary Focus",
    aa: { label: "SARMs (peptides secondary)", status: "warn" },
    nx: { label: "Peptide-focused catalog", status: "ok" },
  },
  {
    feature: "Delivery Format",
    aa: { label: "Spray format available (dosing precision concern)", status: "bad" },
    nx: { label: "Lyophilized only (research standard)", status: "ok" },
  },
  {
    feature: "Cold-Chain Shipping",
    aa: { label: "Not specified", status: "bad" },
    nx: { label: "Cold-pack every order", status: "ok" },
  },
  {
    feature: "Purity Standard",
    aa: { label: "Claimed, testing transparency questioned", status: "warn" },
    nx: { label: "≥99% HPLC + MS, publicly posted", status: "ok" },
  },
  {
    feature: "Brand / Domain Stability",
    aa: { label: "Multiple URL shifts (fragmented trust)", status: "warn" },
    nx: { label: "Single domain, consistent identity", status: "ok" },
  },
  {
    feature: "Research Content",
    aa: { label: "Minimal educational resources", status: "bad" },
    nx: { label: "300+ technical articles", status: "ok" },
  },
  {
    feature: "Subscription Discount",
    aa: { label: "Not available", status: "bad" },
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
    title: "The COA authenticity question",
    body: "Amino Asylum uses Janoshik Analytical for third-party testing. Multiple Reddit threads on r/Peptides and r/researchchemicals have documented instances of Amino Asylum's Janoshik COAs that lack the verifiable batch and order IDs that Janoshik typically includes — meaning researchers couldn't independently confirm the documents weren't fabricated or reused from other lots.\n\nThis isn't a claim that Amino Asylum's products are fake. It's a documentation gap that researchers — who depend on verifiable data chains — should take seriously.\n\nNexphoria's COAs are posted with the testing lab name, analyst details, lot-specific data, and methodology. You can contact the testing lab with the lot number and verify the result was actually run for that batch.",
  },
  {
    title: "Spray format: the dosing accuracy problem",
    body: "Amino Asylum popularized spray-format BPC-157 in the market. The appeal: no reconstitution required. The problem: spray pumps deliver doses in volume, not by weight, and any evaporation or concentration change alters the effective dose without visible indication. For research purposes where precise dosing matters, this introduces an unacceptable variable.\n\nLyophilized powder + BAC water reconstitution is the documented research standard used in every published study on BPC-157. Every Nexphoria compound ships in that format.",
  },
  {
    title: "SARMs focus vs. peptide specialization",
    body: "Amino Asylum's core business is SARMs. Peptides are a secondary catalog category. This means their supply chain optimization, testing protocols, and staff expertise is centered on a different compound class.\n\nNexphoria is built specifically for the peptide research market. Every storage procedure, every shipping protocol, every COA format, and every article in our research blog is designed around peptide-specific requirements — lyophilized stability, cold-chain integrity, and reconstitution precision.",
  },
  {
    title: "Price vs. data integrity",
    body: "Amino Asylum is the cheapest source in the peptide market. If price is the only criterion, they win. If you need a documented, verifiable data chain — because you're running actual research protocols where compound integrity matters — the price differential matters less than the COA gap.\n\nThe $10–15 difference per vial buys you: independently verifiable lot data, cold-chain shipping on every order, a vendor whose primary focus is your compound class, and a support team that understands peptide-specific research questions.",
  },
];

const faqs = [
  {
    q: "Is Amino Asylum a legitimate peptide vendor?",
    a: "Amino Asylum is an established vendor with years in the market. The COA verification concern is specific and documented in Reddit communities — not a blanket quality claim. Researchers should evaluate their own tolerance for documentation uncertainty.",
  },
  {
    q: "What is the Janoshik COA controversy with Amino Asylum?",
    a: "Multiple Reddit threads on r/Peptides and r/researchchemicals documented instances of Amino Asylum's Janoshik COAs lacking the verifiable batch and order IDs that Janoshik typically includes — meaning researchers couldn't independently confirm the documents matched actual tested lots.",
  },
  {
    q: "Is Nexphoria significantly more expensive than Amino Asylum?",
    a: "On BPC-157 10mg, typically $10–15 more than Amino Asylum's entry price. In return you receive 10mg single lyophilized vials, independently verifiable lot-specific COAs, and cold-chain shipping included on every order.",
  },
  {
    q: "Why does Nexphoria only offer lyophilized vials instead of sprays?",
    a: "Spray pumps deliver doses by volume, not weight. Any evaporation or concentration change alters the effective dose without visible indication. For research protocols requiring precise dosing, lyophilized powder with BAC water reconstitution is the documented standard.",
  },
];

export default function AminoAsylumVsNexphoriaPage() {
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
                { label: "vs Amino Asylum" },
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
              Nexphoria vs. Amino Asylum.
            </h1>
            <p
              className="text-lg max-w-2xl mb-8"
              style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}
            >
              Amino Asylum offers the lowest prices on the market. But Reddit researchers have
              documented COA verification problems and spray-format dosing precision concerns.
              Here&apos;s the full comparison.
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
              Amino Asylum vs. Nexphoria
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
                    Amino Asylum
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
                    <StatusCell label={row.aa.label} status={row.aa.status} />
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
        <section
          className="px-6 py-20 md:py-28"
          style={{ backgroundColor: "#EAE7E3" }}
        >
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
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: "#B8A44C" }}
            >
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
                  <p
                    className="text-base font-medium mb-2"
                    style={{ color: "#010101" }}
                  >
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
        <section
          className="px-6 py-20 md:py-28"
          style={{ backgroundColor: "#EAE7E3" }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: "#B8A44C" }}
            >
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
