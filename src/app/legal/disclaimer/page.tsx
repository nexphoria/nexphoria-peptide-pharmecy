import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research Use Disclaimer",
  description:
    "Nexphoria compounds are for qualified research use only. Not for human consumption, diagnostic, or therapeutic use.",
};

export default function DisclaimerPage() {
  return (
    <div className="bg-cream text-near-black pt-36 pb-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-brand-primary" />
            <span className="text-xs uppercase tracking-[0.2em] text-charcoal font-medium">
              Legal
            </span>
          </div>
          <h1
            className="text-5xl md:text-6xl font-medium leading-[0.95] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Research Use
            <br />
            Disclaimer
          </h1>
          <p className="text-sm text-stone mt-4">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
        </div>

        <div className="prose prose-sm max-w-none space-y-8 text-charcoal">
          <div className="p-6 bg-near-black text-white border-l-4 border-brand-primary">
            <p className="font-medium text-brand-primary uppercase tracking-wider text-xs mb-3">Important Notice</p>
            <p className="leading-relaxed">
              All products and compounds offered by Nexphoria are intended strictly
              for qualified research purposes by licensed professionals in controlled
              laboratory settings. These products are <strong className="text-white">not intended for human
              or animal consumption</strong>, diagnostic use, therapeutic use, or any
              clinical application.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-medium mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Research Use Only
            </h2>
            <p className="leading-relaxed mb-4">
              Nexphoria compounds are sold exclusively for in vitro and in vivo
              laboratory research conducted by qualified researchers operating within
              the scope of applicable state and federal regulations. By purchasing
              from Nexphoria, the buyer represents and warrants that:
            </p>
            <ul className="space-y-2 pl-4">
              {[
                "The buyer is a qualified researcher, licensed professional, or credentialed institution.",
                "The compounds will be used solely for legitimate scientific research purposes.",
                "The compounds will not be used for human or animal consumption.",
                "The buyer holds all necessary licenses, permits, and authorizations required by applicable law.",
                "The compounds will be stored, handled, and disposed of in accordance with applicable safety regulations.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
                  <span className="text-brand-primary mt-0.5 shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium mb-4" style={{ fontFamily: "var(--font-display)" }}>
              FDA Status
            </h2>
            <p className="leading-relaxed">
              These statements and products have not been evaluated by the Food and
              Drug Administration (FDA). Nexphoria products are not drugs and are
              not intended to diagnose, treat, cure, or prevent any disease or
              medical condition. Nexphoria does not make any medical claims
              regarding its compounds.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Regulatory Compliance
            </h2>
            <p className="leading-relaxed mb-4">
              The buyer is solely responsible for compliance with all applicable
              federal, state, and local laws and regulations governing the
              purchase, possession, use, and disposal of research compounds.
              Laws and regulations vary by jurisdiction. Nexphoria makes no
              representations regarding the legal status of any compound in any
              specific jurisdiction.
            </p>
            <p className="leading-relaxed">
              Nexphoria reserves the right to refuse any order that, in its
              reasonable judgment, raises concerns about intended use or
              compliance with applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Limitation of Liability
            </h2>
            <p className="leading-relaxed">
              Nexphoria shall not be liable for any damages arising from the
              misuse, improper handling, or unauthorized use of its research
              compounds. The buyer assumes all risks associated with the purchase
              and use of Nexphoria products and agrees to indemnify and hold
              Nexphoria harmless from any claims arising from such use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Age Restriction
            </h2>
            <p className="leading-relaxed">
              You must be at least 18 years of age to purchase from Nexphoria.
              By placing an order, you confirm that you meet this age requirement
              and that all information provided is accurate and complete.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Contact
            </h2>
            <p className="leading-relaxed">
              Questions regarding this disclaimer may be directed to{" "}
              <a href="mailto:legal@nexphoria.com" className="underline hover:text-near-black">
                legal@nexphoria.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
