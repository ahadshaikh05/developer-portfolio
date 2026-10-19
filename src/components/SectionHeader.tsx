import { Reveal } from "./Reveal";

type SectionHeaderProps = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  id?: string;
};

export function SectionHeader({ index, eyebrow, title, description, id }: SectionHeaderProps) {
  return (
    <Reveal className="max-w-2xl">
      <p className="eyebrow">
        {index} — {eyebrow}
      </p>
      <h2 id={id} className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{description}</p> : null}
    </Reveal>
  );
}
