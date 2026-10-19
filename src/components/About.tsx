import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { site } from "@/data/site";

const workedOn = [
  "Production mobile applications",
  "Enterprise applications",
  "Client-facing proof-of-concept solutions",
  "Web applications",
  "Ticket-booking systems",
  "Agricultural tracking applications",
  "Restaurant ordering applications",
  "IoT control applications",
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-x">
        <SectionHeader index="01" eyebrow="About" id="about-title" title="Pragmatic engineering, from idea to release." />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              I&apos;m a software developer with {site.experienceYears} years of experience building mobile and web
              applications. My work spans production mobile apps, enterprise applications, and client-facing
              proof-of-concept solutions, built mainly with React Native, React, Flutter, and TypeScript.
            </p>
            <p>
              I&apos;m comfortable across the full application development lifecycle: turning requirements into working
              features, integrating APIs and third-party services, instrumenting analytics, and getting apps through
              release. I enjoy collaborating with cross-functional teams to improve products iteratively.
            </p>
            <p>
              I also actively explore AI-assisted development workflows, using tools like Claude and Antigravity to
              speed up problem-solving and exploration while keeping code quality front and center.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass rounded-2xl p-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Worked on</p>
              <ul className="mt-4 space-y-3">
                {workedOn.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-fg/90">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent2" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
