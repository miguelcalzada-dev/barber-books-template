import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-white">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Team />
      {/* <Testimonials /> */}
      <Location />
      <Footer />
    </main>
  );
}
