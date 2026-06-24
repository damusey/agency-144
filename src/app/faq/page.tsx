'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const faqCategories = [
  {
    label: 'Working With Us',
    faqs: [
      {
        q: "We're very early — we haven't even registered our company yet. Can you still help?",
        a: "Absolutely. Some of our best work has been with founders at Day Zero. We've helped pre-registration startups go from an idea on a napkin to a live product with paying customers. Company registration is a formality — what matters is your ambition and clarity of vision. We'll build the tech, brand, and growth infrastructure while you handle the paperwork."
      },
      {
        q: "Do you offer white-label services?",
        a: "Yes. We build products, platforms, and digital assets that launch under your brand — your name, your identity, zero mention of ours. Several of our clients run SaaS products and agency services that we engineered end-to-end behind the scenes. Your customers will never know we exist, and that's exactly the point."
      },
      {
        q: "How are you different from a standard dev agency?",
        a: "Most agencies take a brief and build exactly what you asked for. We take a brief and challenge it — because what you need and what you asked for are often two different things. We think in revenue impact, not feature lists. Every decision we make is filtered through one question: will this make or save you money? If the answer is no, we'll tell you before you spend a rupee."
      },
      {
        q: "Do you work with early-stage startups or only established businesses?",
        a: "Both. We've scaled Series B companies and we've built MVPs for solo founders. What we look for isn't stage — it's intent. If you're serious about building something real and you're ready to move fast, we're the right team. We've deliberately built our engagement models to be flexible enough for a bootstrapped founder and rigorous enough for a funded scale-up."
      },
      {
        q: "Will we have a dedicated team or get rotated between projects?",
        a: "Dedicated. When you work with us, you get a consistent team that builds deep context on your business, your users, and your goals. We don't do the agency shuffle where you explain your product to a new developer every month. Your team knows your codebase, your metrics, and your roadmap inside out."
      },
    ]
  },
  {
    label: 'Tech & Delivery',
    faqs: [
      {
        q: "What tech stack do you work with?",
        a: "All of them. We have senior engineers across React, Next.js, Vue, Angular, Flutter, React Native, Python, Node.js, Go, Java, .NET, PHP — and deep expertise in cloud infrastructure (AWS, GCP, Azure). We don't push a single stack on every client. We assess your requirements, team capabilities, and long-term maintainability, then recommend what actually fits. If you already have a codebase, we work within it."
      },
      {
        q: "What's the typical timeline for a project?",
        a: "Most initial builds — a complete website, a data pipeline, or an AI agent — take 3 to 5 weeks. But we don't disappear after launch. We shift into iterative monthly sprints where we optimize, expand, and compound the results. The first sprint gets you live. The following sprints make you dominant."
      },
      {
        q: "Can you integrate with our existing systems?",
        a: "That's often where we start. We've connected with Salesforce, HubSpot, Zoho, Snowflake, custom ERPs, legacy SOAP APIs, government portals, and everything in between. If it has an API, we'll connect it. If it doesn't, we'll find a way. Your existing infrastructure is an asset — we build on top of it, not around it."
      },
      {
        q: "Who owns the code and designs?",
        a: "You do. 100%, from day one. Every line of code, every design file, every pipeline — it all lives in your accounts (GitHub, AWS, Figma, Vercel, wherever you choose). If our engagement ends tomorrow, you walk away with a fully functional, documented system that any competent team can maintain. We build to empower you, not to create dependency."
      },
      {
        q: "How do you handle data security and privacy?",
        a: "With the seriousness it deserves. We follow industry-standard security practices — encrypted communications, role-based access control, secure credential management, and clean separation of environments. For clients in regulated industries, we adapt our processes to meet their specific compliance requirements. Your data is your most valuable asset, and we treat it that way."
      },
    ]
  },
  {
    label: 'Investment & Terms',
    faqs: [
      {
        q: "What does pricing look like?",
        a: "We work on monthly retainers or fixed-scope project engagements — never hourly billing. Hourly billing incentivizes slowness; we incentivize outcomes. Pricing depends on scope and complexity, but we're transparent about it. Book a discovery call and we'll give you a clear, itemized quote within 48 hours. No surprises, no hidden costs, no scope-creep invoices."
      },
      {
        q: "Is there a minimum engagement period?",
        a: "For retainers, we recommend a 3-month minimum — not because we need to lock you in, but because meaningful results take at least one full cycle of build, measure, and optimize. That said, project-based work has no minimum. If you need one specific thing built well, we'll scope it, price it, and deliver it."
      },
      {
        q: "What if we want to scale up or down?",
        a: "Simple. Our team structure is designed for flexibility. Need to accelerate a launch? We can ramp up within a week. Need to pause during a quiet quarter? We'll adjust without penalties. We'd rather build a relationship that adapts to your reality than force you into a rigid contract that doesn't."
      },
      {
        q: "Do you offer any guarantees?",
        a: "We guarantee transparency, ownership, and craftsmanship. We won't promise you'll 10x revenue in 30 days — anyone who does is lying. What we will promise is that every system we build is production-grade, thoroughly tested, and designed to compound returns over time. And if something breaks, we fix it. No ticket queues, no blame games."
      },
    ]
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<string>('0-0');

  return (
    <>
      <Navbar />
      
      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqCategories.flatMap(cat => cat.faqs).map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a
              }
            }))
          })
        }}
      />

      <main style={{ minHeight: '100vh', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>

        {/* Hero */}
        <section style={{ padding: '120px 0 48px', position: 'relative', zIndex: 10 }}>
          <div className="wrap" style={{ maxWidth: '800px' }}>
            <div style={{ textAlign: 'center' }}>
              <h1 style={{
                fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 700,
                color: 'var(--ink)', letterSpacing: '-1.5px', lineHeight: 1.1,
                marginBottom: '16px',
              }}>
                Everything you need to know.
              </h1>
              <p style={{ fontSize: '17px', color: 'var(--ink3)', lineHeight: 1.6, maxWidth: '540px', margin: '0 auto 40px' }}>
                Straight answers, no jargon. If something&apos;s not covered here, we&apos;re one call away.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section style={{ padding: '0 0 80px', position: 'relative', zIndex: 10 }}>
          <div className="wrap" style={{ maxWidth: '740px' }}>
            {faqCategories.map((cat, ci) => (
              <div key={ci} style={{ marginBottom: ci < faqCategories.length - 1 ? '48px' : 0 }}>
                {/* Category label */}
                <div style={{
                  display: 'inline-block', fontSize: '11px', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '2px',
                  color: 'var(--brand)', marginBottom: '20px',
                  padding: '6px 14px', borderRadius: '100px',
                  background: 'rgba(255,92,0,0.06)', border: '1px solid rgba(255,92,0,0.1)',
                }}>
                  {cat.label}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {cat.faqs.map((f, fi) => {
                    const key = `${ci}-${fi}`;
                    const isOpen = open === key;
                    return (
                      <div
                        key={key}
                        onClick={() => setOpen(isOpen ? '' : key)}
                        style={{
                          borderRadius: '16px', padding: '22px 28px', cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          background: isOpen ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.02)',
                          border: isOpen ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(255,255,255,0.05)',
                        }}
                      >
                        <div style={{
                          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                          fontWeight: 600, fontSize: '15.5px', color: 'var(--ink)', lineHeight: 1.4,
                        }}>
                          <span style={{ paddingRight: '16px' }}>{f.q}</span>
                          <ChevronDown
                            size={18}
                            style={{
                              transform: isOpen ? 'rotate(180deg)' : 'none',
                              transition: 'transform 0.3s',
                              color: isOpen ? 'var(--brand)' : 'var(--ink3)',
                              flexShrink: 0,
                            }}
                          />
                        </div>
                        <div style={{
                          maxHeight: isOpen ? '500px' : 0,
                          overflow: 'hidden',
                          opacity: isOpen ? 1 : 0,
                          transition: 'max-height 0.4s ease, opacity 0.3s ease',
                        }}>
                          <p style={{ marginTop: '14px', fontSize: '14.5px', color: 'var(--ink2)', lineHeight: 1.7 }}>{f.a}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* CTA */}
            <div style={{
              textAlign: 'center', marginTop: '64px',
              padding: '40px', borderRadius: '20px',
              background: 'rgba(255,92,0,0.03)', border: '1px solid rgba(255,92,0,0.08)',
            }}>
              <p style={{ fontSize: '18px', fontWeight: 600, color: 'var(--ink)', marginBottom: '8px' }}>
                Didn&apos;t find your answer?
              </p>
              <p style={{ fontSize: '14px', color: 'var(--ink3)', marginBottom: '24px' }}>
                We&apos;ll get back to you within 24 hours. No pitch decks, just a real conversation.
              </p>
              <Link href="/book/" style={{ textDecoration: 'none' }}>
                <button className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '15px', borderRadius: '12px' }}>
                  Book a free call
                </button>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
