import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import FAQs from "@/components/FAQs";
import AllProducts from "@/components/AllProducts";
import ContactSection from "@/components/Contact";
import AboutSection from "@/components/About";
import CTASection from "@/components/CTA";
import ShowPieces from "@/components/Showpieces";


export default function HomePage() {
  return (
    <main className=" gap-5 flex flex-col ">
      <HeroSection />
      <div className="flex flex-col px-3 gap-8 max-w-7xl w-full self-center ">
        <CategoryGrid />
        <AllProducts />
        <AboutSection />
        <FAQs />
        <ContactSection />
        <CTASection />
        <ShowPieces />
      </div>
    </main>
  );
}
