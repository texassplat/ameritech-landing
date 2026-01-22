const doorTypes = [
  {
    name: 'Patio Doors',
    description: 'Designed to blend seamlessly with your indoor and outdoor living spaces. Choose from sliding, hinged, or French door styles with exceptional insulation and a variety of finishes.',
    icon: (
      <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 4h8v16H3V4zm2 2v12h4V6H5zm10-2h8v16h-8V4zm2 2v12h4V6h-4zM11 10h2v4h-2v-4z"/>
      </svg>
    ),
  },
  {
    name: 'Entry Doors',
    description: 'Make a bold statement with beautiful entry doors. Available in wood, fiberglass, and steel, combining style with strength to enhance curb appeal while providing robust security.',
    icon: (
      <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 2h12v20H6V2zm2 2v16h8V4H8zm5 7a1 1 0 110 2 1 1 0 010-2z"/>
      </svg>
    ),
  },
  {
    name: 'Custom Doors',
    description: 'Looking for something unique? Our custom doors are tailored to your exact specifications—specific design, size, or material, we create a door that fits your vision perfectly.',
    icon: (
      <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 2h12v20H6V2zm2 2v16h8V4H8zm4-2a6 6 0 016 6h-2a4 4 0 00-4-4V2zm0 6a1 1 0 110 2 1 1 0 010-2z"/>
      </svg>
    ),
  },
  {
    name: 'Door Installation',
    description: 'Proper installation is key to performance. Our skilled installers ensure precision fitting that enhances energy efficiency, security, and longevity.',
    icon: (
      <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6-1.6 1.6a1 1 0 101.4 1.4l2.3-2.3a1 1 0 000-1.4l-2.3-2.3a1 1 0 00-1.4 0zM9.3 17.7a1 1 0 000-1.4L7.7 14.7l1.6-1.6a1 1 0 10-1.4-1.4l-2.3 2.3a1 1 0 000 1.4l2.3 2.3a1 1 0 001.4 0zM6 2h12v2H6v18h12v2H4V2h2z"/>
      </svg>
    ),
  },
  {
    name: 'Storm Doors',
    description: 'Add an extra layer of protection. Designed to shield your entry door from harsh weather while improving energy efficiency, available in a range of styles and colors.',
    icon: (
      <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 2h12v20H6V2zm2 2v16h8V4H8zm5 4l-3 5h2l-1 5 4-6h-2.5L14 8h-1z"/>
      </svg>
    ),
  },
  {
    name: 'Entry Door Replacement',
    description: 'Is your current entry door outdated or damaged? We provide modern, durable, and stylish solutions that enhance your home\'s appearance and security.',
    icon: (
      <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 2h12v20H6V2zm2 2v16h8V4H8zm5 7a1 1 0 110 2 1 1 0 010-2zM4 11h2v2H4v-2zm14 0h2v2h-2v-2z"/>
      </svg>
    ),
  },
  {
    name: 'Fiberglass Entry Doors',
    description: 'A popular choice for durability, low maintenance, and excellent insulation. Available in finishes that mimic real wood—beauty and resilience combined.',
    icon: (
      <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 2h12v20H6V2zm2 2v16h8V4H8zm2 2h4v3h-4V6zm0 5h4v3h-4v-3zm5 2a1 1 0 110 2 1 1 0 010-2z"/>
      </svg>
    ),
  },
  {
    name: 'Replacement Doors',
    description: 'Whether replacing an old door or updating your home\'s look, our replacement doors come in various styles and materials to enhance energy efficiency.',
    icon: (
      <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 2h12v20H6V2zm2 2v16h8V4H8zm4 3a4 4 0 014 4h-2a2 2 0 00-2-2V7zm0 4a1 1 0 110 2 1 1 0 010-2z"/>
      </svg>
    ),
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
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                {type.icon}
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
