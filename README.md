# ROBOTOPIA

Modern landing page for **ROBOTOPIA** — building the next generation Physical AI infrastructure for embodied intelligence.

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

Static files are exported to the `out/` directory.

## Deployment

### Vercel (Recommended)

1. Push this repository to GitHub.
2. Import the project in [Vercel](https://vercel.com/new).
3. Deploy — no additional configuration required.

### GitHub Pages

GitHub Pages deployment is automated via GitHub Actions (`.github/workflows/deploy-pages.yml`).

1. Push to the `main` branch.
2. In repository **Settings → Pages**, set **Source** to **GitHub Actions**.
3. The workflow builds with `GITHUB_PAGES=true` and deploys the static export from `out/`.

The site will be available at:

```
https://needrepair.github.io/ROBOTOPIA.ai/
```

## Project Structure

```
src/
├── app/              # Next.js App Router (layout, page, metadata)
├── components/       # UI sections and shared components
└── lib/              # Constants and utilities
```

## Sections

- **Hero** — Headline, CTAs, animated grid & particle background
- **Vision** — From Automation to Intelligence
- **Technology** — Data, World Model, Embodied Platform
- **Platform** — Flash 1.0 with robot placeholder
- **Careers** — Open roles with mailto apply links
- **Footer** — Contact and branding

## Contact

[contact@robotopia.ai](mailto:contact@robotopia.ai)

## License

Private — All rights reserved.
