# Nexa Frontend — Phase 1

The guest-facing **Landing** and **Explore** experience for Nexa, built with
Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS v4.

## Design direction

Nexa's visual identity is built around *Mönkh Khökh Tenger* — the eternal
blue sky — rather than a generic SaaS palette:

- **Ink** (`#0A0E17`) — night, used for the hero, community preview, and
  closing CTA. Three deliberate dark "night" moments bookend a mostly light,
  practical, content-forward layout.
- **Sky** (`#3D7FFF`) — the primary accent.
- **Dawn** (`#FFA94D`) — the call-to-action / urgency accent (deadlines,
  primary buttons) — a sunrise breaking through the night sections.
- **Mist** / **Paper** — light content backgrounds.

Typography pairs **Space Grotesk** (display/headlines — confident, a little
technical, fitting a youth-tech platform) with **Inter** (body/UI, for
legibility at small sizes). Both load via `next/font/google`, which needs
outbound internet access the first time you build — see Troubleshooting
below if that fails in a locked-down environment.

## Stack

- Next.js 15 App Router, React 19, TypeScript (strict)
- Tailwind CSS v4 (CSS-based `@theme` tokens in `src/app/globals.css` — no
  `tailwind.config.js` needed)
- Server Components fetch directly from the Django API; a couple of small
  interactive pieces (filter bar, audience tabs, FAQ accordion) are Client
  Components

## Quickstart

```bash
npm install
cp .env.local.example .env.local   # point at your Nexa backend
npm run dev
```

Open `http://localhost:3000`. By default it expects the backend at
`http://localhost:8000/api/v1` (see `../nexa-backend`).

**The frontend works even without the backend running** — every API call in
`src/lib/api.ts` falls back to realistic demo content in
`src/lib/mock-data.ts` if the fetch fails, so `npm run dev` alone still
looks complete. Run the backend for real, live content.

## Pages (Phase 1)

| Route | Purpose |
|---|---|
| `/` | Landing — hero, real stats, categories, deadline-soon rail, upcoming events, audience tabs, community preview, how it works, launch-partner universities, safety, FAQ, final CTA |
| `/explore` | Filterable opportunity list (type, audience, interest, search) |
| `/opportunities/[slug]` | Opportunity detail with source link and provenance |
| `/campus`, `/campus/[slug]` | University directory and detail (programs, tuition) |
| `/clubs`, `/clubs/[slug]` | Club directory and detail (joining arrives with Groups, Phase 4a) |
| `/events`, `/events/[slug]` | Event directory and detail |

## Project structure

```
src/
├── app/                 # App Router pages
├── components/
│   ├── layout/          # Header, Footer
│   ├── landing/         # Landing page sections
│   ├── explore/         # Cards + filter bar shared by Explore/Campus/Clubs/Events
│   └── ui/               # Button, Badge, Container, SectionHeading
└── lib/
    ├── api.ts           # Fetch helpers with mock-data fallback
    ├── types.ts         # Types mirroring the DRF serializers
    ├── format.ts         # Date/deadline/label formatting
    └── mock-data.ts      # Fallback demo content
```

## Troubleshooting

**`next build` fails with "Failed to fetch font"** — `next/font/google`
downloads font files at build time, so it needs outbound access to
`fonts.googleapis.com` / `fonts.gstatic.com`. This only fails in networks
that block those hosts (e.g. some CI sandboxes); on a normal machine or
standard hosting provider it works without any changes.

## What's deliberately not here yet

Accounts, My Week, Groups/chat, Random Chat are Phase 2–4 per the PRD
roadmap. The "Бүртгүүлэх" buttons currently route to `/explore` as a
placeholder until the account system exists.
