import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";
import Image from "next/image";

export default function AboutUs() {
  return (
    <main className="relative flex flex-col items-center overflow-x-hidden pt-32">
      <Navbar />
      <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-16 mb-20 flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 border border-white/10">
             {/* Using a placeholder if founder.png isn't available, but we know it is in public */}
             <Image 
                src="/founder.png" 
                alt="Shiva Choudhary - Founder" 
                fill 
                className="object-cover object-top opacity-80"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
             <div className="absolute bottom-6 left-6">
                <p className="text-xl font-bold text-white">Shiva Choudhary</p>
                <p className="text-sm text-primary">Founder, VibeForge Cloud</p>
             </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="mb-6 inline-flex rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium bg-white/5 border border-white/10 text-text-muted">
            Our Story
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Building digital experiences that drive real business growth.
          </h1>
          <p className="text-lg text-text-muted font-light mb-6">
            VibeForge Cloud was founded with a single mission: to help local businesses bridge the gap between their exceptional real-world services and their digital presence.
          </p>
          <p className="text-lg text-text-muted font-light">
            We believe that high-quality, high-converting web design shouldn't be restricted to massive tech companies. Whether you are a local restaurant in the UK or a growing dental clinic in the USA, we build scalable, mobile-first websites that turn visitors into loyal customers.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
