# Nexphoria Tech Stack Registry

Last updated: 2026-05-31

---

## Overview

| Layer | Technology | Notes |
|-------|------------|-------|
| Frontend | Next.js 16 (App Router) | Static export to Cloudflare Pages |
| Styling | Tailwind CSS v4 + shadcn/ui | |
| Animation | Framer Motion | |
| Backend / API | Cloudflare Workers | Single worker: `nexphoria-checkout` |
| Data Store | Cloudflare KV (`SUBSCRIBERS`) | See details below |
| Payments (primary) | Stripe | Checkout sessions + subscriptions |
| Payments (backup) | Crypto (BTC/ETH) | Manual reconciliation |
| CDN / Hosting | Cloudflare Pages | |
| Package Manager | pnpm 9 | Workspace monorepo |
| CI/CD | GitHub Actions | `.github/workflows/` |

---

## Cloudflare KV — `SUBSCRIBERS` Namespace

**Namespace ID:** `67bb9d9a4fa440fe94b1adcfb977c16c`

### Key Schema

| Key Pattern | Contents |
|-------------|----------|
| `<email>` | Waitlist subscriber `{email, source, subscribedAt}` |
| `index:emails` | `[{email, subscribedAt}]` — full subscriber index |
| `order:<sessionId>` | Stripe order `{type, sessionId, customerEmail, amountTotal, …}` |
| `index:orders` | `[{sessionId, email, createdAt}]` — order index |
| `crypto:<ref>` | Crypto order `{type, reference, asset, walletAddress, totalUsd, …}` |
| `index:crypto_orders` | `[{reference, email, asset, totalUsd, createdAt}]` |
| `support:<email>:<ts>` | Support inquiry `{name, email, question, submittedAt}` |
| `index:support` | `[{email, name, submittedAt}]` |
| `wholesale:<email>:<ts>` | Wholesale inquiry `{name, institution, email, …}` |
| `index:wholesale` | `[{email, name, submittedAt}]` |

---

## Backup Automation

### Daily KV Backup

- **Workflow:** `.github/workflows/kv-backup.yml`
- **Schedule:** Daily at 02:00 UTC (`0 2 * * *`)
- **Script:** `scripts/kv-backup.sh`
- **Output:** GitHub Actions artifact `kv-backup-<run-id>` (retained 30 days)
- **What it backs up:** All keys/values in the `SUBSCRIBERS` KV namespace
- **Required secret:** `CLOUDFLARE_API_TOKEN` (Cloudflare API token with KV read access)

**Manual run:**
```bash
export CLOUDFLARE_API_TOKEN=<your-token>
bash scripts/kv-backup.sh --output-dir /tmp/kv-backup
```

### Monthly Restore Test

- **Workflow:** `.github/workflows/kv-restore-test.yml`
- **Schedule:** 1st of each month at 03:00 UTC (`0 3 1 * *`)
- **Script:** `scripts/kv-restore-test.sh`
- **What it validates:**
  1. Backup file exists and is readable
  2. Valid JSON structure
  3. Required metadata fields present
  4. `key_count` matches entries array length
  5. All entries have `key` and `value` fields
  6. Expected index keys present
  7. Backup is ≤ 25 hours old
- **Log:** `backups/restore-test-log.json` (committed to repo by the workflow)

**Manual run:**
```bash
bash scripts/kv-restore-test.sh --backup-file /tmp/kv-backup/kv-backup-2026-05-31.json
```

---

## Restore Test Log

| Date | Status | Keys | Notes |
|------|--------|------|-------|
| *(automated from `backups/restore-test-log.json`)* | | | |

See `backups/restore-test-log.json` for full machine-readable history.

---

## Required GitHub Secrets

| Secret | Used By | Notes |
|--------|---------|-------|
| `CLOUDFLARE_API_TOKEN` | `kv-backup.yml` | Needs KV read permission (`Account > Workers KV Storage > Read`) |
| `GITHUB_TOKEN` | `kv-restore-test.yml` | Auto-provided by Actions; needs `contents: write` and `actions: read` |

---

## Data Not Covered by This Backup

| Data | Owner | Recovery path |
|------|-------|---------------|
| Stripe payments/subscriptions | Stripe | Stripe dashboard export; Stripe retains all data |
| Cloudflare Workers code | Git (this repo) | Re-deploy via `wrangler deploy` |
| Cloudflare Pages build | Git (this repo) | Re-deploy via CI |
| DNS / zone config | Cloudflare dashboard | Manual re-entry; document in runbook |
