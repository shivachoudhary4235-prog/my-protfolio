"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { ArrowUpRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Work", href: "/#work" },
    { name: "About Us", href: "/about-us" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-6 left-1/2 z-50 flex -translate-x-1/2 items-center justify-between rounded-full bg-white/5 p-2 px-6 ring-1 ring-white/10 backdrop-blur-md transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]",
          scrolled ? "w-[90%] md:w-[700px]" : "w-[95%] md:w-[800px]"
        )}
      >
        <div className="flex items-center gap-2">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-black ring-1 ring-white/10 overflow-hidden">
            <Image src="/logo 2.png" alt="VibeForge Logo" fill className="object-cover" />
          </div>
          <span className="hidden text-sm font-semibold tracking-wide md:block">VIBEFORGE</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-text-muted transition-colors hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a href="tel:+919619442009">
            <Button
              variant="primary"
              className="py-2 px-4 text-sm"
              icon={<ArrowUpRight weight="light" size={16} />}
            >
              Let's Talk
            </Button>
          </a>
        </div>

        {/* Mobile Hamburger Morph */}
        <button
          className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={cn(
              "h-[2px] w-6 bg-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
              isOpen ? "translate-y-[8px] rotate-45" : ""
            )}
          />
          <span
            className={cn(
              "h-[2px] w-6 bg-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
              isOpen ? "opacity-0" : ""
            )}
          />
          <span
            className={cn(
              "h-[2px] w-6 bg-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
              isOpen ? "-translate-y-[8px] -rotate-45" : ""
            )}
          />
        </button>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[40] flex flex-col items-center justify-center bg-black/90 backdrop-blur-3xl transition-opacity duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]",
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-4xl font-bold tracking-tight text-white transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]",
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              )}
              style={{ transitionDelay: `${i * 100 + 100}ms` }}
            >
              {link.name}
            </Link>
          ))}
          <div
            className={cn(
              "mt-8 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]",
              isOpen ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            )}
            style={{ transitionDelay: `${navLinks.length * 100 + 100}ms` }}
          >
            <a href="tel:+919619442009">
              <Button variant="primary" icon={<ArrowUpRight weight="light" size={16} />}>
                Let's Talk
              </Button>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
