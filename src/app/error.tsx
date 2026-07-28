"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="relative flex flex-col items-center overflow-x-hidden pt-32 min-h-screen">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 mb-20 mt-20">
        <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/20 mb-6">
          500
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Something went wrong!
        </h2>
        <p className="text-lg text-text-muted font-light max-w-md mx-auto mb-8">
          An unexpected error has occurred on our servers.
        </p>
        <button
          onClick={() => reset()}
          className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-bold text-white transition-transform hover:scale-105"
        >
          Try again
        </button>
      </div>
      <div className="w-full mt-auto">
        <Footer />
      </div>
    </main>
  );
}
