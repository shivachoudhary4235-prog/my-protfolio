"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Desktop, MapPin, CalendarPlus } from "@phosphor-icons/react";
import Image from "next/image";

const services = [
  {
    title: "Website Design",
    description: "Custom websites for dental clinics, coaching centers, and restaurants. Mobile-first, fast-loading, built to convert visitors into customers.",
    icon: <Desktop weight="light" size={32} className="text-primary" />,
    colSpan: "md:col-span-8 md:row-span-2",
    image: "/services-web-design.png"
  },
  {
    title: "Google Business",
    description: "Get found on Google Maps when patients search 'dentist near me.' Complete setup and optimization.",
    icon: <MapPin weight="light" size={32} className="text-primary" />,
    colSpan: "md:col-span-4",
  },
  {
    title: "Appointment Booking",
    description: "Let patients book directly from your website — no extra apps, no monthly fees.",
    icon: <CalendarPlus weight="light" size={32} className="text-primary" />,
    colSpan: "md:col-span-4",
  }
];

export function Services() {
  return (
    <section id="services" className="relative w-full py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
        className="mb-20 text-center flex flex-col items-center"
      >
        <div className="mb-6 rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium bg-white/5 border border-white/10 text-text-muted">
          Services
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
          What I Build For You
        </h2>
        <p className="text-lg text-text-muted max-w-2xl font-light">
          Everything a local business needs to get found online and convert visitors into customers. No fluff, just results.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: [0.32, 0.72, 0, 1] }}
            className={`flex flex-col h-full ${service.colSpan}`}
          >
            <Card glow={index === 0} className="h-full group">
              <div className="p-8 md:p-12 flex flex-col h-full">
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110 group-hover:-rotate-3">
                  {service.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-text-muted leading-relaxed font-light mb-8">
                  {service.description}
                </p>
                {service.image && (
                  <div className="relative mt-8 flex-1 w-full rounded-[calc(2rem-0.5rem)] overflow-hidden bg-black ring-1 ring-white/10 group-hover:ring-white/20 transition-all duration-500">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill 
                      className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                  </div>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
