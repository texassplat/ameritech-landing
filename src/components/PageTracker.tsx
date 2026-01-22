'use client';

import { useEffect } from 'react';

interface PageTrackerProps {
  service: string;
  source: 'google' | 'facebook' | 'default';
}

export default function PageTracker({ service, source }: PageTrackerProps) {
  useEffect(() => {
    // Track page visit
    fetch('/api/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'page_visit',
        service,
        source,
        fullUrl: window.location.href,
        referrer: document.referrer,
        userAgent: navigator.userAgent,
      }),
    }).catch(() => {
      // Silently fail
    });
  }, [service, source]);

  return null;
}
