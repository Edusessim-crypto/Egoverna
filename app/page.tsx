import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Ecosystem } from "@/components/Ecosystem";
import { PlatformShowcase } from "@/components/PlatformShowcase";
import { ModuleNavigator } from "@/components/ModuleNavigator";
import { ProductShowcase } from "@/components/ProductShowcase";
import { BenefitsSection } from "@/components/BenefitsSection";
import { AboutSection } from "@/components/AboutSection";
import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo" className="flex-1">
        <Hero />
        <Ecosystem />
        <PlatformShowcase />
        <ModuleNavigator />
        <ProductShowcase />
        <BenefitsSection />
        <AboutSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
