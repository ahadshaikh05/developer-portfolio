import {
  Braces,
  Cloud,
  FlaskConical,
  GitBranch,
  Layers,
  LayoutDashboard,
  Plug,
  Smartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { skillCategories, type SkillCategory } from "@/data/site";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const icons: Record<SkillCategory["icon"], LucideIcon> = {
  mobile: Smartphone,
  frontend: LayoutDashboard,
  languages: Braces,
  state: Layers,
  api: Plug,
  cloud: Cloud,
  testing: FlaskConical,
  ai: Sparkles,
  practices: GitBranch,
};

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          index="02"
          eyebrow="Technical skills"
          id="skills-title"
          title="The tools I build with."
          description="Technologies I use day to day across mobile, web, and the engineering practices around them."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => {
            const Icon = icons[category.icon];
            return (
              <li key={category.id}>
                <Reveal delay={(i % 3) * 0.06} className="h-full">
                  <article className="group glass h-full rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/40">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl border border-line/10 bg-line/5 text-accent transition group-hover:bg-accent/15">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h3 className="text-base font-semibold tracking-tight">{category.title}</h3>
                    </div>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <li key={item} className="badge">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
