import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BookPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', padding: '80px 0' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 1.5fr', gap: '60px', alignItems: 'start' }}>
          
          {/* Left Column: Context */}
          <div style={{ position: 'sticky', top: '120px' }}>
            <div className="eyebrow" style={{ background: 'rgba(255,92,0,0.1)', color: 'var(--brand)' }}>Discovery Call</div>
            <h1 className="h-section" style={{ fontSize: 'clamp(32px, 4vw, 48px)', textAlign: 'left', margin: '24px 0' }}>
              Let's locate your <span className="brand-text">bottleneck</span>.
            </h1>
            <p className="lead" style={{ textAlign: 'left', margin: '0 0 40px', fontSize: '18px' }}>
              This isn't a high-pressure sales pitch. It's a technical deep-dive to see if we can actually add ROI to your operations.
            </p>
            
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border)', padding: '32px', borderRadius: '16px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--ink)', marginBottom: '16px' }}>What to expect:</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--ink2)', fontSize: '15px' }}>
                <li style={{ display: 'flex', gap: '12px' }}><span style={{ color: 'var(--brand)' }}>✓</span> 30-minute system architecture review</li>
                <li style={{ display: 'flex', gap: '12px' }}><span style={{ color: 'var(--brand)' }}>✓</span> Identification of your primary growth leak</li>
                <li style={{ display: 'flex', gap: '12px' }}><span style={{ color: 'var(--brand)' }}>✓</span> A clear timeline and roadmap for execution</li>
              </ul>
            </div>
          </div>

          {/* Right Column: High-Converting Intake Form */}
          <div className="glass" style={{ padding: '48px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--ink)', marginBottom: '32px' }}>Request a Call</h2>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '13px', color: 'var(--ink2)', fontWeight: 500 }}>First Name *</label>
                  <input type="text" placeholder="John" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', padding: '14px 16px', borderRadius: '8px', color: 'var(--ink)', fontSize: '15px', outline: 'none' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '13px', color: 'var(--ink2)', fontWeight: 500 }}>Last Name *</label>
                  <input type="text" placeholder="Doe" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', padding: '14px 16px', borderRadius: '8px', color: 'var(--ink)', fontSize: '15px', outline: 'none' }} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '13px', color: 'var(--ink2)', fontWeight: 500 }}>Work Email *</label>
                <input type="email" placeholder="john@company.com" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', padding: '14px 16px', borderRadius: '8px', color: 'var(--ink)', fontSize: '15px', outline: 'none' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '13px', color: 'var(--ink2)', fontWeight: 500 }}>Phone Number *</label>
                <input type="tel" placeholder="+1 (555) 000-0000" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', padding: '14px 16px', borderRadius: '8px', color: 'var(--ink)', fontSize: '15px', outline: 'none' }} />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '13px', color: 'var(--ink2)', fontWeight: 500 }}>Company Website (Optional)</label>
                <input type="url" placeholder="https://" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', padding: '14px 16px', borderRadius: '8px', color: 'var(--ink)', fontSize: '15px', outline: 'none' }} />
              </div>

              <button type="button" className="btn btn-primary" style={{ width: '100%', padding: '16px', fontSize: '16px', fontWeight: 600, marginTop: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                Claim My Strategy Session →
              </button>
              
              <p style={{ fontSize: '12px', color: 'var(--ink3)', textAlign: 'center', marginTop: '12px' }}>
                Our team typically reviews requests and reaches out within exactly 24 hours.
              </p>
            </form>
          </div>
          
        </div>
      </main>
      <Footer />
    </>
  );
}
