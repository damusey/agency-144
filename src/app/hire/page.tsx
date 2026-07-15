import { Metadata } from 'next';
import Link from 'next/link';
import { techStacks } from '@/data/seo/tech-stacks';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Code2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hire Expert Developers | Oktuv Tech Stacks',
  description: 'Hire elite developers across modern tech stacks including React, Next.js, Node.js, Python, Flutter, and more. Senior engineering teams ready to scale your product.',
  alternates: {
    canonical: 'https://www.oktuvglobal.com/hire/'
  }
};

export default function HireHubPage() {
  return (
    <div className="relative min-h-screen flex flex-col" style={{ background: 'var(--surface)' }}>
      <Navbar />

      <main className="flex-1 relative pb-32">
        <div className="mesh-bg">
          <div className="mesh-orb-1" style={{ opacity: 0.4 }} />
        </div>
        <div className="hero-glass-overlay" />

        <div className="relative z-10 pt-32 lg:pt-48 px-6 max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-20" style={{ animation: 'fadeUp 0.6s ease forwards' }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-6" style={{ background: 'rgba(255,92,0,0.1)', color: 'var(--brand)', border: '1px solid rgba(255,92,0,0.2)' }}>
              <Code2 size={12} /> Tech Ecosystem
            </div>
            <h1 className="h-display mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
              Hire Elite <span style={{ color: 'var(--brand)' }}>Engineers.</span>
            </h1>
            <p className="text-[16px] md:text-[18px] leading-relaxed" style={{ color: 'var(--ink2)' }}>
              We don't just write code; we architect scalable systems. Explore our deep expertise across the modern web, mobile, and AI engineering ecosystems.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ animation: 'fadeUp 0.8s ease forwards 0.2s', opacity: 0 }}>
            {techStacks.map((tech) => (
              <Link 
                key={tech.slug} 
                href={`/hire/${tech.slug}-developers/`}
                className="glass p-8 rounded-[24px] group transition-all duration-300 hover:-translate-y-1 hover:bg-white/5 flex flex-col h-full" 
                style={{ border: '1px solid rgba(255,255,255,0.05)' }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 text-[var(--ink)] border border-white/10">
                    <Code2 size={20} />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[var(--brand)] flex items-center justify-center text-white opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 shadow-[0_0_15px_rgba(255,92,0,0.5)]">
                    <ArrowRight size={14} />
                  </div>
                </div>

                <div className="mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--brand)]">{tech.category}</span>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">Hire {tech.name} Developers</h2>
                
                <p className="text-[14px] text-[var(--ink3)] leading-relaxed flex-1">
                  {tech.description}
                </p>

                <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap gap-2">
                  {tech.benefits.slice(0, 2).map((benefit, i) => (
                    <span key={i} className="px-3 py-1 rounded-md text-[11px] font-semibold text-[var(--ink2)] bg-white/5">
                      {benefit}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
