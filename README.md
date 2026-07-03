# Marcel Kempel Portfolio

Personal portfolio/CV website for Marcel Kempel, focused on Wirtschaftsinformatik, Prozessautomatisierung, Digitalisierung, Datenanalyse, Reporting and practical IT implementation.

The project is a Vite + React + TypeScript single page app with explicit routes for:

- `/`
- `/projekte/anfrageprozess-digitalisieren`
- `/projekte/excel-daten-zu-dashboard`
- `/projekte/bpmn-zu-digitalem-ablauf`
- `/projekte/internes-mini-tool`
- `/impressum`
- `/datenschutz`

Vercel rewrites are configured in `vercel.json` so direct visits to project and legal routes load the app correctly. The contact area lives at the bottom of the homepage via `/#kontakt`.

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run TypeScript checks:

```bash
npm run typecheck
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deploying on Vercel

Use the **Vite** framework preset, or keep the repository defaults from `vercel.json`.

Vercel settings:

- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `dist`
- Development Command: `npm run dev`

The project includes:

- `vercel.json` with `installCommand`, `buildCommand`, `outputDirectory`, and SPA rewrites
- `public/_redirects` for Netlify-style fallback support if the host ever changes
- metadata in `index.html` for title, description and Open Graph basics
- `mailto:` contact links only; no backend contact form is configured

## Before Publishing

Update `src/app/content.ts` before going live:

- replace the legal address placeholders with a real ladungsfähige Anschrift
- confirm the public contact email
- add real LinkedIn and GitHub URLs if desired
- replace the hosting provider placeholder in `legalConfig`

Also review `LEGAL_PUBLISH_CHECKLIST.md`. The current Impressum and Datenschutz pages are structurally prepared placeholders, not a substitute for individual legal advice.
