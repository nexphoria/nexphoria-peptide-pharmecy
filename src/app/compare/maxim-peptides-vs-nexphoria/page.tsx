import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Maxim Peptides: Research Peptide Vendor Comparison 2026",
  description: "Maxim Peptides competes on price and promotional discounts. Nexphoria offers independent lot-level analytical documentation, standard cold-chain, and methodologically transparent COAs — the standard f",
  openGraph: {
    title: "Nexphoria vs. Maxim Peptides: Research Peptide Vendor Comparison 2026",
    description: "Maxim Peptides competes on price and promotional discounts. Nexphoria offers independent lot-level analytical documentation, standard cold-chain, and methodologically transparent COAs — the standard f",
    url: "https://nexphoria.com/compare/maxim-peptides-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/maxim-peptides-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does Nexphoria's COA quality compare to Maxim Peptides?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nexphoria provides lot-specific COAs from independent third-party labs including HPLC chromatogram, mass spectrometry MW confirmation, gradient/column methodology, and LAL endotoxin data. Maxim Peptides provides COAs but the level of methodological disclosure and lab independence varies."
      }
    },
    {
      "@type": "Question",
      "name": "Does Maxim Peptides include cold-chain packaging?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Maxim Peptides ships with standard e-commerce packaging. Cold packs may be available but are not a guaranteed default on every order. Nexphoria includes insulated packaging and ice packs standard on all temperature-sensitive shipments."
      }
    },
    {
      "@type": "Question",
      "name": "Is Maxim Peptides a legitimate research peptide vendor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Maxim Peptides is an established US-based vendor with a track record in the research community. Researchers prioritizing reproducible results and methodologically detailed documentation typically choose vendors with fully independent third-party testing \u2014 a standard Nexphoria applies to every lot."
      }
    },
    {
      "@type": "Question",
      "name": "How much cheaper is Maxim Peptides than Nexphoria?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Maxim Peptides regularly runs promotions and is generally priced at the lower end of the market. Nexphoria's 15% subscription discount makes direct comparison closer for repeat orders, while Nexphoria includes cold-chain and full MS documentation that would cost extra or be unavailable at discount vendors."
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
  { feature: "COA Verifiability", competitor: { label: "COAs available; verify lab independence + method details", status: "warn" }, nx: { label: "Named lab, lot-specific, MS included", status: "ok" } },
  { feature: "Purity Standard", competitor: { label: "\u226598% HPLC (methodology detail limited)", status: "warn" }, nx: { label: "\u226599% HPLC + MS confirmed", status: "ok" } },
  { feature: "Mass Spec Confirmation", competitor: { label: "Available for some; not standard across all", status: "warn" }, nx: { label: "Standard on all lots", status: "ok" } },
  { feature: "LAL Endotoxin Testing", competitor: { label: "Not consistently documented", status: "warn" }, nx: { label: "Standard on all lots", status: "ok" } },
  { feature: "Cold-Chain Shipping", competitor: { label: "Standard e-commerce packaging; cold packs vary", status: "warn" }, nx: { label: "Cold-pack every order, included", status: "ok" } },
  { feature: "Advanced Longevity Peptides", competitor: { label: "Limited selection", status: "warn" }, nx: { label: "SS-31, MOTS-c, Humanin, Epitalon", status: "ok" } },
  { feature: "Pricing Tier", competitor: { label: "Entry tier \u2014 frequent discounts", status: "ok" }, nx: { label: "Mid-to-premium; 15% subscription discount", status: "ok" } },
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
  { title: "Methodological transparency in COA documentation", body: "COA quality in the research peptide space ranges from a single purity percentage to full analytical method disclosure. The difference matters when research protocols require characterization of reagent sourcing \u2014 as is often required for published work.\n\nNexphoria's COAs include column chemistry, mobile phase gradient, flow rate, UV detection wavelength, and integration parameters alongside HPLC purity, mass spectrometry confirmation, and LAL endotoxin data \u2014 all from a named independent laboratory. This level of documentation is rare in the research peptide market and is the standard Nexphoria applies to every lot.\n\nMaxim Peptides provides purity COAs, but the methodological detail and depth of independent lab documentation is more limited. For exploratory research where compound identity is the primary concern, this may be acceptable. For protocols that require reagent characterization, the documentation gap is material." },
  { title: "Cold-chain as a default, not a variable", body: "Peptide integrity during transit depends on packaging protocol and transit duration management. Standard e-commerce packaging \u2014 cardboard boxes with no temperature control \u2014 exposes lyophilized and reconstituted compounds to ambient temperature swings that reduce measurable purity over time.\n\nNexphoria ships all temperature-sensitive orders with insulated mailers and pharmaceutical-grade gel ice packs calibrated to transit duration. The cold-chain is not a fee, a tier, or a seasonal option \u2014 it is the default logistics standard applied to every order.\n\nResearchers comparing Nexphoria to discount-tier vendors should factor cold-chain into the effective cost comparison: the price of degraded or compromised material often exceeds the savings on the base peptide price." },
  { title: "Subscription pricing closes the gap on volume", body: "The price gap between discount-tier vendors and quality-focused suppliers narrows significantly for researchers who order regularly. Nexphoria's 15% subscription discount, combined with the elimination of separately priced cold-chain packaging, makes the effective price-per-milligram competitive with Maxim Peptides' promotional pricing \u2014 while maintaining independent third-party testing and full MS documentation on every lot." },
];

const faqs = [
  { q: "How does Nexphoria's COA quality compare to Maxim Peptides?", a: "Nexphoria provides lot-specific COAs from independent third-party labs including HPLC chromatogram, mass spectrometry MW confirmation, gradient/column methodology, and LAL endotoxin data. Maxim Peptides provides COAs but the level of methodological disclosure and lab independence varies." },
  { q: "Does Maxim Peptides include cold-chain packaging?", a: "Maxim Peptides ships with standard e-commerce packaging. Cold packs may be available but are not a guaranteed default on every order. Nexphoria includes insulated packaging and ice packs standard on all temperature-sensitive shipments." },
  { q: "Is Maxim Peptides a legitimate research peptide vendor?", a: "Maxim Peptides is an established US-based vendor with a track record in the research community. Researchers prioritizing reproducible results and methodologically detailed documentation typically choose vendors with fully independent third-party testing \u2014 a standard Nexphoria applies to every lot." },
  { q: "How much cheaper is Maxim Peptides than Nexphoria?", a: "Maxim Peptides regularly runs promotions and is generally priced at the lower end of the market. Nexphoria's 15% subscription discount makes direct comparison closer for repeat orders, while Nexphoria includes cold-chain and full MS documentation that would cost extra or be unavailable at discount vendors." },
];

export default function MaximPeptidesVsNexphoriaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        <section className="px-6 pt-20 pb-24 md:pt-28 md:pb-32" style={{ backgroundColor: "#010101" }}>
          <div className="max-w-4xl mx-auto">
            <Breadcrumb variant="dark" className="mb-6" items={[{ label: "Home", href: "/" }, { label: "Compare", href: "/compare" }, { label: "vs Maxim Peptides" }]} />
            <p className="eyebrow mb-5" style={{ color: "#B8A44C" }}>Vendor Comparison</p>
            <h1 className="text-4xl md:text-5xl mb-6" style={{ fontWeight: 500, color: "#F9F9F9", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              Nexphoria vs. Maxim Peptides.
            </h1>
            <p className="text-lg max-w-2xl mb-8" style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}>
              Maxim Peptides competes on price and promotional discounts. Nexphoria offers independent lot-level analytical documentation, standard cold-chain, and methodologically transparent COAs — the standard for reproducible research.
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
              Maxim Peptides vs. Nexphoria
            </h2>
            <div className="rounded-lg overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
              <div className="grid grid-cols-3" style={{ backgroundColor: "#010101" }}>
                <div className="px-5 py-4"><span className="text-xs uppercase tracking-widest" style={{ color: "#666" }}>Feature</span></div>
                <div className="px-5 py-4" style={{ borderLeft: "1px solid rgba(255,255,255,0.06)" }}><span className="text-xs font-medium" style={{ color: "#f9f9f9" }}>Maxim Peptides</span></div>
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
