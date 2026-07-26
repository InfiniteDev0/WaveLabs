"use client";

import { useState } from "react";
import { Wordmark } from "./brand-mark";
import { Reveal } from "./reveal";
import { ArrowRightIcon, socials } from "./icons";
import { contact, footer, navLinks } from "@/lib/content";

/* No backend yet — this only acknowledges the submission locally. Point it at
   a Server Action or your ESP when one exists. */
function Newsletter() {
  const [done, setDone] = useState(false);

  return (
    <div>
      <h3 className="display-lg">{footer.newsletter.heading}</h3>
      <p className="label-sm mt-3 max-w-[34ch] text-white/70">
        {footer.newsletter.body}
      </p>

      <form
        className="mt-4 flex flex-col items-start gap-3"
        onSubmit={(event) => {
          event.preventDefault();
          setDone(true);
        }}
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Your email
        </label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          required
          placeholder="YOUR EMAIL"
          className="label w-full rounded-lg border border-white/15 bg-white/8 px-4 py-3.5 text-white placeholder:text-white/45 focus:border-neon focus:outline-none"
        />
        <button
          type="submit"
          className="label flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-ink transition-transform hover:-translate-y-0.5"
        >
          {done ? "Subscribed" : footer.newsletter.cta}
          <ArrowRightIcon className="h-4 w-4" />
        </button>
        <p aria-live="polite" className="label-sm text-neon">
          {done ? "You're on the list." : ""}
        </p>
      </form>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer id="footer" className="bg-ink text-white">
      <div className="shell py-8">
        {/* Nav band ---------------------------------------------------- */}
        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-y border-white/12 py-6 sm:justify-between"
        >
          {navLinks.slice(0, 2).map((link) => (
            <a key={link.label} href={link.href} className="label text-white/85 hover:text-white">
              {link.label}
            </a>
          ))}
          <a href="#top" aria-label="Weave home">
            <Wordmark markClass="text-[#8b5cf6]" />
          </a>
          {navLinks.slice(2).map((link) => (
            <a key={link.label} href={link.href} className="label text-white/85 hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Statement --------------------------------------------------- */}
        <div className="grid gap-8 py-12 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <Reveal as="h2" className="display-lg max-w-[22ch]">
            {footer.statement.lead}{" "}
            <span className="text-white/25">{footer.statement.rest}</span>
          </Reveal>
          <address className="label not-italic text-white/90 lg:text-right">
            <span className="block">{contact.email}</span>
            <span className="block">{contact.footerPhone}</span>
            <span className="block">{contact.footerAddress}</span>
          </address>
        </div>

        {/* Link columns ------------------------------------------------- */}
        {/* <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          {footer.columns.map((column) => (
            <div key={column.heading}>
              <h3 className="label-sm text-white/45">{column.heading}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#footer" className="label text-white/90 hover:text-neon">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}


          <Newsletter />
        </div> */}
          <div>
            <h3 className="label-sm text-white/45">Social</h3>
            <ul className="m-4 flex gap-2.5">
              {socials.map(({ name, Icon, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    aria-label={name}
                    className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 transition-colors hover:bg-white/20"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        {/* Legal -------------------------------------------------------- */}
        <div className="label-sm flex flex-wrap items-center justify-between gap-4 border-t border-white/12 pt-6 text-white/80">
          <p>{footer.copyright}</p>
          <p className="flex items-center gap-4">
            {footer.legal.map((item, i) => (
              <span key={item} className="flex items-center gap-4">
                {i > 0 && <span aria-hidden="true" className="text-white/30">|</span>}
                <a href="#footer" className="hover:text-white">
                  {item}
                </a>
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
