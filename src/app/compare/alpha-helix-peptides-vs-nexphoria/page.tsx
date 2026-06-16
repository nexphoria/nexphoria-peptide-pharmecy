import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Alpha Helix Peptides: Research Vendor Comparison 2026",
  description:
    "Side-by-side comparison of Nexphoria and Alpha Helix Peptides on HPLC purity documentation, mass spectrometry, LAL endotoxin testing, cold-chain shipping, and COA transparency for research use.",
  openGraph: {
    title: "Nexphoria vs. Alpha Helix Peptides: Research Vendor Comparison 2026",
    description:
      "Nexphoria vs Alpha Helix Peptides: analytical testing standards, COA verification, cold-chain logistics, and catalog depth compared for serious researchers.",
    url: "https://nexphoria.com/compare/alpha-helix-peptides-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/alpha-helix-peptides-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does Nexphoria compare to Alpha Helix Peptides on COA documentation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nexphoria provides lot-specific COAs with HPLC purity, mass spectrometry identity confirmation, and LAL endotoxin results for every compound. COAs are publicly accessible by batch number. Researchers should request full COA documentation from Alpha Helix Peptides — including MS and endotoxin data — to confirm equivalent analytical depth.",
      },
    },
    {
      "@type": "Question",
      name: "Does Alpha Helix Peptides do third-party mass spectrometry testing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MS data availability at Alpha Helix Peptides varies by product and lot. Researchers requiring MS confirmation of molecular identity for protocol-critical compounds should request this documentation explicitly before ordering.",
      },
    },
    {
      "@type": "Question",
      name: "Which vendor has better cold-chain shipping for peptides?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nexphoria includes cold-pack insulated mailer packaging on every order as a default, year-round. Cold-chain documentation is included with shipments. Researchers should verify shipping protocols directly with any vendor before ordering temperature-sensitive peptides.",
      },
    },
    {
      "@type": "Question",
      name: "Is Nexphoria or Alpha Helix Peptides better for longevity peptide stacks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nexphoria's catalog covers the full longevity peptide spectrum including Epitalon, NAD+, SS-31, GHK-Cu, MOTS-c, Humanin, Selank, and Khavinson peptide bioregulators, with pre-built stacks available. Catalog depth comparison requires reviewing current availability on both platforms.",
      },
    },
  ],
};

type RowStatus = "ok" | "warn" | "bad";

const comparisonRows: Array<{
  feature: string;
  ah: { label: string; status: RowStatus };
  nx: { label: string; status: RowStatus };
}> = [
  {
    feature: "Operational Status",
    ah: { label: "Active", status: "ok" },
    nx: { label: "Active — shipping daily", status: "ok" },
  },
  {
    feature: "Primary Focus",
    ah: { label: "Peptides + mixed catalog", status: "warn" },
    nx: { label: "Peptide-dedicated catalog", status: "ok" },
  },
  {
    feature: "HPLC Purity Testing",
    ah: { label: "Listed; verify method depth", status: "warn" },
    nx: { label: "≥98–99%, batch-specific, method disclosed", status: "ok" },
  },
  {
    feature: "Mass Spectrometry (MS)",
    ah: { label: "Available on select lots; confirm per order", status: "warn" },
    nx: { label: "Standard on every compound, every lot", status: "ok" },
  },
  {
    feature: "LAL Endotoxin Testing",
    ah: { label: "Verify as standard vs. per-request", status: "warn" },
    nx: { label: "Standard for all in vivo compounds", status: "ok" },
  },
  {
    feature: "COA Accessibility",
    ah: { label: "Available; verify method traceability", status: "warn" },
    nx: { label: "Publicly posted by batch number, downloadable", status: "ok" },
  },
  {
    feature: "Cold-Chain Shipping",
    ah: { label: "Verify cold-pack default policy", status: "warn" },
    nx: { label: "Cold-pack + insulated mailer on every order", status: "ok" },
  },
  {
    feature: "Catalog Breadth",
    ah: { label: "Core peptides available", status: "warn" },
    nx: { label: "Full spectrum — GH axis, GLP-1, longevity, nootropic, bioregulators", status: "ok" },
  },
  {
    feature: "Research-Only Positioning",
    ah: { label: "Verify labeling standards", status: "warn" },
    nx: { label: "Strict research-only — no clinical language", status: "ok" },
  },
];

function StatusIcon({ status }: { status: RowStatus }) {
  if (status === "ok") return <CheckCircle2 size={16} className="inline mr-1.5" style={{ color: "#4a8c4a" }} />;
  if (status === "bad") return <XCircle size={16} className="inline mr-1.5" style={{ color: "#c0392b" }} />;
  return <AlertCircle size={16} className="inline mr-1.5" style={{ color: "#B8A44C" }} />;
}

export default function AlphaHelixVsNexphoria() {
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
                { label: "Alpha Helix Peptides vs Nexphoria" },
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
              Alpha Helix Peptides
            </h1>
            <p
              className="text-base md:text-lg max-w-2xl"
              style={{ color: "rgba(234,231,227,0.7)", lineHeight: 1.7, fontWeight: 300 }}
            >
              Analytical testing standards, COA documentation, cold-chain logistics, and
              catalog depth — compared for researchers who need to know before they order.
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
                    <th className="text-left px-5 py-4 font-medium">Alpha Helix Peptides</th>
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
                        <StatusIcon status={row.ah.status} />
                        {row.ah.label}
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

          {/* Testing Section */}
          <section className="space-y-5">
            <h2 className="text-2xl font-medium tracking-tight" style={{ color: "#010101" }}>
              Analytical Testing: Why Method Depth Matters
            </h2>
            <p style={{ color: "#444", lineHeight: 1.8, fontWeight: 300 }}>
              HPLC purity is the baseline, but the number on a COA is only as meaningful as the
              analytical method behind it. Column chemistry, gradient conditions, detection
              wavelength, and mobile phase composition all determine whether a method can
              discriminate deletion sequences, racemization artifacts, or oxidized residues from
              the target compound.
            </p>
            <p style={{ color: "#444", lineHeight: 1.8, fontWeight: 300 }}>
              Nexphoria COAs specify the independent third-party laboratory, HPLC column and
              mobile phase conditions, detection parameters, and lot-specific purity result —
              providing the method transparency needed to evaluate analytical appropriateness.
              Mass spectrometry identity confirmation and LAL endotoxin testing are included
              as standards on every lot, not optional additions.
            </p>
            <p style={{ color: "#444", lineHeight: 1.8, fontWeight: 300 }}>
              When evaluating Alpha Helix Peptides, researchers with strict analytical traceability
              requirements should confirm: (1) whether COAs are batch-specific or generic documents;
              (2) whether MS data is available for the specific lot ordered; (3) whether endotoxin
              testing is standard for in vivo compounds.
            </p>
          </section>

          {/* Cold Chain Section */}
          <section className="rounded-xl p-7 space-y-4" style={{ backgroundColor: "#fff", border: "1px solid rgba(0,0,0,0.08)" }}>
            <h2 className="text-xl font-medium tracking-tight" style={{ color: "#010101" }}>
              Cold-Chain: The Invisible Quality Variable
            </h2>
            <p style={{ color: "#444", lineHeight: 1.8, fontWeight: 300 }}>
              Lyophilized peptides are stable at room temperature for short periods, but thermal
              excursions during multi-day shipping — especially in summer — can meaningfully
              degrade compound integrity before it reaches your facility. Cold-chain packaging
              is not optional for serious research.
            </p>
            <p style={{ color: "#444", lineHeight: 1.8, fontWeight: 300 }}>
              Nexphoria ships all peptide orders with cold-pack insulated mailers as a default,
              year-round, with documentation of the cold-chain protocol from synthesis partner
              to fulfillment to delivery. Researchers evaluating Alpha Helix Peptides should
              confirm their default shipping protocol and summer handling procedures before ordering.
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
              Nexphoria Standard
            </p>
            <h2 className="text-3xl md:text-4xl mb-5 font-medium tracking-tight" style={{ color: "#EAE7E3" }}>
              Every lot. Every test. Posted publicly.
            </h2>
            <p
              className="text-base mb-8 max-w-xl mx-auto"
              style={{ color: "rgba(234,231,227,0.65)", lineHeight: 1.7, fontWeight: 300 }}
            >
              HPLC purity, mass spectrometry identity, LAL endotoxin — batch-specific, from
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
            className="mx-0 mb-6 max-w-3xl px-5 py-4 rounded-lg text-xs"
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
            is written by Nexphoria and reflects our perspective; researchers are encouraged to
            independently verify claims made by any supplier.
          </div>
        </div>
      </div>
    </>
  );
}
