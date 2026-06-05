import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: 'bpc-157-dosing-protocols-research-guide',
  title: 'BPC-157 Dosing Protocols: A Researcher\'s Reference Guide',
  description:
    'Comprehensive guide to BPC-157 dosing protocols used in preclinical research: dose ranges, administration routes, timing, cycle structures, and study design considerations from published literature.',
  category: 'Research Protocols',
  readMinutes: 11,
  publishedAt: '2026-06-05',
  ogImage: '/og-image.jpg',
  body: [
    {
      type: 'paragraph',
      text: 'BPC-157 (Body Protection Compound-157) has one of the most extensive preclinical dosing records of any synthetic peptide. Over 30 years of rodent studies have generated a clear pattern of effective dose ranges, administration routes, and protocol structures. This guide consolidates the most-cited dosing data from published literature for researchers designing their own preclinical studies.',
    },
    {
      type: 'disclaimer',
      text: 'All content on this page is for informational and research reference purposes only. BPC-157 is a research peptide not approved for human use by the FDA or any regulatory authority. This information is intended for licensed researchers conducting preclinical work in accordance with applicable institutional and regulatory guidelines.',
    },
    {
      type: 'heading',
      text: 'Overview of BPC-157 in Published Research',
    },
    {
      type: 'paragraph',
      text: 'The majority of BPC-157 research originates from the University of Zagreb, Croatia, particularly from the laboratory of Dr. Predrag Sikiric. The compound has been studied across a wide range of biological systems including gastric healing, tendon and ligament repair, CNS protection, bone healing, and cardiovascular protection.',
    },
    {
      type: 'paragraph',
      text: 'A key feature that makes BPC-157 unusual among peptides is its stability in both gastric acid and aqueous solution — enabling both oral (intragastric) and injectable (subcutaneous, intramuscular, intraperitoneal) administration in rodent models.',
    },
    {
      type: 'heading',
      text: 'Standard Dose Ranges in Rodent Studies',
    },
    {
      type: 'paragraph',
      text: 'The most frequently cited dose range in rat studies is 10 µg/kg to 10 mg/kg administered once daily, with the majority of published protocols clustering around two tiers:',
    },
    {
      type: 'list',
      items: [
        '10 µg/kg/day — Commonly used "low dose" in gastrointestinal and systemic protection models',
        '100 µg/kg/day — Standard mid-range dose used across the majority of wound healing and CNS studies',
        '1 mg/kg/day — Higher dose used in acute injury models (tendon transection, bone fracture)',
        '10 mg/kg/day — Occasional use in acute toxicity tolerance studies (no adverse effects noted)',
      ],
    },
    {
      type: 'paragraph',
      text: 'The 10 µg/kg dose has demonstrated effects comparable to the 100 µg/kg dose in several gastric mucosa studies, suggesting a non-linear (possibly saturating) dose-response relationship at higher concentrations.',
    },
    {
      type: 'heading',
      text: 'Administration Routes and Protocols',
    },
    {
      type: 'subheading',
      text: 'Subcutaneous (SC) Injection',
    },
    {
      type: 'paragraph',
      text: 'SC injection is the most common route in published literature. Typically reconstituted in sterile saline (0.9% NaCl) or bacteriostatic water, then injected in volumes of 0.1–0.5 mL per injection site in rats. Most studies administer once daily for 7–28 days depending on the healing endpoint being studied.',
    },
    {
      type: 'subheading',
      text: 'Intraperitoneal (IP) Injection',
    },
    {
      type: 'paragraph',
      text: 'IP injection is used in approximately 30–40% of BPC-157 studies. It offers faster systemic absorption than SC and is technically simpler for high-volume rodent experiments. The same dose ranges apply, with no documented difference in efficacy between SC and IP routes in head-to-head comparisons.',
    },
    {
      type: 'subheading',
      text: 'Intragastric (Oral) Administration',
    },
    {
      type: 'paragraph',
      text: 'BPC-157\'s acid stability enables meaningful bioavailability via oral/intragastric gavage — an unusual property among peptides. Multiple studies have demonstrated comparable efficacy between oral and injectable routes for gastrointestinal endpoints. For non-GI endpoints (e.g., tendon repair), injectable routes generally produce more consistent outcomes.',
    },
    {
      type: 'subheading',
      text: 'Drinking Water Administration',
    },
    {
      type: 'paragraph',
      text: 'Several GI-focused studies have added BPC-157 to drinking water at concentrations calculated to deliver ~10 µg/kg/day based on average daily water consumption per rat. This method reduces handling stress but introduces dosing variability based on individual drinking patterns.',
    },
    {
      type: 'heading',
      text: 'Protocol Duration by Study Type',
    },
    {
      type: 'table',
      headers: ['Study Type', 'Typical Duration', 'Notes'],
      rows: [
        ['Gastric ulcer / GI protection', '7–14 days', 'Often started simultaneously with ulcer induction'],
        ['Tendon / ligament repair', '14–21 days', 'Usually with local + systemic injection at injury site'],
        ['Bone fracture healing', '21–28 days', 'Systemic SC or local injection to fracture site'],
        ['Peripheral nerve repair', '28–42 days', 'Longer window needed for axonal regeneration endpoints'],
        ['CNS / TBI models', '7–21 days', 'Often initiated within 1 hour of injury'],
        ['Systemic anti-inflammatory', '7–14 days', 'Concurrent with inflammatory challenge model'],
      ],
    },
    {
      type: 'heading',
      text: 'Local vs. Systemic Administration',
    },
    {
      type: 'paragraph',
      text: 'A consistent finding across multiple injury repair studies is that local administration (injecting near the injury site) and systemic administration (remote SC/IP injection) produce broadly comparable outcomes. This has been interpreted as evidence that BPC-157 exerts its effects through systemic signaling pathways — particularly the nitric oxide and VEGF systems — rather than direct local action.',
    },
    {
      type: 'paragraph',
      text: 'For tendon research, some studies use a split protocol: one injection locally at the injury site and a second injection at a distal SC site, with both appearing to contribute to measurable healing endpoints.',
    },
    {
      type: 'heading',
      text: 'Timing Relative to Injury or Challenge',
    },
    {
      type: 'paragraph',
      text: 'BPC-157 has been studied under three timing paradigms:',
    },
    {
      type: 'list',
      items: [
        'Pre-treatment: Administered 30–60 minutes before injury or toxic challenge (common in GI protection and NSAID toxicity studies)',
        'Concurrent treatment: First dose given immediately after injury, then daily thereafter (most common in repair studies)',
        'Delayed treatment: Initiated 24–72 hours post-injury (studied in CNS and nerve regeneration models)',
      ],
    },
    {
      type: 'paragraph',
      text: 'Pre-treatment and concurrent treatment paradigms tend to show the strongest effects. Delayed treatment has demonstrated efficacy in neurological models but with attenuated magnitude compared to immediate initiation.',
    },
    {
      type: 'heading',
      text: 'Control Groups and Study Design Considerations',
    },
    {
      type: 'paragraph',
      text: 'Well-designed BPC-157 studies include: (1) vehicle control (saline injection), (2) positive control where available (e.g., omeprazole for GI studies), and (3) at minimum two dose groups to establish dose-response. Most published studies use group sizes of 6–10 animals per group for standard repair endpoints.',
    },
    {
      type: 'callout',
      text: 'Study Design Note: Because BPC-157 does not have a well-characterized receptor, binding affinity assays (IC50/Ki) are not standard in BPC-157 research. Efficacy endpoints rely on histological, biochemical, and functional outcome measures rather than receptor occupancy data.',
    },
    {
      type: 'heading',
      text: 'Storage and Reconstitution for Research Use',
    },
    {
      type: 'paragraph',
      text: 'Lyophilized BPC-157 should be stored at -20°C or colder until reconstitution. Once reconstituted in sterile bacteriostatic water, working solutions are typically stable at 4°C for 30–60 days when protected from light. For longer storage, aliquot reconstituted solution and freeze at -80°C. Avoid repeated freeze-thaw cycles which degrade peptide purity.',
    },
    {
      type: 'list',
      items: [
        'Typical reconstitution: 2–5 mg/mL stock solution',
        'Working dilution: prepared fresh or same-day from stock',
        'Solvent: sterile 0.9% saline or bacteriostatic water — both validated in literature',
        'pH: neutral (7.0–7.4) preferred; avoid highly acidic or basic solvents',
      ],
    },
    {
      type: 'heading',
      text: 'Quality Standards for Research-Grade BPC-157',
    },
    {
      type: 'paragraph',
      text: 'Reproducible research outcomes require peptide purity ≥98% as confirmed by HPLC, with mass spectrometry (MS) confirming molecular weight identity. A valid Certificate of Analysis (CoA) from an independent laboratory should accompany each lot. Nexphoria provides third-party HPLC and LAL endotoxin testing for all BPC-157 lots, with CoAs available on the product page.',
    },
    {
      type: 'divider',
    },
    {
      type: 'paragraph',
      text: 'For researchers sourcing BPC-157 for preclinical work, Nexphoria\'s research-grade BPC-157 is available with full CoA documentation, cold-chain shipping, and lot-level purity data at nexphoria.com.',
    },
  ],
};
