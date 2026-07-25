"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { Frame } from "./frame";
import { Reveal } from "./reveal";
import { PlusIcon } from "./icons";
import { projectGroups } from "@/lib/content";

function ProjectGroup({ group }) {
  const [open, setOpen] = useState(null);
  const uid = useId();

  return (
    <Reveal className="grid gap-4 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,1fr)]">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-cloud lg:aspect-auto">
        <Image
          src={group.image}
          alt={group.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 22rem"
          className="object-cover"
        />
        <span className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black text-white px-3 py-1.5">
          {group.tag}
        </span>
      </div>

      <ul className="flex flex-col gap-2">
        {group.items.map((item, i) => {
          const isOpen = open === i;
          const panelId = `${uid}-panel-${i}`;
          return (
            <li key={item.title} className="rounded-xl bg-cloud">
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                >
                  {item.title}
                  <PlusIcon
                    className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
              </h3>
              <div
                id={panelId}
                hidden={!isOpen}
                className="px-6 pb-5 text-sm leading-relaxed text-smoke"
              >
                {item.body}
              </div>
            </li>
          );
        })}
      </ul>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projects">
      <Frame>
        <div className="py-16 lg:py-24">
          <Reveal as="h2" className="display-xl text-center">
            <span className="block">Explore My</span>
            <span className="block">Strategy</span>
          </Reveal>

          <div className="mt-12 flex flex-col gap-4">
            {projectGroups.map((group) => (
              <ProjectGroup key={group.tag} group={group} />
            ))}
          </div>
        </div>
      </Frame>
    </section>
  );
}
