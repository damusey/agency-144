'use client';

export default function ClientsBar() {
  const brands = ['Retail Labs', 'Urban Software', 'Hawaiadda', 'MalliOnDoor', 'KnowYourCollege', 'Auraynia', 'Epiyola', 'SariVerse', 'Bharat Semi', 'Clean4Wheels', 'Narrativlyy', 'Milda', 'Bakers'];
  const logos = [...brands, ...brands];
  return (
    <section style={{ padding: '40px 0 48px', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'rgba(255,255,255,0.01)', backdropFilter: 'blur(8px)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Edge Gradients for smooth fade in/out */}
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '150px', background: 'linear-gradient(to right, var(--surface) 0%, transparent 100%)', zIndex: 10, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '150px', background: 'linear-gradient(to left, var(--surface) 0%, transparent 100%)', zIndex: 10, pointerEvents: 'none' }} />

      {/* Label */}
      <div style={{ textAlign: 'center', marginBottom: '32px', position: 'relative', zIndex: 20 }}>
        <span style={{ fontSize: '13px', fontWeight: 800, color: 'rgba(255,255,255,0.9)', letterSpacing: '3px', textTransform: 'uppercase' }}>
          Trusted by ambitious brands
        </span>
      </div>

      <div className="marquee-container" style={{ width: '100%', maxWidth: '100vw' }}>
        <div className="marquee-track">
          {logos.map((l, i) => (
            <div key={i} style={{ fontSize: '18px', fontWeight: 600, fontFamily: 'var(--font)', letterSpacing: '-0.2px', color: 'rgba(255,255,255,0.4)', transition: 'color 0.3s', cursor: 'default' }}
                 onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                 onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
