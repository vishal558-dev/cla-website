export type CategoryId = 'all' | 'architecture' | 'interior';

export interface Category {
  id: CategoryId;
  name: string;
  slug: string;
  description?: string;
}

export interface ProjectMetadata {
  location: string;
  year: string;
  client?: string;
  typology?: string;
  area?: string;
  scope?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  categories: CategoryId[];
  location: string;
  year: string;
  description: string;
  editorialText?: string[]; // Multiple paragraphs for rich project narrative
  heroImage: string;
  galleryImages: string[];
  published: boolean;
  isFeatured: boolean;
  featuredOrder?: number;
  isDemoContent?: boolean; // Flag to easily distinguish and remove temporary demo projects later
  metadata?: ProjectMetadata;
}

export interface SiteConfig {
  brand: {
    name: string; // 'cla'
    fullName: string; // 'Creative Layers Architects'
    tagline?: string;
    establishedYear: number;
    logoDark?: string;
    logoLight?: string;
    symbolDark?: string;
    symbolLight?: string;
    logoOriginal?: string;
  };
  homepage: {
    heroProjectSlug: string; // First real CLA project
    heroBackgroundImage?: string; // Optional override for landing hero background
    featuredProjectSlugs: string[]; // Slugs of 4-5 featured projects in manual order
    aboutIntroText: string;
    contactCta: {
      heading: string;
      subheading?: string;
      buttonText: string;
    };
  };
  settings: {
    projectGridLayout: 'uniform-grid' | 'editorial-two-column';
    featuredCountMax: number;
    enableServicesSection: boolean; // Future toggle
    enableAwardsSection: boolean; // Future toggle
    enableTeamSection: boolean; // Future toggle
    enableFounderSection: boolean; // Future toggle
  };
  contact: {
    address: {
      line1: string;
      line2: string;
      city: string;
      country: string;
    };
    phone: string;
    phoneFormatted: string;
    email: string;
    whatsappNumber: string; // e.g. "1234567890" for wa.me link
    whatsappLink: string;
    googleMapsUrl: string;
    googleMapsEmbedUrl?: string;
    officeHours?: string;
  };
  social: {
    instagram?: string;
    linkedin?: string;
    pinterest?: string;
  };
  meta: {
    defaultTitle: string;
    defaultDescription: string;
    siteUrl: string;
  };
}
