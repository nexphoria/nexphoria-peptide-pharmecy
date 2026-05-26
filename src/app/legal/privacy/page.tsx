import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Nexphoria Privacy Policy — how we collect, use, and protect your data.",
};

const sections = [
  {
    title: "Information We Collect",
    content:
      "We collect information you provide directly, including: name and contact information, email address, institutional affiliation, order and transaction data, and communications with our team. We may also collect technical data such as IP address, browser type, and pages visited through standard server logging.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use collected information to: process and fulfill orders, verify researcher credentials and compliance, respond to inquiries, send order confirmations and shipping notifications, send research updates if you have opted in, comply with legal obligations, and prevent fraud and unauthorized use.",
  },
  {
    title: "Information Sharing",
    content:
      "We do not sell, rent, or trade your personal information to third parties. We may share information with trusted service providers who assist in operating our website and fulfilling orders, subject to confidentiality obligations. We may disclose information as required by law or to protect our legal rights.",
  },
  {
    title: "Data Security",
    content:
      "We implement reasonable technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission or electronic storage is fully secure.",
  },
  {
    title: "Data Retention",
    content:
      "We retain personal data for as long as necessary to fulfill the purposes described in this policy, including legal, accounting, and regulatory requirements. Order records are retained for a minimum of 7 years to comply with applicable laws.",
  },
  {
    title: "Your Rights",
    content:
      "Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict processing of your personal data. To exercise these rights, contact us at privacy@nexphoria.com. We will respond within 30 days.",
  },
  {
    title: "Cookies",
    content:
      "Our website may use essential cookies for functionality. We do not use advertising or tracking cookies. You can control cookie settings through your browser.",
  },
  {
    title: "Changes to This Policy",
    content:
      "We may update this Privacy Policy periodically. Changes will be posted on this page with an updated effective date. Continued use of our website constitutes acceptance of the revised policy.",
  },
  {
    title: "Contact Us",
    content: "Privacy inquiries: privacy@nexphoria.com",
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-ceramic text-black pt-36 pb-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <span className="section-label text-label text-grey-olive mb-5 block">Legal</span>
          <h1 className="text-h1 font-medium leading-tight tracking-tight">Privacy Policy</h1>
          <p className="text-sm text-grey-olive mt-4">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>

        <div className="space-y-8 text-grey-olive">
          <p className="leading-relaxed">
            Nexphoria (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to
            protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our website or place an order with us.
          </p>
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
