import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Direct SARMS: Research Peptide Quality Comparison 2026",
  description:
    "Direct SARMS sells research compounds but lacks the peptide-specific quality documentation researchers need. Full comparison vs Nexphoria on purity, COAs, cold-chain, and catalog.",
  openGraph: {
    title: "Nexphoria vs. Direct SARMS: Research Peptide Quality Comparison 2026",
    description:
      "Direct SARMS vs Nexphoria — comparing purity standards, COA verifiability, cold-chain shipping, and research support for peptide researchers.",
    url: "https://nexphoria.com/compare/direct-sarms-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/direct-sarms-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Direct SARMS sell research peptides?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Direct SARMS offers some research peptides alongside SARMs and other compounds. However, their quality documentation infrastructure — COA transparency, mass spectrometry verification, and cold-chain shipping — is built for a general research chemical market, not for the higher standards expected of dedicated peptide vendors.",
      },
    },
    {
      "@type": "Question",
      name: "How do Direct SARMS and Nexphoria compare on COA quality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Direct SARMS provides COA documents, but lot-specific identification and independent lab verification are inconsistent. Nexphoria posts publicly accessible, lot-specific COAs that include the named testing lab, analyst credentials, HPLC chromatogram data, and mass spectrometry results — independently verifiable by any researcher.",
      },
    },
    {
      "@type": "Question",
      name: "Is Nexphoria better than Direct SARMS for peptide research?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For researchers prioritizing peptide-specific quality standards — HPLC ≥99%, mass spec confirmation, cold-chain by default, and deep technical research content — Nexphoria is purpose-built for peptides. Direct SARMS is a broader research chemical vendor where peptides are one category among many.",
      },
    },
    {
      "@type": "Question",
      name: "Does Direct SARMS ship with cold packs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cold-chain packaging is not a standard inclusion for Direct SARMS peptide orders. Nexphoria includes cold packs and insulated mailers on every peptide order as a baseline — not an add-on.",
      },
    },
  ],
};

type RowStatus = "ok" | "warn" | "bad";

const comparisonRows: Array<{
  feature: string;
  ds: { label: string; status: RowStatus };
  nx: { label: string; status: RowStatus };
}> = [
  {
    feature: "Pricing",
    ds: { label: "Competitive; bundle promotions", status: "ok" },
    nx: { label: "Competitive mid-tier", status: "ok" },
  },
  {
    feature: "Peptide Specialization",
    ds: { label: "General research chemical vendor", status: "warn" },
    nx: { label: "Dedicated peptide vendor", status: "ok" },
  },
  {
    feature: "COA Verifiability",
    ds: { label: "COAs available; lot traceability limited", status: "warn" },
    nx: { label: "Named lab, lot-specific, independently verifiable", status: "ok" },
  },
  {
    feature: "Mass Spec Testing",
    ds: { label: "Not consistently provided for peptides", status: "warn" },
    nx: { label: "MS on every compound, publicly posted", status: "ok" },
  },
  {
    feature: "Cold-Chain Shipping",
    ds: { label: "Not included by default", status: "bad" },
    nx: { label: "Cold-pack every order, included", status: "ok" },
  },
  {
    feature: "Purity Standard",
    ds: { label: "≥98% stated for select compounds", status: "warn" },
    nx: { label: "≥99% HPLC + MS verified", status: "ok" },
  },
  {
    feature: "US Manufacturing",
    ds: { label: "Not clearly documented for peptides", status: "bad" },
    nx: { label: "Confirmed US synthesis", status: "ok" },
  },
  {
    feature: "Research Content",
    ds: { label: "Minimal peptide research content", status: "bad" },
    nx: { label: "350+ technical research articles", status: "ok" },
  },
  {
    feature: "Subscription Discount",
    ds: { label: "None", status: "bad" },
    nx: { label: "15% recurring subscription discount", status: "ok" },
  },
  {
    feature: "Loyalty Program",
    ds: { label: "None", status: "bad" },
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
    title: "Peptide-specific vs. general research chemical",
    body: "Direct SARMS is a multi-compound vendor selling SARMs, peptides, nootropics, and related research chemicals. That breadth is useful for some researchers — but it means peptide quality standards aren't the core infrastructure around which the business is built.\n\nNexphoria is purpose-built for peptides. Every quality protocol — ≥99% HPLC minimums, mass spectrometry confirmation, cold-chain by default, publicly posted COAs — was designed for the specific handling and documentation requirements of lyophilized peptides.",
  },
  {
    title: "COA depth that holds up to scrutiny",
    body: "COA documents are a starting point, not a finish line. A COA that doesn't name the testing lab or map to a verifiable batch record is a formatted document, not evidence.\n\nNexphoria's COAs identify the testing facility by name, include analyst credentials, show the HPLC chromatogram for each lot, provide mass spectrometry data confirming molecular identity, and include a lot number you can verify by contacting the lab. Researchers who've worked with FDA-GMP environments will recognize this standard.",
  },
  {
    title: "Cold-chain as a default, not an upgrade",
    body: "Lyophilized peptides degrade under heat and humidity. A research peptide that experiences uncontrolled temperature exposure during shipping may arrive biologically intact by appearance but with compromised potency and integrity.\n\nNexphoria includes cold packs and insulated packaging on every order — standard. For researchers running protocols where compound stability directly affects endpoint validity, this isn't a premium option. It's a baseline.",
  },
  {
    title: "Research content built for protocol design",
    body: "When your vendor has 350+ technical articles covering compound mechanisms, dosing frameworks, reconstitution protocols, and study design considerations — that's infrastructure researchers can actually use.\n\nDirect SARMS' content is largely catalog-focused. Nexphoria's research library is built for the same depth of inquiry that serious peptide research demands.",
  },
];

const faqs = [
  {
    q: "Does Direct SARMS sell research peptides?",
    a: "Direct SARMS offers some research peptides alongside SARMs and other compounds. However, their quality documentation infrastructure is built for a general research chemical market, not for the higher standards expected of dedicated peptide vendors.",
  },
  {
    q: "How do Direct SARMS and Nexphoria compare on COA quality?",
    a: "Direct SARMS provides COA documents, but lot-specific identification and independent lab verification are inconsistent. Nexphoria posts publicly accessible, lot-specific COAs with named testing lab, analyst credentials, HPLC chromatogram data, and mass spectrometry results.",
  },
  {
    q: "Is Nexphoria better than Direct SARMS for peptide research?",
    a: "For researchers prioritizing peptide-specific quality standards — HPLC ≥99%, mass spec confirmation, cold-chain by default, and deep technical research content — Nexphoria is purpose-built for peptides.",
  },
  {
    q: "Does Direct SARMS ship with cold packs?",
    a: "Cold-chain packaging is not a standard inclusion for Direct SARMS peptide orders. Nexphoria includes cold packs and insulated mailers on every peptide order as a baseline — not an add-on.",
  },
];

export default function DirectSARMSVsNexphoriaPage() {
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
                { label: "vs Direct SARMS" },
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
              Nexphoria vs. Direct SARMS.
            </h1>
            <p
              className="text-lg max-w-2xl mb-8"
              style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}
            >
              Direct SARMS sells research compounds across multiple categories. But for
              researchers who need peptide-specific quality standards — COA verifiability,
              cold-chain defaults, and ≥99% HPLC + MS documentation — there&apos;s a significant
              gap.
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
              Direct SARMS vs. Nexphoria
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
                    Direct SARMS
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
                    <StatusCell label={row.ds.label} status={row.ds.status} />
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
