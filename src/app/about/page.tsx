import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShieldCheck, Target, TrendingUp, Users, Crown, Gem } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', padding: '40px 0 0', position: 'relative', overflow: 'hidden' }}>
        
        {/* Glow Effects */}
        <div className="glow-orb" style={{ top: '10%', left: '-10%', background: 'radial-gradient(circle, rgba(255,92,0,0.08) 0%, rgba(0,0,0,0) 50%)', width: 'min(1000px, 100vw)', height: 'min(1000px, 100vw)' }} />
        <div className="glow-orb" style={{ top: '60%', right: '-10%', background: 'radial-gradient(circle, rgba(234,88,12,0.05) 0%, rgba(0,0,0,0) 50%)', width: 'min(800px, 100vw)', height: 'min(800px, 100vw)' }} />

        {/* Hero Section */}
        <section className="wrap" style={{ textAlign: 'center', marginBottom: '48px', position: 'relative', zIndex: 10 }}>
          <div className="eyebrow" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--ink)' }}>Our Philosophy</div>
          <h1 className="h-display" style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', width: '100%', margin: '16px auto', lineHeight: 1.15 }}>
            <span style={{ display: 'block' }}>You don't need another agency.</span>
            <span style={{ display: 'block' }}>You need an <span className="brand-text">execution partner.</span></span>
          </h1>
          <p className="lead" style={{ margin: '0 auto', maxWidth: '700px', fontSize: '20px', color: 'var(--ink2)' }}>
            Most agencies charge you premium retainers to let juniors learn on your dime. We built Oktuv to be the exact opposite: an elite strike team dedicated exclusively to your scale.
          </p>
        </section>

        {/* The Pedigree Section (High Trust) */}
        <section className="wrap" style={{ marginBottom: '80px', position: 'relative', zIndex: 10 }}>
          <div className="glass" style={{ borderRadius: 'clamp(20px, 3vw, 32px)', padding: 'clamp(32px, 5vw, 56px) clamp(4%, 5%, 6%)', border: '1px solid rgba(255,255,255,0.08)', position: 'relative', overflow: 'hidden' }}>
            <div className="bg-video-fluid" style={{ backgroundImage: 'url(/about/pedigree-fluid.png)', opacity: 0.45, filter: 'saturate(1.2)' }}></div>
            <div className="bg-video-overlay" style={{ background: 'linear-gradient(145deg, rgba(10,10,11,0.65) 0%, rgba(10,10,11,0.98) 100%)' }}></div>
            
            <div className="grid-stack-mob" style={{ position: 'relative', zIndex: 10, display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 'clamp(32px, 6vw, 80px)', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: 'clamp(24px, 6vw, 32px)', fontWeight: 700, color: 'var(--ink)', marginBottom: '24px', lineHeight: 1.2 }}>
                  Built by the top 1% to serve the ambitious few.
                </h2>
                <p style={{ fontSize: '16px', color: 'var(--ink2)', lineHeight: 1.7, marginBottom: '24px' }}>
                  Your business is your life's work. It deserves to be handled by minds that understand complex growth mechanics at the highest levels of industry. 
                </p>
                <p style={{ fontSize: '16px', color: 'var(--ink2)', lineHeight: 1.7 }}>
                  Oktuv is engineered and advised by <strong style={{ color: 'var(--brand)', fontWeight: 600 }}>ex-founders and domain experts</strong> with deep engineering roots from institutions like the IITs, NITs, and Panjab University. But pedigree alone doesn't scale companies. Our core strike team consists of battle-tested operators who have scaled global brands and secured technical infrastructure for Fortune 500s. We realized that mid-market and fast-scaling startups were being starved of this true elite talent.
                </p>
              </div>
              
              <div className="grid-stack-mob" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.05)', padding: '32px', borderRadius: '24px' }}>
                  <ShieldCheck size={32} color="var(--brand)" style={{ marginBottom: '16px' }} />
                  <h4 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>Tier 1 Pedigree</h4>
                  <p style={{ fontSize: '14px', color: 'var(--ink3)', lineHeight: 1.5 }}>Strategic leadership driven by ex-founders and deep industry experts.</p>
                </div>
                <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.05)', padding: 'clamp(24px, 3vw, 32px)', borderRadius: '24px' }}>
                  <Target size={32} color="var(--brand)" style={{ marginBottom: '16px' }} />
                  <h4 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>Global Polish</h4>
                  <p style={{ fontSize: '14px', color: 'var(--ink3)', lineHeight: 1.5 }}>Architected campaigns and systems for true global brands.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Client-Centric Manifesto */}
        <section className="wrap" style={{ marginBottom: '80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 className="h-section" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>How we treat our partners</h2>
            <p className="lead" style={{ margin: '0 auto' }}>When you win, we win. It is mathematically that simple.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 'clamp(16px, 3vw, 32px)' }}>
            <div className="glass" style={{ padding: 'clamp(24px, 4vw, 40px)', borderRadius: '24px', borderTop: '2px solid var(--brand)', backgroundImage: 'linear-gradient(to top, rgba(10,10,11,0.95) 0%, rgba(10,10,11,0.6) 100%), url(/about/metrics3.png)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <TrendingUp size={28} color="var(--brand)" style={{ marginBottom: '24px' }} />
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--ink)', marginBottom: '16px' }}>Your metrics are our metrics</h3>
                <p style={{ fontSize: '15px', color: 'var(--ink2)', lineHeight: 1.6 }}>We don't hide behind vanity "impressions." If our work doesn't verifiably increase your pipeline, save your time, or grow your top-line revenue, we have failed.</p>
              </div>
            </div>
            
            <div className="glass" style={{ padding: 'clamp(24px, 4vw, 40px)', borderRadius: '24px', backgroundImage: 'linear-gradient(to top, rgba(10,10,11,0.95) 0%, rgba(10,10,11,0.6) 100%), url(/about/transparency2.png)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <Users size={28} color="var(--brand)" style={{ marginBottom: '24px' }} />
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--ink)', marginBottom: '16px' }}>Radical transparency</h3>
                <p style={{ fontSize: '15px', color: 'var(--ink2)', lineHeight: 1.6 }}>You will never wonder what we are doing. You get direct slack access to the founders actually executing your work. No account managers acting as middlemen.</p>
              </div>
            </div>
            
            <div className="glass" style={{ padding: 'clamp(24px, 4vw, 40px)', borderRadius: '24px', backgroundImage: 'linear-gradient(to top, rgba(10,10,11,0.95) 0%, rgba(10,10,11,0.6) 100%), url(/about/capped2.png)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <Crown size={28} color="var(--brand)" style={{ marginBottom: '24px' }} />
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--ink)', marginBottom: '16px' }}>Capped bandwidth & elite focus</h3>
                <p style={{ fontSize: '15px', color: 'var(--ink2)', lineHeight: 1.6 }}>We intentionally restrict our active client roster. When you become a partner, you command our absolute un-divided attention. You will never be treated as just another ticket in an agency queue.</p>
              </div>
            </div>
            
            <div className="glass" style={{ padding: 'clamp(24px, 4vw, 40px)', borderRadius: '24px', backgroundImage: 'linear-gradient(to top, rgba(10,10,11,0.95) 0%, rgba(10,10,11,0.6) 100%), url(/about/bespoke2.png)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <Gem size={28} color="var(--brand)" style={{ marginBottom: '24px' }} />
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--ink)', marginBottom: '16px' }}>Bespoke, un-templated execution</h3>
                <p style={{ fontSize: '15px', color: 'var(--ink2)', lineHeight: 1.6 }}>Your business DNA is unique. We refuse to deploy cookie-cutter playbooks. Every system and strategy we engineer is meticulously tailor-made to dominate your specific market and unit economics.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
