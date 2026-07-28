"use client";

import { motion } from "framer-motion";

const technologies = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "SEO Optimization",
  "High-Converting UI",
  "Custom Web Design",
  "E-Commerce",
  "Shopify",
  "WordPress",
  "Conversion Rate",
  "Webflow",
  "Mobile First",
  "Vercel",
  "Stripe",
  "Figma",
];

export function IntegrationMarquee() {
  return (
    <section className="w-full py-10 overflow-hidden bg-white/[0.02] border-y border-white/5 relative z-10 flex flex-col items-center">
      <div className="absolute inset-0 pointer-events-none z-20 pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#050505] before:via-transparent before:to-[#050505] before:z-10" />
      
      <p className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium mb-6 z-20">
        Powered by modern technologies
      </p>
      
      <div className="flex whitespace-nowrap overflow-hidden w-full relative group">
        {/* We render the list twice to create a seamless infinite loop */}
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {[...technologies, ...technologies].map((tech, i) => (
            <div 
              key={i}
              className="flex items-center justify-center mx-8 gap-4 text-white/50 hover:text-white transition-colors duration-300"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
              <span className="text-xl font-bold tracking-tight">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
