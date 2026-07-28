"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "@phosphor-icons/react";

const faqs = [
  {
    question: "Do you charge any hidden monthly maintenance fees?",
    answer: "No! Unlike many agencies, we don't hold your website hostage with mandatory monthly fees. You own your website completely. We only charge a monthly fee if you actively choose to hire us for ongoing SEO, priority support, and regular content updates (included in the Premium package)."
  },
  {
    question: "Do I need to buy my own domain name and hosting?",
    answer: "Yes, but we will set it all up for you. We recommend purchasing your domain (like yourbusiness.com) so you have full legal ownership of it. We then deploy your site on high-performance, free hosting like Vercel, which means you often won't have to pay any monthly hosting costs!"
  },
  {
    question: "What if I don't like the design you create?",
    answer: "Our process is highly collaborative. After our initial call, we create a Design Draft within 2 days. You review this draft before we build the full site. If it's not what you envisioned, we revise it until you love it. Your satisfaction is our top priority."
  },
  {
    question: "How does the 7-day delivery work?",
    answer: "Once we have all the necessary content from you (like your logo, business details, and any specific photos), the clock starts. Thanks to our specialized tech stack and streamlined process, we can design, build, and launch a professional 5-page website in exactly 7 days."
  },
  {
    question: "Do you write the text for the website?",
    answer: "We provide light copywriting and structuring to ensure the text converts visitors into customers. However, we rely on you to provide the core details about your business, your services, and your unique selling points."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full py-24 px-4 md:px-8 max-w-4xl mx-auto">
      <div className="mb-16 text-center flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
          Common Questions
        </h2>
        <p className="text-lg text-text-muted max-w-2xl font-light">
          Everything you need to know before we start building your digital presence.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-white/10 bg-white/[0.02] rounded-2xl overflow-hidden backdrop-blur-sm transition-colors hover:bg-white/[0.04]"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-medium text-white pr-8">
                  {faq.question}
                </span>
                <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-colors ${isOpen ? 'border-primary bg-primary/10 text-primary' : 'border-white/10 text-white/40'}`}>
                  {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-text-muted font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
