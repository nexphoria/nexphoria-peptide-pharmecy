import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { CheckCircle2, XCircle, AlertCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Nexphoria vs. Peptide Zone: Purity, COAs & Cold-Chain Compared 2026",
  description:
    "How does Peptide Zone compare to Nexphoria on HPLC purity standards, COA transparency, mass spectrometry testing, and cold-chain shipping? Full 2026 comparison for researchers.",
  openGraph: {
    title: "Nexphoria vs. Peptide Zone: Purity, COAs & Cold-Chain Compared 2026",
    description:
      "Peptide Zone vs Nexphoria — a detailed comparison for researchers on purity documentation, COA verifiability, cold-chain defaults, and catalog specialization.",
    url: "https://nexphoria.com/compare/peptide-zone-vs-nexphoria",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://nexphoria.com/compare/peptide-zone-vs-nexphoria" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is Peptide Zone a legitimate vendor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Peptide Zone is a US-based research chemical vendor carrying peptides alongside SARMs and other research compounds. Researchers should confirm that their peptide-specific HPLC methodology, mass spectrometry documentation, and cold-chain shipping practices meet the standards required for their research context.",
      },
    },
    {
      "@type": "Question",
      name: "How does Peptide Zone's purity standard compare to Nexphoria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Peptide Zone is a multi-category vendor carrying both peptides and SARMs. Nexphoria is exclusively peptides, maintaining a ≥99% HPLC minimum across all catalog compounds with independent third-party testing. The peptide-specific analytical infrastructure at a dedicated peptide supplier typically provides a higher standard of documentation depth than multi-category vendors.",
      },
    },
    {
      "@type": "Question",
      name: "Does Peptide Zone include cold-chain shipping?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Peptide Zone's cold-chain packaging defaults should be confirmed before ordering. Nexphoria includes cold-pack insulated packaging on every order as a standard — not an upgrade or threshold-based inclusion.",
      },
    },
    {
      "@type": "Question",
      name: "Why does catalog specialization matter for peptide research?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A vendor whose primary business is peptides can invest its quality infrastructure — third-party testing, cold-chain logistics, lot traceability — at a depth that multi-category vendors spread across broader inventories. Nexphoria's exclusively peptide catalog enables mass spectrometry identity confirmation on all lots, named independent labs on every COA, and cold-chain packaging on every order — standards difficult to maintain across dozens of compound categories.",
      },
    },
  ],
};

type RowStatus = "ok" | "warn" | "bad";

const comparisonRows: Array<{
  feature: string;
  pz: { label: string; status: RowStatus };
  nx: { label: string; status: RowStatus };
}> = [
  {
    feature: "Catalog Focus",
    pz: { label: "Multi-category: peptides + SARMs + research chems", status: "warn" },
    nx: { label: "Exclusively peptides with published research literature", status: "ok" },
  },
  {
    feature: "COA Verifiability",
    pz: { label: "COAs provided; peptide-specific methodology varies", status: "warn" },
    nx: { label: "Named lab, lot-specific, independently verifiable", status: "ok" },
  },
  {
    feature: "Mass Spec Testing",
    pz: { label: "Not consistently documented on all peptide lots", status: "warn" },
    nx: { label: "MS on every compound, standard on all lots", status: "ok" },
  },
  {
    feature: "Cold-Chain Shipping",
    pz: { label: "Confirm cold-pack defaults before ordering", status: "warn" },
    nx: { label: "Cold-pack every order, standard included", status: "ok" },
  },
  {
    feature: "Independent 3rd-Party Testing",
    pz: { label: "Testing provided; independence varies by compound class", status: "warn" },
    nx: { label: "Named independent lab on all peptide COAs", status: "ok" },
  },
  {
    feature: "Purity Standard",
    pz: { label: "Stated purity; method specifics vary by compound class", status: "warn" },
    nx: { label: "≥99% HPLC + MS verified; method fully disclosed", status: "ok" },
  },
  {
    feature: "Delivery Format",
    pz: { label: "Lyophilized and liquid formats", status: "warn" },
    nx: { label: "Lyophilized only (research standard)", status: "ok" },
  },
  {
    feature: "Research Content",
    pz: { label: "Product descriptions; limited protocol depth", status: "bad" },
    nx: { label: "350+ technical research articles", status: "ok" },
  },
  {
    feature: "Subscription Discount",
    pz: { label: "None confirmed", status: "bad" },
    nx: { label: "15% recurring subscription discount", status: "ok" },
  },
  {
    feature: "Loyalty Program",
    pz: { label: "None", status: "bad" },
    nx: { label: "Points on every order", status: "ok" },
  },
];

const STATUS_COLORS: Record<RowStatus, string> = {
  ok: "#22c55e",
  warn: "#f59e0b",
  bad: "#ef4444",
};

const STATUS_ICONS: Record<RowStatus, typeof CheckCircle2> = {
  ok: CheckCircle2,
  warn: AlertCircle,
  bad: XCircle,
};

function StatusCell({ label, status }: { label: string; status: RowStatus }) {
  const Icon = STATUS_ICONS[status];
  const color = STATUS_COLORS[status];
  return (
    <div className="flex items-start gap-2">
      <Icon size={16} style={{ color, flexShrink: 0, marginTop: 2 }} />
      <span className="text-sm" style={{ color: "#2a2a2a", fontWeight: 300, lineHeight: 1.5 }}>
        {label}
      </span>
    </div>
  );
}

const differentiators = [
  {
    title: "Peptide-specific analytics vs. multi-category testing infrastructure",
    body: "HPLC methodology appropriate for peptide characterization differs fundamentally from that used for SARMs or small molecules. Column chemistry, mobile phase, gradient, and detection wavelength must all be optimized for the specific compound class. A vendor whose analytical infrastructure serves multiple compound categories may not invest the same depth of peptide-specific method development as a peptide-specialist supplier.\n\nNexphoria's exclusive focus on peptides means its entire testing infrastructure — column selection, mobile phase optimization, gradient development, mass spectrometry parameters — is built specifically for peptide characterization. The result is analytical documentation that reflects peptide-specific rigor rather than generalized research chemical testing.",
  },
  {
    title: "Identity confirmation: what ESI-MS tells you that HPLC cannot",
    body: "HPLC quantifies the relative abundance of UV-absorbing species in the sample but cannot confirm that the dominant species is the target peptide. Co-eluting impurities of similar hydrophobicity are not resolved by chromatography alone.\n\nNexphoria includes ESI-MS or MALDI-TOF identity confirmation on all lots as a standard COA component — not an optional add-on. For researchers where compound identity confirmation is protocol-critical, this documentation is not negotiable.",
  },
  {
    title: "Cold-chain defaults matter for compound integrity",
    body: "Lyophilized peptides tolerate room temperature exposure for limited periods, but the cumulative thermal exposure during transit — warehouse staging, delivery vehicle, final-mile delivery — creates degradation risk that accumulates before the vial is even opened.\n\nNexphoria includes cold packs in insulated mailers on every order as a non-negotiable default. Researchers shouldn't have to request cold-chain packaging or pay a premium to protect the compounds they've ordered.",
  },
  {
    title: "Research support built for protocol design",
    body: "Multi-category vendors typically focus their web presence on catalog navigation and product descriptions. Researchers who need to understand compound mechanisms, design dosing protocols, interpret published studies, or evaluate endpoint selection don't find that support in a product listing.\n\nNexphoria's 350+ article library covers BPC-157 mechanism pathways, GLP-1 receptor pharmacology, reconstitution protocols, cold-chain science, comparative compound analysis, and study design considerations. It's built for researchers who want to understand what they're working with — not just source it.",
  },
];

const faqs = [
  {
    q: "Is Peptide Zone a legitimate vendor?",
    a: "Peptide Zone is a US-based research chemical vendor carrying peptides alongside SARMs and other research compounds. Researchers should confirm that their peptide-specific HPLC methodology, mass spectrometry documentation, and cold-chain shipping practices meet the standards required for their research context.",
  },
  {
    q: "How does Peptide Zone's purity standard compare to Nexphoria?",
    a: "Peptide Zone is a multi-category vendor carrying both peptides and SARMs. Nexphoria is exclusively peptides, maintaining a ≥99% HPLC minimum across all catalog compounds with independent third-party testing. The peptide-specific analytical infrastructure at a dedicated peptide supplier typically provides a higher standard of documentation depth than multi-category vendors.",
  },
  {
    q: "Does Peptide Zone include cold-chain shipping?",
    a: "Peptide Zone's cold-chain packaging defaults should be confirmed before ordering. Nexphoria includes cold-pack insulated packaging on every order as a standard — not an upgrade or threshold-based inclusion.",
  },
  {
    q: "Why does catalog specialization matter for peptide research?",
    a: "A vendor whose primary business is peptides can invest its quality infrastructure — third-party testing, cold-chain logistics, lot traceability — at a depth that multi-category vendors spread across broader inventories. Nexphoria's exclusively peptide catalog enables mass spectrometry identity confirmation on all lots, named independent labs on every COA, and cold-chain packaging on every order — standards difficult to maintain across dozens of compound categories.",
  },
];

export default function PeptideZoneVsNexphoriaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div style={{ backgroundColor: "#fff", minHeight: "100vh" }}>
        {/* Hero */}
        <section
          className="px-6 pt-20 pb-24 md:pt-28 md:pb-32"
          style={{ backgroundColor: "#010101" }}
        >
          <div className="max-w-4xl mx-auto">
            <Breadcrumb
              variant="dark"
              className="mb-6"
              items={[
                { label: "Home", href: "/" },
                { label: "Compare", href: "/compare" },
                { label: "vs Peptide Zone" },
              ]}
            />
            <p className="eyebrow mb-5" style={{ color: "#B8A44C" }}>
              Vendor Comparison
            </p>
            <h1
              className="text-4xl md:text-5xl mb-6"
              style={{
                fontWeight: 500,
                color: "#F9F9F9",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Nexphoria vs. Peptide Zone.
            </h1>
            <p
              className="text-lg max-w-2xl mb-8"
              style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}
            >
              Peptide Zone carries a multi-category catalog spanning peptides, SARMs, and
              research chemicals. When you need peptide-specialist documentation depth — named
              independent labs, MS on every lot, cold-chain by default — the gap becomes clear.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/coa"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#B8A44C", color: "#010101" }}
              >
                Verify Our COAs <ArrowRight size={16} />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#A0A0A0",
                }}
              >
                Browse Catalog
              </Link>
            </div>
          </div>
        </section>

        {/* Comparison table */}
        <section className="px-6 py-20 md:py-28">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#B8A44C" }}>
              Side-by-Side
            </p>
            <h2
              className="text-2xl md:text-3xl mb-10"
              style={{ fontWeight: 500, color: "#010101", letterSpacing: "-0.01em" }}
            >
              Peptide Zone vs. Nexphoria
            </h2>

            <div
              className="rounded-lg overflow-hidden"
              style={{ border: "1px solid rgba(0,0,0,0.08)" }}
            >
              <div className="grid grid-cols-3" style={{ backgroundColor: "#010101" }}>
                <div className="px-5 py-4">
                  <span className="text-xs uppercase tracking-widest" style={{ color: "#666" }}>
                    Feature
                  </span>
                </div>
                <div
                  className="px-5 py-4"
                  style={{ borderLeft: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <span className="text-xs font-medium" style={{ color: "#f9f9f9" }}>
                    Peptide Zone
                  </span>
                </div>
                <div
                  className="px-5 py-4"
                  style={{
                    borderLeft: "1px solid rgba(255,255,255,0.06)",
                    backgroundColor: "rgba(184,164,76,0.08)",
                  }}
                >
                  <span className="text-xs font-medium" style={{ color: "#B8A44C" }}>
                    Nexphoria
                  </span>
                </div>
              </div>

              {comparisonRows.map((row, i) => (
                <div
                  key={row.feature}
                  className="grid grid-cols-3"
                  style={{
                    borderTop: "1px solid rgba(0,0,0,0.06)",
                    backgroundColor: i % 2 === 0 ? "#fff" : "#fafafa",
                  }}
                >
                  <div className="px-5 py-4">
                    <span className="text-sm" style={{ color: "#010101", fontWeight: 500 }}>
                      {row.feature}
                    </span>
                  </div>
                  <div
                    className="px-5 py-4"
                    style={{ borderLeft: "1px solid rgba(0,0,0,0.06)" }}
                  >
                    <StatusCell label={row.pz.label} status={row.pz.status} />
                  </div>
                  <div
                    className="px-5 py-4"
                    style={{
                      borderLeft: "1px solid rgba(0,0,0,0.06)",
                      backgroundColor: "rgba(184,164,76,0.03)",
                    }}
                  >
                    <StatusCell label={row.nx.label} status={row.nx.status} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key differentiators */}
        <section className="px-6 py-20 md:py-28" style={{ backgroundColor: "#EAE7E3" }}>
          <div className="max-w-4xl mx-auto">
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#B8A44C" }}>
              The Details That Matter
            </p>
            <h2
              className="text-2xl md:text-3xl mb-10"
              style={{ fontWeight: 500, color: "#010101", letterSpacing: "-0.01em" }}
            >
              Where the gap shows up
            </h2>
            <div className="space-y-8">
              {differentiators.map((d) => (
                <div
                  key={d.title}
                  className="rounded-lg p-8"
                  style={{
                    backgroundColor: "#F9F9F9",
                    border: "1px solid rgba(0,0,0,0.07)",
                    borderLeft: "3px solid #B8A44C",
                  }}
                >
                  <h3
                    className="text-lg mb-4"
                    style={{ fontWeight: 500, color: "#010101", letterSpacing: "-0.01em" }}
                  >
                    {d.title}
                  </h3>
                  {d.body.split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      className="text-base mb-3 last:mb-0"
                      style={{ color: "#444", lineHeight: 1.8, fontWeight: 300 }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-20 md:py-28">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#B8A44C" }}>
              FAQ
            </p>
            <h2
              className="text-2xl md:text-3xl mb-10"
              style={{ fontWeight: 500, color: "#010101", letterSpacing: "-0.01em" }}
            >
              Common questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-lg p-6"
                  style={{ backgroundColor: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
                >
                  <p className="text-base font-medium mb-2" style={{ color: "#010101" }}>
                    {faq.q}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "#555", lineHeight: 1.75, fontWeight: 300 }}
                  >
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20 md:py-28" style={{ backgroundColor: "#EAE7E3" }}>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#B8A44C" }}>
              Verify Before You Order
            </p>
            <h2
              className="text-3xl md:text-4xl mb-5 font-medium tracking-tight"
              style={{ color: "#010101" }}
            >
              See the COAs first.
            </h2>
            <p
              className="text-base mb-8 max-w-xl mx-auto"
              style={{ color: "#555", lineHeight: 1.7, fontWeight: 300 }}
            >
              Every Nexphoria lot is posted publicly. Check the testing lab, batch number, and
              methodology before placing an order.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/coa" className="btn-primary">
                View COAs
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm"
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid rgba(0,0,0,0.15)",
                  color: "#555",
                }}
              >
                Browse Catalog
              </Link>
            </div>
          </div>
        </section>

        <div
          className="mx-6 mb-6 max-w-3xl md:mx-auto px-5 py-4 rounded-lg text-xs"
          style={{
            background: "rgba(0,0,0,0.04)",
            borderLeft: "3px solid #B8A44C",
            color: "#777",
            lineHeight: 1.7,
          }}
        >
          <strong style={{ color: "#010101" }}>Research Use Only: </strong>
          All Nexphoria compounds are sold exclusively for qualified research purposes and are not
          intended for human consumption, therapeutic use, or diagnostic purposes.
        </div>
      </div>
    </>
  );
}
