"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CheckCircle } from "@phosphor-icons/react";
import Link from "next/link";

const pricingTiers = [
  {
    name: "Starter",
    price: "$499",
    description: "Perfect for new local businesses needing a professional online presence.",
    features: [
      "5-page mobile-friendly website",
      "Contact form integration",
      "Basic SEO setup",
      "7-day delivery"
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Growth",
    badge: "Most Popular",
    price: "$999",
    description: "The complete package to attract and convert more local customers.",
    features: [
      "Everything in Starter",
      "Google Business Profile setup",
      "Online appointment booking",
      "WhatsApp chat integration",
      "2 weeks post-launch support"
    ],
    cta: "Start Growing",
    highlight: true,
  },
  {
    name: "Premium",
    price: "$1,499",
    description: "For established businesses wanting aggressive growth and zero hassle.",
    features: [
      "Everything in Growth",
      "Advanced speed optimization",
      "Advanced local SEO targeting",
      "1 month priority support",
      "Free content updates"
    ],
    cta: "Let's Talk",
    highlight: false,
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="relative w-full py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
        className="mb-20 text-center flex flex-col items-center"
      >
        <div className="mb-6 inline-flex rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium bg-white/5 border border-white/10 text-text-muted">
          Pricing
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
          Simple Pricing. No Hidden Fees.
        </h2>
        <p className="text-lg text-text-muted max-w-2xl font-light">
          Transparent packages designed to fit your business goals. No monthly charges unless you want ongoing support.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {pricingTiers.map((tier, index) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: [0.32, 0.72, 0, 1] }}
            className={`h-full ${tier.highlight ? 'md:-my-8 z-10' : ''}`}
          >
            <Card glow={tier.highlight} className="h-full flex flex-col">
              <div className="p-8 flex flex-col h-full relative">
                {tier.badge && (
                  <div className="absolute top-6 right-6">
                    <span className="inline-flex items-center rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 px-3 py-1 text-xs font-bold text-primary shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                      {tier.badge}
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-semibold text-white mb-2">{tier.name}</h3>
                <p className="text-text-muted text-sm font-light mb-8 h-10">{tier.description}</p>
                
                <div className="mb-8 flex items-baseline gap-2">
                  <span className="text-4xl lg:text-5xl font-bold text-white tracking-tighter">{tier.price}</span>
                  <span className="text-text-muted font-medium">/one-time</span>
                </div>
                
                <ul className="flex flex-col gap-4 mb-10 flex-1">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle weight="fill" className="text-primary mt-1 shrink-0" size={20} />
                      <span className="text-white/80 font-light text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="w-full mt-auto">
                  <Button 
                    variant={tier.highlight ? "primary" : "glass"} 
                    className="w-full"
                    onClick={(e) => {
                      e.preventDefault();
                      window.dispatchEvent(new CustomEvent('open-quote-modal', { detail: { plan: tier.name } }));
                    }}
                  >
                    {tier.cta}
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-text-muted font-light">
          All prices in USD. Payments accepted via Stripe, PayPal, and Wise.
        </p>
      </div>
    </section>
  );
}
