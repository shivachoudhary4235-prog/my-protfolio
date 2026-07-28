import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { IntegrationMarquee } from "@/components/sections/IntegrationMarquee";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { ROICalculator } from "@/components/sections/ROICalculator";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { SEOContent } from "@/components/sections/SEOContent";
import { Footer } from "@/components/sections/Footer";
import { ProjectBuilder } from "@/components/sections/ProjectBuilder";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center overflow-x-hidden">
      <Navbar />
      
      <Hero />
      <TrustBar />
      <IntegrationMarquee />
      <Services />
      <Portfolio />
      <About />
      <Process />
      <ROICalculator />
      <Pricing />
      <FAQ />
      <SEOContent />
      <Footer />
    </main>
  );
}
