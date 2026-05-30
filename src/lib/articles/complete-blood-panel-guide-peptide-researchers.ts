import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: 'complete-blood-panel-guide-peptide-researchers',
  title: 'Complete Blood Panel Guide for Peptide Researchers',
  description:
    'Which lab markers to track, when to sample, reference ranges by species and sex, and how to interpret CBC, CMP, hormone panels, and specialized biomarkers when running peptide research protocols.',
  category: 'Research Fundamentals',
  readMinutes: 10,
  publishedAt: '2026-05-30',
  ogImage: '/og-image.jpg',
  body: [
    {
      type: 'paragraph',
      text: 'Biomarker tracking is the difference between a research protocol and a controlled experiment. Without baseline and endpoint blood panels, it is impossible to confirm compound activity, detect off-target effects, or generate reproducible data. Yet many first-time peptide researchers underestimate which markers matter, when to collect samples, and how to interpret results in the context of preclinical rodent models. This guide provides a practical, compound-specific blood panel framework covering CBC, comprehensive metabolic panel, hormone axes, and specialized markers — organized by research category.',
    },
    {
      type: 'heading',
      text: 'Why Blood Panels Matter in Peptide Research',
    },
    {
      type: 'paragraph',
      text: 'Peptide compounds exert their effects through specific receptor-mediated signaling cascades, and blood biomarkers provide objective, quantifiable evidence of those effects. A GH secretagogue protocol without IGF-1 measurements offers no confirmation that the somatotropic axis was actually stimulated. A GLP-1 analog study without HOMA-IR and fasting glucose provides no metabolic endpoint. Beyond efficacy markers, routine safety panels — particularly ALT/AST for hepatic function and creatinine/BUN for renal clearance — are essential to detect unexpected toxicity, particularly at high doses or in combination protocols.',
    },
    {
      type: 'paragraph',
      text: 'Equally important is pre-study baseline collection. Rodent biomarker values vary substantially by age, sex, strain, and housing conditions. Without baseline values, end-point data cannot be contextualized. Collect a pre-treatment baseline at least 3–5 days after acclimation, and ensure the same circadian sampling window is used at all time points.',
    },
    {
      type: 'heading',
      text: 'Core Panel: CBC + CMP (Every Protocol)',
    },
    {
      type: 'paragraph',
      text: 'The minimum blood panel for any research protocol should include a complete blood count (CBC) and comprehensive metabolic panel (CMP). In mice, terminal cardiac puncture or retro-orbital bleed yields 0.5–1.0 mL; in rats, jugular or cardiac puncture yields 5–10 mL. EDTA tubes for CBC, serum separator (SST) for CMP. Process within 30 minutes of collection for accurate results.',
    },
    {
      type: 'paragraph',
      text: '**CBC markers to track:** White blood cell count (WBC) and differential (neutrophils, lymphocytes, monocytes) — relevant for immunomodulatory peptides (Thymosin Alpha-1, LL-37, KPV). Red blood cell count and hemoglobin — relevant for BPC-157 (angiogenesis data) and GHK-Cu (erythropoiesis signaling). Platelet count — relevant for TB-500 (thymosin beta-4 is abundant in platelets, platelet function studies). A significant WBC change (>25% from baseline) indicates an immune response that may confound behavioral or metabolic endpoints.',
    },
    {
      type: 'paragraph',
      text: '**CMP markers to track:** ALT and AST (hepatic transaminases) — the primary safety markers for any systemic peptide at doses >50 μg/kg. Values >3× upper limit of normal (ULN) indicate hepatocellular stress. GLP-1 agonists at high doses may cause mild ALT elevation in some models; tesamorelin and tirzepatide are generally hepato-neutral or protective. Creatinine and BUN — renal function; SS-31 has shown renal protective effects in cisplatin toxicity models, making these markers particularly relevant for mitochondria-targeted peptide research. Fasting glucose and insulin — mandatory for all metabolic peptide protocols (semaglutide, tirzepatide, retatrutide, MK-677, MOTS-c). Calculate HOMA-IR = (fasting glucose × fasting insulin) / 22.5 for insulin sensitivity.',
    },
    {
      type: 'heading',
      text: 'GH Axis Panel: IGF-1, GH Pulsatility, and IGFBP-3',
    },
    {
      type: 'paragraph',
      text: 'For GH secretagogue research (ipamorelin, CJC-1295, sermorelin, tesamorelin, MK-677, GHRP-2, GHRP-6, hexarelin), IGF-1 is the primary efficacy biomarker. IGF-1 is hepatically synthesized in response to sustained GH signaling and has a 12–15 hour half-life (bound to IGFBP-3 in a 150 kDa ternary complex), making it a stable surrogate for integrated GH exposure over 24 hours — far more reliable than direct GH measurement from a single time point.',
    },
    {
      type: 'paragraph',
      text: '**Sampling timing for IGF-1:** Collect at ZT3–ZT5 (3–5 hours into the light phase in rodents), which corresponds to the post-nocturnal-GH-pulse trough when circulating IGF-1 reflects previous 18-hour integrated GH exposure. Sampling at ZT12 or during the dark phase produces highly variable results due to active GH pulsatility. For mouse studies: Crystal Chem Mouse/Rat IGF-1 ELISA #80574 (requires acid-ethanol extraction to disrupt IGFBP-3 ternary complex — do not skip this step; without extraction you will underestimate IGF-1 by 40–60%). For rat studies: use R&D Systems Quantikine MG100 after acid-ethanol extraction.',
    },
    {
      type: 'paragraph',
      text: '**Expected IGF-1 responses (published data):** MK-677 at 10 mg/kg oral: +39.9% from baseline at 12 weeks (Nass 2008 Annals of Internal Medicine). Ipamorelin at 300 nmol/kg SC: +30–45% at 6–8 weeks (Johansen 1999). CJC-1295 No DAC + ipamorelin combination: +60–85% at 8 weeks (Bowers 1998 synergy calculation). Sermorelin at 100 mcg/kg SC: +35–50% at 8 weeks (multiple GHRH analog meta-analysis data). Tesamorelin at 200 mcg/kg SC: +46% vs placebo at 12 weeks (FDA phase 3 trial reference range).',
    },
    {
      type: 'paragraph',
      text: '**Cortisol/ACTH (for GHRP specificity research):** If your protocol involves GHRP-2, GHRP-6, or hexarelin — which activate the HPA axis — include plasma ACTH and corticosterone (rodents do not produce cortisol; use corticosterone ELISA). Sample 20–30 minutes post-injection. Ipamorelin-treated animals should show NO significant corticosterone elevation at standard doses (100–300 μg/kg); this is the mechanistic distinction from GHRP-2/GHRP-6 and should be explicitly verified rather than assumed.',
    },
    {
      type: 'heading',
      text: 'Metabolic Panel: GLP-1 Agonist and Insulin-Sensitizer Research',
    },
    {
      type: 'paragraph',
      text: 'For GLP-1/GIP research (semaglutide, tirzepatide, retatrutide) and insulin-sensitizing peptides (MOTS-c), the metabolic panel must be comprehensive. Fasting protocol: 4–6 hours food withdrawal (overnight fast is excessive in mice, causes weight loss artifacts). Collect: fasting glucose (glucometer acceptable for screening, chemistry analyzer for precision), fasting insulin (Crystal Chem Ultra-Sensitive Mouse Insulin ELISA #90080), total cholesterol, HDL, LDL, triglycerides, HbA1c (less useful in short rodent studies <16 weeks due to slow erythrocyte turnover), and adiponectin (AdipoR1/R2 pathway activation marker, particularly relevant for MOTS-c and GLP-1 agonist protocols).',
    },
    {
      type: 'paragraph',
      text: '**Glucose tolerance test (GTT) and insulin tolerance test (ITT):** GTT: 6-hour fast, 2 g/kg IP glucose bolus, blood glucose at 0, 15, 30, 60, 90, 120 minutes (tail nick, glucometer). AUC calculation: trapezoidal method. ITT: 4-hour fast, 0.5–0.75 U/kg IP regular insulin, glucose at 0, 15, 30, 45, 60 minutes. Report nadir glucose and time-to-nadir. Run GTT and ITT on separate days (minimum 48-hour washout). Avoid running GTT in the same week as a major intervention change. Include a pair-fed vehicle control group whenever possible to dissect food-intake-dependent from food-intake-independent metabolic effects.',
    },
    {
      type: 'heading',
      text: 'Repair and Tissue Remodeling Panel: BPC-157, TB-500, GHK-Cu',
    },
    {
      type: 'paragraph',
      text: 'For tissue repair protocols, circulating biomarkers are supplementary to histological endpoints, but several markers add quantitative value. VEGF (vascular endothelial growth factor): plasma VEGF rises in BPC-157 and GHK-Cu treated animals during the proliferative repair phase (days 5–14 post-injury). R&D Systems Mouse VEGF Quantikine ELISA MMV00. Collect plasma in EDTA with protease inhibitor cocktail (aprotinin). eNOS/NO pathway activity is not directly measurable in plasma; use tissue nitrate/nitrite (Griess assay on tissue homogenate) as a proxy for local NO production.',
    },
    {
      type: 'paragraph',
      text: 'Collagen synthesis can be tracked via serum PINP (N-terminal propeptide of type I procollagen) or hydroxyproline content in tissue homogenate. PINP provides a non-destructive systemic collagen synthesis marker useful for serial sampling in chronic protocols. Hydroxyproline assay (chloramine-T colorimetric method) on biopsy material provides local tissue collagen content at sacrifice. For GHK-Cu wound healing protocols, CD31 vessel density (immunofluorescence) and α-SMA myofibroblast staining (IHC) are the primary tissue endpoints, with serum VEGF as the circulating proxy.',
    },
    {
      type: 'heading',
      text: 'Longevity Panel: NAD+, Epitalon, SS-31',
    },
    {
      type: 'paragraph',
      text: 'Longevity research biomarkers require both blood and tissue sampling. For NAD+ protocols: measure NAD+/NADH ratio in tissue homogenate (EnzyFluo NAD+/NADH assay, BioAssay Systems) — blood NAD+ measurement is unreliable due to red blood cell compartmentalization. For whole-blood NAD+ quantification, use tandem mass spectrometry (LC-MS/MS) if available. Sirtuin activity: SIRT1/SIRT3 deacetylase activity assay (fluorescent substrate Fluor-de-Lys, Enzo Life Sciences) on tissue nuclear or mitochondrial lysate. Acetyl-PGC-1α immunoprecipitation/western as a downstream SIRT1 activity marker.',
    },
    {
      type: 'paragraph',
      text: 'For SS-31/elamipretide protocols: measure mitochondrial function endpoints rather than blood markers. Seahorse XF Analyzer respiratory rate measurement on isolated mitochondria or permeabilized fibers (oxygen consumption rate — OCR, spare respiratory capacity — SRC). Mitochondrial membrane potential via JC-1 or TMRE fluorescence. Calcium retention capacity (CRC) as mPTP opening threshold via sequential CaCl₂ additions to isolated mitochondria. These functional measurements are far more informative than any plasma marker for SS-31 efficacy.',
    },
    {
      type: 'paragraph',
      text: 'For Epitalon telomere research: TRAP (telomeric repeat amplification protocol) assay on tissue or cell lysate — requires certified molecular biology lab setup. Quantitative FISH (Q-FISH) or qPCR-based relative telomere length on peripheral blood leukocytes (DNA extracted via column purification). Melatonin in urine (6-sulphatoxymelatonin, urinary metabolite, ELISA kit from Alpco #082-SLMEK-E01) as a pineal restoration biomarker for Epitalon.',
    },
    {
      type: 'heading',
      text: 'Sampling Volume Constraints and Serial Sampling Design',
    },
    {
      type: 'paragraph',
      text: 'Mouse blood volume is approximately 1.5–2.5 mL (70–80 mL/kg). Safe serial sampling without compromising welfare or hematology: maximum 10% total blood volume per collection, maximum 15% over any 4-week period. In practice: tail nick = 50–100 μL, retro-orbital bleed = 100–300 μL, saphenous vein = 50–200 μL. For rat studies: jugular cannulation allows repeated sampling from the same animal with minimal stress — critical for serial IGF-1, glucose, and hormone measurements. Without cannulation, each rat rat bleeding event involves handling stress that elevates corticosterone and transiently suppresses GH pulsatility.',
    },
    {
      type: 'paragraph',
      text: 'Minimize handling stress: habituate animals to the weighing/sampling procedure for 5–7 days before the first blood collection. Collect samples at the same time of day (same ZT), same operator, same restraint method. Restraint-induced corticosterone peaks within 5 minutes of handling — if measuring corticosterone, use tail tip amputation under brief isoflurane (<30 seconds) or collect from a pre-implanted catheter.',
    },
    {
      type: 'heading',
      text: 'Sample Collection Tube Guide',
    },
    {
      type: 'paragraph',
      text: 'EDTA (purple cap): CBC, whole blood NAD+ (if using enzymatic method), DNA for telomere assays. Heparin (green cap): plasma for cytokines (IL-6, TNF-α, IL-10), VEGF, PCSK9, and most peptide quantification. SST/serum (red/gold cap): chemistry panel (ALT, AST, BUN, creatinine, glucose, lipids), IGF-1 after acid-ethanol extraction, IGFBP-3. Citrate (blue cap): coagulation studies (relevant for PT-141 CV monitoring in high-dose primate models). Aprotinin tubes: for peptide hormone quantification (GH, insulin, corticosterone) to prevent kallikrein-mediated ex vivo degradation — add 500 KIU/mL aprotinin to EDTA or heparin immediately on collection.',
    },
    {
      type: 'heading',
      text: 'Quick Reference: Biomarker Panel by Research Goal',
    },
    {
      type: 'paragraph',
      text: '**GH axis peptides (ipamorelin, CJC-1295, sermorelin, tesamorelin, MK-677, GHRP-2, GHRP-6, hexarelin):** IGF-1 (primary efficacy), corticosterone (for non-ipamorelin GHRPs), ACTH (for HPA axis specificity), GH pulsatility via serial 10-minute tail nick sampling (6–8 time points at ZT12–ZT18), prolactin (hexarelin/GHRP-2 at high doses). Safety: ALT, AST, fasting glucose, insulin.',
    },
    {
      type: 'paragraph',
      text: '**GLP-1/metabolic peptides (semaglutide, tirzepatide, retatrutide, MOTS-c):** Fasting glucose, fasting insulin, HOMA-IR, HbA1c (if >12 weeks), GTT/ITT AUC, total cholesterol, HDL, LDL, triglycerides, adiponectin, leptin, body weight and EchoMRI body composition. Safety: ALT, AST, creatinine.',
    },
    {
      type: 'paragraph',
      text: '**Repair peptides (BPC-157, TB-500, GHK-Cu, Wolverine Blend):** VEGF, serum PINP (collagen synthesis), CBC with differential, tissue histology (H&E, Masson\'s trichrome). Wound healing model: planimetric area, CD31 vessel density, α-SMA myofibroblast content. Safety: ALT, AST, CBC.',
    },
    {
      type: 'paragraph',
      text: '**Longevity peptides (NAD+, Epitalon, SS-31, GHK-Cu):** Tissue NAD+/NADH ratio, sirtuin activity (SIRT1/SIRT3 deacetylase), Seahorse OCR/SRC, 8-OHdG (oxidative DNA damage), telomere length (Q-FISH or qPCR), urinary melatonin (Epitalon-specific), mtDNA copy number (mitochondrial biogenesis marker). Safety: ALT, AST, creatinine, CBC.',
    },
    {
      type: 'paragraph',
      text: '**Immunology peptides (Thymosin Alpha-1, LL-37, KPV):** CBC with full differential (CD4+/CD8+ T-cell subset flow cytometry if available), NK cell cytotoxicity assay, serum IL-6, TNF-α, IL-12, IFN-γ (Luminex multiplex panel for efficiency), IgG titers (if vaccination adjuvant model). Safety: ALT, AST, CBC.',
    },
    {
      type: 'heading',
      text: 'Research Use Only Disclaimer',
    },
    {
      type: 'paragraph',
      text: 'All Nexphoria compounds are for research use only. This guide is intended for qualified researchers conducting preclinical studies in appropriate institutional settings. All blood collection and animal procedures must be conducted under approved IACUC or equivalent ethics protocols. None of the biomarker interpretations in this guide constitute clinical or diagnostic guidance.',
    },
  ],
};
