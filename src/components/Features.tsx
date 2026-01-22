import { ServiceConfig } from '@/config/services';

interface FeaturesProps {
  service: ServiceConfig;
}

export default function Features({ service }: FeaturesProps) {
  return (
    <section id="features" className="py-16 bg-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Our {service.displayName} Services
          </h2>
          <p className="text-lg text-gray max-w-2xl mx-auto">
            We provide top-quality {service.displayName.toLowerCase()} solutions backed by expert installation and outstanding customer service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-dark font-medium">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
