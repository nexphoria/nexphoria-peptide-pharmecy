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
      {/* Floating Button — Refined luxury link */}
      <button
        onClick={() => { setOpen((v) => !v); if (status === 'success') reset(); }}
        aria-label="Open research support"
        className="fixed bottom-8 right-8 z-50 flex items-center gap-2.5 text-xs font-medium transition-opacity hover:opacity-60 focus:outline-none"
        style={{ color: '#1A1A1A', letterSpacing: '0.08em' }}
      >
        <span>Research Support</span>
        {/* Subtle online indicator */}
        <span
          className="inline-block w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: online ? '#C9A96E' : '#CCCCCC' }}
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
          className="fixed bottom-16 right-8 z-50 w-[340px] max-w-[calc(100vw-2rem)] rounded-xl shadow-xl overflow-hidden"
          style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E5E5' }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3.5"
            style={{ backgroundColor: '#FAF8F5', borderBottom: '1px solid #E5E5E5' }}
          >
            <div className="flex items-center gap-2.5">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: online ? '#C9A96E' : '#CCCCCC' }}
              />
              <span className="text-xs font-medium uppercase tracking-wider" style={{ color: '#1A1A1A', letterSpacing: '0.12em' }}>
                Research Support
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs" style={{ color: '#888888' }}>
                {online ? 'Available' : 'Leave Message'}
              </span>
              <button
                onClick={() => { setOpen(false); if (status === 'success') reset(); }}
                aria-label="Close"
                className="text-[#888888] hover:text-[#1A1A1A] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
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
                  style={{ backgroundColor: '#C9A96E20' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="font-medium text-sm mb-1" style={{ color: '#1A1A1A' }}>Message received</p>
                <p className="text-xs leading-relaxed" style={{ color: '#888888' }}>
                  {online
                    ? "We'll respond to your email shortly."
                    : "We'll follow up by email on the next business day."}
                </p>
                <button
                  onClick={reset}
                  className="mt-4 text-xs transition-opacity hover:opacity-60"
                  style={{ color: '#C9A96E', textDecoration: 'underline' }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                {/* Availability notice */}
                <div
                  className="rounded-lg px-3 py-2 mb-4 flex items-start gap-2"
                  style={{ backgroundColor: '#FAF8F5', border: '1px solid #E5E5E5' }}
                >
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0"
                    style={{ backgroundColor: online ? '#C9A96E' : '#CCCCCC' }}
                  />
                  <p className="text-xs leading-relaxed" style={{ color: '#666666' }}>
                    {online
                      ? 'Available now. Typical reply within 1–2 hours.'
                      : 'Leave a message. We\'ll respond by email on the next business day.'}
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-3">
                  <div>
                    <label htmlFor="chat-name" className="block text-xs font-medium mb-1.5 uppercase tracking-wider" style={{ color: '#888888', letterSpacing: '0.08em' }}>
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
                      className="w-full rounded-lg px-3 py-2 text-sm outline-none transition-all disabled:opacity-50"
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E5E5E5',
                        color: '#1A1A1A',
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="chat-email" className="block text-xs font-medium mb-1.5 uppercase tracking-wider" style={{ color: '#888888', letterSpacing: '0.08em' }}>
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
                      className="w-full rounded-lg px-3 py-2 text-sm outline-none transition-all disabled:opacity-50"
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E5E5E5',
                        color: '#1A1A1A',
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="chat-question" className="block text-xs font-medium mb-1.5 uppercase tracking-wider" style={{ color: '#888888', letterSpacing: '0.08em' }}>
                      Your Question
                    </label>
                    <textarea
                      id="chat-question"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      placeholder="Ask about purity, storage, protocols, ordering…"
                      rows={3}
                      disabled={status === 'loading'}
                      required
                      className="w-full rounded-lg px-3 py-2 text-sm outline-none transition-all resize-none disabled:opacity-50"
                      style={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E5E5E5',
                        color: '#1A1A1A',
                      }}
                    />
                  </div>

                  {errorMsg && (
                    <p className="text-xs" style={{ color: '#f87171' }}>{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full rounded-lg py-2.5 text-xs font-medium uppercase tracking-wider transition-opacity hover:opacity-70 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: '#1A1A1A', color: '#FAF8F5', letterSpacing: '0.12em' }}
                  >
                    {status === 'loading' ? 'Sending…' : online ? 'Send Message' : 'Leave Message'}
                  </button>
                </form>

                <p className="mt-3 text-center text-xs" style={{ color: '#888888' }}>
                  Or email{' '}
                  <a href="mailto:research@nexphoria.com" style={{ color: '#C9A96E', textDecoration: 'underline' }}>
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
