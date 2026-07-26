"use client";

import { useState } from "react";
import { Frame } from "./frame";
import { Wordmark } from "./brand-mark";
import { navLinks } from "@/lib/content";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-hairline bg-white/60 backdrop-blur-md">
      <Frame>
        <div className="grid h-16 grid-cols-[auto_1fr_auto] items-center gap-4">
          <a href="#top" className="flex items-center" aria-label="Weave home">
            <Wordmark />
          </a>

          <nav className="hidden justify-center gap-10 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-ink/80 transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2">
            <a
              href="#footer"
              className="rounded-full bg-purple-500 px-5 py-2.5 text-white transition-transform hover:-translate-y-0.5"
            >
              Contact Me
            </a>
          </div>
        </div>
      </Frame>
    </header>
  );
}
