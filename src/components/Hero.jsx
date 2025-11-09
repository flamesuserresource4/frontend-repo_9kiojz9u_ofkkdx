import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white text-neutral-900">
      {/* Brand gradients using #80BF38 and #05A3DE */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-24 left-1/2 h-[60vh] w-[60vw] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(40% 40% at 50% 50%, rgba(128,191,56,0.18) 0%, rgba(128,191,56,0.0) 70%), radial-gradient(40% 40% at 60% 40%, rgba(5,163,222,0.16) 0%, rgba(5,163,222,0.0) 75%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-2">
        {/* Left copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-600 shadow-sm"
          >
            <Rocket size={14} />
            <span>Designing clarity for ambitious brands</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl"
          >
            Kivee — precision, momentum, and a finance‑grade finish.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 max-w-2xl text-base text-neutral-600 sm:text-lg"
          >
            We merge product thinking with brand systems. The result: elegant sites, durable design languages, and motion that feels inevitable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full bg-[#05A3DE] px-6 py-3 text-sm font-medium text-white transition hover:brightness-95"
            >
              Explore services
              <ArrowRight className="transition group-hover:translate-x-0.5" size={16} />
            </a>
            <a
              href="#process"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-neutral-900 shadow-sm transition hover:bg-neutral-50"
            >
              How we work
            </a>
          </motion.div>

          {/* Color bullets */}
          <div className="mt-6 flex items-center gap-3 text-xs text-neutral-500">
            <span className="inline-flex h-2.5 w-2.5 rounded-full" style={{ background: '#05A3DE' }} />
            <span className="inline-flex h-2.5 w-2.5 rounded-full" style={{ background: '#80BF38' }} />
            <span>Precision + energy in every delivery</span>
          </div>
        </div>

        {/* Right 3D Animation (updated) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative h-[60vh] w-full md:h-[70vh]"
        >
          <div className="absolute inset-0 overflow-hidden rounded-3xl border border-neutral-200 shadow-[0_10px_30px_rgba(5,163,222,0.08)]">
            <Spline
              scene="https://prod.spline.design/G0i6ZIv4Vd1oW14L/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* Gradient overlay to tie the animation to brand colors without blocking interaction */}
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl"
              style={{
                background:
                  'radial-gradient(60% 60% at 30% 30%, rgba(5,163,222,0.10) 0%, rgba(5,163,222,0) 60%), radial-gradient(60% 60% at 70% 70%, rgba(128,191,56,0.12) 0%, rgba(128,191,56,0) 65%)',
                mixBlendMode: 'screen',
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Top nav (floating) */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 z-20">
        <div className="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-900 text-white">
              <span className="text-lg font-black">K</span>
              <span className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-[rgba(128,191,56,0.35)]"></span>
            </div>
            <span className="text-lg font-semibold tracking-wide">Kivee</span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#services" className="text-sm text-neutral-600 transition hover:text-neutral-900">Services</a>
            <a href="#process" className="text-sm text-neutral-600 transition hover:text-neutral-900">Process</a>
            <a href="#contact" className="rounded-full bg-[#80BF38] px-4 py-2 text-sm font-medium text-neutral-900 transition hover:brightness-95">Let’s talk</a>
          </div>
        </div>
      </div>
    </section>
  );
}
