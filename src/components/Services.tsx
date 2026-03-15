import { motion } from "framer-motion";
import { Code, Cloud, Smartphone, ShoppingCart, Database } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Beautiful mobile apps designed for iOS and Android with modern frameworks.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Secure and scalable cloud systems that power modern digital businesses.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Platforms",
    description:
      "Custom online stores optimized for performance, conversion, and growth.",
  },
  {
    icon: Database,
    title: "Data Architecture",
    description:
      "Reliable databases and scalable data systems built for modern applications.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 bg-white overflow-hidden">

      {/* soft animated background */}

      <motion.div
        animate={{ y:[0,-40,0] }}
        transition={{ duration:16, repeat:Infinity }}
        className="absolute w-[700px] h-[700px] bg-blue-200 blur-[160px] opacity-20 left-[-200px] top-[-200px]"
      />

      <div className="max-w-6xl mx-auto px-6 relative">

        {/* Header */}

        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.8 }}
          viewport={{ once:true }}
          className="text-center mb-24"
        >

          <p className="text-blue-600 font-semibold mb-4">
            Solutions
          </p>

          <h2 className="text-6xl font-bold tracking-tight mb-6">
            Technology Built
            <br />
            for Modern Businesses
          </h2>

          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            LunaTech designs scalable software, cloud infrastructure,
            and digital platforms for ambitious companies.
          </p>

        </motion.div>

        {/* Featured Web Platforms */}

        <div className="mb-20">

          <div className="group relative bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-3xl p-14 overflow-hidden">

            <Code size={40} className="mb-6"/>

            <h3 className="text-3xl font-bold mb-4">
              Web Platforms
            </h3>

            <p className="text-lg text-blue-100 max-w-xl">
              High-performance websites and digital platforms built
              for scale, speed, and modern user experiences.
            </p>

            {/* Browser preview */}

            <motion.div
              initial={{ opacity:0, y:80 }}
              whileHover={{ opacity:1, y:0 }}
              transition={{ duration:0.5 }}
              className="absolute right-12 bottom-[-140px] group-hover:bottom-12 transition-all duration-500"
            >

              <div className="w-[320px] bg-white rounded-xl shadow-2xl overflow-hidden">

                <div className="flex gap-2 p-3 bg-gray-100">
                  <div className="w-3 h-3 bg-red-500 rounded-full"/>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"/>
                  <div className="w-3 h-3 bg-green-500 rounded-full"/>
                </div>

                <div className="p-4 space-y-3">

                  <div className="h-4 bg-gray-200 rounded w-3/4"/>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-16 bg-blue-100 rounded"/>
                    <div className="h-16 bg-blue-100 rounded"/>
                    <div className="h-16 bg-blue-100 rounded"/>
                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

        {/* Service Grid */}

        <div className="grid md:grid-cols-2 gap-8">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity:0, y:40 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ delay:index * 0.15 }}
                viewport={{ once:true }}
                whileHover={{ y:-6 }}
                className="group relative border border-gray-200 rounded-3xl p-10 hover:shadow-xl transition overflow-hidden"
              >

                <motion.div
                  whileHover={{ rotate:10 }}
                  transition={{ type:"spring", stiffness:200 }}
                >
                  <Icon size={30} className="text-blue-600 mb-6"/>
                </motion.div>

                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600">
                  {service.description}
                </p>

                {/* Mobile preview */}

                {service.title === "Mobile Applications" && (
                  <motion.img
                    src="src/img/sozialme-profile.png"
                    initial={{ opacity:0, y:80 }}
                    whileHover={{ opacity:1, y:0 }}
                    className="absolute right-6 bottom-[-140px] w-[160px] rounded-xl shadow-xl group-hover:bottom-6 transition-all duration-500"
                  />
                )}

                {/* Cloud animation */}

                {service.title === "Cloud Infrastructure" && (
                  <motion.div
                    initial={{ opacity:0 }}
                    whileHover={{ opacity:1 }}
                    className="absolute right-6 bottom-6 flex gap-2"
                  >
                    <motion.div animate={{ y:[0,-10,0] }} transition={{ repeat:Infinity }} className="w-8 h-8 bg-blue-200 rounded-full"/>
                    <motion.div animate={{ y:[0,-14,0] }} transition={{ repeat:Infinity, delay:0.2 }} className="w-8 h-8 bg-blue-300 rounded-full"/>
                    <motion.div animate={{ y:[0,-8,0] }} transition={{ repeat:Infinity, delay:0.4 }} className="w-8 h-8 bg-blue-400 rounded-full"/>
                  </motion.div>
                )}

                {/* Ecommerce preview */}

                {service.title === "E-Commerce Platforms" && (
                  <motion.div
                    initial={{ opacity:0, y:60 }}
                    whileHover={{ opacity:1, y:0 }}
                    className="absolute right-6 bottom-6 grid grid-cols-2 gap-2"
                  >
                    <div className="w-16 h-16 bg-gray-200 rounded"/>
                    <div className="w-16 h-16 bg-gray-200 rounded"/>
                    <div className="w-16 h-16 bg-gray-200 rounded"/>
                    <div className="w-16 h-16 bg-gray-200 rounded"/>
                  </motion.div>
                )}

                {/* Data preview */}

                {service.title === "Data Architecture" && (
                  <motion.div
                    initial={{ opacity:0, y:60 }}
                    whileHover={{ opacity:1, y:0 }}
                    className="absolute right-6 bottom-6 w-[160px] h-[80px] bg-gray-100 rounded p-2"
                  >
                    <div className="h-3 bg-blue-400 rounded mb-2 w-3/4"/>
                    <div className="h-3 bg-blue-300 rounded mb-2 w-1/2"/>
                    <div className="h-3 bg-blue-200 rounded w-2/3"/>
                  </motion.div>
                )}

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}
