import { Briefcase, MapPin } from "lucide-react";
import { experiences } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          index="03"
          eyebrow="Experience"
          id="experience-title"
          title="Where I've worked."
          description="Roles across enterprise, product, and agency environments."
        />

        <ol className="relative mt-14 space-y-8 border-l border-line/15 pl-6 sm:pl-10">
          {experiences.map((exp, i) => (
            <li key={`${exp.company}-${exp.period}`} className="relative">
              <span
                className="absolute -left-[31px] top-7 grid h-4 w-4 place-items-center rounded-full border border-accent/60 bg-bg sm:-left-[47px]"
                aria-hidden="true"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <Reveal delay={i * 0.05}>
                <article className="glass rounded-2xl p-6 transition duration-300 hover:border-accent/40 sm:p-8">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight">{exp.role}</h3>
                      <p className="mt-1 flex items-center gap-2 text-accent">
                        <Briefcase className="h-4 w-4" aria-hidden="true" />
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-sm text-muted sm:text-right">
                      <p className="font-mono text-xs uppercase tracking-wider">{exp.period}</p>
                      <p className="mt-1 flex items-center gap-1.5 sm:justify-end">
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted sm:text-base">
                    {exp.highlights.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2.5 h-1 w-3 shrink-0 rounded-full bg-accent/60" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-2" aria-label={`Technologies used at ${exp.company}`}>
                    {exp.tags.map((tag) => (
                      <li key={tag} className="badge">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
