# Personal Website / Resume Redesign — Design Spec

## Overview

Redesign of Simmone Kelly's personal portfolio website to serve as both a portfolio and a living resume. Built on the existing React + TypeScript + styled-components codebase. Hybrid single-page/multi-page structure with a warm terracotta color scheme and editorial layout style.

## Color System

| Token | Hex | Usage |
|-------|-----|-------|
| `background` | `#faf6f1` | Page background, primary surface |
| `backgroundAlt` | `#f5ede4` | Alternating section bands (Skills, Experience) |
| `surface` | `#ffffff` | Cards, nav bar, elevated elements |
| `primary` | `#c05621` | CTAs, links, active states, category labels |
| `primaryHover` | `#9c4221` | Button/link hover states |
| `focusRing` | `#d4833b` | Keyboard focus outlines for accessibility |
| `secondary` | `#c4a882` | Decorative accents, borders, subtle highlights |
| `primaryText` | `#2d2d2d` | Headings, body text |
| `mutedText` | `#6b5b4e` | Descriptions, secondary info, dates |
| `border` | `#e8ddd3` | Card borders, dividers |
| `tagBg` | `#efe4d8` | Tech/skill tag backgrounds (visible on both surface and background) |

### Usage Rules

- Alternate `background` and `backgroundAlt` between sections for visual rhythm
- `primary` (burnt orange) is reserved for interactive elements and category labels only — never used for large backgrounds
- Body text uses `primaryText` for headings and short text, `mutedText` for longer descriptions and metadata
- Cards always use `surface` with `border` — creates subtle lift against both background tones
- `focusRing` used for keyboard focus outlines on all interactive elements

## Typography

### Fonts

- **Luckiest Guy** — display heading (H1 only: name in Hero)
- **Manrope** — everything else (H2-H4, body, nav, buttons)

### Scale (mobile-first, responsive)

| Element | Mobile | Tablet (768px+) | Desktop (1280px+) | Weight | Font |
|---------|--------|-----------------|-------------------|--------|------|
| H1 (name) | 36px | 48px | 56px | 400 | Luckiest Guy |
| H2 (section titles) | 24px | 28px | 32px | 700 | Manrope |
| H3 (card titles) | 16px | 18px | 20px | 700 | Manrope |
| H4 (category labels) | 10px | 10px | 11px | 700 | Manrope |
| Body | 14px | 15px | 16px | 400 | Manrope |
| Small/meta | 12px | 12px | 13px | 400 | Manrope |
| Nav links | 13px | 14px | 14px | 500 | Manrope |
| Buttons | 13px | 14px | 14px | 600 | Manrope |

### Rules

- H4 (category labels) are uppercase with `letter-spacing: 1.5px`, colored `primary`
- Line height: 1.1 for H1, 1.3 for H2-H3, 1.6 for body text
- Max content width: 700px centered

## Layout

Editorial split style — left-aligned text-heavy content with visual elements on the right. Alternating background bands between sections create visual rhythm.

### Breakpoints

- Mobile: default (< 768px)
- Tablet: 768px
- Desktop: 1280px

## Components

### Shared / Global

**Nav** — Sticky top bar. Left: "SK" initials (Luckiest Guy, links to `/`). Right: section links (Skills, Projects, Experience, About) + "Resume" CTA button (primary Button). White background with `border` bottom line. On mobile: hamburger icon that toggles a full-width dropdown menu below the nav bar, listing all nav links vertically. Simple slide-down animation.

**Button** — Two variants:
- `primary`: filled `primary` background, white text, `primaryHover` on hover
- `secondary`: outlined with `primary` border and text, `primary` fill on hover
- Both: border-radius 6px, font-size per typography scale, weight 600

**SectionLayout** — Wraps each landing page section. Accepts a `variant` prop (`default` | `alt`) to toggle between `background` and `backgroundAlt`. Handles max-width (700px) centering and consistent vertical padding.

**Footer** — Simple bottom bar with copyright + social icon links. Appears on all pages.

### Landing Page Sections

**Hero** — Editorial split layout. Left side: H1 name (Luckiest Guy), subtitle paragraph (Manrope, `mutedText`), two Buttons (Resume download as primary, Contact as secondary). Right side: profile photo with border-radius 16px. The subtitle serves as the "about" intro — no separate About section on the landing page.

**SkillsOverview** — Uses `backgroundAlt` band. H2 section title. Three columns for skill categories (Languages / Frameworks / Tools). Each column has an H4 uppercase category label in `primary`, with skill names listed below in `primaryText`.

**ProjectsPreview** — SectionHeader with H2 "Projects" + "See all projects →" link. 2-3 ProjectCard components in a responsive row (stack on mobile). Cards have: thumbnail area, H3 title, description text, row of Tag components for tech used.

**ExperiencePreview** — Uses `backgroundAlt` band. SectionHeader with H2 "Experience" + "Full history →" link. 1-2 ExperienceCard components. Cards have: H3 job title, company name in `primary`, date range in `mutedText`, brief summary.

**Contact** — Centered layout. H2 "Let's Connect", subtitle, row of social link buttons (Email, GitHub, LinkedIn) styled as outlined cards/buttons.

### Dedicated Pages

**ProjectsPage** (`/projects`) — Full grid of ProjectCard components with expanded detail: longer descriptions, live site and repo links, larger thumbnails. Uses same data source as preview.

**ExperiencePage** (`/experience`) — Full list of ExperienceCard components with bullet-point accomplishments, tools used (as Tags), and richer role descriptions.

**AboutPage** (`/about`) — Extended bio, background story, interests/personality. Linked from nav.

### Reusable Primitives

**Tag** — Small pill for tech/skill labels. `tagBg` background, `mutedText` color, border-radius 4px, small font size.

**SectionHeader** — H2 title + optional right-aligned link (e.g., "See all →"). Reused across ProjectsPreview and ExperiencePreview.

## Routing

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `LandingPage` | Single-page scroll: Hero → Skills → Projects → Experience → Contact |
| `/projects` | `ProjectsPage` | Full project gallery with detailed cards |
| `/experience` | `ExperiencePage` | Complete work history with details |
| `/about` | `AboutPage` | Extended bio and background |

### Navigation Behavior

- Nav links on the landing page (Skills, Projects, Experience) smooth-scroll to those sections
- Nav links on dedicated pages navigate back to `/` and scroll to the relevant section
- "See all projects →" and "Full history →" navigate to `/projects` and `/experience`
- "About" in the nav always navigates to `/about`

### Layout Hierarchy

```
App
├── Nav (sticky, always visible)
├── Routes
│   ├── / → LandingPage
│   │   ├── Hero
│   │   ├── SkillsOverview
│   │   ├── ProjectsPreview
│   │   ├── ExperiencePreview
│   │   └── Contact
│   ├── /projects → ProjectsPage
│   ├── /experience → ExperiencePage
│   └── /about → AboutPage
└── Footer
```

## Data

Existing JSON data files serve as the content source:
- `projectsData.json` — project entries
- `experienceData.json` — work history entries
- `skillsData.json` — skills organized by category

Preview sections on the landing page pull from the same data but render a subset (2-3 projects, 1-2 jobs).

## Implementation Approach

Evolve the existing codebase (Approach A):
- Refactor existing styled-components and sections in place
- Wire up React Router (already a dependency) for dedicated pages
- Update `clayColors` theme object in `styles.ts` with the refined palette tokens
- Clean up dead/duplicate files (unused SCSS, deleted components still referenced)
- Keep styled-components as primary styling, remove SCSS where possible
