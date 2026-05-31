import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "How to Read a Certificate of Analysis (COA) | Nexphoria",
  description:
    "Learn how to read and interpret a peptide Certificate of Analysis (COA). Understand every section: lab header, lot number, HPLC purity, MS identity, moisture, endotoxin, and analyst sign-off.",
  openGraph: {
    title: "How to Read a Peptide COA — Nexphoria Research",
    description:
      "A field-by-field guide to reading a Certificate of Analysis for research peptides. Know what every number means and what to look for.",
    url: "https://nexphoria.com/guides/how-to-read-coa",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Read a Peptide COA — Nexphoria",
    description:
      "Field-by-field guide to reading a Certificate of Analysis: HPLC purity, MS identity, endotoxin, moisture, lot number. Research use only.",
  },
  alternates: {
    canonical: "https://nexphoria.com/guides/how-to-read-coa",
  },
};

const COA_SECTIONS = [
  {
    id: "header",
    icon: "🏛",
    label: "Section 1: Lab Header & Identification",
    fields: [
      {
        field: "Lab Name & Accreditation",
        meaning:
          "The name of the independent third-party testing laboratory that performed the analysis. A legitimate COA lists a named external lab — not 'in-house' testing. Look for ISO/IEC 17025 accreditation notation (e.g., A2LA, UKAS, DAkkS).",
        goodExample: "Janoshik Analytical, Prague, CZ — ISO 17025 Accredited",
        redFlag: "In-house tested | Self-certified | No lab name listed",
      },
      {
        field: "Report Number / Certificate Number",
        meaning:
          "A unique identifier assigned by the testing laboratory to this specific analytical report. This number allows you to contact the lab and verify the report's authenticity directly.",
        goodExample: "Report No. JAN-2025-04821",
        redFlag: "No report number | Generic 'COA' with no traceability",
      },
      {
        field: "Test Date / Issue Date",
        meaning:
          "The date the testing was performed. This confirms the COA is for a recent batch — not recycled documentation from months or years ago. Compare the test date against the lot manufacture date.",
        goodExample: "Analysis Date: 14 March 2025",
        redFlag: "No date listed | Date is years in the past for a supposedly new batch",
      },
    ],
  },
  {
    id: "compound",
    icon: "🧪",
    label: "Section 2: Compound Identity Information",
    fields: [
      {
        field: "Compound Name",
        meaning:
          "The full chemical/IUPAC name or accepted research name of the peptide. Should match what you ordered. Some COAs list both the common name (e.g., BPC-157) and the systematic name (Body Protection Compound-157, sequence: Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val).",
        goodExample: "BPC-157 (Body Protection Compound-157) | Pentadecapeptide BPC 157",
        redFlag: "Generic 'peptide' with no compound name | Name doesn't match product ordered",
      },
      {
        field: "CAS Number",
        meaning:
          "The Chemical Abstracts Service registry number — a unique identifier for every chemical compound. CAS numbers are publicly verifiable via PubChem or SciFinder. Confirming the CAS matches the compound name is a basic identity check.",
        goodExample: "BPC-157: CAS 137525-51-0",
        redFlag: "No CAS number | CAS that doesn't match the stated compound (verifiable on PubChem)",
      },
      {
        field: "Lot Number / Batch Number",
        meaning:
          "The specific production batch this COA covers. This is the single most important traceability field — it must exactly match the lot number printed on your vial label. If they don't match, the COA is not for your compound.",
        goodExample: "Lot: NX-BPC-2025-003 (matches vial label exactly)",
        redFlag: "No lot number | Generic 'Lot 001' | Lot number doesn't match vial",
      },
      {
        field: "Molecular Formula & Weight",
        meaning:
          "The chemical formula and calculated molecular weight of the compound. These values are fixed for any given peptide and can be verified against the literature. The theoretical molecular weight is used to validate MS data.",
        goodExample: "C₆₂H₉₈N₁₆O₂₂ | MW: 1419.55 Da",
        redFlag: "Molecular weight doesn't match literature values for the named compound",
      },
    ],
  },
  {
    id: "hplc",
    icon: "📊",
    label: "Section 3: HPLC Purity Analysis",
    fields: [
      {
        field: "Purity (%) by HPLC",
        meaning:
          "The percentage of the main compound peak relative to all detected peaks, calculated as: (main peak area ÷ total peak area) × 100. This is the primary purity metric for research peptides. ≥98% is the minimum acceptable; ≥99% is preferred for precise research.",
        goodExample: "Purity: 99.4% by RP-HPLC (area normalization at 214 nm)",
        redFlag: "Purity listed as '100%' — physically impossible | Single number with no method | Purity below 95%",
      },
      {
        field: "HPLC Method Details",
        meaning:
          "The column type, mobile phase, gradient program, and UV detection wavelength used. For peptides: C18 reverse-phase column, water/acetonitrile gradient with TFA, 214 nm UV detection is standard. These details allow independent reproduction of the analysis.",
        goodExample: "Column: Waters C18 (4.6×150mm, 3.5µm) | Gradient: 5→95% ACN/0.1% TFA | UV: 214 nm",
        redFlag: "No method described | 'Proprietary method' with no details",
      },
      {
        field: "Retention Time (RT)",
        meaning:
          "The time at which the compound peak elutes from the HPLC column, in minutes. Each compound has a characteristic RT under a given method. Consistent RT across batches confirms same compound identity. Labs may provide both RTs for the main peak and any impurity peaks.",
        goodExample: "RT: 12.4 min (main peak) | Impurity peaks: 8.2 min (0.3%), 15.1 min (0.3%)",
        redFlag: "No RT documented | Single value without context of the gradient method",
      },
      {
        field: "Chromatogram Trace",
        meaning:
          "The actual graphical record of the HPLC run — UV absorbance plotted against time. A real COA should include the chromatogram image or raw data table. A single percentage number without a visual trace can be fabricated trivially; the chromatogram cannot.",
        goodExample: "Attached chromatogram showing dominant main peak with minor flanking impurities",
        redFlag: "Purity % with no chromatogram | Low-resolution image clearly copied from another document",
      },
    ],
  },
  {
    id: "ms",
    icon: "⚖️",
    label: "Section 4: Mass Spectrometry (Identity Confirmation)",
    fields: [
      {
        field: "MS Technique",
        meaning:
          "The type of mass spectrometry used. ESI-MS (Electrospray Ionization) is standard for peptides as it produces multiple charge states from large molecules. MALDI-TOF is an alternative. The technique determines how you interpret the m/z data.",
        goodExample: "ESI-MS (positive ion mode) | MALDI-TOF MS",
        redFlag: "MS method not specified | 'Identity confirmed' with no data or technique listed",
      },
      {
        field: "Observed m/z Values",
        meaning:
          "Mass-to-charge ratios measured for the compound's ions. For ESI-MS, peptides produce multiply-charged ions: [M+H]⁺, [M+2H]²⁺, [M+3H]³⁺. To calculate neutral mass: M = (m/z × z) − (z × 1.0073). Example: [M+2H]²⁺ at m/z 710.8 → M = (710.8 × 2) − (2 × 1.0073) = 1419.6 Da.",
        goodExample: "[M+2H]²⁺ = 710.28 | [M+3H]³⁺ = 473.85 | Calculated MW: 1419.55 Da",
        redFlag: "Only a single m/z with no charge state | Observed mass deviates >0.1% from theoretical",
      },
      {
        field: "Theoretical vs. Observed Mass",
        meaning:
          "The COA should list both the calculated (theoretical) molecular mass and the observed mass from the MS measurement. Acceptable deviation: ±0.01% for ESI-MS (typically ±0.1–0.5 Da for peptides under 2000 Da). Large deviations indicate wrong compound, degradation, or poor instrument calibration.",
        goodExample: "Theoretical MW: 1419.55 Da | Observed: 1419.6 Da | Δ: 0.04 Da (0.003%)",
        redFlag: "Observed mass deviates by >1 Da from theoretical without explanation",
      },
    ],
  },
  {
    id: "additional",
    icon: "🔬",
    label: "Section 5: Additional Quality Tests",
    fields: [
      {
        field: "Moisture Content (Karl Fischer)",
        meaning:
          "The percentage of residual water in the lyophilized powder, measured by Karl Fischer titration. Lower moisture = better long-term stability. Acceptable range: <5% for most peptides; <3% preferred. High moisture accelerates degradation during storage.",
        goodExample: "Moisture: 2.1% (KF titration)",
        redFlag: "Moisture not tested | >8% moisture (significantly reduces shelf life)",
      },
      {
        field: "Endotoxin / LAL Test",
        meaning:
          "Limulus Amebocyte Lysate (LAL) test measures bacterial endotoxin levels in EU/mg or EU/mL. Endotoxins are pyrogens that can cause fever and inflammation. Critical for injectable research protocols. Acceptable: <1 EU/mg (USP limit for parenteral use) or <14 EU/kg body weight per dose.",
        goodExample: "Endotoxin: <1.0 EU/mg by LAL method",
        redFlag: "Endotoxin not tested (for injectable-grade compounds) | Value >5 EU/mg",
      },
      {
        field: "Appearance / Physical Description",
        meaning:
          "Visual description of the compound: color, form (lyophilized powder vs. liquid), and physical consistency. Most research peptides are white to off-white lyophilized powders. Yellow or brown coloration may indicate oxidation. Clumping may indicate moisture contamination.",
        goodExample: "White to off-white lyophilized powder",
        redFlag: "Significant yellow or brown discoloration | Wet or oily appearance",
      },
      {
        field: "Residual Solvents",
        meaning:
          "Testing for trace organic solvents (acetonitrile, TFA, DMF, etc.) remaining from the synthesis and purification process. Governed by ICH Q3C guidelines with class-specific limits. Not always included in basic COAs but present on pharmaceutical-grade documentation.",
        goodExample: "Residual TFA: <0.1% | ACN: <41 ppm (ICH Q3C Class 2 limit)",
        redFlag: "Solvent levels not disclosed for injectable-grade compounds | TFA >0.3%",
      },
    ],
  },
  {
    id: "signoff",
    icon: "✍️",
    label: "Section 6: Analyst Sign-Off & Certification",
    fields: [
      {
        field: "Analyst Name & Signature",
        meaning:
          "The name and signature (wet or electronic) of the qualified analyst who performed or reviewed the testing. This is accountability documentation — it means a real person takes professional and legal responsibility for the data. Anonymous or unsigned COAs carry no accountability.",
        goodExample: "Tested by: J. Novak, MSc. Analytical Chemistry | QC Reviewed by: Dr. K. Horakova",
        redFlag: "No analyst name | 'Authorized Signatory' with no individual named | Clearly digital stamp only",
      },
      {
        field: "Certifying Statement",
        meaning:
          "A statement certifying that the results are accurate and the compound meets stated specifications. This is the formal declaration of compliance. It may reference specific pharmacopoeial standards or internal specification limits.",
        goodExample: "We certify that the above results are accurate and that the compound meets the stated specification.",
        redFlag: "No certifying statement | Vague disclaimers that reduce the lab's liability for accuracy",
      },
    ],
  },
];

const QUICK_REFERENCE = [
  { label: "Purity ≥99%", color: "text-emerald-400", desc: "Premium research grade — HPLC area normalization" },
  { label: "Purity 98–99%", color: "text-yellow-400", desc: "Acceptable for most research protocols" },
  { label: "Purity <95%", color: "text-red-400", desc: "Below standard — question the source" },
  { label: "MS mass match ±0.01%", color: "text-emerald-400", desc: "Confirmed identity" },
  { label: "Moisture <3%", color: "text-emerald-400", desc: "Optimal lyophilized stability" },
  { label: "Endotoxin <1 EU/mg", color: "text-emerald-400", desc: "Injectable-grade standard" },
];

export default function HowToReadCOAPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Research Guides", href: "/guides" },
            { label: "How to Read a COA" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#B8A44C]">Quality Control</span>
          <span className="text-zinc-700">·</span>
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-zinc-500">Documentation Guide</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5 text-white leading-tight">
          How to Read a Certificate<br className="hidden sm:block" /> of Analysis (COA)
        </h1>
        <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
          A COA is your primary quality assurance document for any research peptide. This guide walks through every field — what it means, what good looks like, and what red flags to watch for.
        </p>

        {/* Quick reference card */}
        <div className="bg-zinc-900 border border-white/8 rounded-2xl p-5 mb-2">
          <p className="text-xs uppercase tracking-[0.15em] text-zinc-500 font-medium mb-4">Quick Reference — Acceptable Values</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {QUICK_REFERENCE.map((ref) => (
              <div key={ref.label} className="flex items-start gap-2">
                <span className={`text-sm font-semibold ${ref.color} shrink-0`}>{ref.label}</span>
                <span className="text-xs text-zinc-500 leading-snug">{ref.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Table of contents */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="bg-zinc-900/60 border border-white/6 rounded-xl p-5">
          <p className="text-xs uppercase tracking-[0.15em] text-zinc-500 font-medium mb-3">Sections in this guide</p>
          <nav className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {COA_SECTIONS.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-[#B8A44C] transition-colors py-1"
              >
                <span className="text-base">{section.icon}</span>
                <span>{section.label.replace(/Section \d+: /, "")}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Main content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-14">
        {COA_SECTIONS.map((section) => (
          <section key={section.id} id={section.id}>
            {/* Section header */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{section.icon}</span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">{section.label}</h2>
            </div>

            {/* Fields */}
            <div className="space-y-5">
              {section.fields.map((field) => (
                <div
                  key={field.field}
                  className="bg-zinc-900 border border-white/8 rounded-2xl p-5 sm:p-6"
                >
                  <h3 className="text-base font-semibold text-[#B8A44C] mb-3">{field.field}</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-4">{field.meaning}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-emerald-950/30 border border-emerald-800/30 rounded-xl p-3">
                      <p className="text-[11px] uppercase tracking-[0.12em] text-emerald-500 font-medium mb-1.5">✓ Good Example</p>
                      <p className="text-xs text-zinc-300 leading-relaxed">{field.goodExample}</p>
                    </div>
                    <div className="bg-red-950/20 border border-red-800/25 rounded-xl p-3">
                      <p className="text-[11px] uppercase tracking-[0.12em] text-red-500 font-medium mb-1.5">⚠ Red Flags</p>
                      <p className="text-xs text-zinc-400 leading-relaxed">{field.redFlag}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* How Nexphoria COAs are structured */}
        <section id="nexphoria-coa">
          <div className="bg-[#B8A44C]/8 border border-[#B8A44C]/25 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span>🔖</span> How to Read a Nexphoria COA
            </h2>
            <p className="text-zinc-300 text-sm leading-relaxed mb-5">
              Every Nexphoria COA follows a standardized format from our third-party testing partners (Janoshik Analytical and Freedom Diagnostics). Here&apos;s what you&apos;ll find:
            </p>
            <ul className="space-y-2.5">
              {[
                "Lab letterhead with ISO 17025 accreditation number and scope",
                "Unique report number — call or email the lab to verify any report",
                "Compound name, CAS number, and your order lot number",
                "HPLC purity chromatogram image + peak area table + method summary",
                "ESI-MS spectrum with observed m/z values and calculated neutral mass",
                "Karl Fischer moisture content result",
                "LAL endotoxin result for applicable compounds",
                "Analyst name, qualifications, date, and certifying signature",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-zinc-300">
                  <span className="text-[#B8A44C] mt-0.5 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/guides/coa-verification"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#B8A44C] hover:text-white transition-colors"
              >
                COA Verification Guide →
              </Link>
              <Link
                href="/coa/bpc-157"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                View BPC-157 Sample COA →
              </Link>
            </div>
          </div>
        </section>

        {/* Related guides */}
        <section>
          <h2 className="text-lg font-semibold text-white mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/guides/coa-verification", label: "COA Verification Guide", desc: "6-step process to authenticate any COA" },
              { href: "/guides/peptide-sourcing", label: "Peptide Sourcing Guide", desc: "Evaluating supplier quality standards" },
              { href: "/guides/storage", label: "Storage Guide", desc: "Maintain compound integrity post-receipt" },
              { href: "/guides/reconstitution", label: "Reconstitution Guide", desc: "Proper solvents and technique" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex flex-col bg-zinc-900 border border-white/8 rounded-xl p-4 hover:border-[#B8A44C]/40 transition-all"
              >
                <p className="font-semibold text-sm text-white group-hover:text-[#B8A44C] transition-colors mb-1">
                  {link.label}
                </p>
                <p className="text-xs text-zinc-500">{link.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </article>

      {/* RUO disclaimer */}
      <div className="border-t border-white/6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-xs text-zinc-600 leading-relaxed">
            This guide is provided for <strong className="text-zinc-500">research use only (RUO)</strong>. Content is educational and intended for qualified researchers in laboratory settings. COA documentation standards described here are based on common industry practices — specific requirements may vary by jurisdiction, institution, and application. None of this constitutes medical, legal, or regulatory advice.
          </p>
        </div>
      </div>
    </div>
  );
}
