'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

// ─── Validation Helpers ────────────────────────────────────────
function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  // Accept digits, spaces, dashes, parens, leading +
  return /^[+]?[\d\s\-()]{7,20}$/.test(phone.trim());
}

function isValidUrl(url: string) {
  if (!url) return true; // optional field
  try { new URL(url); return true; } catch { return false; }
}

// ─── Types ─────────────────────────────────────────────────────
interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  website: string;
}

interface FormErrors {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  website?: string;
}

// ─── Component ─────────────────────────────────────────────────
export default function BookPage() {
  const [form, setForm] = useState<FormData>({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    website: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!form.first_name.trim()) e.first_name = 'First name is required';
    if (!form.last_name.trim()) e.last_name = 'Last name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!isValidEmail(form.email)) e.email = 'Enter a valid email';
    if (!form.phone.trim()) e.phone = 'Phone number is required';
    else if (!isValidPhone(form.phone)) e.phone = 'Enter a valid phone number';
    if (form.website && !isValidUrl(form.website)) e.website = 'Enter a valid URL';
    return e;
  }

  function handleChange(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    // Clear field error on change
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
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
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_BOOK!,
        {
          first_name: form.first_name,
          last_name: form.last_name,
          email: form.email,
          phone: form.phone,
          website: form.website || 'Not provided',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      setStatus('success');
      setForm({ first_name: '', last_name: '', email: '', phone: '', website: '' });
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
      <main style={{ minHeight: '100vh', padding: '80px 0' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 1.5fr', gap: '60px', alignItems: 'start' }}>
          
          {/* Left Column: Context */}
          <div style={{ position: 'sticky', top: '120px' }}>
            <div className="eyebrow" style={{ background: 'rgba(255,92,0,0.1)', color: 'var(--brand)' }}>Discovery Call</div>
            <h1 className="h-section" style={{ fontSize: 'clamp(32px, 4vw, 48px)', textAlign: 'left', margin: '24px 0' }}>
              Let&apos;s locate your <span className="brand-text">bottleneck</span>.
            </h1>
            <p className="lead" style={{ textAlign: 'left', margin: '0 0 40px', fontSize: '18px' }}>
              This isn&apos;t a high-pressure sales pitch. It&apos;s a technical deep-dive to see if we can actually add ROI to your operations.
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

          {/* Right Column: Intake Form */}
          <div className="glass" style={{ padding: '48px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--ink)', marginBottom: '32px' }}>Request a Call</h2>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '13px', color: 'var(--ink2)', fontWeight: 500 }}>First Name *</label>
                  <input
                    type="text"
                    placeholder="John"
                    value={form.first_name}
                    onChange={(e) => handleChange('first_name', e.target.value)}
                    style={errors.first_name ? errorInputStyle : inputStyle}
                  />
                  {errors.first_name && <span style={{ fontSize: '12px', color: '#EF4444' }}>{errors.first_name}</span>}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '13px', color: 'var(--ink2)', fontWeight: 500 }}>Last Name *</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    value={form.last_name}
                    onChange={(e) => handleChange('last_name', e.target.value)}
                    style={errors.last_name ? errorInputStyle : inputStyle}
                  />
                  {errors.last_name && <span style={{ fontSize: '12px', color: '#EF4444' }}>{errors.last_name}</span>}
                </div>
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
                <label style={{ fontSize: '13px', color: 'var(--ink2)', fontWeight: 500 }}>Company Website (Optional)</label>
                <input
                  type="url"
                  placeholder="https://"
                  value={form.website}
                  onChange={(e) => handleChange('website', e.target.value)}
                  style={errors.website ? errorInputStyle : inputStyle}
                />
                {errors.website && <span style={{ fontSize: '12px', color: '#EF4444' }}>{errors.website}</span>}
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
                {status === 'sending' ? 'Sending…' : 'Claim My Strategy Session →'}
              </button>

              {status === 'success' && (
                <p style={{ fontSize: '14px', color: '#22C55E', textAlign: 'center', marginTop: '8px' }}>
                  ✓ Your request has been submitted. We&apos;ll reach out within 24 hours.
                </p>
              )}
              {status === 'error' && (
                <p style={{ fontSize: '14px', color: '#EF4444', textAlign: 'center', marginTop: '8px' }}>
                  Something went wrong. Please try again or email us directly.
                </p>
              )}

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
