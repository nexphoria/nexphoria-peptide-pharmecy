import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Peptide Reconstitution Guide: Solvents, Technique & Protocol | Nexphoria",
  description:
    "A complete written guide to peptide reconstitution: choosing solvents (BAC water, sterile water, acetic acid, DMSO), injection technique, concentration math with worked examples, multi-use vials, labeling, and disposal.",
  openGraph: {
    title: "Peptide Reconstitution Guide — Nexphoria Research",
    description:
      "Comprehensive reconstitution protocol for research peptides: solvent selection, technique, concentration calculations, multi-use vial strategy, labeling, and disposal.",
    url: "https://nexphoria.com/guides/reconstitution",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peptide Reconstitution Guide — Nexphoria",
    description:
      "How to properly reconstitute research peptides. Solvent selection, technique, concentration math, and storage after mixing.",
  },
};

const SOLVENT_TABLE = [
  {
    solvent: "Bacteriostatic Water (0.9% benzyl alcohol)",
    bestFor: "Most research peptides: BPC-157, TB-500, GHRPs, GLP-1 analogs, GHK-Cu",
    pros: ["Multi-use vials (up to 4–6 weeks refrigerated)", "Benzyl alcohol inhibits microbial growth", "Physiologically compatible", "Commercially available, sterile"],
    cons: ["Not suitable for cells sensitive to benzyl alcohol", "Benzyl alcohol can be irritating at high volumes in vivo"],
    recommendation: "Default choice for most injectable research protocols.",
  },
  {
    solvent: "Sterile Water for Injection (WFI)",
    bestFor: "Single-use aliquots, cell culture (with dilution), sensitive compounds",
    pros: ["Purest option — no preservatives or additives", "Compatible with all cell culture systems", "Predictable buffer behavior"],
    cons: ["No preservative — single-use only, use within 5–7 days refrigerated", "Microbial contamination risk if vial re-entered", "More vials needed for research programs"],
    recommendation: "Use when BAC water preservative is a study variable or when aliquoting for freeze storage.",
  },
  {
    solvent: "0.1% Acetic Acid",
    bestFor: "IGF-1, EGF, HGH, GH, peptides with cysteine residues, hydrophobic peptides",
    pros: ["Stabilizes acidic peptides that precipitate at neutral pH", "Standard for IGF-1 and growth hormone reconstitution", "Prevents aggregation of hydrophobic sequences"],
    cons: ["Must be diluted in PBS or buffer before cell culture use (acidity is cytotoxic at high concentration)", "Not suitable for basic peptides — check peptide pI"],
    recommendation: "Required for specific peptides like IGF-1. Check whether your peptide precipitates at pH 7 before choosing.",
  },
  {
    solvent: "DMSO (Dimethyl Sulfoxide)",
    bestFor: "Poorly water-soluble peptides, cyclic peptides, some non-peptide compounds",
    pros: ["High solubilizing power for hydrophobic molecules", "Penetration enhancer for topical protocols"],
    cons: ["Cytotoxic above ~0.5% v/v in cell culture — must dilute extensively", "Strong carrier effect — alters membrane permeability", "Taste/odor issues with in vivo use", "Reacts with some plastic labware (use glass)"],
    recommendation: "Last resort for poorly soluble compounds only. Dilute to <0.1% DMSO in final working solution. Avoid for standard peptides.",
  },
  {
    solvent: "PBS (Phosphate-Buffered Saline)",
    bestFor: "Direct cell culture use; dilution of acetic acid stock solutions",
    pros: ["Physiological pH and osmolarity", "Cell-compatible", "Standard lab reagent"],
    cons: ["No preservative — single-use vials only", "Phosphate can precipitate with calcium-containing buffers"],
    recommendation: "Good for diluting peptide stocks before cell culture. Not ideal as primary reconstitution solvent for lyophilized vials.",
  },
];

const WORKED_EXAMPLES = [
  {
    title: "BPC-157, 5 mg vial → 500 mcg/mL working solution",
    steps: [
      "Target concentration: 500 mcg/mL",
      "Vial content: 5 mg = 5,000 mcg",
      "Volume needed: 5,000 mcg ÷ 500 mcg/mL = 10 mL BAC water",
      "Add 10 mL bacteriostatic water to the 5 mg vial",
      "Each 1 mL of solution = 500 mcg BPC-157",
      "Each 0.1 mL (10 units on insulin syringe) = 50 mcg",
      "Doses per vial: 5,000 mcg ÷ 50 mcg per dose = 100 doses at 50 mcg",
    ],
    note: "Use 1 mL insulin syringes (100 IU/mL = 100 units). Inject 10 units per 50 mcg dose.",
  },
  {
    title: "Semaglutide, 2 mg vial → 0.5 mg/mL working solution",
    steps: [
      "Target concentration: 0.5 mg/mL",
      "Vial content: 2 mg",
      "Volume needed: 2 mg ÷ 0.5 mg/mL = 4 mL BAC water",
      "Add 4 mL bacteriostatic water to the 2 mg vial",
      "Each 1 mL = 0.5 mg semaglutide",
      "Each 0.2 mL (20 units on insulin syringe) = 0.1 mg",
      "Doses per vial: 2 mg ÷ 0.1 mg per dose = 20 doses at 0.1 mg",
    ],
    note: "Common research starting dose is 0.1–0.25 mg. Titrate based on study protocol.",
  },
  {
    title: "TB-500, 10 mg vial → 2 mg/mL working solution",
    steps: [
      "Target concentration: 2 mg/mL",
      "Vial content: 10 mg = 10,000 mcg",
      "Volume needed: 10 mg ÷ 2 mg/mL = 5 mL BAC water",
      "Add 5 mL bacteriostatic water to the 10 mg vial",
      "Each 1 mL = 2 mg = 2,000 mcg TB-500",
      "Each 0.1 mL = 200 mcg",
      "Doses per vial: 10 mg ÷ 2 mg per dose = 5 doses at 2 mg",
    ],
    note: "TB-500 dissolves readily. Gently swirl — the lyophilized cake should fully dissolve within 60 seconds.",
  },
  {
    title: "GHK-Cu, 100 mg vial → 10 mg/mL stock + cell culture dilution",
    steps: [
      "Reconstitution: 100 mg ÷ 10 mg/mL = 10 mL sterile water",
      "Stock concentration: 10 mg/mL = 10,000 mcg/mL = ~24.8 mM (MW 403.9)",
      "For cell culture (target 100 nM working concentration):",
      "  Step 1: 10 mg/mL → 0.1 mg/mL intermediate (1:100 dilution in PBS)",
      "  Step 2: 0.1 mg/mL → target nM in culture medium (serial dilution)",
      "  Final: add diluted stock to cell culture medium at 0.1–1% v/v max",
      "Aliquot the 10 mg/mL stock into 200 mcL single-use tubes before freezing",
    ],
    note: "For GHK-Cu cell culture work, prepare fresh dilutions from frozen stock each experiment. The copper complex is stable frozen but avoid repeated freeze-thaw.",
  },
];

export default function ReconstitutionGuidePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#111] to-[#0a0a0a] pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Breadcrumb
            variant="dark"
            className="mb-6"
            items={[
              { label: "Home", href: "/" },
              { label: "Guides" },
              { label: "Reconstitution Guide" },
            ]}
          />
          <p className="text-xs tracking-widest uppercase text-[#C9A84C] mb-4 font-medium">
            Research Guides
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
            Peptide Reconstitution:<br />
            The Complete Protocol
          </h1>
          <p className="text-[#aaa] text-lg leading-relaxed mb-8">
            A step-by-step guide to reconstituting research peptides correctly — solvent selection,
            injection technique, concentration calculations, multi-use vial strategy, labeling,
            and safe disposal. Built for researchers who need to get it right.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="bg-[#1a1a1a] border border-[#333] rounded px-3 py-1.5 text-[#737373]">Solvent Selection</span>
            <span className="bg-[#1a1a1a] border border-[#333] rounded px-3 py-1.5 text-[#737373]">Concentration Math</span>
            <span className="bg-[#1a1a1a] border border-[#333] rounded px-3 py-1.5 text-[#737373]">Injection Technique</span>
            <span className="bg-[#1a1a1a] border border-[#333] rounded px-3 py-1.5 text-[#737373]">Multi-Use Strategy</span>
            <span className="bg-[#1a1a1a] border border-[#333] rounded px-3 py-1.5 text-[#737373]">Storage After Mixing</span>
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="border-b border-[#1a1a1a] sticky top-0 z-10 bg-[#0a0a0a]/95 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto px-6 py-3 flex gap-6 overflow-x-auto text-sm">
          {[
            { href: "#solvents", label: "Solvents" },
            { href: "#technique", label: "Technique" },
            { href: "#math", label: "Concentration Math" },
            { href: "#examples", label: "Worked Examples" },
            { href: "#multiuse", label: "Multi-Use Vials" },
            { href: "#labeling", label: "Labeling" },
            { href: "#disposal", label: "Disposal" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-[#666666] hover:text-[#C9A84C] transition-colors whitespace-nowrap"
            >
              {label}
            </a>
          ))}
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-16">

        {/* Overview */}
        <section>
          <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-lg p-5 mb-8">
            <p className="text-[#C9A84C] font-semibold text-sm mb-2">What is reconstitution?</p>
            <p className="text-[#737373] text-sm leading-relaxed">
              Reconstitution is the process of dissolving a lyophilized (freeze-dried) peptide powder
              in a liquid solvent to create an injectable or working solution. Done correctly, it
              preserves compound integrity and ensures accurate dosing. Done incorrectly, it introduces
              contamination, degrades the peptide, or produces inaccurate concentrations.
            </p>
          </div>
          <p className="text-[#aaa] leading-relaxed mb-4">
            Lyophilized peptides are stable powders — often visually indistinguishable regardless of
            compound. The process of converting them into a working solution requires attention to
            four variables: solvent choice, technique, concentration math, and storage. Each of these
            affects compound integrity in ways that directly impact experimental validity.
          </p>
          <p className="text-[#aaa] leading-relaxed">
            This guide covers each variable in depth, with worked concentration calculations for
            common Nexphoria catalog compounds.
          </p>
        </section>

        {/* Solvent Selection */}
        <section id="solvents">
          <h2 className="text-2xl font-bold text-white tracking-tight mb-3">
            Choosing Your Solvent
          </h2>
          <p className="text-[#aaa] leading-relaxed mb-8">
            Solvent choice is the single most consequential decision in reconstitution. The wrong
            solvent can cause precipitation, degradation, or cytotoxicity in your experimental system.
            The following table covers the five solvents used in peptide research, their appropriate
            use cases, and trade-offs.
          </p>

          <div className="space-y-6">
            {SOLVENT_TABLE.map((s, i) => (
              <div key={i} className="border border-[#222] rounded-lg overflow-hidden">
                <div className="bg-[#111] px-5 py-4 border-b border-[#222]">
                  <h3 className="text-white font-semibold text-base">{s.solvent}</h3>
                  <p className="text-[#666666] text-xs mt-1">Best for: {s.bestFor}</p>
                </div>
                <div className="px-5 py-4 grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#C9A84C] mb-2 font-medium">Advantages</p>
                    <ul className="space-y-1">
                      {s.pros.map((pro, j) => (
                        <li key={j} className="text-[#aaa] text-sm flex items-start gap-2">
                          <span className="text-green-400 mt-0.5 flex-shrink-0">+</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-red-400/70 mb-2 font-medium">Limitations</p>
                    <ul className="space-y-1">
                      {s.cons.map((con, j) => (
                        <li key={j} className="text-[#aaa] text-sm flex items-start gap-2">
                          <span className="text-red-400 mt-0.5 flex-shrink-0">−</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-[#0f0f0f] px-5 py-3 border-t border-[#222]">
                  <p className="text-[#C9A84C] text-sm">
                    <span className="font-medium">Recommendation: </span>
                    {s.recommendation}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-[#1a1a1a] rounded-lg p-5">
            <p className="text-white font-semibold text-sm mb-2">Quick Reference: Solvent Decision Tree</p>
            <ul className="space-y-2 text-sm text-[#aaa]">
              <li>→ <strong className="text-white">Standard injectable peptide</strong> (BPC-157, TB-500, GHRPs, GLP-1 analogs): Use <span className="text-[#C9A84C]">bacteriostatic water</span></li>
              <li>→ <strong className="text-white">Cell culture or single-use</strong>: Use <span className="text-[#C9A84C]">sterile water</span>, then dilute in PBS/medium</li>
              <li>→ <strong className="text-white">IGF-1, EGF, growth hormone</strong>: Use <span className="text-[#C9A84C]">0.1% acetic acid</span>, dilute in PBS before use</li>
              <li>→ <strong className="text-white">Peptide won't dissolve in water</strong>: Try <span className="text-[#C9A84C]">0.1% acetic acid</span> or DMSO as last resort</li>
              <li>→ <strong className="text-white">GHK-Cu</strong>: Use <span className="text-[#C9A84C]">sterile water</span> (water-soluble; no organic solvent needed)</li>
            </ul>
          </div>
        </section>

        {/* Technique */}
        <section id="technique">
          <h2 className="text-2xl font-bold text-white tracking-tight mb-3">
            Reconstitution Technique
          </h2>
          <p className="text-[#aaa] leading-relaxed mb-8">
            Even with the correct solvent, poor injection technique can introduce contamination or
            degrade the peptide through mechanical shear. The following steps apply to all lyophilized
            peptide vials.
          </p>

          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Equilibrate the vial to room temperature",
                body: "Remove the vial from the refrigerator or freezer and allow it to sit at room temperature for 5–10 minutes before opening. Opening a cold vial in a warm environment causes atmospheric moisture to condense inside the vial — introducing water directly onto the powder before you control the solvent volume. This is the most commonly skipped step.",
              },
              {
                step: "2",
                title: "Prepare your syringe and workspace",
                body: "Draw up the measured volume of solvent into a sterile syringe. Use a 21–23 gauge needle for ease of draw; you can switch to a smaller gauge (25–27 gauge) for injection. Wipe the rubber septum of both the solvent vial and the peptide vial with an isopropyl alcohol swab and allow to air-dry completely (20–30 seconds) before inserting the needle.",
              },
              {
                step: "3",
                title: "Inject solvent against the vial wall — not onto the powder",
                body: "This is the most important technical step. Direct the needle tip at an angle so the solvent stream hits the inner glass wall of the vial, then runs down to wet the peptide from the sides. Injecting directly onto the lyophilized powder creates a high-velocity liquid jet that can mechanically shear the peptide structure and causes foaming. A wall-directed injection minimizes mechanical stress and produces a cleaner reconstitution.",
                highlight: true,
              },
              {
                step: "4",
                title: "Swirl gently — never vortex",
                body: "After the solvent is fully added, hold the vial between your fingers and gently roll or swirl it in a circular motion. Allow the lyophilized cake to dissolve at its own rate — most standard peptides dissolve within 30–90 seconds. For larger peptides (>5 mg vials, larger sequences), gentle inversion 10–15 times over 2–3 minutes is appropriate. Vortexing creates vigorous mechanical agitation that generates foam and denatures larger peptide structures. Do not shake.",
              },
              {
                step: "5",
                title: "Inspect the solution",
                body: "A correctly reconstituted peptide solution should be clear to slightly opalescent, free of visible particles or undissolved material. Cloudiness can indicate precipitation, aggregation, or the wrong solvent choice. Color is compound-specific: GHK-Cu solutions are blue-violet; most peptides are colorless to pale yellow. If the solution remains cloudy after 3 minutes of gentle swirling, try adding a small additional volume of solvent and wait — do not heat.",
              },
              {
                step: "6",
                title: "Do not add pressure or release vacuum",
                body: "Research peptide vials are often under vacuum (as part of the lyophilization process). When inserting the needle of the solvent syringe, the vacuum will draw solvent in naturally — use this property. Do not force the plunger aggressively. For large volumes, insert a second venting needle (or 23g needle with no syringe) to equalize pressure, then add solvent with the primary syringe.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className={`rounded-lg p-5 border ${
                  item.highlight
                    ? "border-[#C9A84C]/40 bg-[#C9A84C]/5"
                    : "border-[#222] bg-[#0f0f0f]"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 flex items-center justify-center text-[#C9A84C] font-bold text-sm flex-shrink-0 mt-0.5">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    <p className="text-[#aaa] text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="bg-[#0f2010] border border-green-900/40 rounded-lg p-4">
              <p className="text-green-400 font-semibold text-sm mb-3">✓ Do</p>
              <ul className="space-y-1.5 text-sm text-[#aaa]">
                <li>Allow vial to reach room temperature first</li>
                <li>Wipe septum with IPA before each needle insertion</li>
                <li>Inject solvent against the vial wall</li>
                <li>Swirl gently in slow circles</li>
                <li>Use sterile technique throughout</li>
                <li>Label vial immediately after reconstitution</li>
              </ul>
            </div>
            <div className="bg-[#1a0a0a] border border-red-900/40 rounded-lg p-4">
              <p className="text-red-400 font-semibold text-sm mb-3">✗ Don&apos;t</p>
              <ul className="space-y-1.5 text-sm text-[#aaa]">
                <li>Open cold vials — condensation enters</li>
                <li>Inject solvent directly onto powder</li>
                <li>Vortex or shake vigorously</li>
                <li>Heat to dissolve</li>
                <li>Use tap water or non-sterile solvent</li>
                <li>Leave unlabeled reconstituted vials</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Concentration Math */}
        <section id="math">
          <h2 className="text-2xl font-bold text-white tracking-tight mb-3">
            Concentration Calculations
          </h2>
          <p className="text-[#aaa] leading-relaxed mb-8">
            The fundamental calculation is straightforward. The formula is:
          </p>

          <div className="bg-[#111] border border-[#C9A84C]/30 rounded-lg p-6 mb-8 text-center">
            <p className="text-[#666666] text-sm mb-2">The Core Formula</p>
            <p className="text-2xl font-mono text-[#C9A84C] font-bold">
              Volume (mL) = Amount (mg or mcg) ÷ Target Concentration (mg/mL or mcg/mL)
            </p>
            <p className="text-[#555] text-xs mt-3">
              Ensure your units are consistent. 1 mg = 1,000 mcg. 1 mL = 100 units on a 100IU/mL insulin syringe.
            </p>
          </div>

          <h3 className="text-white font-semibold text-lg mb-4">Unit Conversions</h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#222]">
                  <th className="text-left text-[#666666] font-medium py-2 pr-6">From</th>
                  <th className="text-left text-[#666666] font-medium py-2 pr-6">To</th>
                  <th className="text-left text-[#666666] font-medium py-2">Multiply by</th>
                </tr>
              </thead>
              <tbody className="text-[#aaa]">
                {[
                  ["milligrams (mg)", "micrograms (mcg)", "1,000"],
                  ["micrograms (mcg)", "milligrams (mg)", "0.001"],
                  ["milliliters (mL)", "Units (100 IU/mL syringe)", "100"],
                  ["Units (100 IU/mL syringe)", "milliliters (mL)", "0.01"],
                  ["mL (50 IU/mL syringe)", "Units", "50"],
                  ["mg/mL", "mcg/mL", "1,000"],
                ].map(([from, to, mult], i) => (
                  <tr key={i} className="border-b border-[#1a1a1a]">
                    <td className="py-2 pr-6">{from}</td>
                    <td className="py-2 pr-6">{to}</td>
                    <td className="py-2 text-[#C9A84C] font-mono">{mult}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-white font-semibold text-lg mb-4">Choosing a Working Concentration</h3>
          <p className="text-[#aaa] leading-relaxed mb-4">
            The target concentration you choose determines how much liquid you inject per dose.
            Practical constraints to consider:
          </p>
          <ul className="space-y-3 text-[#aaa] text-sm mb-6">
            <li className="flex items-start gap-3">
              <span className="text-[#C9A84C] flex-shrink-0 mt-0.5">→</span>
              <span><strong className="text-white">Injection volume for rodents</strong>: Subcutaneous injection volumes in mice should not exceed 0.5–1 mL; for rats, up to 2 mL SC. Higher concentrations reduce injection volume, which is preferable.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#C9A84C] flex-shrink-0 mt-0.5">→</span>
              <span><strong className="text-white">Measurable dose volume</strong>: You need enough volume to measure accurately with your syringe. A dose of 5 mcL is difficult to draw accurately; 50–200 mcL is manageable with insulin syringes.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#C9A84C] flex-shrink-0 mt-0.5">→</span>
              <span><strong className="text-white">Stability at concentration</strong>: Higher concentrations can increase aggregation risk for some larger peptides. If your compound becomes cloudy at high concentration, dilute and refrigerate rather than increasing solvent ratio.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#C9A84C] flex-shrink-0 mt-0.5">→</span>
              <span><strong className="text-white">Vial reuse</strong>: If multiple subjects will be dosed from one vial, a higher concentration means more doses per vial, reducing vial penetrations (contamination risk with each entry).</span>
            </li>
          </ul>
        </section>

        {/* Worked Examples */}
        <section id="examples">
          <h2 className="text-2xl font-bold text-white tracking-tight mb-3">
            Worked Examples
          </h2>
          <p className="text-[#aaa] leading-relaxed mb-8">
            Concrete step-by-step calculations for four common Nexphoria catalog compounds.
          </p>

          <div className="space-y-6">
            {WORKED_EXAMPLES.map((ex, i) => (
              <div key={i} className="border border-[#222] rounded-lg overflow-hidden">
                <div className="bg-[#111] px-5 py-4 border-b border-[#222]">
                  <h3 className="text-white font-semibold">{ex.title}</h3>
                </div>
                <div className="px-5 py-4">
                  <ol className="space-y-2">
                    {ex.steps.map((step, j) => (
                      <li key={j} className="text-[#aaa] text-sm flex items-start gap-3">
                        <span className="text-[#C9A84C] font-mono text-xs flex-shrink-0 mt-0.5 w-5">
                          {step.startsWith(" ") ? "" : `${j + 1}.`}
                        </span>
                        <span className={`font-mono text-xs leading-relaxed ${step.startsWith("  ") ? "text-[#666666] pl-4" : "text-[#737373]"}`}>
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                  {ex.note && (
                    <div className="mt-4 pt-4 border-t border-[#1a1a1a]">
                      <p className="text-[#C9A84C] text-xs font-medium mb-1">Note</p>
                      <p className="text-[#666666] text-xs">{ex.note}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-[#0a0a0a] border border-[#333] rounded-lg p-5">
            <p className="text-white font-semibold text-sm mb-3">Use the Reconstitution Calculator</p>
            <p className="text-[#aaa] text-sm mb-4">
              Prefer an interactive calculator? Enter your vial size, target concentration, and dose —
              the calculator handles the math and outputs BAC water volume, doses per vial, and volume per dose.
            </p>
            <Link
              href="/tools/reconstitution-calculator"
              className="inline-flex items-center gap-2 bg-[#C9A84C] text-black text-sm font-semibold px-4 py-2 rounded hover:bg-[#b8963e] transition-colors"
            >
              Open Calculator →
            </Link>
          </div>
        </section>

        {/* Multi-Use vs Single-Use */}
        <section id="multiuse">
          <h2 className="text-2xl font-bold text-white tracking-tight mb-3">
            Multi-Use vs. Single-Use Vial Strategy
          </h2>
          <p className="text-[#aaa] leading-relaxed mb-6">
            Once reconstituted, you must decide whether to use the vial across multiple doses
            (multi-use) or aliquot into single-use volumes before freezing. Each strategy has
            trade-offs.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border border-[#C9A84C]/30 rounded-lg p-5">
              <h3 className="text-[#C9A84C] font-semibold mb-3">Multi-Use Vial</h3>
              <p className="text-[#aaa] text-sm mb-3">
                Keep the reconstituted vial refrigerated at 4°C and draw doses from it over
                the stability window (3–4 weeks with BAC water; 5–7 days with sterile water).
              </p>
              <p className="text-white text-xs font-medium mb-2">Best when:</p>
              <ul className="space-y-1 text-[#666666] text-xs">
                <li>• BAC water (preservative) was used for reconstitution</li>
                <li>• Study protocol requires daily or frequent dosing</li>
                <li>• Total doses will be consumed within 3–4 weeks</li>
                <li>• Each vial entry uses a fresh needle and proper aseptic technique</li>
              </ul>
            </div>
            <div className="border border-[#444] rounded-lg p-5">
              <h3 className="text-white font-semibold mb-3">Aliquot and Freeze</h3>
              <p className="text-[#aaa] text-sm mb-3">
                After reconstitution, immediately divide the solution into single-dose or
                session-dose volumes in sterile microcentrifuge tubes and store at −20°C.
                Thaw one aliquot per use session.
              </p>
              <p className="text-white text-xs font-medium mb-2">Best when:</p>
              <ul className="space-y-1 text-[#666666] text-xs">
                <li>• Sterile water (no preservative) was used</li>
                <li>• Study spans more than 3–4 weeks</li>
                <li>• Compound is expensive or limited — each vial entry risks contamination</li>
                <li>• You need to run reproducible dose-matched sessions over long timelines</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#1a0a0a] border border-red-900/30 rounded-lg p-5">
            <p className="text-red-400 font-semibold text-sm mb-2">Critical: Avoid Repeated Freeze-Thaw Cycles</p>
            <p className="text-[#aaa] text-sm leading-relaxed">
              Each freeze-thaw cycle introduces ice crystal formation that can mechanically cleave
              peptide bonds and cause aggregation. For a peptide frozen in a large aliquot that is
              thawed and re-frozen 5 times, effective concentration can drop 15–30% through
              aggregation losses. Aliquot into single-use volumes <em>before</em> the first freeze.
              Thaw what you need; discard unused thawed solution at end of session.
            </p>
          </div>
        </section>

        {/* Labeling Protocol */}
        <section id="labeling">
          <h2 className="text-2xl font-bold text-white tracking-tight mb-3">
            Labeling Protocol
          </h2>
          <p className="text-[#aaa] leading-relaxed mb-6">
            Unlabeled reconstituted vials are a source of errors and safety risks. A complete label
            prevents dose errors, allows accurate stability tracking, and supports audit trails in
            formal research settings.
          </p>

          <div className="bg-[#111] border border-[#222] rounded-lg p-5 mb-6">
            <p className="text-white font-semibold text-sm mb-4">Minimum Label Contents</p>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-[#aaa]">
              {[
                { field: "Compound name", example: "BPC-157" },
                { field: "Lot number", example: "(from original vial label)" },
                { field: "Concentration", example: "500 mcg/mL" },
                { field: "Solvent used", example: "BAC water" },
                { field: "Reconstitution date", example: "2026-05-29" },
                { field: "Discard date", example: "2026-06-26 (4 weeks)" },
                { field: "Preparer initials", example: "C.Y." },
                { field: "Storage conditions", example: "4°C, protect from light" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between border-b border-[#1a1a1a] py-1.5">
                  <span className="text-[#666666]">{item.field}</span>
                  <span className="text-[#737373] font-mono text-xs">{item.example}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-[#aaa] text-sm leading-relaxed">
            For GLP printout labels, use a permanent marker rated for freezer use (standard ballpoint
            ink smears at −20°C). Parafilm over the label protects it in humid refrigerators. For
            amber vials or light-sensitive compounds (GHK-Cu, PT-141, Melanotan II), additionally
            wrap in aluminum foil.
          </p>
        </section>

        {/* Disposal */}
        <section id="disposal">
          <h2 className="text-2xl font-bold text-white tracking-tight mb-3">
            Safe Disposal
          </h2>
          <p className="text-[#aaa] leading-relaxed mb-6">
            Research peptide solutions and associated sharps require appropriate disposal. While
            specific regulations vary by jurisdiction and institution, the following represents
            standard best practices for responsible laboratory disposal.
          </p>

          <div className="space-y-4">
            {[
              {
                title: "Expired or unused reconstituted solution",
                body: "Peptide solutions past their stability window should not be used. For disposal, dilute significantly with water and dispose via sink drain (trace peptide concentrations are metabolically degraded in standard wastewater treatment). Do not pour concentrated solutions directly into drains in institutional settings — follow your institution's chemical waste policy.",
              },
              {
                title: "Sharps (needles, syringes)",
                body: "All needles and syringes used in the reconstitution process are sharps waste regardless of whether the compound is hazardous. Use an approved sharps container (puncture-resistant, labeled). Do not recap needles after use. Seal sharps containers when 3/4 full and dispose according to your local regulations (in the US: contact your municipal waste authority or use a mail-back sharps program).",
              },
              {
                title: "Empty lyophilized vials",
                body: "Empty glass vials that contained research peptides are not classified as hazardous waste in most jurisdictions. Residual peptide amounts are trace and biologically inert after standard lyophilization handling. Dispose as glass waste per your institution's policy, or in a puncture-resistant container if not using a dedicated glass waste stream.",
              },
              {
                title: "DMSO-containing solutions",
                body: "DMSO waste requires special handling because DMSO penetrates skin and can carry dissolved compounds with it. Do not pour DMSO waste solutions into standard drains in institutional settings. Collect in a labeled DMSO waste container and dispose as chemical waste.",
              },
              {
                title: "Animal research waste",
                body: "Bedding, tissues, and biological materials from animals receiving research peptides follow your institution's biological waste protocol. Most research peptides are catabolized to amino acids and do not pose secondary hazard in biological waste streams, but institutional policy governs.",
              },
            ].map((item, i) => (
              <div key={i} className="border border-[#222] rounded-lg p-4">
                <h3 className="text-white font-medium text-sm mb-2">{item.title}</h3>
                <p className="text-[#666666] text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Tools */}
        <section className="border-t border-[#1a1a1a] pt-12">
          <h2 className="text-xl font-bold text-white tracking-tight mb-6">
            Related Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Reconstitution Calculator",
                desc: "Interactive calculator: vial size → BAC water volume, doses per vial, volume per dose",
                href: "/tools/reconstitution-calculator",
              },
              {
                title: "BAC Water Guide",
                desc: "What bacteriostatic water is, why benzyl alcohol matters, and storage after mixing",
                href: "/tools/bac-water-guide",
              },
              {
                title: "Peptide Storage Guide",
                desc: "Temperature requirements per compound, freeze-thaw limits, container recommendations",
                href: "/guides/storage",
              },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group border border-[#222] rounded-lg p-4 hover:border-[#C9A84C]/40 transition-colors"
              >
                <h3 className="text-white font-medium text-sm mb-2 group-hover:text-[#C9A84C] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#666] text-xs leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="border-t border-[#1a1a1a] pt-8">
          <div className="bg-[#1a1a1a] rounded-lg p-5">
            <p className="text-[#666666] text-xs leading-relaxed">
              <strong className="text-[#aaa]">Research Use Only.</strong> All compounds supplied by
              Nexphoria are intended for laboratory research purposes only. They are not approved by
              the FDA for human or veterinary use and are not intended to diagnose, treat, cure, or
              prevent any disease or condition. This guide is provided for informational purposes
              only. Researchers are responsible for compliance with applicable institutional, local,
              state, and federal regulations governing the purchase, storage, use, and disposal of
              research chemicals.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
