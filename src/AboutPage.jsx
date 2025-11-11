import React, { useState } from "react";

export default function AboutPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-950/90 border-b border-neutral-800">
        {/* ... full navbar code from homepage ... */}
      </header>

      {/* About section content below */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 font-serif leading-relaxed">
        <h1 className="text-3xl sm:text-5xl font-bold mb-10">About Fód Films</h1>
        {/* rest of your about text */}
      </div>
    </div>
  );
}


      {/* Page content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 font-serif leading-relaxed">
      {/* Ember background intro */}
<section className="relative overflow-hidden mb-16">
  {/* blurred hero image as background */}
  <div className="absolute inset-0">
    <img
      src="/hero/hero-mobile-ember.webp"
      alt="Ember background"
      className="w-full h-full object-cover opacity-60 blur-[40px] scale-110"
    />
    {/* lighter overlay so color shines through */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-neutral-950/90" />
  </div>

  {/* content */}
  <div className="relative z-10 py-24 text-center px-4 sm:px-6">
    <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
      About Fód Films
    </h1>
    <p className="text-lg sm:text-xl text-neutral-200 max-w-2xl mx-auto">
      Rooted in story. Grounded in truth. Grown from something real.
    </p>
  </div>
</section>




        <p className="text-neutral-300 text-lg">
          Fód means sod in Irish — the ground beneath us. It reflects what we value:
          strong foundations, deep connections, and stories grown from something real.
        </p>
        <p className="mt-6 text-neutral-300 text-lg">
          Fód Films is a story-driven production company rooted in human connection.
          We believe the most powerful stories don’t shout — they grow. We look closely,
          listen deeply, and allow stories to reveal themselves rather than forcing them into a frame.
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
      </main>
    </div>
  );
}
