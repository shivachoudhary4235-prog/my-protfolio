import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ProjectBuilder } from "@/components/sections/ProjectBuilder";

export const metadata = {
  title: "Build Your Request | VibeForge Cloud",
  description: "Select your industry and required features to get a custom web design quote instantly.",
};

export default function BuildPage() {
  return (
    <main className="relative flex flex-col items-center overflow-x-hidden pt-20">
      <Navbar />
      <div className="w-full min-h-screen">
        <ProjectBuilder />
      </div>
      <Footer />
    </main>
  );
}
