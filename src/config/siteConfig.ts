import { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  brand: {
    name: 'cla',
    fullName: 'Creative Layers Architects',
    tagline: 'creating places for people',
    establishedYear: 2018,
    logoDark: '/images/cla-logo-dark.png',
    logoLight: '/images/cla-logo-light.png',
    symbolDark: '/images/cla-symbol-dark.png',
    symbolLight: '/images/cla-symbol-light.png',
    logoOriginal: '/images/cla-logo-original.png',
  },
  homepage: {
    // The hero image uses the Command Control Centre night time facade
    heroProjectSlug: 'command-control-centre',
    heroBackgroundImage: '/images/projects/command-control-centre/command-control-centre-night.png',
    
    // Slugs of projects featured in the homepage slider (ordered manually)
    featuredProjectSlugs: [
      'command-control-centre',
      'pavilion-in-the-oaks',
      'monolith-house-retreat',
      'sanctuary-interior-residence',
      'the-strata-courtyard'
    ],
    
    // Homepage short About introduction (2-3 lines of realistic minimal placeholder copy)
    aboutIntroText:
      'Creative Layers Architects is a multi-disciplinary architecture and interior design studio dedicated to spatial purity, tactile materiality, and contextual resonance. We craft quiet, enduring spaces where light, proportion, and texture intersect.',
    
    // Minimal, typography-led Contact CTA section
    contactCta: {
      heading: "Let’s create something together.",
      subheading: "We welcome discussions for bespoke residential, commercial, and spatial inquiries across Delhi NCR and India.",
      buttonText: 'Get in touch',
    },
  },
  settings: {
    projectGridLayout: 'uniform-grid', // Can easily be switched to 'editorial-two-column'
    featuredCountMax: 5,
    enableServicesSection: false, // Ready for future expansion
    enableAwardsSection: false,   // Ready for future expansion
    enableTeamSection: false,     // Ready for future expansion
    enableFounderSection: false,  // Ready for future expansion
  },
  contact: {
    address: {
      line1: 'C-17, Sector 34',
      line2: 'Noida, 201301',
      city: 'Noida, Uttar Pradesh',
      country: 'India',
    },
    phone: '+91 9810774709',
    phoneFormatted: '+919810774709',
    email: 'creativelayers.ai@gmail.com',
    whatsappNumber: '+919810774709',
    whatsappLink: 'https://wa.me/919810774709?text=Hello%20CLA%20Team%2C%20I%20would%20like%20to%20discuss%20a%20project.',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=28.581335%2C77.364180',
    googleMapsEmbedUrl: 'https://maps.google.com/maps?q=28.581335,77.364180&hl=en&z=15&output=embed',
    officeHours: 'Monday – Friday: 09:00 – 18:00 IST',
  },
  social: {
    instagram: 'https://instagram.com/creativelayersarchitects',
    linkedin: 'https://linkedin.com/company/creative-layers-architects',
    pinterest: 'https://pinterest.com/creativelayersarchitects',
  },
  meta: {
    defaultTitle: 'cla — Creative Layers Architects',
    defaultDescription: 'Creative Layers Architects — Minimal luxury architecture, interior design, and spatial design portfolio.',
    siteUrl: 'https://creativelayers.arch',
  },
};
