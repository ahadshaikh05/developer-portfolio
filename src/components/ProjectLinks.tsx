import { ExternalLink, Globe, Smartphone, type LucideIcon } from "lucide-react";
import type { ProjectLink } from "@/data/site";

const icons: Record<ProjectLink["kind"], LucideIcon> = {
  website: Globe,
  product: ExternalLink,
  android: Smartphone,
  ios: Smartphone,
};

type ProjectLinksProps = {
  links?: ProjectLink[];
  /** Show only the first N links (used on cards; the modal shows all). */
  limit?: number;
  className?: string;
};

export function ProjectLinks({ links, limit, className }: ProjectLinksProps) {
  if (!links || links.length === 0) return null;
  const shown = typeof limit === "number" ? links.slice(0, limit) : links;

  return (
    <ul className={`flex flex-wrap gap-2 ${className ?? ""}`}>
      {shown.map((link) => {
        const Icon = icons[link.kind];
        return (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost !px-4 !py-2 !text-xs"
            >
              <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              {link.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
