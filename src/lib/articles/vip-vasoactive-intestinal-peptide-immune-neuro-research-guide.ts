import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "vip-vasoactive-intestinal-peptide-immune-neuro-research-guide",
  title: "VIP (Vasoactive Intestinal Peptide): Immune & Neuro Research Guide (2026)",
  description:
    "Vasoactive Intestinal Peptide (VIP) is a pleiotropic neuropeptide with potent anti-inflammatory, immunomodulatory, and neuroprotective properties. This guide covers VIP's receptors (VPAC1, VPAC2), its role in gut-brain-immune axis signaling, inflammatory disease models, and research into long-acting VIP analogs.",
  category: "Compound Profiles",
  readMinutes: 11,
  publishedAt: "2026-06-05",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Vasoactive Intestinal Peptide (VIP) was first isolated from porcine intestine in 1970 by Said and Mutt, who characterized it based on its potent vasodilatory properties in the lungs. Since this initial discovery, VIP has emerged as one of the most multifunctional neuropeptides in the human body — regulating inflammation, immune cell trafficking, circadian rhythms, gut motility, neurotransmission, and vasomotor tone across nearly every organ system. In the modern peptide research landscape, VIP's extraordinary anti-inflammatory potency and neuroprotective properties have driven renewed interest as a research candidate.",
    },
    {
      type: "heading",
      text: "What Is VIP?",
    },
    {
      type: "paragraph",
      text: "VIP is a 28-amino acid neuropeptide belonging to the glucagon/secretin superfamily, which also includes PACAP (Pituitary Adenylate Cyclase-Activating Polypeptide), glucagon, GLP-1, GIP, and secretin. It is encoded by the VIP gene on chromosome 6q25 in humans, along with PHM-27 (peptide histidine methionine) as a co-secreted product.",
    },
    {
      type: "list",
      items: [
        "Molecular weight: ~3.3 kDa (28 amino acids)",
        "Sequence: H-Ser-Asp-Ala-Val-Phe-Thr-Asp-Asn-Tyr-Thr-Arg-Leu-Arg-Lys-Gln-Met-Ala-Val-Lys-Lys-Tyr-Leu-Asn-Ser-Ile-Leu-Asn-NH2",
        "C-terminal amidation: essential for full receptor binding activity",
        "Primary receptors: VPAC1 (VIPR1) and VPAC2 (VIPR2) — both GPCRs coupled to Gs/cAMP; also weak affinity for PAC1 receptor",
        "Half-life in plasma: ~1–2 minutes (rapid degradation by NEP, DPP4, prolyl oligopeptidase)",
      ],
    },
    {
      type: "heading",
      text: "VIP Receptors: VPAC1 and VPAC2",
    },
    {
      type: "paragraph",
      text: "Both VPAC1 and VPAC2 signal primarily through cAMP/PKA and PI3K/Akt pathways following Gs protein coupling. Their differential tissue distribution confers tissue-specific VIP effects:",
    },
    {
      type: "subheading",
      text: "VPAC1",
    },
    {
      type: "paragraph",
      text: "VPAC1 is the predominant VIP receptor in the lung, liver, small intestine, and most immune cells (T cells, macrophages, dendritic cells). It has higher expression on Th1 lymphocytes compared to Th2 cells, contributing to VIP's Th1-suppressing/Th2-promoting immunomodulatory bias. VPAC1 activation in macrophages drives a strong anti-inflammatory response, suppressing NF-κB, TNF-α, IL-6, and IL-12 while promoting IL-10 production.",
    },
    {
      type: "subheading",
      text: "VPAC2",
    },
    {
      type: "paragraph",
      text: "VPAC2 is expressed primarily in smooth muscle, heart, CNS (particularly in suprachiasmatic nucleus/SCN neurons), and Th2 lymphocytes. VPAC2 in the SCN plays a central role in entraining circadian rhythms — VIP/VPAC2 signaling synchronizes individual clock neurons within the SCN into a coherent daily rhythm. VPAC2-knockout mice show severely disrupted circadian behavior. Additionally, VPAC2 on β-islet cells modulates insulin secretion in a glucose-dependent manner.",
    },
    {
      type: "heading",
      text: "Immune Regulation: VIP as a Natural Anti-Inflammatory",
    },
    {
      type: "paragraph",
      text: "VIP's immunomodulatory properties are among its most extensively studied and therapeutically relevant characteristics. The peptide is produced locally within lymphoid organs by innervating nerve fibers and by immune cells themselves (T cells can express and secrete VIP), creating an autocrine/paracrine regulatory loop within inflamed tissues.",
    },
    {
      type: "subheading",
      text: "Macrophage and Dendritic Cell Regulation",
    },
    {
      type: "paragraph",
      text: "VIP is one of the most potent known suppressors of LPS-induced macrophage activation. In macrophage models, VIP treatment blocks TLR4-mediated NF-κB nuclear translocation, dramatically reducing TNF-α, IL-6, IL-12, and reactive oxygen species production. Simultaneously, VIP upregulates IL-10 secretion — shifting macrophages toward an M2 anti-inflammatory phenotype. In dendritic cells, VIP induces a tolerogenic phenotype, reducing MHC-II expression and promoting regulatory T cell (Treg) induction.",
    },
    {
      type: "subheading",
      text: "T Cell Polarization",
    },
    {
      type: "paragraph",
      text: "VIP exerts a selective pressure against Th1 and Th17 polarization while preserving or enhancing Th2 and Treg responses. In autoimmune disease models, this Th1/Th17 suppression is often protective. VIP reduces IFN-γ and IL-17 production from activated T cells, and research has shown VIP can expand FoxP3+ Treg populations — a potential mechanism in its ability to ameliorate experimental colitis, collagen-induced arthritis, and experimental autoimmune encephalomyelitis (EAE, the MS model).",
    },
    {
      type: "subheading",
      text: "Mast Cells and Allergy",
    },
    {
      type: "paragraph",
      text: "VIP modulates mast cell degranulation in a context-dependent manner: at low concentrations in sensitized systems it can trigger degranulation (pro-inflammatory role in certain allergy models), while at higher concentrations in activated mast cells it suppresses IgE-mediated signaling. The net physiological role in allergic disease is complex and model-dependent.",
    },
    {
      type: "heading",
      text: "Neuroprotective Effects",
    },
    {
      type: "paragraph",
      text: "VIP was originally classified as a neurotransmitter before its endocrine and immune functions were appreciated. In the CNS, VIP is expressed throughout the brain, with high levels in the cortex, hippocampus, amygdala, and hypothalamus. Its neuroprotective actions span multiple mechanisms:",
    },
    {
      type: "list",
      items: [
        "BDNF and ADNF induction: VIP stimulates release of Activity-Dependent Neurotrophic Factor (ADNF) from astrocytes, a peptide with potent femtomolar-range neuroprotective activity",
        "Oxidative stress attenuation: VIP upregulates superoxide dismutase and catalase in neuronal models, reducing H2O2-induced apoptosis",
        "Excitotoxicity protection: VIP reduces glutamate-mediated NMDA receptor overactivation and calcium influx in hippocampal neurons",
        "Neuroinflammation suppression: VIP reduces microglial TNF-α and IL-1β production, with demonstrated protection in LPS-induced neuroinflammation models",
        "Alzheimer's-relevant pathology: VIP reduces β-amyloid aggregation in vitro and attenuates tau hyperphosphorylation in some cellular models",
      ],
    },
    {
      type: "heading",
      text: "Gut-Brain Axis and GI Physiology",
    },
    {
      type: "paragraph",
      text: "VIP is one of the primary inhibitory neurotransmitters of the enteric nervous system (ENS), where it is released from submucosal and myenteric plexus neurons. Its GI roles include:",
    },
    {
      type: "list",
      items: [
        "Intestinal smooth muscle relaxation: VIP mediates non-adrenergic, non-cholinergic (NANC) relaxation of the lower esophageal sphincter, pylorus, and colon",
        "Secretory stimulation: VIP triggers chloride secretion from enterocytes, contributing to the secretory diarrhea seen in VIPoma (VIP-secreting tumors)",
        "Mucosal immune homeostasis: VIP from ENS neurons modulates resident macrophage and mast cell activity in the gut lamina propria, contributing to mucosal tolerance",
        "Gut barrier: VIP has been shown to upregulate tight junction proteins (claudin-1, occludin) and reduce intestinal permeability in inflammatory bowel models",
      ],
    },
    {
      type: "heading",
      text: "Circadian Rhythm Regulation",
    },
    {
      type: "paragraph",
      text: "One of VIP's most distinctive roles is in the suprachiasmatic nucleus (SCN), the brain's master circadian clock. VIP is produced by ~20% of SCN neurons and is released in a rhythmic pattern, serving as the primary synchronization signal between individual clock neurons. VPAC2 knockout mice exhibit a profoundly disorganized circadian phenotype — individual SCN neurons free-run at different periods, destroying the coherent daily rhythm. This positions VIP as an essential oscillatory coupling signal with implications for circadian medicine and sleep disorder research.",
    },
    {
      type: "heading",
      text: "Key Research Applications",
    },
    {
      type: "subheading",
      text: "Inflammatory Bowel Disease (IBD)",
    },
    {
      type: "paragraph",
      text: "VIP has demonstrated consistent benefit in mouse models of colitis (DSS-induced, TNBS-induced, CD4+CD45RBhi transfer model). VIP administration reduces colonic TNF-α, IL-6, and histological inflammation scores while preserving mucosal architecture. The Abad et al. group at Universidad Complutense de Madrid has published extensively on VIP as a potential IBD therapeutic.",
    },
    {
      type: "subheading",
      text: "Rheumatoid Arthritis",
    },
    {
      type: "paragraph",
      text: "In collagen-induced arthritis (CIA) and antigen-induced arthritis models, VIP administration significantly reduces synovial inflammation, joint destruction, and cartilage erosion. Mechanistically, VIP suppresses synoviocyte production of matrix metalloproteinases (MMP-1, MMP-3, MMP-9) and reduces joint macrophage infiltration. Human synovial tissue from RA patients shows depleted VIP nerve fiber innervation compared to OA controls — suggesting loss of VIP as a permissive factor for uncontrolled joint inflammation.",
    },
    {
      type: "subheading",
      text: "Sepsis and ARDS",
    },
    {
      type: "paragraph",
      text: "In LPS-induced sepsis models, VIP treatment reduced inflammatory cytokine storm, attenuated ARDS-like pulmonary pathology, and improved survival rates. The pulmonary vasodilatory effect (the property that gave VIP its name) is particularly relevant in ARDS, where pulmonary hypertension contributes to right heart strain and mortality.",
    },
    {
      type: "subheading",
      text: "Neurodegenerative Disease",
    },
    {
      type: "paragraph",
      text: "In Parkinson's disease models (MPTP, 6-OHDA), VIP administration attenuated dopaminergic neuron loss in the substantia nigra, reduced striatal neuroinflammation, and preserved motor function. In ALS mouse models (SOD1-G93A), VIP showed modest benefit on disease onset delay and spinal motor neuron preservation.",
    },
    {
      type: "heading",
      text: "VIP Analogs and Half-Life Extension",
    },
    {
      type: "paragraph",
      text: "Native VIP's ~1–2 minute plasma half-life (due to cleavage by neutral endopeptidase, DPP4, and prolyl oligopeptidase) is the primary obstacle to its research and therapeutic application. Several strategies have been pursued:",
    },
    {
      type: "list",
      items: [
        "Stearyl-NorLeu17-VIP (SNV): A fatty acid-conjugated, DPP4-resistant analog with ~2–4 hour half-life; retains full VPAC1/2 activity; most commonly used in modern animal studies",
        "VIPhybrid (VIP/PACAP chimeras): Designed for enhanced receptor selectivity and stability",
        "PEGylated VIP: Polymer conjugation extends half-life at the cost of some receptor affinity",
        "Liposomal VIP: Nanoparticle encapsulation for local delivery, particularly in lung and joint models",
        "Cyclic VIP analogs: Cyclization reduces peptide bond exposure to proteases; VPAC2-selective analogs for circadian/metabolic applications",
      ],
    },
    {
      type: "heading",
      text: "Key Published Studies",
    },
    {
      type: "list",
      items: [
        "Said & Mutt (1970, Science): Original isolation and characterization of VIP from porcine intestine",
        "Delgado et al. (1999, J Clin Invest): VIP as a Th1-suppressing, Th2-promoting immunomodulator; treatment of inflammatory models",
        "Abad et al. (2003, J Pharmacol Exp Ther): VIP ameliorates experimental colitis through dendritic cell and Treg mechanism",
        "Gomariz et al. (2006, Ann NY Acad Sci): VIP in rheumatoid arthritis — synovial innervation loss and therapeutic restoration",
        "Hughes et al. (2004, Science): VPAC2 is essential for circadian synchrony in SCN neurons",
        "Brenneman et al. (2004, J Pharmacol Exp Ther): ADNF (Activity-Dependent Neurotrophic Factor) as mediator of VIP neuroprotection",
      ],
    },
    {
      type: "heading",
      text: "Research Protocol Notes",
    },
    {
      type: "list",
      items: [
        "Dosing: Pharmacological doses in rodents range from 1–25 nmol/kg (IP or IV); intranasal delivery achieves CNS access with lower systemic exposure",
        "Analog selection: Use Stearyl-NorLeu17-VIP (SNV) for in vivo studies requiring sustained exposure; native VIP appropriate for in vitro cell studies",
        "VIP measurement: RIA or ELISA available; plasma levels fluctuate significantly; tissue extraction preferred for quantification of endogenous VIP",
        "VPAC receptor expression: Confirm target tissue VPAC1 vs. VPAC2 expression via qPCR; selective antagonists (PG 97-269 for VPAC1; PG 99-465 for VPAC2) allow receptor-specific mechanistic studies",
        "Immune endpoints: TNF-α, IL-6, IL-10, IL-12, IL-17, IFN-γ (flow cytometry or ELISA); Treg frequency (FoxP3 staining); macrophage polarization markers (CD206, iNOS)",
      ],
    },
    {
      type: "heading",
      text: "VIP vs. Related Peptides at Nexphoria",
    },
    {
      type: "list",
      items: [
        "PACAP-38/PACAP-27: Closely related peptide, shares VPAC1/2 receptors plus PAC1; stronger CNS effects but also greater somatosensory side effects",
        "Selank/Semax: Nootropic peptides with anxiolytic/cognitive effects through different mechanisms (BDNF, enkephalinase); complementary neurological research targets",
        "KPV: Anti-inflammatory tripeptide derived from MSH; shares IL-10-upregulating and NF-κB-suppressing properties with VIP but operates via different receptors",
        "BPC-157: Gastroprotective peptide with broader GI/systemic repair effects; partly overlapping gut mucosal protection with VIP",
      ],
    },
    {
      type: "disclaimer",
      text: "All Nexphoria compounds are sold strictly for in vitro and laboratory animal research use only. Not for human use, consumption, or clinical application. This article is intended for researchers and does not constitute medical advice. Results from preclinical studies do not guarantee equivalent outcomes in human subjects.",
    },
  ],
};
