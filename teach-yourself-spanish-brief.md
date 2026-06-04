# Teach Yourself Spanish — Claude Code Project Brief

## Project overview

Build a content-focused, mobile-first educational website called **Teach Yourself Spanish**. The site teaches Spanish through long-form reading, structured reference pages, and a philosophy of low-tech learning (reading and handwriting into a notebook — no quizzes, no gamification, no user accounts). The owner will write all text content. This brief covers architecture, design system, data models, and build order.

---

## Tech stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 14+ (App Router) | Owner already knows it |
| Styling | Tailwind CSS v3 | With a custom theme extending the design tokens below |
| Content | Inline JSX in page components | Long-form text written directly in `.tsx` files |
| Word data | Local JSON file | `/data/words.json` — 1000 entries |
| Verb data | Local JSON file | `/data/verbs.json` — 20 entries with full conjugation tables |
| Hosting | Vercel | Standard Next.js deployment |
| Fonts | Google Fonts | See design system below |
| Images | `next/image` | Optimized, lazy-loaded |

No database. No auth. No CMS. Everything is file-based and statically generated where possible.

---

## Design system

### Aesthetic direction

**Fresh, calm, and studious** — like a well-designed language textbook crossed with a modern editorial magazine. Generous whitespace. Strong typography. One warm accent color that adds energy without noise. The site should feel like a place you want to sit and read, not a flashy app.

### Color palette

Define these as CSS custom properties and Tailwind theme extensions:

```css
--color-base:       #FAFAF7;   /* warm off-white, page background */
--color-surface:    #F2F2EC;   /* cards, sidebar backgrounds */
--color-border:     #E0DFD8;   /* subtle dividers */
--color-text:       #1C1C1A;   /* primary body text */
--color-muted:      #6B6B63;   /* secondary text, captions */
--color-accent:     #3D7A5F;   /* sage green — primary accent */
--color-accent-light: #EAF2EC; /* accent tint for badges, highlights */
--color-accent-dark:  #2A5742; /* hover states, strong accent moments */
--color-gold:       #C49A3C;   /* secondary accent, used sparingly */
--color-gold-light: #FDF6E3;   /* gold tint for callout boxes */
```

No dark mode required. Light only.

### Typography

```
Display / hero headings:  "Playfair Display" (Google Fonts) — serif, weight 700
Section headings (h2–h3): "Lora" (Google Fonts) — serif, weight 600
Body text:                "Source Serif 4" (Google Fonts) — serif, weight 400
UI elements / nav / labels: "DM Sans" (Google Fonts) — sans-serif, weight 400/500
```

All body text is a serif. This is intentional — it reads like a book, not a web app. UI chrome (nav, buttons, labels, pagination) uses DM Sans.

Font size scale (mobile-first, in Tailwind config):

- Hero title: `text-5xl` → `text-7xl` (lg)
- Page title (h1): `text-3xl` → `text-5xl` (lg)
- Section heading (h2): `text-2xl` → `text-3xl` (lg)
- Subheading (h3): `text-xl` → `text-2xl` (lg)
- Body: `text-lg` leading-relaxed (18px, generous line-height)
- Small / caption: `text-sm` in `--color-muted`

### Spacing

Use Tailwind's default scale. Page max-width: `max-w-4xl` (topic pages with sidebar: `max-w-6xl`). Generous vertical padding between sections: `py-20` → `py-32` (lg).

### Component conventions

**Buttons**
- Primary: sage green background (`bg-accent`), white text, rounded-full, `px-6 py-3`, hover darkens
- Secondary: transparent with sage border, sage text, same sizing
- No sharp corners anywhere on interactive elements

**Cards**
- Background: `--color-surface`
- Border: 1px `--color-border`
- Border radius: `rounded-xl`
- Subtle shadow: `shadow-sm`
- Hover: `shadow-md` + slight translate-up (`hover:-translate-y-0.5`)

**Sidebar (topic pages)**
- Sticky, appears at `lg` breakpoint
- On mobile: collapses to a "Jump to section" dropdown at the top of the page
- Width: ~240px, separated from content by a border

**Word list items (1000 words page)**
- Desktop: clean two-column layout, rank + Spanish + English + part-of-speech badge
- Mobile: stacked card layout, one word per row
- Part-of-speech badges: small pill, color-coded (noun = accent-light, verb = gold-light, etc.)

**Callout boxes**
- "Notebook tip" callout: gold-light background, small pencil icon, used to prompt the user to write something down
- "Why this matters" callout: accent-light background, used for framing context

---

## Site architecture & routing

```
/                           → Landing page
/words                      → 1000 most common words (paginated)
/words?page=2               → Page 2, etc. (query param pagination, 100 words per page)
/tenses                     → All 14 tenses explained
/verbs                      → 20 key verbs index page
/verbs/[verb]               → Individual verb page (e.g. /verbs/ser, /verbs/estar)
/regular-vs-irregular       → Regular vs irregular verbs
/conversation               → Conversation tips
/listening                  → Listening tips
/how-to-study               → How to study
/language-exchange          → Language exchange tips
```

All pages are statically generated (`generateStaticParams` for verb pages).

---

## Data models

### `/data/words.json`

```json
[
  {
    "rank": 1,
    "spanish": "el",
    "english": "the",
    "pos": "article"
  },
  {
    "rank": 2,
    "spanish": "de",
    "english": "of, from",
    "pos": "preposition"
  }
]
```

`pos` values: `"noun"`, `"verb"`, `"adjective"`, `"adverb"`, `"preposition"`, `"article"`, `"conjunction"`, `"pronoun"`, `"other"`

This file will be provided by the owner later. For now, **scaffold with 20 placeholder entries** so the page renders correctly.

### `/data/verbs.json`

```json
[
  {
    "slug": "ser",
    "infinitive": "ser",
    "english": "to be (permanent)",
    "type": "irregular",
    "conjugations": {
      "present": {
        "yo": "soy", "tú": "eres", "él/ella": "es",
        "nosotros": "somos", "vosotros": "sois", "ellos/ellas": "son"
      },
      "preterite": {
        "yo": "fui", "tú": "fuiste", "él/ella": "fue",
        "nosotros": "fuimos", "vosotros": "fuisteis", "ellos/ellas": "fueron"
      },
      "imperfect": {
        "yo": "era", "tú": "eras", "él/ella": "era",
        "nosotros": "éramos", "vosotros": "erais", "ellos/ellas": "eran"
      },
      "future": {
        "yo": "seré", "tú": "serás", "él/ella": "será",
        "nosotros": "seremos", "vosotros": "seréis", "ellos/ellas": "serán"
      },
      "conditional": {
        "yo": "sería", "tú": "serías", "él/ella": "sería",
        "nosotros": "seríamos", "vosotros": "seríais", "ellos/ellas": "serían"
      },
      "subjunctive_present": {
        "yo": "sea", "tú": "seas", "él/ella": "sea",
        "nosotros": "seamos", "vosotros": "seáis", "ellos/ellas": "sean"
      }
    },
    "notes": "Placeholder — owner will provide content.",
    "examples": []
  }
]
```

**Scaffold all 20 verb slugs with placeholder conjugation data.** The owner will fill in the prose and examples directly in the page components. The conjugation tables themselves live in the JSON so they render from structured data, not free text.

Suggested 20 verbs (owner to confirm): `ser`, `estar`, `tener`, `hacer`, `ir`, `poder`, `querer`, `saber`, `venir`, `decir`, `dar`, `ver`, `poner`, `salir`, `llevar`, `hablar`, `comer`, `vivir`, `trabajar`, `necesitar`

---

## Page-by-page specs

### Landing page (`/`)

The landing page is the first priority. It is a single long-scrolling page made of full-viewport and tall sections stacked vertically.

**Section 1 — Hero**
- Full viewport height (`min-h-screen`)
- Large display heading: something like "Learn Spanish the way it actually sticks."
- Subheading (2–3 lines): brief description of the approach (read, understand, write it down)
- Two CTA buttons: "Start with the 1000 words →" and "Read the method"
- Visual: a decorative typographic element or subtle pattern in the background — no stock photos. Consider large, faded Spanish text or a geometric pattern in accent-light.
- Clean nav bar at the top (see nav spec below)

**Section 2 — The philosophy / method**
- Tall section, not full viewport
- Heading: "No apps. No streaks. Just Spanish."
- 3–4 short paragraphs explaining the notebook method
- A "notebook tip" callout box

**Section 3 — About me**
- Full or near-full viewport
- Two-column layout on desktop (text left, placeholder image right)
- Owner's story of learning Spanish
- Placeholder `<div>` for photo with note: `{/* Owner will provide photo */}`

**Section 4 — What's on the site (topic grid)**
- Grid of cards, one per main topic page
- Each card: topic name, one-line description, arrow link
- 2-column mobile, 3–4 column desktop

**Section 5 — Final CTA**
- Simple centered section
- "Ready to start?" heading
- Single primary button to `/words`

**Nav bar**
- Sticky, transparent on hero → white/base-color on scroll (use `IntersectionObserver` or scroll listener)
- Logo/wordmark left: "Teach Yourself Spanish" in Playfair Display
- Links right: "Words", "Tenses", "Verbs" (dropdown with all 20), "Tips" (dropdown: Conversation, Listening, How to Study, Language Exchange), "About"
- Mobile: hamburger menu → full-screen overlay nav
- Accent-colored active state

### Words page (`/words`)

- Intro section at top (owner will write, placeholder for now): explains why these 1000 words, how to use the page, notebook tip callout
- Filter bar: filter by part of speech (pill buttons), search input (client-side, filters the current page only)
- Pagination: 100 words per page, 10 pages total. Query param `?page=1`. Show page numbers + prev/next.
- Word list: see component conventions above
- No sidebar needed on this page

### Tenses page (`/tenses`)

- Sidebar with jump links to each of the 14 tenses
- Each tense: h2 heading (becomes sidebar anchor), owner's explanation written inline in the page component, a conjugation example table
- Sidebar collapses to dropdown on mobile
- Scaffold the 14 tense sections with placeholder headings only (owner writes content)

14 tense headings to scaffold:
1. Present (Presente)
2. Preterite (Pretérito Indefinido)
3. Imperfect (Pretérito Imperfecto)
4. Future (Futuro Simple)
5. Conditional (Condicional Simple)
6. Present Perfect (Pretérito Perfecto)
7. Past Perfect / Pluperfect (Pretérito Pluscuamperfecto)
8. Future Perfect (Futuro Perfecto)
9. Conditional Perfect (Condicional Compuesto)
10. Present Subjunctive (Subjuntivo Presente)
11. Imperfect Subjunctive (Subjuntivo Imperfecto)
12. Present Perfect Subjunctive (Subjuntivo Pretérito Perfecto)
13. Past Perfect Subjunctive (Subjuntivo Pluscuamperfecto)
14. Imperative (Imperativo)

### Verb index page (`/verbs`)

- Simple grid of 20 verb cards
- Each card: infinitive (large), English translation, "regular" or "irregular" badge, link to `/verbs/[verb]`
- Brief intro paragraph above the grid (placeholder)

### Individual verb page (`/verbs/[verb]`)

- Sidebar with jump links: Overview, Conjugation tables (one per tense), Notes & usage, Examples
- Hero: verb in large Playfair Display, English translation, regular/irregular badge
- Conjugation tables: rendered from `verbs.json`, one table per tense group (present, preterite, imperfect, future, conditional, subjunctive). Clean table design with header row in accent-light.
- Prose zone: owner writes explanatory content for each verb directly in `/app/verbs/[verb]/page.tsx` — clearly marked with `{/* OWNER: write your content for [verb] here */}` comments
- Prev/Next verb navigation at the bottom

### Remaining topic pages

`/regular-vs-irregular`, `/conversation`, `/listening`, `/how-to-study`, `/language-exchange`

All follow the same template:
- Optional sidebar (build the sidebar component to be togglable via a prop)
- Long-form content written inline in JSX — each section is a `<section>` with headings and paragraphs, clearly commented so the owner knows where to write
- "Notebook tip" callouts wherever appropriate
- Placeholder content: heading + two paragraphs of lorem ipsum ("Lorem ipsum" is fine here)

---

## Folder structure

```
/
├── app/
│   ├── layout.tsx              ← root layout, fonts, nav, footer
│   ├── page.tsx                ← landing page
│   ├── words/
│   │   └── page.tsx
│   ├── tenses/
│   │   └── page.tsx
│   ├── verbs/
│   │   ├── page.tsx            ← verb index
│   │   └── [verb]/
│   │       └── page.tsx
│   ├── regular-vs-irregular/
│   │   └── page.tsx
│   ├── conversation/
│   │   └── page.tsx
│   ├── listening/
│   │   └── page.tsx
│   ├── how-to-study/
│   │   └── page.tsx
│   └── language-exchange/
│       └── page.tsx
├── components/
│   ├── Nav.tsx
│   ├── Footer.tsx
│   ├── Sidebar.tsx
│   ├── WordCard.tsx
│   ├── WordList.tsx
│   ├── Pagination.tsx
│   ├── ConjugationTable.tsx
│   ├── VerbCard.tsx
│   ├── TopicCard.tsx
│   ├── CalloutBox.tsx          ← "notebook tip" and "why this matters" variants
│   └── SectionHero.tsx         ← reusable full-width page hero for topic pages
├── data/
│   ├── words.json
│   └── verbs.json
├── lib/
│   ├── getWords.ts             ← loads + filters words.json
│   └── getVerb.ts              ← loads verb by slug
└── public/
    └── [images, favicon, og-image]
```

---

## Build order

Build in this sequence. Complete each step before moving to the next.

1. **Project setup** — `create-next-app`, install Tailwind, configure fonts (Google Fonts via `next/font`), set up the color tokens in `tailwind.config.ts`, create the folder structure above.

2. **Design system components** — build `CalloutBox`, `SectionHero`, `TopicCard`, and the base button styles. These are used everywhere and should be right before anything else is built.

3. **Nav + Footer** — sticky nav with dropdown menus, mobile hamburger overlay, footer with links. Get the scroll behavior (transparent → solid) working.

4. **Landing page** — all 5 sections in order. Placeholder text for the About section. No real photos yet.

5. **Words page** — scaffold `words.json` with 20 placeholder entries, build `WordCard`, `WordList`, `Pagination`, and the filter/search bar.

6. **Verb index + one verb page** — build the template with `ConjugationTable` and the sidebar. Use `ser` as the test case. Once the template works, `generateStaticParams` will handle all 20 automatically.

7. **Tenses page** — sidebar + 14 scaffolded sections.

8. **Remaining topic pages** — all 5 use the same inline JSX + optional sidebar template. Build once, apply to all.

---

## SEO requirements (bake in from step 1)

Every page must have:
- Unique `<title>` tag: e.g. "The 1000 Most Common Spanish Words | Teach Yourself Spanish"
- `<meta name="description">` — unique per page
- Open Graph tags (`og:title`, `og:description`, `og:image`) — use a single default OG image for now (`/public/og-default.png`, a simple 1200×630 placeholder)
- `<html lang="es-es">` on Spanish content pages? Actually: `lang="en"` on the site overall since it's written in English, but individual Spanish terms are wrapped in `<span lang="es">` where appropriate.
- Canonical URLs via Next.js metadata API

Define a `generateMetadata()` function that can be called from each page with page-specific overrides.

---

## Notes for Claude Code

- **Content is all placeholder for now.** The owner will provide all real text. Don't invest time writing real Spanish educational content — use "[Owner will write this section]" or brief lorem ipsum.
- **The words.json file will be provided later.** Scaffold with 20 entries in the correct schema.
- **The verb conjugation data will be provided or verified later.** Use placeholder conjugations for now — the table structure and component are what matter.
- **No interactivity beyond navigation, filtering, and pagination.** No quizzes, no user state, no localStorage.
- **Mobile-first throughout.** Design at 375px, enhance for tablet (768px) and desktop (1024px+).
- **Accessibility basics**: semantic HTML, alt text on all images, keyboard-navigable nav, sufficient color contrast on all text.
- Ask before making any major architectural decisions not covered here.
