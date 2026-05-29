import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "success";
  className?: string;
}

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const variants = {
    default: "bg-brand-dark-card text-brand-muted border border-white/10",
    gold: "bg-brand-gold/10 text-brand-gold border border-brand-gold/20",
    success: "bg-green-900/30 text-green-400 border border-green-500/20",
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
