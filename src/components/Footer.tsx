import PhoneLink from './PhoneLink';
import { ServiceConfig, company } from '@/config/services';

interface FooterProps {
  service: ServiceConfig;
  phone: string;
  serviceKey: string;
  source: 'google' | 'facebook' | 'default';
}

export default function Footer({ service, phone, serviceKey, source }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{company.name}</h3>
            <p className="text-gray-400 mb-4">
              {service.displayName} specialists serving {company.location}, {company.state} and surrounding areas.
            </p>
            <a
              href={company.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors flex items-start gap-2"
            >
              <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>{company.address}</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Our {service.displayName}
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-gray-400 hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#quote" className="text-gray-400 hover:text-white transition-colors">
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <PhoneLink
                phone={phone.replace(/-/g, '')}
                service={serviceKey}
                source={source}
                className="flex items-center gap-2 text-secondary hover:text-secondary-light transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-lg font-semibold">{phone}</span>
              </PhoneLink>
              <p className="text-gray-400 text-sm">
                {company.hours.weekday}<br />
                {company.hours.saturday}<br />
                {company.hours.sunday}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} {company.name}. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
