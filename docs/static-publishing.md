# Static Publishing Flow (Directus -> Vercel)

This project bakes published Directus pages into the frontend bundle at build time.

## How it works

1. `npm run cms:generate` fetches published pages from Directus.
2. It writes `client/content/generated-pages.ts`.
3. `npm run build` compiles a static app using that baked content.
4. Vercel deploy serves static pages from CDN.

## Required env vars (Vercel)

- `VITE_DIRECTUS_URL=https://admin.orchardtech.net`
- `VITE_DIRECTUS_PUBLIC_TOKEN` (optional; only if API requires auth)

## Trigger redeploy on publish/update

Use a Vercel Deploy Hook in Directus Flow:

1. Create a Deploy Hook in Vercel project settings.
2. In Directus, create a Flow triggered on items update/create for:
   - `pages`
   - `page_sections`
   - `block_*` collections
3. Add a Webhook operation calling the Vercel Deploy Hook URL (POST).

Result: each publish/update triggers a fresh static build with latest content.

## Notes

- Runtime fallback to Directus still exists for slugs not present in baked data (useful in dev).
- Production should rely on generated content + deploy hook for deterministic, fast delivery.
