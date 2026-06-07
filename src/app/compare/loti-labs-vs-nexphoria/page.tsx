import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Loti Labs: Research Peptide Vendor Comparison 2026",
  description:
    "Comparing Nexphoria and Loti Labs for research peptide procurement — HPLC purity standards, cold-chain shipping, COA transparency, catalog depth, and pricing.",
  openGraph: {
    title: "Nexphoria vs. Loti Labs: Research Peptide Vendor Comparison 2026",
    description:
      "Nexphoria vs Loti Labs: purity verification, cold-chain logistics, and catalog breadth compared side by side for research procurement.",
    url: "https://nexphoria.com/compare/loti-labs-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/loti-labs-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does Nexphoria compare to Loti Labs on purity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nexphoria requires ≥99% HPLC purity with mass spectrometry confirmation and LAL endotoxin testing on every lot. Loti Labs provides COA documentation; researchers should confirm whether MS data is standard and whether testing is conducted by independent third-party labs.",
      },
    },
    {
      "@type": "Question",
      name: "Does Loti Labs ship with cold-chain packaging?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Loti Labs offers cold-pack shipping as an optional add-on. Nexphoria includes insulated packaging and ice packs as standard on every order, regardless of order size or season.",
      },
    },
    {
      "@type": "Question",
      name: "Which vendor has a larger peptide catalog — Nexphoria or Loti Labs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nexphoria carries 100+ peptide compounds including advanced longevity peptides (SS-31, MOTS-c, Humanin), immune modulators (Thymosin Alpha-1, KPV, LL-37), and the full GLP-1 family (Semaglutide, Tirzepatide, Retatrutide). Loti Labs covers core research peptides well but has a more limited advanced catalog.",
      },
    },
    {
      "@type": "Question",
      name: "Is Nexphoria more expensive than Loti Labs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nexphoria is positioned mid-to-premium, reflecting independent third-party testing, cold-chain infrastructure, and full MS documentation on every lot. Loti Labs is generally entry-to-mid tier on pricing. Nexphoria's 15% subscription discount closes much of the per-order price gap for regular researchers.",
      },
    },
  ],
};

type RowStatus = "ok" | "warn" | "bad";

const comparisonRows: Array<{
  feature: string;
  competitor: { label: string; status: RowStatus };
  nx: { label: string; status: RowStatus };
}> = [
  { feature: "Operating Status", competitor: { label: "Active, US-based", status: "ok" }, nx: { label: "Active, US-based", status: "ok" } },
  { feature: "Primary Focus", competitor: { label: "Research peptides catalog", status: "ok" }, nx: { label: "Peptide-dedicated catalog", status: "ok" } },
  { feature: "COA Verifiability", competitor: { label: "COAs available; verify lab independence", status: "warn" }, nx: { label: "Named lab, lot-specific, MS included", status: "ok" } },
  { feature: "Purity Standard", competitor: { label: "≥98% HPLC (verify per batch)", status: "warn" }, nx: { label: "≥99% HPLC + MS confirmed", status: "ok" } },
  { feature: "Mass Spec Confirmation", competitor: { label: "Available for select compounds", status: "warn" }, nx: { label: "Standard on all lots", status: "ok" } },
  { feature: "LAL Endotoxin Testing", competitor: { label: "Not consistently standard", status: "warn" }, nx: { label: "Standard on all lots", status: "ok" } },
  { feature: "Cold-Chain Shipping", competitor: { label: "Optional add-on", status: "warn" }, nx: { label: "Cold-pack every order, included", status: "ok" } },
  { feature: "Advanced Longevity Peptides", competitor: { label: "Limited selection", status: "warn" }, nx: { label: "SS-31, MOTS-c, Humanin, Epitalon", status: "ok" } },
  { feature: "Full GLP-1 Family", competitor: { label: "Core GLP-1 compounds", status: "warn" }, nx: { label: "Sema, Tirze, Retatrutide, Cagrilintide", status: "ok" } },
  { feature: "Research Content Library", competitor: { label: "Product docs + FAQ", status: "warn" }, nx: { label: "600+ technical articles, calculators", status: "ok" } },
  { feature: "Subscription Discount", competitor: { label: "Varies", status: "warn" }, nx: { label: "15% recurring subscription discount", status: "ok" } },
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
  {
    title: "Documentation depth: lot-specific vs. batch-generic",
    body: "Loti Labs provides COA documentation for their catalog compounds. The distinction that matters most for rigorous research is whether COAs are lot-specific — generated for the exact material in your shipment — or batch-generic certificates reused across multiple fulfillments.\n\nNexphoria's quality system generates a unique COA for each production lot, traceable to the specific analytical testing event. Researchers receive documentation reflecting the actual material in their order, with named independent laboratory, HPLC chromatogram, mass spectrometry molecular weight confirmation, and LAL endotoxin data in a single document.",
  },
  {
    title: "Cold-chain as infrastructure, not an upsell",
    body: "Peptide degradation during transit is a documented risk that compounds across all vendors. The question is whether cold-chain packaging is the default or an optional add-on researchers must remember to select.\n\nNexphoria includes insulated packaging and pharmaceutical-grade ice packs as standard on every temperature-sensitive shipment. Cold-chain is not a fee item or an opt-in — it's part of the base logistics infrastructure. For researchers ordering in summer months or across longer transit distances, this default matters more than the price difference.",
  },
  {
    title: "Catalog depth for advanced research protocols",
    body: "Loti Labs covers core peptide research well: BPC-157, TB-500, GHK-Cu, Ipamorelin, CJC-1295, and several GLP-1 analogs. For researchers running standard protocols, this catalog is functional.\n\nNexphoria's catalog extends into research categories that Loti Labs does not fully cover: SS-31 and MOTS-c for mitochondrial research, Humanin for neuroprotection studies, Thymosin Alpha-1 and LL-37 for immune modulation, the complete Retatrutide/Cagrilintide/Tirzepatide GLP-1 family, and stack formulations supporting combination protocols. Researchers running multi-compound or longevity-focused studies benefit from single-vendor sourcing across the full protocol.",
  },
];

const faqs = [
  { q: "How does Nexphoria compare to Loti Labs on purity?", a: "Nexphoria requires ≥99% HPLC purity with mass spectrometry confirmation and LAL endotoxin testing on every lot. Loti Labs provides COA documentation; researchers should confirm whether MS data is standard and whether testing is conducted by independent third-party labs." },
  { q: "Does Loti Labs ship with cold-chain packaging?", a: "Loti Labs offers cold-pack shipping as an optional add-on. Nexphoria includes insulated packaging and ice packs as standard on every order, regardless of order size or season." },
  { q: "Which vendor has a larger peptide catalog?", a: "Nexphoria carries 100+ peptide compounds including advanced longevity peptides (SS-31, MOTS-c, Humanin), immune modulators (Thymosin Alpha-1, KPV, LL-37), and the full GLP-1 family (Semaglutide, Tirzepatide, Retatrutide). Loti Labs covers core research peptides well but has a more limited advanced catalog." },
  { q: "Is Nexphoria more expensive than Loti Labs?", a: "Nexphoria is positioned mid-to-premium, reflecting independent third-party testing, cold-chain infrastructure, and full MS documentation on every lot. Loti Labs is generally entry-to-mid tier. Nexphoria's 15% subscription discount closes much of the per-order gap for regular researchers." },
];

export default function LotiLabsVsNexphoriaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        <section className="px-6 pt-20 pb-24 md:pt-28 md:pb-32" style={{ backgroundColor: "#010101" }}>
          <div className="max-w-4xl mx-auto">
            <Breadcrumb variant="dark" className="mb-6" items={[{ label: "Home", href: "/" }, { label: "Compare", href: "/compare" }, { label: "vs Loti Labs" }]} />
            <p className="eyebrow mb-5" style={{ color: "#B8A44C" }}>Vendor Comparison</p>
            <h1 className="text-4xl md:text-5xl mb-6" style={{ fontWeight: 500, color: "#F9F9F9", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              Nexphoria vs. Loti Labs.
            </h1>
            <p className="text-lg max-w-2xl mb-8" style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}>
              Loti Labs offers competitive pricing on core peptide research compounds. Nexphoria adds independent lot-level testing, standard cold-chain on every order, and a broader advanced catalog for serious research programs.
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
              Loti Labs vs. Nexphoria
            </h2>
            <div className="rounded-lg overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
              <div className="grid grid-cols-3" style={{ backgroundColor: "#010101" }}>
                <div className="px-5 py-4"><span className="text-xs uppercase tracking-widest" style={{ color: "#666" }}>Feature</span></div>
                <div className="px-5 py-4" style={{ borderLeft: "1px solid rgba(255,255,255,0.06)" }}><span className="text-xs font-medium" style={{ color: "#f9f9f9" }}>Loti Labs</span></div>
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
