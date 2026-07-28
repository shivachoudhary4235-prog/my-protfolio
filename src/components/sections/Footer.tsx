"use client";

import { motion } from "framer-motion";
import { WhatsappLogo, EnvelopeSimple, Globe } from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Footer() {
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const clientName = name.trim() || "[Not provided]";
    const clientBusiness = businessName.trim() || "[Not provided]";
    const clientPhone = phone.trim() || "[Not provided]";
    const clientDetails = details.trim() || "[No details provided]";
    
    const text = `Hi Shiva, I'm reaching out from your website contact form.\n\n*Name:* ${clientName}\n*Business:* ${clientBusiness}\n*Phone:* ${clientPhone}\n*Project Details:*\n${clientDetails}\n\n_(Automated inquiry from your website)_`;
    
    window.open(`https://wa.me/919619442009?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <footer id="contact" className="relative w-full pt-32 pb-12 px-4 md:px-8 bg-dark border-t border-white/5">
      {/* Massive Typography Background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden flex justify-center pointer-events-none select-none opacity-5">
        <span className="text-[15vw] font-black tracking-tighter whitespace-nowrap">VIBEFORGE</span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
            className="flex flex-col"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              Let's Build Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">Digital Future.</span>
            </h2>
            <p className="text-lg text-text-muted font-light mb-8 max-w-md leading-relaxed">
              Whether you're a dentist, coach, or restaurant owner — I'll help you get online and get more customers.
            </p>

            <div className="flex items-center gap-4 mb-12">
              <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-primary/30">
                <Image src="/founder.png" alt="Shiva Choudhary" fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold">Shiva Choudhary</span>
                <span className="text-sm text-primary">Founder, VibeForge Cloud</span>
              </div>
            </div>


            <div className="flex flex-col gap-6">
              <a href="https://wa.me/919619442009" className="group flex items-center gap-4 text-white/80 hover:text-white transition-colors w-max">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 group-hover:bg-success/20 group-hover:ring-success/50 transition-all duration-500">
                  <WhatsappLogo weight="light" size={24} className="group-hover:text-success transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-text-muted">WhatsApp</span>
                  <span className="font-medium">+91-9619442009</span>
                </div>
              </a>

              <a href="mailto:shiva.webdesign@outlook.com" className="group flex items-center gap-4 text-white/80 hover:text-white transition-colors w-max">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 group-hover:bg-primary/20 group-hover:ring-primary/50 transition-all duration-500">
                  <EnvelopeSimple weight="light" size={24} className="group-hover:text-primary transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-text-muted">Email</span>
                  <span className="font-medium">shiva.webdesign@outlook.com</span>
                </div>
              </a>

              <div className="group flex items-center gap-4 text-white/80 hover:text-white transition-colors w-max">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 group-hover:bg-primary/20 group-hover:ring-primary/50 transition-all duration-500">
                  <Globe weight="light" size={24} className="group-hover:text-primary transition-colors" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-text-muted">Website</span>
                  <span className="font-medium">vibeforge.cloud</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          >
            {/* Tally.so iframe container or custom form */}
            <div className="w-full rounded-[2rem] bg-[#050505] p-8 md:p-10 ring-1 ring-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10" />
              <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
              
              <form className="flex flex-col gap-4" onSubmit={handleWhatsAppSubmit}>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-text-muted ml-4">Full Name</label>
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-14 rounded-full bg-white/5 px-6 text-white outline-none ring-1 ring-white/10 focus:ring-primary transition-all placeholder:text-white/20" 
                    placeholder="John Doe" 
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-text-muted ml-4">Business Name</label>
                  <input 
                    type="text" 
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="h-14 rounded-full bg-white/5 px-6 text-white outline-none ring-1 ring-white/10 focus:ring-primary transition-all placeholder:text-white/20" 
                    placeholder="SmileCare Dental" 
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-text-muted ml-4">Phone Number</label>
                  <input 
                    type="tel" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-14 rounded-full bg-white/5 px-6 text-white outline-none ring-1 ring-white/10 focus:ring-primary transition-all placeholder:text-white/20" 
                    placeholder="+91 99999 99999" 
                  />
                </div>
                
                <div className="flex flex-col gap-2 mb-4">
                  <label className="text-sm text-text-muted ml-4">Project Details</label>
                  <textarea 
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="h-32 rounded-3xl bg-white/5 p-6 text-white outline-none ring-1 ring-white/10 focus:ring-primary transition-all resize-none placeholder:text-white/20" 
                    placeholder="Tell me about what you need..." 
                  />
                </div>
                
                <Button type="submit" variant="primary" className="w-full bg-success hover:bg-success/90 text-white border-none shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                  Submit Inquiry via WhatsApp
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6">
          <p className="text-sm text-text-muted text-center md:text-left">
            © 2026 VibeForge Cloud. Built with 💙 by Shiva Choudhary.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-text-muted md:pr-24">
            <Link href="/about-us" className="hover:text-primary transition-colors">About</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
