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

type PurchaseOption = {
  type: 'one-time' | 'monthly';
  label: string;
  description: string;
};

const purchaseOptions: PurchaseOption[] = [
  { type: 'one-time', label: "One-time purchase", description: "Single order" },
  { type: 'monthly', label: "Monthly Auto-Ship", description: "Auto-ship monthly" },
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
  const [selectedOption, setSelectedOption] = useState<PurchaseOption>(purchaseOptions[0]); // Default to one-time
  const [quantity, setQuantity] = useState(1);

  // Base price based on format/dosage
  const getBasePrice = () => {
    if (selectedFormat === 'pen' && product.penAvailable) {
      return product.penPrice;
    }
    return selectedDosage?.price || product.price;
  };

  const basePrice = getBasePrice();
  const totalPrice = basePrice * quantity;

  const handleAddToCart = () => {
    const months = selectedOption.type === 'monthly' ? 12 : 1; // 12 months for monthly, 1 for one-time
    addItem(product, selectedFormat, selectedDosage, months);
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

        {/* Purchase Option Selection */}
        <div
          className="p-6 border-b"
          style={{ borderColor: "var(--dark-border)" }}
        >
          <h3 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
            Purchase Option
          </h3>
          <div className="space-y-2">
            {purchaseOptions.map((option) => {
              const isSelected = selectedOption.type === option.type;
              return (
                <button
                  key={option.type}
                  onClick={() => setSelectedOption(option)}
                  className={`w-full p-4 rounded-lg border transition-all duration-200 text-left ${
                    isSelected
                      ? 'border-acid-green bg-acid-green/10'
                      : 'border-dark-border hover:border-dark-border-hover'
                  }`}
                >
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
                          {option.label}
                        </div>
                        <div className="text-xs text-secondary">
                          {option.description}
                        </div>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-lg font-bold text-primary whitespace-nowrap">
                        ${basePrice}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
          <p className="text-xs text-tertiary mt-3">
            Monthly delivery can be cancelled or modified anytime.
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
              <span className="text-sm text-secondary flex-shrink-0">Unit price</span>
              <span className="text-sm text-primary">${basePrice}</span>
            </div>
            {quantity > 1 && (
              <div className="flex items-center justify-between mb-1 min-w-0 gap-2">
                <span className="text-sm text-secondary flex-shrink-0">Quantity</span>
                <span className="text-sm text-primary">×{quantity}</span>
              </div>
            )}
            <div
              className="flex items-center justify-between pt-3 mt-2 border-t min-w-0 gap-2"
              style={{ borderColor: "var(--dark-border)" }}
            >
              <span className="text-base font-semibold text-primary flex-shrink-0">Total</span>
              <span className="text-2xl font-bold text-primary">
                ${totalPrice}
              </span>
            </div>
          </div>

          {/* Add to Order Button */}
          <button
            onClick={handleAddToCart}
            className="btn-acid w-full justify-center text-sm font-bold uppercase tracking-wide"
            style={{ height: "52px" }}
          >
            <ShoppingCart className="w-4 h-4" />
            ADD TO ORDER
          </button>

          <p className="mt-3 text-xs text-center" style={{color:"rgba(253,252,248,0.4)"}}>For qualified research use only. Not for human consumption.</p>

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
              For qualified research use only. Not for human consumption.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
