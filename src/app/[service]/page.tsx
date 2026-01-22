import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { services, getService, getSourceConfig, ServiceKey } from '@/config/services';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import WindowTypes from '@/components/WindowTypes';
import DoorTypes from '@/components/DoorTypes';
import InsulationTypes from '@/components/InsulationTypes';
import Gallery from '@/components/Gallery';
import WhyChooseUs from '@/components/WhyChooseUs';
import Reviews from '@/components/Reviews';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PageTracker from '@/components/PageTracker';
import { windowsGallery, doorsGallery, insulationGallery } from '@/config/gallery';
import TrustBadges from '@/components/TrustBadges';

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

  const ogImage = 'https://www.ameritechwindows.com/wp-content/uploads/2020/04/Ameritech-Windows-triple-pane-windows-in-Denver.jpg';

  return {
    title: serviceConfig.displayName,
    description: serviceConfig.metaDescription,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: 'Ameritech Windows',
      title: `${serviceConfig.displayName} | Ameritech Windows Denver`,
      description: serviceConfig.metaDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 792,
          alt: `Ameritech Windows ${serviceConfig.displayName} services in Denver, Colorado`,
        },
      ],
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

      <TrustBadges />

      {service !== 'doors' && <Features service={serviceConfig} />}

      {service === 'windows' && <WindowTypes />}
      {service === 'doors' && <DoorTypes />}
      {service === 'insulation' && <InsulationTypes />}

      {service === 'windows' && (
        <Gallery
          title="Our Window Projects"
          subtitle="See the transformation. Browse before and after photos of our window installations across Colorado."
          images={windowsGallery}
        />
      )}

      {service === 'doors' && (
        <Gallery
          title="Our Door Projects"
          subtitle="From entry doors to patio doors, see our quality craftsmanship in action."
          images={doorsGallery}
        />
      )}

      {service === 'insulation' && (
        <Gallery
          title="Our Insulation Projects"
          subtitle="See how proper insulation transforms homes and improves energy efficiency."
          images={insulationGallery}
        />
      )}

      <WhyChooseUs />

      <Reviews />

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
