import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "peptide-research-faq-2026",
  title: "Peptide Research FAQ 2026: 25 Questions Researchers Actually Ask",
  description:
    "Answers to the 25 most common questions in peptide research — covering purity standards, reconstitution, storage, dosing design, sourcing, and regulatory context. Updated for 2026.",
  category: "Research Fundamentals",
  readMinutes: 11,
  publishedAt: "2026-06-07",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Whether you're designing your first peptide study or troubleshooting a protocol that isn't behaving as expected, the same questions tend to come up repeatedly. This FAQ compiles 25 of the most common — organized by topic — with direct, research-focused answers.",
    },
    {
      type: "heading",
      text: "Purity and Quality",
    },
    {
      type: "subheading",
      text: "Q1: What purity level do I need for research-grade peptides?",
    },
    {
      type: "paragraph",
      text: "The standard for research use is ≥98% HPLC purity, though most serious suppliers now offer ≥99%. The distinction matters more in dose-response studies and combination protocols, where impurities can introduce confounds. For any study where you intend to publish, use the highest purity available and document it in your materials section.",
    },
    {
      type: "subheading",
      text: "Q2: What is a COA and what should it include?",
    },
    {
      type: "paragraph",
      text: "A Certificate of Analysis (COA) is the documentation that confirms a specific lot's purity and identity. A complete COA includes: HPLC chromatogram with purity percentage, mass spectrometry (MS) confirming molecular weight matches the expected sequence, LAL endotoxin testing result (particularly important for injectable applications in animal models), and the lot number tied to your specific product. COAs without the underlying chromatogram data — just a number — are insufficient for research documentation.",
    },
    {
      type: "subheading",
      text: "Q3: What is mass spectrometry verification and why does it matter?",
    },
    {
      type: "paragraph",
      text: "HPLC purity tells you what percentage of the sample is your compound. Mass spectrometry confirms what that compound actually is. A sample can be 99% pure but still be the wrong peptide if the synthesis went wrong. In combination, HPLC + MS provides full identity and purity verification — both are required for rigorous research sourcing.",
    },
    {
      type: "subheading",
      text: "Q4: What is endotoxin testing and when is it required?",
    },
    {
      type: "paragraph",
      text: "The LAL (Limulus Amebocyte Lysate) test detects bacterial endotoxins — lipopolysaccharides from gram-negative bacteria that can contaminate peptides during synthesis. Endotoxins are a serious confounder in immune and inflammatory research because they independently trigger cytokine responses. Any peptide administered to living subjects (cell lines, tissue models, animal models) should have endotoxin documentation.",
    },
    {
      type: "heading",
      text: "Reconstitution",
    },
    {
      type: "subheading",
      text: "Q5: What is the best diluent for reconstituting peptides?",
    },
    {
      type: "paragraph",
      text: "The most common diluent is bacteriostatic water (0.9% benzyl alcohol in sterile water), which is appropriate for most peptides and provides mild antimicrobial protection during storage after reconstitution. Sterile saline (0.9% NaCl) is also used but offers no antimicrobial protection. Acetic acid (0.1–1%) is recommended for peptides with low water solubility, particularly those with hydrophobic residues. DMSO should be avoided unless the protocol specifically requires it, as it can affect membrane permeability and interfere with biological assays.",
    },
    {
      type: "subheading",
      text: "Q6: How do I calculate the correct volume to add when reconstituting?",
    },
    {
      type: "paragraph",
      text: "The formula is straightforward: desired concentration (mg/mL) × volume added (mL) = vial content (mg). For example, if you have a 5mg vial and want a 1mg/mL solution, add 5mL of diluent. For a more concentrated stock of 2mg/mL, add 2.5mL. Most researchers work in mcg/mL for low-dose compounds — just multiply mg/mL by 1,000 to convert.",
    },
    {
      type: "subheading",
      text: "Q7: Why does my peptide not dissolve completely?",
    },
    {
      type: "paragraph",
      text: "Incomplete dissolution is most commonly caused by: insufficient diluent volume, inappropriate diluent pH for the peptide's charge profile, or the peptide has significant hydrophobic character requiring a co-solvent. Adding acetic acid (0.1%) can help acidic/neutral peptides. For hydrophobic peptides, dissolving in a small volume of DMSO (10–20% of total volume) before adding aqueous diluent is a validated approach. Never force a cloudy solution through a syringe filter — if the peptide hasn't dissolved, it won't pass through, and you'll lose yield.",
    },
    {
      type: "subheading",
      text: "Q8: Can I add water to a lyophilized vial and shake it?",
    },
    {
      type: "paragraph",
      text: "No — vigorous shaking can damage peptide structure through mechanical shear and bubble formation. The correct technique is to inject the diluent slowly down the side of the vial (avoiding direct contact with the lyophilized cake), then gently swirl or roll the vial until dissolved. If undissolved material remains after 5 minutes of gentle agitation, let it sit at room temperature for 10–15 minutes before retrying.",
    },
    {
      type: "heading",
      text: "Storage",
    },
    {
      type: "subheading",
      text: "Q9: How long can I store a reconstituted peptide?",
    },
    {
      type: "paragraph",
      text: "Reconstituted peptides stored at 4°C (refrigerated) in bacteriostatic water are typically stable for 4–6 weeks. Longer-term storage requires freezing at -20°C or colder, which extends stability to several months for most compounds. Freeze-thaw cycles degrade peptides — aliquot reconstituted solutions into single-use volumes before freezing to avoid repeated thawing.",
    },
    {
      type: "subheading",
      text: "Q10: What is the shelf life of lyophilized (dry) peptides?",
    },
    {
      type: "paragraph",
      text: "Lyophilized peptides stored at -20°C in a desiccated environment are generally stable for 2+ years. At room temperature, stability varies by compound — some peptides are robust for months, others degrade within weeks. As a conservative rule: store lyophilized peptides at -20°C, keep desiccant packets in the storage container, and avoid repeated temperature cycling (e.g., don't leave them on a bench while you prepare other materials).",
    },
    {
      type: "subheading",
      text: "Q11: Does light exposure matter?",
    },
    {
      type: "paragraph",
      text: "Yes, particularly for peptides with aromatic residues (tryptophan, tyrosine, phenylalanine) or disulfide bonds. UV exposure can cause photooxidation and bond cleavage. Store vials wrapped in foil or in opaque containers, and minimize bench-time exposure during experiments. Cold-chain-shipped peptides that arrive warm should be assessed for integrity before use — if possible, run a small HPLC check before initiating a major study.",
    },
    {
      type: "heading",
      text: "Dosing and Protocol Design",
    },
    {
      type: "subheading",
      text: "Q12: How do I scale animal doses to estimate human-equivalent doses?",
    },
    {
      type: "paragraph",
      text: "The FDA's standard method uses body surface area (BSA) scaling. The human equivalent dose (HED) = animal dose (mg/kg) × (animal weight / human weight)^0.33. For a 300g rat at 10 mcg/kg, the HED for a 70kg human works out to approximately 1.6 mcg/kg. It's important to note that BSA scaling does not account for differences in receptor expression, metabolic enzyme activity, or pharmacokinetics — human extrapolation from rodent data is a hypothesis, not a prediction.",
    },
    {
      type: "subheading",
      text: "Q13: What's the difference between SC and IP administration?",
    },
    {
      type: "paragraph",
      text: "Subcutaneous (SC) injection deposits the compound into the adipose tissue beneath the skin. Absorption is slower and more sustained. Intraperitoneal (IP) injection deposits into the abdominal cavity, where rapid absorption through the peritoneal membrane delivers the compound to the portal circulation quickly. Most peptide research uses SC as the default for systemic studies; IP is faster but introduces more variability depending on injection location and peritoneal fluid volume.",
    },
    {
      type: "subheading",
      text: "Q14: How do I choose between daily and pulsed dosing designs?",
    },
    {
      type: "paragraph",
      text: "Daily dosing (or twice-daily) is most common for short-acting peptides like BPC-157. Pulsed dosing (every 2–4 days) is more appropriate for longer-acting compounds like TB-500, or for protocols studying pulsatile signaling effects (common in GH secretagogue research). When the literature is unclear, run a pilot study with both designs at the same total weekly dose to assess the pharmacodynamic difference before committing to a full experiment.",
    },
    {
      type: "subheading",
      text: "Q15: Should I include a washout period?",
    },
    {
      type: "paragraph",
      text: "Washout periods are important in crossover designs and when measuring reversal of effect. For most peptides with half-lives under 24 hours, a 3–5 day washout is sufficient for plasma clearance. Biological effects (tissue remodeling, gene expression changes) may persist longer — if your endpoint measures downstream outcomes rather than immediate pharmacological response, extend washout to 2–3 weeks or run parallel groups instead.",
    },
    {
      type: "heading",
      text: "Sourcing and Regulatory",
    },
    {
      type: "subheading",
      text: "Q16: Are research peptides legal in the US?",
    },
    {
      type: "paragraph",
      text: "The legality of research peptides in the US is nuanced. Most peptides are not FDA-approved drugs or controlled substances. They exist in a regulatory space intended for laboratory and preclinical research use. They are legal to purchase, possess, and use for qualified research purposes. They are not legal to prescribe, administer to humans for therapeutic purposes, or sell as dietary supplements or drugs. Compounded versions of some peptides (BPC-157, semaglutide) have faced FDA scrutiny — this pertains to compounding pharmacies, not research supply.",
    },
    {
      type: "subheading",
      text: "Q17: What does 'research use only' mean?",
    },
    {
      type: "paragraph",
      text: "'Research use only' (RUO) is a regulatory classification meaning the product is intended for laboratory or preclinical research and has not been approved for clinical use. Suppliers are required to sell these products only to qualified researchers and institutions. The designation does not mean the compounds are unsafe — it means they have not completed the clinical approval process required for medical use.",
    },
    {
      type: "subheading",
      text: "Q18: How do I evaluate a peptide supplier's quality?",
    },
    {
      type: "paragraph",
      text: "Start with documentation: does the supplier provide per-lot COAs with actual HPLC chromatograms, mass spectrometry data, and endotoxin results? Is the synthesis location disclosed (US vs. overseas)? Do they use independent third-party labs for testing, or in-house testing only? Do their COAs appear consistent with legitimate testing (realistic purity curves, proper peak integration)? Finally, check whether they ship cold-chain — lyophilized peptides can tolerate brief ambient exposure, but suppliers that ship without any temperature management signal a gap in quality standards.",
    },
    {
      type: "subheading",
      text: "Q19: What happened to Peptide Sciences?",
    },
    {
      type: "paragraph",
      text: "Peptide Sciences, one of the most widely used US research peptide suppliers, ceased operations in early 2026. The closure left a significant gap in the market — approximately 70,000+ regular customers needed to source elsewhere. The legacy of Peptide Sciences is a useful benchmark: HPLC ≥99% purity, lot-specific COAs, US synthesis, and cold-chain shipping were their standard. Researchers seeking a comparable replacement should verify these same criteria in their new supplier.",
    },
    {
      type: "heading",
      text: "Practical Research Questions",
    },
    {
      type: "subheading",
      text: "Q20: Can peptides from different vials be mixed in the same syringe?",
    },
    {
      type: "paragraph",
      text: "Yes, with caution. Mixing is common in combination protocols (e.g., BPC-157 + TB-500) and is generally acceptable if both peptides are reconstituted in compatible diluents (both bacteriostatic water, for example). Do not mix compounds with incompatible pH requirements. Always document the mixing procedure, including the order of addition, concentrations, and timing, as this information is relevant to reproducibility.",
    },
    {
      type: "subheading",
      text: "Q21: What syringes and needles should I use for subcutaneous administration in rodents?",
    },
    {
      type: "paragraph",
      text: "The most common setup for rodent SC injection is a 0.5–1mL insulin syringe with a 27–29 gauge, 0.5-inch needle. The small gauge minimizes tissue trauma and is appropriate for volumes of 0.1–0.5mL in mice and 0.1–1mL in rats. For IP injections, a 25–27 gauge needle is more common to allow slightly faster delivery. Always use sterile, single-use syringes — no reuse.",
    },
    {
      type: "subheading",
      text: "Q22: How do I know if my peptide has degraded?",
    },
    {
      type: "paragraph",
      text: "Visual signs include cloudiness (in a solution that was previously clear), color change, or visible particulate matter. Chemical degradation may not be visible — a degraded peptide can appear identical to a fresh one. If you suspect degradation (unexpected results, solution that's been stored longer than expected, or a cold-chain breach during shipping), the only reliable confirmation is HPLC re-testing. For high-stakes studies, run a purity check on the source lot before beginning.",
    },
    {
      type: "subheading",
      text: "Q23: Can I use tap water or distilled water for reconstitution?",
    },
    {
      type: "paragraph",
      text: "No. Tap water contains chlorine, minerals, and potential microbial contamination that will degrade your peptide and introduce experimental confounds. Distilled water lacks antimicrobial properties and is not sterile in the sense required for research use. Always use bacteriostatic water or sterile saline from a pharmaceutical-grade source.",
    },
    {
      type: "subheading",
      text: "Q24: What controls should every peptide study include?",
    },
    {
      type: "list",
      items: [
        "Vehicle control: same injection volume of diluent without peptide, same schedule",
        "Positive control: if available, a compound with known efficacy in your model",
        "Negative/sham control: uninjured animals with or without vehicle",
        "If studying combination: single-agent arms for each compound separately",
        "Blinding: assessors should be blinded to treatment group for all subjective endpoints",
      ],
    },
    {
      type: "subheading",
      text: "Q25: Where can I find published preclinical data on specific peptides?",
    },
    {
      type: "paragraph",
      text: "PubMed (pubmed.ncbi.nlm.nih.gov) is the primary database. Search by compound name, CAS number, or INN name. Most peptides have been studied under their full chemical names rather than brand names — for example, search 'Thymosin beta-4' rather than 'TB-500'. Google Scholar is a useful complement for finding preprints and older literature not indexed by PubMed. For clinical trial data, ClinicalTrials.gov tracks registered studies. Always read the full methodology section of any study you intend to use as a design reference — not just the abstract.",
    },
    {
      type: "disclaimer",
      text: "All Nexphoria compounds are sold for qualified research use only. They are not intended for human consumption, therapeutic use, or diagnostic purposes. Nothing in this article constitutes medical or clinical advice.",
    },
  ],
};
