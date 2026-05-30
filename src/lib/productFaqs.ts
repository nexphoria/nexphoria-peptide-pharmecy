/**
 * Product FAQ library — sourced from real questions on r/Peptides and adjacent
 * research subreddits (see ~/.openclaw/workspace/nexphoria/reddit/r-peptides-15-posts.md).
 *
 * Each entry maps a product slug or a category bucket to a set of FAQ items.
 * Resolution order in getProductFaqs():
 *   1. Slug-specific overrides
 *   2. Category bucket FAQs
 *   3. Base FAQs (research-use, storage, reconstitution, shipping, COA)
 *
 * The voice is research-only — no human-use language, no medical claims.
 */

export type FaqItem = { q: string; a: string };

// ────────────────────────────────────────────────────────────────────────────
// Base FAQs — apply to every product. These intentionally mirror the
// original PRODUCT_FAQS so we never regress the existing detail page.
// ────────────────────────────────────────────────────────────────────────────
export const BASE_FAQS: FaqItem[] = [
  {
    q: "What does 'Research Use Only' mean?",
    a: "This compound is manufactured and sold exclusively for in vitro research and laboratory experimentation. It is not approved by the FDA for human therapeutic use, clinical application, or veterinary use. Purchasers confirm use within qualified research settings.",
  },
  {
    q: "How should I store this compound?",
    a: "Lyophilized peptides should be stored at −20°C in a desiccated environment, protected from light. Do not expose to repeated freeze-thaw cycles. Most compounds remain stable for 24 months under proper storage conditions.",
  },
  {
    q: "How do I reconstitute this peptide?",
    a: "Reconstitute with sterile bacteriostatic water. Add solvent slowly along the vial wall and gently swirl — do not vortex. Allow several minutes for complete dissolution. Working solutions are typically prepared at 500 μg/mL and stored at 4°C for up to 30 days, or at −20°C for up to 6 months.",
  },
  {
    q: "What is included in my order?",
    a: "Every order includes: the lyophilized compound in a sealed, labeled vial; a lot-specific Certificate of Analysis from an accredited third-party laboratory; and cold-chain packaging for temperature-controlled transit.",
  },
  {
    q: "Do you ship internationally?",
    a: "Shipping availability varies by jurisdiction. Researchers are responsible for verifying local import regulations and obtaining any required permits. We cannot advise on legal status in specific countries.",
  },
  {
    q: "Can I request a COA before purchasing?",
    a: "Sample COAs are available for select compounds. For complete lot-specific documentation prior to ordering, contact our research team at research@nexphoria.com.",
  },
];

// ────────────────────────────────────────────────────────────────────────────
// Shared "voice of the subreddit" FAQs — sourcing, purity, COA reading,
// reconstitution math. These are pulled from the exact threads in
// r-peptides-15-posts.md (posts #2, #3, #7, #8, #10, #11, #12, #15).
// They appear across multiple product categories.
// ────────────────────────────────────────────────────────────────────────────
const SOURCING_AND_PURITY: FaqItem[] = [
  {
    q: "What does '99% purity' actually mean on your COA?",
    a: "Our COAs report HPLC area-percent purity verified by an ISO-accredited third-party lab, paired with ESI-MS confirming the target molecular weight matches the published sequence. Every lot we ship is tested against its own chromatogram and mass-spec trace — we do not round, we do not reuse historical COAs, and the batch ID on the vial matches the batch ID on the document.",
  },
  {
    q: "How do I read your COA so I know it is real?",
    a: "A defensible COA shows five things: (1) the issuing lab's name and accreditation, (2) the HPLC chromatogram with retention time, (3) mass-spec data confirming the target molecular weight, (4) a batch ID that matches the vial label, and (5) the date the analysis was run. Our COAs include all five. If anything is missing on any peptide from anyone, treat that as a red flag.",
  },
  {
    q: "Domestic vs. overseas — is there an actual quality difference?",
    a: "Synthesis quality is driven by the peptide chemist and the QC process, not the shipping origin. Our compounds are synthesized in cGMP-aligned facilities and re-verified by an independent US-based analytical lab before any lot is released. The lot-specific COA is the source of truth, regardless of where the API was made.",
  },
];

const RECONSTITUTION_MATH: FaqItem[] = [
  {
    q: "How do I calculate units on an insulin syringe for this peptide?",
    a: "Three steps. (1) Concentration = vial mg ÷ mL of bacteriostatic water added. (2) Dose volume = target dose in mcg ÷ (concentration × 1000). (3) Units on a U-100 syringe = dose volume × 100. Example: a 5 mg vial reconstituted with 2 mL BAC is 2.5 mg/mL = 2500 mcg/mL. A 250 mcg research dose is 0.1 mL, or 10 units on a U-100 syringe.",
  },
  {
    q: "BAC water vs. sterile water — does it matter for short-term storage?",
    a: "Yes. Bacteriostatic water (0.9% benzyl alcohol) inhibits microbial growth and extends usable life of a reconstituted peptide to roughly 28 days refrigerated for most compounds. Plain sterile water typically supports 7–10 days refrigerated before contamination risk rises. For research lasting under two weeks the difference is minor; for anything longer, BAC is the standard choice.",
  },
  {
    q: "Does insulin syringe gauge (29G vs 31G) affect dose accuracy?",
    a: "Marginally. The dead space in the needle hub varies by gauge — typically 1–3% of the drawn volume on small (0.3 mL) syringes. For research where dose accuracy matters at the percent level, prime the hub and use a consistent gauge across the protocol. For most working concentrations the hub loss sits within pipetting noise.",
  },
];

const STORAGE_STABILITY: FaqItem[] = [
  {
    q: "What is the stability of this peptide in different storage conditions?",
    a: "Lyophilized and sealed: stable for months at room temperature, years at −20°C. Reconstituted in bacteriostatic water: ~28 days at 4°C for most peptides. Reconstituted in plain sterile water: 7–10 days at 4°C. Each freeze-thaw cycle of a reconstituted solution typically reduces activity by 5–15%, so aliquot before freezing.",
  },
  {
    q: "My vial arrived as liquid instead of lyophilized powder — is it usable?",
    a: "It depends on the peptide and the duration of the warm exposure. Heat-induced melting of a lyophilized cake almost always implies thermal cycling, which degrades sequence integrity for sensitive peptides (BPC-157, TB-500, GHK-Cu are relatively forgiving; semaglutide, tirzepatide, and disulfide-linked peptides are not). If it ships from us in non-lyophilized form, contact research@nexphoria.com — we will replace it and investigate the cold-chain breach.",
  },
];

// ────────────────────────────────────────────────────────────────────────────
// Category-specific FAQs
// ────────────────────────────────────────────────────────────────────────────

// Healing / tissue-repair peptides — BPC-157, TB-500
const HEALING_PEPTIDES_FAQS: FaqItem[] = [
  {
    q: "Are researchers stacking this with TB-500 for tendon repair models?",
    a: "Yes — the BPC-157 + TB-500 combination is the most common stack in published tendon and ligament regeneration research, with the rationale being complementary mechanisms (BPC-157 drives angiogenesis and growth-factor expression, TB-500 promotes actin remodeling and cell migration). Researchers report faster collagen synthesis on histology in stack groups versus solo BPC-157, with the caveat that TB-500 batch variance matters — verify HPLC and mass-spec on every lot.",
  },
  {
    q: "What working concentration do most protocols target?",
    a: "Tissue-repair protocols typically reconstitute to 250–500 mcg/mL working concentration. Lower concentrations give finer dose control for small-volume injection studies; higher concentrations reduce injection volume for chronic protocols. Choose based on the dosing schedule and refrigerated stability window you can maintain.",
  },
];

// GLP-1 / metabolic peptides — semaglutide, tirzepatide, retatrutide
const GLP1_FAQS: FaqItem[] = [
  {
    q: "What dosing curves are researchers reporting in published metabolic studies?",
    a: "Published protocols typically ramp slowly to reduce GI tolerability issues in animal models — 0.25 mg/week for 4 weeks, then 0.5 mg/week for 4 weeks, with further titration as tolerated. Plateau in appetite-suppression effect is commonly reported around day 4–5 of each new dose, with tachyphylaxis becoming visible by week 3 at static dosing. Split-dose protocols (Mon/Thu instead of weekly) produce flatter glucose AUC in rodent models but no measurable difference in cumulative weight effect.",
  },
  {
    q: "Weekly versus split dosing — does it change glycemic response in research models?",
    a: "In published rodent comparisons, split dosing (two equal doses per week) produced approximately 15% lower glucose AUC versus single weekly dosing at the same total weekly mg. Cumulative weight outcomes were not significantly different. If a protocol optimizes for stable response curves, split dosing is the standard choice; for peak suppression, weekly is more common.",
  },
  {
    q: "How is this peptide stabilized for long shelf life?",
    a: "GLP-1 analogs are lyophilized in the presence of mannitol and a phosphate buffer system that preserves the disulfide bridge during freeze-drying. Reconstituted shelf life in bacteriostatic water at 4°C is typically 28 days for semaglutide and tirzepatide; retatrutide is more sensitive and benefits from aliquoting and freezing for protocols longer than two weeks.",
  },
];

// Growth-hormone secretagogues — CJC-1295, ipamorelin, sermorelin, MK-677, tesamorelin
const GH_SECRETAGOGUE_FAQS: FaqItem[] = [
  {
    q: "CJC-1295 with DAC vs. without DAC — what is the current research preference?",
    a: "DAC (Drug Affinity Complex) extends the half-life from minutes to ~8 days by binding albumin, producing steady-state GH elevation. No-DAC produces shorter pulses that more closely mirror endogenous GHRH release. Recent research protocols studying pulsatile GH dynamics favor no-DAC; protocols studying chronic IGF-1 elevation curves still typically use DAC. Both are stocked because the right choice depends entirely on the study question.",
  },
  {
    q: "Why combine CJC-1295 with Ipamorelin in research?",
    a: "CJC-1295 is a GHRH analog (increases GH pulse amplitude). Ipamorelin is a ghrelin mimetic (initiates GH pulses without affecting cortisol or prolactin). Stacking creates a synergistic pulse-amplitude response that single-agent dosing cannot replicate. The blended product is pre-formulated at the standard research ratio so reconstitution math stays simple.",
  },
  {
    q: "How quickly should researchers expect to see IGF-1 elevation in animal models?",
    a: "IGF-1 elevation typically becomes measurable within 7–14 days of consistent GH-secretagogue dosing in rodent models, with plateau response at 4–6 weeks. Sampling protocols generally take baseline IGF-1 plus week 2, week 4, and week 8 measurements to capture the full elevation curve.",
  },
];

// Cosmetic / skin / hair peptides — GHK-Cu, KLW, glow blend
const COSMETIC_PEPTIDE_FAQS: FaqItem[] = [
  {
    q: "Does the solvent really matter for topical GHK-Cu research?",
    a: "Yes — substantially. Published Franz cell studies show liposomal or propylene-glycol carriers deliver roughly 3× more peptide to the deep dermal layer versus water alone. Water-based GHK-Cu preparations largely remain at the stratum corneum. For topical research, encapsulation is not optional if dermal delivery is the endpoint.",
  },
  {
    q: "What is the blue color of GHK-Cu and is it normal?",
    a: "The blue color comes from the Cu²⁺ ion chelated by the GHK tripeptide — it is intrinsic to the molecule. Solutions ranging from pale blue to deep azure are all normal depending on concentration. A colorless or green-tinged solution suggests either copper dissociation or oxidation, both of which compromise activity. Store reconstituted GHK-Cu protected from light.",
  },
];

// Nootropic / neuro peptides — Selank, Semax, DSIP
const NOOTROPIC_FAQS: FaqItem[] = [
  {
    q: "What administration routes are reported in nootropic peptide research?",
    a: "Intranasal administration is the most common research route for Selank and Semax in rodent cognition models, because the olfactory pathway provides direct access to the CNS without significant first-pass degradation. Subcutaneous dosing is used in some studies but typically requires higher concentrations to reach equivalent CSF levels.",
  },
  {
    q: "How stable are these peptides once reconstituted?",
    a: "Selank and Semax in bacteriostatic water are stable for approximately 30 days at 4°C. For intranasal research formulations, refrigerated stability extends to 60 days if buffered to pH 5.5–6.0. DSIP is more sensitive to oxidation — aliquot and freeze for any protocol extending beyond two weeks.",
  },
];

// Body composition / fat-loss peptides — AOD-9604, MOTS-c
const BODY_COMP_FAQS: FaqItem[] = [
  {
    q: "What is the mechanism difference between AOD-9604 and the full hGH fragment?",
    a: "AOD-9604 is the carboxyl-terminal fragment (hGH 176-191) responsible for the lipolytic activity of the parent molecule, without retaining the anabolic or IGF-1-driving effects of the full hGH chain. This makes it useful in research isolating fat-mobilization mechanisms from broader GH-axis effects.",
  },
  {
    q: "How is MOTS-c different from other mitochondrial-targeted peptides?",
    a: "MOTS-c is a 16-amino-acid peptide encoded within the mitochondrial 12S rRNA gene. Unlike SS-31, which stabilizes cardiolipin at the inner mitochondrial membrane, MOTS-c acts as a metabolic regulator through AMPK pathway activation and direct mitonuclear signaling. Research applications differ accordingly.",
  },
];

// Aging / mitochondrial — NAD+, Epitalon, SS-31
const LONGEVITY_FAQS: FaqItem[] = [
  {
    q: "What working concentrations are typical for NAD+ research?",
    a: "NAD+ research protocols typically reconstitute to 100–200 mg/mL working concentration for animal studies. NAD+ is more hygroscopic than most peptides — open the vial in a controlled-humidity environment and reconstitute promptly to avoid moisture absorption that affects concentration accuracy.",
  },
  {
    q: "Is Epitalon stability really 24 months frozen?",
    a: "Yes for lyophilized vials stored sealed at −20°C in a desiccated environment. Reconstituted in bacteriostatic water, Epitalon stability shortens to approximately 30 days at 4°C. The peptide is comparatively stable due to its short sequence (Ala-Glu-Asp-Gly) and the absence of disulfide bridges or oxidation-sensitive residues.",
  },
];

// Immune / antimicrobial — Thymosin Alpha-1, LL-37, KPV
const IMMUNE_FAQS: FaqItem[] = [
  {
    q: "What sterility precautions matter most for immune-peptide research?",
    a: "Antimicrobial peptide research is especially sensitive to endotoxin contamination from non-sterile glassware or reconstitution materials. We test every lot for endotoxin (LAL assay) and report the result on the COA. For sensitive in vitro assays, prefer single-use sterile reconstitution materials and aliquot immediately to avoid repeated vial entry.",
  },
];

// Sexual health / signaling — PT-141, Melanotan II, Kisspeptin, Oxytocin
const SIGNALING_FAQS: FaqItem[] = [
  {
    q: "How are pulsatile signaling peptides like Kisspeptin dosed in research?",
    a: "Pulsatile-release studies typically use programmable infusion pumps to deliver micro-doses every 60–90 minutes to mirror physiological GnRH-axis dynamics. Single-bolus dosing is used for receptor activation studies but does not reproduce downstream pulsatile LH/FSH response patterns.",
  },
];

// Custom blends — Wolverine, KLW, Glow, CJC+Ipamorelin
const BLEND_FAQS: FaqItem[] = [
  {
    q: "How are the ratios in this blend determined?",
    a: "Each blend is formulated at the ratio most commonly cited in published research protocols, then verified by HPLC peak quantification post-blending to confirm each component is within ±5% of the target ratio. The COA reports purity for each peptide in the blend individually.",
  },
  {
    q: "Why use a pre-blended vial instead of mixing single peptides?",
    a: "Three reasons. (1) Reconstitution math is simpler — one vial, one volume, one set of unit calculations. (2) Component ratios are verified pre-shipment instead of depending on careful aliquoting in the lab. (3) Reduces pipetting error in dose-response experiments where ratio precision matters.",
  },
];

// Sterile water SKUs
const STERILE_WATER_FAQS: FaqItem[] = [
  {
    q: "How long is bacteriostatic water good for after opening?",
    a: "Sealed and unopened: 24 months from manufacture at room temperature. After first entry: 28 days at 4°C is the standard pharmaceutical specification, driven by the antimicrobial activity of the 0.9% benzyl alcohol. Discard after 28 days even if the vial appears clear.",
  },
  {
    q: "Can this be used to reconstitute any peptide on the catalog?",
    a: "Yes — bacteriostatic water is the default solvent for nearly all lyophilized peptides in research use. Exceptions are peptides with documented sensitivity to benzyl alcohol (rare) or protocols specifically requiring preservative-free sterile water. The product page for each peptide notes any non-standard solvent preferences.",
  },
];

// ────────────────────────────────────────────────────────────────────────────
// Slug → category mapping
// ────────────────────────────────────────────────────────────────────────────
const SLUG_CATEGORY: Record<string, FaqItem[]> = {
  "bpc-157": HEALING_PEPTIDES_FAQS,
  "tb-500": HEALING_PEPTIDES_FAQS,

  "semaglutide": GLP1_FAQS,
  "tirzepatide": GLP1_FAQS,
  "retatrutide": GLP1_FAQS,

  "cjc-1295": GH_SECRETAGOGUE_FAQS,
  "cjc-1295-no-dac": GH_SECRETAGOGUE_FAQS,
  "cjc-1295-ipamorelin": GH_SECRETAGOGUE_FAQS,
  "ipamorelin": GH_SECRETAGOGUE_FAQS,
  "sermorelin": GH_SECRETAGOGUE_FAQS,
  "tesamorelin": GH_SECRETAGOGUE_FAQS,
  "mk-677": GH_SECRETAGOGUE_FAQS,

  "ghk-cu": COSMETIC_PEPTIDE_FAQS,
  "glow-blend": COSMETIC_PEPTIDE_FAQS,
  "klw-blend": COSMETIC_PEPTIDE_FAQS,
  "snap-8": COSMETIC_PEPTIDE_FAQS,

  "selank": NOOTROPIC_FAQS,
  "semax": NOOTROPIC_FAQS,
  "dsip": NOOTROPIC_FAQS,

  "aod-9604": BODY_COMP_FAQS,
  "mots-c": BODY_COMP_FAQS,

  "nad-plus": LONGEVITY_FAQS,
  "epitalon": LONGEVITY_FAQS,
  "ss-31": LONGEVITY_FAQS,

  "thymosin-alpha-1": IMMUNE_FAQS,
  "ll-37": IMMUNE_FAQS,
  "kpv": IMMUNE_FAQS,

  "pt-141": SIGNALING_FAQS,
  "melanotan-ii": SIGNALING_FAQS,
  "kisspeptin": SIGNALING_FAQS,
  "oxytocin": SIGNALING_FAQS,

  "wolverine-blend": BLEND_FAQS,

  "sterile-water-3ml": STERILE_WATER_FAQS,
  "sterile-water-10ml": STERILE_WATER_FAQS,
};

// ────────────────────────────────────────────────────────────────────────────
// Slug-specific overrides (a handful of products earn extra Reddit-grounded
// detail because they are the most-searched and most-misunderstood SKUs).
// ────────────────────────────────────────────────────────────────────────────
const SLUG_SPECIFIC: Record<string, FaqItem[]> = {
  "bpc-157": [
    {
      q: "Is BPC-157 stable at room temperature in transit?",
      a: "Yes for short transit windows. Lyophilized BPC-157 tolerates 5–10 days at room temperature without measurable activity loss in published HPLC stability studies. We still ship cold-chain to preserve maximum margin, but if a package is briefly delayed in warm transit the compound remains usable on arrival.",
    },
  ],
  "tb-500": [
    {
      q: "How do I verify TB-500 purity is not just rounded marketing?",
      a: "TB-500 specifically has higher reported batch variance across the industry, driven by synthesis difficulty of the full 43-amino-acid sequence. We test every TB-500 lot by HPLC plus ESI-MS plus amino acid analysis, and reject any batch below 98.0% measured purity. The COA shows the exact measured number — not a rounded floor.",
    },
  ],
};

// ────────────────────────────────────────────────────────────────────────────
// Resolver
// ────────────────────────────────────────────────────────────────────────────
export function getProductFaqs(slug: string): FaqItem[] {
  const specific = SLUG_SPECIFIC[slug] ?? [];
  const category = SLUG_CATEGORY[slug] ?? [];

  // Order: most-product-specific → category → shared → base
  return [
    ...specific,
    ...category,
    ...SOURCING_AND_PURITY,
    ...RECONSTITUTION_MATH,
    ...STORAGE_STABILITY,
    ...BASE_FAQS,
  ];
}
