// Shared types and constants for /compounds page
import type { Product } from "@/lib/products";

export interface CompoundEntry extends Product {
  relatedArticles: { slug: string; title: string }[];
}

export const CATEGORY_META: Record<string, { color: string; bg: string; description: string }> = {
  "Recovery & Healing": {
    color: "#4A9B8E",
    bg: "rgba(74,155,142,0.08)",
    description: "Tissue repair, angiogenesis, anti-inflammatory signaling, and connective tissue remodeling.",
  },
  "Growth Hormone": {
    color: "#C9A24B",
    bg: "rgba(201,162,75,0.08)",
    description: "Somatotropic axis peptides: GHRH analogs, GHS-R1a agonists, and oral GH secretagogues.",
  },
  "Weight Management": {
    color: "#EF4444",
    bg: "rgba(239,68,68,0.08)",
    description: "GLP-1/GIP receptor agonists, lipolytic fragments, and metabolic regulatory peptides.",
  },
  "Anti-Aging": {
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.08)",
    description: "Telomerase activation, ECM restoration, mitochondrial protection, and longevity research.",
  },
  Cognitive: {
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.08)",
    description: "BDNF upregulation, anxiolytic mechanisms, neuroprotection, and CNS modulation.",
  },
  Wellness: {
    color: "#22C55E",
    bg: "rgba(34,197,94,0.08)",
    description: "Immune modulation, reproductive axis, social neuroscience, and broad metabolic support.",
  },
  Accessories: {
    color: "#64748B",
    bg: "rgba(100,116,139,0.08)",
    description: "USP-grade reconstitution supplies for peptide research protocols.",
  },
};
