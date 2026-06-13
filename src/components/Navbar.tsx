'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { ArrowRight, Menu, X, Sparkles, LineChart, Bot, Boxes, ChevronDown } from 'lucide-react';
import { solutionCategories, iconMap } from '@/data/solutions';

export const navLinks = [
  { name: 'Solutions', href: '/#services' },
  { name: 'Platform', href: '/platform/flowai' },
  { name: 'Work', href: '/work' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'FAQ', href: '/faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [mobSolutionsOpen, setMobSolutionsOpen] = useState(false);
  const [mobPlatformOpen, setMobPlatformOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const platformRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLAnchorElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const platformTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
    setPlatformOpen(false);
  };

  const scheduleMegaClose = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 200);
  };

  const openPlatform = () => {
    if (platformTimer.current) clearTimeout(platformTimer.current);
    setPlatformOpen(true);
    setMegaOpen(false);
  };

  const schedulePlatformClose = () => {
    platformTimer.current = setTimeout(() => setPlatformOpen(false), 200);
  };

  const cat = solutionCategories[activeCategory];
  const IconComp = iconMap[cat.iconName];

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
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', height: 42 }}>
            <img src="/logo.png" alt="Oktuv" style={{ objectFit: 'contain', width: 'auto', height: '100%' }} />
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex glass" style={{ alignItems: 'center', gap: '8px', padding: '6px', borderRadius: '100px', background: scrolled ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.04)' }}>
          {navLinks.map(l => (
            l.name === 'Solutions' ? (
              <Link
                key={l.name}
                ref={triggerRef}
                href={l.href}
                onClick={e => { e.preventDefault(); openMega(); }}
                onMouseEnter={(e) => { openMega(); e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
                onMouseLeave={(e) => { scheduleMegaClose(); e.currentTarget.style.color = 'var(--ink2)'; e.currentTarget.style.background = 'transparent'; }}
                style={{ fontSize: '13.5px', color: megaOpen ? 'var(--ink)' : 'var(--ink2)', textDecoration: 'none', transition: 'all 0.2s', fontWeight: 500, padding: '8px 20px', borderRadius: '100px', position: 'relative' }}
              >
                Solutions
                <span style={{
                  display: 'inline-block',
                  marginLeft: '4px',
                  transition: 'transform 0.2s',
                  transform: megaOpen ? 'rotate(180deg)' : 'rotate(0)',
                  fontSize: '10px',
                }}>▾</span>
              </Link>
            ) : l.name === 'Platform' ? (
              <Link
                key={l.name}
                href={l.href}
                onClick={e => { e.preventDefault(); openPlatform(); }}
                onMouseEnter={(e) => { openPlatform(); e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
                onMouseLeave={(e) => { schedulePlatformClose(); e.currentTarget.style.color = 'var(--ink2)'; e.currentTarget.style.background = 'transparent'; }}
                style={{ fontSize: '13.5px', color: platformOpen ? 'var(--ink)' : 'var(--ink2)', textDecoration: 'none', transition: 'all 0.2s', fontWeight: 500, padding: '8px 20px', borderRadius: '100px', position: 'relative' }}
              >
                Platform
                <span style={{
                  display: 'inline-block',
                  marginLeft: '4px',
                  transition: 'transform 0.2s',
                  transform: platformOpen ? 'rotate(180deg)' : 'rotate(0)',
                  fontSize: '10px',
                }}>▾</span>
              </Link>
            ) : (
              <Link key={l.name} href={l.href}
                style={{ fontSize: '13.5px', color: 'var(--ink2)', textDecoration: 'none', transition: 'all 0.2s', fontWeight: 500, padding: '8px 20px', borderRadius: '100px' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--ink2)'; e.currentTarget.style.background = 'transparent'; }}
              >{l.name}</Link>
            )
          ))}
        </div>

        <div className="hidden lg:block">
          <Link href="/book" style={{ textDecoration: 'none' }}>
            <button className="btn btn-primary" style={{ padding: '10px 22px', fontSize: '13.5px', borderRadius: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--brand-d)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--brand)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Book Free Call
            </button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink)' }}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ────────── MOBILE SIDEBAR DRAWER (portaled to body) ────────── */}
      {mounted && createPortal(
        <div
          className="lg:hidden"
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            pointerEvents: menuOpen ? 'all' : 'none',
            display: 'flex', justifyContent: 'flex-end',
          }}
        >
          {/* Backdrop */}
          <div
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'absolute', inset: 0,
              background: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(8px)',
              opacity: menuOpen ? 1 : 0, transition: 'opacity 0.3s ease'
            }}
          />
          {/* Sidebar Panel */}
          <div
            style={{
              position: 'relative', width: 'clamp(280px, 80vw, 360px)', height: '100%',
              background: 'rgba(10,10,11,0.95)', borderLeft: '1px solid rgba(255,255,255,0.1)',
              padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: '16px',
              transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
              transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              overflowY: 'auto'
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <div style={{ fontWeight: 800, fontSize: '18px', color: 'var(--ink)' }}>Navigation</div>
              <button onClick={() => setMenuOpen(false)} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--ink)' }}><X size={18} /></button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>

              {/* ── Solutions Accordion ── */}
              <div>
                <button
                  onClick={() => setMobSolutionsOpen(!mobSolutionsOpen)}
                  style={{ width: '100%', fontSize: '16px', padding: '16px', borderRadius: '12px', background: mobSolutionsOpen ? 'rgba(255,92,0,0.06)' : 'rgba(255,255,255,0.03)', color: 'var(--ink)', fontWeight: 600, border: mobSolutionsOpen ? '1px solid rgba(255,92,0,0.15)' : '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', transition: 'all 0.2s' }}
                >
                  Solutions
                  <ChevronDown size={16} color="var(--ink3)" style={{ transition: 'transform 0.3s', transform: mobSolutionsOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
                </button>
                {mobSolutionsOpen && (
                  <div style={{ padding: '8px 0 0 0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {solutionCategories.map(cat => {
                      const CatIcon = iconMap[cat.iconName];
                      return (
                        <div key={cat.key}>
                          <Link
                            href={`/solutions/${cat.key}`}
                            onClick={() => setMenuOpen(false)}
                            style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 14px', borderRadius: '10px', textDecoration: 'none', transition: 'background 0.15s' }}
                          >
                            {CatIcon && <CatIcon size={16} color="var(--brand)" style={{ flexShrink: 0 }} />}
                            <div>
                              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)' }}>{cat.label}</div>
                              <div style={{ fontSize: '11.5px', color: 'var(--ink3)', lineHeight: 1.3 }}>{cat.subtitle}</div>
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* ── Platform Accordion ── */}
              <div>
                <button
                  onClick={() => setMobPlatformOpen(!mobPlatformOpen)}
                  style={{ width: '100%', fontSize: '16px', padding: '16px', borderRadius: '12px', background: mobPlatformOpen ? 'rgba(255,92,0,0.06)' : 'rgba(255,255,255,0.03)', color: 'var(--ink)', fontWeight: 600, border: mobPlatformOpen ? '1px solid rgba(255,92,0,0.15)' : '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', transition: 'all 0.2s' }}
                >
                  Platform
                  <ChevronDown size={16} color="var(--ink3)" style={{ transition: 'transform 0.3s', transform: mobPlatformOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
                </button>
                {mobPlatformOpen && (
                  <div style={{ padding: '8px 0 0 0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <Link
                      href="/platform/flowai"
                      onClick={() => setMenuOpen(false)}
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 14px', borderRadius: '10px', textDecoration: 'none', transition: 'background 0.15s' }}
                    >
                      <div style={{ width: 32, height: 32, borderRadius: '8px', background: 'rgba(255,92,0,0.1)', border: '1px solid rgba(255,92,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <LineChart size={16} color="var(--brand)" />
                      </div>
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)' }}>FlowAI Analytics</div>
                        <div style={{ fontSize: '11.5px', color: 'var(--ink3)', lineHeight: 1.3 }}>Chat with your data using AI</div>
                      </div>
                    </Link>
                    <Link
                      href="/platform/flowbot"
                      onClick={() => setMenuOpen(false)}
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 14px', borderRadius: '10px', textDecoration: 'none', transition: 'background 0.15s' }}
                    >
                      <div style={{ width: 32, height: 32, borderRadius: '8px', background: 'rgba(255,92,0,0.1)', border: '1px solid rgba(255,92,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Bot size={16} color="var(--brand)" />
                      </div>
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)' }}>FlowBot Studio</div>
                        <div style={{ fontSize: '11.5px', color: 'var(--ink3)', lineHeight: 1.3 }}>AI chatbots for WhatsApp & web</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* ── Direct Links (same as desktop) ── */}
              <Link href="/work"
                style={{ fontSize: '16px', padding: '16px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', color: 'var(--ink)', textDecoration: 'none', fontWeight: 600, border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                onClick={() => setMenuOpen(false)}>
                Work
                <ArrowRight size={16} color="var(--ink3)" />
              </Link>

              <Link href="/blog"
                style={{ fontSize: '16px', padding: '16px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', color: 'var(--ink)', textDecoration: 'none', fontWeight: 600, border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                onClick={() => setMenuOpen(false)}>
                Blog
                <ArrowRight size={16} color="var(--ink3)" />
              </Link>

              <Link href="/about"
                style={{ fontSize: '16px', padding: '16px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', color: 'var(--ink)', textDecoration: 'none', fontWeight: 600, border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                onClick={() => setMenuOpen(false)}>
                About
                <ArrowRight size={16} color="var(--ink3)" />
              </Link>

              <Link href="/faq"
                style={{ fontSize: '16px', padding: '16px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', color: 'var(--ink)', textDecoration: 'none', fontWeight: 600, border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                onClick={() => setMenuOpen(false)}>
                FAQ
                <ArrowRight size={16} color="var(--ink3)" />
              </Link>

              <Link href="/contact"
                style={{ fontSize: '16px', padding: '16px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', color: 'var(--ink)', textDecoration: 'none', fontWeight: 600, border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                onClick={() => setMenuOpen(false)}>
                Contact
                <ArrowRight size={16} color="var(--ink3)" />
              </Link>

            </div>

            {/* CTA Button */}
            <div style={{ marginTop: 'auto', paddingTop: '24px' }}>
              <Link href="/book" style={{ textDecoration: 'none', width: '100%' }}>
                <button className="btn btn-primary" style={{ width: '100%', padding: '16px', justifyContent: 'center', fontSize: '15px' }}>
                  Book a Strategy Call
                </button>
              </Link>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* ────────── MEGA DROPDOWN ────────── */}
      {megaOpen && (
        <div
          ref={megaRef}
          onMouseEnter={openMega}
          onMouseLeave={scheduleMegaClose}
          style={{
            position: 'absolute',
            top: '72px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'min(1200px, 94vw)',
            background: 'rgba(12, 12, 14, 0.98)',
            backdropFilter: 'blur(32px)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '24px',
            boxShadow: '0 32px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.03) inset',
            padding: '36px 0',
            animation: 'megaIn 0.25s ease forwards',
            zIndex: 1000,
          }}
        >
          {/* Mega heading */}
          <div style={{ padding: '0 40px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '4px' }}>Explore Our Solutions</div>
            <div style={{ fontSize: '13px', color: 'var(--ink3)' }}>Built to help brands design, automate, grow, and transform.</div>
          </div>

          <div className="grid-stack-tab" style={{ display: 'grid', gridTemplateColumns: 'min(260px, 20vw) 1fr min(240px, 20vw)', minHeight: '360px' }}>

            {/* COLUMN 1 — Category list */}
            <div style={{ padding: '20px 0', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
              {solutionCategories.map((c, i) => {
                const CatIcon = iconMap[c.iconName];
                const isActive = i === activeCategory;
                return (
                  <Link
                    key={c.key}
                    href={`/solutions/${c.key}`}
                    onMouseEnter={() => setActiveCategory(i)}
                    onClick={e => e.preventDefault()}
                    style={{
                      display: 'flex', alignItems: 'flex-start', gap: '14px',
                      padding: '14px 28px',
                      cursor: 'pointer',
                      background: isActive ? 'rgba(255,92,0,0.06)' : 'transparent',
                      borderLeft: isActive ? '2px solid var(--brand)' : '2px solid transparent',
                      transition: 'all 0.15s ease',
                      textDecoration: 'none',
                    }}
                  >
                    {CatIcon && <CatIcon size={18} color={isActive ? 'var(--brand)' : 'var(--ink3)'} style={{ marginTop: '2px', flexShrink: 0 }} />}
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: isActive ? 'var(--ink)' : 'var(--ink2)', marginBottom: '2px' }}>{c.label}</div>
                      <div style={{ fontSize: '11.5px', color: 'var(--ink3)', lineHeight: 1.4 }}>{c.subtitle}</div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* COLUMN 2 — Active category detail with deep links */}
            <div style={{ padding: '28px 36px' }} key={cat.key}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                {IconComp && <IconComp size={20} color="var(--brand)" />}
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--ink)', margin: 0 }}>{cat.heading}</h3>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--ink3)', marginBottom: '28px', lineHeight: 1.5 }}>{cat.intro}</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {cat.services.map(s => (
                  <Link
                    key={s.slug}
                    href={`/solutions/${cat.key}#${s.slug}`}
                    onClick={() => setMegaOpen(false)}
                    className="mega-service-row"
                    style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', padding: '10px 14px', borderRadius: '12px', transition: 'background 0.15s', textDecoration: 'none' }}
                  >
                    <div style={{ width: 'min(5px, 100vw)', height: '5px', borderRadius: '50%', background: 'var(--brand)', marginTop: '7px', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)', marginBottom: '3px' }}>{s.name}</div>
                      <div style={{ fontSize: '12.5px', color: 'var(--ink3)', lineHeight: 1.45 }}>{s.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* View all for this category */}
              <Link
                href={`/solutions/${cat.key}`}
                onClick={() => setMegaOpen(false)}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '24px', fontSize: '13px', fontWeight: 600, color: 'var(--brand)', textDecoration: 'none', transition: 'gap 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.gap = '10px')}
                onMouseLeave={e => (e.currentTarget.style.gap = '6px')}
              >
                View all {cat.label} solutions <ArrowRight size={14} />
              </Link>
            </div>

            {/* COLUMN 3 — Featured CTA */}
            <div style={{ padding: '28px 28px', borderLeft: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{
                  width: '100%', height: 'min(120px, 100vw)', borderRadius: '14px',
                  background: 'linear-gradient(135deg, rgba(255,92,0,0.12) 0%, rgba(255,92,0,0.03) 100%)',
                  border: '1px solid rgba(255,92,0,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '24px',
                }}>
                  <Sparkles size={36} color="var(--brand)" style={{ opacity: 0.6 }} />
                </div>

                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--ink)', marginBottom: '8px' }}>
                  Need a custom solution?
                </div>
                <p style={{ fontSize: '12.5px', color: 'var(--ink3)', lineHeight: 1.5, marginBottom: '24px' }}>
                  Not sure where to start? Our strategists will map the right stack for your exact growth stage.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Link href="/book" style={{ textDecoration: 'none' }}>
                  <button className="btn btn-primary" style={{ width: '100%', padding: '10px 16px', fontSize: '13px', borderRadius: '10px', justifyContent: 'center' }}>
                    Book a Strategy Call
                  </button>
                </Link>
                <Link href="/work" style={{ textDecoration: 'none', textAlign: 'center', fontSize: '12.5px', color: 'var(--ink3)', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--brand)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--ink3)'}
                >
                  See our work →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ────────── PLATFORM DROPDOWN ────────── */}
      {platformOpen && (
        <div
          ref={platformRef}
          onMouseEnter={openPlatform}
          onMouseLeave={schedulePlatformClose}
          style={{
            position: 'absolute',
            top: '72px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'min(680px, 92vw)',
            background: 'rgba(12, 12, 14, 0.98)',
            backdropFilter: 'blur(32px)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '24px',
            boxShadow: '0 32px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.03) inset',
            padding: '32px',
            animation: 'megaIn 0.25s ease forwards',
            zIndex: 1000,
            maxHeight: '80vh',
            overflowY: 'auto'
          }}
        >
          <div style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <Boxes size={16} color="var(--brand)" />
              <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)' }}>Our Platform</span>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--ink3)', margin: 0 }}>In-house built tools to supercharge your business.</p>
          </div>

          <div className="grid-stack-mob" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {/* FlowAI Analytics Card */}
            <Link
              href="/platform/flowai"
              onClick={() => setPlatformOpen(false)}
              className="platform-card"
              style={{
                padding: '24px',
                borderRadius: '16px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                transition: 'all 0.2s ease',
              }}
            >
              <div style={{ width: 'min(40px, 100vw)', height: '40px', borderRadius: '12px', background: 'rgba(255,92,0,0.1)', border: '1px solid rgba(255,92,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <LineChart size={20} color="var(--brand)" />
              </div>
              <div>
                <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--ink)', marginBottom: '4px' }}>FlowAI Analytics</div>
                <p style={{ fontSize: '12.5px', color: 'var(--ink3)', lineHeight: 1.45, margin: 0 }}>Chat with your data. Get instant, accurate insights powered by agentic AI — no dashboards, no SQL.</p>
              </div>
              <div style={{ fontSize: '12px', color: 'var(--brand)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', marginTop: 'auto' }}>
                Explore <ArrowRight size={12} />
              </div>
            </Link>

            {/* FlowBot Studio Card */}
            <Link
              href="/platform/flowbot"
              onClick={() => setPlatformOpen(false)}
              className="platform-card"
              style={{
                padding: '24px',
                borderRadius: '16px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                transition: 'all 0.2s ease',
              }}
            >
              <div style={{ width: 'min(40px, 100vw)', height: '40px', borderRadius: '12px', background: 'rgba(255,92,0,0.1)', border: '1px solid rgba(255,92,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Bot size={20} color="var(--brand)" />
              </div>
              <div>
                <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--ink)', marginBottom: '4px' }}>FlowBot Studio</div>
                <p style={{ fontSize: '12.5px', color: 'var(--ink3)', lineHeight: 1.45, margin: 0 }}>Build AI chatbots visually and deploy across WhatsApp, web, apps, and more — in minutes, not months.</p>
              </div>
              <div style={{ fontSize: '12px', color: 'var(--brand)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', marginTop: 'auto' }}>
                Explore <ArrowRight size={12} />
              </div>
            </Link>
          </div>
        </div>
      )}

      {/* Mega menu styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes megaIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        .mega-service-row:hover {
          background: rgba(255,255,255,0.04) !important;
        }
        .platform-card:hover {
          border-color: rgba(255,92,0,0.2) !important;
          background: rgba(255,92,0,0.04) !important;
          box-shadow: 0 0 32px rgba(255,92,0,0.04);
        }
      `}} />
    </nav>
  );
}
