const windowTypes = [
  {
    name: 'Double-Hung Windows',
    description: 'Two operable sashes that slide vertically. Easy to clean and maintain with versatile design.',
  },
  {
    name: 'Casement Windows',
    description: 'Hinged on the side, opening outward. Great ventilation with a strong seal for energy efficiency.',
  },
  {
    name: 'Bay & Bow Windows',
    description: 'Extend outward creating expansive views. Adds architectural character and increases natural light.',
  },
  {
    name: 'Picture Windows',
    description: 'Large fixed windows framing outdoor views. Unobstructed views, energy-efficient, low maintenance.',
  },
  {
    name: 'Sliding Windows',
    description: 'Move horizontally along tracks with modern aesthetic. Easy operation and minimal maintenance.',
  },
  {
    name: 'Awning Windows',
    description: 'Hinged at top, opening outward. Can operate during light rain with good ventilation.',
  },
  {
    name: 'Garden Windows',
    description: 'Project outward with shelf space for plants. Extra display space with increased natural light.',
  },
  {
    name: 'Basement & Hopper Windows',
    description: 'Ideal for basements and tight spaces. Secure, energy-efficient, and budget-friendly.',
  },
];

export default function WindowTypes() {
  return (
    <section id="window-types" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Window Types We Install
          </h2>
          <p className="text-lg text-gray max-w-2xl mx-auto">
            From classic double-hung to custom shapes, we offer a complete selection of replacement windows for every Colorado home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {windowTypes.map((type, index) => (
            <div
              key={index}
              className="bg-light p-6 rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 12h16M12 4v16" />
                </svg>
              </div>
              <h3 className="font-semibold text-dark mb-2">{type.name}</h3>
              <p className="text-sm text-gray">{type.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
