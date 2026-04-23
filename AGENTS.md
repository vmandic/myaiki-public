# Agent notes — myaiki-public

Context for tools and humans working **only** in this repository.

## What this is

- A small **GitHub Pages** site for **Myaiki**: landing page, **Terms of Use**, **Privacy Policy**.
- **Not** the mobile application source tree. Do **not** link the HTML (or user-facing README prose) to a private application repository. Use **this** repo (`vmandic/myaiki-public`) for any repository or Issues links.

## Voice

- Use normal product language for **Myaiki**. Avoid meta labels such as “public site” or “public part of the app” on user-facing pages. Keep implementation and maintainer workflow here, not in the README.

## GitHub Pages

- Branch **`main`**, folder **`/` (root)**.
- **`index.html`** is the home page; **`terms.html`** and **`privacy.html`** are the legal pages.
- **`.nojekyll`** disables Jekyll so static HTML is served as written.

## Legal content workflow

1. Canonical legal text: main Myaiki app `docs/legal/terms_of_use_en.md` and `privacy_policy_en.md` (sync `assets/legal/` there per that repo’s process).
2. Copy into **`legal/`** when they change.
3. Regenerate **`terms.html`** and **`privacy.html`** from Markdown, preserving the shared shell (header, **`site-notice`** paragraph, **`assets/style.css`**, footer, **`assets/site.js`**).

## URLs (update if owner or repo name changes)

- Site root: `https://vmandic.github.io/myaiki-public/`
- Legal HTML: `…/terms.html`, `…/privacy.html`
- Raw Markdown: `https://github.com/vmandic/myaiki-public/raw/main/legal/terms_of_use_en.md` and `…/privacy_policy_en.md`

## App Store Connect

- **Support** and **Marketing** may both use the Pages root once it returns HTTP 200.

## Licensing

- No open-source **`LICENSE`** file. See **README → Copyright**.
- Footer year: **`assets/site.js`** sets each `[data-copyright-year]` to `new Date().getFullYear()`. Markup fallback text is **2026** for no-JS and first paint.
- If the legal name changes, update README, HTML footers, and this file together. Bump the **2026** fallback in HTML when you intentionally raise the baseline for no-JS viewers.
