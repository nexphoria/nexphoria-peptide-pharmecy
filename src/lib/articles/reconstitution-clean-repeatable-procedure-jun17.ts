import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "reconstitution-clean-repeatable-procedure",
  title: "Reconstitution: A Clean, Repeatable Procedure",
  description:
    "A lean, bench-ready protocol for reconstituting lyophilized peptides correctly every time — focused on sterile technique, repeatability, and the small habits that prevent contamination and dosing error.",
  category: "Handling & Storage",
  readMinutes: 7,
  publishedAt: "2026-06-17",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "callout",
      text: "Research Use Only. All protocols described in this article are for preclinical in vitro and in vivo research only. Not intended for human use.",
    },
    {
      type: "paragraph",
      text: "Reconstitution is the single most-repeated hands-on procedure in peptide research. Done identically every time, it is a non-event — five minutes of routine work that produces a reliable working solution. Done with small inconsistencies — a contaminated swab here, a shortcut on solvent injection angle there — it introduces variables that are silent, undetectable at the bench, and capable of invalidating data or degrading compound before the experiment begins.",
    },
    {
      type: "paragraph",
      text: "This article is not a conceptual overview of reconstitution chemistry. It is a repeatable procedure — written to be read once, understood, then followed without needing to think. The emphasis is on technique over theory: the specific physical habits that separate a clean reconstitution from one that quietly introduces error.",
    },
    {
      type: "heading",
      text: "Before You Open Anything: The Bench Setup",
    },
    {
      type: "paragraph",
      text: "Lay everything out before touching the peptide vial. You should not be reaching for items mid-procedure. Required at bench: lyophilized peptide vial (still sealed, at room temperature — never reconstitute cold), bacteriostatic water or appropriate diluent (see below), two insulin syringes (one for solvent draw, one spare), 70% isopropyl alcohol swabs, a clean surface or sterile mat, label tape and permanent marker, and a timer or phone.",
    },
    {
      type: "paragraph",
      text: "Temperature matters at the start. A vial taken directly from the freezer will have condensation form on the outside as it warms — that moisture has no effect on the powder, but it signals the vial is still cold. Cold lyophilized peptide reconstitutes poorly: dissolution is slower, clumping is more common, and some peptides form aggregates that do not fully resolve. Let the sealed vial reach room temperature before opening — 15 minutes on the bench is sufficient.",
    },
    {
      type: "heading",
      text: "Solvent Selection in One Decision",
    },
    {
      type: "paragraph",
      text: "The majority of lyophilized peptides used in preclinical research dissolve readily in bacteriostatic water (0.9% benzyl alcohol in sterile water for injection). BAC water is the correct first choice for: BPC-157, TB-500, Ipamorelin, CJC-1295, Epithalon, GHK-Cu, Semaglutide, Tirzepatide, NAD+, and most water-soluble peptides in the GH axis, GLP-1, and immune categories.",
    },
    {
      type: "paragraph",
      text: "The minority that do not: hydrophobic peptides (Melanotan II, PT-141, some GHRP-6 formulations at high concentration) may require a small volume of 0.6% acetic acid as a first-step dissolve, followed by dilution with BAC water to final concentration. If a peptide does not clear in BAC water after slow, steady injection and gentle swirl — do not shake — add 10–20 µL of 0.6% acetic acid first, swirl until clear, then bring to final volume with BAC water.",
    },
    {
      type: "paragraph",
      text: "Avoid DMSO, ethanol, or methanol as primary solvents for in vivo work unless the published protocol specifying your exact compound requires it. These solvents carry biological activity of their own and confound interpretation.",
    },
    {
      type: "heading",
      text: "The Injection Technique That Protects Peptide Integrity",
    },
    {
      type: "paragraph",
      text: "The most common reconstitution error is injecting solvent directly onto the powder with force. Peptides are surface-active molecules. A direct high-velocity jet of liquid hitting a lyophilized pellet creates localized turbulence and shear stress that can denature surface-layer peptide, cause foaming, and produce microbubbles that trap air in the solution. The correct technique eliminates all of this.",
    },
    {
      type: "list",
      items: [
        "Swab the rubber septum of both vials with a fresh isopropyl swab and let dry 10 seconds — never inject through wet alcohol.",
        "Draw your target volume of BAC water into the syringe slowly — no bubbles.",
        "Invert the peptide vial at a 45-degree angle.",
        "Insert the needle through the septum with the bevel pointing toward the glass wall — not the powder.",
        "Depress the plunger slowly, letting solvent run down the inside wall of the vial and pool beneath the powder, not jet into it.",
        "Do not fully empty the syringe — stop with 0.05 mL remaining in barrel to avoid air injection.",
        "Remove needle without pulling back on plunger.",
        "Swirl gently, do not shake, for 30–60 seconds. If the powder does not dissolve, swirl for another 30 seconds.",
        "Do not vortex. Do not sonicate. Both degrade peptide.",
      ],
    },
    {
      type: "paragraph",
      text: "The solution should be clear and colorless (or very faintly yellow for some compounds like NAD+). Cloudiness at this stage means incomplete dissolution — continue swirling before proceeding. Persistent cloudiness after two minutes of gentle swirling usually means the wrong solvent, or a degraded peptide.",
    },
    {
      type: "heading",
      text: "Concentration Calculation — One Worked Example",
    },
    {
      type: "paragraph",
      text: "The formula is fixed: add the volume in mL, divide peptide mass in mg. That gives you mg/mL. You want µg/µL for insulin syringe dosing — they are the same number. To prepare a 2 mg/mL BPC-157 solution from a 10mg vial: inject 5 mL of BAC water total. You have 10mg ÷ 5mL = 2mg/mL = 2µg/µL. To draw 250µg for a rodent dose: you need 125µL on the syringe.",
    },
    {
      type: "paragraph",
      text: "A practical note on volume: the smaller the reconstitution volume, the more concentrated the solution and the smaller each dose volume. For rodent SC work where dose volumes should be ≤200µL, back-calculate your reconstitution volume from the highest dose you'll use, not the lowest. Concentrated solutions drawn in very small volumes (≤10µL) introduce syringe-to-syringe variability that dilute solutions avoid.",
    },
    {
      type: "heading",
      text: "Label It Before You Set It Down",
    },
    {
      type: "paragraph",
      text: "Label the vial before you set it down — not after you clean up, not before you start the experiment. Unlabeled reconstituted peptide vials on a shared bench are a research integrity incident waiting to happen. Required label information: compound name (abbreviation fine), concentration in mg/mL, date of reconstitution, and your initials. Optional but useful: lot number, solvent used.",
    },
    {
      type: "paragraph",
      text: "Reconstituted solutions in BAC water are stable for 28 days at 2–8°C under normal handling. The benzyl alcohol acts as a bacteriostatic preservative — it suppresses microbial growth but does not prevent chemical degradation driven by freeze-thaw cycling, light exposure, or oxidation. Store in the back of the refrigerator, not the door (temperature fluctuates at the door). Wrap vials in foil or use amber glass.",
    },
    {
      type: "heading",
      text: "Aliquoting for Multi-Use Studies",
    },
    {
      type: "paragraph",
      text: "For studies requiring more than seven days of dosing, aliquot the reconstituted solution into single-use doses on day one. Draw each dose into a pre-labeled syringe, cap, and freeze at −20°C. Thaw one syringe 15 minutes before each dosing event; discard unused thawed volume. This eliminates repeated septum punctures (which introduce particulate into the solution over time) and freeze-thaw cycling on the bulk vial.",
    },
    {
      type: "paragraph",
      text: "Do not freeze aliquots of semaglutide or tirzepatide — GLP-1/GIP agonists at high concentration may aggregate on freeze-thaw despite BAC water. For these, prepare fresh solutions every 7 days from lyophilized stock.",
    },
    {
      type: "heading",
      text: "The Checks That Tell You Something Is Wrong",
    },
    {
      type: "list",
      items: [
        "Persistent cloudiness after swirling: wrong solvent, degraded peptide, or incorrect diluent pH — do not proceed.",
        "Visible particulate (white specks floating): contamination or aggregate — discard vial.",
        "Foaming that does not resolve in 2 minutes: excessive shaking introduced air — pipette away foam layer before use, but consider preparing a fresh vial.",
        "Yellow-brown color in a peptide that should be clear: oxidative degradation — discard.",
        "Vial feels warm to the touch after reconstitution: vigorous mixing created heat — suboptimal but not necessarily ruinous; chill before use and note for protocol record.",
      ],
    },
    {
      type: "heading",
      text: "Why Repeatability Matters More Than Perfection",
    },
    {
      type: "paragraph",
      text: "The goal of a standard reconstitution procedure is not perfect aseptic technique performed once. It is adequate aseptic technique performed identically every time. Inconsistency is the enemy: a different solvent injection angle on day three, a slightly different concentration on week two, one vial stored in a different freezer. These variations produce dosing inconsistencies that appear as biological noise, not experimental failure — meaning they corrupt data without triggering an obvious error signal.",
    },
    {
      type: "paragraph",
      text: "Write your reconstitution procedure into the protocol document. Time it. Photograph the bench setup if you are training a new lab member. Reconstitution is a procedure, not a skill — it should be identical regardless of who performs it and on which day.",
    },
    {
      type: "divider",
    },
    {
      type: "disclaimer",
      text: "All compounds discussed are for preclinical research use only. Not intended for human use, consumption, or medical application. Research must be conducted by qualified investigators under appropriate institutional protocols.",
    },
  ],
};
