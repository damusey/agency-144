'use client';

import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FinalCTA from '@/components/FinalCTA';
import { Terminal, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';

// Cycle through 3 generated abstract backgrounds
const bgImages = ['/work/bg1.png', '/work/bg2.png', '/work/bg3.png'];

export default function WorkPage() {
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    rowRefs.current.forEach((el) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add('row-visible');
            obs.disconnect();
          }
        },
        { threshold: 0.12 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', padding: '100px 0 0', background: 'var(--bg)', position: 'relative' }}>

        {/* Glow */}
        <div className="glow-orb" style={{ top: 0, left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(circle, rgba(255,92,0,0.05) 0%, transparent 70%)', width: '1200px', height: '700px', pointerEvents: 'none' }} />

        {/* ── HERO ── */}
        <section className="wrap" style={{ marginBottom: '80px', position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
            <Terminal size={18} color="var(--brand)" />
            <span style={{ color: 'var(--brand)', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '12px' }}>
              Execution Archive // Portfolio
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end', gap: '32px', paddingBottom: '40px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <div>
              <h1 style={{ fontSize: 'clamp(44px, 5.5vw, 72px)', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-2px', lineHeight: 1.1, margin: '0 0 20px' }}>
                Proof of <span style={{ color: 'var(--brand)' }}>Execution.</span>
              </h1>
              <p style={{ color: 'var(--ink2)', fontSize: '18px', lineHeight: 1.65, maxWidth: '600px', margin: 0 }}>
                We don't do fluffy agency case studies. Below is an unfiltered log of the bottlenecks we dismantled and the exact impact we delivered.
              </p>
            </div>
            <div style={{ textAlign: 'right', fontFamily: 'monospace', color: 'var(--ink3)', fontSize: '12px', lineHeight: 2 }}>
              <div>[ DATA SYNC: ACTIVE ]</div>
              <div>RECORDS: {String(caseStudies.length).padStart(3, '0')}</div>
            </div>
          </div>
        </section>

        {/* ── CARDS ── */}
        <section className="wrap" style={{ position: 'relative', zIndex: 10, paddingBottom: '120px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {caseStudies.map((study, idx) => {
              const bg = bgImages[idx % bgImages.length];
              return (
                <div
                  key={study.id}
                  ref={(el) => { rowRefs.current[idx] = el; }}
                  className="work-row"
                  style={{
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.07)',
                    position: 'relative',
                    display: 'grid',
                    gridTemplateColumns: '340px 1fr',
                    minHeight: '280px',
                  }}
                >
                  {/* LEFT: visual metric panel with abstract bg */}
                  <div style={{
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '40px 36px',
                  }}>
                    {/* Background image */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      backgroundImage: `url(${bg})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      opacity: 0.35,
                    }} />
                    {/* Gradient overlay darkening top */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(180deg, rgba(10,10,11,0.7) 0%, rgba(10,10,11,0.95) 100%)',
                    }} />
                    {/* Right separator */}
                    <div style={{
                      position: 'absolute', top: 0, right: 0, width: '1px', height: '100%',
                      background: 'linear-gradient(180deg, transparent, rgba(255,92,0,0.3), transparent)',
                    }} />

                    {/* Content above gradient */}
                    <div style={{ position: 'relative', zIndex: 2 }}>
                      <div style={{
                        fontFamily: 'monospace', fontSize: '10px', letterSpacing: '2px',
                        color: 'var(--brand)', textTransform: 'uppercase', marginBottom: '20px',
                      }}>
                        #{String(idx + 1).padStart(3, '0')} — {study.industry}
                      </div>
                      <h2 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.5px', lineHeight: 1.1, marginBottom: '28px' }}>
                        {study.client}
                      </h2>
                      {/* Giant metric */}
                      <div style={{ fontSize: 'clamp(56px, 6vw, 80px)', fontWeight: 700, color: 'var(--brand)', letterSpacing: '-3px', lineHeight: 0.9, marginBottom: '10px' }}>
                        {study.metric.value}
                      </div>
                      <div style={{ fontSize: '15px', color: 'var(--ink2)', fontWeight: 500 }}>{study.metric.label}</div>
                    </div>
                  </div>

                  {/* RIGHT: execution narrative */}
                  <div style={{
                    background: 'rgba(12,12,14,0.97)',
                    padding: '40px 48px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '28px',
                  }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                      {[
                        { label: '> DIAGNOSTIC', text: study.challenge, color: 'var(--ink2)' },
                        { label: '> DEPLOYMENT', text: study.solution, color: 'var(--ink)' },
                        { label: '> OUTPUT', text: study.impact, color: 'var(--ink2)' },
                      ].map(({ label, text, color }) => (
                        <div key={label}>
                          <div style={{ fontFamily: 'monospace', fontSize: '11px', color: 'rgba(255,92,0,0.7)', letterSpacing: '1px', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            {label}
                            <div style={{ height: '1px', flex: 1, background: 'rgba(255,255,255,0.05)' }} />
                          </div>
                          <p style={{ color, fontSize: '15px', lineHeight: 1.65, margin: 0 }}>{text}</p>
                        </div>
                      ))}
                    </div>

                    {/* Footer row */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'rgba(0,255,100,0.5)', fontFamily: 'monospace' }}>
                        <ShieldCheck size={13} color="#00FF66" /> STATUS: RESOLVED
                      </div>
                      <div style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--ink3)', letterSpacing: '1px' }}>
                        {study.service}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </main>

      <FinalCTA />
      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        .work-row {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .work-row.row-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .work-row:hover {
          border-color: rgba(255, 92, 0, 0.18) !important;
          box-shadow: 0 0 48px rgba(255,92,0,0.06);
          transition: border-color 0.25s ease, box-shadow 0.25s ease, opacity 0.55s ease, transform 0.55s ease;
        }
        @media (max-width: 900px) {
          .work-row { grid-template-columns: 1fr !important; }
        }
      `}} />
    </>
  );
}
