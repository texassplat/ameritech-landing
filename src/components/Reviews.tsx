'use client';

import { useEffect, useRef } from 'react';

export default function Reviews() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && !containerRef.current.querySelector('script')) {
      const script = document.createElement('script');
      script.src = 'https://cdn.trustindex.io/loader.js?0dbce716169d787949969389a57';
      script.async = true;
      script.defer = true;
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <section id="reviews" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray max-w-2xl mx-auto">
            Don&apos;t just take our word for it. See what hundreds of satisfied Colorado homeowners have to say.
          </p>
        </div>

        {/* TrustIndex Reviews Widget */}
        <div ref={containerRef} className="trustindex-widget" />
      </div>
    </section>
  );
}
