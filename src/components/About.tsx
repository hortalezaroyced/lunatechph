import { motion } from "framer-motion";
import { Target, Users, Award, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "Committed to delivering exceptional solutions that drive real business results.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description:
      "Your success is our priority. We build lasting partnerships based on trust.",
  },
  {
    icon: Award,
    title: "Quality First",
    description:
      "We never compromise on quality and follow industry best practices.",
  },
  {
    icon: TrendingUp,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and innovative solutions.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden"
    >

      {/* soft background motion */}

      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 16, repeat: Infinity }}
        className="absolute w-[700px] h-[700px] bg-blue-200 blur-[180px] opacity-20 right-[-200px] top-[-200px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Top Section */}

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">

          {/* Text */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About LunaTech Solutions PH
            </h2>

            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">

              <p>
                Luna Tech PH is a leading technology solutions provider based
                in the Philippines, specializing in custom software development,
                cloud services, and digital transformation.
              </p>

              <p>
                Founded with a vision to empower Filipino businesses with
                world-class technology, we combine local expertise with global
                standards to deliver exceptional results.
              </p>

              <p>
                Our team of experienced developers, designers, and consultants
                work closely with clients to understand their unique challenges
                and create tailored solutions that drive growth and efficiency.
              </p>

            </div>

          </motion.div>


          {/* Why Choose Us Card */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white shadow-xl"
            >

              <h3 className="text-3xl font-bold mb-6">Why Choose Us?</h3>

              <ul className="space-y-4">

                {[
                  "Experienced team with proven track record",
                  "Agile development methodology",
                  "Transparent communication and reporting",
                  "Competitive pricing and flexible packages",
                  "Ongoing support and maintenance",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >

                    <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3"></div>

                    <span>{item}</span>

                  </motion.li>
                ))}

              </ul>

            </motion.div>

          </motion.div>

        </div>


        {/* Values Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {values.map((value, index) => {

            const Icon = value.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition"
              >

                <motion.div
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Icon className="text-blue-600 mb-4" size={40} />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>

                <p className="text-gray-600">
                  {value.description}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}