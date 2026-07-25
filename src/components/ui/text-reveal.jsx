"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { cn } from "@/lib/utils";

/**
 * Scroll-driven word reveal, adapted from @magicui/text-reveal.
 *
 * Three changes from the stock registry component, all needed to fit this page:
 *  - it splits on `""` (per character) upstream, which spaces every letter out
 *    once the per-item margin applies; we split on words instead.
 *  - it hard-codes `h-[200vh]` + a sticky pin, its own font sizes and
 *    black/white colours. Here the type comes from `display-xl` and the layout
 *    keeps the headline beside the stat cards, so the pin is dropped and all
 *    styling is passed in.
 *  - words are inline-block rather than flex children, so the tight
 *    `line-height` on the display face still governs the leading.
 */
export function TextReveal({
  children,
  className,
  dimClassName = "text-mist",
  litClassName = "text-ink",
  offset = ["start 0.85", "end 0.45"],
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  return (
    <span ref={ref} className={cn("block", className)}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word
            key={`${word}-${i}`}
            progress={scrollYProgress}
            range={[start, end]}
            dimClassName={dimClassName}
            litClassName={litClassName}
          >
            {word}
          </Word>
        );
      })}
    </span>
  );
}

function Word({ children, progress, range, dimClassName, litClassName }) {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <>
      {/* The dim copy stays in flow so it sizes the line; the lit copy is
          layered on top and is hidden from assistive tech as a duplicate. */}
      <span className="relative inline-block">
        <span className={dimClassName}>{children}</span>
        <motion.span
          aria-hidden="true"
          style={{ opacity }}
          className={cn("absolute inset-0", litClassName)}
        >
          {children}
        </motion.span>
      </span>{" "}
    </>
  );
}
