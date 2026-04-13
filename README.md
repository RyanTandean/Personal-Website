# Personal Website

This repository contains the source for a personal portfolio website (ryantandean.com) built with a modern TypeScript React setup and Vite. It showcases projects, experiences, and contact information, and is designed to be responsive across devices with thoughtful UI details like animated backgrounds and polished card components.

Contents

- `frontend/` — the full front-end application (React + TypeScript + Vite).
  - `src/` — application source code: components, pages, assets, and styles.
  - `public/` — static files (robots, sitemap, etc.).

Getting started (development)

1. Install dependencies:

```bash
cd frontend
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open the app in your browser (Vite will print the local URL).

Build and deploy

- Build for production:

```bash
cd frontend
npm run build
```

- Deploy the generated `dist` folder using your preferred static hosting (Netlify, Vercel, GitHub Pages, etc.). See `PersonalWebsiteDeploymentSteps.md` in the `frontend/` folder for notes specific to this project.

Project notes

- The UI uses Tailwind utility classes and includes small animated/background components located in `src/components`.
- Experience and project data are driven from `src/data/` so content updates are straightforward without changing component logic.
- Accessibility: components include semantic roles and focus states, but a focused accessibility pass before public release is recommended.

Contributing

- For small edits, open a branch, make changes, and submit a pull request with a short description of the change.
- If you change or add components, please run the dev server and verify layout at multiple breakpoints.

Contact / Questions

- If you want help deploying, automating builds, or adjusting responsive behavior, open an issue or reach out via the contact details shown on the site.

Thanks for checking out this repo!
