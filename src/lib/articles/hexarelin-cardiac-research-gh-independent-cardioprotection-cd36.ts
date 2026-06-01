import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: 'hexarelin-cardiac-research-gh-independent-cardioprotection-cd36',
  title: 'Hexarelin for Cardiac Research: GH-Independent Cardioprotection via CD36',
  description:
    'A deep-dive into hexarelin\'s dual receptor pharmacology - GHSR-1a for GH secretion and CD36 scavenger receptor for GH-independent cardiac protection. Covers Bodart 1999, Torsello 2003 I/R data, DOX cardiotoxicity model, dissection designs, and preclinical dosing protocols.',
  category: 'GH Axis',
  readMinutes: 10,
  publishedAt: '2026-06-01',
  ogImage: '/og/products/cjc-1295-ipamorelin.png',
  body: [
    {
      type: 'paragraph',
      text: 'Hexarelin (His-D-2-methylTrp-Ala-Trp-D-Phe-Lys-NH2) is the most potent synthetic growth hormone-releasing peptide (GHRP) in current use, yet its most scientifically distinctive property has nothing to do with GH secretion. In 1999, Bodart and colleagues demonstrated that hexarelin protects the heart through a receptor entirely separate from GHSR-1a - the CD36 scavenger receptor. This discovery opened an entirely new chapter in cardiac peptide research and established hexarelin as a uniquely valuable tool for dissecting GH-dependent from GH-independent cardioprotective mechanisms.',
    },
    {
      type: 'heading',
      text: 'GHSR-1a: The GH Secretion Arm',
    },
    {
      type: 'paragraph',
      text: 'Like all synthetic GHRPs, hexarelin binds GHSR-1a with high affinity (Ki 0.3-0.5 nM - the highest among GHRPs, surpassing GHRP-2 at 0.8-1.2 nM and ipamorelin at 4-8 nM). GHSR-1a coupling to Gαq/PLC/IP3/Ca2+ triggers pituitary somatotroph GH release. In rodent studies, hexarelin produces GH peaks of 80-120 ng/mL at 80 mcg/kg IV, compared with 50-70 ng/mL for GHRP-2 and 30-50 ng/mL for ipamorelin at similar doses. This potency makes hexarelin the benchmark for maximal GHSR-1a stimulation.',
    },
    {
      type: 'paragraph',
      text: 'The trade-off: hexarelin co-activates CRH/AVP in the PVN, producing cortisol and ACTH elevations (2-3x basal) comparable to GHRP-2. It also exhibits the most severe tachyphylaxis profile of any GHRP -- 75-80% GH attenuation by 4 weeks of twice-daily dosing, driven by high-affinity Rab7 lysosomal receptor degradation rather than Rab11 recycling. For long-term GH research, ipamorelin or CJC-1295 are preferable. Hexarelin value lies in acute or intermittent cardiac protocols where its CD36 activity provides the mechanistic edge.',
    },
    {
      type: 'heading',
      text: 'CD36: The GH-Independent Cardiac Receptor',
    },
    {
      type: 'paragraph',
      text: 'The Bodart 1999 Circulation Research paper was a landmark: GH-deficient hypophysectomized (Hypox) rats, which cannot produce GH in response to any GHRP, showed robust cardiac protection from hexarelin administration. GHRP-2 and ipamorelin, equipotent GHSR-1a agonists, produced no cardiac protection in Hypox animals. The implication was clear - hexarelin was engaging a second receptor responsible for its cardiac effects.',
    },
    {
      type: 'paragraph',
      text: 'That receptor was identified as CD36, a class B scavenger receptor expressed on cardiac myocytes, endothelium, macrophages, and platelets. CD36 is best known for its role in fatty acid uptake and oxidized LDL recognition, but hexarelin exploits a distinct domain to trigger cardioprotective signaling. The hexarelin-CD36 interaction activates PI3K/Akt pro-survival signaling and downstream mitochondrial KATP (mKATP) channel opening - a well-established preconditioning mechanism. mKATP opening stabilizes the inner mitochondrial membrane potential during ischemia, reduces cytochrome c release, and limits mPTP opening during reperfusion.',
    },
    {
      type: 'heading',
      text: 'Published Cardiac Data',
    },
    {
      type: 'paragraph',
      text: 'Torsello and colleagues (2003) provided the most cited in vivo evidence. In a LAD ligation ischemia-reperfusion model (45 min ischemia, 24h reperfusion), hexarelin at 80 mcg/kg IV administered 30 minutes before ischemia reduced infarct size by 35-45% (measured by TTC staining as % of area at risk). Left ventricular ejection fraction was preserved at 52±4% vs 38±5% in vehicle controls. Critically, this protection was replicated in Hypox rats (confirming GH independence) and abolished by the mKATP blocker glibenclamide - confirming the PI3K/Akt/mKATP axis.',
    },
    {
      type: 'paragraph',
      text: 'Bresciani et al. (2008) extended the cardioprotective profile to doxorubicin (DOX) cardiotoxicity - a distinct ischemia-independent model. Cumulative DOX dosing (15 mg/kg total, 5 mg/kg × 3 doses) in rats produces a dilated cardiomyopathy phenotype with mitochondrial dysfunction, ROS overproduction, and myofibrillar loss. Pre-treatment with hexarelin (80 mcg/kg SC, twice weekly, started 1 week before DOX) preserved cardiac troponin I levels, reduced 4-HNE lipid peroxidation staining, and maintained ejection fraction by echocardiography. The CD36/PI3K/Bcl-2 axis was implicated via FACS-measured apoptotic index reduction.',
    },
    {
      type: 'heading',
      text: 'Comparison With Other GHRPs: The Unique CD36 Property',
    },
    {
      type: 'table',
      headers: ['Parameter', 'Hexarelin', 'GHRP-2', 'GHRP-6', 'Ipamorelin'],
      rows: [
        ['GHSR-1a Ki (nM)', '0.3-0.5', '0.8-1.2', '2.0-3.5', '4-8'],
        ['GH Peak (ng/mL, 80 mcg/kg IV)', '80-120', '50-70', '40-60', '30-50'],
        ['Cortisol/ACTH activation', 'Yes (2-3×)', 'Yes (1.5-2×)', 'Yes (1.5-2×)', 'No'],
        ['CD36 cardiac activity', 'Yes (documented)', 'No', 'No', 'No'],
        ['Tachyphylaxis (4 weeks)', '75-80%', '40-55%', '40-55%', '20-30%'],
        ['Hunger stimulation (NPY/AgRP)', 'Moderate', 'Moderate', 'High', 'Minimal'],
        ['Best use case', 'Acute cardiac, CD36 research', 'GH peak studies', 'GH+appetite', 'Chronic GH, body comp'],
      ],
    },
    {
      type: 'heading',
      text: 'Mechanistic Dissection Study Design',
    },
    {
      type: 'paragraph',
      text: 'The most rigorous hexarelin cardiac studies require a dissection design that separates GHSR-1a from CD36 contributions. The gold-standard approach uses three tools in parallel:',
    },
    {
      type: 'list',
      items: [
        'Hypophysectomized (Hypox) rats: Surgical removal of the pituitary eliminates GH-dependent responses while preserving cardiac CD36 expression. If cardioprotection persists in Hypox animals, it is GH-independent by definition.',
        'D-[Lys3]-GHRP-6 (GHSR-1a antagonist, 3-10 mg/kg IP): Blocks GHSR-1a without affecting CD36 binding. Administration before hexarelin removes the GH secretion arm while preserving CD36 activity.',
        'JC63.1 anti-CD36 monoclonal antibody or CD36 knockout mice (B6.129S1-Cd36tm1Mfe/J, JAX #005531): Blocks CD36 binding. If cardioprotection is abolished in CD36-KO but not in Hypox animals, the mechanism is confirmed as CD36-mediated.',
      ],
    },
    {
      type: 'paragraph',
      text: 'A comprehensive 5-group design for LAD ligation I/R studies therefore includes: (1) Sham surgery vehicle, (2) I/R + vehicle, (3) I/R + hexarelin, (4) I/R + hexarelin + D-[Lys3]-GHRP-6, (5) I/R + hexarelin in Hypox or CD36-KO animals. Groups 4 and 5 distinguish GHSR-1a from CD36 contributions with appropriate power (n=10-12/group, CV 25-30% for infarct size).',
    },
    {
      type: 'heading',
      text: 'Preclinical Dosing Protocols',
    },
    {
      type: 'table',
      headers: ['Model', 'Species', 'Dose', 'Route', 'Frequency/Timing', 'Primary Endpoint', 'Reference'],
      rows: [
        ['LAD I/R preconditioning', 'Rat SD', '80 mcg/kg', 'IV bolus', '30 min pre-ischemia', 'TTC infarct size', 'Torsello 2003'],
        ['LAD I/R chronic', 'Rat SD', '80-160 mcg/kg', 'SC', '2×/day × 7d pre + 7d post', 'Echo EF%, scar area', 'Adapted from Torsello'],
        ['DOX cardiotoxicity', 'Rat SD', '80 mcg/kg', 'SC', '2×/week × 8 weeks (start 1w pre-DOX)', 'cTnI, EF%, apoptosis', 'Bresciani 2008'],
        ['CD36 validation (Hypox)', 'Rat SD Hypox', '80 mcg/kg', 'IV', '30 min pre-ischemia', 'TTC, mKATP block', 'Bodart 1999'],
        ['In vitro cardiomyocyte H2O2', 'NRC/H9c2', '10-1,000 nM', 'Media', 'Pre-treatment 30 min', 'Caspase-3, JC-1, MitoSOX', 'Derived from literature'],
        ['Mouse acute I/R', 'C57BL/6J', '3-6 mg/kg', 'IP', '30 min pre-ischemia', 'TTC, Echo, cTnT', 'Adapted'],
      ],
    },
    {
      type: 'paragraph',
      text: 'Note: Rodent I/R protocols involve 30-45 min LAD ligation followed by 24h or 7-day reperfusion. For DOX models, hexarelin is typically started 1 week before the first DOX dose and continued throughout. The critical timing variable for preconditioning is the 30-minute pre-ischemia window - delayed administration (post-ischemia, pre-reperfusion) also shows partial protection but with smaller effect sizes.',
    },
    {
      type: 'heading',
      text: 'Key Endpoint Selection for Cardiac Studies',
    },
    {
      type: 'list',
      items: [
        'Infarct size: TTC staining (2,3,5-triphenyltetrazolium chloride) at 24h; report as % of area at risk (AAR). AAR measured by Evans Blue dye re-ligation. Blind to treatment group for all measurements.',
        'Cardiac function: Echocardiography (fractional shortening, EF%) before, 24h post-I/R, and 7-28 days post-I/R. Use trained operator blinded to groups. LVID,d and LVID,s measurements × 3 cardiac cycles, averaged.',
        'Biomarkers: Serum cardiac troponin I or T (ELISA, 2h post-reperfusion peak), CK-MB, BNP at 24h and 7d post-I/R.',
        'Mitochondrial: Calcium retention capacity (CRC) assay for mPTP threshold - calcium pulsing protocol in isolated mitochondria; 5 μM CsA positive control. Seahorse OCR/SRC in primary adult cardiomyocytes.',
        'PI3K/Akt signaling: pAkt Ser-473 (Western blot, 30 min post-treatment), pGSK-3β Ser-9, Bcl-2/Bax ratio (48h post-I/R).',
        'Apoptosis: TUNEL staining (% TUNEL+/total cardiomyocytes in border zone), cleaved caspase-3 IHC, cytochrome c cytosolic release.',
        'Histology (7-28d): Masson\'s trichrome scar area as % LV cross-sectional area; CD31+ capillary density in border zone.',
        'Oxidative stress (DOX model): 4-HNE immunostaining, MitoSOX flow cytometry in isolated cardiomyocytes, 8-OHdG IHC.',
      ],
    },
    {
      type: 'heading',
      text: 'Tachyphylaxis: The Limitation for Chronic Studies',
    },
    {
      type: 'paragraph',
      text: 'The most significant constraint on hexarelin cardiac research is rapid GHSR-1a tachyphylaxis. At 75-80% GH attenuation by 4 weeks, sustained GH secretagogue effects are not achievable with hexarelin in chronic studies. However, CD36-mediated cardiac protection may be less susceptible to tachyphylaxis because CD36 does not undergo the same GRK-mediated desensitization as GHSR-1a. This hypothesis has not been rigorously tested and represents an open research question.',
    },
    {
      type: 'paragraph',
      text: 'For chronic cardiac models (heart failure, cardiac remodeling, DOX cardiomyopathy), researchers have two options: (1) Use acute hexarelin for CD36 preconditioning studies where the 30-minute pre-treatment window makes tachyphylaxis irrelevant, or (2) Use intermittent dosing schedules (e.g., 3 days on / 4 days off) to partially preserve GHSR-1a sensitivity while still delivering CD36 activation. For studies primarily targeting GH axis effects over 4+ weeks, ipamorelin or CJC-1295 are more appropriate choices.',
    },
    {
      type: 'heading',
      text: 'Reconstitution and Storage',
    },
    {
      type: 'paragraph',
      text: 'Hexarelin is supplied as a lyophilized acetate salt. Reconstitute with bacteriostatic water (BAC water, 0.9% benzyl alcohol) to a stock concentration of 1-5 mg/mL. Swirl gently - do not vortex. Store lyophilized vials at -20°C, protected from light; stable for 24+ months. Reconstituted solution: store at 4°C, protected from light; use within 14 days. For IV protocols, further dilute to 0.1-0.5 mg/mL in sterile saline immediately before injection. Avoid freeze-thaw cycles of reconstituted solution. Use low-bind polypropylene tubes for dilute preparations (<100 μg/mL) to prevent surface adsorption.',
    },
    {
      type: 'heading',
      text: 'Research Design Considerations',
    },
    {
      type: 'list',
      items: [
        'GH-independent dissection is mandatory for any cardiac claim: Without Hypox animals or CD36-KO/blocking antibody arms, it is not possible to attribute cardiac effects to CD36 vs GH/IGF-1. Include at minimum one GH-dissection control group.',
        'Tachyphylaxis monitoring: For any study >2 weeks, measure baseline GH pulse or IGF-1 at weeks 0, 2, and 4 to document receptor desensitization trajectory. This contextualizes interpretation of any GH-axis endpoints.',
        'GHSR-1a antagonist timing: D-[Lys3]-GHRP-6 must be administered 5-10 minutes before hexarelin to achieve adequate receptor blockade. Pre-injection of the antagonist at the same time as hexarelin produces incomplete blockade.',
        'Model selection: Langendorff ex vivo perfusion is valuable for clean mechanistic work (no neuroendocrine confounds, controlled perfusion pressure, easy pharmacological access) but lacks the coronary physiology of in vivo LAD ligation. Use Langendorff for mechanistic proof-of-concept, then in vivo LAD for translational relevance.',
        'Sex differences: CD36 expression on cardiomyocytes is higher in males (testosterone upregulation) than females (estrogen downregulation). Estrogen-replete females may show attenuated hexarelin CD36 responses. Sex-stratify or use OVX/castrated animals for rigorous sex comparison.',
        'DOX timing: In DOX cardiotoxicity protocols, the question of prevention vs treatment matters. Hexarelin pretreatment (starting before DOX) tests cardioprotective preconditioning. Post-DOX administration tests repair/recovery, which relies more on sustained mitochondrial protection and may be more susceptible to tachyphylaxis-related attenuation.',
      ],
    },
    {
      type: 'paragraph',
      text: 'Hexarelin occupies a unique niche in cardiac peptide research: it is the only GHRP with documented GH-independent cardioprotection, making it an irreplaceable pharmacological tool for mechanistic dissection studies. Its acute use in I/R preconditioning protocols and DOX cardiotoxicity models provides clean, reproducible data with well-characterized endpoints. Researchers who need to understand which cardiac benefits of GH secretagogues arise from GH/IGF-1 versus direct receptor engagement will find hexarelin - alongside appropriate CD36-blocking controls - indispensable for their experimental toolkit.',
    },
    {
      type: 'disclaimer',
      text: 'For Research Use Only. Not for human consumption. All data cited refers to published preclinical or clinical research. Nexphoria compounds are intended solely for laboratory research purposes.',
    },
  ],
};
