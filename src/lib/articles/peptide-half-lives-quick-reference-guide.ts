import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: "peptide-half-lives-quick-reference-guide",
  title: "Peptide Half-Lives at a Glance: Quick Reference for Researchers",
  description:
    "A comprehensive quick-reference table of half-lives, Tmax values, and recommended dosing frequencies for 35 research peptides — with editorial context on which factors drive inter-compound variability and links to the full half-life calculator.",
  category: "Handling & Storage",
  readMinutes: 5,
  publishedAt: "2026-05-30",
  ogImage: "/og-image.jpg",
  body: [
    {
      type: "paragraph",
      text: "Half-life is one of the most practically important pharmacokinetic parameters in peptide research design. It determines dosing frequency, the duration of receptor occupancy, the washout window before switching compounds, and how long a residual effect might persist after the last injection. Yet published half-life data is scattered across dozens of primary PK studies, many of which use different routes and species.",
    },
    {
      type: "paragraph",
      text: "This article consolidates half-life data for 35 research compounds into a single quick-reference format. For each compound, we note the half-life range, primary elimination route, recommended minimum dosing interval, and source citation. For detailed decay curves, dose-stacking calculations, and residual concentration modeling, use the interactive /tools/half-life-calculator.",
    },
    {
      type: "callout",
      text: "Half-life interpretation note: The values below represent published elimination half-life (t½) unless noted as effective half-life. SC-administered peptides with depot formation may exhibit apparent half-lives longer than true elimination half-life (flip-flop pharmacokinetics). The 'effective' window of receptor engagement may also differ from t½ if concentrations fall below the EC50 well before full clearance.",
    },
    {
      type: "heading",
      text: "Complete Half-Life Reference Table",
    },
    {
      type: "table",
      headers: ["Compound", "Half-Life", "Tmax (SC)", "Route", "Min Dosing Interval", "Source"],
      rows: [
        ["BPC-157", "~4 h (IV), ~6-8 h (SC estimated)", "30-60 min", "SC / IP", "Once daily", "Sikiric 2018 review; PK inferred from published IP studies"],
        ["TB-500 (Tβ4)", "~30-60 min (IV), ~4 h (SC estimated)", "30-60 min", "SC", "2-3× per week", "Bock-Marquette 2004; half-life inferred from efficacy windows"],
        ["GHK-Cu", "~1.5-2.5 h (estimated)", "~30 min (topical/SC)", "SC / topical", "Once daily to twice daily", "Pickart PK data; Leyden 2004 topical context"],
        ["Semaglutide", "~168 h (~7 days)", "~24 h (SC)", "SC", "Once weekly", "Lau 2015 JMC; Marso 2016 NEJM SUSTAIN-6"],
        ["Tirzepatide", "~120 h (~5 days)", "~24 h (SC)", "SC", "Once weekly", "Thomas 2021 NEJM; SURPASS-1 PK supplement"],
        ["Retatrutide", "~144 h (~6 days)", "~24 h (SC)", "SC", "Once weekly", "Jastreboff 2023 NEJM Phase 2 NEJM supplemental PK"],
        ["Ipamorelin", "~2 h", "~15-30 min (SC)", "SC / IV", "2-3× daily for pulsatile GH protocols", "Johansen 1999 EJENDO; Ankersen 1998 JMED"],
        ["GHRP-2", "~1.5-2.5 h", "~15-30 min", "SC / IV", "2-3× daily", "Arvat 1997 EJENDO; Bowers 1998 ENMD"],
        ["GHRP-6", "~1.5-2 h", "~15 min", "SC / IV / IN", "2-3× daily", "Bowers 1990 JCEM; Pong 1996"],
        ["Hexarelin", "~1-2 h", "~10-20 min", "SC / IV", "2-3× daily (watch desensitization)", "Ghigo 1994 JCEM; Bresciani 2008 EJENDO"],
        ["CJC-1295 No DAC (Mod GRF 1-29)", "~30 min", "~10-20 min", "SC", "3× daily for pulsatile; prior to each GHRP dose", "Walker 2006; Ionescu 2006 EJENDO"],
        ["CJC-1295 with DAC", "~192 h (~8 days)", "~24-48 h", "SC", "Once weekly", "Walker 2006 JCEM; fatty acid-albumin DAC mechanism"],
        ["Sermorelin", "~11-12 min (plasma)", "~5-10 min (peak GH)", "SC", "Daily or 2-3× daily", "Thorner 1997 JCEM; 26aa GHRH PK"],
        ["Tesamorelin", "~26-30 min", "~15-30 min (SC)", "SC", "Once daily", "Falutz 2010 NEJM supplemental; DPP-4-resistant 44aa analog PK"],
        ["MK-677 (Ibutamoren)", "~24 h", "~2-3 h (oral)", "Oral", "Once daily", "Nass 2008 Ann Intern Med; Chapman 1996 JCEM oral PK"],
        ["NAD+", "~1.5-2 h (IV/IP, intact NAD+)", "N/A (IV bolus)", "IV / IP", "Once daily (acute); every 1-3 days (chronic)", "Pencina 2023 Nature Aging; plasma clearance data"],
        ["Epitalon", "Short (~30-60 min, tetrapeptide)", "~20-40 min (SC)", "SC", "Daily 10-day courses (pulsatile), not chronic", "Khavinson 2003; Goncharova 2010 lifespan data"],
        ["SS-31 (Elamipretide)", "~2-4 h", "~30-60 min (SC)", "SC / IV", "Once to twice daily", "Szeto 2014 JASN; Siegel 2013 Aging Cell"],
        ["PT-141 (Bremelanotide)", "~2.7 h", "~60-75 min (SC)", "SC / IN", "As-needed (not daily)", "Diamond 2004 JANDPS; Kingsberg 2019 OBSTET GYNECOL RECONNECT"],
        ["Selank", "Short (~1-2 h, IN route); ~2-4 h (IP/SC)", "~5-15 min (IN)", "IN / SC / IP", "1-3× daily", "Kozlovskaya 2002; Semenova 2010 BEXBIO"],
        ["Semax", "Short (~15-30 min peptide backbone); BDNF effects persist ~24-48 h", "~5-10 min (IN)", "IN / SC", "1-2× daily", "Dolotov 2006 JNEU; Agapova 2007 NEUROSCI"],
        ["DSIP", "~30-45 min (plasma)", "~15-30 min (IV)", "IV / IP", "Evening (once daily or 3-5×/week)", "Monnier 1977; Graf 1981 plasma stability data"],
        ["Oxytocin", "~1-6 min (IV, plasma); ~5-25 min (IN, CNS)", "~2-5 min (IN olfactory peak)", "IN / IP / IV / SC", "As-needed; once daily for chronic behavioral studies", "Neumann 2002; Kovacs 2003 INS delivery PK"],
        ["Kisspeptin-10 (KP-10)", "~4-9 min (plasma, IV)", "~5-10 min (IV peak LH)", "IV bolus / SC (depot unreliable)", "Per acute experiment (not chronic SC)", "Dhillo 2005 JCEM; Jayasena 2011 CLIN END"],
        ["Kisspeptin-54 (KP-54)", "~27-30 min", "~30-60 min (SC depot)", "SC / IV infusion", "SC: twice daily; IV: continuous infusion", "Dhillo 2005; Jayasena 2014 PLOS ONE"],
        ["KPV", "~15-30 min (tripeptide, plasma)", "~10-20 min (IP)", "IP / SC / oral (stable)", "Once to twice daily (IP/SC); oral dose higher", "Mandal 2009; Dalmasso 2008 GUT model"],
        ["GLP-1 (native)", "~1.5-2 min (DPP-4 cleavage)", "N/A (endogenous)", "IV research use only", "IV infusion (not practical for research dosing)", "Deacon 1995 DIABETOL; Gutniak 1992"],
        ["Thymosin Alpha-1 (Tα1)", "~2 h (SC/IP)", "~30-60 min (SC)", "SC / IP", "Once to twice daily; or 3× weekly", "Falchetti 1998 IJIMM; Goldstein 1987"],
        ["LL-37", "~30-90 min (plasma; aggregation-dependent)", "~20-40 min (IP/SC)", "IP / SC / topical", "Once to twice daily", "Ciornei 2005; Durr 2006 BBAMEM stability data"],
        ["MOTS-c", "~30-60 min (IP estimated)", "~15-30 min (IP)", "IP / SC", "Daily or every other day", "Lee 2015 Cell Metab; Young 2021 Nature Aging"],
        ["AOD-9604", "~20-30 min (SC estimated)", "~15-25 min (SC)", "SC / IP", "Once to twice daily", "Heffernan 1999 JENDO; Burnside 2016"],
        ["Melanotan II (MT-II)", "~1.5-2.5 h (SC)", "~30-60 min (SC)", "SC / IP", "As-needed or every 2-3 days", "Dorr 1998 JACI; Diamond 2004 data"],
        ["Follistatin 344", "~24-48 h (SC estimated)", "~12-24 h (SC)", "SC / IM", "2-3× weekly", "Lee 2004 JCI AAV context; Thomas 2000 JENDO SC data"],
        ["GHK (free, without Cu)", "~10-20 min (plasma)", "~5-15 min (IV)", "Topical / IV research", "N/A — used as control in GHK-Cu studies", "Pickart 2012; serum GHK natural ligand data"],
        ["Snap-8 (Acetyl octapeptide-3)", "~30-60 min (topical depot)", "~1-4 h (topical)", "Topical (cosmetic)", "Once to twice daily topical application", "Argireline mechanism literature; cosmetic PK estimates"],
      ],
    },
    {
      type: "heading",
      text: "Key Takeaways by Compound Category",
    },
    {
      type: "subheading",
      text: "GLP-1 Agonists: Engineered for Long Half-Lives",
    },
    {
      type: "paragraph",
      text: "Semaglutide (~168 h), tirzepatide (~120 h), and retatrutide (~144 h) all feature fatty acid conjugation that enables albumin binding — the primary mechanism extending their half-lives from minutes (native GLP-1: ~1.5 min) to days. In preclinical rodent studies, once-weekly SC dosing is standard. Achieving steady state requires 4-5 half-lives (~4-5 weeks for semaglutide at once-weekly dosing), so endpoint measurements should occur ≥4 weeks into the dosing period for steady-state effects.",
    },
    {
      type: "subheading",
      text: "GH Secretagogues: Short Half-Lives Require Timing Discipline",
    },
    {
      type: "paragraph",
      text: "All injectable GHRPs (ipamorelin, GHRP-2, GHRP-6, hexarelin) have half-lives of 1.5-2.5 hours. GHRH analogs CJC-1295 No DAC and sermorelin have even shorter half-lives (~30 min and ~12 min respectively). These short windows mean pulsatile injection protocols are essential for replicating physiological GH pulsatility. The exception is MK-677 (oral, ~24 h half-life) and CJC-1295 with DAC (~8 days), which maintain sustained GH axis stimulation. CJC-1295 DAC maintains elevated GH/IGF-1 but sacrifices pulsatility — a key experimental design consideration.",
    },
    {
      type: "subheading",
      text: "Repair and Longevity Compounds: Half-Life ≠ Biological Duration",
    },
    {
      type: "paragraph",
      text: "BPC-157, GHK-Cu, and SS-31 all have relatively short plasma half-lives (hours range), but their biological effects on tissue repair, collagen synthesis, and mitochondrial function persist well beyond circulating half-life. This is because they are acting on gene expression cascades (GHK-Cu via Nrf2/TGF-β) or structural targets (SS-31 on cardiolipin) rather than simply occupying a receptor. For these compounds, plasma half-life determines dosing frequency but not washout window — allow 14-21 days for biological reversal in endpoint studies.",
    },
    {
      type: "heading",
      text: "Dosing Frequency Decision Rules",
    },
    {
      type: "list",
      items: [
        "Half-life < 2 hours: Daily or 2-3× daily dosing required to maintain receptor occupancy. Use pulsatile protocols rather than chronic receptor saturation for GH axis peptides.",
        "Half-life 2-12 hours: Once to twice daily dosing typically adequate. Sample endpoints >2 half-lives after last injection if you want trough-state data.",
        "Half-life 12-48 hours: Once daily to every-other-day dosing. Steady state reached in 5-7 days. Plan 5-7 day run-in before endpoint measurements.",
        "Half-life > 5 days: Once weekly dosing. Plan 4-6 week run-in for steady state. GLP-1 agonists are the prime examples.",
        "Washout calculation: Allow 5× half-life for >97% clearance. Allow 7× half-life for >99% clearance. For cross-over study designs or when switching compounds, use the longer estimate.",
      ],
    },
    {
      type: "callout",
      text: "Use the /tools/half-life-calculator to generate visual decay curves, residual concentration estimates at any time point, and washout period calculations for your specific dosing protocol.",
    },
    {
      type: "heading",
      text: "Sources and Limitations",
    },
    {
      type: "paragraph",
      text: "Half-life values in this table are compiled from published PK studies, most of which used IV or SC routes in rats, mice, or humans. Where rodent IV data was unavailable, values were estimated from efficacy windows or cross-species comparison. SC half-lives are often longer than IV due to depot formation and first-order absorption kinetics (flip-flop PK). Species differences exist (rats clear many peptides faster than humans due to higher metabolic rate and plasma peptidase activity). Use these values as starting estimates and verify with your specific model, route, and dose when PK accuracy is critical to study design.",
    },
    {
      type: "disclaimer",
      text: "All research described is preclinical. This content is for informational purposes only. Nexphoria products are sold for research use only (RUO) — not for human administration, clinical use, or veterinary use. Not a substitute for consultation with a qualified biomedical researcher or IACUC oversight.",
    },
  ],
};
