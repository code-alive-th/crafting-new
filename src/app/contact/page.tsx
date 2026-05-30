import "./contact.css";
import Navbar from "@/components/Navbar";
import ContactPage from "@/components/contact/ContactPage";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — CRAFTING LAB",
  description:
    "Contact CRAFTING LAB in Chiang Mai for digital marketing, branding, and video production services. Reach us via phone, email, or our contact form.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <ContactPage />
      </main>
      <Footer />
    </>
  );
}
