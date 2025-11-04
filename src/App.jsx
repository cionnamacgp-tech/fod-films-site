import { useState } from "react";

export default function FodFilms() {
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

           {/* Hero — ember sunset + parallax */}
<section id="home" className="relative overflow-hidden h-[80vh]">
  {/* Parallax layer (moves slower than scroll) */}
  <div
    className="absolute inset-0 will-change-transform"
    style={{
      transform: `translateY(${Math.round((window.scrollY || 0) * -0.15)}px)`,
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
      backgroundSize: 'cover',
      backgroundPosition: 'center 30%',
      backgroundRepeat: 'no-repeat',
    }}
  />

  {/* extra gold ember behind the horizon */}
  <div
    aria-hidden
    className="pointer-events-none absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] rounded-full blur-3xl"
    style={{
      background:
        'radial-gradient(circle at center, rgba(212,175,55,0.22) 0%, rgba(212,175,55,0.10) 35%, transparent 60%)',
    }}
  />

  {/* subtle film grain */}
  <div className="absolute inset-0 grain pointer-events-none" />

  {/* Centered headline (optional—remove if you want image only) */}
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

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(212,175,55,0.25),transparent)]" />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18)_0%,rgba(212,175,55,0.08)_35%,transparent_60%)] blur-2xl"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          {/* Large logo */}
          <div className="mb-10 text-center">
            <img
              src="/logo-fod-circle.png"
              alt="Fód Films logo large"
              className="mx-auto h-40 w-40 md:h-56 md:w-56 object-contain drop-shadow-2xl"
            />
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05] text-center">
            Cinematic stories with an Irish heartbeat.
          </h1>

          <p className="mt-6 text-lg text-neutral-300 text-center">
            Fód Films crafts films, commercials, and branded content rooted in place, people, and purpose. From concept to final grade, we deliver end-to-end production with care.
          </p>
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
