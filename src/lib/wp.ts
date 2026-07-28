/**
 * WordPress Headless API Utility (Mocked for now)
 * This structure prepares the app to be connected to a WordPress Headless CMS (via WPGraphQL or REST).
 */

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  result: string;
  imageUrl: string;
  demoUrl: string;
}

// Mock data based on PRD and provided images
const mockPortfolio: PortfolioItem[] = [
  {
    id: "1",
    title: "SmileCare Dental",
    category: "Dental Clinic",
    description: "5-page mobile-first website with online booking, doctor profiles, WhatsApp integration.",
    result: "Designed to 3x patient inquiries",
    imageUrl: "/dental demo.png",
    demoUrl: "https://dentist-web-ebon.vercel.app/",
  },
  {
    id: "2",
    title: "Focus Fitness Center",
    category: "Gym & Fitness",
    description: "Modern gym website with membership plans, trainer profiles, and class schedules.",
    result: "40% increase in signups",
    imageUrl: "/gym demo photo.png",
    demoUrl: "https://gym-website-lrlw.vercel.app/",
  },
  {
    id: "3",
    title: "AI Office Suite",
    category: "SaaS Application",
    description: "Merge, compress, and edit PDFs. Remove backgrounds and chat with your documents using powerful AI tools.",
    result: "One AI for Every Document",
    imageUrl: "/ai-saas-dashboard.png",
    demoUrl: "https://ai-wi4y.vercel.app/dashboard",
  },
];

export async function getPortfolioItems(): Promise<PortfolioItem[]> {
  // In the future, this would be:
  // const res = await fetch('https://your-wp-domain.com/graphql', { ... })
  // return res.json()
  
  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockPortfolio);
    }, 500);
  });
}
