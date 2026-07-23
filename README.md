# Patidar Infra — Website

A premium, single-file marketing website for **Patidar Infra** (builders & developers,
Indore). Dark-luxury design, gold accents, elegant serif type, smooth animations.
No build step, no framework — just one `index.html`.

```
patidar-infra/
├── index.html      # the entire site (HTML + CSS + JS inline)
├── images/         # ← drop your 5 project photos here (see below)
├── README.md
└── _backup_v1/     # previous version, kept as backup (safe to delete)
```

## Pages (single-file app with in-page navigation)

- **Home** — hero, stats band, featured projects, services, process, insights
- **Projects** — filterable gallery (All / Residential / Commercial / Turnkey)
- **About** — story, values, "why choose us"
- **Insights** — blog-style article grid
- **Contact** — validating enquiry form + call / WhatsApp / email / address

## Run locally

```bash
cd patidar-infra
python3 -m http.server 4321
# open http://localhost:4321
```

## ⬇️ Add your photos (important)

Every image is a graceful placeholder (a gold gradient) until you add the real file.
Drop these **5 photos** into `images/` using these **exact filenames**:

| Filename                   | Use this photo                                   |
|----------------------------|--------------------------------------------------|
| `images/crown-pearl.jpg`   | The "Crown Pearl" apartment building (used as the hero too) |
| `images/villa-modern.jpg`  | The tall narrow 3-storey modern house            |
| `images/villa-corner.jpg`  | The corner-plot villa with solar panels          |
| `images/villa-slats.jpg`   | The villa with vertical wood slats / "House Name"|
| `images/house-27.jpg`      | The "House No. 27" villa                          |

Landscape JPGs around 1600px wide look best (keep each under ~400 KB for speed).
No code changes needed — just match the filenames.

## Quick edits

Everything lives in `index.html`:

- **Text & copy** — edit directly in the HTML.
- **Projects & Insights** — edit the `projects` and `insights` arrays in the
  `<script>` at the bottom (title, location, tag, category, image).
- **Colors** — all brand colors are CSS variables in `:root` at the top of the
  `<style>` block (`--gold`, `--bg`, `--cream`, …). Change once, applies everywhere.
- **Phone / WhatsApp / email / address** — search for `8839888022`,
  `info@patidarinfra.com`, and `Tulsi Tower` to update.

## Before launch — TODO

- [ ] Add the 5 project photos (above).
- [ ] **Contact form** is currently front-end only (shows a success message but does
      not send). Wire it to a service like **Formspree**, **Web3Forms**, or an email
      backend. Look for `contactForm` in the script.
- [ ] Set real **social links** — the Instagram / Facebook / LinkedIn icons in the
      footer point to `#`.
- [ ] Confirm **email address** (`info@patidarinfra.com` is a placeholder).
- [ ] Confirm **working days** (currently shown as Monday–Saturday, 10 AM–7 PM).

## Deploy (free)

**Netlify (drag & drop):** log in → "Add new site" → "Deploy manually" → drag the
`patidar-infra` folder onto the drop zone.

**Vercel:** `npm i -g vercel && vercel --prod` (choose framework: **Other**).

Then point your domain (e.g. `patidarinfra.com`) at the deploy via DNS.
