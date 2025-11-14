import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OfferGrid from "@/components/OfferGrid";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-goddessBlack via-black to-goddessPlum">
      <Header />
      <main className="flex-1">
        <Hero />
        <OfferGrid />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
