'use client';

import { MessageSquare, X, Send, Sparkles, ChevronLeft } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

type Message = { role: 'user' | 'assistant', content: string };

const SUGGESTIONS = [
  "What services do you offer?",
  "How much does it cost?",
  "Book a Free Call"
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
    // Show tooltip 1 second after landing
    const t = setTimeout(() => setShowTooltip(true), 1000);
    // Stop bouncing after 4 seconds
    const b = setTimeout(() => setIsBouncing(false), 4000);
    // Hide tooltip automatically after 7 seconds to keep UX clean
    const h = setTimeout(() => setShowTooltip(false), 7000);

    return () => {
      clearTimeout(t);
      clearTimeout(b);
      clearTimeout(h);
    };
  }, []);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Typewriter refs — must be declared before early return to satisfy React hooks rules
  const typewriterBuffer = useRef('');
  const typewriterDone = useRef(false);
  const typewriterRunning = useRef(false);

  // Auto-scroll to bottom of chat smoothly
  useEffect(() => {
    if (mounted) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, showForm, mounted]);

  if (!mounted) return null;

  // Typewriter renderer — reads from the buffer and reveals chars one at a time
  const startTypewriter = () => {
    if (typewriterRunning.current) return;
    typewriterRunning.current = true;

    let charIndex = 0;
    const tick = () => {
      const fullText = typewriterBuffer.current;

      if (charIndex < fullText.length) {
        // Reveal 1 character per tick for a clear typewriter feel
        charIndex++;
        const visibleText = fullText.slice(0, charIndex);

        setMessages(prev => {
          const updated = [...prev];
          const lastIdx = updated.length - 1;
          if (updated[lastIdx]?.role === 'assistant') {
            updated[lastIdx] = { ...updated[lastIdx], content: visibleText };
          }
          return updated;
        });

        setTimeout(tick, 30);
      } else if (typewriterDone.current) {
        // Stream finished and we've rendered everything
        typewriterRunning.current = false;
        setIsLoading(false);
      } else {
        // Buffer is caught up but stream is still going — poll again shortly
        setTimeout(tick, 50);
      }
    };

    tick();
  };

  const sendMessage = async (userMsg: string) => {
    if (!userMsg.trim() || isLoading) return;

    setInput('');
    const newMessages: Message[] = [...messages, { role: 'user', content: userMsg }];
    setMessages(newMessages);
    setIsLoading(true);

    // Reset typewriter state
    typewriterBuffer.current = '';
    typewriterDone.current = false;
    typewriterRunning.current = false;

    // Append an empty assistant message that we will "type" into
    setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

    try {
      const res = await fetch('/api/chat/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`API Error ${res.status}: ${errText}`);
      }

      if (!res.body) throw new Error('No stream body available.');

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let done = false;
      let sseBuffer = '';

      while (!done) {
        const { value, done: readerDone } = await reader.read();
        done = readerDone;
        if (value) {
          sseBuffer += decoder.decode(value, { stream: true });
          const parts = sseBuffer.split('\n');
          sseBuffer = parts.pop() || '';

          for (const line of parts) {
            const trimmedLine = line.trim();
            if (!trimmedLine || !trimmedLine.startsWith('data: ')) continue;

            const dataStr = trimmedLine.replace('data: ', '').trim();
            if (dataStr === '[DONE]') continue;

            try {
              const data = JSON.parse(dataStr);
              const textPart = data?.candidates?.[0]?.content?.parts?.[0]?.text;

              if (textPart) {
                // Feed text into the typewriter buffer instead of rendering directly
                typewriterBuffer.current += textPart;
                // Kick off the typewriter on the first chunk
                startTypewriter();
              }
            } catch (e) {
              console.error("Error parsing chunk:", dataStr, e);
            }
          }
        }
      }

      // Final flush of any remaining SSE data in the buffer
      if (sseBuffer.trim()) {
        const line = sseBuffer.trim();
        if (line.startsWith('data: ')) {
          const dataStr = line.replace('data: ', '').trim();
          try {
            const data = JSON.parse(dataStr);
            const textPart = data?.candidates?.[0]?.content?.parts?.[0]?.text;
            if (textPart) {
              typewriterBuffer.current += textPart;
            }
          } catch (e) { }
        }
      }

      // Signal that the stream is complete — typewriter will finish on its own
      typewriterDone.current = true;

    } catch (error) {
      console.error(error);
      typewriterDone.current = true;
      typewriterRunning.current = false;
      setMessages(prev => [...prev.slice(0, -1), { role: 'assistant', content: 'Ah, I hit a slight connection error! 😬 Try sending that again?' }]);
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleSuggestionClick = (suggestion: string) => {
    if (suggestion === 'Book a Free Call') {
      setShowForm(true);
    } else {
      sendMessage(suggestion);
    }
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
          website: 'Booked inside Chatbot',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus('success');
      setTimeout(() => {
        setShowForm(false);
        setStatus('idle');
        // Add a nice follow-up message from bot
        setMessages(prev => [...prev, { role: 'assistant', content: 'Boom! 🎉 I just received your request. My team will be in touch within exactly 24 hours to schedule your strategy session. Talk soon!' }]);
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
      {/* Floating Chat Button — pill that collapses to icon */}
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
              <h3 className="font-semibold text-white leading-tight">{showForm ? 'Request Strategy Call' : 'Oktuv AI'}</h3>
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
          <>
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 relative">

              {/* Default Welcome Message */}
              <div className="flex gap-2">
                <div className="max-w-[85%] p-3 rounded-2xl rounded-tl-sm text-sm" style={{ background: 'rgba(255,255,255,0.05)', color: 'var(--ink2)' }}>
                  BOOM! 👋 You just found Oktuv AI. I'm the ultimate engine for Oktuv Global. What kind of massive growth can I help you unlock today? 🚀
                </div>
              </div>

              {/* Chat History */}
              {messages.map((m, idx) => (
                <div key={idx} className={`flex gap-2 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm whitespace-pre-wrap ${m.role === 'user'
                        ? 'rounded-tr-sm text-white'
                        : 'rounded-tl-sm text-gray-300'
                      }`}
                    style={{ background: m.role === 'user' ? 'var(--brand)' : 'rgba(255,255,255,0.05)' }}
                  >
                    {/* Handle empty content while waiting for typewriter stream to begin */}
                    {m.content === '' && m.role === 'assistant' ? (
                      <span className="animate-pulse flex gap-1 items-center h-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animation-delay-100"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animation-delay-200"></span>
                      </span>
                    ) : (
                      m.content
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions & Call to Action */}
            {!isLoading && (
              <div className="px-4 pb-2 flex gap-2 overflow-x-auto shrink-0 no-scrollbar">
                {messages.length < 3 ? (
                  SUGGESTIONS.map((sug, i) => (
                    <button
                      key={i}
                      onClick={() => handleSuggestionClick(sug)}
                      className="whitespace-nowrap px-3 py-1.5 text-xs rounded-full border transition-colors shrink-0"
                      style={{ borderColor: 'rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)', color: 'var(--ink2)' }}
                    >
                      {sug}
                    </button>
                  ))
                ) : (
                  <button
                    onClick={() => setShowForm(true)}
                    className="whitespace-nowrap px-3 py-1.5 text-xs rounded-full border transition-transform hover:scale-105 shrink-0"
                    style={{ borderColor: 'var(--brand)', background: 'rgba(255,92,0,0.15)', color: 'var(--brand)', fontWeight: 600 }}
                  >
                    📅 Book a Free Call
                  </button>
                )}
              </div>
            )}

            {/* Chat Input Field */}
            <div className="p-4 border-t shrink-0" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
              <form onSubmit={handleSubmit} className="flex gap-2 items-center">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none transition-colors"
                  style={{ caretColor: 'var(--brand)' }}
                  autoComplete="off"
                />
                <button type="submit" disabled={!input.trim() || isLoading} className="p-2 rounded-full text-white disabled:opacity-50 transition-opacity shrink-0" style={{ border: 'none', background: 'var(--brand)', cursor: input.trim() && !isLoading ? 'pointer' : 'default' }}>
                  <Send size={16} />
                </button>
              </form>
            </div>
          </>
        )}
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </>
  );
}
