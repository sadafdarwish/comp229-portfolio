# React Portfolio — Sadaf Darwish

This project satisfies the COMP229 Assignment 1 requirements (Home, About, Projects, Services, Contact; navigation; custom logo; About page with resume link; Projects with 3 items; Contact form captures input and redirects to Home; internal documentation headers).

## Quick Start

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Where to put your assets

- **Resume PDF**: add your `resume.pdf` to the **/public** folder. The About page links to `/resume.pdf`.
- **Profile photo**: add `profile.jpg` to **/public** (About page uses `/profile.jpg`).
- Replace sample project images in `src/assets/*` if you want.

## Internal Documentation

Each `.jsx` and `.css` file includes a comment header with **File name, Student’s Name, StudentID, Date**.

## GitHub (version control) — minimal workflow

```bash
git init
git add .
git commit -m "feat: initial portfolio scaffold"
git branch -M main
git remote add origin https://github.com/YOUR-USER/YOUR-REPO.git
git push -u origin main
```

Make small commits as you add features (e.g., navbar, pages, form, styles).

## Cloud hosting (via Vercel)

1. Create a GitHub repository and push (above).
2. Go to vercel.com → **New Project** → **Import** your repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output dir: `dist`.
4. Deploy. Your live URL will be shown. Add it to your submission.

*(Netlify works similarly: “New site from Git” → pick repo → it detects Vite and builds.)*

## Notes

- Router uses `BrowserRouter`. Vercel/Netlify auto‑handle SPA routes.
- If you use GitHub Pages, switch to `HashRouter` or configure a 404 redirect to `/index.html`.
