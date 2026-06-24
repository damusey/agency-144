'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FinalCTA from '@/components/FinalCTA';
import { Bot, Globe, MessageCircle, ArrowRight, Zap, Clock, Users, BarChart3, Smartphone, Headphones, ShoppingBag, Repeat, CalendarCheck, Megaphone, Star, TrendingUp, CheckCircle2, Layers } from 'lucide-react';

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
const useCaseCards = [
  { icon: ShoppingBag, title: 'Sell More on Autopilot', desc: 'Recommend products, answer questions, and close orders — inside one chat.', example: '"Show me red kurtas under ₹2000 in M"' },
  { icon: Headphones, title: 'Support 24/7', desc: 'Order tracking, FAQs, refunds — handled instantly at 3am on a Sunday.', example: '"Where is my order?"' },
  { icon: Repeat, title: 'Drive Repeat Purchases', desc: 'Smart follow-ups with reorder reminders and personalised recommendations.', example: '"Hi Priya! 15% off the moisturizer that pairs with your serum"' },
  { icon: CalendarCheck, title: 'Book Appointments', desc: 'Natural conversation booking with calendar sync and auto-reminders.', example: '"I need a haircut Saturday around 4pm"' },
  { icon: Megaphone, title: 'Broadcast Campaigns', desc: 'WhatsApp broadcasts with 90%+ open rates and instant reply-to-buy flows.', example: '"Reply YES to grab yours" → instant order' },
  { icon: Users, title: 'Qualify Leads', desc: 'Capture info, score leads, and route hot prospects to your sales team.', example: '"What\'s your monthly budget?" → scores & alerts rep' },
];

const channels = [
  { icon: MessageCircle, name: 'WhatsApp', desc: 'Full Business API with catalogs, payments, and broadcasts.' },
  { icon: Globe, name: 'Website Chat', desc: 'Branded widget that captures leads even when you\'re offline.' },
  { icon: Smartphone, name: 'Mobile Apps', desc: 'Native SDKs for iOS and Android.' },
];

const howItWorks = [
  { num: '1', title: 'Tell us about your business', desc: 'Share your website, products, and brand voice.' },
  { num: '2', title: 'We build & train your bot', desc: 'We connect your systems and configure everything.' },
  { num: '3', title: 'Go live on every channel', desc: 'Your bot starts selling and supporting from day one.' },
];

const benefitCards = [
  { icon: Clock, title: 'Always On', desc: '24/7/365 — even holidays.' },
  { icon: TrendingUp, title: 'Gets Smarter', desc: 'Learns from every conversation.' },
  { icon: Users, title: 'Human Handoff', desc: 'Complex issues go to your team.' },
  { icon: Star, title: 'Feels Personal', desc: 'Remembers names and past orders.' },
  { icon: BarChart3, title: 'Analytics', desc: 'See what converts and what doesn\'t.' },
  { icon: Zap, title: 'Your Tools', desc: 'Shopify, Razorpay, Calendly, etc.' },
];

const faqs = [
  { q: 'How long does setup take?', a: 'Most bots are live within 48 hours. We handle all the configuration.' },
  { q: 'Do I need a developer?', a: 'Not at all. Our team builds, configures, and maintains your bot.' },
  { q: 'Can the bot hand off to a human?', a: 'Yes. Complex issues transfer seamlessly to your team with full context.' },
  { q: 'What if the bot gives a wrong answer?', a: 'It only answers what it\'s trained on and escalates anything it\'s unsure about.' },
  { q: 'Does it work with my existing tools?', a: 'Yes — Shopify, WooCommerce, Razorpay, Calendly, Google Sheets, CRMs, and more.' },
];

/* ── CHAT BUBBLE MOCKUP MESSAGES ── */
const chatMessages = [
  { from: 'user', text: 'Hey, do you have this in blue?' },
  { from: 'bot', text: 'Yes! We have 3 shades of blue in your size. Here are the options 👇' },
  { from: 'bot', text: '🛒 Added to cart! Want me to apply your 10% welcome coupon?' },
];

export default function FlowBotPage() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [visibleMsgs, setVisibleMsgs] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add('fb-visible'); obs.unobserve(e.target); } }),
      { threshold: 0.06 }
    );
    sectionRefs.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Animate chat messages
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    chatMessages.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleMsgs(i + 1), 800 + i * 1200));
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  const addRef = (el: HTMLElement | null, i: number) => { sectionRefs.current[i] = el; };

  const c1 = useCounter(70, 1600, '%');
  const c2 = useCounter(3, 1000, 'x');
  const c3 = useCounter(2, 1200, '');
  const c4 = useCounter(40, 1400, '%');

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "FlowBot",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            provider: {
              "@type": "Organization",
              name: "Oktuv",
              url: "https://www.oktuvglobal.com"
            },
            url: "https://www.oktuvglobal.com/platform/flowbot/",
            description: "FlowBot helps businesses sell more, support faster, and keep customers coming back — with intelligent chatbots on WhatsApp, web, and apps.",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              description: "Contact for custom enterprise pricing"
            }
          })
        }}
      />
      <main className="fb-main">

        <div className="fb-glow-orb" />

        {/* ══════════════════════════════════════════════
            HERO + CHAT MOCKUP
           ══════════════════════════════════════════════ */}
        <section style={{ padding: 'clamp(60px, 10vw, 100px) 0 32px', position: 'relative', zIndex: 10 }}>
          <div className="wrap">
            <div className="fb-hero-grid">
              {/* Left — copy */}
              <div>
                <div className="fb-hero-badge">
                  <Bot size={13} color="var(--brand)" />
                  <span>AI-Powered Conversations</span>
                </div>
                <h1 className="fb-hero-title">
                  Your Best Salesperson.<br />Your Best Support Agent.<br />
                  <span className="fb-highlight">Available 24/7.</span>
                </h1>
                <p className="fb-hero-sub">
                  FlowBot helps businesses sell more, support faster, and keep customers coming back — with intelligent chatbots on WhatsApp, web, and apps.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <Link href="/book/" style={{ textDecoration: 'none' }}>
                    <button className="btn btn-primary fb-hero-btn">
                      Get Your Bot Live <ArrowRight size={16} />
                    </button>
                  </Link>
                  <span style={{ fontSize: '13px', color: 'var(--ink3)' }}>48hr setup · No code</span>
                </div>
              </div>

              {/* Right — animated chat mockup */}
              <div className="fb-chat-mockup">
                <div className="fb-chat-header">
                  <div className="fb-chat-avatar"><Bot size={16} color="var(--brand)" /></div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink)' }}>FlowBot</div>
                    <div style={{ fontSize: '10px', color: 'var(--brand)' }}>● Online</div>
                  </div>
                </div>
                <div className="fb-chat-body">
                  {chatMessages.map((msg, i) => (
                    <div key={i} className={`fb-chat-msg fb-chat-${msg.from}`} style={{
                      opacity: i < visibleMsgs ? 1 : 0,
                      transform: i < visibleMsgs ? 'translateY(0)' : 'translateY(12px)',
                      transition: 'opacity 0.4s ease, transform 0.4s ease',
                    }}>
                      {msg.text}
                    </div>
                  ))}
                  {visibleMsgs < chatMessages.length && (
                    <div className="fb-typing">
                      <span /><span /><span />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            ANIMATED STATS
           ══════════════════════════════════════════════ */}
        <section style={{ padding: '24px 0 48px', position: 'relative', zIndex: 10 }}>
          <div className="wrap">
            <div className="fb-stats-bar">
              <div ref={c1.ref} className="fb-stat">
                <div className="fb-stat-val">{c1.display}</div>
                <div className="fb-stat-label">Queries resolved instantly</div>
              </div>
              <div ref={c2.ref} className="fb-stat">
                <div className="fb-stat-val">{c2.display}</div>
                <div className="fb-stat-label">More sales conversions</div>
              </div>
              <div ref={c3.ref} className="fb-stat">
                <div className="fb-stat-val">&lt;{c3.display} min</div>
                <div className="fb-stat-label">Avg response time</div>
              </div>
              <div ref={c4.ref} className="fb-stat">
                <div className="fb-stat-val">{c4.display}</div>
                <div className="fb-stat-label">Repeat purchase increase</div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            USE CASES — CASCADING CARDS
           ══════════════════════════════════════════════ */}
        <section ref={el => addRef(el, 0)} className="fb-section" style={{ padding: '80px 0', position: 'relative', zIndex: 10 }}>
          <div className="wrap">
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div className="fb-label">What your bot can do</div>
              <h2 className="fb-heading">One bot. Six superpowers.</h2>
              <p className="fb-subtext" style={{ margin: '0 auto' }}>From closing sales at midnight to following up weeks later.</p>
            </div>

            <div className="fb-usecase-grid">
              {useCaseCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <div key={card.title} className="fb-usecase-card" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="fb-usecase-icon-wrap">
                      <Icon size={20} color="var(--brand)" />
                    </div>
                    <h3 className="fb-usecase-title">{card.title}</h3>
                    <p className="fb-usecase-desc">{card.desc}</p>
                    <div className="fb-usecase-example">
                      <MessageCircle size={12} color="var(--brand)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{card.example}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            CHANNELS — WITH PULSE ICONS
           ══════════════════════════════════════════════ */}
        <section ref={el => addRef(el, 1)} className="fb-section" style={{ padding: '80px 0', position: 'relative', zIndex: 10 }}>
          <div className="wrap">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div className="fb-label">Available everywhere</div>
              <h2 className="fb-heading">Meet customers where they are.</h2>
            </div>
            <div className="fb-channel-grid">
              {channels.map((ch, i) => {
                const Icon = ch.icon;
                return (
                  <div key={ch.name} className="fb-channel-card" style={{ animationDelay: `${i * 0.15}s` }}>
                    <div className="fb-channel-icon">
                      <Icon size={26} color="var(--brand)" />
                      <div className="fb-channel-pulse" />
                    </div>
                    <h3 className="fb-channel-name">{ch.name}</h3>
                    <p className="fb-channel-desc">{ch.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            HOW IT WORKS — ANIMATED TIMELINE
           ══════════════════════════════════════════════ */}
        <section ref={el => addRef(el, 2)} className="fb-section" style={{ padding: '80px 0', position: 'relative', zIndex: 10 }}>
          <div className="wrap" style={{ maxWidth: '760px' }}>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div className="fb-label">How it works</div>
              <h2 className="fb-heading">Live in 48 hours. No coding.</h2>
              <p className="fb-subtext" style={{ margin: '0 auto' }}>We handle everything. You just tell us about your business.</p>
            </div>

            <div className="fb-timeline">
              <div className="fb-timeline-line" />
              {howItWorks.map((step, i) => (
                <div key={step.num} className="fb-timeline-row" style={{ animationDelay: `${i * 0.15}s` }}>
                  <div className="fb-timeline-node">
                    <span>{step.num}</span>
                    <div className="fb-timeline-node-ring" />
                  </div>
                  <div className="fb-timeline-content">
                    <h3 className="fb-timeline-title">{step.title}</h3>
                    <p className="fb-timeline-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '48px' }}>
              <Link href="/book/" style={{ textDecoration: 'none' }}>
                <button className="btn btn-primary fb-cta-pulse" style={{ padding: '14px 32px', fontSize: '15px', borderRadius: '12px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  Start Your Setup <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            BENEFITS — CASCADING GRID
           ══════════════════════════════════════════════ */}
        <section ref={el => addRef(el, 3)} className="fb-section" style={{ padding: '80px 0', position: 'relative', zIndex: 10 }}>
          <div className="wrap">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div className="fb-label">Why FlowBot</div>
              <h2 className="fb-heading">Not just a chatbot. A revenue machine.</h2>
            </div>
            <div className="fb-benefit-grid">
              {benefitCards.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div key={b.title} className="fb-benefit-card" style={{ animationDelay: `${i * 0.08}s` }}>
                    <Icon size={22} color="var(--brand)" style={{ marginBottom: '12px' }} />
                    <h3 className="fb-benefit-title">{b.title}</h3>
                    <p className="fb-benefit-desc">{b.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            FAQ — SMOOTH ACCORDION
           ══════════════════════════════════════════════ */}
        <section ref={el => addRef(el, 4)} className="fb-section" style={{ padding: '80px 0', position: 'relative', zIndex: 10 }}>
          <div className="wrap" style={{ maxWidth: '700px' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <div className="fb-label">Questions</div>
              <h2 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-0.5px' }}>Frequently asked</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {faqs.map((faq, i) => (
                <div key={i} className={`fb-faq-item ${openFaq === i ? 'fb-faq-open' : ''}`}>
                  <button className="fb-faq-btn" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    {faq.q}
                    <span className="fb-faq-icon">+</span>
                  </button>
                  <div className="fb-faq-answer">
                    <div className="fb-faq-answer-inner">{faq.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            FINAL CTA
           ══════════════════════════════════════════════ */}
        <section ref={el => addRef(el, 5)} className="fb-section" style={{ padding: '64px 0 80px', position: 'relative', zIndex: 10 }}>
          <div className="wrap" style={{ maxWidth: '700px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 700, color: 'var(--ink)', letterSpacing: '-1px', marginBottom: '16px' }}>Ready to put your business on autopilot?</h2>
            <p style={{ fontSize: '16px', color: 'var(--ink2)', lineHeight: 1.6, marginBottom: '32px' }}>
              Book a free 15-minute call. We&apos;ll have your bot live within 48 hours.
            </p>
            <Link href="/book/" style={{ textDecoration: 'none' }}>
              <button className="btn btn-primary fb-cta-pulse" style={{ padding: '16px 40px', fontSize: '16px', borderRadius: '12px', display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: '0 8px 30px rgba(255,92,0,0.3)' }}>
                Get Your Bot Live <ArrowRight size={18} />
              </button>
            </Link>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '20px', flexWrap: 'wrap' }}>
              {['No coding needed', 'Live in 48 hours', 'Cancel anytime'].map(t => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--ink3)' }}>
                  <CheckCircle2 size={13} color="var(--brand)" /> {t}
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        .fb-main { min-height: 100vh; background: var(--bg); position: relative; overflow: hidden; }

        /* ── GLOW ── */
        .fb-glow-orb {
          position: absolute; top: -100px; left: 50%; transform: translateX(-50%);
          width: 1000px; height: 800px; pointer-events: none;
          background: radial-gradient(circle, rgba(255,92,0,0.07) 0%, transparent 60%);
          animation: fbGlow 8s ease-in-out infinite;
        }
        @keyframes fbGlow { 0%,100%{ transform:translateX(-50%) translateY(0); } 50%{ transform:translateX(-50%) translateY(18px); } }

        /* ── SECTIONS ── */
        .fb-section { opacity:0; transform:translateY(30px); transition:opacity 0.6s ease, transform 0.6s ease; }
        .fb-visible { opacity:1; transform:translateY(0); }

        /* ── HERO ── */
        .fb-hero-grid { display:grid; grid-template-columns:1fr 340px; gap:48px; align-items:center; }
        .fb-hero-badge {
          display:inline-flex; align-items:center; gap:8px;
          padding:6px 16px; border-radius:100px;
          background:rgba(255,92,0,0.08); border:1px solid rgba(255,92,0,0.15);
          margin-bottom:20px; animation:fbUp 0.6s ease both;
        }
        .fb-hero-badge span { font-size:12.5px; color:var(--brand); font-weight:600; }
        .fb-hero-title { font-size:clamp(30px,4vw,48px); font-weight:700; color:var(--ink); letter-spacing:-2px; line-height:1.08; margin-bottom:18px; animation:fbUp 0.7s ease 0.1s both; }
        .fb-highlight { color:var(--brand); }
        .fb-hero-sub { font-size:16px; color:var(--ink2); line-height:1.65; max-width:480px; margin-bottom:28px; animation:fbUp 0.7s ease 0.2s both; }
        .fb-hero-btn { padding:14px 30px; font-size:15px; border-radius:12px; display:flex; align-items:center; gap:8px; animation:fbUp 0.7s ease 0.3s both; }
        @keyframes fbUp { from{opacity:0;transform:translateY(16px);} to{opacity:1;transform:translateY(0);} }

        /* ── CHAT MOCKUP ── */
        .fb-chat-mockup {
          border-radius:24px; overflow:hidden;
          border:1px solid rgba(255,255,255,0.1);
          background:rgba(14,14,16,0.8);
          box-shadow:0 20px 60px rgba(0,0,0,0.3);
          animation:fbUp 0.8s ease 0.4s both;
        }
        .fb-chat-header {
          padding:14px 18px; display:flex; align-items:center; gap:10px;
          border-bottom:1px solid rgba(255,255,255,0.06);
          background:rgba(255,92,0,0.03);
        }
        .fb-chat-avatar {
          width:32px; height:32px; border-radius:50%;
          background:rgba(255,92,0,0.1); border:1px solid rgba(255,92,0,0.2);
          display:flex; align-items:center; justify-content:center;
        }
        .fb-chat-body { padding:18px; display:flex; flex-direction:column; gap:10px; min-height:160px; }
        .fb-chat-msg { padding:10px 14px; border-radius:16px; font-size:13px; line-height:1.45; max-width:85%; }
        .fb-chat-user {
          background:rgba(255,92,0,0.12); color:var(--ink); align-self:flex-end;
          border-bottom-right-radius:4px;
        }
        .fb-chat-bot {
          background:rgba(255,255,255,0.06); color:var(--ink2); align-self:flex-start;
          border-bottom-left-radius:4px;
        }
        .fb-typing { display:flex; gap:4px; align-self:flex-start; padding:8px 14px; }
        .fb-typing span {
          width:6px; height:6px; border-radius:50%; background:var(--brand); opacity:0.4;
          animation:fbTypeDot 1.4s ease-in-out infinite;
        }
        .fb-typing span:nth-child(2) { animation-delay:0.2s; }
        .fb-typing span:nth-child(3) { animation-delay:0.4s; }
        @keyframes fbTypeDot { 0%,60%,100%{transform:translateY(0);opacity:0.4;} 30%{transform:translateY(-4px);opacity:1;} }

        /* ── STATS ── */
        .fb-stats-bar {
          display:grid; grid-template-columns:repeat(4,1fr); gap:12px;
          padding:24px; border-radius:20px;
          background:rgba(14,14,16,0.6); border:1px solid rgba(255,255,255,0.07);
        }
        .fb-stat { text-align:center; padding:12px 0; }
        .fb-stat-val { font-size:38px; font-weight:800; color:var(--brand); letter-spacing:-1px; line-height:1; margin-bottom:6px; }
        .fb-stat-label { font-size:12.5px; color:var(--ink3); }

        /* ── LABELS ── */
        .fb-label { font-size:11px; text-transform:uppercase; letter-spacing:2px; color:var(--brand); font-family:monospace; margin-bottom:12px; }
        .fb-heading { font-size:32px; font-weight:700; color:var(--ink); letter-spacing:-1px; margin-bottom:16px; }
        .fb-subtext { font-size:15px; color:var(--ink3); max-width:480px; line-height:1.6; }

        /* ── USE CASES ── */
        .fb-usecase-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
        .fb-usecase-card {
          padding:28px 24px; border-radius:20px;
          background:rgba(14,14,16,0.6); border:1px solid rgba(255,255,255,0.07);
          transition:border-color 0.3s,transform 0.3s,box-shadow 0.3s;
          display:flex; flex-direction:column; gap:10px;
        }
        .fb-usecase-card:hover { border-color:rgba(255,92,0,0.18)!important; transform:translateY(-4px); box-shadow:0 12px 40px rgba(255,92,0,0.04); }
        .fb-visible .fb-usecase-card { animation:fbUp 0.5s ease both; }
        .fb-usecase-icon-wrap {
          width:40px; height:40px; border-radius:12px;
          background:rgba(255,92,0,0.08); border:1px solid rgba(255,92,0,0.12);
          display:flex; align-items:center; justify-content:center;
        }
        .fb-usecase-title { font-size:16px; font-weight:700; color:var(--ink); margin:0; }
        .fb-usecase-desc { font-size:13.5px; color:var(--ink3); line-height:1.5; margin:0; flex:1; }
        .fb-usecase-example {
          display:flex; gap:8px; align-items:flex-start;
          padding:10px 14px; border-radius:14px;
          background:rgba(255,92,0,0.03); border:1px solid rgba(255,92,0,0.08);
          font-size:12px; color:var(--ink3); line-height:1.4; font-style:italic;
        }

        /* ── CHANNELS ── */
        .fb-channel-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
        .fb-channel-card {
          padding:32px 24px; border-radius:20px;
          background:rgba(14,14,16,0.6); border:1px solid rgba(255,255,255,0.07);
          text-align:center; transition:border-color 0.3s,transform 0.3s;
        }
        .fb-channel-card:hover { border-color:rgba(255,92,0,0.2)!important; transform:translateY(-3px); }
        .fb-visible .fb-channel-card { animation:fbScaleIn 0.5s ease both; }
        @keyframes fbScaleIn { from{opacity:0;transform:scale(0.9);} to{opacity:1;transform:scale(1);} }
        .fb-channel-icon {
          width:56px; height:56px; border-radius:16px; position:relative;
          background:rgba(255,92,0,0.08); border:1px solid rgba(255,92,0,0.12);
          display:flex; align-items:center; justify-content:center; margin:0 auto 16px;
        }
        .fb-channel-pulse {
          position:absolute; inset:-5px; border-radius:20px;
          border:1px solid rgba(255,92,0,0.12);
          animation:fbPulse 2.5s ease-in-out infinite;
        }
        @keyframes fbPulse { 0%,100%{transform:scale(1);opacity:0.4;} 50%{transform:scale(1.1);opacity:0;} }
        .fb-channel-name { font-size:17px; font-weight:700; color:var(--ink); margin-bottom:8px; }
        .fb-channel-desc { font-size:13px; color:var(--ink3); line-height:1.5; margin:0; }

        /* ── TIMELINE ── */
        .fb-timeline { position:relative; display:flex; flex-direction:column; }
        .fb-timeline-line {
          position:absolute; left:31px; top:0; bottom:0; width:2px;
          background:linear-gradient(180deg,var(--brand),rgba(255,92,0,0.08)); z-index:0;
        }
        .fb-visible .fb-timeline-line { animation:fbLineDown 1s ease both; }
        @keyframes fbLineDown { from{transform:scaleY(0);transform-origin:top;} to{transform:scaleY(1);transform-origin:top;} }
        .fb-timeline-row {
          display:grid; grid-template-columns:64px 1fr; gap:20px;
          padding-bottom:36px; position:relative; z-index:1;
        }
        .fb-timeline-row:last-child { padding-bottom:0; }
        .fb-visible .fb-timeline-row { animation:fbUp 0.5s ease both; }
        .fb-timeline-node {
          width:64px; height:64px; border-radius:50%; position:relative;
          background:rgba(12,12,14,0.95); border:2px solid rgba(255,92,0,0.25);
          display:flex; align-items:center; justify-content:center;
          font-size:22px; font-weight:800; color:var(--brand);
          box-shadow:0 0 24px rgba(255,92,0,0.08);
        }
        .fb-timeline-node-ring {
          position:absolute; inset:-6px; border-radius:50%;
          border:1px solid rgba(255,92,0,0.12);
          animation:fbPulse 2s ease-in-out infinite;
        }
        .fb-timeline-title { font-size:20px; font-weight:700; color:var(--ink); margin-bottom:6px; }
        .fb-timeline-desc { font-size:15px; color:var(--ink2); line-height:1.6; margin:0; }
        .fb-timeline-content { padding-top:14px; }

        /* ── BENEFITS ── */
        .fb-benefit-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
        .fb-benefit-card {
          padding:28px 24px; border-radius:18px;
          background:rgba(14,14,16,0.6); border:1px solid rgba(255,255,255,0.07);
          transition:border-color 0.3s,transform 0.3s,box-shadow 0.3s;
        }
        .fb-benefit-card:hover { border-color:rgba(255,92,0,0.18)!important; transform:translateY(-4px); box-shadow:0 12px 40px rgba(255,92,0,0.04); }
        .fb-visible .fb-benefit-card { animation:fbUp 0.5s ease both; }
        .fb-benefit-title { font-size:16px; font-weight:700; color:var(--ink); margin-bottom:4px; }
        .fb-benefit-desc { font-size:13px; color:var(--ink3); line-height:1.5; margin:0; }

        /* ── FAQ ── */
        .fb-faq-item {
          border-radius:16px; overflow:hidden;
          border:1px solid rgba(255,255,255,0.07);
          background:rgba(14,14,16,0.6);
          transition:background 0.2s,border-color 0.2s;
        }
        .fb-faq-open { background:rgba(255,92,0,0.03)!important; border-color:rgba(255,92,0,0.12)!important; }
        .fb-faq-btn {
          width:100%; padding:20px 24px;
          background:none; border:none; cursor:pointer;
          display:flex; align-items:center; justify-content:space-between;
          color:var(--ink); font-size:15px; font-weight:600; text-align:left;
        }
        .fb-faq-icon {
          font-size:20px; color:var(--brand); transition:transform 0.3s;
          display:inline-block;
        }
        .fb-faq-open .fb-faq-icon { transform:rotate(45deg); }
        .fb-faq-answer {
          max-height:0; overflow:hidden;
          transition:max-height 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .fb-faq-open .fb-faq-answer { max-height:200px; }
        .fb-faq-answer-inner { padding:0 24px 20px; font-size:14px; color:var(--ink3); line-height:1.6; }

        /* ── CTA PULSE ── */
        .fb-cta-pulse { animation:fbCtaPulse 2.5s ease-in-out infinite; }
        @keyframes fbCtaPulse { 0%,100%{box-shadow:0 8px 30px rgba(255,92,0,0.3);} 50%{box-shadow:0 8px 50px rgba(255,92,0,0.5);} }

        /* ── RESPONSIVE (<1024px) ── */
        @media (max-width:1023px) {
          .fb-hero-grid { grid-template-columns:1fr!important; }
          .fb-chat-mockup { max-width:340px; margin:0 auto; }
          .fb-stats-bar { grid-template-columns:repeat(2,1fr)!important; }
          .fb-usecase-grid { grid-template-columns:1fr!important; }
          .fb-channel-grid { grid-template-columns:1fr!important; }
          .fb-benefit-grid { grid-template-columns:repeat(2,1fr)!important; }
        }

        /* ── RESPONSIVE (<665px Small Mobile) ── */
        @media (max-width:665px) {
          .fb-hero-title { font-size:clamp(26px,7vw,36px)!important; letter-spacing:-1px; }
          .fb-hero-sub { font-size:14px!important; }
          .fb-chat-mockup { max-width:100%!important; }
          .fb-stat-val { font-size:28px!important; }
          .fb-stat-label { font-size:11px!important; }
          .fb-benefit-grid { grid-template-columns:1fr!important; }
          .fb-heading { font-size:24px!important; }
          .fb-usecase-card { padding:20px 18px!important; }
          .fb-channel-card { padding:24px 18px!important; }
          .fb-benefit-card { padding:22px 18px!important; }
          .fb-timeline-row { grid-template-columns:48px 1fr!important; gap:14px; }
          .fb-timeline-node { width:48px!important; height:48px!important; font-size:16px!important; }
          .fb-timeline-line { left:23px!important; }
          .fb-timeline-title { font-size:17px!important; }
          .fb-timeline-desc { font-size:14px!important; }
          .fb-faq-btn { padding:16px 18px!important; font-size:14px!important; }
          .fb-faq-answer-inner { padding:0 18px 16px!important; font-size:13px!important; }
        }
      `}} />
    </>
  );
}
