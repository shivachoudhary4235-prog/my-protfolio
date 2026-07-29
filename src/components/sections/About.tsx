"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";

export function About() {
  return (
    <section id="about" className="relative w-full py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image / Visual Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="relative w-full max-w-md mx-auto lg:mx-0 aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[3rem] bg-white/5 ring-1 ring-white/10 p-2 backdrop-blur-xl group"
        >
          <div className="relative w-full h-full rounded-[calc(3rem-0.5rem)] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] ring-1 ring-white/5 bg-[#050505]">
            <Image 
              src="/founder.png" 
              alt="Shiva Choudhary - Founder" 
              fill 
              className="object-cover object-top transition-transform duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105" 
            />
            {/* Gradient Overlay for Text */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium bg-primary/20 border border-primary/30 text-primary mb-2 backdrop-blur-md">
                Founder & UI Architect
              </div>
              <h3 className="text-2xl font-bold text-white">Shiva Choudhary</h3>
            </div>
          </div>
          
          {/* Decorative ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[100px] -z-10 opacity-40 transition-opacity duration-700 group-hover:opacity-60" />
        </motion.div>

        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          className="flex flex-col"
        >
          <div className="mb-6 inline-flex rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium bg-white/5 border border-white/10 text-text-muted w-max">
            About Me
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8 leading-tight">
            I don't just build websites. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">I build growth engines.</span>
          </h2>
          
          <div className="space-y-6 text-lg text-text-muted font-light leading-relaxed mb-10">
            <p>
              Hi, I'm Shiva. I started VibeForge Cloud because I noticed too many local businesses in India struggling with slow, outdated websites that actively drive customers away. 
            </p>
            <p>
              My goal is simple: to provide dental clinics, coaching centers, and premium local businesses with <span className="text-white font-medium">Awwwards-tier web experiences</span> that establish instant trust and convert visitors into loyal clients.
            </p>
            <p>
              When you work with me, you're not getting a generic template. You're getting a custom-engineered, lightning-fast digital asset designed specifically to dominate your local market.
            </p>
          </div>

          <a 
            href={`https://wa.me/919619442009?text=${encodeURIComponent("Hi Shiva, I'd like to build my website with VibeForge.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-max"
          >
            <Button 
              variant="glass" 
              className="w-full" 
              icon={<ArrowUpRight weight="light" size={16} />}
            >
              Let's build yours
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
