"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/lib/cart";
import { products, getRelatedProducts } from "@/lib/products";
import ProductVial from "@/components/ProductVial";
import ProductPen from "@/components/ProductPen";

interface CartDrawerProps {
  className?: string;
}

export default function CartDrawer({ className = "" }: CartDrawerProps) {
  const {
    items,
    isOpen,
    closeDrawer,
    updateQuantity,
    removeItem,
    addItem,
    getTotalItems,
    getTotalPrice,
  } = useCart();

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) closeDrawer();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, closeDrawer]);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Get recommended products (from related products of items in cart)
  const recommendedProducts = items.length > 0
    ? getRelatedProducts(
        items.reduce((acc, item) => {
          const related = item.product.relatedSlugs.slice(0, 2); // Limit to prevent too many
          return [...acc, ...related];
        }, [] as string[]).slice(0, 3) // Max 3 recommendations
      ).filter(p => !items.some(item => item.product.slug === p.slug))
    : products.slice(0, 3); // Default recommendations if cart empty

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 z-50"
            onClick={closeDrawer}
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 300,
              mass: 0.8
            }}
            className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-dark-panel border-l border-dark-border flex flex-col ${className}`}
            style={{ backgroundColor: "var(--dark-panel)", borderColor: "var(--dark-border)" }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-6 py-5 border-b"
              style={{ borderColor: "var(--dark-border)" }}
            >
              <div>
                <h2 className="text-lg font-bold text-primary">
                  Cart ({totalItems})
                </h2>
                <p className="text-sm text-secondary">
                  {totalItems === 0 ? "No items" : `$${totalPrice.toFixed(2)} total`}
                </p>
              </div>
              <button
                onClick={closeDrawer}
                className="p-2 hover:bg-dark-border transition-colors rounded-md"
                aria-label="Close cart"
              >
                <X className="w-5 h-5 text-secondary" />
              </button>
            </div>

            {/* Cart Content */}
            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                // Empty Cart State
                <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: "var(--dark-card)" }}
                  >
                    <ShoppingBag className="w-8 h-8 text-tertiary" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-sm text-secondary mb-6 max-w-xs">
                    Start building your stack with research-grade peptides
                  </p>
                  <button
                    onClick={closeDrawer}
                    className="btn-acid"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  {/* Cart Items */}
                  <div className="px-6 py-4 space-y-4">
                    <AnimatePresence mode="popLayout">
                      {items.map((item) => (
                        <motion.div
                          key={`${item.product.slug}-${item.format}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-start gap-3 p-4 rounded-lg border"
                          style={{
                            borderColor: "var(--dark-border-hover)",
                            backgroundColor: "var(--dark-card)"
                          }}
                        >
                          {/* Product Visual */}
                          <div
                            className="flex-shrink-0"
                            style={{
                              width: "40px",
                              height: item.format === 'pen' ? "28px" : "60px",
                              filter: `drop-shadow(0 4px 12px ${item.product.accentColor}30)`
                            }}
                          >
                            {item.format === 'pen' ? (
                              <ProductPen
                                productName={item.product.name}
                                dosage={item.selectedDosage?.size || item.product.size}
                              />
                            ) : (
                              <ProductVial
                                productName={item.product.name}
                                dosage={item.selectedDosage?.size || item.product.size}
                                category={item.product.category}
                                accentColor={item.product.accentColor}
                              />
                            )}
                          </div>

                          {/* Product Info */}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-primary truncate">
                              {item.product.name}
                            </h4>
                            <p className="text-xs text-secondary">
                              {item.selectedDosage?.size || item.product.size} • {item.format === 'pen' ? 'Pen' : 'Vial'}
                            </p>
                            <div className="flex items-center justify-between mt-2">
                              {/* Quantity Controls */}
                              <div className="flex items-center gap-1">
                                <button
                                  onClick={() => updateQuantity(item.product.slug, item.format, item.quantity - 1)}
                                  className="w-7 h-7 flex items-center justify-center border border-dark-border-hover hover:bg-dark-border transition-colors rounded"
                                  disabled={item.quantity <= 1}
                                >
                                  <Minus className="w-3 h-3 text-secondary" />
                                </button>
                                <span className="w-8 text-center text-sm font-medium text-primary">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.product.slug, item.format, item.quantity + 1)}
                                  className="w-7 h-7 flex items-center justify-center border border-dark-border-hover hover:bg-dark-border transition-colors rounded"
                                >
                                  <Plus className="w-3 h-3 text-secondary" />
                                </button>
                              </div>

                              {/* Price */}
                              <div className="text-right">
                                <div className="text-sm font-bold text-primary">
                                  ${((item.selectedDosage?.price ||
                                      (item.format === 'pen' && item.product.penAvailable ? item.product.penPrice : item.product.price)) *
                                      item.quantity).toFixed(0)}
                                </div>
                                <button
                                  onClick={() => removeItem(item.product.slug, item.format)}
                                  className="text-xs text-tertiary hover:text-secondary transition-colors"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  {/* Recommended Products */}
                  {recommendedProducts.length > 0 && (
                    <div
                      className="px-6 py-4 border-t"
                      style={{ borderColor: "var(--dark-border)" }}
                    >
                      <h3 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
                        Recommended For You
                      </h3>
                      <div className="space-y-3">
                        {recommendedProducts.map((product) => (
                          <div
                            key={product.slug}
                            className="flex items-center gap-3 p-3 rounded-lg border hover:border-dark-border-hover transition-colors cursor-pointer group"
                            style={{ borderColor: "var(--dark-border)" }}
                            onClick={() => {
                              addItem(product);
                              // Optional: Show a toast or brief visual feedback
                            }}
                          >
                            <div
                              style={{
                                width: "32px",
                                height: "48px",
                                flexShrink: 0,
                                filter: `drop-shadow(0 2px 8px ${product.accentColor}20)`
                              }}
                            >
                              <ProductVial
                                productName={product.name}
                                dosage={product.size}
                                category={product.category}
                                accentColor={product.accentColor}
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-xs font-medium text-primary truncate">
                                {product.name}
                              </h4>
                              <p className="text-xs text-secondary">
                                ${product.price}
                              </p>
                            </div>
                            <button className="text-xs text-acid-green font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                              Add
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Footer - Checkout */}
            {items.length > 0 && (
              <div
                className="px-6 py-5 border-t"
                style={{ borderColor: "var(--dark-border)" }}
              >
                {/* Total */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-secondary">
                    Subtotal
                  </span>
                  <span className="text-xl font-bold text-primary">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>

                {/* Trust badges */}
                <div className="flex justify-center gap-4 mb-4 text-xs text-tertiary">
                  <span>✓ 99.7% Purity</span>
                  <span>✓ COA Included</span>
                  <span>✓ Same-Day Ship</span>
                </div>

                {/* Checkout Button */}
                <button
                  className="btn-acid w-full justify-center"
                  onClick={async () => {
                    try {
                      const cartItems = items.map(item => ({
                        productSlug: item.product.slug,
                        name: item.product.name,
                        price: item.monthlyPrice || item.selectedDosage?.price || (item.format === 'pen' ? item.product.penPrice : item.product.price),
                        quantity: item.quantity,
                        size: item.selectedDosage?.size || item.product.size,
                        format: item.format,
                        subscriptionMonths: item.subscriptionMonths || 1,
                      }));
                      const res = await fetch(process.env.NEXT_PUBLIC_CHECKOUT_URL || '/api/checkout', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ items: cartItems }),
                      });
                      const data = await res.json();
                      if (data.url) {
                        window.location.href = data.url;
                      } else {
                        console.error('Checkout error:', data.error);
                      }
                    } catch (err) {
                      console.error('Checkout failed:', err);
                    }
                  }}
                >
                  Checkout <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}