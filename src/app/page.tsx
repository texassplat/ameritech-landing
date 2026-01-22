import Link from 'next/link';
import { services, company } from '@/config/services';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-light">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            {company.name}
          </h1>
          <p className="text-xl text-gray">
            Serving {company.location}, {company.state}
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {Object.values(services).map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 text-center group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                {service.slug === 'windows' && (
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 12h16M12 4v16" />
                  </svg>
                )}
                {service.slug === 'doors' && (
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                )}
                {service.slug === 'insulation' && (
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                )}
              </div>
              <h2 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                {service.displayName}
              </h2>
              <p className="text-gray text-sm">
                {service.subheadline}
              </p>
            </Link>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-gray mt-8">
          Visit our service-specific pages for detailed information and to request a free quote.
        </p>
      </div>
    </main>
  );
}
