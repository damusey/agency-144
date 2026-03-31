'use client';

import { ArrowRight, Bot, Code, LineChart } from 'lucide-react';

const services = [
  {
    icon: <LineChart size={24} color="#fff" />, bg: 'var(--surface-alt)',
    title: 'Performance Marketing & UI',
    desc: 'Stop renting attention. Own it. We build high-converting landing pages paired with hyper-targeted ad campaigns.',
    points: ['Conversion-optimized redesign', 'Meta & Google Ads management', 'A/B testing & CRO']
  },
  {
    icon: <Bot size={24} color="#fff" />, bg: 'var(--brand)',
    title: 'AI Automation & Workflows',
    desc: 'Free your team from spreadsheet hell. We build custom AI agents that handle lead qualification, data entry, and ops.',
    points: ['Custom CRM & ERP integrations', 'AI-powered customer support', 'Zapier/Make automated workflows']
  },
  {
    icon: <Code size={24} color="#fff" />, bg: '#059669',
    title: 'Full-Stack Development',
    desc: 'From complex web apps to internal tools, we write scalable code that just works. No spaghetti, no over-engineering.',
    points: ['Next.js / React web applications', 'Secure API development', 'SaaS platform architecture']
  }
];

export default function ServicesSection() {
  return (
    <section id="services" style={{ padding: '8vw 0', position: 'relative' }}>
      
      {/* Background glow */}
      <div className="glow-orb" style={{ top: '30%', left: '50%', transform: 'translate(-50%, -50%)', background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 70%)', width: '1000px', height: '1000px' }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="eyebrow" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--ink)' }}>Our Services</div>
          <h2 className="h-section">One team. Every problem solved.</h2>
          <p className="lead" style={{ margin: '0 auto' }}>
            We don&apos;t just give advice — we build the engine. Whether it&apos;s code, copy, or campaigns, our senior team executes end-to-end.
          </p>
        </div>

        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3vw' }}>
          {services.map((s, i) => (
            <div key={i} className="glass" style={{ borderRadius: '24px', padding: '40px', display: 'flex', flexDirection: 'column', transition: 'transform 0.3s, box-shadow 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.2)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 16px 40px -4px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'; }}
            >
              <div style={{ width: 56, height: 56, borderRadius: '16px', background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px', boxShadow: '0 4px 20px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)' }}>
                {s.icon}
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--ink)', marginBottom: '16px', letterSpacing: '-0.3px' }}>{s.title}</h3>
              <p style={{ fontSize: '15px', color: 'var(--ink3)', lineHeight: 1.6, marginBottom: '32px', flexGrow: 1 }}>{s.desc}</p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {s.points.map((p, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: 'var(--ink2)', lineHeight: 1.4 }}>
                    <ArrowRight size={15} color={i === 1 ? 'var(--brand)' : 'var(--ink)'} style={{ marginTop: '2px', flexShrink: 0, opacity: i === 1 ? 1 : 0.5 }} strokeWidth={2.5} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
