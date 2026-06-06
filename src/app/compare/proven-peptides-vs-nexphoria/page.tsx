import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Proven Peptides: COA Transparency & Cold-Chain 2026",
  description:
    "Proven Peptides was a community-trusted peptide vendor that discontinued operations. This page covers what they offered, what they lacked, and how Nexphoria compares as an active alternative.",
  openGraph: {
    title: "Nexphoria vs. Proven Peptides: COA Transparency & Cold-Chain 2026",
    description:
      "Proven Peptides stopped operations. For researchers who relied on them, here's a full comparison with Nexphoria on purity standards, COA verification, and cold-chain shipping.",
    url: "https://nexphoria.com/compare/proven-peptides-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/proven-peptides-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Did Proven Peptides close down?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Proven Peptides discontinued operations and is no longer accepting orders. The vendor had operated in the research peptide market for several years with a community-positive reputation before shutting down. Researchers who relied on them need to source from currently operating vendors.",
      },
    },
    {
      "@type": "Question",
      name: "What was Proven Peptides known for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Proven Peptides built a community-positive reputation primarily through active engagement in peptide research forums and consistent COA provision. Their HPLC testing was a differentiator in an earlier era of the market when many competitors posted no documentation at all. Their catalog was limited and they did not specialize in cold-chain shipping for lyophilized peptide integrity.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best Proven Peptides alternative in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For researchers looking for a Proven Peptides alternative, key criteria are: currently operating, HPLC-tested compounds with verifiable COAs, lyophilized format, cold-chain shipping as a default, and US-sourced synthesis. Nexphoria meets all of these criteria and adds mass spectrometry identity confirmation and 300+ technical research articles.",
      },
    },
    {
      "@type": "Question",
      name: "How does Nexphoria's documentation compare to what Proven Peptides offered?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Proven Peptides provided HPLC COAs as their testing standard. Nexphoria provides ≥99% HPLC with mass spectrometry confirmation on every lot — adding molecular identity verification that HPLC alone does not provide. Both vendors used US-sourced compounds, but Nexphoria's COA documentation is more detailed and independently verifiable.",
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
    feature: "Operational Status",
    pp: { label: "Discontinued operations", status: "bad" },
    nx: { label: "Fully operational", status: "ok" },
  },
  {
    feature: "COA Verifiability",
    pp: { label: "Was community-trusted when operational", status: "ok" },
    nx: { label: "Independently verifiable, lot-specific", status: "ok" },
  },
  {
    feature: "US Sourcing",
    pp: { label: "Was US-based when operational", status: "ok" },
    nx: { label: "Confirmed US synthesis", status: "ok" },
  },
  {
    feature: "Peptide Catalog Depth",
    pp: { label: "Was limited selection", status: "warn" },
    nx: { label: "Peptide-focused catalog", status: "ok" },
  },
  {
    feature: "Delivery Format",
    pp: { label: "Was lyophilized", status: "ok" },
    nx: { label: "Lyophilized only (research standard)", status: "ok" },
  },
  {
    feature: "Cold-Chain Shipping",
    pp: { label: "Was not specialized cold-chain", status: "warn" },
    nx: { label: "Cold-pack every order", status: "ok" },
  },
  {
    feature: "Purity Standard",
    pp: { label: "Was HPLC-tested, no mass spec", status: "ok" },
    nx: { label: "≥99% HPLC + MS, publicly posted", status: "ok" },
  },
  {
    feature: "Research Content",
    pp: { label: "Was minimal educational content", status: "bad" },
    nx: { label: "300+ technical articles", status: "ok" },
  },
  {
    feature: "Current Availability",
    pp: { label: "Unavailable — discontinued", status: "bad" },
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
    title: "Proven Peptides' shutdown: the trust gap it created",
    body: "Proven Peptides had one of the stronger community reputations in the research peptide market during their operating years. They were active in forums, posted COAs, and built credibility through consistent product delivery. When they discontinued, the researchers who trusted them faced an immediate sourcing gap — not just for compounds, but for the documentation standard they'd come to rely on.\n\nFinding a replacement meant finding a vendor who could replicate that documentation standard — or ideally improve on it. It also meant finding a vendor with the infrastructure to remain operational, which proved to be a gap in the market that Proven Peptides' closure highlighted.\n\nNexphoria's documentation standard matches and exceeds what Proven Peptides offered: verifiable HPLC and mass spec COAs on every lot, not just purity claims without an independent verification pathway.",
  },
  {
    title: "HPLC alone vs. full COA data chains",
    body: "Proven Peptides was known for providing HPLC COAs — a meaningful standard at a time when many vendors provided no documentation. HPLC measures purity by peak area, confirming what percentage of the sample is the target compound. It's necessary but not sufficient for research that requires identity confirmation.\n\nMass spectrometry confirms molecular weight — the identity fingerprint of the compound. Without MS data, HPLC alone cannot definitively distinguish between peptides with similar sequences. This gap is not theoretical: in high-purity samples, the primary peak represents mostly the target compound, but identity confirmation requires mass data.\n\nNexphoria posts HPLC + mass spectrometry data for every lot. Researchers who ran protocols using Proven Peptides' compounds can resume with equivalent or superior documentation confidence.",
  },
  {
    title: "Vendor longevity: why stability matters for ongoing research",
    body: "Proven Peptides' discontinuation illustrates a structural risk for research programs: dependence on a single vendor means your sourcing continuity is tied to their business continuity. When that continuity breaks, research programs depending on consistent compound supply and documentation standards face disruption.\n\nNexphoria is structured as a peptide-first business with the infrastructure to support long-term operations: US synthesis, in-house cold-chain logistics, and a research content platform that serves as both a marketing asset and a community resource. The vendor's continued operations are reinforced by the research library that drives organic discovery and repeat sourcing.\n\nFor researchers building ongoing protocols, sourcing from a vendor with this kind of business structure reduces the risk of the disruption that Proven Peptides' closure created.",
  },
];

const faqs = [
  {
    q: "Did Proven Peptides close down?",
    a: "Yes, Proven Peptides discontinued operations and is no longer accepting orders. Researchers who relied on them need to source from currently operating vendors.",
  },
  {
    q: "What was Proven Peptides known for?",
    a: "Proven Peptides built a community-positive reputation through forum engagement and consistent COA provision. Their HPLC testing was a differentiator in an earlier era. Their catalog was limited and they did not specialize in cold-chain shipping for lyophilized peptide integrity.",
  },
  {
    q: "What is the best Proven Peptides alternative in 2026?",
    a: "Key criteria: currently operating, HPLC + mass spec COAs, lyophilized format, cold-chain shipping as default, and US-sourced synthesis. Nexphoria meets all of these and adds 300+ technical research articles.",
  },
  {
    q: "How does Nexphoria's documentation compare to what Proven Peptides offered?",
    a: "Proven Peptides provided HPLC COAs. Nexphoria provides ≥99% HPLC with mass spectrometry confirmation on every lot — adding molecular identity verification that HPLC alone does not provide. Both used US-sourced compounds, but Nexphoria's COA documentation is more detailed and independently verifiable.",
  },
];

export default function ProvenPeptidesVsNexphoriaPage() {
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
                { label: "Proven Peptides Alternative" },
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
              Proven Peptides is gone.
              <br />
              What now?
            </h1>
            <p
              className="text-lg max-w-2xl mb-8"
              style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}
            >
              Proven Peptides had a community-trusted reputation. Then they discontinued. This
              page covers what made them trusted, where they fell short, and how Nexphoria
              compares as an active alternative with a stronger documentation standard.
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
              Proven Peptides (when operational) vs. Nexphoria
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
                    Proven Peptides
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
              What Proven Peptides had, what they missed, and what changed
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
              Ready when you are.
            </h2>
            <p
              className="text-base mb-8 max-w-xl mx-auto"
              style={{ color: "#555", lineHeight: 1.7, fontWeight: 300 }}
            >
              Every Nexphoria lot is posted publicly with HPLC and mass spectrometry data.
              Cold-chain shipping included on every order. Check the COAs, then order.
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
