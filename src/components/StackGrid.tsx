"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const STACKS = [
  {
    slug: "wolverine",
    name: "Wolverine Stack",
    tagline: "Recover faster.",
    compounds: "BPC-157 · TB-500",
    category: "RECOVERY",
    price: "From $189/mo",
    href: "/products/wolverine",
    color: "#8A6A2A",
    bg: "from-[#1a1208] to-[#0F0F0E]",
  },
  {
    slug: "glow",
    name: "Glow Stack",
    tagline: "Skin. Hair. You.",
    compounds: "GHK-Cu · PT-141",
    category: "SKIN · HAIR",
    price: "From $219/mo",
    href: "/products/ghk-cu",
    color: "#9E6B6B",
    bg: "from-[#1a0e0e] to-[#0F0F0E]",
  },
  {
    slug: "restore",
    name: "Restore Stack",
    tagline: "Turn back the clock.",
    compounds: "NAD+ · Epitalon",
    category: "LONGEVITY",
    price: "From $329/mo",
    href: "/products/nad-plus",
    color: "#4A7A6A",
    bg: "from-[#0a1410] to-[#0F0F0E]",
  },
  {
    slug: "clarity",
    name: "Clarity Stack",
    tagline: "Sharper. Faster. On.",
    compounds: "Semax · Selank",
    category: "COGNITION",
    price: "From $249/mo",
    href: "/products/semax",
    color: "#3A5A8A",
    bg: "from-[#0a0e1a] to-[#0F0F0E]",
  },
  {
    slug: "glp1",
    name: "GLP-1 Protocol",
    tagline: "Recompose your body.",
    compounds: "Semaglutide · Tirzepatide",
    category: "BODY COMP",
    price: "From $399/mo",
    href: "/products/semaglutide",
    color: "#6A4A8A",
    bg: "from-[#120a1a] to-[#0F0F0E]",
  },
  {
    slug: "growth",
    name: "Growth Protocol",
    tagline: "Sleep deeper. Build more.",
    compounds: "CJC-1295 · Ipamorelin",
    category: "SLEEP · GROWTH",
    price: "From $279/mo",
    href: "/products/ipamorelin",
    color: "#5A7A4A",
    bg: "from-[#0e1a0a] to-[#0F0F0E]",
  },
];

export function StackGrid() {
  return (
    <section className="bg-[#0F0F0E] py-24 px-4">
      {/* Section label */}
      <div className="max-w-7xl mx-auto mb-12">
        <p className="text-[10px] font-semibold tracking-[0.25em] text-[#B8A44C] uppercase mb-3">
          Choose Your Protocol
        </p>
        <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight text-white">
          Six stacks. One goal.<br />
          <span className="text-[#6A6050] italic">Optimize everything.</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {STACKS.map((stack, i) => (
          <motion.div
            key={stack.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Link
              href={stack.href}
              className="group relative flex flex-col h-full min-h-[280px] rounded-2xl border border-[#2A2A28] bg-[#111110] overflow-hidden hover:border-[#B8A44C]/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stack.bg} opacity-60`} />

              {/* Gold left accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[2px]"
                style={{ background: `linear-gradient(180deg, ${stack.color}, transparent)` }}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full p-7">
                {/* Category tag */}
                <div className="flex items-center justify-between mb-auto">
                  <span className="text-[9px] font-bold tracking-[0.2em] uppercase px-2 py-1 rounded border border-[#2A2A28] bg-[#0F0F0E]/60 text-[#6A6050]">
                    {stack.category}
                  </span>
                  <span
                    className="text-[10px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0 transition-transform"
                    style={{ color: stack.color }}
                  >
                    →
                  </span>
                </div>

                {/* Stack name + tagline */}
                <div className="mt-8 mb-4">
                  <h3 className="font-display text-[1.5rem] leading-tight text-white mb-1">
                    {stack.name}
                  </h3>
                  <p className="text-[#6A6050] text-[13px] italic font-display">
                    {stack.tagline}
                  </p>
                </div>

                {/* Compounds */}
                <p className="text-[10px] tracking-[0.12em] uppercase text-[#4A4440] mb-5">
                  {stack.compounds}
                </p>

                {/* Bottom row */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#1E1E1C]">
                  <span className="text-[13px] font-semibold text-[#B8A44C]">
                    {stack.price}
                  </span>
                  <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#3A3830] group-hover:text-white transition-colors duration-300">
                    View Protocol →
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

