import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Cayman Chemical: Research Peptide Vendor Comparison 2026",
  description: "Cayman Chemical is a highly regarded biochemical research supplier — but primarily for small molecules, biochemical standards, and assay kits. For research peptides specifically, Nexphoria offers deep",
  openGraph: {
    title: "Nexphoria vs. Cayman Chemical: Research Peptide Vendor Comparison 2026",
    description: "Cayman Chemical is a highly regarded biochemical research supplier — but primarily for small molecules, biochemical standards, and assay kits. For research peptides specifically, Nexphoria offers deep",
    url: "https://nexphoria.com/compare/cayman-chemical-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/cayman-chemical-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is Cayman Chemical a good source for research peptides?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cayman Chemical is an excellent source for biochemical standards, assay kits, and small-molecule research reagents. For research peptides specifically, their catalog is limited compared to peptide-specialist suppliers. Nexphoria carries 100+ research peptides with independent lot-level HPLC, MS, and endotoxin documentation at competitive research pricing."
      }
    },
    {
      "@type": "Question",
      "name": "How does Nexphoria's pricing compare to Cayman Chemical for peptides?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cayman Chemical is priced for academic and institutional budgets, often at a significant premium for research peptide compounds. Nexphoria offers competitive mid-tier pricing with a 15% subscription discount for regular researchers \u2014 typically substantially lower than Cayman Chemical pricing for the same compounds."
      }
    },
    {
      "@type": "Question",
      "name": "What peptides does Nexphoria carry that Cayman Chemical doesn't?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nexphoria carries the full research peptide spectrum \u2014 BPC-157, TB-500, the complete GLP-1 family, longevity peptides, immune modulators, nootropic peptides, and stack formulations \u2014 at research-accessible pricing. Cayman Chemical's peptide selection is highly selective, typically covering peptide reference standards rather than the full research catalog."
      }
    },
    {
      "@type": "Question",
      "name": "Is Nexphoria's testing as rigorous as Cayman Chemical?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cayman Chemical maintains high standards for their primary catalog of biochemical reagents and standards. Nexphoria's peptide-specific testing \u2014 lot-specific HPLC with full method disclosure, ESI-MS molecular weight confirmation, LAL endotoxin testing from named independent labs \u2014 is purpose-built for research peptide quality assurance and is applied to every lot, not select reference standards."
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
  { feature: "Primary Focus", competitor: { label: "Biochemicals, assay kits, small molecules", status: "warn" }, nx: { label: "Peptide-dedicated catalog", status: "ok" } },
  { feature: "Peptide Catalog Depth", competitor: { label: "Limited peptide selection vs. specialist vendors", status: "warn" }, nx: { label: "100+ peptides, specialist vendor", status: "ok" } },
  { feature: "Pricing Tier", competitor: { label: "Premium academic/institutional pricing", status: "bad" }, nx: { label: "Mid-to-premium; 15% subscription discount", status: "ok" } },
  { feature: "Mass Spec Confirmation", competitor: { label: "Strong for small molecules; peptide-specific varies", status: "warn" }, nx: { label: "Standard on all lots", status: "ok" } },
  { feature: "LAL Endotoxin Testing", competitor: { label: "Not standard for research peptide catalog", status: "warn" }, nx: { label: "Standard on all lots", status: "ok" } },
  { feature: "Cold-Chain Shipping", competitor: { label: "Available; optimized for biochemical kit standards", status: "warn" }, nx: { label: "Cold-pack every order, included", status: "ok" } },
  { feature: "Research Peptide Catalog", competitor: { label: "Select catalog; not a peptide specialist", status: "warn" }, nx: { label: "100+ compounds, peptide-only focus", status: "ok" } },
  { feature: "Subscription Discount", competitor: { label: "No consumer subscription tier", status: "bad" }, nx: { label: "15% recurring subscription discount", status: "ok" } },
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
  { title: "Peptide specialist vs. general biochemical supplier", body: "Cayman Chemical is one of the most respected names in biochemical research reagents \u2014 their assay kits, lipid standards, prostaglandins, and small-molecule reference compounds are widely cited in published literature. For research peptides specifically, they carry a selective catalog primarily suited for reference standard applications.\n\nNexphoria is a peptide-only supplier. The 100+ compound catalog covers the full spectrum of active research categories: GLP-1 agonists, GHRPs, growth hormone secretagogues, longevity peptides, immune modulators, nootropic peptides, and combination stack formulations. For researchers building a peptide research program, the catalog breadth difference is material." },
  { title: "Competitive pricing vs. institutional premium", body: "Cayman Chemical pricing reflects their position as a premium institutional supplier \u2014 their compounds are priced for laboratory procurement budgets with institutional overhead, not for individual researchers or frequent research purchases. Research peptide prices at Cayman Chemical are typically substantially higher than peptide-specialist suppliers.\n\nNexphoria's pricing is competitive mid-tier with a 15% subscription discount for researchers who order regularly. The combination of independent lot-level testing and competitive pricing \u2014 without institutional overhead \u2014 makes Nexphoria the practical choice for researchers who need both quality and cost efficiency." },
  { title: "Peptide-specific analytical methodology", body: "Cayman Chemical's testing infrastructure is optimized for their primary product categories: small molecules, lipids, biochemical standards, and assay components. Peptide-specific HPLC methods, ion-pairing mobile phase systems, gradient profiles calibrated to peptide hydrophobicity, and ESI-MS sequence confirmation are specialized techniques that differ from small-molecule analytical protocols.\n\nNexphoria's entire quality system is built for peptide analysis. Every lot receives HPLC testing with peptide-optimized methodology, mass spectrometry confirmation of molecular identity, and LAL endotoxin testing \u2014 all from independent third-party laboratories with full method parameters disclosed in the COA. For researchers who need peptide-specific analytical documentation, a peptide-specialist supplier is the appropriate choice." },
];

const faqs = [
  { q: "Is Cayman Chemical a good source for research peptides?", a: "Cayman Chemical is an excellent source for biochemical standards, assay kits, and small-molecule research reagents. For research peptides specifically, their catalog is limited compared to peptide-specialist suppliers. Nexphoria carries 100+ research peptides with independent lot-level HPLC, MS, and endotoxin documentation at competitive research pricing." },
  { q: "How does Nexphoria's pricing compare to Cayman Chemical for peptides?", a: "Cayman Chemical is priced for academic and institutional budgets, often at a significant premium for research peptide compounds. Nexphoria offers competitive mid-tier pricing with a 15% subscription discount for regular researchers \u2014 typically substantially lower than Cayman Chemical pricing for the same compounds." },
  { q: "What peptides does Nexphoria carry that Cayman Chemical doesn't?", a: "Nexphoria carries the full research peptide spectrum \u2014 BPC-157, TB-500, the complete GLP-1 family, longevity peptides, immune modulators, nootropic peptides, and stack formulations \u2014 at research-accessible pricing. Cayman Chemical's peptide selection is highly selective, typically covering peptide reference standards rather than the full research catalog." },
  { q: "Is Nexphoria's testing as rigorous as Cayman Chemical?", a: "Cayman Chemical maintains high standards for their primary catalog of biochemical reagents and standards. Nexphoria's peptide-specific testing \u2014 lot-specific HPLC with full method disclosure, ESI-MS molecular weight confirmation, LAL endotoxin testing from named independent labs \u2014 is purpose-built for research peptide quality assurance and is applied to every lot, not select reference standards." },
];

export default function CaymanChemicalVsNexphoriaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        <section className="px-6 pt-20 pb-24 md:pt-28 md:pb-32" style={{ backgroundColor: "#010101" }}>
          <div className="max-w-4xl mx-auto">
            <Breadcrumb variant="dark" className="mb-6" items={[{ label: "Home", href: "/" }, { label: "Compare", href: "/compare" }, { label: "vs Cayman Chemical" }]} />
            <p className="eyebrow mb-5" style={{ color: "#B8A44C" }}>Vendor Comparison</p>
            <h1 className="text-4xl md:text-5xl mb-6" style={{ fontWeight: 500, color: "#F9F9F9", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
              Nexphoria vs. Cayman Chemical.
            </h1>
            <p className="text-lg max-w-2xl mb-8" style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}>
              Cayman Chemical is a highly regarded biochemical research supplier — but primarily for small molecules, biochemical standards, and assay kits. For research peptides specifically, Nexphoria offers deeper catalog coverage, competitive pricing, and documentation built for peptide-specific analytical standards.
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
              Cayman Chemical vs. Nexphoria
            </h2>
            <div className="rounded-lg overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
              <div className="grid grid-cols-3" style={{ backgroundColor: "#010101" }}>
                <div className="px-5 py-4"><span className="text-xs uppercase tracking-widest" style={{ color: "#666" }}>Feature</span></div>
                <div className="px-5 py-4" style={{ borderLeft: "1px solid rgba(255,255,255,0.06)" }}><span className="text-xs font-medium" style={{ color: "#f9f9f9" }}>Cayman Chemical</span></div>
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
