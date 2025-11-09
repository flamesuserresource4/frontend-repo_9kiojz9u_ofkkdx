import React from 'react';

export default function CTA() {
  return (
    <section id="contact" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Ready to make your brand future-ready?</h2>
        <p className="mt-3 text-white/70">
          Tell us about your goals. We’ll craft a clear plan across strategy, design, development, and AI —
          then deliver it with precision.
        </p>
        <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
          <form
            className="grid grid-cols-1 gap-3 sm:grid-cols-3"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const payload = Object.fromEntries(data.entries());
              alert(`Thanks, ${payload.name || 'friend'} — we\'ll reach out at ${payload.email || 'your email'}!`);
              form.reset();
            }}
          >
            <input
              name="name"
              placeholder="Your name"
              className="h-11 rounded-lg border border-white/10 bg-black/40 px-3 text-sm outline-none placeholder:text-white/40 focus:border-white/30"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="h-11 rounded-lg border border-white/10 bg-black/40 px-3 text-sm outline-none placeholder:text-white/40 focus:border-white/30"
              required
            />
            <button
              type="submit"
              className="h-11 rounded-lg bg-white px-4 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Start the conversation
            </button>
          </form>
        </div>
        <p className="mt-4 text-xs text-white/50">We respond within 24–48 hours. No spam, ever.</p>
      </div>
    </section>
  );
}
