'use client';

const steps = [
  { n: '01', t: 'Discovery & Audit', d: 'We dig deep into your current stack, funnels, and bottlenecks. We find exactly where money is leaking.' },
  { n: '02', t: 'Strategy & Roadmap', d: 'Within 48 hours, you get a zero-bs roadmap outlining what we will build, when, and the expected ROI.' },
  { n: '03', t: 'Execution Sprints', d: 'Our team gets to work. You get bi-weekly updates on shipped code, live campaigns, and deployed automations.' },
  { n: '04', t: 'Scale & Optimize', d: 'Once the baseline is set, we turn up the heat. Continuous A/B testing, scaling budgets, and refining systems.' }
];

export default function ProcessSection() {
  return (
    <section style={{ padding: '8vw 0', background: 'var(--surface-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="wrap">
        <div className="eyebrow" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--ink)' }}>How it works</div>
        <h2 className="h-section" style={{ maxWidth: '45%' }}>From &quot;hello&quot; to results in 4 steps</h2>
        <p className="lead" style={{ marginBottom: '80px' }}>
          No jargon. No endless onboarding. Just a clear, fast path to growth.
        </p>

        <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '4vw' }}>
          {steps.map((s, i) => (
            <div key={i} className="step-card" style={{ position: 'relative' }}>
              {i !== steps.length - 1 && (
                <div className="hidden lg:block" style={{ position: 'absolute', top: '26px', left: '70px', right: '-20px', height: '1px', background: 'linear-gradient(90deg, var(--border), transparent)', zIndex: 1 }} />
              )}
              <div className="step-num glass" style={{ width: 52, height: 52, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', fontWeight: 700, color: 'var(--ink2)', zIndex: 2, position: 'relative', marginBottom: '24px', transition: 'all 0.3s', border: '1px solid rgba(255,255,255,0.15)' }}>
                {s.n}
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--ink)', marginBottom: '12px' }}>{s.t}</h3>
              <p style={{ fontSize: '14.5px', color: 'var(--ink3)', lineHeight: 1.6 }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
