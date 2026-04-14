'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

// ─── Validation Helpers ────────────────────────────────────────
function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  return /^[+]?[\d\s\-()]{7,20}$/.test(phone.trim());
}

function isValidUrl(url: string) {
  try { new URL(url); return true; } catch { return false; }
}

// ─── Types ─────────────────────────────────────────────────────
interface FormData {
  name: string;
  email: string;
  phone: string;
  company_url: string;
  pain_point: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  company_url?: string;
}

// ─── Component ─────────────────────────────────────────────────
export default function AuditPage() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company_url: '',
    pain_point: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!isValidEmail(form.email)) e.email = 'Enter a valid email';
    if (!form.phone.trim()) e.phone = 'Phone number is required';
    else if (!isValidPhone(form.phone)) e.phone = 'Enter a valid phone number';
    if (!form.company_url.trim()) e.company_url = 'Company URL is required';
    else if (!isValidUrl(form.company_url)) e.company_url = 'Enter a valid URL (include https://)';
    return e;
  }

  function handleChange(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('sending');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_AUDIT!,
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          company_url: form.company_url,
          pain_point: form.pain_point || 'Not specified',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      setStatus('success');
      setForm({ name: '', email: '', phone: '', company_url: '', pain_point: '' });
    } catch {
      setStatus('error');
    }
  }

  const inputStyle = {
    background: 'rgba(0,0,0,0.3)',
    border: '1px solid rgba(255,255,255,0.1)',
    padding: '14px 16px',
    borderRadius: '8px',
    color: 'var(--ink)',
    fontSize: '15px',
    outline: 'none',
    width: '100%',
  };

  const errorInputStyle = {
    ...inputStyle,
    border: '1px solid #EF4444',
  };

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
        {/* Background glow overlay */}
        <div className="glow-orb" style={{ top: '30%', right: '-10%', background: 'radial-gradient(circle, rgba(234,88,12,0.08) 0%, rgba(0,0,0,0) 60%)', width: 'min(1000px, 100vw)', height: 'min(1000px, 100vw)' }} />

        <div className="wrap grid-stack-mob" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 'clamp(32px, 6vw, 60px)', alignItems: 'center' }}>
          
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
                  <p style={{ color: 'var(--ink2)', fontSize: '14px', margin: 0 }}>We comb through exactly what&apos;s failing.</p>
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
          <div className="glass" style={{ padding: 'clamp(24px, 4vw, 40px)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.08)', position: 'relative', zIndex: 10 }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--ink)', marginBottom: '32px' }}>Request your teardown</h2>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '13px', color: 'var(--ink2)', fontWeight: 500 }}>Your Name *</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  style={errors.name ? errorInputStyle : inputStyle}
                />
                {errors.name && <span style={{ fontSize: '12px', color: '#EF4444' }}>{errors.name}</span>}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '13px', color: 'var(--ink2)', fontWeight: 500 }}>Work Email *</label>
                <input
                  type="email"
                  placeholder="john@company.com"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  style={errors.email ? errorInputStyle : inputStyle}
                />
                {errors.email && <span style={{ fontSize: '12px', color: '#EF4444' }}>{errors.email}</span>}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '13px', color: 'var(--ink2)', fontWeight: 500 }}>Phone Number *</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={form.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  style={errors.phone ? errorInputStyle : inputStyle}
                />
                {errors.phone && <span style={{ fontSize: '12px', color: '#EF4444' }}>{errors.phone}</span>}
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '13px', color: 'var(--ink2)', fontWeight: 500 }}>Company URL *</label>
                <input
                  type="url"
                  placeholder="https://yourcompany.com"
                  value={form.company_url}
                  onChange={(e) => handleChange('company_url', e.target.value)}
                  style={errors.company_url ? errorInputStyle : inputStyle}
                />
                {errors.company_url && <span style={{ fontSize: '12px', color: '#EF4444' }}>{errors.company_url}</span>}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '13px', color: 'var(--ink2)', fontWeight: 500 }}>Where does it hurt the most? (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="We get traffic but nobody buys..."
                  value={form.pain_point}
                  onChange={(e) => handleChange('pain_point', e.target.value)}
                  style={{ ...inputStyle, resize: 'vertical' as const }}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn btn-primary"
                style={{
                  width: '100%', padding: '16px', fontSize: '16px', fontWeight: 600,
                  marginTop: '12px', display: 'flex', justifyContent: 'center',
                  alignItems: 'center', gap: '8px',
                  opacity: status === 'sending' ? 0.6 : 1,
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                }}
              >
                {status === 'sending' ? 'Sending…' : 'Unlock My Growth Blueprint →'}
              </button>

              {status === 'success' && (
                <p style={{ fontSize: '14px', color: '#22C55E', textAlign: 'center', marginTop: '8px' }}>
                  ✓ Your audit request has been submitted. Check your inbox within 48 hours.
                </p>
              )}
              {status === 'error' && (
                <p style={{ fontSize: '14px', color: '#EF4444', textAlign: 'center', marginTop: '8px' }}>
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>
          </div>
          
        </div>
      </main>
      <Footer />
    </>
  );
}
