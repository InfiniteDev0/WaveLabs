"use client";

import { useState } from "react";
import { Frame } from "./frame";
import { Wordmark } from "./brand-mark";
import { MenuIcon, CloseIcon } from "./icons";
import { navLinks } from "@/lib/content";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-paper/90 backdrop-blur-md">
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
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="ml-1 rounded-full p-2 transition-colors hover:bg-cloud lg:hidden"
            >
              {open ? (
                <CloseIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {open && (
          <nav
            id="mobile-nav"
            aria-label="Primary mobile"
            className="flex flex-col gap-1 border-t border-hairline py-4 lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="display-md py-2 transition-colors hover:text-grape"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </Frame>
    </header>
  );
}
