import { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  brand: {
    name: 'cla',
    fullName: 'Creative Layers Architects',
    establishedYear: 2018,
  },
  homepage: {
    // The hero image uses the first real CLA project
    heroProjectSlug: 'pavilion-in-the-oaks',
    
    // Slugs of projects featured in the homepage slider (5 projects, ordered manually)
    featuredProjectSlugs: [
      'pavilion-in-the-oaks',
      'monolith-house-retreat',
      'sanctuary-interior-residence',
      'the-strata-courtyard',
      'stone-and-timber-atelier'
    ],
    
    // Homepage short About introduction (2-3 lines of realistic minimal placeholder copy)
    aboutIntroText:
      'Creative Layers Architects is a multi-disciplinary architecture and interior design studio dedicated to spatial purity, tactile materiality, and contextual resonance. We craft quiet, enduring spaces where light, proportion, and texture intersect.',
    
    // Minimal, typography-led Contact CTA section
    contactCta: {
      heading: "Let’s create something together.",
      subheading: "We welcome discussions for bespoke residential, commercial, and spatial inquiries globally.",
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
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.250320708571!2d-122.40428468439363!3d37.76818197976077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7f2b1d6e1dbb%3A0x6b1f2e1a12345678!2sDesign%20District%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus',
    officeHours: 'Monday – Friday: 09:00 – 18:00 PST',
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
