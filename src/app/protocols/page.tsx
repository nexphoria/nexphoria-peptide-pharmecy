import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Research Cycles & Protocols | Nexphoria",
  description:
    "Understand the Nexphoria research-cycle model — 3-Month and 6-Month cycles, monthly billing, reconstitution and storage guidance, and research-use terms.",
};

export default function ProtocolsPage() {
  return (
    <div style={{ backgroundColor: "#EAE7E3" }}>
      {/* Header band */}
      <section className="relative px-6 pt-32 pb-16 md:pt-40 md:pb-20" style={{ backgroundColor: "#010101" }}>
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            variant="dark"
            className="mb-8"
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: "Research Protocols" },
            ]}
          />
          <p className="text-xs uppercase tracking-widest mb-6" style={{ color: "#C9DD69" }}>
            Research Cycles
          </p>
          <h1
            className="text-4xl md:text-5xl mb-6"
            style={{ fontWeight: 200, color: "#FFFFF3", lineHeight: 1.05, letterSpacing: "-0.02em" }}
          >
            The research-cycle model.
          </h1>
          <p className="text-lg max-w-2xl" style={{ fontWeight: 300, lineHeight: 1.6, color: "#A0A0A0" }}>
            Most research questions are not answered in a single shipment. A
            research cycle aligns supply to the window over which a compound is
            actually studied — so material is on the bench when a protocol calls
            for it, without over-ordering up front.
          </p>
        </div>
      </section>

      {/* Two cycle options */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* 3-Month */}
            <div
              className="rounded-sm p-8 bg-white-card"
              style={{ border: "1px solid rgba(0,0,0,0.06)", borderTop: "2px solid #C9DD69" }}
            >
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#B8923A" }}>
                Standard
              </p>
              <h2 className="text-2xl mb-3 text-near-black" style={{ fontWeight: 300 }}>
                3-Month Research Cycle
              </h2>
              <p className="text-sm text-stone mb-6" style={{ lineHeight: 1.7 }}>
                A single response window. Three monthly shipments provide enough
                material to run a defined protocol from initiation through an
                initial observation period, with consistent lot continuity across
                the cycle. Suited to recovery, growth-hormone-axis, and metabolic
                research questions that resolve over weeks rather than months.
              </p>
              <ul className="space-y-3">
                {[
                  "Three monthly shipments, billed monthly",
                  "Continuity of supply across one protocol window",
                  "Lot-specific Certificate of Analysis with each shipment",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: "#C9DD69" }}
                    />
                    <span className="text-sm text-stone">{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 6-Month */}
            <div
              className="rounded-sm p-8 bg-white-card"
              style={{ border: "1px solid rgba(0,0,0,0.06)", borderTop: "2px solid #B8923A" }}
            >
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#B8923A" }}>
                Extended
              </p>
              <h2 className="text-2xl mb-3 text-near-black" style={{ fontWeight: 300 }}>
                6-Month Research Cycle
              </h2>
              <p className="text-sm text-stone mb-6" style={{ lineHeight: 1.7 }}>
                Two cycles across an extended timeframe. Six monthly shipments
                support longer-running protocols — longevity, anti-aging, and
                tissue-repair research, or any design that compares an initial
                response window against a sustained follow-up. Material arrives in
                step with the study rather than in a single large order.
              </p>
              <ul className="space-y-3">
                {[
                  "Six monthly shipments, billed monthly",
                  "Built for extended and comparative protocols",
                  "Lot-specific Certificate of Analysis with each shipment",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: "#B8923A" }}
                    />
                    <span className="text-sm text-stone">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-sm text-stone mt-6" style={{ lineHeight: 1.7 }}>
            A one-time purchase remains the default for any single product. Cycles
            are optional and selected at the point of ordering.
          </p>
        </div>
      </section>

      {/* What to expect + billing */}
      <section className="px-6 py-16 md:py-20" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: "#C9DD69" }} />
            <span className="text-xs uppercase tracking-widest" style={{ color: "#B8923A" }}>
              What to Expect
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl mb-8 text-near-black" style={{ fontWeight: 200 }}>
            How a cycle runs.
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg mb-2 text-near-black" style={{ fontWeight: 400 }}>
                Monthly billing
              </h3>
              <p className="text-sm text-stone" style={{ lineHeight: 1.7 }}>
                Cycles are billed monthly for the duration of the cycle — three
                payments for a 3-Month Cycle, six for a 6-Month Cycle — rather than
                as a single charge. Each billing period corresponds to one
                shipment. There are no day-, week-, or quantity-based dropdowns;
                the cycle length is the only schedule decision.
              </p>
            </div>

            <div>
              <h3 className="text-lg mb-2 text-near-black" style={{ fontWeight: 400 }}>
                Shipments and continuity
              </h3>
              <p className="text-sm text-stone" style={{ lineHeight: 1.7 }}>
                A shipment is dispatched for each cycle month. Where possible,
                material is supplied from consistent lots to reduce batch-to-batch
                variability across a protocol. Every shipment is cold-chain
                packaged and accompanied by the Certificate of Analysis for the lot
                supplied.
              </p>
            </div>

            <div>
              <h3 className="text-lg mb-2 text-near-black" style={{ fontWeight: 400 }}>
                Documentation
              </h3>
              <p className="text-sm text-stone" style={{ lineHeight: 1.7 }}>
                Each compound page lists its full specification — sequence,
                molecular formula, purity, appearance, solubility, storage, and
                reconstitution guidance. Reviewing these before a cycle begins
                allows the protocol and storage plan to be set in advance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reconstitution & storage */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: "#C9DD69" }} />
            <span className="text-xs uppercase tracking-widest" style={{ color: "#B8923A" }}>
              Handling
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl mb-8 text-near-black" style={{ fontWeight: 200 }}>
            General reconstitution &amp; storage guidance.
          </h2>
          <p className="text-sm text-stone mb-8" style={{ lineHeight: 1.7 }}>
            The following is general laboratory guidance. Always defer to the
            specific storage, solubility, and reconstitution values listed on each
            product page, as they vary by compound.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Lyophilized storage",
                body: "Most lyophilized peptides are stored desiccated at −20°C, protected from light and moisture, and are stable for extended periods in that state. Some copper- and temperature-sensitive compounds are refrigerated at 2–8°C instead — confirm per product.",
              },
              {
                title: "Reconstitution",
                body: "Reconstitute with sterile or bacteriostatic water, adding solvent slowly down the vial wall. Swirl gently to dissolve; do not vortex or shake. Allow the vial to fully clarify before use.",
              },
              {
                title: "After reconstitution",
                body: "Reconstituted solutions are generally stored at 2–8°C and used within the window stated on the product page. Avoid repeated freeze-thaw cycles, which can degrade peptide integrity.",
              },
              {
                title: "Light and contamination",
                body: "Keep light-sensitive compounds shielded and use aseptic technique throughout. Some peptides require polypropylene rather than glass surfaces to limit adsorption — check the product specification.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-sm p-6 bg-white-card"
                style={{ border: "1px solid rgba(0,0,0,0.06)" }}
              >
                <h3 className="text-base mb-2 text-near-black" style={{ fontWeight: 500 }}>
                  {card.title}
                </h3>
                <p className="text-sm text-stone" style={{ lineHeight: 1.7 }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research-use disclaimer */}
      <section className="px-6 py-16 md:py-20" style={{ backgroundColor: "#010101" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest mb-6" style={{ color: "#C9DD69" }}>
            Research Use Only
          </p>
          <h2
            className="text-2xl md:text-3xl mb-6"
            style={{ fontWeight: 200, color: "#EAE7E3", lineHeight: 1.3 }}
          >
            For qualified research applications.
          </h2>
          <p className="text-sm mb-4" style={{ color: "#A0A0A0", lineHeight: 1.8 }}>
            All compounds supplied by Nexphoria are intended exclusively for
            laboratory research and analytical use by qualified professionals.
            They are not drugs, foods, cosmetics, or medical devices, are not
            approved for human or veterinary use, and are not intended to
            diagnose, treat, cure, or prevent any condition.
          </p>
          <p className="text-sm" style={{ color: "#A0A0A0", lineHeight: 1.8 }}>
            Purchasers are responsible for handling, storing, and using these
            materials in accordance with applicable institutional protocols and
            regulations. Nothing on this page constitutes medical advice or a
            recommendation for use in humans.
          </p>

          <div className="mt-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold uppercase tracking-wide text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#A4B08A", color: "#000000" }}
            >
              Browse the Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
