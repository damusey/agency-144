'use client';

import { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Code, Settings, Bot, BarChart3, LineChart, Palette, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    icon: <Code size={32} color="#fff" />, bg: '#FF5C00',
    filterLabel: 'Building a scalable product',
    title: 'Build Products That Scale',
    desc: 'Design and develop high-performance platforms built for exponential multi-channel growth. We leave the messy code behind.',
    points: ['Scalable web & mobile applications', 'SaaS products & system architecture', 'Conversion-focused eCommerce platforms']
  },
  {
    icon: <Settings size={32} color="#fff" />, bg: '#059669',
    filterLabel: 'Drowning in manual tasks',
    title: 'Automate What Slows You Down',
    desc: 'Streamline your operations with intelligent automation. Stop paying humans to do what a highly engineered bot can do perfectly.',
    points: ['Workflow automation systems', 'API & platform integrations', 'Digital transformation strategy']
  },
  {
    icon: <Bot size={32} color="#fff" />, bg: '#7C3AED',
    title: 'Deploy AI That Delivers',
    filterLabel: 'Capitalizing on AI capabilities',
    desc: 'Strip away the hype and turn Artificial Intelligence into real, measurable business outcomes with practical implementations.',
    points: ['Custom AI & GenAI solutions', 'AI-powered applications & agents', 'Chatbots & voice automation']
  },
  {
    icon: <BarChart3 size={32} color="#fff" />, bg: '#D97706',
    title: 'Turn Data Into Clarity',
    filterLabel: 'Flying blind with analytics',
    desc: 'Make faster, smarter decisions with structured insights. We build real-time dashboards so you know exactly what is bleeding.',
    points: ['Analytics & reporting systems', 'Data visualization dashboards', 'Performance tracking frameworks']
  },
  {
    icon: <LineChart size={32} color="#fff" />, bg: '#E11D48',
    title: 'Drive Growth That Compounds',
    filterLabel: 'Low conversion & retention',
    desc: 'Acquire, convert, and retain customers with surgically precise scalable strategies and ruthless performance marketing.',
    points: ['Performance marketing campaigns', 'AI-driven SEO strategies', 'High-ticket funnel engineering']
  },
  {
    icon: <Palette size={32} color="#fff" />, bg: '#2563EB',
    title: 'Design Brands That Stand Out',
    filterLabel: 'Outdated, low-trust UX/UI',
    desc: 'Create impactful identities and seamless digital experiences that instantly build undeniable trust and market authority.',
    points: ['UI/UX design systems', 'Website overhauls & facelifts', 'Psychological conversion design']
  }
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" style={{ padding: '3vw 0 8vw', position: 'relative', minHeight: '800px' }}>
      
      {/* Background glow */}
      <div className="glow-orb" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: `radial-gradient(circle, ${services[activeTab].bg}15 0%, rgba(0,0,0,0) 60%)`, width: '1000px', height: '1000px', transition: 'background 0.5s ease' }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Header Block */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="eyebrow" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--ink)' }}>Our Solutions</div>
          <h2 className="h-section">What is your primary bottleneck right now?</h2>
        </div>

        {/* ── Diagnostic Pills ── */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', maxWidth: '900px', margin: '0 auto 80px' }}>
          {services.map((s, i) => {
            const isActive = activeTab === i;
            return (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                style={{
                  padding: '12px 24px',
                  borderRadius: '100px',
                  fontSize: '15px',
                  fontWeight: isActive ? 600 : 500,
                  transition: 'all 0.3s ease',
                  border: `1px solid ${isActive ? s.bg + '50' : 'rgba(255,255,255,0.1)'}`,
                  background: isActive ? s.bg + '15' : 'rgba(255,255,255,0.02)',
                  color: isActive ? '#fff' : 'var(--ink3)',
                  boxShadow: isActive ? `0 4px 20px ${s.bg}20` : 'none',
                  cursor: 'pointer'
                }}
              >
                {s.filterLabel}
              </button>
            );
          })}
        </div>

        {/* ── Dynamic Solution Display Stage ── */}
        <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>

          {/* ── Carousel Left Arrow ── */}
          <button
            onClick={() => setActiveTab((activeTab - 1 + services.length) % services.length)}
            style={{
              position: 'absolute',
              left: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 20,
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(12px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--ink2)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'var(--ink2)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; }}
          >
            <ChevronLeft size={20} />
          </button>

          {/* ── Carousel Right Arrow ── */}
          <button
            onClick={() => setActiveTab((activeTab + 1) % services.length)}
            style={{
              position: 'absolute',
              right: '-60px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 20,
              width: 44,
              height: 44,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(12px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--ink2)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'var(--ink2)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; }}
          >
            <ChevronRight size={20} />
          </button>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="glass"
              style={{
                borderRadius: '32px',
                padding: 'clamp(24px, 3vw, 48px) clamp(40px, 5vw, 64px)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '60px',
                alignItems: 'center',
                boxShadow: `0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1), 0 0 60px ${services[activeTab].bg}10`,
                border: `1px solid ${services[activeTab].bg}30`,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              
              {/* ── Dynamic Background Image ── */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/service_bg_${activeTab + 1}.webp`}
                alt=""
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.15,
                  zIndex: 0,
                  pointerEvents: 'none',
                }}
              />
              {/* Dark overlay for readability */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(10,10,11,0.7) 0%, rgba(10,10,11,0.5) 50%, rgba(10,10,11,0.8) 100%)',
                zIndex: 1,
                pointerEvents: 'none',
              }} />

              {/* Left Column: The Core */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ width: 72, height: 72, borderRadius: '20px', background: services[activeTab].bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px', boxShadow: `0 10px 30px -5px ${services[activeTab].bg}`, border: '1px solid rgba(255,255,255,0.2)' }}>
                  {services[activeTab].icon}
                </div>
                <h3 style={{ fontSize: 'clamp(32px, 4vw, 42px)', fontWeight: 800, color: '#fff', marginBottom: '20px', letterSpacing: '-1px', lineHeight: 1.1 }}>
                  {services[activeTab].title}
                </h3>
                <p style={{ fontSize: '18px', color: 'var(--ink2)', lineHeight: 1.6, marginBottom: '40px' }}>
                  {services[activeTab].desc}
                </p>
                <button className="btn btn-primary" style={{ background: services[activeTab].bg, boxShadow: `0 4px 20px ${services[activeTab].bg}40` }}>
                  Solve this bottleneck <ArrowRight size={16} />
                </button>
              </div>

              {/* Right Column: The Deliverables */}
              <div style={{ position: 'relative', zIndex: 2, background: 'rgba(0,0,0,0.3)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(12px)' }}>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--ink3)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '24px' }}>
                  What you actually get:
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {services[activeTab].points.map((p, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '16px', color: 'var(--ink)', fontWeight: 500 }}>
                      <CheckCircle2 size={24} color={services[activeTab].bg} style={{ flexShrink: 0 }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* ── Step Indicator Dots ── */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                style={{
                  width: activeTab === i ? 24 : 8,
                  height: 8,
                  borderRadius: '100px',
                  background: activeTab === i ? services[i].bg : 'rgba(255,255,255,0.15)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
