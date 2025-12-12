# Static Site Analysis - Niklas Bergh Portfolio

## Overview

Analysis of existing static HTML pages to be converted to SvelteKit + Tailwind + shadcn-svelte.

---

## HTML Files Inventory

| File | Route | Purpose |
|------|-------|---------|
| `code.html` | `/` | Home / Landing page |
| `projects.html` | `/projects` | Projects gallery |
| `about.html` | `/about` | About me page |
| `contact.html` | `/contact` | Contact form page |

---

## Page Structure Analysis

### 1. Home Page (`code.html` → `/`)

**Sections:**
1. **Header** - Logo (N3), navigation links (Home, Projects, About, Contact)
2. **Hero Section** - Name, subtitle, CTA buttons, visualization/chart area
3. **Features Section** - 3 glass cards (Hybrid maker, Systems thinker, Experiment-forward)
4. **Projects Section** - 3 project cards with image, title, description, tags

**Special Effects:**
- Background image (`bg.png`)
- Bokeh particles (floating, interactive)
- Animated wavy canvas lines (tilted -20deg)
- Dark overlay

**Colors Used:**
- `brand-orange`: #EA7A43
- `brand-teal`: #4DB0A2
- `brand-dark`: #18282D
- `brand-light-green`: #A6C8B5

---

### 2. Projects Page (`projects.html` → `/projects`)

**Sections:**
1. **Header** - Pill-shaped glass nav bar
2. **Projects Grid** - 9 project cards in 3-column layout

**Project Card Structure:**
- Icon (SVG)
- Mini sparkline chart
- Metrics display
- Title
- Description

**Special Features:**
- Glass card effect with glow shadow on hover
- Background image (external URL)

---

### 3. About Page (`about.html` → `/about`)

**Sections:**
1. **Animated Background** - Glow lines (3 animated circles)
2. **About Me Header** - Profile picture with glow, "About Me" title
3. **Main Content Grid:**
   - Left (3/5): "Who I Am" text section
   - Right (2/5): Skills & Expertise grid (8 skills)
4. **Footer** - Logo, navigation, social links, decorative circuitry SVG

**Skills Listed:**
- Technical Illustration
- Full-Stack Development
- AI & Machine Learning
- 3D Modeling & Rendering
- UI/UX Design
- Data Visualization
- Creative Coding
- Generative Art

**Special Features:**
- Cyan underline effect
- Gradient button (amber/orange)
- Animated glow lines background

---

### 4. Contact Page (`contact.html` → `/contact`)

**Sections:**
1. **Header** - Logo, navigation
2. **Contact Form:**
   - Name, Email (side by side)
   - Subject
   - Message (textarea)
   - Submit button (gradient), Other Actions button
3. **Social Info Sidebar** - Email, Instagram, YouTube links

**Form Styling:**
- Glass input fields
- Focus state with orange border
- Gradient submit button with glow

---

## Reusable Components to Extract

### Layout Components
- `SiteHeader.svelte` - Navigation header
- `SiteFooter.svelte` - Footer with nav and social links

### Section Components
- `Hero.svelte` - Hero with name, subtitle, CTAs
- `FeaturesSection.svelte` - Feature cards grid
- `ProjectsSection.svelte` - Projects grid
- `SkillsGrid.svelte` - Skills with icons
- `ContactForm.svelte` - Contact form

### UI Components
- `GlassCard.svelte` - Reusable glass effect card
- `ProjectCard.svelte` - Project display card
- `FeatureCard.svelte` - Feature/benefit card
- `Tag.svelte` or use shadcn `Badge`
- `Button.svelte` - Various button styles (primary, outline, gradient)

### Effects Components
- `BokehParticles.svelte` - Floating bokeh particles
- `WavyLines.svelte` - Animated canvas wave ribbons
- `AnimatedBackground.svelte` - Wrapper for background effects

---

## Design Tokens

### Colors
```css
--brand-orange: #EA7A43;
--brand-teal: #4DB0A2;
--brand-dark: #18282D;
--brand-light-green: #A6C8B5;
--brand-cyan: #25d0ab;
--brand-green: #98e594;
```

### Typography
- Font: Inter (400, 500, 600, 700)
- Secondary: Poppins (contact page)

### Effects
- Glass card: `rgba(255, 255, 255, 0.05)` + `backdrop-filter: blur(10px)`
- Border: `rgba(77, 176, 162, 0.4)` (teal)
- Glow shadow: `0 0 15px rgba(81, 214, 166, 0.3)`

---

## Assets

### Images
- `bg.png` - Main background
- `bg2.png` - About page background
- Profile picture (external URL currently)
- Skill icons (external URLs currently)

### To Create/Download
- Local copies of skill icons
- Optimized background images
- Favicon

---

## Migration Priority

1. **Phase 1**: Core setup (SvelteKit, Tailwind, shadcn-svelte)
2. **Phase 2**: Layout (Header, Footer, base layout)
3. **Phase 3**: Home page (Hero, Features, Projects preview)
4. **Phase 4**: Projects page
5. **Phase 5**: About page
6. **Phase 6**: Contact page with form
7. **Phase 7**: Background effects (bokeh, wavy lines)
8. **Phase 8**: Polish and optimization

