'use client';

const badges = [
  {
    name: 'BBB Accredited Business',
    image: 'https://www.ameritechwindows.com/wp-content/uploads/2024/07/Better-Business-Bureau-Symbol-300x169.png',
  },
  {
    name: 'HomeAdvisor Screened & Approved',
    image: 'https://www.ameritechwindows.com/wp-content/uploads/2024/07/Home-Advisor-Logo.png',
  },
  {
    name: 'Quality Business Awards 2024 Winner',
    image: 'https://www.ameritechwindows.com/wp-content/uploads/2024/08/Best-Window-Installation-2024-Award-300x300.jpg',
  },
  {
    name: 'Lead-Safe Certified Firm',
    image: 'https://www.ameritechwindows.com/wp-content/uploads/2024/07/lead-safe-certified-firm.png',
  },
  {
    name: 'Energy Star',
    image: 'https://www.ameritechwindows.com/wp-content/uploads/2024/07/Energy_Star_logo.svg.png',
  },
  {
    name: 'NARI Member',
    image: 'https://www.ameritechwindows.com/wp-content/uploads/2024/07/NARI-Logo-1.png',
  },
  {
    name: 'Made in the USA',
    image: 'https://www.ameritechwindows.com/wp-content/uploads/2024/07/made_in_the_usa_with_pride-1.png',
  },
  {
    name: 'Angi',
    image: 'https://www.ameritechwindows.com/wp-content/uploads/2025/09/angi-logo-1-300x183.png',
  },
  {
    name: 'Best of 2025',
    image: 'https://www.ameritechwindows.com/wp-content/uploads/2025/09/2025-excellence-badge-1-300x284.png',
  },
];

export default function TrustBadges() {
  // Double the badges for seamless infinite scroll
  const allBadges = [...badges, ...badges];

  return (
    <div className="relative -mt-8 z-20">
      <div className="bg-white shadow-lg rounded-2xl mx-4 md:mx-8 lg:mx-auto lg:max-w-6xl py-6 overflow-hidden">
        <div className="trust-badges-slider">
          <div className="trust-badges-track">
            {allBadges.map((badge, index) => (
              <div
                key={index}
                className="trust-badge-item flex-shrink-0 px-6"
              >
                <img
                  src={badge.image}
                  alt={badge.name}
                  className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
