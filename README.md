# Osman Jah — Portfolio Website

Modern personal portfolio built with React + Vite to present my profile, selected projects, credentials, and contact links in a clean, interactive single-page experience.

## About

This website showcases:

- A hero section with personal branding and social links
- Profile snapshot and skills overview
- Selected project cards with expanded details
- Certifications and recommendation letter preview
- In-page document preview modals for resume, degree, and certificates

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- Framer Motion
- Lucide React
- Spline (3D embed)

## Main Sections

- `Home` — intro, role positioning, and quick profile links
- `About & Skills` — background, focus, and skills tags
- `Selected Work` — project summaries and modal details
- `Certifications & Credentials` — credential cards and verification links
- `Contact` — email, LinkedIn, and GitHub CTAs

## Assets in `public/`

- `Osman_Jah_Resume.pdf`
- `Osman_Jah_Degree.pdf`
- `Osman_Jah_Certifications.pdf`
- `Osman_Jah_GOAL_Recommendation.pdf`
- `Osman_Jah_Profile.jpeg`

## Local Development

```bash
npm install
npm run dev
```

App runs on Vite dev server (usually `http://localhost:5173`).

## Build for Production

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Import this GitHub repository into Vercel.
2. Framework preset: `Vite`.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Deploy.

For future updates, push to `main` and redeploy from Vercel (or enable automatic deploys from GitHub).
