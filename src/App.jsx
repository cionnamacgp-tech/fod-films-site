import React, { useState } from "react";

export default function FodFilms() {
  const [email, setEmail] = useState("");
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formStatus, setFormStatus] = useState('idle');

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-950/90 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-2 group">
              <img src="/logo-fod-circle.png" alt="Fód Films logo" className="h-8 w-8 rounded-full ring-1 ring-white/20 object-cover bg-neutral-900" />
              <span className="text-lg font-semibold tracking-wide group-hover:opacity-90">Fód Films</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
              <a href="#work" className="hover:text-white">Work</a>
              <a href="#about" className="hover:text-white">About</a>
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>
            <a href="#contact" className="hidden md:inline-flex items-center rounded-xl bg-white/10 hover:bg-white/15 transition px-4 py-2 text-sm">
              Start a project
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(16,185,129,0.25),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-emerald-300 text-xs">
              New • Dublin-based production company
            </p>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Cinematic stories with an Irish heartbeat.
            </h1>
            <p className="mt-6 text-lg text-neutral-300">
              Fód Films crafts films, commercials, and branded content rooted in place, people, and purpose. From concept to final grade, we deliver end-to-end production with care.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a href="#work" className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 font-medium text-neutral-950 hover:bg-emerald-400 transition">
                See our work
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-neutral-700 px-5 py-3 font-medium hover:bg-white/5 transition">
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase / Work */}
      <section id="work" className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">Selected work</h2>
              <p className="text-neutral-400 mt-1">A few recent pieces. Swap in your stills or posters.</p>
            </div>
            <a href="https://www.imdb.com/name/nm5270848/?ref_=fn_all_nme_2" target="_blank" rel="noreferrer" className="text-sm text-emerald-400 hover:text-emerald-300">View IMDb profile →</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((i) => (
              <article key={i} className="group rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/30">
                <div className="aspect-[16/9] bg-neutral-800 relative">
                  <div className="absolute inset-0 grid place-items-center text-neutral-500">
                    <span className="text-sm">Project still {i}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">Title of Project {i}</h3>
                  <p className="text-sm text-neutral-400">Short logline or brand • 2025</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3">
              <h2 className="text-2xl sm:text-3xl font-bold">About Fód</h2>
              <p className="mt-4 text-neutral-300">
                “Fód” is Gaelic for soil — the ground underfoot. We make films that feel grounded: authentic, human, and visually striking. Our team brings festival-winning narrative craft to commercial briefs and documentary stories.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-neutral-300">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"/> Development & producing</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"/> Directing & cinematography</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"/> Post: edit, sound, colour</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"/> Fixers & production services in Ireland</li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <div className="aspect-[3/4] rounded-2xl bg-neutral-800 grid place-items-center text-neutral-500">
                Brand image or set still
              </div>
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
              { title: "Commercial & Branded", desc: "High-impact campaigns, product films, and social content end-to-end." },
              { title: "Documentary", desc: "Character-led non-fiction with intimacy and craft." },
              { title: "Narrative", desc: "Shorts and features developed with writers and partners." },
            ].map((card, idx) => (
              <div key={idx} className="rounded-2xl border border-neutral-800 p-6 bg-neutral-900/40">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-400 to-sky-500 mb-4" />
                <h3 className="font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm text-neutral-400">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="border-t border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-2xl border border-neutral-800 p-6 bg-gradient-to-br from-neutral-900 to-neutral-900/40">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <h3 className="text-xl font-semibold">Collaborate with us</h3>
                <p className="text-neutral-400 text-sm mt-1">Share a brief or say hello — we’ll reply within 1–2 business days.</p>
              </div>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setFormStatus('sending');
                  const form = e.currentTarget;
                  try {
                    const resp = await fetch('https://formspree.io/f/xdkprbln', {
                      method: 'POST',
                      headers: { 'Accept': 'application/json' },
                      body: new FormData(form)
                    });
                    if (resp.ok) {
                      setFormStatus('sent');
                      setFormName('');
                      setFormEmail('');
                      setFormMessage('');
                    } else {
                      setFormStatus('error');
                    }
                  } catch (err) {
                    setFormStatus('error');
                  }
                }}
                className="rounded-2xl border border-neutral-800 p-6 bg-neutral-900/40"
              >
                <input type="hidden" name="subject" value="Fód Films website enquiry" />
                {/* Honeypot field to reduce spam */}
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-1">Name</label>
                    <input name="name" value={formName} onChange={(e)=>setFormName(e.target.value)} className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm" required />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Email</label>
                    <input name="email" type="email" value={formEmail} onChange={(e)=>setFormEmail(e.target.value)} className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm" required />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm mb-1">Message</label>
                  <textarea name="message" rows={5} value={formMessage} onChange={(e)=>setFormMessage(e.target.value)} className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm" placeholder="Tell us about your project…" />
                </div>
                <button disabled={formStatus==='sending'} className="mt-4 w-full rounded-xl bg-white text-neutral-950 font-medium py-2.5 hover:bg-neutral-200 transition disabled:opacity-60">
                  {formStatus==='sending' ? 'Sending…' : 'Send message'}
                </button>
                {formStatus==='sent' && (
                  <p className="mt-3 text-sm text-emerald-400">Thanks — your message was sent.</p>
                )}
                {formStatus==='error' && (
                  <p className="mt-3 text-sm text-red-400">Sorry, something went wrong. Please email <a href="mailto:cionnamacgp@gmail.com" className="underline">cionnamacgp@gmail.com</a>.</p>
                )}
                <p className="mt-3 text-xs text-neutral-500">We’ll only use your details to reply to this message.</p>
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
              <a href="#" className="hover:text-neutral-200">Privacy</a>
              <a href="#" className="hover:text-neutral-200">Credits</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
