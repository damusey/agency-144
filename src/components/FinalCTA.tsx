'use client';

import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section style={{ padding: '5vw 0', position: 'relative', overflow: 'hidden' }}>

      <div className="glow-orb" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'radial-gradient(circle, rgba(255,92,0,0.15) 0%, rgba(0,0,0,0) 60%)', width: '1200px', height: '1200px' }} />

      <div className="wrap" style={{ textAlign: 'center', width: '70%', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        <div className="eyebrow" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.1)' }}>
          Last chance this month
        </div>
        
        <h2 className="h-display" style={{ marginBottom: '24px', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
          Your competitors aren&apos;t waiting.<br />
          <em style={{ fontStyle: 'normal', color: 'var(--brand)', textShadow: '0 0 30px rgba(255,92,0,0.4)' }}>Why are you?</em>
        </h2>
        
        <p className="lead" style={{ margin: '0 auto 48px', color: 'var(--ink2)', fontSize: '18px' }}>
          Every day without the right digital infrastructure is a day your competitors capture customers who should be yours.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="/audit" style={{ textDecoration: 'none' }}><button className="btn btn-primary" style={{ fontSize: '16px', padding: '18px 36px', borderRadius: '100px', boxShadow: '0 8px 30px rgba(255,92,0,0.3)' }}
              onMouseEnter={e => { const b = e.currentTarget; b.style.background = 'var(--brand-d)'; b.style.transform = 'translateY(-2px) scale(1.02)'; }}
              onMouseLeave={e => { const b = e.currentTarget; b.style.background = 'var(--brand)'; b.style.transform = 'translateY(0) scale(1)'; }}
            >
              Book our free growth audit <ArrowRight size={16} style={{ marginLeft: '4px' }}/>
            </button></a>

          </div>
          
          <div className="glass" style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap', justifyContent: 'center', fontSize: '13px', color: 'var(--ink3)', padding: '12px 32px', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="var(--brand)" strokeWidth={2.5}/> No credit card needed</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="var(--brand)" strokeWidth={2.5}/> Results in 30 days or we work free</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle2 size={14} color="var(--brand)" strokeWidth={2.5}/> Cancel any time</div>
          </div>
        </div>

      </div>
    </section>
  );
}
