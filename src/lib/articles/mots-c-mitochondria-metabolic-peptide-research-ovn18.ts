import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "mots-c-mitochondria-metabolic-peptide-research-ovn18",
  title: "MOTS-c: The Mitochondria-Derived Peptide Reshaping Metabolic Research",
  description:
    "MOTS-c is a 16-amino acid peptide encoded within mitochondrial DNA that regulates metabolism, insulin sensitivity, and exercise adaptation. A deep-dive into its mechanisms, preclinical findings, and research protocols.",
  category: "Compound Profiles",
  readMinutes: 11,
  publishedAt: "2026-06-22",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "MOTS-c (Mitochondrial Open Reading Frame of the 12S rRNA-c) is a 16-amino acid peptide encoded not in the nuclear genome, but within mitochondrial DNA — a discovery that fundamentally challenged assumptions about what the mitochondrial genome encodes. First characterized by Lee et al. in 2015, MOTS-c has since attracted substantial attention for its roles in metabolic regulation, insulin sensitivity, exercise physiology, and longevity-associated signaling.",
    },
    {
      type: "heading",
      text: "What Makes MOTS-c Unique",
    },
    {
      type: "paragraph",
      text: "Unlike most peptides studied in research contexts, MOTS-c is endogenously produced by mitochondria and acts as a retrograde mitochondrial signal — communicating metabolic state from mitochondria to the nucleus. This mitochondria-to-nucleus signaling axis positions MOTS-c as a master metabolic sensor rather than a simple effector molecule.",
    },
    {
      type: "list",
      items: [
        "Encoded within the 12S rRNA region of mitochondrial DNA (mtDNA)",
        "16 amino acids: MRWQEMGYIFYPRKLR",
        "Molecular weight: approximately 2174 Da",
        "Circulates in plasma; levels decline with age and metabolic dysfunction",
        "Translocates to the nucleus under metabolic stress to regulate gene expression",
      ],
    },
    {
      type: "heading",
      text: "Primary Mechanisms of Action",
    },
    {
      type: "subheading",
      text: "AMPK Activation",
    },
    {
      type: "paragraph",
      text: "MOTS-c is a potent activator of AMP-activated protein kinase (AMPK), the cell's master energy sensor. AMPK activation downstream of MOTS-c drives glucose uptake, fatty acid oxidation, and mitochondrial biogenesis — effects that parallel exercise-induced metabolic adaptation.",
    },
    {
      type: "subheading",
      text: "Folate Cycle Inhibition and AICAR Production",
    },
    {
      type: "paragraph",
      text: "A key mechanistic discovery: MOTS-c inhibits the folate cycle and the methionine cycle, leading to accumulation of 5-aminoimidazole-4-carboxamide ribonucleotide (AICAR) — an endogenous AMPK activator. This explains how MOTS-c activates AMPK without directly binding to it, operating through metabolite flux rather than receptor binding.",
    },
    {
      type: "subheading",
      text: "Nuclear Translocation Under Stress",
    },
    {
      type: "paragraph",
      text: "Under conditions of metabolic stress (glucose deprivation, mitochondrial dysfunction, oxidative stress), MOTS-c translocates from mitochondria into the nucleus where it binds to gene promoters and regulates transcription of antioxidant response element (ARE)-driven genes. This positions MOTS-c as a stress-adaptive transcriptional co-regulator.",
    },
    {
      type: "heading",
      text: "Preclinical Research Findings",
    },
    {
      type: "table",
      headers: ["Research Area", "Model", "Key Finding"],
      rows: [
        ["Insulin resistance", "High-fat diet mice", "MOTS-c injection restored insulin sensitivity; reduced hepatic lipid accumulation"],
        ["Exercise mimicry", "Sedentary mice", "MOTS-c improved exercise capacity without training; increased fat oxidation"],
        ["Obesity", "Diet-induced obese mice", "Reduced adiposity, improved glucose tolerance, AMPK-dependent mechanism"],
        ["Aging metabolism", "Aged mice", "Reversed age-associated insulin resistance; restored AMPK signaling"],
        ["Lifespan extension", "C. elegans", "Extended median lifespan; required AMPK/FOXO signaling"],
        ["Muscle preservation", "Sarcopenia models", "Attenuated age-related muscle loss; preserved mitochondrial function"],
      ],
    },
    {
      type: "heading",
      text: "MOTS-c and Exercise Physiology",
    },
    {
      type: "paragraph",
      text: "One of the most compelling aspects of MOTS-c research is its relationship to physical exercise. Circulating MOTS-c levels rise acutely with exercise and remain elevated post-exercise in trained subjects. Exogenous MOTS-c administration in sedentary rodent models produced improvements in VO₂ max, running endurance, and substrate utilization that mimic training adaptations — leading researchers to characterize it as an 'exercise mimetic' peptide.",
    },
    {
      type: "callout",
      text: "Important research context: MOTS-c's exercise mimetic effects have been demonstrated in rodent models. Human data is limited to observational studies on plasma MOTS-c levels. Controlled interventional trials are ongoing as of 2026.",
    },
    {
      type: "heading",
      text: "Age-Related Decline and Therapeutic Implications",
    },
    {
      type: "paragraph",
      text: "Plasma MOTS-c levels decline with age in both humans and rodents, correlating with the onset of metabolic dysfunction, insulin resistance, and reduced exercise capacity. This age-associated decline has made MOTS-c a candidate biomarker of metabolic aging and a potential target for longevity-oriented interventions.",
    },
    {
      type: "list",
      items: [
        "Plasma MOTS-c inversely correlates with insulin resistance (HOMA-IR) in human studies",
        "Centenarians show higher MOTS-c levels relative to age-matched controls in Japanese cohort studies",
        "mtDNA variants affecting MOTS-c sequence are associated with longevity in East Asian populations",
        "Exercise training upregulates endogenous MOTS-c secretion in a dose-dependent manner",
      ],
    },
    {
      type: "heading",
      text: "Research Protocols and Dosing Considerations",
    },
    {
      type: "paragraph",
      text: "Published preclinical protocols provide context for research design, though translation to human models requires careful methodological consideration.",
    },
    {
      type: "table",
      headers: ["Protocol Variable", "Preclinical Range", "Notes"],
      rows: [
        ["Dose (murine)", "5–15 mg/kg", "IP administration most common in published studies"],
        ["Administration route", "Intraperitoneal (IP)", "SC also used; IV for PK studies"],
        ["Frequency", "Daily or 3×/week", "Depends on model and endpoint"],
        ["Duration", "2–8 weeks", "Longer protocols for metabolic and body composition endpoints"],
        ["Vehicle", "Sterile PBS (pH 7.4)", "Lyophilized powder reconstituted to 1–5 mg/mL"],
        ["Storage", "-80°C lyophilized; -20°C reconstituted (use within 30 days)", "Avoid repeated freeze-thaw cycles"],
      ],
    },
    {
      type: "heading",
      text: "Key Biomarkers for MOTS-c Research Studies",
    },
    {
      type: "list",
      items: [
        "Fasting glucose and insulin (HOMA-IR calculation)",
        "Oral glucose tolerance test (OGTT) at 0, 30, 60, 120 minutes",
        "Insulin tolerance test (ITT)",
        "Plasma MOTS-c levels (ELISA; Elabscience and MyBioSource have validated kits)",
        "Plasma and hepatic triglycerides",
        "Mitochondrial respiration (Seahorse XF assay in cell studies)",
        "AMPK phosphorylation (pAMPK/AMPK ratio by Western blot)",
        "Body composition (EchoMRI or DEXA in rodent models)",
        "VO₂ max / running endurance (metabolic treadmill testing)",
      ],
    },
    {
      type: "heading",
      text: "Stacking Considerations in Research Models",
    },
    {
      type: "paragraph",
      text: "MOTS-c has been studied alongside other mitochondria-targeted peptides and metabolic compounds. Researchers have examined synergies with:",
    },
    {
      type: "list",
      items: [
        "SS-31 (Elamipretide): complementary mitochondrial membrane targeting vs. MOTS-c's metabolic signaling",
        "NAD+ precursors (NMN/NR): both activate sirtuin-AMPK axis; potential additive effects on mitochondrial function",
        "Humanin: another mitochondrial-derived peptide (MDfP) with overlapping cytoprotective effects",
        "GLP-1 receptor agonists: concurrent metabolic endpoints enable mechanistic differentiation studies",
      ],
    },
    {
      type: "heading",
      text: "Sourcing and Quality Requirements",
    },
    {
      type: "paragraph",
      text: "MOTS-c is a 16-mer peptide that can be synthesized by standard Fmoc solid-phase peptide synthesis. Research-grade MOTS-c should meet the following specifications:",
    },
    {
      type: "list",
      items: [
        "Purity ≥98% by HPLC (reverse-phase C18 column)",
        "Molecular weight confirmed by mass spectrometry (ESI-MS or MALDI-TOF)",
        "Certificate of Analysis with HPLC trace and MS data provided",
        "Sterility testing (USP <71> or equivalent) for in vivo use",
        "LAL endotoxin testing (<1 EU/mg) for IP or IV administration",
        "Lyophilized with inert bulking agent (mannitol or trehalose preferred)",
      ],
    },
    {
      type: "disclaimer",
      text: "MOTS-c is a research compound not approved for human use by FDA, EMA, or other regulatory bodies. All information presented is for preclinical and laboratory research purposes only. Not for human consumption.",
    },
  ],
};
