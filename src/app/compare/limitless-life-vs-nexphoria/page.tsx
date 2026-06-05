import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Limitless Life Nootropics: 2026 Comparison",
  description:
    "Limitless Life Nootropics rebranded to Limitless Biotech in 2024, causing customer trust issues and stock problems. Here's how Nexphoria compares on purity, stability, and reliability.",
  openGraph: {
    title: "Nexphoria vs. Limitless Life Nootropics: 2026 Comparison",
    description:
      "Limitless Life rebranded to Limitless Biotech — raising questions about continuity, COA integrity, and capsule bioavailability. Full comparison with Nexphoria.",
    url: "https://nexphoria.com/compare/limitless-life-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/limitless-life-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are Limitless Life Nootropics and Limitless Biotech the same company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — same company, different brand name. The rebranding occurred around 2023–2024 and caused confusion among longtime customers about continuity of quality standards and supplier relationships.",
      },
    },
    {
      "@type": "Question",
      name: "Do capsule-format peptides work as well as injectable lyophilized?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The research community consensus is clear: most peptides are degraded by gastric enzymes before reaching systemic circulation. Oral bioavailability for compounds like BPC-157 is not supported by current published research. Lyophilized injectable formats are the documented research standard.",
      },
    },
    {
      "@type": "Question",
      name: "Is Nexphoria's pricing competitive with Limitless Life?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. And you're not paying for capsule formats that lack documented bioavailability in published research.",
      },
    },
    {
      "@type": "Question",
      name: "What compounds does Nexphoria stock that Limitless Life doesn't?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nexphoria maintains a catalog of 50+ compounds including GLP-1 agonists (semaglutide, tirzepatide, retatrutide), longevity stacks, and nootropic peptides — all in lyophilized injectable format with lot-specific COAs.",
      },
    },
  ],
};

type RowStatus = "ok" | "warn" | "bad";

const comparisonRows: Array<{
  feature: string;
  ll: { label: string; status: RowStatus };
  nx: { label: string; status: RowStatus };
}> = [
  {
    feature: "Brand Stability",
    ll: { label: "⚠️ Rebranded 2024 (trust gap)", status: "warn" },
    nx: { label: "Consistent identity since launch", status: "ok" },
  },
  {
    feature: "Purity Standard",
    ll: { label: "≥98% claimed", status: "warn" },
    nx: { label: "≥99% HPLC + MS verified", status: "ok" },
  },
  {
    feature: "COA Transparency",
    ll: { label: "Moderate", status: "warn" },
    nx: { label: "Publicly verifiable, lot-specific", status: "ok" },
  },
  {
    feature: "Stock Reliability",
    ll: { label: "Reported inconsistencies post-rebrand", status: "warn" },
    nx: { label: "Core compounds always in stock", status: "ok" },
  },
  {
    feature: "Delivery Format",
    ll: { label: "Capsule format available (⚠️ bioavailability)", status: "bad" },
    nx: { label: "Lyophilized injectable only (research standard)", status: "ok" },
  },
  {
    feature: "Cold-Chain Shipping",
    ll: { label: "Not guaranteed", status: "bad" },
    nx: { label: "Cold-pack every order", status: "ok" },
  },
  {
    feature: "Research Content",
    ll: { label: "Limited blog", status: "bad" },
    nx: { label: "300+ technical articles", status: "ok" },
  },
  {
    feature: "Subscription Discount",
    ll: { label: "Not available", status: "bad" },
    nx: { label: "15% recurring discount", status: "ok" },
  },
  {
    feature: "Community Reputation",
    ll: { label: "Mixed post-rebrand", status: "warn" },
    nx: { label: "Building strong reputation", status: "ok" },
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
    title: "The rebrand trust problem",
    body: "In late 2023–2024, Limitless Life Nootropics rebranded as Limitless Biotech. From the outside, this raised immediate questions: same quality control? Same team? Same testing labs? Many longtime customers reported confusion and switched vendors during the transition.\n\nNexphoria launched with a single clear identity: research-grade peptide supplier. No pivots, no rebrand ambiguity, no mixed messaging about what the company is.",
  },
  {
    title: "Capsule peptides don't pass peer review",
    body: "Limitless offers capsule-format peptides — including BPC-157. The research community has clear consensus on oral peptide bioavailability: most peptides are degraded by gastric enzymes before reaching systemic circulation. HPLC purity in the vial is irrelevant if the delivery route defeats the compound.\n\nNexphoria supplies only lyophilized injectable formats — the format used in every published study on these compounds. If the research literature uses subcutaneous or IP administration, that's what we supply.",
  },
  {
    title: "Post-rebrand stock inconsistency",
    body: "Multiple researchers reported stock issues and delayed orders during and after the Limitless rebrand period. Whether this was a temporary logistics issue or indicative of deeper supply chain disruption is unknown — but in research workflows, supply continuity matters. Running out of a compound mid-protocol introduces variables.\n\nNexphoria maintains stocked inventory of all core compounds with priority fulfillment on BPC-157, TB-500, GLP-1 agonists, and GH axis peptides.",
  },
];

const faqs = [
  {
    q: "Are Limitless Life Nootropics and Limitless Biotech the same company?",
    a: "Yes — same company, different brand name. The rebranding occurred around 2023–2024 and caused confusion among longtime customers about continuity of quality standards and supplier relationships.",
  },
  {
    q: "Do capsule-format peptides work as well as injectable lyophilized?",
    a: "The research community consensus is clear: most peptides are degraded by gastric enzymes before reaching systemic circulation. Oral bioavailability for compounds like BPC-157 is not supported by current published research. Lyophilized injectable formats are the documented research standard.",
  },
  {
    q: "Is Nexphoria's pricing competitive with Limitless Life?",
    a: "Yes. And you're not paying for capsule formats that lack documented bioavailability in published research.",
  },
  {
    q: "What compounds does Nexphoria stock that Limitless Life doesn't?",
    a: "Nexphoria maintains a catalog of 50+ compounds including GLP-1 agonists (semaglutide, tirzepatide, retatrutide), longevity stacks, and nootropic peptides — all in lyophilized injectable format with lot-specific COAs.",
  },
];

export default function LimitlessLifeVsNexphoriaPage() {
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
                { label: "vs Limitless Life" },
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
              Nexphoria vs. Limitless Life Nootropics.
            </h1>
            <p
              className="text-lg max-w-2xl mb-8"
              style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}
            >
              After the 2024 rebrand to Limitless Biotech, researchers raised questions about
              continuity, capsule bioavailability, and COA integrity. Here&apos;s how Nexphoria
              compares on the criteria that matter.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#B8A44C", color: "#010101" }}
            >
              Browse the Catalog <ArrowRight size={16} />
            </Link>
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
              Limitless Life / Biotech vs. Nexphoria
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
                    Limitless Life / Biotech
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
                    <StatusCell label={row.ll.label} status={row.ll.status} />
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
              Research Catalog
            </p>
            <h2
              className="text-3xl md:text-4xl mb-5 font-medium tracking-tight"
              style={{ color: "#010101" }}
            >
              Compare the full catalog.
            </h2>
            <p
              className="text-base mb-8 max-w-xl mx-auto"
              style={{ color: "#555", lineHeight: 1.7, fontWeight: 300 }}
            >
              50+ compounds. Lyophilized injectable format only. Cold-chain shipping.
              Publicly verifiable COAs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/products" className="btn-primary">
                Browse the Catalog
              </Link>
              <Link
                href="/coa"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid rgba(0,0,0,0.15)",
                  color: "#555",
                }}
              >
                View COAs First
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
