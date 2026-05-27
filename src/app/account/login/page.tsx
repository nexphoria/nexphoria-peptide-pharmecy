"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, LogIn, CheckCircle2 } from "lucide-react";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      setSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isFormValid = formData.email && formData.password;

  if (submitted) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-4"
        style={{ backgroundColor: "#EAE7E3", paddingTop: "80px" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md text-center"
        >
          <div
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full"
            style={{
              backgroundColor: "rgba(168, 201, 127, 0.12)",
              border: "2px solid rgba(168, 201, 127, 0.3)",
            }}
          >
            <CheckCircle2 className="h-10 w-10" style={{ color: "#A8C97F" }} />
          </div>
          <h1
            className="mb-4 text-3xl font-bold"
            style={{ fontFamily: "var(--font-display)", color: "#FDFCF8" }}
          >
            Sign In Successful
          </h1>
          <p className="mb-8 text-sm leading-relaxed" style={{ color: "#A0A0A0" }}>
            Authentication successful. Full authentication integration will be
            available soon.
          </p>
          <Link href="/products" className="btn-acid">
            View Catalog
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#EAE7E3", paddingTop: "80px" }}
    >
      <div className="container-nex py-12">
        {/* Back link */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm transition-colors"
          style={{ color: "#A0A0A0" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#FDFCF8")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#A0A0A0")}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="mx-auto max-w-lg">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center"
          >
            <div
              className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
              style={{
                backgroundColor: "rgba(168, 201, 127, 0.12)",
                border: "1px solid rgba(168, 201, 127, 0.3)",
              }}
            >
              <LogIn className="h-8 w-8" style={{ color: "#A8C97F" }} />
            </div>
            <h1
              className="mb-3 text-4xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)", color: "#FDFCF8" }}
            >
              Sign In
            </h1>
            <p className="text-sm leading-relaxed" style={{ color: "#A0A0A0" }}>
              Access your research account
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium"
                style={{ color: "#FDFCF8" }}
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="nex-input-dark w-full"
                placeholder="researcher@institution.edu"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium"
                style={{ color: "#FDFCF8" }}
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="nex-input-dark w-full"
                placeholder="••••••••"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isFormValid}
              className="btn-acid w-full"
              style={{
                opacity: isFormValid ? 1 : 0.5,
                cursor: isFormValid ? "pointer" : "not-allowed",
              }}
            >
              Sign In
            </button>

            {/* Register Link */}
            <p className="text-center text-sm" style={{ color: "#6B6B6B" }}>
              Don't have an account?{" "}
              <Link
                href="/account/register"
                className="font-medium transition-colors"
                style={{ color: "#A8C97F" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#8FB36A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#A8C97F")}
              >
                Create Account
              </Link>
            </p>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
