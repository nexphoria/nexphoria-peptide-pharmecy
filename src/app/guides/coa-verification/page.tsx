import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "How to Verify a COA: Authenticating Peptide Certificates of Analysis | Nexphoria",
  description:
    "Step-by-step guide to verifying a Certificate of Analysis (COA) for research peptides. Check ISO 17025 lab accreditation, lot number matching, HPLC chromatograms, MS molecular mass, and LAL endotoxin values.",
  openGraph: {
    title: "How to Verify a COA — Nexphoria Research",
    description:
      "Is your peptide COA real? Learn how to check ISO 17025 accreditation, verify lot numbers, read HPLC chromatograms, confirm MS data, and interpret LAL endotoxin results.",
    url: "https://nexphoria.com/guides/coa-verification",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Verify a Peptide COA — Nexphoria",
    description:
      "How to verify a Certificate of Analysis for research peptides: accreditation, lot numbers, HPLC, MS data, endotoxin. Research use only.",
  },
};

const VERIFICATION_STEPS = [
  {
    step: 1,
    title: "Check Lab Accreditation (ISO/IEC 17025)",
    anchor: "accreditation",
    icon: "🏛",
    what: "Verify that the testing laboratory holds current ISO/IEC 17025 accreditation — the international standard for analytical testing laboratories.",
    why: "ISO 17025 accreditation means the lab has been independently audited for method validation, equipment calibration, staff competency, and quality management. An unaccredited lab can produce any numbers it wants. Accreditation means a third-party body (UKAS, A2LA, DAkkS, etc.) has verified the lab's procedures are sound.",
    howTo: [
      "Find the lab name on the COA header. Legitimate labs list their name prominently (e.g., Janoshik Analytical, Freedom Diagnostics, Intertek).",
      "Search the accreditation body's public registry: UKAS (ukas.com), A2LA (a2la.org), or search '[lab name] ISO 17025 accreditation'.",
      "Confirm the accreditation scope covers HPLC and mass spectrometry for peptide purity testing.",
      "Check the accreditation certificate expiry date — active accreditation requires periodic renewal.",
    ],
    redFlags: [
      "Lab name not findable in any accreditation registry",
      "Lab website is a blank page or clearly templated",
      "COA says 'in-house testing' without named external lab",
      "Accreditation listed but scope doesn't cover analytical chemistry",
    ],
    nexphoria: "Nexphoria uses Janoshik Analytical (Czech Republic, ISO 17025 accredited) and Freedom Diagnostics as independent third-party testing partners. Both labs are verifiable in public accreditation registries.",
  },
  {
    step: 2,
    title: "Match the Lot Number to Your Vial",
    anchor: "lot-number",
    icon: "🔢",
    what: "Every COA must include a lot number (also called batch number) that exactly matches the lot number printed on your vial label.",
    why: "The lot number is the link between the physical compound in your vial and the specific batch that was tested. A COA without a matching lot number is not a COA for your compound — it could be from a different batch, a different product, or fabricated entirely.",
    howTo: [
      "Locate the lot number on the COA header (often labeled 'Lot No.', 'Batch No.', or 'Catalogue/Lot').",
      "Compare it character-by-character to the lot number on your vial label or packing slip.",
      "If purchasing online: request the COA before ordering; the lot number should be specific, not a generic 'Sample COA'.",
      "Keep the vial label and COA together in your lab notebook — document the match on receipt.",
    ],
    redFlags: [
      "Generic COA with no lot number (or 'N/A')",
      "COA lot number doesn't match vial label",
      "Vendor provides same COA PDF for multiple orders months apart (same lot number should not ship indefinitely)",
      "COA lot number ends in '000' or is suspiciously round — may be a fabricated placeholder",
    ],
    nexphoria: "Each Nexphoria vial is labeled with its specific lot number. The COA delivered with your order (or viewable via the /coa/ pages for top compounds) lists the matching lot, analyst signature, and test date.",
  },
  {
    step: 3,
    title: "Verify HPLC Chromatogram Data",
    anchor: "hplc",
    icon: "📊",
    what: "The COA must include a real HPLC (High-Performance Liquid Chromatography) chromatogram showing your compound's purity trace, not just a purity percentage number.",
    why: "HPLC purity by peak area (%) is the industry standard for peptide purity assessment. A percentage number alone is trivially fabricated. The chromatogram is the actual scientific record — it shows the separation profile, integration boundaries, and relative peak areas. A legitimate lab provides the full trace.",
    howTo: [
      "Look for an actual chromatogram image or data table — UV absorbance (mAU or Absorbance Units) plotted vs. time (minutes).",
      "The main compound peak should dominate the chromatogram. Purity is calculated as: main peak area ÷ sum of all peak areas × 100%.",
      "Check that the retention time (RT) is documented in the method description or data table. RT should be consistent across batches for the same compound.",
      "Verify the UV detection wavelength is stated — 214 nm is standard for peptide bond detection (amide chromophore). Some labs also use 220 nm or 254 nm.",
      "Check that column specifications are listed (C18 or C8 reversed-phase column, particle size, dimensions, gradient program).",
    ],
    redFlags: [
      "Purity % with no chromatogram (single number only)",
      "Chromatogram shows multiple large peaks all labeled as the compound",
      "No RT documented — impossible to reproduce or verify",
      "Purity listed as '100%' — impossible for any real sample; always some background signal",
      "Chromatogram image is very low resolution or clearly screenshot from another document",
    ],
    nexphoria: "All Nexphoria COAs include full RP-HPLC chromatograms with retention time, peak area table, and method specifications (C18 column, 214 nm UV detection, gradient elution). Purity is calculated as main peak area percentage.",
  },
  {
    step: 4,
    title: "Confirm Mass Spectrometry (MS) Identity",
    anchor: "mass-spec",
    icon: "⚖️",
    what: "A legitimate COA includes mass spectrometry (MS) data confirming the molecular identity of the compound — not just its purity. This is the gold standard identity confirmation.",
    why: "HPLC purity tells you how much of the main component is present. MS tells you what that component actually is. A high-purity peak that is not the stated compound is a useless (or dangerous) result. ESI-MS or MALDI-TOF MS provides a molecular mass fingerprint that should match the theoretical monoisotopic or average molecular weight.",
    howTo: [
      "Find the MS data section of the COA. It should show observed m/z values and the charge state (z) for each ion.",
      "For ESI-MS: calculate the neutral molecular mass from the m/z value using the formula: M = (m/z × z) − (z × 1.008). Example: [M+2H]²⁺ at m/z 502.3 → M = (502.3 × 2) − (2 × 1.008) = 1002.6 Da.",
      "Compare the observed mass to the theoretical molecular weight in the COA. Acceptable mass accuracy: ±0.01% for ESI-MS (a 1000 Da peptide should match within ±0.1 Da).",
      "Check that multiply-charged ions are present for larger peptides (>1500 Da). Semaglutide (4113 Da) will typically show [M+4H]⁴⁺, [M+5H]⁵⁺, and [M+6H]⁶⁺ ions.",
      "MALDI-TOF is also acceptable — it gives average molecular mass with wider tolerance (±0.1% typical).",
    ],
    redFlags: [
      "No MS data at all (HPLC only COA — acceptable for some grades but less rigorous)",
      "MS shows a major ion that does not match the theoretical mass of the stated compound",
      "Only a single charge state shown for a large peptide (may indicate truncated or incomplete sequence)",
      "Mass listed as 'molecular weight: confirmed' with no actual m/z values",
    ],
    nexphoria: "Nexphoria COAs include ESI-MS data with observed [M+H]⁺ and multiply-charged ion m/z values, calculated neutral mass, and theoretical MW comparison. Full MS spectra are available on request for top compounds.",
  },
  {
    step: 5,
    title: "Understand LAL Endotoxin Values",
    anchor: "endotoxin",
    icon: "🧪",
    what: "The COA should include a Limulus Amebocyte Lysate (LAL) endotoxin test result for any compound intended for in vivo research use. Endotoxin contamination causes systemic inflammatory response that confounds virtually all rodent research endpoints.",
    why: "Bacterial endotoxins (lipopolysaccharides, LPS) are shed from gram-negative bacteria during fermentation and synthesis. Even trace amounts (sub-nanogram levels) activate Toll-like receptor 4 (TLR4), triggering inflammatory cascades that obliterate clean results in inflammation, immune, neurological, and metabolic studies. The LAL test is the FDA-recognized gold standard for endotoxin detection.",
    howTo: [
      "Look for an endotoxin result expressed in EU/mg (Endotoxin Units per milligram of peptide). Acceptable threshold for in vivo rodent research: <1 EU/mg (most guidelines) or <5 EU/mg (less stringent standards).",
      "For highly sensitive studies (neurological, inflammatory, immune endpoints), target <0.1 EU/mg.",
      "Calculate the per-dose endotoxin load: (dose in mg) × (EU/mg result) = EU injected. Compare to FDA's recommended maximum: 5 EU/kg body weight for parenteral administration in humans. Scale appropriately for rodents (mice: ~25g → 0.125 EU maximum per injection at 5 EU/kg threshold).",
      "Verify that LAL method is specified (gel clot, turbidimetric, or chromogenic kinetic). Chromogenic kinetic is most sensitive.",
      "If the COA lists 'endotoxin: pass' without the actual value in EU/mg, request the raw value from the supplier.",
    ],
    redFlags: [
      "No endotoxin data on a COA for injectable research compounds",
      "Endotoxin listed as 'pass' without EU/mg value",
      "Endotoxin >10 EU/mg for injectable compound",
      "LAL test dated years ago — endotoxin testing should be lot-specific and recent",
    ],
    nexphoria: "All Nexphoria in vivo-grade compounds are tested for endotoxin via LAL assay. Target: <1 EU/mg. Values are lot-specific and listed on the COA. For highly sensitive immune or neurological research protocols, contact our research support team for additional endotoxin data.",
  },
  {
    step: 6,
    title: "Check Analyst Signature & Document Authenticity",
    anchor: "signature",
    icon: "✍️",
    what: "A legitimate COA is a controlled document signed (physically or electronically) by a qualified analyst and approved by a QA/QC manager. It should not be a generic template.",
    why: "Document control is a core component of ISO 17025 laboratory quality management. A COA without analyst attribution is not a traceable quality document — it's marketing material. The signature, date, and QA review create an auditable record that the tests were actually performed.",
    howTo: [
      "Look for a named analyst or initials in the 'Tested by' or 'Analyst' field.",
      "Look for a QA/QC manager or director signature or approval stamp.",
      "Verify the test date is realistic — typically 2-8 weeks before the product was available for sale.",
      "Check that the document has a document number or revision number — standard in quality-controlled labs.",
      "For extra verification: contact the lab directly with the COA lot number and ask if they can confirm it's in their records. Legitimate labs can do this quickly.",
    ],
    redFlags: [
      "No analyst name or signature",
      "Test date is the same as or after the product ship date (impossible if testing was done properly)",
      "Document shows no revision control, no document number",
      "COA template clearly reused — same date for different products from the same vendor",
      "Lab refuses to confirm when contacted directly",
    ],
    nexphoria: "All Nexphoria COAs include the testing analyst name, QC review sign-off, issue date, and document control number. You can verify any Nexphoria COA by contacting research@nexphoria.com with the lot number.",
  },
];

const QUICK_CHECKLIST = [
  { item: "Lab name visible and searchable in ISO 17025 registry", critical: true },
  { item: "Lot number on COA matches lot number on vial label", critical: true },
  { item: "HPLC chromatogram present (not just a % number)", critical: true },
  { item: "HPLC purity ≥98% (≥99% for pharmaceutical-grade)", critical: true },
  { item: "Retention time documented with column/method specs", critical: false },
  { item: "MS data present with m/z values and charge states", critical: true },
  { item: "Observed mass matches theoretical molecular weight (±0.1 Da for <1000 Da peptides)", critical: true },
  { item: "LAL endotoxin result in EU/mg (not just 'pass')", critical: true },
  { item: "Endotoxin <1 EU/mg for in vivo research use", critical: false },
  { item: "Analyst name and/or QA signature present", critical: false },
  { item: "Test date precedes product availability by ≥1 week", critical: false },
  { item: "Document control number or revision number visible", critical: false },
];

export default function COAVerificationGuidePage() {
  return (
    <main className="bg-zinc-950 min-h-screen text-white">
      {/* Hero */}
      <section className="bg-zinc-900 border-b border-white/10 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Guides", href: "/resources" },
              { label: "COA Verification" },
            ]}
            variant="dark"
            className="mb-6"
          />
          <p className="text-[#d4af37] text-xs font-semibold tracking-[0.15em] uppercase mb-4">
            Quality &amp; Testing Guide
          </p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            How to Verify a Certificate of Analysis
          </h1>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
            A step-by-step guide to authenticating peptide COAs: checking ISO 17025 lab
            accreditation, matching lot numbers, reading HPLC chromatograms, confirming
            molecular mass via MS data, and interpreting LAL endotoxin results.
          </p>
          {/* Stats strip */}
          <div className="flex flex-wrap gap-6 text-sm text-white/60">
            <span>
              <span className="text-white font-semibold">6</span> verification steps
            </span>
            <span>
              <span className="text-white font-semibold">12-point</span> quick checklist
            </span>
            <span>
              <span className="text-white font-semibold">~12 min</span> read
            </span>
          </div>
        </div>
      </section>

      {/* Jump nav */}
      <section className="border-b border-white/10 bg-zinc-900/40 py-4 px-4 sticky top-0 z-20 backdrop-blur-md">
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <div className="flex gap-3 text-xs font-medium whitespace-nowrap">
            {VERIFICATION_STEPS.map((s) => (
              <a
                key={s.anchor}
                href={`#${s.anchor}`}
                className="text-white/50 hover:text-[#d4af37] transition-colors py-1 px-2 rounded"
              >
                Step {s.step}: {s.title.split(":")[0].replace(/^Step \d+: /, "")}
              </a>
            ))}
            <a
              href="#checklist"
              className="text-white/50 hover:text-[#d4af37] transition-colors py-1 px-2 rounded"
            >
              Quick Checklist
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-amber-950/30 border border-amber-700/40 rounded-xl p-6 mb-10">
          <h2 className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-2">
            Why This Matters
          </h2>
          <p className="text-white/80 text-sm leading-relaxed">
            The research peptide market is largely unregulated. Any vendor can publish a COA — the
            document itself proves nothing. What matters is whether the COA was produced by a real,
            accredited laboratory using validated methods, for the specific lot you received. This
            guide teaches you to verify that chain of evidence in under 10 minutes.
          </p>
        </div>

        <div className="prose prose-invert max-w-none mb-10">
          <p className="text-white/70 text-base leading-relaxed">
            A Certificate of Analysis (COA) is a quality assurance document that reports the results
            of specific analytical tests conducted on a lot of compound. For research peptides, the
            minimum COA should include purity by HPLC, identity by mass spectrometry, and endotoxin
            by LAL assay. However, the existence of a COA does not guarantee its legitimacy. COAs
            can be fabricated, copy-pasted from other products, or produced by non-accredited labs
            using unvalidated methods.
          </p>
          <p className="text-white/70 text-base leading-relaxed">
            The six-step verification process below gives you the tools to distinguish a real,
            traceable COA from a marketing document. You do not need laboratory expertise — the
            checks described here can be performed in minutes using publicly available accreditation
            registries and basic analytical chemistry knowledge.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="space-y-16">
          {VERIFICATION_STEPS.map((step, idx) => (
            <div
              key={step.anchor}
              id={step.anchor}
              className="scroll-mt-24"
            >
              {/* Step header */}
              <div className="flex items-start gap-5 mb-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center">
                  <span className="text-[#d4af37] font-bold text-lg">{step.step}</span>
                </div>
                <div>
                  <p className="text-[#d4af37] text-xs font-semibold tracking-[0.15em] uppercase mb-1">
                    Step {step.step} of {VERIFICATION_STEPS.length}
                  </p>
                  <h2 className="text-2xl font-bold tracking-tight">{step.title}</h2>
                </div>
              </div>

              {/* What / Why */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-zinc-900 border border-white/10 rounded-xl p-5">
                  <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">
                    What to Check
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed">{step.what}</p>
                </div>
                <div className="bg-zinc-900 border border-white/10 rounded-xl p-5">
                  <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-2">
                    Why It Matters
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed">{step.why}</p>
                </div>
              </div>

              {/* How to verify */}
              <div className="bg-zinc-900 border border-white/10 rounded-xl p-6 mb-6">
                <p className="text-white/50 text-xs font-semibold uppercase tracking-wider mb-4">
                  How to Verify
                </p>
                <ol className="space-y-3">
                  {step.howTo.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-white/75 leading-relaxed">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] text-xs font-bold">
                        {i + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Red flags */}
              <div className="bg-red-950/20 border border-red-700/30 rounded-xl p-5 mb-6">
                <p className="text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
                  🚨 Red Flags
                </p>
                <ul className="space-y-2">
                  {step.redFlags.map((flag, i) => (
                    <li key={i} className="flex gap-2 text-sm text-red-200/80 leading-relaxed">
                      <span className="text-red-500 flex-shrink-0 mt-0.5">✕</span>
                      <span>{flag}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nexphoria note */}
              <div className="bg-emerald-950/20 border border-emerald-700/30 rounded-xl p-5">
                <p className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  ✓ How Nexphoria Does This
                </p>
                <p className="text-white/70 text-sm leading-relaxed">{step.nexphoria}</p>
              </div>

              {idx < VERIFICATION_STEPS.length - 1 && (
                <div className="mt-12 border-b border-white/10" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Quick Checklist */}
      <section id="checklist" className="scroll-mt-24 bg-zinc-900 border-y border-white/10 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#d4af37] text-xs font-semibold tracking-[0.15em] uppercase mb-3">
            Quick Reference
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
            12-Point COA Verification Checklist
          </h2>
          <p className="text-white/60 text-sm mb-8">
            Use this checklist when evaluating any peptide COA. Items marked{" "}
            <span className="text-red-400 font-semibold">critical</span> are disqualifying if failed.
          </p>

          <div className="space-y-3">
            {QUICK_CHECKLIST.map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-4 p-4 rounded-xl border ${
                  item.critical
                    ? "bg-zinc-800/60 border-white/15"
                    : "bg-zinc-900/60 border-white/8"
                }`}
              >
                <div
                  className={`flex-shrink-0 w-5 h-5 rounded border flex items-center justify-center ${
                    item.critical ? "border-[#d4af37]/60" : "border-white/20"
                  }`}
                >
                  {/* Checkbox visual */}
                </div>
                <span className="text-sm text-white/80 flex-1 leading-relaxed">{item.item}</span>
                {item.critical && (
                  <span className="flex-shrink-0 text-xs font-semibold text-red-400 uppercase tracking-wider">
                    Critical
                  </span>
                )}
              </div>
            ))}
          </div>

          <p className="text-white/40 text-xs mt-6 leading-relaxed">
            A COA that fails any critical item should be treated as unverified. Contact the supplier
            for clarification or an updated document before using the compound in research.
          </p>
        </div>
      </section>

      {/* Common COA Types section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-[#d4af37] text-xs font-semibold tracking-[0.15em] uppercase mb-3">
          Reference
        </p>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
          COA Quality Tiers
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              tier: "Minimal",
              color: "border-white/15 bg-zinc-900",
              badge: "text-white/50",
              tests: ["HPLC purity (% only, no chromatogram)", "MW confirmation"],
              verdict: "Not acceptable for serious research. No chromatogram means purity cannot be independently verified.",
              suitable: false,
            },
            {
              tier: "Standard",
              color: "border-amber-700/30 bg-amber-950/10",
              badge: "text-amber-400",
              tests: [
                "HPLC purity with chromatogram + RT",
                "ESI-MS identity confirmation",
                "Analyst signature",
                "Lot number tracking",
              ],
              verdict: "Acceptable for in vitro cell culture work. Sufficient for most biochemistry and cell biology protocols.",
              suitable: true,
            },
            {
              tier: "Full Analytical",
              color: "border-emerald-700/30 bg-emerald-950/10",
              badge: "text-emerald-400",
              tests: [
                "HPLC with chromatogram, RT, column specs",
                "ESI-MS with full ion series",
                "LAL endotoxin (EU/mg value)",
                "Karl Fischer water content",
                "Residual solvents (if applicable)",
                "ISO 17025 accredited lab",
                "Analyst + QA sign-off",
              ],
              verdict: "Required for in vivo rodent work, especially immune, inflammatory, or neurological endpoints where endotoxin confounds are critical.",
              suitable: true,
            },
          ].map((tier) => (
            <div key={tier.tier} className={`rounded-xl border p-6 ${tier.color}`}>
              <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${tier.badge}`}>
                {tier.tier}
              </p>
              <ul className="space-y-1.5 mb-5 mt-3">
                {tier.tests.map((t, i) => (
                  <li key={i} className="flex gap-2 text-xs text-white/70 leading-relaxed">
                    <span className={tier.suitable ? "text-emerald-500" : "text-white/30"}>
                      {tier.suitable ? "✓" : "·"}
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <p className="text-white/50 text-xs leading-relaxed border-t border-white/10 pt-4">
                {tier.verdict}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Resources */}
      <section className="bg-zinc-900 border-y border-white/10 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#d4af37] text-xs font-semibold tracking-[0.15em] uppercase mb-3">
            Related Resources
          </p>
          <h2 className="text-2xl font-bold tracking-tight mb-8">
            Continue Your Research
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                title: "Purity Checker",
                desc: "Look up HPLC/MS reference data for 28 research compounds.",
                href: "/tools/purity-checker",
                label: "Tool",
              },
              {
                title: "Sample COA Library",
                desc: "View full COA documents for top 6 compounds with annotated chromatograms.",
                href: "/coa/bpc-157",
                label: "COA",
              },
              {
                title: "Peptide Glossary",
                desc: "Definitions for HPLC, LAL, ISO 17025, EU/mg, and 47 more terms.",
                href: "/guides/peptide-glossary",
                label: "Guide",
              },
              {
                title: "Peptide Stability Checker",
                desc: "Check degradation risk, shelf life, and storage requirements per compound.",
                href: "/tools/peptide-stability-checker",
                label: "Tool",
              },
              {
                title: "FAQ: Purity & Testing",
                desc: "Common buyer questions about COA verification and lab testing answered.",
                href: "/faq",
                label: "FAQ",
              },
              {
                title: "Peptide Stability Guide",
                desc: "Why lyophilization matters, how to interpret visual quality indicators.",
                href: "/blog/the-peptide-stability-problem-why-lyophilization-matters",
                label: "Article",
              },
            ].map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group block bg-zinc-800/50 hover:bg-zinc-800 border border-white/10 hover:border-[#d4af37]/40 rounded-xl p-5 transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#d4af37] text-xs font-semibold uppercase tracking-wider">
                    {r.label}
                  </span>
                </div>
                <h3 className="font-semibold text-sm mb-1 group-hover:text-[#d4af37] transition-colors">
                  {r.title}
                </h3>
                <p className="text-white/50 text-xs leading-relaxed">{r.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
          <p className="text-white/40 text-xs font-semibold uppercase tracking-wider mb-3">
            Research Use Only Disclaimer
          </p>
          <p className="text-white/50 text-xs leading-relaxed">
            All information in this guide is intended for educational purposes for qualified
            researchers only. Nexphoria products are sold exclusively for in vitro and preclinical in
            vivo research use. They are not approved by the FDA for human use, not intended for
            diagnosis or treatment of any condition, and must not be administered to humans. This
            COA verification guide does not constitute legal, regulatory, or compliance advice. For
            GMP pharmaceutical manufacturing, consult a qualified regulatory affairs professional.
          </p>
        </div>
      </section>
    </main>
  );
}
