import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="relative flex flex-col items-center overflow-x-hidden pt-32">
      <Navbar />
      <div className="w-full max-w-4xl mx-auto px-4 md:px-8 py-16 mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none text-text-muted">
          <p>Last updated: July 2026</p>
          <p>
            VibeForge Cloud ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by VibeForge Cloud.
          </p>
          <h3>1. Information We Collect</h3>
          <p>
            We collect information from you when you visit our website, register on our site, place an order, subscribe to our newsletter, respond to a survey, or fill out a form. The types of personal information collected may include your name, email address, mailing address, phone number, and billing information.
          </p>
          <h3>2. How We Use Your Information</h3>
          <p>
            Any of the information we collect from you may be used in one of the following ways:
            <ul>
              <li>To personalize your experience.</li>
              <li>To improve our website.</li>
              <li>To improve customer service.</li>
              <li>To process transactions.</li>
              <li>To send periodic emails.</li>
            </ul>
          </p>
          <h3>3. Cookies</h3>
          <p>
            We use cookies to enhance your experience, gather general visitor information, and track visits to our website. You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies via your browser settings.
          </p>
          <h3>4. Third-Party Disclosure</h3>
          <p>
            We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
          </p>
          <h3>5. Contacting Us</h3>
          <p>
            If there are any questions regarding this privacy policy, you may contact us using the information on our Contact Us page.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
