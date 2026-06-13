import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "nad-plus-exercise-performance-research-2026",
  title: "NAD+ and Exercise Performance: What Preclinical Research Shows (2026)",
  description:
    "NAD+ sits at the intersection of energy metabolism, mitochondrial function, and muscle physiology. This 2026 research overview examines preclinical and early clinical data on NAD+ supplementation, exercise capacity, VO2 max endpoints, and recovery markers.",
  category: "Compound Profiles",
  readMinutes: 10,
  publishedAt: "2026-06-13",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Nicotinamide adenine dinucleotide (NAD+) is one of the most fundamental molecules in cellular energy metabolism. As a cofactor in over 500 enzymatic reactions — including the citric acid cycle, oxidative phosphorylation, and beta-oxidation of fatty acids — its availability directly constrains ATP production capacity. For exercise researchers, NAD+'s role in both energy generation and recovery signaling has made it a subject of intense investigation.",
    },
    {
      type: "heading",
      text: "NAD+ Biology: Why It Matters for Athletic Performance",
    },
    {
      type: "paragraph",
      text: "During intense exercise, NAD+ serves as the primary electron carrier in the mitochondrial electron transport chain. As NAD+ is reduced to NADH during substrate oxidation, the ratio of NAD+/NADH becomes a critical regulator of metabolic flux. When this ratio drops — as it does during high-intensity exercise — glycolytic rate slows, lactate accumulates, and fatigue sets in.",
    },
    {
      type: "paragraph",
      text: "Beyond acute energy metabolism, NAD+ activates three key classes of enzymes relevant to athletic adaptation: sirtuins (SIRT1–SIRT7), PARP enzymes (DNA repair), and CD38 (NADase involved in calcium signaling). Of these, SIRT1 and SIRT3 have attracted the most research attention in exercise contexts.",
    },
    {
      type: "list",
      items: [
        "SIRT1: activates PGC-1α, driving mitochondrial biogenesis and fatty acid oxidation gene expression",
        "SIRT3: deacetylates and activates SOD2 (mitochondrial antioxidant) and key OXPHOS enzymes",
        "SIRT5: regulates ammonia detoxification via carbamoyl phosphate synthetase — relevant to endurance fatigue",
        "PARP1: activated by exercise-induced DNA strand breaks; consumes NAD+ at high rates during intense effort",
      ],
    },
    {
      type: "heading",
      text: "NAD+ Decline and the Aging Athlete",
    },
    {
      type: "paragraph",
      text: "NAD+ levels decline approximately 50% between young adulthood and middle age across multiple tissue types, including skeletal muscle. This decline has been linked to reduced mitochondrial function, impaired DNA repair, and decreased sirtuin activity — all factors that contribute to the performance plateau and extended recovery times common in masters athletes.",
    },
    {
      type: "paragraph",
      text: "Research from the Guarente Lab (MIT) and others has established that this decline is driven by multiple mechanisms: decreased NAMPT (rate-limiting enzyme in the salvage pathway), increased CD38 activity with age, and accumulated DNA damage driving PARP1 consumption. Strategies to restore NAD+ have therefore attracted significant interest in both longevity and sports performance research.",
    },
    {
      type: "heading",
      text: "Preclinical Evidence: NAD+ Precursors and Exercise Capacity",
    },
    {
      type: "subheading",
      text: "NMN (Nicotinamide Mononucleotide)",
    },
    {
      type: "paragraph",
      text: "A landmark 2016 study published in Cell Metabolism by Mills et al. demonstrated that NMN supplementation in aged mice restored NAD+ levels in multiple tissues, improved treadmill endurance, enhanced oxygen utilization, and restored muscle insulin sensitivity. Notably, NMN-treated aged mice showed exercise capacity comparable to younger controls — a striking result that generated significant follow-on research.",
    },
    {
      type: "paragraph",
      text: "Subsequent work from the Imai Lab (Washington University) has explored mechanisms: NMN appears to support muscle NAD+ via the NAMPT-NMN-NAD+ axis, and to enhance mitochondrial biogenesis through SIRT1-PGC-1α signaling. In young mice, effects on baseline exercise capacity are less pronounced — consistent with the hypothesis that NAD+ supplementation is most impactful when restoring a depleted pool.",
    },
    {
      type: "subheading",
      text: "NR (Nicotinamide Riboside)",
    },
    {
      type: "paragraph",
      text: "NR, a naturally occurring form of vitamin B3, raises NAD+ in humans via the Nrk1/Nrk2 kinase pathway. A 2018 study in Nature Communications (Martens et al.) demonstrated that 6 weeks of NR supplementation (500mg/day) elevated blood NAD+ by 60% in healthy middle-aged adults. While this study was not an exercise performance trial, the NAD+ restoration in peripheral blood mononuclear cells suggested systemic availability.",
    },
    {
      type: "paragraph",
      text: "A 2020 study by Liao et al. in Exercise and Sport Sciences Reviews examined NR's effects on muscle mitochondria in sedentary older adults and found improved mitochondrial function markers and a trend toward improved walking economy — though effect sizes were modest and some endpoints did not reach statistical significance.",
    },
    {
      type: "subheading",
      text: "Direct NAD+ Administration",
    },
    {
      type: "paragraph",
      text: "IV NAD+ administration has been studied in clinical and preclinical contexts. Unlike oral precursors, IV NAD+ rapidly elevates plasma levels and may access tissues that oral routes cannot reach as efficiently. Research on IV NAD+ in metabolic conditions has documented rapid energy improvements in subjects with mitochondrial dysfunction, though data in healthy athletic populations is limited.",
    },
    {
      type: "heading",
      text: "MOTS-c: The NAD+-Dependent Exercise Peptide",
    },
    {
      type: "paragraph",
      text: "MOTS-c is a mitochondria-derived peptide encoded within the mitochondrial genome's 12S rRNA region. Its activity is tightly linked to the NAD+/NADH ratio — MOTS-c expression increases when this ratio falls, acting as a metabolic stress signal. Research by Lee et al. (2015, Cell Metabolism) established MOTS-c as a regulator of glucose and lipid metabolism with striking effects on exercise capacity.",
    },
    {
      type: "paragraph",
      text: "In mouse models, MOTS-c injection improved treadmill running time significantly compared to controls, with effects more pronounced in aged mice. MOTS-c appears to translocate from mitochondria to the nucleus during exercise stress, where it regulates the AMPK pathway and supports mitochondrial biogenesis. The mechanistic link between NAD+ status and MOTS-c expression makes these compounds complementary in exercise research contexts.",
    },
    {
      type: "heading",
      text: "Humanin and Muscle Preservation",
    },
    {
      type: "paragraph",
      text: "Humanin, another mitochondria-derived peptide in the same family as MOTS-c, has been studied for its role in protecting skeletal muscle from stress-induced apoptosis. During intense exercise, particularly eccentric loading, muscle fibers undergo controlled damage with satellite cell-mediated repair. Humanin appears to modulate this process by activating the STAT3 pathway and suppressing cytochrome c release from damaged mitochondria.",
    },
    {
      type: "paragraph",
      text: "Research has also documented that humanin levels in serum decline with age and correlate positively with physical function in older adults — suggesting it may be a marker of mitochondrial health relevant to masters athletes.",
    },
    {
      type: "heading",
      text: "SS-31 and Mitochondrial Efficiency During High-Intensity Exercise",
    },
    {
      type: "paragraph",
      text: "Elamipretide (SS-31) targets cardiolipin in the inner mitochondrial membrane, stabilizing the electron transport chain supercomplexes that are critical for efficient oxidative phosphorylation. Research has shown that cardiolipin content and arrangement change with both aging and intense exercise, and that SS-31 treatment can restore cristae morphology and electron transport chain efficiency in preclinical models.",
    },
    {
      type: "paragraph",
      text: "For exercise performance researchers, the key question is whether SS-31's mitochondrial efficiency gains translate to meaningful changes in VO2 max or lactate threshold endpoints. While direct data in athlete models is limited, the mechanistic pathway — improved ATP yield per oxygen consumed — is directly relevant to endurance performance.",
    },
    {
      type: "heading",
      text: "Research-Relevant Endpoints for NAD+ and Exercise Studies",
    },
    {
      type: "table",
      headers: ["Endpoint", "Measurement Method", "Relevant Compounds"],
      rows: [
        ["VO2 max", "Metabolic cart, graded treadmill", "NAD+ precursors, MOTS-c"],
        ["Lactate threshold", "Blood lactate vs. workload", "NAD+ precursors, SS-31"],
        ["Mitochondrial density", "Electron microscopy, citrate synthase activity", "NAD+, MOTS-c, SS-31"],
        ["NAD+/NADH ratio", "LC-MS tissue extraction", "NMN, NR, direct NAD+"],
        ["PGC-1α expression", "RT-PCR, Western blot", "NAD+ precursors (via SIRT1)"],
        ["Recovery time to baseline HR", "Heart rate monitoring", "NAD+ precursors, ipamorelin"],
        ["IGF-1 and GH levels", "ELISA serum assay", "Ipamorelin/CJC-1295 + NAD+"],
      ],
    },
    {
      type: "heading",
      text: "NAD+ in Combination with GH Secretagogues",
    },
    {
      type: "paragraph",
      text: "An emerging area of exercise performance research examines the interaction between NAD+ restoration and growth hormone secretagogue administration. GH stimulates lipolysis and protein synthesis, while NAD+ supports the mitochondrial machinery required to process the resulting substrates. Research has suggested these pathways are complementary: GH-driven anabolic signaling is most effective when mitochondrial oxidative capacity is sufficient to support elevated metabolic demands.",
    },
    {
      type: "paragraph",
      text: "Protocols combining ipamorelin + CJC-1295 with NAD+ precursors have been discussed in the research community as a comprehensive approach to GH axis support and mitochondrial efficiency — though direct combination studies in exercise models remain limited in the published literature as of 2026.",
    },
    {
      type: "heading",
      text: "Practical Dosing Parameters from Preclinical Literature",
    },
    {
      type: "paragraph",
      text: "In rodent studies, effective NMN doses have typically ranged from 300–500 mg/kg/day in drinking water or injection. Allometric scaling to human equivalents (using the 12.3 conversion factor for mice to humans) suggests daily doses of approximately 25–40 mg/kg in humans — though direct translation from rodent models to human research is imperfect and these figures are not FDA-approved dosing recommendations.",
    },
    {
      type: "callout",
      text: "Research Note: Inter-individual variation in NAMPT activity and CD38 expression means NAD+ restoration responses vary significantly between subjects. Baseline NAD+ measurement before and throughout research protocols is considered best practice for accurate data interpretation.",
    },
    {
      type: "heading",
      text: "Sourcing Verified NAD+ and Related Peptides for Research",
    },
    {
      type: "paragraph",
      text: "Exercise performance research requires compounds of consistent, verified purity. Batch-to-batch variation in NAD+ precursor purity can confound results significantly. Nexphoria provides HPLC-verified NAD+, NMN, MOTS-c, humanin, and SS-31 with full batch COAs, ensuring the research-grade quality required for reproducible results.",
    },
    {
      type: "disclaimer",
      text: "This content is for educational and research purposes only. All compounds discussed are research chemicals not approved for human use. This article does not constitute medical advice. Research peptides and NAD+ precursors should only be used in legitimate laboratory research by qualified researchers.",
    },
  ],
};
