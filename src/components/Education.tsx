import { GraduationCap } from "lucide-react";
import { education } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Education() {
  return (
    <section id="education" aria-labelledby="education-title" className="scroll-mt-24 py-16 md:py-24">
      <div className="container-x">
        <SectionHeader index="06" eyebrow="Education" id="education-title" title="Education." />

        <Reveal>
          <ul className="mt-8 divide-y divide-line/10 overflow-hidden rounded-2xl border border-line/10 bg-surface/40">
            {education.map((item) => (
              <li key={item.title} className="flex flex-col gap-1 p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <div className="flex items-start gap-3">
                  <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-muted">{item.place}</p>
                  </div>
                </div>
                <p className="pl-7 font-mono text-xs uppercase tracking-wider text-muted sm:pl-0 sm:text-right">
                  {item.period}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
