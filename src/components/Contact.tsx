"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, Mail, Phone, Send } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";
import { LinkedinIcon } from "./LinkedinIcon";

type Field = "name" | "email" | "subject" | "message";
type Values = Record<Field, string>;
type Errors = Partial<Record<Field, string>>;
type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent" }
  | { kind: "mailto" }
  | { kind: "error"; message: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(v: Values): Errors {
  const errors: Errors = {};
  if (v.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(v.email.trim())) errors.email = "Please enter a valid email address.";
  if (v.subject.trim().length < 3) errors.subject = "Please add a short subject.";
  if (v.message.trim().length < 10) errors.message = "Your message should be at least 10 characters.";
  return errors;
}

const inputClass =
  "mt-2 w-full rounded-xl border border-line/15 bg-bg/60 px-4 py-3 text-sm text-fg placeholder:text-muted/70 transition focus:border-accent/70 focus:outline-none focus:ring-2 focus:ring-accent/30 aria-[invalid=true]:border-red-400/70";

export function Contact() {
  const [values, setValues] = useState<Values>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const update = (field: Field) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus({ kind: "error", message: "Please fix the highlighted fields and try again." });
      return;
    }

    if (site.contactEndpoint) {
      setStatus({ kind: "sending" });
      try {
        const res = await fetch(site.contactEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
        setStatus({ kind: "sent" });
        setValues({ name: "", email: "", subject: "", message: "" });
      } catch {
        setStatus({
          kind: "error",
          message: `Your message could not be sent. Please email ${site.email} directly.`,
        });
      }
      return;
    }

    // No backend configured: open the visitor's email app with the message prefilled.
    const body = `${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`;
    const href = `mailto:${site.email}?subject=${encodeURIComponent(values.subject.trim())}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setStatus({ kind: "mailto" });
  };

  const fieldProps = (field: Field) => ({
    id: `contact-${field}`,
    name: field,
    value: values[field],
    onChange: update(field),
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `contact-${field}-error` : undefined,
    className: inputClass,
  });

  const errorText = (field: Field) =>
    errors[field] ? (
      <p id={`contact-${field}-error`} className="mt-1.5 text-xs text-red-400">
        {errors[field]}
      </p>
    ) : null;

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow">07 — Contact</p>
            <h2 id="contact-title" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Have a project in mind? <span className="text-gradient">Let&apos;s build something great.</span>
            </h2>
            <ul className="mt-10 space-y-4">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-center gap-4 rounded-2xl border border-line/10 bg-surface/40 p-4 transition hover:border-accent/40"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-line/5 text-accent">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted">Email</span>
                    <span className="block break-all text-sm font-medium">{site.email}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                  className="group flex items-center gap-4 rounded-2xl border border-line/10 bg-surface/40 p-4 transition hover:border-accent/40"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-line/5 text-accent">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs text-muted">Phone</span>
                    <span className="block text-sm font-medium">{site.phone}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-line/10 bg-surface/40 p-4 transition hover:border-accent/40"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-line/5 text-accent">
                    <LinkedinIcon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted">LinkedIn</span>
                    <span className="block break-all text-sm font-medium">linkedin.com/in/ahadshaikh05</span>
                    <span className="sr-only">(opens in a new tab)</span>
                  </span>
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} noValidate className="glass rounded-3xl p-6 sm:p-8" aria-describedby="contact-status">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="text-sm font-medium">
                    Name
                  </label>
                  <input type="text" autoComplete="name" placeholder="Your name" {...fieldProps("name")} />
                  {errorText("name")}
                </div>
                <div>
                  <label htmlFor="contact-email" className="text-sm font-medium">
                    Email
                  </label>
                  <input type="email" autoComplete="email" placeholder="you@example.com" {...fieldProps("email")} />
                  {errorText("email")}
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="contact-subject" className="text-sm font-medium">
                  Subject
                </label>
                <input type="text" placeholder="What is this about?" {...fieldProps("subject")} />
                {errorText("subject")}
              </div>
              <div className="mt-5">
                <label htmlFor="contact-message" className="text-sm font-medium">
                  Message
                </label>
                <textarea rows={6} placeholder="Tell me a little about your project…" {...fieldProps("message")} />
                {errorText("message")}
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" disabled={status.kind === "sending"} className={cn("btn-primary", status.kind === "sending" && "opacity-70")}>
                  {status.kind === "sending" ? "Sending…" : "Send message"}
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>

                <div id="contact-status" role="status" aria-live="polite" className="text-sm">
                  {status.kind === "sent" ? (
                    <p className="flex items-center gap-2 text-accent2">
                      <CheckCircle2 className="h-4 w-4" aria-hidden="true" /> Thanks — your message was sent.
                    </p>
                  ) : null}
                  {status.kind === "mailto" ? (
                    <p className="flex items-start gap-2 text-accent2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>
                        Your email app should open with the message ready to send. If nothing opens, email{" "}
                        <a className="underline" href={`mailto:${site.email}`}>
                          {site.email}
                        </a>
                        .
                      </span>
                    </p>
                  ) : null}
                  {status.kind === "error" ? (
                    <p className="flex items-start gap-2 text-red-400">
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /> {status.message}
                    </p>
                  ) : null}
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
