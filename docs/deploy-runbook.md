# OrchardTech Deploy Runbook

## Standard flow
1. Push to `main`.
2. Vercel should auto-deploy from Git integration.

## Manual deploy hook (fallback)
Use the project deploy hook URL from Vercel settings.

```bash
curl -X POST "<VERCEL_DEPLOY_HOOK_URL>"
```

Expected response includes a job id with `state: PENDING`.

## Quick verification checks
After deploy finishes:

```bash
curl -I https://orchardtech.net/orchardtech-logo.svg
```
Should return `200` when the new logo build is live.

## If changes do not appear
- Confirm Vercel project is connected to repo: `orchard800/orchardtech_web`
- Confirm production branch is `main`
- Confirm root directory is repository root (`/`)
- Open Vercel deployment logs for the latest commit SHA and verify build succeeded
- Hard refresh browser / clear CDN cache if needed
