"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Lightning, CheckCircle, WhatsappLogo } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const FEATURES = [
  "Online Booking",
  "SEO Setup",
  "Google Maps Profile",
  "E-Commerce / Store",
  "Blog / CMS",
  "Analytics Dashboard",
  "Custom Design",
  "Lead Generation Forms"
];

export function QuoteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");
  const [goal, setGoal] = useState("");
  const [addons, setAddons] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const toggleFeature = (f: string) => {
    if (selectedFeatures.includes(f)) setSelectedFeatures(selectedFeatures.filter(x => x !== f));
    else setSelectedFeatures([...selectedFeatures, f]);
  };

  const handleWhatsAppSubmit = () => {
    const text = `Hi Shiva, I want to build a website.\n\n*Name:* ${name || "N/A"}\n*Email:* ${email || "N/A"}\n*WhatsApp:* ${phone || "N/A"}\n*Business Type:* ${business || "N/A"}\n\n*Goal:*\n${goal || "N/A"}\n\n*Features Needed:*\n${selectedFeatures.length > 0 ? selectedFeatures.join(", ") : "None specified"}\n\n*Additional Add-ons:*\n${addons || "N/A"}\n\n_(Automated inquiry from website panel)_`;
    
    window.open(`https://wa.me/919619442009?text=${encodeURIComponent(text)}`, "_blank");
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-[90] group flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] active:scale-[0.98] transition-all"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Lightning weight="fill" size={20} />
        Build My Website
        <span className="absolute -inset-1 rounded-full bg-blue-600 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
      </motion.button>

      {/* Slide-over Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            
            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-[100dvh] w-full max-w-lg bg-[#0a0a0a] border-l border-white/10 z-[100] flex flex-col shadow-2xl"
            >
              <div className="bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 p-6 flex items-center justify-between z-10 shrink-0">
                <h2 className="text-2xl font-bold text-white tracking-tight">Project Request</h2>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                >
                  <X weight="bold" size={20} />
                </button>
              </div>

              <div className="p-6 flex flex-col gap-8 flex-1 overflow-y-auto">
                {/* Basic Info */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-semibold text-white/90 border-b border-white/5 pb-2">1. Your Details</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-text-muted font-medium ml-2">Name</label>
                      <input type="text" value={name} onChange={e => setName(e.target.value)} className="h-12 rounded-xl bg-white/5 px-4 text-white text-sm outline-none ring-1 ring-white/10 focus:ring-blue-500 transition-all placeholder:text-white/20" placeholder="John Doe" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-text-muted font-medium ml-2">Email</label>
                      <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="h-12 rounded-xl bg-white/5 px-4 text-white text-sm outline-none ring-1 ring-white/10 focus:ring-blue-500 transition-all placeholder:text-white/20" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-text-muted font-medium ml-2">WhatsApp Number</label>
                      <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} className="h-12 rounded-xl bg-white/5 px-4 text-white text-sm outline-none ring-1 ring-white/10 focus:ring-blue-500 transition-all placeholder:text-white/20" placeholder="+91 99999 99999" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-text-muted font-medium ml-2">What business is it?</label>
                      <input type="text" value={business} onChange={e => setBusiness(e.target.value)} className="h-12 rounded-xl bg-white/5 px-4 text-white text-sm outline-none ring-1 ring-white/10 focus:ring-blue-500 transition-all placeholder:text-white/20" placeholder="Dental Clinic, Gym..." />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-semibold text-white/90 border-b border-white/5 pb-2">2. Project Details</h3>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-text-muted font-medium ml-2">What is your goal for this website?</label>
                    <textarea value={goal} onChange={e => setGoal(e.target.value)} className="h-24 rounded-xl bg-white/5 p-4 text-white text-sm outline-none ring-1 ring-white/10 focus:ring-blue-500 transition-all resize-none placeholder:text-white/20" placeholder="Get more leads, build brand trust..." />
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg font-semibold text-white/90 border-b border-white/5 pb-2">3. Features Needed</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {FEATURES.map(f => {
                      const isSelected = selectedFeatures.includes(f);
                      return (
                        <button
                          key={f}
                          onClick={() => toggleFeature(f)}
                          className={cn(
                            "flex items-center p-3 rounded-lg border text-left transition-all duration-200 text-xs font-medium",
                            isSelected 
                              ? "bg-blue-600/10 border-blue-500/50 text-white" 
                              : "bg-white/5 border-white/5 text-text-muted hover:bg-white/10"
                          )}
                        >
                          <div className={cn(
                            "flex-shrink-0 w-4 h-4 rounded-full border flex items-center justify-center mr-2 transition-colors",
                            isSelected ? "bg-blue-500 border-blue-500" : "border-text-muted"
                          )}>
                            {isSelected && <CheckCircle weight="bold" size={10} className="text-white" />}
                          </div>
                          {f}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Additional */}
                <div className="flex flex-col gap-4 mb-8">
                  <h3 className="text-lg font-semibold text-white/90 border-b border-white/5 pb-2">4. Add-ons & Extras</h3>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-text-muted font-medium ml-2">What other things do you want to add?</label>
                    <textarea value={addons} onChange={e => setAddons(e.target.value)} className="h-24 rounded-xl bg-white/5 p-4 text-white text-sm outline-none ring-1 ring-white/10 focus:ring-blue-500 transition-all resize-none placeholder:text-white/20" placeholder="Any specific integrations, custom pages, or specific designs?" />
                  </div>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="bg-[#0a0a0a]/90 backdrop-blur-md border-t border-white/5 p-6 z-10 shrink-0">
                <button
                  onClick={handleWhatsAppSubmit}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-base font-bold text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] active:scale-[0.98] transition-all"
                >
                  <WhatsappLogo weight="fill" size={24} />
                  Send to WhatsApp
                </button>
                <p className="text-[10px] text-center text-text-muted mt-3">
                  This will format your request and open WhatsApp on your device.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
