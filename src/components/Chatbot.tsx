'use client';

import { MessageSquare, X, Sparkles, ChevronLeft, ArrowRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

type Message = { role: 'user' | 'assistant', content: string };
type Step = 'welcome' | 'services' | 'pricing';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "BOOM! 👋 Welcome to Oktuv. I'm here to get you to the right place quickly. What are you looking for today? 🚀" }
  ]);
  const [currentStep, setCurrentStep] = useState<Step>('welcome');
  const [isTyping, setIsTyping] = useState(false);

  // Form State
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ first_name: '', last_name: '', email: '', phone: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  // Tooltip & Animation State
  const [showTooltip, setShowTooltip] = useState(false);
  const [isBouncing, setIsBouncing] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => setShowTooltip(true), 1000);
    const b = setTimeout(() => setIsBouncing(false), 4000);
    const h = setTimeout(() => setShowTooltip(false), 7000);

    return () => {
      clearTimeout(t);
      clearTimeout(b);
      clearTimeout(h);
    };
  }, []);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mounted) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, showForm, mounted]);

  if (!mounted) return null;

  const delayResponse = (reply: string, nextStep?: Step) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
      setIsTyping(false);
      if (nextStep) setCurrentStep(nextStep);
    }, 800);
  };

  const handleOptionClick = (optionLabel: string, action: () => void) => {
    setMessages(prev => [...prev, { role: 'user', content: optionLabel }]);
    action();
  };

  const optionsMap = {
    welcome: [
      {
        label: 'Our Services',
        action: () => delayResponse(
          "We scale ambitious brands. We specialize in Performance Marketing, AI Automation, Web Development, and Custom SaaS. Want to discuss a specific project?",
          'services'
        )
      },
      {
        label: 'Pricing & Costs',
        action: () => delayResponse(
          "Our pricing scales with your needs. We offer flexible monthly retainers for growth marketing and fixed-scope pricing for development and AI agents. Want a custom quote?",
          'pricing'
        )
      },
      {
        label: 'Connect with us on Whatsapp',
        action: () => {
          delayResponse("Great! Opening WhatsApp to connect with our growth experts instantly.");
          setTimeout(() => window.open('https://wa.me/919872409304', '_blank'), 1200);
        }
      }
    ],
    services: [
      {
        label: 'Connect with us on Whatsapp',
        action: () => {
          delayResponse("Perfect! Let's chat on WhatsApp.");
          setTimeout(() => window.open('https://wa.me/919872409304', '_blank'), 1200);
        }
      },
      {
        label: 'Book a Call',
        action: () => setShowForm(true)
      },
      {
        label: 'Back to Start',
        action: () => delayResponse("No problem! What else can I help you with?", 'welcome')
      }
    ],
    pricing: [
      {
        label: 'Connect with us on Whatsapp',
        action: () => {
          delayResponse("Perfect! We can discuss custom quotes on WhatsApp.");
          setTimeout(() => window.open('https://wa.me/919872409304', '_blank'), 1200);
        }
      },
      {
        label: 'Get a Custom Quote',
        action: () => setShowForm(true)
      },
      {
        label: 'Back to Start',
        action: () => delayResponse("No problem! What else can I help you with?", 'welcome')
      }
    ]
  };

  const handleBookSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.first_name || !form.last_name || !form.email || !form.phone) return;

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
          website: 'Booked inside Rule-Based Chatbot',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus('success');
      setTimeout(() => {
        setShowForm(false);
        setStatus('idle');
        delayResponse('Boom! 🎉 I just received your request. My team will be in touch within exactly 24 hours to schedule your strategy session. Talk soon!');
      }, 3000);
    } catch {
      setStatus('error');
    }
  };

  const inputStyle = {
    background: 'rgba(0,0,0,0.3)',
    border: '1px solid rgba(255,255,255,0.1)',
    padding: '10px 12px',
    borderRadius: '8px',
    color: 'var(--ink)',
    fontSize: '13px',
    outline: 'none',
    width: '100%',
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isOpen ? 'opacity-0 pointer-events-none scale-75' : 'opacity-100 scale-100'}`}>
        <button
          onClick={() => {
            setIsOpen(true);
            setShowTooltip(false);
          }}
          className={`chatbot-fab flex items-center gap-2 shadow-2xl transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_0_28px_rgba(255,92,0,0.4)] ${isBouncing ? 'animate-bounce' : ''}`}
          style={{
            background: 'var(--brand)',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            borderRadius: showTooltip && !isOpen ? '50px' : '50%',
            padding: showTooltip && !isOpen ? '12px 20px 12px 16px' : '16px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
          }}
        >
          <MessageSquare size={22} className="shrink-0" />
          <span
            className="font-semibold text-sm transition-all duration-500 ease-in-out"
            style={{
              maxWidth: showTooltip && !isOpen ? '200px' : '0px',
              opacity: showTooltip && !isOpen ? 1 : 0,
              overflow: 'hidden',
              display: 'inline-block',
            }}
          >
            Let's talk scale 🚀
          </span>
        </button>
      </div>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[350px] sm:w-[400px] h-[550px] max-h-[85vh] flex flex-col rounded-2xl shadow-2xl transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(12,12,14,0.95)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b shrink-0" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <div className="flex items-center gap-3">
            {showForm ? (
              <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-white mr-1" style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
                <ChevronLeft size={20} />
              </button>
            ) : (
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0" style={{ background: 'var(--brand)' }}>
                <Sparkles size={16} />
              </div>
            )}
            <div>
              <h3 className="font-semibold text-white leading-tight">{showForm ? 'Request Strategy Call' : 'Oktuv Assistant'}</h3>
              <p className="text-xs text-gray-400">{showForm ? 'We will be in touch shortly' : 'Usually replies instantly'}</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors" style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
            <X size={20} />
          </button>
        </div>

        {/* Dynamic Body */}
        {showForm ? (
          <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4">
            <form onSubmit={handleBookSubmit} className="flex flex-col gap-4">
              <div>
                <label style={{ fontSize: '12px', color: 'var(--ink2)', marginBottom: '4px', display: 'block' }}>First Name *</label>
                <input required value={form.first_name} onChange={e => setForm({ ...form, first_name: e.target.value })} style={inputStyle} placeholder="John" />
              </div>
              <div>
                <label style={{ fontSize: '12px', color: 'var(--ink2)', marginBottom: '4px', display: 'block' }}>Last Name *</label>
                <input required value={form.last_name} onChange={e => setForm({ ...form, last_name: e.target.value })} style={inputStyle} placeholder="Doe" />
              </div>
              <div>
                <label style={{ fontSize: '12px', color: 'var(--ink2)', marginBottom: '4px', display: 'block' }}>Work Email *</label>
                <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={inputStyle} placeholder="john@company.com" />
              </div>
              <div>
                <label style={{ fontSize: '12px', color: 'var(--ink2)', marginBottom: '4px', display: 'block' }}>Phone Number *</label>
                <input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} style={inputStyle} placeholder="+1 (555) 000-0000" />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn btn-primary"
                style={{
                  width: '100%', padding: '12px', fontSize: '14px', fontWeight: 600,
                  marginTop: '8px', opacity: status === 'sending' ? 0.6 : 1,
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                }}
              >
                {status === 'sending' ? 'Submitting...' : 'Claim My Free Calling →'}
              </button>

              {status === 'success' && <p className="text-xs text-green-400 text-center mt-2">✓ Details sent successfully!</p>}
              {status === 'error' && <p className="text-xs text-red-400 text-center mt-2">Error submitting request.</p>}
            </form>
          </div>
        ) : (
          <div className="flex-1 flex flex-col relative overflow-hidden">
            {/* Chat History */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 no-scrollbar pb-6">
              {messages.map((m, idx) => (
                <div key={idx} className={`flex gap-2 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-[14px] leading-relaxed whitespace-pre-wrap ${m.role === 'user'
                        ? 'rounded-tr-sm text-white'
                        : 'rounded-tl-sm text-gray-200'
                      }`}
                    style={{ background: m.role === 'user' ? 'var(--brand)' : 'rgba(255,255,255,0.06)', border: m.role === 'user' ? 'none' : '1px solid rgba(255,255,255,0.05)' }}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-2 justify-start">
                  <div className="max-w-[85%] p-3 px-4 rounded-2xl rounded-tl-sm" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <span className="animate-pulse flex gap-1 items-center h-5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animation-delay-100"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animation-delay-200"></span>
                    </span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Reply Options Area */}
            <div className="p-4 pt-2 border-t shrink-0 flex flex-col gap-2" style={{ borderColor: 'rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.2)' }}>
              {!isTyping && optionsMap[currentStep].map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleOptionClick(opt.label, opt.action)}
                  className="w-full text-left px-4 py-3 rounded-xl text-[13px] font-medium transition-all flex items-center justify-between group"
                  style={{ 
                    background: opt.label.includes('Whatsapp') ? 'rgba(37, 211, 102, 0.1)' : 'rgba(255,255,255,0.04)',
                    color: opt.label.includes('Whatsapp') ? '#25D366' : 'var(--ink)',
                    border: `1px solid ${opt.label.includes('Whatsapp') ? 'rgba(37, 211, 102, 0.2)' : 'rgba(255,255,255,0.08)'}`
                  }}
                >
                  {opt.label}
                  <ArrowRight size={14} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .animation-delay-100 { animation-delay: 100ms; }
        .animation-delay-200 { animation-delay: 200ms; }
      `}} />
    </>
  );
}
