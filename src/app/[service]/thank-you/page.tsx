import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getService, company } from '@/config/services';

interface PageProps {
  params: Promise<{ service: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ThankYouPage({ params, searchParams }: PageProps) {
  const { service } = await params;
  const searchParamsResolved = await searchParams;

  const serviceConfig = getService(service);

  if (!serviceConfig) {
    notFound();
  }

  // Preserve query params for the return link
  const queryString = Object.entries(searchParamsResolved)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => `${key}=${encodeURIComponent(String(value))}`)
    .join('&');

  const returnLink = queryString ? `/?${queryString}` : '/';

  return (
    <main className="min-h-screen flex items-center justify-center bg-light">
      <div className="max-w-lg mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-dark mb-4">
            Thank You!
          </h1>

          {/* Message */}
          <p className="text-lg text-gray mb-6">
            We&apos;ve received your request for a free {serviceConfig.displayName.toLowerCase()} quote.
            One of our specialists will contact you within 24 hours.
          </p>

          {/* What to expect */}
          <div className="bg-light rounded-lg p-6 mb-6 text-left">
            <h2 className="font-semibold text-dark mb-3">What happens next?</h2>
            <ul className="space-y-2 text-gray">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>A specialist will call to discuss your project</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>We&apos;ll schedule a free in-home consultation</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>You&apos;ll receive a detailed, no-obligation quote</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <p className="text-sm text-gray mb-6">
            Questions? Call us at{' '}
            <a href={`tel:${serviceConfig.defaultPhone.replace(/-/g, '')}`} className="text-primary font-semibold hover:underline">
              {serviceConfig.defaultPhone}
            </a>
          </p>

          {/* Return Link */}
          <Link
            href={returnLink}
            className="inline-block btn-primary text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition-shadow"
          >
            Return to {company.name}
          </Link>
        </div>
      </div>
    </main>
  );
}
