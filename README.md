# myaiki-public

Public-facing static site for **Myaiki** (legal pages and minimal landing). Built for **GitHub Pages** from the repository root.

## Contents

| Path | Purpose |
|------|---------|
| `index.html` | Landing page with links |
| `terms.html` | Terms of use (HTML export of app legal text) |
| `privacy.html` | Privacy policy (HTML export of app legal text) |
| `legal/*.md` | Source markdown copied from the [myaiki](https://github.com/vmandic/myaiki) app repo (`docs/legal/`) for easy diffing when updating |

## GitHub Pages setup

1. Push this repository to GitHub (if it is not remote-linked yet).
2. In the GitHub repo: **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose branch **`main`** and folder **`/` (root)**.
5. Save. The site will be served at `https://<user>.github.io/<repo>/` (for example `https://vmandic.github.io/myaiki-public/`).

A `.nojekyll` file is included so GitHub does not run Jekyll on these plain HTML files.

## Updating legal text

1. Edit canonical copies in the app repository: `docs/legal/terms_of_use_en.md` and `docs/legal/privacy_policy_en.md` (and sync `assets/legal/` in that repo per your usual process).
2. Copy the `.md` files into `legal/` here.
3. Regenerate `terms.html` and `privacy.html` (for example with Python `markdown` from those files, matching the existing HTML shell and `web-note` block), then commit.

## App Store / Play Console URLs

Use your published Pages base URL for **Support** and **Marketing** links, for example:

- `https://<user>.github.io/<repo>/`
- `https://<user>.github.io/<repo>/privacy.html`
- `https://<user>.github.io/<repo>/terms.html`
