# Personal Portfolio Website

A modern, interactive portfolio website built with React, TypeScript, and Spline 3D.

## Features

- Interactive 3D elements using Spline
- Smooth animations with Framer Motion
- Responsive design
- Dark theme
- Project showcase
- Contact section

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Spline 3D
- Shadcn UI

## Getting Started

1. Clone the repository
```bash
git clone [your-repo-url]
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## Deployment

### GitHub Pages
1. Update the `vite.config.ts`:
```ts
export default defineConfig({
  base: '/[repository-name]/',
  // ... other config
})
```

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables if needed

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## License

MIT
