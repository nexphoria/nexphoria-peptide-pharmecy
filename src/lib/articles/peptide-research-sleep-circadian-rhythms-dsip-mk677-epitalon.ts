import type { BlogArticle } from '../blog-types';

export const article: BlogArticle = {
  slug: 'peptide-research-sleep-circadian-rhythms-dsip-mk677-epitalon',
  title: 'Peptide Research for Sleep and Circadian Rhythms: DSIP, MK-677, and Epitalon',
  description:
    'A comprehensive research guide covering the three main peptide classes that interact with sleep architecture and circadian biology — DSIP, MK-677, and Epitalon — with mechanisms, published polysomnographic data, preclinical dosing protocols, and study design considerations.',
  category: 'Nootropics',
  readMinutes: 10,
  publishedAt: '2026-05-31',
  ogImage: '/og-image.jpg',
  body: [
    {
      type: 'paragraph',
      text: 'Sleep is one of the most biologically conserved processes in mammals, and its disruption accelerates virtually every aging phenotype. Three research peptide classes intersect with sleep and circadian biology through distinct, mechanistically non-overlapping pathways: DSIP (Delta Sleep-Inducing Peptide) via adenosinergic and HPA axis modulation, MK-677 (Ibutamoren) via GHSR-1a-mediated nocturnal GH pulse amplification and slow-wave sleep enhancement, and Epitalon via pineal gland AANAT upregulation and melatonin restoration. Understanding each compound\'s mechanism, the published polysomnographic and endocrine data, and the appropriate preclinical model is essential for rigorous sleep and circadian rhythm research.',
    },
    {
      type: 'heading',
      text: 'The Architecture of Sleep: What Peptide Research Targets',
    },
    {
      type: 'paragraph',
      text: 'Sleep architecture in rodents and humans consists of two primary states: NREM (Non-Rapid Eye Movement) sleep — subdivided into N1/N2/N3 (light, intermediate, and slow-wave/deep sleep) — and REM sleep. The deepest stage, SWS (Slow-Wave Sleep, N3), is characterized by high-amplitude, low-frequency (0.5–4 Hz) delta waves on EEG and is the phase most associated with anabolic hormone secretion, memory consolidation, immune restoration, and cellular repair.',
    },
    {
      type: 'paragraph',
      text: 'Circadian biology underpins the 24-hour regulation of sleep–wake cycles, with the suprachiasmatic nucleus (SCN) acting as the master clock via CLOCK/BMAL1/PER/CRY transcription factor feedback loops. The pineal gland translates SCN light/dark signals into melatonin secretion pulses that gate the sleep transition. Aging progressively disrupts both SWS architecture and melatonin amplitude — two changes directly relevant to all three compounds discussed here.',
    },
    {
      type: 'heading',
      text: 'DSIP: Delta Sleep-Inducing Peptide — Mechanism and Research Data',
    },
    {
      type: 'paragraph',
      text: 'DSIP (Trp-Ala-Gly-Gly-Asp-Ala-Ser-Gly-Glu) is a nonapeptide originally isolated from thalamo-cortical perfusate in 1977 (Monnier et al., Nature 1977) from rabbits exhibiting enhanced SWS during thalamic stimulation. The D-Ala residue at position 2 confers unusual plasma stability for a small peptide. Despite decades of research, the DSIP mechanism remains incompletely characterized but involves at least three non-exclusive pathways.',
    },
    {
      type: 'paragraph',
      text: 'First, adenosinergic modulation: DSIP appears to sensitize A1 adenosine receptors in the basal forebrain and thalamus, facilitating the adenosine-driven SWS pressure that accumulates during wakefulness (process S in the two-process sleep model). Second, HPA axis suppression: DSIP dose-dependently suppresses corticotropin-releasing hormone (CRH) secretion from the paraventricular nucleus, reducing ACTH and corticosterone. Since cortisol/corticosterone elevation is a primary driver of sleep fragmentation and reduced SWS in aged animals, this anti-stress axis effect is mechanistically plausible. Third, sigma receptor interaction: early electrophysiological studies suggested DSIP binds sigma-1 receptors in thalamic and brainstem nuclei, modulating ion channel activity to increase delta burst probability.',
    },
    {
      type: 'paragraph',
      text: 'Published polysomnographic data in rodents consistently show DSIP (100–200 µg/kg IV or ICV) increases SWS percentage (delta power) by 20–35% during the first 4–6 hours post-injection without suppressing REM sleep — a key advantage over GABA-ergic sedatives, which typically reduce REM. In human clinical studies (Graf & Kastin, Peptides 1984; Schneider-Helmert 1985), DSIP (25–50 µg IV) improved sleep quality scores in subjects with chronic insomnia, reduced sleep onset latency, and decreased early-morning awakening. However, these studies used small samples and IV delivery, limiting translational conclusions.',
    },
    {
      type: 'callout',
      text: 'Important caveat: The DSIP receptor pharmacology is one of the more contested topics in peptide neuroscience. No validated, selective DSIP receptor antagonist is commercially available. Mechanistic dissection relies on A1 adenosine antagonist DPCPX and CRH receptor antagonist antalarmin rather than a direct DSIP receptor tool.',
    },
    {
      type: 'heading',
      text: 'MK-677: Slow-Wave Sleep Amplification via GHSR-1a',
    },
    {
      type: 'paragraph',
      text: 'MK-677 (Ibutamoren) is a non-peptide GHSR-1a full agonist with oral bioavailability and a ~24-hour half-life (oral Tmax 2–4h). Unlike injectable GHRPs (ipamorelin, GHRP-2, GHRP-6), MK-677 provides sustained, non-pulsatile GHSR-1a occupancy — which has distinct implications for sleep architecture.',
    },
    {
      type: 'paragraph',
      text: 'The arcuate nucleus–hypothalamic GHSR-1a system co-regulates with sleep architecture through reciprocal GH–sleep interactions. The largest GH pulse in humans and nocturnal-phase rats occurs coincident with the onset of SWS, driven by decreased somatostatin tone and a GHRH pulse from the arcuate nucleus at the transition to deep NREM. GHSR-1a agonism amplifies both the GH pulse magnitude and — through feedback on sleep-promoting hypothalamic circuits — the associated SWS episode. MK-677 specifically increases SWS without sedation, unlike GHRP-6 (which has orexigenic effects that can fragment sleep architecture) or benzodiazepines (which suppress SWS).',
    },
    {
      type: 'paragraph',
      text: 'The landmark polysomnographic study is Copinschi et al., Sleep 1997, which enrolled 10 healthy elderly men in a double-blind crossover trial. After 14 days of MK-677 at 25 mg orally: SWS (Stage 4 delta sleep) increased 50%; REM sleep duration increased 20%; no significant change in sleep onset latency or total sleep time was observed; nocturnal GH pulse amplitude increased 60%; and serum IGF-1 increased 39% at 4 weeks. These effects are consistent across adult and elderly GH-deficient populations — MK-677 essentially restores the SWS/GH architecture seen in young adults. In rodent studies, MK-677 (10–30 mg/kg oral) produces dose-dependent increases in EEG delta power during the inactive (lights-on) phase.',
    },
    {
      type: 'heading',
      text: 'Epitalon: Pineal Gland Restoration and Circadian Entrainment',
    },
    {
      type: 'paragraph',
      text: 'Epitalon (Ala-Glu-Asp-Gly, tetrapeptide, CAS 307297-39-8) is a synthetic tetrapeptide bioregulator based on the active fragment of epithalamin — a polypeptide extract from the bovine pineal gland developed by Vladimir Khavinson at the St. Petersburg Institute of Bioregulation and Gerontology.',
    },
    {
      type: 'paragraph',
      text: 'For sleep and circadian effects, the primary mechanism is AANAT upregulation: Epitalon increases arylalkylamine N-acetyltransferase (AANAT), the rate-limiting enzyme in melatonin synthesis from serotonin in pinealocytes. In aged animals where AANAT expression has declined, Epitalon administration restores melatonin amplitude toward young adult levels. Melatonin feeds back onto SCN neurons via MT1R/MT2R receptors, reinforcing the circadian phase signal. Restoration of melatonin amplitude thus improves circadian robustness — particularly the precision of the sleep onset signal.',
    },
    {
      type: 'paragraph',
      text: 'Published data from the Khavinson laboratory (2002–2012): aged CBA mice treated with Epitalon (1 µg/mouse SC, 10-day courses × 3) showed urinary melatonin sulfate restoration approaching young adult levels (2.1-fold increase). Circadian locomotor rhythm amplitude increased 35–45% in Epitalon-treated aged mice, quantified by actogram analysis. The luzindole dissection protocol — co-administration of the melatonin receptor antagonist luzindole at 5–10 mg/kg IP — fully abrogated Epitalon\'s sleep architecture improvements, confirming melatonin-dependence rather than direct SCN or GABA action.',
    },
    {
      type: 'callout',
      text: 'Reconstitution note: Epitalon should be reconstituted in sterile isotonic saline — not BAC water — to avoid benzyl alcohol\'s potential pineal cytotoxicity in long-duration studies. Prepare at 0.1–0.5 mg/mL, store at 4°C, stable 14 days. Administer at ZT11–ZT13 to align with the pineal activity window.',
    },
    {
      type: 'heading',
      text: 'Mechanism Comparison and Research Applications',
    },
    {
      type: 'table',
      headers: ['Parameter', 'DSIP', 'MK-677', 'Epitalon'],
      rows: [
        ['Primary target', 'Adenosine A1R / HPA axis', 'GHSR-1a (non-peptide agonist)', 'AANAT / pineal gland'],
        ['Sleep effect', 'SWS ↑ 20–35%, cortisol ↓', 'SWS ↑ 50%, GH pulse ↑ 60%', 'Melatonin ↑ 2.1×, circadian ↑'],
        ['REM effect', 'Neutral / slight ↑', 'REM ↑ 20% (Copinschi 1997)', 'Melatonin gates REM transition'],
        ['HPA suppression', 'Yes — CRH/ACTH/corticosterone ↓', 'Minimal', 'Yes — corticosterone ↓ aged'],
        ['Anabolic effects', 'None', 'IGF-1 ↑ 39%, lean mass ↑', 'None direct'],
        ['Duration of effect', 'Acute (4–6h post-dose)', 'Sustained (24h half-life)', 'Cumulative circadian restoration'],
        ['Half-life', '~30 min plasma', '~24h', '~30 min'],
        ['Dosing schedule', 'Nightly or pulsatile', 'Once daily oral ZT11', 'SC, 10-day courses pulsatile'],
        ['Best study model', 'Acute SWS induction, stress', 'SWS/GH axis, elderly', 'Circadian aging, longevity'],
      ],
    },
    {
      type: 'paragraph',
      text: 'The three compounds are non-competing and potentially synergistic: DSIP addresses acute corticosterone-driven sleep disruption; MK-677 amplifies GH/SWS amplitude; Epitalon restores the circadian melatonin scaffold that times when SWS occurs. Together they address the SWS deficit of aging from three independent entry points.',
    },
    {
      type: 'heading',
      text: 'Preclinical Dosing Protocols',
    },
    {
      type: 'paragraph',
      text: 'DSIP: ICV bolus for acute SWS induction uses 5–20 µg/mouse or 50–100 µg/rat in 5 µL aCSF, administered at ZT0 (light onset, inactive phase in nocturnal rodents) for peak SWS effect, with EEG recording 0–6h post-injection. IP bolus for systemic administration: 100–200 µg/kg in isotonic saline, peak EEG delta power at 60–120 min. Reconstitute in sterile saline or aCSF (no BAC water for ICV). Use low-bind microtubes. Fresh preparation preferred; stable 48h at 4°C.',
    },
    {
      type: 'paragraph',
      text: 'MK-677: Mouse dosing is 10–30 mg/kg oral gavage (0.3% methylcellulose vehicle), once daily at ZT11 (1h before dark onset). Minimum 14 days for SWS/sleep architecture analysis; 4+ weeks for IGF-1 endpoint. Rat dosing: 10–20 mg/kg oral once daily at ZT11. Dissolve in minimal DMSO, dilute to <0.5% DMSO final in methylcellulose. Confirm oral bioavailability with plasma GH measurement at 2–4h post-dose. Important: MK-677 may cause transient polyphagia and mild fasting hyperglycemia — include glucose/insulin monitoring for metabolic co-studies.',
    },
    {
      type: 'paragraph',
      text: 'Epitalon: Mouse dosing is 1 µg/mouse (~40–50 µg/kg) SC, once daily × 10 days. Repeat courses: day 1–10, 60-day rest, day 71–80 (Khavinson longevity protocol). Rat dosing: 0.5–1 µg/rat (~2–4 µg/kg) SC, same 10-day pulsatile schedule. Administer at ZT11–ZT13. Reconstitute in sterile isotonic saline at 0.1–0.5 mg/mL; stable 14 days at 4°C.',
    },
    {
      type: 'heading',
      text: 'Combination Protocol: Sleep Restoration in Aged Rodents',
    },
    {
      type: 'paragraph',
      text: 'For aging sleep research that covers all three mechanistic axes, the following 5-group design is recommended for aged C57BL/6J mice (18–24 months from NIA Aged Rodent Colonies): Group 1 (Vehicle): saline IP + methylcellulose oral + saline SC courses. Group 2 (DSIP alone): 100 µg/kg IP at ZT23, nightly × 5 nights per 2-week block. Group 3 (MK-677 alone): 20 mg/kg oral at ZT11, daily × 6 weeks. Group 4 (Epitalon alone): 1 µg/mouse SC at ZT12, 10-day courses × 3 across 6 weeks. Group 5 (Combined): all three at the above doses and schedules.',
    },
    {
      type: 'paragraph',
      text: 'Endpoints at weeks 4–6 should include: EEG/EMG polysomnography (SWS%, REM%, delta power, sleep onset latency, arousal/fragmentation index); serum GH pulse sampling at ZT13; IGF-1 at ZT3; corticosterone at ZT4; overnight urinary 6-sulphatoxymelatonin in metabolic cages; actogram (running wheel or RFID) for circadian period, amplitude, and phase angle of entrainment. Cognitive endpoints such as novel object recognition (SWS-dependent memory consolidation) can be added as a functional output.',
    },
    {
      type: 'heading',
      text: 'Six Study Design Considerations',
    },
    {
      type: 'list',
      items: [
        'EEG/EMG is mandatory for sleep endpoints. Behavioral observation cannot reliably distinguish SWS from light NREM. Surgical cortical screw electrode implantation with 5–7 day post-surgical recovery, digitized at ≥500 Hz, offline epoch scoring (blinded to treatment) using validated semi-automated algorithms (SleepSign, Spike2) is the minimum requirement for publishable sleep architecture data.',
        'Circadian timing standardization is non-negotiable. Maintain strict 12:12 light:dark cycles. ZT0 = lights on; ZT12 = lights off (active phase onset for nocturnal rodents). DSIP and Epitalon endpoints are assessed in the inactive phase (ZT0–ZT12) when SWS predominates. MK-677 at ZT11 allows peak plasma levels at the natural GH pulse window (ZT12–ZT15).',
        'Aged animals required for Epitalon and MK-677 SWS studies. Young adult rodents (8–12 weeks) already have robust SWS architecture and near-maximal melatonin amplitude. Epitalon\'s effects are restorative, not additive in healthy young animals. MK-677\'s SWS amplification is also most pronounced in GH-deficient elderly models. Use 18–24 month C57BL/6J or SAMP8 accelerated aging mice.',
        'HPA axis confounding requires a control arm. Both DSIP (CRH suppression) and Epitalon (corticosterone normalization) improve SWS indirectly via reduced cortisol. Include a CRH antagonist positive control (antalarmin 20–30 mg/kg IP) and measure corticosterone at ZT4 (peak trough). If antalarmin recapitulates the SWS improvement, HPA modulation is the dominant mechanism for that compound.',
        'MK-677 metabolic confounds. MK-677\'s mild insulin resistance and hyperphagia must be monitored in metabolic studies or DIO models. Use D-[Lys³]-GHRP-6 (1–3 mg/kg IP) as a GHSR-1a antagonist control to verify receptor specificity for sleep endpoints. Include fasting glucose, HOMA-IR, and body weight as co-endpoints.',
        'DSIP receptor gap limits mechanistic precision. Unlike MK-677 (GHSR-1a antagonist available) and Epitalon (luzindole dissection possible), no validated selective DSIP receptor antagonist is commercially available. Mechanistic dissection is limited to pharmacological approaches: A1 adenosine receptor antagonist DPCPX (1–3 mg/kg IP) tests adenosinergic contribution; antalarmin tests HPA contribution; scrambled nonapeptide provides receptor specificity evidence. Pre-specify which mechanistic arms you will attempt to dissect.',
      ],
    },
    {
      type: 'heading',
      text: 'Storage and Reconstitution Summary',
    },
    {
      type: 'table',
      headers: ['Compound', 'Vehicle', 'Concentration', 'Storage', 'Stability'],
      rows: [
        ['DSIP', 'Sterile saline pH 7.4 or aCSF (ICV)', '0.2–1 mg/mL', '4°C refrigerated; freeze aliquots -80°C', '48h at 4°C; months frozen'],
        ['MK-677', '0.3% methylcellulose (≤0.5% DMSO)', '1–3 mg/mL', 'Lyophilized -20°C; suspension fresh daily', 'Prepare oral suspension fresh; lyophilized stable -20°C'],
        ['Epitalon', 'Sterile isotonic saline', '0.1–0.5 mg/mL', 'Lyophilized -20°C; reconstituted 4°C', '14 days at 4°C reconstituted'],
      ],
    },
    {
      type: 'paragraph',
      text: 'For all three compounds: use low-bind microtubes to prevent adsorption at dilute concentrations. No vortexing — gentle inversion or swirl to dissolve lyophilized material. Amber vials for compounds stored under light restriction. Label each vial with compound, lot, date reconstituted, and concentration.',
    },
    {
      type: 'disclaimer',
      text: 'DSIP, MK-677, and Epitalon are supplied by Nexphoria exclusively for laboratory research use only (RUO). These compounds are not approved by the FDA for human use and are not intended for diagnosis, treatment, or prevention of any disease. All animal research must comply with institutional IACUC guidelines and applicable regulatory frameworks.',
    },
  ],
};
