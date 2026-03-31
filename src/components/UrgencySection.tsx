'use client';

import { Clock, ArrowRight } from 'lucide-react';

export default function UrgencySection() {
  return (
    <section style={{ padding: '6vw 0', position: 'relative' }}>
      <div className="wrap glass" style={{ borderRadius: '32px', padding: '64px 8%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px', background: 'linear-gradient(145deg, rgba(255,92,0,0.08) 0%, rgba(255,255,255,0.02) 100%)', boxShadow: '0 30px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)' }}>
        
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(255,92,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(255,92,0,0.3)', boxShadow: '0 0 20px rgba(255,92,0,0.2)' }}>
            <Clock size={28} color="var(--brand)" />
          </div>
          <div>
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--ink)', marginBottom: '12px', letterSpacing: '-0.5px' }}>
              We only take 3 new growth partners per month
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--ink2)', lineHeight: 1.6, maxWidth: '600px' }}>
              To ensure our existing clients get Senior-level attention constantly, we strictly cap our bandwidth. Once April&apos;s slots are full, you join the waitlist.
            </p>
          </div>
        </div>

        <button className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '15px', borderRadius: '100px', boxShadow: '0 8px 30px rgba(255,92,0,0.3)' }}>
          Reserve your spot <ArrowRight size={16}/>
        </button>

      </div>
    </section>
  );
}
