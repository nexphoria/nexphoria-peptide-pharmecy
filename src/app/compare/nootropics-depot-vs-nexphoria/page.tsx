import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Nootropics Depot: Research Peptide Vendor Comparison 2026",
  description: "Nootropics Depot is a well-known supplement and nootropic supplier that has expanded into research peptides. Nexphoria is peptide-only — with analytical infrastructure built specifically for peptide s",
  openGraph: {
    title: "Nexphoria vs. Nootropics Depot: Research Peptide Vendor Comparison 2026",
    description: "Nootropics Depot is a well-known supplement and nootropic supplier that has expanded into research peptides. Nexphoria is peptide-only — with analytical infrastructure built specifically for peptide s",
    url: "https://nexphoria.com/compare/nootropics-depot-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/nootropics-depot-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Nootropics Depot a good source for research peptides?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nootropics Depot is a reputable nootropics supplier with strong testing for their core supplement catalog. For peptide research, their analytical infrastructure is primarily optimized for small molecules \u2014 peptide-specific HPLC methods, MS confirmation, and LAL endotoxin testing are not consistently applied across their peptide catalog the way a peptide-specialist vendor like Nexphoria would provide."
      }
    },
    {
      "@type": "Question",
      "name": "How does Nexphoria compare to Nootropics Depot on cold-chain?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nootropics Depot ships research peptides with standard packaging infrastructure built for supplements and small molecules. Nexphoria's cold-chain logistics are purpose-built for peptides: insulated packaging, pharmaceutical-grade ice packs, and dry ice for extended-transit orders \u2014 included standard on every shipment."
      }
    },
    {
      "@type": "Question",
      "name": "Does Nootropics Depot carry the same peptides as Nexphoria?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nootropics Depot carries a growing selection of research peptides but does not cover the full spectrum that a peptide-specialist supplier like Nexphoria does. Advanced longevity compounds (SS-31, MOTS-c, Humanin), the full GLP-1 family (Tirzepatide, Retatrutide, Cagrilintide), and combination stack formulations are more comprehensively available at Nexphoria."
      }
    },
    {
      "@type": "Question",
      "name": "Why would I choose Nexphoria over Nootropics Depot for peptides?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If your research requires peptide-specific HPLC method validation, mass spectrometry identity confirmation, LAL endotoxin testing, and standard cold-chain \u2014 and you want all of it independently verified and lot-traceable \u2014 Nexphoria is built specifically for that standard. Nootropics Depot's quality system is optimized for their primary catalog, not the specific analytical requirements of peptide research."
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
  { feature: "Primary Focus", competitor: { label: "Nootropics + supplements + some peptides", status: "warn" }, nx: { label: "Peptide-dedicated catalog", status: "ok" } },
  { feature: "COA Verifiability", competitor: { label: "Strong for nootropics; peptide-specific method depth varies", status: "warn" }, nx: { label: "Named lab, lot-specific, MS included", status: "ok" } },
  { feature: "Purity Standard", competitor: { label: "\u226598% (method optimized for small molecules)", status: "warn" }, nx: { label: "\u226599% HPLC + MS confirmed", status: "ok" } },
  { feature: "Mass Spec Confirmation", competitor: { label: "Available for some peptides; not standard", status: "warn" }, nx: { label: "Standard on all lots", status: "ok" } },
  { feature: "LAL Endotoxin Testing", competitor: { label: "Not standard for peptide catalog", status: "warn" }, nx: { label: "Standard on all lots", status: "ok" } },
  { feature: "Cold-Chain Shipping", competitor: { label: "Standard packaging; limited cold-chain infrastructure", status: "warn" }, nx: { label: "Cold-pack every order, included", status: "ok" } },
  { feature: "Peptide Catalog Depth", competitor: { label: "Growing; limited vs. peptide-specialist vendors", status: "warn" }, nx: { label: "100+ peptides, specialist vendor", status: "ok" } },
  { feature: "Research Library", competitor: { label: "Nootropics-focused; limited peptide protocol content", status: "warn" }, nx: { label: "600+ technical articles, calculators", status: "ok" } },
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
  { title: "Peptide-specific analytical methods vs. small-molecule infrastructure", body: "Nootropics Depot has invested significantly in third-party testing for their core catalog. Their testing infrastructure is optimized for botanical extracts, amino acids, and small-molecule nootropics \u2014 a chemically distinct class from synthetic research peptides.\n\nPeptide purity determination requires HPLC methods calibrated specifically to the peptide's amino acid sequence and hydrophobicity: ion-pairing agents, reversed-phase C18 columns with appropriate peptide loading, and gradient profiles validated against the target compound. When a vendor's primary analytical infrastructure is built for small molecules, the rigor applied to peptide-specific HPLC method development requires independent verification.\n\nNexphoria's COAs include full peptide-optimized HPLC methodology: column chemistry, mobile phase composition (typically TFA-modified), gradient profile, flow rate, and detection wavelength \u2014 all from independent third-party labs \u2014 alongside ESI-MS molecular weight confirmation for every lot." },
  { title: "Catalog built for peptide research from the ground up", body: "Nootropics Depot's peptide catalog is a supplement to their primary nootropics business. Coverage of advanced research compounds \u2014 the full GLP-1 agonist family, longevity peptides, immune modulators, and combination protocols \u2014 is limited relative to a peptide-specialist vendor.\n\nNexphoria's catalog is peptide-only, covering 100+ compounds including SS-31, MOTS-c, Humanin, Thymosin Alpha-1, LL-37, KPV, the complete Retatrutide/Cagrilintide/Tirzepatide GLP-1 family, and stack formulations for multi-compound protocols. Researchers running complex longevity or immunology protocols can source the full panel from a single vendor with consistent documentation standards across all compounds." },
  { title: "600+ peptide research articles vs. nootropics content", body: "Nexphoria's research library contains 600+ articles focused specifically on peptide mechanism, protocol design, dosing frameworks, reconstitution guides, and compound comparisons. The content is written for researchers and directly supports protocol planning.\n\nNootropics Depot's content is primarily focused on their core nootropic catalog. For peptide researchers, the knowledge infrastructure available at Nexphoria \u2014 calculators, protocol templates, compound deep-dives \u2014 is a meaningful operational difference." },
];

const faqs = [
  { q: "Is Nootropics Depot a good source for research peptides?", a: "Nootropics Depot is a reputable nootropics supplier with strong testing for their core supplement catalog. For peptide research, their analytical infrastructure is primarily optimized for small molecules \u2014 peptide-specific HPLC methods, MS confirmation, and LAL endotoxin testing are not consistently applied across their peptide catalog the way a peptide-specialist vendor like Nexphoria would provide." },
  { q: "How does Nexphoria compare to Nootropics Depot on cold-chain?", a: "Nootropics Depot ships research peptides with standard packaging infrastructure built for supplements and small molecules. Nexphoria's cold-chain logistics are purpose-built for peptides: insulated packaging, pharmaceutical-grade ice packs, and dry ice for extended-transit orders \u2014 included standard on every shipment." },
  { q: "Does Nootropics Depot carry the same peptides as Nexphoria?", a: "Nootropics Depot carries a growing selection of research peptides but does not cover the full spectrum that a peptide-specialist supplier like Nexphoria does. Advanced longevity compounds (SS-31, MOTS-c, Humanin), the full GLP-1 family (Tirzepatide, Retatrutide, Cagrilintide), and combination stack formulations are more comprehensively available at Nexphoria." },
  { q: "Why would I choose Nexphoria over Nootropics Depot for peptides?", a: "If your research requires peptide-specific HPLC method validation, mass spectrometry identity confirmation, LAL endotoxin testing, and standard cold-chain \u2014 and you want all of it independently verified and lot-traceable \u2014 Nexphoria is built specifically for that standard. Nootropics Depot's quality system is optimized for their primary catalog, not the specific analytical requirements of peptide research." },
];

export default function NootropicsDepotVsNexphoriaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        <section className="px-6 pt-20 pb-24 md:pt-28 md:pb-32" style={{ backgroundColor: "#010101" }}>
          <div className="max-w-4xl mx-auto">
            <Breadcrumb variant="dark" className="mb-6" items={[{ label: "Home", href: "/" }, { label: "Compare", href: "/compare" }, { label: "vs Nootropics Depot" }]} />
            <p className="eyebrow mb-5" style={{ color: "#B8A44C" }}>Vendor Comparison</p>
            <h1 className="text-4xl md:text-5xl mb-6" style={{ fontWeight: 500, color: "#F9F9F9", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              Nexphoria vs. Nootropics Depot.
            </h1>
            <p className="text-lg max-w-2xl mb-8" style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}>
              Nootropics Depot is a well-known supplement and nootropic supplier that has expanded into research peptides. Nexphoria is peptide-only — with analytical infrastructure built specifically for peptide synthesis verification, not repurposed from small-molecule supplement testing.
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
              Nootropics Depot vs. Nexphoria
            </h2>
            <div className="rounded-lg overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
              <div className="grid grid-cols-3" style={{ backgroundColor: "#010101" }}>
                <div className="px-5 py-4"><span className="text-xs uppercase tracking-widest" style={{ color: "#666" }}>Feature</span></div>
                <div className="px-5 py-4" style={{ borderLeft: "1px solid rgba(255,255,255,0.06)" }}><span className="text-xs font-medium" style={{ color: "#f9f9f9" }}>Nootropics Depot</span></div>
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
