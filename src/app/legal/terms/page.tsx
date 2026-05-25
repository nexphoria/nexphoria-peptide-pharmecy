import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Nexphoria Terms of Use — conditions governing access to our website and purchase of research compounds.",
};

export default function TermsPage() {
  return (
    <div className="bg-cream text-near-black pt-36 pb-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-brand-primary" />
            <span className="text-xs uppercase tracking-[0.2em] text-charcoal font-medium">Legal</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-medium leading-[0.95] tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            Terms of Use
          </h1>
          <p className="text-sm text-stone mt-4">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
        </div>

        <div className="space-y-8 text-charcoal">
          <p className="leading-relaxed">
            By accessing or using nexphoria.com ("Site") or purchasing products from
            Nexphoria, you agree to be bound by these Terms of Use. If you do not
            agree, do not use this Site or purchase our products.
          </p>

          {[
            {
              title: "Eligibility",
              content: `You must be at least 18 years of age and a qualified researcher, licensed professional, or authorized representative of a credentialed institution to purchase from Nexphoria. By purchasing, you represent that you meet these requirements.`,
            },
            {
              title: "Research Use Only",
              content: `All Nexphoria products are sold for qualified scientific research purposes only. You may not purchase, possess, or use Nexphoria products for human or animal consumption, therapeutic use, diagnostic use, or any purpose other than legitimate scientific research. Misuse of research compounds may be illegal and is strictly prohibited.`,
            },
            {
              title: "Intellectual Property",
              content: `All content on this Site, including text, graphics, logos, and images, is the property of Nexphoria and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.`,
            },
            {
              title: "Orders and Payment",
              content: `All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order. Prices are subject to change without notice. Payment is due at time of order.`,
            },
            {
              title: "Disclaimer of Warranties",
              content: `Nexphoria products are provided "as is" for research purposes. We make no warranties, express or implied, regarding fitness for any particular purpose beyond the stated research use. Research compounds carry inherent risks; appropriate safety protocols must be followed at all times.`,
            },
            {
              title: "Limitation of Liability",
              content: `To the fullest extent permitted by law, Nexphoria shall not be liable for any indirect, incidental, consequential, or punitive damages arising from use of our products or website. Our total liability shall not exceed the amount paid for the specific order giving rise to the claim.`,
            },
            {
              title: "Indemnification",
              content: `You agree to indemnify, defend, and hold harmless Nexphoria and its officers, directors, employees, and agents from any claims, damages, or expenses arising from your use of our products or violation of these Terms.`,
            },
            {
              title: "Governing Law",
              content: `These Terms are governed by the laws of the United States and the state in which Nexphoria is incorporated. Any disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.`,
            },
            {
              title: "Changes to Terms",
              content: `We may modify these Terms at any time. Continued use of the Site or purchase of products after changes are posted constitutes acceptance of the revised Terms.`,
            },
            {
              title: "Contact",
              content: `Legal inquiries: legal@nexphoria.com`,
            },
          ].map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-medium mb-3" style={{ fontFamily: "var(--font-display)" }}>
                {section.title}
              </h2>
              <p className="leading-relaxed text-sm">{section.content}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
