import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Models from "@/components/Models";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <Models />
      <Footer />
    </main>
  );
}
