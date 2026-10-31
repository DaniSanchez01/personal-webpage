# Agent guidelines

Instructions for any AI agent working on this repository. Read them before
changing code.

## Workflow

1. **Plan in steps.** Before implementing a feature, split it into small,
   reviewable steps and share the plan before coding.
2. **One commit per step.** Every commit must leave the app working
   (`npm run lint` and `npm run build` pass, the page renders), so any commit
   is a safe point to go back to. Do not mix unrelated changes into a step's commit;
   if an unrelated fix is needed (e.g. a broken build), give it its own commit
   or call it out explicitly.
3. **Report after each step.** Summarize what changed (files and why), the
   decisions taken and anything left unverified. Flag design decisions that
   deviate from the mockup or that the mockup leaves open.
4. **Ask when the design is ambiguous** (behaviour not shown, desktop and
   mobile mockups that disagree) instead of guessing.
5. Work on a `feature/<name>` branch off `main`. Do not push or open PRs
   unless asked.

## Desktop and mobile

- Every change must work on **mobile, tablet and desktop**. Never leave one
  of them broken or outdated.
- Styles are **mobile first**: base rules target mobile, then
  `@media (min-width: 768px)` (tablet) and `@media (min-width: 1024px)`
  (desktop). The navbar switches to the desktop version at 768px.
- Mockups usually come for 390px and 1440px only. Pick sensible intermediate
  values for tablet.
- Check there is no horizontal page scroll at phone width.
- Verify visually at ~375px, ~820px and 1440px before committing.

## Project structure

- `src/app/pages/<page>/`: one folder per route. Holds the page component
  (`<page>.tsx` + `<page>.css`) and its data/logic modules:
  - `<page>.types.ts`: types and enums (e.g. `BlogCategory`).
  - `<page>.config.ts`: constants and lookup records keyed by enums
    (e.g. `BLOG_CATEGORIES`).
  - `<page>.fixture.ts` / `<page>-<thing>.fixture.ts`: static content.
  - `<page>.utils.ts`: pure helpers (sorting, formatting).
  - Related routes live in the same folder (e.g. `pages/blog/blogPost.tsx`).
- `src/app/components/<componentName>/<componentName>.tsx` with its
  `<componentName>.css` next to it. Sub-components can nest
  (`awardsSection/awardPill/`).
- Assets live in `src/assets/images` and `src/assets/documents` and are
  imported from code, never referenced by URL.
- Global styles: `src/app/App.css` (layout helpers such as `.cst-container`,
  `.cst-accent-word`), `src/app/styles/colors.css`, `typography.css`.

## Code style

- React function components, `function Name() {}` + `export default Name;`.
  Props typed with an `interface <Name>Props`.
- TypeScript strict: no `any`; prefer enums for closed sets and
  `Record<Enum, ...>` for their config.
- Content (texts, lists) goes in fixtures/config, not hard-coded in JSX,
  so pages read data and render it.
- Prettier: single quotes, semicolons, trailing commas, 2 spaces. A
  pre-commit hook runs Prettier via lint-staged.
- Comments are short and explain _why_, not _what_.
- Internal navigation uses `react-router-dom` (`Link`, `NavLink`); external
  links use `target="_blank" rel="noopener noreferrer"`.
- State in the URL (filters, pages) via search params, not component state.

## CSS

- Plain CSS per component; every class prefixed with `cst-` and named
  `cst-<component>-<element>` (e.g. `cst-blog-card-title`).
- Colors only from the `--cst-palette2-*` variables in `colors.css`, fonts
  from `--cst-font-display` / `--cst-font-body`. No hard-coded hex values.
- Bootstrap is loaded globally: reset its defaults (margins, `code` color,
  link colors) when they leak into a component.
- Visual language: 2–3px ink borders, hard offset shadows
  (`box-shadow: 6px 6px 0`), accent highlights, Fraunces for headings.
- `body` (not `window`) is the scroll container (see `App.css`); use
  `document.body` or `scrollIntoView` when scrolling programmatically.

## Accessibility

- Semantic HTML: one `h1` per page, `nav`/`article`/`aside`/`figure` where
  they fit, `dl` for label/value pairs.
- No interactive elements nested inside links.
- `aria-label` on icon-only or ambiguous controls; `aria-hidden` on
  decorative arrows/icons; `aria-current` for the active filter/page.
- Handle failure states (e.g. clipboard access denied) with visible
  feedback.

## Checks before each commit

```bash
npm run lint
npm run build
```
