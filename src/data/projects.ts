import { Category, Project } from '../types';

export const categories: Category[] = [
  {
    id: 'all',
    name: 'All Projects',
    slug: 'all',
    description: 'Comprehensive archive of architecture and interior works by CLA.'
  },
  {
    id: 'architecture',
    name: 'Architecture',
    slug: 'architecture',
    description: 'Residential, pavilion, and contextual architectural interventions.'
  },
  {
    id: 'interior',
    name: 'Interior',
    slug: 'interior',
    description: 'Bespoke spatial design, tactile material palettes, and interior environments.'
  }
];

export const projects: Project[] = [
  // --------------------------------------------------------------------------
  // 1. PRIMARY REAL CLA PROJECT
  // --------------------------------------------------------------------------
  {
    id: 'cla-001',
    slug: 'pavilion-in-the-oaks',
    title: 'Pavilion in the Oaks',
    subtitle: 'Highland Residence & Spatial Courtyard',
    categories: ['architecture'],
    location: 'Delhi NCR, India',
    year: '2025',
    description: 'A low-slung, board-formed concrete and burnt cedar residence cantilevered over an ancient oak grove. Designed with continuous glass openings that dissolve the boundaries between shelter and landscape.',
    editorialText: [
      'Positioned within Delhi NCR, Pavilion in the Oaks was conceived as an understated horizontal volume that rests beneath the canopy of mature trees.',
      'The architecture employs a restrained palette of board-formed concrete, charred yakisugi timber, and raw lime plaster. Monolithic floor-to-ceiling glass panels allow light to wash across natural stone surfaces throughout the day, establishing a quiet, reverent cadence of light and shade.',
      'A central open-air courtyard serves as the emotional heart of the residence, organizing private suites around a serene water feature that reflects the surrounding hills.'
    ],
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=2000&q=85',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=2000&q=85'
    ],
    published: true,
    isFeatured: true,
    featuredOrder: 1,
    isDemoContent: false, // REAL CLA PROJECT
    metadata: {
      location: 'Delhi NCR, India',
      year: '2025',
      client: 'Private Residence',
      area: '620 m²',
      scope: 'Architecture, Interior & Landscape Integration'
    }
  },

  // --------------------------------------------------------------------------
  // 2. DEMO PROJECT 1 (Temporary - clearly flagged as isDemoContent: true)
  // --------------------------------------------------------------------------
  {
    id: 'cla-demo-002',
    slug: 'monolith-house-retreat',
    title: 'Monolith House Retreat',
    subtitle: 'Coastal Cliffside Sanctuary',
    categories: ['architecture'],
    location: 'Gurugram, Haryana',
    year: '2024',
    description: 'An elemental stone and concrete residence designed for the Delhi NCR climate, with deep recessed openings and generous overhangs that temper sun and heat.',
    editorialText: [
      'Set within a quiet residential enclave in Gurugram, Monolith House balances privacy with expansive views across a carefully planted landscape.',
      'The exterior geometry is defined by twin basalt-clad volumes separated by a glass lightwell. Deep overhangs protect the interior spaces from glare while creating dramatic cast shadows across polished micro-cement floors.',
      'Every junction, from hidden pocket sliders to custom stone hearths, reinforces the project’s commitment to permanence and quiet luxury.'
    ],
    heroImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=85',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=85',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=2000&q=85'
    ],
    published: true,
    isFeatured: true,
    featuredOrder: 2,
    isDemoContent: true, // TEMPORARY DEMO PROJECT
    metadata: {
      location: 'Gurugram, Haryana',
      year: '2024',
      client: 'Private Residence',
      area: '480 m²',
      scope: 'Architecture & Site Masterplanning'
    }
  },

  // --------------------------------------------------------------------------
  // 3. DEMO PROJECT 2 (Temporary - Interior category)
  // --------------------------------------------------------------------------
  {
    id: 'cla-demo-003',
    slug: 'sanctuary-interior-residence',
    title: 'Sanctuary Interior Residence',
    subtitle: 'Tactile Minimalist Living',
    categories: ['interior'],
    location: 'New Delhi, Delhi',
    year: '2024',
    description: 'A serene interior transformation utilizing hand-troweled lime plaster, white oak joinery, and honed travertino stone. Emphasizing acoustic warmth and understated spatial rhythm.',
    editorialText: [
      'Located in New Delhi, this interior renovation reimagines a contemporary apartment as an oasis of stillness amid urban density.',
      'Custom floor-to-ceiling sliding shoji screens framed in pale oak organize the living spaces without rigid isolation. Light passes softly through translucent parchment, casting gentle gradients across raw linen upholstery.',
      'Integrated hidden storage and flush joinery reduce visual noise, allowing the tactile qualities of natural stone and brushed bronze hardware to take precedence.'
    ],
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=85',
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=2000&q=85',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85'
    ],
    published: true,
    isFeatured: true,
    featuredOrder: 3,
    isDemoContent: true, // TEMPORARY DEMO PROJECT
    metadata: {
      location: 'New Delhi, Delhi',
      year: '2024',
      client: 'Private Client',
      area: '290 m²',
      scope: 'Interior Design & Custom Furniture'
    }
  },

  // --------------------------------------------------------------------------
  // 4. DEMO PROJECT 3 (Temporary - Architecture category)
  // --------------------------------------------------------------------------
  {
    id: 'cla-demo-004',
    slug: 'the-strata-courtyard',
    title: 'The Strata Courtyard',
    subtitle: 'Layered Stone & Courtyard Villa',
    categories: ['architecture'],
    location: 'Noida, Uttar Pradesh',
    year: '2023',
    description: 'A sculptural courtyard residence crafted with layered limestone slabs and expansive glass terraces that frame a planted urban landscape.',
    editorialText: [
      'Set within Noida, The Strata Courtyard explores the physical weight and spatial lightness of natural stone around a shaded central court.',
      'Stacked layers of locally sourced quartzite form heavy structural walls, while float-glass enclosures open onto landscaped terraces.',
      'Geothermal climate regulation and integrated solar glazing ensure maximum thermal efficiency while maintaining seamless floor-to-ceiling visual continuity.'
    ],
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85',
      'https://images.unsplash.com/photo-1600566753086-35f13ff07747?auto=format&fit=crop&w=2000&q=85'
    ],
    published: true,
    isFeatured: true,
    featuredOrder: 4,
    isDemoContent: true, // TEMPORARY DEMO PROJECT
    metadata: {
      location: 'Noida, Uttar Pradesh',
      year: '2023',
      client: 'Private Residence',
      area: '540 m²',
      scope: 'Full Architectural Services'
    }
  },

  // --------------------------------------------------------------------------
  // 5. DEMO PROJECT 4 (Temporary - Architecture & Interior)
  // --------------------------------------------------------------------------
  {
    id: 'cla-demo-005',
    slug: 'stone-and-timber-atelier',
    title: 'Stone & Timber Atelier',
    subtitle: 'Creative Workshop & Studio',
    categories: ['architecture', 'interior'],
    location: 'Faridabad, Haryana',
    year: '2023',
    description: 'An architectural studio and gallery retreat built with reclaimed timber, granite masonry, and north-facing sky monitors.',
    editorialText: [
      'Designed as a secluded sanctuary for artistic focus in Faridabad, Stone & Timber Atelier harmonizes heavy timber joinery with refined modern glazing.',
      'High northern sky monitors flood the double-height drawing pavilion with constant diffused daylight, ideal for architectural model crafting and photography.',
      'A massive central granite fireplace provides radiant warmth during winter months, grounding the lofty timber structure with earthy materiality.'
    ],
    heroImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=85',
      'https://images.unsplash.com/photo-1600573472571-6701a520f9a2?auto=format&fit=crop&w=2000&q=85',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=2000&q=85'
    ],
    published: true,
    isFeatured: true,
    featuredOrder: 5,
    isDemoContent: true, // TEMPORARY DEMO PROJECT
    metadata: {
      location: 'Faridabad, Haryana',
      year: '2023',
      client: 'Studio Retreat',
      area: '380 m²',
      scope: 'Architecture & Interior Architecture'
    }
  },

  // --------------------------------------------------------------------------
  // 6. DEMO PROJECT 5 (Interior category)
  // --------------------------------------------------------------------------
  {
    id: 'cla-demo-006',
    slug: 'minimalist-penthouse-loft',
    title: 'Minimalist Penthouse Loft',
    subtitle: 'Urban Horizon Residence',
    categories: ['interior'],
    location: 'Gurugram, Haryana',
    year: '2022',
    description: 'A refined high-floor penthouse featuring continuous polished concrete, matte black metal details, and custom acoustic timber wall linings.',
    editorialText: [
      'Set high above Gurugram, this penthouse transformation converts a raw urban shell into an understated sanctuary.',
      'Clean architectural lines guide the eye toward expansive skyline vistas, while concealed indirect lighting accents the subtle textures of plaster and concrete.',
      'A custom kitchen island carved from a single slab of honed Pietra Carbon marble serves as both functional culinary center and monolithic sculpture.'
    ],
    heroImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85',
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=2000&q=85',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=85'
    ],
    published: true,
    isFeatured: false,
    isDemoContent: true,
    metadata: {
      location: 'Gurugram, Haryana',
      year: '2022',
      client: 'Private Residence',
      area: '310 m²',
      scope: 'Interior Architecture & Bespoke Millwork'
    }
  }
];

// Helper utilities to query project data cleanly
export function getPublishedProjects(): Project[] {
  return projects.filter((p) => p.published);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug && p.published);
}

export function getProjectsByCategory(categoryId: string): Project[] {
  const published = getPublishedProjects();
  if (!categoryId || categoryId === 'all') return published;
  return published.filter((p) => p.categories.includes(categoryId as any));
}

export function getFeaturedProjects(maxCount = 5, orderedSlugs?: string[]): Project[] {
  const published = getPublishedProjects().filter((p) => p.isFeatured && p.heroImage);
  if (orderedSlugs && orderedSlugs.length > 0) {
    const slugMap = new Map(published.map((p) => [p.slug, p]));
    const ordered: Project[] = [];
    for (const slug of orderedSlugs) {
      const proj = slugMap.get(slug);
      if (proj) {
        ordered.push(proj);
      }
    }
    // Add any remaining featured projects if needed up to maxCount
    for (const proj of published) {
      if (!ordered.some((p) => p.id === proj.id) && ordered.length < maxCount) {
        ordered.push(proj);
      }
    }
    return ordered.slice(0, maxCount);
  }
  return published
    .sort((a, b) => (a.featuredOrder || 99) - (b.featuredOrder || 99))
    .slice(0, maxCount);
}

export function getAdjacentProjects(currentSlug: string): { prev?: Project; next?: Project } {
  const published = getPublishedProjects();
  const currentIndex = published.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1) return {};

  const prevIndex = (currentIndex - 1 + published.length) % published.length;
  const nextIndex = (currentIndex + 1) % published.length;

  return {
    prev: published[prevIndex],
    next: published[nextIndex]
  };
}
