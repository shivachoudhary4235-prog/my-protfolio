"use client";

import { ReactNode } from "react";

// Lenis smooth scroll has been completely disabled as per user request
// to ensure 100% native, instant, and fluid browser scrolling with zero lag.
export function SmoothScroll({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
