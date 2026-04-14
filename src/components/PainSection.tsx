'use client';

import { ArrowRight, TrendingDown, Clock, Ghost, Unplug, MonitorX, Box } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const painPoints = [
  { 
    shortTitle: 'Ads ROI',
    icon: <TrendingDown size={32} color="#EF4444" />, 
    problem: '"We\'re spending on ads but getting zero ROI."', 
    desc: 'Without the right funnel, every rupee spent on ads is money flushed. We seal the leaks and maximize return.', 
    fix: 'Performance marketing + CRO', 
  },
  { 
    shortTitle: 'Manual Tasks',
    icon: <Clock size={32} color="#EF4444" />, 
    problem: '"Our team is drowning in repetitive tasks."', 
    desc: 'Manual follow-ups, data entry, reporting — your team\'s doing work a bot should handle.', 
    fix: 'AI automation + workflows', 
  },
  { 
    shortTitle: 'Bad SEO',
    icon: <Ghost size={32} color="#EF4444" />, 
    problem: '"We\'re invisible on Google."', 
    desc: 'Your competitors rank on page 1. You\'re on page 4. That is an unacceptable revenue leak.', 
    fix: 'AI-powered SEO', 
  },
  { 
    shortTitle: 'Siloed Tools',
    icon: <Unplug size={32} color="#EF4444" />, 
    problem: '"Our tools don\'t talk to each other."', 
    desc: 'CRM, payment gateway, ERP — all siloed. You are wasting hours manually syncing data.', 
    fix: 'API & integrations', 
  },
  { 
    shortTitle: 'Outdated UX',
    icon: <MonitorX size={32} color="#EF4444" />, 
    problem: '"Our website visitor bounce rate is massive."', 
    desc: 'A slow, ugly website kills trust before you say a word. Visitors judge you in 0.05 seconds.', 
    fix: 'UI/UX + conversion design', 
  },
  { 
    shortTitle: 'Stuck Ideas',
    icon: <Box size={32} color="#EF4444" />, 
    problem: '"Our SaaS idea is stuck in our heads."', 
    desc: 'You have the vision. You need a fast, lean technical team who can build it without burning your budget.', 
    fix: 'SaaS development', 
  },
];

export default function PainSection() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Preload all background images on mount to prevent repeated network fetches
  useEffect(() => {
    painPoints.forEach((_, i) => {
      const img = new Image();
      img.src = `/images/pain_bg_${i + 1}.webp`;
    });
  }, []);

  useEffect(() => {
    if (isHovered) return;
    
    intervalRef.current = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % painPoints.length);
    }, 1250);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered]);

  return (
    <section style={{ padding: '8vw 0 3vw', position: 'relative', overflow: 'hidden' }}>
      
      {/* Danger/Urgency Glows */}
      <div className="glow-orb" style={{ right: '-10%', top: '30%', background: 'radial-gradient(circle, rgba(239, 68, 68, 0.1) 0%, rgba(0,0,0,0) 60%)', width: 'min(800px, 100vw)', height: 'min(800px, 100vw)' }} />
      <div className="glow-orb" style={{ left: '-5%', bottom: '-10%', background: 'radial-gradient(circle, rgba(234, 88, 12, 0.08) 0%, rgba(0,0,0,0) 60%)', width: 'min(600px, 100vw)', height: 'min(600px, 100vw)' }} />

      <div className="wrap" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Header Block */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 80px)' }}>
          <div className="eyebrow" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#EF4444' }}>Diagnosis</div>
          <h2 className="h-section">If you&apos;re nodding, we need to talk.</h2>
          <p className="lead" style={{ margin: '0 auto' }}>
            We systematically diagnose bottlenecks and engineer direct paths to revenue.
          </p>
        </div>

        {/* ── Diagnostic Terminal UI ── */}
        <div 
          className="glass"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ 
            display: 'flex', flexDirection: 'column', 
            borderRadius: '24px', overflow: 'hidden', 
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
            background: 'rgba(10,10,11,0.6)'
          }}
        >
          
          {/* Mac Terminal Header */}
          <div style={{ height: '48px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', padding: '0 24px', background: 'rgba(0,0,0,0.2)' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#EF4444', opacity: 0.6 }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#EAB308', opacity: 0.6 }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#22C55E', opacity: 0.6 }} />
            </div>
            <div style={{ flex: 1, textAlign: 'center', fontSize: '13px', color: 'var(--ink3)', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase' }}>
              system_diagnostics.exe
            </div>
            <div style={{ width: 44 }} /> {/* purely visual spacer to counterbalance MacOS dots */}
          </div>

          <div className="flex flex-col lg:flex-row min-h-[400px]">
             
             {/* Left Nav Bar */}
             <div className="w-full lg:w-[280px] flex lg:flex-col overflow-x-auto lg:overflow-x-hidden border-b lg:border-b-0 lg:border-r border-white/5 shrink-0" style={{ background: 'rgba(255,255,255,0.01)' }}>
               {painPoints.map((p, i) => {
                 const isActive = activeTab === i;
                 return (
                   <div 
                     key={i} 
                     onClick={() => setActiveTab(i)}
                     style={{ 
                       padding: 'clamp(14px, 2vw, 20px) clamp(16px, 2.5vw, 24px)', 
                       cursor: 'pointer',
                       borderLeft: `3px solid ${isActive ? '#EF4444' : 'transparent'}`,
                       background: isActive ? 'linear-gradient(90deg, rgba(239, 68, 68, 0.1) 0%, transparent 100%)' : 'transparent',
                       transition: 'all 0.2s ease',
                       display: 'flex', alignItems: 'center', gap: '16px',
                       whiteSpace: 'nowrap'
                     }}
                   >
                     <div style={{ color: isActive ? '#EF4444' : 'rgba(255,255,255,0.2)', transition: 'color 0.2s', width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                       {isActive ? p.icon : <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'currentColor' }} />}
                     </div>
                     <span style={{ fontSize: '15px', fontWeight: isActive ? 600 : 500, color: isActive ? '#fff' : 'var(--ink3)' }}>
                       {p.shortTitle}
                     </span>
                   </div>
                 );
               })}
             </div>

             {/* Right Display Monitor */}
             <div className="flex-1 flex" style={{ padding: 'clamp(20px, 3vw, 48px) clamp(20px, 5vw, 80px)', background: 'linear-gradient(to bottom right, rgba(0,0,0,0.2), rgba(0,0,0,0.5))', position: 'relative', overflow: 'hidden' }}>
               
               {/* Dynamic themed background */}
               <AnimatePresence mode="wait">
                 <motion.img
                   key={`pain-bg-${activeTab}`}
                   src={`/images/pain_bg_${activeTab + 1}.webp`}
                   alt=""
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 0.35 }}
                   exit={{ opacity: 0 }}
                   transition={{ duration: 0.4 }}
                   style={{
                     position: 'absolute',
                     inset: 0,
                     width: '100%',
                     height: '100%',
                     objectFit: 'cover',
                     zIndex: 0,
                     pointerEvents: 'none',
                   }}
                 />
               </AnimatePresence>
               {/* Lighter overlay for readability */}
               <div style={{
                 position: 'absolute',
                 inset: 0,
                 background: 'linear-gradient(135deg, rgba(10,10,11,0.5) 0%, rgba(10,10,11,0.3) 50%, rgba(10,10,11,0.6) 100%)',
                 zIndex: 1,
                 pointerEvents: 'none',
               }} />
               <AnimatePresence mode="wait">
                 <motion.div 
                   key={activeTab}
                   initial={{ opacity: 0, y: 15 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -15 }}
                   transition={{ duration: 0.2, ease: 'easeOut' }}
                   className="flex flex-col justify-center h-full w-full"
                   style={{ position: 'relative', zIndex: 2 }}
                 >
                   
                   {/* Danger Badge */}
                   <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 700, color: '#EF4444', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '24px', background: 'rgba(239, 68, 68, 0.08)', padding: '6px 12px', borderRadius: '4px', border: '1px solid rgba(239, 68, 68, 0.2)', width: 'max-content' }}>
                     <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#EF4444', animation: 'blink 2s infinite' }} />
                     Detected Issue
                   </div>

                   <h3 style={{ fontSize: 'clamp(22px, 5vw, 42px)', fontWeight: 800, color: '#fff', marginBottom: 'clamp(16px, 3vw, 24px)', letterSpacing: '-1px', lineHeight: 1.15 }}>
                     {painPoints[activeTab].problem}
                   </h3>

                   <p style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', color: 'var(--ink2)', lineHeight: 1.6, maxWidth: '600px', marginBottom: 'clamp(28px, 5vw, 48px)' }}>
                     {painPoints[activeTab].desc}
                   </p>

                   {/* Solution Pill */}
                   <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 2vw, 16px)', flexWrap: 'wrap' }}>
                     <div className="mobile-hide" style={{ width: 'min(40px, 100vw)', height: '1px', background: 'var(--border)' }} />
                     <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: 'clamp(13px, 1.3vw, 15px)', fontWeight: 600, color: 'var(--brand)', background: 'rgba(255,92,0,0.1)', padding: 'clamp(8px, 1vw, 10px) clamp(16px, 2vw, 24px)', borderRadius: '100px', border: '1px solid rgba(255,92,0,0.15)' }}>
                       <ArrowRight size={16} strokeWidth={2.5} /> We align: {painPoints[activeTab].fix}
                     </div>
                   </div>

                 </motion.div>
               </AnimatePresence>
             </div>

          </div>
        </div>

      </div>
    </section>
  );
}
