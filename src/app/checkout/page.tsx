"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";
import Link from "next/link";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getTotalPrice, getTotalItems } = useCart();
  const [mounted, setMounted] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
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

  // Free gift thresholds
  const freeGifts = [];
  if (totalItems >= 3) freeGifts.push("Free bacteriostatic water");
  if (totalItems >= 5) freeGifts.push("Free shipping");
  if (totalItems >= 7) freeGifts.push("Free cold-pack");

  const handleCheckout = async () => {
    if (!formData.email) {
      setError("Please enter your email address");
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      // Transform cart items to worker format
      const checkoutItems = items.map(item => ({
        name: item.product.name,
        price: item.selectedDosage?.price ||
               (item.format === 'pen' && item.product.penAvailable
                 ? item.product.penPrice
                 : item.product.price),
        quantity: item.quantity,
        size: item.selectedDosage?.size || item.product.size,
        format: item.format,
        subscriptionMonths: item.subscriptionMonths,
      }));

      // Call the Cloudflare Worker
      const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL || 'https://nexphoria-checkout.chiya-b60.workers.dev';

      const response = await fetch(checkoutUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: checkoutItems,
          customerEmail: formData.email,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { url } = await response.json();

      if (!url) {
        throw new Error('No checkout URL returned');
      }

      // Redirect to Stripe Checkout
      window.location.href = url;
    } catch (err) {
      console.error('Checkout error:', err);
      setError('Failed to process checkout. Please try again.');
      setIsProcessing(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCheckout();
  };

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  if (items.length === 0) {
    return null; // Will redirect
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fffff3", paddingTop: "80px" }}>
      <div className="container-nex py-12 md:py-16">
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
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h2 className="text-lg font-semibold mb-4" style={{ color: "#010101" }}>
                  Shipping Address
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#3A3A3A" }}>
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="nex-input w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#3A3A3A" }}>
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="nex-input w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#3A3A3A" }}>
                      Address
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="nex-input w-full"
                      placeholder="Street address"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#3A3A3A" }}>
                        City
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="nex-input w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#3A3A3A" }}>
                        State
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="nex-input w-full"
                        placeholder="CA"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#3A3A3A" }}>
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.zipCode}
                        onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                        className="nex-input w-full"
                        placeholder="90210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#3A3A3A" }}>
                        Country
                      </label>
                      <input
                        type="text"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="nex-input w-full"
                        disabled
                        style={{ backgroundColor: "#f5f3f0", cursor: "not-allowed" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h2 className="text-lg font-semibold mb-4" style={{ color: "#010101" }}>
                  Payment Method
                </h2>
                <div
                  className="p-6 rounded-lg border text-center"
                  style={{
                    backgroundColor: "#EAE6DF",
                    borderColor: "#D8D4CC",
                  }}
                >
                  <ShoppingBag className="w-12 h-12 mx-auto mb-3" style={{ color: "#A4B08A" }} />
                  <p className="text-sm font-medium mb-1" style={{ color: "#3A3A3A" }}>
                    Secure Payment
                  </p>
                  <p className="text-xs" style={{ color: "#8A8075" }}>
                    Card details are processed securely via Stripe. Your information is encrypted end-to-end.
                  </p>
                </div>
              </div>
            </form>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <div
                className="p-6 rounded-lg border"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "#D8D4CC",
                }}
              >
                <h2 className="text-lg font-semibold mb-4" style={{ color: "#010101" }}>
                  Order Summary
                </h2>

                {/* Items */}
                <div className="space-y-3 mb-6">
                  {items.map((item) => (
                    <div
                      key={`${item.product.slug}-${item.format}`}
                      className="flex items-start gap-3 pb-3 border-b"
                      style={{ borderColor: "#EAE6DF" }}
                    >
                      <div
                        className="flex-shrink-0 flex items-center justify-center rounded"
                        style={{
                          width: "40px",
                          height: item.format === "pen" ? "28px" : "60px",
                          backgroundColor: `${item.product.accentColor}12`,
                          border: `1px solid ${item.product.accentColor}30`,
                        }}
                      >
                        <span
                          style={{
                            fontSize: item.format === "pen" ? "0.875rem" : "1.25rem",
                            fontWeight: "bold",
                            fontFamily: "var(--font-display)",
                            color: item.product.accentColor,
                            opacity: 0.9,
                          }}
                        >
                          {item.product.name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold truncate" style={{ color: "#010101" }}>
                          {item.product.name}
                        </h4>
                        <p className="text-xs" style={{ color: "#8A8075" }}>
                          {item.selectedDosage?.size || item.product.size} • {item.format === "pen" ? "Pen" : "Vial"} • Qty: {item.quantity}
                        </p>
                        {item.subscriptionMonths > 1 && (
                          <span
                            className="text-[10px] px-2 py-0.5 rounded-full font-bold uppercase inline-block mt-1"
                            style={{ backgroundColor: "#A4B08A", color: "#FFFFFF" }}
                          >
                            Subscription
                          </span>
                        )}
                      </div>
                      <div className="text-sm font-bold" style={{ color: "#010101" }}>
                        $
                        {(
                          (item.selectedDosage?.price ||
                            (item.format === "pen" && item.product.penAvailable
                              ? item.product.penPrice
                              : item.product.price)) * item.quantity
                        ).toFixed(0)}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Free Gifts */}
                {freeGifts.length > 0 && (
                  <div className="mb-6 p-3 rounded" style={{ backgroundColor: "#c6f18420" }}>
                    <p className="text-xs font-semibold mb-1" style={{ color: "#3A3A3A" }}>
                      🎁 Included with your order:
                    </p>
                    <ul className="text-xs space-y-0.5" style={{ color: "#8A8075" }}>
                      {freeGifts.map((gift, idx) => (
                        <li key={idx}>• {gift}</li>
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
                      {totalItems >= 5 ? "FREE" : "Calculated at payment"}
                    </span>
                  </div>
                  <div className="pt-2 border-t flex justify-between" style={{ borderColor: "#D8D4CC" }}>
                    <span className="font-semibold" style={{ color: "#010101" }}>
                      Total
                    </span>
                    <span className="text-xl font-bold" style={{ color: "#010101" }}>
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="flex justify-center gap-4 text-xs mb-4" style={{ color: "#8A8075" }}>
                  <span>✓ 99.7% Purity</span>
                  <span>✓ COA Included</span>
                  <span>✓ Same-Day Ship</span>
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
                  className="w-full py-3 px-6 rounded font-semibold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90"
                  style={{
                    backgroundColor: "#c6f184",
                    color: "#000000",
                  }}
                >
                  {isProcessing ? "Processing..." : "Place Order"}
                </button>
                <p className="text-xs text-center mt-3" style={{ color: "#8A8075" }}>
                  Secure payment via Stripe. You'll be redirected to complete your order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Summary */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 border-t mobile-sticky-cta">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-xs" style={{ color: "#8A8075" }}>
              Total
            </p>
            <p className="text-xl font-bold" style={{ color: "#010101" }}>
              ${totalPrice.toFixed(2)}
            </p>
          </div>
          <button
            type="button"
            onClick={handleCheckout}
            disabled={isProcessing || !formData.email}
            className="py-3 px-6 rounded font-semibold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90"
            style={{
              backgroundColor: "#c6f184",
              color: "#000000",
            }}
          >
            {isProcessing ? "Processing..." : "Place Order"}
          </button>
        </div>
      </div>
    </div>
  );
}
