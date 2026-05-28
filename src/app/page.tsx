"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { products } from "@/lib/products";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#EAE7E3" }}>
      {/* Chemical pattern overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "url(/brand/chemical-pattern.svg)",
          backgroundSize: "600px",
          backgroundRepeat: "repeat",
          opacity: 0.03,
        }}
      />

      {/* HERO — typographic, no images, pure authority */}
      <section className="relative z-10 flex items-end min-h-[85vh] pb-24 px-6 md:px-12">
        <div className="max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <p
              className="text-xs uppercase mb-8"
              style={{ color: "#B8923A", letterSpacing: "0.25em", fontWeight: 400 }}
            >
              Research-Grade Peptide Compounds
            </p>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8"
              style={{
                color: "#010101",
                fontWeight: 200,
                letterSpacing: "-0.01em",
                lineHeight: 1.05,
              }}
            >
              Every compound.<br />
              Third-party tested.<br />
              <span style={{ color: "#7F7F7D" }}>Every lot documented.</span>
            </h1>
            <p
              className="text-lg md:text-xl max-w-2xl mb-12"
              style={{ color: "#7F7F7D", lineHeight: 1.7, fontWeight: 300 }}
            >
              Non-GLP-1 peptides manufactured under cGMP standards. Independent
              HPLC and mass spectrometry verification on every production lot.
              Certificate of Analysis ships with every order.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center px-7 py-3.5 text-sm font-medium rounded-sm transition-all hover:opacity-90"
                style={{ backgroundColor: "#C9DD69", color: "#010101", letterSpacing: "0.08em" }}
              >
                EXPLORE COMPOUNDS
              </Link>
              <Link
                href="/clinical"
                className="inline-flex items-center px-7 py-3.5 text-sm font-medium rounded-sm border transition-all hover:opacity-70"
                style={{ borderColor: "#B8923A", color: "#B8923A", letterSpacing: "0.08em" }}
              >
                CLINICAL PROGRAMS
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BRAND IMAGE — full-width cinematic */}
      <section className="relative w-full" style={{ height: "70vh" }}>
        <Image
          src="/brand/tm-vb-006.jpg"
          alt="Find Your Focus — Nexphoria"
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={100}
          priority
        />
      </section>

      {/* TRUST — one quiet line */}
      <section className="py-16 px-6 md:px-12" style={{ backgroundColor: "#F5F2EB" }}>
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16">
          {["99.7%+ Purity", "Janoshik COA", "cGMP Certified", "Same-Day Dispatch"].map((item) => (
            <span
              key={item}
              className="text-xs uppercase"
              style={{ color: "#7F7F7D", letterSpacing: "0.2em", fontWeight: 400 }}
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* COMPOUNDS — clean grid */}
      <section className="py-24 px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p
              className="text-xs uppercase mb-4"
              style={{ color: "#B8923A", letterSpacing: "0.25em" }}
            >
              The Catalog
            </p>
            <h2
              className="text-3xl md:text-4xl"
              style={{ color: "#010101", fontWeight: 200, letterSpacing: "0.02em" }}
            >
              Research Compounds
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group block p-6 rounded-lg transition-all hover:shadow-md"
                style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(0,0,0,0.05)" }}
              >
                <p
                  className="text-[10px] uppercase mb-3"
                  style={{ color: "#B8923A", letterSpacing: "0.2em" }}
                >
                  {product.category}
                </p>
                <h3
                  className="text-lg mb-2 group-hover:opacity-70 transition-opacity"
                  style={{ color: "#010101", fontWeight: 300 }}
                >
                  {product.name}
                </h3>
                <p className="text-sm mb-4" style={{ color: "#7F7F7D" }}>
                  {product.size} · {product.purity}
                </p>
                <p style={{ color: "#010101", fontWeight: 400 }}>
                  ${product.price}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="text-sm inline-flex items-center gap-2 transition-opacity hover:opacity-60"
              style={{ color: "#010101", letterSpacing: "0.1em", fontWeight: 400 }}
            >
              VIEW FULL CATALOG
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* DUAL TIER — Research + Clinical */}
      <section className="py-24 px-6 md:px-12" style={{ backgroundColor: "#F5F2EB" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div
            className="p-8 rounded-lg"
            style={{ backgroundColor: "#FFFFFF", borderTop: "2px solid #C9DD69" }}
          >
            <p
              className="text-xs uppercase mb-4"
              style={{ color: "#C9DD69", letterSpacing: "0.2em" }}
            >
              Research
            </p>
            <h3 className="text-xl mb-4" style={{ color: "#010101", fontWeight: 300 }}>
              Research-Grade Compounds
            </h3>
            <p className="text-sm mb-6" style={{ color: "#7F7F7D", lineHeight: 1.7 }}>
              Lyophilized powder. Independent third-party verification.
              For qualified researchers. COA with every order.
            </p>
            <Link
              href="/products"
              className="text-sm"
              style={{ color: "#010101", letterSpacing: "0.1em" }}
            >
              View Catalog →
            </Link>
          </div>
          <div
            className="p-8 rounded-lg"
            style={{ backgroundColor: "#FFFFFF", borderTop: "2px solid #B8923A" }}
          >
            <p
              className="text-xs uppercase mb-4"
              style={{ color: "#B8923A", letterSpacing: "0.2em" }}
            >
              Clinical
            </p>
            <h3 className="text-xl mb-4" style={{ color: "#010101", fontWeight: 300 }}>
              Physician-Guided Therapy
            </h3>
            <p className="text-sm mb-6" style={{ color: "#7F7F7D", lineHeight: 1.7 }}>
              Pre-mixed. Prescription-grade. Telehealth consultation
              with licensed prescriber. Starting at $149/month.
            </p>
            <Link
              href="/clinical"
              className="text-sm"
              style={{ color: "#B8923A", letterSpacing: "0.1em" }}
            >
              Join Waitlist →
            </Link>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="py-12 px-6 md:px-12 text-center" style={{ backgroundColor: "#EAE7E3" }}>
        <p className="text-xs" style={{ color: "#7F7F7D", letterSpacing: "0.05em" }}>
          All products sold for laboratory research use only. Not for human consumption.
          Buyer assumes full responsibility for compliance with applicable regulations.
        </p>
      </section>
    </div>
  );
}
