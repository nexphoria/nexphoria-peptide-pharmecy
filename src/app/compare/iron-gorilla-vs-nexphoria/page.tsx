import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Iron Gorilla: Research Peptide Vendor Comparison 2026",
  description: "Iron Gorilla is a research peptide and performance compound vendor. Nexphoria differentiates on full independent third-party analytical testing for every lot, standard cold-chain, and documentation tr",
  openGraph: {
    title: "Nexphoria vs. Iron Gorilla: Research Peptide Vendor Comparison 2026",
    description: "Iron Gorilla is a research peptide and performance compound vendor. Nexphoria differentiates on full independent third-party analytical testing for every lot, standard cold-chain, and documentation tr",
    url: "https://nexphoria.com/compare/iron-gorilla-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/iron-gorilla-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does Nexphoria compare to Iron Gorilla on testing standards?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nexphoria applies independent third-party HPLC, ESI-MS, and LAL endotoxin testing to every lot \u2014 with full method details and named lab on each COA, posted before purchase. Iron Gorilla provides COA documentation; the consistency and depth of independent lab verification should be confirmed for specific compounds."
      }
    },
    {
      "@type": "Question",
      "name": "Does Iron Gorilla ship with cold-chain packaging?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Iron Gorilla's cold-chain packaging is not consistently standard across all orders and seasons. Nexphoria includes insulated packaging and ice packs by default on all temperature-sensitive shipments \u2014 no thresholds or add-ons."
      }
    },
    {
      "@type": "Question",
      "name": "What research peptides does Nexphoria carry that Iron Gorilla doesn't?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nexphoria covers advanced longevity compounds (SS-31, MOTS-c, Humanin), the full GLP-1 agonist family (Tirzepatide, Retatrutide, Cagrilintide), immune modulators (Thymosin Alpha-1, KPV, LL-37, Thymulin), and combination stack formulations not typically available from performance-focused vendors."
      }
    },
    {
      "@type": "Question",
      "name": "Is Iron Gorilla a reliable research peptide vendor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Iron Gorilla has an established presence in the research community. Researchers requiring the deepest independent documentation standard \u2014 including MS confirmation and endotoxin testing uniformly applied across all lots \u2014 should verify that Iron Gorilla meets those specifications for their required compounds."
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
  { feature: "Primary Focus", competitor: { label: "Research peptides + performance compounds", status: "warn" }, nx: { label: "Peptide-dedicated catalog", status: "ok" } },
  { feature: "COA Verifiability", competitor: { label: "COAs available; verify lab independence", status: "warn" }, nx: { label: "Named lab, lot-specific, MS included", status: "ok" } },
  { feature: "Purity Standard", competitor: { label: "\u226598% HPLC (depth varies)", status: "warn" }, nx: { label: "\u226599% HPLC + MS confirmed", status: "ok" } },
  { feature: "Mass Spec Confirmation", competitor: { label: "Not standard across all compounds", status: "warn" }, nx: { label: "Standard on all lots", status: "ok" } },
  { feature: "LAL Endotoxin Testing", competitor: { label: "Not consistently documented", status: "warn" }, nx: { label: "Standard on all lots", status: "ok" } },
  { feature: "Cold-Chain Shipping", competitor: { label: "Varies by order and season", status: "warn" }, nx: { label: "Cold-pack every order, included", status: "ok" } },
  { feature: "Advanced Longevity Peptides", competitor: { label: "Limited longevity/advanced catalog", status: "warn" }, nx: { label: "SS-31, MOTS-c, Humanin, Epitalon", status: "ok" } },
  { feature: "Research Library", competitor: { label: "Limited dedicated research content", status: "warn" }, nx: { label: "600+ technical articles, calculators", status: "ok" } },
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
  { title: "Performance vendor vs. research-grade documentation", body: "Iron Gorilla's catalog and market positioning cater to both performance research and general peptide users. Research-grade documentation standards \u2014 lot-specific COAs, independent third-party HPLC with method disclosure, ESI-MS molecular weight confirmation, LAL endotoxin testing \u2014 are not consistently documented as universal standards across their catalog.\n\nNexphoria applies these standards to every lot in the catalog. The COA is generated by a named independent laboratory, includes full HPLC method parameters, mass spectrometry data, and endotoxin results \u2014 and is posted publicly on the product page before any order is placed. Researchers who need consistent documentation infrastructure across their full protocol benefit from a vendor where these standards are not compound-specific or tier-dependent." },
  { title: "Longevity and advanced compound coverage", body: "Performance-focused vendors typically stock compounds with the broadest community recognition: BPC-157, TB-500, Semaglutide, CJC-1295, Ipamorelin, GHK-Cu. The advanced longevity and research frontier catalog \u2014 SS-31 for mitochondrial dysfunction research, MOTS-c for metabolic studies, Humanin for neuroprotection, Thymosin Alpha-1 for immune modulation, and the complete emerging GLP-1 family \u2014 is more comprehensively covered by peptide-specialist suppliers.\n\nNexphoria's catalog spans 100+ compounds across longevity, immunology, metabolic, neurological, and cardiovascular research categories \u2014 all with the same independent testing standard applied uniformly." },
  { title: "Documentation as research infrastructure", body: "The COA is not just a quality document \u2014 it is the reagent characterization record that research protocols, IRB applications, and published methods sections reference when describing compound sourcing. A COA with a named independent laboratory, validated HPLC method, and mass spectrometry confirmation provides a level of characterization traceability that a generic or third-party-unverified certificate cannot.\n\nNexphoria's documentation is designed to meet the characterization requirements of research protocols. The information needed to describe reagent sourcing in a methods section \u2014 lab name, method parameters, lot-specific purity value, molecular weight confirmation \u2014 is present and traceable in every COA Nexphoria issues." },
];

const faqs = [
  { q: "How does Nexphoria compare to Iron Gorilla on testing standards?", a: "Nexphoria applies independent third-party HPLC, ESI-MS, and LAL endotoxin testing to every lot \u2014 with full method details and named lab on each COA, posted before purchase. Iron Gorilla provides COA documentation; the consistency and depth of independent lab verification should be confirmed for specific compounds." },
  { q: "Does Iron Gorilla ship with cold-chain packaging?", a: "Iron Gorilla's cold-chain packaging is not consistently standard across all orders and seasons. Nexphoria includes insulated packaging and ice packs by default on all temperature-sensitive shipments \u2014 no thresholds or add-ons." },
  { q: "What research peptides does Nexphoria carry that Iron Gorilla doesn't?", a: "Nexphoria covers advanced longevity compounds (SS-31, MOTS-c, Humanin), the full GLP-1 agonist family (Tirzepatide, Retatrutide, Cagrilintide), immune modulators (Thymosin Alpha-1, KPV, LL-37, Thymulin), and combination stack formulations not typically available from performance-focused vendors." },
  { q: "Is Iron Gorilla a reliable research peptide vendor?", a: "Iron Gorilla has an established presence in the research community. Researchers requiring the deepest independent documentation standard \u2014 including MS confirmation and endotoxin testing uniformly applied across all lots \u2014 should verify that Iron Gorilla meets those specifications for their required compounds." },
];

export default function IronGorillaVsNexphoriaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        <section className="px-6 pt-20 pb-24 md:pt-28 md:pb-32" style={{ backgroundColor: "#010101" }}>
          <div className="max-w-4xl mx-auto">
            <Breadcrumb variant="dark" className="mb-6" items={[{ label: "Home", href: "/" }, { label: "Compare", href: "/compare" }, { label: "vs Iron Gorilla" }]} />
            <p className="eyebrow mb-5" style={{ color: "#B8A44C" }}>Vendor Comparison</p>
            <h1 className="text-4xl md:text-5xl mb-6" style={{ fontWeight: 500, color: "#F9F9F9", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              Nexphoria vs. Iron Gorilla.
            </h1>
            <p className="text-lg max-w-2xl mb-8" style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}>
              Iron Gorilla is a research peptide and performance compound vendor. Nexphoria differentiates on full independent third-party analytical testing for every lot, standard cold-chain, and documentation transparent enough for published research.
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
              Iron Gorilla vs. Nexphoria
            </h2>
            <div className="rounded-lg overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
              <div className="grid grid-cols-3" style={{ backgroundColor: "#010101" }}>
                <div className="px-5 py-4"><span className="text-xs uppercase tracking-widest" style={{ color: "#666" }}>Feature</span></div>
                <div className="px-5 py-4" style={{ borderLeft: "1px solid rgba(255,255,255,0.06)" }}><span className="text-xs font-medium" style={{ color: "#f9f9f9" }}>Iron Gorilla</span></div>
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
