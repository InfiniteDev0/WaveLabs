import Image from "next/image";
import { Frame } from "./frame";
import { Reveal } from "./reveal";
import {
  testimonials,
  testimonialSnaps,
  testimonialsIntro,
} from "@/lib/content";

const toneStyles = {
  lilac: { card: "bg-lilac text-ink", meta: "text-ink/70", avatar: "bg-grape/30 text-ink" },
  tangerine: { card: "bg-tangerine text-white", meta: "text-white/85", avatar: "bg-white/25 text-white" },
  deepsea: { card: "bg-deepsea text-white", meta: "text-white/85", avatar: "bg-white/20 text-white" },
  mint: { card: "bg-mint text-ink", meta: "text-ink/70", avatar: "bg-deepsea/25 text-ink" },
};

/* Initials keep the section self-contained until real client photos exist. */
function Avatar({ name, className }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <span
      aria-hidden="true"
      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-sm font-semibold ring-2 ring-white/60 ${className}`}
    >
      {initials}
    </span>
  );
}

function QuoteCard({ item, delay, className = "" }) {
  const tone = toneStyles[item.tone];

  return (
    <Reveal
      as="figure"
      delay={delay}
      className={`flex flex-col justify-between gap-6 rounded-2xl p-6 ${tone.card} ${className}`}
    >
      <blockquote className="display-md text-center text-[clamp(1.05rem,1.5vw,1.35rem)] leading-[1.15]">
        &ldquo;{item.quote}&rdquo;
      </blockquote>
      <figcaption className="flex items-center gap-3">
        <Avatar name={item.name} className={tone.avatar} />
        <span className={`label-sm flex-1 text-center ${tone.meta}`}>
          {item.name}, {item.role}
        </span>
      </figcaption>
    </Reveal>
  );
}

function Snap({ snap, className = "" }) {
  return (
    <Reveal
      delay={0.15}
      className={`relative overflow-hidden rounded-lg shadow-xl ${className}`}
      style={{ rotate: `${snap.rotate}deg` }}
    >
      <Image
        src={snap.src}
        alt={snap.alt}
        fill
        sizes="16rem"
        className="object-cover"
      />
    </Reveal>
  );
}

export function Testimonials() {
  return (
    <section id="team">
      <Frame>
        <div className="grid items-center gap-8 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-6 lg:py-24">
          {/* Heading spans the full row so it can run wider than the middle
              column, the way it does in the design. */}
          <Reveal className="lg:col-span-3 lg:col-start-1 lg:row-start-2">
            <h2 className="display-xl text-center">
              <span className="block">{testimonialsIntro.heading[0]}</span>
            </h2>
            <p className="label-sm mt-4 text-center opacity-80">
              {testimonialsIntro.sub}
            </p>
          </Reveal>

          {/* Quote cards, pinned to the outer columns --------------------- */}
          {/* <QuoteCard item={testimonials[0]} delay={0} className="lg:col-start-1 lg:row-start-1" />
          <QuoteCard item={testimonials[1]} delay={0.1} className="lg:col-start-3 lg:row-start-1" />
          <QuoteCard item={testimonials[2]} delay={0} className="lg:col-start-1 lg:row-start-3" />
          <QuoteCard item={testimonials[3]} delay={0.1} className="lg:col-start-3 lg:row-start-3" /> */}

          {/* Scattered snapshots — decorative, desktop only ---------------- */}
          {/* <Snap
            snap={testimonialSnaps[0]}
            className="hidden h-36 w-44 justify-self-center lg:col-start-2 lg:row-start-1 lg:block"
          />
          <Snap
            snap={testimonialSnaps[1]}
            className="hidden h-32 w-28 justify-self-start lg:col-start-1 lg:row-start-2 lg:block"
          />
          <Snap
            snap={testimonialSnaps[2]}
            className="hidden h-32 w-28 justify-self-end lg:col-start-3 lg:row-start-2 lg:block"
          />
          <Snap
            snap={testimonialSnaps[3]}
            className="hidden h-32 w-40 justify-self-center lg:col-start-2 lg:row-start-3 lg:block"
          /> */}
        </div>
      </Frame>
    </section>
  );
}
