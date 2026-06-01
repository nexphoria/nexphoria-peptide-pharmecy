import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: 'peptide-research-comprehensive-recovery-stack-bpc157-tb500-ghk-cu-ipamorelin-protocol',
  title: 'The Comprehensive Recovery Stack: BPC-157, TB-500, GHK-Cu, and Ipamorelin — A Four-Compound Research Protocol Guide',
  description:
    'A detailed research protocol guide for the four-compound recovery stack: BPC-157 (angiogenesis), TB-500 (actin dynamics/anti-inflammatory), GHK-Cu (ECM remodeling), and Ipamorelin/CJC-1295 (GH axis). Covers mechanistic complementarity, phase-mapped dosing, study design, endpoints, and reconstitution.',
  category: 'Research Fundamentals',
  readMinutes: 13,
  publishedAt: '2026-06-01',
  body: [
    {
      type: 'paragraph',
      text: 'Four compounds — BPC-157, TB-500, GHK-Cu, and Ipamorelin (often combined with CJC-1295 No DAC) — collectively address every phase of the tissue repair cascade and the growth hormone axis that supports systemic recovery. Each compound operates through a distinct primary receptor or mechanism, making the combination additive rather than redundant. This guide provides the mechanistic rationale, phase-mapped dosing, study design framework, endpoint selection, and reconstitution protocols for researchers investigating this four-compound stack in preclinical models of musculoskeletal injury and recovery.',
    },
    {
      type: 'heading',
      text: 'Why These Four Compounds?',
    },
    {
      type: 'paragraph',
      text: 'The tissue repair process proceeds through three overlapping phases: inflammation (days 0–5), proliferation (days 3–21), and remodeling (days 14–60+). No single peptide optimally targets all three phases, which is the core rationale for multi-compound protocol design. BPC-157 drives angiogenesis and accelerates the proliferative phase via NO/eNOS/VEGFR2/FAK signaling. TB-500 (Thymosin Beta-4) suppresses excessive inflammation in the early phase via G-actin sequestration and ILK/Akt/NF-κB modulation. GHK-Cu stimulates ECM remodeling in the later phases through TGF-β1/ALK5/pSMAD2-3 collagen synthesis and copper-dependent LOX crosslinking. Ipamorelin + CJC-1295 No DAC activates the GH/IGF-1 axis through a complementary orthogonal mechanism (Gαs/cAMP/PKA + Gαq/IP3/Ca²⁺), providing systemic anabolic support for tissue regeneration without cortisol or ACTH activation.',
    },
    {
      type: 'heading',
      text: 'Mechanistic Breakdown Per Compound',
    },
    {
      type: 'subheading',
      text: 'BPC-157: Angiogenesis and Perfusion',
    },
    {
      type: 'paragraph',
      text: 'BPC-157 (Body Protection Compound-157) is a pentadecapeptide derived from a protective gastric protein. Its primary angiogenic effect is mediated through three parallel signaling axes: (1) VEGFR2 phosphorylation (pTyr1175 and pTyr1214), which activates PLCγ/PKC/MAPK endothelial proliferation and FAK/paxillin migration; (2) eNOS upregulation and NO/cGMP vasodilation, confirmed by partial L-NAME attenuation; and (3) EGR-1 transcriptional activation, which coordinates both VEGF and eNOS gene expression as a shared upstream regulator. BPC-157 is also systemically active when administered intraperitoneally, with IP-to-oral dose equivalence confirmed in multiple models — a unique pharmacological property likely attributable to its poly-Pro sequence providing resistance to intestinal peptidases.',
    },
    {
      type: 'subheading',
      text: 'TB-500: Anti-Inflammatory Phase and Cell Migration',
    },
    {
      type: 'paragraph',
      text: 'TB-500 is a synthetic analog of Thymosin Beta-4 (Tβ4), a 43-amino acid protein with the active LKKETQ actin-binding sequence. It sequesters monomeric G-actin by binding subdomain 1 of actin, shifting the polymerization equilibrium and restoring the G-actin pool available for cell migration. Downstream ILK (Integrin-Linked Kinase) activation by TB-500 drives Akt/mTOR pro-survival signaling and dual NF-κB modulation: pro-survival at Ser276-p65 and anti-inflammatory at Ser536-p65. This dual NF-κB regulation resolves the acute inflammatory phase without completely abrogating the survival signals that initiate repair. Bock-Marquette 2004 (Nature) demonstrated that Tβ4 activates ILK in cardiac fibroblasts and cardiomyocytes following injury, protecting against ischemia-reperfusion damage — the foundational mechanistic study for TB-500 cardiac and musculoskeletal research.',
    },
    {
      type: 'subheading',
      text: 'GHK-Cu: ECM Remodeling and Collagen Crosslinking',
    },
    {
      type: 'paragraph',
      text: 'GHK-Cu (Glycyl-L-Histidyl-L-Lysine copper complex) promotes extracellular matrix remodeling through two copper-dependent mechanisms. First, it activates TGF-β1/ALK5/pSMAD2-3 signaling, driving COL1A1 and COL3A1 collagen synthesis while simultaneously upregulating MMP-1 and MMP-2 for controlled matrix remodeling — the balance critical for functional tissue repair rather than fibrotic scar formation. Second, GHK-Cu delivers copper directly to lysyl oxidase (LOX), the copper-dependent enzyme responsible for collagen and elastin crosslink formation. LOX upregulation by GHK-Cu has been confirmed at the mRNA level, providing the structural integrity for healed tissue. Additionally, GHK-Cu activates Nrf2/Keap1/ARE antioxidant signaling, reducing oxidative burden in the healing tissue — an effect relevant to the late remodeling phase when ROS-mediated matrix degradation can compromise repair quality.',
    },
    {
      type: 'subheading',
      text: 'Ipamorelin + CJC-1295 No DAC: GH Axis Anabolic Support',
    },
    {
      type: 'paragraph',
      text: 'Ipamorelin is a highly selective GHSR-1a agonist (Ki 4–8 nM) that releases GH without activating the HPA axis — no cortisol, ACTH, or prolactin elevation (Johansen 1999, Arvat 1997). CJC-1295 No DAC (Modified GRF 1–29) is a GHRHr agonist with four-point stabilization substitutions (D-Ala², Ala⁸, Gln¹⁵, Glu²⁷) and a 25–30 minute half-life. When co-administered, ipamorelin (Gαq/IP3/Ca²⁺) and CJC-1295 No DAC (Gαs/cAMP/PKA) activate orthogonal signaling pathways that converge on somatotroph GH secretion with 8–12× supraadditive amplification (Bowers 1998). The resulting IGF-1 elevation (60–85% above baseline at 6–12 weeks) promotes satellite cell activation, myofibrillar protein synthesis, and collagen production systemically — providing anabolic support that accelerates the proliferative and remodeling repair phases.',
    },
    {
      type: 'heading',
      text: 'Phase-Mapped Mechanism Coverage',
    },
    {
      type: 'table',
      headers: ['Repair Phase', 'Duration', 'Primary Compound', 'Mechanism', 'Supporting Compound'],
      rows: [
        ['Inflammatory', 'Days 0–5', 'TB-500', 'G-actin/ILK/Akt/NF-κB anti-inflammatory', 'BPC-157 (eNOS/VEGF perfusion)'],
        ['Proliferative', 'Days 3–21', 'BPC-157', 'VEGFR2/FAK/eNOS angiogenesis', 'Ipamorelin+CJC (IGF-1 satellite cells)'],
        ['Remodeling', 'Days 14–60+', 'GHK-Cu', 'TGF-β1/LOX collagen crosslinking', 'BPC-157 (continued perfusion)'],
        ['Systemic (all phases)', 'Weeks 1–12+', 'Ipamorelin+CJC-1295', 'GH/IGF-1 anabolic axis', 'All local repair compounds'],
      ],
    },
    {
      type: 'heading',
      text: 'Preclinical Dosing Reference Table',
    },
    {
      type: 'table',
      headers: ['Compound', 'Mouse Dose', 'Rat Dose', 'Route', 'Frequency', 'Timing', 'Key Reference'],
      rows: [
        ['BPC-157', '10 μg/kg', '10 μg/kg', 'IP or oral', 'Daily', 'Start at injury', 'Šikiriḉ 2018, multiple models'],
        ['TB-500', '150–300 μg/kg', '150–600 μg/kg', 'SC (dorsal scruff)', '2–3×/week', 'Start at injury', 'Bock-Marquette 2004, Ehrlich 2010'],
        ['GHK-Cu', '1–5 mg/kg', '1–5 mg/kg', 'SC (separate site)', 'Daily', 'Start week 1–2', 'Pickart 2003, Leyden 2004'],
        ['Ipamorelin', '100–300 μg/kg', '100–200 μg/kg', 'SC (separate site)', 'Daily or 2–3×/day', 'Pre-sleep or 3×/day', 'Johansen 1999'],
        ['CJC-1295 No DAC', '100–200 μg/kg', '100 μg/kg', 'SC (co-inject with ipamorelin)', 'Same as ipamorelin', 'Co-inject with ipamorelin', 'Bowers 1998 (synergy data)'],
      ],
    },
    {
      type: 'callout',
      text: 'Important: BPC-157 and GHK-Cu should be injected at different sites to avoid any potential interaction between the eNOS/VEGFR2 pathway (BPC-157) and the copper complex (GHK-Cu). Ipamorelin and CJC-1295 No DAC should be co-injected simultaneously for maximum Gαs/Gαq synergy. TB-500 can share a site with BPC-157 if volume allows but separate scruff SC for TB-500 is preferred.',
    },
    {
      type: 'heading',
      text: 'Study Design Framework',
    },
    {
      type: 'paragraph',
      text: 'A rigorous four-compound recovery stack study requires a minimum of seven experimental groups to distinguish individual vs. synergistic contributions and to include mechanistic controls:',
    },
    {
      type: 'table',
      headers: ['Group', 'Treatment', 'n (mouse)', 'Purpose'],
      rows: [
        ['1', 'Sham + vehicle', '8', 'Uninjured control'],
        ['2', 'Injury + vehicle', '10', 'Untreated injured control'],
        ['3', 'Injury + BPC-157', '10', 'Angiogenic compound alone'],
        ['4', 'Injury + TB-500', '10', 'Anti-inflammatory compound alone'],
        ['5', 'Injury + GHK-Cu', '10', 'ECM remodeling alone'],
        ['6', 'Injury + Ipamorelin+CJC', '10', 'GH axis alone'],
        ['7', 'Injury + Full Stack', '10', 'Four-compound combination'],
        ['8 (optional)', 'Injury + Full Stack + L-NAME', '8', 'NO pathway dissection for BPC-157 contribution'],
      ],
    },
    {
      type: 'paragraph',
      text: 'Power calculation: assuming 30% inter-animal CV% for functional endpoints (grip strength, rotarod), an expected 35% improvement in the combination group vs. vehicle, α = 0.05, and 80% power, n = 9–10 per group is required. With CV% of 20% (more achievable in controlled histological endpoints), n = 7–8 is adequate. Total animal count: ~80 mice (or ~80 rats) for the 7-group design. Add group 8 if eNOS mechanistic dissection is a co-primary endpoint.',
    },
    {
      type: 'heading',
      text: 'Endpoint Selection Guide',
    },
    {
      type: 'table',
      headers: ['Endpoint', 'Method', 'Phase Target', 'Primary Compound', 'Timing'],
      rows: [
        ['Grip strength (kg)', 'Columbus Instruments grip meter, 5 trials per session', 'Functional recovery', 'All', 'Weekly'],
        ['Rotarod (seconds)', 'Ugo Basile accelerating protocol', 'Motor coordination', 'All', 'Weeks 2, 4, 8'],
        ['Body weight', 'Gram scale', 'Metabolic/GH monitoring', 'Ipamorelin+CJC', 'Daily or 3×/week'],
        ['EchoMRI (lean/fat)', 'EchoMRI whole-body composition', 'GH axis body composition', 'Ipamorelin+CJC', 'Weeks 0, 4, 8, 12'],
        ['Serum IGF-1', 'Crystal Chem #80574 ELISA, acid-ethanol extraction, ZT3-5', 'GH axis efficacy', 'Ipamorelin+CJC', 'Weeks 4, 8, 12'],
        ['CD31+ vessel density', 'IHC Chalkley grid morphometry', 'Angiogenesis (BPC-157)', 'BPC-157', 'Sacrifice'],
        ['pVEGFR2 (Tyr1175)', 'Western blot, injured tissue lysate', 'BPC-157 signaling', 'BPC-157', 'Sacrifice'],
        ['pSMAD2-3 nuclear', 'Western blot, nuclear fraction', 'GHK-Cu TGF-β1 signaling', 'GHK-Cu', 'Sacrifice'],
        ['Hydroxyproline (μg/mg)', 'Colorimetric assay, Sigma-Aldrich MAK008', 'Collagen content (GHK-Cu)', 'GHK-Cu', 'Sacrifice'],
        ['LOX activity', 'Fluorometric assay, Abcam ab112139', 'Copper-dependent crosslinking', 'GHK-Cu', 'Sacrifice'],
        ['Masson trichrome', 'Collagen area % by blinded morphometry', 'Total fibrosis/repair quality', 'GHK-Cu', 'Sacrifice'],
        ['Tensile strength (N)', 'Instron uniaxial testing for tendon models', 'Biomechanical recovery', 'All', 'Sacrifice'],
        ['pFAK (Tyr397)', 'Western blot', 'BPC-157 + TB-500 cell migration', 'BPC-157, TB-500', 'Sacrifice'],
        ['α-SMA IHC', 'Myofibroblast marker, fibrotic vs remodeling distinction', 'Repair vs fibrosis', 'GHK-Cu, BPC-157', 'Sacrifice'],
      ],
    },
    {
      type: 'heading',
      text: 'Injury Model Selection',
    },
    {
      type: 'paragraph',
      text: 'The appropriate injury model depends on the tissue of interest:',
    },
    {
      type: 'list',
      items: [
        'Achilles tendon transection: Standard model for recovery peptide validation (Šikiriḉ 2018). Introduce at day 0, begin treatment at day 1. Biomechanical tensile strength testing at 4 and 8 weeks post-injury. Add CD31 IHC and Masson trichrome as co-primary histological endpoints.',
        'MCL or ACL partial transaction: Ligament healing model with slower natural recovery timeline (~12 weeks to functional restoration). Suitable for longer stack protocol assessment.',
        'Muscle contusion (drop-weight): Simple, reproducible impact injury. Grip strength as primary functional endpoint. Satellite cell activation (Pax7/MyoD IHC) as mechanistic endpoint for Ipamorelin+CJC contribution.',
        'Full-thickness excisional wound: Splinted wound healing model (silicone ring) prevents contraction artifact, making it more translational. Planimetry (wound closure rate), CD31 vessel density, and hydroxyproline are all quantifiable.',
        'Hindlimb ischemia: For vascular recovery research. Laser Doppler perfusion imaging (LDPI) as primary endpoint. Validates the BPC-157 angiogenic contribution most directly.',
      ],
    },
    {
      type: 'heading',
      text: 'Reconstitution and Storage Protocols',
    },
    {
      type: 'table',
      headers: ['Compound', 'Solvent', 'Stock Concentration', 'Storage (Lyophilized)', 'Storage (Reconstituted)', 'Notes'],
      rows: [
        ['BPC-157', 'BAC water or sterile saline (oral models)', '1–2 mg/mL', '-20°C', '4°C up to 14–21 days', 'Acetate vs arginate form — use same form throughout study'],
        ['TB-500', 'BAC water', '1–2 mg/mL', '-20°C', '4°C up to 14 days', 'Dorsal scruff SC preferred; no vortex — gentle swirl only'],
        ['GHK-Cu', 'Sterile saline (topical) or BAC water (SC/IP)', '2–5 mg/mL', '-20°C (amber vial)', '4°C up to 14 days, amber vial', 'Blue-violet color = intact copper complex. No EDTA, no DTT, no reducing agents.'],
        ['Ipamorelin', 'BAC water', '1–2 mg/mL', '-20°C', '4°C up to 21 days', 'Co-inject with CJC-1295 No DAC in same syringe'],
        ['CJC-1295 No DAC', 'BAC water', '1–2 mg/mL', '-20°C', '4°C up to 21 days', 'Use low-bind tubes for dilutions below 0.5 mg/mL'],
      ],
    },
    {
      type: 'callout',
      text: 'Do not mix GHK-Cu with BPC-157 in the same reconstitution vial. The copper complex and the pentadecapeptide are stable individually; mixing into one solution introduces risk of metal-catalyzed degradation of BPC-157. Prepare and inject from separate vials.',
    },
    {
      type: 'heading',
      text: 'Critical Pharmacological Controls',
    },
    {
      type: 'table',
      headers: ['Control', 'Drug/Condition', 'Dose', 'Target Pathway', 'Interpretation'],
      rows: [
        ['L-NAME', 'Nω-nitro-L-arginine methyl ester', '40 mg/kg/day IP', 'eNOS/NO (BPC-157)', 'Partial attenuation of BPC-157 effect = NO-dependent component confirmed'],
        ['SU5416', 'Semaxanib VEGFR2 inhibitor', '25 mg/kg SC 2×/week', 'VEGFR2 (BPC-157)', 'Attenuation of angiogenic response = VEGFR2-dependent component'],
        ['KP-392', 'ILK inhibitor', '10 μM in vitro / 5 mg/kg IP in vivo', 'ILK/Akt (TB-500)', 'Attenuation of TB-500 effect = ILK-dependent mechanism confirmed'],
        ['PF-573228', 'FAK inhibitor', '30 mg/kg PO', 'FAK (BPC-157, cell migration)', 'Should attenuate BPC-157 but NOT TB-500 — mechanistic differentiation'],
        ['Free GHK (no copper)', 'GHK tripeptide without Cu²⁺', 'Matched molar dose', 'Copper dependency (GHK-Cu)', 'If free GHK shows no effect: copper complex is required'],
        ['CuSO₄', 'Copper sulfate', 'Matched copper dose', 'Copper alone (GHK-Cu)', 'If CuSO₄ shows no TGF-β/LOX effect: coordination chemistry is required'],
        ['D-[Lys³]-GHRP-6', 'GHSR-1a competitive antagonist', '1–10 mg/kg SC', 'GHSR-1a (Ipamorelin)', 'Blocks ipamorelin effect; should not affect CJC-1295 No DAC response alone'],
      ],
    },
    {
      type: 'heading',
      text: 'Timing Protocol: 12-Week Recovery Study',
    },
    {
      type: 'list',
      items: [
        'Day –7 to 0 (Baseline): Establish baseline grip strength (3 sessions), rotarod, and body weight. Collect baseline IGF-1 (ZT3–5 trunk blood, n=3 per group). Assign groups by baseline body weight stratification.',
        'Day 0 (Injury + Treatment Start): Create injury under isoflurane (1.5–2%). Begin BPC-157 (IP daily) and TB-500 (SC 2–3×/week) from day 1. Delay GHK-Cu start to week 2 to allow inflammatory phase to proceed (optional — some protocols start all four simultaneously).',
        'Week 2 (Add GHK-Cu): If staggered protocol, introduce GHK-Cu SC daily from week 2. Continue BPC-157 and TB-500. Begin Ipamorelin + CJC-1295 No DAC at the same time or at week 1.',
        'Weeks 2, 4, 6, 8 (Functional Assessment): Grip strength and rotarod. Weekly body weight. EchoMRI at weeks 0, 4, 8, 12 for body composition (GH axis monitoring).',
        'Week 4, 8, 12 (Serum Collection): IGF-1 from tail-nick (ZT3–5, 4h pre-collection fast, acid-ethanol extraction). Corticosterone at week 4 to verify ipamorelin HPA selectivity (should be baseline).',
        'Week 12 (Sacrifice): Under isoflurane, collect injured tissue for histology (Masson trichrome, CD31 IHC, α-SMA IHC, pVEGFR2 WB, pSMAD2-3 WB, hydroxyproline assay, LOX activity). Collect contra-lateral tissue as internal control. Tensile strength testing (Instron) before fixation if biomechanics is a primary endpoint.',
      ],
    },
    {
      type: 'heading',
      text: 'Six Research Design Considerations',
    },
    {
      type: 'list',
      items: [
        '1. Injury timing standardization: All injuries must be performed by the same surgeon with the same technique and within the same time window (e.g., ZT2–4). Intra-surgeon variability in injury severity is the largest source of noise in recovery peptide studies. Pilot calibration with 5–10 animals before the main study is strongly recommended.',
        '2. NIH SABV sex stratification: Include equal n per sex or run sex-stratified sub-studies. Wound healing, GH axis pulsatility, and OTR expression all show significant sex differences. Male-only data significantly limits translational inference.',
        '3. Phase-matched endpoint sampling: CD31 vessel density peaks during the proliferative phase (days 7–21). Collecting this endpoint at week 12 will underestimate the angiogenic response. If vessel density is a co-primary endpoint, include a day-14 sacrifice cohort (n=4–5 per group).',
        '4. Separate reconstitution and injection sites: Never mix GHK-Cu with other compounds in the same syringe. Maintain separate injection sites for GHK-Cu and BPC-157 to avoid any copper-catalyzed degradation at the needle or injection site.',
        '5. Blinded histological scoring: Masson trichrome, CD31 IHC, and α-SMA scoring must be performed by a blinded observer (ideally an independent pathologist) using pre-specified criteria. Use QuPath or ImageJ with calibrated macros for area quantification to eliminate scorer bias.',
        '6. Tachyphylaxis monitoring (Ipamorelin): Re-measure IGF-1 at week 8 and week 12. A >20% decline from week-4 IGF-1 level indicates developing tachyphylaxis. Protocol adjustment options include: (a) 2-week dosing holiday, (b) reduce injection frequency from 3×/day to 1×/day with pre-sleep timing, (c) switch to CJC-1295 DAC (once-weekly) for weeks 8–12 of a chronic study.',
      ],
    },
    {
      type: 'heading',
      text: 'Reconstitution Quality Check Protocol',
    },
    {
      type: 'list',
      items: [
        'GHK-Cu: Solution should be blue-violet in color (copper complex intact). Colorless solution indicates loss of copper coordination — discard and prepare fresh. Check at each use.',
        'BPC-157: Should be clear and colorless. Turbidity or cloudiness indicates aggregation — do not use. Prepare at 1 mg/mL in BAC water; stock is stable at 4°C for 14 days.',
        'TB-500: Clear and colorless. Prepare by swirling gently (never vortex) — vortex induces amphipathic aggregation. Check visually before each injection.',
        'Ipamorelin + CJC-1295 No DAC: Both clear solutions. Can be combined in a single insulin syringe for co-injection if volumes permit (typically 100–200 μL total per injection in mice).',
      ],
    },
    {
      type: 'heading',
      text: 'Expected Outcomes from Published Data',
    },
    {
      type: 'paragraph',
      text: 'Based on individual compound data in the published literature, researchers can estimate expected effect sizes in the combination group. In a tendon transection model, BPC-157 alone typically improves tensile strength by 25–40% vs. vehicle at 4 weeks (Šikiriḉ 2018). TB-500 improves wound closure rate by 15–25% in excisional wound models (Ehrlich 2010). GHK-Cu increases collagen content (hydroxyproline) by 20–35% vs. vehicle in wound models (Leyden 2004 skin equivalent data). Ipamorelin + CJC-1295 No DAC increases IGF-1 by 60–85% at 6–12 weeks (Bowers 1998 synergy data applied to published IGF-1 ranges), which correlates with 10–20% lean mass gains in DIO rodent models.',
    },
    {
      type: 'paragraph',
      text: 'In a combination group targeting all four mechanisms simultaneously, effect sizes are expected to be additive in non-overlapping pathways. Since BPC-157 (VEGFR2/FAK), TB-500 (ILK/G-actin), GHK-Cu (TGF-β1/LOX), and Ipamorelin+CJC (GHSR-1a/GHRHr) operate through fully distinct primary receptors and signaling arms, no competitive antagonism or receptor saturation is expected at recommended doses. The caveat is that pharmacological controls (L-NAME, KP-392, free GHK) should be included to confirm mechanistic independence in the specific injury model used.',
    },
    {
      type: 'heading',
      text: 'Interaction with Existing Research Workflows',
    },
    {
      type: 'paragraph',
      text: 'This four-compound stack is directly compatible with the /tools/stack-builder protocol on Nexphoria Research Hub, which provides the theoretical synergy rationale, and with the /tools/dosing-frequency-planner, which can generate a weekly injection calendar for the complete protocol. The /tools/protocol-template-generator can produce a printable research protocol document with all five compounds (BPC-157, TB-500, GHK-Cu, Ipamorelin, CJC-1295 No DAC), reconstitution notes, and biomarker tracking sections.',
    },
    {
      type: 'heading',
      text: 'Summary: Why This Stack Covers the Full Recovery Cascade',
    },
    {
      type: 'list',
      items: [
        'BPC-157 ensures vascular supply to the repair site — without blood flow, all other repair processes are substrate-limited.',
        'TB-500 resolves excessive inflammation in the first 5 days, preventing inflammatory overshoot that would impair proliferation.',
        'GHK-Cu provides the copper cofactor and TGF-β1 signaling necessary for high-quality collagen crosslinking in the remodeling phase.',
        'Ipamorelin + CJC-1295 No DAC elevates IGF-1 by 60–85%, supporting satellite cell activation, myofibrillar protein synthesis, and systemic anabolic state throughout recovery.',
        'No receptor overlap means no competitive antagonism — each compound operates through its primary mechanism without diminishing the others.',
      ],
    },
    {
      type: 'divider',
    },
    {
      type: 'disclaimer',
      text: 'FOR RESEARCH USE ONLY. All compounds described are Research Use Only (RUO). This article is provided for educational purposes for licensed researchers. Not intended for human or veterinary use. Always follow institutional IACUC protocols.',
    },
  ],
};
