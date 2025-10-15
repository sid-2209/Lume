# Lume

A modern Next.js 15 foundation for an AI/ML IT Services startup.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Re-usable component library (configured, ready for components)
- **next-themes** - Dark mode support
- **Lucide React** - Icon library

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

Build the application for production:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Lint

Run ESLint:

```bash
npm run lint
```

### Format

Format code with Prettier:

```bash
npm run format
```

## Project Structure

```
/app                  # Next.js App Router pages
  /layout.tsx         # Root layout with theme provider
  /page.tsx           # Homepage
  /globals.css        # Global styles and CSS variables
/components           # React components
  /ui                 # Shadcn/ui components (empty, ready for installation)
  /header.tsx         # Header component
/lib                  # Utility functions
  /utils.ts           # cn() utility for className merging
/config               # Configuration files
  /site.ts            # Site configuration
/public               # Static assets
```

## Adding Shadcn/ui Components

This project is configured for Shadcn/ui. To add components:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
# etc.
```

Components will be added to `/components/ui/`.

## Configuration

- **Site Config**: Edit `/config/site.ts` to update site name, description, and URL
- **Theme Colors**: Modify CSS variables in `/app/globals.css`
- **Tailwind**: Customize `/tailwind.config.ts`

## Features

- Server Components by default
- TypeScript with strict mode
- Dark mode support (system, light, dark)
- Responsive design
- Modern color palette for tech branding
- Clean console with no warnings
- ESLint and Prettier configured

## Next Steps

This is a minimal foundation ready for development. You can now:

1. Add Shadcn/ui components as needed
2. Create additional pages in the `/app` directory
3. Build out components in `/components`
4. Add environment variables to `.env.local` (see `.env.example`)
5. Customize the theme colors and styling

## License

Private
