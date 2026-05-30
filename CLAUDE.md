# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Vite dev server (HMR)
npm run build    # Production build to dist/
npm run preview  # Serve the production build locally
npm run lint     # ESLint over the whole repo (dist/ is ignored)
```

There is no test suite. Deployment is on Vercel (`vercel.json` rewrites all routes to `/` for the SPA).

## Architecture

Single-page React 18 portfolio (no router). The whole site is one scroll of stacked
sections assembled in `src/App.jsx`: `Header → About → Skillset → Projects → Contact`,
with a `Preloader` gate and a fixed `Nav`, `CustomCursor`, and footer.

Three things are wired up at the `App` level and matter for understanding the page:

- **Preloader gate** — `App` holds `loading` state; the page content renders behind a
  Framer Motion fade and only animates in once `Preloader` calls `onComplete` (after a
  fixed ~3s count-up). While loading, `document.body` gets a `loading` class.
- **Lenis smooth scroll** — instantiated once in an `App` effect driving a
  `requestAnimationFrame` loop. In-page navigation uses native `scrollIntoView` against
  section `id`s (`home`, `about`, `skills`, `projects`, `contact`).
- **Language context** — `main.jsx` wraps `App` in `LanguageProvider`. There is **no
  router and no i18n library**; see below.

### Bilingual content (the central pattern)

`src/context/LanguageContext.jsx` is the single source of all user-facing copy. It holds
a `translations` object with `en` and `uz` keys mirroring the same nested shape, a
`lang` state defaulting to `"en"`, and a `toggle()` that flips between the two. Every
component reads copy via `const { t } = useLanguage()` and indexes into `t` (e.g.
`t.hero.btn1`, `t.projects.title[0]`). The `Nav` calls `toggle()`.

**When adding or changing any visible text, edit both `en` and `uz` and keep the object
shapes identical** — components assume the keys/array lengths line up across languages.
Note `t.*.title` fields are arrays split into multiple lines/spans by the components.

### Styling

- **Design tokens live in `src/index.css` `:root`** as CSS custom properties. The
  aesthetic is a minimal, clean **light theme** with a single **emerald accent**
  (`--color-accent: #0f9d6e`) on white/off-white surfaces (`--color-bg`, `--color-bg-2`,
  `--color-bg-3`), ink text (`--color-text`), and neutral muted/border tones. Typography
  is **DM Sans only** (both `--font-display` and `--font-body`), loaded in `index.html`;
  headings lean on weight 600 + negative letter-spacing rather than a serif.
- **Accent-name aliases:** older inline styles still reference `--color-gold`,
  `--color-gold-mid`, `--color-gold-dim` — these are kept as aliases pointing at the
  emerald accent vars, so both names render the same color. Prefer `--color-accent*`
  for new code. Some components still hardcode the accent as `rgba(15, 157, 110, …)`
  tints inline; reuse that RGB (not the old gold `201,168,76`) if you add matching tints.
- **Styling is overwhelmingly inline `style={{}}` objects referencing those CSS vars**,
  not Tailwind utility classes. Tailwind is installed and its directives are in
  `index.css`, but it is barely used — match the existing inline-style + CSS-var idiom
  rather than introducing utility classes. Shared classes like `.eyebrow`,
  `.section-title`, `.section-divider`, `.magnetic` are defined in `index.css`.
- **Responsive behavior is done with injected `<style>` blocks** at the bottom of
  components (e.g. `Header`, `Projects`) holding `@media (max-width: 768px)` overrides
  with `!important`, since the base styles are inline.

### Animation libraries (which to use where)

- **Framer Motion** — entrance/exit transitions and the preloader fade
  (`motion`, `AnimatePresence`). `Header` defines a reusable `fadeUp(delay)` helper.
- **GSAP + ScrollTrigger** — scroll-driven reveals (see `Projects`); always register the
  plugin and scope effects with `gsap.context(...)` returning `ctx.revert()` for cleanup.
- **react-simple-typewriter** — the rotating role text in the hero (`Header`).

### Static data and assets

Project cards (`src/components/projects/Projects.jsx`) are a hardcoded `projects` array
at the top of the file; images and the CV PDF are imported from `src/assets/` so Vite
fingerprints them. Add new projects by extending that array.
