import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Nexphoria research-grade peptide compounds.",
};

export default function PrivacyPage() {
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
            Privacy Policy
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
                1. Introduction
              </h2>
              <p>
                Nexphoria is committed to protecting your privacy. This Privacy
                Policy explains how we collect, use, disclose, and safeguard your
                information when you visit our website or purchase our products.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2
                className="mb-4 text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "#FDFCF8" }}
              >
                2. Information We Collect
              </h2>
              <p className="mb-3">We may collect the following types of information:</p>
              <h3 className="mb-2 mt-4 text-lg font-semibold" style={{ color: "#FDFCF8" }}>
                Personal Information
              </h3>
              <ul className="ml-6 list-disc space-y-2">
                <li>Name and contact information</li>
                <li>Email address</li>
                <li>Shipping and billing address</li>
                <li>Phone number</li>
                <li>Research institution or organization affiliation</li>
                <li>Payment information (processed securely through third-party processors)</li>
              </ul>
              <h3 className="mb-2 mt-4 text-lg font-semibold" style={{ color: "#FDFCF8" }}>
                Usage Information
              </h3>
              <ul className="ml-6 list-disc space-y-2">
                <li>Browser type and version</li>
                <li>IP address</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website</li>
                <li>Device information</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2
                className="mb-4 text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "#FDFCF8" }}
              >
                3. How We Use Your Information
              </h2>
              <p className="mb-3">We use collected information for the following purposes:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Processing and fulfilling orders</li>
                <li>Communicating about orders, products, and services</li>
                <li>Providing customer support</li>
                <li>Verifying research credentials and qualifications</li>
                <li>Improving our website and services</li>
                <li>Complying with legal obligations and regulatory requirements</li>
                <li>Preventing fraud and unauthorized transactions</li>
                <li>Sending marketing communications (with your consent)</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2
                className="mb-4 text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "#FDFCF8" }}
              >
                4. Information Sharing and Disclosure
              </h2>
              <p className="mb-3">
                We do not sell or rent your personal information to third parties.
                We may share your information with:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>
                  Service providers who assist in order fulfillment, payment
                  processing, and shipping
                </li>
                <li>
                  Legal authorities when required by law or to protect our rights
                </li>
                <li>
                  Professional advisors, including lawyers and accountants
                </li>
                <li>
                  Business successors in the event of a merger or acquisition
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2
                className="mb-4 text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "#FDFCF8" }}
              >
                5. Cookies and Tracking Technologies
              </h2>
              <p>
                We use cookies and similar tracking technologies to enhance your
                browsing experience, analyze site traffic, and understand user
                behavior. You can control cookies through your browser settings.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2
                className="mb-4 text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "#FDFCF8" }}
              >
                6. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures to
                protect your personal information against unauthorized access,
                alteration, disclosure, or destruction. However, no method of
                transmission over the internet is completely secure.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2
                className="mb-4 text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "#FDFCF8" }}
              >
                7. Data Retention
              </h2>
              <p>
                We retain your personal information for as long as necessary to
                fulfill the purposes outlined in this policy, comply with legal
                obligations, resolve disputes, and enforce agreements.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2
                className="mb-4 text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "#FDFCF8" }}
              >
                8. Your Privacy Rights
              </h2>
              <p className="mb-3">Depending on your jurisdiction, you may have the right to:</p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your information</li>
                <li>Request restriction of processing</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, please contact us at{" "}
                <a
                  href="mailto:privacy@nexphoria.com"
                  className="font-medium transition-colors"
                  style={{ color: "#A8C97F" }}
                >
                  privacy@nexphoria.com
                </a>
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2
                className="mb-4 text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "#FDFCF8" }}
              >
                9. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites. We are not
                responsible for the privacy practices of these external sites. We
                encourage you to review their privacy policies.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2
                className="mb-4 text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "#FDFCF8" }}
              >
                10. Children's Privacy
              </h2>
              <p>
                Our services are not directed to individuals under the age of 21.
                We do not knowingly collect personal information from anyone under
                21 years of age.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2
                className="mb-4 text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "#FDFCF8" }}
              >
                11. International Data Transfers
              </h2>
              <p>
                Your information may be transferred to and processed in countries
                other than your own. We ensure appropriate safeguards are in place
                to protect your information in accordance with this Privacy
                Policy.
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h2
                className="mb-4 text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "#FDFCF8" }}
              >
                12. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of significant changes by posting the new policy on
                this page with an updated revision date.
              </p>
            </section>

            {/* Section 13 */}
            <section>
              <h2
                className="mb-4 text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "#FDFCF8" }}
              >
                13. Contact Us
              </h2>
              <p>
                If you have questions or concerns about this Privacy Policy,
                please contact us at:
              </p>
              <div className="mt-4 space-y-1">
                <p>Email: <a
                  href="mailto:privacy@nexphoria.com"
                  className="font-medium transition-colors"
                  style={{ color: "#A8C97F" }}
                >
                  privacy@nexphoria.com
                </a></p>
                <p>General inquiries: <a
                  href="mailto:research@nexphoria.com"
                  className="font-medium transition-colors"
                  style={{ color: "#A8C97F" }}
                >
                  research@nexphoria.com
                </a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
