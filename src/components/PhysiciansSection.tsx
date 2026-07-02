"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const PHYSICIANS = [
  {
    name: "Dr. Michael Chen",
    credentials: "MD",
    school: "Harvard Medical School",
    specialty: "Internal Medicine & Longevity",
    bio: "Specializing in peptide protocols for metabolic optimization and longevity medicine.",
    img: "/images/physicians/dr-michael-chen.jpg",
  },
  {
    name: "Dr. Sarah Rodriguez",
    credentials: "MD",
    school: "Johns Hopkins University",
    specialty: "Functional Medicine",
    bio: "Expert in hormonal health, skin protocols, and women's performance medicine.",
    img: "/images/physicians/dr-sarah-rodriguez.jpg",
  },
  {
    name: "Dr. James Walker",
    credentials: "MD",
    school: "Stanford University",
    specialty: "Sports Medicine",
    bio: "Treating elite athletes and weekend warriors with evidence-based peptide recovery protocols.",
    img: "/images/physicians/dr-james-walker.jpg",
  },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
};

export function PhysiciansSection() {
  return (
    <section className="bg-[#FAF7F2] py-28 px-8 border-t border-[#EAE6DF]">
      <div className="max-w-[1400px] mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <p className="text-[11px] font-bold tracking-[0.22em] text-[#B8A44C] uppercase mb-4"
            style={{ fontVariant: "small-caps" }}>
            Our Physicians
          </p>
          <h2 className="font-display text-[clamp(2.4rem,4.5vw,3.8rem)] leading-tight text-[#0F0F0E]">
            Board-certified doctors.<br />
            <span className="italic text-[#4A4440]">Real protocols.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {PHYSICIANS.map((doc) => (
            <motion.div
              key={doc.name}
              variants={cardVariants}
              className="flex flex-col items-center text-center bg-white rounded-3xl px-8 pt-10 pb-8 shadow-[0_2px_24px_rgba(0,0,0,0.05)] border border-[#EAE6DF] hover:shadow-[0_6px_32px_rgba(0,0,0,0.09)] transition-shadow duration-300"
            >
              {/* Circular photo */}
              <div className="relative w-28 h-28 rounded-full overflow-hidden mb-6 ring-4 ring-[#EAE6DF]">
                <Image
                  src={doc.img}
                  alt={doc.name}
                  fill
                  className="object-cover object-top"
                  sizes="112px"
                />
              </div>

              {/* Name + credentials */}
              <h3 className="font-display text-[1.5rem] text-[#0F0F0E] leading-tight mb-1">
                {doc.name}, <span className="italic text-[#6A6050]">{doc.credentials}</span>
              </h3>

              {/* School */}
              <p className="text-[11px] font-semibold tracking-[0.08em] text-[#B8A44C] uppercase mb-2">
                {doc.school}
              </p>

              {/* Specialty pill */}
              <span className="text-[10px] font-semibold tracking-[0.07em] uppercase px-3 py-1 rounded-full border border-[#D4CFC8] text-[#6A6050] mb-5">
                {doc.specialty}
              </span>

              {/* Bio */}
              <p className="text-[14px] text-[#6A6050] leading-relaxed">
                {doc.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom disclaimer */}
        <motion.p
          className="text-center text-[13px] text-[#9A8F82] mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Every protocol reviewed by a licensed physician in your state.
        </motion.p>

      </div>
    </section>
  );
}





