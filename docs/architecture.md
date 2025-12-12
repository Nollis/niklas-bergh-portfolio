# Architecture Documentation

## Tech Stack

- **Framework**: SvelteKit 2 with TypeScript
- **Styling**: Tailwind CSS 3
- **UI Components**: Custom shadcn-style components (bits-ui compatible)
- **Icons**: Lucide Svelte
- **Validation**: Zod
- **Utilities**: clsx, tailwind-merge, tailwind-variants

---

## Directory Structure

```
src/
├── app.css              # Global styles with Tailwind
├── app.html             # HTML template
├── app.d.ts             # TypeScript declarations
├── lib/
│   ├── components/
│   │   ├── effects/     # Background effects (bokeh, wavy lines)
│   │   ├── layout/      # Header, Footer
│   │   ├── sections/    # Page sections (Hero, Features, etc.)
│   │   └── ui/          # Reusable UI components
│   ├── config/
│   │   └── theme.ts     # Theme tokens, navigation, social links
│   ├── content/
│   │   └── projects.ts  # Projects data model
│   ├── index.ts         # Public exports
│   └── utils.ts         # Utility functions (cn)
├── routes/
│   ├── +layout.svelte   # Root layout with header/footer
│   ├── +page.svelte     # Home page
│   ├── projects/
│   │   └── +page.svelte # Projects page
│   ├── about/
│   │   └── +page.svelte # About page
│   └── contact/
│       ├── +page.svelte       # Contact form
│       └── +page.server.ts    # Form action handler
└── static/
    ├── bg.png           # Main background
    └── bg2.png          # About page background
```

---

## Core Components

### UI Components (`src/lib/components/ui/`)

| Component | Description |
|-----------|-------------|
| `GlassCard.svelte` | Glass-effect card with backdrop blur |
| `Button.svelte` | Button with variants (primary, outline, gradient) |
| `Tag.svelte` | Small tag/badge component |
| `ProjectCard.svelte` | Project display card |
| `FeatureCard.svelte` | Feature highlight card |

### Layout Components (`src/lib/components/layout/`)

| Component | Description |
|-----------|-------------|
| `SiteHeader.svelte` | Navigation header with logo |
| `SiteFooter.svelte` | Footer with nav and social links |

### Effect Components (`src/lib/components/effects/`)

| Component | Description |
|-----------|-------------|
| `BokehParticles.svelte` | Floating bokeh particle effect |
| `WavyLines.svelte` | Animated canvas wave ribbons |

---

## Adding a New Project

Edit `src/lib/content/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 'unique-id',
    title: 'Project Title',
    category: 'ai', // 'ai' | 'illustration' | '3d' | 'web' | 'tools'
    summary: 'Brief description of the project.',
    tech: ['Tech1', 'Tech2', 'Tech3'],
    status: 'completed', // 'completed' | 'in-progress' | 'planned'
    highlighted: true, // Show on home page
    year: 2024,
    link: 'https://example.com', // Optional
    image: '/images/project.png' // Optional
  },
  // ... more projects
];
```

---

## Updating Theme Colors

### 1. Update Tailwind Config (`tailwind.config.ts`)

```typescript
colors: {
  brand: {
    orange: '#EA7A43',    // Primary CTA color
    teal: '#4DB0A2',      // Secondary accent
    dark: '#18282D',      // Background
    'light-green': '#A6C8B5', // Text accent
    cyan: '#25d0ab',      // Highlight
    green: '#98e594'      // Success/nature
  }
}
```

### 2. Update CSS Variables (`src/app.css`)

```css
:root {
  --brand-orange: #ea7a43;
  --brand-teal: #4db0a2;
  /* ... etc */
}
```

### 3. Update Theme Config (`src/lib/config/theme.ts`)

```typescript
export const colors = {
  brand: {
    orange: '#EA7A43',
    // ... etc
  }
};
```

---

## Background Effects

The site features two animated background effects:

### Bokeh Particles
- Floating, semi-transparent circles
- Interactive mouse repulsion
- Configurable particle count and opacity

### Wavy Lines (Canvas)
- 2 ribbon streams with 3D twist effect
- 35 particles floating along the ribbons
- 20-degree rotation for diagonal flow
- Performance optimized with simplified rendering

---

## Form Handling

The contact form uses SvelteKit's form actions:

1. Client submits form
2. `+page.server.ts` validates with Zod
3. Currently logs to console (ready for email integration)

To integrate email service:

```typescript
// In +page.server.ts
import { sendEmail } from '$lib/services/email';

// In the action
await sendEmail({
  to: 'hello@n3.com',
  subject: result.data.subject,
  body: result.data.message,
  replyTo: result.data.email
});
```

---

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Type checking
npm run check

# Build for production
npm run build

# Preview production build
npm run preview
```

