import { aiHighlights } from "@/data/site";
import { Reveal } from "./Reveal";

export function AiSection() {
  return (
    <section id="ai" aria-labelledby="ai-title" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container-x">
        <div className="glass relative overflow-hidden rounded-3xl p-6 sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-accent2/10 blur-3xl" aria-hidden="true" />

          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow">05 — AI-assisted development</p>
              <h2 id="ai-title" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Engineering Smarter <span className="text-gradient">with AI.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                I integrate AI-assisted development into my workflow to support problem-solving, code exploration,
                implementation, and development productivity while maintaining a focus on code quality and reliable
                engineering practices.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {aiHighlights.map((item) => (
                  <li key={item.title} className="rounded-xl border border-line/10 bg-line/5 p-4 transition hover:border-accent/40">
                    <p className="font-medium">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{item.text}</p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-2xl border border-line/10 bg-bg/70 shadow-xl shadow-black/10" aria-hidden="true">
                <div className="flex items-center gap-2 border-b border-line/10 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-line/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-line/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-line/20" />
                  <span className="ml-3 font-mono text-xs text-muted">workflow.md</span>
                </div>
                <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-7 sm:text-sm">
                  <code>
                    <span className="text-muted">{"// my AI-assisted loop"}</span>
                    {"\n"}
                    <span className="text-accent">1.</span> explore <span className="text-muted">{"→ understand the code"}</span>
                    {"\n"}
                    <span className="text-accent">2.</span> prompt <span className="text-muted">{"→ be specific, add context"}</span>
                    {"\n"}
                    <span className="text-accent">3.</span> implement <span className="text-muted">{"→ with Claude, Antigravity"}</span>
                    {"\n"}
                    <span className="text-accent">4.</span> review <span className="text-muted">{"→ read every change"}</span>
                    {"\n"}
                    <span className="text-accent">5.</span> test <span className="text-muted">{"→ keep quality high"}</span>
                    {"\n"}
                    <span className="text-accent2">{"$"}</span> ship <span className="text-muted">{"→ iterate"}</span>
                  </code>
                </pre>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
