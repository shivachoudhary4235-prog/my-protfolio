import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";
import { WhatsappLogo, EnvelopeSimple, MapPin } from "@phosphor-icons/react/dist/ssr";

export default function Contact() {
  return (
    <main className="relative flex flex-col items-center overflow-x-hidden pt-32">
      <Navbar />
      <div className="w-full max-w-4xl mx-auto px-4 md:px-8 py-16 mb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-lg text-text-muted font-light max-w-2xl mx-auto">
            Ready to upgrade your digital presence? Reach out to us for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="https://wa.me/919619442009" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <WhatsappLogo size={40} className="text-success mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
            <p className="text-sm text-text-muted">+91 9619442009</p>
          </a>
          
          <a href="mailto:shivachoudhary.web@gmail.com" className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <EnvelopeSimple size={40} className="text-primary mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <p className="text-sm text-text-muted">shivachoudhary.web@gmail.com</p>
          </a>
          
          <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 border border-white/10">
            <MapPin size={40} className="text-white/60 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Location</h3>
            <p className="text-sm text-text-muted">Serving clients globally</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
