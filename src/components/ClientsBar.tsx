'use client';

export default function ClientsBar() {
  const logos = ['Growfast', 'TechNova', 'BuildCo', 'Zerobase', 'NxtLayer', 'UpScale'];
  
  return (
    <section style={{ padding: '40px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'rgba(255,255,255,0.01)', backdropFilter: 'blur(8px)' }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', gap: '48px', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--ink3)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
          Trusted by the best
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '56px', flexWrap: 'wrap' }}>
          {logos.map(l => (
            <div key={l} style={{ fontSize: '18px', fontWeight: 800, fontFamily: 'var(--font)', letterSpacing: '-0.5px', color: 'rgba(255,255,255,0.3)', transition: 'color 0.3s', cursor: 'default' }}
                 onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                 onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}>
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
