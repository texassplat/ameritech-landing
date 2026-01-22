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
  address: 'Denver, CO',
  domain: 'ameritechwindows.com',
  rating: 'BBB A+ Rating',
  reviews: '700+ Five-Star Reviews',
  logo: 'https://www.ameritechwindows.com/wp-content/uploads/2020/04/ameritech_logo_update.png',
  logoAlt: 'Ameritech Windows Logo',
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
    heroImage: 'https://www.ameritechwindows.com/wp-content/uploads/2024/07/window-company-Colorado-1.jpg',
    google: {
      phone: '720-927-9036',
    },
    facebook: {
      phone: '720-927-9036',
    },
    defaultPhone: '720-927-9036',
    features: [
      'Double-Hung & Single-Hung Windows',
      'Casement & Awning Windows',
      'Bay & Bow Windows',
      'Picture & Sliding Windows',
      'Garden & Basement Windows',
      'Skylights & Custom Shapes',
    ],
    metaDescription: '#1 Window Company in Colorado. Save 20% on energy-efficient triple-pane windows with professional installation. BBB A+ Rated. Get a free quote today!',
    promo: currentPromo,
  },
  doors: {
    displayName: 'Doors',
    slug: 'doors',
    headline: 'Top-Rated Door Company in Colorado',
    subheadline: 'Quality entry doors, patio doors, and storm doors designed to withstand Colorado\'s diverse climate. Expert installation by certified professionals.',
    heroImage: 'https://www.ameritechwindows.com/wp-content/uploads/2020/09/entry-door-by-ameritech-windows-september.jpg',
    google: {
      phone: '720-927-9036',
    },
    facebook: {
      phone: '720-927-9036',
    },
    defaultPhone: '720-927-9036',
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
    subheadline: 'Cut your heating and cooling bills by up to 25%. Our reflective barrier and blown-in insulation stops over 97% of radiant heat transfer.',
    heroImage: 'https://www.ameritechwindows.com/wp-content/uploads/2024/11/best-Attic-Insulation.jpg',
    google: {
      phone: '720-927-9036',
    },
    facebook: {
      phone: '720-927-9036',
    },
    defaultPhone: '720-927-9036',
    features: [
      'Reflective Barrier Insulation',
      'Blown-In Attic Insulation',
      'Comprehensive Air Sealing',
      'Save Up to 25% on Energy Bills',
      'Lifetime Warranty - No Maintenance',
      'Free of Dangerous Fibers & Allergens',
    ],
    metaDescription: '#1 Insulation company in Colorado. Attic insulation that cuts energy bills by 25%. Reflective barrier & blown-in options. Free estimates in Boulder & Denver!',
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
