"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, WhatsappLogo, ArrowLeft } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import Link from "next/link";

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

export default function RequestPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");
  const [goal, setGoal] = useState("");
  const [addons, setAddons] = useState("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [currentWebsite, setCurrentWebsite] = useState("");
  const [inspiration, setInspiration] = useState("");
  const [hasBranding, setHasBranding] = useState("");

  const toggleFeature = (f: string) => {
    if (selectedFeatures.includes(f)) setSelectedFeatures(selectedFeatures.filter(x => x !== f));
    else setSelectedFeatures([...selectedFeatures, f]);
  };

  const handleWhatsAppSubmit = () => {
    const text = `Hi Shiva, I want to build a website.\n\n*Name:* ${name || "N/A"}\n*Email:* ${email || "N/A"}\n*WhatsApp:* ${phone || "N/A"}\n*Business Type:* ${business || "N/A"}\n\n*Project Scope:*\nBudget: ${budget || "Not specified"}\nTimeline: ${timeline || "Not specified"}\nCurrent Website: ${currentWebsite || "None"}\nBranding Assets: ${hasBranding || "Not specified"}\n\n*Goal:*\n${goal || "N/A"}\n\n*Inspiration:*\n${inspiration || "N/A"}\n\n*Features Needed:*\n${selectedFeatures.length > 0 ? selectedFeatures.join(", ") : "None specified"}\n\n*Additional Add-ons:*\n${addons || "N/A"}\n\n_(Automated inquiry from website panel)_`;
    
    window.open(`https://wa.me/919619442009?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#050505] flex flex-col relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* Header */}
      <header className="w-full max-w-4xl mx-auto p-6 md:p-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-text-muted hover:text-white transition-colors">
          <ArrowLeft size={20} />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
      </header>

      {/* Content */}
      <div className="flex-1 w-full max-w-3xl mx-auto px-4 md:px-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
        >
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Project Request
            </h1>
            <p className="text-text-muted text-lg font-light">
              Fill out the details below to give me a clear picture of what you need. When you submit, it will securely send your requirements directly to my WhatsApp.
            </p>
          </div>

          <div className="bg-[#0a0a0a]/50 backdrop-blur-xl border border-white/5 rounded-3xl p-6 md:p-10 flex flex-col gap-10 shadow-2xl">
            
            {/* Basic Info */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-semibold text-white/90 border-b border-white/5 pb-4">1. Your Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-text-muted font-medium ml-2">Name</label>
                  <input type="text" value={name} onChange={e => setName(e.target.value)} className="h-14 rounded-2xl bg-white/5 px-5 text-white outline-none ring-1 ring-white/10 focus:ring-blue-500 transition-all placeholder:text-white/20" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-text-muted font-medium ml-2">Email</label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="h-14 rounded-2xl bg-white/5 px-5 text-white outline-none ring-1 ring-white/10 focus:ring-blue-500 transition-all placeholder:text-white/20" placeholder="john@example.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-text-muted font-medium ml-2">WhatsApp Number</label>
                  <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} className="h-14 rounded-2xl bg-white/5 px-5 text-white outline-none ring-1 ring-white/10 focus:ring-blue-500 transition-all placeholder:text-white/20" placeholder="+91 99999 99999" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-text-muted font-medium ml-2">What business is it?</label>
                  <input type="text" value={business} onChange={e => setBusiness(e.target.value)} className="h-14 rounded-2xl bg-white/5 px-5 text-white outline-none ring-1 ring-white/10 focus:ring-blue-500 transition-all placeholder:text-white/20" placeholder="Dental Clinic, Gym..." />
                </div>
              </div>
            </div>

            {/* Project Scope */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-semibold text-white/90 border-b border-white/5 pb-4">2. Project Scope</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-text-muted font-medium ml-2">Estimated Budget</label>
                  <select value={budget} onChange={e => setBudget(e.target.value)} className="h-14 rounded-2xl bg-white/5 px-5 text-white outline-none ring-1 ring-white/10 focus:ring-blue-500 transition-all appearance-none cursor-pointer">
                    <option value="" disabled className="bg-[#0a0a0a] text-white/50">Select your budget...</option>
                    <option value="< $1,000" className="bg-[#0a0a0a]">&lt; $1,000</option>
                    <option value="$1,000 - $2,500" className="bg-[#0a0a0a]">$1,000 - $2,500</option>
                    <option value="$2,500 - $5,000" className="bg-[#0a0a0a]">$2,500 - $5,000</option>
                    <option value="$5,000+" className="bg-[#0a0a0a]">$5,000+</option>
                    <option value="Not sure yet" className="bg-[#0a0a0a]">Not sure yet</option>
                  </select>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-text-muted font-medium ml-2">Expected Timeline</label>
                  <select value={timeline} onChange={e => setTimeline(e.target.value)} className="h-14 rounded-2xl bg-white/5 px-5 text-white outline-none ring-1 ring-white/10 focus:ring-blue-500 transition-all appearance-none cursor-pointer">
                    <option value="" disabled className="bg-[#0a0a0a] text-white/50">When do you need this by?</option>
                    <option value="ASAP" className="bg-[#0a0a0a]">ASAP</option>
                    <option value="Within 1 Month" className="bg-[#0a0a0a]">Within 1 Month</option>
                    <option value="1-3 Months" className="bg-[#0a0a0a]">1-3 Months</option>
                    <option value="No Rush" className="bg-[#0a0a0a]">No Rush</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-text-muted font-medium ml-2">Do you have branding? (Logo/Colors)</label>
                  <select value={hasBranding} onChange={e => setHasBranding(e.target.value)} className="h-14 rounded-2xl bg-white/5 px-5 text-white outline-none ring-1 ring-white/10 focus:ring-blue-500 transition-all appearance-none cursor-pointer">
                    <option value="" disabled className="bg-[#0a0a0a] text-white/50">Select...</option>
                    <option value="Yes, I have branding ready" className="bg-[#0a0a0a]">Yes, I have branding ready</option>
                    <option value="No, I need branding designed" className="bg-[#0a0a0a]">No, I need branding designed</option>
                  </select>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-text-muted font-medium ml-2">Current Website URL (If redesigning)</label>
                  <input type="url" value={currentWebsite} onChange={e => setCurrentWebsite(e.target.value)} className="h-14 rounded-2xl bg-white/5 px-5 text-white outline-none ring-1 ring-white/10 focus:ring-blue-500 transition-all placeholder:text-white/20" placeholder="https://www.example.com (Optional)" />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-semibold text-white/90 border-b border-white/5 pb-4">3. Project Details</h3>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-text-muted font-medium ml-2">What is your goal for this website?</label>
                <textarea value={goal} onChange={e => setGoal(e.target.value)} className="h-32 rounded-3xl bg-white/5 p-5 text-white outline-none ring-1 ring-white/10 focus:ring-blue-500 transition-all resize-none placeholder:text-white/20" placeholder="Get more leads, build brand trust..." />
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <label className="text-sm text-text-muted font-medium ml-2">Design Inspiration</label>
                <textarea value={inspiration} onChange={e => setInspiration(e.target.value)} className="h-24 rounded-3xl bg-white/5 p-5 text-white outline-none ring-1 ring-white/10 focus:ring-blue-500 transition-all resize-none placeholder:text-white/20" placeholder="List 1-2 websites you love the look of (Optional)" />
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-semibold text-white/90 border-b border-white/5 pb-4">4. Features Needed</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FEATURES.map(f => {
                  const isSelected = selectedFeatures.includes(f);
                  return (
                    <button
                      key={f}
                      onClick={() => toggleFeature(f)}
                      className={cn(
                        "flex items-center p-4 rounded-xl border text-left transition-all duration-200 text-sm font-medium",
                        isSelected 
                          ? "bg-blue-600/10 border-blue-500/50 text-white" 
                          : "bg-white/5 border-white/5 text-text-muted hover:bg-white/10"
                      )}
                    >
                      <div className={cn(
                        "flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center mr-3 transition-colors",
                        isSelected ? "bg-blue-500 border-blue-500" : "border-text-muted"
                      )}>
                        {isSelected && <CheckCircle weight="bold" size={12} className="text-white" />}
                      </div>
                      {f}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Additional */}
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-semibold text-white/90 border-b border-white/5 pb-4">5. Add-ons & Extras</h3>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-text-muted font-medium ml-2">What other things do you want to add?</label>
                <textarea value={addons} onChange={e => setAddons(e.target.value)} className="h-32 rounded-3xl bg-white/5 p-5 text-white outline-none ring-1 ring-white/10 focus:ring-blue-500 transition-all resize-none placeholder:text-white/20" placeholder="Any specific integrations, custom pages, or specific designs?" />
              </div>
            </div>

            {/* Submit */}
            <div className="mt-6">
              <button
                onClick={handleWhatsAppSubmit}
                className="w-full flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-8 py-5 text-lg font-bold text-white shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] active:scale-[0.98] transition-all"
              >
                <WhatsappLogo weight="fill" size={28} />
                Send Request via WhatsApp
              </button>
            </div>
            
          </div>
        </motion.div>
      </div>
    </main>
  );
}
