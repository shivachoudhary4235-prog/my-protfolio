import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "glass";
  icon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", icon, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative flex items-center justify-center rounded-full px-6 py-3 font-medium transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]",
          variant === "primary" && "bg-primary text-white hover:bg-primary-light",
          variant === "outline" && "border border-white/20 bg-transparent hover:bg-white/5",
          variant === "glass" && "bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20",
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        {icon && (
          <div
            className={cn(
              "ml-3 flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105",
              variant === "primary" ? "bg-black/10" : "bg-white/10"
            )}
          >
            {icon}
          </div>
        )}
      </button>
    );
  }
);
Button.displayName = "Button";
