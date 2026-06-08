import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "adrenomedullin-cardiovascular-peptide-research-guide",
  title: "Adrenomedullin: The Multifunctional Cardiovascular Peptide",
  description:
    "A comprehensive research guide to adrenomedullin (AM) — its discovery, biosynthesis from preproadrenomedullin, receptor biology (CLR/RAMP2/RAMP3), cardiovascular and vascular protective effects, roles in sepsis and inflammation, lymphangiogenesis, and preclinical research protocols.",
  category: "Compound Profiles",
  readMinutes: 10,
  publishedAt: "2026-06-08",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "heading",
      text: "Introduction: Discovery from the Adrenal Medulla",
    },
    {
      type: "paragraph",
      text: "Adrenomedullin (AM) was discovered in 1993 by Kitamura and colleagues in Japan during a systematic screening of human pheochromocytoma (adrenal medullary tumor) tissue for novel bioactive peptides using a cyclic AMP assay in rat platelets. The peptide was named for its site of discovery — the adrenal medulla — but subsequent research revealed that adrenomedullin is far more than an adrenal hormone. It is produced by virtually every vascular tissue in the body, circulates in plasma at detectable concentrations under homeostatic conditions, and plays fundamental roles in blood pressure regulation, vascular tone, endothelial integrity, lymphangiogenesis, organ protection during ischemia, and modulation of inflammatory responses.",
    },
    {
      type: "paragraph",
      text: "Today, adrenomedullin is recognized as one of the most potent endogenous vasodilators known — substantially more potent than CGRP on a molar basis in some vascular beds — and as a major cardioprotective and vasculoprotective factor whose circulating levels rise dramatically in cardiovascular disease, sepsis, and critical illness. Mid-regional pro-adrenomedullin (MR-proADM) is now a clinical biomarker for sepsis severity and heart failure prognosis. For researchers in cardiovascular biology, inflammation, lymphatic biology, or critical care medicine, AM represents an essential research target.",
    },
    {
      type: "heading",
      text: "Preproadrenomedullin and Biosynthesis",
    },
    {
      type: "subheading",
      text: "Gene Organization and Precursor Processing",
    },
    {
      type: "paragraph",
      text: "Human adrenomedullin is encoded by the ADM gene on chromosome 11p15.4. The primary translation product is preproadrenomedullin (185 amino acids), which undergoes signal peptide cleavage and further processing to generate two known bioactive peptides: adrenomedullin (52 amino acids) and PAMP (proadrenomedullin N-terminal 20 peptide). Both peptides are co-secreted and have distinct but complementary cardiovascular and antimicrobial activities. A second adrenomedullin gene product, ADM2 (also called intermedin), was identified in 2004 and shares the same receptor system but with distinct expression patterns and some unique physiological actions — particularly in renal and intestinal tissue.",
    },
    {
      type: "subheading",
      text: "Mature Adrenomedullin Structure",
    },
    {
      type: "paragraph",
      text: "Human adrenomedullin (AM) is a 52-amino acid peptide (MW 5727 Da) with a 6-residue ring structure formed by a disulfide bond between Cys16 and Cys21. It has a C-terminal amide group (Tyr52-NH2), produced by peptidylglycine α-amidating monooxygenase (PAM) processing — a modification required for full biological activity. The molecule belongs to the calcitonin gene-related peptide (CGRP) superfamily, sharing structural features with CGRP, amylin, and calcitonin. The disulfide ring and amidated C-terminus are conserved across species (human, rat, mouse, porcine AM share 50-94% sequence identity) and are essential for receptor binding.",
    },
    {
      type: "paragraph",
      text: "In plasma, AM circulates in two forms: free AM (bioactive) and albumin-bound AM (bioinactive). The ratio between these forms changes dramatically in disease states — in sepsis, the total AM rises while the free bioactive fraction may be disproportionately elevated, driving vasodilation and vascular leak. Plasma AM is metabolized primarily in the lungs (which remove approximately 30-50% per pass) by neutral endopeptidase (neprilysin/NEP) and non-specific peptidases.",
    },
    {
      type: "heading",
      text: "Receptor Biology: CLR, RAMP2, and RAMP3",
    },
    {
      type: "subheading",
      text: "The CLR/RAMP Receptor System",
    },
    {
      type: "paragraph",
      text: "AM signals through a receptor system that is unique in pharmacology: its functional receptor consists of two proteins — the calcitonin receptor-like receptor (CLR, a class B GPCR) plus one of two receptor activity-modifying proteins (RAMPs). CLR alone does not reach the cell surface efficiently and cannot bind ligand. Association with RAMP2 produces the AM1 receptor; association with RAMP3 produces the AM2 receptor. Both AM1 and AM2 bind AM with high affinity (Kd ~1 nM) but differ in their co-agonist pharmacology: CGRP shows much higher affinity at CLR/RAMP1 (the 'CGRP receptor') than at AM1 or AM2, while AM shows equivalent or modestly higher affinity at AM1 vs. AM2.",
    },
    {
      type: "paragraph",
      text: "Both AM receptors couple to Gs proteins, activating adenylyl cyclase and raising intracellular cAMP. Downstream cAMP-PKA signaling drives vasodilation (via BKCa channel activation and NO-cGMP pathways), endothelial barrier enhancement (via EPAC and VE-cadherin stabilization), and cell survival signaling (PI3K/Akt). AM receptors also signal through β-arrestin, ERK1/2, and PKC pathways in a cell-type-dependent manner.",
    },
    {
      type: "subheading",
      text: "RAMP2 Is Essential for Vascular Development",
    },
    {
      type: "paragraph",
      text: "The genetic evidence for AM/CLR/RAMP2 signaling in vascular biology is compelling. Global knockout of AM, CLR, or RAMP2 in mice produces lethal hydrops fetalis — embryonic edema with hemorrhage and lymphatic maldevelopment — at approximately embryonic day E14.5. Conditional endothelial-specific RAMP2 knockout mice survive but develop adult-onset vascular pathology including increased arterial stiffness, endothelial dysfunction, impaired angiogenesis in wound healing models, and exaggerated ischemia-reperfusion injury. These genetic models have been critical tools for establishing the non-redundant role of AM signaling in vascular homeostasis.",
    },
    {
      type: "heading",
      text: "Cardiovascular Effects",
    },
    {
      type: "subheading",
      text: "Vasodilation and Blood Pressure Regulation",
    },
    {
      type: "paragraph",
      text: "Intravenous AM infusion in humans and experimental animals produces potent, dose-dependent hypotension accompanied by increased heart rate (a reflex response). The vasodilation is endothelium-dependent and involves both NO-dependent mechanisms (blocked by L-NAME) and NO-independent mechanisms (cAMP-mediated direct smooth muscle relaxation). In different vascular beds, the relative contribution of these mechanisms varies: in pulmonary vasculature, AM's vasodilatory effect is particularly pronounced and has driven interest in AM-based therapies for pulmonary arterial hypertension.",
    },
    {
      type: "paragraph",
      text: "Continuous AM infusion in rats and mice increases cardiac output, reduces systemic vascular resistance, and shows favorable effects on left ventricular remodeling after myocardial infarction — reducing infarct size, attenuating cardiomyocyte apoptosis, and preserving ejection fraction. Clinical phase II trials using AM infusion in acute myocardial infarction (AMI) patients showed trends toward reduced infarct size by cardiac MRI, though phase III efficacy data in this indication are not yet available.",
    },
    {
      type: "subheading",
      text: "Endothelial Barrier Protection",
    },
    {
      type: "paragraph",
      text: "One of AM's most important and therapeutically relevant functions is strengthening the endothelial barrier — the tight junctions and adherens junctions that prevent fluid and protein leak from the vasculature into tissues. AM activates EPAC1 (Exchange Protein directly Activated by cAMP), which promotes Rac1 GTPase activity, cortical actin reorganization, and VE-cadherin junctional stabilization. In models of VEGF-induced vascular permeability, LPS-induced leak, and thrombin-induced gap formation, AM or exogenous AM infusion reduces permeability by 50-80%.",
    },
    {
      type: "paragraph",
      text: "This barrier-protective function is particularly relevant in sepsis, acute lung injury, and cytokine storm contexts where vascular leak drives multi-organ failure. Plasma AM levels rise dramatically in human sepsis (10-50 fold above normal), likely representing a compensatory protective response. Clinical studies have shown that higher AM levels in septic patients correlate with organ failure, but this likely reflects the severity of the underlying inflammatory signal driving AM production rather than AM itself causing harm.",
    },
    {
      type: "heading",
      text: "Adrenomedullin in Sepsis",
    },
    {
      type: "subheading",
      text: "Biomarker Role: MR-proADM",
    },
    {
      type: "paragraph",
      text: "Direct measurement of mature AM in plasma is technically challenging due to its short half-life (~20 minutes) and requirement for special protease inhibitor collection conditions. Mid-regional pro-adrenomedullin (MR-proADM) — a stable fragment of the AM precursor (residues 45-92) that is stoichiometrically co-secreted with mature AM but has a longer half-life (~3 hours) — is measured as a surrogate for AM production. MR-proADM is now validated as a prognostic biomarker for 28-day mortality in community-acquired pneumonia (CAP), sepsis, and acute decompensated heart failure, with diagnostic performance superior to lactate in some meta-analyses for predicting ICU admission in CAP.",
    },
    {
      type: "subheading",
      text: "Therapeutic AM in Sepsis: Adrecizumab",
    },
    {
      type: "paragraph",
      text: "The most advanced clinical application of AM biology is adrecizumab — a non-neutralizing monoclonal antibody directed against the N-terminus of mature AM. Rather than blocking AM, adrecizumab binds circulating AM and extends its plasma half-life by preventing renal clearance (the 'Fc trap' mechanism), effectively amplifying endogenous AM bioavailability. Phase IIa (ADRENOSS-2) trial results showed adrecizumab reduced organ failure (SOFA score decline) and 28-day mortality trends in septic shock patients with high MR-proADM levels, with a favorable safety profile. Phase IIb/III trials are ongoing.",
    },
    {
      type: "heading",
      text: "Lymphangiogenesis",
    },
    {
      type: "paragraph",
      text: "RAMP2-mediated AM signaling in lymphatic endothelial cells (LECs) is essential for lymphatic vessel development and maintenance. AM promotes LEC survival, migration, and tube formation in vitro, and RAMP2 knockout mice develop chylous ascites, lymphedema, and lymphatic valve defects. This establishes AM/CLR/RAMP2 as a critical lymphangiogenic signaling axis alongside VEGF-C/VEGFR3.",
    },
    {
      type: "paragraph",
      text: "In cancer biology, AM-induced lymphangiogenesis may promote tumor lymphatic metastasis, as tumor-derived AM can stimulate peri-tumoral lymphatic vessel growth. Conversely, AM's anti-tumor endothelial and stromal effects in some experimental systems have yielded conflicting data on whether AM promotes or limits tumor progression — a context-dependent complexity that remains an active area of research.",
    },
    {
      type: "heading",
      text: "Anti-Inflammatory and Organ-Protective Effects",
    },
    {
      type: "paragraph",
      text: "Beyond vascular biology, AM has direct anti-inflammatory effects in multiple cell types. In macrophages and monocytes, AM inhibits LPS-stimulated TNF-α, IL-1β, and IL-6 production via cAMP/PKA-mediated suppression of NF-κB and AP-1 transcriptional activity. In neutrophils, AM reduces reactive oxygen species production and degranulation. In epithelial cells, AM promotes barrier function and anti-apoptotic signaling.",
    },
    {
      type: "paragraph",
      text: "In rodent models of inflammatory bowel disease, kidney ischemia-reperfusion injury, brain ischemia, liver ischemia, and acute lung injury, exogenous AM infusion or gene delivery reduces tissue damage scores, inflammatory infiltrate, and apoptotic cell death. The consistent organ-protective effect across diverse injury models has reinforced interest in AM as a therapeutic platform beyond sepsis.",
    },
    {
      type: "heading",
      text: "Research Protocols and Practical Considerations",
    },
    {
      type: "subheading",
      text: "AM Peptide Handling",
    },
    {
      type: "paragraph",
      text: "Human AM(1-52)NH2 is commercially available as a lyophilized research peptide. It should be reconstituted in sterile 0.9% NaCl or phosphate-buffered saline (PBS) at pH 7.4. The free base form is more stable than the acetate salt in solution. Add 0.1% bovine serum albumin (BSA) to carrier solutions for dilute working concentrations (below 1 μg/mL) to prevent adsorption to tubing and glass. Store lyophilized peptide at -80°C; reconstituted solutions at -80°C in aliquots; avoid repeated freeze-thaw cycles.",
    },
    {
      type: "paragraph",
      text: "For in vivo infusion: AM plasma half-life is approximately 20 minutes in rodents. Continuous infusion (via osmotic minipump or IV infusion pump) is required to achieve sustained plasma levels. A dose of 0.1-1.0 μg/kg/min i.v. produces vasodilation measurable by tail-cuff plethysmography in conscious rats. For cardiac protection protocols, typically a bolus (1-10 μg/kg i.v.) at the time of ischemia initiation followed by continuous infusion during reperfusion is used.",
    },
    {
      type: "subheading",
      text: "AM Assays",
    },
    {
      type: "list",
      items: [
        "Plasma MR-proADM: commercial ELISA (BRAHMS MR-proADM KRYPTOR assay) — use EDTA plasma collected in protease inhibitor tubes; stable at -80°C",
        "Mature AM RIA/ELISA: requires phenanthroline (metalloprotease inhibitor) in collection tube; plasma must be extracted with C18 cartridges for most assays",
        "AM mRNA (qRT-PCR): Taqman or SYBR green assays validated for ADM mRNA; housekeeping genes GAPDH and β-actin commonly used",
        "NOP receptor binding assays: [125I]-AM radioligand binding to CLR/RAMP2 membranes or cell-based AM1 receptor binding — available from commercial radioligand vendors",
        "cAMP HTRF assays: suitable for CLR/RAMP2 and CLR/RAMP3 functional agonist/antagonist characterization in cell-based formats",
        "Endothelial barrier assay (ECIS or transwell): HUVEC or HMVEC monolayers with TEER or FITC-dextran permeability — AM 10-100 nM increases barrier function in 2-4 hours",
      ],
    },
    {
      type: "subheading",
      text: "Pharmacological Controls and Tools",
    },
    {
      type: "list",
      items: [
        "AM(22-52): C-terminal AM fragment; acts as a functional antagonist in some vascular preparations — useful as a negative control to confirm AM receptor specificity",
        "AM(1-50): truncated analog lacking the C-terminal two residues; reduced biological activity; can be used as low-activity control",
        "CGRP(8-37): CGRP receptor antagonist that partially blocks CLR; note: not selective between CLR/RAMP1 and CLR/RAMP2 — use selective RAMP2 antibody knockdown for confirmation",
        "L-NAME (Nω-nitro-L-arginine methyl ester): NOS inhibitor; blocks NO-dependent component of AM vasodilation — use to dissect NO-dependent vs. cAMP-dependent mechanisms",
        "Losartan (angiotensin receptor blocker): negative control for AT1R-mediated vs. AM-mediated effects in blood pressure studies",
        "RAMP2 heterozygous mouse (+/-): hypomorphic AM signaling model; shows intermediate phenotypes between wildtype and KO — useful for dose-response modeling",
      ],
    },
    {
      type: "heading",
      text: "Summary",
    },
    {
      type: "paragraph",
      text: "Adrenomedullin is a multifunctional 52-amino acid peptide with potent vasodilatory, endothelial barrier-protective, anti-inflammatory, lymphangiogenic, and organ-protective activities. Signaling through CLR/RAMP2 (AM1) and CLR/RAMP3 (AM2) receptors via Gs/cAMP pathways, it is one of the most physiologically important vascular peptides in the calcitonin family. Its dramatic upregulation in sepsis, heart failure, and ischemia, combined with preclinical evidence of benefit in organ-protective applications, has made it a priority clinical development target — with MR-proADM already established as a prognostic biomarker and adrecizumab advancing through sepsis trials.",
    },
    {
      type: "disclaimer",
      text: "All content is for educational and research purposes only. Adrenomedullin is a research compound. Not approved for human therapeutic use outside of clinical trials.",
    },
  ],
};
