import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: 'where-to-buy-spadin-research-guide',
  title: 'Where to Buy Spadin for Research: A Sourcing Guide',
  description:
    'What researchers need to know when sourcing Spadin — the natriuretic peptide-derived TREK-1 antagonist studied for antidepressant-like activity and rapid onset. Structural characteristics, purity documentation requirements, and analytical verification standards.',
  category: 'Quality & Testing',
  readMinutes: 9,
  publishedAt: '2026-06-11',
  ogImage: '/og-image.jpg',
  body: [
    {
      type: 'paragraph',
      text: 'Spadin is a 17-amino-acid peptide derived from the propeptide of the MANF (mesencephalic astrocyte-derived neurotrophic factor) sorting signal sequence, first characterized by Veronique Bruhn and colleagues at the Institut de Pharmacologie Moléculaire et Cellulaire in Valbonne, France. Its discovery as a biologically active peptide emerged from research into the TREK-1 potassium channel — a background two-pore domain potassium channel whose inhibition has been identified as a mechanistically relevant target for antidepressant action.',
    },
    {
      type: 'paragraph',
      text: 'Unlike most compounds in the research peptide space, Spadin has a defined endogenous origin — it is naturally cleaved from proBDNF-related processing of a sorting peptide — and a well-characterized molecular target (TREK-1 blockade). This specificity makes its analytical characterization both more tractable and more important for experimental reproducibility. Researchers sourcing Spadin for TREK-1 channel studies must understand the structural requirements that determine biological activity.',
    },
    {
      type: 'heading',
      text: 'Background: Spadin and the TREK-1 Antidepressant Mechanism',
    },
    {
      type: 'paragraph',
      text: 'TREK-1 (TWIK-related potassium channel 1) is a background K+ leak channel expressed throughout the central nervous system, particularly in the prefrontal cortex, hippocampus, and dorsal raphe. It is constitutively open, contributing to resting membrane potential, and its activity is modulated by arachidonic acid, temperature, membrane stretch, volatile anesthetics, and several pharmacological agents. TREK-1 has emerged as an antidepressant-relevant target from two convergent lines of evidence.',
    },
    {
      type: 'paragraph',
      text: 'First, TREK-1 knockout mice show resistance to depression-like behavior in multiple validated rodent assays (forced swim test, tail suspension, learned helplessness) and show enhanced serotonergic neurotransmission compared to wild-type animals — consistent with the mechanism of classical SSRI antidepressants. Second, several existing antidepressants show TREK-1 blocking activity, suggesting that TREK-1 inhibition may contribute to their efficacy independently of their primary mechanisms (SERT blockade, MAOI activity).',
    },
    {
      type: 'paragraph',
      text: 'Spadin was identified as an endogenous TREK-1 antagonist — a naturally occurring peptide that blocks TREK-1 with selective activity. Bruhn et al. (2012) demonstrated that Spadin produces antidepressant-like effects in mice at nanomolar concentrations, with notably rapid onset (effects within days rather than the 2–4 week delay of SSRIs) and specificity for TREK-1 over other potassium channel families. This rapid-onset profile distinguishes Spadin mechanistically from classical antidepressants and has driven interest in TREK-1 as a target for improved-onset pharmacotherapy.',
    },
    {
      type: 'heading',
      text: 'Spadin\'s Structure and Synthesis Considerations',
    },
    {
      type: 'paragraph',
      text: 'Spadin has the sequence Arg-Ile-Asn-Asn-Val-His-Ser-Ala-Glu-Pro-Ser-Glu-Asn-Ser-Thr-Ala-Ser, giving a molecular formula of C₇₃H₁₂₃N₂₃O₂₈ and a molecular weight of approximately 1862 Da. The 17-residue length places it in the mid-size peptide range where synthesis fidelity is a significant concern — incomplete deprotection, deletion sequences, and racemization at specific residue positions all become more likely than in shorter peptides.',
    },
    {
      type: 'paragraph',
      text: 'The sequence contains several features relevant to synthesis quality assessment:',
    },
    {
      type: 'list',
      items: [
        'Histidine at position 6 (His6): histidine is susceptible to multiple side-chain protection artifacts during Fmoc solid-phase synthesis; incomplete removal of the trityl protecting group is a common impurity in His-containing peptides',
        'Aspartate residues (Asp3, Asp4, Asp13): aspartate is prone to aspartimide formation under basic coupling conditions, producing a cyclic impurity that elutes as a separate peak in HPLC but may be poorly resolved from the parent compound at lower chromatographic resolution',
        'Serine residues (Ser7, Ser11, Ser14, Ser17): multiple serines in a sequence increase the risk of beta-elimination and dehydration artifacts; serine-rich C-terminal regions like this one are a known synthesis challenge in SPPS',
        'No disulfide bonds or cyclic constraints: this simplifies synthesis relative to constrained peptides but means secondary structure (if biologically relevant) is purely sequence-determined and solvent-dependent',
        'Molecular weight 1862 Da: this places Spadin at the boundary where ESI-MS must correctly resolve isotope envelopes for the [M+2H]²⁺ and [M+3H]³⁺ species — vendors using low-resolution mass spectrometry may not detect deletion sequences or oxidation artifacts',
      ],
    },
    {
      type: 'callout',
      text: 'Spadin\'s combination of serine-rich C-terminus, His6 susceptibility to protection artifacts, and multiple aspartate positions makes it a synthesis challenge compared to smaller or structurally simpler peptides. HPLC purity ≥98% with confirmed mass spectrometry is the minimum analytical standard; lower purity or MS-only verification without HPLC is insufficient for TREK-1 channel research.',
    },
    {
      type: 'heading',
      text: 'What a Complete Spadin COA Must Include',
    },
    {
      type: 'paragraph',
      text: 'For research-grade Spadin, a COA adequate for experimental use must document:',
    },
    {
      type: 'list',
      items: [
        'Lot/batch number traceable to the shipped vial',
        'Confirmed sequence: Arg-Ile-Asn-Asn-Val-His-Ser-Ala-Glu-Pro-Ser-Glu-Asn-Ser-Thr-Ala-Ser with no deletions, substitutions, or insertions',
        'Molecular weight: ~1862 Da — high-resolution ESI-MS or equivalent with isotope envelope resolution for [M+2H]²⁺ and [M+3H]³⁺ species; mass accuracy ≤5 ppm preferred',
        'HPLC purity: ≥98% by area normalization, with full chromatogram including column specification, mobile phase gradient, flow rate, and UV wavelength (214 nm or 220 nm standard for amide bond detection)',
        'Peak table showing all impurity peaks with relative areas — a single total purity number without the impurity profile is insufficient',
        'Aspartimide artifact check: COA should document absence of the characteristic +14 Da aspartimide rearrangement product via MS, or HPLC baseline separation confirming no co-eluting impurity at this mass',
        'His protection artifact: absence of trityl (+242 Da) or acetamidomethyl (+71 Da) protected His species in MS data',
        'Synthesis and lyophilization date, retest or expiry date',
        'Counter-ion specification (typically TFA salt; if acetate, this must be stated)',
      ],
    },
    {
      type: 'heading',
      text: 'Biological Activity Verification',
    },
    {
      type: 'paragraph',
      text: 'For Spadin specifically, HPLC purity and correct mass confirmation are necessary but not sufficient for research confidence. The TREK-1 antagonist activity of Spadin is sequence-specific: deletion of N-terminal residues significantly reduces or abolishes channel-blocking activity, as documented in structure-activity relationship studies. A compound with correct mass but subtle sequence errors (e.g., N-terminal truncation) could show correct molecular weight by low-resolution MS while having negligible biological activity.',
    },
    {
      type: 'paragraph',
      text: 'Researchers working with Spadin in electrophysiology studies or behavioral assays should consider the following verification approaches for critical experiments:',
    },
    {
      type: 'list',
      items: [
        'Sequence confirmation by Edman degradation or tandem MS/MS fragmentation to verify N-terminal residue identity — particularly Arg1 and Ile2, which are critical for TREK-1 binding',
        'TREK-1 functional validation in Xenopus oocyte or HEK293 expression systems where TREK-1 current inhibition can be directly measured; this confirms the sourced compound is biologically active before use in complex in vivo models',
        'Comparison against a validated reference preparation if available from academic synthesis sources',
        'For behavioral research: inclusion of positive control (TREK-1 KO animals or fluoxetine) and vehicle control; lot-to-lot verification if extending studies across multiple vials',
      ],
    },
    {
      type: 'heading',
      text: 'Storage and Handling',
    },
    {
      type: 'paragraph',
      text: 'Spadin\'s storage requirements are consistent with peptides of its size and composition:',
    },
    {
      type: 'table',
      headers: ['Form', 'Recommended Storage', 'Notes'],
      rows: [
        ['Lyophilized powder', '-20°C or colder', 'Protect from humidity; store desiccated; stable ≥24 months at -20°C'],
        ['Reconstituted solution', '-80°C for long-term; -20°C for ≤4 weeks', 'Aliquot before first freeze; avoid repeated freeze-thaw'],
        ['Working concentration', '4°C, use within 24–72h', 'Avoid prolonged room temperature exposure'],
        ['Light sensitivity', 'Standard protection', 'No Trp or Met in sequence; lower oxidation risk than many peptides, but protect from UV nonetheless'],
      ],
    },
    {
      type: 'paragraph',
      text: 'Reconstitute Spadin in sterile water, PBS at pH 7.4, or DMSO/water mixtures if solubility is limiting. The peptide\'s predominantly polar, charged character (multiple Asn, Ser, and charged Arg/Glu residues) confers reasonable aqueous solubility at physiological pH. Test solubility at your intended research concentration before ordering large quantities from a new supplier.',
    },
    {
      type: 'heading',
      text: 'Research Context: What Spadin Studies Have Shown',
    },
    {
      type: 'paragraph',
      text: 'The body of Spadin research, while smaller than that for widely-studied compounds like BPC-157 or Ipamorelin, is mechanistically rigorous and consistently supported across the groups that have worked with it. Key published findings include:',
    },
    {
      type: 'list',
      items: [
        'Antidepressant-like behavioral effects in mice at doses as low as 1 nM (intracerebroventricularly) and 10 µg/kg (subcutaneously) in forced swim and tail suspension tests',
        'Rapid onset: effects observed within 4 days in chronic administration models vs. 2–4 weeks for SSRIs in comparable protocols — a finding attributed to TREK-1 blockade immediately enhancing serotonergic tone rather than requiring receptor adaptation',
        'Hippocampal neurogenesis stimulation: Spadin increases BrdU+ newborn cells in the dentate gyrus — an effect shared with chronic antidepressant administration and consistent with a common downstream mechanism',
        'Serotonergic specificity: Spadin\'s behavioral effects are blocked by serotonin depletion (PCPA pretreatment) but not by dopaminergic or noradrenergic depletion, confirming serotonergic mediation despite a non-serotonin-receptor mechanism',
        'Improved versions: structure-activity relationship work has identified truncated and modified Spadin analogs (Mini-Spadin, Spadin variants) with improved stability and maintained or enhanced potency; these represent an active area of medicinal chemistry research building on the parent compound',
      ],
    },
    {
      type: 'heading',
      text: 'Vendor Evaluation for Spadin',
    },
    {
      type: 'paragraph',
      text: 'Given Spadin\'s relative complexity and synthesis challenges, vendor evaluation should include:',
    },
    {
      type: 'list',
      items: [
        'Lot-specific COA available before purchase with full HPLC chromatogram (not just total purity number)',
        'High-resolution mass spectrometry data showing correct molecular ion and isotope pattern — not low-resolution MALDI alone',
        'Visible impurity peak assessment in HPLC: a clean, single dominant peak at ≥98% without asymmetric trailing or additional peaks in the 0.5–2% region',
        'Explicit documentation of synthesis platform (Fmoc SPPS expected; Boc SPPS less common at this scale)',
        'Ability to confirm batch history and retest date',
        'Research-use-only documentation and clearly stated terms of sale',
        'Cold-chain shipping for intact peptide integrity during transit',
      ],
    },
    {
      type: 'heading',
      text: 'Why Nexphoria for Spadin Research',
    },
    {
      type: 'paragraph',
      text: 'Nexphoria sources Spadin from synthesis partners employing high-performance Fmoc SPPS with reverse-phase HPLC purification to ≥98% purity as standard. Each lot undergoes analytical verification including full HPLC chromatogram, high-resolution mass spectrometry with isotope pattern confirmation, and peak impurity profiling before release. Lot-specific COAs are available with vial orders and include synthesis and analysis dates.',
    },
    {
      type: 'paragraph',
      text: 'For a compound like Spadin — where synthesis complexity is high and the research community is relatively small with less crowdsourced quality validation than for widely-traded peptides — the analytical documentation behind each lot matters more than for more robustly characterized compounds. Nexphoria\'s COA standard is designed to support researchers who need confidence in compound identity and purity before electrophysiology, behavioral, or cell-based TREK-1 studies.',
    },
    {
      type: 'disclaimer',
      text: 'Spadin is sold by Nexphoria exclusively for qualified research purposes. It is not intended for human administration, therapeutic use, or diagnostic applications. All research use must comply with applicable institutional, federal, and local regulations.',
    },
  ],
};
