# Conejo Valley Family Counseling — Homepage Clone

A pixel-faithful clone of the [Conejo Valley Family Counseling](https://www.conejovalleycounseling.com/home)
homepage, rebuilt with **Next.js (App Router)** + **Tailwind CSS v4**.

## Stack

| Concern      | Choice                                             |
| ------------ | -------------------------------------------------- |
| Framework    | Next.js 16 (App Router, Turbopack)                 |
| Styling      | Tailwind CSS v4 (`@theme` design tokens)           |
| Language     | JavaScript (JSX components) + TypeScript config    |
| Fonts        | Cormorant Infant (headings), Muli (body)           |
| Deployment   | Vercel / Netlify ready                             |

## Getting Started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Folder Structure

```
/
├── app/
│   ├── globals.css        # Tailwind v4 theme tokens (colors, fonts)
│   ├── layout.tsx         # Root layout + SEO metadata + font links
│   └── page.tsx           # Home page composing all sections
├── components/
│   ├── Header.jsx         # Sticky nav, dropdowns, mobile burger
│   ├── Hero.jsx           # Hero: tagline, headline, CTA
│   ├── WhoWeHelp.jsx      # Intro copy + Who we help (3 cards)
│   ├── Expertise.jsx      # Our areas of expertise keyword grid
│   ├── HowWeWork.jsx      # How We Work + process steps
│   ├── Specialties.jsx    # Quote banner + specialties cards
│   ├── AppointmentCTA.jsx # Schedule an Appointment CTA
│   └── Footer.jsx         # Footer nav + legal bar
├── public/
│   └── images/            # Images sourced from the live site
└── package.json
```

## Sections (in order)

1. **Header** — logo, nav (About · Our Team · Specialties · Methods · FAQs), Contact button
2. **Hero** — "Rebuild your foundation on solid ground and finally begin to *thrive*." + *Book an Appointment*
3. **Who We Help** — intro copy + Adults / Couples / Children & Teens cards
4. **Our Areas of Expertise** — keyword cloud (Dissociation, Trauma, Depression, …and more)
5. **How We Work** — "We're here to make a difference." + 3-step process
6. **Specialties** — quote banner + Trauma / Dissociation / EMDR / Special Needs Parenting
7. **Appointment CTA** — "Schedule an Appointment"
8. **Footer** — 4-column nav + Terms | Privacy Policy | Disclaimer

## Images

All imagery was pulled directly from the live Squarespace CDN and stored in
`public/images` at their original aspect ratios, resized for web:

| File             | Used in                      |
| ---------------- | ---------------------------- |
| `hero.jpg`       | Hero background, quote banner|
| `couples.jpg`    | Who We Help → Couples        |
| `children.jpg`   | Who We Help → Children & Teens|
| `adults.jpg`     | Who We Help → Adults, Expertise|
| `trauma.jpg`    | Who We Help → intro          |
| `howwework.jpg`  | How We Work                  |
| `specialties1-3` | Specialties, Appointment CTA |
| `logo.png`       | Header + footer              |

## Notes

- Colors and fonts are declared once as design tokens in `app/globals.css` under `@theme`
  — change `--color-accent`, `--color-light-accent`, `--color-cream` to re-skin the whole site.
- Links point to the original site's slugs so the structure maps 1:1.
- Heading hierarchy is semantic (`h1` → `h4`) and images carry descriptive `alt` text.
