import { Code, Cloud, Smartphone, ShoppingCart, Globe, Database } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies and best practices.',
    color: 'blue'
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android devices.',
    color: 'cyan'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for your business needs.',
    color: 'green'
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description: 'Full-featured online stores with secure payment integration and inventory management.',
    color: 'orange'
  },
  {
    icon: Globe,
    title: 'Digital Marketing',
    description: 'SEO optimization, social media marketing, and digital strategy consulting.',
    color: 'pink'
  },
  {
    icon: Database,
    title: 'Database Solutions',
    description: 'Database design, optimization, and management for optimal performance.',
    color: 'purple'
  }
];

const colorClasses = {
  blue: 'from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-700',
  cyan: 'from-cyan-500 to-cyan-600 group-hover:from-cyan-600 group-hover:to-cyan-700',
  green: 'from-green-500 to-green-600 group-hover:from-green-600 group-hover:to-green-700',
  orange: 'from-orange-500 to-orange-600 group-hover:from-orange-600 group-hover:to-orange-700',
  pink: 'from-pink-500 to-pink-600 group-hover:from-pink-600 group-hover:to-pink-700',
  purple: 'from-violet-500 to-violet-600 group-hover:from-violet-600 group-hover:to-violet-700'
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions designed to help your business thrive in the digital age
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${colorClasses[service.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center mb-6 transition-all duration-300`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
