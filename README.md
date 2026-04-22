# myaiki-public

Web presence for **Myaiki**: legal pages and a short landing. Served with **GitHub Pages** from the repository root.

## Copyright and licensing

© 2026 Vedran Mandić. All rights reserved. (The README line is static; the **HTML** footers use **`assets/site.js`** so the displayed year follows the viewer’s calendar, with **2026** inside `<span data-copyright-year>` if scripts do not run.)

There is **no** `LICENSE` file in this repository. Unless stated otherwise in writing, nothing here is offered under an open-source or other permissive license. You may browse and use the published site as an end user; copying, redistribution, or reuse of the materials for other purposes requires permission from the rights holder.

## Contents

| Path | Purpose |
|------|---------|
| `index.html` | Landing page with links |
| `terms.html` | Terms of use (HTML export of app legal text) |
| `privacy.html` | Privacy policy (HTML export of app legal text) |
| `assets/site.js` | Footer copyright year from the browser date; **2026** in markup if JavaScript does not run |
| `legal/*.md` | Source markdown mirrored from the main app project (`docs/legal/` there) when updating legal text |

## GitHub Pages setup

1. Push this repository to GitHub (if it is not remote-linked yet).
2. In the GitHub repo: **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose branch **`main`** and folder **`/` (root)**.
5. Save. The site will be served at `https://<user>.github.io/<repo>/` (for example `https://vmandic.github.io/myaiki-public/`).

A `.nojekyll` file is included so GitHub does not run Jekyll on these plain HTML files.

## Updating legal text

1. Edit canonical copies in the main app repository: `docs/legal/terms_of_use_en.md` and `docs/legal/privacy_policy_en.md` (and sync `assets/legal/` there per your usual process).
2. Copy the `.md` files into `legal/` here.
3. Regenerate `terms.html` and `privacy.html` (for example with Python `markdown` from those files, matching the existing HTML shell and `web-note` block), then commit.

## App Store / Play Console URLs

Use your published Pages base URL for **Support** and **Marketing** links, for example:

- `https://<user>.github.io/<repo>/`
- `https://<user>.github.io/<repo>/privacy.html`
- `https://<user>.github.io/<repo>/terms.html`
