# Agent notes — myaiki-public

Short context for tools and humans working in **this** repository only.

## What this repo is

- The **web presence for Myaiki**: a minimal **GitHub Pages** site (landing, terms of use, privacy policy).
- It is **not** the application source tree. Do **not** add links in HTML (or user-facing README prose) to a private app repository. If a repo link is needed, use **this** repo (`vmandic/myaiki-public`, including Issues when enabled).

## Copy and tone

- Present the site as **Myaiki** in normal product language. Avoid meta labels like “public site”, “public part of the app”, or contrasting “public vs private” in user-facing text. Operational detail belongs here in `AGENTS.md`, not on the pages.

## GitHub Pages

- Publish from branch **`main`**, folder **`/` (root)**.
- **`index.html`** is the site home; **`terms.html`** and **`privacy.html`** are the legal pages.
- **`.nojekyll`** is intentional so GitHub does not run Jekyll on static HTML.

## Legal content workflow

1. Canonical legal text lives in the **main Myaiki app** project: `docs/legal/terms_of_use_en.md` and `docs/legal/privacy_policy_en.md` (keep `assets/legal/` in sync there per that repo’s process).
2. Copy those files into **`legal/`** here when they change.
3. Regenerate **`terms.html`** and **`privacy.html`** from the markdown (same HTML shell as today, including the short top note and shared **`assets/style.css`**).

## URLs (replace owner/repo if they change)

- Pages root: `https://vmandic.github.io/myaiki-public/`
- Legal HTML: `…/terms.html`, `…/privacy.html`
- Raw markdown in this repo: `https://github.com/vmandic/myaiki-public/raw/main/legal/terms_of_use_en.md` (and `privacy_policy_en.md`).

## App Store Connect (brief)

- **Support** and **Marketing** URLs can both point at the Pages root above once it returns HTTP 200.

## Licensing

- **No** open-source `LICENSE` file. Default copyright applies; see **`README.md` → Copyright and licensing** for the project statement.
- Footer copyright **year** on HTML pages: **`assets/site.js`** replaces `[data-copyright-year]` with `new Date().getFullYear()`; default text in markup is **2026** for no-JS and first paint.
- If the legal entity changes, update the README, HTML footers (name string), and this file’s cross-references together. Bump the **fallback** year in HTML when you intentionally want a new baseline for no-JS viewers.
