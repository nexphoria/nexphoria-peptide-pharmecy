import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Benchmark Peptides: Research Vendor Comparison 2026",
  description:
    "Comparing Nexphoria and Benchmark Peptides on HPLC testing standards, COA documentation transparency, cold-chain shipping, catalog depth, and research-only positioning for preclinical researchers.",
  openGraph: {
    title: "Nexphoria vs. Benchmark Peptides: Research Vendor Comparison 2026",
    description:
      "Nexphoria vs Benchmark Peptides: purity documentation, COA transparency, cold-chain logistics, and catalog coverage compared for researchers.",
    url: "https://nexphoria.com/compare/benchmark-peptides-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/benchmark-peptides-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does Nexphoria compare to Benchmark Peptides on COA quality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nexphoria provides batch-specific COAs with HPLC purity, mass spectrometry identity confirmation, and LAL endotoxin results — all from independent third-party US labs. Researchers evaluating Benchmark Peptides should confirm whether COAs are batch-specific, whether MS and endotoxin data are included as standard, and whether documentation is accessible pre-purchase.",
      },
    },
    {
      "@type": "Question",
      name: "Does Benchmark Peptides include endotoxin testing on peptide COAs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LAL endotoxin testing practices at Benchmark Peptides are not consistently documented in product listings. Researchers using peptides in in vivo animal models should request explicit endotoxin test data from any supplier before ordering, as contamination can confound experimental results.",
      },
    },
    {
      "@type": "Question",
      name: "Which vendor has better documentation for institutional research programs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nexphoria provides the testing depth most commonly required by institutional review — lot-specific HPLC, mass spectrometry, and endotoxin COAs from named independent labs, publicly accessible by batch number. Benchmark Peptides' COA format should be evaluated directly against your institution's documentation requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Does Nexphoria stock the same compounds as Benchmark Peptides?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nexphoria maintains a full-spectrum research peptide catalog covering GH secretagogues, GLP-1 agonists, repair peptides (BPC-157, TB-500, GHK-Cu), longevity compounds, nootropic peptides, and Khavinson bioregulators. Benchmark Peptides offers core research peptides; catalog overlap should be verified for specific compounds.",
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
    feature: "Operational Status",
    bp: { label: "Active", status: "ok" },
    nx: { label: "Active — shipping daily", status: "ok" },
  },
  {
    feature: "HPLC Purity Testing",
    bp: { label: "Listed; verify batch specificity", status: "warn" },
    nx: { label: "≥98–99%, batch-specific, method disclosed", status: "ok" },
  },
  {
    feature: "Mass Spectrometry (MS)",
    bp: { label: "Verify per product — not consistently documented", status: "warn" },
    nx: { label: "Standard on every compound, every lot", status: "ok" },
  },
  {
    feature: "LAL Endotoxin Testing",
    bp: { label: "Not consistently listed; request before ordering", status: "bad" },
    nx: { label: "Standard for all in vivo compounds", status: "ok" },
  },
  {
    feature: "COA Accessibility",
    bp: { label: "Available; verify format and batch specificity", status: "warn" },
    nx: { label: "Publicly posted by batch number, pre-purchase", status: "ok" },
  },
  {
    feature: "Independent Third-Party Lab",
    bp: { label: "Verify lab identification on COA", status: "warn" },
    nx: { label: "Named US lab identified on every COA", status: "ok" },
  },
  {
    feature: "Cold-Chain Shipping",
    bp: { label: "Verify default cold-pack policy", status: "warn" },
    nx: { label: "Cold-pack + insulated mailer on every order, year-round", status: "ok" },
  },
  {
    feature: "Catalog Depth",
    bp: { label: "Core research peptides", status: "warn" },
    nx: { label: "Full spectrum including novel peptides and bioregulators", status: "ok" },
  },
  {
    feature: "Research-Only Positioning",
    bp: { label: "Verify labeling and product description standards", status: "warn" },
    nx: { label: "Strict research-only — no clinical or wellness framing", status: "ok" },
  },
];

function StatusIcon({ status }: { status: RowStatus }) {
  if (status === "ok") return <CheckCircle2 size={16} className="inline mr-1.5" style={{ color: "#4a8c4a" }} />;
  if (status === "bad") return <XCircle size={16} className="inline mr-1.5" style={{ color: "#c0392b" }} />;
  return <AlertCircle size={16} className="inline mr-1.5" style={{ color: "#B8A44C" }} />;
}

export default function BenchmarkPeptidesVsNexphoria() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div style={{ backgroundColor: "#EAE7E3", minHeight: "100vh" }}>
        {/* Hero */}
        <section className="relative px-6 pt-32 pb-16 md:pt-40 md:pb-20" style={{ backgroundColor: "#010101" }}>
          <div className="max-w-4xl mx-auto">
            <Breadcrumb
              variant="dark"
              className="mb-8"
              items={[
                { label: "Home", href: "/" },
                { label: "Compare", href: "/compare" },
                { label: "Benchmark Peptides vs Nexphoria" },
              ]}
            />
            <p className="text-xs uppercase tracking-widest mb-6" style={{ color: "#C9DD69" }}>
              Vendor Comparison · 2026
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6"
              style={{ color: "#EAE7E3", lineHeight: 1.1 }}
            >
              Nexphoria vs.
              <br />
              Benchmark Peptides
            </h1>
            <p
              className="text-base md:text-lg max-w-2xl"
              style={{ color: "rgba(234,231,227,0.7)", lineHeight: 1.7, fontWeight: 300 }}
            >
              COA depth, testing methodology, cold-chain standards, and catalog coverage —
              everything researchers need to make an informed sourcing decision.
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16 space-y-14">
          {/* Comparison Table */}
          <section>
            <h2 className="text-2xl font-medium mb-6 tracking-tight" style={{ color: "#010101" }}>
              Side-by-Side Comparison
            </h2>
            <div className="overflow-x-auto rounded-xl border" style={{ borderColor: "rgba(0,0,0,0.1)" }}>
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: "#010101", color: "#EAE7E3" }}>
                    <th className="text-left px-5 py-4 font-medium">Criterion</th>
                    <th className="text-left px-5 py-4 font-medium">Benchmark Peptides</th>
                    <th className="text-left px-5 py-4 font-medium" style={{ color: "#C9DD69" }}>Nexphoria</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={row.feature}
                      style={{
                        backgroundColor: i % 2 === 0 ? "#fff" : "rgba(234,231,227,0.5)",
                        borderTop: "1px solid rgba(0,0,0,0.06)",
                      }}
                    >
                      <td className="px-5 py-4 font-medium" style={{ color: "#010101" }}>
                        {row.feature}
                      </td>
                      <td className="px-5 py-4" style={{ color: "#444" }}>
                        <StatusIcon status={row.bp.status} />
                        {row.bp.label}
                      </td>
                      <td className="px-5 py-4" style={{ color: "#444" }}>
                        <StatusIcon status={row.nx.status} />
                        {row.nx.label}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Testing Detail */}
          <section className="space-y-5">
            <h2 className="text-2xl font-medium tracking-tight" style={{ color: "#010101" }}>
              What the Testing Documentation Should Tell You
            </h2>
            <p style={{ color: "#444", lineHeight: 1.8, fontWeight: 300 }}>
              Three tests define a credible research peptide COA: HPLC purity quantification,
              mass spectrometry identity verification, and LAL endotoxin testing. Each answers a
              distinct question — purity confirms the dominant compound's abundance, MS confirms
              molecular identity independent of chromatographic behavior, and LAL confirms the
              compound is safe for in vivo use.
            </p>
            <p style={{ color: "#444", lineHeight: 1.8, fontWeight: 300 }}>
              A COA that only shows an HPLC purity percentage without method specification,
              laboratory identification, or batch number is not independently verifiable. Nexphoria
              provides all three tests from a named independent US laboratory, with batch numbers
              that allow direct verification against the lot received.
            </p>
            <p style={{ color: "#444", lineHeight: 1.8, fontWeight: 300 }}>
              Benchmark Peptides documents HPLC purity on product pages. Researchers should confirm
              directly whether the COA format includes mass spectrometry data, whether endotoxin
              testing is performed as standard on compounds used in animal models, and whether
              COA documentation is batch-specific to the production lot you receive.
            </p>
          </section>

          {/* Endotoxin callout */}
          <section className="rounded-xl p-7 space-y-3" style={{ backgroundColor: "#fff", border: "1px solid rgba(184,164,76,0.3)", borderLeft: "4px solid #B8A44C" }}>
            <h3 className="font-medium text-lg" style={{ color: "#010101" }}>
              Why Endotoxin Testing Matters for In Vivo Research
            </h3>
            <p style={{ color: "#444", lineHeight: 1.8, fontWeight: 300 }}>
              Endotoxin contamination from gram-negative bacterial cell walls — a common byproduct
              of peptide synthesis — produces severe inflammatory responses in animal models.
              Endotoxin can create false-positive inflammation findings, mask compound effects in
              recovery protocols, and invalidate experimental endpoints. LAL endotoxin testing is
              not optional for any peptide used in in vivo research.
            </p>
            <p style={{ color: "#555", lineHeight: 1.75, fontWeight: 300, fontSize: "0.9em" }}>
              Nexphoria includes LAL endotoxin data on every in vivo compound COA as standard.
              Confirm endotoxin documentation with any supplier before ordering peptides for
              animal model use.
            </p>
          </section>

          {/* FAQ */}
          <section className="space-y-6">
            <h2 className="text-2xl font-medium tracking-tight" style={{ color: "#010101" }}>
              Frequently Asked Questions
            </h2>
            {faqSchema.mainEntity.map((faq) => (
              <div key={faq.name} className="border-b pb-5" style={{ borderColor: "rgba(0,0,0,0.1)" }}>
                <h3 className="font-medium mb-2" style={{ color: "#010101" }}>
                  {faq.name}
                </h3>
                <p style={{ color: "#555", lineHeight: 1.75, fontWeight: 300 }}>
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </section>

          {/* CTA */}
          <section
            className="rounded-2xl px-8 py-12 text-center"
            style={{ backgroundColor: "#010101" }}
          >
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#C9DD69" }}>
              The Nexphoria Standard
            </p>
            <h2 className="text-3xl md:text-4xl mb-5 font-medium tracking-tight" style={{ color: "#EAE7E3" }}>
              Three tests. Every lot.
              <br />
              Publicly posted.
            </h2>
            <p
              className="text-base mb-8 max-w-xl mx-auto"
              style={{ color: "rgba(234,231,227,0.65)", lineHeight: 1.7, fontWeight: 300 }}
            >
              HPLC purity, mass spectrometry, LAL endotoxin — batch-specific COAs from
              independent US labs, accessible before you order.
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
                  border: "1px solid rgba(234,231,227,0.2)",
                  color: "rgba(234,231,227,0.75)",
                }}
              >
                Browse Catalog <ArrowRight size={14} />
              </Link>
            </div>
          </section>

          <div
            className="mx-0 mb-6 px-5 py-4 rounded-lg text-xs"
            style={{
              background: "rgba(0,0,0,0.04)",
              borderLeft: "3px solid #B8A44C",
              color: "#777",
              lineHeight: 1.7,
            }}
          >
            <strong style={{ color: "#010101" }}>Research Use Only: </strong>
            All Nexphoria compounds are sold exclusively for qualified research purposes and are not
            intended for human consumption, therapeutic use, or diagnostic purposes. This comparison
            is written by Nexphoria; researchers are encouraged to independently verify claims
            made by any supplier.
          </div>
        </div>
      </div>
    </>
  );
}
