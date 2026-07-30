"use client";

import { useState, useEffect, useRef } from "react";
import { Frame } from "./frame";
import { Wordmark } from "./brand-mark";
import { navLinks } from "@/lib/content";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 80) {
        // Always show near the top of the page
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down -> hide
        setVisible(false);
      } else {
        // Scrolling up -> reveal
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed z-50 w-full h-16 text-white">
      {/* Sliding layer: background + logo + nav links */}
      <div
        className={`absolute inset-0 bg-white backdrop-blur-md transition-transform duration-300 ease-out will-change-transform ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
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
                  className="text-black 0 display-md text-lg"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Spacer matching the button column so the grid stays aligned */}
            <div />
          </div>
        </Frame>
      </div>

      {/* Fixed layer: Contact Me button, never slides */}
      <div className="absolute inset-0 pointer-events-none">
        <Frame>
          <div className="grid h-16 grid-cols-[auto_1fr_auto] items-center gap-4">
            <div />
            <div />
            <div className="flex items-center justify-end gap-2 pointer-events-auto">
              <a
                href="#footer"
                className="rounded-full bg-purple-500 px-5 py-2.5 text-white transition-transform hover:-translate-y-0.5"
              >
                Contact Me
              </a>
            </div>
          </div>
        </Frame>
      </div>
    </header>
  );
}