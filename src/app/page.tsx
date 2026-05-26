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
import ProductVial from "@/components/ProductVial";
import ProductCard from "@/components/ProductCard";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
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
    q: "What purity level do your peptides have?",
    a: "All Nexphoria peptides are verified at 99.7%+ purity using reverse-phase HPLC with UV/DAD detection and ESI-MS identity confirmation. Every production lot is tested by an independent, accredited third-party laboratory.",
  },
  {
    q: "Do you provide Certificates of Analysis?",
    a: "Yes — every order ships with a Certificate of Analysis from our third-party testing laboratory. The COA includes the full HPLC chromatogram, mass spectrum, moisture content (Karl Fischer), and residual solvent data.",
  },
  {
    q: "How should I store peptides?",
    a: "Lyophilized peptides should be stored at −20°C in a desiccated environment, protected from light. Once reconstituted, store at 2–8°C (refrigerator). Avoid repeated freeze-thaw cycles. Refer to each product's individual storage specifications for exact conditions.",
  },
  {
    q: "What is bacteriostatic water?",
    a: "Bacteriostatic water is sterile water containing 0.9% benzyl alcohol as a preservative. It is the preferred reconstitution solvent for most research peptides, as the preservative inhibits bacterial growth and allows multi-draw use from the same vial over 28 days.",
  },
  {
    q: "Do you ship internationally?",
    a: "We currently ship within the United States only. International shipping is in development and will be announced via our newsletter. Join our email list to be notified when your country becomes available.",
  },
  {
    q: "What forms do peptides come in?",
    a: "Our peptides are available in lyophilized powder form in pharmaceutical glass vials (flip-top caps), requiring reconstitution with bacteriostatic water. Pre-loaded injection pens are available for select compounds — check individual product pages for pen availability.",
  },
  {
    q: "Are your peptides for human use?",
    a: "Nexphoria peptides are research compounds intended for in vitro and preclinical research use only. They are not approved for human therapeutic use by the FDA or any other regulatory authority. All orders are for qualified research purposes only.",
  },
  {
    q: "What is your return policy?",
    a: "Please review our full shipping and returns policy at /legal/shipping-returns. Due to the nature of research compounds, we do not accept returns on opened vials. Damaged or incorrect items are replaced at no charge.",
  },
];

function FAQItem({ item, index }: { item: typeof faqItems[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={index * 0.05}
      className="border-b last:border-0"
      style={{ borderColor: "rgba(255,255,255,0.08)" }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="text-sm font-medium leading-snug text-primary">
          {item.q}
        </span>
        <ChevronDown
          className="w-4 h-4 flex-shrink-0 transition-transform duration-300"
          style={{ color: "var(--gold)", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
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
            <p className="pb-5 text-sm leading-relaxed text-secondary">
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
  const bundleDiscount = stackEntries.length >= 2 ? Math.round(stackSubtotal * 0.1) : 0;
  const stackFinalTotal = stackSubtotal - bundleDiscount;

  const genderProducts = genderTab === "him" ? forHimProducts : forHerProducts;

  return (
    <div className="bg-dark">

      {/* ========== HERO ========== */}
      <section className="relative flex items-center overflow-hidden" style={{ minHeight: "100vh" }}>
        {/* Editorial hero background */}
        <Image
          src="/brand/editorial-hero.jpg"
          alt="Research-Grade Peptides - Editorial Hero"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Dark overlay 70% */}
        <div className="absolute inset-0 z-10" style={{
          background: "rgba(0,0,0,0.7)"
        }} />

        <div className="container-nex relative z-20 w-full py-24 md:py-32 pt-36 md:pt-40">
          <div className="grid lg:grid-cols-[55fr_45fr] gap-10 xl:gap-16 items-center">

            {/* Left column */}
            <div>
              <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="mb-5">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: "var(--acid-green)" }}>
                  Pharmaceutical-Grade Research Peptides
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="font-bold leading-[1.05] tracking-tight mb-7"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(3rem, 6vw, 5.25rem)",
                  color: "#FDFCF8",
                }}
              >
                Research-Grade Peptides.{" "}
                <em className="italic" style={{ color: "var(--acid-green)" }}>Precision-Delivered.</em>
              </motion.h1>
              <motion.p
                initial="hidden" animate="visible" variants={fadeUp} custom={3}
                className="text-base md:text-lg max-w-lg mb-10 leading-relaxed"
                style={{ color: "rgba(253,252,248,0.72)" }}
              >
                20 research-grade peptides. 99.7%+ purity. COA with every order.
              </motion.p>
              <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={4}
                className="flex flex-col sm:flex-row gap-3">
                <Link href="/products" className="btn-acid">
                  Shop All Peptides <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="#stack-builder" className="btn-outline-gold">Build Your Stack</a>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial="hidden" animate="visible" variants={fadeUp} custom={6}
                className="mt-14 pt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t"
                style={{ borderColor: "rgba(255,255,255,0.10)", maxWidth: "540px" }}
              >
                {[
                  { target: 20, suffix: "", label: "Compounds" },
                  { target: 99.7, suffix: "%", label: "Purity" },
                  { display: "COA", label: "Every Batch" },
                  { display: "24h", label: "Same-Day Ship" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl md:text-3xl font-bold tracking-tight mb-0.5"
                      style={{ fontFamily: "var(--font-display)", color: "#FDFCF8" }}>
                      {"target" in stat ? <Counter target={stat.target!} suffix={stat.suffix} /> : stat.display}
                    </div>
                    <div className="text-label" style={{ color: "rgba(253,252,248,0.45)" }}>{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right column — 3 vials curated showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 1.04, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.3, delay: 0.25, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="relative hidden lg:flex items-center justify-center"
              aria-hidden="true"
            >
              {/* Ambient glow behind vial group */}
              <div className="absolute inset-0 pointer-events-none" style={{
                background: "radial-gradient(ellipse 72% 56% at 50% 62%, rgba(198,241,132,0.08) 0%, transparent 68%)",
              }} />

              {/* Vials — flex aligned at bottom, center raised */}
              <div className="relative flex items-end justify-center" style={{ height: "400px", width: "360px" }}>
                {/* BPC-157 — left, −8 deg */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
                  style={{
                    rotate: -8,
                    transformOrigin: "bottom center",
                    marginRight: "-20px",
                    marginBottom: "28px",
                    height: "230px", width: "92px", flexShrink: 0, zIndex: 1,
                    filter: "drop-shadow(0 12px 32px rgba(74,155,142,0.38))",
                  }}
                >
                  <ProductVial productName="BPC-157" dosage="5mg" category="Recovery & Healing" accentColor="#4A9B8E" />
                </motion.div>

                {/* Semaglutide — center, upright, tallest */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.5, repeatType: "mirror" }}
                  style={{
                    height: "300px", width: "120px", flexShrink: 0, zIndex: 2,
                    filter: "drop-shadow(0 16px 44px rgba(239,68,68,0.38))",
                  }}
                >
                  <ProductVial productName="Semaglutide" dosage="5mg" category="Weight Management" accentColor="#EF4444" />
                </motion.div>

                {/* GHK-Cu — right, +8 deg */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4.3, repeat: Infinity, ease: "easeInOut", delay: 1, repeatType: "mirror" }}
                  style={{
                    rotate: 8,
                    transformOrigin: "bottom center",
                    marginLeft: "-20px",
                    marginBottom: "28px",
                    height: "230px", width: "92px", flexShrink: 0, zIndex: 1,
                    filter: "drop-shadow(0 12px 32px rgba(139,92,246,0.38))",
                  }}
                >
                  <ProductVial productName="GHK-Cu" dosage="5mg" category="Anti-Aging" accentColor="#8B5CF6" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== SOCIAL PROOF BAR ========== */}
      <section style={{ backgroundColor: "#0a0a08", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="py-4 overflow-hidden">
          <div className="announcement-track flex items-center gap-0 whitespace-nowrap">
            {[
              "★★★★★ Trusted by 2,400+ researchers worldwide",
              "99.7% average purity rating across all compounds",
              "Ships same day from US facility",
              "Independent Janoshik COA on every batch",
              "cGMP-compliant manufacturing",
              "20 compounds — launching now",
              "★★★★★ Trusted by 2,400+ researchers worldwide",
              "99.7% average purity rating across all compounds",
              "Ships same day from US facility",
              "Independent Janoshik COA on every batch",
              "cGMP-compliant manufacturing",
              "20 compounds — launching now",
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-6 px-10 text-[10px] font-medium uppercase tracking-[0.18em]"
                style={{ color: "rgba(247,244,238,0.5)" }}>
                <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--gold)" }} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SHOP BY GOAL ========== */}
      <section className="relative py-24 md:py-28 pattern-bg-dark overflow-hidden" style={{ backgroundColor: "#1A1A18" }}>
        {/* Cell pattern background */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "url(/brand/cell-pattern-1.png)",
          backgroundSize: "400px auto",
          backgroundRepeat: "repeat",
          opacity: 0.05
        }} />
        <div className="container-nex relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-14">
            <span className="eyebrow mb-4 block">Shop By Goal</span>
            <h2 className="font-bold tracking-tight max-w-xl text-primary"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
              Find Your{" "}
              <em className="italic text-acid-green">Protocol</em>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {shopByGoal.map((goal, i) => {
              const Icon = goal.icon;
              return (
                <motion.div key={goal.name}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.08}>
                  <Link href={goal.href}
                    className="group block p-7 border overflow-hidden transition-all duration-300 relative"
                    style={{ borderColor: "rgba(255,255,255,0.08)", backgroundColor: "#111110", borderRadius: "10px" }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = `${goal.color}55`;
                      el.style.boxShadow = `0 0 32px ${goal.color}14`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(255,255,255,0.08)";
                      el.style.boxShadow = "";
                    }}
                  >
                    {/* Pattern texture on card */}
                    <div className="absolute inset-0 pointer-events-none" style={{
                      backgroundImage: "url(/dna-pattern.png)", backgroundSize: "300px auto",
                      backgroundRepeat: "repeat", opacity: 0.03, filter: "invert(1)",
                    }} />
                    <div className="relative z-10">
                      <div className="w-11 h-11 rounded-full flex items-center justify-center mb-5"
                        style={{ backgroundColor: `${goal.color}18`, border: `1px solid ${goal.color}30` }}>
                        <Icon className="w-5 h-5" strokeWidth={1.5} style={{ color: goal.color }} />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-primary"
                        style={{ fontFamily: "var(--font-display)" }}>
                        {goal.name}
                      </h3>
                      <p className="text-xs mb-4 leading-relaxed text-secondary">
                        {goal.sub}
                      </p>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] flex items-center gap-1.5"
                        style={{ color: goal.color }}>
                        Explore <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== FOR HIM / FOR HER ========== */}
      <section className="py-24 md:py-32 bg-dark-panel">
        <div className="container-nex">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-12">
            <span className="eyebrow mb-4 block">Curated For You</span>
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <h2 className="font-bold tracking-tight text-primary"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                Tailored{" "}
                <em className="italic text-acid-green">Stacks</em>
              </h2>
              {/* Tab buttons */}
              <div className="flex gap-1 p-1 bg-dark-card rounded-lg">
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
      <section className="py-24 md:py-32 border-t border-dark-border bg-dark">
        <div className="container-nex">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="flex items-end justify-between mb-14 gap-4">
            <div>
              <span className="eyebrow mb-4 block">Our Catalogue</span>
              <h2 className="font-bold tracking-tight text-primary"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                Featured <em className="italic text-acid-green">Compounds</em>
              </h2>
            </div>
            <Link href="/products"
              className="hidden sm:flex items-center gap-2 text-sm font-medium transition-colors whitespace-nowrap text-secondary hover:text-acid-green">
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

        <div className="container-nex relative z-20">
          <div className="max-w-3xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <span className="eyebrow mb-5 block" style={{ color: "var(--acid-green)" }}>Research Methodology</span>
              <h2 className="font-bold tracking-tight mb-6 text-primary"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  color: "#FDFCF8"
                }}>
                The Science Behind{" "}
                <em className="italic" style={{ color: "var(--acid-green)" }}>Every Compound</em>
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-lg leading-relaxed" style={{ color: "rgba(253,252,248,0.8)" }}>
                  Each Nexphoria peptide undergoes rigorous analytical testing using pharmaceutical-grade instrumentation. HPLC purity analysis, mass spectrometry identity confirmation, and moisture content determination ensure every batch meets research specifications.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "rgba(253,252,248,0.7)" }}>
                  Manufactured in cGMP-certified facilities with complete batch documentation. Independent third-party COA included with every order.
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
      <section id="stack-builder" className="py-24 md:py-32 pattern-bg-dark" style={{ backgroundColor: "#111110" }}>
        <div className="container-nex">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-12">
            <span className="eyebrow mb-4 block">Interactive Configurator</span>
            <h2 className="font-bold tracking-tight mb-3 text-primary"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Build Your{" "}
              <em className="italic text-acid-green">Stack</em>
            </h2>
            <p className="text-sm max-w-lg leading-relaxed text-secondary">
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
                        borderColor: active ? gc.color : "rgba(255,255,255,0.10)",
                        backgroundColor: active ? `${gc.color}14` : "#0D0D0C",
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
                        style={{ fontFamily: "var(--font-display)", color: active ? "var(--text-primary)" : "rgba(247,244,238,0.8)" }}>
                        {gc.goal}
                      </div>
                      <div className="text-[10px] leading-snug text-secondary">{gc.desc}</div>
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
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
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
                                borderColor: inStack ? `${product.accentColor}40` : "rgba(255,255,255,0.07)",
                                backgroundColor: inStack ? `${product.accentColor}08` : "#0D0D0C",
                              }}
                            >
                              {/* Vial thumbnail */}
                              <div style={{ width: "40px", height: "64px", flexShrink: 0, filter: `drop-shadow(0 4px 12px ${product.accentColor}30)` }}>
                                <ProductVial productName={product.name} dosage={product.size} category={product.category} accentColor={product.accentColor} />
                              </div>

                              {/* Info */}
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-semibold mb-0.5 text-primary">{product.name}</div>
                                <div className="text-xs mb-2 text-secondary">{product.category}</div>

                                {/* Dosage selector */}
                                {product.dosages && product.dosages.length > 1 ? (
                                  <select
                                    value={currentDosage}
                                    onChange={(e) => inStack ? updateDosage(product.slug, e.target.value) : undefined}
                                    className="text-[10px] font-medium px-2 py-1 border"
                                    style={{
                                      borderRadius: "4px",
                                      borderColor: "rgba(255,255,255,0.12)",
                                      backgroundColor: "#1A1A18",
                                      color: "rgba(247,244,238,0.7)",
                                      cursor: inStack ? "pointer" : "default",
                                    }}
                                  >
                                    {product.dosages.map(d => (
                                      <option key={d.size} value={d.size}>{d.size} — ${d.price}</option>
                                    ))}
                                  </select>
                                ) : (
                                  <span className="text-[10px] text-secondary">{product.size}</span>
                                )}
                              </div>

                              {/* Price + action */}
                              <div className="text-right flex-shrink-0">
                                <div className="text-base font-bold mb-2 text-acid-green"
                                  style={{ fontFamily: "var(--font-display)" }}>
                                  ${currentPrice}
                                </div>

                                {inStack ? (
                                  <div className="flex flex-col items-end gap-1.5">
                                    {/* Qty controls */}
                                    <div className="flex items-center gap-1">
                                      <button onClick={() => updateQty(product.slug, -1)}
                                        className="w-6 h-6 flex items-center justify-center border transition-colors text-primary"
                                        style={{ borderRadius: "4px", borderColor: "rgba(255,255,255,0.15)" }}>
                                        <Minus className="w-3 h-3" />
                                      </button>
                                      <span className="text-sm font-semibold w-5 text-center text-primary">{item.qty}</span>
                                      <button onClick={() => updateQty(product.slug, 1)}
                                        className="w-6 h-6 flex items-center justify-center border transition-colors text-primary"
                                        style={{ borderRadius: "4px", borderColor: "rgba(255,255,255,0.15)" }}>
                                        <Plus className="w-3 h-3" />
                                      </button>
                                    </div>
                                    <button onClick={() => removeFromStack(product.slug)}
                                      className="text-[10px] font-medium uppercase tracking-wide transition-colors"
                                      style={{ color: "rgba(138,128,117,0.7)" }}>
                                      Remove
                                    </button>
                                  </div>
                                ) : (
                                  <button onClick={() => addToStack(product)}
                                    className="text-[10px] font-semibold uppercase tracking-[0.12em] px-3 py-1.5 border transition-all"
                                    style={{
                                      borderRadius: "4px",
                                      borderColor: "var(--acid-green)",
                                      color: "var(--acid-green)",
                                      backgroundColor: "transparent",
                                    }}
                                    onMouseEnter={(e) => {
                                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(198,241,132,0.12)";
                                    }}
                                    onMouseLeave={(e) => {
                                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
                                    }}
                                  >
                                    Add to Stack
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
                  style={{ borderColor: "rgba(255,255,255,0.08)", borderRadius: "10px" }}>
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
                    <Zap className="w-4 h-4" style={{ color: "rgba(138,128,117,0.5)" }} />
                  </div>
                  <p className="text-sm" style={{ color: "rgba(138,128,117,0.55)" }}>
                    Select one or more goals above to see recommended compounds.
                  </p>
                </div>
              )}
            </div>

            {/* ---- Right: Sticky order summary ---- */}
            <div className="lg:sticky lg:top-24">
              <div className="border overflow-hidden"
                style={{ borderRadius: "12px", borderColor: "rgba(201,162,75,0.2)", backgroundColor: "#0D0D0C" }}>
                {/* Header */}
                <div className="px-6 py-5 border-b relative overflow-hidden"
                  style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <div className="absolute inset-0 pointer-events-none" style={{
                    backgroundImage: "url(/dna-pattern.png)", backgroundSize: "300px auto",
                    backgroundRepeat: "repeat", opacity: 0.04, filter: "invert(1)",
                  }} />
                  <div className="relative">
                    <span className="eyebrow block mb-1" style={{ color: "var(--gold)" }}>Your Stack</span>
                    <p className="text-[10px] uppercase tracking-wide" style={{ color: "var(--grey-olive)" }}>
                      {stackEntries.length === 0 ? "No items yet" : `${stackEntries.length} compound${stackEntries.length !== 1 ? "s" : ""} selected`}
                    </p>
                  </div>
                </div>

                {stackEntries.length === 0 ? (
                  <div className="px-6 py-12 text-center">
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(138,128,117,0.6)" }}>
                      Select your goals above to start building your personalized stack.
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Stack items */}
                    <div className="px-6 py-4 space-y-4 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
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
                                <div style={{ width: "28px", height: "44px", flexShrink: 0 }}>
                                  <ProductVial productName={p.name} dosage={p.size} category={p.category} accentColor={p.accentColor} />
                                </div>
                                <div className="min-w-0">
                                  <div className="text-xs font-semibold truncate text-primary">{p.name}</div>
                                  <div className="text-[10px] text-secondary">{item.dosage} × {item.qty}</div>
                                </div>
                              </div>
                              <div className="text-sm font-bold flex-shrink-0 text-primary"
                                style={{ fontFamily: "var(--font-display)" }}>
                                ${linePrice}
                              </div>
                            </motion.div>
                          );
                        })}
                      </AnimatePresence>
                    </div>

                    {/* Pricing */}
                    <div className="px-6 py-5 space-y-3 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                      <div className="flex justify-between text-xs text-secondary">
                        <span>Subtotal</span>
                        <span>${stackSubtotal}</span>
                      </div>
                      {bundleDiscount > 0 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                          className="flex justify-between text-xs"
                          style={{ color: "var(--acid-green)" }}>
                          <span>Bundle discount (10%)</span>
                          <span>−${bundleDiscount}</span>
                        </motion.div>
                      )}
                      <div className="flex justify-between items-center pt-1">
                        <span className="text-sm font-semibold text-primary">Total</span>
                        <span className="text-2xl font-bold text-acid-green"
                          style={{ fontFamily: "var(--font-display)" }}>
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
                            style={{ color: "rgba(138,128,117,0.7)" }}>
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
      <section id="bundles" className="py-24 md:py-32" style={{ backgroundColor: "#1A1A18" }}>
        <div className="container-nex">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-14">
            <span className="eyebrow mb-4 block">Stacks &amp; Bundles</span>
            <h2 className="font-bold tracking-tight max-w-xl text-primary"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Curated for Your{" "}
              <em className="italic text-acid-green">Goals</em>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {bundles.map((bundle, i) => {
              const bundleProds = getBundleProducts(bundle);
              const individualTotal = bundleProds.reduce((sum, p) => sum + (p?.price || 0), 0);
              const previewVials = bundleProds.slice(0, 3);
              return (
                <motion.div key={bundle.slug}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.1}
                  className="relative border overflow-hidden"
                  style={{ borderColor: "rgba(201,162,75,0.2)", backgroundColor: "#111110", borderRadius: "12px" }}>
                  {/* Pattern on bundle card */}
                  <div className="absolute inset-0 pointer-events-none" style={{
                    backgroundImage: "url(/dna-pattern.png)", backgroundSize: "400px auto",
                    backgroundRepeat: "repeat", opacity: 0.04, filter: "invert(1)",
                  }} />
                  {/* Stacked vials header */}
                  <div className="relative overflow-hidden flex items-end justify-center gap-0 pt-6 pb-2"
                    style={{ height: "130px", backgroundColor: "#0D0D0C" }}>
                    <div className="absolute inset-0 pointer-events-none"
                      style={{ background: "radial-gradient(ellipse 70% 60% at 50% 60%, rgba(201,162,75,0.08) 0%, transparent 70%)" }} />
                    {previewVials.map((p, vi) => p && (
                      <div key={p.slug} style={{
                        height: "100px", width: "50px",
                        marginLeft: vi > 0 ? "-12px" : "0",
                        transform: vi === 1 ? "translateY(-8px)" : "none",
                        zIndex: vi === 1 ? 2 : 1,
                        position: "relative",
                        filter: `drop-shadow(0 4px 12px rgba(0,0,0,0.5))`,
                      }}>
                        <ProductVial productName={p.name} dosage={p.size} category={p.category} accentColor={p.accentColor} />
                      </div>
                    ))}
                  </div>

                  <div className="relative p-7">
                    <div className="flex items-start justify-between mb-4">
                      <span className="eyebrow" style={{ color: "var(--gold)" }}>{bundle.eyebrow}</span>
                      <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest"
                        style={{ backgroundColor: "rgba(198,241,132,0.12)", color: "var(--acid-green)", borderRadius: "2px", border: "1px solid rgba(198,241,132,0.25)" }}>
                        Save ${bundle.savings}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight mb-3 text-primary"
                      style={{ fontFamily: "var(--font-display)" }}>
                      {bundle.name}
                    </h3>
                    <p className="text-sm leading-relaxed mb-5 text-secondary">
                      {bundle.description}
                    </p>
                    <div className="space-y-2 mb-6 border-t border-b py-5" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                      {bundleProds.map((p) => p && (
                        <div key={p.slug} className="flex items-center justify-between">
                          <span className="text-sm text-primary">{p.name}</span>
                          <span className="text-sm line-through text-secondary">${p.price}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-end justify-between mb-5">
                      <div>
                        <div className="text-xs mb-1 text-secondary">Bundle price</div>
                        <div className="text-3xl font-bold text-acid-green"
                          style={{ fontFamily: "var(--font-display)" }}>
                          ${bundle.totalPrice}
                        </div>
                        <div className="text-xs text-secondary">vs ${individualTotal} individually</div>
                      </div>
                      <div className="flex flex-wrap gap-1.5 max-w-[180px]">
                        {bundle.tags.map((tag) => (
                          <span key={tag} className="px-2 py-0.5 text-[9px] font-medium uppercase tracking-wide"
                            style={{ backgroundColor: "rgba(255,255,255,0.06)", color: "rgba(247,244,238,0.55)", borderRadius: "2px", border: "1px solid rgba(255,255,255,0.08)" }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link href="/products" className="btn-acid w-full justify-center">
                      Build This Stack <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== BRAND STORY ========== */}
      <section className="py-24 md:py-32 border-t border-dark-border bg-dark-panel">
        <div className="container-nex">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden"
              style={{ borderRadius: "12px", aspectRatio: "4/3" }}
            >
              <Image
                src="/find-your-focus.jpg"
                alt="Find Your Focus — Nexphoria"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0" style={{
                background: "linear-gradient(135deg, rgba(10,10,8,0.2) 0%, transparent 60%)"
              }} />
            </motion.div>

            {/* Copy */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <span className="eyebrow mb-5 block">Our Mission</span>
              <h2 className="font-bold tracking-tight mb-6 text-primary"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                Dare to{" "}
                <em className="italic text-acid-green">Defy</em>
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
      <section className="relative py-24 md:py-36 overflow-hidden pattern-bg-dark" style={{ backgroundColor: "#0D0D0C" }}>
        {/* Boxes cascade hero background */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/brand/boxes-cascade.jpg"
            alt="Premium packaging - cold-chain ready"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{
            background: "linear-gradient(to bottom, rgba(13,13,12,0.9) 0%, rgba(13,13,12,0.7) 50%, rgba(13,13,12,0.9) 100%)"
          }} />
        </div>
        <div className="container-nex relative z-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-16 max-w-xl">
            <span className="eyebrow mb-4 block">Premium Packaging</span>
            <h2 className="font-bold tracking-tight text-primary"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Cold-Chain Ready{" "}
              <em className="italic text-acid-green">Delivery</em>
            </h2>
          </motion.div>

          {/* 4-step horizontal timeline */}
          <div className="relative mb-20">
            {/* Connector track (background) */}
            <div className="hidden md:block absolute left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] pointer-events-none"
              style={{ top: "27px", height: "1px", backgroundColor: "rgba(201,162,75,0.12)" }} />
            {/* Animated gold fill */}
            <motion.div
              className="hidden md:block absolute pointer-events-none"
              style={{ top: "27px", left: "calc(12.5% + 24px)", right: "calc(12.5% + 24px)", height: "1px", backgroundColor: "var(--gold)", transformOrigin: "left", scaleX: 0 }}
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
                    style={{ backgroundColor: "rgba(201,162,75,0.10)", border: "1px solid rgba(201,162,75,0.28)" }}>
                    <Icon className="w-6 h-6" strokeWidth={1.4} style={{ color: "var(--gold)" }} />
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#0D0D0C", border: "1px solid rgba(201,162,75,0.35)" }}>
                      <span className="text-[9px] font-mono font-bold" style={{ color: "var(--gold)" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-base font-bold mb-2 text-primary"
                    style={{ fontFamily: "var(--font-display)" }}>
                    {label}
                  </h3>
                  <p className="text-xs leading-relaxed max-w-[200px] text-secondary">{desc}</p>
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
      <section className="relative py-24 md:py-32 overflow-hidden pattern-bg-dark" style={{ backgroundColor: "#1A1A18" }}>
        <div className="container-nex relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mb-10">
            <span className="eyebrow mb-4 block">The Science</span>
            <h2 className="font-bold tracking-tight max-w-xl text-primary"
              style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Pharmaceutical-Grade{" "}
              <em className="italic text-acid-green">Excellence</em>
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-0 border" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
            {[
              { icon: Microscope, code: "HPLC", title: "HPLC Analysis", desc: "Reverse-phase C18 HPLC with UV/DAD detection on every production lot. Purity quantified to ≥99.0% against certified reference standards." },
              { icon: Atom, code: "ESI-MS", title: "Mass Spectrometry", desc: "Electrospray ionization (ESI) confirms molecular identity by exact mass. [M+H]⁺ observed masses matched within 5 ppm tolerance against NIST databases." },
              { icon: Factory, code: "cGMP", title: "cGMP Manufacturing", desc: "Every synthesis partner operates under current Good Manufacturing Practice — the same regulatory framework applied to pharmaceutical drug manufacturing." },
            ].map((item, i) => (
              <motion.div key={item.code}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i * 0.12}
                className="p-8 border-b md:border-b-0 md:border-r last:border-0"
                style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: "rgba(201,162,75,0.15)", border: "1px solid rgba(201,162,75,0.25)" }}>
                  <item.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>
                <div className="inline-flex items-center px-2.5 py-1 font-mono text-xs font-medium mb-4"
                  style={{ backgroundColor: "rgba(201,162,75,0.12)", color: "var(--gold)" }}>{item.code}</div>
                <h3 className="text-base font-semibold mb-3 text-primary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-secondary">{item.desc}</p>
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
      <section className="py-24 md:py-32" style={{ backgroundColor: "#111110" }}>
        <div className="container-nex">
          <div className="grid lg:grid-cols-[2fr_3fr] gap-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <span className="eyebrow mb-5 block">FAQ</span>
              <h2 className="font-bold tracking-tight mb-6 text-primary"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
                Common{" "}
                <em className="italic text-acid-green">Questions</em>
              </h2>
              <p className="text-sm leading-relaxed mb-8 text-secondary">
                Everything you need to know about ordering, storage, and our quality standards.
              </p>
              <Link href="/contact" className="btn-outline-gold">
                Ask a Question <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <div className="border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
              {faqItems.map((item, i) => (
                <FAQItem key={item.q} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== EMAIL CAPTURE ========== */}
      <section className="py-24 pattern-bg-dark" style={{ backgroundColor: "#1A1A18" }}>
        <div className="container-nex">
          <div className="max-w-xl mx-auto text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
              className="mb-10">
              <span className="eyebrow mb-5 block">Exclusive Offer</span>
              <h2 className="font-bold tracking-tight mb-4 text-primary"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3vw, 2.75rem)" }}>
                Get 10% Off Your{" "}
                <em className="italic text-acid-green">First Order</em>
              </h2>
              <p className="text-sm leading-relaxed text-secondary">
                Join 2,400+ researchers. New compound announcements, COA publications, and research updates.
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
                  // Simple success feedback - could enhance this
                  (form.querySelector('button') as HTMLButtonElement).textContent = 'Added!';
                  (form.querySelector('input') as HTMLInputElement).value = '';
                } catch (error) {
                  console.error('Waitlist error:', error);
                }
              }}>
              <input type="email" name="email" placeholder="your@email.com" className="nex-input-dark flex-1" required />
              <button type="submit" className="btn-acid whitespace-nowrap">Get 10% Off</button>
            </motion.form>
            <p className="mt-5 text-xs" style={{ color: "rgba(138,128,117,0.55)" }}>
              Join 2,400+ researchers. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* MOBILE STICKY CTA */}
      <div className="md:hidden mobile-sticky-cta">
        <Link href="/products" className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em]"
          style={{ color: "#000" }}>
          Shop Now <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  );
}
