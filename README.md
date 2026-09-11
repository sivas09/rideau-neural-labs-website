# Rideau Neural Labs website

Rideau Neural Labs is an Ottawa-based applied AI practice. It helps Canadian businesses, education providers, public-sector teams, and community organizations adopt AI, automation, and intelligent software without losing control.

This repository contains the public website. It is a static React and TypeScript application built with Vite and prepared for Git-based deployment on Cloudflare Pages. It has no backend, database, analytics, or secrets.

The checked-in `wrangler.jsonc` records `./dist` as the Pages build output directory. The build also verifies that deployed HTML references compiled `/assets/` bundles rather than `/src/main.tsx`.

## Run locally

Requirements: Node.js 22 and npm.

```bash
npm install
npm run dev
```

Vite will print the local URL, normally `http://localhost:5173`.

## Check and build

```bash
npm run check
npm run build
```

The production build is written to `dist/`. To inspect it locally:

```bash
npm run preview
```

## Deploy to Cloudflare Pages

Connect this GitHub repository in **Cloudflare Dashboard → Workers & Pages → Create application → Pages → Connect to Git**.

Use these build settings:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | `Vite` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` |
| Node.js version | `22` |

No environment variables are required. Cloudflare Pages will build every push to `main` and create preview deployments for other branches and pull requests.

Do not leave the Cloudflare build command or output directory blank. An empty build configuration uploads the repository source, which browsers cannot execute as a production React application.

Detailed setup and domain instructions are in [docs/deployment.md](docs/deployment.md).

## Connect the custom domain

After the first successful deployment, open the Pages project, select **Custom domains**, and add `rideauneurallabs.com`. Add `www.rideauneurallabs.com` as well if both hostnames should work. Because the domain is already managed in Cloudflare, the dashboard can create the required DNS records. Choose one canonical hostname and configure a redirect for the other.

Before launch, confirm the final domain and business email, verify that `info@rideauneurallabs.com` receives mail, and submit a test enquiry.

## Content and assets

- The hero is an original AI-generated interpretation of the Rideau Canal at dawn. Its provenance is disclosed on the page.
- The favicon is a project-local SVG placeholder.
- The contact page uses a standard email link and has no web form. The site does not collect or store visitor data.

## Repository policy

Do not commit `.env` files, API keys, Cloudflare tokens, or other secrets. This static v1 does not need any.
