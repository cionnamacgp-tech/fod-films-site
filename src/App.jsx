import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function FodFilms() {
  // HERO animation
  const [taglineIn, setTaglineIn] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setTaglineIn(true), 300);
    return () => clearTimeout(t);
  }, []);

  // Mobile menu toggle
  const [mobileOpen, setMobileOpen] = useState(false);

  // CONTACT form state
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formStatus, setFormStatus] = useState("idle");

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
              onClick={() => setMobileOpen((v) => !v)}
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

      {/* Hero — banner image only */}
      <section id="home" className="relative overflow-hidden">
        <picture>
          <source srcSet="/hero/hero-desktop-ember.webp" media="(min-width: 768px)" />
        <img
  src="/hero/hero-desktop-ember.webp"
  alt="Fód Films — roots banner"
  className="
    w-full
    max-h-[90vh]
    object-contain          /* less zoom than cover */
    bg-black
    pt-8 sm:pt-12
    -translate-y-2 sm:-translate-y-2
    object-[center_bottom]  /* re-centers horizon and roots */
  "
/>


        </picture>
        {/* top/bottom fade so edges look natural */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
      </section>

      {/* Text block below hero */}
      <section className="bg-neutral-950 text-center py-20 border-b border-neutral-900">
        <div className="max-w-3xl mx-auto px-4">
          <h1
            className={`text-4xl sm:text-6xl font-extrabold leading-[1.05] transition-all duration-700 ${
              taglineIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            Fód Films
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-neutral-300 max-w-xl mx-auto">
            Rooted in Story<br />
            Cinematic stories with a heartbeat
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/work"
              className="inline-flex items-center justify-center rounded-xl bg-amber-400 px-5 py-3 font-medium text-neutral-950 hover:bg-amber-300 transition"
            >
              See our work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-neutral-700 px-5 py-3 font-medium hover:bg-white/5 transition"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* About (short) */}
      <section id="about" className="border-b border-neutral-900 bg-neutral-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-3">
              <h2 className="text-2xl sm:text-4xl font-bold">About Fód Films</h2>
              <p className="mt-4 text-neutral-300 text-lg">
                <strong>Fód</strong> means sod in Irish — the ground beneath us. It reflects what we value:
                strong foundations, deep roots, and stories grown from something real. We look closely,
                listen deeply, and allow stories to reveal themselves rather than forcing them into a frame.
              </p>
              <p className="mt-4 text-neutral-300">
                With patience, honesty and craft, we shape films that feel felt, not forced — work that
                honours real lives and finds meaning where others might not look.
              </p>
              <div className="mt-6 flex gap-3">
                <Link
                  to="/about"
                  className="inline-flex items-center rounded-xl bg-white/10 hover:bg-white/15 px-4 py-2 text-sm"
                >
                  Learn more
                </Link>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-xl border border-neutral-700 px-4 py-2 text-sm hover:bg-white/5"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* optional small image */}
            <div className="md:col-span-2">
              <img
                src="/ken-headshot.jpg"
                alt="Ken Mac Giolla Phádraig — Director"
                className="w-full h-auto rounded-2xl border border-neutral-800 object-cover"
              />
              <p className="mt-3 text-xs text-neutral-500">Ken Mac Giolla Phádraig — Director · Producer · Editor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-b border-neutral-900 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-2xl sm:text-3xl font-bold">Services</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Commercial & Branded", desc: "High-impact campaigns, product films, and social content end-to-end." },
              { title: "Documentary", desc: "Character-led non-fiction with intimacy and craft." },
              { title: "Narrative", desc: "Shorts and features developed with writers and partners." },
            ].map((card, idx) => (
              <div key={idx} className="rounded-2xl border border-neutral-800 p-6 bg-neutral-900/40">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 mb-4" />
                <h3 className="font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm text-neutral-400">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-2xl border border-neutral-800 p-6 bg-gradient-to-br from-neutral-900 to-neutral-900/40">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <h3 className="text-xl font-semibold">Collaborate with us</h3>
                <p className="text-neutral-400 text-sm mt-1">
                  Share a brief or say hello — we’ll reply within 1–2 business days.
                </p>
              </div>

              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setFormStatus("sending");
                  const form = e.currentTarget;
                  try {
                    const resp = await fetch("https://formspree.io/f/xdkprbln", {
                      method: "POST",
                      headers: { Accept: "application/json" },
                      body: new FormData(form),
                    });
                    if (resp.ok) {
                      setFormStatus("sent");
                      setFormName("");
                      setFormEmail("");
                      setFormMessage("");
                    } else {
                      setFormStatus("error");
                    }
                  } catch {
                    setFormStatus("error");
                  }
                }}
                className="rounded-2xl border border-neutral-800 p-6 bg-neutral-900/40"
              >
                <input type="hidden" name="subject" value="Fód Films website enquiry" />
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-1">Name</label>
                    <input
                      name="name"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm"
                      required
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm mb-1">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm"
                    placeholder="Tell us about your project…"
                  />
                </div>

                <button
                  disabled={formStatus === "sending"}
                  className="mt-4 w-full rounded-xl bg-white text-neutral-950 font-medium py-2.5 hover:bg-neutral-200 transition disabled:opacity-60"
                >
                  {formStatus === "sending" ? "Sending…" : "Send message"}
                </button>

                {formStatus === "sent" && (
                  <p className="mt-3 text-sm text-amber-400">Thanks — your message was sent.</p>
                )}
                {formStatus === "error" && (
                  <p className="mt-3 text-sm text-red-400">
                    Sorry, something went wrong. Please email{" "}
                    <a href="mailto:info@fodfilms.ie" className="underline">info@fodfilms.ie</a>.
                  </p>
                )}
                <p className="mt-3 text-xs text-neutral-500">
                  We’ll only use your details to reply to this message.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-neutral-400">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <p>© {new Date().getFullYear()} Fód Films. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="mailto:info@fodfilms.ie" className="hover:text-neutral-200">Email</a>
              <a href="https://www.instagram.com/fod_films/" target="_blank" rel="noreferrer" className="hover:text-neutral-200">Instagram</a>
              <a href="https://www.imdb.com/name/nm5270848/" target="_blank" rel="noreferrer" className="hover:text-neutral-200">IMDb</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
