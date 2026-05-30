import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "How to Evaluate Research Peptide Quality: A Sourcing Guide | Nexphoria",
  description:
    "What to look for when sourcing research peptides: ISO 17025 lab accreditation, HPLC + MS + LAL endotoxin requirements, COA chain-of-custody, quality tiers, and red flags to avoid.",
  openGraph: {
    title: "Research Peptide Sourcing Guide — Nexphoria",
    description:
      "Evaluating peptide quality for research: why HPLC alone isn't enough, what ISO 17025 accreditation means, purity tier differences, and how to spot red flags.",
    url: "https://nexphoria.com/guides/peptide-sourcing",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Peptide Sourcing Guide — Nexphoria",
    description:
      "How to evaluate peptide suppliers: ISO 17025, HPLC + MS + LAL endotoxin, purity tiers, chain-of-custody. Research use only.",
  },
};

const QUALITY_CRITERIA: {
  number: string;
  title: string;
  anchor: string;
  summary: string;
  body: string;
  redFlags: string[];
  nexphoria?: string;
}[] = [
  {
    number: "01",
    title: "ISO/IEC 17025 Lab Accreditation",
    anchor: "lab-accreditation",
    summary: "Third-party analytical testing must be performed by an ISO 17025-accredited laboratory — not in-house, not by the vendor.",
    body: `The most fundamental quality indicator is whether testing is done by an independently accredited laboratory. ISO/IEC 17025 is the international standard for testing and calibration laboratories. It requires that labs demonstrate method validation, equipment calibration, staff competency, and a functioning quality management system — all verified by a third-party accreditation body.

Any vendor can print HPLC numbers on a document. Only an accredited lab has had those numbers, methods, and equipment independently audited. Accreditation bodies include UKAS (UK), A2LA (US), DAkkS (Germany), and COFRAC (France). You can verify any lab's accreditation status on their public registry.

Nexphoria uses Janoshik Analytical and Freedom Diagnostics as independent testing partners — both verifiable in public accreditation registries.`,
    redFlags: [
      "Testing described as 'in-house' with no named external lab",
      "Lab name not findable in any accreditation registry",
      "COA lists generic 'third-party lab' without naming it",
      "Lab website is sparse or does not list analytical services",
    ],
  },
  {
    number: "02",
    title: "HPLC Purity — But Not Just the Number",
    anchor: "hplc-purity",
    summary: "A purity percentage is meaningless without the method: column specification, UV wavelength, gradient elution, and chromatogram.",
    body: `HPLC (high-performance liquid chromatography) is the standard method for peptide purity determination. Reversed-phase HPLC on a C18 or C8 column with UV detection at 214 nm separates the target peptide from deletion sequences, side-chain protected fragments, and other impurities by hydrophobicity.

The critical point: a purity number without a chromatogram is unverifiable. Anyone can type "99.2%" on a document. What you need is the actual chromatogram showing peak shape and integration, the column specification and lot, the mobile phase and gradient conditions, and the UV wavelength used. This lets you independently assess whether the separation was sufficient and whether the integration was honest.

For in vivo research, ≥98% purity by RP-HPLC is the minimum standard. For sensitive studies (behavioral neuroscience, reproductive endocrinology), ≥99% is preferred to minimize confounds from impurity-driven off-target effects.`,
    redFlags: [
      "COA shows only a purity percentage with no chromatogram",
      "Column type and mobile phase not specified",
      "UV wavelength not listed (214 nm is standard for peptide bonds)",
      "Only retention time listed — no peak area or integration method",
    ],
  },
  {
    number: "03",
    title: "Mass Spectrometry Identity Confirmation",
    anchor: "mass-spectrometry",
    summary: "HPLC tells you purity. Mass spectrometry (ESI-MS or MALDI-TOF) is the only way to confirm the compound is actually what it claims to be.",
    body: `It is entirely possible to have a highly pure compound that is the wrong compound. HPLC cannot distinguish between structural isomers, D/L amino acid variants, or compounds with the same hydrophobicity. Only mass spectrometry can confirm molecular identity.

ESI-MS (electrospray ionization) produces multiply-charged ions ([M+H]+, [M+2H]2+, [M+3H]3+) from which you can calculate the monoisotopic or average molecular mass. The observed mass should match the theoretical mass for the correct peptide sequence within ±0.02% (high resolution) or ±1 Da (unit resolution).

A COA without MS data is confirming purity but not identity. For peptides above ~1,000 Da, where sequence errors are possible from solid-phase synthesis, MS is non-negotiable. Nexphoria requires both HPLC and MS confirmation on every lot before release.`,
    redFlags: [
      "COA provides HPLC only — no MS confirmation",
      "MS data shows only [M+H]+ for a large peptide without multiply-charged ions",
      "Observed mass differs from theoretical by >2 Da without explanation",
      "MALDI spectrum shows major unassigned peaks",
    ],
  },
  {
    number: "04",
    title: "LAL Endotoxin Testing",
    anchor: "endotoxin",
    summary: "For any compound used in animal research, LAL (limulus amebocyte lysate) endotoxin testing is required. Endotoxin-contaminated peptides invalidate immune, inflammation, and fever studies.",
    body: `Endotoxins are lipopolysaccharides (LPS) from gram-negative bacterial cell walls. They are extraordinarily potent immune activators — picogram quantities can trigger fever, hypotension, and a full inflammatory cascade in rodents. This makes endotoxin contamination a critical confound in any study measuring cytokines, body temperature, food intake, immune activation, or behavior.

The LAL (Limulus Amebocyte Lysate) assay detects endotoxin via clotting reaction from horseshoe crab blood. It is sensitive to ~0.005 EU/mL. For in vivo use, peptides should meet <1 EU/mg (research grade) or <0.1 EU/mg (pharmaceutical grade) specifications.

Many low-cost peptide suppliers skip endotoxin testing entirely. HPLC purity and LAL endotoxin are independent quality dimensions — a compound can be 99.9% pure by HPLC and still contain 50 EU/mg endotoxin. Any supplier offering peptides "for research use" that cannot provide endotoxin data is not appropriate for in vivo studies.`,
    redFlags: [
      "COA has no endotoxin test result",
      "Endotoxin value listed as 'Not Tested' or 'N/A'",
      "Value expressed in EU/mL without specifying reconstitution concentration",
      "No LAL method specification (kinetic turbidimetric vs chromogenic)",
    ],
  },
  {
    number: "05",
    title: "COA Chain-of-Custody and Lot Traceability",
    anchor: "chain-of-custody",
    summary: "The COA must be lot-specific, signed by a named analyst, and directly traceable to the vial you receive.",
    body: `Chain-of-custody means the COA you receive corresponds to the specific batch of material in your vial — not a different lot, not a 'representative' batch, not a fabricated template. This requires:

A lot/batch number on the COA that exactly matches the lot number on your vial label. A test date that is plausible relative to your order date. A named analyst or QA officer signature (not just a company stamp). Document control: version number, issue date, and revision history if applicable. The lot number link is the single most important traceability element. Without it, a COA is marketing material, not quality documentation.`,
    redFlags: [
      "COA has no lot number or shows 'See label'",
      "COA lot number does not match vial label",
      "Test date is years before your order",
      "No analyst name or signature — just a company logo",
      "COA explicitly described as 'sample' or 'representative'",
    ],
  },
  {
    number: "06",
    title: "Cold-Chain Shipping and Storage",
    anchor: "cold-chain",
    summary: "Peptide degradation begins the moment temperature control breaks down. Proper cold-chain logistics are as important as synthesis quality.",
    body: `Lyophilized peptides are stable at room temperature for short periods, but repeated freeze-thaw cycles, extended ambient exposure, and humidity all accelerate degradation. For temperature-sensitive compounds (GLP-1 analogs, GHK-Cu, Snap-8, oxidation-prone peptides), cold-chain shipping is not optional — it is a quality requirement.

What proper cold-chain shipping looks like: gel ice packs (for 2-5 day transit) or dry ice (for extended transit or summer shipping), insulated packaging validated for 48–72 hour temperature maintenance, transparent shipping policy stating shipping methods by compound category, and arrival condition that allows you to verify the compound was kept cold.

Ask suppliers: "What shipping method do you use for [compound]? Do you use gel ice or dry ice? What is your policy for compounds arriving at ambient temperature?" A supplier that ships temperature-sensitive peptides via standard uninsulated flat-rate mail is not treating quality seriously.`,
    redFlags: [
      "Supplier ships all peptides the same way regardless of temperature requirements",
      "No mention of cold-chain logistics anywhere on site",
      "Semaglutide, tirzepatide, or GHK-Cu shipped without cold packs",
      "No refund/replacement policy for heat-damaged shipments",
    ],
  },
];

const QUALITY_TIERS = [
  {
    tier: "Minimal",
    purity: "≥95%",
    hplc: "Yes (number only)",
    ms: "No",
    endotoxin: "Not tested",
    accreditation: "None",
    suitable: "In vitro cell assays only",
    color: "text-red-400",
    bg: "bg-red-950/30 border-red-800/40",
  },
  {
    tier: "Research Grade",
    purity: "≥98%",
    hplc: "Yes (chromatogram)",
    ms: "Yes",
    endotoxin: "<1 EU/mg",
    accreditation: "ISO 17025",
    suitable: "In vivo rodent studies",
    color: "text-yellow-400",
    bg: "bg-yellow-950/30 border-yellow-800/40",
  },
  {
    tier: "High-Purity",
    purity: "≥99%",
    hplc: "Yes (full method)",
    ms: "Yes (HR-MS)",
    endotoxin: "<0.5 EU/mg",
    accreditation: "ISO 17025",
    suitable: "Sensitive behavioral / reproductive studies",
    color: "text-green-400",
    bg: "bg-green-950/30 border-green-800/40",
  },
  {
    tier: "Pharmaceutical Equivalent",
    purity: "≥99.5%",
    hplc: "Yes (compendial method)",
    ms: "Yes (HR-MS + NMR)",
    endotoxin: "<0.1 EU/mg",
    accreditation: "ISO 17025 + GMP",
    suitable: "IND-enabling preclinical studies",
    color: "text-blue-400",
    bg: "bg-blue-950/30 border-blue-800/40",
  },
];

const RED_FLAGS = [
  {
    flag: "Round purity numbers",
    detail:
      "A result of exactly 99%, 98%, or 95% from analytical testing is statistically improbable. Real HPLC results are specific: 99.2%, 98.7%, 97.4%. Round numbers suggest estimated or fabricated values.",
  },
  {
    flag: "Unnamed testing laboratory",
    detail:
      "If the COA says 'third-party tested' or 'in-house QC' without naming the specific laboratory, there is no way to verify the testing occurred. A legitimate supplier names their testing lab.",
  },
  {
    flag: "No lot number on COA",
    detail:
      "A COA without a lot number cannot be traced to any specific batch. It may be a template, a document from a different batch, or fabricated entirely.",
  },
  {
    flag: "No endotoxin data",
    detail:
      "Absence of LAL endotoxin data means in vivo studies face unknown contamination risk. This is not acceptable for any supplier claiming to serve research customers.",
  },
  {
    flag: "Price dramatically below market",
    detail:
      "Proper synthesis (SPPS), purification (prep-HPLC), lyophilization, and third-party testing all have real costs. Compounds priced at 20–30% of market rate cannot cover these costs — something in the quality chain was cut.",
  },
  {
    flag: "HPLC without chromatogram",
    detail:
      "A purity percentage without the supporting chromatogram, column specification, and integration method is unverifiable. This is the analytical equivalent of saying 'trust me.'",
  },
  {
    flag: "Shipping without cold chain",
    detail:
      "Suppliers that ship temperature-sensitive peptides without cold packs have already degraded quality before the compound reaches your lab.",
  },
  {
    flag: "No return policy for quality issues",
    detail:
      "A supplier confident in their quality offers recourse if a lot fails independent testing. No returns policy = no accountability.",
  },
];

const NEXPHORIA_STANDARDS = [
  {
    label: "Third-Party Testing",
    detail: "Every lot tested by Janoshik Analytical (ISO 17025) and Freedom Diagnostics — both independently verifiable.",
  },
  {
    label: "Analytical Methods",
    detail: "RP-HPLC (C18, 214 nm UV, gradient elution, peak area integration) + ESI-MS identity confirmation on every lot.",
  },
  {
    label: "Endotoxin",
    detail: "LAL endotoxin testing performed on every lot. In vivo-appropriate compounds meet <1 EU/mg specification.",
  },
  {
    label: "Lot Traceability",
    detail: "Every COA carries a unique lot number that matches the vial label and pack slip. No representative or template COAs.",
  },
  {
    label: "Cold-Chain Shipping",
    detail: "Insulated packaging with gel ice packs standard. Dry ice on request for extended transit or heat-sensitive compounds.",
  },
  {
    label: "Purity Tier",
    detail: "All compounds ≥98% purity minimum (RP-HPLC). Most catalog items ≥99.2%. Full spec sheet available per compound.",
  },
];

export default function PeptideSourcingPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Hero */}
      <section className="bg-zinc-900 border-b border-white/10 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Guides", href: "/guides" },
              { label: "Peptide Sourcing" },
            ]}
          />
          <div className="mt-6">
            <span className="text-[#d4af37] text-xs font-semibold uppercase tracking-widest">
              Research Guide
            </span>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              How to Evaluate Research Peptide Quality
            </h1>
            <p className="mt-4 text-lg text-zinc-300 leading-relaxed max-w-3xl">
              What to look for when sourcing peptides for research: why HPLC
              purity alone is insufficient, what ISO 17025 accreditation means,
              the difference between quality tiers, and the red flags that
              indicate a supplier is cutting corners on quality.
            </p>
            {/* Stats strip */}
            <div className="mt-8 flex flex-wrap gap-6">
              {[
                { val: "6", label: "Quality criteria" },
                { val: "8", label: "Red flags covered" },
                { val: "4", label: "Purity tiers explained" },
                { val: "~12 min", label: "Read time" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-[#d4af37]">
                    {s.val}
                  </div>
                  <div className="text-xs text-zinc-400 uppercase tracking-wide">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-invert prose-lg max-w-none">
          <p>
            The research peptide market is largely unregulated, and quality
            varies dramatically between suppliers. Knowing how to evaluate
            quality is essential — not just to protect the integrity of your
            data, but to ensure that the compounds you&apos;re working with are
            actually what they claim to be at the purity levels claimed.
          </p>
          <p>
            This guide covers the six key quality dimensions to evaluate for any
            peptide supplier, the difference between quality tiers, and the
            specific red flags that indicate a supplier is cutting corners.
          </p>
        </div>
      </section>

      {/* Jump nav */}
      <section className="max-w-4xl mx-auto px-6 pb-8">
        <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 mb-4">
            In This Guide
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {QUALITY_CRITERIA.map((c) => (
              <a
                key={c.anchor}
                href={`#${c.anchor}`}
                className="flex items-center gap-3 text-sm text-zinc-300 hover:text-[#d4af37] transition-colors group"
              >
                <span className="text-[#d4af37] font-bold group-hover:scale-110 transition-transform">
                  {c.number}
                </span>
                <span>{c.title}</span>
              </a>
            ))}
            <a
              href="#quality-tiers"
              className="flex items-center gap-3 text-sm text-zinc-300 hover:text-[#d4af37] transition-colors"
            >
              <span className="text-zinc-500 font-bold">07</span>
              <span>Quality Tiers Comparison</span>
            </a>
            <a
              href="#red-flags"
              className="flex items-center gap-3 text-sm text-zinc-300 hover:text-[#d4af37] transition-colors"
            >
              <span className="text-zinc-500 font-bold">08</span>
              <span>Red Flags to Avoid</span>
            </a>
          </div>
        </div>
      </section>

      {/* Quality criteria */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="space-y-16">
          {QUALITY_CRITERIA.map((c) => (
            <div key={c.anchor} id={c.anchor} className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-black text-[#d4af37]/30 select-none">
                  {c.number}
                </span>
                <div>
                  <h2 className="text-2xl font-bold">{c.title}</h2>
                  <p className="text-zinc-400 text-sm mt-1 leading-snug max-w-2xl">
                    {c.summary}
                  </p>
                </div>
              </div>

              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
                <div className="prose prose-invert max-w-none text-zinc-300 text-sm leading-relaxed whitespace-pre-line mb-6">
                  {c.body}
                </div>

                <div className="mt-4">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-3">
                    Red Flags
                  </h3>
                  <ul className="space-y-2">
                    {c.redFlags.map((rf) => (
                      <li key={rf} className="flex items-start gap-2 text-sm">
                        <span className="text-red-500 mt-0.5 shrink-0">✕</span>
                        <span className="text-zinc-400">{rf}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {c.nexphoria && (
                  <div className="mt-5 bg-[#d4af37]/5 border border-[#d4af37]/20 rounded-lg p-4">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#d4af37] block mb-1">
                      Nexphoria Standard
                    </span>
                    <p className="text-sm text-zinc-300">{c.nexphoria}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quality tiers */}
      <section
        id="quality-tiers"
        className="bg-zinc-900 border-y border-white/10 py-16 scroll-mt-24"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2">
            Research Peptide Quality Tiers
          </h2>
          <p className="text-zinc-400 text-sm mb-8">
            Not all peptides are equal — here&apos;s how quality tiers differ
            and which use cases each tier supports.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 pr-4 text-zinc-400 font-medium">
                    Tier
                  </th>
                  <th className="text-left py-3 pr-4 text-zinc-400 font-medium">
                    Purity (HPLC)
                  </th>
                  <th className="text-left py-3 pr-4 text-zinc-400 font-medium">
                    HPLC Data
                  </th>
                  <th className="text-left py-3 pr-4 text-zinc-400 font-medium">
                    MS
                  </th>
                  <th className="text-left py-3 pr-4 text-zinc-400 font-medium">
                    Endotoxin
                  </th>
                  <th className="text-left py-3 pr-4 text-zinc-400 font-medium">
                    Lab Accred.
                  </th>
                  <th className="text-left py-3 text-zinc-400 font-medium">
                    Suitable For
                  </th>
                </tr>
              </thead>
              <tbody>
                {QUALITY_TIERS.map((t) => (
                  <tr
                    key={t.tier}
                    className="border-b border-white/5 hover:bg-white/5"
                  >
                    <td className={`py-3 pr-4 font-semibold ${t.color}`}>
                      {t.tier}
                    </td>
                    <td className="py-3 pr-4 text-zinc-300">{t.purity}</td>
                    <td className="py-3 pr-4 text-zinc-300">{t.hplc}</td>
                    <td className="py-3 pr-4 text-zinc-300">{t.ms}</td>
                    <td className="py-3 pr-4 text-zinc-300">{t.endotoxin}</td>
                    <td className="py-3 pr-4 text-zinc-300">
                      {t.accreditation}
                    </td>
                    <td className="py-3 text-zinc-400 text-xs">{t.suitable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-xs text-zinc-500">
            All Nexphoria products meet Research Grade or High-Purity
            specifications. Purity, HPLC, MS, and endotoxin data are available
            per-lot via our COA library.
          </div>
        </div>
      </section>

      {/* Red flags */}
      <section
        id="red-flags"
        className="py-16 max-w-4xl mx-auto px-6 scroll-mt-24"
      >
        <h2 className="text-3xl font-bold mb-2">8 Red Flags to Avoid</h2>
        <p className="text-zinc-400 text-sm mb-8">
          These supplier patterns indicate quality shortcuts that can compromise
          your research data.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {RED_FLAGS.map((rf, i) => (
            <div
              key={rf.flag}
              className="bg-zinc-900 border border-red-900/40 rounded-xl p-5"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-red-500 font-black text-lg">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-semibold text-red-300">{rf.flag}</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {rf.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Nexphoria standards */}
      <section className="bg-zinc-900 border-y border-white/10 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-2">The Nexphoria Standard</h2>
          <p className="text-zinc-400 text-sm mb-8">
            How Nexphoria addresses each quality dimension for every lot.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {NEXPHORIA_STANDARDS.map((s) => (
              <div
                key={s.label}
                className="bg-zinc-950 border border-white/10 rounded-xl p-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#d4af37] text-lg">✓</span>
                  <h3 className="font-semibold text-sm">{s.label}</h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {s.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-[#d4af37] text-zinc-950 font-semibold py-3 px-6 rounded-lg hover:bg-[#c4a030] transition-colors text-sm"
            >
              Browse the Catalog →
            </Link>
            <Link
              href="/guides/coa-verification"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-medium py-3 px-6 rounded-lg hover:bg-white/5 transition-colors text-sm"
            >
              How to Verify a COA
            </Link>
            <Link
              href="/tools/purity-checker"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-medium py-3 px-6 rounded-lg hover:bg-white/5 transition-colors text-sm"
            >
              Purity Reference Tool
            </Link>
          </div>
        </div>
      </section>

      {/* Related resources */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-xl font-bold mb-6">Related Resources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "How to Verify a COA",
              desc: "Step-by-step COA authentication guide",
              href: "/guides/coa-verification",
            },
            {
              title: "Peptide Storage Guide",
              desc: "Temperature requirements by compound",
              href: "/guides/storage",
            },
            {
              title: "Purity Checker Tool",
              desc: "HPLC purity & QC reference table",
              href: "/tools/purity-checker",
            },
            {
              title: "Reconstitution Guide",
              desc: "Step-by-step reconstitution protocols",
              href: "/guides/reconstitution",
            },
            {
              title: "COA Library",
              desc: "Sample COAs for top compounds",
              href: "/coa/bpc-157",
            },
            {
              title: "Peptide Glossary",
              desc: "50+ research terms defined",
              href: "/guides/peptide-glossary",
            },
          ].map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="bg-zinc-900 border border-white/10 rounded-xl p-4 hover:border-[#d4af37]/40 transition-colors group"
            >
              <div className="font-semibold text-sm group-hover:text-[#d4af37] transition-colors">
                {r.title}
              </div>
              <div className="text-xs text-zinc-500 mt-1">{r.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* RUO disclaimer */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6 text-center">
          <p className="text-xs text-zinc-500 leading-relaxed max-w-2xl mx-auto">
            <strong className="text-zinc-400">Research Use Only.</strong> All
            compounds sold by Nexphoria are intended for laboratory research
            purposes only. They are not for human consumption, veterinary use,
            or medical application. This guide is provided for educational
            purposes to help researchers evaluate analytical data quality.
          </p>
        </div>
      </section>
    </main>
  );
}
