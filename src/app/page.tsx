import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

export default function HomePage() {
  const featuredProducts = products.slice(0, 6);

  return (
    <>
      {/* Pattern overlay — barely visible */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "url(/brand/chemical-pattern.svg)",
          backgroundSize: "600px",
          backgroundRepeat: "repeat",
          opacity: 0.015,
        }}
      />

      {/* HERO — Full viewport, type-driven */}
      <section className="relative min-h-screen flex items-center justify-center bg-cream px-6 pt-40 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1
            className="text-7xl md:text-8xl lg:text-9xl mb-8 text-near-black"
            style={{
              fontWeight: 200,
              letterSpacing: "-0.02em",
              lineHeight: 0.95,
            }}
          >
            Research-Grade
            <br />
            Peptides
          </h1>

          {/* Subhead */}
          <p
            className="text-lg md:text-xl mb-12 text-stone max-w-2xl mx-auto"
            style={{ fontWeight: 300, lineHeight: 1.6 }}
          >
            cGMP manufacturing. Independent HPLC verification. Certificate of
            Analysis with every compound.
          </p>

          {/* Trust indicators */}
          <div
            className="flex flex-wrap items-center justify-center gap-8 mb-12 pb-8"
            style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}
          >
            <div className="text-center">
              <div
                className="text-2xl font-light mb-1"
                style={{ color: "#C9DD69" }}
              >
                ≥99%
              </div>
              <div
                className="text-xs uppercase tracking-wide"
                style={{ color: "#7F7F7D" }}
              >
                Purity
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-light mb-1 text-near-black">
                cGMP
              </div>
              <div
                className="text-xs uppercase tracking-wide"
                style={{ color: "#7F7F7D" }}
              >
                Certified
              </div>
            </div>
            <div className="text-center">
              <div
                className="text-2xl font-light mb-1"
                style={{ color: "#C9DD69" }}
              >
                100%
              </div>
              <div
                className="text-xs uppercase tracking-wide"
                style={{ color: "#7F7F7D" }}
              >
                Third-Party Tested
              </div>
            </div>
          </div>

          {/* CTA */}
          <Link href="/products" className="btn-primary">
            Browse Compounds
          </Link>
        </div>
      </section>

      {/* PRODUCT GRID — Simplified Prescription Style */}
      <section className="relative bg-white-card py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-1 h-1 rounded-full"
              style={{ backgroundColor: "#C9DD69" }}
            />
            <span
              className="text-xs uppercase tracking-widest"
              style={{ color: "#B8923A" }}
            >
              Catalog
            </span>
          </div>

          {/* Section headline */}
          <h2
            className="text-4xl md:text-5xl mb-16 text-near-black"
            style={{ fontWeight: 200 }}
          >
            Research Compounds
          </h2>

          {/* Product grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.slug}
                className="relative bg-white border border-gray-200 rounded-sm p-6 transition-shadow hover:shadow-lg"
                style={{ overflow: "hidden" }}
              >
                {/* Chemical pattern background texture */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: "url(/brand/chemical-pattern.svg)",
                    backgroundSize: "400px",
                    backgroundRepeat: "repeat",
                    opacity: 0.03,
                  }}
                />

                {/* Category label */}
                <div className="relative mb-4">
                  <p
                    className="text-[10px] uppercase tracking-widest font-semibold"
                    style={{ color: "#B8923A" }}
                  >
                    {product.category}
                  </p>
                </div>

                {/* Product name */}
                <h3
                  className="relative text-2xl mb-4 text-near-black"
                  style={{ fontWeight: 300 }}
                >
                  {product.name}
                </h3>

                {/* Divider */}
                <div
                  className="relative w-full h-px mb-4"
                  style={{ backgroundColor: "#D8D4CC" }}
                />

                {/* Data fields — SIMPLIFIED to 3 key points */}
                <div className="relative space-y-3 mb-6">
                  <div>
                    <p
                      className="text-[10px] uppercase tracking-widest mb-1"
                      style={{ color: "#8A8075" }}
                    >
                      Purity
                    </p>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "#C9DD69" }}
                    >
                      {product.purity}
                    </p>
                  </div>

                  <div>
                    <p
                      className="text-[10px] uppercase tracking-widest mb-1"
                      style={{ color: "#8A8075" }}
                    >
                      Formula
                    </p>
                    <p className="text-sm font-mono font-medium text-near-black">
                      {product.formula}
                    </p>
                  </div>

                  <div>
                    <p
                      className="text-[10px] uppercase tracking-widest mb-1"
                      style={{ color: "#8A8075" }}
                    >
                      Size
                    </p>
                    <p className="text-sm font-medium text-near-black">
                      {product.molecularWeight}
                    </p>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="relative">
                  <p
                    className="text-lg font-semibold mb-4 text-near-black"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    ${product.price}
                  </p>
                  <Link
                    href={`/products/${product.slug}`}
                    className="btn-primary w-full text-center"
                  >
                    Add to Order
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* View all link */}
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm text-near-black hover:opacity-60 transition-opacity"
              style={{ letterSpacing: "0.1em" }}
            >
              View Full Catalog
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* OUR STANDARDS — BOLD DARK SECTION FOR PERSONALITY */}
      <section
        className="relative py-24 px-6"
        style={{ backgroundColor: "#010101" }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Eyebrow */}
          <p
            className="text-xs uppercase tracking-widest mb-6"
            style={{ color: "#C9DD69" }}
          >
            Our Standards
          </p>

          {/* Big statement */}
          <h2
            className="text-4xl md:text-5xl mb-16 max-w-4xl mx-auto"
            style={{
              fontWeight: 200,
              color: "#EAE7E3",
              lineHeight: 1.2,
            }}
          >
            Manufactured under pharmaceutical standards. Every lot independently
            verified. No exceptions.
          </h2>

          {/* Three columns */}
          <div className="grid md:grid-cols-3 gap-12 text-left">
            <div>
              <h3
                className="text-sm uppercase tracking-wide mb-3"
                style={{ color: "#C9DD69", fontWeight: 600 }}
              >
                cGMP Manufacturing
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#A0A0A0" }}
              >
                Synthesized in certified facilities under current Good
                Manufacturing Practice.
              </p>
            </div>

            <div>
              <h3
                className="text-sm uppercase tracking-wide mb-3"
                style={{ color: "#C9DD69", fontWeight: 600 }}
              >
                Independent Verification
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#A0A0A0" }}
              >
                Third-party HPLC and mass spectrometry on every production lot.
              </p>
            </div>

            <div>
              <h3
                className="text-sm uppercase tracking-wide mb-3"
                style={{ color: "#C9DD69", fontWeight: 600 }}
              >
                Research Use Only
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#A0A0A0" }}
              >
                For qualified researchers. Not for human consumption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FULL WIDTH BRAND PHOTO — DRAMATIC */}
      <section className="relative w-full h-[50vh] md:h-[75vh]">
        <Image
          src="/brand/tm-vb-006.jpg"
          alt="Nexphoria Research"
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={100}
          priority
        />
      </section>

      {/* BRAND SUITE PHOTO — Smaller, shows packaging */}
      <section className="relative w-full h-[40vh]">
        <Image
          src="/brand/brand-suite.jpg"
          alt="Nexphoria Product Suite"
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={95}
        />
      </section>

      {/* DUAL TIER — Research + Clinical */}
      <section className="relative bg-cream py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Research card */}
          <div
            className="bg-white-card p-10 rounded-sm"
            style={{ borderTop: "2px solid #C9DD69" }}
          >
            <p
              className="text-xs uppercase mb-4 tracking-widest"
              style={{ color: "#C9DD69" }}
            >
              Research
            </p>
            <h3
              className="text-2xl mb-4 text-near-black"
              style={{ fontWeight: 300 }}
            >
              Research-Grade Compounds
            </h3>
            <p
              className="text-sm mb-6 text-stone"
              style={{ lineHeight: 1.7 }}
            >
              Lyophilized powder. Independent third-party verification. For
              qualified researchers. COA with every order.
            </p>
            <Link
              href="/products"
              className="text-sm inline-flex items-center gap-2 text-near-black hover:opacity-70 transition-opacity"
              style={{ letterSpacing: "0.1em" }}
            >
              View Catalog →
            </Link>
          </div>

          {/* Clinical card */}
          <div
            className="bg-white-card p-10 rounded-sm"
            style={{ borderTop: "2px solid #B8923A" }}
          >
            <p
              className="text-xs uppercase mb-4 tracking-widest"
              style={{ color: "#B8923A" }}
            >
              Clinical
            </p>
            <h3
              className="text-2xl mb-4 text-near-black"
              style={{ fontWeight: 300 }}
            >
              Physician-Guided Therapy
            </h3>
            <p
              className="text-sm mb-6 text-stone"
              style={{ lineHeight: 1.7 }}
            >
              Pre-mixed. Prescription-grade. Telehealth consultation with
              licensed prescriber. Starting at $149/month.
            </p>
            <Link
              href="/clinical"
              className="text-sm inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
              style={{ color: "#B8923A", letterSpacing: "0.1em" }}
            >
              Join Waitlist →
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST/SCIENCE SECTION */}
      <section className="relative bg-white-card py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl mb-6 text-near-black"
            style={{ fontWeight: 200 }}
          >
            Verified. Documented. Traceable.
          </h2>
          <p
            className="text-base text-stone mb-12 max-w-2xl mx-auto"
            style={{ lineHeight: 1.7 }}
          >
            Every compound undergoes independent HPLC and mass spectrometry
            testing. Certificates of Analysis are provided with batch numbers
            and testing dates for full traceability.
          </p>
          <Link href="/science" className="btn-outline">
            View Testing Standards
          </Link>
        </div>
      </section>

    </>
  );
}
