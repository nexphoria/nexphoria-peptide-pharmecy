import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "adipotide-ftpp-experimental-adipose-targeted-research-peptide",
  title: "Adipotide (FTPP): Experimental Adipose-Targeted Research Peptide",
  description:
    "A research review of Adipotide (FTPP), the prohibitin-targeting proapoptotic peptide that selectively eliminates adipose vasculature. Covers mechanism of action, Kolonin 2004 Nature Medicine DIO mouse data, Barnhart 2011 primate study, renal toxicity profile, reconstitution protocol, and research design considerations.",
  category: "Metabolic",
  readMinutes: 8,
  publishedAt: "2026-05-29",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Adipotide — also designated FTPP (fat-targeted proapoptotic peptide) — represents one of the more mechanistically distinctive experimental peptides in metabolic research. Unlike GLP-1 receptor agonists that reduce energy intake through central and peripheral hormone signaling, or lipolytic peptides such as AOD-9604 that activate hormone-sensitive lipase, Adipotide works by a completely different principle: it physically destroys the blood vessels that supply adipose tissue, starving fat cells of nutrients until they undergo apoptosis.",
    },
    {
      type: "paragraph",
      text: "This mechanism — adipose vascular pruning — was first demonstrated in obese mice by Kolonin and colleagues at M.D. Anderson Cancer Center in 2004, and subsequently confirmed in a non-human primate study in 2011. The data are striking in terms of body composition change magnitude. However, the compound's pharmacological window is narrow and dose-dependent renal tubular toxicity has been consistently observed, making it an active subject of dose-optimization and formulation research. This guide covers Adipotide's prohibitin-targeting mechanism, published preclinical data, toxicity profile, research design considerations, and reconstitution protocol.",
    },
    {
      type: "heading",
      text: "Mechanism of Action: Prohibitin-Targeted Apoptosis",
    },
    {
      type: "paragraph",
      text: "Adipotide is a bipartite chimeric peptide composed of two functionally distinct domains joined by a GG linker. The first domain — CKGGRAKDC — is the targeting peptide that binds prohibitin-1 (PHB1), a mitochondrial chaperone protein that is aberrantly expressed on the luminal surface of endothelial cells in adipose-associated blood vessels. This vascular-specific PHB1 surface expression is a defining feature of white adipose tissue vasculature and is not observed at comparable levels in most other vascular beds, giving the compound its tissue selectivity.",
    },
    {
      type: "paragraph",
      text: "The second domain — KLAKLAK₂ — is a mitochondria-disrupting proapoptotic peptide. When the targeting domain docks on PHB1, the KLAKLAK₂ sequence is internalized into the endothelial cell, where it disrupts the inner mitochondrial membrane potential and triggers caspase-dependent apoptosis. The result is collapse of the capillary networks feeding white adipose depots. With blood supply cut off, adipocytes are deprived of oxygen and nutrients, undergo secondary apoptosis, and the adipose depot remodels to a smaller, less vascularized state.",
    },
    {
      type: "paragraph",
      text: "Critically, PHB1 expression on vascular endothelium is fat-specific in the sense that tumor vasculature, muscle vasculature, cardiac vasculature, and hepatic sinusoids do not express surface PHB1 at levels sufficient for CKGGRAKDC targeting at therapeutic doses. This selectivity, observed in the original phage display peptide screening libraries that identified CKGGRAKDC, is the entire basis for Adipotide's viability as a targeted anti-obesity approach.",
    },
    {
      type: "heading",
      text: "Kolonin 2004: The Diet-Induced Obesity Mouse Data",
    },
    {
      type: "paragraph",
      text: "The landmark publication by Kolonin et al. in Nature Medicine (2004) demonstrated Adipotide's anti-obesity activity in two mouse models: genetically obese ob/ob mice and diet-induced obese (DIO) C57BL/6J mice. In the DIO model — the more translationally relevant system — mice receiving daily IP injections of Adipotide at 1 mg/kg for 28 days showed a mean 30% reduction in total body weight compared to vehicle controls. DEXA imaging confirmed that essentially all weight lost was adipose tissue; lean mass was preserved. Epididymal, inguinal, and retroperitoneal fat pads were all markedly reduced.",
    },
    {
      type: "paragraph",
      text: "Histological analysis confirmed the mechanism: adipose tissue in treated mice showed collapsed capillary networks, pericyte loss, and adipocyte apoptosis on TUNEL staining, while skeletal muscle, liver, and cardiac tissue appeared histologically normal. Leptin and insulin levels fell in proportion to fat mass loss. Importantly, food intake was not suppressed — caloric consumption in Adipotide-treated mice was equivalent to controls — confirming that the weight loss mechanism was entirely peripheral, not mediated via CNS appetite circuits.",
    },
    {
      type: "paragraph",
      text: "Dose-response experiments identified 1 mg/kg/day as the effective range in mice, with subtherapeutic effects below 0.3 mg/kg and emerging tubular vacuolation in kidneys above 3 mg/kg, establishing the key finding that the therapeutic window is dose-constrained.",
    },
    {
      type: "heading",
      text: "Barnhart 2011: Non-Human Primate Validation",
    },
    {
      type: "paragraph",
      text: "Barnhart et al. published data in Science Translational Medicine (2011) demonstrating Adipotide activity in Rhesus macaques with diet-induced obesity — a model substantially closer to human adipose biology than rodents. Obese male Rhesus monkeys receiving Adipotide at 1 mg/kg/day SC for 28 days showed a mean 11% reduction in body weight, 39% reduction in abdominal subcutaneous fat volume (measured by MRI), and significant improvement in insulin sensitivity (HOMA-IR reduction of ~27%).",
    },
    {
      type: "paragraph",
      text: "These are substantial effects in a primate model. Body composition MRI distinguished subcutaneous from visceral compartments and confirmed selective reduction in fat without measurable changes in lean mass or organ volumes. The insulin sensitization data were considered particularly notable, suggesting secondary metabolic improvements beyond the primary body composition effect — consistent with the known positive feedback between visceral fat reduction and insulin signaling.",
    },
    {
      type: "paragraph",
      text: "However, the primate study also confirmed the renal toxicity signal. Animals receiving Adipotide showed creatinine elevations (mean 27% increase over baseline) and proximal tubular vacuolation on kidney biopsy, similar in character to but lower in severity than the rodent high-dose findings. Creatinine returned toward baseline following cessation of treatment, suggesting reversibility at this dose level, but the observation established that nephrotoxicity monitoring is mandatory in any Adipotide research protocol.",
    },
    {
      type: "heading",
      text: "Renal Toxicity: What Is Known",
    },
    {
      type: "paragraph",
      text: "The renal toxicity of Adipotide is the primary translational barrier and the central focus of ongoing dose-optimization and formulation research. Mechanistically, the effect appears to result from off-target CKGGRAKDC binding to renal tubular epithelial cells, which express low but non-zero levels of PHB1 on their luminal surface. The KLAKLAK₂ apoptotic domain then acts on renal tubular cells, producing the characteristic proximal tubular vacuolation and, at high doses, cellular dropout.",
    },
    {
      type: "paragraph",
      text: "Research strategies being investigated to address this include: (1) reducing the ratio or activity of the KLAKLAK₂ domain while maintaining targeting efficiency; (2) nanoparticle or liposomal encapsulation that releases cargo preferentially in adipose tissue due to its vascular permeability characteristics; (3) dose fractionation (lower dose, more frequent administration) to maintain adipose efficacy while reducing renal peak exposure; (4) PEGylation to extend half-life and reduce Cmax. These formulation approaches are active areas of research interest.",
    },
    {
      type: "paragraph",
      text: "In research contexts, urinalysis (protein, casts, specific gravity), BUN, and creatinine monitoring at baseline, midpoint, and study endpoint are considered mandatory biomarkers. Any experiment observing sustained creatinine elevation >50% above baseline should be considered dose-limiting.",
    },
    {
      type: "heading",
      text: "Preclinical Dosing Protocols",
    },
    {
      type: "paragraph",
      text: "Published rodent dosing for DIO mouse experiments: 1 mg/kg/day via IP injection, administered daily for 4 weeks. Vehicle: sterile saline (0.9% NaCl), pH 7.0–7.4. Preparation: reconstitute lyophilized powder to 1 mg/mL in sterile saline; inject 10 mL/kg body weight (i.e., a 25g mouse receives 0.25 mL containing 0.025 mg). Injection volumes above 10 mL/kg are not recommended for IP route.",
    },
    {
      type: "paragraph",
      text: "For subcutaneous administration (preferred for longer-duration studies to minimize IP adhesion artifacts): 1 mg/kg/day SC is equivalent to the IP-effective dose in published models. Injection site rotation between dorsal quadrants is recommended for daily dosing protocols exceeding 2 weeks. Primate protocols used 1 mg/kg/day SC with once-daily injection.",
    },
    {
      type: "paragraph",
      text: "Study duration: 4 weeks (28 days) is the standard duration validated in the published literature. Body weight should be measured daily or every 2–3 days. DEXA or MRI imaging at day 0 and day 28 provides the most informative body composition endpoint. For shorter pilot experiments, DEXA at day 14 can be used as an interim readout.",
    },
    {
      type: "heading",
      text: "Research Design Considerations",
    },
    {
      type: "paragraph",
      text: "**Targeting specificity controls**: The critical control for Adipotide mechanism is a scrambled peptide control — a construct with the same amino acid composition as Adipotide but in a randomized sequence that disrupts PHB1 binding while maintaining similar physicochemical properties. This control confirms that observed adipose apoptosis is PHB1-targeted rather than non-specific peptide toxicity.",
    },
    {
      type: "paragraph",
      text: "**Apoptosis verification**: TUNEL staining of adipose tissue sections at endpoint confirms the proapoptotic mechanism. Co-staining with endothelial markers (CD31 or PECAM-1) should confirm that apoptosis initiates in vascular endothelial cells before spreading to adipocytes, consistent with the proposed mechanism. Adipocyte-only TUNEL without endothelial involvement would suggest an alternative mechanism.",
    },
    {
      type: "paragraph",
      text: "**Pair-fed controls**: Because Adipotide does not suppress food intake, pair-fed controls (matched for caloric intake to treated animals' spontaneous intake) are less critical than in GLP-1 experiments. However, as fat mass loss progresses, some secondary reduction in food intake may occur due to leptin normalization; monitoring food intake throughout the study is recommended.",
    },
    {
      type: "paragraph",
      text: "**Renal biomarker panel**: As noted, BUN, serum creatinine, urinary albumin-to-creatinine ratio (UACR), and kidney histology at endpoint are mandatory. If kidney pathology is a study endpoint of interest in its own right, time-course biopsy at week 2 and week 4 provides mechanistic data on tubular toxicity kinetics.",
    },
    {
      type: "paragraph",
      text: "**Depot-specific analysis**: The PHB1 expression pattern varies between visceral and subcutaneous adipose depots. Some published data suggest preferential effect on subcutaneous depots; others report more pronounced visceral reduction. Weighing individual depots (epididymal, inguinal, mesenteric, retroperitoneal) separately at necropsy, rather than using total fat mass alone, generates the depot-specificity data needed to characterize the compound's selectivity.",
    },
    {
      type: "heading",
      text: "Reconstitution and Storage",
    },
    {
      type: "paragraph",
      text: "Reconstitute lyophilized Adipotide in sterile bacteriostatic water (0.9% benzyl alcohol) or sterile saline to a working concentration of 1–2 mg/mL. Because the CKGGRAKDC targeting domain contains two cysteine residues that form a disulfide bridge essential for PHB1 binding, do not vortex, sonicate, or heat reconstituted solutions, as these conditions can reduce the disulfide and inactivate the targeting function. Gentle swirling at room temperature is sufficient for complete dissolution.",
    },
    {
      type: "paragraph",
      text: "Store lyophilized powder at −20°C, protected from light and moisture. Reconstituted solutions should be stored at 4°C and used within 7–10 days. Freeze-thaw cycling of reconstituted Adipotide should be minimized — if longer-term storage is required, prepare single-use aliquots before freezing. Discard any reconstituted solution showing visible aggregation or particulate matter.",
    },
    {
      type: "heading",
      text: "Research Use Only",
    },
    {
      type: "paragraph",
      text: "Adipotide (FTPP) is provided exclusively for in vitro and preclinical in vivo research. It has not received regulatory approval for human use in any jurisdiction. Given its demonstrated renal toxicity profile and its mechanism of inducing targeted vascular apoptosis, it is not appropriate for administration to humans outside of formal regulated clinical trial settings. All research use should comply with applicable institutional animal care and use committee (IACUC) protocols and relevant regulatory frameworks.",
    },
  ],
};
