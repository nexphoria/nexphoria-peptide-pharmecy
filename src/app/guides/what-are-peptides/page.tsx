import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Are Peptides — Nexphoria",
  description: "A comprehensive guide to peptides: their structure, function, and role in modern research. Learn how amino acid chains influence biological processes.",
  openGraph: {
    title: "What Are Peptides — Nexphoria",
    description: "A comprehensive guide to peptides: their structure, function, and role in modern research.",
  },
};

export default function WhatArePeptidesPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
        <nav className="mb-8 text-sm text-neutral-500">
          <Link href="/guides" className="hover:text-[#B8A44C] transition-colors">Guides</Link>
          <span className="mx-2">/</span>
          <span className="text-neutral-300">What Are Peptides</span>
        </nav>

        <h1 className="font-cormorant text-4xl sm:text-5xl font-light mb-6 text-white">
          What Are Peptides
        </h1>
        <p className="text-neutral-400 text-lg mb-12 border-b border-neutral-800 pb-8">
          The fundamental building blocks of biological signaling — and why researchers worldwide are studying their therapeutic potential.
        </p>

        <article className="prose prose-invert prose-lg max-w-none space-y-8">
          <section>
            <h2 className="font-cormorant text-2xl text-[#B8A44C] mb-4">The Basics</h2>
            <p className="text-neutral-300 leading-relaxed">
              Peptides are short chains of amino acids — typically between 2 and 50 residues — linked by peptide bonds. They are distinguished from proteins primarily by their length; proteins contain 50 or more amino acids. Despite their smaller size, peptides play outsized roles in nearly every biological system.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              Your body produces thousands of peptides naturally. They function as hormones, neurotransmitters, growth factors, and immune modulators. Insulin, oxytocin, and endorphins are all peptides. They are the chemical messengers that coordinate healing, growth, metabolism, and cellular repair.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-[#B8A44C] mb-4">How Peptides Work</h2>
            <p className="text-neutral-300 leading-relaxed">
              Peptides operate by binding to specific receptors on cell surfaces, triggering intracellular signaling cascades. Each peptide has a unique amino acid sequence that determines its three-dimensional structure — and therefore which receptors it can activate.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              This specificity is what makes peptides so compelling for research. Unlike broad-spectrum compounds, peptides can target precise biological pathways. BPC-157, for example, modulates the FAK-paxillin pathway involved in tissue repair. GHK-Cu activates over 4,000 genes related to tissue remodeling. Each peptide has a distinct mechanism.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-[#B8A44C] mb-4">Categories of Research Peptides</h2>
            <div className="space-y-4">
              {[
                { name: "Recovery & Repair", desc: "BPC-157, TB-500, and their analogs target tissue healing pathways — tendon, muscle, gut lining, and vascular repair." },
                { name: "Growth Hormone Secretagogues", desc: "Ipamorelin, CJC-1295, Sermorelin, and Tesamorelin stimulate natural GH release from the pituitary, supporting body composition and recovery." },
                { name: "Metabolic & Weight Management", desc: "Semaglutide, Tirzepatide, and Retatrutide act on incretin pathways (GLP-1, GIP, glucagon) to regulate appetite and glucose metabolism." },
                { name: "Neuroprotective", desc: "Selank, Semax, and DSIP modulate neurotransmitter systems, studied for cognitive function, stress resilience, and sleep architecture." },
                { name: "Anti-Aging & Longevity", desc: "Epitalon, GHK-Cu, NAD+, and SS-31 target telomere maintenance, mitochondrial function, and cellular senescence." },
                { name: "Immune Modulation", desc: "Thymosin Alpha-1, LL-37, and KPV influence innate and adaptive immune responses through distinct receptor pathways." },
              ].map((cat) => (
                <div key={cat.name} className="border border-neutral-800 rounded-lg p-4">
                  <h3 className="text-white font-medium mb-1">{cat.name}</h3>
                  <p className="text-neutral-400 text-sm">{cat.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-[#B8A44C] mb-4">Peptide Purity and Quality</h2>
            <p className="text-neutral-300 leading-relaxed">
              The quality of research peptides varies dramatically between suppliers. Key indicators of a reputable source include third-party testing, published Certificates of Analysis (COA), HPLC purity verification above 98%, and proper lyophilization and storage protocols.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              At Nexphoria, every batch undergoes independent laboratory analysis. Purity is verified via High-Performance Liquid Chromatography (HPLC) and Mass Spectrometry (MS). Results are published and accessible for every product.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-[#B8A44C] mb-4">The Research Landscape</h2>
            <p className="text-neutral-300 leading-relaxed">
              Peptide research has accelerated dramatically in the past decade. PubMed indexes over 300,000 published studies involving peptides. The FDA has approved more than 80 peptide-based therapeutics, with hundreds more in clinical trials. The global peptide therapeutics market is projected to exceed $50 billion by 2030.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              Research institutions, universities, and independent laboratories worldwide continue to investigate novel peptide applications across oncology, neurology, endocrinology, and regenerative medicine.
            </p>
          </section>

          <div className="border-t border-neutral-800 pt-8 mt-12">
            <p className="text-neutral-500 text-sm italic">
              For Research Use Only. This material is provided for educational and informational purposes. It is not intended to diagnose, treat, cure, or prevent any disease.
            </p>
          </div>

          <div className="flex gap-4 mt-8">
            <Link href="/guides/reconstitution" className="text-[#B8A44C] hover:underline text-sm">
              Next: Reconstitution Guide →
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
