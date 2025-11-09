import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="contact" className="relative w-full bg-white py-20 text-neutral-900">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold sm:text-4xl"
        >
          Ready to make your brand future-ready?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-3 text-neutral-600"
        >
          Tell us about your goals. We’ll craft a clear plan across strategy, design, development, and AI —
          then deliver it with precision.
        </motion.p>
        <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm">
          <form
            className="grid grid-cols-1 gap-3 sm:grid-cols-3"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const payload = Object.fromEntries(data.entries());
              alert(`Thanks, ${payload.name || 'friend'} — we'll reach out at ${payload.email || 'your email'}!`);
              form.reset();
            }}
          >
            <input
              name="name"
              placeholder="Your name"
              className="h-11 rounded-lg border border-neutral-200 bg-white px-3 text-sm outline-none placeholder:text-neutral-400 focus:border-neutral-400"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="h-11 rounded-lg border border-neutral-200 bg-white px-3 text-sm outline-none placeholder:text-neutral-400 focus:border-neutral-400"
              required
            />
            <button
              type="submit"
              className="h-11 rounded-lg bg-neutral-900 px-4 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              Start the conversation
            </button>
          </form>
        </div>
        <p className="mt-4 text-xs text-neutral-500">We respond within 24–48 hours. No spam, ever.</p>
      </div>
    </section>
  );
}
