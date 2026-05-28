import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import { EmailCapture } from "@/components/email-capture";

export default function HomePage() {
  const featured = products.slice(0, 3);

  return (
    <>
      {/* Pattern overlay — barely visible */}
      <div className="pattern-overlay" />

      {/* SECTION 1: HERO */}
      <section className="relative min-h-[90vh] flex items-center bg-cream px-6 md:px-12 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full">
          <div>
            {/* Badge with green dot */}
            <div className="flex items-center gap-2 mb-8">
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "#C9DD69" }}
              />
              <span
                className="text-xs uppercase tracking-[0.25em]"
                style={{ color: "#B8923A", fontWeight: 400 }}
              >
                Research-Grade Compounds
              </span>
            </div>

            {/* Headlines */}
            <h1
              className="text-7xl md:text-8xl mb-8"
              style={{
                fontWeight: 200,
                letterSpacing: "-0.01em",
                lineHeight: 1.05,
              }}
            >
              Every compound tested.
              <br />
              <span style={{ color: "#7F7F7D" }}>
                Every lot documented.
              </span>
            </h1>

            {/* Body */}
            <p
              className="text-lg mb-12 max-w-xl"
              style={{ color: "#7F7F7D", lineHeight: 1.7, fontWeight: 300 }}
            >
              Non-GLP-1 peptides. cGMP manufacturing. Independent HPLC and mass
              spectrometry verification. Certificate of Analysis with every order.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-16">
              <Link href="/products" className="btn-primary">
                Browse Compounds
              </Link>
              <Link href="/science" className="btn-outline">
                View Documentation →
              </Link>
            </div>

            {/* Stats */}
            <div
              className="flex flex-wrap gap-8 pt-6"
              style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
            >
              <div>
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
                  HPLC Purity
                </div>
              </div>
              <div>
                <div className="text-2xl font-light mb-1">cGMP</div>
                <div
                  className="text-xs uppercase tracking-wide"
                  style={{ color: "#7F7F7D" }}
                >
                  Certified
                </div>
              </div>
              <div>
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
          </div>

          {/* DNA pattern decoration (XL only) */}
          <div className="hidden xl:block relative opacity-[0.06]">
            <Image
              src="/brand/dna-pattern.png"
              alt=""
              width={600}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: FULL WIDTH BRAND IMAGE */}
      <section className="relative w-full" style={{ height: "70vh" }}>
        <Image
          src="/brand/tm-vb-006.jpg"
          alt="Nexphoria Research Compounds"
          fill
          className="object-cover"
          sizes="100vw"
          quality={100}
          priority
        />
      </section>

      {/* SECTION 3: COMPOUND CATALOG */}
      <section className="bg-white py-24 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section marker */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-8 h-px"
              style={{ backgroundColor: "#C9DD69" }}
            />
            <span
              className="text-xs uppercase tracking-[0.25em]"
              style={{ color: "#B8923A" }}
            >
              Research Compounds
            </span>
          </div>

          <h2
            className="text-5xl mb-16"
            style={{ fontWeight: 200, letterSpacing: "0.02em" }}
          >
            Peptide Catalog
          </h2>

          {/* Product cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featured.map((product) => (
              <div
                key={product.slug}
                className="bg-white rounded-lg p-8"
                style={{ border: "1px solid rgba(0,0,0,0.1)" }}
              >
                {/* Product image */}
                <div className="relative w-full h-48 mb-6 rounded overflow-hidden">
                  <Image
                    src="/brand/boxes-cascade.jpg"
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="400px"
                  />
                </div>

                {/* Category tag */}
                <div
                  className="text-[10px] uppercase mb-3 tracking-[0.2em]"
                  style={{ color: "#B8923A" }}
                >
                  {product.category}
                </div>

                {/* Product name */}
                <h3
                  className="text-xl mb-2"
                  style={{ fontWeight: 300 }}
                >
                  {product.name}
                </h3>

                {/* Specs */}
                <p className="text-sm mb-2" style={{ color: "#7F7F7D" }}>
                  {product.size}
                </p>

                {/* Purity (green) */}
                <p
                  className="text-sm mb-4 font-medium"
                  style={{ color: "#C9DD69" }}
                >
                  {product.purity}
                </p>

                {/* Price */}
                <p className="text-lg mb-6" style={{ fontWeight: 400 }}>
                  ${product.price}
                </p>

                {/* Button */}
                <Link
                  href={`/products/${product.slug}`}
                  className="btn-primary w-full text-center"
                  style={{ fontSize: "0.75rem" }}
                >
                  Add to Order
                </Link>
              </div>
            ))}
          </div>

          {/* View all link */}
          <div className="text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-60"
              style={{ letterSpacing: "0.1em", fontWeight: 400 }}
            >
              View Full Catalog
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: BRAND SUITE IMAGE */}
      <section className="relative w-full" style={{ height: "50vh" }}>
        <Image
          src="/brand/brand-suite.jpg"
          alt="Nexphoria Brand Suite"
          fill
          className="object-cover"
          sizes="100vw"
          quality={100}
        />
      </section>

      {/* SECTION 5: DUAL TIER */}
      <section className="bg-cream py-24 px-6 md:px-12 relative">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Research card */}
          <div
            className="bg-white p-8 rounded-lg"
            style={{ borderTop: "2px solid #C9DD69" }}
          >
            <p
              className="text-xs uppercase mb-4 tracking-[0.2em]"
              style={{ color: "#C9DD69" }}
            >
              Research
            </p>
            <h3 className="text-2xl mb-4" style={{ fontWeight: 300 }}>
              Research-Grade Compounds
            </h3>
            <p
              className="text-sm mb-6"
              style={{ color: "#7F7F7D", lineHeight: 1.7 }}
            >
              Lyophilized powder. Independent third-party verification. For
              qualified researchers. COA with every order.
            </p>
            <Link
              href="/products"
              className="text-sm inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
              style={{ letterSpacing: "0.1em" }}
            >
              View Catalog →
            </Link>
          </div>

          {/* Clinical card */}
          <div
            className="bg-white p-8 rounded-lg"
            style={{ borderTop: "2px solid #B8923A" }}
          >
            <p
              className="text-xs uppercase mb-4 tracking-[0.2em]"
              style={{ color: "#B8923A" }}
            >
              Clinical
            </p>
            <h3 className="text-2xl mb-4" style={{ fontWeight: 300 }}>
              Physician-Guided Therapy
            </h3>
            <p
              className="text-sm mb-6"
              style={{ color: "#7F7F7D", lineHeight: 1.7 }}
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

      {/* SECTION 6: EMAIL CAPTURE */}
      <section className="bg-charcoal py-24 px-6 md:px-12 relative">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl mb-6 text-cream"
            style={{ fontWeight: 200 }}
          >
            Stay Informed on New Compounds
          </h2>
          <p className="text-stone mb-8">
            Exclusive access to new research compounds, clinical trials, and
            Certificate of Analysis reports.
          </p>
          <EmailCapture variant="dark" />
        </div>
      </section>

      {/* SECTION 7: FOOTER */}
      <footer className="bg-near-black text-cream py-16 px-6 md:px-12">
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
                  <Link href="/products" className="hover:text-cream transition-colors">
                    Browse Catalog
                  </Link>
                </li>
                <li>
                  <Link href="/clinical" className="hover:text-cream transition-colors">
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
                  <Link href="/science" className="hover:text-cream transition-colors">
                    Science
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-cream transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-cream transition-colors">
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
                  <Link href="/terms" className="hover:text-cream transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-cream transition-colors">
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
              cure, or prevent any disease. Buyer assumes full responsibility for
              compliance with applicable federal, state, and local regulations.
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
