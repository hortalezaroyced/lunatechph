import { ArrowRight, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {

  const banners = [
    "src/img/banner.jpg",
    "src/img/banner2.jpg",
    "src/img/banner3.jpg"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);

  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (

    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >

      {/* Background slideshow */}

      <AnimatePresence mode="wait">

        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${banners[index]})` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />

      </AnimatePresence>


      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />


      {/* Glow Effects */}

      <div className="absolute top-40 left-20 w-96 h-96 bg-blue-500/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-cyan-400/20 blur-[140px] rounded-full"></div>


      {/* Content */}

      <div className="relative z-10 max-w-4xl px-6">

        {/* Tagline */}

        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-white text-sm mb-8">
          <Zap size={16} />
          Engineering the Future
        </div>


        {/* Headline */}

        <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight leading-tight">
          Empowering Modern
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Digital Businesses
          </span>
        </h1>


        {/* Subtext */}

        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
          LunaTech builds high-performance digital platforms, cloud infrastructure,
          and scalable software solutions for ambitious businesses in the Philippines.
        </p>


        {/* Buttons */}

        <div className="mt-10 flex justify-center gap-5 flex-wrap">

          <button
            onClick={() => scrollToSection("contact")}
            className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-xl transition-all"
          >
            Start a Project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
          </button>


          <button
            onClick={() => scrollToSection("services")}
            className="flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full backdrop-blur-md hover:bg-white/10 transition-all"
          >
            Explore Solutions
          </button>

        </div>

      </div>

    </section>

  );
}
