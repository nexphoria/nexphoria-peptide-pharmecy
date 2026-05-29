'use client';

import { useState, useEffect, useRef } from 'react';

const WORKER_URL = 'https://nexphoria-checkout.chiya-b60.workers.dev/support';

function isBusinessHoursET(): boolean {
  const now = new Date();
  const etString = now.toLocaleString('en-US', { timeZone: 'America/New_York' });
  const etDate = new Date(etString);
  const day = etDate.getDay(); // 0=Sun, 6=Sat
  const hour = etDate.getHours();
  return day >= 1 && day <= 5 && hour >= 9 && hour < 17;
}

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function LiveChatWidget() {
  const [open, setOpen] = useState(false);
  const [online, setOnline] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const [status, setStatus] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOnline(isBusinessHoursET());
    const interval = setInterval(() => setOnline(isBusinessHoursET()), 60_000);
    return () => clearInterval(interval);
  }, []);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const reset = () => {
    setName('');
    setEmail('');
    setQuestion('');
    setStatus('idle');
    setErrorMsg('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !question.trim()) {
      setErrorMsg('Please fill in all fields.');
      return;
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim().toLowerCase(),
          question: question.trim(),
          online,
          submittedAt: new Date().toISOString(),
        }),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg((data as { error?: string }).error || 'Submission failed. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please try again.');
      setStatus('error');
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => { setOpen((v) => !v); if (status === 'success') reset(); }}
        aria-label="Open research support chat"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full shadow-2xl px-4 py-3 text-sm font-semibold transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/60"
        style={{ backgroundColor: '#111', color: '#d4af37', border: '1px solid #d4af37' }}
      >
        {/* Chat bubble icon */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
        <span className="hidden sm:inline">Research Support</span>
        {/* Online indicator */}
        <span
          className="inline-block w-2 h-2 rounded-full ml-1"
          style={{ backgroundColor: online ? '#22c55e' : '#6b7280' }}
          title={online ? 'Available now' : 'Leave a message'}
        />
      </button>

      {/* Panel */}
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Research Support"
          className="fixed bottom-20 right-6 z-50 w-[340px] max-w-[calc(100vw-2rem)] rounded-2xl shadow-2xl overflow-hidden"
          style={{ backgroundColor: '#0e0e0e', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{ backgroundColor: '#1a1a1a', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="flex items-center gap-2">
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ backgroundColor: online ? '#22c55e' : '#6b7280' }}
              />
              <span className="text-sm font-semibold" style={{ color: '#d4af37' }}>
                Research Support
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs" style={{ color: '#9ca3af' }}>
                {online ? 'Mon–Fri 9am–5pm ET' : 'Leave a message'}
              </span>
              <button
                onClick={() => { setOpen(false); if (status === 'success') reset(); }}
                aria-label="Close"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="px-4 py-4">
            {status === 'success' ? (
              <div className="text-center py-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: 'rgba(212,175,55,0.12)' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="font-semibold text-white mb-1">Message received</p>
                <p className="text-xs leading-relaxed" style={{ color: '#9ca3af' }}>
                  {online
                    ? "We'll respond to your email shortly — typically within a few hours."
                    : "We'll follow up by email on the next business day (Mon–Fri, 9am–5pm ET)."}
                </p>
                <button
                  onClick={reset}
                  className="mt-4 text-xs underline transition-colors"
                  style={{ color: '#d4af37' }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                {/* Availability notice */}
                <div
                  className="rounded-lg px-3 py-2 mb-4 flex items-start gap-2"
                  style={{ backgroundColor: online ? 'rgba(34,197,94,0.08)' : 'rgba(107,114,128,0.15)' }}
                >
                  <span
                    className="inline-block w-2 h-2 rounded-full mt-1 flex-shrink-0"
                    style={{ backgroundColor: online ? '#22c55e' : '#6b7280' }}
                  />
                  <p className="text-xs leading-relaxed" style={{ color: online ? '#86efac' : '#9ca3af' }}>
                    {online
                      ? 'Our research support team is available now. We typically reply within 1–2 hours.'
                      : 'Our team is currently offline. Leave your question and we\'ll respond by email on the next business day.'}
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-3">
                  <div>
                    <label htmlFor="chat-name" className="block text-xs font-medium mb-1" style={{ color: '#9ca3af' }}>
                      Name
                    </label>
                    <input
                      id="chat-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Dr. Smith"
                      disabled={status === 'loading'}
                      required
                      className="w-full rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 outline-none focus:ring-1 transition-all disabled:opacity-50"
                      style={{
                        backgroundColor: '#1c1c1c',
                        border: '1px solid rgba(255,255,255,0.12)',
                        // @ts-ignore
                        '--tw-ring-color': '#d4af37',
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="chat-email" className="block text-xs font-medium mb-1" style={{ color: '#9ca3af' }}>
                      Email
                    </label>
                    <input
                      id="chat-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@institution.edu"
                      disabled={status === 'loading'}
                      required
                      className="w-full rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 outline-none focus:ring-1 transition-all disabled:opacity-50"
                      style={{
                        backgroundColor: '#1c1c1c',
                        border: '1px solid rgba(255,255,255,0.12)',
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="chat-question" className="block text-xs font-medium mb-1" style={{ color: '#9ca3af' }}>
                      Your question
                    </label>
                    <textarea
                      id="chat-question"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      placeholder="Ask about purity, storage, protocols, ordering…"
                      rows={3}
                      disabled={status === 'loading'}
                      required
                      className="w-full rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 outline-none focus:ring-1 transition-all resize-none disabled:opacity-50"
                      style={{
                        backgroundColor: '#1c1c1c',
                        border: '1px solid rgba(255,255,255,0.12)',
                      }}
                    />
                  </div>

                  {errorMsg && (
                    <p className="text-xs" style={{ color: '#f87171' }}>{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full rounded-lg py-2.5 text-sm font-semibold transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: '#d4af37', color: '#000' }}
                  >
                    {status === 'loading' ? 'Sending…' : online ? 'Send Message' : 'Leave a Message'}
                  </button>
                </form>

                <p className="mt-3 text-center text-xs" style={{ color: '#4b5563' }}>
                  Or email us at{' '}
                  <a href="mailto:research@nexphoria.com" style={{ color: '#d4af37' }}>
                    research@nexphoria.com
                  </a>
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
