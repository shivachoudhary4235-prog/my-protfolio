import { getPortfolioItems } from "@/lib/wp";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

export async function Portfolio() {
  const items = await getPortfolioItems();

  return (
    <section id="work" className="relative w-full py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium bg-white/5 border border-white/10 text-text-muted">
            Recent Work
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Demo projects built for real business needs.
          </h2>
          <p className="text-lg text-text-muted font-light">
            Click any to explore the live site.
          </p>
        </div>
        <Link href="/projects">
          <Button variant="outline" icon={<ArrowRight weight="light" size={16} />}>
            View All Projects
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={item.id} className="group flex flex-col h-full">
            <Card className="h-full flex flex-col">
              {/* Image Container with Parallax-like effect on hover */}
              <div className="relative w-full aspect-[4/3] rounded-[calc(2rem-0.5rem)] overflow-hidden bg-white/5 mb-6 group-hover:ring-1 group-hover:ring-white/20 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent z-10 opacity-60" />
                
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105 group-hover:rotate-1 opacity-80 group-hover:opacity-100"
                />
                
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center rounded-full bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 text-xs font-medium text-white">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="px-6 pb-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="text-text-muted text-base font-light mb-6 flex-1 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                  <span className="text-sm font-medium text-primary">
                    {item.result}
                  </span>
                  <a 
                    href={item.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-light text-sm font-medium flex items-center gap-1 transition-colors"
                  >
                    View Live Site &rarr;
                  </a>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}
