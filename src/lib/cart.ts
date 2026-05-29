import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Product } from './products';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedDosage?: {
    size: string;
    price: number;
  };
  format: 'vial' | 'pen';
  subscriptionMonths: number; // 1 = one-time, 3 or 6 = subscription
  monthlyPrice: number; // per-shipment price after discount
  subscriptionDiscount: number; // fractional discount applied (0, 0.08, or 0.12)
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;

  // Actions
  addItem: (product: Product, format?: 'vial' | 'pen', selectedDosage?: { size: string; price: number }, subscriptionMonths?: number) => void;
  removeItem: (productSlug: string, format: 'vial' | 'pen') => void;
  updateQuantity: (productSlug: string, format: 'vial' | 'pen', quantity: number) => void;
  clearCart: () => void;

  // Drawer controls
  openDrawer: () => void;
  closeDrawer: () => void;

  // Computed values
  getTotalItems: () => number;
  getTotalPrice: () => number;
  getItemCount: (productSlug: string, format: 'vial' | 'pen') => number;
}

// Resolve the effective unit price for a product given format + dosage.
function resolveUnitPrice(
  product: Product,
  format: 'vial' | 'pen',
  selectedDosage?: { size: string; price: number },
): number {
  // Pen format overrides to the pen price when available.
  if (format === 'pen' && product.penAvailable) {
    return product.penPrice;
  }
  // Otherwise prefer the explicitly selected dosage, then the smallest
  // available dosage, then the base product price.
  if (selectedDosage) {
    return selectedDosage.price;
  }
  if (product.dosages && product.dosages.length > 0) {
    return product.dosages[0].price;
  }
  return product.price;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product, format = 'vial', selectedDosage, subscriptionMonths = 1) => {
        const existingItemIndex = get().items.findIndex(
          item => item.product.slug === product.slug && item.format === format
        );

        // If no dosage selected but product has dosages, use the smallest one.
        let dosageInfo = selectedDosage;
        if (!dosageInfo && product.dosages && product.dosages.length > 0) {
          dosageInfo = product.dosages[0];
        }

        const basePrice = resolveUnitPrice(product, format, dosageInfo);

        // Subscription discount: 3-month = 8%, 6-month = 12%
        const subscriptionDiscount =
          subscriptionMonths >= 6 ? 0.12 :
          subscriptionMonths >= 3 ? 0.08 : 0;

        const monthlyPrice = subscriptionDiscount > 0
          ? +(basePrice * (1 - subscriptionDiscount)).toFixed(2)
          : basePrice;

        if (existingItemIndex >= 0) {
          // Update existing item
          set(state => ({
            items: state.items.map((item, index) =>
              index === existingItemIndex
                ? { ...item, quantity: item.quantity + 1, subscriptionMonths, monthlyPrice, subscriptionDiscount }
                : item
            )
          }));
        } else {
          // Add new item
          set(state => ({
            items: [...state.items, {
              product,
              quantity: 1,
              selectedDosage: dosageInfo,
              format,
              subscriptionMonths,
              monthlyPrice,
              subscriptionDiscount,
            }]
          }));
        }
      },

      removeItem: (productSlug, format) => {
        set(state => ({
          items: state.items.filter(
            item => !(item.product.slug === productSlug && item.format === format)
          )
        }));
      },

      updateQuantity: (productSlug, format, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productSlug, format);
          return;
        }

        set(state => ({
          items: state.items.map(item =>
            item.product.slug === productSlug && item.format === format
              ? { ...item, quantity }
              : item
          )
        }));
      },

      clearCart: () => {
        set({ items: [] });
      },

      openDrawer: () => {
        set({ isOpen: true });
      },

      closeDrawer: () => {
        set({ isOpen: false });
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        // Subscriptions bill monthly, so the cart total reflects the amount
        // charged this month: monthlyPrice * quantity per line, summed.
        return get().items.reduce((total, item) => {
          return total + (item.monthlyPrice * item.quantity);
        }, 0);
      },

      getItemCount: (productSlug, format) => {
        const item = get().items.find(
          item => item.product.slug === productSlug && item.format === format
        );
        return item ? item.quantity : 0;
      }
    }),
    {
      name: 'nexphoria-cart',
      storage: createJSONStorage(() => localStorage),
      // Only persist cart items, not drawer state
      partialize: (state) => ({ items: state.items }),
    }
  )
);

// Returns the per-unit price for a cart item (one month / one-time).
export function getItemUnitPrice(item: CartItem): number {
  return item.monthlyPrice;
}

// Human-readable cadence label for a subscription length.
export function getCadenceLabel(subscriptionMonths: number): string {
  if (subscriptionMonths >= 6) return '6-Month Research Cycle';
  if (subscriptionMonths >= 3) return '3-Month Research Cycle';
  return 'One-time';
}

// Helper functions for formatting
export function formatPrice(price: number): string {
  return `$${price}`;
}

export function formatCartTotal(total: number): string {
  return `$${total.toFixed(2)}`;
}

// Get savings percentage for larger dosages
export function getSavingsPercentage(originalPrice: number, discountedPrice: number): number {
  if (originalPrice <= discountedPrice) return 0;
  return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
}
