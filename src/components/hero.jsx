import Image from "next/image";
import { Frame } from "./frame";
import { Reveal } from "./reveal";
import { brand, hero } from "@/lib/content";

/** Faint column rules that run behind the headline. */
function ColumnGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 grid grid-cols-2 sm:grid-cols-4"
    >
      {Array.from({ length: 4 }, (_, i) => (
        <div key={i} className="border-l border-hairline last:border-r" />
      ))}
    </div>
  );
}

function FloatCard({ float, delay }) {
  return (
    <Reveal
      delay={delay}
      y={40}
      className="absolute hidden overflow-hidden rounded-xl shadow-[0_18px_40px_-12px_rgb(0_0_0/0.35)] sm:block"
      style={{
        left: `${float.x}%`,
        top: `${float.y}%`,
        width: float.w,
        rotate: `${float.rotate}deg`,
      }}
    >
      <Image
        src={float.src}
        alt={float.alt}
        width={400}
        height={460}
        priority
        className="h-full w-full object-cover"
      />
    </Reveal>
  );
}

export function Hero() {
  return (
    <section id="top" className="">
      <Frame>
        {/* Headline ---------------------------------------------------- */}
        <div className="relative pt-16 pb-10 sm:pt-24 sm:pb-16">
          <ColumnGrid />

          <div class="hidden md:absolute right-0 bottom-10 space-y-20 space-x-20">
            <img src="/creativity/3.png" alt="" className=" w-40 rotate-45"  />
            <img
              src="/creativity/1.png"
              alt=""
              className="-rotate-45 w-40"
            />
          </div>

          <div className="absolute w-18 md:w-50 left-10 md:left-22">
            <img src="/idea.svg" alt="" />
          </div>

          <h1 className="display-hero relative text-center">
            <span className="block rise-in">{brand.tagline[0]}</span>
            <span className="relative block rise-in [animation-delay:120ms]">
              {brand.tagline[1]}
              <span
                aria-hidden="true"
                className="absolute -right-1 top-[18%] h-[0.13em] w-[0.13em] rounded-full bg-purple-500 sm:-right-3"
              />
            </span>
          </h1>

          {hero.floats.map((float, i) => (
            <FloatCard key={float.src} float={float} delay={0.25 + i * 0.12} />
          ))}
        </div>

        {/* Intro bar ---------------------------------------------------- */}
        <div className="grid border-t border-hairline sm:grid-cols-2 lg:grid-cols-[0.85fr_1.15fr_1fr]">
          <Reveal className="flex items-center gap-3 py-6 lg:pr-8">
            <Image
              src={hero.founder.avatar}
              alt={hero.founder.name}
              width={44}
              height={44}
              className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-white"
            />
            <span>
              <span className="block text-sm font-semibold">
                {hero.founder.name}
              </span>
              <span className="block text-smoke">{hero.founder.role}</span>
            </span>
          </Reveal>

          <Reveal
            delay={0.08}
            className="flex items-center py-6 sm:border-l sm:border-hairline sm:pl-8"
          >
            <p className="text-lg leading-snug sm:text-xl">
              {hero.intro.before}{" "}
              <span className="text-purple-500">{hero.intro.accent}</span>
            </p>
          </Reveal>

          <Reveal
            delay={0.16}
            className="flex items-start gap-4 border-t border-hairline py-6 sm:col-span-2 sm:border-t lg:col-span-1 lg:border-t-0 lg:border-l lg:border-hairline lg:pl-8"
          >
            <span>
              <span className="block text-xl font-semibold">
                {hero.promo.heading}
              </span>
              <span className="mt-1 block text-sm leading-relaxed text-smoke">
                {hero.promo.body}
              </span>
            </span>
          </Reveal>
        </div>
      </Frame>
    </section>
  );
}
