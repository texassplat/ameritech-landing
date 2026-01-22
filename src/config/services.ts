export type ServiceKey = 'windows' | 'doors' | 'insulation';

export interface SourceConfig {
  phone: string;
  leadPerfectionSource?: string; // Lead Perfection tracking ID
}

export interface ServiceConfig {
  displayName: string;
  slug: ServiceKey;
  headline: string;
  subheadline: string;
  heroImage: string;
  google: SourceConfig;
  facebook: SourceConfig;
  defaultPhone: string;
  features: string[];
  metaDescription: string;
  promo?: {
    title: string;
    subtitle: string;
    expiry?: string;
  };
}

// Company-wide settings for Denver/Colorado location
export const company = {
  name: 'Ameritech Windows',
  tagline: '#1 Door & Window Company in Greater Colorado',
  location: 'Denver',
  state: 'CO',
  address: 'Denver, CO', // TODO: Update with real address
  domain: 'ameritechwindows.com',
  rating: 'BBB A+ Rating',
  reviews: '700+ Five-Star Reviews',
};

// Current promotion - easily update site-wide
export const currentPromo = {
  title: 'SAVE 20% OFF EVERYTHING!',
  subtitle: 'FREE UPGRADE TO TRIPLE PANE',
  financing: '$0 Down • 24 Months No Interest',
  expiry: '2026-02-01',
};

export const services: Record<ServiceKey, ServiceConfig> = {
  windows: {
    displayName: 'Windows',
    slug: 'windows',
    headline: '#1 Window Company in Greater Colorado',
    subheadline: 'Energy-efficient triple-pane windows with professional installation. Save on energy bills and enjoy a more comfortable home.',
    heroImage: '/images/windows-hero.jpg', // TODO: Add actual image
    google: {
      phone: '720-927-9036', // TODO: Replace with Google tracking number
    },
    facebook: {
      phone: '720-927-9036', // TODO: Replace with Facebook tracking number
    },
    defaultPhone: '720-927-9036',
    features: [
      'Free Upgrade to Triple Pane Windows',
      'Fast & Professional Installations',
      'All Services Warrantied',
      '0% Interest Financing for 24 Months',
      'BBB A+ Rating',
      '700+ Five-Star Reviews',
    ],
    metaDescription: '#1 Window Company in Colorado. Save 20% on energy-efficient triple-pane windows with professional installation. BBB A+ Rated. Get a free quote today!',
    promo: currentPromo,
  },
  doors: {
    displayName: 'Doors',
    slug: 'doors',
    headline: 'Top-Rated Door Company in Colorado',
    subheadline: 'Quality entry doors, patio doors, and storm doors designed to withstand Colorado\'s diverse climate. Expert installation by certified professionals.',
    heroImage: '/images/doors-hero.jpg', // TODO: Add actual image
    google: {
      phone: '303-444-1998', // TODO: Replace with Google tracking number
    },
    facebook: {
      phone: '303-444-1998', // TODO: Replace with Facebook tracking number
    },
    defaultPhone: '303-444-1998',
    features: [
      'Entry Doors, Patio Doors & Storm Doors',
      'Wood, Fiberglass & Steel Options',
      'Energy-Efficient & Weather-Resistant',
      'Comprehensive Warranties',
      'Expert Installation by Certified Pros',
      'Wide Variety of Styles & Finishes',
    ],
    metaDescription: 'Top-rated door company in Colorado. Entry doors, patio doors, and more. Built to withstand Colorado weather. Free quotes available!',
    promo: currentPromo,
  },
  insulation: {
    displayName: 'Insulation',
    slug: 'insulation',
    headline: '#1 Insulation Company in Colorado',
    subheadline: 'High-quality insulation to reduce utility costs and maintain comfort throughout seasonal changes. Expert installation in Boulder & Denver.',
    heroImage: '/images/insulation-hero.jpg', // TODO: Add actual image
    google: {
      phone: '303-444-1998', // TODO: Replace with Google tracking number
    },
    facebook: {
      phone: '303-444-1998', // TODO: Replace with Facebook tracking number
    },
    defaultPhone: '303-444-1998',
    features: [
      'Attic, Wall & Crawl Space Insulation',
      'Fiberglass & Spray Foam Options',
      'Basement Insulation Services',
      'Reduces Heat Loss & Utility Costs',
      'Prevents Mold & Mildew Issues',
      'Professional & Courteous Installers',
    ],
    metaDescription: '#1 Insulation company in Colorado. Attic, wall, crawl space & basement insulation. Reduce energy costs. Free estimates in Boulder & Denver!',
    promo: currentPromo,
  },
};

export function getService(key: string): ServiceConfig | null {
  return services[key as ServiceKey] || null;
}

export function isValidService(key: string): key is ServiceKey {
  return key in services;
}

export function getSourceConfig(
  service: ServiceConfig,
  utmSource: string | null
): { phone: string; source: 'google' | 'facebook' | 'default' } {
  if (utmSource?.toLowerCase().includes('facebook') || utmSource?.toLowerCase().includes('fb')) {
    return { phone: service.facebook.phone, source: 'facebook' };
  }
  if (utmSource?.toLowerCase().includes('google') || utmSource?.toLowerCase().includes('gclid')) {
    return { phone: service.google.phone, source: 'google' };
  }
  // Default to main phone for direct/organic traffic
  return { phone: service.defaultPhone, source: 'default' };
}
