import type { Metadata } from "next";
import ContactClient from "./client";

export const metadata: Metadata = {
  title: "Contact Nexphoria",
  description:
    "Contact Nexphoria for compound inquiries, custom synthesis requests, bulk orders, or documentation questions.",
};

export default function ContactPage() {
  return <ContactClient />;
}
