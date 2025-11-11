
import React, { useState } from "react";

export default function WorkPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      {/* Navbar (same as About / Home) */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-950/90 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 group">
              <span className="relative inline-block">
                <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.45)_0%,rgba(212,175,55,0.18)_40%,transparent_70%)] blur-md" />
                <img
                  src="/logo-fod-circle.png"
                  alt="Fód Films logo"
                  className="relative h-12 w-12 md:h-14 md:w-14 shrink-0 ring-1 ring-white/20 object-contain p-1 bg-neutral-900 rounded-full"
                />
              </span>
              <span className="text-lg font-semibold tracking-wide text-white mix-blend-exclusion group-hover:opacity-90">
                Fód Films
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
              <a href="/work" className="hover:text-white">Work</a>
              <a href="/about" className="hover:text-white">About</a>
              <a href="/#services" className="hover:text-white">Services</a>
              <a href="/#contact" className="hover:text-white">Contact</a>
            </nav>

            <a
              href="/#contact"
              className="hidden md:inline-flex items-center rounded-xl bg-white/10 hover:bg-white/15 transition px-4 py-2 text-sm"
            >
              Start a project
            </a>

            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-neutral-700 hover:bg-white/5"
              aria-label="Open menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-neutral-200">
                <path fillRule="evenodd" d="M3.75 6.75h16.5v1.5H3.75v-1.5Zm0 4.5h16.5v1.5H3.75v-1.5Zm0 4.5h16.5v1.5H3.75v-1.5Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-neutral-800 bg-neutral-950/95 backdrop-blur">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
              <div className="flex flex-col gap-3 text-neutral-200 text-sm">
                <a href="/work" onClick={() => setMobileOpen(false)} className="py-2 border-b border-neutral-800/60">Work</a>
                <a href="/about" onClick={() => setMobileOpen(false)} className="py-2 border-b border-neutral-800/60">About</a>
                <a href="/#services" onClick={() => setMobileOpen(false)} className="py-2 border-b border-neutral-800/60">Services</a>
                <a href="/#contact" onClick={() => setMobileOpen(false)} className="py-2">Contact</a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Work Placeholder */}
      <section className="relative text-center py-32 px-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-8">Work</h1>
        <p className="text-lg sm:text-xl text-neutral-300 max-w-xl mx-auto">
          Our showreel and project gallery are currently in development.  
          Check back soon to explore Fód Films’ portfolio of work.
        </p>

        <div className="mt-10">
          <a
            href="/#contact"
            className="inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/15 transition px-6 py-3 text-sm"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
