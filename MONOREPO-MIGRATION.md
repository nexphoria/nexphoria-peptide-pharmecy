# Monorepo Migration Guide

## Structure
```
nexphoria/
├── apps/
│   └── web/            ← Current Next.js app moves here
├── packages/
│   ├── ui/             ← Shared React components
│   └── config/         ← Shared tailwind, tsconfig, eslint
├── turbo.json          ← Turborepo pipeline config
├── pnpm-workspace.yaml ← Workspace definition
├── package.json        ← Root scripts (turbo commands)
└── .github/
    ├── workflows/ci.yml ← Updated for pnpm + turbo
    ├── CODEOWNERS
    └── scripts/
        └── setup-branch-protection.sh
```

## Migration Steps

### 1. Move existing app to apps/web/
```bash
# From repo root:
mv src apps/web/src
mv public apps/web/public
mv next.config.ts apps/web/
mv tsconfig.json apps/web/
mv postcss.config.mjs apps/web/
mv components.json apps/web/
mv tailwind.config.ts apps/web/ (or merge with packages/config)
```

### 2. Switch to pnpm
```bash
rm -rf node_modules package-lock.json
mv package.json.monorepo package.json
pnpm install
```

### 3. Update imports in apps/web
```typescript
// Before:
import { Button } from "@/components/ui/button"

// After (for shared components):
import { Button } from "@nexphoria/ui"
```

### 4. Set up branch protection
```bash
export GITHUB_TOKEN=<your-token>
bash .github/scripts/setup-branch-protection.sh
```

### 5. Test
```bash
pnpm run build    # Builds all packages + apps
pnpm run lint     # Lints all packages
pnpm run dev      # Starts dev server for apps/web
```

## Branch Strategy
- `main` — production, protected, requires PR + CI pass
- `develop` — integration branch for features
- `feat/*` — feature branches, PR into develop
- `fix/*` — hotfix branches, can PR directly into main

## Key Files Created
- `turbo.json` — Pipeline definitions
- `pnpm-workspace.yaml` — Workspace packages
- `packages/config/` — Shared tailwind colors, tsconfig base
- `packages/ui/` — Button, Badge, Card, Container components
- `apps/web/package.json` — Web app with workspace deps
- `.github/workflows/ci.yml` — Updated CI for monorepo
- `.github/CODEOWNERS` — Code ownership
- `.github/scripts/setup-branch-protection.sh` — One-time setup
