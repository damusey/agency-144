'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const footerLinks = [
  { name: 'Solutions', href: '/#services' },
  { name: 'Work', href: '/work' },
  { name: 'About', href: '/about' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Book a Call', href: '/book' },
];

const legalLinks = [
  { name: 'Terms & Conditions', href: '/terms' },
  { name: 'Privacy Policy', href: '/privacy' },
];

export default function Footer() {
  return (
    <footer style={{ padding: '60px 0', background: '#050505', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

        <div className="flex-stack-mob" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', height: 42 }}>
              <img src="/logo.png" alt="Oktuv" style={{ objectFit: 'contain', width: 'auto', height: '100%' }} />
            </div>
          </Link>

          {/* Navigation Links */}
          <div style={{ display: 'flex', gap: '28px', fontSize: '14px', color: 'rgba(255,255,255,0.4)', fontWeight: 500, flexWrap: 'wrap', justifyContent: 'center' }}>
            {footerLinks.map(l => (
              <Link key={l.name} href={l.href} style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>
                {l.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)' }} />

        {/* Bottom Row */}
        <div className="flex-stack-mob" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.2)', textAlign: 'center' }}>
            © 2026 Oktuv. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '24px', fontSize: '13px', justifyContent: 'center' }}>
            {legalLinks.map(l => (
              <Link key={l.name} href={l.href} style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.25)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.25)'}>
                {l.name}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
