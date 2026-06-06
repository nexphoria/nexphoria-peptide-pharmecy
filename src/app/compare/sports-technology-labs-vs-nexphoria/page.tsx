import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Sports Technology Labs: Purity Standards & COA Transparency 2026",
  description:
    "Sports Technology Labs focuses primarily on SARMs — their peptide line is secondary, COAs lack mass spectrometry confirmation, and cold-chain shipping is an add-on. Full comparison with Nexphoria.",
  openGraph: {
    title: "Nexphoria vs. Sports Technology Labs: Purity Standards & COA Transparency 2026",
    description:
      "STL vs Nexphoria: COA depth, mass spec confirmation, cold-chain defaults, and US manufacturing. Full breakdown for serious peptide researchers.",
    url: "https://nexphoria.com/compare/sports-technology-labs-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/sports-technology-labs-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Sports Technology Labs a quality peptide vendor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sports Technology Labs has a solid reputation in the SARMs market. Their peptide line is a secondary offering, and while HPLC COAs are provided, mass spectrometry confirmation — the gold standard for verifying molecular identity — is not consistently included in their documentation.",
      },
    },
    {
      "@type": "Question",
      name: "Why does mass spectrometry matter for peptide COAs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HPLC measures purity by peak area — it tells you what percentage of the sample is the target compound. Mass spectrometry (MS) confirms molecular identity by measuring exact molecular weight. Without MS, HPLC alone cannot distinguish between two peptides with similar chromatographic profiles. For research requiring confirmed molecular identity, MS data is essential.",
      },
    },
    {
      "@type": "Question",
      name: "Does Sports Technology Labs include cold-chain shipping on peptide orders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cold-chain packaging at Sports Technology Labs is available as an add-on rather than a standard inclusion. Researchers ordering peptides — which are temperature-sensitive lyophilized compounds — should specifically request cold-chain packaging. Nexphoria includes cold-pack shipping on every peptide order by default.",
      },
    },
    {
      "@type": "Question",
      name: "How does Nexphoria's purity standard compare to Sports Technology Labs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nexphoria posts ≥99% HPLC purity with accompanying mass spectrometry data for every lot. Sports Technology Labs provides HPLC COAs with ≥98% purity claims, but mass spec confirmation is not standard. The additional 1% purity threshold and the MS confirmation represent meaningfully different documentation standards for research-grade compounds.",
      },
    },
  ],
};

type RowStatus = "ok" | "warn" | "bad";

const comparisonRows: Array<{
  feature: string;
  stl: { label: string; status: RowStatus };
  nx: { label: string; status: RowStatus };
}> = [
  {
    feature: "Pricing",
    stl: { label: "Budget to mid-tier pricing", status: "ok" },
    nx: { label: "Competitive mid-tier", status: "ok" },
  },
  {
    feature: "COA Verifiability",
    stl: { label: "HPLC provided, no MS confirmation", status: "warn" },
    nx: { label: "Independently verifiable, lot-specific", status: "ok" },
  },
  {
    feature: "US Manufacturing",
    stl: { label: "Claimed, verification limited", status: "warn" },
    nx: { label: "Confirmed US synthesis", status: "ok" },
  },
  {
    feature: "Primary Focus",
    stl: { label: "SARMs-first catalog", status: "warn" },
    nx: { label: "Peptide-focused catalog", status: "ok" },
  },
  {
    feature: "Delivery Format",
    stl: { label: "Lyophilized, some solutions available", status: "ok" },
    nx: { label: "Lyophilized only (research standard)", status: "ok" },
  },
  {
    feature: "Cold-Chain Shipping",
    stl: { label: "Add-on, not included by default", status: "warn" },
    nx: { label: "Cold-pack every order", status: "ok" },
  },
  {
    feature: "Purity Standard",
    stl: { label: "≥98% HPLC, no mass spec data", status: "warn" },
    nx: { label: "≥99% HPLC + MS, publicly posted", status: "ok" },
  },
  {
    feature: "Research Content",
    stl: { label: "Limited peptide-specific content", status: "bad" },
    nx: { label: "300+ technical articles", status: "ok" },
  },
  {
    feature: "Subscription Discount",
    stl: { label: "Not available", status: "bad" },
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
    title: "SARMs focus vs. peptide specialization",
    body: "Sports Technology Labs built their reputation in the SARMs market. Peptides are a secondary catalog category — meaning their supply chain optimization, cold-chain infrastructure, testing protocols, and staff expertise is centered on a different compound class.\n\nThis matters because peptides have different stability requirements than SARMs. Lyophilized peptides require cold-chain handling from synthesis through delivery. A vendor whose primary operational focus is room-temperature SARMs powders will approach peptide logistics with a different (and typically less rigorous) baseline.\n\nNexphoria is built specifically for peptide research. Every storage procedure, shipping protocol, COA format, and content resource is designed around peptide-specific requirements.",
  },
  {
    title: "Mass spectrometry: the missing confirmation",
    body: "HPLC testing measures purity — the percentage of the sample that is the target compound. It's a necessary data point, but it has a critical limitation: HPLC alone cannot definitively confirm molecular identity. Two peptides with similar sequences can produce nearly identical HPLC chromatograms while being distinct compounds.\n\nMass spectrometry (MS) confirms the molecular weight of the compound, providing identity confirmation that HPLC cannot. For researchers who need to know not just that their sample is pure, but that it is the correct compound, MS data is the standard.\n\nNexphoria posts HPLC + MS data for every lot. Sports Technology Labs' peptide COAs include HPLC but not mass spec confirmation. Researchers running controlled protocols who need both purity and identity verification should weigh this gap.",
  },
  {
    title: "Cold-chain as standard vs. add-on",
    body: "Lyophilized peptides are temperature-sensitive. Repeated freeze-thaw cycles, exposure to elevated temperatures during transit, or storage at incorrect temperatures can degrade peptide integrity before reconstitution. This means cold-chain shipping is not a luxury add-on — it is a baseline requirement for maintaining compound integrity.\n\nSports Technology Labs offers cold-pack shipping as an optional add-on. Researchers who don't specifically select and pay for it receive standard shipping without thermal protection.\n\nNexphoria includes cold-pack packaging on every peptide order by default. There is no separate selection or upcharge required. The full cold-chain protocol — from synthesis through delivery — is built into the standard order fulfillment process.",
  },
];

const faqs = [
  {
    q: "Is Sports Technology Labs a quality peptide vendor?",
    a: "Sports Technology Labs has a solid reputation in the SARMs market. Their peptide line is a secondary offering, and while HPLC COAs are provided, mass spectrometry confirmation — the gold standard for verifying molecular identity — is not consistently included in their documentation.",
  },
  {
    q: "Why does mass spectrometry matter for peptide COAs?",
    a: "HPLC measures purity by peak area — it tells you what percentage of the sample is the target compound. Mass spectrometry (MS) confirms molecular identity by measuring exact molecular weight. Without MS, HPLC alone cannot distinguish between two peptides with similar chromatographic profiles. For research requiring confirmed molecular identity, MS data is essential.",
  },
  {
    q: "Does Sports Technology Labs include cold-chain shipping on peptide orders?",
    a: "Cold-chain packaging at Sports Technology Labs is available as an add-on rather than a standard inclusion. Researchers ordering peptides — which are temperature-sensitive lyophilized compounds — should specifically request cold-chain packaging. Nexphoria includes cold-pack shipping on every peptide order by default.",
  },
  {
    q: "How does Nexphoria's purity standard compare to Sports Technology Labs?",
    a: "Nexphoria posts ≥99% HPLC purity with accompanying mass spectrometry data for every lot. Sports Technology Labs provides HPLC COAs with ≥98% purity claims, but mass spec confirmation is not standard. The additional 1% purity threshold and the MS confirmation represent meaningfully different documentation standards for research-grade compounds.",
  },
];

export default function SportsTechLabsVsNexphoriaPage() {
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
                { label: "vs Sports Technology Labs" },
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
              Nexphoria vs. Sports Technology Labs.
            </h1>
            <p
              className="text-lg max-w-2xl mb-8"
              style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}
            >
              STL is respected in the SARMs market. But their peptide line is secondary — COAs
              lack mass spec confirmation, and cold-chain shipping is an add-on rather than a
              default. Here&apos;s the full comparison.
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
              Sports Technology Labs vs. Nexphoria
            </h2>

            <div
              className="rounded-lg overflow-hidden"
              style={{ border: "1px solid rgba(0,0,0,0.08)" }}
            >
              {/* Header */}
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
                    Sports Technology Labs
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
                    <StatusCell label={row.stl.label} status={row.stl.status} />
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
              Every Nexphoria lot is posted publicly with HPLC and mass spectrometry data. Check
              the testing lab, batch number, and methodology before placing an order.
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
