"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Free 15-min Call",
    description: "We discuss your business, goals, and what your website needs to do to get results."
  },
  {
    number: "02",
    title: "Design Draft",
    description: "I create a mockup and send you a preview link within 2 days for your feedback."
  },
  {
    number: "03",
    title: "Build & Review",
    description: "I build your site in 5-7 days. Two rounds of revisions are included to make it perfect."
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "I deploy your site, connect your domain, and provide 2 weeks of dedicated support."
  }
];

export function Process() {
  return (
    <section id="process" className="relative w-full py-40 px-4 md:px-8 bg-dark-secondary/20 border-y border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="mb-24 text-center"
        >
          <div className="mb-6 inline-flex rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium bg-white/5 border border-white/10 text-text-muted">
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Simple, transparent, and fast.
          </h2>
          <p className="text-lg text-text-muted font-light">
            No tech jargon. No hidden costs. Just a smooth process from start to launch.
          </p>
        </motion.div>

        <div className="relative w-full max-w-2xl">
          {/* Vertical Line Connector */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2" />

          <div className="flex flex-col gap-16 md:gap-32">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50, rotateX: 20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
                className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""} group`}
              >
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-[#050505] ring-1 ring-white/20 transition-all duration-700 group-hover:scale-110 group-hover:ring-primary z-10 shadow-2xl">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-sm font-bold text-white group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    {step.number}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full pl-20 md:pl-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                  <div className="rounded-[2rem] bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-700 hover:-translate-y-2 hover:bg-white/10">
                    <h3 className="mb-4 text-2xl font-bold text-white">{step.title}</h3>
                    <p className="text-text-muted font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
