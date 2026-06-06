import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Science.bio: What Happened & Where to Source Peptides Now (2026)",
  description:
    "Science.bio was a popular research compound vendor that shut down. This page covers what made Science.bio trusted, where that left researchers, and how Nexphoria compares for peptide-specific needs.",
  openGraph: {
    title: "Nexphoria vs. Science.bio: What Happened & Where to Source Peptides Now (2026)",
    description:
      "Science.bio shut down operations. For researchers looking for a Science.bio alternative for peptides, here's what to look for and how Nexphoria compares on purity, COAs, and cold-chain.",
    url: "https://nexphoria.com/compare/science-bio-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/science-bio-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Did Science.bio shut down permanently?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Science.bio ceased operations and is no longer available for orders. The site has been offline, and researchers who previously relied on them for research compounds including peptides need to source from active vendors. Nexphoria is a currently operating alternative for peptide-specific research needs.",
      },
    },
    {
      "@type": "Question",
      name: "What was Science.bio known for in the research community?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Science.bio built a reputation on COA transparency and US-sourced compounds. They were among the earlier vendors to emphasize third-party testing documentation. Their peptide catalog was more limited than their SARMs and nootropics selection, and their shipping did not include specialized cold-chain handling for temperature-sensitive peptides.",
      },
    },
    {
      "@type": "Question",
      name: "What should I look for in a Science.bio alternative for peptides?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The key criteria for replacing Science.bio for peptide research are: (1) independently verifiable lot-specific COAs with HPLC and MS data, (2) US synthesis confirmation, (3) lyophilized format rather than solutions, (4) cold-chain shipping included as default, and (5) a vendor whose primary focus is peptides rather than a mixed compound catalog.",
      },
    },
    {
      "@type": "Question",
      name: "Is Nexphoria a good Science.bio replacement for peptides?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nexphoria was built specifically for the peptide research market with features Science.bio lacked: 300+ research articles, dedicated cold-chain shipping on every order, ≥99% HPLC + mass spectrometry COAs, and a catalog focused entirely on peptides rather than mixed research compounds. For researchers specifically sourcing peptides, Nexphoria provides more depth than Science.bio offered.",
      },
    },
  ],
};

type RowStatus = "ok" | "warn" | "bad";

const comparisonRows: Array<{
  feature: string;
  sb: { label: string; status: RowStatus };
  nx: { label: string; status: RowStatus };
}> = [
  {
    feature: "Operational Status",
    sb: { label: "Shut down — no longer available", status: "bad" },
    nx: { label: "Fully operational", status: "ok" },
  },
  {
    feature: "COA Verifiability",
    sb: { label: "Was strong when operational", status: "ok" },
    nx: { label: "Independently verifiable, lot-specific", status: "ok" },
  },
  {
    feature: "US Manufacturing",
    sb: { label: "Was confirmed when operational", status: "ok" },
    nx: { label: "Confirmed US synthesis", status: "ok" },
  },
  {
    feature: "Peptide Catalog Depth",
    sb: { label: "Was limited vs. SARMs/nootropics focus", status: "warn" },
    nx: { label: "Peptide-focused catalog", status: "ok" },
  },
  {
    feature: "Delivery Format",
    sb: { label: "Was lyophilized and solutions", status: "warn" },
    nx: { label: "Lyophilized only (research standard)", status: "ok" },
  },
  {
    feature: "Cold-Chain Shipping",
    sb: { label: "Was not specialized for peptides", status: "warn" },
    nx: { label: "Cold-pack every order", status: "ok" },
  },
  {
    feature: "Purity Standard",
    sb: { label: "Was ≥98% HPLC when operational", status: "ok" },
    nx: { label: "≥99% HPLC + MS, publicly posted", status: "ok" },
  },
  {
    feature: "Research Content",
    sb: { label: "Was minimal educational content", status: "bad" },
    nx: { label: "300+ technical articles", status: "ok" },
  },
  {
    feature: "Current Availability",
    sb: { label: "Unavailable — site offline", status: "bad" },
    nx: { label: "Orders ship within 1–2 business days", status: "ok" },
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
    title: "Science.bio shutdown: what researchers lost",
    body: "Science.bio occupied a specific niche: a vendor that prioritized COA transparency at a time when many competitors posted generic or unverifiable documents. Their community reputation was built on documentation quality, not the lowest price.\n\nWhen they shut down, the researchers who valued that documentation standard needed a replacement that maintained the same emphasis on verifiability — while ideally improving on the gaps Science.bio had: limited peptide selection, no cold-chain default, and mixed-catalog focus that diluted peptide-specific expertise.\n\nNexphoria was built as a peptide-first vendor with verifiable COA infrastructure that matches or exceeds what Science.bio provided on the documentation side, plus the cold-chain and lyophilized-only infrastructure Science.bio lacked.",
  },
  {
    title: "Purity standards: continuity matters for ongoing research",
    body: "Researchers who ran protocols using Science.bio compounds were calibrating their work against a specific purity and identity standard. When a vendor shuts down, that calibration breaks — the new vendor needs to provide equivalent or superior documentation for research to continue with confidence.\n\nNexphoria posts ≥99% HPLC with mass spectrometry confirmation on every lot. The HPLC threshold is one point above Science.bio's stated standard. The mass spec data adds identity confirmation that pure purity figures don't provide. For researchers continuing or replicating protocols that used Science.bio compounds, this represents a verifiable continuity of quality.\n\nThe research content library at Nexphoria — 300+ technical articles — also provides the documentation depth that Science.bio's minimal blog never offered.",
  },
  {
    title: "Why specialized peptide vendors outlast mixed compound shops",
    body: "Science.bio was a general research compound vendor. Their expertise and operational infrastructure spanned SARMs, nootropics, and peptides — three compound classes with significantly different stability, storage, and handling requirements.\n\nVendors who try to serve multiple compound classes often do none of them optimally. Peptides require cold-chain from synthesis through delivery, lyophilized format for stability, and documentation that goes beyond the HPLC COAs sufficient for SARMs. A mixed-catalog vendor optimizes for the common denominator.\n\nNexphoria was designed specifically for peptide research. Cold-chain is built into fulfillment, not offered as a premium. Lyophilized format is the only option because it's the research standard. The entire content library is peptide-specific. Specialization produces better outcomes for peptide researchers.",
  },
];

const faqs = [
  {
    q: "Did Science.bio shut down permanently?",
    a: "Yes, Science.bio ceased operations and is no longer available for orders. Researchers who previously relied on them for peptides need to source from currently active vendors.",
  },
  {
    q: "What was Science.bio known for in the research community?",
    a: "Science.bio built a reputation on COA transparency and US-sourced compounds. Their peptide catalog was more limited than their SARMs selection, and their shipping did not include specialized cold-chain handling for temperature-sensitive peptides.",
  },
  {
    q: "What should I look for in a Science.bio alternative for peptides?",
    a: "Key criteria: (1) independently verifiable lot-specific COAs with HPLC and MS data, (2) US synthesis confirmation, (3) lyophilized format, (4) cold-chain shipping as default, and (5) a peptide-focused vendor rather than a mixed compound catalog.",
  },
  {
    q: "Is Nexphoria a good Science.bio replacement for peptides?",
    a: "Nexphoria provides more peptide-specific depth than Science.bio offered: 300+ research articles, cold-chain shipping on every order, ≥99% HPLC + mass spectrometry COAs, and a catalog focused entirely on peptides. For peptide research specifically, Nexphoria exceeds what Science.bio provided.",
  },
];

export default function ScienceBioVsNexphoriaPage() {
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
                { label: "Science.bio Alternative" },
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
              Science.bio shut down.
              <br />
              Here&apos;s what to use instead.
            </h1>
            <p
              className="text-lg max-w-2xl mb-8"
              style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}
            >
              Science.bio built a reputation on documentation quality. Then they closed. This
              page covers what they got right, where they fell short for peptide research, and
              how Nexphoria compares as a currently operating alternative.
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
              Science.bio (when operational) vs. Nexphoria
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
                    Science.bio
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
                    <StatusCell label={row.sb.label} status={row.sb.status} />
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
              What changed when Science.bio closed
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
              Currently Operating
            </p>
            <h2
              className="text-3xl md:text-4xl mb-5 font-medium tracking-tight"
              style={{ color: "#010101" }}
            >
              Ready to verify and order.
            </h2>
            <p
              className="text-base mb-8 max-w-xl mx-auto"
              style={{ color: "#555", lineHeight: 1.7, fontWeight: 300 }}
            >
              Every Nexphoria lot is posted publicly with HPLC and mass spectrometry data. Check
              the COAs, then order with cold-chain shipping included.
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
