"use client";

import { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Copy, Check, Bitcoin, ArrowRight } from "lucide-react";
import { useCart } from "@/lib/cart";

// Crypto checkout instructions. The previous screen (POST /crypto-order)
// already created a pending order in the worker and gave the customer the
// receiving wallet address. We mirror that address here, show the order
// reference, and explain the exact next steps. Once the on-chain transfer
// confirms (handled out-of-band by ops + n8n), the order moves to
// fulfillment and the customer gets a tracking email.

function CryptoInstructionsInner() {
  const params = useSearchParams();
  const { clearCart } = useCart();

  const reference = params.get("ref") || "";
  const asset = (params.get("asset") || "BTC").toUpperCase();
  const addressFromUrl = params.get("address") || "";
  const totalParam = params.get("total");
  const total = totalParam ? Number(totalParam) : null;

  const [copied, setCopied] = useState<"address" | "reference" | null>(null);
  const [cleared, setCleared] = useState(false);

  useEffect(() => {
    if (!cleared) {
      // Cart is locked in once the pending crypto order is created.
      clearCart();
      setCleared(true);
    }
  }, [clearCart, cleared]);

  // The receiving address normally comes from the API response and is then
  // appended to this URL by the checkout page. When the customer reloads or
  // shares the link we ask them to refer to their email.
  const address = addressFromUrl;

  const handleCopy = async (value: string, which: "address" | "reference") => {
    if (!value) return;
    try {
      await navigator.clipboard.writeText(value);
      setCopied(which);
      setTimeout(() => setCopied(null), 1800);
    } catch {
      /* clipboard may be blocked in some embedded browsers; ignore */
    }
  };

  const isBtc = asset === "BTC";

  return (
    <div className="min-h-screen px-6 py-20" style={{ backgroundColor: "#F7F5F0" }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="max-w-2xl mx-auto"
      >
        <div
          className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "rgba(184,164,76,0.12)" }}
        >
          <Bitcoin className="w-8 h-8" style={{ color: "#B8A44C" }} />
        </div>

        <h1
          className="text-3xl md:text-4xl font-bold mb-3 text-center"
          style={{ fontFamily: "var(--font-display)", color: "#010101" }}
        >
          Send {isBtc ? "Bitcoin" : "Ethereum"} to complete your order
        </h1>

        <p
          className="text-center mb-10"
          style={{ color: "#555555" }}
        >
          Your order is on hold for the next 30 minutes. Once the network
          confirms your transfer we ship within 24 hours via cold-chain
          logistics.
        </p>

        <div
          className="rounded-xl border p-6 mb-6"
          style={{ backgroundColor: "#FFFFFF", borderColor: "#ECEAE4" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <p
                className="text-[11px] uppercase tracking-wide mb-1"
                style={{ color: "#8A8075" }}
              >
                Asset
              </p>
              <p className="text-base font-medium" style={{ color: "#010101" }}>
                {isBtc ? "Bitcoin (BTC)" : "Ethereum (ETH)"}
              </p>
            </div>
            <div>
              <p
                className="text-[11px] uppercase tracking-wide mb-1"
                style={{ color: "#8A8075" }}
              >
                Order total
              </p>
              <p className="text-base font-medium" style={{ color: "#010101" }}>
                {total != null ? `$${total.toFixed(2)} USD` : "See confirmation email"}
              </p>
            </div>
          </div>

          <div className="mb-5">
            <p
              className="text-[11px] uppercase tracking-wide mb-2"
              style={{ color: "#8A8075" }}
            >
              Receiving address
            </p>
            {address ? (
              <div
                className="flex items-center justify-between gap-3 p-3 rounded-md border"
                style={{ backgroundColor: "#F7F5F0", borderColor: "#ECEAE4" }}
              >
                <code
                  className="text-xs sm:text-sm break-all"
                  style={{ color: "#010101", fontFamily: "ui-monospace, monospace" }}
                >
                  {address}
                </code>
                <button
                  type="button"
                  onClick={() => handleCopy(address, "address")}
                  className="flex-shrink-0 inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-md border"
                  style={{
                    backgroundColor: copied === "address" ? "#010101" : "#FFFFFF",
                    color: copied === "address" ? "#FFFFFF" : "#010101",
                    borderColor: "#D8D4CC",
                  }}
                  aria-label="Copy receiving address"
                >
                  {copied === "address" ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  {copied === "address" ? "Copied" : "Copy"}
                </button>
              </div>
            ) : (
              <p className="text-sm" style={{ color: "#8A8075" }}>
                We emailed your receiving address to the inbox you provided. If
                you can&apos;t find it, contact{" "}
                <a
                  href="mailto:orders@nexphoria.com"
                  className="underline"
                  style={{ color: "#010101" }}
                >
                  orders@nexphoria.com
                </a>
                .
              </p>
            )}
          </div>

          <div>
            <p
              className="text-[11px] uppercase tracking-wide mb-2"
              style={{ color: "#8A8075" }}
            >
              Order reference (include in transaction memo if your wallet supports it)
            </p>
            <div
              className="flex items-center justify-between gap-3 p-3 rounded-md border"
              style={{ backgroundColor: "#F7F5F0", borderColor: "#ECEAE4" }}
            >
              <code
                className="text-xs sm:text-sm"
                style={{ color: "#010101", fontFamily: "ui-monospace, monospace" }}
              >
                {reference || "—"}
              </code>
              {reference && (
                <button
                  type="button"
                  onClick={() => handleCopy(reference, "reference")}
                  className="flex-shrink-0 inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-md border"
                  style={{
                    backgroundColor: copied === "reference" ? "#010101" : "#FFFFFF",
                    color: copied === "reference" ? "#FFFFFF" : "#010101",
                    borderColor: "#D8D4CC",
                  }}
                  aria-label="Copy order reference"
                >
                  {copied === "reference" ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  {copied === "reference" ? "Copied" : "Copy"}
                </button>
              )}
            </div>
          </div>
        </div>

        <div
          className="rounded-xl border p-6 mb-8"
          style={{ backgroundColor: "#FFFFFF", borderColor: "#ECEAE4" }}
        >
          <p
            className="text-sm font-medium mb-3"
            style={{ color: "#010101" }}
          >
            What happens next
          </p>
          <ol className="text-sm space-y-2" style={{ color: "#555555" }}>
            <li>
              <span className="font-semibold" style={{ color: "#010101" }}>1.</span>{" "}
              Send the exact USD-equivalent amount in {asset} from any wallet to
              the address above.
            </li>
            <li>
              <span className="font-semibold" style={{ color: "#010101" }}>2.</span>{" "}
              We monitor the address for incoming transactions. Typical
              confirmation: {isBtc ? "~10 minutes (1 block)" : "~2 minutes (12 blocks)"}.
            </li>
            <li>
              <span className="font-semibold" style={{ color: "#010101" }}>3.</span>{" "}
              You receive an email confirmation with your order summary and
              cold-chain shipping ETA within an hour of confirmation.
            </li>
            <li>
              <span className="font-semibold" style={{ color: "#010101" }}>4.</span>{" "}
              Tracking arrives in your inbox the moment your package leaves the
              fulfillment desk.
            </li>
          </ol>
          <p
            className="text-xs mt-4 leading-relaxed"
            style={{ color: "#8A8075" }}
          >
            Need help? Email{" "}
            <a
              href="mailto:orders@nexphoria.com"
              className="underline"
              style={{ color: "#010101" }}
            >
              orders@nexphoria.com
            </a>{" "}
            with your order reference and we&apos;ll respond within 24 hours.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border text-sm font-medium"
            style={{ backgroundColor: "#FFFFFF", color: "#010101", borderColor: "#D8D4CC" }}
          >
            Keep browsing <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/account/orders"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md text-sm font-medium"
            style={{ backgroundColor: "#010101", color: "#FFFFFF" }}
          >
            View order status
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default function CryptoCheckoutPage() {
  return (
    <Suspense fallback={null}>
      <CryptoInstructionsInner />
    </Suspense>
  );
}
