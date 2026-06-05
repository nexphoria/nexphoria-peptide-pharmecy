import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Biotech Peptides: Quality, Pricing & Shipping 2026",
  description:
    "Biotech Peptides offers solid quality but requires $200 minimum for free shipping and has thin educational content. Here's the full Nexphoria vs. Biotech Peptides comparison for 2026.",
  openGraph: {
    title: "Nexphoria vs. Biotech Peptides: Quality, Pricing & Shipping 2026",
    description:
      "Biotech Peptides has good purity standards but a $200 free-shipping wall and minimal community resources. Full comparison with Nexphoria.",
    url: "https://nexphoria.com/compare/biotech-peptides-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/biotech-peptides-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Biotech Peptides a trustworthy vendor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Biotech Peptides is an established US vendor with good quality documentation. Primary friction points are the $200 free-shipping threshold and limited community or educational resources.",
      },
    },
    {
      "@type": "Question",
      name: "Why should I switch to Nexphoria from Biotech Peptides?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If cold-chain shipping on every order, a subscription discount for recurring research, and access to 300+ technical research articles matters to your workflow — Nexphoria is the better fit.",
      },
    },
    {
      "@type": "Question",
      name: "Does Nexphoria offer the same compounds as Biotech Peptides?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nexphoria stocks 50+ compounds including GLP-1 agonists, GH axis peptides, nootropics, longevity stacks, and repair compounds — covering and expanding on Biotech Peptides' catalog.",
      },
    },
    {
      "@type": "Question",
      name: "Is Biotech Peptides' purity testing reliable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Biotech Peptides maintains solid ≥99% HPLC purity standards and is generally considered reliable on quality. The gap versus Nexphoria is on cold-chain shipping, subscription pricing, and research content — not purity.",
      },
    },
  ],
};

type RowStatus = "ok" | "warn" | "bad";

const comparisonRows: Array<{
  feature: string;
  bp: { label: string; status: RowStatus };
  nx: { label: string; status: RowStatus };
}> = [
  {
    feature: "Purity Standard",
    bp: { label: "≥99% HPLC", status: "ok" },
    nx: { label: "≥99% HPLC + MS verification", status: "ok" },
  },
  {
    feature: "COA Transparency",
    bp: { label: "Good — available on site", status: "ok" },
    nx: { label: "Publicly posted, lot-specific + verifiable", status: "ok" },
  },
  {
    feature: "Free Shipping",
    bp: { label: "Orders over $200 only", status: "warn" },
    nx: { label: "Cold-chain included on all orders", status: "ok" },
  },
  {
    feature: "Cold-Chain Shipping",
    bp: { label: "Not standard", status: "bad" },
    nx: { label: "Cold-pack every order", status: "ok" },
  },
  {
    feature: "Research Content",
    bp: { label: "Sparse blog", status: "bad" },
    nx: { label: "300+ technical articles", status: "ok" },
  },
  {
    feature: "Loyalty Program",
    bp: { label: "Not available", status: "bad" },
    nx: { label: "Points system for repeat researchers", status: "ok" },
  },
  {
    feature: "Subscription Discount",
    bp: { label: "Not available", status: "bad" },
    nx: { label: "15% recurring discount", status: "ok" },
  },
  {
    feature: "Community Presence",
    bp: { label: "Minimal Reddit / Discord", status: "warn" },
    nx: { label: "Active community engagement", status: "ok" },
  },
  {
    feature: "New Customer Experience",
    bp: { label: "Neutral / clinical", status: "warn" },
    nx: { label: "Research-focused onboarding", status: "ok" },
  },
  {
    feature: "Compound Catalog",
    bp: { label: "Core compounds", status: "warn" },
    nx: { label: "50+ including GLP-1 agonists + longevity", status: "ok" },
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
    title: "The $200 shipping wall",
    body: "Biotech Peptides runs free shipping on orders over $200. For a researcher buying a single compound for a single protocol run, this forces either overspending to hit the threshold or paying a shipping premium on every order. Neither is ideal for research workflows that don't always align with bulk purchasing cycles.\n\nNexphoria includes cold-chain shipping on every order — insulated mailer, cold packs — regardless of order size. No threshold to hit. No shipping variable to budget around.",
  },
  {
    title: "Quality is comparable. The gaps are elsewhere.",
    body: "Biotech Peptides maintains solid purity standards. If you're choosing between the two purely on quality metrics, they're close — both target ≥99% HPLC purity. Nexphoria additionally runs mass spectrometry identity verification on every compound, confirming molecular identity beyond purity.\n\nWhere Nexphoria differentiates: cold-chain guarantee on all orders, subscription options that make recurring research more economical, a loyalty program that rewards volume researchers, and a research blog that actually answers the protocol questions researchers are running at midnight before a study session.",
  },
  {
    title: "Research content as infrastructure",
    body: "A peptide vendor with 300+ technical research articles isn't just doing content marketing. It's building a resource researchers actually reference when designing protocols, troubleshooting reconstitution issues, or comparing compound options.\n\nBiotech Peptides has minimal educational content. For researchers who want to understand the compounds they're working with — mechanism of action, study design considerations, storage requirements, combination protocols — Nexphoria's content library fills that gap.",
  },
  {
    title: "Subscription pricing for ongoing research",
    body: "Research programs that run multiple protocol cycles benefit from predictable supply costs. Nexphoria's 15% recurring subscription discount is designed for exactly this use case — researchers who order the same compounds repeatedly and don't want to pay full price every cycle.\n\nBiotech Peptides offers no equivalent. For ongoing research programs, the subscription differential compounds into meaningful annual savings.",
  },
];

const faqs = [
  {
    q: "Is Biotech Peptides a trustworthy vendor?",
    a: "Yes. Biotech Peptides is an established US vendor with good quality documentation. Primary friction points are the $200 free-shipping threshold and limited community or educational resources.",
  },
  {
    q: "Why should I switch to Nexphoria from Biotech Peptides?",
    a: "If cold-chain shipping on every order, a subscription discount for recurring research, and access to 300+ technical research articles matters to your workflow — Nexphoria is the better fit.",
  },
  {
    q: "Does Nexphoria offer the same compounds as Biotech Peptides?",
    a: "Nexphoria stocks 50+ compounds including GLP-1 agonists, GH axis peptides, nootropics, longevity stacks, and repair compounds — covering and expanding on Biotech Peptides' catalog.",
  },
  {
    q: "Is Biotech Peptides' purity testing reliable?",
    a: "Biotech Peptides maintains solid ≥99% HPLC purity standards and is generally considered reliable on quality. The gap versus Nexphoria is on cold-chain shipping, subscription pricing, and research content — not purity.",
  },
];

export default function BiotechPeptidesVsNexphoriaPage() {
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
                { label: "vs Biotech Peptides" },
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
              Nexphoria vs. Biotech Peptides.
            </h1>
            <p
              className="text-lg max-w-2xl mb-8"
              style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}
            >
              Biotech Peptides has solid quality documentation — but a $200 free-shipping
              threshold, no subscription pricing, and minimal research content put friction on
              recurring research workflows. Here&apos;s the full comparison.
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
              Biotech Peptides vs. Nexphoria
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
                    Biotech Peptides
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
                    <StatusCell label={row.bp.label} status={row.bp.status} />
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
              50+ compounds. Cold-chain every order. Subscription pricing for recurring
              research. Publicly verifiable COAs.
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
