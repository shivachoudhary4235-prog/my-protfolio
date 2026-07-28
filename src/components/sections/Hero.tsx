"use client";

import { WebGLShader } from "@/components/ui/web-gl-shader";
import { LiquidButton } from '@/components/ui/liquid-glass-button';

export function Hero() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden min-h-screen pt-24 pb-10 px-4 md:px-8">
      {/* Background Shader */}
      <WebGLShader /> 

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center px-4 py-20">
        <h1 className="mb-6 text-white text-center text-5xl md:text-7xl lg:text-[clamp(4rem,8vw,7rem)] font-extrabold tracking-tighter drop-shadow-2xl">
          We Build Websites That <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">Dominate</span>.
        </h1>
        <p className="text-white/80 text-center text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg">
          Stop settling for average. We craft high-converting, lightning-fast digital assets that turn visitors into paying customers for ambitious businesses.
        </p>
        
        <div className="my-10 flex items-center justify-center gap-2">
          <span className="relative flex h-3 w-3 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success"></span>
          </span>
          <p className="text-sm text-success font-medium tracking-wide uppercase drop-shadow-md">Accepting New Clients</p>
        </div>
              
        <div className="flex justify-center"> 
          <a href="/build" className="inline-block">
            <LiquidButton className="text-white font-bold tracking-wide" size="xl">
              Build My Website
            </LiquidButton> 
          </a>
        </div> 
      </div>
    </section>
  );
}
