import React, { useEffect, useState } from "react";

export default function FodFilms() {
  // HERO animation
  const [taglineIn, setTaglineIn] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setTaglineIn(true), 300);
    return () => clearTimeout(t);
  }, []);

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
            <a href="#home" className="flex items-center gap-2 group">
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
              <a href="#work" className="hover:text-white">Work</a>
              <a href="#about" className="hover:text-white">About</a>
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>

            <a
              href="#contact"
              className="hidden md:inline-flex items-center rounded-xl bg-white/10 hover:bg-white/15 transition px-4 py-2 text-sm"
            >
              Start a project
            </a>
          </div>
        </div>
      </header>

      {/* Hero — banner image only */}
      <section id="home" className="relative overflow-hidden">
        <picture>
          <source srcSet="/hero/hero-desktop.webp" media="(min-width: 768px)" />
          <img
            src="/hero/hero-mobile.webp"
            alt="Fód Films — roots banner"
            className="
              w-full
              max-h-[90vh]
              object-contain
              bg-black
              pt-8 sm:pt-16
              -translate-y-2 sm:-translate-y-4
              object-[center_bottom] sm:object-[center_bottom]
            "
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 pointer-events-none" />
      </section>

      {/* Text block below hero */}
      <section className="bg-neutral-950 text-center py-20 border-b border-neutral-900">
        <div className="max-w-3xl mx-auto px-4">
          <h1
            className={`text-4xl sm:text-6xl font-extrabold leading-[1.05] text-white transition-all duration-700 ${
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
              href="#work"
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
                <strong>Fód</strong> means sod in Irish — the ground beneath us. It reflects what we
                value: strong foundations, deep roots, and stories grown from something real. We look
                closely, listen deeply, and allow stories to reveal themselves rather than forcing them
                into a frame.
              </p>
              <p className="mt-4 text-neutral-300">
                With patience, honesty and craft, we shape films that feel felt, not forced — work that
                honours real lives and finds meaning where others might not look.
              </p>
              <div className="mt-6">
                <a
                  href="/about"
                  className="inline-flex items-center rounded-xl border border-neutral-700 px-4 py-2 text-sm hover:bg-white/5"
                >
                  Read more
                </a>
              </div>
            </div>

            <div className="md:col-span-2">
              <img
                src="/ken-headshot.jpg"
                alt="Ken Mac Giolla Phádraig — Director"
                className="w-full h-auto rounded-2xl border border-neutral-800 object-cover"
              />
              <p className="mt-3 text-xs text-neutral-500">
                Ken Mac Giolla Phádraig — Director · Producer · Editor
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-2xl sm:text-3xl font-bold">Services</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Commercial & Branded",
                desc: "High-impact campaigns, product films, and social content end-to-end.",
              },
              {
                title: "Documentary",
                desc: "Character-led non-fiction with intimacy and craft.",
              },
              {
                title: "Narrative",
                desc: "Shorts and features developed with writers and partners.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-neutral-800 p-6 bg-neutral-900/40"
              >
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
                      setFormStatus("sent"
