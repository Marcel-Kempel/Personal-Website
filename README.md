# Marcel Kempel Portfolio

Personal portfolio/CV website for Marcel Kempel, focused on Wirtschaftsinformatik, Prozessautomatisierung, Digitalisierung, Datenanalyse, Reporting and practical IT implementation.

## Project Structure

- `frontend/` contains the Vite + React + TypeScript website.
- `backend/` is reserved for future API/server code. It is intentionally empty for now because contact currently uses `mailto:` links only.
- `LEGAL_PUBLISH_CHECKLIST.md` contains the pre-publish legal checklist for Germany.
- `vercel.json` keeps deployment settings at the repository root.

The frontend has explicit client routes for:

- `/`
- `/projekte/anfrageprozess-digitalisieren`
- `/projekte/excel-daten-zu-dashboard`
- `/projekte/bpmn-zu-digitalem-ablauf`
- `/projekte/internes-mini-tool`
- `/impressum`
- `/datenschutz`

The contact area lives at the bottom of the homepage via `/#kontakt`.

## Local Development

Install dependencies from the repository root:

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

Use the Vite framework preset, or keep the repository defaults from `vercel.json`.

Vercel settings:

- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `frontend/dist`
- Development Command: `npm run dev`
- Root Directory: leave empty / repository root

The project includes:

- `vercel.json` with `installCommand`, `buildCommand`, `outputDirectory`, and SPA rewrites
- deployment security headers for CSP, HSTS, framing protection, MIME sniffing protection, referrer policy and browser permissions
- `frontend/public/_redirects` for Netlify-style fallback support if the host ever changes
- `frontend/public/.well-known/security.txt` with the public security contact
- metadata in `frontend/index.html` for title, description and Open Graph basics
- `mailto:` contact links only; no backend contact form is configured

## Security

This is currently a static frontend without login, cookies, server-side sessions or state-changing requests. CSRF tokens are therefore not implemented in the frontend because there is no backend action to protect. If a backend is added later, follow the CSRF requirements in `backend/README.md` before adding any write endpoints.

## Before Publishing

Update `frontend/src/app/content.ts` before going live:

- replace the legal address placeholders with a real ladungsfähige Anschrift
- confirm the public contact email
- add real LinkedIn and GitHub URLs if desired
- replace the hosting provider placeholder in `legalConfig`
- update `frontend/public/.well-known/security.txt` if the public contact email or domain changes

Also review `LEGAL_PUBLISH_CHECKLIST.md`. The current Impressum and Datenschutz pages are structurally prepared placeholders, not a substitute for individual legal advice.
