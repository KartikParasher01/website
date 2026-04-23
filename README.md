# Data Analyst Portfolio

A recruiter-focused data analyst portfolio built with Next.js App Router, Tailwind CSS, Framer Motion, and shadcn/ui-style reusable components.

## Folder Structure

```text
.
|-- app
|   |-- icon.svg
|   |-- globals.css
|   |-- layout.tsx
|   |-- not-found.tsx
|   |-- page.tsx
|   `-- projects
|       `-- [slug]
|           `-- page.tsx
|-- components
|   |-- navigation
|   |   |-- site-footer.tsx
|   |   `-- site-navbar.tsx
|   |-- sections
|   |   |-- about-section.tsx
|   |   |-- contact-section.tsx
|   |   |-- experience-section.tsx
|   |   |-- hero-section.tsx
|   |   |-- projects-section.tsx
|   |   `-- skills-section.tsx
|   |-- shared
|   |   |-- project-card.tsx
|   |   |-- reveal.tsx
|   |   `-- section-heading.tsx
|   `-- ui
|       |-- badge.tsx
|       |-- button.tsx
|       |-- card.tsx
|       `-- separator.tsx
|-- data
|   `-- portfolio.ts
|-- lib
|   `-- utils.ts
|-- .eslintrc.json
|-- components.json
|-- next-env.d.ts
|-- next.config.mjs
|-- package.json
|-- postcss.config.js
|-- tailwind.config.ts
`-- tsconfig.json
```

## Run Locally

1. Install Node.js 20+.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open `http://localhost:3000`.

## Deploy To Vercel

1. Push this project to a GitHub repository.
2. Go to Vercel and click **Add New... -> Project**.
3. Import the GitHub repository.
4. Keep the detected framework as **Next.js**.
5. Leave the default build settings:

```text
Build Command: next build
Install Command: npm install
Output Directory: .next
```

6. Click **Deploy**.

No environment variables are required for this portfolio in its current form.

## Customize Quickly

- Update personal details and links in `data/portfolio.ts`.
- Edit project copy in `data/portfolio.ts`.
- Tweak theme colors in `app/globals.css`.

## Notes

- The homepage includes sticky smooth-scroll navigation, animated section reveals, recruiter-friendly case-study cards, and dedicated detail pages for each project.
- The project uses reusable shadcn/ui-inspired primitives in `components/ui`.
