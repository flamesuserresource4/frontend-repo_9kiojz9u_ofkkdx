import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay for legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6">
        {/* Top bar */}
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black">
              <span className="text-lg font-black">K</span>
            </div>
            <span className="text-lg font-semibold tracking-wide">Kivee</span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#services" className="text-sm text-white/80 transition hover:text-white">Services</a>
            <a href="#process" className="text-sm text-white/80 transition hover:text-white">Process</a>
            <a href="#identity" className="text-sm text-white/80 transition hover:text-white">Identity</a>
            <a href="#contact" className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90">Let’s talk</a>
          </div>
        </div>

        {/* Hero copy */}
        <div className="mt-10 flex flex-1 flex-col items-start justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Rocket size={14} />
            <span>Legacy built. Future ready.</span>
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            A decade-strong, new-age powerhouse
            <br className="hidden sm:block" />
            fusing craftsmanship with digital innovation.
          </h1>

          <p className="mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
            Kivee is your trusted, multi-disciplinary partner — a solution architect that blends
            experience and innovation to design, build, and scale brands, products, and AI systems.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Explore services
              <ArrowRight className="transition group-hover:translate-x-0.5" size={16} />
            </a>
            <a
              href="#process"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
            >
              How we work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
