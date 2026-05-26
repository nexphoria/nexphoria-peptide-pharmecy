import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research Use Disclaimer",
  description:
    "Nexphoria compounds are for qualified research use only. Not for human consumption, diagnostic, or therapeutic use.",
};

const sections = [
  {
    title: "Research Use Only",
    content:
      "Nexphoria compounds are sold exclusively for in vitro and in vivo laboratory research conducted by qualified researchers operating within the scope of applicable state and federal regulations. By purchasing from Nexphoria, the buyer represents and warrants that: (1) The buyer is a qualified researcher, licensed professional, or credentialed institution. (2) The compounds will be used solely for legitimate scientific research purposes. (3) The compounds will not be used for human or animal consumption. (4) The buyer holds all necessary licenses, permits, and authorizations required by applicable law. (5) The compounds will be stored, handled, and disposed of in accordance with applicable safety regulations.",
  },
  {
    title: "FDA Status",
    content:
      "These statements and products have not been evaluated by the Food and Drug Administration (FDA). Nexphoria products are not drugs and are not intended to diagnose, treat, cure, or prevent any disease or medical condition. Nexphoria does not make any medical claims regarding its compounds.",
  },
  {
    title: "Regulatory Compliance",
    content:
      "The buyer is solely responsible for compliance with all applicable federal, state, and local laws and regulations governing the purchase, possession, use, and disposal of research compounds. Laws and regulations vary by jurisdiction. Nexphoria makes no representations regarding the legal status of any compound in any specific jurisdiction. Nexphoria reserves the right to refuse any order that raises concerns about intended use or compliance with applicable law.",
  },
  {
    title: "Limitation of Liability",
    content:
      "Nexphoria shall not be liable for any damages arising from the misuse, improper handling, or unauthorized use of its research compounds. The buyer assumes all risks associated with the purchase and use of Nexphoria products and agrees to indemnify and hold Nexphoria harmless from any claims arising from such use.",
  },
  {
    title: "Age Restriction",
    content:
      "You must be at least 18 years of age to purchase from Nexphoria. By placing an order, you confirm that you meet this age requirement and that all information provided is accurate and complete.",
  },
  {
    title: "Contact",
    content: "Questions regarding this disclaimer may be directed to legal@nexphoria.com.",
  },
];

export default function DisclaimerPage() {
  return (
    <div className="bg-ceramic text-black pt-36 pb-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <span className="section-label text-label text-grey-olive mb-5 block">Legal</span>
          <h1 className="text-h1 font-medium leading-tight tracking-tight">
            Research Use
            <br />
            Disclaimer
          </h1>
          <p className="text-sm text-grey-olive mt-4">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>

        <div className="p-6 bg-black text-ceramic border-l-4 border-acid-green mb-10">
          <p className="text-label text-acid-green mb-3">Important Notice</p>
          <p className="leading-relaxed text-sm">
            All products and compounds offered by Nexphoria are intended strictly for qualified
            research purposes by licensed professionals in controlled laboratory settings. These
            products are <strong className="text-ceramic">not intended for human or animal consumption</strong>,
            diagnostic use, therapeutic use, or any clinical application.
          </p>
        </div>

        <div className="space-y-8 text-grey-olive">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-medium mb-3 text-black">{section.title}</h2>
              <p className="leading-relaxed text-sm">{section.content}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
