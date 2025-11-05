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
              {/* Send About to the dedicated page */}
              <a href="/about" className="hover:text-white">About</a>
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
      className="w-full h-[75vh] sm:h-[90vh] object-cover object-bottom"
    />
  </picture>

  {/* subtle top fade to avoid "cut edge" */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 pointer-events-none"></div>
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
                    <a href="mailto:cionnamacgp@gmail.com" className="underline">info@fodfilms.ie</a>.
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
              <a href="mailto:cionnamacgp@gmail.com" className="hover:text-neutral-200">Email</a>
              <a href="https://www.instagram.com/fod_films/?hl=en" target="_blank" rel="noreferrer" className="hover:text-neutral-200">Instagram</a>
              <a href="https://www.imdb.com/name/nm5270848/?ref_=fn_all_nme_2" target="_blank" rel="noreferrer" className="hover:text-neutral-200">IMDb</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
