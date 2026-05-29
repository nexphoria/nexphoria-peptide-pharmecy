import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div className={`bg-brand-dark-card border border-white/5 rounded-xl p-6 ${hover ? "hover:border-brand-gold/20 transition-colors" : ""} ${className}`}>
      {children}
    </div>
  );
}
