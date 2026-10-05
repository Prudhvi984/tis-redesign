# Tulas International School (TIS) – Animated Homepage Redesign

A redesigned, animated homepage for [tis.edu.in](https://tis.edu.in/). The original branding (navy and yellow) and all homepage copy are retained; the experience around them is rebuilt.

**Stack:** Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS 3 · Framer Motion 11

---

## Setup

**Prerequisites:** Node.js 18.17 or newer (LTS recommended) and npm.

```bash
# 1. install dependencies
npm install

# 2. start the dev server → http://localhost:3000
npm run dev

# 3. production build and preview
npm run build
npm start

# optional: lint
npm run lint
```

**Deploy:** push to GitHub, import the repo at [vercel.com](https://vercel.com) and click Deploy. No environment variables are needed.

---

## Project structure

```
app/
  layout.tsx          metadata, Google Fonts (Bricolage Grotesque + Figtree)
  page.tsx            composes the sections inside <MotionProvider>
  globals.css         Tailwind layers, focus ring, reduced-motion rules
components/
  Header.tsx          fixed header, circular-reveal full-screen menu
  Hero.tsx            sunrise + parallax ridges + masked headline
  Welcome.tsx         intro copy, endless photo strip
  Stats.tsx           22 acres / 16+ sports / 24*7 / 6:1 (server component)
  Sports.tsx          16 sports grid
  Rankings.tsx        4 rankings (server component, CSS-only hover)
  Voices.tsx          student/parent quotes + "secret to making school awesome"
  Personalities.tsx   scroll-snap carousel + Leaders of India list
  Awards.tsx          awards + virtual tour call-to-action
  Reviews.tsx         parent videos, Google Reviews carousel, collaborations
  Enquire.tsx         validated enquiry form with OTP step, contact, map
  Footer.tsx          address, policies, socials
  Carousel.tsx        useCarousel hook + CarouselControls (shared by 2 sections)
  CountUp.tsx         count-up number, triggered by useInView
  MotionProvider.tsx  global reduced-motion switch (MotionConfig)
  Img.tsx             <img> that hides itself if a remote asset fails
lib/data.ts           every piece of copy, link and image URL, in one place
```

Content lives in `lib/data.ts`, separate from presentation. Updating copy never touches a component.

---

## Design and animation

- **Concept:** sunrise over the Himalayan foothills, since the campus sits in Dehradun. The palette is the TIS navy `#0E2147` and yellow `#F6B800`, with ridge blue and pine green.
- **Hero:** the one orchestrated moment. The sun rises on load, headline lines unmask, and three SVG ridge layers parallax at different speeds on scroll.
- **Elsewhere, motion answers or supports the user:**
  - count-up stats when scrolled into view
  - photo strip that pauses on hover
  - clip-path reveals on the student photos
  - scroll-snap carousels with prev/next buttons
  - circular-reveal menu
  - animated form states (OTP field, success check)
- **Responsive:** mobile-first with `sm`, `md`, `lg` breakpoints. Carousels use native scroll-snap (swipe on touch). On touch devices the personality captions show below the photo; on hover-capable devices they slide up over it.

## Performance

- Animations use `transform` and `opacity` (compositor-friendly); parallax layers use `will-change: transform`.
- Scroll-linked values use Framer Motion motion values, so scrolling does not trigger React re-renders. The header only re-renders when it crosses the 60px threshold.
- Static sections (`Rankings`, `Stats`, `Footer`) stay server components, so they send no extra client JS. Hover effects there are plain CSS.
- Images are lazy-loaded and async-decoded; videos use `preload="none"`.

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `section` with labels, `address`, `footer`), one `h1`, ordered headings, a description list for the stats.
- Visible keyboard focus, `Esc` closes the menu, labelled form fields with inline error messages, labelled carousel regions.
- `prefers-reduced-motion` is respected globally (`MotionConfig reducedMotion="user"`, plus CSS for the marquee).

---

## Notes and next steps

- Images are hot-linked from tis.edu.in. For production, download them to `/public` and switch to `next/image`.
- The menu links to on-page sections or the live site; replace with real routes as pages are built.
- The OTP step in the enquiry form is a UI mock. Connect `submit()` in `components/Enquire.tsx` to the admissions API.
