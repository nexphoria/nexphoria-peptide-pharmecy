"use client";

import { motion } from "framer-motion";
import { FlaskConical, Package, Thermometer, Award } from "lucide-react";
import { Product } from "@/lib/products";

interface SpecGridProps {
  product: Product;
  className?: string;
}

interface SpecItem {
  icon: React.ComponentType<any>;
  label: string;
  value: string;
  color: string;
}

export default function SpecGrid({ product, className = "" }: SpecGridProps) {
  // Parse and simplify the storage conditions
  const simplifyStorage = (storage: string): string => {
    if (storage.includes("−20°C") || storage.includes("-20°C")) {
      return "−20°C Frozen";
    }
    if (storage.includes("2–8°C") || storage.includes("2-8°C")) {
      return "2–8°C Refrigerated";
    }
    if (storage.includes("room temperature") || storage.includes("15–25°C")) {
      return "Room Temperature";
    }
    // Fallback to first part if complex
    const firstSentence = storage.split('.')[0];
    if (firstSentence.length > 30) {
      return "See Details";
    }
    return firstSentence;
  };

  // Determine form from appearance
  const getForm = (appearance: string): string => {
    if (appearance.toLowerCase().includes("lyophilized")) {
      return "Lyophilized Powder";
    }
    if (appearance.toLowerCase().includes("capsule")) {
      return "Capsules";
    }
    if (appearance.toLowerCase().includes("liquid")) {
      return "Liquid";
    }
    if (appearance.toLowerCase().includes("powder")) {
      return "Powder";
    }
    return "Pharmaceutical Grade";
  };

  const specs: SpecItem[] = [
    {
      icon: Award,
      label: "Purity",
      value: product.purity,
      color: "var(--acid-green)"
    },
    {
      icon: Package,
      label: "Form",
      value: getForm(product.appearance),
      color: "var(--accent-cognitive)"
    },
    {
      icon: Thermometer,
      label: "Storage",
      value: simplifyStorage(product.storage),
      color: "var(--accent-recovery)"
    },
    {
      icon: FlaskConical,
      label: "Testing",
      value: "HPLC/MS Verified",
      color: "var(--accent-growth)"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  return (
    <section className={`py-16 ${className}`}>
      <div className="container-nex">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {specs.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={spec.label}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-xl border transition-all duration-300 hover:border-dark-border-hover"
                style={{
                  borderColor: "var(--dark-border)",
                  backgroundColor: "var(--dark-card)"
                }}
              >

                {/* Content */}
                <div className="relative p-6 text-center">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${spec.color}15`,
                      border: `1px solid ${spec.color}25`
                    }}
                  >
                    <Icon
                      className="w-6 h-6"
                      strokeWidth={1.5}
                      style={{ color: spec.color }}
                    />
                  </div>

                  {/* Label */}
                  <div className="text-xs font-medium uppercase tracking-wide text-secondary mb-2">
                    {spec.label}
                  </div>

                  {/* Value */}
                  <div
                    className="text-sm font-bold text-primary leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {spec.value}
                  </div>

                  {/* Hover accent line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    style={{ backgroundColor: spec.color }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}