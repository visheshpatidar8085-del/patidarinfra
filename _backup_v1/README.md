# Patidar Infra — Marketing Website

A single-page, responsive marketing site for **Patidar Infra** (construction &
infrastructure, Bhopal MP). Plain HTML/CSS/JS — no build step, no framework.

```
patidar-infra/
├── index.html          # all page content
├── styles.css          # brand system + all styles (edit colors in :root)
├── script.js           # nav, mobile menu, scroll-reveal
├── README.md
└── assets/images/      # drop real photos & logos here
```

## Run locally

Any static server works. Two easy options:

```bash
# Python (built in on macOS)
cd patidar-infra && python3 -m http.server 4321
# then open http://localhost:4321

# or Node
npx serve patidar-infra
```

## How to swap images

Every image is a labelled **placeholder** (`.img-ph` box) or an `<img>` with an
`onerror` fallback. To use a real photo:

1. Drop the file into `assets/images/` (e.g. `hero.jpg`).
2. In `index.html`, find the placeholder — each is commented, e.g.
   `<!-- PLACEHOLDER: replace with hero photo ... -->`.
3. Replace the `<div class="img-ph">…</div>` with:
   `<img src="assets/images/hero.jpg" alt="descriptive alt text" loading="lazy" />`
4. Keep the `alt` text descriptive (SEO + accessibility).

**Logo:** save as `assets/images/logo.svg` (or `.png`) — the header already
points at it and falls back to the text wordmark if missing.

## How to edit text

All copy lives in `index.html`. Section headings use this pattern — the last
2–3 words are gold via `<span class="gold">…</span>`:

```html
<h2 class="heading">What We Build <span class="gold">For You.</span></h2>
```

## How to edit brand colors

All colors are CSS variables at the top of `styles.css` under `:root`
(`--charcoal`, `--gold`, `--cream`, etc.). Change them in one place.

## Deploy (Netlify or Vercel)

**Netlify (drag & drop):** log in → "Add new site" → "Deploy manually" → drag
the `patidar-infra` folder onto the drop zone. Done.

**Netlify (CLI):**
```bash
npm i -g netlify-cli
cd patidar-infra && netlify deploy --prod
```

**Vercel:**
```bash
npm i -g vercel
cd patidar-infra && vercel --prod
```
When prompted for framework, choose **Other** (it's a static site; root = this folder).

Point `www.patidarinfra.com` at the deploy via your host's DNS afterward.

## ⚠️ Needs real data before launch

- **Testimonials** (Section 8) — currently placeholders. Replace with verified quotes.
- **Portfolio** (Section 6) — project names/details are examples.
- **Stats** (50+ projects, 5★, etc.) — confirm real numbers.
- **Brand logos** (Section 9) — supply official PNGs for UltraTech, Jaquar, etc.
- **Photos** — all `.img-ph` boxes and the OG share image (`og-image.jpg`).
- **Contact form** — currently front-end only; wire to a backend or form service
  (see the `TODO` comment in Section 11).
