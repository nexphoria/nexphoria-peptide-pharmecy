import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Peptide Clinic: Research Peptide Vendor Comparison 2026",
  description: "Peptide Clinic operates in the clinical and wellness peptide space. Nexphoria is a research-grade supplier with independent lot-level testing and documentation built for the research community.",
  openGraph: {
    title: "Nexphoria vs. Peptide Clinic: Research Peptide Vendor Comparison 2026",
    description: "Peptide Clinic operates in the clinical and wellness peptide space. Nexphoria is a research-grade supplier with independent lot-level testing and documentation built for the research community.",
    url: "https://nexphoria.com/compare/peptide-clinic-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/peptide-clinic-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What's the difference between Peptide Clinic and Nexphoria?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Peptide Clinic operates primarily in the clinical and wellness space. Nexphoria is a research-grade supplier \u2014 every compound includes independent third-party HPLC, mass spectrometry, and LAL endotoxin documentation for preclinical research use."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use Peptide Clinic compounds for laboratory research?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Peptide Clinic compounds are positioned for clinical and wellness applications. For preclinical laboratory research requiring independent lot-specific analytical documentation \u2014 HPLC chromatogram, ESI-MS data, LAL endotoxin testing with named independent lab \u2014 Nexphoria is purpose-built for that documentation standard."
      }
    },
    {
      "@type": "Question",
      "name": "Does Nexphoria ship with clinical-grade cold-chain?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nexphoria includes pharmaceutical-grade insulated packaging and ice packs on every temperature-sensitive research order. Cold-chain is default \u2014 not conditional on order size or optional at checkout."
      }
    },
    {
      "@type": "Question",
      "name": "Which vendor is better for peptide research protocols?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For preclinical research protocols requiring transparent lot-level analytical documentation, Nexphoria is designed specifically for that standard. Nexphoria also provides 600+ research articles, protocol calculators, and compound comparison guides to support research planning."
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
  { feature: "Primary Focus", competitor: { label: "Clinical/wellness peptides", status: "warn" }, nx: { label: "Peptide-dedicated catalog", status: "ok" } },
  { feature: "COA Verifiability", competitor: { label: "Varies; clinical focus differs from research-grade", status: "warn" }, nx: { label: "Named lab, lot-specific, MS included", status: "ok" } },
  { feature: "Purity Standard", competitor: { label: "Clinical-grade; methodology varies", status: "warn" }, nx: { label: "\u226599% HPLC + MS confirmed", status: "ok" } },
  { feature: "Mass Spec Confirmation", competitor: { label: "Not consistently documented for research use", status: "warn" }, nx: { label: "Standard on all lots", status: "ok" } },
  { feature: "LAL Endotoxin Testing", competitor: { label: "Clinical context; documentation may differ", status: "warn" }, nx: { label: "Standard on all lots", status: "ok" } },
  { feature: "Cold-Chain Shipping", competitor: { label: "Clinical cold-chain; protocols may differ", status: "warn" }, nx: { label: "Cold-pack every order, included", status: "ok" } },
  { feature: "Research Catalog Breadth", competitor: { label: "Clinical focus; advanced research compounds limited", status: "warn" }, nx: { label: "Best-in-class standard", status: "ok" } },
  { feature: "Research Library", competitor: { label: "Clinical content; limited research protocol depth", status: "warn" }, nx: { label: "600+ technical articles, calculators", status: "ok" } },
];

const STATUS_COLORS: Record<RowStatus, string> = { ok: "#22c55e", warn: "#f59e0b", bad: "#ef4444" };
const STATUS_ICONS: Record<RowStatus, typeof CheckCircle2> = { ok: CheckCircle2, warn: AlertCircle, bad: XCircle };

function StatusCell({ label, status }: { label: string; status: RowStatus }) {
  const Icon = STATUS_ICONS[status];
  const color = STATUS_COLORS[status];
  return (
    <div className="flex items-start gap-2">
      <Icon size={{16}} style={{ color, flexShrink: 0, marginTop: 2 }} />
      <span className="text-sm" style={{ color: "#2a2a2a", fontWeight: 300, lineHeight: 1.5 }}>{label}</span>
    </div>
  );
}

const differentiators = [
  { title: "Research-grade vs. clinical-grade documentation standards", body: "Peptide Clinic serves a clinical and wellness market where the primary documentation requirement is compliance with prescribing standards and compounding regulations. These standards differ from what preclinical research protocols require: lot-specific COAs traceable to independent third-party analytical laboratories, with full HPLC methodology, ESI-MS molecular weight confirmation, and LAL endotoxin testing documented for each lot.\n\nNexphoria is designed from the ground up for research procurement. Every COA is generated by a named independent laboratory, includes the method parameters required to evaluate analytical appropriateness, and is posted publicly before purchase. The documentation standard supports the characterization requirements of published research, not just clinical compliance." },
  { title: "Research-focused catalog vs. clinical compound selection", body: "Clinical peptide vendors stock compounds that have defined wellness or therapeutic applications \u2014 GLP-1 agonists, BPC-157, thymosin fractions, HGH peptides. Advanced research compounds in longevity (SS-31, MOTS-c, Humanin, Epitalon), immune modulation (Thymulin, Zinc-Thymulin, KPV, LL-37), and neurological research (Dihexa, PE-22-28, Cortistatin) are less commonly available through clinical suppliers.\n\nNexphoria's 100+ compound catalog is organized by research application and covers the full spectrum of preclinical research categories \u2014 with consistent independent testing documentation across all SKUs." },
  { title: "Research infrastructure: 600+ articles, calculators, protocol guides", body: "Nexphoria's research library is built specifically for researchers planning and executing peptide studies. Content covers mechanistic deep-dives, reconstitution protocols, dosing frameworks, compound comparisons, and study design guides \u2014 not clinical advisory content.\n\nFor researchers who need protocol planning support alongside quality-verified compounds, this infrastructure reduces time-to-experiment and supports protocol defensibility." },
];

const faqs = [
  { q: "What's the difference between Peptide Clinic and Nexphoria?", a: "Peptide Clinic operates primarily in the clinical and wellness space. Nexphoria is a research-grade supplier \u2014 every compound includes independent third-party HPLC, mass spectrometry, and LAL endotoxin documentation for preclinical research use." },
  { q: "Can I use Peptide Clinic compounds for laboratory research?", a: "Peptide Clinic compounds are positioned for clinical and wellness applications. For preclinical laboratory research requiring independent lot-specific analytical documentation \u2014 HPLC chromatogram, ESI-MS data, LAL endotoxin testing with named independent lab \u2014 Nexphoria is purpose-built for that documentation standard." },
  { q: "Does Nexphoria ship with clinical-grade cold-chain?", a: "Nexphoria includes pharmaceutical-grade insulated packaging and ice packs on every temperature-sensitive research order. Cold-chain is default \u2014 not conditional on order size or optional at checkout." },
  { q: "Which vendor is better for peptide research protocols?", a: "For preclinical research protocols requiring transparent lot-level analytical documentation, Nexphoria is designed specifically for that standard. Nexphoria also provides 600+ research articles, protocol calculators, and compound comparison guides to support research planning." },
];

export default function PeptideClinicVsNexphoriaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        <section className="px-6 pt-20 pb-24 md:pt-28 md:pb-32" style={{ backgroundColor: "#010101" }}>
          <div className="max-w-4xl mx-auto">
            <Breadcrumb variant="dark" className="mb-6" items={[{ label: "Home", href: "/" }, { label: "Compare", href: "/compare" }, { label: "vs Peptide Clinic" }]} />
            <p className="eyebrow mb-5" style={{ color: "#B8A44C" }}>Vendor Comparison</p>
            <h1 className="text-4xl md:text-5xl mb-6" style={{ fontWeight: 500, color: "#F9F9F9", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              Nexphoria vs. Peptide Clinic.
            </h1>
            <p className="text-lg max-w-2xl mb-8" style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}>
              Peptide Clinic operates in the clinical and wellness peptide space. Nexphoria is a research-grade supplier with independent lot-level testing and documentation built for the research community.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/coa" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-opacity hover:opacity-90" style={{ backgroundColor: "#B8A44C", color: "#010101" }}>
                Verify Our COAs <ArrowRight size={{16}} />
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
              Peptide Clinic vs. Nexphoria
            </h2>
            <div className="rounded-lg overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
              <div className="grid grid-cols-3" style={{ backgroundColor: "#010101" }}>
                <div className="px-5 py-4"><span className="text-xs uppercase tracking-widest" style={{ color: "#666" }}>Feature</span></div>
                <div className="px-5 py-4" style={{ borderLeft: "1px solid rgba(255,255,255,0.06)" }}><span className="text-xs font-medium" style={{ color: "#f9f9f9" }}>Peptide Clinic</span></div>
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
