import type { BlogArticle } from '../blog-types';

export const article: BlogArticle =   {
    slug: "ss-31-elamipretide-mitochondria-targeted-peptide-research",
    title: "SS-31 (Elamipretide): Mitochondria-Targeted Peptide Research",
    description:
      "A comprehensive research review of SS-31 (Elamipretide), covering its cardiolipin-targeting mechanism, ETC stabilization, ROS attenuation without scavenging, ischemia-reperfusion data, and preclinical dosing protocols.",
    category: "Longevity",
    readMinutes: 8,
    publishedAt: "2026-05-29",
    ogImage: "/og-image.jpg",
    body: [
      {
        type: "paragraph",
        text: "SS-31, known by its clinical development name Elamipretide (and sometimes MTP-131), is a synthetic tetrapeptide belonging to the Szeto-Schiller (SS) class of mitochondria-targeted peptides. Unlike broad antioxidants that scavenge reactive oxygen species (ROS) non-specifically, SS-31 works by directly stabilizing cardiolipin — a unique phospholipid found almost exclusively in the inner mitochondrial membrane. This specificity makes SS-31 a particularly valuable research tool for studying mitochondrial dysfunction, which underlies an expanding list of pathologies from cardiac ischemia-reperfusion injury to age-related sarcopenia and renal tubular degeneration.",
      },
      {
        type: "heading",
        text: "Structure: A Szeto-Schiller Tetrapeptide",
      },
      {
        type: "paragraph",
        text: "SS-31 has the sequence D-Arg-2\'6\'-Dmt-Lys-Phe-NH2, where 2\',6\'-Dmt is 2\',6\'-dimethyltyrosine, a modified aromatic amino acid that is critical for membrane binding. The alternating aromatic-cationic motif — a hallmark of the SS peptide class — allows the molecule to partition into the inner mitochondrial membrane (IMM) at the cardiolipin-rich contact sites where the electron transport chain (ETC) complexes are concentrated.",
      },
      {
        type: "paragraph",
        text: "The D-amino acid at the N-terminus (D-Arg) and the C-terminal amidation confer resistance to proteolytic degradation by common plasma peptidases. This makes SS-31 unusually stable for a tetrapeptide — measured plasma half-life is approximately 30-60 minutes following subcutaneous injection in rodents, and the compound accumulates in mitochondria-rich tissues (heart, kidney, skeletal muscle) at concentrations 1,000-fold above plasma levels.",
      },
      {
        type: "heading",
        text: "Cardiolipin: The Molecular Target",
      },
      {
        type: "paragraph",
        text: "Cardiolipin (CL) is a unique bis-phosphatidyl glycerol phospholipid with four acyl chains, comprising approximately 20% of IMM lipid content. It is nearly exclusive to the inner mitochondrial membrane and is essential for the structural integrity and function of the respiratory chain supercomplexes — the large multi-complex assemblies (I-III-IV \'respirasomes\') that channel electrons efficiently from NADH to molecular oxygen.",
      },
      {
        type: "paragraph",
        text: "Under oxidative stress conditions, cardiolipin undergoes peroxidation — the four polyunsaturated fatty acid chains are vulnerable to ROS attack, particularly from superoxide generated at Complex I and III. Peroxidized cardiolipin can no longer properly scaffold the respiratory supercomplexes, leading to ETC complex dissociation, reduced ATP production, increased electron leak, and a self-amplifying cycle of ROS generation. Additionally, peroxidized CL dissociates cytochrome c from the IMM — releasing it into the intermembrane space and initiating the intrinsic apoptotic cascade.",
      },
      {
        type: "callout",
        text: "SS-31 binds directly to cardiolipin through electrostatic interactions (cationic residues toward negatively charged CL head groups) and hydrophobic insertion (aromatic Dmt into CL acyl chains). This physical interaction protects CL from peroxidation without consuming the peptide — SS-31 is not a sacrificial antioxidant.",
      },
      {
        type: "heading",
        text: "ETC Stabilization and ROS Attenuation",
      },
      {
        type: "paragraph",
        text: "By protecting cardiolipin integrity, SS-31 preserves the structural organization of ETC supercomplexes. Szeto 2014 (Journal of Cardiovascular Pharmacology) demonstrated that SS-31 treatment in isolated mitochondria restores Complex I activity, reduces electron leak, and decreases superoxide production — without acting as a superoxide scavenger in the conventional sense. This distinction is mechanistically important: SS-31 reduces ROS generation at source rather than neutralizing ROS after the fact.",
      },
      {
        type: "paragraph",
        text: "The downstream consequences are measurable: SS-31-treated mitochondria show higher membrane potential, improved state 3 respiration (ADP-stimulated), increased ATP synthesis rates, and reduced mitochondrial permeability transition pore (mPTP) opening probability. The mPTP is the key effector of mitochondria-mediated necrosis — its inhibition by SS-31 is a key mechanism in ischemia-reperfusion protection.",
      },
      {
        type: "heading",
        text: "Cardiac Ischemia-Reperfusion Injury",
      },
      {
        type: "paragraph",
        text: "The most extensively characterized research application of SS-31 is cardiac ischemia-reperfusion (I/R) injury — the paradoxical tissue damage that occurs when blood flow is restored to an ischemic organ. The burst of ROS during reperfusion, combined with calcium overload and ATP depletion during ischemia, drives mPTP opening and cardiomyocyte death.",
      },
      {
        type: "paragraph",
        text: "Szeto 2008 (Journal of Pharmacology and Experimental Therapeutics) demonstrated that intravenous SS-31 administered before or at reperfusion in a rat cardiac I/R model reduced infarct size by 40-50% versus vehicle, preserved left ventricular ejection fraction (LVEF), reduced cardiac troponin release, and maintained mitochondrial ultrastructure (cristae morphology) on electron microscopy. These effects were dose-dependent in the nanomolar range (0.1-1 mg/kg IV).",
      },
      {
        type: "list",
        items: [
          "Infarct size reduction: 40-50% in rat coronary ligation models (Szeto 2008)",
          "LVEF preservation: significant improvement in SS-31 vs vehicle at 24h and 7-day timepoints",
          "mPTP inhibition: SS-31 increases calcium retention capacity (CRC) in isolated mitochondria, a surrogate for mPTP resistance",
          "Cytochrome c retention: SS-31 prevents cytochrome c release from IMM, blocking intrinsic apoptosis initiation",
          "Timing: protective when given pre-ischemia, at onset of ischemia, or at reperfusion — flexible administration window",
        ],
      },
      {
        type: "heading",
        text: "Mitochondrial Permeability Transition Pore (mPTP)",
      },
      {
        type: "paragraph",
        text: "The mPTP is a non-selective mega-channel that spans the IMM and outer mitochondrial membrane (OMM), formed in part by components including ANT (adenine nucleotide translocator), VDAC (voltage-dependent anion channel), and cyclophilin D. Its pathological opening is triggered by calcium overload, elevated ROS, ATP depletion, and low pH recovery — conditions precisely met during reperfusion.",
      },
      {
        type: "paragraph",
        text: "SS-31 mPTP protection operates through cardiolipin: CL integrity is required for proper ANT configuration and cyclophilin D dissociation from the inner membrane. SS-31-treated mitochondria require higher calcium loads to trigger mPTP opening (increased CRC), effectively raising the threshold for catastrophic permeability transition. This mechanism is complementary to cyclosporin A (CsA, cyclophilin D inhibitor), and SS-31 plus CsA combination shows additive protection in isolated mitochondria assays.",
      },
      {
        type: "heading",
        text: "Skeletal Muscle Aging and Sarcopenia",
      },
      {
        type: "paragraph",
        text: "Beyond the cardiovascular system, SS-31 has generated strong research interest in the context of aging skeletal muscle. Mitochondrial dysfunction is a hallmark of age-related sarcopenia — aged muscle mitochondria show reduced Complex I/III activity, increased proton leak, lower ATP production, and elevated ROS, all consistent with the cardiolipin peroxidation hypothesis.",
      },
      {
        type: "paragraph",
        text: "Siegel et al. 2013 (Aging Cell) demonstrated that SS-31 treatment in 24-month-old mice improved mitochondrial energetics (oxygen consumption, ATP production), reduced biomarkers of oxidative damage (4-HNE, 8-OHdG), and partially reversed age-related loss of muscle fiber size and force generation. These effects occurred without changes in mitochondrial biogenesis markers, suggesting that SS-31 restores function to existing mitochondria rather than stimulating new mitochondria production — a mechanistically distinct pathway from NAD+/PGC-1alpha approaches.",
      },
      {
        type: "heading",
        text: "Renal Tubular Protection",
      },
      {
        type: "paragraph",
        text: "Renal proximal tubule cells are among the highest mitochondria-density cells in the body and are acutely sensitive to ischemic injury. SS-31 has been studied in cisplatin-induced nephrotoxicity, renal I/R injury, and contrast-induced nephropathy models. In cisplatin models, SS-31 at 3 mg/kg/day SC preserves tubular architecture (brush border integrity on PAS staining), reduces BUN and creatinine elevation, and attenuates TUNEL-positive tubular apoptosis.",
      },
      {
        type: "paragraph",
        text: "The PROGRESS-HF clinical trial (NCT02914665) tested Elamipretide in heart failure with reduced ejection fraction (HFrEF), reporting improved 6-minute walk distance and quality of life scores in phase 2. Phase 3 trial results (LEAD-HF) showed primary endpoint miss on left ventricular end-systolic volume, but positive signals on functional endpoints. This clinical data is useful context for interpreting rodent research models and for understanding dose translation.",
      },
      {
        type: "heading",
        text: "Preclinical Dosing Protocols",
      },
      {
        type: "paragraph",
        text: "SS-31 dosing protocols vary significantly by application area and model. The following parameters are representative of published literature:",
      },
      {
        type: "list",
        items: [
          "Cardiac I/R (acute): 0.1-1 mg/kg IV, administered 10-15 min before reperfusion or at onset of reperfusion; rat or mouse coronary ligation model",
          "Cardiac I/R (subcutaneous): 3 mg/kg SC, single injection; used when IV catheterization is not feasible",
          "Aging skeletal muscle: 3 mg/kg/day SC for 8 weeks in aged (22-24 month) C57BL/6 mice",
          "Renal protection: 3 mg/kg/day SC started 24h before cisplatin injection, continued for duration of nephrotoxicity model (5-7 days)",
          "Mitochondrial isolation assays: 100 nM to 10 uM SS-31 added directly to isolated mitochondria suspension in mannitol-sucrose-HEPES buffer before energization",
          "Cell culture: 10-100 nM in complete cell culture medium; pre-treatment 30-60 min before oxidative stress induction (H2O2, antimycin A, or hypoxia-reoxygenation)",
          "Vehicle: saline or PBS for all in vivo routes; DMSO (0.1% or less) acceptable for cell culture only",
        ],
      },
      {
        type: "heading",
        text: "Reconstitution and Storage",
      },
      {
        type: "paragraph",
        text: "SS-31 is supplied as a white to off-white lyophilized powder and is freely water-soluble at research concentrations. Unlike some peptides, it does not require acetic acid or DMSO co-solvents for dissolution.",
      },
      {
        type: "list",
        items: [
          "Reconstitute in sterile water or bacteriostatic water; saline is acceptable for injection protocols",
          "Target working concentration: 1-5 mg/mL for subcutaneous injection; dilute further for IV administration",
          "Add solvent slowly to vial wall; gently swirl — do not vortex",
          "Reconstituted solution: store at 4°C, use within 14 days (sterile water) or 28 days (bacteriostatic water)",
          "Lyophilized: stable at -20°C for 24+ months in sealed, desiccated vials protected from light",
          "Appearance: clear, colorless to pale yellow solution after reconstitution; discard if particulate or discolored",
          "Aliquot reconstituted stock into single-use volumes to avoid repeated freeze-thaw cycles",
        ],
      },
      {
        type: "heading",
        text: "Research Design Considerations",
      },
      {
        type: "paragraph",
        text: "Several methodological factors are critical for rigorous SS-31 research:",
      },
      {
        type: "list",
        items: [
          "Cardiolipin measurement: Use NAO (nonyl acridine orange) fluorescence or cardiolipin-specific ELISA to quantify CL content and peroxidation status before and after treatment — confirms on-target mechanism",
          "mPTP readout: Calcium retention capacity (CRC) assay in isolated mitochondria (safranin-O fluorescence or calcium green) is the gold standard for mPTP threshold measurement",
          "ETC complex activity: Spectrophotometric assays for Complex I (NADH:ubiquinone oxidoreductase), Complex II (succinate dehydrogenase), and Complex IV (cytochrome c oxidase) provide independent mechanistic confirmation",
          "Superoxide vs H2O2 distinction: MitoSOX Red (mitochondria-specific superoxide indicator) vs Amplex Red (H2O2) allows source and ROS species identification; SS-31 primarily reduces Complex I/III-derived superoxide",
          "Cyclosporin A control: Including CsA (cyclophilin D inhibitor) as a positive control for mPTP inhibition helps calibrate SS-31 relative protective potency",
          "Timing controls: The protective window for I/R studies should be explicitly defined — pre-treatment vs at-reperfusion vs post-reperfusion groups reveal different aspects of the mechanism",
          "Mitochondrial isolation: Fresh isolation within 2-3 hours of tissue harvesting is essential for reliable functional assays; aged or freeze-thawed mitochondria show compromised coupling that confounds results",
        ],
      },
      {
        type: "paragraph",
        text: "SS-31 occupies a unique position in the mitochondrial pharmacology toolkit: it targets a specific structural component (cardiolipin) at the precise location where ETC dysfunction originates, rather than broadly scavenging ROS or stimulating biogenesis. For researchers working in cardiac biology, aging, acute kidney injury, or any model where mitochondrial dysfunction plays a central pathological role, SS-31 provides both a mechanistic probe and a therapeutically relevant intervention tool.",
      },
      {
        type: "callout",
        text: "Nexphoria supplies SS-31 (D-Arg-2\',6\'-Dmt-Lys-Phe-NH2) at 98% or greater HPLC purity with identity confirmed by mass spectrometry. Molecular weight: 639.8 Da. Each lot ships with a third-party Certificate of Analysis. Store lyophilized at -20°C. See the SS-31 product page for catalog details.",
      },
      {
        type: "heading",
        text: "Regulatory Note",
      },
      {
        type: "paragraph",
        text: "SS-31 (Elamipretide) is sold as a research chemical for laboratory use only. It is not approved by the FDA for human therapeutic use, though it has been investigated in clinical trials under IND. This article is for scientific informational purposes only. Researchers are responsible for compliance with all applicable regulations governing peptide research.",
      },
    ],
  };
