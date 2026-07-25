"use client";

import { motion } from "motion/react";
import { launchSteps } from "@/lib/content";

/**
 * Vertical timeline with labels alternating either side of the rule. Each row
 * is a `1fr auto 1fr` grid, so the dot column lands dead centre and the rule
 * can be pinned at 50% without any magic numbers.
 */
export function LaunchSteps() {
  const { heading, sub, steps } = launchSteps;

  return (
    <div>
      <header className="text-center">
        <h3 className="text-4xl font-light tracking-wide sm:text-5xl">
          {heading}
        </h3>
        <p className="mt-1 text-2xl font-light tracking-wide text-muted-foreground sm:text-3xl">
          {sub}
        </p>
      </header>

      <ol className="relative mt-12 flex flex-col gap-8 py-8">
        {/* The rule draws itself top-to-bottom as the block scrolls in. */}
        <motion.span
          aria-hidden="true"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-y-0 left-1/2 w-px origin-top -translate-x-1/2 bg-border"
        />

        {steps.map((step, i) => {
          const onLeft = i % 2 === 1;
          const label = (
            <span className="text-lg font-light tracking-wide text-muted-foreground">
              {step}
            </span>
          );
          const connector = <span className="h-px w-7 shrink-0 bg-border" />;

          return (
            <motion.li
              key={step}
              initial={{ opacity: 0, x: onLeft ? -16 : 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                duration: 0.5,
                delay: 0.25 + i * 0.09,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid grid-cols-[1fr_auto_1fr] items-center"
            >
              <span className="flex items-center justify-end gap-3">
                {onLeft && (
                  <>
                    {label}
                    {connector}
                  </>
                )}
              </span>

              <span className="relative z-10 h-2 w-2 rounded-full border border-border bg-background" />

              <span className="flex items-center gap-3">
                {!onLeft && (
                  <>
                    {connector}
                    {label}
                  </>
                )}
              </span>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
