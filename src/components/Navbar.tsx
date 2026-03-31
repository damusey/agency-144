'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

const links = ['Services', 'Work', 'Pricing', 'About'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      background: scrolled ? 'rgba(10, 10, 11, 0.6)' : 'transparent',
      backdropFilter: scrolled ? 'blur(24px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      transition: 'all 0.3s ease',
    }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font)', fontWeight: 800, fontSize: '18px', color: 'var(--ink)', cursor: 'pointer', letterSpacing: '-0.4px' }}>
          <div style={{ width: 26, height: 26, background: 'var(--brand)', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 10px rgba(255,92,0,0.4)' }}>
            <ArrowRight size={13} color="#fff" strokeWidth={2.5} />
          </div>
          Flowmatic
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex glass" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px', borderRadius: '100px', background: scrolled ? 'rgba(255,255,255,0.02)' : 'rgba(255, 255, 255, 0.04)' }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              style={{ fontSize: '13.5px', color: 'var(--ink2)', textDecoration: 'none', transition: 'all 0.2s', fontWeight: 500, padding: '8px 20px', borderRadius: '100px' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--ink2)'; e.currentTarget.style.background = 'transparent'; }}
            >{l}</a>
          ))}
        </div>
        
        <div className="hidden md:block">
          <button className="btn btn-primary" style={{ padding: '10px 22px', fontSize: '13.5px', borderRadius: '100px' }}
            onMouseEnter={e => { const b = e.currentTarget; b.style.background = 'var(--brand-d)'; b.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { const b = e.currentTarget; b.style.background = 'var(--brand)'; b.style.transform = 'translateY(0)'; }}
          >
            Book Free Call
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink)' }}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden glass" style={{ position: 'absolute', top: '80px', left: '4%', right: '4%', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', borderRadius: '24px' }}>
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`}
                style={{ fontSize: '16px', color: 'var(--ink)', textDecoration: 'none', fontWeight: 500 }}
                onClick={() => setMenuOpen(false)}>{l}</a>
            ))}
            <button className="btn btn-primary" style={{ width: '100%', marginTop: '8px', justifyContent: 'center' }}>Book Free Call</button>
          </div>
        )}
      </div>
    </nav>
  );
}
