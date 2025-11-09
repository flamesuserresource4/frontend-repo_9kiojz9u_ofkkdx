import React from 'react';
import { Code, Palette, Rocket, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Development',
    icon: Code,
    accent: '#05A3DE',
    items: [
      'Websites & Webapps',
      'Mobile Apps',
      'Ecommerce',
      'Landing Pages',
      'Page Speed & Performance',
    ],
  },
  {
    title: 'Design',
    icon: Palette,
    accent: '#80BF38',
    items: [
      'UI/UX & Product',
      'Branding & Logos',
      'Graphic & Packaging',
      '2D/3D Models & Animation',
    ],
  },
  {
    title: 'Marketing',
    icon: Rocket,
    accent: '#05A3DE',
    items: [
      'Social Media Marketing',
      'Content & Copywriting',
      'Conversion Optimization',
    ],
  },
  {
    title: 'AI Systems',
    icon: Brain,
    accent: '#80BF38',
    items: [
      'AI Agents & Workflows',
      'Automation Pipelines',
      'AI-Assisted Analytics',
    ],
  },
];

function Card({ title, icon: Icon, items, accent, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      className="group relative rounded-2xl border border-neutral-200 bg-white p-6 text-neutral-900 shadow-sm transition hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 ring-1 ring-neutral-200">
          <Icon size={18} />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-neutral-600">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: accent }}></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <span className="pointer-events-none absolute inset-x-6 bottom-0 block h-1 rounded-full" style={{ background: accent, opacity: 0.25 }} />
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-white py-20 text-neutral-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">End-to-end capability. One partner.</h2>
          <p className="mt-3 text-neutral-600">
            We design, engineer, and grow digital products with an integrated team across development,
            design, marketing, and AI systems.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <Card key={cat.title} title={cat.title} icon={cat.icon} items={cat.items} accent={cat.accent} delay={i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}
