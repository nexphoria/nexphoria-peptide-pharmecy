import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Purity Solutions: Research Peptide Vendor Comparison 2026",
  description: "Purity Solutions is a US research peptide and SARM vendor competing on catalog breadth and price. Nexphoria focuses exclusively on peptides with independently verified lot-specific testing on every co",
  openGraph: {
    title: "Nexphoria vs. Purity Solutions: Research Peptide Vendor Comparison 2026",
    description: "Purity Solutions is a US research peptide and SARM vendor competing on catalog breadth and price. Nexphoria focuses exclusively on peptides with independently verified lot-specific testing on every co",
    url: "https://nexphoria.com/compare/purity-solutions-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/purity-solutions-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does Nexphoria compare to Purity Solutions on COA quality?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nexphoria provides lot-specific COAs from independent third-party labs \u2014 HPLC purity, mass spec confirmation, and LAL endotoxin testing for every lot, downloadable before purchase. Purity Solutions' COA accessibility varies by product; MS confirmation is not consistently standard across their catalog."
      }
    },
    {
      "@type": "Question",
      "name": "Does Purity Solutions ship with cold-chain packaging?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Purity Solutions does not consistently guarantee cold-chain packaging on all orders. Nexphoria includes insulated packaging and ice packs as default on all temperature-sensitive shipments."
      }
    },
    {
      "@type": "Question",
      "name": "Is Purity Solutions a reliable peptide vendor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Purity Solutions is an established vendor with a catalog that has attracted a community following. For researchers requiring the highest documentation standard \u2014 batch-specific independent lab verification with full MS and endotoxin data \u2014 Nexphoria is built to that specification for every lot."
      }
    },
    {
      "@type": "Question",
      "name": "What makes Nexphoria different from Purity Solutions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nexphoria's differentiation is analytical: independent lot-level testing with full methodology disclosure, standard cold-chain on every order, and a peptide-only catalog focused on research quality consistency. Purity Solutions competes more broadly across research chemicals and SARMs with an emphasis on pricing."
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
  { feature: "COA Verifiability", competitor: { label: "COAs available; consistency varies by compound", status: "warn" }, nx: { label: "Named lab, lot-specific, MS included", status: "ok" } },
  { feature: "Purity Standard", competitor: { label: "\u226598% HPLC (premium line)", status: "warn" }, nx: { label: "\u226599% HPLC + MS confirmed", status: "ok" } },
  { feature: "Mass Spec Confirmation", competitor: { label: "Not consistently standard across all SKUs", status: "warn" }, nx: { label: "Standard on all lots", status: "ok" } },
  { feature: "LAL Endotoxin Testing", competitor: { label: "Not documented as standard", status: "warn" }, nx: { label: "Standard on all lots", status: "ok" } },
  { feature: "Cold-Chain Shipping", competitor: { label: "Standard packaging; cold-chain not guaranteed", status: "warn" }, nx: { label: "Cold-pack every order, included", status: "ok" } },
  { feature: "Advanced Longevity Peptides", competitor: { label: "Limited selection", status: "warn" }, nx: { label: "SS-31, MOTS-c, Humanin, Epitalon", status: "ok" } },
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
  { title: "Peptide-only focus vs. broad research chemical catalog", body: "Purity Solutions operates across research peptides and SARMs, serving a market that prioritizes catalog breadth and price competitiveness. When a vendor serves multiple compound classes, their quality infrastructure \u2014 testing, cold-chain, documentation \u2014 is distributed across chemical categories with different analytical requirements.\n\nNexphoria's catalog is exclusively research peptides. Every quality system investment \u2014 HPLC method development, mass spectrometry protocols, LAL endotoxin testing, cold-chain logistics \u2014 is focused on a single compound class. This concentration allows deeper quality consistency than a diversified research chemical supplier can typically maintain." },
  { title: "Lot-specific COAs: the traceability standard that matters", body: "Purity Solutions provides COA documentation, but the accessibility and depth of lot-specific documentation varies by product. Some SKUs display COAs consistently; others require direct requests. Mass spectrometry confirmation \u2014 required to verify molecular identity, not just relative purity \u2014 is not documented as a universal standard.\n\nNexphoria's COA system is uniform: every lot receives independent third-party HPLC analysis, ESI-MS molecular weight confirmation, and LAL endotoxin testing before shipment. The resulting COA \u2014 with named laboratory, full method parameters, and traceable lot number \u2014 is posted publicly on the product page before the order is placed." },
  { title: "Default cold-chain for peptide integrity in transit", body: "Lyophilized peptides are more stable during transit than reconstituted compounds but are not immune to heat-induced degradation during extended shipping windows. The question is not whether heat exposure causes degradation, but whether the vendor's default packaging eliminates the variable.\n\nNexphoria includes insulated packaging and pharmaceutical-grade gel packs on every temperature-sensitive order as a baseline logistics standard. The cold-chain is not conditional on order size, season, or optional selection \u2014 it is default infrastructure, applied consistently." },
];

const faqs = [
  { q: "How does Nexphoria compare to Purity Solutions on COA quality?", a: "Nexphoria provides lot-specific COAs from independent third-party labs \u2014 HPLC purity, mass spec confirmation, and LAL endotoxin testing for every lot, downloadable before purchase. Purity Solutions' COA accessibility varies by product; MS confirmation is not consistently standard across their catalog." },
  { q: "Does Purity Solutions ship with cold-chain packaging?", a: "Purity Solutions does not consistently guarantee cold-chain packaging on all orders. Nexphoria includes insulated packaging and ice packs as default on all temperature-sensitive shipments." },
  { q: "Is Purity Solutions a reliable peptide vendor?", a: "Purity Solutions is an established vendor with a catalog that has attracted a community following. For researchers requiring the highest documentation standard \u2014 batch-specific independent lab verification with full MS and endotoxin data \u2014 Nexphoria is built to that specification for every lot." },
  { q: "What makes Nexphoria different from Purity Solutions?", a: "Nexphoria's differentiation is analytical: independent lot-level testing with full methodology disclosure, standard cold-chain on every order, and a peptide-only catalog focused on research quality consistency. Purity Solutions competes more broadly across research chemicals and SARMs with an emphasis on pricing." },
];

export default function PuritySolutionsVsNexphoriaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        <section className="px-6 pt-20 pb-24 md:pt-28 md:pb-32" style={{ backgroundColor: "#010101" }}>
          <div className="max-w-4xl mx-auto">
            <Breadcrumb variant="dark" className="mb-6" items={[{ label: "Home", href: "/" }, { label: "Compare", href: "/compare" }, { label: "vs Purity Solutions" }]} />
            <p className="eyebrow mb-5" style={{ color: "#B8A44C" }}>Vendor Comparison</p>
            <h1 className="text-4xl md:text-5xl mb-6" style={{ fontWeight: 500, color: "#F9F9F9", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              Nexphoria vs. Purity Solutions.
            </h1>
            <p className="text-lg max-w-2xl mb-8" style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}>
              Purity Solutions is a US research peptide and SARM vendor competing on catalog breadth and price. Nexphoria focuses exclusively on peptides with independently verified lot-specific testing on every compound.
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
              Purity Solutions vs. Nexphoria
            </h2>
            <div className="rounded-lg overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
              <div className="grid grid-cols-3" style={{ backgroundColor: "#010101" }}>
                <div className="px-5 py-4"><span className="text-xs uppercase tracking-widest" style={{ color: "#666" }}>Feature</span></div>
                <div className="px-5 py-4" style={{ borderLeft: "1px solid rgba(255,255,255,0.06)" }}><span className="text-xs font-medium" style={{ color: "#f9f9f9" }}>Purity Solutions</span></div>
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
