import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Returns & Refunds Policy | Nexphoria Research Peptides",
  description:
    "Nexphoria's full returns, refunds, and replacement policy for research compound orders. Covers damaged shipments, wrong items, lost orders, and subscription cancellations.",
  openGraph: {
    title: "Returns & Refunds | Nexphoria",
    description:
      "When we fix it — and when we don't. Clear policy on replacements for transit damage, wrong compounds, and lost shipments.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

const eligibleCases = [
  {
    title: "Damaged in Transit",
    window: "48 hours of delivery",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    description:
      "Package arrived with broken vials, compromised tamper seal, or evidence of cold-chain failure (warm gel packs, thawed contents). Document with photos before opening.",
    resolution: "Full replacement shipped within 1 business day, or full refund — your choice.",
  },
  {
    title: "Wrong Compound Shipped",
    window: "7 days of delivery",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 3M21 7.5H7.5" />
      </svg>
    ),
    description:
      "The compound name or lot number on the vial does not match your order confirmation. Do not open or use the compound. Cross-reference your packing slip against the COA.",
    resolution: "Priority replacement of the correct compound shipped within 1 business day.",
  },
  {
    title: "Broken Seal on Arrival",
    window: "48 hours of delivery",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    description:
      "Vial crimp cap is visibly broken, rubber stopper is displaced, or the vial seal shows signs of prior penetration on arrival. Photograph immediately.",
    resolution: "Replacement issued or full refund after photo verification.",
  },
  {
    title: "Lost in Transit",
    window: "5 business days past expected delivery",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    description:
      "Tracking shows no movement for 3+ business days, or delivery was not confirmed after the expected delivery window. We will open a carrier trace investigation.",
    resolution: "Reship at no charge once carrier confirms the loss (typically 1–3 business days).",
  },
];

const ineligibleCases = [
  "Opened vials — any vial with a penetrated stopper is considered used",
  "Reconstituted or partially used compounds",
  "Compounds stored incorrectly after delivery (your responsibility per our storage guide)",
  "Change of mind or ordering the wrong compound — verify your order before submitting",
  "Shipping delays caused by the carrier, weather, or events outside our control",
  "Compounds held by customs (we do not ship internationally — this should not occur)",
  "Orders where the claim window has expired",
];

const steps = [
  {
    number: "01",
    title: "Document immediately",
    body: "Before opening or moving anything — photograph the outer box, tamper seal, internal packaging, gel packs, and each vial. Time-stamp matters if there is a dispute.",
  },
  {
    number: "02",
    title: "Email us within your window",
    body: "Send your order number, a clear description of the issue, and all photos to research@nexphoria.com. Include the lot number from your packing slip.",
  },
  {
    number: "03",
    title: "We assess and confirm",
    body: "Our team reviews within 4 business hours. We may request additional documentation. We do not ask you to return compounds — they stay with you.",
  },
  {
    number: "04",
    title: "Resolution dispatched",
    body: "Once confirmed, your replacement ships same or next business day, or your refund is issued to the original payment method within 3–5 business days.",
  },
];

export default function ReturnsPage() {
  return (
    <div style={{ backgroundColor: "#F5F2EB", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#1A1A18", paddingTop: "80px" }}
      >
        <div className="container-nex py-16 md:py-20">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Returns & Refunds" },
            ]}
            variant="dark"
          />
          <div className="mt-8 max-w-3xl">
            <p className="eyebrow mb-4" style={{ color: "#B8A44C" }}>
              Returns & Refunds
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6"
              style={{ color: "#F5F2EB" }}
            >
              When Something Goes Wrong,{" "}
              <span style={{ color: "#d4af37" }}>We Fix It</span>
            </h1>
            <p className="body-lg" style={{ color: "rgba(255,255,255,0.6)" }}>
              All sales on correctly shipped, intact compounds are final — that is the nature
              of research compound logistics. But if we ship the wrong item, the cold chain
              fails, or your order is lost, we make it right without debate.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-white/10">
            {[
              { stat: "48 Hours", label: "Damage claim window" },
              { stat: "7 Days", label: "Wrong item claim window" },
              { stat: "4 Hours", label: "Avg. response time" },
              { stat: "1 Business Day", label: "Replacement ship time" },
            ].map((item) => (
              <div key={item.stat}>
                <div
                  className="text-2xl font-bold tracking-tight mb-1"
                  style={{ color: "#d4af37" }}
                >
                  {item.stat}
                </div>
                <div
                  className="text-xs uppercase tracking-widest"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligible cases */}
      <section className="container-nex py-20">
        <div className="max-w-3xl mx-auto mb-12">
          <p className="eyebrow mb-3" style={{ color: "#8A9A6A" }}>
            When We Resolve It
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ color: "#1A1A18" }}
          >
            Eligible for Replacement or Refund
          </h2>
          <p className="body-base mt-4" style={{ color: "#5A5A52" }}>
            The following are the only situations in which we issue replacements or refunds.
            Each case has a claim window — document and contact us promptly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {eligibleCases.map((item) => (
            <div
              key={item.title}
              className="p-8 rounded-xl border border-black/8"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(164,176,138,0.15)", color: "#5A7A3A" }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-base" style={{ color: "#1A1A18" }}>
                    {item.title}
                  </h3>
                  <span
                    className="text-xs px-2 py-0.5 rounded font-medium uppercase tracking-wider"
                    style={{
                      backgroundColor: "rgba(212,175,55,0.12)",
                      color: "#8A6B00",
                    }}
                  >
                    Claim within {item.window}
                  </span>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#5A5A52" }}>
                {item.description}
              </p>
              <div
                className="text-sm p-3 rounded-lg"
                style={{ backgroundColor: "rgba(90,122,58,0.08)", color: "#3A5A1A" }}
              >
                <span className="font-semibold">Resolution: </span>
                {item.resolution}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Not eligible */}
      <section style={{ backgroundColor: "#EDEAE0" }}>
        <div className="container-nex py-20">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <p className="eyebrow mb-3" style={{ color: "#8A9A6A" }}>
                All Sales Final
              </p>
              <h2
                className="text-3xl font-bold tracking-tight"
                style={{ color: "#1A1A18" }}
              >
                Not Eligible for Return
              </h2>
              <p className="body-base mt-4" style={{ color: "#5A5A52" }}>
                We are transparent about what we cannot accept. These restrictions
                exist because of the biological sensitivity of research compounds and
                the integrity requirements of the cold chain.
              </p>
            </div>

            <div
              className="rounded-xl border border-black/8 overflow-hidden"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <ul className="divide-y divide-black/[0.05]">
                {ineligibleCases.map((item) => (
                  <li key={item} className="flex items-start gap-4 px-7 py-5">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: "rgba(220,50,50,0.1)" }}
                    >
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#3A3A32" }}>
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to file a claim */}
      <section className="container-nex py-20">
        <div className="max-w-3xl mx-auto mb-14">
          <p className="eyebrow mb-3" style={{ color: "#8A9A6A" }}>
            The Process
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ color: "#1A1A18" }}
          >
            How to File a Claim
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className="p-7 rounded-xl border border-black/8"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <div
                className="text-4xl font-bold tracking-tight mb-4"
                style={{ color: "rgba(0,0,0,0.07)" }}
              >
                {step.number}
              </div>
              <h3
                className="text-base font-semibold mb-2"
                style={{ color: "#1A1A18" }}
              >
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#5A5A52" }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto mt-8">
          <div
            className="p-6 rounded-xl text-sm"
            style={{
              backgroundColor: "rgba(0,0,0,0.03)",
              border: "1px solid rgba(0,0,0,0.07)",
              color: "#5A5A52",
            }}
          >
            <strong style={{ color: "#3A3A32" }}>Claim email: </strong>
            <a href="mailto:research@nexphoria.com" className="underline" style={{ color: "#5A7A3A" }}>
              research@nexphoria.com
            </a>
            {" "}— Include your order number, lot number(s), description of issue, and photos.
            We do not require you to return compounds. We respond within 4 business hours.
          </div>
        </div>
      </section>

      {/* Subscription cancellation */}
      <section style={{ backgroundColor: "#EDEAE0" }}>
        <div className="container-nex py-20">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="eyebrow mb-3" style={{ color: "#8A9A6A" }}>
                  Subscriptions
                </p>
                <h2
                  className="text-3xl font-bold tracking-tight mb-6"
                  style={{ color: "#1A1A18" }}
                >
                  Subscription Cancellations
                </h2>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#5A5A52" }}>
                  Subscriptions can be cancelled at any time through your Stripe billing
                  portal — no contact required, no cancellation fee. Cancellation takes
                  effect immediately; you will not be billed again.
                </p>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#5A5A52" }}>
                  Orders already processed and shipped before cancellation are subject
                  to the same policy as single orders. Cancellation does not apply
                  retroactively to fulfilled orders.
                </p>
                <a
                  href="https://billing.stripe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium"
                  style={{ color: "#8A6B00" }}
                >
                  Manage billing via Stripe
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>

              <div
                className="p-8 rounded-xl border border-black/8"
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <h3
                  className="text-base font-semibold mb-5"
                  style={{ color: "#1A1A18" }}
                >
                  Refund Timelines
                </h3>
                <div className="space-y-4">
                  {[
                    { label: "Credit / debit card refund", value: "3–5 business days" },
                    { label: "AllayPay refund", value: "2–4 business days" },
                    { label: "Stripe billing credit", value: "Immediate" },
                    { label: "Replacement ship time", value: "1 business day" },
                    { label: "Claim response time", value: "4 business hours" },
                    { label: "Required documentation", value: "Photos + order number" },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="flex justify-between items-center py-2.5 border-b"
                      style={{ borderColor: "rgba(0,0,0,0.06)" }}
                    >
                      <span className="text-sm" style={{ color: "#5A5A52" }}>
                        {row.label}
                      </span>
                      <span className="text-sm font-semibold" style={{ color: "#1A1A18" }}>
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section style={{ backgroundColor: "#1A1A18" }} className="py-16">
        <div className="container-nex flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="text-2xl font-bold tracking-tight mb-2"
              style={{ color: "#F5F2EB" }}
            >
              Have an issue with your order?
            </h2>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              Email{" "}
              <a
                href="mailto:research@nexphoria.com"
                className="underline"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                research@nexphoria.com
              </a>{" "}
              with your order number and photos. We respond within 4 hours.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded text-sm font-semibold transition-all"
              style={{ backgroundColor: "#B8A44C", color: "#1A1A18" }}
            >
              Contact Support
            </Link>
            <Link
              href="/shipping"
              className="px-6 py-3 rounded text-sm font-semibold border transition-all"
              style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)" }}
            >
              Shipping Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
