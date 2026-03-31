'use client';

import { ArrowRight } from 'lucide-react';

const painPoints = [
  { emoji: '😤', problem: '"Our website looks outdated and visitors leave instantly."', desc: 'A slow, ugly website kills trust before you say a word. Visitors judge you in 0.05 seconds.', fix: 'UI/UX + conversion design' },
  { emoji: '📉', problem: '"We\'re spending on ads but getting zero ROI."', desc: 'Without the right funnel, every rupee spent on ads is money flushed.', fix: 'Performance marketing + CRO' },
  { emoji: '🤯', problem: '"Our team is drowning in repetitive tasks."', desc: 'Manual follow-ups, data entry, reporting — your team\'s doing work a bot should handle.', fix: 'AI automation + workflow bots' },
  { emoji: '👻', problem: '"We\'re invisible on Google."', desc: 'Your competitors rank on page 1. You\'re on page 4. That\'s not a visibility problem — it\'s a revenue problem.', fix: 'AI-powered SEO' },
  { emoji: '🧩', problem: '"Our tools don\'t talk to each other."', desc: 'CRM, WhatsApp, payment gateway, ERP — all siloed. You copy-paste data between them daily.', fix: 'API & systems integration' },
  { emoji: '🏗️', problem: '"Our SaaS idea is stuck in our heads."', desc: 'You have the vision. You need a technical team who can build it fast without burning your budget.', fix: 'SaaS & product development' },
];

export default function PainSection() {
  return (
    <section style={{ padding: '8vw 0', position: 'relative' }}>
      
      <div className="glow-orb" style={{ right: '-10%', top: '20%', background: 'radial-gradient(circle, rgba(239,68,68,0.08) 0%, rgba(0,0,0,0) 60%)' }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 10 }}>
        <div className="eyebrow" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--ink2)' }}>Sound familiar?</div>
        <h2 className="h-section" style={{ marginBottom: '12px' }}>If you&apos;re nodding, we need to talk.</h2>
        <p className="lead" style={{ marginBottom: '48px' }}>These are the exact problems we fix — usually within the first 30 days.</p>

        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 24px 40px rgba(0,0,0,0.4)', backdropFilter: 'blur(12px)' }}>
          {painPoints.map((p, i) => (
            <div key={i}
              style={{ background: 'var(--surface-alt)', padding: '40px 32px', transition: 'background 0.2s', cursor: 'default', position: 'relative', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.03)' : 'none', borderRight: (i + 1) % 3 !== 0 ? '1px solid rgba(255,255,255,0.03)' : 'none' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.02)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--surface-alt)')}
            >
              <span style={{ fontSize: '28px', marginBottom: '16px', display: 'block', textShadow: '0 4px 12px rgba(0,0,0,0.4)' }}>{p.emoji}</span>
              <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--ink)', marginBottom: '10px', lineHeight: 1.5 }}>{p.problem}</div>
              <div style={{ fontSize: '14px', color: 'var(--ink3)', lineHeight: 1.65 }}>{p.desc}</div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '20px', fontSize: '12px', fontWeight: 600, color: 'var(--brand)', background: 'rgba(255,92,0,0.1)', padding: '6px 14px', borderRadius: '100px', border: '1px solid rgba(255,92,0,0.15)' }}>
                <ArrowRight size={12} strokeWidth={2.5} />We fix: {p.fix}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
