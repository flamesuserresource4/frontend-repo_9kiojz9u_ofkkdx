import React from 'react';
import { Search, PenTool, Wrench, LineChart, Handshake } from 'lucide-react';

const steps = [
  {
    title: 'Discovery before delivery',
    icon: Search,
    desc: 'We dig into your model, story, and audience. No blind designing or coding.',
  },
  {
    title: 'Integrated teams, not silos',
    icon: Handshake,
    desc: 'Designers, developers, marketers, and AI engineers collaborate from day one.',
  },
  {
    title: 'Process with creative freedom',
    icon: PenTool,
    desc: 'Strategy → design → development → optimization → support. Structure with room to explore.',
  },
  {
    title: 'Technology-agnostic, problem-specific',
    icon: Wrench,
    desc: 'We choose tools that fit your needs — not trends — and build for longevity.',
  },
  {
    title: 'Continuous optimization mindset',
    icon: LineChart,
    desc: 'Launch is chapter one. We monitor speed, data, and conversions to improve ROI.',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">Legacy discipline, new-age execution.</h2>
          <p className="mt-3 text-white/70">
            Our workflow brings consultancy-grade clarity with studio-level craft.
          </p>
        </div>

        <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, idx) => (
            <li key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
                  <step.icon size={18} />
                </div>
                <div className="text-sm font-semibold uppercase tracking-wide text-white/60">Step {idx + 1}</div>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-white/80">{step.desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 text-sm text-white/80">
          <p>
            Think like engineers, create like artists, deliver like partners. Expect Notion dashboards,
            brand books, and clean code documentation as part of every engagement.
          </p>
        </div>
      </div>
    </section>
  );
}
