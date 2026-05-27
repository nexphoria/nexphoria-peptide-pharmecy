"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus, Check, ShoppingCart, Shield, FlaskConical, Truck, RefreshCw } from "lucide-react";
import { useCart } from "@/lib/cart";
import { Product, ProductDosage } from "@/lib/products";

interface BuyBoxProps {
  product: Product;
  className?: string;
  selectedFormat?: 'vial' | 'pen';
  onFormatChange?: (format: 'vial' | 'pen') => void;
}

type SubscriptionTier = {
  months: number;
  label: string;
  discount: number; // percentage off
  badge?: string;
};

const subscriptionTiers: SubscriptionTier[] = [
  { months: 1, label: "1 Month Supply", discount: 0 },
  { months: 3, label: "3 Month Supply", discount: 14, badge: "Save 14%" },
  { months: 6, label: "6 Month Supply", discount: 28, badge: "Best Value" },
];

export default function BuyBox({
  product,
  className = "",
  selectedFormat: externalFormat,
  onFormatChange
}: BuyBoxProps) {
  const { addItem, openDrawer } = useCart();
  const [internalFormat, setInternalFormat] = useState<'vial' | 'pen'>('vial');

  // Use external format state if provided, otherwise use internal state
  const selectedFormat = externalFormat !== undefined ? externalFormat : internalFormat;
  const setSelectedFormat = onFormatChange || setInternalFormat;
  const [selectedDosage, setSelectedDosage] = useState<ProductDosage | undefined>(
    product.dosages?.[0] || undefined
  );
  const [selectedTier, setSelectedTier] = useState<SubscriptionTier>(subscriptionTiers[2]); // Default to best value
  const [quantity, setQuantity] = useState(1);

  // Base price based on format/dosage
  const getBasePrice = () => {
    if (selectedFormat === 'pen' && product.penAvailable) {
      return product.penPrice;
    }
    return selectedDosage?.price || product.price;
  };

  const basePrice = getBasePrice();
  const discountedPrice = Math.round(basePrice * (1 - selectedTier.discount / 100));
  const monthlyPrice = discountedPrice;
  const totalPrice = monthlyPrice * selectedTier.months * quantity;

  const handleAddToCart = () => {
    addItem(product, selectedFormat, selectedDosage, selectedTier.months);
    openDrawer();
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta));
  };

  const trustBadges = [
    { icon: FlaskConical, text: `${product.purity} Purity`, color: "var(--acid-green)" },
    { icon: Shield, text: "HPLC Tested", color: "var(--accent-cognitive)" },
    { icon: Truck, text: "Cold Shipped", color: "var(--accent-recovery)" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`lg:sticky lg:top-28 z-30 ${className}`}
    >
      <div
        className="border rounded-xl overflow-hidden"
        style={{
          borderColor: "var(--dark-border-hover)",
          backgroundColor: "var(--dark-card)"
        }}
      >
        {/* Format Selection (Vial/Pen) — ALWAYS SHOWN */}
        <div
          className="p-6 border-b"
          style={{ borderColor: "var(--dark-border)" }}
        >
          <h3 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
            Format
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {(['vial', 'pen'] as const).map((format) => {
              const isAvailable = format === 'vial' || product.penAvailable;
              return (
                <button
                  key={format}
                  onClick={() => isAvailable && setSelectedFormat(format)}
                  disabled={!isAvailable}
                  className={`p-3 rounded-lg border transition-all duration-200 text-left min-w-0 ${
                    !isAvailable
                      ? 'opacity-40 cursor-not-allowed border-dark-border'
                      : selectedFormat === format
                        ? 'border-acid-green bg-acid-green/10'
                        : 'border-dark-border hover:border-dark-border-hover'
                  }`}
                >
                  <div className="flex items-center justify-between min-w-0">
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium text-primary capitalize truncate">
                        {format}
                      </div>
                      <div className="text-xs text-secondary truncate">
                        {format === 'vial' ? 'Lyophilized' : 'Pre-loaded'}
                      </div>
                    </div>
                    {selectedFormat === format && isAvailable && (
                      <Check className="w-4 h-4 text-acid-green flex-shrink-0 ml-2" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dosage Selection */}
        {selectedFormat === 'vial' && product.dosages && product.dosages.length > 1 && (
          <div
            className="p-6 border-b"
            style={{ borderColor: "var(--dark-border)" }}
          >
            <h3 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
              Dosage
            </h3>
            <div className="space-y-2">
              {product.dosages.map((dosage) => (
                <button
                  key={dosage.size}
                  onClick={() => setSelectedDosage(dosage)}
                  className={`w-full p-3 rounded-lg border transition-all duration-200 text-left min-w-0 ${
                    selectedDosage?.size === dosage.size
                      ? 'border-acid-green bg-acid-green/10'
                      : 'border-dark-border hover:border-dark-border-hover'
                  }`}
                >
                  <div className="flex items-center justify-between min-w-0">
                    <span className="text-sm font-medium text-primary truncate flex-1">{dosage.size}</span>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-sm font-bold text-primary">${dosage.price}</span>
                      {selectedDosage?.size === dosage.size && (
                        <Check className="w-4 h-4 text-acid-green" />
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Subscription Tier Selection ⭐ KEY FEATURE */}
        <div
          className="p-6 border-b"
          style={{ borderColor: "var(--dark-border)" }}
        >
          <div className="flex items-center gap-2 mb-3">
            <RefreshCw className="w-4 h-4 text-acid-green" />
            <h3 className="text-sm font-semibold text-primary uppercase tracking-wide">
              Subscribe & Save
            </h3>
          </div>
          <div className="space-y-2">
            {subscriptionTiers.map((tier) => {
              const tierPrice = Math.round(basePrice * (1 - tier.discount / 100));
              const isSelected = selectedTier.months === tier.months;
              return (
                <button
                  key={tier.months}
                  onClick={() => setSelectedTier(tier)}
                  className={`w-full p-4 rounded-lg border transition-all duration-200 text-left relative ${
                    isSelected
                      ? 'border-acid-green bg-acid-green/10'
                      : 'border-dark-border hover:border-dark-border-hover'
                  }`}
                >
                  {/* Best Value badge */}
                  {tier.badge === "Best Value" && (
                    <span className="absolute -top-2 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-acid-green text-dark">
                      Best Value
                    </span>
                  )}
                  <div className="flex items-center justify-between min-w-0 gap-3">
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      {/* Radio indicator */}
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors flex-shrink-0 ${
                        isSelected ? 'border-acid-green' : 'border-dark-border-hover'
                      }`}>
                        {isSelected && (
                          <div className="w-2.5 h-2.5 rounded-full bg-acid-green" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-medium text-primary truncate">
                          {tier.label}
                        </div>
                        {tier.discount > 0 && (
                          <div className="text-xs text-acid-green font-medium">
                            Save {tier.discount}%
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      {tier.discount > 0 && (
                        <div className="text-xs text-secondary line-through">
                          ${basePrice}/mo
                        </div>
                      )}
                      <div className="text-lg font-bold text-primary whitespace-nowrap">
                        ${tierPrice}<span className="text-xs text-secondary font-normal">/mo</span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
          <p className="text-xs text-tertiary mt-3">
            Auto-ships monthly. Cancel or modify anytime. Free shipping on 3+ month plans.
          </p>
        </div>

        {/* Quantity & Price Summary */}
        <div className="p-6">
          {/* Quantity Selector */}
          <div className="mb-5">
            <label className="text-sm font-semibold text-primary mb-3 block uppercase tracking-wide">
              Quantity
            </label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
                className="w-10 h-10 flex items-center justify-center border border-dark-border hover:border-dark-border-hover disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
              >
                <Minus className="w-4 h-4 text-secondary" />
              </button>
              <span className="text-lg font-bold text-primary min-w-[2rem] text-center">
                {quantity}
              </span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="w-10 h-10 flex items-center justify-center border border-dark-border hover:border-dark-border-hover rounded-lg transition-colors"
              >
                <Plus className="w-4 h-4 text-secondary" />
              </button>
            </div>
          </div>

          {/* Price Summary */}
          <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: "var(--dark-panel)" }}>
            <div className="flex items-center justify-between mb-1 min-w-0 gap-2">
              <span className="text-sm text-secondary flex-shrink-0">Monthly</span>
              <span className="text-sm text-primary text-right truncate">${monthlyPrice}/mo × {selectedTier.months} months</span>
            </div>
            {quantity > 1 && (
              <div className="flex items-center justify-between mb-1 min-w-0 gap-2">
                <span className="text-sm text-secondary flex-shrink-0">Qty</span>
                <span className="text-sm text-primary">×{quantity}</span>
              </div>
            )}
            {selectedTier.discount > 0 && (
              <div className="flex items-center justify-between mb-1 min-w-0 gap-2">
                <span className="text-sm text-acid-green flex-shrink-0">You save</span>
                <span className="text-sm text-acid-green font-medium">
                  -${(basePrice * selectedTier.months * quantity - totalPrice).toFixed(0)}
                </span>
              </div>
            )}
            <div
              className="flex items-center justify-between pt-3 mt-2 border-t min-w-0 gap-2"
              style={{ borderColor: "var(--dark-border)" }}
            >
              <span className="text-base font-semibold text-primary flex-shrink-0">Total today</span>
              <span className="text-2xl font-bold text-acid-green">
                ${totalPrice.toFixed(0)}
              </span>
            </div>
          </div>

          {/* Subscribe Button */}
          <button
            onClick={handleAddToCart}
            className="btn-acid w-full justify-center mb-4 text-sm font-bold uppercase tracking-wide"
            style={{ height: "52px" }}
          >
            <ShoppingCart className="w-4 h-4" />
            SUBSCRIBE NOW
          </button>

          {/* One-time purchase option */}
          <button
            onClick={() => {
              addItem(product, selectedFormat, selectedDosage, 1); // 1 month = one-time
              openDrawer();
            }}
            className="w-full py-3 text-center text-sm text-secondary hover:text-primary border border-dark-border hover:border-dark-border-hover rounded-lg transition-colors"
          >
            Or buy one-time — ${basePrice}
          </button>

          {/* Trust Badges */}
          <div className="mt-6 space-y-2">
            {trustBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div key={index} className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${badge.color}15` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: badge.color }} />
                  </div>
                  <span className="text-sm text-secondary">{badge.text}</span>
                </div>
              );
            })}
          </div>

          {/* Research Disclaimer */}
          <div
            className="mt-6 pt-4 border-t"
            style={{ borderColor: "var(--dark-border)" }}
          >
            <p className="text-xs text-tertiary leading-relaxed">
              For qualified research use only. Not for human consumption. Cancel subscription anytime.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
