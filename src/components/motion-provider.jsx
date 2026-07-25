"use client";

import { MotionConfig } from "motion/react";

/** Every scroll animation on the page is disabled when the OS asks for it. */
export function MotionProvider({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
