import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for Nexphoria research-grade peptide compounds.",
};

export default function TermsPage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#0A0A08", paddingTop: "80px" }}
    >
      <div className="container-nex py-12">
        {/* Back link */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm transition-colors"
          style={{ color: "#A0A0A0" }}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1
            className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl"
            style={{ fontFamily: "var(--font-display)", color: "#FDFCF8" }}
          >
            Terms of Service
          </h1>
          <p className="text-sm" style={{ color: "#6B6B6B" }}>
            Last updated: May 27, 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-4xl">
          <div className="space-y-8 text-sm leading-relaxed" style={{ color: "#A0A0A0" }}>
            {/* Section 1 */}
            <section>
              <h2
                className="mb-4 text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "#FDFCF8" }}
              >
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the Nexphoria website and purchasing
                products from Nexphoria, you agree to be bound by these Terms of
                Service. If you do not agree to these terms, you may not access
                or use our services.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2
                className="mb-4 text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "#FDFCF8" }}
              >
                2. Research Use Only
              </h2>
              <p className="mb-3">
                All products sold by Nexphoria are intended strictly for
                laboratory research use only. By purchasing from Nexphoria, you
                acknowledge and agree that:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  Products are not intended for human consumption, diagnostic,
                  or therapeutic use
                </li>
                <li>
                  Products are not approved by the FDA or any regulatory
                  authority for human use
                </li>
                <li>
                  You are a qualified researcher or acting on behalf of a
                  qualified research institution
                </li>
                <li>
                  You will use products solely for legitimate research purposes
                </li>
                <li>
                  You assume full responsibility for compliance with all
                  applicable local, state, federal, and international laws and
                  regulations
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2
                className="mb-4 text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "#FDFCF8" }}
              >
                3. Age Requirement
              </h2>
              <p>
                You must be at least 21 years of age to purchase from Nexphoria.
                By placing an order, you confirm that you meet this age
                requirement.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2
                className="mb-4 text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "#FDFCF8" }}
              >
                4. Product Information and Accuracy
              </h2>
              <p>
                We strive to provide accurate product information, including
                purity specifications, molecular data, and certificates of
                analysis. However, we do not warrant that product descriptions or
                other content on this site is error-free, complete, or current.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2
                className="mb-4 text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "#FDFCF8" }}
              >
                5. Limitation of Liability
              </h2>
              <p className="mb-3">
                Nexphoria shall not be liable for any direct, indirect,
                incidental, special, consequential, or punitive damages arising
                from:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Use or inability to use our products</li>
                <li>Unauthorized use of products</li>
                <li>Any claim attributable to errors, omissions, or other inaccuracies</li>
                <li>Misuse of products for non-research purposes</li>
                <li>Regulatory violations by the purchaser</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2
                className="mb-4 text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "#FDFCF8" }}
              >
                6. Indemnification
              </h2>
              <p>
                You agree to indemnify, defend, and hold harmless Nexphoria, its
                officers, directors, employees, and agents from any claims,
                damages, losses, liabilities, and expenses arising from your use
                of our products or violation of these terms.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2
                className="mb-4 text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "#FDFCF8" }}
              >
                7. Shipping and Delivery
              </h2>
              <p>
                Products are shipped cold-chain with appropriate temperature
                control. Delivery times may vary. Nexphoria is not responsible
                for delays caused by shipping carriers or customs procedures.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2
                className="mb-4 text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "#FDFCF8" }}
              >
                8. Returns and Refunds
              </h2>
              <p>
                Due to the nature of research compounds, all sales are final.
                Products cannot be returned once shipped. If you receive a
                defective or incorrect product, contact us within 48 hours of
                delivery with photographic evidence.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2
                className="mb-4 text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "#FDFCF8" }}
              >
                9. Intellectual Property
              </h2>
              <p>
                All content on this website, including text, graphics, logos, and
                images, is the property of Nexphoria and protected by copyright
                and trademark laws.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2
                className="mb-4 text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "#FDFCF8" }}
              >
                10. Modifications to Terms
              </h2>
              <p>
                Nexphoria reserves the right to modify these Terms of Service at
                any time. Changes will be effective immediately upon posting.
                Your continued use of the site constitutes acceptance of modified
                terms.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2
                className="mb-4 text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "#FDFCF8" }}
              >
                11. Governing Law
              </h2>
              <p>
                These terms shall be governed by and construed in accordance with
                the laws of the United States, without regard to its conflict of
                law provisions.
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h2
                className="mb-4 text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "#FDFCF8" }}
              >
                12. Contact Information
              </h2>
              <p>
                For questions regarding these Terms of Service, please contact us
                at{" "}
                <a
                  href="mailto:legal@nexphoria.com"
                  className="font-medium transition-colors"
                  style={{ color: "#A8C97F" }}
                >
                  legal@nexphoria.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
