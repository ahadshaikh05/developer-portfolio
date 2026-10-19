"use client";

/** Renders the current year in the visitor's browser; suppressHydrationWarning covers a year rollover. */
export function CurrentYear() {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>;
}
