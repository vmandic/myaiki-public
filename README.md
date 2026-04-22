# myaiki-public

Static site for **Myaiki** (Terms of Use and Privacy Policy), served with **GitHub Pages** from the repository root.

**Live site:** `https://vmandic.github.io/myaiki-public/` (after Pages is enabled for `main` / root).

## Copyright

© 2026 Vedran Mandić. All rights reserved.

There is **no** `LICENSE` file. Unless you have written permission, do not treat the contents as open source. Visitors may use the published pages in the ordinary way. Copying, redistribution, or reuse for other purposes requires permission from the rights holder.

On the HTML pages, the copyright **year** is filled in with JavaScript from the visitor’s system date (`assets/site.js`). The markup contains **2026** as a fallback when scripts do not run. This README line is updated manually when you choose.

## Contents

| Path | Purpose |
|------|---------|
| `index.html` | Short landing page with links to the legal pages |
| `terms.html` | Terms of Use (HTML; same substance as in the app) |
| `privacy.html` | Privacy Policy (HTML; same substance as in the app) |
| `assets/style.css` | Shared layout and typography |
| `assets/site.js` | Sets footer copyright year from `Date` in the browser |
| `legal/*.md` | Markdown sources mirrored from the main Myaiki app (`docs/legal/` there) when legal text changes |

## GitHub Pages

1. Push this repository to GitHub (if needed).
2. **Settings → Pages**
3. **Build and deployment:** source **Deploy from a branch**
4. Branch **`main`**, folder **`/` (root)**
5. Save. The site URL will be `https://<user>.github.io/<repo>/` (for example `https://vmandic.github.io/myaiki-public/`).

`.nojekyll` is present so GitHub does not run Jekyll on these static files.

## Updating legal text

1. Edit the canonical files in the main Myaiki app: `docs/legal/terms_of_use_en.md` and `docs/legal/privacy_policy_en.md` (and keep `assets/legal/` in that repo aligned with your usual process).
2. Copy both files into `legal/` here.
3. Regenerate `terms.html` and `privacy.html` from the Markdown (keep the same HTML shell, including the top **site notice** and footer), then commit.

## App Store and Play Console

You may use the Pages base URL for **Support** and **Marketing**, for example:

- `https://<user>.github.io/<repo>/`
- `https://<user>.github.io/<repo>/terms.html`
- `https://<user>.github.io/<repo>/privacy.html`
