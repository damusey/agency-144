'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const legalLinks = [
  { name: 'Terms & Conditions', href: '/terms' },
  { name: 'Privacy Policy', href: '/privacy' },
];

const solutionLinks = [
  { name: 'Custom SaaS Build', href: '/solutions/build' },
  { name: 'AI Integration', href: '/solutions/integrate' },
  { name: 'Performance Growth', href: '/solutions/grow' },
  { name: 'Design & UX', href: '/solutions/design' },
  { name: 'Digital Transformation', href: '/solutions/transform' },
  { name: 'Customer Engagement', href: '/solutions/engage' },
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Work', href: '/work' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

const platformLinks = [
  { name: 'FlowAI Analytics', href: '/platform/flowai' },
  { name: 'FlowBot Agent', href: '/platform/flowbot' },
];

const resourceLinks = [
  { name: 'What Is Agentic AI?', href: '/blog/what-is-agentic-ai-2025-guide' },
  { name: 'Custom SaaS Cost Breakdown', href: '/blog/custom-saas-development-cost-2025' },
  { name: 'Reduce CAC with AI', href: '/blog/reduce-customer-acquisition-cost-ai' },
];

export default function Footer() {
  return (
    <footer style={{ padding: '80px 0 40px', background: '#050505', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px', justifyContent: 'space-between' }}>
          {/* Left Side: Brand */}
          <div style={{ flex: '1 1 280px', maxWidth: '360px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', height: 42 }}>
                <img src="/logo.png" alt="Oktuv" style={{ objectFit: 'contain', width: 'auto', height: '100%' }} />
              </div>
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', lineHeight: 1.6 }}>
              Web development, AI automation, and performance marketing. We build digital revenue engines.
            </p>
          </div>

          {/* Right Side: Links Grid */}
          <div style={{ flex: '2 1 600px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '40px' }}>
            {/* Column 2: Solutions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h4 style={{ color: '#fff', fontSize: '15px', fontWeight: 600 }}>Solutions</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>
                {solutionLinks.map(l => (
                  <Link key={l.name} href={l.href} style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>
                    {l.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 3: Platform */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h4 style={{ color: '#fff', fontSize: '15px', fontWeight: 600 }}>Platform</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>
                {platformLinks.map(l => (
                  <Link key={l.name} href={l.href} style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>
                    {l.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 4: Company */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h4 style={{ color: '#fff', fontSize: '15px', fontWeight: 600 }}>Company</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>
                {companyLinks.map(l => (
                  <Link key={l.name} href={l.href} style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>
                    {l.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 5: Top Resources */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h4 style={{ color: '#fff', fontSize: '15px', fontWeight: 600 }}>Top Resources</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>
                {resourceLinks.map(l => (
                  <Link key={l.name} href={l.href} style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>
                    {l.name}
                  </Link>
                ))}
              </div>
            </div>
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
