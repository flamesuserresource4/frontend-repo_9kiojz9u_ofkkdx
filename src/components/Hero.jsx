import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(80,80,255,0.25),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(0,200,255,0.15),transparent_60%)]" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-2">
        {/* Left copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur"
          >
            <Rocket size={14} />
            <span>Legacy built. Future ready.</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl"
          >
            Kivee — a decade-strong, new-age partner fusing craftsmanship with digital innovation.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 max-w-2xl text-base text-white/80 sm:text-lg"
          >
            We architect, design, and build end-to-end systems across web, mobile, brand, marketing, and AI.
            One integrated team. Clear process. Premium outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
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
          </motion.div>
        </div>

        {/* Right 3D Object */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative h-[60vh] w-full md:h-[70vh]"
        >
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </motion.div>
      </div>

      {/* Top nav (floating) */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 z-20">
        <div className="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
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
      </div>
    </section>
  );
}
