import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Peptide Depot: Research Peptide Vendor Comparison 2026",
  description:
    "Side-by-side comparison of Nexphoria and Peptide Depot on HPLC purity documentation, cold-chain shipping infrastructure, catalog depth, COA transparency, and compound selection for research use.",
  openGraph: {
    title: "Nexphoria vs. Peptide Depot: Research Peptide Vendor Comparison 2026",
    description:
      "Peptide Depot vs Nexphoria: purity testing standards, COA documentation, cold-chain shipping, and compound selection compared for researchers.",
    url: "https://nexphoria.com/compare/peptide-depot-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/peptide-depot-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does Nexphoria compare to Peptide Depot on testing documentation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nexphoria publishes batch-specific COAs with HPLC purity, mass spectrometry identity confirmation, and LAL endotoxin results for every compound, accessible by batch number before purchase. Peptide Depot provides COAs on most compounds, though endotoxin documentation consistency varies. Researchers should request complete COA data from Peptide Depot before ordering compounds for in vivo use.",
      },
    },
    {
      "@type": "Question",
      name: "Does Peptide Depot ship with cold packs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Peptide Depot ships with cold packs on most orders, though dry ice shipping for longer transit routes is not standard across all compounds. Nexphoria uses insulated packaging with cold-pack systems for all orders, with dry ice as default for compounds requiring it on extended routes.",
      },
    },
    {
      "@type": "Question",
      name: "Which vendor has better catalog coverage for nootropic and longevity peptides?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nexphoria stocks a broader range of nootropic peptides (Semax, Selank, Cerebrolysin, Dihexa, N-Acetyl Semax Amidate) and longevity compounds (Epitalon, NAD+, SS-31, MOTS-c, Humanin, Khavinson bioregulators). Peptide Depot's coverage in these categories is more limited; catalog availability changes and should be verified directly.",
      },
    },
    {
      "@type": "Question",
      name: "Is Nexphoria more expensive than Peptide Depot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing varies by compound and vial size. Nexphoria offers subscription discounts and a loyalty program. Total cost of research should account for shipping (Nexphoria cold-chain is default, not an add-on), documentation quality, and experimental reliability — not just unit price.",
      },
    },
  ],
};

type RowStatus = "ok" | "warn" | "bad";

const comparisonRows: Array<{
  feature: string;
  pd: { label: string; status: RowStatus };
  nx: { label: string; status: RowStatus };
}> = [
  {
    feature: "Operational Status",
    pd: { label: "Active", status: "ok" },
    nx: { label: "Active — shipping daily", status: "ok" },
  },
  {
    feature: "HPLC Purity Testing",
    pd: { label: "Listed on primary compounds", status: "warn" },
    nx: { label: "≥98–99%, batch-specific, method disclosed", status: "ok" },
  },
  {
    feature: "Mass Spectrometry (MS)",
    pd: { label: "Verify per product/lot", status: "warn" },
    nx: { label: "Standard on every compound, every lot", status: "ok" },
  },
  {
    feature: "LAL Endotoxin Testing",
    pd: { label: "Inconsistent across product lines", status: "warn" },
    nx: { label: "Standard for all in vivo compounds", status: "ok" },
  },
  {
    feature: "COA Accessibility",
    pd: { label: "Available; request before ordering for full documentation", status: "warn" },
    nx: { label: "Publicly posted by batch number, pre-purchase", status: "ok" },
  },
  {
    feature: "Cold-Chain Shipping",
    pd: { label: "Cold packs on most orders; dry ice not standard", status: "warn" },
    nx: { label: "Cold-pack insulated mailer on every order; dry ice where needed", status: "ok" },
  },
  {
    feature: "Nootropic Peptides",
    pd: { label: "Limited selection", status: "warn" },
    nx: { label: "Semax, Selank, Cerebrolysin, Dihexa, N-Acetyl Semax", status: "ok" },
  },
  {
    feature: "Novel & Emerging Peptides",
    pd: { label: "Variable; check current availability", status: "warn" },
    nx: { label: "Retatrutide, Cagrilintide, Pemvidutide, and next-gen GLP-1s", status: "ok" },
  },
  {
    feature: "Peptide Blends & Stacks",
    pd: { label: "Limited", status: "warn" },
    nx: { label: "Pre-built stacks: Wolverine, Glow, KLW, and more", status: "ok" },
  },
  {
    feature: "Subscription / Loyalty",
    pd: { label: "Verify current programs", status: "warn" },
    nx: { label: "15% subscription discount + loyalty points", status: "ok" },
  },
];

function StatusIcon({ status }: { status: RowStatus }) {
  if (status === "ok") return <CheckCircle2 size={16} className="inline mr-1.5" style={{ color: "#4a8c4a" }} />;
  if (status === "bad") return <XCircle size={16} className="inline mr-1.5" style={{ color: "#c0392b" }} />;
  return <AlertCircle size={16} className="inline mr-1.5" style={{ color: "#B8A44C" }} />;
}

export default function PeptideDepotVsNexphoria() {
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
                { label: "Peptide Depot vs Nexphoria" },
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
              Peptide Depot
            </h1>
            <p
              className="text-base md:text-lg max-w-2xl"
              style={{ color: "rgba(234,231,227,0.7)", lineHeight: 1.7, fontWeight: 300 }}
            >
              Purity documentation, cold-chain infrastructure, catalog depth, and compound
              selection — compared for researchers who need more than a price list.
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
                    <th className="text-left px-5 py-4 font-medium">Peptide Depot</th>
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
                        <StatusIcon status={row.pd.status} />
                        {row.pd.label}
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

          {/* COA Section */}
          <section className="space-y-5">
            <h2 className="text-2xl font-medium tracking-tight" style={{ color: "#010101" }}>
              COA Documentation: What to Look For
            </h2>
            <p style={{ color: "#444", lineHeight: 1.8, fontWeight: 300 }}>
              A certificate of analysis is only useful when it can be independently verified.
              Key attributes to evaluate: Is the COA batch-specific to the production lot you
              received? Is the testing laboratory named and independently verifiable? Does the
              COA include HPLC purity, mass spectrometry identity, and endotoxin data?
            </p>
            <p style={{ color: "#444", lineHeight: 1.8, fontWeight: 300 }}>
              Nexphoria makes batch-specific COAs publicly accessible at point of purchase.
              Each COA includes HPLC purity with column and method specification, mass
              spectrometry identity confirmation, LAL endotoxin result, batch number, and
              independent laboratory identification. This documentation level supports
              institutional research record-keeping requirements.
            </p>
            <p style={{ color: "#444", lineHeight: 1.8, fontWeight: 300 }}>
              Peptide Depot provides COA documentation on most compounds. Researchers
              requiring endotoxin data for animal model use should explicitly request
              LAL testing results before ordering, and confirm whether COAs are lot-specific
              or carry generic batch designations.
            </p>
          </section>

          {/* Cold Chain section */}
          <section className="rounded-xl p-7 space-y-4" style={{ backgroundColor: "#fff", border: "1px solid rgba(0,0,0,0.08)" }}>
            <h2 className="text-xl font-medium tracking-tight" style={{ color: "#010101" }}>
              Cold-Chain: More Important Than You Think
            </h2>
            <p style={{ color: "#444", lineHeight: 1.8, fontWeight: 300 }}>
              Peptide degradation is temperature-dependent. A lyophilized peptide that sits in
              an uninsulated shipping box during a June heat wave can accumulate thermal exposure
              that reduces compound integrity — even before it's opened. Research compounds that
              lose 5–10% integrity during transit introduce uncontrolled experimental variables.
            </p>
            <p style={{ color: "#444", lineHeight: 1.8, fontWeight: 300 }}>
              Nexphoria ships all orders with cold-pack insulated packaging as a default —
              not an upgrade, not a summer-only option. Dry ice is used for longer transit
              routes where compound stability requires it. Cold-chain documentation is included
              with every shipment.
            </p>
            <p style={{ color: "#444", lineHeight: 1.8, fontWeight: 300 }}>
              Peptide Depot ships with cold packs on most orders. Researchers should confirm
              whether cold-chain packaging is standard on the specific compounds they need,
              particularly for summer shipping or long transit routes.
            </p>
          </section>

          {/* Catalog Coverage */}
          <section className="space-y-5">
            <h2 className="text-2xl font-medium tracking-tight" style={{ color: "#010101" }}>
              Catalog Coverage: Core vs. Full Spectrum
            </h2>
            <p style={{ color: "#444", lineHeight: 1.8, fontWeight: 300 }}>
              Both vendors cover the core research peptide categories. Where Nexphoria
              differentiates is in nootropic and neuropeptide coverage (Semax, Selank, Dihexa,
              Cerebrolysin, N-Acetyl Semax Amidate), novel next-generation GLP-1 compounds
              (Retatrutide, Cagrilintide, Pemvidutide), longevity bioregulators (Khavinson
              peptide series), and pre-built research stacks (Wolverine Blend, Glow Stack,
              KLW Stack).
            </p>
            <p style={{ color: "#444", lineHeight: 1.8, fontWeight: 300 }}>
              For research programs that span multiple peptide families, sourcing from a
              single vendor with deep catalog coverage reduces qualification burden and
              simplifies lot tracking.
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
              The Full Spectrum
            </p>
            <h2 className="text-3xl md:text-4xl mb-5 font-medium tracking-tight" style={{ color: "#EAE7E3" }}>
              Every peptide you need.
              <br />
              Every lot documented.
            </h2>
            <p
              className="text-base mb-8 max-w-xl mx-auto"
              style={{ color: "rgba(234,231,227,0.65)", lineHeight: 1.7, fontWeight: 300 }}
            >
              From core repair peptides to next-generation GLP-1s, nootropic peptides, and
              longevity bioregulators — with cold-chain shipping and batch-specific COAs on
              every order.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/products" className="btn-primary">
                Browse Catalog
              </Link>
              <Link
                href="/coa"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid rgba(234,231,227,0.2)",
                  color: "rgba(234,231,227,0.75)",
                }}
              >
                View COAs <ArrowRight size={14} />
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
