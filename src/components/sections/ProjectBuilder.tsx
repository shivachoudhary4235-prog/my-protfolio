"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, WhatsappLogo } from "@phosphor-icons/react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const FEATURES = [
  "Online Booking System",
  "SEO Optimization",
  "Google Maps / Local SEO",
  "Custom Premium Design",
  "CMS / Blog Setup",
  "Lead Capture Forms",
  "E-Commerce / Payments",
  "Analytics Dashboard"
];

export function ProjectBuilder() {
  const [industryName, setIndustryName] = useState<string>("");
  const [featuresText, setFeaturesText] = useState<string>("");
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [referenceLink, setReferenceLink] = useState("");

  const generateWhatsAppLink = () => {
    const finalIndustry = industryName.trim() || "business";
    const featuresList = featuresText.trim() || "a standard high-converting website";
    
    const clientName = name.trim() || "[Your Name]";
    const clientBusiness = businessName.trim() || "[Your Business]";
    const clientReference = referenceLink.trim() ? `\nReference / Inspiration: ${referenceLink.trim()}` : "";
    
    const text = `Hi Shiva, I'm interested in a new website for my *${finalIndustry}*.\n\nI need these features:\n- ${featuresList}\n${clientReference}\n\nMy name is *${clientName}* from *${clientBusiness}*. Let's discuss a quote!\n\n_(Automated inquiry from your website)_`;
    
    return `https://wa.me/919619442009?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="build" className="relative w-full py-32 px-4 md:px-8 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
        className="mb-16 text-center flex flex-col items-center"
      >
        <div className="mb-6 rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium bg-white/5 border border-white/10 text-text-muted">
          Project Estimator
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
          Build Your Request
        </h2>
        <p className="text-lg text-text-muted max-w-2xl font-light">
          Select what you need below, and I'll send you a custom quote directly via WhatsApp. No commitment required.
        </p>
      </motion.div>

      <Card className="p-6 md:p-10">
        {/* Step 1: Industry */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">1. What's your industry?</h3>
          <input 
            type="text" 
            value={industryName}
            onChange={(e) => setIndustryName(e.target.value)}
            placeholder="e.g., Dental Clinic, Gym, Real Estate, E-Commerce..."
            className="w-full md:w-1/2 bg-[#0F0D1A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>

        {/* Step 2: Features */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">2. What features do you need?</h3>
          <textarea
            value={featuresText}
            onChange={(e) => setFeaturesText(e.target.value)}
            placeholder="e.g., Online Booking, E-Commerce, Blog, Contact Form..."
            rows={3}
            className="w-full bg-[#0F0D1A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
          />
        </div>

        {/* Step 3: Contact */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">3. A few details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-text-muted mb-2">Your Name</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full bg-[#0F0D1A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-2">Business Name</label>
              <input 
                type="text" 
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Smile Dental Care"
                className="w-full bg-[#0F0D1A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-text-muted mb-2">Reference / Inspiration Link (Optional)</label>
              <input 
                type="url" 
                value={referenceLink}
                onChange={(e) => setReferenceLink(e.target.value)}
                placeholder="https://example.com"
                className="w-full bg-[#0F0D1A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="flex flex-col items-center justify-center pt-8 border-t border-white/10">
          <p className="text-text-muted text-sm mb-6 text-center max-w-md">
            Clicking the button below will open WhatsApp with your requirements pre-filled so we can start the conversation.
          </p>
          <a 
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-success px-8 py-4 text-base font-bold text-white shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] active:scale-[0.98] transition-all"
          >
            <WhatsappLogo weight="fill" size={24} />
            Send Request via WhatsApp
            
            <span className="absolute -inset-1 rounded-full bg-success opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
          </a>
        </div>
      </Card>
    </section>
  );
}
