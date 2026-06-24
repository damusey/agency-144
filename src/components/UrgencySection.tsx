'use client';

import { Clock, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function UrgencySection() {
  const [meta, setMeta] = useState(() => {
    if (typeof window === 'undefined') return { slots: 25, month: '' }; // SSR fallback
    
    const now = new Date();
    const month = now.toLocaleString('default', { month: 'long' });
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    const percentRemaining = Math.max(0, 1 - (now.getDate() / daysInMonth));
    return {
      slots: Math.max(3, Math.round(25 * percentRemaining)),
      month
    };
  });
  
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <section style={{ padding: '5vw 0', position: 'relative' }}>
      <div className="wrap glass flex-stack-mob" style={{ borderRadius: 'clamp(20px, 3vw, 32px)', padding: 'clamp(32px, 5vw, 64px) clamp(5%, 6%, 8%)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'clamp(24px, 4vw, 40px)', background: 'linear-gradient(145deg, rgba(255,92,0,0.08) 0%, rgba(255,255,255,0.02) 100%)', boxShadow: '0 30px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)' }}>
        
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
          <div style={{ width: 'clamp(48px, 6vw, 64px)', height: 'clamp(48px, 6vw, 64px)', borderRadius: '50%', background: 'rgba(255,92,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid rgba(255,92,0,0.3)', boxShadow: '0 0 20px rgba(255,92,0,0.2)' }}>
            <Clock size={28} color="var(--brand)" />
          </div>
          <div>
            <h3 style={{ fontSize: 'clamp(18px, 2vw, 22px)', fontWeight: 800, color: 'var(--ink)', marginBottom: '12px', letterSpacing: '-0.5px' }}>
              We only take 25 new growth partners per month
            </h3>
            <p style={{ fontSize: 'clamp(13px, 1.3vw, 15px)', color: 'var(--ink2)', lineHeight: 1.6, maxWidth: '600px' }}>
              To ensure our existing clients get Senior-level attention constantly, we strictly cap our bandwidth. Once {mounted ? meta.month : 'this month'}&apos;s slots are full, you join the waitlist. Currently, there are {mounted ? meta.slots : '...'} slots remaining.
            </p>
          </div>
        </div>

        <Link href="/book/" style={{ textDecoration: 'none' }}>
          <button className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '15px', borderRadius: '100px', boxShadow: '0 8px 30px rgba(255,92,0,0.3)' }}>
            Reserve your spot <ArrowRight size={16}/>
          </button>
        </Link>

      </div>
    </section>
  );
}
