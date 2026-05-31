import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Peptide Storage & Handling Guide — Nexphoria",
  description: "Proper storage and handling protocols for research peptides. Learn about lyophilized vs reconstituted storage, temperature requirements, and cold-chain integrity.",
  openGraph: {
    title: "Peptide Storage & Handling Guide — Nexphoria",
    description: "Proper storage and handling protocols for research peptides.",
  },
};

export default function StorageHandlingPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
        <nav className="mb-8 text-sm text-neutral-500">
          <Link href="/guides" className="hover:text-[#B8A44C] transition-colors">Guides</Link>
          <span className="mx-2">/</span>
          <span className="text-neutral-300">Storage & Handling</span>
        </nav>

        <h1 className="font-cormorant text-4xl sm:text-5xl font-light mb-6 text-white">
          Storage & Handling
        </h1>
        <p className="text-neutral-400 text-lg mb-12 border-b border-neutral-800 pb-8">
          Proper storage is the difference between effective research compounds and degraded material. Follow these protocols to maintain peptide integrity.
        </p>

        <article className="space-y-10">
          <section>
            <h2 className="font-cormorant text-2xl text-[#B8A44C] mb-4">Lyophilized (Powder) Storage</h2>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 space-y-3">
              <div className="flex justify-between items-center border-b border-neutral-800 pb-3">
                <span className="text-neutral-400">Temperature</span>
                <span className="text-white font-medium">-20°C (freezer) preferred, 2-8°C acceptable</span>
              </div>
              <div className="flex justify-between items-center border-b border-neutral-800 pb-3">
                <span className="text-neutral-400">Shelf Life</span>
                <span className="text-white font-medium">24-36 months at -20°C</span>
              </div>
              <div className="flex justify-between items-center border-b border-neutral-800 pb-3">
                <span className="text-neutral-400">Light Exposure</span>
                <span className="text-white font-medium">Keep in original amber vial, away from light</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-400">Humidity</span>
                <span className="text-white font-medium">Keep sealed until ready for reconstitution</span>
              </div>
            </div>
            <p className="text-neutral-300 leading-relaxed mt-4">
              Lyophilized peptides are the most stable form. The freeze-drying process removes water, halting degradation. In this state, most peptides remain viable for years when stored properly. Do not open the vial seal until you are ready to reconstitute.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-[#B8A44C] mb-4">Reconstituted (Liquid) Storage</h2>
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 space-y-3">
              <div className="flex justify-between items-center border-b border-neutral-800 pb-3">
                <span className="text-neutral-400">Temperature</span>
                <span className="text-white font-medium">2-8°C (refrigerator) — never freeze reconstituted peptides</span>
              </div>
              <div className="flex justify-between items-center border-b border-neutral-800 pb-3">
                <span className="text-neutral-400">Shelf Life</span>
                <span className="text-white font-medium">14-30 days depending on peptide</span>
              </div>
              <div className="flex justify-between items-center border-b border-neutral-800 pb-3">
                <span className="text-neutral-400">Solvent</span>
                <span className="text-white font-medium">Bacteriostatic water (BAC water) preferred</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-400">Handling</span>
                <span className="text-white font-medium">Swab vial tops with alcohol before each access</span>
              </div>
            </div>
            <p className="text-neutral-300 leading-relaxed mt-4">
              Once reconstituted, peptides are in solution and susceptible to bacterial contamination and thermal degradation. Bacteriostatic water contains 0.9% benzyl alcohol, which inhibits microbial growth and extends usable life compared to sterile water.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-[#B8A44C] mb-4">Cold-Chain Shipping</h2>
            <p className="text-neutral-300 leading-relaxed">
              Nexphoria ships all peptides with cold-chain protocols. Packages include insulated containers with gel ice packs designed to maintain 2-8°C for up to 48 hours in transit. Upon arrival, transfer peptides to appropriate storage immediately.
            </p>
            <p className="text-neutral-300 leading-relaxed">
              If a package arrives warm or with melted ice packs, contact support. Brief temperature excursions during shipping rarely affect lyophilized peptides, but extended exposure above 25°C should be evaluated.
            </p>
          </section>

          <section>
            <h2 className="font-cormorant text-2xl text-[#B8A44C] mb-4">Common Mistakes to Avoid</h2>
            <ul className="space-y-3">
              {[
                "Freezing reconstituted peptides — ice crystal formation damages the molecular structure",
                "Repeated freeze-thaw cycles of lyophilized vials — commit to storage at one temperature",
                "Using non-sterile water for reconstitution — always use bacteriostatic or sterile water",
                "Leaving vials at room temperature — return to refrigerator immediately after each use",
                "Touching the rubber stopper without alcohol swab — introduces contamination risk",
              ].map((mistake, i) => (
                <li key={i} className="flex items-start gap-3 text-neutral-300">
                  <span className="text-red-400 mt-1 text-sm">✕</span>
                  <span>{mistake}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="border-t border-neutral-800 pt-8 mt-12">
            <p className="text-neutral-500 text-sm italic">
              For Research Use Only. This material is provided for educational and informational purposes.
            </p>
          </div>

          <div className="flex gap-4 mt-8">
            <Link href="/guides/reconstitution" className="text-[#B8A44C] hover:underline text-sm">
              ← Reconstitution Guide
            </Link>
            <Link href="/guides/coa-verification" className="text-[#B8A44C] hover:underline text-sm ml-auto">
              How to Read a COA →
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
