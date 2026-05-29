"use client";

import { useState } from "react";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

type Option = {
  id: string;
  label: string;
  emoji?: string;
  tags: string[];
};

type Question = {
  id: string;
  step: number;
  question: string;
  subtext?: string;
  options: Option[];
};

type ProductRec = {
  slug: string;
  name: string;
  category: string;
  price: number;
  size: string;
  tagline: string;
  why: string;
  tags: string[];
};

// ─── Product Catalog (subset relevant for recommendations) ────────────────────

const PRODUCTS: ProductRec[] = [
  { slug: "bpc-157", name: "BPC-157", category: "Recovery & Healing", price: 120, size: "10mg", tagline: "Body Protection Compound", why: "The most studied peptide for tissue repair — angiogenesis, NO pathway, and VEGF receptor activation support the inflammatory-to-proliferative healing transition.", tags: ["recovery", "tendon", "gi", "intermediate", "beginner", "under400"] },
  { slug: "tb-500", name: "TB-500", category: "Recovery & Healing", price: 90, size: "5mg", tagline: "Thymosin Beta-4 Fragment", why: "Actin-sequestering peptide with potent anti-inflammatory and angiogenic properties — ideal complement to BPC-157 for full-phase recovery research.", tags: ["recovery", "tendon", "cardiac", "intermediate", "under400"] },
  { slug: "ghk-cu", name: "GHK-Cu", category: "Anti-Aging", price: 96, size: "50mg", tagline: "Copper Peptide Complex", why: "Activates 4,000+ genes involved in ECM remodeling, Nrf2 antioxidant defense, and collagen synthesis — a longevity and repair compound with deep literature.", tags: ["aging", "recovery", "skincare", "beginner", "under400"] },
  { slug: "wolverine-blend", name: "Wolverine Stack", category: "Recovery & Healing", price: 120, size: "5/5mg blend", tagline: "BPC-157 + TB-500 + GHK-Cu", why: "Pre-formulated recovery triple stack covering all three phases of tissue repair: anti-inflammatory, angiogenic, and ECM remodeling.", tags: ["recovery", "tendon", "cardiac", "intermediate", "under400"] },
  { slug: "cjc-1295-ipamorelin", name: "CJC-1295 / Ipamorelin", category: "Growth Hormone", price: 108, size: "10mg", tagline: "GHRH + GHRP combination", why: "The gold standard GH axis combination in research — GHRH analog + selective GHRP produces 8-12x greater GH pulse amplitude vs either compound alone (Bowers 1998).", tags: ["gh-axis", "muscle", "fat-loss", "intermediate", "under400"] },
  { slug: "ipamorelin", name: "Ipamorelin", category: "Growth Hormone", price: 96, size: "10mg", tagline: "Selective GHRP", why: "The most selective GHRP studied — produces clean GH pulses without cortisol, ACTH, or prolactin elevation seen with less selective secretagogues.", tags: ["gh-axis", "muscle", "beginner", "under400"] },
  { slug: "sermorelin", name: "Sermorelin", category: "Growth Hormone", price: 120, size: "5mg", tagline: "GHRH(1-29) Analog", why: "FDA-approved GHRH analog (Geref) with 11-12 min half-life creating physiologically accurate pulsatile GH stimulation. RCT data: +38% IGF-1, +1.7kg lean mass.", tags: ["gh-axis", "aging", "muscle", "intermediate", "under400"] },
  { slug: "mk-677", name: "MK-677 (Ibutamoren)", category: "Growth Hormone", price: 89, size: "25mg x 30ct", tagline: "Oral GH Secretagogue", why: "Only oral GHSR-1a full agonist — 24h half-life eliminates injection schedule. Nass 2008 2-year RCT: 39.9% IGF-1 increase, 1.1 kg lean mass gain.", tags: ["gh-axis", "muscle", "sleep", "beginner", "under400"] },
  { slug: "semaglutide", name: "Semaglutide", category: "Weight Management", price: 99, size: "5mg", tagline: "GLP-1 Receptor Agonist", why: "STEP 1 trial: −14.9% body weight at 68 weeks. SELECT trial: −20% cardiovascular events. The most validated GLP-1 agonist in the research literature.", tags: ["metabolic", "fat-loss", "cardiac", "intermediate", "under400"] },
  { slug: "tirzepatide", name: "Tirzepatide", category: "Weight Management", price: 180, size: "10mg", tagline: "GLP-1/GIP Dual Agonist", why: "SURMOUNT-1: −20.9% weight loss at 72 weeks — the highest weight reduction in a phase 3 peptide trial. Dual GIP/GLP-1 mechanism improves beta-cell function vs mono-agonists.", tags: ["metabolic", "fat-loss", "over400", "advanced"] },
  { slug: "retatrutide", name: "Retatrutide", category: "Weight Management", price: 300, size: "10mg", tagline: "Triple Receptor Agonist", why: "NEJM 2023 Phase 2: −24.2% body weight at 48 weeks — best-in-class weight loss across 6 dose cohorts. GIP+GLP-1+Glucagon triple agonism adds hepatic fat clearance.", tags: ["metabolic", "fat-loss", "over400", "advanced"] },
  { slug: "nad-plus", name: "NAD+", category: "Anti-Aging", price: 144, size: "100mg", tagline: "Nicotinamide Adenine Dinucleotide", why: "NAD+ declines 50% from age 20-50. Sirtuin activation, PARP1 DNA repair, and mitochondrial biogenesis via PGC-1alpha make this the foundational longevity coenzyme.", tags: ["aging", "longevity", "cognitive", "energy", "beginner", "under400"] },
  { slug: "epitalon", name: "Epitalon", category: "Anti-Aging", price: 120, size: "10mg", tagline: "Telomere Peptide", why: "Khavinson research: 2.4x telomerase activity increase, 200-500bp telomere elongation in vitro, 12-20% lifespan extension in CBA mice. The most studied telomere peptide.", tags: ["aging", "longevity", "immune", "intermediate", "under400"] },
  { slug: "mots-c", name: "MOTS-c", category: "Anti-Aging", price: 240, size: "10mg", tagline: "Mitochondria-Derived Peptide", why: "Mitochondrial-encoded 16aa peptide. Lee 2015 Cell Metabolism: AMPK activation, GLUT4 nuclear translocation, insulin sensitization in DIO mice. Exercise-mimetic properties.", tags: ["aging", "metabolic", "longevity", "advanced", "over400"] },
  { slug: "ss-31", name: "SS-31 (Elamipretide)", category: "Anti-Aging", price: 144, size: "10mg", tagline: "Cardiolipin-Targeting Peptide", why: "1000x mitochondrial accumulation, cardiolipin protection, 40-50% infarct reduction in cardiac I/R models (Szeto 2008). The premier mitochondrial protection peptide.", tags: ["aging", "cardiac", "longevity", "intermediate", "under400"] },
  { slug: "selank", name: "Selank", category: "Cognitive", price: 60, size: "10mg", tagline: "Anxiolytic Tuftsin Analog", why: "Non-GABAergic anxiolytic. BDNF upregulation + IL-6 immunomodulation without sedation or dependency. Kozlovskaya 2002: matching effect to benzodiazepines without tolerance.", tags: ["cognitive", "stress", "immune", "beginner", "under400"] },
  { slug: "semax", name: "Semax", category: "Cognitive", price: 84, size: "5mg", tagline: "ACTH(4-7)PGP Analog", why: "ACTH fragment without cortisol activation. BDNF+VEGF upregulation (Dolotov 2006). Agapova 2007: VEGF angiogenesis in ischemia models. Kaplan 1996 MCI trial data.", tags: ["cognitive", "neuro", "advanced", "under400"] },
  { slug: "pt-141", name: "PT-141 (Bremelanotide)", category: "Wellness", price: 120, size: "10mg", tagline: "Melanocortin Receptor Agonist", why: "MC3R/MC4R agonist activating hypothalamic oxytocinergic neurons. RECONNECT Phase 3 (Kingsberg 2019) FDA-approved for female sexual dysfunction. Unique CNS mechanism.", tags: ["hormonal", "intermediate", "under400"] },
  { slug: "kisspeptin", name: "Kisspeptin-10", category: "Wellness", price: 84, size: "5mg", tagline: "GnRH Pulse Generator", why: "ARC kisspeptin neurons are the GnRH pulse generator — LH pulse frequency master regulator. Dhillo 2005 JCEM: kisspeptin-10 IV LH pulse data. Reproductive axis research.", tags: ["hormonal", "fertility", "intermediate", "under400"] },
  { slug: "oxytocin", name: "Oxytocin", category: "Wellness", price: 72, size: "5mg", tagline: "Neuropeptide Hormone", why: "PVN/SON synthesis, posterior pituitary release. OTR Gq/PKC signaling. HPA axis dampening, social behavior circuits, pain modulation. Intranasal bioavailability research.", tags: ["cognitive", "stress", "hormonal", "beginner", "under400"] },
  { slug: "thymosin-alpha-1", name: "Thymosin Alpha-1", category: "Wellness", price: 119, size: "5mg", tagline: "Immune Modulator", why: "TLR2/4/9 signaling, Th1 polarization, NK activation, dendritic cell maturation. HBV/HCV antiviral clinical data. COVID-19 Italy cohort: 11% vs 30% mortality (Zhao 2020 CID).", tags: ["immune", "aging", "intermediate", "under400"] },
  { slug: "dsip", name: "DSIP", category: "Cognitive", price: 144, size: "10mg", tagline: "Delta Sleep-Inducing Peptide", why: "EEG delta wave promotion, SWS increase, HPA axis modulation (ACTH/cortisol blunting). Monnier 1977 discovery. Antioxidant + pain modulation properties.", tags: ["sleep", "cognitive", "stress", "intermediate", "under400"] },
];

// ─── Quiz Questions ───────────────────────────────────────────────────────────

const QUESTIONS: Question[] = [
  {
    id: "focus",
    step: 1,
    question: "What is your primary research focus?",
    subtext: "Select the area that best describes your research interest.",
    options: [
      { id: "recovery", label: "Tissue Repair & Recovery", emoji: "🔬", tags: ["recovery", "tendon"] },
      { id: "gh-axis", label: "GH Axis & Body Composition", emoji: "📊", tags: ["gh-axis", "muscle"] },
      { id: "metabolic", label: "Metabolic & Weight Research", emoji: "⚗️", tags: ["metabolic", "fat-loss"] },
      { id: "aging", label: "Longevity & Anti-Aging", emoji: "🧬", tags: ["aging", "longevity"] },
      { id: "cognitive", label: "Cognitive & Neuropeptides", emoji: "🧠", tags: ["cognitive", "neuro"] },
      { id: "hormonal", label: "Hormonal & Reproductive", emoji: "🔭", tags: ["hormonal", "fertility"] },
    ],
  },
  {
    id: "subfocus",
    step: 2,
    question: "Which specific area interests you most?",
    subtext: "Help us narrow down your protocol.",
    options: [], // Dynamically populated based on step 1
  },
  {
    id: "experience",
    step: 3,
    question: "What is your research experience level?",
    subtext: "This helps us match protocol complexity to your methodology.",
    options: [
      { id: "beginner", label: "New to peptide research", emoji: "📚", tags: ["beginner"] },
      { id: "intermediate", label: "Some experience — familiar with reconstitution", emoji: "🔬", tags: ["intermediate"] },
      { id: "advanced", label: "Advanced — running multi-compound studies", emoji: "⚗️", tags: ["advanced"] },
    ],
  },
  {
    id: "budget",
    step: 4,
    question: "What is your monthly research budget?",
    subtext: "Per research cycle / monthly supply estimate.",
    options: [
      { id: "under200", label: "Under $200 / month", emoji: "💰", tags: ["under200", "under400"] },
      { id: "200to400", label: "$200 – $400 / month", emoji: "💰", tags: ["under400"] },
      { id: "over400", label: "Over $400 / month", emoji: "💰", tags: ["over400", "under400"] },
    ],
  },
  {
    id: "cycle",
    step: 5,
    question: "Which research cycle length aligns with your protocol?",
    subtext: "Longer cycles produce more reliable outcome data.",
    options: [
      { id: "3month", label: "3-Month Research Cycle", emoji: "📅", tags: ["3month"] },
      { id: "6month", label: "6-Month Research Cycle", emoji: "📆", tags: ["6month"] },
      { id: "flexible", label: "Flexible — not yet decided", emoji: "🔄", tags: ["3month", "6month"] },
    ],
  },
];

// Sub-focus options by primary focus
const SUB_FOCUS_MAP: Record<string, Option[]> = {
  recovery: [
    { id: "tendon", label: "Tendon & Ligament Repair", tags: ["tendon"] },
    { id: "cardiac", label: "Cardiac & Vascular", tags: ["cardiac"] },
    { id: "gi", label: "GI & Gut Mucosal", tags: ["gi"] },
    { id: "wound", label: "Wound Healing & Skin", tags: ["skincare"] },
    { id: "neuro-repair", label: "Neurological Recovery", tags: ["neuro"] },
  ],
  "gh-axis": [
    { id: "muscle", label: "Lean Mass Research", tags: ["muscle"] },
    { id: "fat-loss", label: "Fat Loss & Body Recomp", tags: ["fat-loss"] },
    { id: "sleep", label: "Sleep Architecture", tags: ["sleep"] },
    { id: "igf1", label: "IGF-1 / Growth Factors", tags: ["muscle"] },
  ],
  metabolic: [
    { id: "obesity", label: "Obesity & Fat Tissue Research", tags: ["fat-loss"] },
    { id: "insulin", label: "Insulin Sensitivity", tags: ["metabolic"] },
    { id: "liver", label: "Hepatic / Liver Fat", tags: ["metabolic"] },
    { id: "mitochondrial", label: "Mitochondrial Metabolism", tags: ["metabolic"] },
  ],
  aging: [
    { id: "telomere", label: "Telomere Biology", tags: ["longevity"] },
    { id: "nad-research", label: "NAD+ / Sirtuin Pathway", tags: ["energy"] },
    { id: "mito-aging", label: "Mitochondrial Aging", tags: ["aging"] },
    { id: "immune-aging", label: "Immune Senescence", tags: ["immune"] },
  ],
  cognitive: [
    { id: "anxiety", label: "Anxiety & Stress Models", tags: ["stress"] },
    { id: "memory", label: "Memory & Cognition", tags: ["neuro"] },
    { id: "neuro-protect", label: "Neuroprotection", tags: ["neuro"] },
    { id: "sleep-cog", label: "Sleep & Recovery", tags: ["sleep"] },
  ],
  hormonal: [
    { id: "lh-fsh", label: "LH/FSH Pulse Research", tags: ["fertility"] },
    { id: "sexual-function", label: "Sexual Function Models", tags: ["hormonal"] },
    { id: "stress-axis", label: "HPA Axis & Cortisol", tags: ["stress"] },
    { id: "social", label: "Social Behavior Circuits", tags: ["cognitive"] },
  ],
};

// ─── Scoring Logic ────────────────────────────────────────────────────────────

function scoreProducts(answers: Record<string, string[]>): ProductRec[] {
  const allTags = new Set(Object.values(answers).flat());

  const scored = PRODUCTS.map((p) => {
    let score = 0;
    p.tags.forEach((tag) => {
      if (allTags.has(tag)) score += 2;
    });
    // Bonus: exact focus match
    const focus = answers["focus"]?.[0];
    const subfocus = answers["subfocus"]?.[0];
    if (focus && p.tags.includes(focus)) score += 3;
    if (subfocus && p.tags.includes(subfocus)) score += 2;
    // Budget match
    const budget = answers["budget"]?.[0];
    if (budget === "under200" && p.price <= 100) score += 2;
    if (budget === "200to400" && p.price <= 200) score += 1;
    // Experience match
    const exp = answers["experience"]?.[0];
    if (exp === "beginner" && p.tags.includes("beginner")) score += 2;
    if (exp === "advanced" && p.tags.includes("advanced")) score += 2;
    if (exp === "intermediate") score += 1;
    return { ...p, score };
  });

  return scored
    .filter((p) => p.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function QuizClient() {
  const [currentStep, setCurrentStep] = useState(0); // 0 = intro
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [results, setResults] = useState<ProductRec[] | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalSteps = QUESTIONS.length;

  function getQuestion(index: number): Question {
    const q = QUESTIONS[index];
    if (q.id === "subfocus") {
      const primaryFocus = answers["focus"]?.[0];
      const subOptions = primaryFocus ? SUB_FOCUS_MAP[primaryFocus] ?? [] : [];
      return { ...q, options: subOptions };
    }
    return q;
  }

  function handleStart() {
    setCurrentStep(1);
  }

  function handleSelect(optionId: string) {
    setSelectedOption(optionId);
  }

  function handleNext() {
    if (!selectedOption) return;

    const q = getQuestion(currentStep - 1);
    const option = q.options.find((o) => o.id === selectedOption);
    if (!option) return;

    const newAnswers = { ...answers, [q.id]: option.tags };

    setIsAnimating(true);
    setTimeout(() => {
      setAnswers(newAnswers);
      setSelectedOption(null);

      if (currentStep >= totalSteps) {
        // Compute results
        const recs = scoreProducts(newAnswers);
        setResults(recs);
        setCurrentStep(totalSteps + 1);
      } else {
        setCurrentStep(currentStep + 1);
      }
      setIsAnimating(false);
    }, 200);
  }

  function handleRetake() {
    setCurrentStep(0);
    setAnswers({});
    setSelectedOption(null);
    setResults(null);
  }

  const progress = currentStep > 0 && currentStep <= totalSteps ? (currentStep / totalSteps) * 100 : 0;

  // ── Intro Screen ──
  if (currentStep === 0) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
        {/* Breadcrumb */}
        <div className="max-w-5xl mx-auto px-6 pt-8 w-full">
          <nav className="text-sm text-zinc-500">
            <a href="/" className="hover:text-zinc-300 transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span className="text-zinc-300">Protocol Finder</span>
          </nav>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-6 py-16">
          <div className="max-w-2xl w-full text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 text-[#d4af37] text-xs font-semibold uppercase tracking-widest mb-8">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M6 1l1.2 3.6H11L8.4 6.8l1 3.2L6 8l-3.4 2 1-3.2L1 4.6h3.8z" fill="currentColor"/>
              </svg>
              Protocol Finder
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Find Your Research Protocol
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Answer 5 quick questions about your research focus, experience, and budget. 
              We&apos;ll recommend the compounds that best match your study design.
            </p>

            {/* What to expect */}
            <div className="grid grid-cols-3 gap-4 mb-12 text-left">
              {[
                { num: "5", label: "Questions", sub: "Takes ~60 seconds" },
                { num: "3", label: "Recommendations", sub: "Matched to your answers" },
                { num: "100%", label: "Unbiased", sub: "Algorithm-based scoring" },
              ].map((item) => (
                <div key={item.num} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-[#d4af37] mb-1">{item.num}</div>
                  <div className="text-sm font-medium text-white">{item.label}</div>
                  <div className="text-xs text-zinc-500 mt-0.5">{item.sub}</div>
                </div>
              ))}
            </div>

            <button
              onClick={handleStart}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#d4af37] text-zinc-950 font-semibold text-sm uppercase tracking-widest rounded-lg hover:bg-[#c4a030] transition-colors"
            >
              Start the Quiz
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <p className="text-zinc-600 text-xs mt-6">
              For Research Use Only. All recommendations are for in vitro/preclinical research purposes.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ── Results Screen ──
  if (currentStep === totalSteps + 1 && results) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white">
        <div className="max-w-5xl mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-6">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Your Protocol Is Ready
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Recommended Compounds
            </h1>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Based on your research focus, experience level, and budget — here are the compounds most aligned with your study design.
            </p>
          </div>

          {/* Results Grid */}
          <div className="grid gap-8 md:grid-cols-3 mb-16">
            {results.map((product, i) => (
              <div
                key={product.slug}
                className="relative bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden hover:border-[#d4af37]/40 transition-colors"
              >
                {i === 0 && (
                  <div className="absolute top-4 right-4 px-2 py-1 bg-[#d4af37] text-zinc-950 text-xs font-bold uppercase tracking-wider rounded">
                    Top Pick
                  </div>
                )}
                {/* Product image placeholder */}
                <div className="bg-zinc-800 h-40 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/products/${product.slug}.png`}
                    alt={product.name}
                    className="h-32 object-contain"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <div className="text-zinc-600 text-xs font-mono absolute">{product.slug}</div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="text-xs text-[#d4af37] font-semibold uppercase tracking-widest mb-2">
                    {product.category}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{product.name}</h3>
                  <p className="text-zinc-400 text-xs mb-4">{product.tagline}</p>
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    {product.why}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-2xl font-bold">${product.price}</div>
                      <div className="text-zinc-500 text-xs">{product.size}</div>
                    </div>
                    <Link
                      href={`/products/${product.slug}`}
                      className="px-4 py-2 bg-[#d4af37] text-zinc-950 text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-[#c4a030] transition-colors"
                    >
                      View Product
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Protocol Context */}
          <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 mb-10">
            <h2 className="text-xl font-bold mb-4">Your Protocol Summary</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {Object.entries(answers).map(([key, tags]) => {
                const q = QUESTIONS.find((q) => q.id === key);
                const qLabel = q ? q.question.replace("?", "") : key;
                // Find the matching option
                const question = key === "subfocus"
                  ? { ...QUESTIONS[1], options: SUB_FOCUS_MAP[answers["focus"]?.[0]] ?? [] }
                  : QUESTIONS.find((q) => q.id === key);
                const optionLabel = question?.options.find((o) =>
                  o.tags.some((t) => tags.includes(t))
                )?.label ?? tags.join(", ");
                return (
                  <div key={key}>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">{qLabel}</div>
                    <div className="text-sm font-medium text-white">{optionLabel}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <button
              onClick={handleRetake}
              className="px-6 py-3 border border-white/20 text-zinc-300 text-sm font-medium rounded-lg hover:border-white/40 hover:text-white transition-colors"
            >
              Retake Quiz
            </button>
            <Link
              href="/products"
              className="px-6 py-3 border border-white/20 text-zinc-300 text-sm font-medium rounded-lg hover:border-white/40 hover:text-white transition-colors"
            >
              Browse All Products
            </Link>
            <Link
              href="/tools/stack-builder"
              className="px-6 py-3 bg-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/15 transition-colors"
            >
              Build Full Stack
            </Link>
          </div>

          {/* RUO disclaimer */}
          <p className="text-center text-zinc-600 text-xs mt-12">
            For Research Use Only. Not for human consumption. Recommendations are generated algorithmically 
            based on published research literature and are intended for in vitro / preclinical research purposes only.
          </p>
        </div>
      </div>
    );
  }

  // ── Question Screen ──
  const question = getQuestion(currentStep - 1);

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
      {/* Top bar */}
      <div className="border-b border-white/10">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-zinc-500 hover:text-zinc-300 text-sm transition-colors">
            ← Nexphoria
          </a>
          <div className="text-xs text-zinc-500 font-medium">
            Step {currentStep} of {totalSteps}
          </div>
          <button
            onClick={handleRetake}
            className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
          >
            Start Over
          </button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-zinc-800">
        <div
          className="h-full bg-[#d4af37] transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Question content */}
      <div className={`flex-1 flex flex-col items-center justify-center px-6 py-12 transition-opacity duration-200 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
        <div className="max-w-2xl w-full">
          {/* Step indicator */}
          <div className="text-xs text-[#d4af37] font-semibold uppercase tracking-widest mb-4">
            Question {currentStep}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            {question.question}
          </h2>
          {question.subtext && (
            <p className="text-zinc-400 mb-8">{question.subtext}</p>
          )}

          {/* Options */}
          <div className="grid gap-3 sm:grid-cols-2 mb-10">
            {question.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleSelect(option.id)}
                className={`text-left px-5 py-4 rounded-xl border transition-all ${
                  selectedOption === option.id
                    ? "border-[#d4af37] bg-[#d4af37]/10 text-white"
                    : "border-white/10 bg-white/3 text-zinc-300 hover:border-white/25 hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  {option.emoji && (
                    <span className="text-xl" aria-hidden="true">{option.emoji}</span>
                  )}
                  <span className="font-medium text-sm">{option.label}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={handleNext}
            disabled={!selectedOption}
            className={`w-full py-4 rounded-xl font-semibold text-sm uppercase tracking-widest transition-all ${
              selectedOption
                ? "bg-[#d4af37] text-zinc-950 hover:bg-[#c4a030]"
                : "bg-white/5 text-zinc-600 cursor-not-allowed"
            }`}
          >
            {currentStep === totalSteps ? "See My Recommendations →" : "Continue →"}
          </button>
        </div>
      </div>
    </div>
  );
}
