'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "Do you offer white-label services?", a: "No. We act as an extension of your internal team. Direct communication means faster shipping and fewer crossed wires." },
  { q: "What's the typical timeline?", a: "Most initial infrastructure (redesign, data pipelines, basic agents) takes 3-4 weeks. Then we shift to monthly iterative sprints." },
  { q: "Who owns the code/designs?", a: "You do. 100%. Everything we build lives in your accounts (AWS, Vercel, Figma, etc.). If you leave, you keep the engine." },
  { q: "How are you different from a standard dev shop?", a: "Dev shops build features. We build revenue engines. We won't let you pay us to build something that won't make or save you money." }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section style={{ padding: '5vw 0', position: 'relative' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(f => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.a
              }
            }))
          })
        }}
      />
      <div className="glow-orb" style={{ top: '50%', right: '-10%', transform: 'translateY(-50%)', background: 'radial-gradient(circle, rgba(255,158,11,0.04) 0%, rgba(0,0,0,0) 60%)' }} />

      <div className="wrap grid-stack-mob" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '8vw', alignItems: 'start', position: 'relative', zIndex: 10 }}>
        
        {/* Left */}
        <div>
          <div className="eyebrow" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--ink)' }}>FAQ</div>
          <h2 className="h-section">Got questions?</h2>
          <p className="lead" style={{ marginBottom: '32px' }}>
            We play with open cards. If you don&apos;t see your question here, let&apos;s talk.
          </p>
          <button className="btn btn-primary" style={{ boxShadow: '0 4px 20px rgba(255,92,0,0.2)' }}>Book a discovery call</button>
        </div>

        {/* Right */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((f, i) => (
            <div key={i} className="glass"
              onClick={() => setOpen(open === i ? null : i)}
              style={{ borderRadius: '16px', padding: 'clamp(18px, 2.5vw, 24px) clamp(20px, 3vw, 32px)', cursor: 'pointer', transition: 'all 0.3s ease', background: open === i ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.02)', border: open === i ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(255,255,255,0.05)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 600, fontSize: 'clamp(14px, 1.5vw, 16px)', color: 'var(--ink)', gap: '12px' }}>
                {f.q}
                <ChevronDown size={20} style={{ transform: open === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s', color: open === i ? 'var(--brand)' : 'var(--ink3)' }} />
              </div>
              <div style={{ height: open === i ? 'auto' : 0, overflow: 'hidden', opacity: open === i ? 1 : 0, transition: 'opacity 0.3s' }}>
                <p style={{ marginTop: '16px', fontSize: '15px', color: 'var(--ink2)', lineHeight: 1.6 }}>{f.a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
