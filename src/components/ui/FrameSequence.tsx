"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 180;

const getFramePath = (index: number) => {
  const paddedIndex = index.toString().padStart(3, "0");
  return `/scroll-frames/ezgif-frame-${paddedIndex}.jpg`;
};

export function FrameSequence() {
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

  const { scrollYProgress } = useScroll();

  // Map scroll progress. We want it to scrub while the user scrolls down the first 30% of the page
  const frameIndex = useTransform(scrollYProgress, [0, 0.3], [0, FRAME_COUNT - 1]);

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
        const dpr = window.devicePixelRatio || 1;
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
  }, [images]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full object-cover"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
