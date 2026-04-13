'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  { 
    name: 'Hawaiadda', 
    role: 'Client Partner',
    t: '“We initially approached them for a specific solution, but what we got was a complete rethink of how our systems should work.\n\nFrom automation to platform improvements, everything was approached with clarity and execution speed. The team doesn’t just deliver — they understand the business behind it.\n\nWhat stood out the most was their ability to simplify complex problems and turn them into scalable systems.”' 
  },
  { 
    name: 'Auraynia', 
    role: 'Client Partner',
    t: '“Working with them felt less like hiring an agency and more like bringing in a strategic partner.\n\nThey helped us structure our product, refine the experience, and build systems that actually supported growth. What stood out was their Agentic AI analytics layer — it didn’t just show data, it actively surfaced insights and guided decisions.\n\nThe founders are extremely sharp — they think in terms of outcomes, not deliverables. The entire engagement felt structured, fast, and deeply aligned with our business goals.”' 
  },
  { 
    name: 'SariVerse', 
    role: 'Client Partner',
    t: '“They transformed how we approached both technology and growth.\n\nFrom building scalable eCommerce systems to setting up automation and performance strategies, everything was aligned towards measurable impact.\n\nThe team moves fast, communicates clearly, and executes with a level of ownership that’s rare to find.”' 
  },
  { 
    name: 'Clean4Wheels', 
    role: 'Client Partner',
    t: '“We were struggling with fragmented systems and manual processes.\n\nTheir team stepped in, streamlined our operations, and built automation workflows that immediately improved efficiency.\n\nThe difference was visible within weeks. It’s not just what they build — it’s how they think.”' 
  },
  { 
    name: 'Narrativlyy', 
    role: 'Client Partner',
    t: '“They bring a rare combination of technical depth and strategic thinking.\n\nWhether it’s AI, product, or growth systems, they approach everything with structure and intent.\n\nThe collaboration felt seamless, and the team consistently delivered beyond expectations.\n\nIt’s clear they’re building something much bigger than a typical agency.”' 
  }
];

export default function Testimonials() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const [isPaused, setIsPaused] = useState(false);

  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section style={{ padding: '8vw 0 1vw', position: 'relative', overflow: 'hidden' }}>
      
      <div className="glow-orb" style={{ top: '20%', right: '10%', background: 'radial-gradient(circle, rgba(245,158,11,0.06) 0%, rgba(0,0,0,0) 60%)', width: '800px', height: '800px' }} />

      <div style={{ position: 'relative', zIndex: 10 }}>
        <div className="wrap" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="eyebrow" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--ink)' }}>Don&apos;t just take our word for it</div>
          <h2 className="h-section">Trusted by ambitious teams</h2>
        </div>

        {/* Cinematic Auto-Scrolling Conveyor Belt */}
        <div 
          className="marquee-container" 
          style={{ width: '100%', maxWidth: '100vw', overflow: 'hidden', padding: '20px 0' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Edge Gradients for smooth fade in/out */}
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '10vw', background: 'linear-gradient(to right, var(--surface) 0%, transparent 100%)', zIndex: 20, pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '10vw', background: 'linear-gradient(to left, var(--surface) 0%, transparent 100%)', zIndex: 20, pointerEvents: 'none' }} />

          <div 
            className="marquee-track"
            style={{ 
              display: 'flex', 
              gap: '3vw', 
              width: 'max-content',
              animation: 'marquee 50s linear infinite',
              animationPlayState: isPaused ? 'paused' : 'running',
              paddingLeft: '3vw' // Offset equivalent to gap
            }}
          >
            {duplicatedReviews.map((r, arrayIndex) => {
              const i = arrayIndex % reviews.length; // True index logic ensures both copies expand together
              const isExp = expanded[i];
              const snippet = r.t.split('\n\n')[0] + (r.t.split('\n\n').length > 1 && !isExp ? '...' : '');

              return (
                <motion.div 
                  layout 
                  key={arrayIndex} 
                  className="glass" 
                  style={{ 
                    padding: '40px', 
                    borderRadius: '24px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '24px', 
                    overflow: 'hidden',
                    width: 'clamp(350px, 30vw, 450px)', // Fixed width to prevent structural snapping
                    flexShrink: 0
                  }}
                >
                  <motion.div layout style={{ display: 'flex', gap: '6px' }}>
                    {[1,2,3,4,5].map(s => <Star key={s} size={18} fill="var(--yellow)" color="var(--yellow)" style={{ filter: 'drop-shadow(0 0 4px rgba(245,158,11,0.5))' }} />)}
                  </motion.div>
                  
                  <motion.div layout style={{ fontSize: '15px', color: 'var(--ink)', lineHeight: 1.7, flexGrow: 1, whiteSpace: 'pre-wrap' }}>
                    <span style={{ fontWeight: isExp ? 400 : 500, color: isExp ? 'var(--ink2)' : 'var(--ink)' }}>
                      {isExp ? r.t : snippet}
                    </span>
                  </motion.div>

                  {r.t.split('\n\n').length > 1 && (
                    <motion.button 
                      layout
                      onClick={() => setExpanded(p => ({ ...p, [i]: !p[i] }))} 
                      style={{ background: 'none', border: 'none', color: '#fff', fontSize: '13px', fontWeight: 700, padding: 0, textAlign: 'left', cursor: 'pointer', display: 'inline-block', width: 'fit-content', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '2px' }}
                    >
                      {isExp ? 'Read less' : 'Read full story'}
                    </motion.button>
                  )}

                  <motion.div layout style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '12px' }}>
                    <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 700, color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }}>
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--ink)', letterSpacing: '0.5px' }}>{r.name}</div>
                      <div style={{ fontSize: '13px', color: 'var(--ink3)' }}>{r.role}</div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
