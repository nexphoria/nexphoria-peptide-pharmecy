import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Evolve Peptides: Research Peptide Vendor Comparison 2026",
  description: "Evolve Peptides offers a range of research compounds at competitive prices. Nexphoria is built around analytical rigor — independent lot-level testing with full method transparency and standard cold-c",
  openGraph: {
    title: "Nexphoria vs. Evolve Peptides: Research Peptide Vendor Comparison 2026",
    description: "Evolve Peptides offers a range of research compounds at competitive prices. Nexphoria is built around analytical rigor — independent lot-level testing with full method transparency and standard cold-c",
    url: "https://nexphoria.com/compare/evolve-peptides-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/evolve-peptides-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does Nexphoria compare to Evolve Peptides on quality?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nexphoria provides lot-specific COAs from named independent labs \u2014 HPLC chromatogram, ESI-MS confirmation, and LAL endotoxin data for every lot \u2014 posted publicly before purchase. Evolve Peptides provides COA documentation; researchers should verify batch-specificity and independent lab confirmation for their compounds."
      }
    },
    {
      "@type": "Question",
      "name": "Does Evolve Peptides include cold-chain shipping?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evolve Peptides uses standard packaging infrastructure; cold-chain is not consistently guaranteed on all orders. Nexphoria includes insulated packaging and ice packs by default on all temperature-sensitive shipments."
      }
    },
    {
      "@type": "Question",
      "name": "Is Evolve Peptides a legit research peptide vendor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evolve Peptides is an established vendor in the research community. For researchers requiring full independent analytical documentation \u2014 with MS identity confirmation and endotoxin data on every lot \u2014 Nexphoria is purpose-built to that standard."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Nexphoria better than Evolve Peptides?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nexphoria's differentiation is in analytical depth and consistency: independent third-party testing for every lot, full HPLC methodology disclosure, mass spectrometry confirmation standard (not optional), LAL endotoxin testing standard, and cold-chain included by default. These are applied uniformly \u2014 not on a premium tier or select SKUs."
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
  { feature: "Primary Focus", competitor: { label: "Research peptides + SARMs", status: "warn" }, nx: { label: "Peptide-dedicated catalog", status: "ok" } },
  { feature: "COA Verifiability", competitor: { label: "COAs available; verify third-party independence", status: "warn" }, nx: { label: "Named lab, lot-specific, MS included", status: "ok" } },
  { feature: "Purity Standard", competitor: { label: "\u226598% HPLC claimed", status: "warn" }, nx: { label: "\u226599% HPLC + MS confirmed", status: "ok" } },
  { feature: "Mass Spec Confirmation", competitor: { label: "Not standard across all compounds", status: "warn" }, nx: { label: "Standard on all lots", status: "ok" } },
  { feature: "LAL Endotoxin Testing", competitor: { label: "Not consistently documented", status: "warn" }, nx: { label: "Standard on all lots", status: "ok" } },
  { feature: "Cold-Chain Shipping", competitor: { label: "Standard packaging; cold-chain varies", status: "warn" }, nx: { label: "Cold-pack every order, included", status: "ok" } },
  { feature: "Advanced Longevity Peptides", competitor: { label: "Limited advanced catalog", status: "warn" }, nx: { label: "SS-31, MOTS-c, Humanin, Epitalon", status: "ok" } },
  { feature: "Research Library", competitor: { label: "Basic product pages", status: "warn" }, nx: { label: "600+ technical articles, calculators", status: "ok" } },
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
  { title: "Uniform testing standards vs. variable documentation", body: "Research peptide vendors vary on whether their quality testing standards are applied uniformly to every lot or concentrated on premium product lines. When a vendor sells across SARMs, peptides, and other research chemicals, documentation depth can vary significantly by compound category.\n\nNexphoria's testing standards are uniform: independent third-party HPLC, ESI-MS molecular weight confirmation, and LAL endotoxin testing are applied to every lot in the catalog \u2014 not just featured compounds or premium SKUs. Researchers sourcing multiple compounds can rely on a consistent documentation standard across their entire protocol." },
  { title: "Cold-chain as a default, not an afterthought", body: "Evolve Peptides, like most multi-category research chemical vendors, ships with standard e-commerce packaging. Cold-chain for temperature-sensitive peptide compounds is typically an optional service or not available at all.\n\nNexphoria's logistics are built for peptide research specifically: insulated mailers and pharmaceutical-grade ice packs on every temperature-sensitive order as default. For researchers ordering BPC-157, GLP-1 agonists, or reconstituted compounds, the cold-chain default eliminates the most common cause of post-shipment purity variance." },
  { title: "Advanced catalog for complex research protocols", body: "Evolve Peptides covers the most frequently ordered research compounds \u2014 core GHRPs, BPC-157, TB-500, and select GLP-1 analogs. Advanced research protocols in longevity, immune modulation, and neurological research require compounds that are not typically available from multi-category vendors.\n\nNexphoria's peptide-only catalog covers the full advanced spectrum: SS-31 and MOTS-c for mitochondrial research, Humanin and Thymosin Alpha-1 for neuroprotection and immunity, KPV and LL-37 for inflammation research, and the full emerging GLP-1 family through Cagrilintide and Retatrutide. Single-vendor sourcing for complex protocols removes the need to manage multiple supplier documentation standards." },
];

const faqs = [
  { q: "How does Nexphoria compare to Evolve Peptides on quality?", a: "Nexphoria provides lot-specific COAs from named independent labs \u2014 HPLC chromatogram, ESI-MS confirmation, and LAL endotoxin data for every lot \u2014 posted publicly before purchase. Evolve Peptides provides COA documentation; researchers should verify batch-specificity and independent lab confirmation for their compounds." },
  { q: "Does Evolve Peptides include cold-chain shipping?", a: "Evolve Peptides uses standard packaging infrastructure; cold-chain is not consistently guaranteed on all orders. Nexphoria includes insulated packaging and ice packs by default on all temperature-sensitive shipments." },
  { q: "Is Evolve Peptides a legit research peptide vendor?", a: "Evolve Peptides is an established vendor in the research community. For researchers requiring full independent analytical documentation \u2014 with MS identity confirmation and endotoxin data on every lot \u2014 Nexphoria is purpose-built to that standard." },
  { q: "What makes Nexphoria better than Evolve Peptides?", a: "Nexphoria's differentiation is in analytical depth and consistency: independent third-party testing for every lot, full HPLC methodology disclosure, mass spectrometry confirmation standard (not optional), LAL endotoxin testing standard, and cold-chain included by default. These are applied uniformly \u2014 not on a premium tier or select SKUs." },
];

export default function EvolvePeptidesVsNexphoriaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        <section className="px-6 pt-20 pb-24 md:pt-28 md:pb-32" style={{ backgroundColor: "#010101" }}>
          <div className="max-w-4xl mx-auto">
            <Breadcrumb variant="dark" className="mb-6" items={[{ label: "Home", href: "/" }, { label: "Compare", href: "/compare" }, { label: "vs Evolve Peptides" }]} />
            <p className="eyebrow mb-5" style={{ color: "#B8A44C" }}>Vendor Comparison</p>
            <h1 className="text-4xl md:text-5xl mb-6" style={{ fontWeight: 500, color: "#F9F9F9", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              Nexphoria vs. Evolve Peptides.
            </h1>
            <p className="text-lg max-w-2xl mb-8" style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}>
              Evolve Peptides offers a range of research compounds at competitive prices. Nexphoria is built around analytical rigor — independent lot-level testing with full method transparency and standard cold-chain on every order.
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
              Evolve Peptides vs. Nexphoria
            </h2>
            <div className="rounded-lg overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
              <div className="grid grid-cols-3" style={{ backgroundColor: "#010101" }}>
                <div className="px-5 py-4"><span className="text-xs uppercase tracking-widest" style={{ color: "#666" }}>Feature</span></div>
                <div className="px-5 py-4" style={{ borderLeft: "1px solid rgba(255,255,255,0.06)" }}><span className="text-xs font-medium" style={{ color: "#f9f9f9" }}>Evolve Peptides</span></div>
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
