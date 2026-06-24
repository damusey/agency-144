'use client';

import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const avatars = [
  { initials: 'RS', bg: '#7C3AED' },
  { initials: 'PM', bg: '#0891B2' },
  { initials: 'AK', bg: '#059669' },
  { initials: 'NK', bg: '#D97706' },
  { initials: 'SB', bg: '#DC2626' },
];
const trust = ['Results in 30 days', 'No long-term lock-in', 'Senior team, always'];

export default function Hero() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '4vw 0 6vw' }}>
      
      {/* ── Full-bleed Background Video ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/hero_poster.png"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: 0,
        }}
      >
        <source src="/hero_animation.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay so text remains readable */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(10,10,11,0.65) 0%, rgba(10,10,11,0.55) 50%, rgba(10,10,11,0.85) 100%)',
        zIndex: 1,
      }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

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
        <h1 className="h-display" style={{ marginBottom: '20px', animation: 'fadeUp 0.5s ease 0.1s both', maxWidth: '900px' }}>
          We Fix What's Actually<br />Holding Your Business{' '}
          <span style={{ color: 'var(--brand)' }}>Back.</span>
        </h1>

        <p style={{ fontSize: 'clamp(15px, 1.2vw, 20px)', color: 'var(--ink2)', lineHeight: 1.75, maxWidth: '640px', marginBottom: '12px', animation: 'fadeUp 0.5s ease 0.18s both' }}>
          Your competitors are already using AI, automation, and conversion-optimised design. Every week you wait, they pull further ahead.
        </p>
        <p style={{ fontSize: 'clamp(13.5px, 1vw, 18px)', color: 'var(--ink3)', maxWidth: '580px', lineHeight: 1.7, marginBottom: '40px', animation: 'fadeUp 0.5s ease 0.24s both' }}>
          Oktuv turns your digital presence into a <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>24/7 growth engine</strong> — web, AI, marketing, design, all in one team.
        </p>

        {/* CTA */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '40px', animation: 'fadeUp 0.5s ease 0.3s both' }}>
          <Link href="/audit/" style={{ textDecoration: 'none' }}><button className="btn btn-primary" style={{ fontSize: '15px', padding: '16px 36px', borderRadius: '100px', boxShadow: '0 4px 20px rgba(255,92,0,0.3)' }}
            onMouseEnter={e => { const b = e.currentTarget; b.style.background = 'var(--brand-d)'; b.style.transform = 'translateY(-2px) scale(1.02)'; }}
            onMouseLeave={e => { const b = e.currentTarget; b.style.background = 'var(--brand)'; b.style.transform = 'translateY(0) scale(1)'; }}
          >
            Get our free growth audit <ArrowRight size={16} style={{ marginLeft: '4px' }}/>
          </button></Link>
        </div>

        {/* Trust */}
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center', animation: 'fadeUp 0.5s ease 0.36s both' }}>
          {trust.map(t => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--ink3)', fontWeight: 500 }}>
              <CheckCircle2 size={14} color="var(--green)" strokeWidth={2.5} style={{ filter: 'drop-shadow(0 0 6px rgba(16,185,129,0.4))' }}/>{t}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
