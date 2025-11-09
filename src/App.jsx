import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Identity from './components/Identity';
import CTA from './components/CTA';

function Footer() {
  return (
    <footer className="w-full bg-neutral-950 py-10 text-white">
      <div className="mx-auto max-w-7xl px-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black">
            <span className="text-lg font-black">K</span>
          </div>
          <div>
            <div className="text-sm font-semibold">Kivee</div>
            <div className="text-xs text-white/60">Experienced. Innovative. Elevated.</div>
          </div>
        </div>
        <div className="text-xs text-white/60">© {new Date().getFullYear()} Kivee. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black font-['Inter','Geist','Manrope',system-ui,sans-serif]">
      <Hero />
      <Services />
      <Process />
      <Identity />
      <CTA />
      <Footer />
    </div>
  );
}
