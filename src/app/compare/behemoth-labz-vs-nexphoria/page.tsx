import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Behemoth Labz: Research Peptide Vendor Comparison 2026",
  description:
    "Behemoth Labz sells a wide range of research compounds. We compare them to Nexphoria on peptide purity documentation, cold-chain shipping, and lab verification standards.",
  openGraph: {
    title: "Nexphoria vs. Behemoth Labz: Research Peptide Vendor Comparison 2026",
    description:
      "Behemoth Labz vs Nexphoria: COA depth, purity standards, compound format, and peptide-specific infrastructure compared side by side.",
    url: "https://nexphoria.com/compare/behemoth-labz-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/behemoth-labz-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Behemoth Labz a legitimate peptide vendor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Behemoth Labz sells a broad catalog of research compounds including SARMs, peptides, and ancillaries. Community reviews are mixed, with concerns about COA depth and liquid peptide quality relative to lyophilized-only vendors. They operate as a broad research compound catalog rather than a peptide-focused supplier.",
      },
    },
    {
      "@type": "Question",
      name: "Does Behemoth Labz offer peptides in lyophilized format?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Behemoth Labz primarily sells peptides in liquid format. Liquid peptides degrade faster than lyophilized powder, require refrigeration from production, and don't match the reference format used in published peptide research. Nexphoria ships lyophilized only — the format used in every peer-reviewed preclinical peptide study.",
      },
    },
    {
      "@type": "Question",
      name: "How does Behemoth Labz compare to Nexphoria on COA verification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Behemoth Labz provides COA documentation for some compounds, but lot-specific, publicly verifiable COAs with mass spectrometry and endotoxin data are not a consistent standard. Nexphoria posts full lot-specific COAs — HPLC, MS, LAL endotoxin, named testing lab — for every compound before it ships.",
      },
    },
    {
      "@type": "Question",
      name: "Is Nexphoria better than Behemoth Labz for serious peptide research?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For researchers who need verifiable purity, lyophilized format, cold-chain shipping, and endotoxin documentation, Nexphoria provides the complete infrastructure. Behemoth Labz's broad catalog and lower prices appeal to a different buyer — but the documentation depth and format standards are different categories.",
      },
    },
  ],
};

type RowStatus = "ok" | "warn" | "bad";

const comparisonRows: Array<{
  feature: string;
  bl: { label: string; status: RowStatus };
  nx: { label: string; status: RowStatus };
}> = [
  {
    feature: "Pricing",
    bl: { label: "Budget-to-mid tier", status: "ok" },
    nx: { label: "Competitive mid-tier", status: "ok" },
  },
  {
    feature: "Primary Focus",
    bl: { label: "Broad catalog: SARMs, peptides, ancillaries", status: "warn" },
    nx: { label: "Peptide-dedicated catalog", status: "ok" },
  },
  {
    feature: "Compound Format",
    bl: { label: "Primarily liquid peptides", status: "bad" },
    nx: { label: "Lyophilized only (research standard)", status: "ok" },
  },
  {
    feature: "COA Verifiability",
    bl: { label: "Variable; not consistently lot-specific", status: "warn" },
    nx: { label: "Named lab, lot-specific, mass spec included", status: "ok" },
  },
  {
    feature: "Purity Standard",
    bl: { label: "Stated ≥98%; independent verification varies", status: "warn" },
    nx: { label: "≥99% HPLC + MS confirmed", status: "ok" },
  },
  {
    feature: "Cold-Chain Shipping",
    bl: { label: "Not documented as default", status: "bad" },
    nx: { label: "Cold-pack every order, included", status: "ok" },
  },
  {
    feature: "Endotoxin Testing",
    bl: { label: "Not documented", status: "bad" },
    nx: { label: "LAL endotoxin screen on all peptides", status: "ok" },
  },
  {
    feature: "US Manufacturing",
    bl: { label: "US-based; synthesis origin varies", status: "warn" },
    nx: { label: "Confirmed US synthesis", status: "ok" },
  },
  {
    feature: "Peptide Research Content",
    bl: { label: "Minimal technical resources", status: "bad" },
    nx: { label: "550+ technical peptide articles", status: "ok" },
  },
  {
    feature: "Subscription Discount",
    bl: { label: "Promotional codes only", status: "warn" },
    nx: { label: "15% recurring subscription discount", status: "ok" },
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
    title: "Liquid peptides vs. lyophilized: not a preference, a stability fact",
    body: "Behemoth Labz sells the majority of their peptides in liquid format. For buyers who prioritize convenience over research integrity, this is functional. For researchers designing repeatable protocols, it's a problem.\n\nLiquid peptides begin degrading from the moment they're put into solution. Reconstitution time, storage temperature, and exposure to light all accelerate degradation in ways that lyophilized powder is largely immune to. Every published peer-reviewed peptide study uses lyophilized powder reconstituted immediately before administration. That's not a coincidence — it's a methodology requirement for reproducible results.\n\nNexphoria ships lyophilized only. The format matches the research standard.",
  },
  {
    title: "COA depth determines whether purity claims are verifiable",
    body: "Behemoth Labz provides documentation for their compounds, but the consistency of lot-specific, independently verifiable COAs with full methodology data varies. A COA that states ≥98% purity without a named lab, lot identifier, and methodology is a certificate of claim — not a certificate of analysis.\n\nNexphoria's COA system requires: the testing lab name, location, and analyst credentials; the specific lot number; the HPLC chromatogram; the mass spectrometry molecular weight confirmation; and the LAL endotoxin result. Any researcher can contact the testing lab with the lot number and confirm the analysis ran. That's independent verifiability — not a representation made by the vendor.",
  },
  {
    title: "Broad catalogs vs. peptide-specific expertise",
    body: "Behemoth Labz runs a broad research compound catalog: SARMs, peptides, nootropics, prohormones, and ancillaries. A broad catalog is commercially rational — it captures more search traffic and serves a wider buyer base. But it means that peptide-specific quality infrastructure — cold-chain protocols, endotoxin screening, lyophilized format sourcing — competes against cost pressures across every other product category.\n\nNexphoria exists only for peptide researchers. Every dollar of QC spend, every shipping decision, every storage protocol decision is made against a single question: does this preserve peptide integrity for the researcher?",
  },
  {
    title: "Endotoxin testing: the quality metric most vendors omit",
    body: "HPLC confirms compound identity and concentration. It does not detect endotoxins — bacterial lipopolysaccharides that can be present in compounds synthesized in environments with any microbial contamination and that cause significant inflammatory responses in cell culture and animal models.\n\nFor in vitro studies, uncontrolled endotoxin levels can confound cytokine assays, cell viability studies, and receptor activation experiments. For in vivo models, endotoxin-contaminated peptide solutions produce inflammation independent of the compound being studied — making it impossible to attribute results to the target peptide.\n\nNexphoria runs LAL endotoxin screening on all peptide compounds. Behemoth Labz does not document this testing.",
  },
];

const faqs = [
  {
    q: "Is Behemoth Labz a legitimate peptide vendor?",
    a: "Behemoth Labz sells a broad catalog of research compounds including SARMs, peptides, and ancillaries. Community reviews are mixed, with concerns about COA depth and liquid peptide quality relative to lyophilized-only vendors. They operate as a broad research compound catalog rather than a peptide-focused supplier.",
  },
  {
    q: "Does Behemoth Labz offer peptides in lyophilized format?",
    a: "Behemoth Labz primarily sells peptides in liquid format. Liquid peptides degrade faster than lyophilized powder, require refrigeration from production, and don't match the reference format used in published peptide research. Nexphoria ships lyophilized only — the format used in every peer-reviewed preclinical peptide study.",
  },
  {
    q: "How does Behemoth Labz compare to Nexphoria on COA verification?",
    a: "Behemoth Labz provides COA documentation for some compounds, but lot-specific, publicly verifiable COAs with mass spectrometry and endotoxin data are not a consistent standard. Nexphoria posts full lot-specific COAs — HPLC, MS, LAL endotoxin, named testing lab — for every compound before it ships.",
  },
  {
    q: "Is Nexphoria better than Behemoth Labz for serious peptide research?",
    a: "For researchers who need verifiable purity, lyophilized format, cold-chain shipping, and endotoxin documentation, Nexphoria provides the complete infrastructure. Behemoth Labz's broad catalog and lower prices appeal to a different buyer — but the documentation depth and format standards are different categories.",
  },
];

export default function BehemothLabzVsNexphoriaPage() {
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
                { label: "vs Behemoth Labz" },
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
              Nexphoria vs. Behemoth Labz.
            </h1>
            <p
              className="text-lg max-w-2xl mb-8"
              style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}
            >
              Behemoth Labz sells a wide catalog of research compounds at competitive prices.
              But liquid peptide format, inconsistent COA depth, and a lack of endotoxin
              documentation create meaningful gaps for serious researchers.
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
              Behemoth Labz vs. Nexphoria
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
                    Behemoth Labz
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
                    <StatusCell label={row.bl.label} status={row.bl.status} />
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
