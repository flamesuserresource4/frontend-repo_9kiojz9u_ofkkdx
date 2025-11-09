import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import CTA from './components/CTA';

function Footer() {
  return (
    <footer className="w-full bg-white py-10 text-neutral-900">
      <div className="mx-auto max-w-7xl px-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-900 text-white">
            <span className="text-lg font-black">K</span>
            {/* subtle brand ring */}
            <span className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-[rgba(5,163,222,0.35)]"></span>
          </div>
          <div>
            <div className="text-sm font-semibold">Kivee</div>
            <div className="text-xs text-neutral-500">Experienced. Innovative. Elevated.</div>
          </div>
        </div>
        <div className="text-xs text-neutral-500">© {new Date().getFullYear()} Kivee. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white text-neutral-900 font-['Inter','Geist','Manrope',system-ui,sans-serif]">
      <Hero />
      <Services />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
}
