"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Braces } from "lucide-react";
import { heroStack, site } from "@/data/site";

function ProfileAvatar() {
  if (site.profileImage) {
    return (
      <Image
        src={site.profileImage}
        alt={`Portrait of ${site.name}`}
        width={112}
        height={112}
        priority
        className="h-full w-full rounded-2xl object-cover"
      />
    );
  }
  return (
    <div
      className="grid h-full w-full place-items-center rounded-2xl bg-gradient-to-br from-accent/30 to-accent2/20 font-mono text-2xl font-semibold text-fg"
      role="img"
      aria-label="Profile photo placeholder"
    >
      AS
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden="true">
      <div className="absolute -inset-10 -z-10 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-10 -right-6 -z-10 h-56 w-56 rounded-full bg-accent2/15 blur-3xl" />

      {/* Code window */}
      <div className="glass animate-float-slow overflow-hidden rounded-2xl shadow-2xl shadow-black/20">
        <div className="flex items-center gap-2 border-b border-line/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-line/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-line/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-line/20" />
          <span className="ml-3 font-mono text-xs text-muted">developer.ts</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-6 sm:text-sm sm:leading-7">
          <code>
            <span className="text-accent">const</span> <span className="text-accent2">ahad</span> = {"{"}
            {"\n"}  role: <span className="text-fg/80">&quot;Senior Software Developer&quot;</span>,
            {"\n"}  experience: <span className="text-fg/80">&quot;{site.experienceYears} years&quot;</span>,
            {"\n"}  mobile: [<span className="text-fg/80">&quot;React Native&quot;</span>,{" "}
            <span className="text-fg/80">&quot;Flutter&quot;</span>],
            {"\n"}  web: [<span className="text-fg/80">&quot;React&quot;</span>,{" "}
            <span className="text-fg/80">&quot;Next.js&quot;</span>],
            {"\n"}  workflow: [<span className="text-fg/80">&quot;Claude&quot;</span>,{" "}
            <span className="text-fg/80">&quot;Antigravity&quot;</span>],
            {"\n"}
            {"}"};<span className="ml-0.5 inline-block h-4 w-[7px] translate-y-0.5 animate-blink bg-accent" />
          </code>
        </pre>
      </div>

      {/* Phone mockup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="absolute -bottom-12 -left-3 hidden w-36 sm:block"
      >
        <div className="animate-float rounded-[1.6rem] border border-line/15 bg-surface p-2 shadow-xl shadow-black/20">
          <div className="rounded-[1.2rem] bg-gradient-to-b from-accent/25 to-accent2/10 p-3">
            <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-line/20" />
            <div className="space-y-2">
              <div className="h-3 w-3/4 rounded bg-fg/70" />
              <div className="h-2 w-full rounded bg-line/20" />
              <div className="h-2 w-5/6 rounded bg-line/20" />
              <div className="mt-3 h-14 rounded-lg bg-surface/80" />
              <div className="h-7 rounded-full bg-accent/70" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating chips */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="glass absolute -right-2 -top-6 hidden items-center gap-2 rounded-xl px-3 py-2 text-xs sm:flex"
      >
        <Smartphone className="h-4 w-4 text-accent" />
        <span className="font-medium">iOS &amp; Android</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.85, duration: 0.6 }}
        className="glass absolute -bottom-6 right-4 hidden items-center gap-2 rounded-xl px-3 py-2 text-xs sm:flex"
      >
        <Braces className="h-4 w-4 text-accent2" />
        <span className="font-medium">TypeScript</span>
      </motion.div>

      {/* Profile placeholder */}
      <div className="glass absolute -top-10 left-6 hidden h-20 w-20 rounded-2xl p-1.5 sm:block">
        <ProfileAvatar />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden pb-24 pt-32 sm:pt-40 md:pb-32">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="container-x relative grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          {site.availability.show ? (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass inline-flex items-center gap-2.5 rounded-full px-3.5 py-1.5 text-xs font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-accent2" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent2" />
              </span>
              {site.availability.label}
            </motion.p>
          ) : null}

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.6 }}
            className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            Building Digital Experiences That <span className="text-gradient">Work at Scale.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.6 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            I&apos;m a Senior Software Developer with {site.experienceYears} years of experience building mobile and web
            applications using React Native, React, Flutter, and TypeScript. I combine solid engineering practices with
            AI-assisted development to deliver practical, reliable solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.6 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a href="#projects" className="btn-primary">
              Explore My Work
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-ghost">
              Let&apos;s Connect
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-12"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Core stack</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {heroStack.map((tech) => (
                <li key={tech} className="badge">
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
