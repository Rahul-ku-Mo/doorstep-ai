# Vercel Clone Landing Page

A modern, responsive landing page clone of Vercel.com built with Next.js 15 and Tailwind CSS v4.

## Features

- **Hero Section**: Eye-catching hero with animated triangle logo and CTA buttons
- **Git-connected Deploys**: Terminal-style interface showing deployment process
- **Collaborative Pre-production**: Chat interface for team collaboration
- **Observability**: Analytics and monitoring features
- **AI Gateway**: AI deployment capabilities
- **Instant Rollbacks**: Deployment management with rollback functionality
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Build Tool**: Turbopack

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Hero.tsx
    ├── Features.tsx
    ├── Analytics.tsx
    ├── AIGateway.tsx
    ├── Rollbacks.tsx
    └── Footer.tsx
```

## Key Components

- **Hero**: Main landing section with animated logo and CTAs
- **Features**: Git deployments and team collaboration
- **Analytics**: Observability and monitoring
- **AI Gateway**: AI model deployment interface
- **Rollbacks**: Deployment management system
- **Footer**: Call-to-action sections and enterprise features

## Customization

The project uses Tailwind CSS utility classes for styling. You can easily customize:
- Colors and themes
- Spacing and layout
- Typography
- Animations and transitions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This is a clone project for educational purposes. All design elements are inspired by Vercel.com.
