import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Peptide Warehouse: Research Peptide Vendor Comparison 2026",
  description: "Peptide Warehouse competes on pricing and catalog volume. Nexphoria is built on independent lot-level analytical testing, standard cold-chain logistics, and documentation transparent enough to support",
  openGraph: {
    title: "Nexphoria vs. Peptide Warehouse: Research Peptide Vendor Comparison 2026",
    description: "Peptide Warehouse competes on pricing and catalog volume. Nexphoria is built on independent lot-level analytical testing, standard cold-chain logistics, and documentation transparent enough to support",
    url: "https://nexphoria.com/compare/peptide-warehouse-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/peptide-warehouse-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does Nexphoria compare to Peptide Warehouse on purity documentation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nexphoria provides lot-specific COAs from named independent third-party labs \u2014 including HPLC purity, ESI-MS identity confirmation, and LAL endotoxin data \u2014 posted publicly on every product page before purchase. Peptide Warehouse provides COA documentation, but depth and lot-specificity should be verified for specific compounds."
      }
    },
    {
      "@type": "Question",
      "name": "Does Peptide Warehouse include cold-chain packaging?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Peptide Warehouse's cold-chain practices are not consistently standard across all orders. Nexphoria includes insulated packaging and pharmaceutical-grade ice packs by default on all temperature-sensitive shipments."
      }
    },
    {
      "@type": "Question",
      "name": "What's the main difference between Nexphoria and Peptide Warehouse?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nexphoria differentiates on analytical rigor: independent third-party testing with full method transparency, lot-specific COAs, and default cold-chain. Peptide Warehouse competes on catalog breadth and price accessibility."
      }
    },
    {
      "@type": "Question",
      "name": "Is Peptide Warehouse a legitimate research peptide supplier?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Peptide Warehouse is an established market vendor. Researchers requiring the deepest documentation standard \u2014 with MS confirmation and endotoxin testing verifiable before purchase \u2014 should confirm Peptide Warehouse meets that bar for their specific compounds, or source from a vendor like Nexphoria where this is applied uniformly."
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
  { feature: "Primary Focus", competitor: { label: "Research peptides \u2014 broad catalog", status: "ok" }, nx: { label: "Peptide-dedicated catalog", status: "ok" } },
  { feature: "COA Verifiability", competitor: { label: "COAs vary in depth and lot-specificity", status: "warn" }, nx: { label: "Named lab, lot-specific, MS included", status: "ok" } },
  { feature: "Purity Standard", competitor: { label: "\u226598% HPLC (depth varies by SKU)", status: "warn" }, nx: { label: "\u226599% HPLC + MS confirmed", status: "ok" } },
  { feature: "Mass Spec Confirmation", competitor: { label: "Not standard across all lots", status: "warn" }, nx: { label: "Standard on all lots", status: "ok" } },
  { feature: "LAL Endotoxin Testing", competitor: { label: "Not consistently documented", status: "warn" }, nx: { label: "Standard on all lots", status: "ok" } },
  { feature: "Cold-Chain Shipping", competitor: { label: "Varies; not consistently default", status: "warn" }, nx: { label: "Cold-pack every order, included", status: "ok" } },
  { feature: "Advanced Longevity Peptides", competitor: { label: "Core catalog; limited advanced compounds", status: "warn" }, nx: { label: "SS-31, MOTS-c, Humanin, Epitalon", status: "ok" } },
  { feature: "Research Library", competitor: { label: "Limited research content", status: "warn" }, nx: { label: "600+ technical articles, calculators", status: "ok" } },
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
  { title: "Publicly posted COAs before purchase \u2014 a transparency standard", body: "Nexphoria makes lot-specific COA documentation publicly accessible before an order is placed. Researchers can verify the testing lab, purity value, mass spectrum, and endotoxin data for the exact lot they are buying \u2014 not after receipt, and not through a customer service request.\n\nThis matters because COA accessibility practices vary widely across the research peptide market. Some vendors post generic COAs that are not traceable to specific lots. Others require customer requests or provide documentation only after purchase. Nexphoria's approach treats pre-purchase transparency as a baseline expectation, not a premium service.\n\nPeptide Warehouse provides COA documentation; the lot-specificity and depth of documentation \u2014 particularly MS confirmation \u2014 should be independently verified for the compounds in your protocol." },
  { title: "Cold-chain consistency across all orders", body: "Research peptide vendors differ on whether cold-chain packaging is default, optional, or variable based on order size. For lyophilized peptides in moderate transit conditions, the risk from ambient temperature is real but manageable. For reconstituted compounds, extended GLP-1 agonist chains, or summer shipments across multiple distribution points, the risk is material.\n\nNexphoria's cold-chain logistics are applied as a consistent default: insulated mailers, pharmaceutical-grade ice packs, and dry ice for extended transit. The cost is absorbed into the base product \u2014 there is no threshold, no seasonal surcharge, and no opt-in required." },
  { title: "Advanced catalog depth for multi-compound research", body: "Researchers running longevity, immunology, or multi-target metabolic protocols often need compounds beyond the core BPC-157/TB-500/Ipamorelin/CJC-1295 tier. Nexphoria carries the full advanced catalog: SS-31, MOTS-c, Humanin, Thymosin Alpha-1, KPV, LL-37, Zinc-Thymulin, Thymulin, Dihexa, PE-22-28, and the complete GLP-1 family through Retatrutide and Cagrilintide.\n\nSingle-vendor sourcing for complex protocols eliminates the variable of comparing documentation standards across multiple suppliers \u2014 a meaningful advantage when research reproducibility requires consistent reagent quality throughout the study." },
];

const faqs = [
  { q: "How does Nexphoria compare to Peptide Warehouse on purity documentation?", a: "Nexphoria provides lot-specific COAs from named independent third-party labs \u2014 including HPLC purity, ESI-MS identity confirmation, and LAL endotoxin data \u2014 posted publicly on every product page before purchase. Peptide Warehouse provides COA documentation, but depth and lot-specificity should be verified for specific compounds." },
  { q: "Does Peptide Warehouse include cold-chain packaging?", a: "Peptide Warehouse's cold-chain practices are not consistently standard across all orders. Nexphoria includes insulated packaging and pharmaceutical-grade ice packs by default on all temperature-sensitive shipments." },
  { q: "What's the main difference between Nexphoria and Peptide Warehouse?", a: "Nexphoria differentiates on analytical rigor: independent third-party testing with full method transparency, lot-specific COAs, and default cold-chain. Peptide Warehouse competes on catalog breadth and price accessibility." },
  { q: "Is Peptide Warehouse a legitimate research peptide supplier?", a: "Peptide Warehouse is an established market vendor. Researchers requiring the deepest documentation standard \u2014 with MS confirmation and endotoxin testing verifiable before purchase \u2014 should confirm Peptide Warehouse meets that bar for their specific compounds, or source from a vendor like Nexphoria where this is applied uniformly." },
];

export default function PeptideWarehouseVsNexphoriaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        <section className="px-6 pt-20 pb-24 md:pt-28 md:pb-32" style={{ backgroundColor: "#010101" }}>
          <div className="max-w-4xl mx-auto">
            <Breadcrumb variant="dark" className="mb-6" items={[{ label: "Home", href: "/" }, { label: "Compare", href: "/compare" }, { label: "vs Peptide Warehouse" }]} />
            <p className="eyebrow mb-5" style={{ color: "#B8A44C" }}>Vendor Comparison</p>
            <h1 className="text-4xl md:text-5xl mb-6" style={{ fontWeight: 500, color: "#F9F9F9", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              Nexphoria vs. Peptide Warehouse.
            </h1>
            <p className="text-lg max-w-2xl mb-8" style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}>
              Peptide Warehouse competes on pricing and catalog volume. Nexphoria is built on independent lot-level analytical testing, standard cold-chain logistics, and documentation transparent enough to support published research.
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
              Peptide Warehouse vs. Nexphoria
            </h2>
            <div className="rounded-lg overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
              <div className="grid grid-cols-3" style={{ backgroundColor: "#010101" }}>
                <div className="px-5 py-4"><span className="text-xs uppercase tracking-widest" style={{ color: "#666" }}>Feature</span></div>
                <div className="px-5 py-4" style={{ borderLeft: "1px solid rgba(255,255,255,0.06)" }}><span className="text-xs font-medium" style={{ color: "#f9f9f9" }}>Peptide Warehouse</span></div>
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
