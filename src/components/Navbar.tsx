'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PhoneLink from './PhoneLink';
import { company } from '@/config/services';

interface NavbarProps {
  phone: string;
  serviceName: string;
  serviceKey: string;
  source: 'google' | 'facebook' | 'default';
}

export default function Navbar({ phone, serviceName, serviceKey, source }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [queryString, setQueryString] = useState('');

  // Capture query params on mount to preserve UTM params in nav links
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.toString()) {
      setQueryString('?' + params.toString());
    }
  }, []);

  // Build link with preserved query params
  const buildLink = (hash: string) => `/${queryString}${hash}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={buildLink('')} className="flex items-center">
            <Image
              src={company.logo}
              alt={company.logoAlt}
              width={200}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href={buildLink('#features')}
              className="text-dark hover:text-primary font-medium transition-colors"
            >
              {serviceName}
            </Link>
            <Link
              href={buildLink('#why-us')}
              className="text-dark hover:text-primary font-medium transition-colors"
            >
              Why Choose Us
            </Link>
            <Link
              href={buildLink('#quote')}
              className="text-dark hover:text-primary font-medium transition-colors"
            >
              Get Quote
            </Link>
          </div>

          {/* Phone CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs text-gray">Call Now - {company.location}</p>
              <PhoneLink
                phone={phone.replace(/-/g, '')}
                service={serviceKey}
                source={source}
                className="text-xl font-bold text-primary hover:text-primary-dark transition-colors"
              >
                {phone}
              </PhoneLink>
            </div>
            <Link
              href={buildLink('#quote')}
              className="btn-gradient text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition-shadow"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-dark"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link
                href={buildLink('#features')}
                className="text-dark hover:text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {serviceName}
              </Link>
              <Link
                href={buildLink('#why-us')}
                className="text-dark hover:text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Choose Us
              </Link>
              <Link
                href={buildLink('#quote')}
                className="text-dark hover:text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
              <hr />
              <PhoneLink
                phone={phone.replace(/-/g, '')}
                service={serviceKey}
                source={source}
                className="text-xl font-bold text-primary text-center py-2"
              >
                Call: {phone}
              </PhoneLink>
              <Link
                href={buildLink('#quote')}
                className="btn-gradient text-white font-semibold px-6 py-3 rounded-lg text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
