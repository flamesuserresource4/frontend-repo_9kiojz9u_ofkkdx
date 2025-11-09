import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const items = [
  {
    title: 'Commerce Platform Revamp',
    tag: 'Development · Performance',
    color: 'from-cyan-500/20 to-blue-500/10',
  },
  {
    title: 'Fintech Brand System',
    tag: 'Design · Identity',
    color: 'from-fuchsia-500/20 to-indigo-500/10',
  },
  {
    title: 'AI Support Agent',
    tag: 'AI Systems · Automation',
    color: 'from-emerald-500/20 to-teal-500/10',
  },
];

function ShowcaseCard({ title, tag, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${color} p-6 text-white`}
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <div className="text-xs uppercase tracking-wider text-white/60">{tag}</div>
          <h3 className="mt-2 text-xl font-semibold">{title}</h3>
        </div>
        <div className="rounded-lg border border-white/15 bg-white/5 p-2 text-white/80 transition group-hover:bg-white group-hover:text-black">
          <ArrowUpRight size={18} />
        </div>
      </div>
      <div className="mt-6 h-36 w-full rounded-xl bg-white/5" />
    </motion.div>
  );
}

export default function Showcase() {
  return (
    <section className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold sm:text-4xl">Selected work that pairs clarity with craft.</h2>
            <p className="mt-3 text-white/70">A glimpse into the outcomes our clients care about: speed, scale, and polish.</p>
          </div>
          <a href="#contact" className="hidden rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur transition hover:bg-white/10 md:block">Start a project</a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((it) => (
            <ShowcaseCard key={it.title} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}
