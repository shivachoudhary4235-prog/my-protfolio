import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  glow?: boolean;
}

export function Card({ children, className, innerClassName, glow = false }: CardProps) {
  return (
    <div
      className={cn(
        "relative p-2 rounded-[2rem] bg-white/5 ring-1 ring-white/10 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]",
        glow && "before:absolute before:inset-0 before:rounded-[2rem] before:bg-primary/20 before:blur-3xl before:-z-10",
        className
      )}
    >
      <div
        className={cn(
          "relative h-full w-full overflow-hidden rounded-[calc(2rem-0.5rem)] bg-[#0F0D1A] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]",
          innerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
