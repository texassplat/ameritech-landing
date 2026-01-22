import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { services, getService, getSourceConfig, ServiceKey } from '@/config/services';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import WhyChooseUs from '@/components/WhyChooseUs';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PageTracker from '@/components/PageTracker';

interface PageProps {
  params: Promise<{ service: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { service } = await params;
  const serviceConfig = getService(service);

  if (!serviceConfig) {
    return { title: 'Not Found' };
  }

  return {
    title: `${serviceConfig.displayName} | Ameritech Windows Denver`,
    description: serviceConfig.metaDescription,
    openGraph: {
      title: `${serviceConfig.displayName} | Ameritech Windows Denver`,
      description: serviceConfig.metaDescription,
      images: [serviceConfig.heroImage],
    },
  };
}

export function generateStaticParams() {
  return Object.keys(services).map((service) => ({
    service,
  }));
}

export default async function ServicePage({ params, searchParams }: PageProps) {
  const { service } = await params;
  const searchParamsResolved = await searchParams;

  const serviceConfig = getService(service);

  if (!serviceConfig) {
    notFound();
  }

  // Get utm_source from query params
  const utmSource = typeof searchParamsResolved.utm_source === 'string'
    ? searchParamsResolved.utm_source
    : null;

  const sourceConfig = getSourceConfig(serviceConfig, utmSource);

  return (
    <main className="min-h-screen">
      <PageTracker service={service} source={sourceConfig.source} />
      <Navbar
        phone={sourceConfig.phone}
        serviceName={serviceConfig.displayName}
        serviceKey={service}
        source={sourceConfig.source}
      />

      <Hero
        service={serviceConfig}
        phone={sourceConfig.phone}
        serviceKey={service}
        source={sourceConfig.source}
      />

      <Features service={serviceConfig} />

      <WhyChooseUs />

      <section id="quote" className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Get Your Free Quote
            </h2>
            <p className="text-lg text-gray max-w-2xl mx-auto">
              Ready to get started? Fill out the form below and we&apos;ll get back to you within 24 hours with a free, no-obligation quote.
            </p>
          </div>

          <LeadForm
            serviceKey={service as ServiceKey}
            source={sourceConfig.source}
          />
        </div>
      </section>

      <Footer
        service={serviceConfig}
        phone={sourceConfig.phone}
        serviceKey={service}
        source={sourceConfig.source}
      />
    </main>
  );
}
