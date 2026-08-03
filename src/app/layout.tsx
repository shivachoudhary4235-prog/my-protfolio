import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ChatBot } from "@/components/ui/ChatBot";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VibeForge Cloud | Software & Web Agency",
  description: "Next-generation software development and web design agency crafting stunning, high-converting digital experiences.",

  manifest: '/site.webmanifest',
  keywords: [
    "web design agency USA", "affordable web developer Canada", "custom website design India",
    "high converting websites for local business", "dental clinic website design",
    "restaurant web design services", "freelance web developer USA", "SaaS website designer",
    "coaching center website", "cheap web design Canada", "Shopify developer India",
    "Next.js web development agency", "fast website loading times", "Google Maps SEO setup",
    "local business SEO USA", "online booking system website", "modern web design 2026",
    "hire web developer USA", "outsource web design India to USA", "web design packages small business"
  ],
  authors: [{ name: "Shiva Choudhary", url: "https://vibeforge.cloud" }],
  creator: "Shiva Choudhary",
  publisher: "VibeForge Cloud",
  openGraph: {
    title: "VibeForge Cloud | Custom Web Design for Local Businesses",
    description: "Transform your online presence with a high-performance website. Built for conversions. Delivering globally to USA, Canada, and India.",
    url: "https://vibeforge.cloud",
    siteName: "VibeForge Cloud",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VibeForge Cloud | Premium Web Design Agency",
    description: "Affordable custom web design and development for businesses in the USA, Canada, and India.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://db.onlinewebfonts.com/c/d08bafd725a4cfc309efb5a88e0b63a5?family=basis33" rel="stylesheet" />
        
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-radial-mesh min-h-screen selection:bg-primary/30 selection:text-white`}
        suppressHydrationWarning
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FV76FVK3P4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FV76FVK3P4');
          `}
        </Script>

        <SmoothScroll>
          {children}
        </SmoothScroll>
        <ChatBot />
      </body>
    </html>
  );
}
