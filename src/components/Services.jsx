import React from 'react';
import { Code, PenTool, Rocket, Brain, MousePointerClick, Palette, Smartphone, ShoppingCart, Video, Image, Layers, SquareStack, GaugeCircle } from 'lucide-react';

const categories = [
  {
    title: 'Development',
    icon: Code,
    items: [
      'Website Development & Design',
      'Webapp / Software Development',
      'Page Speed & Performance',
      'Landing Page Development',
      'Ecommerce Development',
      'Mobile App Development',
    ],
  },
  {
    title: 'Design',
    icon: Palette,
    items: [
      'UI/UX & Product Design',
      'Graphic Design',
      'Packaging Design',
      'Branding & Logos',
      'Model Creation (2D/3D)',
      'Animation',
    ],
  },
  {
    title: 'Marketing',
    icon: Rocket,
    items: [
      'Social Media Marketing',
      'Content & Copywriting',
      'Conversion Optimization',
      'SEO-Friendly Foundations',
    ],
  },
  {
    title: 'AI Systems',
    icon: Brain,
    items: [
      'AI Agents & Workflows',
      'Automation Pipelines',
      'Recommendation Systems',
      'AI-Assisted Analytics',
    ],
  },
];

function Card({ title, icon: Icon, items }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-xl backdrop-blur transition hover:bg-white/10">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
          <Icon size={18} />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-white/80">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-white/60"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">End-to-end capability. One partner.</h2>
          <p className="mt-3 text-white/70">
            We design, engineer, and grow digital products with an integrated team across development,
            design, marketing, and AI systems.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <Card key={cat.title} title={cat.title} icon={cat.icon} items={cat.items} />
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 text-sm text-white/80">
          <p>
            Technology-agnostic, problem-specific. We recommend what fits — whether that’s a performant
            React stack, Shopify, or custom AI workflows — and we document everything with clarity.
          </p>
        </div>
      </div>
    </section>
  );
}
