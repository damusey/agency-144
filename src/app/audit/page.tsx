import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

export default function AuditPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
        {/* Background glow overlay */}
        <div className="glow-orb" style={{ top: '30%', right: '-10%', background: 'radial-gradient(circle, rgba(234,88,12,0.08) 0%, rgba(0,0,0,0) 60%)', width: '1000px', height: '1000px' }} />

        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'center' }}>
          
          {/* Left Column: Context */}
          <div>
            <div className="eyebrow" style={{ background: 'rgba(255,92,0,0.1)', color: 'var(--brand)' }}>Free Growth Audit</div>
            <h1 className="h-section" style={{ fontSize: 'clamp(32px, 4vw, 56px)', textAlign: 'left', margin: '24px 0', lineHeight: 1.1 }}>
              Stop guessing. See exactly where your funnel is <span className="brand-text">leaking revenue</span>.
            </h1>
            <p className="lead" style={{ textAlign: 'left', margin: '0 0 40px', fontSize: '18px' }}>
              Drop your URL below. Our senior team will record a 5-minute video teardown of your current positioning, UX, and acquisition loops—delivered to your inbox in 48 hours. No sales pitch attached.
            </p>
            
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', padding: '24px', borderRadius: '16px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(255,92,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'var(--brand)', fontWeight: 600 }}>01</span>
                </div>
                <div>
                  <h4 style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '15px' }}>Drop your details</h4>
                  <p style={{ color: 'var(--ink2)', fontSize: '14px', margin: 0 }}>Takes roughly 30 seconds.</p>
                </div>
              </div>
              <div style={{ width: 2, height: 32, background: 'rgba(255,255,255,0.06)', margin: '8px 0 8px 24px' }}></div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(255,92,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'var(--brand)', fontWeight: 600 }}>02</span>
                </div>
                <div>
                  <h4 style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '15px' }}>We analyze your stack</h4>
                  <p style={{ color: 'var(--ink2)', fontSize: '14px', margin: 0 }}>We comb through exactly what's failing.</p>
                </div>
              </div>
              <div style={{ width: 2, height: 32, background: 'rgba(255,255,255,0.06)', margin: '8px 0 8px 24px' }}></div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--brand)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ArrowRight size={20} color="#fff" />
                </div>
                <div>
                  <h4 style={{ color: 'var(--ink)', fontWeight: 600, fontSize: '15px' }}>You get the blueprint</h4>
                  <p style={{ color: 'var(--ink2)', fontSize: '14px', margin: 0 }}>A custom 5-minute video teardown.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Audit Intake Form */}
          <div className="glass" style={{ padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.08)', position: 'relative', zIndex: 10 }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--ink)', marginBottom: '32px' }}>Request your teardown</h2>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '13px', color: 'var(--ink2)', fontWeight: 500 }}>Your Name *</label>
                <input type="text" placeholder="John Doe" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', padding: '14px 16px', borderRadius: '8px', color: 'var(--ink)', fontSize: '15px', outline: 'none' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '13px', color: 'var(--ink2)', fontWeight: 500 }}>Work Email *</label>
                <input type="email" placeholder="john@company.com" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', padding: '14px 16px', borderRadius: '8px', color: 'var(--ink)', fontSize: '15px', outline: 'none' }} />
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '13px', color: 'var(--ink2)', fontWeight: 500 }}>Company URL *</label>
                <input type="url" placeholder="https://yourcompany.com" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', padding: '14px 16px', borderRadius: '8px', color: 'var(--ink)', fontSize: '15px', outline: 'none' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '13px', color: 'var(--ink2)', fontWeight: 500 }}>Where does it hurt the most? (Optional)</label>
                <textarea rows={3} placeholder="We get traffic but nobody buys..." style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', padding: '14px 16px', borderRadius: '8px', color: 'var(--ink)', fontSize: '15px', outline: 'none', resize: 'vertical' }}></textarea>
              </div>

              <button type="button" className="btn btn-primary" style={{ width: '100%', padding: '16px', fontSize: '16px', fontWeight: 600, marginTop: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                Unlock My Growth Blueprint →
              </button>
            </form>
          </div>
          
        </div>
      </main>
      <Footer />
    </>
  );
}
