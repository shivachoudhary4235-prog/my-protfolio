"use client";

import { motion } from "framer-motion";
import { Lightning, DeviceMobile, GoogleLogo, WhatsappLogo } from "@phosphor-icons/react";

const trustItems = [
  { icon: <Lightning weight="light" size={24} />, text: "7-Day Delivery" },
  { icon: <DeviceMobile weight="light" size={24} />, text: "Mobile-First Design" },
  { icon: <GoogleLogo weight="light" size={24} />, text: "Google-Ready" },
  { icon: <WhatsappLogo weight="light" size={24} />, text: "WhatsApp Support" },
];

export function TrustBar() {
  return (
    <section className="w-full border-y border-white/5 bg-dark-secondary/30 py-12 md:py-16 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center justify-items-center opacity-70">
          {trustItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.32, 0.72, 0, 1] }}
              className="flex flex-col items-center justify-center text-center group"
            >
              <div className="mb-3 text-white/40 transition-colors duration-500 group-hover:text-primary">
                {item.icon}
              </div>
              <span className="text-sm font-medium text-white/80">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
