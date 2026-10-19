"use client";

import { useCallback, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { ProjectVisual } from "./ProjectVisual";
import { ProjectModal } from "./ProjectModal";
import { ProjectLinks } from "./ProjectLinks";

export function Projects() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = projects.find((p) => p.id === activeId) ?? null;
  const close = useCallback(() => setActiveId(null), []);

  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          index="04"
          eyebrow="Featured projects"
          id="projects-title"
          title="Selected work."
          description="Applications I've built and contributed to. Visuals are original abstract mockups, not client screenshots."
        />

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <li key={project.id} className={i === 0 ? "md:col-span-2" : undefined}>
              <Reveal delay={(i % 2) * 0.06} className="h-full">
                <article className="group glass flex h-full flex-col rounded-2xl p-4 transition duration-300 hover:-translate-y-1 hover:border-accent/40 sm:p-5">
                  <ProjectVisual kind={project.visual} />
                  <div className="flex flex-1 flex-col px-1 pb-1 pt-5">
                    <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{project.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">{project.summary}</p>
                    {project.contribution ? (
                      <p className="mt-3 text-sm leading-relaxed text-fg/90">
                        <span className="font-medium text-accent">My contribution: </span>
                        {project.contribution}
                      </p>
                    ) : null}
                    <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Technologies for ${project.title}`}>
                      {project.tags.map((tag) => (
                        <li key={tag} className="badge">
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex-1" />
                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setActiveId(project.id)}
                        aria-haspopup="dialog"
                        className="btn-primary !py-2 !text-xs"
                      >
                        Case Study
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        <span className="sr-only"> for {project.title}</span>
                      </button>
                      <ProjectLinks links={project.links} limit={3} />
                    </div>
                    {project.links?.length ? (
                      <p className="mt-3 text-xs text-muted">
                        Links open the official product pages. Products belong to their respective owners.
                      </p>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      {active ? <ProjectModal project={active} onClose={close} /> : null}
    </section>
  );
}
