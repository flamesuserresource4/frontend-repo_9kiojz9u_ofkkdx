import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white text-neutral-900">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-[-10%] mx-auto h-[60vh] max-w-4xl rounded-full bg-gradient-to-br from-purple-300/30 via-blue-300/20 to-orange-200/30 blur-3xl" />
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
            <span>Legacy built. Future ready.</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl"
          >
            Kivee — experienced, innovative, and elevated.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 max-w-2xl text-base text-neutral-600 sm:text-lg"
          >
            A decade-strong, new-age powerhouse that fuses legacy craftsmanship with modern digital innovation. 
            We architect end-to-end systems across design, code, growth, and AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
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
        </div>

        {/* Right 3D Object */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative h-[60vh] w-full md:h-[70vh]"
        >
          <div className="absolute inset-0 rounded-3xl border border-neutral-200 bg-white">
            <Spline
              scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* Soft gradient overlay to match brand aura without blocking interaction */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.10),transparent_60%),radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_70%),radial-gradient(ellipse_at_center,rgba(251,146,60,0.08),transparent_80%)]" />
          </div>
        </motion.div>
      </div>

      {/* Top nav (floating) */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 z-20">
        <div className="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-900 text-white">
              <span className="text-lg font-black">K</span>
            </div>
            <span className="text-lg font-semibold tracking-wide">Kivee</span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#services" className="text-sm text-neutral-600 transition hover:text-neutral-900">Services</a>
            <a href="#process" className="text-sm text-neutral-600 transition hover:text-neutral-900">Process</a>
            <a href="#contact" className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800">Let’s talk</a>
          </div>
        </div>
      </div>
    </section>
  );
}
