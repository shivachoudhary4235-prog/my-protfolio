import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function TermsAndConditions() {
  return (
    <main className="relative flex flex-col items-center overflow-x-hidden pt-32">
      <Navbar />
      <div className="w-full max-w-4xl mx-auto px-4 md:px-8 py-16 mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Terms & Conditions</h1>
        <div className="prose prose-invert max-w-none text-text-muted">
          <p>Last updated: July 2026</p>
          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing and using the VibeForge Cloud website and services, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
          <h3>2. Service Description</h3>
          <p>
            VibeForge Cloud provides custom web design, development, and SEO services. The specific details of the services provided will be outlined in a separate statement of work or proposal for each client.
          </p>
          <h3>3. Payment Terms</h3>
          <p>
            Payment terms are defined in individual client contracts. Typically, a deposit is required before work commences, with the balance due upon completion. We reserve the right to suspend services for overdue accounts.
          </p>
          <h3>4. Intellectual Property</h3>
          <p>
            Upon full payment, the client owns the copyright to the final website design and content produced specifically for them. We retain the right to showcase the completed work in our portfolio and marketing materials.
          </p>
          <h3>5. Revisions and Approval</h3>
          <p>
            We include a specific number of revision rounds in our proposals. Additional revisions beyond the agreed scope will be billed at our standard hourly rate.
          </p>
          <h3>6. Limitation of Liability</h3>
          <p>
            In no event shall VibeForge Cloud be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
