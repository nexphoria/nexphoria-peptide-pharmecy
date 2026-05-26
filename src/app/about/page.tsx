import type { Metadata } from "next";
import AboutClient from "./client";

export const metadata: Metadata = {
  title: "About Nexphoria — Research-Grade Standards",
  description:
    "Nexphoria was founded on the conviction that research compounds should meet pharmaceutical-grade standards. cGMP-certified, independently verified, fully documented.",
};

export default function AboutPage() {
  return <AboutClient />;
}
