import { Metadata } from 'next';
import Link from 'next/link';
import { solutionCategories, iconMap } from '@/data/solutions';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Engineering & Growth Solutions | Oktuv',
  description: 'Explore our full suite of digital solutions, from custom web development and SaaS engineering to AI automation and performance marketing.',
  alternates: {
    canonical: 'https://www.oktuvglobal.com/solutions/'
  }
};

export default function SolutionsHubPage() {
  return (
    <div className="relative min-h-screen flex flex-col" style={{ background: 'var(--surface)' }}>
      <Navbar />

      <main className="flex-1 relative pb-32">
        <div className="mesh-bg">
          <div className="mesh-orb-1" style={{ opacity: 0.3 }} />
        </div>
        <div className="hero-glass-overlay" />

        <div className="relative z-10 pt-32 lg:pt-48 px-6 max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-20" style={{ animation: 'fadeUp 0.6s ease forwards' }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-6" style={{ background: 'rgba(255,92,0,0.1)', color: 'var(--brand)', border: '1px solid rgba(255,92,0,0.2)' }}>
              <Layers size={12} /> Core Capabilities
            </div>
            <h1 className="h-display mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
              End-to-End <span style={{ color: 'var(--brand)' }}>Solutions.</span>
            </h1>
            <p className="text-[16px] md:text-[18px] leading-relaxed" style={{ color: 'var(--ink2)' }}>
              We design, architect, and scale digital products. Explore our core solution categories below to see how we drive revenue through engineering excellence.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ animation: 'fadeUp 0.8s ease forwards 0.2s', opacity: 0 }}>
            {solutionCategories.map((category) => {
              const IconComp = iconMap[category.iconName];
              
              return (
                <Link 
                  key={category.key} 
                  href={`/solutions/${category.key}/`}
                  className="glass p-8 rounded-[24px] group transition-all duration-300 hover:-translate-y-1 hover:bg-white/5 flex flex-col h-full" 
                  style={{ border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 text-[var(--ink)] border border-white/10">
                      {IconComp && <IconComp size={20} />}
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[var(--brand)] flex items-center justify-center text-white opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 shadow-[0_0_15px_rgba(255,92,0,0.5)]">
                      <ArrowRight size={14} />
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">{category.label}</h2>
                  <p className="text-[15px] text-[var(--ink2)] leading-relaxed mb-6 flex-1">
                    {category.intro}
                  </p>

                  <div className="space-y-3 pt-6 border-t border-white/5">
                    <h3 className="text-[11px] font-bold uppercase tracking-wider text-[var(--ink3)] mb-3">Core Services</h3>
                    {category.services.slice(0, 3).map((service) => (
                      <div key={service.slug} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand)]" />
                        <span className="text-[14px] font-medium text-[var(--ink2)]">{service.name}</span>
                      </div>
                    ))}
                    {category.services.length > 3 && (
                      <div className="text-[12px] text-[var(--ink3)] italic mt-2">
                        + {category.services.length - 3} more sub-services
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
