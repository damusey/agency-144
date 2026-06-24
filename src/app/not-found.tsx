'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: 'var(--surface)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center', paddingTop: '120px', paddingBottom: '120px' }}>
        
        {/* Glow */}
        <div className="glow-orb" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'radial-gradient(circle, rgba(255,92,0,0.08) 0%, transparent 60%)', width: 'min(800px, 100vw)', height: 'min(800px, 100vw)', pointerEvents: 'none', position: 'absolute' }} />

        <div className="wrap" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '600px', margin: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
            <div style={{ 
              width: 'min(80px, 100vw)', height: '80px', 
              borderRadius: '24px', 
              background: 'rgba(255,255,255,0.03)', 
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.05)'
            }}>
              <Compass size={36} color="var(--brand)" />
            </div>
          </div>
          
          <h1 style={{ fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: 800, color: 'var(--ink)', letterSpacing: '-2px', marginBottom: '16px', lineHeight: 1 }}>
            404
          </h1>
          <h2 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--ink)', marginBottom: '16px' }}>
            Lost in the void.
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--ink2)', lineHeight: 1.6, marginBottom: '40px' }}>
            The page you are looking for doesn't exist, has been moved, or perhaps you misspelled something.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <button className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '15px', borderRadius: '14px', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 8px 24px rgba(255,92,0,0.2)' }}>
                <ArrowLeft size={16} /> Go back home
              </button>
            </Link>
            <Link href="/contact/" style={{ textDecoration: 'none' }}>
              <button style={{ 
                padding: '14px 28px', fontSize: '15px', fontWeight: 600, borderRadius: '14px', 
                background: 'rgba(255,255,255,0.03)', 
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'var(--ink)',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '8px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
              >
                Contact Support
              </button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
