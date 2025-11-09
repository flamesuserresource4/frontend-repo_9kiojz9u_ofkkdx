import React from 'react';
import { Search, PenTool, Wrench, LineChart, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Discovery before delivery',
    icon: Search,
    desc: 'We dig into your model, story, and audience. No blind designing or coding.',
    accent: '#05A3DE',
  },
  {
    title: 'Integrated teams, not silos',
    icon: Handshake,
    desc: 'Designers, developers, marketers, and AI engineers collaborate from day one.',
    accent: '#80BF38',
  },
  {
    title: 'Process with creative freedom',
    icon: PenTool,
    desc: 'Strategy → design → development → optimization → support. Room to explore, built to ship.',
    accent: '#05A3DE',
  },
  {
    title: 'Technology-agnostic, problem-specific',
    icon: Wrench,
    desc: 'We choose tools that fit your needs — not trends — and build for longevity.',
    accent: '#80BF38',
  },
  {
    title: 'Continuous optimization mindset',
    icon: LineChart,
    desc: 'Launch is chapter one. We monitor speed, data, and conversions to improve ROI.',
    accent: '#05A3DE',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative w-full bg-neutral-50 py-20 text-neutral-900">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -right-20 top-10 h-40 w-40 rounded-full blur-3xl" style={{ background: '#05A3DE33' }} />
        <div className="absolute -left-20 bottom-10 h-40 w-40 rounded-full blur-3xl" style={{ background: '#80BF3833' }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">Legacy discipline, new-age execution.</h2>
          <p className="mt-3 text-neutral-600">Our workflow brings consultancy-grade clarity with studio-level craft.</p>
        </div>

        <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, idx) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6"
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 block h-1" style={{ background: step.accent, opacity: 0.3 }} />
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 ring-1 ring-neutral-200">
                  <step.icon size={18} />
                </div>
                <div className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Step {idx + 1}</div>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{step.desc}</p>
            </motion.li>
          ))}
        </ol>

        <div className="mt-12 rounded-2xl border border-neutral-200 bg-gradient-to-br from-white via-white to-neutral-50 p-6 text-sm text-neutral-700">
          <p>
            Think like engineers, create like artists, deliver like partners. Expect Notion dashboards,
            brand books, and clean code documentation as part of every engagement.
          </p>
        </div>
      </div>
    </section>
  );
}
