import { Metadata } from 'next';
import Link from 'next/link';
import { topLocations, coreServices } from '@/data/seo/locations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Global Engineering Hubs | Oktuv Locations',
  description: 'Explore our global engineering hubs and local tech talent across the world. Oktuv provides elite web development, AI automation, and SaaS engineering globally.',
  alternates: {
    canonical: 'https://www.oktuvglobal.com/locations/'
  }
};

export default function LocationsHubPage() {
  return (
    <div className="relative min-h-screen flex flex-col" style={{ background: 'var(--surface)' }}>
      <Navbar />

      <main className="flex-1 relative pb-32">
        <div className="mesh-bg">
          <div className="mesh-orb-1" style={{ opacity: 0.4 }} />
          <div className="mesh-orb-2" style={{ opacity: 0.2 }} />
        </div>
        <div className="hero-glass-overlay" />

        <div className="relative z-10 pt-32 lg:pt-48 px-6 max-w-7xl mx-auto">
          <header className="text-center max-w-3xl mx-auto mb-20" style={{ animation: 'fadeUp 0.6s ease forwards' }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-6" style={{ background: 'rgba(255,92,0,0.1)', color: 'var(--brand)', border: '1px solid rgba(255,92,0,0.2)' }}>
              <MapPin size={12} /> Global Presence
            </div>
            <h1 className="h-display mb-6" style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}>
              Engineering Talent, <span style={{ color: 'var(--brand)' }}>Worldwide.</span>
            </h1>
            <p className="text-[16px] md:text-[18px] leading-relaxed" style={{ color: 'var(--ink2)' }}>
              We build high-performance digital products for enterprises and fast-growing startups across major global tech hubs and emerging engineering centers.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ animation: 'fadeUp 0.8s ease forwards 0.2s', opacity: 0 }}>
            {topLocations.map((location) => (
              <div key={location.slug} className="glass p-8 rounded-[24px] group transition-all duration-300 hover:bg-white/5" style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 text-[var(--ink)]">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">{location.city}</h2>
                    <p className="text-[13px] text-[var(--ink3)]">{location.country}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-[11px] font-bold uppercase tracking-wider text-[var(--ink3)] mb-4">Available Services</h3>
                  {coreServices.map((service) => (
                    <Link 
                      key={service.slug} 
                      href={`/locations/${location.slug}/${service.slug}/`}
                      className="flex items-center justify-between p-3 rounded-xl transition-all duration-200 hover:bg-white/5 group/link"
                    >
                      <span className="text-[14px] font-medium text-[var(--ink2)] group-hover/link:text-white transition-colors">
                        {service.name}
                      </span>
                      <ArrowRight size={14} className="text-[var(--ink3)] opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
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
