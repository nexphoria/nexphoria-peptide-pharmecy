"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, CheckCircle2 } from "lucide-react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    organization: "",
    researchPurpose: "",
    confirmCheckbox: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.email &&
      formData.password &&
      formData.fullName &&
      formData.researchPurpose &&
      formData.confirmCheckbox
    ) {
      setSubmitted(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const isFormValid =
    formData.email &&
    formData.password &&
    formData.fullName &&
    formData.researchPurpose &&
    formData.confirmCheckbox;

  if (submitted) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-4"
        style={{ backgroundColor: "#0A0A08", paddingTop: "80px" }}
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
            Account Created
          </h1>
          <p className="mb-8 text-sm leading-relaxed" style={{ color: "#A0A0A0" }}>
            Your research account has been successfully created. Authentication
            integration will be available soon.
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
      style={{ backgroundColor: "#0A0A08", paddingTop: "80px" }}
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
              <Shield className="h-8 w-8" style={{ color: "#A8C97F" }} />
            </div>
            <h1
              className="mb-3 text-4xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display)", color: "#FDFCF8" }}
            >
              Create Research Account
            </h1>
            <p className="text-sm leading-relaxed" style={{ color: "#A0A0A0" }}>
              Register as a qualified researcher to access our catalog
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

            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-medium"
                style={{ color: "#FDFCF8" }}
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="nex-input-dark w-full"
                placeholder="Dr. Jane Smith"
              />
            </div>

            {/* Organization */}
            <div>
              <label
                htmlFor="organization"
                className="mb-2 block text-sm font-medium"
                style={{ color: "#FDFCF8" }}
              >
                Organization <span style={{ color: "#6B6B6B" }}>(optional)</span>
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                className="nex-input-dark w-full"
                placeholder="University or Research Institution"
              />
            </div>

            {/* Research Purpose */}
            <div>
              <label
                htmlFor="researchPurpose"
                className="mb-2 block text-sm font-medium"
                style={{ color: "#FDFCF8" }}
              >
                Research Purpose
              </label>
              <select
                id="researchPurpose"
                name="researchPurpose"
                value={formData.researchPurpose}
                onChange={handleChange}
                required
                className="nex-input-dark w-full"
              >
                <option value="">Select research purpose</option>
                <option value="academic">Academic Research</option>
                <option value="private-lab">Private Laboratory</option>
                <option value="healthcare">Healthcare Provider</option>
                <option value="independent">Independent Research</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Confirmation Checkbox */}
            <div
              className="rounded-lg border p-4"
              style={{
                backgroundColor: "#0F0F0F",
                borderColor: "#1A1A1A",
              }}
            >
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  name="confirmCheckbox"
                  checked={formData.confirmCheckbox}
                  onChange={handleChange}
                  required
                  className="mt-0.5 h-5 w-5 flex-shrink-0 cursor-pointer rounded border-2"
                  style={{
                    borderColor: formData.confirmCheckbox
                      ? "#A8C97F"
                      : "rgba(253, 252, 248, 0.2)",
                    backgroundColor: formData.confirmCheckbox
                      ? "#A8C97F"
                      : "transparent",
                    accentColor: "#A8C97F",
                  }}
                />
                <span className="text-sm leading-relaxed" style={{ color: "#A0A0A0" }}>
                  I confirm I am 21+ and purchasing strictly for research
                  purposes only. I understand these products are not intended
                  for human consumption.
                </span>
              </label>
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
              Create Account
            </button>

            {/* Sign In Link */}
            <p className="text-center text-sm" style={{ color: "#6B6B6B" }}>
              Already have an account?{" "}
              <Link
                href="/account/login"
                className="font-medium transition-colors"
                style={{ color: "#A8C97F" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#8FB36A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#A8C97F")}
              >
                Sign In
              </Link>
            </p>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
