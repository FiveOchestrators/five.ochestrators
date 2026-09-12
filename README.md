# Five.Ochestrators

The official web home of **The Strongest AI Development Team**.

## Monorepo

```text
apps/web      Next.js website
packages/ui   Shared brand components
```

## Local development

```bash
pnpm install
pnpm dev
```

## Production build

```bash
pnpm build
```

The website is exported as static HTML to `apps/web/out` and deployed to GitHub Pages by the workflow in `.github/workflows/deploy-pages.yml`.

After renaming the repository, run the deployment workflow again: Next.js embeds the repository base path at build time.

## Brand assets

`apps/web/public/logo.svg` and the shared `BrandMark` trace the white silhouette from the supplied original logo, preserving its proportions and rounded corners. The favicon uses the same silhouette. The background combines CSS teal gradients with a subtle procedural SVG grain in `apps/web/app/grain.svg`.
