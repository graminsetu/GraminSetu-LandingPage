import React, { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="newsletter"
      className="py-16 bg-gradient-to-br from-gramin-50 via-white to-setu-50"
    >
      <div className="max-w-sm mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">💌 Stay Connected with GraminSetu</h2>
        <p className="text-lg text-gramin-700 mb-6">
          Be the first to explore our Beta version. Enter your email below to join the waitlist.
        </p>
        <form className="flex flex-col sm:flex-row items-center gap-3" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-2 py-3 rounded-lg border border-gramin-200 focus:ring-2 focus:ring-gramin-400 text-black !text-black placeholder-gramin-400"
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            className="bg-gramin-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gramin-700 transition"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Joining...' : 'Join Beta'}
          </button>
        </form>
        {status === 'success' && (
          <p className="text-green-600 mt-3">Thank you for joining the waitlist!</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 mt-3">Something went wrong. Please try again.</p>
        )}
      </div>
    </section>
  );
};

export default NewsletterSignup;
