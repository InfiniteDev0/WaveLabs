"use client";

import { motion } from "motion/react";

/**
 * Fades and lifts a block the first time it enters the viewport. Motion
 * respects prefers-reduced-motion via MotionConfig in the page shell, so this
 * stays a no-op for anyone who has asked for less movement.
 */
export function Reveal({
  as = "div",
  delay = 0,
  y = 28,
  className,
  children,
  ...rest
}) {
  const Tag = motion[as] ?? motion.div;

  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}
