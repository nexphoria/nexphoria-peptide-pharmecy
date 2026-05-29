"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { XCircle, ArrowLeft, ShoppingCart } from "lucide-react";

export default function CheckoutCancel() {
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
          style={{ backgroundColor: "rgba(239, 68, 68, 0.15)" }}
        >
          <XCircle className="w-10 h-10 text-red-400" />
        </motion.div>

        <h1
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ fontFamily: "var(--font-display)", color: "#000000" }}
        >
          Order Cancelled
        </h1>

        <p className="text-lg mb-8 leading-relaxed" style={{ color: "#555555" }}>
          Your checkout was cancelled. No charges were made.
          Your cart items are still saved if you&apos;d like to complete your order.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products" className="btn-acid">
            <ShoppingCart className="w-4 h-4" />
            Return to Products
          </Link>
          <Link href="/" className="btn-outline">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
