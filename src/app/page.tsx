"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Shield, FlaskConical, Award, Truck, ArrowRight, ChevronDown,
  Microscope, Atom, Factory, Syringe, Activity, Zap, TrendingDown,
  Sparkles, Brain, Heart, Plus, Minus, Dumbbell, ShoppingBag,
  ShieldCheck, Package, Check
} from "lucide-react";
import { products, type Product } from "@/lib/products";
import { bundles, getBundleProducts } from "@/lib/bundles";
// ProductVial SVG replaced with img tags for performance
import ProductCard from "@/components/ProductCard";

const fadeUp = {
  hidden: { opacity: 1, y: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

function Counter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let frame = 0;
    const duration = 1800;
    const fps = 60;
    const total = Math.ceil(duration / (1000 / fps));
    const timer = setInterval(() => {
      frame++;
      const progress = frame / total;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.min(Math.round(eased * target * 10) / 10, target));
      if (frame >= total) clearInterval(timer);
    }, 1000 / fps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {prefix}{Number.isInteger(target) ? Math.round(count) : count.toFixed(1)}{suffix}
    </span>
  );
}

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" style={{ color: "var(--gold)" }}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

const faqItems = [
  {
    q: "What purity standard do you require?",
    a: "All compounds are verified at ≥98% HPLC purity with ESI-MS identity confirmation. Certificates of Analysis are available for every production lot.",
  },
  {
    q: "What does lyophilized mean?",
    a: "Lyophilization (freeze-drying) removes moisture from the peptide under vacuum, extending shelf life and maintaining molecular integrity. Reconstitution with bacteriostatic water is required before use.",
  },
  {
    q: "Is a prescription required?",
    a: "Research-grade compounds do not require a prescription. For our Clinical tier — physician-guided compounded peptides — a telehealth consultation and valid prescription are required.",
  },
  {
    q: "How do I know what I receive is authentic?",
    a: "Each lot is tested by an independent third-party laboratory (Janoshik Analytical or equivalent). Your COA ships with every order. Results are verifiable by lot number.",
  },
];

function FAQItem({ item, index }: { item: typeof faqItems[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={index * 0.05}
      className="border-b last:border-0"
      style={{ borderColor: "#D8D4CC" }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="text-sm font-medium leading-snug" style={{ color: "#010101" }}>
          {item.q}
        </span>
        <ChevronDown
          className="w-4 h-4 flex-shrink-0 transition-transform duration-300"
          style={{ color: "#C9A24B", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p className="pb-5 text-sm leading-relaxed" style={{ color: "#5A5A58" }}>
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Curated product slugs for gender sections
const FOR_HIM_SLUGS = ["bpc-157", "tb-500", "cjc-1295-ipamorelin", "ipamorelin", "mk-677", "sermorelin"];
const FOR_HER_SLUGS = ["semaglutide", "tirzepatide", "ghk-cu", "epitalon", "pt-141", "nad-plus"];

// Goal → product slugs for stack builder
const GOAL_PRODUCTS: Record<string, string[]> = {
  Recovery:        ["bpc-157", "tb-500", "ghk-cu"],
  Performance:     ["cjc-1295-ipamorelin", "ipamorelin", "mk-677"],
  "Weight Loss":   ["semaglutide", "tirzepatide", "aod-9604"],
  "Anti-Aging":    ["ghk-cu", "epitalon", "nad-plus"],
  "Brain & Focus": ["selank", "semax", "nad-plus"],
  Wellness:        ["nad-plus", "pt-141", "thymosin-alpha-1"],
};

const GOAL_CARDS_CONFIG = [
  { goal: "Recovery",     icon: Activity,     color: "#4A9B8E", desc: "Tissue repair & joint healing" },
  { goal: "Performance",  icon: Dumbbell,     color: "#C9A24B", desc: "Lean mass & GH optimization" },
  { goal: "Weight Loss",  icon: TrendingDown, color: "#EF4444", desc: "GLP-1 & metabolism support" },
  { goal: "Anti-Aging",   icon: Sparkles,     color: "#8B5CF6", desc: "Skin, longevity & cellular health" },
  { goal: "Brain & Focus", icon: Brain,       color: "#3B82F6", desc: "Cognitive & cellular research compounds" },
  { goal: "Wellness",     icon: Heart,        color: "#22C55E", desc: "Immunity, libido & vitality" },
] as const;

const shopByGoal = [
  { icon: Activity, name: "Recovery", sub: "BPC-157, TB-500, GHK-Cu", color: "#4A9B8E", href: "/products?cat=Recovery+%26+Healing" },
  { icon: Zap,      name: "Performance", sub: "CJC-1295, Ipamorelin, MK-677", color: "#C9A24B", href: "/products?cat=Growth+Hormone" },
  { icon: TrendingDown, name: "Weight Loss", sub: "Semaglutide, Tirzepatide, Retatrutide", color: "#EF4444", href: "/products?cat=Weight+Management" },
  { icon: Sparkles, name: "Anti-Aging", sub: "GHK-Cu, Epitalon, NAD+", color: "#8B5CF6", href: "/products?cat=Anti-Aging" },
  { icon: Brain,    name: "Brain & Focus", sub: "Selank, Semax, NAD+", color: "#3B82F6", href: "/products?cat=Cognitive" },
  { icon: Heart,    name: "Wellness", sub: "NAD+, PT-141, Thymosin α-1", color: "#22C55E", href: "/products?cat=Wellness" },
];

const featuredProducts = products.slice(0, 8);
const forHimProducts = FOR_HIM_SLUGS.map(s => products.find(p => p.slug === s)).filter(Boolean) as Product[];
const forHerProducts = FOR_HER_SLUGS.map(s => products.find(p => p.slug === s)).filter(Boolean) as Product[];

function HomeProductCard({ product, i }: { product: Product; i: number }) {
  return (
    <motion.div
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.06}
    >
      <ProductCard
        product={product}
        showAddToCart={true}
      />
    </motion.div>
  );
}

export default function HomePage() {
  const [genderTab, setGenderTab] = useState<"him" | "her">("him");
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [stackItems, setStackItems] = useState<Record<string, { qty: number; dosage: string }>>({});

  const toggleGoal = (goal: string) => {
    setSelectedGoals(prev =>
      prev.includes(goal) ? prev.filter(g => g !== goal) : [...prev, goal]
    );
  };

  const recommendedSlugs = [...new Set(selectedGoals.flatMap(g => GOAL_PRODUCTS[g] ?? []))];
  const recommendedProducts = recommendedSlugs.map(s => products.find(p => p.slug === s)).filter(Boolean) as Product[];

  const addToStack = (product: Product) => {
    setStackItems(prev => ({
      ...prev,
      [product.slug]: prev[product.slug] ?? { qty: 1, dosage: product.dosages?.[0]?.size ?? product.size },
    }));
  };
  const removeFromStack = (slug: string) => {
    setStackItems(prev => { const n = { ...prev }; delete n[slug]; return n; });
  };
  const updateQty = (slug: string, delta: number) => {
    setStackItems(prev => {
      const item = prev[slug];
      if (!item) return prev;
      const newQty = Math.max(1, item.qty + delta);
      return { ...prev, [slug]: { ...item, qty: newQty } };
    });
  };
  const updateDosage = (slug: string, dosage: string) => {
    setStackItems(prev => ({ ...prev, [slug]: { ...prev[slug], dosage } }));
  };

  const stackEntries = Object.entries(stackItems);
  const stackSubtotal = stackEntries.reduce((sum, [slug, item]) => {
    const p = products.find(x => x.slug === slug);
    if (!p) return sum;
    const d = p.dosages?.find(x => x.size === item.dosage);
    return sum + (d ? d.price : p.price) * item.qty;
  }, 0);
  const stackFinalTotal = stackSubtotal;

  const genderProducts = genderTab === "him" ? forHimProducts : forHerProducts;

  return (
    <div className="bg-cream">

      {/* ========== HERO — Cream Editorial ========== */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: "90vh", backgroundColor: "#EAE7E3" }}>
        <div className="container-nex relative z-10 w-full py-24 md:py-32 pt-36 md:pt-40">
          <div className="grid lg:grid-cols-[55fr_45fr] gap-10 xl:gap-16 items-center">

            {/* Left column */}
            <div>
              <div className="mb-5">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: "#C9A24B" }}>
                  Research-Grade Compounds
                </span>
              </div>
              <h1
                className="font-bold leading-[1.05] tracking-tight mb-7"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(3rem, 6vw, 5.25rem)",
                  color: "#010101",
                }}
              >
                The Source.
              </h1>
              <p
                className="text-base md:text-lg max-w-lg mb-10 leading-relaxed"
                style={{ color: "#7F7F7D" }}
              >
                From research-grade compounds to physician-guided therapy. Every batch third-party tested. Every order ships with COA.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/products" className="btn-acid">
                  Explore Research Catalog <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/clinical" className="btn-outline-gold">
                  Clinical Programs
                </Link>
              </div>
            </div>

            {/* Right column — Real brand product photo */}
            <div
              className="relative hidden lg:block overflow-hidden rounded-2xl"
              style={{ aspectRatio: "4/5" }}
            >
              <Image
                src="/brand/boxes-cascade.jpg"
                alt="Nexphoria product line"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
                quality={95}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== TRUST BAR ========== */}
      <section style={{ backgroundColor: "#F5F3F0", borderTop: "1px solid #D8D4CC", borderBottom: "1px solid #D8D4CC" }}>
        <div className="py-5 overflow-hidden">
          <div className="container-nex">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center">
              {[
                "99.7%+ Avg Purity",
                "Janoshik COA Every Order",
                "cGMP Manufacturing",
                "Same-Day Dispatch",
                "8-Point Purity Protocol"
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.16em]"
                  style={{ color: "#5A5A58" }}>
                  {i > 0 && <span className="hidden sm:inline" style={{ color: "#8A8075" }}>|</span>}
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== SHOP BY GOAL ========== */}
      <section className="relative py-24 md:py-28 overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container-nex relative z-10">
          <div className="mb-14">
            <span className="eyebrow mb-4 block">Browse Compounds</span>
            <h2 className="font-bold tracking-tight max-w-xl"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#010101" }}>
              Find Your{" "}
              <em className="italic" style={{ color: "#C9A24B" }}>Protocol</em>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {shopByGoal.map((goal, i) => {
              const Icon = goal.icon;
              return (
                <div key={goal.name}>
                  <Link href={goal.href}
                    className="group block p-7 border overflow-hidden transition-all duration-300 relative"
                    style={{ borderColor: "#D8D4CC", backgroundColor: "#F5F3F0", borderRadius: "10px" }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = `${goal.color}55`;
                      el.style.boxShadow = `0 0 32px ${goal.color}14`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "#D8D4CC";
                      el.style.boxShadow = "";
                    }}
                  >
                    <div className="relative z-10">
                      <div className="w-11 h-11 rounded-full flex items-center justify-center mb-5"
                        style={{ backgroundColor: `${goal.color}18`, border: `1px solid ${goal.color}30` }}>
                        <Icon className="w-5 h-5" strokeWidth={1.5} style={{ color: goal.color }} />
                      </div>
                      <h3 className="text-lg font-bold mb-2"
                        style={{ fontFamily: "var(--font-display)", color: "#010101" }}>
                        {goal.name}
                      </h3>
                      <p className="text-xs mb-4 leading-relaxed" style={{ color: "#5A5A58" }}>
                        {goal.sub}
                      </p>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] flex items-center gap-1.5"
                        style={{ color: goal.color }}>
                        Explore <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== FOR HIM / FOR HER ========== */}
      <section className="py-24 md:py-32 bg-cream-panel">
        <div className="container-nex">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-12">
            <span className="eyebrow mb-4 block">Curated For You</span>
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <h2 className="font-bold tracking-tight text-primary"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                Tailored{" "}
                <em className="italic" style={{ color: "#C9A24B" }}>Stacks</em>
              </h2>
              {/* Tab buttons */}
              <div className="flex gap-1 p-1 bg-cream-card rounded-lg">
                <button
                  onClick={() => setGenderTab("him")}
                  className="px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] transition-all rounded"
                  style={{
                    backgroundColor: genderTab === "him" ? "var(--acid-green)" : "transparent",
                    color: genderTab === "him" ? "var(--dark-bg)" : "var(--text-secondary)",
                  }}
                >
                  For Him
                </button>
                <button
                  onClick={() => setGenderTab("her")}
                  className="px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] transition-all rounded"
                  style={{
                    backgroundColor: genderTab === "her" ? "var(--acid-green)" : "transparent",
                    color: genderTab === "her" ? "var(--dark-bg)" : "var(--text-secondary)",
                  }}
                >
                  For Her
                </button>
              </div>
            </div>

            {/* Messaging line */}
            <AnimatePresence mode="wait">
              <motion.p key={genderTab}
                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="mt-4 text-sm max-w-xl leading-relaxed text-secondary">
                {genderTab === "him"
                  ? "Optimized for recovery, lean mass, and performance. Protocols focused on tissue repair, GH optimization, and endurance."
                  : "Formulated for weight management, skin rejuvenation, anti-aging, and vitality. Evidence-backed compounds for women's health."}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div key={genderTab}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {genderProducts.map((product, i) => (
                <HomeProductCard key={product.slug} product={product} i={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mt-10 text-center">
            <Link href={genderTab === "him" ? "/products?filter=him" : "/products?filter=her"} className="btn-outline-gold">
              View All {genderTab === "him" ? "For Him" : "For Her"} Compounds <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ========== FEATURED PRODUCTS ========== */}
      <section className="py-24 md:py-32 border-t border-dark-border bg-cream">
        <div className="container-nex">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="flex items-end justify-between mb-14 gap-4">
            <div>
              <span className="eyebrow mb-4 block">Our Catalogue</span>
              <h2 className="font-bold tracking-tight text-primary"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                Featured <em className="italic" style={{ color: "#C9A24B" }}>Compounds</em>
              </h2>
            </div>
            <Link href="/products"
              className="hidden sm:flex items-center gap-2 text-sm font-medium transition-colors whitespace-nowrap text-secondary"
              style={{ color: "rgba(247,244,238,0.8)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#C9A24B"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(247,244,238,0.8)"; }}>
              View All 20 Compounds <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredProducts.map((product, i) => (
              <HomeProductCard key={product.slug} product={product} i={i} />
            ))}
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mt-10 text-center">
            <Link href="/products" className="btn-outline-gold">
              View All 20 Compounds <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ========== DUAL-TIER MODEL ========== */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#F5F3F0" }}>
        <div className="container-nex">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-14 text-center max-w-2xl mx-auto">
            <span className="eyebrow mb-4 block">Two Pathways</span>
            <h2 className="font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#010101" }}>
              Research or{" "}
              <em className="italic" style={{ color: "#C9A24B" }}>Clinical</em>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* RESEARCH Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative p-8 border overflow-hidden transition-all duration-300"
              style={{
                borderRadius: "16px",
                borderTop: "3px solid rgba(139, 195, 74, 0.6)",
                borderColor: "rgba(139, 195, 74, 0.3)",
                backgroundColor: "#FFFFFF",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(139, 195, 74, 0.5)";
                el.style.boxShadow = "0 0 40px rgba(139, 195, 74, 0.12)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(139, 195, 74, 0.3)";
                el.style.boxShadow = "";
              }}
            >
              <div className="absolute top-6 right-6 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide"
                style={{
                  backgroundColor: "rgba(139, 195, 74, 0.12)",
                  color: "#6B8E23",
                  borderRadius: "6px",
                  border: "1px solid rgba(139, 195, 74, 0.25)"
                }}>
                Research-Grade
              </div>

              <div className="mb-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: "rgba(201,162,75,0.12)", border: "1px solid rgba(201,162,75,0.25)" }}>
                  <FlaskConical className="w-7 h-7" strokeWidth={1.5} style={{ color: "#C9A24B" }} />
                </div>
                <h3 className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-display)", color: "#010101" }}>
                  Research-Grade Compounds
                </h3>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-sm leading-relaxed" style={{ color: "#5A5A58" }}>
                  Lyophilized powder. Third-party tested. For qualified researchers.
                </p>
                <ul className="space-y-2.5">
                  {[
                    "99.7%+ purity verified by HPLC",
                    "COA with every order",
                    "cGMP manufacturing",
                    "Full reconstitution protocols",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: "#5A5A58" }}>
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#C9A24B" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/products" className="btn-acid w-full justify-center">
                View Catalog <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* CLINICAL Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative p-8 border overflow-hidden transition-all duration-300"
              style={{
                borderRadius: "16px",
                borderTop: "3px solid rgba(201,162,75,0.6)",
                borderColor: "rgba(201,162,75,0.3)",
                backgroundColor: "#FFFFFF",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(201,162,75,0.5)";
                el.style.boxShadow = "0 0 40px rgba(201,162,75,0.12)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(201,162,75,0.3)";
                el.style.boxShadow = "";
              }}
            >
              <div className="absolute top-6 right-6 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide"
                style={{
                  backgroundColor: "rgba(201,162,75,0.15)",
                  color: "#C9A24B",
                  borderRadius: "6px",
                  border: "1px solid rgba(201,162,75,0.25)"
                }}>
                Physician-Guided
              </div>

              <div className="mb-6">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: "rgba(201,162,75,0.12)", border: "1px solid rgba(201,162,75,0.25)" }}>
                  <Syringe className="w-7 h-7" strokeWidth={1.5} style={{ color: "#C9A24B" }} />
                </div>
                <h3 className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-display)", color: "#010101" }}>
                  Physician-Guided Therapy
                </h3>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-sm leading-relaxed" style={{ color: "#5A5A58" }}>
                  Pre-mixed, prescription-grade. Telehealth consultation included. Starting at $149/month.
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Licensed physician oversight",
                    "Ready-to-use formulations",
                    "Monthly telehealth check-ins",
                    "Delivered to your door",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: "#5A5A58" }}>
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#C9A24B" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link href="/clinical" className="btn-outline-gold w-full justify-center">
                Join Waitlist <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== THE SCIENCE ========== */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Poster triptych background */}
        <Image
          src="/brand/poster-triptych.jpg"
          alt="The Science - Research Methodology"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 z-10" style={{
          background: "rgba(0,0,0,0.75)"
        }} />
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none" style={{
          backgroundImage: "url(/brand/cell-pattern-1.png)",
          backgroundSize: "400px 400px",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
          opacity: 0.05
        }} />

        <div className="container-nex relative z-20">
          <div className="max-w-3xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <span className="eyebrow mb-5 block" style={{ color: "#C9A24B" }}>Research Methodology</span>
              <h2 className="font-bold tracking-tight mb-6 text-primary"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  color: "#FDFCF8"
                }}>
                The Mechanism{" "}
                <em className="italic" style={{ color: "#C9A24B" }}>Matters</em>
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-lg leading-relaxed" style={{ color: "rgba(253,252,248,0.8)" }}>
                  We document the biochemistry behind every compound we carry. Receptor binding, half-life, metabolic pathway. No marketing claims without published research.
                </p>
              </div>
              <div className="flex gap-3">
                <Link href="/science" className="btn-outline-gold">
                  Our Testing Methods <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/products" className="btn-acid">
                  Browse Catalog
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== BUILD YOUR STACK ========== */}
      <section id="stack-builder" className="py-24 md:py-32" style={{ backgroundColor: "#F5F3F0" }}>
        <div className="container-nex">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-12">
            <span className="eyebrow mb-4 block">Interactive Configurator</span>
            <h2 className="font-bold tracking-tight mb-3"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#010101" }}>
              Build Your{" "}
              <em className="italic" style={{ color: "#C9A24B" }}>Stack</em>
            </h2>
            <p className="text-sm max-w-lg leading-relaxed" style={{ color: "#5A5A58" }}>
              Select your goals — we&apos;ll surface the right compounds. Add to your stack and review your order summary.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-[3fr_2fr] gap-8 items-start">

            {/* ---- Left: Goal cards + recommendations ---- */}
            <div>
              {/* Goal cards 3×2 */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
                className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
                {GOAL_CARDS_CONFIG.map((gc) => {
                  const Icon = gc.icon;
                  const active = selectedGoals.includes(gc.goal);
                  return (
                    <button
                      key={gc.goal}
                      onClick={() => toggleGoal(gc.goal)}
                      className="relative text-left p-5 border transition-all duration-200 group"
                      style={{
                        borderRadius: "10px",
                        borderColor: active ? gc.color : "#D8D4CC",
                        backgroundColor: active ? `${gc.color}14` : "#FFFFFF",
                        boxShadow: active ? `0 0 24px ${gc.color}18` : "none",
                      }}
                    >
                      {active && (
                        <div className="absolute top-3 right-3 flex items-center justify-center w-5 h-5 rounded-full"
                          style={{ backgroundColor: gc.color }}>
                          <Check className="w-3 h-3" style={{ color: "#000" }} />
                        </div>
                      )}
                      <div className="w-9 h-9 rounded-full flex items-center justify-center mb-3"
                        style={{ backgroundColor: `${gc.color}18`, border: `1px solid ${gc.color}30` }}>
                        <Icon className="w-4 h-4" strokeWidth={1.5} style={{ color: gc.color }} />
                      </div>
                      <div className="text-sm font-semibold mb-1 leading-tight"
                        style={{ fontFamily: "var(--font-display)", color: active ? "#010101" : "#3A3A3A" }}>
                        {gc.goal}
                      </div>
                      <div className="text-[10px] leading-snug" style={{ color: "#5A5A58" }}>{gc.desc}</div>
                    </button>
                  );
                })}
              </motion.div>

              {/* Recommended products */}
              <AnimatePresence>
                {recommendedProducts.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="mb-5">
                      <span className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: "#5A5A58" }}>
                        Recommended for your goals
                      </span>
                    </div>
                    <div className="space-y-3">
                      <AnimatePresence>
                        {recommendedProducts.map((product, i) => {
                          const inStack = !!stackItems[product.slug];
                          const item = stackItems[product.slug];
                          const currentDosage = item?.dosage ?? product.dosages?.[0]?.size ?? product.size;
                          const currentPrice = product.dosages?.find(d => d.size === currentDosage)?.price ?? product.price;
                          return (
                            <motion.div key={product.slug}
                              initial={{ opacity: 0, x: -12 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 12 }}
                              transition={{ duration: 0.3, delay: i * 0.04 }}
                              className="flex items-center gap-4 p-4 border"
                              style={{
                                borderRadius: "10px",
                                borderColor: inStack ? `${product.accentColor}40` : "#D8D4CC",
                                backgroundColor: inStack ? `${product.accentColor}08` : "#FFFFFF",
                              }}
                            >
                              {/* Product initial letter */}
                              <div style={{
                                width: "40px", height: "64px", flexShrink: 0,
                                display: "flex", alignItems: "center", justifyContent: "center",
                                backgroundColor: `${product.accentColor}12`,
                                borderRadius: "6px",
                                border: `1px solid ${product.accentColor}30`
                              }}>
                                <span style={{
                                  fontSize: "1.5rem",
                                  fontWeight: "bold",
                                  fontFamily: "var(--font-display)",
                                  color: product.accentColor,
                                  opacity: 0.9
                                }}>
                                  {product.name.charAt(0)}
                                </span>
                              </div>

                              {/* Info */}
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-semibold mb-0.5" style={{ color: "#010101" }}>{product.name}</div>
                                <div className="text-xs mb-2" style={{ color: "#5A5A58" }}>{product.category}</div>

                                {/* Dosage selector */}
                                {product.dosages && product.dosages.length > 1 ? (
                                  <select
                                    value={currentDosage}
                                    onChange={(e) => inStack ? updateDosage(product.slug, e.target.value) : undefined}
                                    className="text-[10px] font-medium px-2 py-1 border"
                                    style={{
                                      borderRadius: "4px",
                                      borderColor: "#D8D4CC",
                                      backgroundColor: "#FFFFFF",
                                      color: "#3A3A3A",
                                      cursor: inStack ? "pointer" : "default",
                                    }}
                                  >
                                    {product.dosages.map(d => (
                                      <option key={d.size} value={d.size}>{d.size} — ${d.price}</option>
                                    ))}
                                  </select>
                                ) : (
                                  <span className="text-[10px]" style={{ color: "#5A5A58" }}>{product.size}</span>
                                )}
                              </div>

                              {/* Price + action */}
                              <div className="text-right flex-shrink-0">
                                <div className="text-base font-bold mb-2"
                                  style={{ fontFamily: "var(--font-display)", color: "#010101" }}>
                                  ${currentPrice}
                                </div>

                                {inStack ? (
                                  <div className="flex flex-col items-end gap-1.5">
                                    {/* Qty controls */}
                                    <div className="flex items-center gap-1">
                                      <button onClick={() => updateQty(product.slug, -1)}
                                        className="w-6 h-6 flex items-center justify-center border transition-colors"
                                        style={{ borderRadius: "4px", borderColor: "#D8D4CC", color: "#3A3A3A" }}>
                                        <Minus className="w-3 h-3" />
                                      </button>
                                      <span className="text-sm font-semibold w-5 text-center" style={{ color: "#010101" }}>{item.qty}</span>
                                      <button onClick={() => updateQty(product.slug, 1)}
                                        className="w-6 h-6 flex items-center justify-center border transition-colors"
                                        style={{ borderRadius: "4px", borderColor: "#D8D4CC", color: "#3A3A3A" }}>
                                        <Plus className="w-3 h-3" />
                                      </button>
                                    </div>
                                    <button onClick={() => removeFromStack(product.slug)}
                                      className="text-[10px] font-medium uppercase tracking-wide transition-colors"
                                      style={{ color: "#8A8075" }}>
                                      Remove
                                    </button>
                                  </div>
                                ) : (
                                  <button onClick={() => addToStack(product)}
                                    className="text-[10px] font-semibold uppercase tracking-[0.12em] px-3 py-1.5 border transition-all"
                                    style={{
                                      borderRadius: "4px",
                                      borderColor: "var(--acid-green)",
                                      color: "#000",
                                      backgroundColor: "var(--acid-green)",
                                    }}
                                    onMouseEnter={(e) => {
                                      (e.currentTarget as HTMLButtonElement).style.opacity = "0.9";
                                    }}
                                    onMouseLeave={(e) => {
                                      (e.currentTarget as HTMLButtonElement).style.opacity = "1";
                                    }}
                                  >
                                    Add to Order
                                  </button>
                                )}
                              </div>
                            </motion.div>
                          );
                        })}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {recommendedProducts.length === 0 && (
                <div className="py-12 text-center border border-dashed"
                  style={{ borderColor: "#D8D4CC", borderRadius: "10px" }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: "#EAE7E3" }}>
                    <Zap className="w-4 h-4" style={{ color: "#8A8075" }} />
                  </div>
                  <p className="text-sm" style={{ color: "#5A5A58" }}>
                    Select one or more goals above to see recommended compounds.
                  </p>
                </div>
              )}
            </div>

            {/* ---- Right: Sticky order summary ---- */}
            <div className="lg:sticky lg:top-24">
              <div className="border overflow-hidden"
                style={{ borderRadius: "12px", borderColor: "#C9A24B", backgroundColor: "#FFFFFF" }}>
                {/* Header */}
                <div className="px-6 py-5 border-b"
                  style={{ borderColor: "#D8D4CC" }}>
                  <div>
                    <span className="eyebrow block mb-1" style={{ color: "var(--gold)" }}>Your Stack</span>
                    <p className="text-[10px] uppercase tracking-wide" style={{ color: "#8A8075" }}>
                      {stackEntries.length === 0 ? "No items yet" : `${stackEntries.length} compound${stackEntries.length !== 1 ? "s" : ""} selected`}
                    </p>
                  </div>
                </div>

                {stackEntries.length === 0 ? (
                  <div className="px-6 py-12 text-center">
                    <p className="text-sm leading-relaxed" style={{ color: "#5A5A58" }}>
                      Select your goals above to start building your personalized stack.
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Stack items */}
                    <div className="px-6 py-4 space-y-4 border-b" style={{ borderColor: "#D8D4CC" }}>
                      <AnimatePresence>
                        {stackEntries.map(([slug, item]) => {
                          const p = products.find(x => x.slug === slug);
                          if (!p) return null;
                          const d = p.dosages?.find(x => x.size === item.dosage);
                          const linePrice = (d ? d.price : p.price) * item.qty;
                          return (
                            <motion.div key={slug}
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25 }}
                              className="flex items-center justify-between gap-3"
                              style={{ overflow: "hidden" }}
                            >
                              <div className="flex items-center gap-2 min-w-0">
                                <div style={{
                                  width: "28px", height: "44px", flexShrink: 0,
                                  display: "flex", alignItems: "center", justifyContent: "center",
                                  backgroundColor: `${p.accentColor}12`,
                                  borderRadius: "4px",
                                  border: `1px solid ${p.accentColor}30`
                                }}>
                                  <span style={{
                                    fontSize: "0.875rem",
                                    fontWeight: "bold",
                                    fontFamily: "var(--font-display)",
                                    color: p.accentColor,
                                    opacity: 0.9
                                  }}>
                                    {p.name.charAt(0)}
                                  </span>
                                </div>
                                <div className="min-w-0">
                                  <div className="text-xs font-semibold truncate" style={{ color: "#010101" }}>{p.name}</div>
                                  <div className="text-[10px]" style={{ color: "#5A5A58" }}>{item.dosage} × {item.qty}</div>
                                </div>
                              </div>
                              <div className="text-sm font-bold flex-shrink-0"
                                style={{ fontFamily: "var(--font-display)", color: "#010101" }}>
                                ${linePrice}
                              </div>
                            </motion.div>
                          );
                        })}
                      </AnimatePresence>
                    </div>

                    {/* Pricing */}
                    <div className="px-6 py-5 space-y-3 border-b" style={{ borderColor: "#D8D4CC" }}>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold" style={{ color: "#010101" }}>Total</span>
                        <span className="text-2xl font-bold"
                          style={{ fontFamily: "var(--font-display)", color: "#010101" }}>
                          ${stackFinalTotal}
                        </span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="px-6 py-5">
                      <Link href="/products" className="btn-acid w-full justify-center mb-4">
                        Pre-Order Stack <ArrowRight className="w-4 h-4" />
                      </Link>
                      {/* Trust badges */}
                      <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
                        {["99.7% Purity", "COA Included", "Same-Day Shipping"].map(badge => (
                          <span key={badge} className="flex items-center gap-1 text-[9px] font-medium uppercase tracking-wide"
                            style={{ color: "#8A8075" }}>
                            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--gold)" }} />
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========== GOAL-BASED BUNDLES ========== */}
      <section id="bundles" className="py-24 md:py-32" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container-nex">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-14">
            <span className="eyebrow mb-4 block">Stacks &amp; Bundles</span>
            <h2 className="font-bold tracking-tight max-w-xl"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#010101" }}>
              Curated for Your{" "}
              <em className="italic" style={{ color: "#C9A24B" }}>Goals</em>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {bundles.map((bundle, i) => {
              const bundleProds = getBundleProducts(bundle);
              const previewVials = bundleProds.slice(0, 3);
              return (
                <motion.div key={bundle.slug}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.1}
                  className="relative border overflow-hidden"
                  style={{ borderColor: "#D8D4CC", backgroundColor: "#F5F3F0", borderRadius: "16px" }}>

                  <div className="grid lg:grid-cols-[1fr_2fr_1fr] gap-8 p-8">

                    {/* Left: Stacked Vials + Monthly Price */}
                    <div className="text-center">
                      {/* Stacked vials */}
                      <div className="relative overflow-hidden flex items-end justify-center gap-0 mb-6"
                        style={{ height: "140px" }}>
                        <div className="absolute inset-0 pointer-events-none"
                          style={{ background: "radial-gradient(ellipse 70% 60% at 50% 60%, rgba(201,162,75,0.08) 0%, transparent 70%)" }} />
                        {previewVials.map((p, vi) => p && (
                          <div key={p.slug} style={{
                            height: "110px", width: "55px",
                            marginLeft: vi > 0 ? "-16px" : "0",
                            transform: vi === 1 ? "translateY(-12px)" : "none",
                            zIndex: vi === 1 ? 2 : 1,
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: `${p.accentColor}15`,
                            borderRadius: "6px",
                            border: `2px solid ${p.accentColor}40`,
                            boxShadow: `0 6px 16px ${p.accentColor}25`,
                          }}>
                            <span style={{
                              fontSize: "2rem",
                              fontWeight: "bold",
                              fontFamily: "var(--font-display)",
                              color: p.accentColor,
                              opacity: 0.85
                            }}>
                              {p.name.charAt(0)}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Pricing */}
                      <div className="mb-4">
                        <div className="text-4xl font-bold mb-1"
                          style={{ fontFamily: "var(--font-display)", color: "#010101" }}>
                          ${bundle.monthlyPrice}<span className="text-lg font-normal" style={{ color: "#5A5A58" }}>/mo</span>
                        </div>
                        <div className="text-xs mb-2" style={{ color: "#5A5A58" }}>
                          Monthly auto-ship
                        </div>
                        <div className="px-3 py-1 text-xs font-semibold uppercase tracking-wide"
                          style={{ backgroundColor: "rgba(139, 195, 74, 0.12)", color: "#6B8E23", borderRadius: "4px", border: "1px solid rgba(139, 195, 74, 0.25)" }}>
                          {bundle.tags[0]}
                        </div>
                      </div>
                    </div>

                    {/* Center: Educational Content */}
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <span className="eyebrow" style={{ color: "#C9A24B" }}>{bundle.eyebrow}</span>
                      </div>

                      <h3 className="text-2xl font-bold tracking-tight mb-3"
                        style={{ fontFamily: "var(--font-display)", color: "#010101" }}>
                        {bundle.name}
                      </h3>

                      <p className="text-sm leading-relaxed mb-6" style={{ color: "#5A5A58" }}>
                        {bundle.description}
                      </p>

                      {/* Synergy Explanation - Key Educational Feature */}
                      <div className="p-4 border rounded-lg mb-6"
                        style={{ borderColor: "#D8D4CC", backgroundColor: "#FFFFFF" }}>
                        <h4 className="text-xs font-semibold uppercase tracking-wide mb-2"
                          style={{ color: "#C9A24B" }}>
                          Why These Work Together
                        </h4>
                        <p className="text-xs leading-relaxed" style={{ color: "#3A3A3A" }}>
                          {bundle.synergy}
                        </p>
                      </div>

                      {/* Mechanism + Timeline */}
                      <div className="grid grid-cols-1 gap-4 mb-6">
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "#5A5A58" }}>
                            Mechanism
                          </h4>
                          <p className="text-xs leading-relaxed" style={{ color: "#5A5A58" }}>
                            {bundle.mechanism}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "#5A5A58" }}>
                            Expected Timeline
                          </h4>
                          <p className="text-xs leading-relaxed" style={{ color: "#5A5A58" }}>
                            {bundle.timeline}
                          </p>
                        </div>
                      </div>

                      {/* Product List */}
                      <div className="space-y-2 mb-6 border-t pt-4" style={{ borderColor: "#D8D4CC" }}>
                        {bundleProds.map((p) => p && (
                          <div key={p.slug} className="flex items-center justify-between">
                            <span className="text-sm" style={{ color: "#010101" }}>{p.name}</span>
                            <span className="text-sm" style={{ color: "#5A5A58" }}>${p.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: Tags + CTA */}
                    <div className="text-center lg:text-right">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 justify-center lg:justify-end mb-6">
                        {bundle.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 text-xs font-medium uppercase tracking-wide"
                            style={{ backgroundColor: "#EAE7E3", color: "#5A5A58", borderRadius: "4px", border: "1px solid #D8D4CC" }}>
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <Link href="/products" className="btn-acid w-full lg:w-auto justify-center mb-4">
                        Build This Stack <ArrowRight className="w-4 h-4" />
                      </Link>

                      {/* Trust badges */}
                      <div className="space-y-1">
                        {["99.7% Purity", "COA Included", "6-Month Plan"].map(badge => (
                          <div key={badge} className="text-xs" style={{ color: "#8A8075" }}>
                            ✓ {badge}
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== BRAND STORY ========== */}
      <section className="py-24 md:py-32 border-t border-dark-border bg-cream-panel">
        <div className="container-nex">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            {/* Brand Visual — Dare to Defy */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden"
              style={{ borderRadius: "12px", aspectRatio: "4/5" }}
            >
              <Image
                src="/brand/tm-vb-006.jpg"
                alt="Dare to Defy — Nexphoria"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0" style={{
                background: "linear-gradient(135deg, rgba(13,13,12,0.15) 0%, transparent 60%)"
              }} />
            </motion.div>

            {/* Copy */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <span className="eyebrow mb-5 block">Our Mission</span>
              <h2 className="font-bold tracking-tight mb-6 text-primary"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                Dare to{" "}
                <em className="italic" style={{ color: "#C9A24B" }}>Defy</em>
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-sm leading-relaxed text-secondary">
                  Nexphoria was built on a simple conviction: the science of human optimization should be accessible, transparent, and held to pharmaceutical standards. No shortcuts. No grey-market ambiguity.
                </p>
                <p className="text-sm leading-relaxed text-secondary">
                  Every compound in our catalog is manufactured at cGMP-certified facilities, verified by independent third-party laboratories, and shipped with a full Certificate of Analysis. We believe researchers deserve compounds they can trust.
                </p>
                <p className="text-sm leading-relaxed text-secondary">
                  Our catalog spans 20 research-grade peptides — from foundational tissue repair compounds to next-generation GLP-1 agonists. Each is documented, precise, and backed by peer-reviewed science.
                </p>
              </div>
              <div className="flex gap-3">
                <Link href="/about" className="btn-outline-gold">Our Story</Link>
                <Link href="/science" className="btn-dark">View Science</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== PACKAGING JOURNEY ========== */}
      <section className="relative py-24 md:py-36 overflow-hidden" style={{ backgroundColor: "#F5F3F0" }}>
        <div className="container-nex relative z-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-16 max-w-xl">
            <span className="eyebrow mb-4 block">Premium Packaging</span>
            <h2 className="font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#010101" }}>
              Cold-Chain Ready{" "}
              <em className="italic" style={{ color: "#C9A24B" }}>Delivery</em>
            </h2>
          </motion.div>

          {/* 4-step horizontal timeline */}
          <div className="relative mb-20">
            {/* Connector track (background) */}
            <div className="hidden md:block absolute left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] pointer-events-none"
              style={{ top: "27px", height: "1px", backgroundColor: "rgba(201,162,75,0.2)" }} />
            {/* Animated gold fill */}
            <motion.div
              className="hidden md:block absolute pointer-events-none"
              style={{ top: "27px", left: "calc(12.5% + 24px)", right: "calc(12.5% + 24px)", height: "1px", backgroundColor: "#C9A24B", transformOrigin: "left", scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            />

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { Icon: ShoppingBag, label: "Order Placed",    desc: "Your compounds are reserved and prepared for your order." },
                { Icon: ShieldCheck, label: "Quality Verified", desc: "COA generated, purity confirmed at 99.7%+ by independent lab." },
                { Icon: Package,     label: "Sealed & Packed",  desc: "Cold-chain ready packaging with full documentation included." },
                { Icon: Truck,       label: "Delivered",        desc: "Same-day dispatch, fully tracked to your door." },
              ].map(({ Icon, label, desc }, i) => (
                <motion.div key={label}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center text-center md:items-start md:text-left"
                >
                  {/* Step circle */}
                  <div className="relative w-14 h-14 rounded-full flex items-center justify-center mb-5 flex-shrink-0"
                    style={{ backgroundColor: "rgba(201,162,75,0.12)", border: "1px solid rgba(201,162,75,0.3)" }}>
                    <Icon className="w-6 h-6" strokeWidth={1.4} style={{ color: "#C9A24B" }} />
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#F5F3F0", border: "1px solid rgba(201,162,75,0.4)" }}>
                      <span className="text-[9px] font-mono font-bold" style={{ color: "#C9A24B" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-base font-bold mb-2"
                    style={{ fontFamily: "var(--font-display)", color: "#010101" }}>
                    {label}
                  </h3>
                  <p className="text-xs leading-relaxed max-w-[200px]" style={{ color: "#5A5A58" }}>{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 3 packaging images */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { img: "/images/bendito_mockup-n-box-copy.jpg",               caption: "Premium lab documentation" },
              { img: "/images/bendito_mockup-ss-cosmetic_box-02-copy-2.jpg", caption: "Pharmaceutical-grade packaging" },
              { img: "/images/bendito_mockup-mt-packaging-03-copy-2.jpg",    caption: "Cold-chain ready vials" },
            ].map(({ img, caption }, i) => (
              <motion.div key={caption}
                className="group relative overflow-hidden"
                style={{ borderRadius: "10px", aspectRatio: "3/4" }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
              >
                <Image src={img} alt={caption} fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="400px" />
                {/* Overlay caption */}
                <div className="absolute bottom-0 left-0 right-0 px-4 py-4"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)" }}>
                  <p className="text-xs font-medium" style={{ color: "rgba(247,244,238,0.85)" }}>{caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SCIENCE PREVIEW ========== */}
      <section className="relative py-24 md:py-32 overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container-nex relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-10">
            <span className="eyebrow mb-4 block">The Science</span>
            <h2 className="font-bold tracking-tight max-w-xl"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#010101" }}>
              Pharmaceutical-Grade{" "}
              <em className="italic" style={{ color: "#C9A24B" }}>Excellence</em>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-0 border" style={{ borderColor: "#D8D4CC" }}>
            {[
              { icon: Microscope, code: "HPLC", title: "HPLC Analysis", desc: "Reverse-phase C18 HPLC with UV/DAD detection on every production lot. Purity quantified to ≥99.0% against certified reference standards." },
              { icon: Atom, code: "ESI-MS", title: "Mass Spectrometry", desc: "Electrospray ionization (ESI) confirms molecular identity by exact mass. [M+H]⁺ observed masses matched within 5 ppm tolerance against NIST databases." },
              { icon: Factory, code: "cGMP", title: "cGMP Manufacturing", desc: "Every synthesis partner operates under current Good Manufacturing Practice — the same regulatory framework applied to pharmaceutical drug manufacturing." },
            ].map((item, i) => (
              <motion.div key={item.code}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.12}
                className="p-8 border-b md:border-b-0 md:border-r last:border-0"
                style={{ borderColor: "#D8D4CC" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: "rgba(201,162,75,0.15)", border: "1px solid rgba(201,162,75,0.25)" }}>
                  <item.icon className="w-6 h-6" strokeWidth={1.5} style={{ color: "#C9A24B" }} />
                </div>
                <div className="inline-flex items-center px-2.5 py-1 font-mono text-xs font-medium mb-4"
                  style={{ backgroundColor: "rgba(201,162,75,0.12)", color: "#C9A24B" }}>{item.code}</div>
                <h3 className="text-base font-semibold mb-3" style={{ color: "#010101" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5A5A58" }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0.4}
            className="flex justify-center mt-12">
            <Link href="/science" className="btn-outline-gold">
              Explore Our Research <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="py-24 md:py-32" style={{ backgroundColor: "#EAE7E3" }}>
        <div className="container-nex">
          <div className="grid lg:grid-cols-[2fr_3fr] gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <span className="eyebrow mb-5 block">FAQ</span>
              <h2 className="font-bold tracking-tight mb-6"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "#010101" }}>
                Common{" "}
                <em className="italic" style={{ color: "#C9A24B" }}>Questions</em>
              </h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "#5A5A58" }}>
                Everything you need to know about ordering, storage, and our quality standards.
              </p>
              <Link href="/contact" className="btn-outline-gold">
                Ask a Question <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <div className="border-t" style={{ borderColor: "#D8D4CC" }}>
              {faqItems.map((item, i) => (
                <FAQItem key={item.q} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== EMAIL CAPTURE ========== */}
      <section className="py-24" style={{ backgroundColor: "#F5F3F0" }}>
        <div className="container-nex">
          <div className="max-w-xl mx-auto text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
              className="mb-10">
              <span className="eyebrow mb-5 block">Research Updates</span>
              <h2 className="font-bold tracking-tight mb-4"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.75rem)", color: "#010101" }}>
                Stay Ahead of the{" "}
                <em className="italic" style={{ color: "#C9A24B" }}>Science</em>
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "#5A5A58" }}>
                New compound announcements, COA publications, and research updates. Join 2,400+ researchers.
              </p>
            </motion.div>
            <motion.form
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="flex flex-col sm:flex-row gap-2"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const formData = new FormData(form);
                const email = formData.get('email') as string;

                if (!email) return;

                try {
                  await fetch('/api/waitlist', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email }),
                  });
                  (form.querySelector('button') as HTMLButtonElement).textContent = 'Subscribed';
                  (form.querySelector('input') as HTMLInputElement).value = '';
                } catch (error) {
                  console.error('Waitlist error:', error);
                }
              }}>
              <input type="email" name="email" placeholder="your@email.com" className="nex-input flex-1" required />
              <button type="submit" className="btn-acid whitespace-nowrap">Subscribe</button>
            </motion.form>
            <p className="mt-5 text-xs" style={{ color: "#8A8075" }}>
              Research use newsletter. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* MOBILE STICKY CTA */}
      <div className="md:hidden mobile-sticky-cta">
        <Link href="/products" className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em]"
          style={{ color: "#000" }}>
          View Catalog <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  );
}
