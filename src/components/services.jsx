"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Frame } from "./frame";
import { Reveal } from "./reveal";
import { ArrowUpRightIcon } from "./icons";
import { services, servicesIntro } from "@/lib/content";
import { cn } from "@/lib/utils";

/** Matches the `gap-5` on the carousel track, in px. */
const CARD_GAP = 20;

function CarouselButton({ direction, disabled, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 1 ? "Next services" : "Previous services"}
      className={cn(
        "grid h-11 w-11 place-items-center rounded-full border border-white/15 transition-colors",
        disabled
          ? "cursor-not-allowed text-white/25"
          : "bg-white text-black hover:border-white/40 hover:bg-white/70",
      )}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={cn("h-5 w-5", direction === -1 && "rotate-180")}
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </button>
  );
}

function ServiceCard({ service, isActive, onActivate }) {
  return (
    <button
      type="button"
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      aria-pressed={isActive}
      className={cn(
        "group relative aspect-[4/5] w-full snap-start overflow-hidden text-left transition-all duration-500 ease-out",
        // Custom corner shape matching the design:
        // Active card gets a large rounded bottom-left corner (`rounded-bl-[3rem]`)
        isActive
          ? "rounded-2xl rounded-bl-[3.5rem] shadow-lg lg:scale-[1.02]"
          : "rounded-2xl lg:hover:scale-[1.01]",
      )}
    >
      {/* Background Image */}
      <Image
        src={service.image}
        alt={service.alt}
        fill
        sizes="(max-width: 640px) 78vw, (max-width: 1024px) 46vw, 21rem"
        className={cn(
          "object-cover transition-opacity duration-500",
          isActive ? "" : "opacity-100",
        )}
      />

      {/* Dynamic Overlays */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-0 transition-all duration-500",
          isActive
            ? "md:bg-gradient-to-b  md:to-[#000000]"
            : "md:bg-gradient-to-t md:from-black/90 md:via-black/40 md:to-transparent",
        )}
      />

      {/* Content Container */}
      <span
        className={cn(
          "relative flex h-full flex-col p-6 text-white transition-all duration-300",
          isActive ? "justify-end" : "justify-end",
        )}
      >
        {/* Active Header (Title + Arrow aligned top) */}
          <div>
            <h3 className="text-xl font-semibold leading-snug tracking-tight text-white">
              {service.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-white/70 max-w-[26ch] line-clamp-2">
              {service.blurb}
            </p>
          </div>
      </span>
    </button>
  );
}

export function Services() {
  const [active, setActive] = useState(1);
  const scrollerRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  /* Native scroll-snap does the carousel work; this only keeps the arrows in
     sync with how far along the track we are. */
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const sync = () => {
      setCanPrev(el.scrollLeft > 8);
      setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
    };

    sync();
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  const step = (direction) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.firstElementChild;
    const distance = card
      ? card.getBoundingClientRect().width + CARD_GAP
      : el.clientWidth;
    el.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-black text-white"
    >
      {/* Ambient glow in background */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-0 h-96 w-[42rem] rounded-full bg-purple-600/10 blur-[120px]"
      />

      <Frame className="relative border-0">
        <div className="py-16">
          {/* Main Title */}
          <Reveal
            as="h2"
            className="text-center display-xl text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1]"
          >
            {servicesIntro.heading[0]}
            <br />
            {servicesIntro.heading[1]}
          </Reveal>

          {/* Eyebrow / View All link */}
          <Reveal
            delay={0.08}
            className="mt-16 flex items-center justify-between gap-4"
          >
            <div>

            </div>
            <div className="flex items-center gap-2">
              <CarouselButton
                direction={-1}
                disabled={!canPrev}
                onClick={() => step(-1)}
              />
              <CarouselButton
                direction={1}
                disabled={!canNext}
                onClick={() => step(1)}
              />
            </div>
          </Reveal>

          {/* Carousel track. Each card sits in a sizing wrapper so the card
              itself stays exactly as designed. */}
          <Reveal delay={0.14} className="mt-6">
            <div
              ref={scrollerRef}
              className="flex snap-x snap-mandatory gap-5 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {services.map((service, i) => (
                <div
                  key={service.title}
                  className="w-[82%] shrink-0 snap-start sm:w-[45%] lg:w-[calc((100%-3*var(--spacing-card-gap))/4)]"
                >
                  <ServiceCard
                    service={service}
                    isActive={i === active}
                    onActivate={() => setActive(i)}
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Frame>
    </section>
  );
}
