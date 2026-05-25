import type { Metadata } from "next";
import AboutClient from "./client";

export const metadata: Metadata = {
  title: "About Nexphoria — Research-Grade Standards",
  description:
    "Nexphoria was founded on a singular conviction: that research compounds should meet the same standards as pharmaceutical drugs. cGMP-certified, third-party tested.",
};

export default function AboutPage() {
  return <AboutClient />;
}
