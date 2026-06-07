import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. American Peptide: Research Peptide Vendor Comparison 2026",
  description: "American Peptide is a US-based research peptide supplier. Nexphoria offers a broader advanced catalog, standard cold-chain on every order, and independent lot-level analytical testing for every compou",
  openGraph: {
    title: "Nexphoria vs. American Peptide: Research Peptide Vendor Comparison 2026",
    description: "American Peptide is a US-based research peptide supplier. Nexphoria offers a broader advanced catalog, standard cold-chain on every order, and independent lot-level analytical testing for every compou",
    url: "https://nexphoria.com/compare/american-peptide-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/american-peptide-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does American Peptide compare to Nexphoria on purity testing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nexphoria provides lot-specific COAs from named independent third-party labs \u2014 HPLC, mass spec, and LAL endotoxin data for every lot, publicly posted before purchase. American Peptide provides COA documentation; researchers should verify lot-specificity and independent lab confirmation for their compounds."
      }
    },
    {
      "@type": "Question",
      "name": "Does American Peptide ship with cold-chain packaging?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "American Peptide's cold-chain shipping practices vary. Nexphoria includes insulated packaging and pharmaceutical-grade ice packs by default on all temperature-sensitive shipments \u2014 no add-ons or thresholds."
      }
    },
    {
      "@type": "Question",
      "name": "What advanced peptides does Nexphoria carry that American Peptide doesn't?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nexphoria covers SS-31, MOTS-c, Humanin, full GLP-1 family (Tirzepatide, Retatrutide, Cagrilintide), and advanced immune modulators (Thymulin, Zinc-Thymulin, KPV, LL-37) that are not consistently available from American Peptide."
      }
    },
    {
      "@type": "Question",
      "name": "Is Nexphoria more expensive than American Peptide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nexphoria's pricing reflects independent third-party testing on every lot, standard cold-chain, and full MS documentation. For researchers who order regularly, the 15% subscription discount makes the effective price competitive while maintaining the highest documentation standard in the market."
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
  { feature: "Primary Focus", competitor: { label: "Research peptides", status: "ok" }, nx: { label: "Peptide-dedicated catalog", status: "ok" } },
  { feature: "COA Verifiability", competitor: { label: "COAs available; verify lab independence", status: "warn" }, nx: { label: "Named lab, lot-specific, MS included", status: "ok" } },
  { feature: "Purity Standard", competitor: { label: "\u226598% HPLC (verify per batch)", status: "warn" }, nx: { label: "\u226599% HPLC + MS confirmed", status: "ok" } },
  { feature: "Mass Spec Confirmation", competitor: { label: "Verify consistency across catalog", status: "warn" }, nx: { label: "Standard on all lots", status: "ok" } },
  { feature: "LAL Endotoxin Testing", competitor: { label: "Not consistently documented as standard", status: "warn" }, nx: { label: "Standard on all lots", status: "ok" } },
  { feature: "Cold-Chain Shipping", competitor: { label: "Varies; not consistently guaranteed", status: "warn" }, nx: { label: "Cold-pack every order, included", status: "ok" } },
  { feature: "Advanced Longevity Peptides", competitor: { label: "Core catalog; advanced compounds limited", status: "warn" }, nx: { label: "SS-31, MOTS-c, Humanin, Epitalon", status: "ok" } },
  { feature: "Research Library", competitor: { label: "Basic product pages", status: "warn" }, nx: { label: "600+ technical articles, calculators", status: "ok" } },
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
  { title: "Third-party testing consistency as a baseline, not a premium", body: "American Peptide is a US-based research vendor serving the domestic research community. COA documentation is available for their catalog compounds. The key question for researchers evaluating any vendor is whether independent third-party testing \u2014 with full method disclosure, mass spectrometry identity confirmation, and LAL endotoxin data \u2014 is applied uniformly to every lot or selectively to featured products.\n\nNexphoria applies this standard universally: every lot receives independent HPLC, ESI-MS, and endotoxin testing from a named third-party laboratory, with the resulting COA posted publicly before the order ships. There are no tiers, no premium documentation add-ons, and no compounds that receive less rigorous documentation than others." },
  { title: "Advanced compound catalog for research beyond the core", body: "American Peptide covers the most commonly researched peptides \u2014 BPC-157, TB-500, GHK-Cu, growth hormone secretagogues, and select GLP-1 compounds. For researchers expanding into longevity biology, advanced immunology, or frontier neurological research, the compound availability from core-catalog vendors is a practical constraint.\n\nNexphoria's 100+ compound catalog includes the full advanced research spectrum: SS-31 and MOTS-c for mitochondrial research, Humanin and Thymosin Alpha-1 for neuroprotection and immune studies, the complete emerging GLP-1 family, and combination stack formulations. Single-vendor sourcing for complex multi-compound protocols means consistent documentation standards across the entire reagent panel." },
  { title: "Cold-chain as the default, not the exception", body: "Cold-chain packaging for research peptides is sometimes treated as an optional service or a threshold-triggered benefit. For lyophilized compounds in standard transit conditions, ambient temperature exposure is manageable short-term. For summer shipments, reconstituted compounds, or cross-country transit with multiple handling points, temperature control directly affects what you receive versus what was tested.\n\nNexphoria makes cold-chain the default: insulated mailers, pharmaceutical-grade ice packs, and dry ice for extended transit \u2014 applied to every temperature-sensitive order regardless of size or season. The cold-chain cost is built into the base product, not a surcharge." },
];

const faqs = [
  { q: "How does American Peptide compare to Nexphoria on purity testing?", a: "Nexphoria provides lot-specific COAs from named independent third-party labs \u2014 HPLC, mass spec, and LAL endotoxin data for every lot, publicly posted before purchase. American Peptide provides COA documentation; researchers should verify lot-specificity and independent lab confirmation for their compounds." },
  { q: "Does American Peptide ship with cold-chain packaging?", a: "American Peptide's cold-chain shipping practices vary. Nexphoria includes insulated packaging and pharmaceutical-grade ice packs by default on all temperature-sensitive shipments \u2014 no add-ons or thresholds." },
  { q: "What advanced peptides does Nexphoria carry that American Peptide doesn't?", a: "Nexphoria covers SS-31, MOTS-c, Humanin, full GLP-1 family (Tirzepatide, Retatrutide, Cagrilintide), and advanced immune modulators (Thymulin, Zinc-Thymulin, KPV, LL-37) that are not consistently available from American Peptide." },
  { q: "Is Nexphoria more expensive than American Peptide?", a: "Nexphoria's pricing reflects independent third-party testing on every lot, standard cold-chain, and full MS documentation. For researchers who order regularly, the 15% subscription discount makes the effective price competitive while maintaining the highest documentation standard in the market." },
];

export default function AmericanPeptideVsNexphoriaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        <section className="px-6 pt-20 pb-24 md:pt-28 md:pb-32" style={{ backgroundColor: "#010101" }}>
          <div className="max-w-4xl mx-auto">
            <Breadcrumb variant="dark" className="mb-6" items={[{ label: "Home", href: "/" }, { label: "Compare", href: "/compare" }, { label: "vs American Peptide" }]} />
            <p className="eyebrow mb-5" style={{ color: "#B8A44C" }}>Vendor Comparison</p>
            <h1 className="text-4xl md:text-5xl mb-6" style={{ fontWeight: 500, color: "#F9F9F9", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              Nexphoria vs. American Peptide.
            </h1>
            <p className="text-lg max-w-2xl mb-8" style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}>
              American Peptide is a US-based research peptide supplier. Nexphoria offers a broader advanced catalog, standard cold-chain on every order, and independent lot-level analytical testing for every compound.
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
              American Peptide vs. Nexphoria
            </h2>
            <div className="rounded-lg overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
              <div className="grid grid-cols-3" style={{ backgroundColor: "#010101" }}>
                <div className="px-5 py-4"><span className="text-xs uppercase tracking-widest" style={{ color: "#666" }}>Feature</span></div>
                <div className="px-5 py-4" style={{ borderLeft: "1px solid rgba(255,255,255,0.06)" }}><span className="text-xs font-medium" style={{ color: "#f9f9f9" }}>American Peptide</span></div>
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
