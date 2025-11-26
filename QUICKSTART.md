# Quick Start Guide

## Run the Development Server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## What You'll See

1. **Navbar** - Fixed navigation with mobile menu
2. **Hero Section** - Bold headline with dual CTAs (Blue for B2B, Purple for B2C)
3. **Stats Banner** - 500+ projects, 2,000+ graduates, 95% placement, ₦2.5M salary
4. **Enterprise Solutions** - 6 B2B services with blue accent
5. **Tech Academy** - 6 B2C programs with purple accent
6. **Footer** - Company links and info

## Customization Tips

### Change Company Name
Edit `app/page.tsx` - Search for "TechCo" and replace with your company name.

### Update Services/Programs
In `app/page.tsx`, find the arrays with service/program data and modify:
- `title` - Service/program name
- `description` - Brief description
- `icon` - Choose from lucide-react icons
- `duration` - For academy programs only

### Modify Colors
The design uses:
- Blue (`blue-500`, `blue-600`) for B2B
- Purple (`violet-500`, `violet-600`) for B2C
- Dark slate (`slate-950`, `slate-900`) for backgrounds

### Add More Sections
Use the same pattern with `motion.div` and `framer-motion` for smooth scroll animations.

## Build for Production

```bash
npm run build
npm start
```

## Deploy

Deploy to Vercel, Netlify, or any Next.js hosting platform.
