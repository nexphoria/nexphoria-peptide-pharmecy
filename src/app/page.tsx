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

      {/* PRODUCT GRID — Enhanced-style cards */}
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
                className="bg-white-card border border-stone/20 rounded-sm p-6 transition-shadow hover:shadow-md"
              >
                {/* Product image */}
                <div className="relative w-full h-56 mb-6 rounded-sm overflow-hidden bg-stone/5">
                  <Image
                    src="/brand/boxes-cascade.jpg"
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="400px"
                  />
                </div>

                {/* Product name */}
                <h3
                  className="text-xl mb-2 text-near-black"
                  style={{ fontWeight: 300 }}
                >
                  {product.name}
                </h3>

                {/* One-line description */}
                <p
                  className="text-sm mb-3 text-stone"
                  style={{ lineHeight: 1.5 }}
                >
                  {product.tagline}
                </p>

                {/* Purity (green) */}
                <p
                  className="text-sm font-medium mb-1"
                  style={{ color: "#C9DD69" }}
                >
                  {product.purity}
                </p>

                {/* Price */}
                <p
                  className="text-lg mb-6 text-near-black"
                  style={{ fontWeight: 400 }}
                >
                  ${product.price}
                </p>

                {/* Add to Order button */}
                <Link
                  href={`/products/${product.slug}`}
                  className="btn-primary w-full text-center"
                >
                  Add to Order
                </Link>
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

      {/* FULL WIDTH BRAND PHOTO */}
      <section className="relative w-full h-[70vh]">
        <Image
          src="/brand/tm-vb-006.jpg"
          alt="Nexphoria Research"
          fill
          className="object-cover"
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

      {/* FOOTER — Dark */}
      <footer className="bg-near-black text-cream py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Logo */}
            <div>
              <Image
                src="/brand/logo-black.svg"
                alt="Nexphoria"
                width={140}
                height={40}
                className="brightness-0 invert mb-4"
              />
              <p className="text-sm text-stone leading-relaxed">
                Research-grade peptide compounds. Third-party verified.
              </p>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-sm uppercase tracking-wide mb-4 font-medium">
                Products
              </h3>
              <ul className="space-y-2 text-sm text-stone">
                <li>
                  <Link
                    href="/products"
                    className="hover:text-cream transition-colors"
                  >
                    Browse Catalog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/clinical"
                    className="hover:text-cream transition-colors"
                  >
                    Clinical Programs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm uppercase tracking-wide mb-4 font-medium">
                Company
              </h3>
              <ul className="space-y-2 text-sm text-stone">
                <li>
                  <Link
                    href="/science"
                    className="hover:text-cream transition-colors"
                  >
                    Science
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-cream transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-cream transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm uppercase tracking-wide mb-4 font-medium">
                Legal
              </h3>
              <ul className="space-y-2 text-sm text-stone">
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-cream transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-cream transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Disclaimer */}
          <div
            className="pt-8 border-t text-xs text-stone leading-relaxed"
            style={{ borderColor: "rgba(127,127,125,0.2)" }}
          >
            <p>
              All products sold for laboratory research use only. Not for human
              consumption. These products are not intended to diagnose, treat,
              cure, or prevent any disease. Buyer assumes full responsibility
              for compliance with applicable federal, state, and local
              regulations.
            </p>
            <p className="mt-4">
              © {new Date().getFullYear()} Nexphoria. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
