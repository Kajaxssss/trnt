import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Partner from "@/components/Partner";
import TestimonialMarquee from "@/components/TestimonialMarquee";
import HowToOrder from "@/components/HowToOrder";
import IntakeForm from "@/components/IntakeForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Pricing />
        <Partner />
        <TestimonialMarquee />
        <HowToOrder />
        <IntakeForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
