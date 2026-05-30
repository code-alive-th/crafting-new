import Navbar from "@/components/Navbar";
import WorksPage from "@/components/works/WorksPage";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Works | Crafting Lab",
  description:
    "Portfolio of Crafting Lab — Brand strategy, graphic design, video production, and photography showcase for businesses in Thailand.",
};

export default function Works() {
  return (
    <>
      <Navbar />
      <main>
        <WorksPage />
      </main>
      <Footer />
    </>
  );
}
