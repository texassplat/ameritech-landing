const insulationServices = [
  {
    name: 'Reflective Barrier Insulation',
    description: 'Stops over 97% of radiant heat transfer using technology similar to space suits. Reflects heat away in summer, keeps it in during winter.',
  },
  {
    name: 'Blown-In Insulation',
    description: 'Uniform coverage that fills every gap and corner of your attic. Creates a consistent thermal barrier throughout your home.',
  },
  {
    name: 'Air Sealing',
    description: 'Comprehensive sealing of gaps and cracks that let conditioned air escape. Eliminates drafts and improves overall efficiency.',
  },
  {
    name: 'Attic Caps',
    description: 'Additional thermal barrier option for maximum energy savings. Works with other insulation for complete protection.',
  },
];

const benefits = [
  {
    title: 'Save Up to 25%',
    description: 'On heating and cooling bills',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Lifetime Warranty',
    description: 'Never needs replacement',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Prevents Ice Dams',
    description: 'No more winter roof damage',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Allergen Free',
    description: 'No dangerous fibers',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export default function InsulationTypes() {
  return (
    <section id="insulation-services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Our Insulation Solutions
          </h2>
          <p className="text-lg text-gray max-w-2xl mx-auto">
            A complete system designed to maximize your home&apos;s energy efficiency and comfort year-round.
          </p>
        </div>

        {/* Benefits Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-primary/5 p-4 rounded-xl text-center"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 text-primary">
                {benefit.icon}
              </div>
              <h3 className="font-bold text-dark">{benefit.title}</h3>
              <p className="text-sm text-gray">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insulationServices.map((service, index) => (
            <div
              key={index}
              className="bg-light p-6 rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-dark mb-2">{service.name}</h3>
              <p className="text-sm text-gray">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
