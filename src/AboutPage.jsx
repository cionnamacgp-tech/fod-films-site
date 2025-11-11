import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-950/90 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            {/* Logo / Brand */}
            <Link to="/" className="flex items-center gap-2 group">
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
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
              <Link to="/work" className="hover:text-white">Work</Link>
              <Link to="/about" className="hover:text-white">About</Link>
              <a href="/#services" className="hover:text-white">Services</a>
              <a href="/#contact" className="hover:text-white">Contact</a>
            </nav>

            {/* Desktop CTA */}
            <a
              href="/#contact"
              className="hidden md:inline-flex items-center rounded-xl bg-white/10 hover:bg-white/15 transition px-4 py-2 text-sm"
            >
              Start a project
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-neutral-700 hover:bg-white/5"
              aria-label="Open menu"
              onClick={() => setMobileOpen(v => !v)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-neutral-200">
                <path fillRule="evenodd" d="M3.75 6.75h16.5v1.5H3.75v-1.5Zm0 4.5h16.5v1.5H3.75v-1.5Zm0 4.5h16.5v1.5H3.75v-1.5Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-neutral-800 bg-neutral-950/95 backdrop-blur">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
              <div className="flex flex-col gap-3 text-neutral-200 text-sm">
                <Link to="/work" onClick={() => setMobileOpen(false)} className="py-2 border-b border-neutral-800/60">Work</Link>
                <Link to="/about" onClick={() => setMobileOpen(false)} className="py-2 border-b border-neutral-800/60">About</Link>
                <a href="/#services" onClick={() => setMobileOpen(false)} className="py-2 border-b border-neutral-800/60">Services</a>
                <a href="/#contact" onClick={() => setMobileOpen(false)} className="py-2">Contact</a>
                <a
                  href="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-2 inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/15 transition px-4 py-2"
                >
                  Start a project
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Ember background intro (uses hero-mobile-ember colors) */}
      <section className="relative overflow-hidden mb-16">
        <div className="absolute inset-0">
          <img
            src="/hero/hero-mobile-ember.webp"
            alt="Ember background"
            className="w-full h-full object-cover opacity-60 blur-[40px] scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-neutral-950/90" />
        </div>
        <div className="relative z-10 py-24 text-center px-4 sm:px-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            About Fód Films
          </h1>
          <p className="text-lg sm:text-xl text-neutral-200 max-w-2xl mx-auto">
            Rooted in story. Grounded in truth. Grown from something real.
          </p>
        </div>
      </section>

      {/* About content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 font-serif leading-relaxed">
        <p className="text-neutral-300 text-lg">
          Fód means sod in Irish — the ground beneath us. It reflects what we value:
          strong foundations, deep roots, and stories grown from something real.
        </p>

        <p className="mt-6 text-neutral-300 text-lg">
          Fód Films is a story-driven production company rooted in human connection. We believe the most powerful
          stories don’t shout — they grow. We look closely, listen deeply, and allow stories to reveal themselves
          rather than forcing them into a frame.
        </p>

        <p className="mt-6 text-neutral-300 text-lg">
          With patience, honesty and craft, we shape films that feel felt, not forced — work that honours real lives,
          pays attention to the moments in between, and finds meaning where others might not look.
        </p>

        <blockquote className="mt-8 italic text-neutral-400 border-l-2 border-amber-400 pl-4">
          We don’t build stories. We listen, and they reveal themselves.
        </blockquote>

        {/* Director */}
        <div className="mt-20 grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2">
            <img
              src="/Ken-headshot.jpg"
              alt="Ken Mac Giolla Phádraig — Director"
              className="w-full h-auto rounded-2xl border border-neutral-800 object-cover"
            />
            <div className="mt-4 flex items-center gap-4 text-sm">
              <a
                href="https://www.instagram.com/fod_films/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-neutral-700 px-3 py-2 hover:bg-white/5"
              >
                Instagram
              </a>
              <a
                href="https://www.imdb.com/name/nm5270848/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-neutral-700 px-3 py-2 hover:bg-white/5"
              >
                IMDb
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h2 className="text-2xl sm:text-4xl font-bold">Ken Mac Giolla Phádraig</h2>
            <p className="text-neutral-400 mt-1">Director · Producer · Editor</p>

            <p className="mt-6 text-neutral-300 text-lg">
              Ken Mac Giolla Phádraig is an award-winning documentary filmmaker known for
              patient, human-centred storytelling and a belief that the truth of a life is
              often found in its quietest moments.
            </p>

            <p className="mt-6 text-neutral-300 text-lg">
              For almost two decades at RTÉ, Ken has directed, filmed and edited work across
              documentary, factual entertainment and children’s programming in both Irish and
              English. His film <em>Laura Brennan: This Is Me</em> won a Gold Medal at the New York
              Festivals Film & TV Awards in 2020 and played a meaningful role in Ireland’s
              conversation around the HPV vaccine.
            </p>

            <p className="mt-6 text-neutral-300 text-lg">
              Ken has worked on productions recognised at the IFTA Awards and the Celtic Media
              Festival. He directed, filmed, produced and edited <em>Secrets from the Dancefloor</em>,
              which won Best Factual Entertainment at the RTS Awards in 2024. His work on
              <em> The War at Home, Back to Barrytown</em> and <em>Showstoppers</em> reflects his
              commitment to stories shaped by empathy, understanding and emotional truth.
            </p>

            <p className="mt-6 text-neutral-300 text-lg">
              Ken approaches filmmaking as an act of attention — observing with care, listening
              with intent, and shaping films that feel lived-in rather than constructed. His work
              finds depth and emotion where others might not look.
            </p>

            <blockquote className="mt-8 italic text-neutral-400 border-l-2 border-amber-400 pl-4">
              We don’t build stories. We listen, and they reveal themselves.
            </blockquote>
          </div>
        </div>

        {/* Back / Contact */}
        <div className="mt-14 flex items-center gap-6">
          <a href="/" className="text-amber-400 hover:text-amber-300 text-sm">← Back home</a>
          <a href="/#contact" className="text-sm hover:text-neutral-200 border border-neutral-700 px-4 py-2 rounded-xl">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
