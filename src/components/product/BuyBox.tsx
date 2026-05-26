"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus, Check, ShoppingCart, Shield, FlaskConical, Truck } from "lucide-react";
import { useCart } from "@/lib/cart";
import { Product, ProductDosage } from "@/lib/products";
import { getSavingsPercentage } from "@/lib/cart";

interface BuyBoxProps {
  product: Product;
  className?: string;
}

export default function BuyBox({ product, className = "" }: BuyBoxProps) {
  const { addItem, openDrawer } = useCart();
  const [selectedFormat, setSelectedFormat] = useState<'vial' | 'pen'>('vial');
  const [selectedDosage, setSelectedDosage] = useState<ProductDosage | undefined>(
    product.dosages?.[0] || undefined
  );
  const [quantity, setQuantity] = useState(1);

  // Determine current price based on selections
  const getCurrentPrice = () => {
    if (selectedFormat === 'pen' && product.penAvailable) {
      return product.penPrice;
    }
    return selectedDosage?.price || product.price;
  };

  const currentPrice = getCurrentPrice();
  const totalPrice = currentPrice * quantity;

  // Calculate savings for larger dosages
  const getSavings = (dosage: ProductDosage) => {
    if (!product.dosages || product.dosages.length < 2) return 0;
    const basePrice = product.dosages[0].price;
    const pricePerUnit = dosage.price / parseFloat(dosage.size.replace('mg', ''));
    const basePricePerUnit = basePrice / parseFloat(product.dosages[0].size.replace('mg', ''));
    return Math.max(0, Math.round(((basePricePerUnit - pricePerUnit) / basePricePerUnit) * 100));
  };

  const handleAddToCart = () => {
    addItem(product, selectedFormat, selectedDosage);
    openDrawer(); // Open cart drawer to show the added item
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
      className={`sticky top-28 z-30 ${className}`}
    >
      <div
        className="border rounded-xl overflow-hidden"
        style={{
          borderColor: "var(--dark-border-hover)",
          backgroundColor: "var(--dark-card)"
        }}
      >
        {/* Format Selection (Vial/Pen) */}
        {product.penAvailable && (
          <div
            className="p-6 border-b"
            style={{ borderColor: "var(--dark-border)" }}
          >
            <h3 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
              Format
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {(['vial', 'pen'] as const).map((format) => (
                <button
                  key={format}
                  onClick={() => setSelectedFormat(format)}
                  className={`p-3 rounded-lg border transition-all duration-200 text-left ${
                    selectedFormat === format
                      ? 'border-acid-green bg-acid-green/10'
                      : 'border-dark-border hover:border-dark-border-hover'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-primary capitalize">
                        {format}
                      </div>
                      <div className="text-xs text-secondary">
                        {format === 'vial' ? 'Lyophilized' : 'Pre-loaded'}
                      </div>
                    </div>
                    {selectedFormat === format && (
                      <Check className="w-4 h-4 text-acid-green" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

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
              {product.dosages.map((dosage) => {
                const savings = getSavings(dosage);
                return (
                  <button
                    key={dosage.size}
                    onClick={() => setSelectedDosage(dosage)}
                    className={`w-full p-4 rounded-lg border transition-all duration-200 text-left ${
                      selectedDosage?.size === dosage.size
                        ? 'border-acid-green bg-acid-green/10'
                        : 'border-dark-border hover:border-dark-border-hover'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium text-primary">
                          {dosage.size}
                        </div>
                        <div className="text-lg font-bold text-primary">
                          ${dosage.price}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {savings > 0 && (
                          <span className="badge-savings text-xs px-2 py-1">
                            Save {savings}%
                          </span>
                        )}
                        {selectedDosage?.size === dosage.size && (
                          <Check className="w-4 h-4 text-acid-green" />
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Quantity & Price */}
        <div className="p-6">
          {/* Quantity Selector */}
          <div className="mb-6">
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
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-secondary">Unit Price</span>
              <span className="text-sm text-primary">${currentPrice}</span>
            </div>
            {quantity > 1 && (
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-secondary">Quantity</span>
                <span className="text-sm text-primary">×{quantity}</span>
              </div>
            )}
            <div
              className="flex items-center justify-between pt-3 border-t"
              style={{ borderColor: "var(--dark-border)" }}
            >
              <span className="text-lg font-semibold text-primary">Total</span>
              <span className="text-2xl font-bold text-acid-green">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="btn-acid w-full justify-center mb-6 text-sm font-bold uppercase tracking-wide"
            style={{ height: "52px" }}
          >
            <ShoppingCart className="w-4 h-4" />
            ADD TO CART
          </button>

          {/* Trust Badges */}
          <div className="space-y-2">
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
              This product is intended for qualified research use only. Not for human consumption,
              diagnostic, or therapeutic use.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}