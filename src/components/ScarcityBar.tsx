'use client';

import { X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const shimmerStyle = `
  @keyframes scarcityShimmer {
    0%   { color: #FF5C00; text-shadow: 0 0 12px rgba(255,92,0,0.6); }
    25%  { color: #FFB800; text-shadow: 0 0 16px rgba(255,184,0,0.7); }
    50%  { color: #FF3D00; text-shadow: 0 0 20px rgba(255,61,0,0.8); }
    75%  { color: #FF8C00; text-shadow: 0 0 16px rgba(255,140,0,0.7); }
    100% { color: #FF5C00; text-shadow: 0 0 12px rgba(255,92,0,0.6); }
  }
  .scarcity-animated {
    animation: scarcityShimmer 2.4s ease-in-out infinite;
    font-weight: 700;
  }
`;

export default function ScarcityBar() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  
  const [meta, setMeta] = useState(() => {
    if (typeof window === 'undefined') return { slots: 25, monthYear: '' };
    
    const now = new Date();
    const monthYear = now.toLocaleString('default', { month: 'long', year: 'numeric' });
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    const percentRemaining = Math.max(0, 1 - (now.getDate() / daysInMonth));
    return {
      slots: Math.max(3, Math.round(25 * percentRemaining)),
      monthYear
    };
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!visible) return null;

  return (
    <>
      <style>{shimmerStyle}</style>
      <div
        style={{
          background: '#0D0D0F',
          color: 'rgba(255,255,255,0.7)',
          textAlign: 'center',
          padding: 'clamp(8px, 1.5vw, 10px) clamp(36px, 5vw, 48px)',
          fontSize: 'clamp(11px, 1.2vw, 12.5px)',
          fontWeight: 400,
          letterSpacing: '0.2px',
          position: 'relative',
          fontFamily: 'var(--font-body)',
          borderBottom: '1px solid rgba(255,92,0,0.15)',
        }}
      >
        <span className="scarcity-animated">
          {mounted ? `Only ${meta.slots} project slots left for ${meta.monthYear}` : 'Calculating remaining slots...'}
        </span>
        {' '}— We cap clients to protect quality.{' '}
        <span className="scarcity-animated" style={{ cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
          <Link href="/book" style={{ color: 'inherit', textDecoration: 'none' }}>Book your free call now →</Link>
        </span>
        <button
          onClick={() => setVisible(false)}
          style={{
            position: 'absolute',
            right: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            color: 'rgba(255,255,255,0.3)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <X size={14} />
        </button>
      </div>
    </>
  );
}
