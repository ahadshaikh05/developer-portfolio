# Ahad Shaikh — Portfolio

A dark-first, responsive developer portfolio built with **Next.js (App Router)**, **React**, **TypeScript**, **Tailwind CSS**, **Framer Motion** and **lucide-react**.

## Requirements

- Node.js 18.18+ (Node 20 or 22 recommended)
- npm 9+

## Setup

```bash
npm install
cp .env.example .env.local   # optional, see "Configuration"
```

## Development

```bash
npm run dev        # http://localhost:3000
npm run lint       # ESLint (next/core-web-vitals + TypeScript rules)
npm run typecheck  # tsc --noEmit
```

## Production build

```bash
npm run build
npm run start
```

> This codebase was written without being able to install dependencies, so it has not been built yet.
> Run `npm run lint && npm run typecheck && npm run build` once after installing and fix anything reported.

## Project structure

```
src/
  app/
    layout.tsx            Fonts, metadata, theme bootstrap script
    page.tsx              Page composition
    globals.css           Theme tokens (CSS variables), utilities
    not-found.tsx         Custom 404
    icon.svg              Favicon placeholder
    opengraph-image.tsx   Generated Open Graph image
  components/             One file per section + shared pieces
  data/site.ts            ALL content (resume data, projects, skills)
  lib/cn.ts               Class-name helper
```

## Configuration

Everything you will want to change lives in `src/data/site.ts`.

### Replace the profile-photo placeholder

1. Add your photo to `public/`, e.g. `public/profile.jpg` (square, at least 400×400).
2. In `src/data/site.ts` set `profileImage: "/profile.jpg"`.

The hero avatar switches from the "AS" placeholder to your photo.

### Availability label

In `site.ts`, edit `availability.label` or set `availability.show` to `false` to hide it.

### Contact form

The form validates in the browser, then:

- **No endpoint configured (default):** opens the visitor's email app with the message prefilled (`mailto:`). The UI says exactly that; it never claims the message was sent.
- **Endpoint configured:** posts JSON `{ name, email, subject, message }` to `NEXT_PUBLIC_CONTACT_ENDPOINT` and shows a success or error state based on the response.

To use a service such as Formspree or Getform, create a form there, copy its endpoint URL, and set:

```bash
NEXT_PUBLIC_CONTACT_ENDPOINT=https://formspree.io/f/your-id
```

### Add a future project

Append an object to the `projects` array in `src/data/site.ts`:

```ts
{
  id: "my-new-app",
  title: "My New App",
  summary: "One or two sentences about what it is.",
  contribution: "What you personally built.", // optional
  tags: ["React Native", "TypeScript"],
  visual: "iot", // rail | tickets | food | iot | extension
  caseStudy: {
    context: "Role and dates.",
    points: ["What you did.", "Another point."],
  },
  links: [{ label: "Website", href: "https://example.com", kind: "website" }], // optional, only real links
  // kind: "website" | "product" | "android" | "ios". Cards show the first 3 links; the modal shows all.
}
```

To add a new visual style, add a component in `src/components/ProjectVisual.tsx` and extend `ProjectVisualKind`.

### Skills, experience, education

Edit `skillCategories`, `experiences` and `education` in `site.ts`.

## Deploy to Vercel

1. Push the project to GitHub, GitLab or Bitbucket.
2. In Vercel choose **Add New → Project** and import the repository. Next.js is detected automatically.
3. Under **Environment Variables** add `NEXT_PUBLIC_SITE_URL` (your final domain) and, optionally, `NEXT_PUBLIC_CONTACT_ENDPOINT`.
4. Click **Deploy**. Add a custom domain under **Settings → Domains**.

Or with the CLI:

```bash
npm i -g vercel
vercel        # preview
vercel --prod # production
```

## Notes on accuracy

All content comes from the resume. There are no invented metrics, testimonials, client logos, project URLs or download links. Project visuals are original CSS mockups, not client screenshots.
