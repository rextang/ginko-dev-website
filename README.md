# Ginko Dev - Company Website

A modern, interactive single-page website for **Ginko Dev**, a software development studio specializing in telecommunications and enterprise solutions.

## Features

- **Interactive 3D Ginkgo Leaf** - A central Ginkgo leaf that responds to mouse movement with smooth 3D rotation
- **Four-Corner Layout** - Company introduction split across a 2x2 grid covering key areas:
  - Telecom Excellence
  - Enterprise Solutions
  - Full-Cycle Development
  - Technology Partners
- **Hover Effects** - Cloud-shaped golden glow shadows and animated underlines on hover
- **Dark Theme** - Premium dark aesthetic with golden Ginkgo-colored accents
- **Responsive Design** - Adapts to different screen sizes

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Routing**: Wouter
- **Backend**: Express.js (static file serving)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will start on `http://localhost:5000`.

### Production Build

```bash
npm run build
npm run start
```

## Project Structure

```
client/
  src/
    pages/
      Home.tsx          # Main landing page
    components/
      ui/               # Reusable UI components
    index.css           # Theme variables and design tokens
  index.html            # Entry HTML with meta tags and fonts
server/
  index.ts              # Express server entry point
  routes.ts             # API routes
  static.ts             # Static file serving
shared/
  schema.ts             # Shared type definitions
```

## Design

- **Fonts**: Space Grotesk (display headings), Outfit (body text)
- **Color Palette**: Deep dark background with golden/amber primary accents
- **Style**: Dark Future aesthetic with subtle grain texture and dynamic lighting

## License

MIT
