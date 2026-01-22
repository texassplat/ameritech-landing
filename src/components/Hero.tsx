import Link from 'next/link';
import PhoneLink from './PhoneLink';
import { ServiceConfig, company } from '@/config/services';

interface HeroProps {
  service: ServiceConfig;
  phone: string;
  serviceKey: string;
  source: 'google' | 'facebook' | 'default';
}

export default function Hero({ service, phone, serviceKey, source }: HeroProps) {
  return (
    <>
      {/* Promo Banner */}
      {service.promo && (
        <div className="promo-banner text-white py-3 text-center mt-20">
          <div className="max-w-7xl mx-auto px-4">
            <p className="font-bold text-lg md:text-xl">
              <span className="bg-white/20 px-2 py-1 rounded text-sm uppercase tracking-wide mr-2">Limited Time</span>
              <span className="text-highlight">{service.promo.title}</span>
              {service.promo.subtitle && (
                <>
                  {' '}&bull;{' '}
                  <span>{service.promo.subtitle}</span>
                </>
              )}
              {' '}&bull;{' '}
              <span>{service.promo.financing}</span>
            </p>
          </div>
        </div>
      )}

      <section className="relative min-h-[550px] flex items-center">
        {/* Background Image - TODO: Add actual images */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-gray-800"
          style={{
            backgroundImage: `url(${service.heroImage})`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 text-white">
          <div className="max-w-2xl">
            {/* Trust Badges Row */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Serving {company.location}, {company.state}</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="font-medium">{company.reviews}</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">{company.rating}</span>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {service.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              {service.subheadline}
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {service.features.slice(0, 4).map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm md:text-base">
                  <svg className="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#quote"
                className="bg-secondary hover:bg-secondary-light text-white font-bold px-8 py-4 rounded-lg text-lg text-center transition-colors shadow-lg"
              >
                GET FREE QUOTE
              </Link>
              <PhoneLink
                phone={phone.replace(/-/g, '')}
                service={serviceKey}
                source={source}
                className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg text-center transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                CALL {phone}
              </PhoneLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
