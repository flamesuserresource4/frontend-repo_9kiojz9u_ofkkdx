import React from 'react';

export default function Identity() {
  return (
    <section id="identity" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Experienced. Innovative. Elevated.</h2>
            <p className="mt-4 text-white/80">
              Kivee blends ten years of proven expertise with cutting-edge innovation — building web,
              software, and brand systems that empower businesses to scale with clarity, beauty, and
              performance.
            </p>
            <div className="mt-8 space-y-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-semibold uppercase tracking-wide text-white/60">Perception</div>
                <p className="mt-2 text-white/80">
                  Trusted partner, premium taste, and future-forward execution — from design to code to AI.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-semibold uppercase tracking-wide text-white/60">Archetype</div>
                <p className="mt-2 text-white/80">The Creator × The Sage — artistry guided by mastery.</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-semibold uppercase tracking-wide text-white/60">Voice</div>
                <p className="mt-2 text-white/80">Authoritative yet warm. Concise, modern, and solution-oriented.</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6">
            <h3 className="text-lg font-semibold">Positioning</h3>
            <p className="mt-3 text-white/80">
              A full-spectrum digital partner that brings consultancy clarity, studio craft, and tech
              efficiency into one integrated team. We build things that look good, work fast, and drive
              results.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 text-sm text-white/80 sm:grid-cols-2">
              <li className="rounded-lg border border-white/10 bg-white/5 p-3">Intelligence & Expertise</li>
              <li className="rounded-lg border border-white/10 bg-white/5 p-3">Innovation & Adaptability</li>
              <li className="rounded-lg border border-white/10 bg-white/5 p-3">Taste & Creativity</li>
              <li className="rounded-lg border border-white/10 bg-white/5 p-3">Trust & Partnership</li>
              <li className="rounded-lg border border-white/10 bg-white/5 p-3">End-to-End Capability</li>
              <li className="rounded-lg border border-white/10 bg-white/5 p-3">Continuous Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
