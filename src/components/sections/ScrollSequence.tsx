"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 180;

const getFramePath = (index: number) => {
  const paddedIndex = index.toString().padStart(3, "0");
  return `/scroll-frames/ezgif-frame-${paddedIndex}.jpg`;
};

export function ScrollSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedCount++;
        if (i === 1) {
          // Immediately set the first image so it draws ASAP
          setImages((prev) => {
            const newImages = [...prev];
            newImages[0] = loadedImages[0];
            return newImages;
          });
        }
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  const drawFrame = (index: number) => {
    if (!canvasRef.current || images.length === 0) return;
    
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;
    
    const img = images[index];
    if (img && img.complete) {
      const canvasWidth = canvasRef.current.width;
      const canvasHeight = canvasRef.current.height;
      
      const canvasRatio = canvasWidth / canvasHeight;
      const imgRatio = img.width / img.height;
      
      let drawWidth = canvasWidth;
      let drawHeight = canvasHeight;
      let offsetX = 0;
      let offsetY = 0;
      
      if (canvasRatio > imgRatio) {
        drawHeight = canvasWidth / imgRatio;
        offsetY = (canvasHeight - drawHeight) / 2;
      } else {
        drawWidth = canvasHeight * imgRatio;
        offsetX = (canvasWidth - drawWidth) / 2;
      }
      
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    const currentIndex = Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(latest)));
    drawFrame(currentIndex);
  });

  // Handle Resize & Initial Draw
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        // High DPI canvas support
        const dpr = window.devicePixelRatio || 1;
        // Use client width/height rather than innerWidth to avoid scrollbar jump issues
        const rect = canvasRef.current.parentElement?.getBoundingClientRect();
        if (rect) {
          canvasRef.current.width = rect.width * dpr;
          canvasRef.current.height = rect.height * dpr;
          
          const ctx = canvasRef.current.getContext("2d");
          if (ctx) ctx.scale(dpr, dpr);
          
          if (images.length > 0) {
            const index = Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(frameIndex.get())));
            drawFrame(index);
          }
        }
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images]); // Only re-run when images are fully loaded

  return (
    <section ref={containerRef} className="relative w-full h-[120vh] bg-[#050505]">
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full opacity-70"
          style={{ width: "100%", height: "100%" }}
        />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none bg-black/20">
          <motion.div 
            style={{ 
              opacity: useTransform(scrollYProgress, [0, 0.1, 0.8, 0.9], [1, 0, 0, 1]),
              scale: useTransform(scrollYProgress, [0, 0.1], [1, 1.1])
            }}
            className="text-center px-4"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
              Precision in Motion.
            </h2>
            <p className="text-lg text-white/70 max-w-lg mx-auto font-light tracking-wide">
              Scroll down to explore the immersive experience.
            </p>
          </motion.div>
        </div>
        
        {/* Shadow gradients for seamless blending into next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] pointer-events-none opacity-80" />
      </div>
    </section>
  );
}
