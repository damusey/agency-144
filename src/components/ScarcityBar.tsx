'use client';

import { X } from 'lucide-react';
import { useState } from 'react';

export default function ScarcityBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div
      style={{
        background: 'var(--ink)',
        color: '#fff',
        textAlign: 'center',
        padding: '10px 48px',
        fontSize: '12.5px',
        fontWeight: 400,
        letterSpacing: '0.2px',
        position: 'relative',
        fontFamily: 'var(--font-body)',
      }}
    >
      <span style={{ color: 'var(--brand2)', fontWeight: 600 }}>
        Only 3 project slots left for April 2026
      </span>{' '}
      — We cap clients to protect quality.{' '}
      <span style={{ color: 'var(--brand2)', fontWeight: 600, cursor: 'pointer', textDecoration: 'underline' }}>
        Book your free call now →
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
          color: 'rgba(255,255,255,0.4)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <X size={14} />
      </button>
    </div>
  );
}
