'use client';

import { ArrowRight } from 'lucide-react';

const stats = [
  { n: '4.2×', l: 'Average ROI across all clients in first 90 days' },
  { n: '67%', l: 'Avg. reduction in manual work hours via automation' },
  { n: '3×', l: 'Increase in qualified leads after SEO + landing page overhaul' },
  { n: '28d', l: 'Average days to first measurable result from kickoff' }
];

export default function ROISection() {
  return (
    <section style={{ padding: '1vw 0 5vw', position: 'relative' }}>
      
      {/* Background glow overlay */}
      <div className="glow-orb" style={{ top: '50%', left: '0%', transform: 'translate(-30%, -50%)', background: 'radial-gradient(circle, rgba(16,185,129,0.06) 0%, rgba(0,0,0,0) 60%)', width: 'min(1200px, 100vw)', height: 'min(1200px, 100vw)' }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 10, display: 'grid', gap: '8vw', alignItems: 'center' }}>
        {/* We use a Tailwind inline logic to control columns so it works properly for both */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[8vw] items-center">
          
          {/* Left */}
          <div className="flex-1">
            <div className="eyebrow" style={{ background: 'rgba(16,185,129,0.1)', color: 'var(--green)', border: '1px solid rgba(16,185,129,0.2)' }}>The numbers</div>
            <h2 className="h-section">What you actually get<br />when you work with us</h2>
            <p className="lead" style={{ marginBottom: '32px' }}>
              Not vanity metrics. Not pretty reports. These are the outcomes our clients see in the first 90 days.
            </p>
            {/* <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button className="btn btn-outline" style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)' }}>Talk to a founder</button>
            </div> */}
          </div>

          {/* Right */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {stats.map((s, i) => (
              <div key={i} className="glass" style={{ 
                borderRadius: '20px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'center'
               }}>
                <div style={{ fontSize: '36px', fontWeight: 800, color: 'var(--brand)', letterSpacing: '-1px', marginBottom: '12px', lineHeight: 1, textShadow: '0 2px 10px rgba(255,92,0,0.3)' }}>{s.n}</div>
                <div style={{ fontSize: '14px', color: 'var(--ink3)', lineHeight: 1.5, fontWeight: 500 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
