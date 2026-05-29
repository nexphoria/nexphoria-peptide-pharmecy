"use client";

import { useState } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

// ─── Goal Templates ──────────────────────────────────────────────────────────

type Compound = {
  slug: string;
  name: string;
  dose: string;
  frequency: string;
  role: string;
  mechanism: string;
  price: number; // per vial
  vialSize: string;
  monthlyVials: number; // estimated vials/month
};

type Stack = {
  id: string;
  label: string;
  icon: string;
  headline: string;
  rationale: string;
  synergy: string;
  timeline: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  compounds: Compound[];
  schedule: {
    day: string;
    injections: string[];
  }[];
  references: string[];
};

const STACKS: Stack[] = [
  {
    id: "recovery",
    label: "Tendon & Ligament Recovery",
    icon: "⬡",
    headline: "BPC-157 + TB-500",
    rationale:
      "The most well-studied connective tissue recovery combination in preclinical literature. BPC-157 drives angiogenesis via VEGF upregulation and promotes fibroblast migration. TB-500 (Thymosin Beta-4 fragment) sequesters G-actin to reduce inflammation and facilitate cellular migration. Together they target complementary phases of the repair cascade: BPC-157 handles vascular and growth factor signaling; TB-500 addresses actin remodeling and tissue remodeling.",
    synergy:
      "BPC-157 and TB-500 are mechanistically non-redundant. BPC-157 activates NO/VEGF/GH-R pathways; TB-500 works through actin-G binding and ILK/VEGFR2 signaling. In rodent studies, the combination showed superior tendon healing vs either compound alone in the Staresinic 2003 model.",
    timeline: "6–8 weeks loading; 4 weeks maintenance",
    difficulty: "Beginner",
    compounds: [
      {
        slug: "bpc-157",
        name: "BPC-157",
        dose: "250 mcg",
        frequency: "2× daily",
        role: "Primary angiogenic / cytoprotective agent",
        mechanism:
          "VEGF upregulation, NO-system modulation, GH-R interaction, fibroblast migration",
        price: 120,
        vialSize: "10mg",
        monthlyVials: 1,
      },
      {
        slug: "tb-500",
        name: "TB-500",
        dose: "2 mg",
        frequency: "2× weekly",
        role: "Actin-binding anti-inflammatory / tissue remodeling agent",
        mechanism:
          "G-actin sequestration, ILK/VEGFR2 signaling, NF-κB inhibition",
        price: 90,
        vialSize: "5mg",
        monthlyVials: 2,
      },
      {
        slug: "ghk-cu",
        name: "GHK-Cu",
        dose: "1 mg",
        frequency: "3× weekly (optional)",
        role: "Collagen synthesis enhancer (optional add-on)",
        mechanism:
          "TGF-β / lysyl oxidase activation, Nrf2 antioxidant induction, ECM remodeling",
        price: 96,
        vialSize: "50mg",
        monthlyVials: 1,
      },
    ],
    schedule: [
      { day: "Mon", injections: ["BPC-157 (AM)", "BPC-157 (PM)", "TB-500", "GHK-Cu"] },
      { day: "Tue", injections: ["BPC-157 (AM)", "BPC-157 (PM)"] },
      { day: "Wed", injections: ["BPC-157 (AM)", "BPC-157 (PM)", "GHK-Cu"] },
      { day: "Thu", injections: ["BPC-157 (AM)", "BPC-157 (PM)", "TB-500"] },
      { day: "Fri", injections: ["BPC-157 (AM)", "BPC-157 (PM)", "GHK-Cu"] },
      { day: "Sat", injections: ["BPC-157 (AM)", "BPC-157 (PM)"] },
      { day: "Sun", injections: ["BPC-157 (AM)", "BPC-157 (PM)"] },
    ],
    references: [
      "Staresinic et al. (2003). Gastrointestinal tract as target of BPC-157 (pentadecapeptide) — tendon healing.",
      "Goldstein AL, Hannappel E, Kleinman HK (2005). Thymosin beta-4: actin-sequestering protein moonlights as a wound healer.",
      "Treadwell T et al. (2012). Thymosin beta4 and angiogenic repair.",
    ],
  },
  {
    id: "gh-axis",
    label: "GH Axis Pulse",
    icon: "⬡",
    headline: "CJC-1295 No DAC + Ipamorelin",
    rationale:
      "The gold-standard GHRH + GHRP combination in research. CJC-1295 No DAC (Mod GRF 1-29) mimics a physiological GHRH pulse with a ~30-minute half-life, stimulating pituitary somatotrophs. Ipamorelin amplifies the GH pulse via GHSR-1a without elevating cortisol or ACTH — the selectivity advantage over GHRP-2 and GHRP-6. The combination produces synergistic GH release 8–12× greater than either alone (Bowers 1998).",
    synergy:
      "GHRH and GHRP act on separate receptors via different second-messenger cascades (Gs/cAMP vs Gq/IP3). Co-administration exploits both pathways simultaneously. Timing both to coincide with natural GH nadir windows (fasted state, post-exercise, or pre-sleep) maximizes pulse amplitude.",
    timeline: "12-week cycle; 4-week off for receptor sensitivity",
    difficulty: "Intermediate",
    compounds: [
      {
        slug: "cjc-1295",
        name: "CJC-1295 No DAC",
        dose: "100 mcg",
        frequency: "2× daily",
        role: "GHRH analog — pituitary GH pulse trigger",
        mechanism: "GHRHr Gs/cAMP/PKA/CREB → GH secretion",
        price: 69,
        vialSize: "5mg",
        monthlyVials: 2,
      },
      {
        slug: "cjc-1295-ipamorelin",
        name: "Ipamorelin",
        dose: "100 mcg",
        frequency: "2× daily (co-administered with CJC)",
        role: "Selective GHRP — GH amplifier without cortisol elevation",
        mechanism: "GHSR-1a Gq/IP3/DAG → GH secretion, no ACTH/cortisol",
        price: 96,
        vialSize: "10mg",
        monthlyVials: 1,
      },
      {
        slug: "mk-677",
        name: "MK-677 (Ibutamoren)",
        dose: "12.5 mg",
        frequency: "1× daily oral (optional — extends IGF-1 elevation)",
        role: "Oral GHSR-1a agonist — sustained IGF-1 elevation",
        mechanism: "Oral GHSR-1a full agonist, 24h half-life, IGF-1 ↑ 39.9%",
        price: 89,
        vialSize: "10mg",
        monthlyVials: 1,
      },
    ],
    schedule: [
      { day: "Mon", injections: ["CJC-1295 + Ipamorelin (AM fasted)", "CJC-1295 + Ipamorelin (pre-sleep)"] },
      { day: "Tue", injections: ["CJC-1295 + Ipamorelin (AM fasted)", "CJC-1295 + Ipamorelin (pre-sleep)"] },
      { day: "Wed", injections: ["CJC-1295 + Ipamorelin (AM fasted)", "CJC-1295 + Ipamorelin (pre-sleep)"] },
      { day: "Thu", injections: ["CJC-1295 + Ipamorelin (AM fasted)", "CJC-1295 + Ipamorelin (pre-sleep)"] },
      { day: "Fri", injections: ["CJC-1295 + Ipamorelin (AM fasted)", "CJC-1295 + Ipamorelin (pre-sleep)"] },
      { day: "Sat", injections: ["CJC-1295 + Ipamorelin (pre-sleep)"] },
      { day: "Sun", injections: ["CJC-1295 + Ipamorelin (pre-sleep)"] },
    ],
    references: [
      "Bowers CY et al. (1998). Synergistic release of GH by GHRH and GHRP in human subjects.",
      "Johansen PB et al. (1999). Ipamorelin selectivity — no elevation of cortisol, ACTH, or prolactin.",
      "Nass R et al. (2008). Ibutamoren mesylate (MK-677) — 2-year RCT IGF-1 and lean mass data.",
    ],
  },
  {
    id: "metabolic",
    label: "Metabolic Research",
    icon: "⬡",
    headline: "Tirzepatide + MOTS-c",
    rationale:
      "Tirzepatide delivers dual GLP-1R/GIPR agonism — the most potent incretin-based weight research compound available with up to 24.2% body weight reduction in Phase 2 data. MOTS-c complements it with mitochondrial-level AMPK activation and GLUT4 nuclear translocation, improving peripheral insulin sensitivity through a mechanism completely independent of incretin signaling. The combination addresses central appetite/gastric emptying AND peripheral glucose disposal.",
    synergy:
      "Tirzepatide works centrally (hypothalamic appetite suppression) and peripherally (incretin-stimulated insulin secretion). MOTS-c works at mitochondrial AMPK/folate cycle level. Zero receptor overlap — true mechanistic synergy for whole-body metabolic research.",
    timeline: "16-week minimum for phenotypic observation in rodent DIO models",
    difficulty: "Advanced",
    compounds: [
      {
        slug: "tirzepatide",
        name: "Tirzepatide",
        dose: "0.5–3 nmol/kg (rodent) or per study protocol",
        frequency: "2× weekly SC",
        role: "Primary dual GLP-1R/GIPR agonist",
        mechanism:
          "GLP-1R + GIPR dual Gs/cAMP, gastric emptying, hypothalamic NPY/AgRP suppression",
        price: 180,
        vialSize: "10mg",
        monthlyVials: 1,
      },
      {
        slug: "retatrutide",
        name: "MOTS-c",
        dose: "5–15 mg/kg (rodent DIO) or per study protocol",
        frequency: "5× weekly SC or IP",
        role: "Mitochondrial AMPK activator — peripheral glucose disposal",
        mechanism:
          "12S rRNA sORF mitopeptide → AMPK via AICAR/folate cycle → GLUT4 nuclear translocation",
        price: 300,
        vialSize: "10mg",
        monthlyVials: 1,
      },
      {
        slug: "semaglutide",
        name: "Semaglutide",
        dose: "Per study protocol (alt to Tirzepatide for mono-agonist arm)",
        frequency: "1× weekly SC",
        role: "Alternative: GLP-1R monoagonist control arm",
        mechanism:
          "GLP-1R Gs/cAMP, DPP-IV resistant via C18 fatty acid + linker, 7-day half-life",
        price: 99,
        vialSize: "5mg",
        monthlyVials: 1,
      },
    ],
    schedule: [
      { day: "Mon", injections: ["Tirzepatide (SC)", "MOTS-c (SC)"] },
      { day: "Tue", injections: ["MOTS-c (SC)"] },
      { day: "Wed", injections: ["MOTS-c (SC)"] },
      { day: "Thu", injections: ["Tirzepatide (SC)", "MOTS-c (SC)"] },
      { day: "Fri", injections: ["MOTS-c (SC)"] },
      { day: "Sat", injections: ["MOTS-c (SC)"] },
      { day: "Sun", injections: [] },
    ],
    references: [
      "Jastreboff AM et al. (2023). Tirzepatide vs placebo — SURMOUNT-1 Phase 2 NEJM data.",
      "Lee C et al. (2015). MOTS-c: mitochondrially encoded regulator of nuclear gene expression and systemic metabolism. Cell Metabolism.",
      "Young MF et al. (2021). MOTS-c signaling and exercise mimetic effects. Nature Aging.",
    ],
  },
  {
    id: "longevity",
    label: "Longevity & Anti-Aging",
    icon: "⬡",
    headline: "NAD+ + Epitalon + GHK-Cu",
    rationale:
      "A three-axis longevity stack targeting mitochondrial redox (NAD+), telomere maintenance (Epitalon), and ECM/antioxidant signaling (GHK-Cu). Each compound targets a distinct molecular hallmark of aging: energy metabolism decline, telomere attrition, and extracellular matrix degradation / oxidative stress accumulation.",
    synergy:
      "NAD+ replenishes the sirtuin fuel supply (SIRT1/SIRT3/SIRT6). Epitalon activates telomerase (TERT) via pineal axis restoration. GHK-Cu activates Nrf2 and 31 antioxidant genes, directly addressing the reactive oxygen species that accelerate telomere shortening and NAD+ depletion. All three act on distinct pathways with no receptor competition.",
    timeline: "12-week cycles; quarterly protocol common in murine aging research",
    difficulty: "Intermediate",
    compounds: [
      {
        slug: "nad-plus",
        name: "NAD+",
        dose: "50–100 mg",
        frequency: "3× weekly IV/SC or per protocol",
        role: "Sirtuin coenzyme replenishment / mitochondrial biogenesis",
        mechanism:
          "NAMPT salvage → NAD+ → SIRT1/SIRT3/SIRT6 deacetylase activation, PGC-1α biogenesis",
        price: 96,
        vialSize: "100mg",
        monthlyVials: 2,
      },
      {
        slug: "epitalon",
        name: "Epitalon",
        dose: "5 mg",
        frequency: "Daily × 10 days per quarterly cycle",
        role: "Telomerase activator / pineal gland restoration",
        mechanism:
          "TERT activation → telomere elongation, melatonin normalization, Nrf2 antioxidant induction",
        price: 120,
        vialSize: "10mg",
        monthlyVials: 1,
      },
      {
        slug: "ghk-cu",
        name: "GHK-Cu",
        dose: "1–2 mg",
        frequency: "5× weekly SC",
        role: "Collagen synthesis + Nrf2 antioxidant activation",
        mechanism:
          "TGF-β / lysyl oxidase ECM remodeling, Nrf2 → 31 antioxidant genes, VEGF angiogenesis",
        price: 96,
        vialSize: "50mg",
        monthlyVials: 1,
      },
    ],
    schedule: [
      { day: "Mon", injections: ["NAD+ (SC/IV)", "GHK-Cu (SC)", "Epitalon (10-day cycle)"] },
      { day: "Tue", injections: ["GHK-Cu (SC)", "Epitalon (10-day cycle)"] },
      { day: "Wed", injections: ["NAD+ (SC/IV)", "GHK-Cu (SC)", "Epitalon (10-day cycle)"] },
      { day: "Thu", injections: ["GHK-Cu (SC)", "Epitalon (10-day cycle)"] },
      { day: "Fri", injections: ["NAD+ (SC/IV)", "GHK-Cu (SC)", "Epitalon (10-day cycle)"] },
      { day: "Sat", injections: ["GHK-Cu (SC)"] },
      { day: "Sun", injections: [] },
    ],
    references: [
      "Rajman L, Chwalek K, Sinclair DA (2018). Therapeutic potential of NAD-boosting molecules: the in vivo evidence. Cell Metabolism.",
      "Khavinson VK et al. (2003). Epithalon peptide induces telomerase activity and telomere elongation in human somatic cells.",
      "Pickart L, Vasquez-Soltero JM, Margolina A (2015). GHK Peptide as a Natural Modulator of Multiple Cellular Pathways in Skin Aging.",
    ],
  },
  {
    id: "cognitive",
    label: "Cognitive Enhancement",
    icon: "⬡",
    headline: "Semax + Selank",
    rationale:
      "Semax (ACTH(4-7)PGP) and Selank (tuftsin analog) are the two most-studied nootropic peptides from the Russian Institute of Molecular Genetics. Semax drives BDNF/VEGF neurotrophin upregulation and activates melanocortin receptors without the cortisol/stress axis stimulation of native ACTH. Selank provides GABA-A modulation without dependence or sedation, dramatically reducing anxiety-related impairment of memory consolidation. Together: cognitive amplification (Semax) + anxiolytic clarity (Selank).",
    synergy:
      "Semax raises BDNF for LTP and hippocampal neurogenesis. Selank lowers tonic anxiety via GABAergic/IL-6 modulation — removing the anxiety-induced cortisol that would suppress BDNF. The result is a cleaner cognitive enhancement profile with no sedation or HPA activation.",
    timeline: "4–8 week intranasal research cycle; observe at 2-week intervals",
    difficulty: "Beginner",
    compounds: [
      {
        slug: "semax",
        name: "Semax",
        dose: "100–300 mcg",
        frequency: "2× daily intranasal",
        role: "Primary cognitive enhancer — BDNF + VEGF upregulation",
        mechanism:
          "MC1R/MC3R/MC4R agonism without MC2R (no cortisol), BDNF/VEGF neurotrophin cascade",
        price: 108,
        vialSize: "5mg",
        monthlyVials: 1,
      },
      {
        slug: "selank",
        name: "Selank",
        dose: "250–500 mcg",
        frequency: "2× daily intranasal (co-administered or offset 30 min)",
        role: "Anxiolytic / GABAergic stabilizer — reduces anxiety-cortisol BDNF suppression",
        mechanism:
          "Tuftsin analog, GABA-A modulation, IL-6 immunomodulation, BDNF upregulation",
        price: 108,
        vialSize: "10mg",
        monthlyVials: 1,
      },
      {
        slug: "nad-plus",
        name: "NAD+",
        dose: "25–50 mg",
        frequency: "3× weekly (optional — cognitive energy substrate)",
        role: "Mitochondrial energy support for neuronal ATP demand",
        mechanism:
          "SIRT1 deacetylase, PGC-1α mitochondrial biogenesis in neurons, cortical NAD+ replenishment",
        price: 96,
        vialSize: "100mg",
        monthlyVials: 1,
      },
    ],
    schedule: [
      { day: "Mon", injections: ["Semax (AM intranasal)", "Selank (AM intranasal)", "Semax (PM)", "Selank (PM)", "NAD+ (SC)"] },
      { day: "Tue", injections: ["Semax (AM intranasal)", "Selank (AM intranasal)", "Semax (PM)", "Selank (PM)"] },
      { day: "Wed", injections: ["Semax (AM intranasal)", "Selank (AM intranasal)", "Semax (PM)", "Selank (PM)", "NAD+ (SC)"] },
      { day: "Thu", injections: ["Semax (AM intranasal)", "Selank (AM intranasal)", "Semax (PM)", "Selank (PM)"] },
      { day: "Fri", injections: ["Semax (AM intranasal)", "Selank (AM intranasal)", "Semax (PM)", "Selank (PM)", "NAD+ (SC)"] },
      { day: "Sat", injections: ["Semax (AM intranasal)", "Selank (AM intranasal)"] },
      { day: "Sun", injections: ["Semax (AM intranasal)", "Selank (AM intranasal)"] },
    ],
    references: [
      "Dolotov OV et al. (2006). Semax, an analog of ACTH(4-7) with neuroprotective properties — BDNF upregulation.",
      "Kozlovskaya MM et al. (2002). Selank modulation of anxiety and memory.",
      "Semenova TP et al. (2010). Influence of Selank on anxiety in experimental animals.",
    ],
  },
];

// ─── Difficulty badge color ───────────────────────────────────────────────────
function difficultyStyle(d: Stack["difficulty"]) {
  if (d === "Beginner")
    return { backgroundColor: "#1a2e1a", color: "#6ecc6e", border: "1px solid #2d4d2d" };
  if (d === "Intermediate")
    return { backgroundColor: "#2a2200", color: "#d4af37", border: "1px solid #4a3c00" };
  return { backgroundColor: "#2a1a1a", color: "#e07070", border: "1px solid #4d2d2d" };
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function StackBuilder() {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [showSchedule, setShowSchedule] = useState(false);

  const active = STACKS.find((s) => s.id === selectedGoal) ?? null;

  const totalMonthly = active
    ? active.compounds.reduce((sum, c) => sum + c.price * c.monthlyVials, 0)
    : 0;

  return (
    <div style={{ backgroundColor: "#FFFFF3", minHeight: "100vh" }}>
      {/* Hero */}
      <section className="relative px-6 pt-32 pb-14 md:pt-40 md:pb-16" style={{ backgroundColor: "#010101" }}>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            variant="dark"
            className="mb-8"
            items={[
              { label: "Home", href: "/" },
              { label: "Tools", href: "/tools" },
              { label: "Stack Builder" },
            ]}
          />
          <p className="text-xs uppercase tracking-widest mb-5" style={{ color: "#C9DD69" }}>
            Research Tools
          </p>
          <h1
            className="text-4xl md:text-5xl mb-5 tracking-tight"
            style={{ fontWeight: 200, color: "#FFFFF3", lineHeight: 1.05 }}
          >
            Stack Builder
          </h1>
          <p className="text-base md:text-lg max-w-xl" style={{ fontWeight: 300, color: "#A0A0A0", lineHeight: 1.65 }}>
            Select a research objective. Get a synergistic compound stack with mechanistic rationale, weekly schedule, and estimated monthly supply cost.
          </p>
          <p className="text-xs mt-4 uppercase tracking-widest" style={{ color: "#555" }}>
            For Research Use Only — Not for Human Administration
          </p>
        </div>
      </section>

      {/* Goal Selector */}
      <section className="px-6 py-12 md:py-16" style={{ backgroundColor: "#060606" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-6" style={{ color: "#A0A0A0" }}>
            Step 1 — Select Research Goal
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {STACKS.map((stack) => {
              const isActive = selectedGoal === stack.id;
              return (
                <button
                  key={stack.id}
                  onClick={() => {
                    setSelectedGoal(stack.id);
                    setShowSchedule(false);
                  }}
                  className="rounded-sm px-4 py-5 text-left transition-all"
                  style={{
                    backgroundColor: isActive ? "#1a1a00" : "#111110",
                    border: isActive ? "1px solid #d4af37" : "1px solid #2A2A28",
                    color: isActive ? "#d4af37" : "#A0A0A0",
                    cursor: "pointer",
                  }}
                >
                  <div className="text-lg mb-2" style={{ color: isActive ? "#d4af37" : "#555" }}>
                    ◈
                  </div>
                  <div className="text-sm font-medium leading-snug">{stack.label}</div>
                  <div className="text-xs mt-1.5 opacity-60">{stack.headline}</div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Result panel */}
      {active && (
        <section className="px-6 py-14 md:py-20">
          <div className="max-w-4xl mx-auto space-y-10">

            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#A4B08A" }}>
                  Recommended Stack
                </p>
                <h2 className="text-3xl md:text-4xl tracking-tight" style={{ fontWeight: 200, color: "#000" }}>
                  {active.label}
                </h2>
                <p className="text-xl mt-1" style={{ color: "#555", fontWeight: 300 }}>
                  {active.headline}
                </p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span
                  className="text-xs px-3 py-1.5 rounded-sm"
                  style={difficultyStyle(active.difficulty)}
                >
                  {active.difficulty}
                </span>
                <span className="text-xs" style={{ color: "#888" }}>{active.timeline}</span>
              </div>
            </div>

            {/* Compounds */}
            <div>
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#A4B08A" }}>
                Compounds
              </p>
              <div className="space-y-4">
                {active.compounds.map((c, i) => (
                  <div
                    key={c.slug}
                    className="rounded-sm p-6"
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #ECEAE4",
                    }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span
                            className="text-xs font-mono w-5 h-5 flex items-center justify-center rounded-full"
                            style={{ backgroundColor: "#A4B08A22", color: "#7A8A60", border: "1px solid #A4B08A44" }}
                          >
                            {i + 1}
                          </span>
                          <Link
                            href={`/products/${c.slug}`}
                            className="text-base font-medium hover:opacity-70 transition-opacity"
                            style={{ color: "#000", textDecoration: "none" }}
                          >
                            {c.name} →
                          </Link>
                        </div>
                        <p className="text-sm ml-8" style={{ color: "#666" }}>{c.role}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium" style={{ color: "#000" }}>
                          {c.dose}
                        </p>
                        <p className="text-xs" style={{ color: "#888" }}>{c.frequency}</p>
                      </div>
                    </div>
                    <div
                      className="rounded-sm px-4 py-3 ml-8 text-xs leading-relaxed"
                      style={{ backgroundColor: "#F7F5EF", color: "#555" }}
                    >
                      <span className="font-medium" style={{ color: "#333" }}>Mechanism: </span>
                      {c.mechanism}
                    </div>
                    <div className="flex items-center justify-between mt-3 ml-8">
                      <p className="text-xs" style={{ color: "#888" }}>
                        ~{c.monthlyVials} vial{c.monthlyVials > 1 ? "s" : ""}/month × ${c.price} ({c.vialSize})
                      </p>
                      <Link
                        href={`/products/${c.slug}`}
                        className="text-xs px-3 py-1.5 rounded-sm transition-all hover:opacity-80"
                        style={{ backgroundColor: "#010101", color: "#FFFFF3", textDecoration: "none" }}
                      >
                        View Product
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly cost estimate */}
            <div
              className="rounded-sm p-6 flex items-center justify-between"
              style={{ backgroundColor: "#1a1a00", border: "1px solid #3a3300" }}
            >
              <div>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#d4af37" }}>
                  Estimated Monthly Supply Cost
                </p>
                <p className="text-xs" style={{ color: "#888" }}>
                  Based on standard research quantities. Actual usage varies by protocol.
                </p>
              </div>
              <p className="text-3xl font-light" style={{ color: "#d4af37" }}>
                ${totalMonthly}
              </p>
            </div>

            {/* Rationale */}
            <div
              className="rounded-sm p-7"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid #ECEAE4" }}
            >
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#A4B08A" }}>
                Why This Stack
              </p>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "#444" }}>
                {active.rationale}
              </p>
              <div
                className="rounded-sm px-5 py-4"
                style={{ backgroundColor: "#F7F5EF", borderLeft: "3px solid #A4B08A" }}
              >
                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#7A8A60" }}>
                  Synergy Mechanism
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#444" }}>
                  {active.synergy}
                </p>
              </div>
            </div>

            {/* Weekly Schedule toggle */}
            <div>
              <button
                onClick={() => setShowSchedule((prev) => !prev)}
                className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70 mb-4"
                style={{ background: "none", border: "none", cursor: "pointer", color: "#000", padding: 0 }}
              >
                <span
                  className="text-xs transition-transform"
                  style={{ display: "inline-block", transform: showSchedule ? "rotate(90deg)" : "rotate(0deg)" }}
                >
                  ▶
                </span>
                {showSchedule ? "Hide" : "Show"} Sample Weekly Schedule
              </button>

              {showSchedule && (
                <div
                  className="rounded-sm overflow-hidden"
                  style={{ border: "1px solid #ECEAE4" }}
                >
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ backgroundColor: "#010101" }}>
                        <th className="py-3 px-4 text-left text-xs uppercase tracking-widest" style={{ color: "#A0A0A0", fontWeight: 500, width: "80px" }}>
                          Day
                        </th>
                        <th className="py-3 px-4 text-left text-xs uppercase tracking-widest" style={{ color: "#A0A0A0", fontWeight: 500 }}>
                          Injections / Administrations
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {active.schedule.map((row, i) => (
                        <tr
                          key={row.day}
                          style={{ backgroundColor: i % 2 === 0 ? "#FFFFFF" : "#FAFAF5", borderBottom: "1px solid #F0EEE8" }}
                        >
                          <td className="py-3 px-4 font-medium text-xs" style={{ color: "#333" }}>
                            {row.day}
                          </td>
                          <td className="py-3 px-4">
                            {row.injections.length === 0 ? (
                              <span style={{ color: "#BBB" }}>Rest / No administration</span>
                            ) : (
                              <div className="flex flex-wrap gap-2">
                                {row.injections.map((inj) => (
                                  <span
                                    key={inj}
                                    className="text-xs px-2 py-1 rounded-sm"
                                    style={{ backgroundColor: "#A4B08A22", color: "#5a6a40", border: "1px solid #A4B08A44" }}
                                  >
                                    {inj}
                                  </span>
                                ))}
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* References */}
            <div>
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#888" }}>
                Key References
              </p>
              <ul className="space-y-2">
                {active.references.map((ref) => (
                  <li key={ref} className="text-xs pl-3" style={{ color: "#666", borderLeft: "2px solid #DDDDD0" }}>
                    {ref}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div
              className="rounded-sm p-8"
              style={{ backgroundColor: "#010101", border: "1px solid #2A2A28" }}
            >
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#C9DD69" }}>
                Order This Stack
              </p>
              <h3 className="text-xl mb-3 tracking-tight" style={{ fontWeight: 200, color: "#FFFFF3" }}>
                All compounds available with COA-verified purity.
              </h3>
              <p className="text-sm mb-6" style={{ color: "#A0A0A0" }}>
                Every lot independently tested by third-party laboratories. HPLC purity certificates ship with each order.
              </p>
              <div className="flex flex-wrap gap-3">
                {active.compounds.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/products/${c.slug}`}
                    className="text-sm px-4 py-2 rounded-sm transition-all hover:opacity-80"
                    style={{ backgroundColor: "#1a1a00", color: "#d4af37", border: "1px solid #3a3300", textDecoration: "none" }}
                  >
                    {c.name}
                  </Link>
                ))}
                <Link
                  href="/products"
                  className="text-sm px-4 py-2 rounded-sm transition-all hover:opacity-80"
                  style={{ backgroundColor: "#FFFFF3", color: "#000", border: "1px solid #FFFFF3", textDecoration: "none" }}
                >
                  Browse All Products →
                </Link>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-center" style={{ color: "#AAA", lineHeight: 1.7 }}>
              All compounds sold for research use only. Not intended for human or veterinary use.
              Doses and schedules are from published preclinical literature and are provided for
              research reference only. Consult applicable institutional protocols for all research
              involving animal or in vitro models.
            </p>

          </div>
        </section>
      )}

      {/* Empty state */}
      {!active && (
        <section className="px-6 py-24 text-center">
          <div className="max-w-md mx-auto">
            <div className="text-4xl mb-5" style={{ color: "#DDD" }}>◈</div>
            <p className="text-lg mb-3 tracking-tight" style={{ fontWeight: 300, color: "#333" }}>
              Select a research goal above
            </p>
            <p className="text-sm" style={{ color: "#888" }}>
              Choose from Recovery, GH Axis, Metabolic, Longevity, or Cognitive to see the recommended stack.
            </p>
          </div>
        </section>
      )}

      {/* Bottom nav */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto border-t pt-10" style={{ borderColor: "#ECEAE4" }}>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/tools" style={{ color: "#888", textDecoration: "none" }}>← All Tools</Link>
            <Link href="/tools/reconstitution-calculator" style={{ color: "#888", textDecoration: "none" }}>Reconstitution Calculator</Link>
            <Link href="/tools/dosing-frequency-planner" style={{ color: "#888", textDecoration: "none" }}>Dosing Planner</Link>
            <Link href="/tools/half-life-calculator" style={{ color: "#888", textDecoration: "none" }}>Half-Life Calculator</Link>
            <Link href="/compounds" style={{ color: "#888", textDecoration: "none" }}>Compound Index</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
