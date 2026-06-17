import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "where-to-buy-bimagrumab-research-guide",
  title: "Where to Buy Bimagrumab for Research: Myostatin-Activin Inhibitor Sourcing Guide",
  description:
    "Bimagrumab (LY3002813) is an anti-ActRIIA/B antibody from Versanis/Eli Lilly that showed 20.5% fat mass loss and remarkable lean mass preservation in Phase II obesity trials. This guide explains what bimagrumab is, why it cannot be sourced as a research peptide, what myostatin and activin pathway research tools ARE available (follistatin-344, ACE-083, MSTN propeptide, GDF-8/11 recombinant proteins), COA standards, and how to design preclinical anti-cachexia or body composition studies.",
  category: "Compound Profiles",
  readMinutes: 12,
  publishedAt: "2026-06-17",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Bimagrumab is a fully human IgG1 monoclonal antibody that binds and blocks both activin receptor type IIA (ActRIIA) and type IIB (ActRIIB), preventing myostatin (GDF-8), activin A, activin B, and GDF-11 from signaling through these receptors. Developed originally by Novartis and subsequently licensed to Versanis Biosciences (acquired by Eli Lilly in 2023), bimagrumab produced one of the most striking body composition signals seen in any anti-obesity Phase II trial: 20.5% reduction in fat mass and 3.6% increase in lean mass at 48 weeks in adults with obesity and type 2 diabetes (BELIEVE Phase IIb). If you're searching for 'where to buy bimagrumab for research,' the direct answer is: bimagrumab itself is a clinical-stage monoclonal antibody and is not available from research peptide suppliers. This guide maps what that means scientifically and what legitimate myostatin/activin pathway research tools are actually available."
    },
    {
      type: "heading",
      text: "What Makes Bimagrumab Mechanistically Unique"
    },
    {
      type: "paragraph",
      text: "Most myostatin inhibitors in the research literature — follistatin, MSTN propeptide, anti-myostatin antibodies like LY2495655 — block GDF-8 (myostatin) specifically. Bimagrumab works differently: it occupies the ligand-binding site on ActRIIA and ActRIIB directly, preventing ALL TGF-β superfamily members that signal through these receptors from binding. This pan-ActRII blockade captures not just myostatin but activin A (the dominant muscle-wasting driver in cancer cachexia and COPD-related sarcopenia), activin B, GDF-11, and other ligands. The result is simultaneous suppression of muscle protein catabolism and adipose expansion — the lean mass preservation in the BELIEVE trial (3.6% lean mass gain vs. -1.2% for placebo) is the strongest lean mass preservation signal published for any anti-obesity compound."
    },
    {
      type: "table",
      headers: ["Parameter", "Bimagrumab Result (BELIEVE Phase IIb)", "Notes"],
      rows: [
        ["Fat mass reduction", "20.5% at 48 weeks", "Placebo: +2.7%. Without caloric restriction."],
        ["Lean mass change", "+3.6% at 48 weeks", "Placebo: -1.2%. Lean mass actually increased."],
        ["Total body weight", "-6.5% at 48 weeks", "Lean-sparing obesity treatment — fat selective"],
        ["HbA1c change", "-0.76% at 48 weeks", "T2D subjects; comparable to some GLP-1 effects"],
        ["Visceral adipose tissue", "-30% by MRI", "Most pronounced fat reduction in visceral depot"],
        ["Dose", "10 mg/kg IV q4w", "Monthly IV infusion"]
      ]
    },
    {
      type: "heading",
      text: "Why Bimagrumab Cannot Be Sourced as a Research Peptide"
    },
    {
      type: "paragraph",
      text: "Bimagrumab is a monoclonal antibody — a glycosylated protein of ~150 kDa produced in CHO or HEK293 mammalian cell expression systems. It is not a peptide in the research-chemical sense (not a short-chain amino acid sequence synthesizable by solid-phase peptide synthesis). Manufacturing requires: stable transfection of the VH/VL sequences into mammalian cells, fed-batch bioreactor fermentation at GMP scale, Protein A affinity chromatography purification, viral inactivation steps, endotoxin removal, final formulation into isotonic buffer, and lot-by-lot QC including bioactivity EC50 against ActRIIA/B binding. No research peptide supplier has this infrastructure. The compound remains under active Eli Lilly Phase III development (LIBERATE trial for obesity/metabolic syndrome)."
    },
    {
      type: "paragraph",
      text: "Additionally, Lilly's acquisition of Versanis places bimagrumab behind a wall of patent protection and active clinical development that makes third-party synthesis legally and practically impossible for research channels. Any vendor claiming to sell 'bimagrumab' is not selling the actual antibody — they may be selling a short peptide fragment of the complementarity-determining region (CDR), a different anti-myostatin compound, or simply a mislabeled product."
    },
    {
      type: "heading",
      text: "ActRII Pathway Research Tools That ARE Available"
    },
    {
      type: "paragraph",
      text: "The myostatin/activin/ActRII research landscape has multiple legitimate research tools available from recombinant protein suppliers and research peptide vendors. Understanding what each one targets and what it measures is essential for designing a valid preclinical study."
    },
    {
      type: "table",
      headers: ["Compound", "Type", "Mechanism", "Key Research Application", "Source Category"],
      rows: [
        ["Follistatin-344 (FST)", "Recombinant protein / peptide", "Binds and neutralizes activin A, activin B, myostatin, GDF-11 — high-affinity endogenous inhibitor", "Muscle hypertrophy in DIO mice; cachexia reversal; fertility research (ovarian reserve)", "Research peptide suppliers (SPPS FST fragment) + recombinant protein suppliers (full-length)"],
        ["MSTN Propeptide (GDF-8 propeptide)", "Recombinant protein", "Non-covalently inhibits GDF-8 mature domain; endogenous latency-associated peptide", "Selective myostatin inhibition without activin A blockade — cleaner mechanism for muscle-only studies", "R&D Systems, Sigma-Aldrich, PeproTech (recombinant)"],
        ["GDF-8 / Myostatin recombinant", "Recombinant protein", "The ligand itself — activates ActRIIA/B for pathway characterization", "In vitro C2C12 signaling studies, smad2/3 phosphorylation assays, atrophy induction", "R&D Systems cat. #788-G8; PeproTech cat. #120-00"],
        ["Activin A recombinant", "Recombinant protein", "The dominant ActRII ligand in cancer cachexia and inflammatory muscle wasting", "Cachexia model initiation in C26 tumor mice; ovarian folliculogenesis studies", "R&D Systems cat. #338-AC; Sigma-Aldrich recombinant"],
        ["ActRIIB-Fc (RAP-031 analog)", "Fc-fusion protein", "Soluble decoy receptor — captures all ActRII ligands; mimics bimagrumab's pan-ActRII mechanism closest", "Published mdx (Duchenne) and ALS mouse data for lean mass preservation; closest preclinical analog to bimagrumab's effect", "R&D Systems (sActRIIB-Fc); some research suppliers"],
        ["Myostatin Inhibitor Peptide (Fortetropin-related fragments)", "Short peptide", "Partial MSTN propeptide region fragments with inhibitory activity", "Dietary supplement research context; not GLP-1 class potency but available for pilot studies", "Some research peptide vendors"]
      ]
    },
    {
      type: "heading",
      text: "COA Requirements for Myostatin/Activin Pathway Research Compounds"
    },
    {
      type: "paragraph",
      text: "Whether sourcing recombinant proteins (GDF-8, activin A, ActRIIB-Fc) or follistatin peptide from a research supplier, the quality standards differ from small peptide sourcing. Recombinant proteins have distinct verification requirements:"
    },
    {
      type: "list",
      items: [
        "Protein identity: SDS-PAGE under reducing and non-reducing conditions. GDF-8 mature dimer runs at ~25 kDa (non-reducing) vs. ~13 kDa (reducing). Activin A homodimer runs at ~28 kDa. ActRIIB-Fc runs at ~60-65 kDa. Single clean band required — multiple bands indicate aggregation or contaminant.",
        "Bioactivity: ActRII ligands MUST include bioactivity data — not just protein concentration. For GDF-8: smad2/3 phosphorylation EC₅₀ in C2C12 or HEK293 reporter cells, or reporter gene assay (CAGA-luc). For Activin A: inhibin bioassay or CAGA-reporter EC₅₀. This is non-negotiable for signaling studies.",
        "Endotoxin: LAL assay <1.0 EU/µg for in vivo rodent use. Recombinant proteins from E. coli expression (GDF-8 is often produced in E. coli refolded from inclusion bodies) are higher endotoxin risk than mammalian cell-expressed proteins. Verify E. coli vs. CHO sourcing.",
        "Concentration accuracy: BCA or Bradford protein assay with BSA standard curve. Absorbance-only readings (A280) are unreliable for GDF-8 due to low tyrosine/tryptophan content.",
        "Storage and reconstitution: GDF-8 and activin A are highly prone to aggregation. Carrier protein (0.1% BSA) required in storage buffer. Store at -80°C; avoid freeze-thaw cycles beyond 3× for bioactivity-sensitive studies."
      ]
    },
    {
      type: "heading",
      text: "Designing a Bimagrumab-Analog Preclinical Study with ActRIIB-Fc"
    },
    {
      type: "paragraph",
      text: "The closest published preclinical analog to bimagrumab's mechanism is ActRIIB-Fc (sActRIIB-Fc), a soluble decoy receptor that has been used extensively in muscular dystrophy (mdx mice), ALS (SOD1 mice), and cancer cachexia (C26 colon carcinoma) models. To study the bimagrumab-relevant mechanism — fat-selective mass loss with lean preservation — in a DIO model:"
    },
    {
      type: "list",
      items: [
        "Model: C57BL/6J male mice on 60% HFD × 12 weeks to establish DIO phenotype (body weight >40g). EchoMRI at baseline to stratify by fat mass.",
        "Compound: Recombinant murine ActRIIB-Fc (R&D Systems cat. #339-RB or equivalent) at 10 mg/kg IP twice weekly × 8 weeks. Prepare in sterile PBS + 0.1% BSA at 2 mg/mL; warm to RT before injection.",
        "Controls: Vehicle (PBS + 0.1% BSA) IP BIW; semaglutide 0.05 mg/kg SC once weekly (comparison arm for fat-selective vs. lean-sparing comparison); follistatin-344 1 mg/kg IP 3× weekly (activin-selective arm to distinguish activin A vs. myostatin contribution).",
        "Endpoints: Body composition by EchoMRI q2w, grip strength testing (Chatillon gauge, 3 trials per session), treadmill exhaustion test at week 8, terminal muscle mass (soleus, EDL, TA, quadriceps wet weight), adipose depot weights (epididymal, inguinal, retroperitoneal), plasma activin A and myostatin by ELISA.",
        "Histology: Muscle fiber cross-sectional area (H&E, TA), adipocyte size (H&E, epididymal), pSmad2/3 IHC in liver (ActRII signaling confirmation), F4/80 macrophage staining in adipose.",
        "n per group: 8-10 for body composition and metabolic endpoints. Power analysis: effect size 1.5 for fat mass reduction (based on published sActRIIB-Fc DIO data), α=0.05, power=0.80 → n=8 per group."
      ]
    },
    {
      type: "heading",
      text: "Why the Bimagrumab Data Matters for Obesity Research"
    },
    {
      type: "paragraph",
      text: "The BELIEVE trial result crystallized a problem that has shadowed GLP-1 agonist obesity research: GLP-1-mediated weight loss typically involves 25-40% lean mass loss as a fraction of total weight lost. In a 10 kg weight loss, that's potentially 2.5-4 kg of muscle. For aging patients with sarcopenia risk, this is a significant concern. Bimagrumab's ability to produce fat-selective weight loss (20.5% fat mass reduction with a lean mass INCREASE) suggests that ActRII blockade may be the complementary partner for GLP-1 therapy in the next generation of obesity pharmacotherapy. Eli Lilly is actively investigating bimagrumab + tirzepatide co-administration. Understanding the mechanism — pan-ActRII blockade of the myostatin/activin axis — through preclinical research with available tools (ActRIIB-Fc, follistatin, activin A) provides the mechanistic grounding for this clinical direction."
    },
    {
      type: "heading",
      text: "Summary"
    },
    {
      type: "paragraph",
      text: "Bimagrumab (LY3002813) is a clinical-stage anti-ActRIIA/B monoclonal antibody and is not available from research peptide suppliers. For preclinical ActRII pathway research, use recombinant sActRIIB-Fc (closest mechanistic analog), GDF-8/myostatin recombinant protein, activin A recombinant, or follistatin-344 from verified suppliers (R&D Systems, PeproTech, Sigma-Aldrich, or research peptide vendors for FST peptide fragments). Require bioactivity data (not just purity/identity) for all ActRII ligands, SDS-PAGE under reducing/non-reducing conditions, and LAL endotoxin <1.0 EU/µg for in vivo use."
    },
    {
      type: "disclaimer",
      text: "This article is intended for licensed researchers and academic scientists. Nexphoria compounds are for in vitro and preclinical research use only. Not for human consumption. Bimagrumab (LY3002813) is an investigational compound under active clinical development by Eli Lilly; it is not FDA-approved for any indication as of the publication date of this article."
    }
  ]
};
