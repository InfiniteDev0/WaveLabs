"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Frame } from "./frame";
import { statIcons } from "./icons";
import { TextReveal } from "./ui/text-reveal";
import { LaunchSteps } from "./launch-steps";
import { manifesto, statSlides } from "@/lib/content";

const toneStyles = {
  acid: { card: "bg-acid text-ink", value: "text-ink", label: "text-ink/80" },
  grape: { card: "bg-grape text-white", value: "text-white", label: "text-white/90" },
  ember: { card: "bg-ember text-white", value: "text-white", label: "text-white/90" },
};





export function Manifesto() {
  return (
    <section id="vision">
      <Frame>
        <div className="grid  items-start gap-12 py-20  lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-28">
          <h2 className="display-xl  max-w-[15ch]">
            <TextReveal>{`${manifesto.lead} ${manifesto.rest}`}</TextReveal>
          </h2>
          <div className="h-full">
          <img src="/branding.png" className="w-[550px] h-[550px]  object-contain" alt="" />
          </div>
        </div>
      </Frame>
    </section>
  );
}
