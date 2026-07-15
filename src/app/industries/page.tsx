import { Metadata } from 'next';
import Link from 'next/link';
import { targetIndustries as industries } from '@/data/seo/industries';
import { coreServices as industryServices } from '@/data/seo/locations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Building2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industry Solutions | Oktuv',
  description: 'Explore our specialized web development, AI automation, and SaaS engineering solutions tailored for Healthcare, Fintech, E-commerce, and SaaS industries.',
  alternates: {
    canonical: 'https://www.oktuvglobal.com/industries/'
  }
};

export default function IndustriesHubPage() {
  return (
    <div className="relative min-h-screen flex flex-col" style={{ background: 'var(--surface)' }}>
      <Navbar />

      <main className="flex-1 relative pb-32">
        <div className="mesh-bg">
          <div className="mesh-orb-2" style={{ opacity: 0.3 }} />
        </div>
        <div className="hero-glass-overlay" />

        <div className="relative z-10 pt-32 lg:pt-48 px-6 max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-20" style={{ animation: 'fadeUp 0.6s ease forwards' }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-6" style={{ background: 'rgba(255,92,0,0.1)', color: 'var(--brand)', border: '1px solid rgba(255,92,0,0.2)' }}>
              <Building2 size={12} /> Industry Expertise
            </div>
            <h1 className="h-display mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
              Solutions for <span style={{ color: 'var(--brand)' }}>Your Industry.</span>
            </h1>
            <p className="text-[16px] md:text-[18px] leading-relaxed" style={{ color: 'var(--ink2)' }}>
              We bring deep domain expertise to every project. Discover how our engineering and AI solutions are transforming businesses in your specific sector.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ animation: 'fadeUp 0.8s ease forwards 0.2s', opacity: 0 }}>
            {industries.map((industry) => (
              <div key={industry.slug} className="glass p-8 md:p-10 rounded-[24px] group" style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 text-[var(--ink)]">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white tracking-tight">{industry.name}</h2>
                  </div>
                </div>

                <p className="text-[15px] text-[var(--ink2)] leading-relaxed mb-8">
                  {industry.description}
                </p>

                <div className="space-y-3">
                  <h3 className="text-[11px] font-bold uppercase tracking-wider text-[var(--ink3)] mb-4">Engineering Solutions</h3>
                  {industryServices.map((service) => (
                    <Link 
                      key={service.slug} 
                      href={`/industries/${industry.slug}/${service.slug}/`}
                      className="flex items-center justify-between p-4 rounded-xl transition-all duration-200 bg-white/5 hover:bg-white/10 group/link border border-transparent hover:border-white/10"
                    >
                      <span className="text-[15px] font-medium text-[var(--ink2)] group-hover/link:text-white transition-colors">
                        {service.name} for {industry.name}
                      </span>
                      <ArrowRight size={16} className="text-[var(--ink3)] opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
