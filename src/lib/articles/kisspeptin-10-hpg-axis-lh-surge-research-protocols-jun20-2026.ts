import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "kisspeptin-10-hpg-axis-lh-surge-research-protocols-jun20-2026",
  title: "Kisspeptin-10 and the HPG Axis: LH Surge Research Protocols",
  description:
    "Kisspeptin-10 is a 10-amino acid fragment of the KISS1 gene product that potently stimulates LH and FSH release via GPR54 signaling. A research overview of its role in HPG axis regulation, reproductive biology, and published protocol designs.",
  category: "Compound Profiles",
  readMinutes: 12,
  publishedAt: "2026-06-20",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Kisspeptin-10 (KP-10) is the shortest bioactive fragment of the KISS1 gene product, a family of neuropeptides that serve as the primary upstream regulators of the hypothalamic-pituitary-gonadal (HPG) axis. Discovered as the natural ligand for the orphan receptor GPR54 (now officially designated KISS1R), kisspeptin signaling was identified as essential for normal puberty onset and reproductive function through loss-of-function studies in humans and rodents in the early 2000s.",
    },
    {
      type: "paragraph",
      text: "Kisspeptin-10 has become a research tool for interrogating the HPG axis, studying LH pulse dynamics, and exploring potential applications in fertility research. Its defined mechanism, reliable stimulation of gonadotropin release, and relatively short half-life make it useful for controlled research protocol design.",
    },
    {
      type: "heading",
      text: "The KISS1 Gene Family",
    },
    {
      type: "paragraph",
      text: "The KISS1 gene encodes a 145-amino acid precursor protein (kisspeptin-145) that undergoes progressive proteolytic processing to yield shorter bioactive fragments: kisspeptin-54 (also called metastin, the predominant circulating form), kisspeptin-14, kisspeptin-13, and kisspeptin-10. All bioactive forms share a C-terminal amidated RF-amide motif (the RFamide sequence) that is essential for GPR54 binding.",
    },
    {
      type: "list",
      items: [
        "KP-54: predominant circulating isoform, produced mainly by the placenta during pregnancy; longer half-life (~30 min)",
        "KP-10: most potent fragment per molar unit at the receptor; shortest half-life (~4-8 min in rodent models); most commonly used in acute research protocols",
        "KP-13 and KP-14: intermediate potency and stability; used less frequently in research",
        "All fragments signal via GPR54 (KISS1R) — a Gq/11-coupled receptor that activates phospholipase C, IP3 production, and calcium mobilization",
      ],
    },
    {
      type: "heading",
      text: "GPR54 Signaling and GnRH Pulse Generation",
    },
    {
      type: "paragraph",
      text: "GPR54 is expressed on GnRH (gonadotropin-releasing hormone) neurons in the hypothalamus, primarily in the arcuate nucleus (ARC) and the anteroventral periventricular nucleus (AVPV). Kisspeptin-10 binding to GPR54 on these neurons triggers depolarization and GnRH pulse release, which in turn stimulates LH and FSH secretion from the anterior pituitary.",
    },
    {
      type: "subheading",
      text: "Key signaling elements:",
    },
    {
      type: "list",
      items: [
        "GPR54 activates Gαq/11 → phospholipase Cβ → IP3 → intracellular Ca²⁺ release and DAG → PKC activation",
        "Additionally couples to Gα12/13 and β-arrestin recruitment for receptor internalization and desensitization",
        "Kiss1 neurons in the arcuate nucleus co-express neurokinin B (NKB) and dynorphin — the 'KNDy neuron' triad that generates pulsatile GnRH release",
        "Estrogen and progesterone regulate KISS1 expression: estrogen exerts negative feedback at the ARC and positive feedback at the AVPV (preovulatory LH surge mechanism)",
        "Testosterone strongly suppresses KISS1/GPR54 signaling in male HPG axis — mechanism of testosterone-driven negative feedback on LH",
      ],
    },
    {
      type: "heading",
      text: "Research Applications of Kisspeptin-10",
    },
    {
      type: "paragraph",
      text: "Because kisspeptin-10 reliably and reproducibly triggers LH release in both animals and humans, it has been used as a pharmacological probe for HPG axis function across several research domains.",
    },
    {
      type: "subheading",
      text: "1. Characterizing HPG axis responsiveness",
    },
    {
      type: "paragraph",
      text: "Single IV or SC bolus kisspeptin-10 administration produces a measurable LH surge within 15–45 minutes in humans and rodents. The magnitude of this LH response provides a functional readout of pituitary sensitivity and GnRH neuron responsiveness — useful in studies of hypogonadotropic hypogonadism, pubertal timing research, and the effects of metabolic status on reproductive axis activity.",
    },
    {
      type: "subheading",
      text: "2. Fertility research and ovulation induction models",
    },
    {
      type: "paragraph",
      text: "Several clinical teams have investigated kisspeptin-54 as a trigger for final oocyte maturation in IVF protocols as an alternative to hCG, specifically to avoid ovarian hyperstimulation syndrome (OHSS). KP-10 has been studied in rodent ovulation induction models. Published work from the Dhillo lab (Imperial College London) demonstrated that IV KP-54 triggered ovulation in IVF patients and resulted in live births, with dramatically reduced OHSS risk compared to standard hCG triggers.",
    },
    {
      type: "subheading",
      text: "3. Sex differences and estrogen-kisspeptin interactions",
    },
    {
      type: "paragraph",
      text: "The sexually dimorphic expression of KISS1 in the AVPV (high in females, low in males) and its estrogen-upregulated expression in females are thought to underlie the preovulatory LH surge that does not occur in males. Research protocols using KP-10 alongside estradiol priming have helped map the neuroendocrine circuitry responsible for the mid-cycle LH surge.",
    },
    {
      type: "subheading",
      text: "4. Metabolic regulation of reproduction",
    },
    {
      type: "paragraph",
      text: "Leptin, insulin, and energy status modulate KISS1 neuron activity — providing a mechanism by which nutritional state influences reproductive function. Kisspeptin-10 administration has been used in animal models of caloric restriction and anorexia nervosa to test whether impaired reproductive function reflects upstream HPG suppression (KP10 restores LH) vs. pituitary or gonadal failure (KP10 fails to restore LH).",
    },
    {
      type: "heading",
      text: "Desensitization and Pulsatile vs. Continuous Delivery",
    },
    {
      type: "paragraph",
      text: "A critical finding for research protocol design is that continuous kisspeptin infusion desensitizes GPR54, similar to GnRH agonist-induced pituitary desensitization. This is mechanistically important: pulsatile kisspeptin delivery (mimicking physiological KNDy neuron firing) maintains robust LH pulsatility, while continuous infusion initially stimulates then suppresses LH secretion.",
    },
    {
      type: "list",
      items: [
        "Acute bolus KP-10 (IV or SC): reliable single LH surge; peak at 15–45 min; returns to baseline within 90–120 min",
        "Continuous IV infusion for >60 minutes: LH surge followed by return toward baseline despite continued peptide delivery — receptor desensitization",
        "Pulsatile delivery (e.g., 60-minute pulse intervals): maintains LH pulsatility and avoids tachyphylaxis",
        "This distinction is critical for interpreting studies of kisspeptin's physiological role vs. pharmacological application",
      ],
    },
    {
      type: "heading",
      text: "Pharmacokinetics",
    },
    {
      type: "list",
      items: [
        "KP-10 half-life: ~4–8 minutes in rodents (IV); longer with SC due to absorption phase (~20–30 min effective window)",
        "KP-54 half-life: ~28–30 minutes (IV); more sustained response profile",
        "Degradation primarily by neprilysin and other membrane metalloendopeptidases; C-terminal amide is critical for receptor binding and partially protects against some proteolytic attack",
        "Bioavailability SC vs IV: estimated 15–25% in rodent models; limited data in primates",
      ],
    },
    {
      type: "heading",
      text: "Published Protocol Parameters",
    },
    {
      type: "subheading",
      text: "Rodent research (mice/rats):",
    },
    {
      type: "list",
      items: [
        "Typical acute dose: 1–10 nmol IP or IV for LH surge studies; dose-response from 0.1–100 nmol documented",
        "Blood sampling at 15, 30, 60, 90, 120 min post-injection for LH ELISA",
        "For desensitization experiments: continuous osmotic pump delivery at 24–48 nmol/day",
        "Estradiol priming (1–2 µg E2 benzoate SC 24–48 hr prior) often required to observe robust LH surges in gonadectomized models",
      ],
    },
    {
      type: "subheading",
      text: "Human clinical research parameters (published phase I/II):",
    },
    {
      type: "list",
      items: [
        "IV KP-10: 0.1–10 nmol/kg bodyweight; LH peak at ~25–35 min",
        "SC KP-54: 1.6–6.4 nmol/kg for IVF oocyte maturation trigger",
        "LH, FSH, testosterone/estradiol, and GnRH (if accessible via petrosal sinus sampling) are standard endpoints",
        "Multiple reaction monitoring (MRM) LC-MS/MS increasingly used for kisspeptin quantification in plasma",
      ],
    },
    {
      type: "heading",
      text: "Reconstitution and Storage",
    },
    {
      type: "paragraph",
      text: "Kisspeptin-10 is typically supplied as a lyophilized powder. Reconstitute in sterile water or 0.9% saline for in vitro and in vivo research. For in vivo use, BSA (0.1%) is sometimes added to reduce adsorption to syringe walls at low concentrations. Store lyophilized material at -20°C; reconstituted aliquots at -80°C. Avoid multiple freeze-thaw cycles — C-terminal amide degradation can occur with repeated cycling. Verify purity and sequence integrity via HPLC/MS before sensitive receptor binding or in vivo studies.",
    },
    {
      type: "divider",
    },
    {
      type: "disclaimer",
      text: "This article is intended for research professionals and educational purposes only. Kisspeptin-10 is not approved by the FDA or any regulatory agency for human therapeutic use. All human data cited are from peer-reviewed clinical research studies. Nexphoria peptides are sold strictly for laboratory research use.",
    },
  ],
};
