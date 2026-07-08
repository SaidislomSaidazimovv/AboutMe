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
sections assembled in `src/App.jsx`:
`Header → About → Experience → Skillset → Projects → Press → Contact`, with a `Preloader`
gate, a fixed `Nav`, a fixed non-interactive `.grain` noise overlay, and a footer.
(`Experience` is a résumé timeline; `Press` is a slim "Featured in" band with no nav entry.
There is no custom cursor — a former `CustomCursor` was removed in favor of the native
cursor for accessibility/perf.)

Four things are wired up at/around the `App` level and matter for understanding the page:

- **Preloader gate** — `App` holds `loading` state; the page content renders behind a
  Framer Motion fade and only animates in once `Preloader` calls `onComplete` (after a
  fixed ~3s count-up). While loading, `document.body` gets a `loading` class.
- **Lenis smooth scroll** — instantiated once in an `App` effect driving a
  `requestAnimationFrame` loop. In-page navigation uses native `scrollIntoView` against
  section `id`s (`home`, `about`, `skills`, `projects`, `contact`).
- **Language context** — `main.jsx` wraps `App` in `ThemeProvider → LanguageProvider`.
  There is **no router and no i18n library**; see below.
- **Theme context** — `src/context/ThemeContext.jsx` holds `theme` (`"light"` | `"dark"`,
  always starting light on load — not persisted), a `toggleTheme()`, and an effect that
  writes `document.documentElement.dataset.theme` and updates the `<meta name="theme-color">`.
  `Nav` renders the sun/moon toggle via `useTheme()`. See the dark-theme note under Styling.

### Multilingual content (the central pattern)

`src/context/LanguageContext.jsx` is the single source of all user-facing copy. It holds
a `translations` object with **`en`, `uz`, and `ru`** keys (`LANGS = ["en","uz","ru"]`)
all mirroring the same nested shape. `lang` initializes from `localStorage["lang"]`
(falling back to `"en"`) and is persisted back on change; the effect also sets
`document.documentElement.lang`. `setLanguage(code)` jumps to a specific language and
`toggle()` cycles through `LANGS` in order. Every component reads copy via
`const { t } = useLanguage()` and indexes into `t` (e.g. `t.hero.btn1`,
`t.projects.title[0]`). `Nav` renders a segmented `en / uz / ru` switch calling
`setLanguage(code)`.

**When adding or changing any visible text, edit all three of `en`, `uz`, `ru` and keep
the object shapes identical** — components assume the keys/array lengths line up across
languages. Note `t.*.title` fields are arrays split into multiple lines/spans by the
components.

### Styling

- **Design tokens live in `src/index.css` `:root`** as CSS custom properties. The
  aesthetic is a minimal, clean **light theme** with a single **emerald accent**
  (`--color-accent: #0f9d6e`) on warm off-white surfaces (`--color-bg`, `--color-bg-2`,
  `--color-bg-3`, plus `--color-surface`), ink text (`--color-heading`/`--color-text`),
  and neutral muted/faint/border tones. Typography pairs **Space Grotesk** for display
  (`--font-display`, headings + numerals) with **DM Sans** for body (`--font-body`); both
  are loaded in `index.html`. The token set also includes a radius scale (`--radius-sm`,
  `--radius`, `--radius-lg`, `--radius-pill`), tinted shadows (`--shadow-sm/md/accent`),
  and an `--accent-rgb` triple for `rgba(var(--accent-rgb), …)` tints. Shared helpers in
  `index.css`: `.section` + `.container` (page rhythm), `.eyebrow`, `.section-title`,
  `.lead`, `.btn`/`.btn-primary`/`.btn-ghost`, `.chip`, `.grain`.
- **Dark theme is a `[data-theme="dark"]` block in `index.css`** that re-declares the same
  token names with dark surfaces and a brighter accent (`--color-accent: #1fc78d`). Because
  everything reads the CSS vars, dark mode works by variable override — so **new tints must
  reference the accent/surface vars, not hardcoded light-mode values**, or they won't flip
  in dark mode. `ThemeContext` toggles the attribute (see above).
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
