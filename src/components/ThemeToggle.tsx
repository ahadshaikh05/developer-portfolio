"use client";

import { Moon, Sun } from "lucide-react";

/**
 * Toggles the `dark` class on <html> and persists the choice.
 * Both icons are always rendered and swapped with CSS, so there is no hydration mismatch.
 */
export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const nextDark = !root.classList.contains("dark");
    root.classList.toggle("dark", nextDark);
    try {
      localStorage.setItem("theme", nextDark ? "dark" : "light");
    } catch {
      /* storage may be unavailable; the toggle still works for this visit */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      title="Toggle theme"
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-line/15 text-fg transition hover:border-accent/60 hover:bg-line/5"
    >
      <Sun className="hidden h-4 w-4 dark:block" aria-hidden="true" />
      <Moon className="block h-4 w-4 dark:hidden" aria-hidden="true" />
    </button>
  );
}
