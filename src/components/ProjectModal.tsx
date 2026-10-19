"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import type { Project } from "@/data/site";
import { ProjectVisual } from "./ProjectVisual";
import { ProjectLinks } from "./ProjectLinks";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const items = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-line/15 bg-bg p-6 shadow-2xl sm:rounded-3xl sm:p-8"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-line/15 text-muted transition hover:border-accent/60 hover:text-fg"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>

        <p className="eyebrow">Case study</p>
        <h3 id="project-modal-title" className="mt-2 pr-10 text-2xl font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted">{project.caseStudy.context}</p>

        <div className="mt-6">
          <ProjectVisual kind={project.visual} />
        </div>

        <p className="mt-6 leading-relaxed text-muted">{project.summary}</p>

        <h4 className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-accent">What I worked on</h4>
        <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-fg/90 sm:text-base">
          {project.caseStudy.points.map((p) => (
            <li key={p} className="flex gap-3">
              <span className="mt-2.5 h-1 w-3 shrink-0 rounded-full bg-accent/60" aria-hidden="true" />
              <span>{p}</span>
            </li>
          ))}
        </ul>

        <h4 className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-accent">Technologies</h4>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li key={t} className="badge">
              {t}
            </li>
          ))}
        </ul>

        {project.links?.length ? (
          <>
            <h4 className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-accent">Website &amp; product</h4>
            <ProjectLinks links={project.links} className="mt-3" />
            <p className="mt-3 text-xs text-muted">
              Links open the official product pages. Products belong to their respective owners.
            </p>
          </>
        ) : null}
      </div>
    </div>
  );
}
