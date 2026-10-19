import type { ProjectVisualKind } from "@/data/site";

/** Original, abstract CSS mockups. No client logos or proprietary screenshots. */

function Phone({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`w-[8.5rem] rounded-[1.5rem] border border-line/15 bg-surface p-1.5 shadow-xl shadow-black/20 ${className}`}>
      <div className="min-h-[11rem] rounded-[1.15rem] bg-bg/80 p-3">
        <div className="mx-auto mb-3 h-1 w-8 rounded-full bg-line/20" />
        {children}
      </div>
    </div>
  );
}

function Rail() {
  return (
    <Phone>
      <div className="h-2.5 w-2/3 rounded bg-fg/70" />
      <div className="mt-3 flex items-stretch gap-2">
        <div className="flex flex-col items-center py-1">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="my-0.5 w-px flex-1 bg-accent/50" />
          <span className="h-2 w-2 rounded-full bg-accent2" />
        </div>
        <div className="flex-1 space-y-4">
          <div className="h-2 w-3/4 rounded bg-line/25" />
          <div className="h-2 w-1/2 rounded bg-line/25" />
        </div>
      </div>
      <div className="mt-4 rounded-lg border border-line/10 bg-surface p-2">
        <div className="h-1.5 w-1/2 rounded bg-line/25" />
        <div className="barcode mt-2 h-6 rounded-sm opacity-80" />
      </div>
      <div className="mt-3 h-6 rounded-full bg-accent/70" />
    </Phone>
  );
}

function Tickets() {
  return (
    <div className="flex items-center gap-4">
      <Phone className="-rotate-3">
        <div className="space-y-2">
          <div className="h-2.5 w-1/2 rounded bg-fg/70" />
          {[0, 1].map((n) => (
            <div key={n} className="rounded-lg border border-line/10 bg-surface p-2">
              <div className="h-2 w-2/3 rounded bg-line/30" />
              <div className="mt-1.5 h-1.5 w-1/3 rounded bg-line/20" />
            </div>
          ))}
          <div className="h-6 rounded-full bg-accent/70" />
        </div>
      </Phone>
      <div className="relative hidden w-28 rotate-3 rounded-xl border border-line/15 bg-surface p-3 shadow-xl shadow-black/20 sm:block">
        <span className="absolute -left-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-bg" />
        <span className="absolute -right-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-bg" />
        <div className="h-2 w-2/3 rounded bg-accent/70" />
        <div className="mt-3 grid grid-cols-5 gap-1">
          {Array.from({ length: 25 }).map((_, i) => (
            <span key={i} className={`aspect-square rounded-[2px] ${[0, 2, 4, 6, 8, 10, 12, 14, 18, 20, 22, 24].includes(i) ? "bg-fg/70" : "bg-line/15"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Food() {
  return (
    <Phone>
      <div className="relative h-16 overflow-hidden rounded-lg bg-accent2/10">
        <div className="absolute inset-0 bg-[linear-gradient(rgb(var(--line)/0.12)_1px,transparent_1px),linear-gradient(90deg,rgb(var(--line)/0.12)_1px,transparent_1px)] bg-[size:14px_14px]" />
        <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_0_6px_rgb(var(--accent)/0.25)]" />
      </div>
      <div className="mt-3 space-y-2">
        {[0, 1].map((n) => (
          <div key={n} className="flex items-center gap-2 rounded-lg border border-line/10 bg-surface p-1.5">
            <span className="h-6 w-6 rounded-md bg-accent/30" />
            <div className="flex-1 space-y-1">
              <div className="h-1.5 w-3/4 rounded bg-line/30" />
              <div className="h-1.5 w-1/2 rounded bg-line/20" />
            </div>
          </div>
        ))}
      </div>
    </Phone>
  );
}

function Iot() {
  return (
    <Phone>
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border-4 border-accent/30 border-t-accent">
        <span className="h-2 w-2 rounded-full bg-accent2" />
      </div>
      <div className="mt-4 space-y-3">
        {[true, false, true].map((on, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="h-1.5 w-1/2 rounded bg-line/30" />
            <span className={`relative h-3.5 w-7 rounded-full ${on ? "bg-accent/70" : "bg-line/20"}`}>
              <span className={`absolute top-0.5 h-2.5 w-2.5 rounded-full bg-white ${on ? "right-0.5" : "left-0.5"}`} />
            </span>
          </div>
        ))}
        <div className="h-1.5 rounded-full bg-line/20">
          <div className="h-full w-2/3 rounded-full bg-accent2/80" />
        </div>
      </div>
    </Phone>
  );
}

function Extension() {
  return (
    <div className="w-full max-w-xs overflow-hidden rounded-xl border border-line/15 bg-surface shadow-xl shadow-black/20">
      <div className="flex items-center gap-1.5 border-b border-line/10 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-line/25" />
        <span className="h-2 w-2 rounded-full bg-line/25" />
        <span className="h-2 w-2 rounded-full bg-line/25" />
        <span className="ml-2 h-4 flex-1 rounded-full bg-line/10" />
        <span className="h-4 w-4 rounded bg-accent/60" />
      </div>
      <div className="relative grid grid-cols-[1fr_5.5rem] gap-3 p-3">
        <div className="space-y-2">
          <div className="h-2.5 w-1/2 rounded bg-fg/70" />
          <div className="h-12 rounded-lg bg-line/10" />
          <div className="h-2 w-5/6 rounded bg-line/20" />
          <div className="h-2 w-2/3 rounded bg-line/20" />
        </div>
        <div className="rounded-lg border border-accent/40 bg-accent/10 p-2">
          <div className="h-2 w-2/3 rounded bg-accent/70" />
          <div className="mt-2 space-y-1.5">
            <div className="h-1.5 rounded bg-line/25" />
            <div className="h-1.5 w-4/5 rounded bg-line/25" />
            <div className="h-1.5 w-3/5 rounded bg-line/25" />
          </div>
        </div>
      </div>
    </div>
  );
}

const visuals: Record<ProjectVisualKind, () => React.JSX.Element> = {
  rail: Rail,
  tickets: Tickets,
  food: Food,
  iot: Iot,
  extension: Extension,
};

export function ProjectVisual({ kind }: { kind: ProjectVisualKind }) {
  const Visual = visuals[kind];
  return (
    <div
      className="relative grid h-52 place-items-center overflow-hidden rounded-xl border border-line/10 bg-gradient-to-br from-accent/15 via-transparent to-accent2/10 p-4"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="relative transition duration-500 group-hover:scale-[1.04]">
        <Visual />
      </div>
    </div>
  );
}
