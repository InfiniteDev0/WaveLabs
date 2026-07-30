"use client";
import React, { useState, useEffect } from "react";
import { SECTIONS_DATA } from "@/lib/content";




const MyWork = () => {
  const [activeSection, setActiveSection] = useState(SECTIONS_DATA[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the trigger line that's currently intersecting
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          // If multiple are intersecting (e.g. short sections), take the topmost one
          const topMost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
          );
          setActiveSection(topMost.target.id);
        }
      },
      {
        // Trigger line sits 150px from the top, and ignores the bottom 60% of viewport
        rootMargin: "-150px 0px -60% 0px",
        threshold: 0,
      },
    );

    SECTIONS_DATA.forEach((sectionData) => {
      const el = document.getElementById(sectionData.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-black text-white py-20 px-6 md:px-16 flex items-start">
      {/* Sidebar - Sticky section that remains fixed until section ends */}
      <aside className="w-1/4 pr-8 sticky top-24 self-start">
        <ul className="space-y-4">
          {SECTIONS_DATA.map((section) => (
            <li
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`cursor-pointer transition-colors duration-200 ${
                activeSection === section.id
                  ? "text-white display-md text-2xl"
                  : "text-gray-500 hover:text-gray-300 display-md text-2xl"
              }`}
            >
              {section.title}
            </li>
          ))}
        </ul>
      </aside>

      {/* Content */}
      <div className="w-3/4 space-y-16">
        {SECTIONS_DATA.map((section) => (
          <div key={section.id} id={section.id} className="space-y-8">
            <p className="text-3xl md:text-4xl font-light text-neutral-100 max-w-3xl clash-md leading-snug">
              {section.description}
            </p>

            {/* Grid matching the UI layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-b border-r border-neutral-800 divide-y md:divide-y-0 md:divide-x divide-neutral-800">
              {section.cards.map((card) => (
                <div
                  key={card.number}
                  className="group relative p-6 md:p-8 flex flex-col justify-between min-h-[360px] transition-colors duration-300 hover:bg-neutral-900/40 overflow-hidden  border border-transparent hover:border-neutral-800"
                >
                  {/* Card Header Number */}
                  <div className="text-sm font-mono text-neutral-500 mb-6 relative z-20">
                    {card.number}
                  </div>

                  {/* Video background layer with gradient overlay */}
                  <div className="absolute inset-0 z-0 transition-opacity duration-500 pointer-events-none overflow-hidden">
                    {/* <video
                      src={card.videoSrc}
                      className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                      autoPlay
                      playsInline
                      muted
                      loop
                      preload="none"
                    /> */}
                    <img
                      src={card.imgSrc}
                      className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform  duration-700 ease-out"
                      alt=""
                    />
                    {/* Dark Vignette/Gradient overlay to make text pop */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/30" />
                  </div>

                  {/* Text overlay & Floating Arrow Button */}
                  <div className="relative z-10 mt-auto pt-12 flex items-end justify-between gap-4">
                    <div className="max-w-[80%]">
                      <h3 className="display-md text-2xl mb-2 text-white tracking-wide">
                        {card.title}
                      </h3>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyWork;
