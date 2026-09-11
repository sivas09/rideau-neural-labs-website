# Cloudflare Pages deployment

## 1. Connect GitHub

1. In Cloudflare Dashboard, open **Workers & Pages**.
2. Select **Create application**, then **Pages**, then **Connect to Git**.
3. Authorize the GitHub account or organization if prompted.
4. Select `sivas09/rideau-neural-labs-website`.
5. Set the production branch to `main`.

GitHub authorization is a manual account action. Grant Cloudflare access only to the repository it needs where possible.

## 2. Configure the build

Use the Vite framework preset with:

```text
Build command: npm run build
Build output directory: dist
Root directory: /
Node.js version: 22
```

No backend, database bindings, secrets, or environment variables are required.

Cloudflare Pages copies `public/_headers` and `public/_redirects` into the deployment. The redirect file preserves the React routes on direct visits and refreshes. The headers file adds baseline browser security headers and caching rules.

## 3. Verify the generated Pages domain

After the first deployment, open the generated `*.pages.dev` address and verify:

- `/`, `/work`, `/about`, and `/contact` load directly;
- refresh works on every route;
- navigation and keyboard focus work on desktop and mobile;
- the hero image and favicon load;
- the contact button opens an email addressed to `info@rideauneurallabs.com`;
- no browser console errors appear.

## 4. Connect the Cloudflare-managed domain

1. In the Pages project, open **Custom domains**.
2. Add `rideauneurallabs.com`.
3. Add `www.rideauneurallabs.com` if it should also resolve.
4. Let Cloudflare create or confirm the DNS records.
5. Choose the preferred hostname and create a permanent redirect from the other hostname using a Cloudflare Redirect Rule.
6. Wait for the Pages custom-domain status and edge certificate to become active.

Cloudflare provides HTTPS after the domain is active. Do not remove unrelated DNS records, especially MX, SPF, DKIM, or DMARC records used for email.

## 5. Final launch checks

- Confirm `info@rideauneurallabs.com` is a working mailbox or route before publishing it.
- Send a test enquiry from a desktop and phone.
- Confirm the canonical URL in `index.html`, `src/App.tsx`, `public/robots.txt`, and `public/sitemap.xml` matches the final domain.
- Decide whether the `pages.dev` hostname should redirect to the custom domain.
- Add privacy or accessibility statements when organizational or legal requirements are confirmed.

## Updates and rollback

Pushes to `main` create production deployments. Pull requests and non-production branches can be used for previews. Cloudflare keeps prior deployments in the Pages project so an earlier successful deployment can be promoted if a release needs to be rolled back.
