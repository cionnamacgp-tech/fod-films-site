import React, { useEffect, useRef, useState } from "react";

/** Reveal on scroll (subtle fade + rise) */
function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShown(true),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
    >
      {children}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 font-serif leading-relaxed">

        <Reveal>
          <h1 className="text-3xl sm:text-5xl font-bold mb-10">About Fód Films</h1>
        </Reveal>

        <Reveal delay={50}>
          <p className="text-neutral-300 text-lg">
            Fód means sod in Irish — the ground beneath us. It reflects what we value:
            strong foundations, deep roots, and stories grown from something real.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-6 text-neutral-300 text-lg">
            Fód Films is a story-driven production company rooted in human connection.
            We believe the most powerful stories don’t shout — they grow. We look closely,
            listen deeply, and allow stories to reveal themselves rather than forcing them
            into a frame.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-6 text-neutral-300 text-lg">
            With patience, honesty and craft, we shape films that feel felt, not forced —
            work that honours real lives, pays attention to the moments in between, and finds
            meaning where others might not look.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <blockquote className="mt-8 italic text-neutral-400 border-l-2 border-amber-400 pl-4">
            We don’t build stories. We listen, and they reveal themselves.
          </blockquote>
        </Reveal>

        {/* Director */}
        <div className="mt-20 grid md:grid-cols-5 gap-8 items-start">
          <Reveal delay={50}>
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
                >Instagram</a>
                <a
                  href="https://www.imdb.com/name/nm5270848/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-neutral-700 px-3 py-2 hover:bg-white/5"
                >IMDb</a>
              </div>
            </div>
          </Reveal>

          <div className="md:col-span-3">
            <Reveal>
              <h2 className="text-2xl sm:text-4xl font-bold">Ken Mac Giolla Phádraig</h2>
              <p className="text-neutral-400 mt-1">Director · Producer · Editor</p>
            </Reveal>

            <Reveal delay={80}>
              <p className="mt-6 text-neutral-300 text-lg">
                Ken Mac Giolla Phádraig is an award-winning documentary filmmaker known for
                patient, human‑centred storytelling and a belief that the truth of a life is
                often found in its quietest moments.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-6 text-neutral-300 text-lg">
                For almost two decades at RTÉ, Ken has directed, filmed and edited work across
                documentary, factual entertainment and children’s programming in both Irish and
                English. His film <em>Laura Brennan: This Is Me</em> won a Gold Medal at the New
                York Festivals Film & TV Awards in 2020 and played a meaningful role in Ireland’s
                conversation around the HPV vaccine.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 text-neutral-300 text-lg">
                Ken has worked on productions recognised at the IFTA Awards and the Celtic Media
                Festival. He directed, filmed, produced and edited <em>Secrets from the Dancefloor</em>,
                which won Best Factual Entertainment at the RTS Awards in 2024. His work on
                <em> The War at Home, Back to Barrytown</em> and <em>Showstoppers</em> reflects his
                commitment to stories shaped by empathy, understanding and emotional truth.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 text-neutral-300 text-lg">
                Ken approaches filmmaking as an act of attention — observing with care, listening
                with intent, and shaping films that feel lived‑in rather than constructed. His work
                finds depth and emotion where others might not look.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <blockquote className="mt-8 italic text-neutral-400 border-l-2 border-amber-400 pl-4">
                We don’t build stories. We listen, and they reveal themselves.
              </blockquote>
            </Reveal>
          </div>
        </div>

        <Reveal delay={150}>
          <div className="mt-14 flex items-center gap-6">
            <a href="/" className="text-amber-400 hover:text-amber-300 text-sm">← Back home</a>
            <a
              href="mailto:info@fodfilms.ie"
              className="text-sm hover:text-neutral-200 border border-neutral-700 px-4 py-2 rounded-xl"
            >Contact</a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
