'use client';

import { ArrowRight, CheckCircle2 } from 'lucide-react';

const avatars = [
  { initials: 'RS', bg: '#7C3AED' },
  { initials: 'PM', bg: '#0891B2' },
  { initials: 'AK', bg: '#059669' },
  { initials: 'NK', bg: '#D97706' },
  { initials: 'SB', bg: '#DC2626' },
];
const trust = ['Results in 30 days', 'No long-term lock-in', 'Senior team, always'];
const bars  = [35, 52, 44, 68, 58, 80, 88, 95];

export default function Hero() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '6vw 0 8vw' }}>
      
      {/* Background ambient glows */}
      <div className="glow-orb" style={{ top: '-10%', left: '-10%', background: 'radial-gradient(circle, rgba(255,92,0,0.15) 0%, rgba(0,0,0,0) 60%)' }} />
      <div className="glow-orb" style={{ bottom: '-20%', right: '-5%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, rgba(0,0,0,0) 60%)' }} />

      <div className="wrap hero-cols" style={{ position: 'relative', zIndex: 10, display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '6vw', alignItems: 'center' }}>

        {/* ── Left ───────────────────────── */}
        <div>
          {/* Social proof */}
          <div className="glass" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '32px', padding: '6px 16px 6px 6px', borderRadius: '100px', animation: 'fadeUp 0.5s ease both' }}>
            <div style={{ display: 'flex' }}>
              {avatars.map((a, i) => (
                <div key={i} style={{ width: 28, height: 28, borderRadius: '50%', border: '2px solid var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700, color: '#fff', background: a.bg, marginLeft: i === 0 ? 0 : '-8px', zIndex: avatars.length - i, boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
                  {a.initials}
                </div>
              ))}
            </div>
            <span style={{ fontSize: '13px', color: 'var(--ink2)' }}>
              <strong style={{ color: 'var(--green)', fontWeight: 600 }}>50+ businesses</strong> grew with us
            </span>
          </div>

          {/* Heading */}
          <h1 className="h-display" style={{ marginBottom: '20px', animation: 'fadeUp 0.5s ease 0.1s both' }}>
            Stop losing customers<br />to{' '}
            <span style={{ position: 'relative', display: 'inline-block' }}>
              <span style={{ position: 'relative', zIndex: 2, color: 'var(--brand)' }}>a slow website</span>
              <svg width="100%" height="12" viewBox="0 0 200 12" style={{ position: 'absolute', bottom: -2, left: 0, zIndex: 1 }} preserveAspectRatio="none">
                <path d="M0 10 Q 100 0, 200 10" stroke="rgba(255,92,0,0.4)" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p style={{ fontSize: 'clamp(15px, 1.2vw, 20px)', color: 'var(--ink2)', lineHeight: 1.75, maxWidth: '80%', marginBottom: '12px', animation: 'fadeUp 0.5s ease 0.18s both' }}>
            Your competitors are already using AI, automation, and conversion-optimised design. Every week you wait, they pull further ahead.
          </p>
          <p style={{ fontSize: 'clamp(13.5px, 1vw, 18px)', color: 'var(--ink3)', maxWidth: '75%', lineHeight: 1.7, marginBottom: '40px', animation: 'fadeUp 0.5s ease 0.24s both' }}>
            Flowmatic turns your digital presence into a <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>24/7 growth engine</strong> — web, AI, marketing, design, all in one team.
          </p>

          {/* CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px', animation: 'fadeUp 0.5s ease 0.3s both' }}>
            <button className="btn btn-primary" style={{ width: 'fit-content', fontSize: '15px', padding: '16px 32px', borderRadius: '100px', boxShadow: '0 4px 20px rgba(255,92,0,0.3)' }}
              onMouseEnter={e => { const b = e.currentTarget; b.style.background = 'var(--brand-d)'; b.style.transform = 'translateY(-2px) scale(1.02)'; }}
              onMouseLeave={e => { const b = e.currentTarget; b.style.background = 'var(--brand)'; b.style.transform = 'translateY(0) scale(1)'; }}
            >
              Get my free growth audit <ArrowRight size={16} style={{ marginLeft: '4px' }}/>
            </button>
          </div>

          {/* Trust */}
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', animation: 'fadeUp 0.5s ease 0.36s both' }}>
            {trust.map(t => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--ink3)', fontWeight: 500 }}>
                <CheckCircle2 size={14} color="var(--green)" strokeWidth={2.5} style={{ filter: 'drop-shadow(0 0 6px rgba(16,185,129,0.4))' }}/>{t}
              </div>
            ))}
          </div>
        </div>

        {/* ── Right – Stats card ──────────── */}
        <div style={{ position: 'relative', flexShrink: 0, perspective: '1000px' }}>
          
          {/* Floating TL */}
          <div className="glass" style={{ position: 'absolute', top: '-24px', right: '-14px', borderRadius: '14px', padding: '12px 16px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', animation: 'floatA 4s ease-in-out infinite', zIndex: 20 }}>
            <div style={{ fontSize: '10px', color: 'var(--ink3)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Organic leads this week</div>
            <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--ink)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              +127 leads <span style={{ color: 'var(--green)', fontSize: '11px', background: 'rgba(16,185,129,0.1)', padding: '2px 6px', borderRadius: '4px' }}>↑ 34%</span>
            </div>
          </div>

          {/* Floating BL */}
          <div className="glass" style={{ position: 'absolute', bottom: '-24px', left: '-20px', borderRadius: '14px', padding: '12px 16px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', animation: 'floatA 5s ease-in-out 1s infinite backwards', zIndex: 20 }}>
            <div style={{ fontSize: '10px', color: 'var(--ink3)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>AI workflows running</div>
            <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--ink)' }}>14 active <span style={{ color: 'var(--brand)' }}>✦</span></div>
          </div>

          {/* Main Card */}
          <div className="glass" style={{ padding: '32px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.12)', background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)', backdropFilter: 'blur(32px)', WebkitBackdropFilter: 'blur(32px)', boxShadow: '0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--ink3)', textTransform: 'uppercase', letterSpacing: '1px' }}>Client growth — live</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--green)', fontWeight: 600, background: 'rgba(16,185,129,0.1)', padding: '4px 10px', borderRadius: '100px' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', display: 'inline-block', filter: 'drop-shadow(0 0 4px var(--green))', animation: 'blink 1.8s infinite' }} />Live
              </div>
            </div>
            <div style={{ fontSize: 'clamp(40px, 4vw, 56px)', fontWeight: 800, color: 'var(--ink)', letterSpacing: '-2px', lineHeight: 1, textShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>₹3.8Cr</div>
            <div style={{ fontSize: '12px', color: 'var(--ink3)', marginTop: '8px', marginBottom: '24px' }}>Revenue attributed this quarter</div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '64px', marginBottom: '24px' }}>
              {bars.map((h, i) => (
                <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: '4px 4px 0 0', background: i >= 4 ? 'linear-gradient(to top, var(--brand-d), var(--brand))' : 'rgba(255,255,255,0.1)', animation: `growbar 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) ${0.1 + i * 0.05}s both` }} />
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '20px' }}>
              {[{ n: '97%', l: 'Satisfaction' }, { n: '4.2×', l: 'Avg. ROI' }, { n: '28d', l: 'First results' }].map(s => (
                <div key={s.l} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--ink)', letterSpacing: '-0.5px' }}>{s.n}</div>
                  <div style={{ fontSize: '11px', color: 'var(--ink3)' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
