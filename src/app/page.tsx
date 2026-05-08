import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import About from "@/components/home/About";
import PhotoCarousel from "@/components/home/PhotoCarousel";
import Services from "@/components/home/Services";
import Works from "@/components/home/Works";
import Clients from "@/components/home/Clients";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <PhotoCarousel />
        <Services />
        <Works clientsSlot={<Clients />} />
      </main>
      <Footer />
    </>
  );
}
