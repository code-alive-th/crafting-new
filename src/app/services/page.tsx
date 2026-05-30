import "./services.css";
import Navbar from "@/components/Navbar";
import ServicesPage from "@/components/services/ServicesPage";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services — CRAFTING LAB",
  description:
    "Chiang Mai's digital marketing experts offering brand strategy, content creation, social media marketing, and video production services.",
};

export default function Services() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesPage />
      </main>
      <Footer />
    </>
  );
}
