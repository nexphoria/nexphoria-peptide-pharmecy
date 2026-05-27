"use client";

import { motion } from "framer-motion";
import { Activity, TrendingUp, Target } from "lucide-react";
import { Product } from "@/lib/products";

interface TimelineProps {
  product: Product;
  className?: string;
}

interface TimelinePhase {
  period: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export default function Timeline({ product, className = "" }: TimelineProps) {
  // Generate timeline content based on product category
  const getTimelinePhases = (category: string): TimelinePhase[] => {
    const templates = {
      "Recovery & Healing": [
        {
          period: "WEEK 1-2",
          title: "Initial Tissue Response",
          description: "Cellular repair mechanisms activate. Anti-inflammatory pathways begin modulation. Early recovery processes initiate at the tissue level.",
          icon: Activity
        },
        {
          period: "MONTH 1",
          title: "Measurable Recovery",
          description: "Enhanced collagen synthesis becomes apparent. Tissue regeneration accelerates. Observable improvements in repair markers and function.",
          icon: TrendingUp
        },
        {
          period: "MONTH 3+",
          title: "Sustained Structural Support",
          description: "Long-term tissue integrity optimization. Maintained enhancement of repair capacity. Established regenerative baseline.",
          icon: Target
        }
      ],
      "Growth Hormone": [
        {
          period: "WEEK 1-2",
          title: "Axis Activation Begins",
          description: "Pituitary response initiation. GH pulse frequency modulation starts. Early markers of somatotropic axis engagement.",
          icon: Activity
        },
        {
          period: "MONTH 1",
          title: "Elevated Markers",
          description: "Significant IGF-1 elevation observed. Enhanced body composition metrics. Measurable improvements in GH-dependent pathways.",
          icon: TrendingUp
        },
        {
          period: "MONTH 3+",
          title: "Sustained Optimization",
          description: "Maintained somatotropic enhancement. Long-term metabolic improvements. Established anabolic environment.",
          icon: Target
        }
      ],
      "Weight Management": [
        {
          period: "WEEK 1-2",
          title: "Metabolic Response Initiates",
          description: "GLP-1 receptor activation begins. Appetite regulation mechanisms engage. Early metabolic pathway modulation.",
          icon: Activity
        },
        {
          period: "MONTH 1",
          title: "Measurable Changes",
          description: "Significant weight reduction observed. Improved glucose homeostasis. Enhanced satiety and portion control.",
          icon: TrendingUp
        },
        {
          period: "MONTH 3+",
          title: "Sustained Management",
          description: "Long-term weight maintenance. Established metabolic improvements. Optimized energy balance.",
          icon: Target
        }
      ],
      "Anti-Aging": [
        {
          period: "WEEK 1-2",
          title: "Cellular Pathways Activate",
          description: "Telomerase activity modulation begins. Antioxidant defense systems engage. Early cellular regeneration markers appear.",
          icon: Activity
        },
        {
          period: "MONTH 1",
          title: "Observable Improvements",
          description: "Enhanced skin quality and elasticity. Improved cellular turnover rates. Measurable biomarkers of aging deceleration.",
          icon: TrendingUp
        },
        {
          period: "MONTH 3+",
          title: "Long-term Maintenance",
          description: "Sustained cellular health optimization. Maintained anti-aging benefits. Established longevity pathway enhancement.",
          icon: Target
        }
      ],
      "Cognitive": [
        {
          period: "WEEK 1-2",
          title: "Neurotrophin Upregulation",
          description: "BDNF expression increases. Synaptic plasticity enhancement begins. Early neuroprotective mechanisms activate.",
          icon: Activity
        },
        {
          period: "MONTH 1",
          title: "Cognitive Clarity",
          description: "Enhanced focus and mental acuity. Improved memory consolidation. Measurable cognitive performance gains.",
          icon: TrendingUp
        },
        {
          period: "MONTH 3+",
          title: "Sustained Enhancement",
          description: "Long-term cognitive optimization. Maintained neuroplasticity improvements. Established brain health benefits.",
          icon: Target
        }
      ],
      "Wellness": [
        {
          period: "WEEK 1-2",
          title: "Systemic Activation",
          description: "Immune system modulation begins. Homeostatic mechanisms engage. Early wellness pathway optimization.",
          icon: Activity
        },
        {
          period: "MONTH 1",
          title: "Homeostatic Balance",
          description: "Enhanced immune function. Improved stress response. Measurable vitality and energy improvements.",
          icon: TrendingUp
        },
        {
          period: "MONTH 3+",
          title: "Optimized Function",
          description: "Sustained wellness enhancement. Long-term immune optimization. Established health and vitality benefits.",
          icon: Target
        }
      ]
    };

    return templates[category as keyof typeof templates] || templates["Recovery & Healing"];
  };

  const phases = getTimelinePhases(product.category);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const phaseVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  return (
    <section
      className={`py-20 md:py-24 relative overflow-hidden ${className}`}
      style={{
        background: "var(--gradient-transform)"
      }}
    >

      <div className="container-nex relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-primary mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What You Can Expect
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
            Research timeline based on preclinical studies and documented mechanisms of action
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={index}
                variants={phaseVariants}
                className="relative"
              >
                {/* Timeline connector line (desktop only) */}
                {index < phases.length - 1 && (
                  <div className="hidden md:block absolute top-16 right-0 w-8 h-px bg-acid-green/30 translate-x-4" />
                )}

                {/* Timeline node */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6 relative z-10"
                    style={{
                      backgroundColor: "var(--acid-green)",
                      boxShadow: "0 8px 24px rgba(198, 241, 132, 0.3)"
                    }}
                  >
                    <Icon className="w-8 h-8 text-dark" strokeWidth={1.5} />
                  </div>

                  {/* Period */}
                  <div className="text-sm font-bold uppercase tracking-wider text-acid-green mb-3">
                    {phase.period}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl font-bold text-primary mb-4 leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {phase.title}
                  </h3>

                  {/* Description */}
                  <p className="text-secondary leading-relaxed text-sm max-w-sm">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div
            className="max-w-3xl mx-auto p-6 border border-acid-green/20 rounded-xl"
            style={{ backgroundColor: "rgba(198, 241, 132, 0.05)" }}
          >
            <p className="text-xs text-tertiary leading-relaxed">
              <strong className="text-secondary">Research Use Only:</strong>{" "}
              Timelines are based on preclinical studies and documented mechanisms of action.
              Individual results may vary. This product is intended for qualified research use only.
              Not approved for human therapeutic use by FDA or other regulatory authorities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}