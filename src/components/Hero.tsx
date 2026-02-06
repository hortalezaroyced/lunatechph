import { ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <Zap size={16} />
              <span>Innovation Meets Technology</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Empowering Your
              <span className="text-blue-600"> Digital Future</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Luna Tech PH delivers cutting-edge technology solutions tailored for businesses in the Philippines.
              From web development to cloud infrastructure, we turn your vision into reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>Get Started</span>
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="inline-flex items-center justify-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all"
              >
                <span>Our Services</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-blue-600">100+</div>
                  <div className="text-gray-600 mt-2">Projects</div>
                </div>
                <div className="bg-cyan-50 p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-cyan-600">50+</div>
                  <div className="text-gray-600 mt-2">Clients</div>
                </div>
                <div className="bg-green-50 p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-green-600">5+</div>
                  <div className="text-gray-600 mt-2">Years</div>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold text-orange-600">24/7</div>
                  <div className="text-gray-600 mt-2">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
