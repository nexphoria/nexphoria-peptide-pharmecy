import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Direct Peptides: Research Peptide Vendor Comparison 2026",
  description: "Direct Peptides is a UK-based research peptide supplier. Nexphoria is US-based with independent lot-level analytical testing and domestic cold-chain logistics designed specifically for US researchers.",
  openGraph: {
    title: "Nexphoria vs. Direct Peptides: Research Peptide Vendor Comparison 2026",
    description: "Direct Peptides is a UK-based research peptide supplier. Nexphoria is US-based with independent lot-level analytical testing and domestic cold-chain logistics designed specifically for US researchers.",
    url: "https://nexphoria.com/compare/direct-peptides-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/direct-peptides-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Direct Peptides a good option for US researchers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Direct Peptides is a UK-based supplier with an international customer base. For US researchers, the considerations include international transit duration (7\u201314+ days), temperature integrity during international cold-chain, and import regulatory considerations. Nexphoria ships domestically within the US, typically within 24 hours, with default cold-chain on every temperature-sensitive order."
      }
    },
    {
      "@type": "Question",
      "name": "How does Nexphoria's documentation compare to Direct Peptides?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nexphoria provides lot-specific COAs from named US-based independent laboratories \u2014 HPLC, ESI-MS, and LAL endotoxin data for every lot, posted publicly before purchase. Direct Peptides provides COA documentation; researchers should verify whether testing is conducted by US-accredited independent labs relevant to US regulatory contexts."
      }
    },
    {
      "@type": "Question",
      "name": "What's the transit time for Direct Peptides vs. Nexphoria?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Direct Peptides international shipping typically takes 7\u201314+ business days to the US. Nexphoria ships domestically and typically fulfills orders within 24 hours with 2\u20135 day domestic transit. For time-sensitive research protocols, domestic sourcing is a meaningful operational advantage."
      }
    },
    {
      "@type": "Question",
      "name": "Are there import issues with ordering from Direct Peptides?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Research chemicals imported into the US may be subject to US Customs review, import restrictions, and documentation requirements depending on compound class. Sourcing from a US-based supplier like Nexphoria eliminates import compliance variables entirely."
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
  { feature: "Primary Focus", competitor: { label: "Research peptides \u2014 UK-based", status: "warn" }, nx: { label: "Peptide-dedicated catalog", status: "ok" } },
  { feature: "COA Verifiability", competitor: { label: "COAs available; verify independent US-lab verification", status: "warn" }, nx: { label: "Named lab, lot-specific, MS included", status: "ok" } },
  { feature: "Purity Standard", competitor: { label: "\u226598% HPLC (UK supplier standards)", status: "warn" }, nx: { label: "\u226599% HPLC + MS confirmed", status: "ok" } },
  { feature: "Mass Spec Confirmation", competitor: { label: "Available for some compounds", status: "warn" }, nx: { label: "Standard on all lots", status: "ok" } },
  { feature: "LAL Endotoxin Testing", competitor: { label: "Not consistently standard", status: "warn" }, nx: { label: "Standard on all lots", status: "ok" } },
  { feature: "Cold-Chain Shipping", competitor: { label: "International shipping adds transit risk", status: "warn" }, nx: { label: "Cold-pack every order, included", status: "ok" } },
  { feature: "US Domestic Shipping Speed", competitor: { label: "International transit; 7\u201314+ days typical", status: "bad" }, nx: { label: "Ships within 24h, 2\u20135 day domestic", status: "ok" } },
  { feature: "Regulatory Clarity for US Researchers", competitor: { label: "Import considerations for US lab use", status: "warn" }, nx: { label: "US-based, no import complexity", status: "ok" } },
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
  { title: "US-based sourcing: no import delays or regulatory variables", body: "Direct Peptides is a UK supplier serving an international market. For US researchers, international sourcing introduces several variables that domestic procurement eliminates: customs clearance delays, import documentation requirements, extended international transit durations (7\u201314+ days), and the temperature integrity risks of multi-leg international cold-chain logistics.\n\nNexphoria is US-based. Orders ship within 24 hours of placement, arrive within 2\u20135 days domestically, and are subject to a single-leg cold-chain with domestic logistics infrastructure. For research protocols with time-sensitive compound requirements, domestic sourcing is a material operational advantage." },
  { title: "Cold-chain integrity: international vs. domestic transit", body: "Cold-chain integrity across international shipping is fundamentally more difficult to maintain than across domestic transit. Multiple handling points, varying customs inspection protocols, and longer total transit durations all increase temperature excursion risk for heat-sensitive peptide compounds.\n\nNexphoria's cold-chain infrastructure is designed for domestic US transit windows: insulated mailers, pharmaceutical-grade ice packs calibrated to domestic transit durations, and dry ice for extended-distance shipments. The single-leg domestic cold-chain is more reliably maintained than multi-leg international shipping \u2014 and it is included as default on every temperature-sensitive order." },
  { title: "US-accredited independent laboratory testing", body: "COA documentation from US-based independent analytical laboratories provides traceability within the US regulatory context. For research programs with institutional oversight requirements, grant reporting obligations, or publication documentation standards, the accreditation context of the testing laboratory matters.\n\nNexphoria's testing is conducted by US-based independent analytical laboratories. The COA documentation \u2014 with named lab, method parameters, lot number, and analytical results \u2014 supports the characterization requirements of US-based institutional research programs." },
];

const faqs = [
  { q: "Is Direct Peptides a good option for US researchers?", a: "Direct Peptides is a UK-based supplier with an international customer base. For US researchers, the considerations include international transit duration (7\u201314+ days), temperature integrity during international cold-chain, and import regulatory considerations. Nexphoria ships domestically within the US, typically within 24 hours, with default cold-chain on every temperature-sensitive order." },
  { q: "How does Nexphoria's documentation compare to Direct Peptides?", a: "Nexphoria provides lot-specific COAs from named US-based independent laboratories \u2014 HPLC, ESI-MS, and LAL endotoxin data for every lot, posted publicly before purchase. Direct Peptides provides COA documentation; researchers should verify whether testing is conducted by US-accredited independent labs relevant to US regulatory contexts." },
  { q: "What's the transit time for Direct Peptides vs. Nexphoria?", a: "Direct Peptides international shipping typically takes 7\u201314+ business days to the US. Nexphoria ships domestically and typically fulfills orders within 24 hours with 2\u20135 day domestic transit. For time-sensitive research protocols, domestic sourcing is a meaningful operational advantage." },
  { q: "Are there import issues with ordering from Direct Peptides?", a: "Research chemicals imported into the US may be subject to US Customs review, import restrictions, and documentation requirements depending on compound class. Sourcing from a US-based supplier like Nexphoria eliminates import compliance variables entirely." },
];

export default function DirectPeptidesVsNexphoriaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        <section className="px-6 pt-20 pb-24 md:pt-28 md:pb-32" style={{ backgroundColor: "#010101" }}>
          <div className="max-w-4xl mx-auto">
            <Breadcrumb variant="dark" className="mb-6" items={[{ label: "Home", href: "/" }, { label: "Compare", href: "/compare" }, { label: "vs Direct Peptides" }]} />
            <p className="eyebrow mb-5" style={{ color: "#B8A44C" }}>Vendor Comparison</p>
            <h1 className="text-4xl md:text-5xl mb-6" style={{ fontWeight: 500, color: "#F9F9F9", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              Nexphoria vs. Direct Peptides.
            </h1>
            <p className="text-lg max-w-2xl mb-8" style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}>
              Direct Peptides is a UK-based research peptide supplier. Nexphoria is US-based with independent lot-level analytical testing and domestic cold-chain logistics designed specifically for US researchers.
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
              Direct Peptides vs. Nexphoria
            </h2>
            <div className="rounded-lg overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
              <div className="grid grid-cols-3" style={{ backgroundColor: "#010101" }}>
                <div className="px-5 py-4"><span className="text-xs uppercase tracking-widest" style={{ color: "#666" }}>Feature</span></div>
                <div className="px-5 py-4" style={{ borderLeft: "1px solid rgba(255,255,255,0.06)" }}><span className="text-xs font-medium" style={{ color: "#f9f9f9" }}>Direct Peptides</span></div>
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
