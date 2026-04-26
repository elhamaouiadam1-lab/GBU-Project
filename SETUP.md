# Setup Instructions

## 1. Install Node.js (if not already installed)
Download from https://nodejs.org/ (LTS version recommended).

## 2. Install dependencies
Open a terminal in this folder and run:
```
npm install
```

## 3. Run locally
```
npm run dev
```
Then open http://localhost:3000 in your browser.

## 4. Deploy to Vercel
```
npm install -g vercel
vercel
```
Or push to GitHub and connect the repo at https://vercel.com/new

## Project structure
```
app/            → Next.js App Router pages
components/     → All React sections and UI primitives
lib/data.ts     → All embedded data (no backend needed)
```
