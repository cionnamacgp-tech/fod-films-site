import { useEffect, useState } from "react";

export default function FodFilms() {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formStatus, setFormStatus] = useState("idle");

  // Re-render on scroll to update parallax transform (lightweight)
  const [, forceUpdate] = useState(0);
  useEffect(() => {
    const onScroll = () => forceUpdate((v) => v + 1);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollY = typeof window !== "undefined" ? window.scrollY : 0;

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

      {/* Hero — ember sunset + parallax */}
      <section id="home" className="relative overflow-hidden h-[80vh]">

        {/* Parallax background layer */}
        <div
          className="absolute inset-0 will-change-transform"
          style={{
            transform: `translateY(${Math.round(scrollY * -0.15)}px)`,
            backgroundImage: `
              linear-gradient(
                to bottom,
                rgba(255,196,77,0.28) 0%,
                rgba(245,158,11,0.22) 22%,
                rgba(0,0,0,0.00) 60%,
                rgba(0,0,0,0.45) 100%
              ),
              url('/fod-banner.png')
            `,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* extra gold ember at the horizon */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle at center, rgba(212,175,55,0.22) 0%, rgba(212,175,55,0.10) 35%, transparent 60%)",
          }}
        />

        {/* subtle film grain overlay */}
        <div className="absolute inset-0 grain pointer-events-none" />

        {/* Optional headline over the image (keep or remove) */}
        <div className="relative z-10 h-full flex items-end justify-center pb-16 px-4">
          <div className="text-center max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Cinematic stories with an Irish heartbeat.
            </h1>
            <p className="mt-6 text-lg text-neutral-300">
              Fód Films crafts films, commercials, and branded content rooted in place, people, and purpose.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="#work" className="inline-flex items-center justify-center rounded-xl bg-amber-400 px-5 py-3 font-medium text-neutral-950 hover:bg-amber-300 transition">
                See our work
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-neutral-700 px-5 py-3 font-medium hover:bg-white/5 transition">
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">Selected work</h2>
              <p className="text-neutral-400 mt-1">A few recent pieces.</p>
            </div>
            <a
              href="https://www.imdb.com/name/nm5270848/?ref_=fn_all_nme_2"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-amber-400 hover:text-amber-300"
            >
              View IMDb →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <article
                key={i}
                className="group rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/30"
              >
                <div className="aspect-[16/9] bg-neutral-800 grid place-items-center text-neutral-500">
                  Still {i}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">Project {i}</h3>
                  <p className="text-sm text-neutral-400">2025</p>
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
                “Fód” means soil — the ground underfoot. We make grounded films: authentic, human, visually striking.
              </p>

              <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-neutral-300">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> Producing & development</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> Directing & cinematography</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> Edit, sound, colour</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> Production services in Ireland</li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <img
                src="/brand-image.png"
                alt="Fód Films brand"
                className="w-full h-full object-cover rounded-2xl border border-neutral-800"
              />
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
          <h3 className="text-xl font-semibold mb-4">Collaborate with us</h3>

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
              />
            </div>

            <button
              disabled={formStatus === "sending"}
              className="mt-4 w-full rounded-xl bg-amber-400 text-neutral-950 font-medium py-2.5 hover:bg-amber-300 transition disabled:opacity-60"
            >
              {formStatus === "sending" ? "Sending…" : "Send message"}
            </button>

            {formStatus === "sent" && (
              <p className="mt-3 text-sm text-amber-400">Message sent — thank you.</p>
            )}
            {formStatus === "error" && (
              <p className="mt-3 text-sm text-red-400">
                Something went wrong — email cionnamacgp@gmail.com
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-neutral-400 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Fód Films</p>
          <div className="flex items-center gap-4">
            <a href="mailto:cionnamacgp@gmail.com" className="hover:text-neutral-200">Email</a>
            <a href="https://www.instagram.com/fod_films/" target="_blank" rel="noreferrer" className="hover:text-neutral-200">Instagram</a>
            <a href="https://www.imdb.com/name/nm5270848/" target="_blank" rel="noreferrer" className="hover:text-neutral-200">IMDb</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
