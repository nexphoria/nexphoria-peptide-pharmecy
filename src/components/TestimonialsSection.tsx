"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Marcus T.",
    age: 42,
    stack: "Wolverine Stack",
    img: "/images/testimonials/marcus-t.jpg",
    quote:
      "My BPC-157 and TB-500 protocol changed everything. Knee pain I had for 3 years was gone in 6 weeks. My testosterone went from 380 to 680 in 90 days.",
    stars: 5,
  },
  {
    name: "Jennifer K.",
    age: 38,
    stack: "Glow Stack",
    img: "/images/testimonials/jennifer-k.jpg",
    quote:
      "The GHK-Cu protocol gave me skin I had at 25. My collagen markers improved 34% on my 90-day panel. I look and feel completely different.",
    stars: 5,
  },
  {
    name: "David R.",
    age: 51,
    stack: "Restore Stack",
    img: null,
    quote:
      "NAD+ at 51 feels like someone turned the lights back on. Energy levels are unreal. My physician adjusted my protocol twice based on bloodwork and each time it got better.",
    stars: 5,
  },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-[#B8A44C] text-[15px]">★</span>
      ))}
    </div>
  );
}

function AvatarInitials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
  return (
    <div className="w-[60px] h-[60px] rounded-full bg-[#2A2A28] flex items-center justify-center flex-shrink-0">
      <span className="text-[18px] font-semibold text-[#B8A44C]">{initials}</span>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-[#0F0F0E] py-28 px-8">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <p className="text-[11px] font-bold tracking-[0.22em] text-[#B8A44C] uppercase mb-4">
            Patient Results
          </p>
          <h2 className="font-display text-[clamp(2.4rem,4.5vw,3.8rem)] leading-tight text-white">
            Real people. Real biomarkers.<br />
            <span className="italic text-[#9A8F82]">Real change.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              className="bg-[#1C1C1A] rounded-3xl p-8 border border-[#2A2A28] flex flex-col hover:border-[#3A3A38] transition-colors duration-300"
            >
              {/* Stars */}
              <Stars count={t.stars} />

              {/* Quote */}
              <blockquote className="font-display italic text-[1.05rem] text-[#D4CFC8] leading-relaxed mb-8 flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#2A2A28]">
                {t.img ? (
                  <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden flex-shrink-0 ring-2 ring-[#2A2A28]">
                    <Image
                      src={t.img}
                      alt={t.name}
                      fill
                      className="object-cover object-top"
                      sizes="60px"
                    />
                  </div>
                ) : (
                  <AvatarInitials name={t.name} />
                )}
                <div>
                  <p className="text-[14px] font-semibold text-white leading-tight">
                    {t.name}, {t.age}
                  </p>
                  <p className="text-[11px] font-semibold tracking-[0.07em] text-[#B8A44C] uppercase mt-0.5">
                    {t.stack}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          className="text-center text-[12px] text-[#4A4440] mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Results verified by physician bloodwork panels.
        </motion.p>

      </div>
    </section>
  );
}




