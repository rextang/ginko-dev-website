# Ginko Dev - Company Website

## Overview
A modern, single-page landing website for Ginko Dev, a software development studio specializing in telecommunications and enterprise solutions.

## Architecture
- **Frontend**: React + TypeScript with Vite, Tailwind CSS v4, Framer Motion
- **Backend**: Express.js (serves static frontend only — no API routes needed)
- **Routing**: wouter

## Key Features
- Interactive 3D Ginkgo leaf that tracks mouse movement (Framer Motion)
- 2x2 grid layout with four company introduction sections
- Cloud-shaped hover shadows on introduction text
- Animated underlines on section titles
- Dark theme with golden Ginkgo-colored accents
- Responsive design

## Design System
- **Fonts**: Space Grotesk (display), Outfit (body)
- **Color Palette**: Deep dark background with golden/amber primary (#FACC15-range)
- **Style**: Dark Future aesthetic with subtle grain texture

## File Structure
- `client/src/pages/Home.tsx` — Main landing page component
- `client/src/index.css` — Theme variables and design tokens
- `client/index.html` — Meta tags and font imports
- `server/` — Express server (static file serving only)

## Notes
- This is a static company website with no database or API routes
- The "Contact us" button opens the user's email client via mailto link
- No user authentication or data persistence needed
