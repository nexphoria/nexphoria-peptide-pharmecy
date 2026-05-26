"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, Package, ArrowRight } from "lucide-react";
import { useCart } from "@/lib/cart";

export default function CheckoutSuccess() {
  const { clearCart } = useCart();
  const [cleared, setCleared] = useState(false);

  useEffect(() => {
    if (!cleared) {
      clearCart();
      setCleared(true);
    }
  }, [clearCart, cleared]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 mx-auto mb-8 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "rgba(198, 241, 132, 0.15)" }}
        >
          <CheckCircle className="w-10 h-10 text-acid-green" />
        </motion.div>

        <h1
          className="text-3xl md:text-4xl font-bold text-primary mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Order Confirmed
        </h1>

        <p className="text-secondary text-lg mb-8 leading-relaxed">
          Thank you for your order. Your research compounds will be prepared and shipped
          via cold-chain logistics within 24 hours. You&apos;ll receive tracking information
          at the email address provided.
        </p>

        <div className="p-6 rounded-xl border border-border mb-8" style={{ backgroundColor: "var(--dark-panel)" }}>
          <div className="flex items-center gap-3 mb-3">
            <Package className="w-5 h-5 text-acid-green" />
            <span className="text-primary font-medium">What happens next:</span>
          </div>
          <ul className="text-sm text-secondary space-y-2 text-left">
            <li>• Order confirmation email sent immediately</li>
            <li>• Quality verification & packaging (4-8 hours)</li>
            <li>• Cold-chain shipping with tracking (24 hours)</li>
            <li>• Certificate of Analysis (COA) included with shipment</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products" className="btn-acid">
            <ArrowRight className="w-4 h-4" />
            Continue Shopping
          </Link>
          <Link href="/" className="btn-outline">
            Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
