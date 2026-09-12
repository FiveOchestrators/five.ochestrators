# Five.O-chestrators

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
