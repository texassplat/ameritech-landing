'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ServiceKey } from '@/config/services';

// Zapier webhook URL - set in environment variable
const ZAPIER_WEBHOOK_URL = process.env.NEXT_PUBLIC_ZAPIER_WEBHOOK_URL || '';

interface LeadFormProps {
  serviceKey: ServiceKey;
  source: 'google' | 'facebook' | 'default';
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zip: string;
  projectType: string;
  message: string;
}

export default function LeadForm({ serviceKey, source }: LeadFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    projectType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    // Preserve UTM params for thank-you page
    const currentParams = new URLSearchParams(window.location.search);
    const thankYouUrl = `/thank-you${currentParams.toString() ? '?' + currentParams.toString() : ''}`;

    try {
      // Send to Zapier webhook
      if (ZAPIER_WEBHOOK_URL) {
        await fetch(ZAPIER_WEBHOOK_URL, {
          method: 'POST',
          mode: 'no-cors', // Zapier webhooks don't support CORS
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            service: serviceKey,
            source,
            fullUrl: window.location.href,
            submittedAt: new Date().toISOString(),
            utmSource: currentParams.get('utm_source') || '',
            utmMedium: currentParams.get('utm_medium') || '',
            utmCampaign: currentParams.get('utm_campaign') || '',
          }),
        });
      }

      // Also track locally for analytics
      fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'form_submission',
          service: serviceKey,
          source,
          fullUrl: window.location.href,
        }),
      }).catch(() => {}); // Fire and forget

      // Redirect to thank-you page
      router.push(thankYouUrl);
    } catch (error) {
      console.error('Form submission error:', error);
      setErrorMessage('Something went wrong. Please try again or call us directly.');
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        {errorMessage && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
            {errorMessage}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-dark mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
              placeholder="John"
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-dark mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
              placeholder="Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
              placeholder="john@example.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
              placeholder="(303) 555-0100"
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label htmlFor="address" className="block text-sm font-medium text-dark mb-2">
              Street Address *
            </label>
            <input
              type="text"
              id="address"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
              placeholder="123 Main Street"
            />
          </div>

          {/* City */}
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-dark mb-2">
              City *
            </label>
            <input
              type="text"
              id="city"
              name="city"
              required
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
              placeholder="Denver"
            />
          </div>

          {/* ZIP */}
          <div>
            <label htmlFor="zip" className="block text-sm font-medium text-dark mb-2">
              ZIP Code *
            </label>
            <input
              type="text"
              id="zip"
              name="zip"
              required
              value={formData.zip}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
              placeholder="80202"
            />
          </div>

          {/* Project Type */}
          <div className="md:col-span-2">
            <label htmlFor="projectType" className="block text-sm font-medium text-dark mb-2">
              Select Your Project *
            </label>
            <select
              id="projectType"
              name="projectType"
              required
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition bg-white"
            >
              <option value="">Select your Project</option>
              <option value="Win">Windows</option>
              <option value="Bay/Bow">Bay/Bow Windows</option>
              <option value="Bsmt">Basement Windows</option>
              <option value="Garden">Garden Windows</option>
              <option value="EDoor">Entry Door</option>
              <option value="FDoor">French Door</option>
              <option value="SGD">Sliding Glass Door</option>
              <option value="SD">Storm Door</option>
              <option value="ES">Eshield/Insulation</option>
              <option value="Att">Attic Insulation</option>
              <option value="Sid">Siding</option>
            </select>
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
              Additional Details (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
              placeholder="Tell us about your project..."
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-6 btn-gradient text-white font-semibold px-8 py-4 rounded-lg text-lg hover:shadow-lg transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Get My Free Quote'}
        </button>

        <p className="text-center text-sm text-gray mt-4">
          By submitting this form, you agree to be contacted about your project.
        </p>
      </div>
    </form>
  );
}
