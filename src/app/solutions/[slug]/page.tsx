'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FinalCTA from '@/components/FinalCTA';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { solutionCategories, iconMap } from '@/data/solutions';

const HEADER_OFFSET = 90;

export default function SolutionPage() {
  const params = useParams();
  const slug = params.slug as string;
  const category = solutionCategories.find(c => c.key === slug);

  const [activeSection, setActiveSection] = useState('');
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const subNavRef = useRef<HTMLDivElement | null>(null);

  // Scroll to hash on mount
  useEffect(() => {
    if (!category) return;
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        const el = sectionRefs.current[hash];
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 300);
    }
  }, [category]);

  // IntersectionObserver for active section tracking
  useEffect(() => {
    if (!category) return;
    const observers: IntersectionObserver[] = [];

    category.services.forEach(s => {
      const el = sectionRefs.current[s.slug];
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(s.slug);
            // Update URL hash without scroll jump
            window.history.replaceState(null, '', `#${s.slug}`);
          }
        },
        { rootMargin: '-20% 0px -60% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, [category]);

  // Scroll-fade-in for sections
  useEffect(() => {
    if (!category) return;
    const els = document.querySelectorAll('.sol-section');
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('sol-section-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [category]);

  if (!category) {
    return (
      <>
        <Navbar />
        <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '48px', color: 'var(--ink)', marginBottom: '16px' }}>404</h1>
            <p style={{ color: 'var(--ink2)' }}>Solution category not found.</p>
            <Link href="/" style={{ color: 'var(--brand)', textDecoration: 'none', marginTop: '16px', display: 'inline-block' }}>← Back Home</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const Icon = iconMap[category.iconName];

  const scrollToSection = (sectionSlug: string) => {
    const el = sectionRefs.current[sectionSlug];
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: 'var(--bg)', position: 'relative' }}>

        {/* Glow */}
        <div className="glow-orb" style={{ top: 0, left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(255,92,0,0.06) 0%, transparent 65%)', width: 'min(1100px, 100vw)', height: 'min(700px, 100vw)', pointerEvents: 'none' }} />

        {/* ── HERO ── */}
        <section style={{ padding: 'clamp(60px, 10vw, 88px) 0 40px', position: 'relative', zIndex: 10 }}>
          <div className="wrap">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              {Icon && <Icon size={20} color="var(--brand)" />}
              <span style={{ color: 'var(--brand)', fontFamily: 'monospace', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase' }}>
                Solutions / {category.label}
              </span>
            </div>
            <h1 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-1.5px', lineHeight: 1.1, marginBottom: '14px', maxWidth: '700px' }}>
              {category.heroTitle}
            </h1>
            <p style={{ fontSize: '16px', color: 'var(--ink2)', lineHeight: 1.65, maxWidth: '560px', marginBottom: '0' }}>
              {category.intro}
            </p>
          </div>
        </section>

        {/* ── CATEGORY SWITCHER ── */}
        <div className="lg:hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(12,12,14,0.7)', backdropFilter: 'blur(12px)', position: 'sticky', top: '72px', zIndex: 50 }}>
          <div className="wrap sol-scroll-hide" style={{ display: 'flex', gap: '4px', padding: '10px 0', overflowX: 'auto', scrollbarWidth: 'none' }}>
            {solutionCategories.map(c => {
              const isActive = c.key === slug;
              return (
                <Link
                  key={c.key}
                  href={`/solutions/${c.key}`}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '100px',
                    fontSize: '13px',
                    fontWeight: 500,
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s',
                    color: isActive ? 'var(--ink)' : 'var(--ink3)',
                    background: isActive ? 'rgba(255,92,0,0.1)' : 'transparent',
                    border: isActive ? '1px solid rgba(255,92,0,0.2)' : '1px solid transparent',
                  }}
                >
                  {c.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* ── MAIN CONTENT: Sidebar + Sections ── */}
        <div className="wrap sol-grid" style={{ display: 'grid', gap: 'clamp(24px, 4vw, 48px)', padding: 'clamp(32px, 5vw, 64px) 0 clamp(60px, 10vw, 120px)', position: 'relative', zIndex: 10 }}>

          {/* Sticky Sub-Nav Sidebar (Desktop) */}
          <div ref={subNavRef} className="hidden lg:block" style={{ position: 'sticky', top: '140px', alignSelf: 'start' }}>
            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--ink3)', marginBottom: '20px', fontFamily: 'monospace' }}>
              In this section
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {category.services.map(s => {
                const isActive = activeSection === s.slug;
                return (
                  <button
                    key={s.slug}
                    onClick={() => scrollToSection(s.slug)}
                    style={{
                      background: isActive ? 'rgba(255,92,0,0.08)' : 'transparent',
                      border: 'none',
                      borderLeft: isActive ? '2px solid var(--brand)' : '2px solid transparent',
                      padding: '10px 16px',
                      textAlign: 'left',
                      cursor: 'pointer',
                      borderRadius: '0 8px 8px 0',
                      transition: 'all 0.15s ease',
                      color: isActive ? 'var(--ink)' : 'var(--ink3)',
                      fontSize: '13.5px',
                      fontWeight: isActive ? 600 : 400,
                    }}
                  >
                    {s.name}
                  </button>
                );
              })}
            </div>

            {/* Sidebar CTA */}
            <div style={{ marginTop: '32px', padding: '20px', borderRadius: '16px', background: 'rgba(255,92,0,0.04)', border: '1px solid rgba(255,92,0,0.1)' }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>Need help choosing?</div>
              <p style={{ fontSize: '12px', color: 'var(--ink3)', lineHeight: 1.5, marginBottom: '14px' }}>Our strategists will map the right solution for your exact growth stage.</p>
              <Link href="/book" style={{ textDecoration: 'none' }}>
                <button className="btn btn-primary" style={{ width: '100%', padding: '8px 14px', fontSize: '12px', borderRadius: '8px', justifyContent: 'center' }}>
                  Book a Call
                </button>
              </Link>
            </div>
          </div>

          {/* Service Sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', minWidth: 0 }}>
            
            {/* Mobile Sub-Nav Carousel (Mobile) */}
            <div className="lg:hidden" style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--ink3)', marginBottom: '12px', fontFamily: 'monospace' }}>
                In this section
              </div>
              <div style={{ display: 'flex', overflowX: 'auto', gap: '8px', paddingBottom: '8px', scrollbarWidth: 'none' }}>
                {category.services.map(s => {
                  const isActive = activeSection === s.slug;
                  return (
                    <button
                      key={'mob-s-'+s.slug}
                      onClick={() => scrollToSection(s.slug)}
                      style={{
                        background: isActive ? 'rgba(255,92,0,0.1)' : 'rgba(255,255,255,0.03)',
                        border: isActive ? '1px solid rgba(255,92,0,0.3)' : '1px solid rgba(255,255,255,0.08)',
                        padding: '8px 16px',
                        borderRadius: '100px',
                        whiteSpace: 'nowrap',
                        color: isActive ? 'var(--ink)' : 'var(--ink2)',
                        fontSize: '13px',
                        fontWeight: 500,
                        cursor: 'pointer',
                      }}
                    >
                      {s.name}
                    </button>
                  );
                })}
              </div>
            </div>
            {category.services.map((s, idx) => (
              <div
                key={s.slug}
                id={s.slug}
                ref={el => { sectionRefs.current[s.slug] = el; }}
                className="sol-section"
                style={{
                  borderRadius: '24px',
                  border: '1px solid rgba(255,255,255,0.07)',
                  overflow: 'hidden',
                  position: 'relative',
                  maxWidth: '100%',
                }}
              >
                {/* Top accent stripe */}
                <div style={{ height: '3px', background: `linear-gradient(90deg, var(--brand), transparent)` }} />

                <div style={{ padding: 'clamp(24px, 4vw, 48px) clamp(20px, 4vw, 48px) clamp(24px, 4vw, 40px)' }}>
                  {/* Header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <div style={{ width: 'min(8px, 100vw)', height: '8px', borderRadius: '50%', background: 'var(--brand)' }} />
                    <span style={{ fontSize: '11px', color: 'var(--brand)', fontFamily: 'monospace', letterSpacing: '1px', textTransform: 'uppercase' }}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h2 style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.5px', marginBottom: '12px' }}>
                    {s.name}
                  </h2>
                  <p style={{ fontSize: '15px', color: 'var(--ink2)', lineHeight: 1.65, marginBottom: '32px', maxWidth: '100%', overflowWrap: 'break-word' }}>
                    {s.desc}
                  </p>

                  {/* Content Grid: Bullets + Use Cases */}
                  <div className="grid-stack-mob" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(20px, 4vw, 40px)' }}>
                    {/* Bullets */}
                    <div>
                      <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--ink3)', fontFamily: 'monospace', marginBottom: '16px' }}>
                        What we deliver
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {s.bullets.map(b => (
                          <li key={b} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                            <ChevronRight size={14} color="var(--brand)" style={{ marginTop: '3px', flexShrink: 0 }} />
                            <span style={{ fontSize: '14px', color: 'var(--ink2)', lineHeight: 1.5, overflowWrap: 'break-word' }}>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Use Cases */}
                    <div>
                      <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--ink3)', fontFamily: 'monospace', marginBottom: '16px' }}>
                        Ideal for
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {s.useCases.map(u => (
                          <span key={u} style={{
                            padding: '6px 14px',
                            borderRadius: '100px',
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            fontSize: '12.5px',
                            color: 'var(--ink2)',
                          }}>
                            {u}
                          </span>
                        ))}
                      </div>

                      {/* Section CTA */}
                      <Link href="/book" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '28px', fontSize: '13px', fontWeight: 600, color: 'var(--brand)', transition: 'gap 0.2s' }}
                        onMouseEnter={e => (e.currentTarget.style.gap = '10px')}
                        onMouseLeave={e => (e.currentTarget.style.gap = '6px')}
                      >
                        Get started with {s.name} <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CROSS-LINKS ── */}
        <section className="wrap" style={{ paddingBottom: '80px', position: 'relative', zIndex: 10 }}>
          <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--ink3)', fontFamily: 'monospace', marginBottom: '20px' }}>
            Explore other solutions
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {solutionCategories.filter(c => c.key !== slug).map(c => (
              <Link key={c.key} href={`/solutions/${c.key}`} style={{
                padding: '12px 24px',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                textDecoration: 'none',
                transition: 'all 0.2s',
                display: 'flex', flexDirection: 'column', gap: '4px',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,92,0,0.2)'; e.currentTarget.style.background = 'rgba(255,92,0,0.04)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
              >
                <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)' }}>{c.label}</span>
                <span style={{ fontSize: '12px', color: 'var(--ink3)' }}>{c.subtitle}</span>
              </Link>
            ))}
          </div>
        </section>

      </main>

      <FinalCTA />
      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        .sol-section {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.5s ease, transform 0.5s ease;
          background: rgba(14,14,16,0.6);
          box-sizing: border-box;
        }
        .sol-section-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .sol-section:hover {
          border-color: rgba(255,92,0,0.15) !important;
          box-shadow: 0 0 40px rgba(255,92,0,0.04);
        }
        /* Desktop 2-col layout with sidebar */
        .sol-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 1024px) {
          .sol-grid {
            grid-template-columns: clamp(180px, 20vw, 220px) 1fr;
          }
        }
        /* Ensure service cards don't overflow */
        .sol-section p,
        .sol-section span,
        .sol-section li {
          overflow-wrap: break-word;
          word-break: break-word;
        }
        /* Hide scrollbar on horizontal scroll areas */
        .sol-scroll-hide::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </>
  );
}
