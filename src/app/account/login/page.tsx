"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.password) setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: "#EAE7E3", paddingTop: "100px" }}>
        <div className="max-w-md text-center">
          <h1 className="text-2xl mb-4" style={{ fontWeight: 300, color: "#010101" }}>Signed In</h1>
          <p className="text-sm mb-8" style={{ color: "#7F7F7D" }}>
            Authentication successful. Order history and saved protocols are managed through your confirmation emails.
          </p>
          <Link href="/products" className="btn-primary">
            Browse Compounds
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#EAE7E3", paddingTop: "120px" }}>
      <div className="max-w-md mx-auto px-6">
        <Link href="/" className="text-sm mb-8 inline-block" style={{ color: "#7F7F7D" }}>
          ← Back
        </Link>

        <div className="text-center mb-10">
          <h1 className="text-3xl mb-2" style={{ fontWeight: 200, color: "#010101" }}>Sign In</h1>
          <p className="text-sm" style={{ color: "#7F7F7D" }}>Access your research account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-xs uppercase mb-2" style={{ color: "#7F7F7D", letterSpacing: "0.1em" }}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="researcher@institution.edu"
              className="w-full px-4 py-3 text-sm rounded-sm"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(0,0,0,0.1)", color: "#010101", outline: "none" }}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-xs uppercase mb-2" style={{ color: "#7F7F7D", letterSpacing: "0.1em" }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="••••••••"
              className="w-full px-4 py-3 text-sm rounded-sm"
              style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(0,0,0,0.1)", color: "#010101", outline: "none" }}
            />
          </div>

          <button type="submit" className="btn-primary w-full">
            Sign In
          </button>

          <p className="text-center text-sm" style={{ color: "#7F7F7D" }}>
            Don&apos;t have an account?{" "}
            <Link href="/account/register" style={{ color: "#010101", fontWeight: 500 }}>
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
