import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "cotadutide-glp1-gcg-dual-agonist-mash-nash-research-guide-2026",
  title: "Cotadutide: GLP-1/Glucagon Dual Agonist for MASH Research (2026)",
  description:
    "A research-focused review of cotadutide (MEDI0382), AstraZeneca's GLP-1/glucagon receptor dual agonist studied for MASH and metabolic disease, including mechanism of action, Phase 2 liver data, and discontinuation learnings.",
  category: "Compound Profiles",
  readMinutes: 9,
  publishedAt: "2026-06-10",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Cotadutide (MEDI0382) is a dual GLP-1/glucagon receptor agonist developed by AstraZeneca. Though AstraZeneca ultimately deprioritized cotadutide's MASH development program in 2023 in favor of pemvidutide (acquired via the Altimmune licensing deal), cotadutide generated some of the most detailed Phase 2 mechanistic data on GLP-1/GCGR co-agonism in liver disease available in the scientific literature — making it a valuable reference compound for researchers studying this receptor combination.",
    },
    {
      type: "paragraph",
      text: "This article reviews cotadutide's pharmacology, the key Phase 2 MASH and metabolic data, what was learned from the program, and why the compound remains relevant as a mechanistic reference for dual agonist research in 2026.",
    },
    {
      type: "heading",
      text: "Background: Why GLP-1/GCGR Dual Agonism for MASH?",
    },
    {
      type: "paragraph",
      text: "MASH (Metabolic dysfunction-Associated SteatoHepatitis, formerly NASH) is characterized by hepatic steatosis, lobular inflammation, and hepatocyte injury — often progressing to fibrosis and cirrhosis in the absence of effective intervention. The pathophysiology involves dysregulated hepatic lipid uptake and synthesis, mitochondrial dysfunction, insulin resistance, and inflammatory signaling from visceral adipose tissue.",
    },
    {
      type: "paragraph",
      text: "The glucagon receptor is highly expressed in hepatocytes and plays a central role in regulating hepatic lipid metabolism. GCGR activation drives fatty acid oxidation in the liver, reduces de novo lipogenesis, and promotes hepatic fat clearance. The combination of GLP-1R (addressing upstream insulin resistance, visceral fat, and systemic inflammation) with GCGR (addressing hepatic-specific lipid regulation) represents a mechanistically rational pairing for MASH.",
    },
    {
      type: "heading",
      text: "Cotadutide Pharmacology",
    },
    {
      type: "subheading",
      text: "Receptor Profile",
    },
    {
      type: "paragraph",
      text: "Cotadutide is a synthetic peptide with high-affinity agonism at both GLP-1R (EC50 ~0.4 nM) and GCGR (EC50 ~1.2 nM). The slight GLP-1R preference in binding affinity distinguishes it from pemvidutide's more balanced 1:1 ratio, and has implications for the relative magnitude of insulin-sensitizing vs. lipolytic/thermogenic effects. It is administered via once-daily or once-weekly subcutaneous injection depending on the formulation used in each trial.",
    },
    {
      type: "subheading",
      text: "Half-life and Pharmacokinetics",
    },
    {
      type: "paragraph",
      text: "Cotadutide achieves a half-life of approximately 70–80 hours through a C18 fatty acid conjugation that promotes albumin binding — the same engineering principle used by semaglutide. This enabled the once-weekly dosing regimen used in later Phase 2 studies. Peak plasma concentrations are achieved at 12–24 hours post-injection, with steady-state reached within 3–4 weeks of weekly dosing.",
    },
    {
      type: "heading",
      text: "Phase 2 MASH Data: Liver-Specific Endpoints",
    },
    {
      type: "paragraph",
      text: "The most scientifically significant cotadutide dataset is from a Phase 2 study in participants with MASH and type 2 diabetes, which measured liver fat via MRI-PDFF (proton density fat fraction) as a primary endpoint. At 26 weeks, cotadutide produced a placebo-adjusted reduction in hepatic fat fraction of approximately 47% — a substantial signal that exceeded what had been observed with GLP-1 monotherapy in comparable studies.",
    },
    {
      type: "subheading",
      text: "Liver Enzymes and Fibrosis Markers",
    },
    {
      type: "paragraph",
      text: "ALT and AST reductions were observed, consistent with reduced hepatocellular injury. Fibrosis biomarkers including ELF score (Enhanced Liver Fibrosis) showed improvement trends, though the study was not powered for histological endpoints (biopsy-confirmed MASH resolution or fibrosis improvement). The fibrosis signal was directionally positive but would require a larger, longer study with histological endpoints to confirm clinical relevance.",
    },
    {
      type: "subheading",
      text: "Body Weight and Metabolic Endpoints",
    },
    {
      type: "paragraph",
      text: "Weight loss in the Phase 2 MASH study was approximately 5.5% placebo-adjusted at 26 weeks — meaningful but modest compared to longer-term GLP-1 programs, which reflects the 26-week timepoint and the lower starting doses required in this patient population. Body composition data was not published in detail from this study.",
    },
    {
      type: "heading",
      text: "What Cotadutide Data Taught the Field",
    },
    {
      type: "list",
      items: [
        "Validated GLP-1/GCGR co-agonism as mechanistically active against hepatic steatosis beyond what GLP-1 alone achieves in early Phase 2 settings.",
        "Confirmed that glucagon co-activation at a GLP-1R-favoring ratio (1:3 GCGR:GLP-1R) does not cause clinically significant hyperglycemia in T2D participants on background oral antidiabetics.",
        "Documented that hepatic fat reduction can be measured reliably by MRI-PDFF as a Phase 2 endpoint — supporting the use of non-invasive imaging as a surrogate before committing to biopsy-endpoint Phase 3 trials.",
        "GI tolerability (nausea, diarrhea) rates were consistent with GLP-1 class, with no unexpected glucagon-specific adverse effects observed.",
        "Provided the mechanistic and regulatory blueprint that likely informed AstraZeneca's decision to pivot to pemvidutide (more balanced GCGR co-agonism) for its next-generation MASH program.",
      ],
    },
    {
      type: "heading",
      text: "Why AstraZeneca Pivoted from Cotadutide to Pemvidutide",
    },
    {
      type: "paragraph",
      text: "AstraZeneca discontinued cotadutide's MASH advancement in favor of pemvidutide based on several strategic considerations: pemvidutide's more balanced 1:1 GLP-1:GCGR ratio potentially produces stronger lipolytic and thermogenic effects, its Phase 2 obesity data (from Altimmune) showed greater weight loss and lean mass preservation, and the global licensing rights provided AstraZeneca with a cleaner regulatory and commercial path. Cotadutide is no longer in active development.",
    },
    {
      type: "callout",
      text: "Research Note: Cotadutide's discontinuation does not invalidate its Phase 2 data. The mechanistic learnings from MEDI0382 inform how researchers design GLP-1/GCGR studies and interpret results from successor compounds including pemvidutide, survodutide, and efinopegdutide.",
    },
    {
      type: "heading",
      text: "Comparison: Cotadutide vs. Other GLP-1/GCGR Dual Agonists",
    },
    {
      type: "table",
      headers: ["Compound", "GLP-1:GCGR Ratio (approx.)", "Primary Indication", "Status (2026)"],
      rows: [
        ["Cotadutide (MEDI0382)", "~3:1 (GLP-1 favored)", "MASH, T2D", "Discontinued by AstraZeneca"],
        ["Pemvidutide (AZD9550)", "~1:1 (balanced)", "Obesity, MASH", "Phase 3 planning (AstraZeneca)"],
        ["Survodutide (BI 456906)", "~1:1 (balanced)", "Obesity, MASH", "Phase 3 (Boehringer Ingelheim)"],
        ["Efinopegdutide", "~1:1", "MASH, Obesity", "Phase 2 (Hanmi/MSD)"],
        ["Mazdutide", "Balanced", "T2D, Obesity", "Phase 3 (China, Innovent)"],
      ],
    },
    {
      type: "heading",
      text: "Relevance to Current Researchers",
    },
    {
      type: "paragraph",
      text: "Despite its discontinued status, cotadutide remains scientifically relevant for several reasons. First, its Phase 2 liver data constitutes some of the most detailed published imaging-endpoint evidence for GLP-1/GCGR co-agonism in MASH — data that peer reviewers and grant committees will reference when evaluating proposals in this area. Second, its pharmacokinetic parameters and receptor binding profile are well-characterized in the literature, making it a useful reference compound for in vitro or in silico comparative studies. Third, the mechanistic lessons from cotadutide's program have directly shaped the next generation of dual agonist design.",
    },
    {
      type: "paragraph",
      text: "Researchers studying hepatic peptide signaling, GLP-1/GCGR receptor pharmacology, or MASH drug development timelines will find cotadutide's published dataset informative for understanding how the field arrived at its current understanding of dual agonist mechanisms and limitations.",
    },
    {
      type: "disclaimer",
      text: "Cotadutide is not approved for any indication and is not in active clinical development as of 2026. This article is for informational and research purposes only. It is not medical advice.",
    },
  ],
};
