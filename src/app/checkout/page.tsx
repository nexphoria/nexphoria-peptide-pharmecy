"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { useCart, getItemUnitPrice, getCadenceLabel } from "@/lib/cart";
import { CHECKOUT_URL } from "@/lib/endpoints";
import { getProductImagePath, hasProductPhoto } from "@/lib/product-images";
import ProductVial from "@/components/ProductVial";
import Link from "next/link";
import Image from "next/image";

// 48px product thumbnail: real photo when available, else the SVG vial.
function ProductThumb({
  slug,
  name,
  dosage,
  category,
  accentColor,
}: {
  slug: string;
  name: string;
  dosage: string;
  category: string;
  accentColor: string;
}) {
  if (hasProductPhoto(slug)) {
    return (
      <Image
        src={getProductImagePath(slug)}
        alt={name}
        width={48}
        height={48}
        style={{ objectFit: "contain", width: "100%", height: "100%" }}
      />
    );
  }
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ProductVial
        productName={name}
        dosage={dosage}
        category={category}
        accentColor={accentColor}
        size="thumbnail"
      />
    </div>
  );
}

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getTotalPrice, getTotalItems } = useCart();
  const [mounted, setMounted] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Redirect if cart is empty
  useEffect(() => {
    if (mounted && items.length === 0) {
      router.push("/products");
    }
  }, [mounted, items, router]);

  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();
  const hasSubscription = items.some((item) => item.subscriptionMonths > 1);

  // Included supplies by order value (matches CartDrawer thresholds)
  const includedSupplies: string[] = [];
  if (totalPrice >= 100) includedSupplies.push("Bacteriostatic water");
  if (totalPrice >= 150) includedSupplies.push("Free shipping");
  if (totalPrice >= 250) includedSupplies.push("Cold-pack");

  const handleCheckout = async () => {
    if (!formData.email) {
      setError("Please enter your email address.");
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      // Worker / API expects: name, size, price (monthly unit), quantity, format, subscriptionMonths
      const checkoutItems = items.map((item) => ({
        productSlug: item.product.slug,
        name: item.product.name,
        price: getItemUnitPrice(item),
        quantity: item.quantity,
        size: item.selectedDosage?.size || item.product.size,
        format: item.format,
        subscriptionMonths: item.subscriptionMonths,
      }));

      // This site is a static export — checkout is handled by the Cloudflare
      // Worker (see src/lib/endpoints.ts).
      const response = await fetch(CHECKOUT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: checkoutItems,
          customerEmail: formData.email,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }

      const { url } = await response.json();

      if (!url) {
        throw new Error("No checkout URL returned");
      }

      // Redirect to Stripe-hosted checkout.
      window.location.href = url;
    } catch (err) {
      console.error("Checkout error:", err);
      setError("We could not start checkout. Please try again.");
      setIsProcessing(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCheckout();
  };

  if (!mounted || items.length === 0) {
    return null;
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fffff3", paddingTop: "80px" }}>
      <div className="container-nex py-12 md:py-16 pb-32 lg:pb-16">
        {/* Back button */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm mb-8 hover:opacity-60 transition-opacity"
          style={{ color: "#3A3A3A" }}
        >
          <ArrowLeft className="w-4 h-4" />
          Continue Shopping
        </Link>

        <h1
          className="text-3xl md:text-4xl font-bold mb-2"
          style={{ color: "#010101", fontFamily: "var(--font-display)" }}
        >
          Checkout
        </h1>
        <p className="text-sm mb-12" style={{ color: "#8A8075" }}>
          Complete your order
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div>
                <h2 className="text-lg font-semibold mb-4" style={{ color: "#010101" }}>
                  Contact Information
                </h2>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "#3A3A3A" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="nex-input w-full"
                    placeholder="your.email@example.com"
                  />
                  <p className="text-xs mt-2" style={{ color: "#8A8075" }}>
                    Order confirmation and COA references are sent here.
                  </p>
                </div>
              </div>

              {/* Shipping Note */}
              <div>
                <h2 className="text-lg font-semibold mb-4" style={{ color: "#010101" }}>
                  Shipping
                </h2>
                <div
                  className="p-4 rounded-lg border"
                  style={{ backgroundColor: "#F7F5F0", borderColor: "#ECEAE4" }}
                >
                  <p className="text-sm" style={{ color: "#3A3A3A" }}>
                    Shipping address is collected securely on the Stripe payment page.
                  </p>
                  <p className="text-xs mt-2" style={{ color: "#8A8075" }}>
                    US shipping only. Cold-chain logistics with same-day dispatch.
                  </p>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h2 className="text-lg font-semibold mb-4" style={{ color: "#010101" }}>
                  Payment
                </h2>
                <div
                  className="p-6 rounded-lg border flex items-start gap-4"
                  style={{ backgroundColor: "#EAE6DF", borderColor: "#D8D4CC" }}
                >
                  <ShieldCheck className="w-8 h-8 flex-shrink-0" style={{ color: "#A4B08A" }} />
                  <div>
                    <p className="text-sm font-medium mb-1" style={{ color: "#3A3A3A" }}>
                      Secure payment via Stripe
                    </p>
                    <p className="text-xs" style={{ color: "#8A8075" }}>
                      Card details are processed by Stripe and encrypted end-to-end. You will be
                      redirected to complete payment.
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <div
                className="p-6 rounded-lg border"
                style={{ backgroundColor: "#FFFFFF", borderColor: "#D8D4CC" }}
              >
                <h2 className="text-lg font-semibold mb-4" style={{ color: "#010101" }}>
                  Order Summary
                </h2>

                {/* Items */}
                <div className="space-y-3 mb-6">
                  {items.map((item) => {
                    const dosageLabel = item.selectedDosage?.size || item.product.size;
                    const cadenceLabel = getCadenceLabel(item.subscriptionMonths);
                    const unitPrice = getItemUnitPrice(item);
                    return (
                      <div
                        key={`${item.product.slug}-${item.format}`}
                        className="flex items-start gap-3 pb-3 border-b"
                        style={{ borderColor: "#EAE6DF" }}
                      >
                        <div
                          className="flex-shrink-0 flex items-center justify-center rounded overflow-hidden"
                          style={{
                            width: "48px",
                            height: "48px",
                            backgroundColor: `${item.product.accentColor}12`,
                            border: `1px solid ${item.product.accentColor}30`,
                          }}
                        >
                          <ProductThumb
                            slug={item.product.slug}
                            name={item.product.name}
                            dosage={dosageLabel}
                            category={item.product.category}
                            accentColor={item.product.accentColor}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold truncate" style={{ color: "#010101" }}>
                            {item.product.name}
                          </h4>
                          <p className="text-xs" style={{ color: "#8A8075" }}>
                            {dosageLabel} • {item.format === "pen" ? "Pen" : "Vial"} • Qty {item.quantity}
                          </p>
                          <p
                            className="text-[11px] mt-0.5"
                            style={{ color: item.subscriptionMonths > 1 ? "#A4B08A" : "#8A8075" }}
                          >
                            {cadenceLabel}
                            {item.subscriptionMonths > 1 ? " · billed monthly" : ""}
                          </p>
                        </div>
                        <div className="text-sm font-bold text-right" style={{ color: "#010101" }}>
                          ${(unitPrice * item.quantity).toFixed(2)}
                          {item.subscriptionMonths > 1 && (
                            <span className="block text-[10px] font-normal" style={{ color: "#8A8075" }}>
                              per month
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Included supplies */}
                {includedSupplies.length > 0 && (
                  <div className="mb-6 p-3 rounded" style={{ backgroundColor: "#A4B08A20" }}>
                    <p className="text-xs font-semibold mb-1" style={{ color: "#3A3A3A" }}>
                      Included with your order
                    </p>
                    <ul className="text-xs space-y-0.5" style={{ color: "#8A8075" }}>
                      {includedSupplies.map((gift, idx) => (
                        <li key={idx}>{gift}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Totals */}
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span style={{ color: "#8A8075" }}>Subtotal</span>
                    <span style={{ color: "#3A3A3A" }}>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span style={{ color: "#8A8075" }}>Shipping</span>
                    <span style={{ color: "#3A3A3A" }}>
                      {totalPrice >= 150 ? "Free" : "Calculated at payment"}
                    </span>
                  </div>
                  <div
                    className="pt-2 border-t flex justify-between items-end"
                    style={{ borderColor: "#D8D4CC" }}
                  >
                    <span className="font-semibold" style={{ color: "#010101" }}>
                      {hasSubscription ? "Billed today" : "Total"}
                    </span>
                    <span className="text-xl font-bold" style={{ color: "#010101" }}>
                      ${totalPrice.toFixed(2)}
                      {hasSubscription && (
                        <span className="block text-[11px] font-normal text-right" style={{ color: "#8A8075" }}>
                          then monthly per cycle
                        </span>
                      )}
                    </span>
                  </div>
                </div>

                {/* Trust badges */}
                <div className="flex justify-center gap-4 text-xs mb-4" style={{ color: "#8A8075" }}>
                  <span>99.7% Purity</span>
                  <span>COA Included</span>
                  <span>Same-Day Ship</span>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="mb-4 p-3 rounded text-sm" style={{ backgroundColor: "#fee", color: "#c00" }}>
                    {error}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleCheckout}
                  disabled={isProcessing || !formData.email}
                  className="btn-acid w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? "Processing..." : "Place Order"}
                </button>
                <p className="text-xs text-center mt-3" style={{ color: "#8A8075" }}>
                  Secure payment via Stripe. You will be redirected to complete your order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Summary */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 border-t mobile-sticky-cta">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs" style={{ color: "#8A8075" }}>
              {hasSubscription ? "Billed today" : "Total"}
            </p>
            <p className="text-xl font-bold" style={{ color: "#010101" }}>
              ${totalPrice.toFixed(2)}
            </p>
          </div>
          <button
            type="button"
            onClick={handleCheckout}
            disabled={isProcessing || !formData.email}
            className="btn-acid flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isProcessing ? "Processing..." : "Place Order"}
          </button>
        </div>
      </div>
    </div>
  );
}
