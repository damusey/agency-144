'use client';

import { Star } from 'lucide-react';

const reviews = [
  { img: 'https://i.pravatar.cc/100?img=33', name: 'Sarah J.', role: 'CMO, BuildCo', t: '"Our lead cost dropped 40% in two months. The funnel they built is a machine."' },
  { img: 'https://i.pravatar.cc/100?img=11', name: 'Michael T.', role: 'Founder, NxtLayer', t: '"Finally, an agency that actually understands tech. They integrated our entire messy stack in a week."' },
  { img: 'https://i.pravatar.cc/100?img=47', name: 'Elena R.', role: 'VP Growth, UpScale', t: '"The AI agent they deployed handles 80% of our tier-1 support now. Literally saved us two hires."' }
];

export default function Testimonials() {
  return (
    <section style={{ padding: '8vw 0', position: 'relative' }}>
      
      <div className="glow-orb" style={{ top: '20%', right: '10%', background: 'radial-gradient(circle, rgba(245,158,11,0.06) 0%, rgba(0,0,0,0) 60%)', width: '800px', height: '800px' }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <div className="eyebrow" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--ink)' }}>Don&apos;t just take our word for it</div>
          <h2 className="h-section">Trusted by ambitious teams</h2>
        </div>

        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3vw' }}>
          {reviews.map((r, i) => (
            <div key={i} className="glass" style={{ padding: '40px', borderRadius: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                {[1,2,3,4,5].map(s => <Star key={s} size={18} fill="var(--yellow)" color="var(--yellow)" style={{ filter: 'drop-shadow(0 0 4px rgba(245,158,11,0.5))' }} />)}
              </div>
              <p style={{ fontSize: '16px', color: 'var(--ink2)', lineHeight: 1.6, flexGrow: 1, fontWeight: 500 }}>{r.t}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '12px' }}>
                <img src={r.img} alt={r.name} style={{ width: 48, height: 48, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.1)' }} />
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--ink)' }}>{r.name}</div>
                  <div style={{ fontSize: '13px', color: 'var(--ink3)' }}>{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
