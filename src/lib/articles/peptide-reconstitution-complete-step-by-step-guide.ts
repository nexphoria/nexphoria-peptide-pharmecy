import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "peptide-reconstitution-complete-step-by-step-guide",
  title: "Peptide Reconstitution: The Complete Step-by-Step Guide",
  description:
    "Everything a researcher needs to reconstitute lyophilized peptides correctly — equipment, solvent selection, injection technique, concentration calculations with worked examples, storage, and red flags to watch for.",
  category: "Handling & Storage",
  readMinutes: 10,
  publishedAt: "2026-05-30",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Lyophilized (freeze-dried) peptides arrive as a white or off-white powder. Before any preclinical experiment, they must be dissolved — reconstituted — in an appropriate solvent at the correct concentration. Done correctly, reconstitution takes five minutes and produces a clear, stable working solution. Done incorrectly, it can degrade the compound, introduce contamination, or produce dosing errors that invalidate the entire study.",
    },
    {
      type: "paragraph",
      text: "This guide covers every step of the process in plain language: the equipment you need, which solvent to use, the injection technique that protects peptide integrity, concentration math with three worked examples, how to store the finished solution, and the red flags that tell you something went wrong.",
    },
    {
      type: "callout",
      text: "Research Use Only. All reconstitution guidance in this article is for preclinical in vitro and in vivo research applications only. None of the compounds or protocols described are intended for human use.",
    },
    {
      type: "heading",
      text: "Equipment You Need",
    },
    {
      type: "paragraph",
      text: "Before opening any vial, have these items ready at your bench:",
    },
    {
      type: "list",
      items: [
        "Bacteriostatic water (BAC water, 0.9% benzyl alcohol) — for most peptides, multi-use vials",
        "Insulin syringes with needle attached (29–31 gauge, 1/2-inch) — for transferring the solvent",
        "70% isopropyl alcohol swabs — for disinfecting vial septa",
        "Amber glass vials or wrapped standard vials if amber not available",
        "Permanent marker and label tape — to mark concentration, date, and compound",
        "Gloves — standard lab practice",
        "Timer — helpful for the 5-minute swirl step",
      ],
    },
    {
      type: "paragraph",
      text: "You do not need a centrifuge, heating equipment, or a vortex mixer. In fact, vortexing is specifically contraindicated for most peptides — the mechanical shear can cause aggregation and denaturation.",
    },
    {
      type: "heading",
      text: "Choosing the Right Solvent",
    },
    {
      type: "paragraph",
      text: "The correct solvent depends on the compound. Using the wrong one can cause precipitation, degradation, or loss of biological activity.",
    },
    {
      type: "subheading",
      text: "Bacteriostatic Water (BAC Water) — Default for Most Peptides",
    },
    {
      type: "paragraph",
      text: "BAC water (0.9% benzyl alcohol in sterile water) is the standard solvent for the majority of research peptides: BPC-157, TB-500, CJC-1295, ipamorelin, semaglutide, tirzepatide, GHK-Cu, sermorelin, PT-141, and most others. The benzyl alcohol acts as a bacteriostatic preservative, extending the shelf life of the reconstituted solution from a few days (sterile water) to 21–30 days at 4°C.",
    },
    {
      type: "subheading",
      text: "Sterile Saline or PBS — Required for Some Compounds",
    },
    {
      type: "paragraph",
      text: "NAD+ must NOT be reconstituted in BAC water. The benzyl alcohol is a reducing agent that reacts with the nicotinamide ring, degrading NAD+ rapidly. Use sterile saline (0.9% NaCl) or phosphate-buffered saline (PBS, pH 7.4) instead, and prepare fresh solutions at each use or freeze aliquots at −80°C. Epitalon and Follistatin-344 also reconstitute best in sterile saline or PBS pH 7.4 — not BAC water.",
    },
    {
      type: "subheading",
      text: "Dilute Acetic Acid — For Aggregation-Prone Peptides",
    },
    {
      type: "paragraph",
      text: "A small number of peptides (some growth hormone analogs and large fragment peptides) require 0.1–1% acetic acid for initial solubilization, then dilution with PBS to working concentration. Check the published protocols for the specific compound before proceeding. When in doubt, start with BAC water — if you see cloudiness after addition, this is your signal to switch solvents.",
    },
    {
      type: "heading",
      text: "The Reconstitution Protocol: Step by Step",
    },
    {
      type: "subheading",
      text: "Step 1: Bring Reagents to Room Temperature",
    },
    {
      type: "paragraph",
      text: "Remove the peptide vial from the freezer (−20°C) and allow it to warm to room temperature before opening. This prevents condensation from entering the vial and avoids the thermal shock that can crack lyophilized cakes. Five minutes on the bench is sufficient. Do not apply heat.",
    },
    {
      type: "subheading",
      text: "Step 2: Swab the Septa",
    },
    {
      type: "paragraph",
      text: "Wipe the rubber septum of both the BAC water vial and the peptide vial with a fresh 70% IPA swab. Allow 30 seconds for the alcohol to dry before penetrating with a needle. This step is critical for maintaining sterility and preventing contamination of multi-use vials.",
    },
    {
      type: "subheading",
      text: "Step 3: Draw the Correct Volume of BAC Water",
    },
    {
      type: "paragraph",
      text: "Calculate how much BAC water you need based on your target concentration (see worked examples below). Draw this exact volume into an insulin syringe from the BAC water vial. Use a fresh syringe — never re-use needles.",
    },
    {
      type: "subheading",
      text: "Step 4: Inject Along the Wall — Not Directly onto the Powder",
    },
    {
      type: "paragraph",
      text: "This is the most important technique point. Insert the needle through the peptide vial septum at a 45-degree angle and direct the tip so it touches the glass wall of the vial — not the powder cake at the bottom. Slowly depress the plunger and let the BAC water run down the glass wall to gently wet the powder from the side. Direct injection onto a lyophilized cake creates mechanical disruption and can cause foaming, aggregation, or incomplete dissolution.",
    },
    {
      type: "subheading",
      text: "Step 5: Swirl — Do Not Shake or Vortex",
    },
    {
      type: "paragraph",
      text: "After adding the solvent, gently roll the vial between your palms in a circular motion or swirl it slowly on the bench. The lyophilized powder will dissolve within 30–90 seconds for most peptides. Some peptides (MK-677, GHK-Cu, large fragment peptides) may take 2–5 minutes. Continue swirling gently until the solution is clear. Do not shake the vial vigorously — this introduces air bubbles and mechanical shear. Do not use a vortex mixer.",
    },
    {
      type: "subheading",
      text: "Step 6: Visual Clarity Check",
    },
    {
      type: "paragraph",
      text: "Hold the vial up against a light source and inspect carefully. A correctly reconstituted peptide solution should be: completely clear (not cloudy or milky), colorless to very faintly yellow (most peptides), or blue-violet in the case of GHK-Cu. Any cloudiness, visible particles, or unexpected color should prompt you to discard the vial and investigate the cause before proceeding.",
    },
    {
      type: "subheading",
      text: "Step 7: Label and Store",
    },
    {
      type: "paragraph",
      text: "Immediately label the vial with: compound name, concentration (e.g., 1 mg/mL), date of reconstitution, and your initials. Store at 4°C (refrigerator) in an amber vial or wrapped in foil to protect from light. Most BAC water reconstituted peptides are stable for 21–30 days refrigerated. Reconstituted NAD+ in sterile saline is stable only 24–48 hours at 4°C — freeze aliquots at −80°C for longer storage.",
    },
    {
      type: "heading",
      text: "Concentration Calculations: Three Worked Examples",
    },
    {
      type: "paragraph",
      text: "The formula is simple: Volume of BAC water (mL) = Vial mass (mg) ÷ Target concentration (mg/mL). Here are three examples covering common research compounds.",
    },
    {
      type: "subheading",
      text: "Example 1: BPC-157 5 mg → 500 mcg/mL",
    },
    {
      type: "paragraph",
      text: "You have a 5 mg BPC-157 vial and want a working concentration of 500 mcg/mL (0.5 mg/mL). Volume needed = 5 mg ÷ 0.5 mg/mL = 10 mL of BAC water. Add 10 mL BAC water to the 5 mg vial. Each 0.1 mL (10 units on an insulin syringe) will contain 50 mcg of BPC-157. A published 10 µg/kg dose in a 250 g rat = 2.5 µg absolute, which is 0.005 mL (0.5 units) — typically too small to dose accurately at this concentration. For rat studies, consider 1 mg/mL (add 5 mL BAC water to the 5 mg vial) so doses are larger and more measurable.",
    },
    {
      type: "subheading",
      text: "Example 2: Semaglutide 2 mg → 2 mg/mL",
    },
    {
      type: "paragraph",
      text: "A published DIO mouse study uses 0.1 mg/kg SC once weekly. For a 25 g mouse this is 2.5 µg absolute. At 2 mg/mL: volume = 2 mg ÷ 2 mg/mL = 1 mL of BAC water. Each 0.1 mL contains 200 µg. For a 2.5 µg dose, you need 0.00125 mL — this is far too small for accurate dosing with an insulin syringe. A more practical approach: add 1 mL BAC water to make 2 mg/mL stock, then dilute 1:100 in sterile saline to create a 20 mcg/mL working solution. From the 20 mcg/mL solution, 0.125 mL delivers the 2.5 µg dose — measurable with a 0.3 mL insulin syringe.",
    },
    {
      type: "subheading",
      text: "Example 3: Ipamorelin 2 mg → 200 mcg/mL",
    },
    {
      type: "paragraph",
      text: "Target: 200 mcg/mL (0.2 mg/mL). Volume = 2 mg ÷ 0.2 mg/mL = 10 mL. Add 10 mL BAC water to the 2 mg vial. Each 0.1 mL (10 units on an insulin syringe) = 20 mcg. A published 100 mcg/kg dose in a 25 g mouse = 2.5 µg absolute, which is 0.0125 mL at this concentration — still small. Consider 100 mcg/mL instead: add 20 mL BAC water to 2 mg vial. At 100 mcg/mL, a 2.5 µg dose is 0.025 mL = 2.5 units on an insulin syringe — more practical.",
    },
    {
      type: "callout",
      text: "Use the Nexphoria Reconstitution Calculator at /tools/reconstitution-calculator for any concentration. Enter vial size, target concentration, and dose — it outputs BAC water volume, doses per vial, and insulin syringe units automatically.",
    },
    {
      type: "heading",
      text: "Calculating Doses from the Syringe",
    },
    {
      type: "paragraph",
      text: "Standard U-100 insulin syringes hold 1 mL and are marked in units where 100 units = 1 mL. This means 10 units = 0.1 mL, 1 unit = 0.01 mL, and 0.5 unit = 0.005 mL. When calculating doses: first determine the volume in mL (dose in mcg ÷ concentration in mcg/mL = volume in mL), then convert to syringe units (volume in mL × 100 = units on insulin syringe). Doses below 2 units (0.02 mL) are difficult to accurately measure with a standard insulin syringe — consider a higher concentration or a dilution strategy as shown in Example 2 above.",
    },
    {
      type: "heading",
      text: "Storage After Reconstitution",
    },
    {
      type: "paragraph",
      text: "Reconstituted stability varies by compound and solvent. General guidelines by category:",
    },
    {
      type: "list",
      items: [
        "Most peptides in BAC water at 4°C: 21–30 days",
        "GLP-1 analogs (semaglutide, tirzepatide, retatrutide) in BAC water at 4°C: up to 4 weeks; do not refreeze reconstituted solution",
        "NAD+ in sterile saline at 4°C: 24–48 hours maximum; freeze aliquots at −80°C",
        "GHK-Cu in BAC water at 4°C: 14–21 days; solution should remain blue-violet",
        "Epitalon in sterile saline at 4°C: 14–21 days; minimize light exposure",
        "All reconstituted peptides: avoid freeze-thaw cycles (BAC water reconstituted) — plan aliquots if multi-week use expected",
      ],
    },
    {
      type: "paragraph",
      text: "Always store away from direct light. Ultraviolet light degrades the nicotinamide chromophore in NAD+, the disulfide bonds in SS-31 and AOD-9604, and can affect peptide stability generally. Amber glass is the gold standard; wrapping standard clear vials in foil works adequately.",
    },
    {
      type: "heading",
      text: "Red Flags: When to Discard and Restart",
    },
    {
      type: "paragraph",
      text: "Discard the vial and reconstitute fresh if you observe any of the following:",
    },
    {
      type: "list",
      items: [
        "Cloudiness or turbidity that doesn't clear after 5 minutes of gentle swirling — indicates aggregation or incompatible solvent",
        "Visible particles or floating matter — potential contamination or undissolved aggregates",
        "Unexpected color change (e.g., yellowing or browning in a normally colorless peptide) — indicates oxidation or degradation",
        "Precipitate forming hours after reconstitution — often solvent incompatibility or too high a concentration",
        "Unusual smell — rare but indicates contamination",
        "Solution past its labeled expiry date",
        "Any vial that was stored at room temperature for more than 30 minutes after reconstitution",
      ],
    },
    {
      type: "paragraph",
      text: "Note that GHK-Cu is normally blue-violet after reconstitution — this is correct and expected due to the copper chelate complex. A colorless GHK-Cu solution may indicate the product was oxidized or the copper has been stripped.",
    },
    {
      type: "heading",
      text: "Common Mistakes to Avoid",
    },
    {
      type: "list",
      items: [
        "Injecting BAC water directly onto the powder cake — causes aggregation; always aim for the vial wall",
        "Vortexing the vial — mechanical shear denatures peptides; swirl only",
        "Using neutral PBS or BAC water for NAD+ — both cause degradation; use sterile saline and prepare fresh",
        "Re-using needles — contamination risk and needle dulling causes peptide loss via adsorption to metal",
        "Forgetting to label reconstituted vials — leads to concentration errors in multi-compound protocols",
        "Reconstituting an entire vial when only a few doses are needed — consider aliquoting before reconstitution and freezing excess powder",
        "Not warming the vial to room temperature before opening — condensation can enter the vial and dilute the powder unpredictably",
      ],
    },
    {
      type: "heading",
      text: "Multi-Use Protocol Best Practices",
    },
    {
      type: "paragraph",
      text: "For research protocols spanning multiple weeks, a multi-use vial strategy reduces waste and preparation time. Reconstitute the full vial and refrigerate. Use a clean needle each time you withdraw a dose — never insert a used needle back into the vial. Swab the septum with IPA before each withdrawal. Track the reconstitution date on the label and discard at the end of the labeled stability window regardless of how much remains.",
    },
    {
      type: "paragraph",
      text: "For compounds requiring fresh preparation (NAD+), prepare only what you need for the day. Pre-weigh aliquots into separate vials before reconstitution if multi-day use is planned — each aliquot reconstituted fresh on its day of use.",
    },
    {
      type: "heading",
      text: "Quick Reference Summary",
    },
    {
      type: "list",
      items: [
        "Solvent: BAC water for most peptides; sterile saline for NAD+/Epitalon/Follistatin-344",
        "Volume: Vial mass (mg) ÷ Target concentration (mg/mL) = BAC water mL to add",
        "Technique: Inject along the wall, not onto powder; swirl gently for 1–5 minutes",
        "Storage: 4°C in amber/foil-wrapped vial; label with compound, concentration, date",
        "Stability: 21–30 days for most BAC water peptides; 24–48h for NAD+ in saline",
        "Red flags: Cloudiness, particles, color change, precipitation → discard and restart",
      ],
    },
    {
      type: "callout",
      text: "For concentration and dose calculations, use the free Reconstitution Calculator at /tools/reconstitution-calculator. For storage stability data by compound, see the Peptide Stability Checker at /tools/peptide-stability-checker and the Peptide Storage Guide at /guides/storage.",
    },
  ],
};
