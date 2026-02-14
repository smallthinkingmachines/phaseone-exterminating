# Phaseone Exterminating Website

Modern, professional pest control website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** with custom green/amber theme
- **Framer Motion** for smooth animations
- **Responsive design** for all devices
- **Nix Flakes** for reproducible development environment
- **Contact form** integration ready (Formspree)

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS 3
- Framer Motion
- Nix Flakes (Node 22)

## Getting Started

### Using Nix (Recommended)

1. Enter the development environment:
```bash
nix develop
```

2. Install dependencies (first time only):
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Without Nix

Requirements:
- Node.js 22+
- npm 10+

```bash
npm install
npm run dev
```

## Project Structure

```
├── public/
│   └── images/          # Site images
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── about/
│   │   ├── contact/
│   │   ├── policy-warranty/
│   │   ├── services/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/      # React components
│   │   ├── layout/
│   │   ├── ui/
│   │   └── ...
│   └── lib/
│       ├── constants.ts # Company data, services
│       └── utils.ts     # Utility functions
├── flake.nix           # Nix development environment
└── tailwind.config.ts  # Tailwind configuration
```

## Pages

- **Home** (`/`) - Hero, services overview, about snippet, contact form
- **Services** (`/services`) - Detailed service descriptions
- **About** (`/about`) - Company history, certifications
- **Contact** (`/contact`) - Contact form and information
- **Policy & Warranty** (`/policy-warranty`) - Service policies

## Development

### Build for production

```bash
npm run build
```

### Lint

```bash
npm run lint
```

### Start production server

```bash
npm run build
npm start
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

- **Primary (Green)**: `#22C55E`
- **Accent (Amber)**: `#F59E0B`

### Company Information

Edit `src/lib/constants.ts` to update:

- Company name, phone, email
- Service areas
- Services offered
- Social media links
- Certifications

### Contact Form

The contact form uses Formspree. To activate:

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Update the form endpoint in `src/components/ContactForm.tsx`:

```typescript
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
```

## Deployment

This is a standard Next.js app and can be deployed to:

- Vercel (recommended)
- Netlify
- Any Node.js hosting platform

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## License

Copyright © 2026 Phaseone Exterminating. All rights reserved.
