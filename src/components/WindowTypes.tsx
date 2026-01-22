import Image from 'next/image';

const windowTypes = [
  {
    name: 'Double-Hung',
    description: 'Easy to open at either top or bottom, traditionally the most popular choice.',
    image: 'https://www.ameritechwindows.com/wp-content/uploads/2019/08/Double-Hung-Replacement-Window-.png',
  },
  {
    name: 'Slider',
    description: 'A double-sided window that allows both sashes to slide horizontally.',
    image: 'https://www.ameritechwindows.com/wp-content/uploads/2019/08/2-Section-Slider-Replacement-Window-.png',
  },
  {
    name: 'Casement',
    description: 'These windows are hinged at the side. Very air-tight and comes with internal screen.',
    image: 'https://www.ameritechwindows.com/wp-content/uploads/2019/08/Casement-Replacement-Window-.png',
  },
  {
    name: 'Awning',
    description: 'Opens outward using a top hinge.',
    image: 'https://www.ameritechwindows.com/wp-content/uploads/2019/08/Awning-Replacement-Window-.png',
  },
  {
    name: 'Hopper',
    description: 'Typically used for basement windows. Opens inward and comes with external screen.',
    image: 'https://www.ameritechwindows.com/wp-content/uploads/2019/08/Hopper-Replacement-Window-1-1.png',
  },
  {
    name: 'Picture',
    description: 'Usually a bigger size window that lets in lots of natural light, does not open.',
    image: 'https://www.ameritechwindows.com/wp-content/uploads/2019/08/Picture-Replacement-Window-.png',
  },
  {
    name: 'Bay',
    description: 'Three windows side by side to create a beautiful look.',
    image: 'https://www.ameritechwindows.com/wp-content/uploads/2019/08/Bay-Replacement-Window-.png',
  },
  {
    name: 'Bow',
    description: 'Three or more windows put together in a way that flows.',
    image: 'https://www.ameritechwindows.com/wp-content/uploads/2019/08/Bow-Replacement-Window-.png',
  },
  {
    name: 'Garden',
    description: 'A three-dimensional look, using casement windows on the side.',
    image: 'https://www.ameritechwindows.com/wp-content/uploads/2019/08/Garden-Replacement-Window-.png',
  },
];

const specialShapeWindows = [
  {
    name: 'Eyebrow',
    image: 'https://www.ameritechwindows.com/wp-content/uploads/2019/08/Eyebrow-Replacement-Window-.png',
  },
  {
    name: 'Half Round',
    image: 'https://www.ameritechwindows.com/wp-content/uploads/2019/08/Half-Round-Replacement-Window-.png',
  },
  {
    name: 'Octagon',
    image: 'https://www.ameritechwindows.com/wp-content/uploads/2019/08/Octagon-Replacement-Window-.png',
  },
  {
    name: 'Quarter Round',
    image: 'https://www.ameritechwindows.com/wp-content/uploads/2019/08/Quarter-Round-Replacement-Window.png',
  },
  {
    name: 'Round With Legs',
    image: 'https://www.ameritechwindows.com/wp-content/uploads/2019/08/Round-w_-Legs-Replacement-Window.png',
  },
  {
    name: 'Trapezoid',
    image: 'https://www.ameritechwindows.com/wp-content/uploads/2019/08/Trapazoid-Replacement-Window.png',
  },
];

export default function WindowTypes() {
  return (
    <section id="window-types" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Explore Our Different Types of Replacement Windows
          </h2>
          <p className="text-lg text-gray max-w-3xl mx-auto">
            Whatever kind of windows you need on your Colorado home, Ameritech has the experience and resources to install the very best quality for you.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {windowTypes.map((type, index) => (
            <div
              key={index}
              className="bg-light p-6 rounded-xl hover:shadow-lg transition-shadow text-center"
            >
              <div className="h-32 flex items-center justify-center mb-4">
                <img
                  src={type.image}
                  alt={`${type.name} replacement window`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-dark text-lg mb-2">{type.name}</h3>
              <p className="text-sm text-gray">{type.description}</p>
            </div>
          ))}
        </div>

        {/* Special Shape Windows */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-dark text-center mb-8">
            Special Shape Windows
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {specialShapeWindows.map((type, index) => (
              <div
                key={index}
                className="bg-light p-4 rounded-xl hover:shadow-md transition-shadow text-center"
              >
                <div className="h-20 flex items-center justify-center mb-3">
                  <img
                    src={type.image}
                    alt={`${type.name} window`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h4 className="font-medium text-dark text-sm">{type.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
