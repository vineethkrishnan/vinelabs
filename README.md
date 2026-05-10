# vinelabs.de

Marketing site for VineLabs. Built with Astro 5 + Tailwind v4, deployed to Cloudflare Pages.

## Stack

- **Astro 5** with content collections for the projects showcase
- **Tailwind v4** via the official Vite plugin (CSS-first config in `src/styles/global.css`)
- **TypeScript** strict
- **Sitemap** generated from routes
- **Inter** as the body and display typeface (loaded from rsms.me)

## Local development

```bash
nvm use            # Node 22
npm install
npm run dev        # http://localhost:4321
npm run build      # produces ./dist
npm run preview    # serve the built dist locally
```

## Project layout

```
src/
  components/         # one .astro file per UI block
  content/projects/   # markdown files, one per project (drives the showcase)
  content.config.ts   # zod schema for project frontmatter
  layouts/            # BaseLayout + LegalLayout
  pages/              # index, impressum, datenschutz, support
  styles/global.css   # Tailwind import + brand tokens + base/component layers
public/
  brand/              # logo + favicon files (drop SVGs here)
  robots.txt
workflow-templates/
  mirror-to-vinelabs.yml  # drop into other repos to mirror them to vinelabs-de
```

## Adding a project to the showcase

Create `src/content/projects/<slug>.md`:

```markdown
---
name: my-project
tagline: One short line of pitch
description: Two or three sentences of substance.
language: TypeScript
license: MIT
status: stable    # stable | beta | alpha
categories:       # 1 to 4 entries from src/lib/categories.ts
  - cli-tools     # cli-tools | web-apps | browser-extensions
  - ai-agents     # ai-agents | platform-extensions | design-systems
highlights:
  - First key thing
  - Second key thing
  - Third key thing
order: 30         # smaller = appears first
repo: https://github.com/vinelabs-de/my-project
docs: https://my-project.vinelabs.de   # optional
install: npm install my-project        # optional, renders as code block
---

Body text. Currently unused on the landing page but available if we add a detail route later.
```

The schema is validated at build time. See `src/content.config.ts` and `src/lib/categories.ts`.

## Brand assets

Drop these into `public/brand/`:

| File              | Purpose                                  |
| ----------------- | ---------------------------------------- |
| `mark.svg`        | V-leaf icon, used in nav and footer       |
| `favicon.svg`     | 32px square version of the mark           |
| `favicon.ico`     | Legacy fallback                           |
| `logo-light.svg`  | Full lockup for light backgrounds         |
| `logo-dark.svg`   | Full lockup for dark backgrounds          |
| `og-default.png`  | 1200x630 Open Graph card                  |

The header and footer reference `mark.svg`. They have an `onerror` fallback that hides the image, so the wordmark text still renders if the file is missing.

## Brand tokens

Defined in `src/styles/global.css` under `@theme`. The two main colors:

- `--color-vine-900` (`#0d4f2c`) - dark forest green for "Vine" wordmark and primary text
- `--color-leaf-500` (`#4cb050`) - bright leaf green for "Labs" wordmark and accents

Tailwind utilities like `text-vine-900`, `bg-leaf-500`, `border-vine-100` are auto-generated from these tokens.

## Deploy: Cloudflare Pages

The site is deployed via the GitHub Actions workflow at `.github/workflows/deploy.yml`. It builds Astro on every push to `main` and uploads `dist/` to Cloudflare Pages using `cloudflare/wrangler-action@v3`. The Pages project is named **`vinelabs`** (its preview URL is `vinelabs-8ct.pages.dev`).

### Required repo secrets

Add these in `Settings -> Secrets and variables -> Actions` on `vineethkrishnan/vinelabs`:

| Secret                 | What it is                                                                          |
| ---------------------- | ----------------------------------------------------------------------------------- |
| `CLOUDFLARE_API_TOKEN` | Scoped token with `Account: Cloudflare Pages: Edit` permission. Create at <https://dash.cloudflare.com/profile/api-tokens> using the "Edit Cloudflare Pages" template. |
| `CLOUDFLARE_ACCOUNT_ID`| Account ID. Visible in the right sidebar of any Cloudflare dashboard page.        |

### Avoid double deploys

If the Cloudflare Pages dashboard's Git integration is currently connected to this repo, **disconnect it** before merging this workflow, or the site will deploy twice on every push. To disconnect: Pages project -> Settings -> Builds & deployments -> Source -> **Disconnect**. The Pages project itself stays; it just stops auto-building from Git and lets the workflow handle uploads via Direct Upload.

### Custom domain (`vinelabs.de`)

The custom domain is wired in the dashboard, not in this repo. One-time setup:

1. Pages project `vinelabs` -> Custom domains -> Set up a domain.
2. Add `vinelabs.de` and `www.vinelabs.de`. Cloudflare auto-provisions TLS.
3. If DNS is already on Cloudflare, the records are added automatically. Otherwise add the CNAME records the dashboard prints.

To check whether the domain is currently mapped: visit <https://dash.cloudflare.com> -> Workers & Pages -> `vinelabs` -> Custom domains. If `vinelabs.de` is listed and shows "Active", you're wired. Otherwise it's still serving only at `vinelabs-8ct.pages.dev`.

## Releases: release-please

Versioning and changelog are automated via `googleapis/release-please-action` in `.github/workflows/release-please.yml`. Configuration lives in `.release-please-config.json`; the current released version is tracked in `.release-please-manifest.json`.

Flow:

1. Push commits to `main` using **conventional commits** (`feat:`, `fix:`, `docs:`, `refactor:`, `perf:`, `chore:`, ...).
2. release-please opens (or updates) a "release PR" titled `chore(main): release vinelabs vX.Y.Z` with the version bump in `package.json` and a generated `CHANGELOG.md` entry.
3. When you merge that PR, release-please tags the release on GitHub (`vX.Y.Z`) and publishes a GitHub Release with the changelog.
4. The merge of the release PR is itself a push to `main`, which triggers `deploy.yml` and ships the new version.

### Conventional commit cheatsheet

| Prefix      | Effect                            |
| ----------- | --------------------------------- |
| `feat:`     | minor bump (`0.1.0 -> 0.2.0`)     |
| `fix:`      | patch bump (`0.1.0 -> 0.1.1`)     |
| `feat!:` or `BREAKING CHANGE:` footer | major bump (`0.1.0 -> 1.0.0`) |
| `docs:` `refactor:` `perf:`           | no version bump, but appears in CHANGELOG |
| `chore:` `style:` `test:` `build:` `ci:` | hidden in CHANGELOG                |

Pre-1.0 special rule (set in config): `feat:` triggers a patch bump until `1.0.0`, so the version stays in `0.x.x` until you explicitly cut `1.0.0`.

## Mirror other repos to vinelabs-de

Use `workflow-templates/mirror-to-vinelabs.yml`. It is a self-contained GitHub Actions workflow.

Per source repo (vaultctl, xrechnung-kit, etc.):

1. Create the empty target repo at `github.com/vinelabs-de/<name>`.
2. Create a fine-grained PAT with Contents:read+write on the target repo. Add it to the source repo as secret `VINELABS_MIRROR_PAT`.
3. Copy `workflow-templates/mirror-to-vinelabs.yml` into the source repo at `.github/workflows/mirror-to-vinelabs.yml`.
4. Push. The workflow runs on every push and `git push --mirror`s to vinelabs-de.

The mirror is one-way. Working copy stays in your personal repo, the org repo is read-only.

## Operator and legal framing

VineLabs is operated by Vineeth N K as a sole proprietor based in India. The site targets the German / EU market but the operator is non-EU. Consequently:

- The Impressum is a voluntary non-EU-operator disclosure modelled on § 5 TMG, not a § 5 TMG identification of a DE-established provider.
- The Datenschutz claims the Art. 27(2) DSGVO exemption (no Art. 27 EU representative), with the reasoning documented inline. If data processing ever expands (forms, accounts, tracking, Art. 9 data), the exemption breaks and an EU rep must be designated.
- No German tax IDs (Steuernummer / USt-IdNr / W-IdNr) and no Kleinunternehmerregelung are published - they do not apply.
- Governing law for direct customer contracts is Indian law. Shopware Store purchases additionally fall under shopware AG terms; EU consumer-protection of the buyer's country remains unaffected.

## TODO before public launch

- Add `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` secrets to the repo
- If CF Pages dashboard Git integration is connected, disconnect it (avoid double deploys)
- Confirm `vinelabs.de` is mapped to the `vinelabs` Pages project in CF dashboard
- Add `og-default.png` (1200x630) to `public/brand/` for social cards
- Add `favicon.ico` to `public/brand/` for legacy browsers
- Push first commit and verify both the deploy workflow and release-please workflow run cleanly
- Optional: anwaltliche Pruefung of the legal pages before submitting to the Shopware Store
