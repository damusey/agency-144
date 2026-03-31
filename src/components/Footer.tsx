'use client';

import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ padding: '60px 0', background: '#050505', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '32px' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font)', fontWeight: 800, fontSize: '18px', color: '#fff', letterSpacing: '-0.4px' }}>
          <div style={{ width: 26, height: 26, background: 'var(--brand)', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 10px rgba(255,92,0,0.3)' }}>
            <ArrowRight size={13} color="#fff" strokeWidth={2.5} />
          </div>
          Flowmatic
        </div>

        <div style={{ display: 'flex', gap: '32px', fontSize: '14px', color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>
          {['Services', 'Work', 'About', 'Blog', 'Contact'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s' }}
               onMouseEnter={e => e.currentTarget.style.color = '#fff'}
               onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>
              {l}
            </a>
          ))}
        </div>

        <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.2)' }}>
          © 2026 Flowmatic. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
