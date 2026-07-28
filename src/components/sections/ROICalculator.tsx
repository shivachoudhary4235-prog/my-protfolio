"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { ChartLineUp, Users, CurrencyInr } from "@phosphor-icons/react";

export function ROICalculator() {
  const [visitors, setVisitors] = useState(1000);
  const [conversionRate, setConversionRate] = useState(2); // New VibeForge rate
  const [aov, setAov] = useState(2500); // Average Order Value in INR

  const oldConversionRate = 0.5; // Average bad website conversion rate
  
  const oldRevenue = visitors * (oldConversionRate / 100) * aov;
  const newRevenue = visitors * (conversionRate / 100) * aov;
  const extraRevenue = newRevenue - oldRevenue;

  return (
    <section className="relative w-full py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-16 text-center flex flex-col items-center">
        <div className="mb-6 inline-flex rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium bg-primary/10 border border-primary/30 text-primary">
          Calculate Your ROI
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
          See how much revenue you're missing.
        </h2>
        <p className="text-lg text-text-muted max-w-2xl font-light">
          A great website isn't an expense, it's an investment. See how a small increase in your conversion rate translates directly into profit.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card glow className="p-1">
          <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Sliders Area */}
            <div className="flex flex-col gap-8">
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-white/80 font-medium flex items-center gap-2">
                    <Users className="text-primary" size={20} />
                    Monthly Website Visitors
                  </label>
                  <span className="text-white font-bold">{visitors.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="100" 
                  max="10000" 
                  step="100"
                  value={visitors} 
                  onChange={(e) => setVisitors(parseInt(e.target.value))}
                  className="w-full accent-primary h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-white/80 font-medium flex items-center gap-2">
                    <CurrencyInr className="text-primary" size={20} />
                    Average Customer Value
                  </label>
                  <span className="text-white font-bold">₹{aov.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="500" 
                  max="50000" 
                  step="500"
                  value={aov} 
                  onChange={(e) => setAov(parseInt(e.target.value))}
                  className="w-full accent-primary h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-white/80 font-medium flex items-center gap-2">
                    <ChartLineUp className="text-primary" size={20} />
                    New Conversion Rate (%)
                  </label>
                  <span className="text-white font-bold">{conversionRate}%</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  step="0.5"
                  value={conversionRate} 
                  onChange={(e) => setConversionRate(parseFloat(e.target.value))}
                  className="w-full accent-primary h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                />
                <p className="text-xs text-white/40 mt-2">
                  *Standard old websites convert at ~0.5%. We aim for 2-5%.
                </p>
              </div>
            </div>

            {/* Results Area */}
            <div className="flex flex-col justify-center bg-white/5 rounded-2xl p-8 border border-white/10 text-center">
              <h3 className="text-lg text-white/60 mb-2">Estimated Extra Revenue</h3>
              <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light mb-4">
                ₹{Math.round(extraRevenue).toLocaleString()}
              </div>
              <p className="text-white/40 text-sm mb-8">per month</p>
              
              <div className="pt-6 border-t border-white/10 flex justify-between text-sm">
                <div className="flex flex-col items-center">
                  <span className="text-white/40 mb-1">Old Revenue</span>
                  <span className="text-white/80 font-mono">₹{Math.round(oldRevenue).toLocaleString()}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-white/40 mb-1">New Revenue</span>
                  <span className="text-success font-mono font-bold">₹{Math.round(newRevenue).toLocaleString()}</span>
                </div>
              </div>
            </div>

          </div>
        </Card>
      </div>
    </section>
  );
}
