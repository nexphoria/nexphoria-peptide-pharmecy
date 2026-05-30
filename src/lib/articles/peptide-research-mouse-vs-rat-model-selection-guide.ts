import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "peptide-research-mouse-vs-rat-model-selection-guide",
  title: "Mouse vs Rat in Peptide Research: Model Selection Guide for Study Design",
  description:
    "Choosing the wrong animal model is one of the most common avoidable errors in peptide research. This guide covers the decision matrix for mouse vs rat, strain selection for GH axis, GLP-1, repair, and longevity research, with allometric scaling tables and model-specific protocols.",
  category: "Research Fundamentals",
  readMinutes: 9,
  publishedAt: "2026-05-30",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Model selection is a decision made before any peptide is ordered, yet it is among the most consequential choices in study design. The same compound at the same mg/kg dose in a C57BL/6J mouse versus a Sprague-Dawley rat can produce statistically different IGF-1 responses — not because the biology differs, but because GH pulsatility profiles, hepatic CYP450 expression, body composition, and blood-sampling practicalities differ between species and strains. This guide provides a structured framework for choosing between mouse and rat models for the most common peptide research applications.",
    },
    {
      type: "heading",
      text: "The Fundamental Mouse vs Rat Decision",
    },
    {
      type: "paragraph",
      text: "The choice between mouse and rat is rarely about cost alone, though rats cost approximately 3–5× more per animal. The decision should be driven by which model best answers the research question with the available endpoints.",
    },
    {
      type: "table",
      headers: ["Factor", "Mouse (C57BL/6J)", "Rat (Sprague-Dawley)", "Advantage"],
      rows: [
        ["Cost per animal", "~$25–40", "~$90–140", "Mouse"],
        ["Housing density", "5/cage standard", "2-3/cage standard", "Mouse"],
        ["Blood volume (terminal)", "~1.5–2 mL", "~10–15 mL (300g rat)", "Rat (serial sampling)"],
        ["Serial blood sampling", "~80 µL/week max", "~1–2 mL/week via tail vein", "Rat"],
        ["Catheterization (IV/ICV)", "Technical, small vessel", "Well-established protocol", "Rat"],
        ["GH pulsatility (male)", "Weaker, less regular", "Clear 3–4h pulses", "Rat"],
        ["IGF-1 response clarity", "Good (less variance)", "Excellent (less confounding)", "Rat"],
        ["Behavioral endpoints", "Extensive genetic tools", "Larger brain, simpler surgery", "Context-dependent"],
        ["Metabolic sensitivity (HFD)", "C57BL/6J: rapid obesity", "SD: moderate, Zucker: severe", "Mouse (DIO model)"],
        ["Genetic tools", "Full KO/knockin library", "Limited (growing)", "Mouse"],
        ["Tissue yield per animal", "Small, pooling required", "Large, per-animal analysis", "Rat"],
        ["Drug metabolism", "High CYP activity, rapid", "Moderate CYP, more human-like", "Rat (PK studies)"],
      ],
    },
    {
      type: "heading",
      text: "GH Axis Research: Why Male Rats Often Win",
    },
    {
      type: "paragraph",
      text: "For GH secretagogue research (ipamorelin, CJC-1295, sermorelin, MK-677, GHRP-2), the male Sprague-Dawley rat at 8–10 weeks of age is generally the preferred model. The reason is GH pulsatility. Male SD rats exhibit clear, high-amplitude GH pulses every 3–4 hours (peak GH 50–150 ng/mL, nadir <5 ng/mL), while male C57BL/6J mice show a less organized pulsatile pattern with lower amplitude.",
    },
    {
      type: "callout",
      text: "Critical sex caveat for GH axis studies: Female SD rats and C57BL/6J mice have fundamentally different GH secretion patterns than males — higher basal GH, less pulsatile, estrogen-suppressed GH nadir. Female animals confound standard GH/IGF-1 endpoint studies unless you specifically study sex differences. Either use males only (and state this explicitly) or include both sexes with adequate power for sex × treatment interaction analysis.",
    },
    {
      type: "paragraph",
      text: "Blood volume is the practical bottleneck for GH axis studies. A serial sampling design (capturing the GH pulse at baseline, 15 min, 30 min, 60 min, 120 min post-injection) requires ~200–300 µL per timepoint. At 5 timepoints, that is 1–1.5 mL — approaching the safe limit for a 25g mouse (maximum safe single bleed: 1% BW = 250 µL). A 300g rat can safely yield 2 mL at a single bleed with 2-week recovery, making jugular catheterization-based serial sampling practical in rats but requiring indwelling catheters in mice.",
    },
    {
      type: "heading",
      text: "GLP-1 Receptor Agonist Research: The DIO Model Landscape",
    },
    {
      type: "paragraph",
      text: "Diet-induced obesity (DIO) models are the standard for GLP-1 agonist research (semaglutide, tirzepatide, retatrutide). Three models dominate:",
    },
    {
      type: "list",
      items: [
        "C57BL/6J HFD mouse (60% kcal fat, Research Diets D12492): 12–16 weeks to achieve ~45–50g body weight and insulin resistance. Most common. Caveat: C57BL/6J purchased from JAX are already pre-obese due to laboratory-adapted microbiome — consider C57BL/6N from Taconic or Charles River for lower baseline obesity.",
        "Sprague-Dawley HFD rat (60% kcal fat): 8–12 weeks to DIO. Larger blood volume enables more frequent sampling and better PK characterization. Used in many pharma SURMOUNT-equivalent DIO studies.",
        "Zucker fa/fa rat (leptin receptor mutation): severe rapid obesity without HFD requirement. Maximum insulin resistance. Use when studying compound effects independent of dietary fat — but note that leptin resistance itself may confound GLP-1 axis responses (arcuate NPY/AgRP leptin signaling co-modulated by GLP-1R).",
        "db/db mouse (leptin receptor mutation, C57BL/6J background): severe obesity + type 2 diabetes phenotype. Useful for glycemic endpoint studies. Not ideal for weight-loss studies due to leptin receptor absence affecting many downstream pathways."
      ],
    },
    {
      type: "paragraph",
      text: "For DIO GLP-1 research, pair-fed controls are non-negotiable. GLP-1 agonists reduce food intake (central ARC NPY/AgRP inhibition), which itself reduces body weight. To determine whether weight loss effects are GLP-1R-mediated beyond food intake reduction, pair-fed animals (food-restricted to match GLP-1 group intake) must be included as a control arm.",
    },
    {
      type: "heading",
      text: "Strain Selection for Repair and Recovery Research",
    },
    {
      type: "paragraph",
      text: "For repair peptide research (BPC-157, TB-500, GHK-Cu, LL-37), model selection depends on injury type. The following guidance reflects the dominant literature:",
    },
    {
      type: "table",
      headers: ["Injury Model", "Preferred Species/Strain", "Rationale"],
      rows: [
        ["Achilles tendon transection", "SD rat (male, 250–300g)", "Larger tendon, better biomechanical testing (tensile load)"],
        ["MCL/ACL ligament repair", "SD rat or New Zealand White rabbit", "Rabbit better for joint anatomy; rat for MRI endpoints"],
        ["Full-thickness excisional wound", "C57BL/6J mouse (splinted)", "Well-characterized, HFD+wound for diabetic model"],
        ["Diabetic wound healing", "db/db mouse or ob/ob mouse", "Impaired healing phenotype, SOP available"],
        ["GI mucosal repair (BPC-157)", "SD rat (male)", "Established Sikiric protocols, ethanol/indomethacin ulcer"],
        ["Cardiac I/R (LAD ligation)", "C57BL/6J mouse or SD rat", "Mouse: genetic tools; Rat: larger heart, better echo"],
        ["Stroke (MCAO)", "BALB/c or C57BL/6J mouse", "30–60 min MCAO; SD rat for transient MCAO recovery"],
        ["Peripheral nerve repair", "SD rat (male, 200g)", "Sciatic crush model, grip strength + CMAP endpoints"],
      ],
    },
    {
      type: "heading",
      text: "Aging and Longevity Research: Model Selection",
    },
    {
      type: "paragraph",
      text: "Longevity peptide research (Epitalon, NAD+, SS-31, MOTS-c) presents unique model challenges. The standard C57BL/6J mouse reaches 'middle age' at ~12 months and 'aged' at 18–24 months, with natural lifespan of 24–30 months. For lifespan extension endpoints, the C3H/He strain (used in Khavinson's Epitalon work) or CBA mice provide a shorter mean lifespan (~24–26 months) that reduces study duration. The C57BL/6J 22-month model is more commonly used in metabolic longevity research (NAD+, MOTS-c) because of the well-characterized age-related metabolic decline in this background.",
    },
    {
      type: "paragraph",
      text: "For mitochondrial research (SS-31, NAD+), the aged male C57BL/6J (22–24 months) shows reproducible declines in: Complex I activity (40–60% reduction), mtDNA copy number (30–50% reduction), and NAD+/NADH ratio (50–70% reduction vs young controls). These biomarkers are well-validated endpoints that allow published compound data to be compared across labs. Aged animals must be sourced from aged colonies at JAX or NIA — do not age animals in-house unless your facility has full biosecurity for a 2-year colony.",
    },
    {
      type: "heading",
      text: "Allometric Scaling Reference for Common Models",
    },
    {
      type: "paragraph",
      text: "When moving from a published human or large-animal dose to a rodent starting dose, use FDA allometric scaling (body surface area method, 2005 guidance). The Km factor (body surface area normalizer) for mice is 3 and for rats is 6, vs human Km of 37.",
    },
    {
      type: "table",
      headers: ["Species", "Typical Weight", "Km Factor", "HED from 10 mg/kg animal dose", "Example: BPC-157 10 µg/kg mouse → rat equivalent"],
      rows: [
        ["Mouse (C57BL/6J)", "20–25g", "3", "0.81 mg/kg human", "~5 µg/kg rat (Km 6 vs Km 3)"],
        ["Rat (SD male)", "250–300g", "6", "1.62 mg/kg human", "Rat is reference for BPC-157 literature"],
        ["Rat (SD female)", "200–250g", "6", "1.62 mg/kg human", "~Same as male at mg/kg basis"],
        ["Rabbit (NZW)", "2–3 kg", "12", "3.24 mg/kg human", "Starting point for PK studies"],
        ["Monkey (cynomolgus)", "3–5 kg", "20", "5.41 mg/kg human", "Retatrutide/semaglutide primate data"],
        ["Human reference", "60 kg", "37", "N/A", "Published Phase 1/2 doses"],
      ],
    },
    {
      type: "heading",
      text: "Practical Summary: Model Selection Flowchart",
    },
    {
      type: "list",
      items: [
        "GH axis / IGF-1 primary endpoint → Male SD rat, 8–10 weeks, serial jugular catheter sampling. Avoid females.",
        "GLP-1 / metabolic / weight loss → C57BL/6J DIO mouse (easiest, most literature) OR SD rat DIO (more blood volume). Always include pair-fed control arm.",
        "Repair (tendon, muscle, cardiac, wound) → C57BL/6J mouse (genetic tools, splinted wound) or SD rat (better biomechanics, larger tissue). Match to existing Sikiric/Ehrlich/Bock-Marquette protocols for comparison.",
        "Longevity / mitochondrial → Aged C57BL/6J (22 months, JAX NIA colony) for NAD+/SS-31/MOTS-c. C3H/He for lifespan endpoints (Epitalon/Khavinson protocols).",
        "Antimicrobial / immunology → BALB/c for Th2/antibody responses; C57BL/6J for Th1/cellular responses; Swiss CD-1 outbred for maximal variability tolerance.",
        "Nootropic / CNS → C57BL/6J for Morris Water Maze, fear conditioning; BALB/c for elevated plus maze, OFT (higher baseline anxiety). Wistar rat for radial arm maze.",
        "Always state strain source (JAX/Taconic/Charles River), sex, age at study start, and housing conditions in methods — these affect results more than most researchers acknowledge."
      ],
    },
    {
      type: "disclaimer",
      text: "This content is provided for research and educational purposes only. All animal research must be conducted in accordance with IACUC approval and applicable institutional and national regulations. Peptide compounds referenced are for research use only and are not approved for human use.",
    },
  ],
};
