# cla — Creative Layers Architects Website

A premium, production-quality architecture firm website built for **cla (Creative Layers Architects)**.

## Architecture & Visual Identity
- **Aesthetic**: Minimal luxury, architectural, editorial typography (`Cormorant Garamond` + `Plus Jakarta Sans`).
- **Color Palette**: Warm off-white (`#F9F8F6`), near-black (`#111111`), restrained neutrals.
- **Core Pages**: Home (`/`), Projects (`/projects`, `/projects/:category`, `/projects/:slug`), About Us (`/about`), Contact (`/contact`), Custom 404 (`/404`).

---

## Content & Project Management Guide

All application content and projects are completely decoupled from presentation components and centralized for rapid client revisions.

### 1. Site Configuration (`src/config/siteConfig.ts`)
Modify this file to update site-wide settings and branding:
- **Hero Image Project**: Change `homepage.heroProjectSlug`.
- **Featured Slider Projects**: Set `homepage.featuredProjectSlugs` array in exact display order.
- **Max Featured Count**: Set `settings.featuredCountMax`.
- **Contact Details**: Update address, phone number, email, WhatsApp link, and Google Maps embed URL.
- **Future Section Toggles**: Enable/disable `enableServicesSection`, `enableAwardsSection`, `enableTeamSection`, or `enableFounderSection` without refactoring layouts.
- **Grid Layout**: Switch `settings.projectGridLayout` between `'uniform-grid'` and `'editorial-two-column'`.

### 2. Project Dataset (`src/data/projects.ts`)
To add a new project to the portfolio:
1. Open `src/data/projects.ts`.
2. Duplicate an existing project object inside the `projects` array.
3. Fill in the project details:
   ```ts
   {
     id: 'cla-007',
     slug: 'your-project-slug', // Used for clean URL: /projects/your-project-slug
     title: 'Project Name',
     subtitle: 'Project Subtitle',
     categories: ['architecture'], // 'architecture' or 'interior'
     location: 'City, Country',
     year: '2025',
     description: 'Short project summary paragraph.',
     editorialText: [
       'Paragraph 1 of full project narrative...',
       'Paragraph 2 of full project narrative...'
     ],
     heroImage: 'https://...',
     galleryImages: ['https://...', 'https://...'],
     published: true,
     isFeatured: true,
     featuredOrder: 1,
     isDemoContent: false,
     metadata: {
       location: 'City, Country',
       year: '2025',
       client: 'Private Client',
       area: '500 m²',
       scope: 'Full Architecture'
     }
   }
   ```
4. Save the file. The website automatically generates the project page, updates categories, and links navigation.

### 3. Deleting Temporary Demo Projects
Temporary demo projects are flagged with `isDemoContent: true` in `src/data/projects.ts`. Simply remove those objects from the `projects` array when real client projects are provided.

---

## Local Development & Build Commands

### Install Dependencies
```bash
npm install
```

### Run Local Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### Lint & Type Check
```bash
npm run lint
```

### Production Build
```bash
npm run build
```
Generates static assets in the `dist` folder ready for standard static hosting (Vite / Cloud Run / Vercel / Netlify).

### Preview Production Build
```bash
npm run preview
```
