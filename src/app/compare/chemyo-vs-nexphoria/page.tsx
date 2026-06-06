import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Chemyo: Research Peptide Vendor Comparison 2026",
  description:
    "Chemyo built a strong reputation in SARMs research. We compare them to Nexphoria on peptide-specific purity documentation, cold-chain shipping, and COA verifiability.",
  openGraph: {
    title: "Nexphoria vs. Chemyo: Research Peptide Vendor Comparison 2026",
    description:
      "Chemyo vs Nexphoria: COA depth, purity standards, cold-chain defaults, and peptide specialization compared side by side.",
    url: "https://nexphoria.com/compare/chemyo-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/chemyo-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Chemyo a good peptide vendor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chemyo has a strong reputation in the SARMs research community and has expanded into peptides. Their third-party testing program is well-regarded. However, their peptide catalog is secondary to their SARMs business, and peptide-specific protocols like cold-chain shipping and lyophilized-only format are not consistently enforced.",
      },
    },
    {
      "@type": "Question",
      name: "Does Chemyo specialize in peptides?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Chemyo's core business is SARMs. Their peptide catalog exists but peptide-specific quality infrastructure — cold-chain, lyophilized-only format, and deep COA documentation — is not their primary focus. Nexphoria was built exclusively for peptide researchers.",
      },
    },
    {
      "@type": "Question",
      name: "How does Chemyo's COA system compare to Nexphoria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chemyo posts third-party COA documentation for their SARMs compounds. For peptides, the depth of testing data varies. Nexphoria posts lot-specific COAs with HPLC chromatograms, mass spec molecular weight confirmation, LAL endotoxin results, and named testing labs for every peptide compound.",
      },
    },
    {
      "@type": "Question",
      name: "Does Chemyo ship peptides with cold packs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Chemyo's cold-chain practices for peptides are not documented as a default shipping standard. Nexphoria includes cold packs in insulated mailers on every peptide order, every time, at no additional cost.",
      },
    },
  ],
};

type RowStatus = "ok" | "warn" | "bad";

const comparisonRows: Array<{
  feature: string;
  ch: { label: string; status: RowStatus };
  nx: { label: string; status: RowStatus };
}> = [
  {
    feature: "Pricing",
    ch: { label: "Competitive mid-tier", status: "ok" },
    nx: { label: "Competitive mid-tier", status: "ok" },
  },
  {
    feature: "Primary Focus",
    ch: { label: "SARMs-first (peptides secondary)", status: "warn" },
    nx: { label: "Peptide-dedicated catalog", status: "ok" },
  },
  {
    feature: "COA Verifiability",
    ch: { label: "Strong on SARMs; peptide COAs vary in depth", status: "warn" },
    nx: { label: "Named lab, lot-specific, mass spec included", status: "ok" },
  },
  {
    feature: "Purity Standard",
    ch: { label: "≥98% stated on peptides", status: "warn" },
    nx: { label: "≥99% HPLC + MS confirmed", status: "ok" },
  },
  {
    feature: "Cold-Chain Shipping",
    ch: { label: "Not documented as default for peptides", status: "bad" },
    nx: { label: "Cold-pack every order, included", status: "ok" },
  },
  {
    feature: "US Manufacturing",
    ch: { label: "US company; synthesis origin varies by compound", status: "warn" },
    nx: { label: "Confirmed US synthesis", status: "ok" },
  },
  {
    feature: "Delivery Format",
    ch: { label: "Liquid and lyophilized options", status: "warn" },
    nx: { label: "Lyophilized only (research standard)", status: "ok" },
  },
  {
    feature: "Endotoxin Testing",
    ch: { label: "Not consistently documented for peptides", status: "bad" },
    nx: { label: "LAL endotoxin screen on all peptides", status: "ok" },
  },
  {
    feature: "Peptide Research Content",
    ch: { label: "Minimal peptide-specific resources", status: "bad" },
    nx: { label: "550+ technical peptide articles", status: "ok" },
  },
  {
    feature: "Subscription Discount",
    ch: { label: "Promotional only", status: "warn" },
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
    title: "Strong SARMs vendor — but peptides require different infrastructure",
    body: "Chemyo earned a strong community reputation in SARMs research through consistent third-party testing and transparent documentation. That reputation is legitimate. But SARMs and peptides have fundamentally different storage, shipping, and quality-control requirements.\n\nSARMs are typically stable at room temperature and less vulnerable to thermal degradation in transit. Peptides — especially lyophilized research compounds — are more sensitive. Cold-chain defaults, lyophilized-only format, and endotoxin screening matter in ways that don't apply to small-molecule SARMs.",
  },
  {
    title: "Liquid peptides: the stability compromise",
    body: "Chemyo offers some peptide compounds in liquid format for convenience. The research community has largely moved away from liquid peptides for a documented reason: aqueous solutions degrade faster, accumulate contamination risk once opened, and don't match the reference format used in published studies.\n\nEvery peer-reviewed preclinical peptide study uses lyophilized powder reconstituted immediately before use. Nexphoria ships in that format only — not because liquid is wrong, but because lyophilized is the research standard and integrity is the product.",
  },
  {
    title: "Endotoxin testing: the metric most vendors skip",
    body: "HPLC purity measures compound identity and concentration. It does not detect bacterial endotoxins — lipopolysaccharides that can be present in nominally pure compounds and that produce significant inflammatory responses in research models.\n\nNexphoria runs LAL endotoxin screening on all peptide compounds in addition to HPLC and mass spectrometry. For researchers running in vitro or in vivo studies where inflammatory baseline matters, endotoxin levels aren't a secondary concern. They're a confound that invalidates data if uncontrolled.",
  },
  {
    title: "Peptide-specific knowledge infrastructure",
    body: "Chemyo's content resources are oriented toward SARMs — cycle protocols, SARM-specific dosing guides, and regulatory context for small-molecule research compounds. Useful for their core audience, but not optimized for peptide researchers.\n\nNexphoria has published 550+ technical articles specifically on peptide research: mechanism of action deep dives, dosing protocol designs for specific research models, COA interpretation guides, cold-chain rationale, reconstitution protocols, and compound comparison analysis. The research library exists because peptide researchers need a different knowledge base than SARMs users.",
  },
];

const faqs = [
  {
    q: "Is Chemyo a good peptide vendor?",
    a: "Chemyo has a strong reputation in the SARMs research community and has expanded into peptides. Their third-party testing program is well-regarded. However, their peptide catalog is secondary to their SARMs business, and peptide-specific protocols like cold-chain shipping and lyophilized-only format are not consistently enforced.",
  },
  {
    q: "Does Chemyo specialize in peptides?",
    a: "No. Chemyo's core business is SARMs. Their peptide catalog exists but peptide-specific quality infrastructure — cold-chain, lyophilized-only format, and deep COA documentation — is not their primary focus. Nexphoria was built exclusively for peptide researchers.",
  },
  {
    q: "How does Chemyo's COA system compare to Nexphoria?",
    a: "Chemyo posts third-party COA documentation for their SARMs compounds. For peptides, the depth of testing data varies. Nexphoria posts lot-specific COAs with HPLC chromatograms, mass spec molecular weight confirmation, LAL endotoxin results, and named testing labs for every peptide compound.",
  },
  {
    q: "Does Chemyo ship peptides with cold packs?",
    a: "Chemyo's cold-chain practices for peptides are not documented as a default shipping standard. Nexphoria includes cold packs in insulated mailers on every peptide order, every time, at no additional cost.",
  },
];

export default function ChemyoVsNexphoriaPage() {
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
                { label: "vs Chemyo" },
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
              Nexphoria vs. Chemyo.
            </h1>
            <p
              className="text-lg max-w-2xl mb-8"
              style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}
            >
              Chemyo is a respected SARMs vendor expanding into peptides. But peptide-specific
              infrastructure — cold-chain defaults, lyophilized format, endotoxin testing — tells
              a different story when you look at the details.
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
              Chemyo vs. Nexphoria
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
                    Chemyo
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
                    <StatusCell label={row.ch.label} status={row.ch.status} />
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
