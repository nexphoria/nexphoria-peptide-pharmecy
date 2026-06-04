import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "alpha-msh-melanocortin-1-receptor-peptide-research-guide",
  title: "Alpha-MSH (α-MSH): Melanocortin-1 Receptor Peptide Research — Anti-Inflammatory, Melanogenesis & Neuroprotection",
  description:
    "A research-focused review of Alpha-Melanocyte Stimulating Hormone (α-MSH), covering MC1R and MC4R signaling, skin pigmentation biology, anti-inflammatory mechanisms, neuroprotection, and study design for melanocortin peptide research.",
  category: "Compound Profiles",
  readMinutes: 12,
  publishedAt: "2026-06-04",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Alpha-Melanocyte Stimulating Hormone (α-MSH) is a 13 amino acid neuropeptide derived from the precursor protein proopiomelanocortin (POMC). It is the prototypical agonist of melanocortin receptors (MCRs), a family of five G protein-coupled receptors (MC1R through MC5R) that mediate a remarkably diverse range of physiological functions — from skin pigmentation and adrenal steroidogenesis to appetite regulation, immune modulation, and neuroprotection. α-MSH has been the subject of substantial preclinical research due to its potent anti-inflammatory properties and its role as a melanocortin signaling probe.",
    },
    {
      type: "heading",
      text: "POMC Biology: The Precursor Source",
    },
    {
      type: "paragraph",
      text: "POMC is a large precursor protein expressed predominantly in pituitary corticotroph cells, arcuate nucleus neurons of the hypothalamus, and skin keratinocytes and melanocytes. Post-translational processing of POMC by the prohormone convertases PC1/3 and PC2 generates a family of peptides with distinct biological activities depending on tissue and convertase expression. In the anterior pituitary, POMC is primarily cleaved to ACTH. In the intermediate pituitary and hypothalamic neurons, PC2-mediated further processing generates α-MSH (from the N-terminal 13 residues of ACTH) along with β-MSH, γ-MSH, and β-endorphin.",
    },
    {
      type: "paragraph",
      text: "The sequence of α-MSH is: Ac-Ser-Tyr-Ser-Met-Glu-His-Phe-Arg-Trp-Gly-Lys-Pro-Val-NH2. The N-terminal acetylation and C-terminal amidation — both post-translational modifications — are critical for full biological potency at MCRs. These modifications confer resistance to exopeptidase degradation and are important to preserve in synthetic analogs.",
    },
    {
      type: "heading",
      text: "Melanocortin Receptor Subtypes and Tissue Expression",
    },
    {
      type: "table",
      headers: ["Receptor", "Primary Tissues", "Key α-MSH-Mediated Functions"],
      rows: [
        ["MC1R", "Melanocytes, immune cells (macrophages, DCs), astrocytes", "Melanogenesis, anti-inflammatory, neuroprotection"],
        ["MC2R", "Adrenal cortex", "ACTH receptor — α-MSH has very low affinity; primarily relevant to ACTH research"],
        ["MC3R", "Hypothalamus, limbic system, gut", "Energy homeostasis, anti-inflammatory, modulation of feeding circuits"],
        ["MC4R", "CNS (especially hypothalamus, brainstem)", "Appetite suppression, energy expenditure, erectile function, autonomic regulation"],
        ["MC5R", "Exocrine glands, immune cells", "Exocrine secretion, immune modulation"],
      ],
    },
    {
      type: "paragraph",
      text: "α-MSH has highest affinity for MC1R and MC3R, moderate affinity for MC4R, and negligible affinity for MC2R. This receptor profile is important when interpreting experimental results — studies using non-selective MCR endpoints may conflate the contributions of multiple receptor subtypes. Receptor-selective analogs (such as BMS-470539 for MC1R selectivity, or MTII and PT-141 / Bremelanotide for MC3R/MC4R selectivity) are critical tools for disambiguating which receptor mediates observed effects.",
    },
    {
      type: "heading",
      text: "Melanogenesis: The MC1R-cAMP-MITF Axis",
    },
    {
      type: "paragraph",
      text: "The most extensively characterized function of α-MSH is its role in regulating skin pigmentation via MC1R on melanocytes. MC1R coupling to Gs protein activates adenylyl cyclase, elevating intracellular cAMP. Increased cAMP activates protein kinase A (PKA), which phosphorylates and activates the transcription factor CREB. CREB drives expression of MITF (Microphthalmia-associated Transcription Factor) — the master regulator of melanocyte differentiation and eumelanin synthesis enzymes including tyrosinase, TRP-1, and TRP-2.",
    },
    {
      type: "paragraph",
      text: "The net result of α-MSH / MC1R signaling is a shift from pheomelanin (red/yellow, UV-sensitive) toward eumelanin (brown/black, photoprotective) production. This shift has important implications beyond cosmetic pigmentation — eumelanin provides substantially better UV-B protection and reduces the DNA damage that drives melanocyte transformation. Research on the MC1R-melanogenesis axis has clarified why MC1R polymorphisms strongly associate with fair skin, red hair, and elevated melanoma risk.",
    },
    {
      type: "heading",
      text: "Anti-Inflammatory Mechanisms",
    },
    {
      type: "paragraph",
      text: "α-MSH is one of the most potent endogenous anti-inflammatory peptides known. Its anti-inflammatory activity is mediated through multiple receptor subtypes expressed on immune cells, and through both central (hypothalamic) and peripheral pathways. Research has characterized several converging mechanisms:",
    },
    {
      type: "subheading",
      text: "Inhibition of NF-κB and Pro-Inflammatory Cytokines",
    },
    {
      type: "paragraph",
      text: "α-MSH suppresses the NF-κB transcription factor pathway in macrophages, monocytes, and dendritic cells — reducing transcription of TNF-α, IL-1β, IL-6, and IL-12. This is mediated primarily through MC1R and MC3R on these immune cell populations, and involves cAMP/PKA-dependent inhibition of NF-κB nuclear translocation. Importantly, α-MSH can suppress NF-κB activity downstream of multiple pro-inflammatory stimuli (LPS, cytokines, oxidative stress), making it a broadly applicable anti-inflammatory probe rather than stimulus-specific.",
    },
    {
      type: "subheading",
      text: "Induction of Anti-Inflammatory Mediators",
    },
    {
      type: "paragraph",
      text: "In addition to suppressing pro-inflammatory signals, α-MSH promotes production of anti-inflammatory mediators — notably IL-10, which itself drives broad immunosuppression. It also upregulates heme oxygenase-1 (HO-1), an enzyme with potent cytoprotective and anti-inflammatory properties. The combination of cytokine suppression and anti-inflammatory mediator induction makes α-MSH an unusually broad-spectrum immunomodulatory signal.",
    },
    {
      type: "subheading",
      text: "Peripheral vs. Central Anti-Inflammation",
    },
    {
      type: "paragraph",
      text: "α-MSH exerts anti-inflammatory effects both peripherally (directly on immune cells at sites of inflammation) and centrally (via hypothalamic MCRs that regulate systemic inflammation through autonomic and neuroendocrine pathways). Intracerebroventricular or hypothalamic administration of α-MSH in rodent inflammation models produces anti-inflammatory effects that are partially blocked by vagotomy, demonstrating the involvement of the vagus nerve as an efferent limb of the central anti-inflammatory pathway. This cholinergic anti-inflammatory mechanism is an area of active research.",
    },
    {
      type: "heading",
      text: "Neuroprotective Activity",
    },
    {
      type: "paragraph",
      text: "α-MSH and its analogs have shown neuroprotective effects in several preclinical models of CNS injury and neurodegeneration. Proposed mechanisms include:",
    },
    {
      type: "list",
      items: [
        "Reduction of neuroinflammation: suppression of microglial activation and CNS cytokine production via MC1R and MC4R",
        "Anti-apoptotic signaling: cAMP/PKA-dependent activation of CREB promotes expression of pro-survival genes including BDNF and Bcl-2",
        "Reduction of glutamate excitotoxicity: preclinical evidence for α-MSH-mediated attenuation of NMDA-induced neuronal death",
        "Preservation of mitochondrial membrane potential in neurons under oxidative stress",
        "Promotion of oligodendrocyte survival — with potential relevance to white matter injury research",
      ],
    },
    {
      type: "paragraph",
      text: "Studies in rodent models of ischemic stroke, traumatic brain injury, and spinal cord injury have demonstrated reduced lesion volume, improved motor or cognitive function, and attenuated neuroinflammatory markers following systemic or central α-MSH administration. These findings are exploratory and mechanism-specific, but they motivate ongoing investigation into melanocortin peptides as neuroprotective agents.",
    },
    {
      type: "heading",
      text: "Energy Regulation: The MC4R Axis",
    },
    {
      type: "paragraph",
      text: "α-MSH acts on MC4R in the hypothalamus — particularly in the paraventricular nucleus (PVN) — to suppress food intake and increase energy expenditure. The melanocortin system in the hypothalamus is one of the most studied energy balance circuits in neuroscience, integrating signals from leptin (via POMC neurons in the arcuate nucleus) and ghrelin (via AgRP/NPY neurons, which release the endogenous MC3R/MC4R antagonist AgRP). α-MSH is the physiological agonist driving the anorexigenic arm of this circuit.",
    },
    {
      type: "paragraph",
      text: "Researchers studying energy homeostasis, metabolic disease models, or hypothalamic function frequently use α-MSH and its analogs as pharmacological tools to probe MC4R-dependent appetite suppression independently of upstream leptin/ghrelin signaling. Importantly, the central anti-obesity effects of α-MSH are distinct from its peripheral anti-inflammatory and melanogenesis effects — study designs targeting one should account for potential confound from the others using appropriate controls or receptor-selective analogs.",
    },
    {
      type: "heading",
      text: "Research Analogs and Selectivity",
    },
    {
      type: "table",
      headers: ["Compound", "Receptor Selectivity", "Key Research Use"],
      rows: [
        ["α-MSH (Ac-α-MSH-NH2)", "MC1R / MC3R > MC4R", "Broad melanocortin research, anti-inflammatory, pigmentation"],
        ["[Nle4,D-Phe7]-α-MSH (NDP-α-MSH)", "Pan-MCR, superpotent", "Pharmacological benchmark; maximal MCR stimulation"],
        ["Melanotan II (MTII)", "MC3R / MC4R selective", "Appetite, erectile function, arousal research"],
        ["PT-141 (Bremelanotide)", "MC3R / MC4R selective", "Sexual behavior, arousal circuits"],
        ["BMS-470539", "MC1R selective", "Isolating MC1R-specific anti-inflammatory effects"],
        ["SHU9119", "MC3R / MC4R antagonist", "Blocking central appetite suppression pathways"],
      ],
    },
    {
      type: "paragraph",
      text: "The availability of receptor-selective agonists and antagonists is a significant advantage for melanocortin research — it allows systematic pharmacological dissection of which receptor subtype mediates specific biological effects. Researchers should clearly justify compound selection relative to the receptor subtype they intend to engage and include appropriate receptor-selective controls.",
    },
    {
      type: "heading",
      text: "Pharmacokinetics and Study Design",
    },
    {
      type: "paragraph",
      text: "Native α-MSH has a short plasma half-life (minutes) due to rapid proteolysis. For in vivo research, researchers typically use either the native peptide for acute challenge designs (acute cytokine suppression or pigmentation time-course studies) or stabilized analogs (NDP-α-MSH, melanotan analogs) for studies requiring sustained receptor engagement. The route of administration significantly affects which receptor populations are engaged — peripheral SC injection reaches MC1R on skin and immune cells readily, while CNS effects require intracerebroventricular, intranasal, or sufficiently high systemic dosing to penetrate the blood-brain barrier.",
    },
    {
      type: "list",
      items: [
        "Plasma half-life (native α-MSH): ~10–30 min in rodents",
        "Common SC dose range in rodent studies: 50–500 µg/kg for anti-inflammatory endpoints",
        "Central (ICV) dosing for hypothalamic endpoints: typically nanogram-range, directly into ventricle",
        "Melanogenesis studies: often use cell culture (B16 melanoma cells, primary human melanocytes) or skin explant models",
        "Anti-inflammatory in vivo models: LPS-induced systemic inflammation, carrageenan paw edema, DSS colitis",
        "Neuroprotection models: MCAO ischemia, controlled cortical impact TBI, excitotoxin injection",
      ],
    },
    {
      type: "divider",
    },
    {
      type: "paragraph",
      text: "Alpha-MSH occupies a unique position in peptide research as a physiologically multifunctional signal with documented activity across skin biology, immunology, neuroscience, and metabolic physiology. Its value as a research tool lies precisely in this breadth — and in the availability of receptor-selective tools that allow researchers to parse which function is driven by which receptor. As melanocortin biology continues to reveal new links between skin, immunity, and the CNS, α-MSH research remains at the frontier of peptide neuroscience.",
    },
    {
      type: "disclaimer",
      text: "Alpha-MSH is sold by Nexphoria exclusively for qualified in vitro and in vivo research purposes. It is not intended for human therapeutic, cosmetic, or diagnostic use. Researchers are responsible for compliance with all applicable institutional and regulatory requirements governing peptide research.",
    },
  ],
};
