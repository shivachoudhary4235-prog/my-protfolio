import Link from "next/link";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function NotFound() {
  return (
    <main className="relative flex flex-col items-center overflow-x-hidden pt-32 min-h-screen">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 mb-20 mt-20">
        <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 mb-6">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-text-muted font-light max-w-md mx-auto mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-bold text-white transition-transform hover:scale-105"
        >
          Return Home
        </Link>
      </div>
      <div className="w-full mt-auto">
        <Footer />
      </div>
    </main>
  );
}
