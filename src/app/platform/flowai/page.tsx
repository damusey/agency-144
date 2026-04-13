'use client';

import React, { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FinalCTA from '@/components/FinalCTA';
import { BarChart3, MessageSquareText, Database, Brain, ArrowRight, Zap, Clock, DollarSign, TrendingUp } from 'lucide-react';

/* ── ANIMATED COUNTER ── */
function useCounter(end: number, duration = 1800, suffix = '') {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - t0) / duration, 1);
          setVal(Math.round((1 - Math.pow(1 - p, 3)) * end));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration]);
  return { ref, display: `${val}${suffix}` };
}

/* ── DATA ── */
const coreAgents = [
  { icon: MessageSquareText, title: 'Conversational Intelligence', tagline: 'Your data speaks your language now.', desc: 'Ask anything in plain English — revenue trends, campaign ROI, churn predictions — and get precise, contextual answers in seconds. No query language. No analyst tickets.', metric: '95%+', metricLabel: 'Answer accuracy' },
  { icon: BarChart3, title: 'Autonomous Dashboards', tagline: 'Reports that build themselves.', desc: 'AI-generated dashboards and visualizations on demand. Schedule recurring reports to land in your inbox every morning — or let the system surface what matters before you ask.', metric: 'Minutes', metricLabel: 'Not weeks' },
  { icon: Brain, title: 'Proactive Insight Agents', tagline: 'A strategist that never sleeps.', desc: 'FlowAI agents learn your business rhythms, monitor your KPIs, and surface anomalies, opportunities, and recommendations autonomously — before problems become crises.', metric: '24/7', metricLabel: 'Always watching' },
];

const benefits = [
  { icon: DollarSign, title: 'Save ₹30L+/Year', desc: 'Replace the output of a 3-person analytics team.' },
  { icon: Clock, title: 'Scheduled Reports', desc: 'Daily, weekly, monthly — delivered automatically.' },
  { icon: TrendingUp, title: 'Zero Dashboard Backlog', desc: 'Every stakeholder gets answers in real time.' },
  { icon: Zap, title: '5x Faster Insights', desc: 'One conversation replaces days of SQL.' },
];

const engineLayers = [
  { num: '01', title: 'Data Architecture', desc: 'Maps entities, relationships, metrics, and lineage across your entire data stack.' },
  { num: '02', title: 'Business Logic', desc: 'Codifies your definitions, rules, and the tribal knowledge that makes answers useful.' },
  { num: '03', title: 'Operational Memory', desc: 'Disambiguates intent, maintains session context, and tracks multi-turn conversations.' },
  { num: '04', title: 'Continuous Learning', desc: 'Learns preferences, self-calibrates accuracy, and gets smarter with every interaction.' },
  { num: '05', title: 'Governance & Trust', desc: 'Role-based access, audit trails, and full answer explainability.' },
];

const useCases = [
  { role: 'Marketing', query: '"What was the blended ROAS across paid channels last quarter?"', time: '4 sec' },
  { role: 'Sales', query: '"Show me deals at risk of slipping from Q2 with > ₹10L value"', time: 'Instant' },
  { role: 'Finance', query: '"Generate a weekly P&L variance report vs. budget"', time: 'Scheduled' },
  { role: 'Product', query: '"Which features correlate most with 90-day retention?"', time: '6 sec' },
];

const integrations = ['Snowflake', 'BigQuery', 'PostgreSQL', 'Salesforce', 'HubSpot', 'Google Sheets', 'Redshift', 'MySQL', 'MongoDB', 'Slack', 'Tableau', 'dbt', 'Looker', 'Segment', 'Mixpanel', 'Stripe'];

export default function FlowAIPage() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add('fai-visible');
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.05 }
    );
    // Small delay to ensure refs are set
    const t = setTimeout(() => {
      sectionRefs.current.forEach(el => el && obs.observe(el));
    }, 100);
    return () => { clearTimeout(t); obs.disconnect(); };
  }, []);

  const addRef = (el: HTMLElement | null, i: number) => { sectionRefs.current[i] = el; };

  const c1 = useCounter(95, 1600, '%+');
  const c2 = useCounter(5, 1200, 'x');
  const c3 = useCounter(30, 1400, 'L+');
  const c4 = useCounter(24, 1000, '/7');

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>

        {/* Glow orb */}
        <div className="fai-glow-orb" />

        {/* ── HERO ── */}
        <section style={{ padding: '100px 0 32px', position: 'relative', zIndex: 10 }}>
          <div className="wrap" style={{ maxWidth: '860px' }}>
            <div className="fai-hero-badge">
              <Zap size={13} color="var(--brand)" />
              <span>Agentic AI Analytics</span>
            </div>
            <h1 className="fai-hero-title">
              Your Entire Analytics<br />
              Team. <span style={{ color: 'var(--brand)' }}>One AI Platform.</span>
            </h1>
            <p className="fai-hero-sub">
              FlowAI replaces analyst requests, dashboard backlogs, and stale reports with a single intelligent layer that answers any data question in seconds.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="/book" style={{ textDecoration: 'none' }}>
                <button className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '15px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  Request a Demo <ArrowRight size={16} />
                </button>
              </a>
              <span style={{ fontSize: '13px', color: 'var(--ink3)' }}>Free strategy consultation included</span>
            </div>
          </div>
        </section>

        {/* ── STATS BAR ── */}
        <section style={{ padding: '32px 0 48px', position: 'relative', zIndex: 10 }}>
          <div className="wrap">
            <div className="fai-stats-bar">
              <div ref={c1.ref} className="fai-stat">
                <div className="fai-stat-val">{c1.display}</div>
                <div className="fai-stat-label">Answer accuracy</div>
              </div>
              <div ref={c2.ref} className="fai-stat">
                <div className="fai-stat-val">{c2.display}</div>
                <div className="fai-stat-label">Faster insights</div>
              </div>
              <div ref={c3.ref} className="fai-stat">
                <div className="fai-stat-val">₹{c3.display}</div>
                <div className="fai-stat-label">Saved per year</div>
              </div>
              <div ref={c4.ref} className="fai-stat">
                <div className="fai-stat-val">{c4.display}</div>
                <div className="fai-stat-label">Autonomous monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section ref={el => addRef(el, 0)} className="fai-section" style={{ padding: '80px 0', position: 'relative', zIndex: 10 }}>
          <div className="wrap">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div className="fai-label">How it works</div>
              <h2 className="fai-heading">Three steps. Infinite clarity.</h2>
              <p className="fai-subtext" style={{ margin: '0 auto' }}>Operational in days, not months.</p>
            </div>
            <div className="fai-steps-grid">
              <div className="fai-steps-line" />
              {[
                { num: '01', icon: Database, title: 'Connect Your Data', desc: 'Plug in databases, CRMs, spreadsheets, and cloud warehouses. FlowAI maps your architecture automatically.' },
                { num: '02', icon: MessageSquareText, title: 'Ask Anything', desc: '"What was our CAC by channel last month?" — FlowAI interprets, queries, and returns the answer with full lineage.' },
                { num: '03', icon: Zap, title: 'Act on Insights', desc: 'Instant answers, auto-generated charts, scheduled reports, and proactive alerts. Data becomes decisions.' },
              ].map((step, i) => (
                <div key={step.num} className="fai-step" style={{ animationDelay: `${i * 0.2}s` }}>
                  <div className="fai-step-circle">
                    <step.icon size={30} color="var(--brand)" />
                    <div className="fai-step-pulse" />
                  </div>
                  <div className="fai-step-num">STEP {step.num}</div>
                  <h3 className="fai-step-title">{step.title}</h3>
                  <p className="fai-step-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CORE AGENTS ── */}
        <section ref={el => addRef(el, 1)} className="fai-section" style={{ padding: '80px 0', position: 'relative', zIndex: 10 }}>
          <div className="wrap">
            <div className="fai-label">Core Capabilities</div>
            <h2 className="fai-heading" style={{ marginBottom: '48px' }}>Intelligent agents by your side.</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {coreAgents.map((agent, i) => {
                const Icon = agent.icon;
                const rev = i % 2 !== 0;
                return (
                  <div key={agent.title} className={`fai-agent-card fai-slide-${rev ? 'right' : 'left'}`} style={{
                    display: 'grid', gridTemplateColumns: rev ? '180px 1fr' : '1fr 180px',
                    borderRadius: '24px', overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.07)', background: 'rgba(14,14,16,0.6)',
                  }}>
                    {rev && (
                      <div className="fai-agent-metric">
                        <div className="fai-agent-metric-val">{agent.metric}</div>
                        <div className="fai-agent-metric-label">{agent.metricLabel}</div>
                      </div>
                    )}
                    <div style={{ padding: '36px 40px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
                        <Icon size={22} color="var(--brand)" />
                        <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--ink)', margin: 0 }}>{agent.title}</h3>
                      </div>
                      <div style={{ fontSize: '14px', color: 'var(--brand)', fontStyle: 'italic', marginBottom: '12px', opacity: 0.85 }}>{agent.tagline}</div>
                      <p style={{ fontSize: '15px', color: 'var(--ink2)', lineHeight: 1.6, margin: 0 }}>{agent.desc}</p>
                    </div>
                    {!rev && (
                      <div className="fai-agent-metric">
                        <div className="fai-agent-metric-val">{agent.metric}</div>
                        <div className="fai-agent-metric-label">{agent.metricLabel}</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── BENEFITS ── */}
        <section ref={el => addRef(el, 2)} className="fai-section" style={{ padding: '80px 0', position: 'relative', zIndex: 10 }}>
          <div className="wrap">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div className="fai-label">Business Impact</div>
              <h2 className="fai-heading">Turn analytics into business results.</h2>
              <p className="fai-subtext" style={{ margin: '0 auto' }}>Stop waiting on dashboards. Start driving outcomes.</p>
            </div>
            <div className="fai-benefits-grid">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div key={b.title} className="fai-benefit-card" style={{ animationDelay: `${i * 0.12}s` }}>
                    <div className="fai-benefit-icon"><Icon size={22} color="var(--brand)" /></div>
                    <h3 className="fai-benefit-title">{b.title}</h3>
                    <p className="fai-benefit-desc">{b.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CINEMATIC ENGINE LIST ── */}
        <section ref={el => addRef(el, 3)} className="fai-section" style={{ padding: '100px 0', position: 'relative', zIndex: 10 }}>
          <div className="wrap" style={{ maxWidth: '900px' }}>
            <div style={{ marginBottom: '64px' }}>
              <div className="fai-label">Under the hood</div>
              <h2 className="fai-heading" style={{ fontSize: '36px' }}>The Contextual Intelligence Engine.</h2>
              <p className="fai-subtext">Every question passes through five layers of intelligence before it becomes an answer you can trust.</p>
            </div>

            <div className="fai-engine-list">
              {engineLayers.map((layer, i) => (
                <div key={layer.num} className="fai-engine-row" style={{ animationDelay: `${i * 0.12}s` }}>
                  <div className="fai-engine-num">{layer.num}</div>
                  <div className="fai-engine-body">
                    <h3 className="fai-engine-title">{layer.title}</h3>
                    <p className="fai-engine-desc">{layer.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── USE CASES ── */}
        <section ref={el => addRef(el, 4)} className="fai-section" style={{ padding: '80px 0', position: 'relative', zIndex: 10 }}>
          <div className="wrap">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div className="fai-label">See it in action</div>
              <h2 className="fai-heading">Real questions. Real answers.</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {useCases.map(uc => (
                <div key={uc.role} className="fai-query-card">
                  <div className="fai-query-role">{uc.role}</div>
                  <div className="fai-query-text">
                    <span className="fai-query-cursor" />
                    {uc.query}
                  </div>
                  <div className="fai-query-time">
                    <Zap size={12} /> {uc.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTEGRATIONS MARQUEE ── */}
        <section ref={el => addRef(el, 5)} className="fai-section" style={{ padding: '64px 0 80px', position: 'relative', zIndex: 10 }}>
          <div className="wrap">
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div className="fai-label">Integrations</div>
              <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.5px' }}>Connects to everything you already use.</h2>
            </div>
          </div>
          <div className="fai-marquee-wrap">
            <div className="fai-marquee">
              {[...integrations, ...integrations].map((name, i) => (
                <span key={`${name}-${i}`} className="fai-marquee-pill">{name}</span>
              ))}
            </div>
          </div>
        </section>

      </main>

      <FinalCTA />
      <Footer />

      <style dangerouslySetInnerHTML={{
        __html: `
        /* ── ANIMATIONS ── */
        .fai-section { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .fai-visible { opacity: 1 !important; transform: translateY(0) !important; }

        .fai-glow-orb {
          position: absolute; top: -100px; left: 50%; transform: translateX(-50%);
          width: 1000px; height: 800px; pointer-events: none;
          background: radial-gradient(circle, rgba(255,92,0,0.07) 0%, transparent 60%);
          animation: glowFloat 8s ease-in-out infinite;
        }
        @keyframes glowFloat { 0%,100%{transform:translateX(-50%) translateY(0);} 50%{transform:translateX(-50%) translateY(20px);} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px);} to{opacity:1;transform:translateY(0);} }
        @keyframes pulseRing { 0%,100%{transform:scale(1);opacity:0.4;} 50%{transform:scale(1.08);opacity:0;} }

        /* ── HERO ── */
        .fai-hero-badge {
          display:inline-flex; align-items:center; gap:8px;
          padding:6px 16px; border-radius:100px;
          background:rgba(255,92,0,0.08); border:1px solid rgba(255,92,0,0.15);
          margin-bottom:20px; animation:fadeUp 0.6s ease both;
        }
        .fai-hero-badge span { font-size:12.5px; color:var(--brand); font-weight:600; }
        .fai-hero-title {
          font-size:clamp(34px,4.5vw,56px); font-weight:700; color:var(--ink);
          letter-spacing:-2px; line-height:1.08; margin-bottom:20px;
          animation:fadeUp 0.7s ease 0.1s both;
        }
        .fai-hero-sub {
          font-size:17px; color:var(--ink2); line-height:1.65; max-width:600px; margin-bottom:32px;
          animation:fadeUp 0.7s ease 0.2s both;
        }

        /* ── STATS ── */
        .fai-stats-bar {
          display:grid; grid-template-columns:repeat(4,1fr); gap:12px;
          padding:24px; border-radius:20px;
          background:rgba(14,14,16,0.6); border:1px solid rgba(255,255,255,0.07);
        }
        .fai-stat { text-align:center; padding:12px 0; }
        .fai-stat-val { font-size:38px; font-weight:800; color:var(--brand); letter-spacing:-1px; line-height:1; margin-bottom:6px; }
        .fai-stat-label { font-size:12.5px; color:var(--ink3); }

        /* ── LABELS ── */
        .fai-label { font-size:11px; text-transform:uppercase; letter-spacing:2px; color:var(--brand); font-family:monospace; margin-bottom:12px; }
        .fai-heading { font-size:32px; font-weight:700; color:var(--ink); letter-spacing:-1px; margin-bottom:16px; }
        .fai-subtext { font-size:15px; color:var(--ink3); max-width:500px; line-height:1.6; }

        /* ── STEPS ── */
        .fai-steps-grid { display:grid; grid-template-columns:repeat(3,1fr); position:relative; }
        .fai-steps-line {
          position:absolute; top:52px; left:16.66%; right:16.66%; height:2px;
          background:linear-gradient(90deg,var(--brand),rgba(255,92,0,0.2),var(--brand)); z-index:0;
        }
        .fai-visible .fai-steps-line { animation:lineGrow 1s ease 0.3s both; }
        @keyframes lineGrow { from{transform:scaleX(0);} to{transform:scaleX(1);} }
        .fai-step { display:flex; flex-direction:column; align-items:center; text-align:center; position:relative; z-index:1; padding:0 20px; }
        .fai-visible .fai-step { animation:fadeUp 0.6s ease both; }
        .fai-step-circle {
          width:104px; height:104px; border-radius:50%; position:relative;
          background:radial-gradient(circle,rgba(255,92,0,0.1) 0%,rgba(12,12,14,0.95) 70%);
          border:2px solid rgba(255,92,0,0.2);
          display:flex; align-items:center; justify-content:center; margin-bottom:24px;
        }
        .fai-visible .fai-step-circle { animation:scaleIn 0.5s ease both; }
        @keyframes scaleIn { from{transform:scale(0.7);opacity:0;} to{transform:scale(1);opacity:1;} }
        .fai-step-pulse {
          position:absolute; inset:-6px; border-radius:50%; border:1px solid rgba(255,92,0,0.15);
          animation:pulseRing 2s ease-in-out infinite;
        }
        .fai-step-num { font-size:11px; color:var(--brand); font-family:monospace; letter-spacing:2px; margin-bottom:6px; }
        .fai-step-title { font-size:18px; font-weight:700; color:var(--ink); margin-bottom:8px; }
        .fai-step-desc { font-size:13.5px; color:var(--ink3); line-height:1.55; }

        /* ── AGENTS ── */
        .fai-agent-card { transition:border-color 0.3s,box-shadow 0.3s,transform 0.3s; }
        .fai-agent-card:hover { border-color:rgba(255,92,0,0.18)!important; box-shadow:0 0 48px rgba(255,92,0,0.04); transform:translateY(-2px); }
        .fai-agent-metric {
          display:flex; flex-direction:column; align-items:center; justify-content:center;
          border-left:1px solid rgba(255,255,255,0.06); background:rgba(255,92,0,0.03); padding:20px;
        }
        .fai-agent-metric-val { font-size:40px; font-weight:800; color:var(--brand); letter-spacing:-1px; line-height:1; }
        .fai-agent-metric-label { font-size:11px; color:var(--ink3); text-align:center; margin-top:8px; }
        .fai-visible .fai-slide-left { animation:slideLeft 0.6s ease both; }
        .fai-visible .fai-slide-right { animation:slideRight 0.6s ease both; }
        @keyframes slideLeft { from{opacity:0;transform:translateX(-40px);} to{opacity:1;transform:translateX(0);} }
        @keyframes slideRight { from{opacity:0;transform:translateX(40px);} to{opacity:1;transform:translateX(0);} }

        /* ── BENEFITS ── */
        .fai-benefits-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }
        .fai-benefit-card {
          padding:28px 24px; border-radius:20px;
          background:rgba(14,14,16,0.6); border:1px solid rgba(255,255,255,0.07);
          transition:border-color 0.3s,transform 0.3s,box-shadow 0.3s;
        }
        .fai-benefit-card:hover { border-color:rgba(255,92,0,0.18)!important; transform:translateY(-4px); box-shadow:0 12px 40px rgba(255,92,0,0.04); }
        .fai-visible .fai-benefit-card { animation:fadeUp 0.5s ease both; }
        .fai-benefit-icon {
          width:44px; height:44px; border-radius:14px;
          background:rgba(255,92,0,0.08); border:1px solid rgba(255,92,0,0.12);
          display:flex; align-items:center; justify-content:center; margin-bottom:16px;
        }
        .fai-benefit-title { font-size:16px; font-weight:700; color:var(--ink); margin-bottom:6px; }
        .fai-benefit-desc { font-size:13px; color:var(--ink3); line-height:1.5; margin:0; }

        /* ── CINEMATIC ENGINE LIST ── */
        .fai-engine-list { display:flex; flex-direction:column; gap:0; }

        .fai-engine-row {
          display:grid; grid-template-columns:80px 1fr; gap:24px;
          padding:32px 0; position:relative;
          border-bottom:1px solid rgba(255,255,255,0.05);
          transition:border-color 0.3s;
        }
        .fai-engine-row:first-child { border-top:1px solid rgba(255,255,255,0.05); }

        /* Hover: orange left glow */
        .fai-engine-row::before {
          content:''; position:absolute; left:-24px; top:0; bottom:0; width:3px;
          background:var(--brand); border-radius:3px;
          opacity:0; transition:opacity 0.3s;
        }
        .fai-engine-row:hover::before { opacity:1; }
        .fai-engine-row:hover { border-color:rgba(255,92,0,0.1); }

        .fai-visible .fai-engine-row { animation:fadeUp 0.5s ease both; }

        .fai-engine-num {
          font-size:48px; font-weight:800; font-family:monospace;
          color:var(--brand); opacity:0.15; line-height:1;
          transition:opacity 0.3s;
          padding-top:4px;
        }
        .fai-engine-row:hover .fai-engine-num { opacity:0.5; }

        .fai-engine-body { padding-top:6px; }
        .fai-engine-title {
          font-size:20px; font-weight:700; color:var(--ink); margin:0 0 8px;
          transition:color 0.3s;
        }
        .fai-engine-row:hover .fai-engine-title { color:var(--brand); }
        .fai-engine-desc {
          font-size:15px; color:var(--ink3); line-height:1.6; margin:0;
        }

        /* ── QUERY CARDS ── */
        .fai-query-card {
          padding:24px; border-radius:18px;
          background:rgba(14,14,16,0.6); border:1px solid rgba(255,255,255,0.07);
          transition:transform 0.3s, border-color 0.3s;
        }
        .fai-query-card:hover { transform:translateY(-3px) rotateX(1deg); border-color:rgba(255,92,0,0.15)!important; }
        .fai-query-role { font-size:12px; text-transform:uppercase; letter-spacing:1.5px; color:var(--brand); font-weight:600; margin-bottom:12px; }
        .fai-query-text {
          font-size:15px; color:var(--ink); line-height:1.5; font-style:italic;
          padding:14px 16px; border-radius:12px;
          background:rgba(255,92,0,0.03); border:1px solid rgba(255,92,0,0.08);
          margin-bottom:12px;
        }
        .fai-query-cursor {
          display:inline-block; width:2px; height:16px; background:var(--brand);
          margin-right:6px; vertical-align:text-bottom;
          animation:blink 1s step-end infinite;
        }
        @keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0;} }
        .fai-query-time {
          display:inline-flex; align-items:center; gap:5px;
          font-size:12px; color:var(--brand); font-weight:600;
          padding:4px 12px; border-radius:100px;
          background:rgba(255,92,0,0.06); border:1px solid rgba(255,92,0,0.1);
        }

        /* ── MARQUEE ── */
        .fai-marquee-wrap { overflow:hidden; width:100%; mask-image:linear-gradient(90deg,transparent,black 10%,black 90%,transparent); }
        .fai-marquee { display:flex; gap:12px; width:max-content; animation:scroll 30s linear infinite; }
        @keyframes scroll { from{transform:translateX(0);} to{transform:translateX(-50%);} }
        .fai-marquee-pill {
          padding:9px 22px; border-radius:100px;
          background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08);
          font-size:13px; color:var(--ink2); font-weight:500; white-space:nowrap;
        }

        /* ── MOBILE ── */
        @media (max-width:768px) {
          .fai-stats-bar { grid-template-columns:repeat(2,1fr)!important; }
          .fai-steps-grid { grid-template-columns:1fr!important; gap:32px; }
          .fai-steps-line { display:none; }
          .fai-benefits-grid { grid-template-columns:repeat(2,1fr)!important; }
          .fai-agent-card { grid-template-columns:1fr!important; }
          .fai-agent-metric { border-left:none!important; border-top:1px solid rgba(255,255,255,0.06); }
          .fai-engine-row { grid-template-columns:56px 1fr!important; gap:16px; }
          .fai-engine-num { font-size:36px; }
          .fai-engine-row::before { left:-12px; }
        }
      `}} />
    </>
  );
}
