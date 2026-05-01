import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import ReviewCTA from "@/components/ReviewCTA";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <TrustBar />
      <HowItWorks />
      <Testimonials />
      <ReviewCTA />
      <EnquiryForm />
      <Footer />
    </main>
  );
}
