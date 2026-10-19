import { Mail } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { CurrentYear } from "./CurrentYear";
import { LinkedinIcon } from "./LinkedinIcon";

export function Footer() {
  return (
    <footer className="border-t border-line/10">
      <div className="container-x py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-tight">{site.name}</p>
            <p className="mt-1 text-sm text-muted">{site.title}</p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile (opens in a new tab)"
                className="grid h-9 w-9 place-items-center rounded-full border border-line/15 text-muted transition hover:border-accent/60 hover:text-accent"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Send an email"
                className="grid h-9 w-9 place-items-center rounded-full border border-line/15 text-muted transition hover:border-accent/60 hover:text-accent"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="text-muted transition hover:text-fg">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line/10 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CurrentYear /> {site.name}. All rights reserved.
          </p>
          <p>Designed with care. Built with code.</p>
        </div>
      </div>
    </footer>
  );
}
