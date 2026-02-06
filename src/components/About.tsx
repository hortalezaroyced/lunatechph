import { Target, Users, Award, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'Committed to delivering exceptional solutions that drive real business results.'
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'Your success is our priority. We build lasting partnerships based on trust.'
  },
  {
    icon: Award,
    title: 'Quality First',
    description: 'We never compromise on quality and follow industry best practices.'
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'Staying ahead with the latest technologies and innovative solutions.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Luna Tech PH
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Luna Tech PH is a leading technology solutions provider based in the Philippines,
                specializing in custom software development, cloud services, and digital transformation.
              </p>
              <p>
                Founded with a vision to empower Filipino businesses with world-class technology,
                we combine local expertise with global standards to deliver exceptional results.
              </p>
              <p>
                Our team of experienced developers, designers, and consultants work closely with
                clients to understand their unique challenges and create tailored solutions that
                drive growth and efficiency.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3"></div>
                  <span>Experienced team with proven track record</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3"></div>
                  <span>Agile development methodology</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3"></div>
                  <span>Transparent communication and reporting</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3"></div>
                  <span>Competitive pricing and flexible packages</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3"></div>
                  <span>Ongoing support and maintenance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Icon className="text-blue-600 mb-4" size={40} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
