'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowRight, Clock, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_CONTACT_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT!,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_CONTACT_EMAILJS_PUBLIC_KEY!,
      );
      setStatus('success');

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const contactInfo = [
    {
      id: 'phone',
      icon: Phone,
      label: 'Phone',
      value: '+91 - 9872409304\n+91 - 8145204155',
      href: 'tel:+919872409304',
      gradient: 'linear-gradient(135deg, rgba(255,92,0,0.15), rgba(255,92,0,0.03))',
      borderColor: 'rgba(255,92,0,0.2)',
    },
    {
      id: 'email',
      icon: Mail,
      label: 'Email',
      value: 'info@oktuvglobal.com',
      href: 'mailto:info@oktuvglobal.com',
      gradient: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.03))',
      borderColor: 'rgba(16,185,129,0.2)',
    },
    {
      id: 'address',
      icon: MapPin,
      label: 'Office Address',
      value: '144, Sector 31, Gurgaon, Haryana, India',
      href: 'https://maps.google.com/?q=Sector+31+Gurgaon+Haryana+India',
      gradient: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(99,102,241,0.03))',
      borderColor: 'rgba(99,102,241,0.2)',
    },
  ];

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', background: 'var(--surface)', position: 'relative', overflow: 'hidden' }}>

        {/* Background mesh */}
        <div className="mesh-bg" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <div className="mesh-orb-1" />
          <div className="mesh-orb-2" />
          <div className="mesh-orb-3" />
          <div className="hero-glass-overlay" />
        </div>

        {/* ── Hero Section ───────────────────────── */}
        <section style={{ padding: '140px 0 60px', position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <div className="wrap" style={{ maxWidth: '720px' }}>
            <span className="eyebrow">Get in Touch</span>
            <h1 className="h-display" style={{ marginBottom: '16px' }}>
              Let&apos;s Build Something <span style={{ color: 'var(--brand)' }}>Extraordinary</span>
            </h1>
            <p className="lead" style={{ margin: '0 auto', maxWidth: '540px' }}>
              Whether you have a question, a project idea, or just want to say hello — we&apos;d love to hear from you. Our team typically responds within 24 hours.
            </p>
          </div>
        </section>

        {/* ── Contact Cards ──────────────────────── */}
        <section style={{ padding: '40px 0 60px', position: 'relative', zIndex: 10 }}>
          <div className="wrap" style={{ maxWidth: '1080px' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
            }} className="grid-3">
              {contactInfo.map((info) => {
                const IconComp = info.icon;
                const isHovered = hoveredCard === info.id;
                return (
                  <a
                    key={info.id}
                    href={info.href}
                    target={info.id === 'address' ? '_blank' : undefined}
                    rel={info.id === 'address' ? 'noopener noreferrer' : undefined}
                    onMouseEnter={() => setHoveredCard(info.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      textDecoration: 'none',
                      background: isHovered ? info.gradient : 'rgba(255,255,255,0.02)',
                      border: `1px solid ${isHovered ? info.borderColor : 'rgba(255,255,255,0.06)'}`,
                      borderRadius: '20px',
                      padding: '36px 28px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      gap: '16px',
                      transition: 'all 0.3s ease',
                      transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                      boxShadow: isHovered
                        ? '0 20px 50px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.05) inset'
                        : '0 4px 20px rgba(0,0,0,0.15)',
                    }}
                  >
                    <div style={{
                      width: 'min(56px, 100vw)',
                      height: '56px',
                      borderRadius: '16px',
                      background: info.gradient,
                      border: `1px solid ${info.borderColor}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'transform 0.3s ease',
                      transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                    }}>
                      <IconComp size={24} color={info.id === 'phone' ? 'var(--brand)' : info.id === 'email' ? '#10B981' : '#6366f1'} />
                    </div>
                    <div>
                      <div style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: 'var(--ink3)',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: '8px',
                      }}>{info.label}</div>
                      <div style={{
                        fontSize: '15px',
                        fontWeight: 600,
                        color: 'var(--ink)',
                        lineHeight: 1.5,
                        whiteSpace: 'pre-line',
                      }}>{info.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Contact Form + Map ─────────────────── */}
        <section style={{ padding: '40px 0 100px', position: 'relative', zIndex: 10 }}>
          <div className="wrap" style={{ maxWidth: '1080px' }}>
            <div className="grid-stack-mob" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '40px',
              alignItems: 'start',
            }}>

              {/* Form */}
              <div style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '24px',
                padding: '40px',
                boxShadow: '0 16px 40px rgba(0,0,0,0.2)',
              }}>
                <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--ink)', marginBottom: '6px' }}>
                  Send us a Message
                </h2>
                <p style={{ fontSize: '14px', color: 'var(--ink3)', marginBottom: '32px' }}>
                  Fill in the form and we&apos;ll get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink2)', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px', display: 'block' }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                      placeholder="John Doe"
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '12px',
                        color: 'var(--ink)',
                        fontSize: '14px',
                        outline: 'none',
                        transition: 'border-color 0.2s, box-shadow 0.2s',
                        fontFamily: 'var(--font)',
                      }}
                      onFocus={e => { e.currentTarget.style.borderColor = 'var(--brand)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255,92,0,0.1)'; }}
                      onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.boxShadow = 'none'; }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink2)', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px', display: 'block' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                      placeholder="john@company.com"
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '12px',
                        color: 'var(--ink)',
                        fontSize: '14px',
                        outline: 'none',
                        transition: 'border-color 0.2s, box-shadow 0.2s',
                        fontFamily: 'var(--font)',
                      }}
                      onFocus={e => { e.currentTarget.style.borderColor = 'var(--brand)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255,92,0,0.1)'; }}
                      onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.boxShadow = 'none'; }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink2)', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px', display: 'block' }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={e => setFormData(p => ({ ...p, subject: e.target.value }))}
                      placeholder="Project inquiry"
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '12px',
                        color: 'var(--ink)',
                        fontSize: '14px',
                        outline: 'none',
                        transition: 'border-color 0.2s, box-shadow 0.2s',
                        fontFamily: 'var(--font)',
                      }}
                      onFocus={e => { e.currentTarget.style.borderColor = 'var(--brand)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255,92,0,0.1)'; }}
                      onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.boxShadow = 'none'; }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '12px', fontWeight: 600, color: 'var(--ink2)', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px', display: 'block' }}>
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                      placeholder="Tell us about your project..."
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '12px',
                        color: 'var(--ink)',
                        fontSize: '14px',
                        outline: 'none',
                        transition: 'border-color 0.2s, box-shadow 0.2s',
                        fontFamily: 'var(--font)',
                        resize: 'vertical',
                        minHeight: '120px',
                      }}
                      onFocus={e => { e.currentTarget.style.borderColor = 'var(--brand)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255,92,0,0.1)'; }}
                      onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.boxShadow = 'none'; }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      padding: '16px',
                      fontSize: '15px',
                      fontWeight: 600,
                      borderRadius: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      marginTop: '4px',
                      opacity: status === 'sending' ? 0.6 : 1,
                      cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    }}
                  >
                    <Send size={16} /> {status === 'sending' ? 'Sending…' : 'Send Message'}
                  </button>

                  {status === 'success' && (
                    <p style={{ fontSize: '14px', color: '#22C55E', textAlign: 'center', marginTop: '8px' }}>
                      ✓ Your message has been sent. We&apos;ll get back to you within 24 hours.
                    </p>
                  )}
                  {status === 'error' && (
                    <p style={{ fontSize: '14px', color: '#EF4444', textAlign: 'center', marginTop: '8px' }}>
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}
                </form>
              </div>

              {/* Right side — Info + Map */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

                {/* Business hours card */}
                <div style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '20px',
                  padding: '32px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                    <div style={{
                      width: 'min(42px, 100vw)',
                      height: '42px',
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(245,158,11,0.03))',
                      border: '1px solid rgba(245,158,11,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <Clock size={20} color="#F59E0B" />
                    </div>
                    <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--ink)', margin: 0 }}>Business Hours</h3>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                      { day: 'Monday - Friday', time: '10:00 AM - 7:00 PM IST' },
                      { day: 'Saturday', time: '10:00 AM - 4:00 PM IST' },
                      { day: 'Sunday', time: 'Closed' },
                    ].map(item => (
                      <div key={item.day} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '10px 14px',
                        background: 'rgba(255,255,255,0.02)',
                        borderRadius: '10px',
                        border: '1px solid rgba(255,255,255,0.04)',
                      }}>
                        <span style={{ fontSize: '14px', color: 'var(--ink2)', fontWeight: 500 }}>{item.day}</span>
                        <span style={{
                          fontSize: '13px',
                          color: item.time === 'Closed' ? 'rgba(255,255,255,0.3)' : 'var(--brand)',
                          fontWeight: 600,
                        }}>{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Google Map Embed */}
                <div style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.06)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                  height: 'min(280px, 100vw)',
                }}>
                  <iframe
                    title="Oktuv Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.3646584060825!2d77.04369147549712!3d28.459055375754043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18ee89555555%3A0x6e6f4f8c3b5e2a1d!2sSector%2031%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Quick action CTA */}
                <Link href="/book/" style={{ textDecoration: 'none' }}>
                  <div style={{
                    background: 'linear-gradient(135deg, rgba(255,92,0,0.1), rgba(255,92,0,0.03))',
                    border: '1px solid rgba(255,92,0,0.15)',
                    borderRadius: '18px',
                    padding: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}>
                    <div>
                      <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--ink)', marginBottom: '4px' }}>
                        Prefer a live conversation?
                      </div>
                      <p style={{ fontSize: '13px', color: 'var(--ink3)', margin: 0 }}>
                        Book a free 30-minute strategy call with our team.
                      </p>
                    </div>
                    <div className="btn btn-primary" style={{
                      padding: '12px 22px',
                      borderRadius: '12px',
                      fontSize: '13px',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}>
                      Book Call <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
