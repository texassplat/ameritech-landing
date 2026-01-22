const doorTypes = [
  {
    name: 'Patio Doors',
    description: 'Designed to blend seamlessly with your indoor and outdoor living spaces. Choose from sliding, hinged, or French door styles with exceptional insulation and a variety of finishes.',
  },
  {
    name: 'Entry Doors',
    description: 'Make a bold statement with beautiful entry doors. Available in wood, fiberglass, and steel, combining style with strength to enhance curb appeal while providing robust security.',
  },
  {
    name: 'Custom Doors',
    description: 'Looking for something unique? Our custom doors are tailored to your exact specifications—specific design, size, or material, we create a door that fits your vision perfectly.',
  },
  {
    name: 'Storm Doors',
    description: 'Add an extra layer of protection. Designed to shield your entry door from harsh weather while improving energy efficiency, available in a range of styles and colors.',
  },
  {
    name: 'Fiberglass Entry Doors',
    description: 'A popular choice for durability, low maintenance, and excellent insulation. Available in finishes that mimic real wood—beauty and resilience combined.',
  },
  {
    name: 'Replacement Doors',
    description: 'Whether replacing an old door or updating your home\'s look, our replacement doors come in various styles and materials to enhance energy efficiency.',
  },
  {
    name: 'Door Installation',
    description: 'Proper installation is key to performance. Our skilled installers ensure precision fitting that enhances energy efficiency, security, and longevity.',
  },
  {
    name: 'Entry Door Replacement',
    description: 'Is your current entry door outdated or damaged? We provide modern, durable, and stylish solutions that enhance your home\'s appearance and security.',
  },
];

export default function DoorTypes() {
  return (
    <section id="door-types" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Door Services We Offer
          </h2>
          <p className="text-lg text-gray max-w-2xl mx-auto">
            From elegant entry doors to functional storm doors, we offer complete door solutions for every Colorado home.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doorTypes.map((type, index) => (
            <div
              key={index}
              className="bg-light p-6 rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
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
