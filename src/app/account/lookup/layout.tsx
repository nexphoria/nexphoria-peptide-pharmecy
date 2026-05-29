import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Status | Nexphoria",
  description: "Quick order status lookup by Stripe session ID.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LookupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
