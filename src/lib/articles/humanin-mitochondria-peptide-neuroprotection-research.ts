import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "humanin-mitochondria-peptide-neuroprotection-research",
  title: "Humanin: The Mitochondria-Encoded Neuroprotective Peptide",
  description: "Humanin is a 21-amino acid mitochondria-encoded peptide with documented neuroprotective, cardioprotective, and longevity-associated effects in preclinical models. Research guide.",
  category: "Compound Profiles",
  readMinutes: 11,
  publishedAt: "2026-06-05",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Humanin (HN) is a 21-amino acid peptide encoded within the mitochondrial genome — specifically within the 16S ribosomal RNA gene (MT-RNR2) of mitochondrial DNA. Discovered in 2001 through a functional expression screen for cDNAs capable of rescuing neuronal cells from amyloid-beta toxicity, Humanin was the first identified mitochondria-derived peptide (MDP) with documented cytoprotective activity. Its discovery established an entirely new class of bioactive molecules: short open reading frames (sORFs) within mitochondrial rRNA genes that encode functional peptides with extra-mitochondrial signaling roles.",
    },
    {
      type: "heading",
      text: "Discovery: From Alzheimer's Research to Mitochondrial Genomics",
    },
    {
      type: "paragraph",
      text: "Humanin was identified by Hashimoto and colleagues (2001) using an unbiased functional cloning approach. The researchers constructed a cDNA library from the occipital cortex of an Alzheimer's disease (AD) patient and screened for clones that could protect F11 neuronal hybrid cells from death induced by a familial AD-linked mutant amyloid precursor protein (APP-V642I). Among the protective clones identified, one encoded a short peptide of 21 amino acids (MAPRGFSCLLLLTSEIDLPVKR) that mapped not to the nuclear genome but to the mitochondrial 16S rRNA locus. This was unexpected — mitochondrial rRNA genes were not believed to contain protein-coding sequences.",
    },
    {
      type: "paragraph",
      text: "Subsequent validation confirmed that the Humanin peptide is endogenously produced: it is detectable in human tissues including brain, skeletal muscle, heart, liver, and circulating plasma. Plasma Humanin levels decline with age — a finding that has linked this peptide to theories of mitochondrial-nuclear communication in the aging process. The discovery of Humanin led to identification of additional MDPs including MOTS-c and the SHLPs (small humanin-like peptides 1–6), establishing mitochondrial DNA as a source of bioactive signaling molecules beyond its classical role in oxidative phosphorylation complex subunit encoding.",
    },
    {
      type: "heading",
      text: "Amino Acid Sequence and Structure",
    },
    {
      type: "paragraph",
      text: "The human Humanin sequence is MAPRGFSCLLLLTSEIDLPVKR (21 residues, MW ~2.4 kDa). The peptide is rich in hydrophobic residues (Leu, Ile) suggesting partial membrane interaction capability, with charged residues at both termini providing aqueous solubility. Circular dichroism studies indicate that Humanin adopts a partially alpha-helical conformation in solution, with the helical domain spanning approximately residues 4–16. This amphipathic structure is consistent with membrane-surface interaction without full transmembrane insertion.",
    },
    {
      type: "paragraph",
      text: "Critical residues for biological activity have been identified through alanine-scanning mutagenesis: Pro3, Ser7, Cys8, Leu9, Leu12, Thr13, Ser14 are essential for neuroprotective function. Substitution of Ser14 with Gly creates [Gly14]-Humanin (HNG), an analog with approximately 1000-fold greater potency than wild-type Humanin in cytoprotection assays. This potentiated analog has become the standard tool compound for in vivo Humanin research due to its enhanced efficacy at lower doses.",
    },
    {
      type: "callout",
      text: "[Gly14]-Humanin (HNG) is approximately 1000× more potent than wild-type Humanin in neuroprotection assays and is the preferred analog for in vivo research. Most published animal studies use HNG rather than native sequence Humanin.",
    },
    {
      type: "heading",
      text: "Receptor Pharmacology and Signaling Pathways",
    },
    {
      type: "subheading",
      text: "FPRL1/FPR2 Receptor Binding",
    },
    {
      type: "paragraph",
      text: "Humanin binds to formyl peptide receptor-like 1 (FPRL1, also designated FPR2) — a G-protein coupled receptor expressed on neurons, glia, macrophages, and endothelial cells. FPRL1 is a promiscuous receptor that binds multiple ligands including lipoxin A4, serum amyloid A, and the anti-inflammatory peptide annexin A1. Humanin binding to FPRL1 activates Gαi-coupled signaling, resulting in ERK1/2 phosphorylation, Akt activation, and STAT3 nuclear translocation. This receptor is responsible for a portion of Humanin's neuroprotective and anti-inflammatory signaling.",
    },
    {
      type: "subheading",
      text: "IGFBP-3 Interaction and IGF-1 Axis Modulation",
    },
    {
      type: "paragraph",
      text: "Humanin binds directly to insulin-like growth factor binding protein 3 (IGFBP-3) with nanomolar affinity. IGFBP-3 normally sequesters IGF-1 in ternary complexes with acid-labile subunit (ALS), limiting free IGF-1 bioavailability. Humanin binding to IGFBP-3 disrupts the IGFBP-3/IGF-1 interaction, releasing free IGF-1 and activating IGF-1 receptor signaling cascades (PI3K-Akt, MAPK-ERK). Additionally, IGFBP-3 has IGF-independent pro-apoptotic functions — nuclear IGFBP-3 promotes apoptosis via p53-dependent and -independent mechanisms. Humanin binding neutralizes this pro-apoptotic activity, contributing to its cytoprotective profile.",
    },
    {
      type: "subheading",
      text: "STAT3 Activation",
    },
    {
      type: "paragraph",
      text: "Humanin activates signal transducer and activator of transcription 3 (STAT3) through a trimeric receptor complex comprising CNTFR (ciliary neurotrophic factor receptor), IL-27Rα (WSX-1), and gp130. This receptor heterotrimer is the functional Humanin receptor in neurons and constitutes the primary pathway for its neuroprotective signaling. Upon Humanin binding, JAK2 phosphorylates STAT3 at Y705, enabling dimerization, nuclear translocation, and transcription of anti-apoptotic genes including Bcl-2, Bcl-xL, and Mcl-1. Knockdown of any component of the trimeric receptor abolishes Humanin-mediated neuroprotection in culture.",
    },
    {
      type: "heading",
      text: "Anti-Apoptotic Mechanism: Bax Inhibition",
    },
    {
      type: "paragraph",
      text: "A critical cytoprotective mechanism of Humanin is direct physical interaction with Bax (Bcl-2-associated X protein), the key pro-apoptotic effector in the mitochondrial (intrinsic) apoptosis pathway. Under apoptotic stress, Bax translocates from the cytosol to the outer mitochondrial membrane, oligomerizes, and forms pores that release cytochrome c into the cytoplasm, triggering caspase activation and cell death. Humanin binds Bax in the cytoplasm, preventing its mitochondrial translocation and oligomerization.",
    },
    {
      type: "paragraph",
      text: "Co-immunoprecipitation studies have confirmed the Humanin-Bax interaction in both cell-free systems and intact neurons. Functionally, Humanin prevents cytochrome c release, caspase-9 activation, and caspase-3 cleavage in cells exposed to staurosporine, etoposide, amyloid-beta, and oxidative stress. This places Humanin at the convergence point of multiple death signaling pathways — regardless of the upstream trigger, if the final common pathway involves Bax-mediated mitochondrial permeabilization, Humanin can intervene.",
    },
    {
      type: "heading",
      text: "Neuroprotection: Alzheimer's Disease Models",
    },
    {
      type: "paragraph",
      text: "Humanin's original identification as a neuroprotective factor against amyloid-beta (Aβ) toxicity has been extensively replicated and extended. The peptide protects primary cortical and hippocampal neurons from Aβ1-42 and Aβ25-35 fragment-induced apoptosis at concentrations as low as 1–10 μM (wild-type) or 1–10 nM (HNG analog). Protection extends to multiple cell death pathways engaged by amyloid: oxidative stress, ER stress, and mitochondrial dysfunction.",
    },
    {
      type: "paragraph",
      text: "In vivo studies using transgenic AD mouse models (APP/PS1, 3xTg-AD) have demonstrated that systemic administration of HNG (intraperitoneal, 2–4 mg/kg daily) improves Morris water maze performance, reduces hippocampal amyloid plaque burden, attenuates neuroinflammation (reduced microglial activation, lower TNF-α and IL-1β levels), and preserves synaptic density markers (synaptophysin, PSD-95). These effects are observed after 2–4 weeks of daily administration, suggesting both acute neuroprotective and chronic disease-modifying potential in preclinical AD models.",
    },
    {
      type: "list",
      items: [
        "Protection against Aβ1-42-induced apoptosis in primary neurons (EC50 ~1-10 nM for HNG)",
        "Reduced hippocampal plaque load in APP/PS1 mice after 4-week HNG administration",
        "Preserved spatial memory in Morris water maze (transgenic AD models)",
        "Attenuated neuroinflammation: reduced microglial activation, lower TNF-α/IL-1β",
        "Maintained synaptic markers (synaptophysin, PSD-95) in hippocampal CA1 region",
        "Protection against tau hyperphosphorylation in 3xTg-AD model",
      ],
    },
    {
      type: "heading",
      text: "Metabolic Effects: Insulin Sensitivity and Glucose Regulation",
    },
    {
      type: "paragraph",
      text: "Beyond neuroprotection, Humanin has demonstrated significant metabolic effects in preclinical models. Administration of HNG to high-fat diet (HFD)-fed mice improves insulin sensitivity as measured by glucose tolerance test (GTT) and insulin tolerance test (ITT), reduces fasting glucose levels, and decreases hepatic triglyceride accumulation. These effects appear mediated through both central (hypothalamic insulin signaling enhancement) and peripheral (direct hepatocyte and adipocyte effects) mechanisms.",
    },
    {
      type: "paragraph",
      text: "Mechanistically, Humanin enhances insulin receptor substrate 1 (IRS-1) phosphorylation and downstream PI3K-Akt signaling in hepatocytes, counteracting the insulin resistance induced by saturated fatty acids (palmitate) or inflammatory cytokines (TNF-α). In adipose tissue, Humanin promotes adiponectin secretion and reduces inflammatory macrophage infiltration. The metabolic effects of Humanin are particularly relevant given that type 2 diabetes is an established risk factor for Alzheimer's disease, suggesting that Humanin may sit at the intersection of metabolic and neurodegenerative pathology.",
    },
    {
      type: "heading",
      text: "Cardiovascular Protection",
    },
    {
      type: "paragraph",
      text: "Humanin demonstrates cardioprotective effects in ischemia-reperfusion (I/R) injury models. Pretreatment with HNG (intravenous, 1–4 mg/kg) before coronary artery occlusion reduces myocardial infarct size by 30–50% in rodent models. The mechanism involves preservation of mitochondrial membrane potential in cardiomyocytes, reduced ROS production during reperfusion, and inhibition of mitochondrial permeability transition pore (mPTP) opening — the critical event that converts reversible ischemic injury to irreversible necrosis.",
    },
    {
      type: "paragraph",
      text: "Additionally, Humanin protects against endothelial dysfunction induced by oxidized LDL and high glucose, preserving nitric oxide (NO) bioavailability through upregulation of eNOS expression and reduction of superoxide generation. In atherosclerosis-prone ApoE−/− mice, chronic HNG administration reduces aortic plaque area and macrophage content, suggesting anti-atherogenic properties beyond acute cardioprotection.",
    },
    {
      type: "heading",
      text: "Longevity Associations and the IGF-1 Axis",
    },
    {
      type: "paragraph",
      text: "Circulating Humanin levels decline progressively with age in humans and model organisms. Cross-sectional studies have reported approximately 40% lower plasma Humanin concentrations in adults aged 70–90 compared to those aged 20–40. This age-related decline parallels the decline in mitochondrial function, copy number, and overall oxidative capacity that characterizes biological aging. Conversely, centenarian populations and their offspring show elevated Humanin levels compared to age-matched controls, suggesting that sustained Humanin production may be a biomarker — or contributor — to exceptional longevity.",
    },
    {
      type: "paragraph",
      text: "The relationship between Humanin and the GH/IGF-1 axis is bidirectional and complex. Growth hormone (GH) administration reduces circulating Humanin levels, while Humanin itself modulates IGF-1 bioavailability through IGFBP-3 binding (as described above). Given that reduced GH/IGF-1 signaling is one of the most conserved longevity-promoting interventions across species (from C. elegans daf-2 mutants to Ames dwarf mice), the inverse relationship between GH and Humanin suggests that Humanin elevation may represent a compensatory cytoprotective response when GH/IGF-1 tone is reduced.",
    },
    {
      type: "list",
      items: [
        "Plasma Humanin declines ~40% between ages 20 and 90 in humans",
        "Centenarians and their offspring show elevated Humanin relative to age-matched controls",
        "GH administration acutely suppresses circulating Humanin",
        "Caloric restriction (a longevity intervention) elevates tissue Humanin expression in rodents",
        "Mitochondrial DNA copy number correlates positively with Humanin production capacity",
        "Humanin levels track with mitochondrial function decline in aging muscle tissue",
      ],
    },
    {
      type: "heading",
      text: "Handling, Storage, and Research Preparation",
    },
    {
      type: "paragraph",
      text: "Humanin and its analogs (HNG, HNGF6A, S7A-HN) are typically supplied as lyophilized powders. The native Humanin sequence is water-soluble and can be reconstituted directly in sterile water, PBS (pH 7.4), or physiological saline at concentrations up to 5 mg/mL without solubility issues. The HNG analog has equivalent solubility characteristics. Upon reconstitution, aliquot into single-use volumes to avoid repeated freeze-thaw degradation.",
    },
    {
      type: "list",
      items: [
        "Lyophilized storage: -20°C (long-term) or -80°C (archival), desiccated, protected from light",
        "Reconstituted storage: -20°C in single-use aliquots; stable for 1–2 weeks at 4°C",
        "Reconstitution vehicle: Sterile water, bacteriostatic water, or PBS (pH 7.4)",
        "Working concentrations: In vitro 1–100 nM (HNG) or 1–100 μM (wild-type HN); In vivo 2–4 mg/kg/day IP (HNG in mice)",
        "Avoid repeated freeze-thaw cycles (>3 cycles may reduce bioactivity)",
        "Peptide is not cell-permeable in the classical sense but is taken up through receptor-mediated endocytosis",
      ],
    },
    {
      type: "heading",
      text: "Research Limitations and Open Questions",
    },
    {
      type: "paragraph",
      text: "Despite a substantial preclinical literature (>500 publications since 2001), Humanin has not progressed to human clinical trials for any indication. The primary barriers include: uncertain pharmacokinetics in humans, short plasma half-life requiring frequent dosing or sustained-release formulation, the lack of validated clinical biomarkers to assess target engagement, and regulatory challenges associated with peptide therapeutics derived from mitochondrial genomic sequences.",
    },
    {
      type: "list",
      items: [
        "No completed human clinical trials for any Humanin analog",
        "Plasma half-life in rodents is minutes (requires IP or IV dosing; subcutaneous pharmacokinetics less characterized)",
        "Endogenous Humanin regulation mechanisms not fully understood",
        "Relationship between circulating and tissue-level Humanin concentrations unclear",
        "Potential for immunogenicity with chronic exogenous administration not assessed",
        "Optimal analog selection (HNG vs. HNGF6A vs. other variants) for different target tissues undetermined",
      ],
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "Humanin stands as the founding member of mitochondria-derived peptides — a class of molecules that has fundamentally expanded our understanding of mitochondrial biology beyond energy production. Its multi-receptor signaling (FPRL1, IGFBP-3, CNTFR/WSX-1/gp130 trimer), direct anti-apoptotic activity (Bax sequestration), and documented efficacy across neuroprotective, metabolic, and cardiovascular models make it one of the most pharmacologically versatile peptides under research investigation. The age-related decline in endogenous Humanin production positions it as both a biomarker of mitochondrial aging and a candidate intervention for age-associated pathology.",
    },
    {
      type: "disclaimer",
      text: "This article is for informational and educational purposes only. Humanin and its analogs are research compounds not approved for human therapeutic use. All effects, mechanisms, and dosing information referenced herein pertain exclusively to published preclinical (in vitro and animal model) studies. This material does not constitute medical advice. Researchers must comply with all applicable institutional and regulatory requirements governing peptide research.",
    },
  ],
};
