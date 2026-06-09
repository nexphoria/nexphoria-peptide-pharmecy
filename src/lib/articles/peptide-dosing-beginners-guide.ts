import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "peptide-dosing-beginners-guide",
  title: "Peptide Dosing for Beginners: A Researcher's Starter Guide (2026)",
  description:
    "New to peptide research? This beginner-friendly guide covers units (mcg vs mg vs IU), reconstitution math, injection volumes, and dosing intervals used in preclinical and early-stage research protocols.",
  category: "Research Protocols",
  readMinutes: 9,
  publishedAt: "2026-06-09",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "One of the most common barriers for researchers entering the peptide field is the math — units, concentrations, injection volumes, and reconstitution ratios can feel overwhelming at first. This guide breaks down the fundamentals used in preclinical research settings, so you can approach your first protocols with confidence.",
    },
    {
      type: "callout",
      text: "All peptides sold by Nexphoria are for research use only. This guide is intended for scientific education and research protocol design, not for clinical use or human self-administration.",
    },
    {
      type: "heading",
      text: "Understanding Peptide Units: mcg, mg, and IU",
    },
    {
      type: "paragraph",
      text: "Peptide doses in research literature are almost always expressed in micrograms (mcg) or milligrams (mg). A few peptides — particularly older growth hormone secretagogues and growth hormone itself — are measured in International Units (IU).",
    },
    {
      type: "list",
      items: [
        "1 mg = 1,000 mcg (micrograms)",
        "1 mcg = 0.001 mg",
        "IU is a biological activity unit — not directly convertible to weight without compound-specific data",
        "Most research peptides are dosed in the 100 mcg – 10,000 mcg (0.01 mg – 10 mg) range per subject per day in rodent models",
      ],
    },
    {
      type: "heading",
      text: "Reconstitution: Turning Lyophilized Powder Into Solution",
    },
    {
      type: "paragraph",
      text: "Lyophilized (freeze-dried) peptides must be reconstituted with a solvent before use. The standard solvent is bacteriostatic water (BW) — sterile water containing 0.9% benzyl alcohol as a preservative. Some peptides may require dilute acetic acid (0.1%–1%) for initial solubilization if they are poorly water-soluble.",
    },
    {
      type: "subheading",
      text: "Basic Reconstitution Math",
    },
    {
      type: "paragraph",
      text: "The formula is straightforward: divide the total peptide mass (in mcg) by the volume of solvent added (in mL) to get your concentration in mcg/mL.",
    },
    {
      type: "table",
      headers: ["Peptide Vial", "Solvent Added", "Resulting Concentration"],
      rows: [
        ["5 mg (5,000 mcg)", "5 mL BW", "1,000 mcg/mL"],
        ["5 mg (5,000 mcg)", "2.5 mL BW", "2,000 mcg/mL"],
        ["2 mg (2,000 mcg)", "2 mL BW", "1,000 mcg/mL"],
        ["10 mg (10,000 mcg)", "10 mL BW", "1,000 mcg/mL"],
      ],
    },
    {
      type: "paragraph",
      text: "A concentration of 1,000 mcg/mL (1 mg/mL) is the most common working concentration in research because it simplifies dose calculations. A 100 mcg dose = 0.1 mL; a 250 mcg dose = 0.25 mL.",
    },
    {
      type: "heading",
      text: "Injection Volumes: Matching Dose to Syringe",
    },
    {
      type: "paragraph",
      text: "Research peptides are typically administered via subcutaneous (SC) or intraperitoneal (IP) injection in rodent models. Injection volumes are constrained by animal size and route.",
    },
    {
      type: "table",
      headers: ["Route", "Typical Volume (Mouse)", "Typical Volume (Rat)"],
      rows: [
        ["Subcutaneous (SC)", "0.1–0.3 mL", "0.5–1.0 mL"],
        ["Intraperitoneal (IP)", "0.2–0.5 mL", "1.0–2.0 mL"],
        ["Intravenous (IV)", "0.05–0.2 mL", "0.5–1.0 mL"],
        ["Intranasal", "0.01–0.05 mL per nostril", "0.05–0.1 mL per nostril"],
      ],
    },
    {
      type: "paragraph",
      text: "Using U-100 insulin syringes is common for subcutaneous injections due to their fine gauge (28–31G) and small graduation marks. On a U-100 syringe, each unit marking equals 0.01 mL — so 10 units = 0.1 mL.",
    },
    {
      type: "heading",
      text: "Dosing Frequency and Protocols in Research",
    },
    {
      type: "paragraph",
      text: "Dosing schedules vary significantly by compound and research objective. Some peptides have short half-lives (minutes to hours) and require multiple daily injections; others may be administered weekly.",
    },
    {
      type: "subheading",
      text: "Short-Acting Peptides (t½ < 2 hours)",
    },
    {
      type: "list",
      items: [
        "BPC-157 (t½ ~30–60 min): often dosed 1–2× daily in rodent studies",
        "GHRP-2 / GHRP-6 (t½ ~20–30 min): typically 2–3× daily in GH pulse research",
        "Ipamorelin (t½ ~2h): 2–3× daily in most published protocols",
        "Selank / Semax (t½ <30 min): multiple daily doses or intranasal in rodent research",
      ],
    },
    {
      type: "subheading",
      text: "Longer-Acting or Modified Peptides (t½ > 4 hours)",
    },
    {
      type: "list",
      items: [
        "CJC-1295 w/ DAC (t½ ~8 days): weekly or biweekly administration in rodent models",
        "TB-500 / Thymosin Beta-4 (t½ ~24–48h): 1–2× weekly in recovery studies",
        "Semaglutide (t½ ~7 days in humans): weekly dosing in metabolic research",
        "Tirzepatide (t½ ~5 days in humans): weekly dosing protocols",
      ],
    },
    {
      type: "heading",
      text: "Cycle Design: Duration and Washout",
    },
    {
      type: "paragraph",
      text: "Most published peptide research uses fixed treatment periods — commonly 4, 8, or 12 weeks — followed by a washout period of equal or greater length before the next treatment phase. Continuous indefinite dosing is not well-studied for most peptides and introduces confounding variables.",
    },
    {
      type: "list",
      items: [
        "Short acute studies: 7–14 days, typically injury/recovery models",
        "Subchronic studies: 4–8 weeks, common for metabolic and body composition research",
        "Chronic studies: 12+ weeks, used in longevity, cancer biology, or neurodegenerative models",
        "Washout: allow at least one study period before reassignment in crossover designs",
      ],
    },
    {
      type: "heading",
      text: "Common Beginner Mistakes",
    },
    {
      type: "list",
      items: [
        "Confusing mg and mcg — a 10× dosing error that can invalidate results",
        "Over-diluting peptide (too much solvent) — results in inconveniently large injection volumes",
        "Under-diluting — causes unnecessarily small, hard-to-measure volumes and potential measurement error",
        "Skipping filter sterilization for non-aseptically prepared solutions",
        "Storing reconstituted peptide at room temperature — stability degrades rapidly above 4°C",
        "Using tap water or saline instead of bacteriostatic water — reduces shelf-life of solution significantly",
      ],
    },
    {
      type: "heading",
      text: "Storage After Reconstitution",
    },
    {
      type: "paragraph",
      text: "Once reconstituted, most peptides are stable at 2–8°C (refrigerator) for 4–8 weeks depending on the compound. Bacteriostatic water extends solution stability vs. plain sterile water. Freeze-thaw cycles should be minimized — if long storage is needed, aliquot into single-use volumes and store at -20°C before the first freeze.",
    },
    {
      type: "heading",
      text: "Sourcing Verified Peptides for Research",
    },
    {
      type: "paragraph",
      text: "Research quality depends entirely on compound quality. Reputable suppliers provide HPLC purity certificates (≥98% is the research standard) and mass spectrometry (MS) confirmation of molecular identity for every batch. Always verify the COA matches the specific lot number on your vial.",
    },
    {
      type: "divider",
    },
    {
      type: "disclaimer",
      text: "This content is intended for educational and scientific research purposes only. Nexphoria peptides are not intended for human or veterinary use, diagnosis, treatment, or cure of any condition. Always follow applicable regulations and institutional review board (IRB/IACUC) requirements for your research jurisdiction.",
    },
  ],
};
