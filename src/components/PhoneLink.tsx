'use client';

import { ReactNode } from 'react';

interface PhoneLinkProps {
  phone: string;
  service: string;
  source: 'google' | 'facebook' | 'default';
  children: ReactNode;
  className?: string;
}

export default function PhoneLink({ phone, service, source, children, className }: PhoneLinkProps) {
  const handleClick = async () => {
    try {
      // Fire and forget - don't block the call
      fetch('/api/track', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'phone_click',
          service,
          source,
          phoneNumber: phone,
          fullUrl: window.location.href,
        }),
      }).catch(() => {
        // Silently fail
      });
    } catch {
      // Silently fail - don't block the phone call
    }
  };

  return (
    <a
      href={`tel:${phone}`}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}
