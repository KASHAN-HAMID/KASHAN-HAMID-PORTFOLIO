import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import ThreeBackground from "@/components/ThreeBackground";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews"; // ✅ Make sure this path is correct

const Index = () => {
  return (
    <div className="relative">
      <ThreeBackground />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Reviews /> {/* ✅ Added the Reviews section here */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
