# Frankman Dev — Portfolio

Personal portfolio of **Francisco Rodriguez Salazar**, a Systems Engineer focused on
software development, data and production infrastructure.

The site presents my professional profile end to end: core areas of expertise, how I
work across the different layers of a system, professional experience, a production
troubleshooting case study, and selected projects.

**Live site:** https://landing-page-frankmandev.netlify.app

## Overview

A single-page, bilingual (Spanish / English) portfolio built with the Next.js App
Router. Content is fully localized and theme-aware (light / dark), with subtle
scroll-reveal animations and a responsive layout from mobile to desktop.

## Tech Stack

- **Next.js** (App Router) + **React**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** (Radix UI primitives)
- **Embla Carousel** — project and photo carousels
- **React Hook Form** + **Zod** — contact form and validation
- **Resend** — contact form email delivery
- **next-themes** — light / dark mode

## Features

- Responsive design (mobile → desktop)
- Spanish / English localization with instant, no-reload language switching
- Light / dark theme
- Professional experience and a production case study
- Selected projects with image galleries and live demos
- Accessible contact form with validation and email delivery

## Local Development

Requirements: Node.js (see [`.nvmrc`](./.nvmrc)) and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To send messages from the contact form locally, set the environment variables used by
the API route in `app/api/send/route.ts` (Resend API key and destination address) in a
`.env.local` file.

## Build

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Deployment

The site is deployed on **Netlify** (see [`netlify.toml`](./netlify.toml)). Pushing to
the default branch triggers a new build and deploy.

## Project Structure

```
app/            App Router entry, layout, global styles, API routes
components/     Section components (hero, expertise, experience, ...) + UI primitives
components/ui/  shadcn/ui components
lib/            Centralized bilingual content (translations.ts) and utilities
hooks/          Custom hooks (scroll reveal)
data.tsx        Navigation, projects and contact data
public/         Images, icons and downloadable resume
```

All human-readable copy lives in `lib/translations.ts` (`es` / `en`) and is rendered
through the `LanguageProvider` — components do not hardcode display text.

---

© Frankman Dev — Francisco Rodriguez Salazar
