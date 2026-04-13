'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const steps = [
  {
    n: '01',
    t: 'Discover What’s Holding You Back',
    d: [
      'We go beyond surface-level understanding.',
      'We break down your current systems, funnels, and workflows to identify exactly where growth is stuck — or where untapped opportunities exist.',
      'Whether you’re starting from scratch or scaling an existing setup, we align deeply with your business goals before making a single move.'
    ]
  },
  {
    n: '02',
    t: 'Define the System That Wins',
    d: [
      'Within days, you get a clear, no-fluff roadmap.',
      'What we will build. How it will work. What outcomes to expect.',
      'No guesswork. No overpromising. Just a structured plan designed to move your business forward with precision.'
    ]
  },
  {
    n: '03',
    t: 'Build, Launch, and Execute Fast',
    d: [
      'This is where things start moving.',
      'We design, build, and deploy — from products and automation to campaigns and AI systems. You see real progress, not just updates.',
      'Everything we ship is focused on one thing: impact.'
    ]
  },
  {
    n: '04',
    t: 'Optimize What Matters',
    d: [
      'Once the foundation is live, we refine.',
      'We test, iterate, and improve every layer — from user journeys to conversion flows to system performance.',
      'Small improvements here lead to massive gains over time.'
    ]
  },
  {
    n: '05',
    t: 'Scale What Works',
    d: [
      'Now we double down.',
      'We scale campaigns, expand systems, and push what’s working to the next level — without breaking what’s already built.',
      'At this stage, your business isn’t just running — it’s compounding.'
    ]
  }
];

export default function ProcessSection() {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  
  // Mathematical scroll sync 
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest: number) => {
    // 5 steps = indices 0 to 4. We calculate the exact segment we are in.
    const stepRatio = 1 / (steps.length - 1);
    let index = Math.round(latest / stepRatio);
    // Safety clamp
    index = Math.max(0, Math.min(index, steps.length - 1));
    if (index !== activeStep) {
      setActiveStep(index);
    }
  });

  return (
    <section style={{ background: 'var(--surface-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', position: 'relative' }}>
      
      {/* Header */}
      <div className="wrap" style={{ paddingTop: '8vw', paddingBottom: '4vw' }}>
        <div className="eyebrow" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--ink)' }}>How we work</div>
        <h2 className="h-section">From idea to scale — with clarity.</h2>
        <p className="lead">A structured approach designed to take you from concept to compounding growth.</p>
      </div>

      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'minmax(340px, 1fr) 1.6fr', gap: '8vw', paddingBottom: '10vw', alignItems: 'start' }} ref={containerRef}>
        
        {/* ── Left Sticky Timeline ── */}
        <div className="hidden lg:block hidden-mobile" style={{ position: 'sticky', top: '25vh' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', position: 'relative' }}>
            
            {/* The Track */}
            <div style={{ position: 'absolute', left: '23px', top: '0', bottom: '0', width: '2px', background: 'rgba(255,255,255,0.05)', zIndex: 0 }} />
            
            {/* The Neon Fluid fill */}
            <motion.div style={{ position: 'absolute', left: '23px', top: '0', bottom: '0', width: '2px', background: 'var(--brand)', scaleY: scrollYProgress, transformOrigin: 'top', filter: 'drop-shadow(0 0 10px rgba(255,92,0,0.8))', zIndex: 1 }} />

            {steps.map((s, i) => {
              const isActive = activeStep >= i;
              return (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '32px', zIndex: 2, cursor: 'default' }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: isActive ? 'var(--brand)' : 'var(--surface-alt)', border: `2px solid ${isActive ? 'var(--brand)' : 'rgba(255,255,255,0.1)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', fontWeight: 700, color: isActive ? '#fff' : 'var(--ink3)', transition: 'all 0.5s ease', boxShadow: isActive ? '0 0 24px rgba(255,92,0,0.4)' : 'none' }}>
                    {s.n}
                  </div>
                  <div style={{ fontSize: 'clamp(18px, 1.5vw, 22px)', fontWeight: 700, color: isActive ? '#fff' : 'var(--ink3)', transition: 'all 0.5s ease', transform: isActive ? 'translateX(4px)' : 'none' }}>
                    {s.t}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Right Content Scroll ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30vh', padding: '10vh 0 30vh' }}>
          {steps.map((s, i) => {
            const isActive = activeStep === i;
            return (
              <div key={i} style={{ opacity: isActive ? 1 : 0.3, transition: 'opacity 0.5s ease', transform: isActive ? 'scale(1)' : 'scale(0.98)' }}>
                {/* Mobile only step indicator */}
                <div className="lg:hidden" style={{ fontSize: '14px', fontWeight: 700, color: 'var(--brand)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>Step {s.n}</div>
                
                <h3 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 800, color: 'var(--ink)', marginBottom: '32px', letterSpacing: '-1.5px', lineHeight: 1.1 }}>{s.t}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {s.d.map((paragraph, idx) => (
                    <p key={idx} style={{ fontSize: 'clamp(16px, 1.4vw, 20px)', color: 'var(--ink2)', lineHeight: 1.6, maxWidth: '700px', margin: 0, fontWeight: idx === s.d.length - 1 && i === steps.length - 1 ? 600 : 400 }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
