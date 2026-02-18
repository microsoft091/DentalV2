# Diccion Cabral Dental Clinic – InfinityFree Static Site

This folder contains a **static HTML/CSS/JS** version of the clinic website, designed to run on **InfinityFree** (or any static/PHP host that does not support Node.js).

## What’s included

- **index.html** – Homepage with hero (curved white shape), “Save Your Teeth / Bright Smile”, and “Why Choose Us”
- **styles.css** – Teal theme and layout matching the design
- **script.js** – Mobile menu toggle
- **assets/logo.png** – Clinic logo (use in header and footer)

Placeholder links (Services, About Us, Contact, Log In, Sign Up) point to `services.html`, `about.html`, `contact.html`, `login.html`, and `signup.html`. You can add those pages later or replace with real URLs.

## Logo

- Ensure **assets/logo.png** exists. If you have the logo image elsewhere, copy it to `infinityfree/assets/logo.png` so the header and footer display it correctly.

## Deploying to InfinityFree

1. Log in to [InfinityFree](https://www.infinityfree.com/) and open your hosting control panel (e.g. **htdocs** or **File Manager**).
2. Upload the **entire contents** of this `infinityfree` folder:
   - `index.html` (at the root of htdocs so it loads as the homepage)
   - `styles.css`
   - `script.js`
   - `assets/` folder (with `logo.png` inside)
3. Optional: Add `services.html`, `about.html`, `contact.html`, `login.html`, and `signup.html` so those links don’t 404. You can copy the structure from `index.html` (same header/footer, different main content).

## Requirements

- No Node.js, no database, no build step.
- Works with plain HTML, CSS, and JavaScript.
- Uses Google Fonts (DM Sans, Dancing Script) via CDN; needs internet for fonts.

## Original app (React + Node)

The full appointment/patient system (React + Vite + Node/Express + SQLite) cannot run on InfinityFree. This static site is for the **public-facing landing page** only. For the full app, use a host that supports Node.js (e.g. Vercel + Railway, or a VPS).
