import type { BlogArticle } from '../blog-types';

export const article: BlogArticle =   {
    slug: "aod-9604-lipolytic-fragment-research-guide",
    title: "AOD-9604: Lipolytic Fragment Research Guide",
    description:
      "A focused research review of AOD-9604 — the hGH fragment(177-191) — covering beta-3 adrenergic receptor activation, fatty acid mobilization, insulin-sparing mechanism, DIO rodent studies, and reconstitution protocol.",
    category: "Compound Profiles",
    readMinutes: 8,
    publishedAt: "2026-05-29",
    ogImage: "/og-image.jpg",
    body: [
      {
        type: "paragraph",
        text: "AOD-9604 is a synthetic peptide fragment corresponding to amino acids 177–191 of human growth hormone (hGH), with the addition of an N-terminal tyrosine residue (Tyr-hGH177–191). It was developed in the 1990s by researchers at Monash University, Australia, specifically to isolate the lipolytic — fat-mobilizing — activity of hGH while eliminating the diabetogenic (insulin-resistance) and mitogenic side effects associated with full-length growth hormone therapy.",
      },
      {
        type: "paragraph",
        text: "Unlike hGH, which binds the GH receptor (GHR) and drives a broad anabolic and metabolic signaling cascade, AOD-9604 does not bind the GH receptor at therapeutically relevant concentrations. Instead, it appears to act through a distinct pathway involving beta-adrenergic signaling in adipose tissue — making it a more tissue-selective pharmacological probe for studying fat metabolism.",
      },
      {
        type: "heading",
        text: "What Is AOD-9604?",
      },
      {
        type: "list",
        items: [
          "Full name: Anti-Obesity Drug 9604 (also written AOD9604)",
          "Sequence: Tyr-Leu-Arg-Ile-Val-Gln-Cys-Arg-Ser-Val-Glu-Gly-Ser-Cys-Gly-Phe (16 amino acids; the N-terminal Tyr is the addition versus native hGH177–191)",
          "Molecular weight: 1815.1 g/mol",
          "CAS number: 221231-10-3",
          "Structure: Contains a disulfide bridge between Cys182 and Cys189 (numbered from hGH); this bridge is critical for biological activity",
          "Solubility: Water-soluble; suitable for aqueous reconstitution",
        ],
      },
      {
        type: "paragraph",
        text: "The disulfide bridge is the structural feature that differentiates AOD-9604 from linear fragments of hGH. Loss of the disulfide bond (through reduction or oxidation of free cysteines) significantly reduces lipolytic activity in assay systems, which has important implications for storage and handling.",
      },
      {
        type: "heading",
        text: "Mechanism of Action",
      },
      {
        type: "subheading",
        text: "Beta-3 Adrenergic Receptor Activation",
      },
      {
        type: "paragraph",
        text: "The primary proposed mechanism for AOD-9604's lipolytic activity is activation of the beta-3 adrenergic receptor (β3-AR) in adipose tissue. β3-AR is a G protein-coupled receptor coupled to Gs, whose activation elevates intracellular cAMP, activating protein kinase A (PKA). PKA in turn phosphorylates hormone-sensitive lipase (HSL) and perilipin — the two key regulators of triglyceride hydrolysis within adipocytes.",
      },
      {
        type: "paragraph",
        text: "Activated HSL cleaves stored triglycerides into free fatty acids (FFAs) and glycerol, which are released from adipocytes into circulation for use as fuel. β3-AR is expressed predominantly in brown adipose tissue (BAT) and to a lesser extent in white adipose tissue (WAT) and the gut. Its activation by AOD-9604 — rather than by catecholamines — is proposed to explain the selective adipose effect without systemic cardiovascular stimulation typically associated with non-selective beta-agonists.",
      },
      {
        type: "paragraph",
        text: "Evidence supporting β3-AR as the primary target includes: (1) AOD-9604's lipolytic effect in vitro is attenuated by selective β3-AR antagonists (SR59230A); (2) the compound fails to stimulate lipolysis in adipocytes from β3-AR knockout mice; (3) the dose-response curve for AOD-9604 parallels that of the selective β3-AR agonist CL-316,243 in primary adipocyte preparations. Taken together, these findings place β3-AR central to the compound's mechanism.",
      },
      {
        type: "subheading",
        text: "Insulin-Sparing Mechanism",
      },
      {
        type: "paragraph",
        text: "One of the most scientifically important properties distinguishing AOD-9604 from hGH is its lack of insulin-antagonizing activity. Full-length hGH induces insulin resistance through post-receptor signaling mechanisms — it upregulates SOCS proteins that inhibit insulin receptor substrate (IRS-1) phosphorylation, reducing insulin-stimulated glucose uptake in muscle and liver. This diabetogenic effect limits hGH's clinical utility in chronic obesity or metabolic disease contexts.",
      },
      {
        type: "paragraph",
        text: "AOD-9604, by not binding the GH receptor, bypasses this mechanism entirely. In hyperinsulinemic-euglycemic clamp studies in rodents, AOD-9604 administration did not reduce insulin-stimulated glucose disposal rates compared to vehicle controls — confirming insulin action is preserved. This insulin-neutral profile is what positions the compound as a potentially cleaner lipolytic research tool compared to hGH itself.",
      },
      {
        type: "subheading",
        text: "Adipogenesis Inhibition",
      },
      {
        type: "paragraph",
        text: "Beyond acute lipolysis, some studies have documented that AOD-9604 inhibits differentiation of pre-adipocytes into mature adipocytes. In 3T3-L1 pre-adipocyte cell cultures — the standard in vitro model for adipogenesis — AOD-9604 treatment during the differentiation induction window reduced lipid droplet accumulation and downregulated adipogenic transcription factors including PPARγ and C/EBPα. This suggests a dual mechanism: mobilizing existing fat stores while reducing the commitment of new fat cells.",
      },
      {
        type: "heading",
        text: "DIO Rodent Studies",
      },
      {
        type: "paragraph",
        text: "The primary preclinical evidence base for AOD-9604 consists of studies in diet-induced obesity (DIO) rodent models — mice or rats fed a high-fat diet to induce obesity resembling human metabolic syndrome.",
      },
      {
        type: "subheading",
        text: "Weight Loss and Body Composition",
      },
      {
        type: "paragraph",
        text: "Heffernan et al. (1999) — one of the foundational papers from the Monash group — demonstrated that AOD-9604 administered subcutaneously at 500 mcg/kg/day for 14 days produced significant reductions in body fat in DIO mice compared to saline controls, without affecting lean body mass. Critically, the dose-response was non-linear: lower doses (50 mcg/kg) were marginally effective, 500 mcg/kg produced the most robust response, and higher doses (5000 mcg/kg) showed reduced efficacy — consistent with β3-AR receptor saturation dynamics.",
      },
      {
        type: "paragraph",
        text: "Longer-duration studies (8–12 weeks) confirmed that chronic AOD-9604 administration maintained weight loss without apparent tachyphylaxis at the 500 mcg/kg dose range. Body composition analysis by DEXA in these studies showed preferential reduction of fat mass with preservation of lean mass — a finding that has driven interest in AOD-9604 as a model for studying adipose-selective energy mobilization.",
      },
      {
        type: "subheading",
        text: "Metabolic Markers",
      },
      {
        type: "paragraph",
        text: "In DIO models, AOD-9604 treatment is associated with reductions in fasting triglycerides and free fatty acid cycling rates, consistent with improved lipid metabolism. Some studies report modest reductions in fasting glucose — attributed to the weight loss effect rather than direct insulin sensitization. Importantly, insulin levels in AOD-9604-treated animals have not been found to rise in a compensatory manner, which would indicate insulin resistance. Metabolic cage studies show modest increases in oxygen consumption and carbon dioxide output consistent with increased fat oxidation.",
      },
      {
        type: "heading",
        text: "METABOLICA Trial: Human Clinical Data",
      },
      {
        type: "paragraph",
        text: "AOD-9604 is one of the few research peptides to have progressed into human Phase 2 clinical development. The METABOLICA program, conducted by Metabolic Pharmaceuticals (spun out of Monash University), included multiple placebo-controlled trials evaluating oral AOD-9604 in overweight and obese adults.",
      },
      {
        type: "paragraph",
        text: "In the Phase 2b METABOLICA trial (n=300, 24 weeks, oral AOD-9604 at doses of 1 mg, 5 mg, 10 mg, and 20 mg daily), the primary endpoint of weight loss versus placebo was not met at a statistically significant level. The treatment groups showed numerically greater weight loss than placebo but failed to achieve the pre-specified threshold for significance across all dose arms. Secondary endpoints including waist circumference, lipid markers, and glucose tolerance did not reach significance either.",
      },
      {
        type: "paragraph",
        text: "The METABOLICA result prompted important questions about whether oral delivery achieves sufficient systemic exposure — oral peptide bioavailability faces significant barriers from gastric acid and intestinal peptidases. The subcutaneous route used in rodent studies produces a pharmacokinetic profile (Tmax ~30 min, plasma exposure over 2-4 hours) that oral administration likely does not replicate. This translational gap between subcutaneous preclinical data and oral human data remains an active methodological question.",
      },
      {
        type: "callout",
        text: "AOD-9604 reached Phase 2b human trials — a milestone few research peptides achieve. While the oral Phase 2b trial missed its primary endpoint, the safety profile was excellent (no serious adverse events, no insulin resistance, no IGF-1 or GH axis effects). These safety data are informative for researchers designing preclinical safety panels.",
      },
      {
        type: "heading",
        text: "Comparison to Full-Length hGH",
      },
      {
        type: "list",
        items: [
          "GH receptor binding: hGH — high affinity at GHR. AOD-9604 — does not bind GHR at pharmacological doses.",
          "Lipolysis: Both produce lipolysis. hGH via GH→cAMP→HSL pathway; AOD-9604 via β3-AR→cAMP→HSL.",
          "Insulin resistance: hGH induces significant insulin resistance (SOCS/IRS-1 mechanism). AOD-9604 — insulin-neutral in clamp studies.",
          "Muscle anabolism: hGH promotes muscle protein synthesis via IGF-1 axis. AOD-9604 — no anabolic effect (does not activate GHR/IGF-1 axis).",
          "IGF-1 elevation: hGH consistently raises circulating IGF-1. AOD-9604 — no significant IGF-1 changes in rodent or human studies.",
          "Mitogenic risk: hGH has mitogenic potential via GHR/STAT5 signaling. AOD-9604 — no GHR binding; no mitogenic pathway activation documented.",
          "Cartilage/bone: hGH stimulates chondrocyte proliferation. AOD-9604 — some preclinical data suggest cartilage repair properties, though mechanism and magnitude require further characterization.",
        ],
      },
      {
        type: "heading",
        text: "Reconstitution Protocol",
      },
      {
        type: "paragraph",
        text: "AOD-9604 is supplied as a lyophilized powder. The disulfide bond in the native structure makes it sensitive to reducing conditions — avoid reconstitution buffers containing DTT, TCEP, beta-mercaptoethanol, or other reducing agents, as these will cleave the disulfide and inactivate the compound.",
      },
      {
        type: "list",
        items: [
          "Allow the vial to equilibrate to room temperature before opening — prevents condensation",
          "Add sterile water or bacteriostatic water using a sterile syringe directed at the vial wall",
          "Do not use reducing buffers (no DTT, no TCEP) — these will cleave the disulfide and eliminate activity",
          "Gently swirl or invert to dissolve; do not vortex",
          "Typical working concentrations: 0.5–2 mg/mL for subcutaneous injection protocols",
          "Reconstituted solution at 4°C: stable for 3–4 weeks in bacteriostatic water; 5–7 days in sterile water",
          "Aliquot into single-use volumes before freezing at −20°C to prevent freeze-thaw cycling",
        ],
      },
      {
        type: "heading",
        text: "Storage Requirements",
      },
      {
        type: "list",
        items: [
          "Lyophilized: −20°C in sealed, light-protected vials for up to 24 months",
          "Short-term working stock: 4°C in sealed vial for up to 3 months",
          "Reconstituted: 4°C, use within 3–4 weeks (bacteriostatic water) or 5–7 days (sterile water)",
          "Avoid: light exposure (UV degrades the disulfide-containing peptide), oxidizing conditions, reducing conditions (cleaves disulfide), alkaline pH >8.5",
          "The compound has a characteristic off-white appearance as lyophilized powder; slight color variation between lots is normal",
        ],
      },
      {
        type: "heading",
        text: "Research Design Considerations",
      },
      {
        type: "paragraph",
        text: "When designing AOD-9604 studies, several methodological points deserve attention:",
      },
      {
        type: "list",
        items: [
          "Use DIO models for body composition endpoints: AOD-9604's effects are most robust in obese backgrounds; normal-weight rodents show smaller lipolytic responses, likely because baseline β3-AR activity is lower in non-obese adipose tissue",
          "Route matters: subcutaneous administration is well-characterized; oral data are mixed; intraperitoneal is sometimes used but introduces faster absorption with different PK dynamics",
          "Verify disulfide integrity: request HPLC data with retention time and mass spec confirmation from your supplier — reduced or oxidized species may appear on HPLC as shifted peaks; only the intact disulfide species has documented activity",
          "Dose-response is non-linear: include at least 3 dose groups plus vehicle control; don't assume higher is better — studies consistently show a plateau and sometimes U-shaped responses above 500–1000 mcg/kg in rodents",
          "Metabolic endpoints: combine fat mass (DEXA or carcass lipid) with metabolic cage data (VO2, RQ), glucose tolerance test (GTT), and fasting insulin to build a full metabolic picture",
          "Controls: include a β3-AR selective agonist (e.g., CL-316,243) as a positive control and a β3-AR antagonist pre-treatment group to confirm receptor specificity in your model",
          "IGF-1 and insulin monitoring: verify at baseline and endpoint to confirm absence of GH axis activation and maintained insulin sensitivity — key mechanistic claims of AOD-9604 that should be reproduced in your specific system",
        ],
      },
      {
        type: "callout",
        text: "AOD-9604 is a valuable tool for studying beta-3 adrenergic lipolysis specifically, with the advantage of an insulin-neutral profile that avoids the metabolic confounders introduced by full hGH. Its clinical dataset — including human safety data — is unusually extensive for a research peptide.",
      },
      {
        type: "heading",
        text: "Regulatory Note",
      },
      {
        type: "paragraph",
        text: "AOD-9604 is supplied as a research chemical for laboratory use only. It is not FDA-approved as a drug, dietary supplement, or therapeutic agent. The compound was evaluated in clinical trials conducted under investigational new drug applications; it is not currently approved for any clinical indication. Researchers are responsible for compliance with all applicable regulations in their jurisdiction.",
      },
    ],
  };
