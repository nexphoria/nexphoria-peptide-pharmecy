import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "pacap-pituitary-adenylate-cyclase-activating-polypeptide-research-guide",
  title: "PACAP: Pituitary Adenylate Cyclase-Activating Polypeptide — Neuroprotection, Migraine, and Metabolic Research",
  description:
    "PACAP (pituitary adenylate cyclase-activating polypeptide) is a pleiotropic neuropeptide that regulates neurodevelopment, neuroprotection, circadian rhythms, metabolism, and immune function. This guide covers PACAP-27 and PACAP-38 biology, PAC1/VPAC receptor pharmacology, and current research protocols for neuroprotection and metabolic applications.",
  category: "Compound Profiles",
  readMinutes: 14,
  publishedAt: "2026-06-10",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Pituitary adenylate cyclase-activating polypeptide (PACAP) is a member of the VIP/secretin/glucagon superfamily of peptides that was originally isolated from ovine hypothalamus in 1989 based on its ability to stimulate adenylyl cyclase activity in pituitary cells. Subsequent research revealed PACAP to be far more than a pituitary hormone: it is expressed throughout the central and peripheral nervous systems, acts as a potent neuroprotective, neurotrophic, and anti-inflammatory molecule, and is now recognized as a key regulator of stress responses, circadian biology, and metabolic homeostasis. Its structural homology with VIP and differential receptor selectivity give it a distinctive pharmacological profile with considerable research potential.",
    },
    {
      type: "heading",
      text: "Molecular Forms and Structure",
    },
    {
      type: "paragraph",
      text: "PACAP exists in two bioactive forms derived from post-translational processing of the 176-amino acid precursor pro-PACAP: PACAP-38 (the predominant form, 38 amino acids) and PACAP-27 (the N-terminal 27 amino acids). The first 28 residues show approximately 68% sequence identity with VIP, which explains shared receptor binding but also helps clarify the pharmacological differences between the two peptides. PACAP-38 has an α-helical structure in the C-terminal region that is critical for receptor binding affinity and selectivity.",
    },
    {
      type: "list",
      items: [
        "PACAP-38: Predominant circulating and brain form; nanomolar affinity at PAC1R, VPAC1R, and VPAC2R",
        "PACAP-27: N-terminal truncation with identical first 27 residues; slightly lower PAC1R potency than PACAP-38",
        "Both forms activate adenylyl cyclase (cAMP/PKA) and phospholipase C (IP3/DAG/PKC) pathways",
        "PAC1R has ~1,000-fold higher selectivity for PACAP over VIP; VPAC1/2R bind PACAP and VIP with comparable affinity",
      ],
    },
    {
      type: "heading",
      text: "Receptor Pharmacology",
    },
    {
      type: "subheading",
      text: "PAC1R (ADCYAP1R1)",
    },
    {
      type: "paragraph",
      text: "PAC1R is a class B GPCR with 8 characterized splice variants that alter the third intracellular loop (hip, hop1, hop2, hip/hop) and the N-terminal extracellular domain (short, null, TM4). Different splice variants show differential coupling to Gαs (cAMP) vs Gαq/11 (PLC) pathways. The null splice variant signals predominantly via cAMP; the hop variants activate PLC more efficiently. This splice variant diversity helps explain the pleiotropic, context-dependent effects of PACAP signaling across different tissue types.",
    },
    {
      type: "subheading",
      text: "VPAC1R and VPAC2R",
    },
    {
      type: "paragraph",
      text: "VPAC1R is broadly expressed in brain, lung, liver, and immune cells; VPAC2R is enriched in the suprachiasmatic nucleus (SCN), pancreatic β-cells, smooth muscle, and T lymphocytes. Both receptors signal primarily via Gαs/cAMP. VPAC2R in the SCN plays a critical role in circadian entrainment — PACAP released from retinohypothalamic tract terminals during light exposure activates VPAC2R in the SCN to phase-shift the circadian clock.",
    },
    {
      type: "heading",
      text: "Neuroprotective Mechanisms",
    },
    {
      type: "paragraph",
      text: "PACAP is among the most potent endogenous neuroprotective molecules identified. Its protective actions span multiple mechanisms that converge on reducing apoptotic and excitotoxic cell death. In ischemia models, PACAP administration before or shortly after insult consistently reduces infarct volume by 30–60% across multiple species.",
    },
    {
      type: "list",
      items: [
        "Anti-apoptotic: Activates PKA/CREB pathway, upregulating Bcl-2 and Bcl-xL; suppresses cytochrome c release and caspase-3 activation",
        "Neurotrophic: Stimulates BDNF, NGF, and GDNF expression; supports neuronal survival and axonal regeneration",
        "Anti-inflammatory: Suppresses NF-κB activation, reduces TNF-α and IL-6 production; promotes M2 microglial polarization",
        "NMDA receptor modulation: Limits excitotoxic calcium influx through PAC1R-mediated NMDAR desensitization",
        "Mitochondrial protection: Reduces ROS production and stabilizes mitochondrial membrane potential via PKA/SIRT1",
      ],
    },
    {
      type: "callout",
      text: "A key practical constraint: PACAP-38 does not readily cross the blood-brain barrier after peripheral administration due to its peptide structure. Intranasal delivery, CNS-penetrant analogs, and focused ultrasound-assisted delivery are active research areas for central PACAP applications.",
    },
    {
      type: "heading",
      text: "PACAP and Migraine",
    },
    {
      type: "paragraph",
      text: "PACAP-38 has become one of the most investigated peptides in migraine research following the observation that intravenous PACAP-38 infusion reliably triggers delayed migraine-like headaches in migraine patients but not in healthy controls. The trigeminovascular system expresses PAC1R and VPAC2R, and PACAP may contribute to cortical spreading depression, dural neurogenic inflammation, and mast cell degranulation in trigeminal ganglion tissue.",
    },
    {
      type: "paragraph",
      text: "The mechanistic distinction between CGRP and PACAP in migraine has become a major research focus. While CGRP is released from trigeminovascular terminals and CGRP receptor antagonists/antibodies are now approved migraine treatments, PACAP likely acts through complementary and partially distinct pathways. Clinical trials of PAC1R antagonists (AMG 301, ALD1910) are ongoing for preventive migraine treatment, and VPAC2R also remains under investigation.",
    },
    {
      type: "heading",
      text: "Metabolic and Pancreatic Functions",
    },
    {
      type: "paragraph",
      text: "PACAP is expressed in pancreatic nerve fibers and acts as a potent insulin secretagogue via VPAC2R and PAC1R on β-cells. It potentiates glucose-stimulated insulin secretion (GSIS) without causing hypoglycemia at euglycemia — a property that has attracted interest in the context of incretin-based diabetes therapy. PACAP also stimulates glucagon secretion from α-cells, suggesting a complex role in glucose counterregulation.",
    },
    {
      type: "list",
      items: [
        "PACAP-38 at 1–10 nM potentiates GSIS in isolated islets by 200–400%",
        "PACAP-deficient mice show impaired insulin secretion in response to non-glucose stimuli (arginine, sulfonylurea)",
        "VPAC2R knockout mice develop glucose intolerance and disrupted circadian insulin secretion",
        "PACAP in the hypothalamus regulates energy expenditure and thermogenesis via sympathoadrenal activation",
      ],
    },
    {
      type: "heading",
      text: "Stress Response and PTSD Research",
    },
    {
      type: "paragraph",
      text: "PACAP has emerged as a potential biomarker and mechanistic contributor to PTSD and stress-related disorders. A genome-wide association study (Ressler et al., 2011, Nature) found that SNPs in the ADCYAP1R1 gene (encoding PAC1R) predicted PTSD diagnosis in trauma-exposed women. Elevated plasma PACAP-38 levels were also associated with PTSD symptom severity in women. PACAP is released in response to psychological and physiological stressors and activates fear-circuit amygdala neurons via PAC1R, suggesting it may contribute to fear memory consolidation and generalization.",
    },
    {
      type: "heading",
      text: "Circadian Biology",
    },
    {
      type: "paragraph",
      text: "Retinal ganglion cells that project to the SCN co-release glutamate and PACAP-38 in response to light. PACAP activates VPAC2R on SCN neurons to reset the molecular clock (CLOCK/BMAL1/PER/CRY) during the subjective night, enabling photic entrainment of the circadian pacemaker. PACAP knockout mice show altered free-running period and reduced phase-shifting responses to light. Research protocols examining PACAP effects on circadian disruption (shift work, jet lag, aging-associated circadian degradation) are an active area.",
    },
    {
      type: "heading",
      text: "Research Protocols",
    },
    {
      type: "subheading",
      text: "In Vitro Neuroprotection Assays",
    },
    {
      type: "list",
      items: [
        "PC12 or primary cortical neuron cultures: PACAP-38 at 10–100 nM added 1h before glutamate challenge (100 μM, 20 min); LDH release and caspase-3 measured 24h post-insult",
        "Microglial (BV2) polarization: PACAP-38 100 nM + LPS challenge; measure TNF-α, IL-6 (M1 markers) and Arg1, CD206 (M2 markers) at 6–24h",
        "cAMP accumulation assay: CHO cells stably expressing PAC1R/VPAC1R/VPAC2R; concentration-response 0.001–1000 nM; HTRF cAMP assay",
        "PAC1R splice variant selectivity: Transient transfection of null vs. hop variants; compare cAMP vs. IP1 accumulation ratios across peptide concentrations",
      ],
    },
    {
      type: "subheading",
      text: "In Vivo Stroke and TBI Models",
    },
    {
      type: "list",
      items: [
        "MCAO mouse model: PACAP-38 SQ (100 μg/kg) at 0, 1, 3h post-reperfusion; infarct volume by TTC staining at 24h",
        "CCI traumatic brain injury: Intranasal PACAP-38 (4 μg/mouse × 2 doses at 1h and 6h post-CCI); neurological deficit score, Morris water maze at 7 and 14 days",
        "PACAP-38 dose range in rodents: SQ doses of 20–100 μg/kg; intranasal 1–4 μg/mouse; ICV 1–100 pmol",
        "Key endpoints: Brain edema (wet/dry ratio), BBB integrity (Evans blue), inflammatory cytokines (ELISA), cell death (TUNEL/Fluoro-Jade C)",
      ],
    },
    {
      type: "subheading",
      text: "Intranasal Delivery Optimization",
    },
    {
      type: "paragraph",
      text: "For CNS-targeted PACAP delivery in rodents without craniotomy, intranasal administration exploits olfactory and trigeminal nerve pathways. Administration of 1–4 μg PACAP-38 in 10–12 μL PBS per nostril (pipette deposit with animal supine at 90°) achieves measurable brain concentrations within 30 minutes. Key controls: vehicle-only (PBS), scrambled peptide, and PAC1R antagonist (PACAP(6–38) at 10-fold molar excess) to confirm on-target effects.",
    },
    {
      type: "heading",
      text: "PACAP Analogs in Development",
    },
    {
      type: "list",
      items: [
        "Maxadilan: Potent PAC1R-selective agonist from sandfly saliva; 10,000-fold more potent than PACAP at PAC1R; research tool for PAC1R-specific effects",
        "PACAP(6–38): PAC1R antagonist; lacks first 5 residues critical for adenylyl cyclase activation; widely used experimental blocker",
        "Fatty acid-conjugated PACAP analogs: Extended half-life via albumin binding; improved metabolic stability for in vivo studies",
        "PAC1R antibody antagonists (AMG 301): Selective PAC1R blockade being evaluated in migraine prevention (Phase 2 clinical trials)",
        "Cyclic PACAP analogs: Stapled or cyclized derivatives with enhanced CNS penetration and protease resistance",
      ],
    },
    {
      type: "heading",
      text: "Measurement and Biomarkers",
    },
    {
      type: "list",
      items: [
        "Plasma PACAP-38: RIA or ELISA; reference range in healthy humans ~5–20 pM; elevated in migraine attacks, physiological stress, exercise",
        "CSF PACAP: Elevated after TBI; potential biomarker for neuronal damage severity",
        "cAMP in urine or tissue: Functional readout of PAC1R/VPAC activation downstream",
        "Adrenal catecholamines: PACAP stimulates adrenomedullary epinephrine release; plasma catecholamines as sympathoadrenal activation marker",
      ],
    },
    {
      type: "disclaimer",
      text: "PACAP research peptides are for laboratory research purposes only. PACAP-38, PACAP-27, and analogs are not approved therapeutic agents. Researchers should observe institutional animal care standards and applicable biosafety regulations when using PACAP in in vivo models.",
    },
  ],
};
