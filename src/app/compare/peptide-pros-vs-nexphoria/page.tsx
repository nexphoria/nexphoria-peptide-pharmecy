import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Peptide Pros: Research Peptide Vendor Comparison 2026",
  description: "Peptide Pros is an established US research peptide vendor. Nexphoria differentiates on third-party testing depth, standard cold-chain on every order, and a broader advanced compound catalog.",
  openGraph: {
    title: "Nexphoria vs. Peptide Pros: Research Peptide Vendor Comparison 2026",
    description: "Peptide Pros is an established US research peptide vendor. Nexphoria differentiates on third-party testing depth, standard cold-chain on every order, and a broader advanced compound catalog.",
    url: "https://nexphoria.com/compare/peptide-pros-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/peptide-pros-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does Nexphoria compare to Peptide Pros on quality documentation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nexphoria publishes lot-specific COAs from independent third-party labs including HPLC data, ESI-MS molecular weight confirmation, and LAL endotoxin results \u2014 downloadable before purchase. Peptide Pros provides COA documentation; researchers should confirm batch specificity and independent lab verification for their required compounds."
      }
    },
    {
      "@type": "Question",
      "name": "Does Peptide Pros include cold-chain packaging by default?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Peptide Pros' cold-chain packaging practices vary. Nexphoria includes insulated packaging and pharmaceutical-grade ice packs on every temperature-sensitive order as a default, not an add-on."
      }
    },
    {
      "@type": "Question",
      "name": "What peptides does Nexphoria carry that Peptide Pros doesn't?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nexphoria carries advanced longevity compounds (SS-31, MOTS-c, Humanin, Epitalon), the complete GLP-1 family (Tirzepatide, Retatrutide, Cagrilintide), immune modulators (KPV, LL-37, Thymulin, Zinc-Thymulin), and stack formulations that are not consistently available from Peptide Pros."
      }
    },
    {
      "@type": "Question",
      "name": "Is Peptide Pros a legitimate research vendor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Peptide Pros is an established US-based vendor with a community presence. For researchers requiring the deepest documentation standard \u2014 independent third-party MS confirmation, LAL endotoxin data, lot-specific COAs \u2014 Nexphoria was designed specifically to meet that bar."
      }
    }
  ]
};

type RowStatus = "ok" | "warn" | "bad";

const comparisonRows: Array<{
  feature: string;
  competitor: { label: string; status: RowStatus };
  nx: { label: string; status: RowStatus };
}> = [
  { feature: "Primary Focus", competitor: { label: "Research peptides catalog", status: "ok" }, nx: { label: "Peptide-dedicated catalog", status: "ok" } },
  { feature: "COA Verifiability", competitor: { label: "COAs available; verify lab independence", status: "warn" }, nx: { label: "Named lab, lot-specific, MS included", status: "ok" } },
  { feature: "Purity Standard", competitor: { label: "\u226598% HPLC (verify per batch)", status: "warn" }, nx: { label: "\u226599% HPLC + MS confirmed", status: "ok" } },
  { feature: "Mass Spec Confirmation", competitor: { label: "Available for some compounds", status: "warn" }, nx: { label: "Standard on all lots", status: "ok" } },
  { feature: "LAL Endotoxin Testing", competitor: { label: "Not consistently standard", status: "warn" }, nx: { label: "Standard on all lots", status: "ok" } },
  { feature: "Cold-Chain Shipping", competitor: { label: "Varies by order; not always standard default", status: "warn" }, nx: { label: "Cold-pack every order, included", status: "ok" } },
  { feature: "Advanced Longevity Peptides", competitor: { label: "Limited coverage", status: "warn" }, nx: { label: "SS-31, MOTS-c, Humanin, Epitalon", status: "ok" } },
  { feature: "Research Library", competitor: { label: "Basic product documentation", status: "warn" }, nx: { label: "600+ technical articles, calculators", status: "ok" } },
];

const STATUS_COLORS: Record<RowStatus, string> = { ok: "#22c55e", warn: "#f59e0b", bad: "#ef4444" };
const STATUS_ICONS: Record<RowStatus, typeof CheckCircle2> = { ok: CheckCircle2, warn: AlertCircle, bad: XCircle };

function StatusCell({ label, status }: { label: string; status: RowStatus }) {
  const Icon = STATUS_ICONS[status];
  const color = STATUS_COLORS[status];
  return (
    <div className="flex items-start gap-2">
      <Icon size={16} style={{ color, flexShrink: 0, marginTop: 2 }} />
      <span className="text-sm" style={{ color: "#2a2a2a", fontWeight: 300, lineHeight: 1.5 }}>{label}</span>
    </div>
  );
}

const differentiators = [
  { title: "Independent third-party testing: the documentation bar that matters", body: "In the research peptide market, 'COA available' covers a wide spectrum. At the bottom: a generic purity number with no lab name, no method disclosure, no batch traceability. At the top: lot-specific documentation from a named independent laboratory with HPLC chromatogram, full method parameters, ESI-MS molecular weight confirmation, and LAL endotoxin data \u2014 all traceable to the specific vial in your order.\n\nNexphoria operates at the top of that spectrum, by design. Every lot shipped includes a COA with named independent testing lab, full HPLC methodology, mass spectrometry confirmation, and endotoxin data. Researchers can download and review this documentation before placing an order \u2014 not just on receipt.\n\nPeptide Pros provides COA documentation, but the depth, lab independence, and lot-specificity should be independently verified for the specific compounds you require." },
  { title: "Cold-chain: infrastructure vs. option", body: "Peptide stability during transit is not a marketing differentiator \u2014 it is a direct determinant of whether the material you receive matches the purity documented in the COA. Exposure to temperature excursions during shipping introduces hydrolysis and aggregation risk that HPLC cannot retroactively detect if the testing was performed pre-shipment on a separate reference lot.\n\nNexphoria's cold-chain logistics are a default, not a selectable option: insulated mailers, pharmaceutical-grade gel packs on every temperature-sensitive shipment, dry ice for extended transit windows. The infrastructure is built into the base product, not priced separately." },
  { title: "A research library that supports protocol design", body: "Nexphoria's 600+ research articles cover compound mechanisms, protocol design frameworks, reconstitution guides, and dosing references \u2014 written specifically for researchers planning and executing peptide studies. This library includes head-to-head compound comparisons, stack combination guides, and calculators that reduce the time between ordering and running an experiment.\n\nPeptide Pros focuses on product documentation. For researchers who need protocol support infrastructure alongside quality-verified compounds, the content difference is operationally meaningful." },
];

const faqs = [
  { q: "How does Nexphoria compare to Peptide Pros on quality documentation?", a: "Nexphoria publishes lot-specific COAs from independent third-party labs including HPLC data, ESI-MS molecular weight confirmation, and LAL endotoxin results \u2014 downloadable before purchase. Peptide Pros provides COA documentation; researchers should confirm batch specificity and independent lab verification for their required compounds." },
  { q: "Does Peptide Pros include cold-chain packaging by default?", a: "Peptide Pros' cold-chain packaging practices vary. Nexphoria includes insulated packaging and pharmaceutical-grade ice packs on every temperature-sensitive order as a default, not an add-on." },
  { q: "What peptides does Nexphoria carry that Peptide Pros doesn't?", a: "Nexphoria carries advanced longevity compounds (SS-31, MOTS-c, Humanin, Epitalon), the complete GLP-1 family (Tirzepatide, Retatrutide, Cagrilintide), immune modulators (KPV, LL-37, Thymulin, Zinc-Thymulin), and stack formulations that are not consistently available from Peptide Pros." },
  { q: "Is Peptide Pros a legitimate research vendor?", a: "Peptide Pros is an established US-based vendor with a community presence. For researchers requiring the deepest documentation standard \u2014 independent third-party MS confirmation, LAL endotoxin data, lot-specific COAs \u2014 Nexphoria was designed specifically to meet that bar." },
];

export default function PeptideProsVsNexphoriaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        <section className="px-6 pt-20 pb-24 md:pt-28 md:pb-32" style={{ backgroundColor: "#010101" }}>
          <div className="max-w-4xl mx-auto">
            <Breadcrumb variant="dark" className="mb-6" items={[{ label: "Home", href: "/" }, { label: "Compare", href: "/compare" }, { label: "vs Peptide Pros" }]} />
            <p className="eyebrow mb-5" style={{ color: "#B8A44C" }}>Vendor Comparison</p>
            <h1 className="text-4xl md:text-5xl mb-6" style={{ fontWeight: 500, color: "#F9F9F9", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              Nexphoria vs. Peptide Pros.
            </h1>
            <p className="text-lg max-w-2xl mb-8" style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}>
              Peptide Pros is an established US research peptide vendor. Nexphoria differentiates on third-party testing depth, standard cold-chain on every order, and a broader advanced compound catalog.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/coa" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-opacity hover:opacity-90" style={{ backgroundColor: "#B8A44C", color: "#010101" }}>
                Verify Our COAs <ArrowRight size={16} />
              </Link>
              <Link href="/products" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm" style={{ backgroundColor: "transparent", border: "1px solid rgba(255,255,255,0.15)", color: "#A0A0A0" }}>
                Browse Catalog
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:py-28">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#B8A44C" }}>Side-by-Side</p>
            <h2 className="text-2xl md:text-3xl mb-10" style={{ fontWeight: 500, color: "#010101", letterSpacing: "-0.01em" }}>
              Peptide Pros vs. Nexphoria
            </h2>
            <div className="rounded-lg overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
              <div className="grid grid-cols-3" style={{ backgroundColor: "#010101" }}>
                <div className="px-5 py-4"><span className="text-xs uppercase tracking-widest" style={{ color: "#666" }}>Feature</span></div>
                <div className="px-5 py-4" style={{ borderLeft: "1px solid rgba(255,255,255,0.06)" }}><span className="text-xs font-medium" style={{ color: "#f9f9f9" }}>Peptide Pros</span></div>
                <div className="px-5 py-4" style={{ borderLeft: "1px solid rgba(255,255,255,0.06)", backgroundColor: "rgba(184,164,76,0.08)" }}><span className="text-xs font-medium" style={{ color: "#B8A44C" }}>Nexphoria</span></div>
              </div>
              {comparisonRows.map((row, i) => (
                <div key={row.feature} className="grid grid-cols-3" style={{ borderTop: "1px solid rgba(0,0,0,0.06)", backgroundColor: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                  <div className="px-5 py-4"><span className="text-sm" style={{ color: "#010101", fontWeight: 500 }}>{row.feature}</span></div>
                  <div className="px-5 py-4" style={{ borderLeft: "1px solid rgba(0,0,0,0.06)" }}><StatusCell label={row.competitor.label} status={row.competitor.status} /></div>
                  <div className="px-5 py-4" style={{ borderLeft: "1px solid rgba(0,0,0,0.06)", backgroundColor: "rgba(184,164,76,0.03)" }}><StatusCell label={row.nx.label} status={row.nx.status} /></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:py-28" style={{ backgroundColor: "#EAE7E3" }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#B8A44C" }}>The Details That Matter</p>
            <h2 className="text-2xl md:text-3xl mb-10" style={{ fontWeight: 500, color: "#010101", letterSpacing: "-0.01em" }}>
              Where the differences show up
            </h2>
            <div className="space-y-8">
              {differentiators.map((d) => (
                <div key={d.title} className="rounded-lg p-8" style={{ backgroundColor: "#F9F9F9", border: "1px solid rgba(0,0,0,0.07)", borderLeft: "3px solid #B8A44C" }}>
                  <h3 className="text-lg mb-4" style={{ fontWeight: 500, color: "#010101", letterSpacing: "-0.01em" }}>{d.title}</h3>
                  {d.body.split("\n\n").map((para, i) => (
                    <p key={i} className="text-base mb-3 last:mb-0" style={{ color: "#444", lineHeight: 1.8, fontWeight: 300 }}>{para}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:py-28">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#B8A44C" }}>FAQ</p>
            <h2 className="text-2xl md:text-3xl mb-10" style={{ fontWeight: 500, color: "#010101", letterSpacing: "-0.01em" }}>Common questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-lg p-6" style={{ backgroundColor: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}>
                  <p className="text-base font-medium mb-2" style={{ color: "#010101" }}>{faq.q}</p>
                  <p className="text-sm" style={{ color: "#555", lineHeight: 1.75, fontWeight: 300 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:py-28" style={{ backgroundColor: "#EAE7E3" }}>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#B8A44C" }}>Verify Before You Order</p>
            <h2 className="text-3xl md:text-4xl mb-5 font-medium tracking-tight" style={{ color: "#010101" }}>See the COAs first.</h2>
            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "#555", lineHeight: 1.7, fontWeight: 300 }}>
              Every Nexphoria lot is posted publicly. Check the testing lab, batch number, and methodology before placing an order.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/coa" className="btn-primary">View COAs</Link>
              <Link href="/products" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm" style={{ backgroundColor: "transparent", border: "1px solid rgba(0,0,0,0.15)", color: "#555" }}>Browse Catalog</Link>
            </div>
          </div>
        </section>

        <div className="mx-6 mb-6 max-w-3xl md:mx-auto px-5 py-4 rounded-lg text-xs" style={{ background: "rgba(0,0,0,0.04)", borderLeft: "3px solid #B8A44C", color: "#777", lineHeight: 1.7 }}>
          <strong style={{ color: "#010101" }}>Research Use Only: </strong>
          All Nexphoria compounds are sold exclusively for qualified research purposes and are not intended for human consumption, therapeutic use, or diagnostic purposes.
        </div>
      </div>
    </>
  );
}
