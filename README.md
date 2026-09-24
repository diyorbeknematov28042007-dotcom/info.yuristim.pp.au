# Yuristim Info

Flagship public brand landing for **Yuristim** — a LegalTech ecosystem for Uzbekistan.

This repository is intentionally standalone from the main chat product and backend. It owns its own dependencies, CI and Vercel deployment lifecycle.

## Production targets

- Brand site: `https://info.yuristim.pp.ua`
- Main product: `https://yuristim.pp.ua`
- Telegram bot: `https://t.me/Yuristim_bot`

The main product root must stay chat-first. This repository must never be connected to `yuristim.pp.ua` as its root deployment.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript strict
- Tailwind CSS 4 + bespoke CSS visual system
- Lucide icons
- Native Web Animations / IntersectionObserver / CSS motion primitives

The motion system intentionally avoids a heavyweight animation runtime. All continuous or scroll-driven visual behavior is disabled or simplified under `prefers-reduced-motion` and on touch/small-screen layouts where appropriate.

## Local development

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Validation:

```bash
pnpm lint
pnpm typecheck
pnpm build
git diff --check
```

## Real assets

Source-of-truth assets supplied for V1:

- `public/assets/yuristim-logo.webp` — official Yuristim mark
- `public/assets/founder-diyorbek.webp` — founder portrait

Do not replace these with generated or stock assets.

## Locales

- Uzbek (default): `/`
- Russian: `/ru`
- English: `/en`

All meaningful V1 content is translated. Language preference is stored locally when the visitor explicitly switches languages.

## Deployment safety

Recommended Vercel project: `yuristim-info`.

Only connect this project to:

```text
info.yuristim.pp.ua
```

Do **not** assign `yuristim.pp.ua` or the Mini App domain to this repository.

If DNS is managed outside Vercel, add the exact record requested by the Vercel domain screen for `info.yuristim.pp.ua`; do not replace unrelated existing records.
