import { useState } from "react";

export default function FodFilms() {
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
              <span className="relative inline-block">
                <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.45)_0%,rgba(212,175,55,0.18)_40%,transparent_70%)] blur-md" />
                <img src="/logo-fod-circle.png" alt="Fód Films logo" className="relative h-12 w-12 md:h-14 md:w-14 shrink-0 ring-1 ring-white/20 object-contain p-1 bg-neutral-900 rounded-full" />
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

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(212,175,55,0.25),transparent)]" />
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18)_0%,rgba(212,175,55,0.08)_35%,transparent_60%)] blur-2xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">

          {/* large logo */}
          <div className="mb-10 text-center">
            <img src="/logo-fod-circle.png" alt="Fód Films logo large" className="mx-auto h-40 w-40 md:h-56 md:w-56 object-contain drop-shadow-2xl" />
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
            <a href="https://www.imdb.com/name/nm5270848/?ref_=fn_all_nme_2" target="_blank" rel="noreferrer" className="text-sm text-amber-400 hover:text-amber-300">View IMDb →</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,]()
