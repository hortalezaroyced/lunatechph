import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Brands() {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start","end end"]
  });

  /* PHONE ZOOM */
  const scale = useTransform(scrollYProgress,[0,0.35],[3.8,0.95]);
  const y = useTransform(scrollYProgress,[0,0.35],[-380,0]);

  /* TEXT */
  const textOpacity = useTransform(scrollYProgress,[0.4,0.5],[0,1]);
  const textY = useTransform(scrollYProgress,[0.4,0.5],[30,0]);

  /* BUTTONS */
  const btnOpacity = useTransform(scrollYProgress,[0.5,0.6],[0,1]);

  /* SCREEN CROSSFADE */
  const mapOpacity = useTransform(scrollYProgress,[0,0.3,0.35],[1,1,0]);
  const chatOpacity = useTransform(scrollYProgress,[0.3,0.45,0.55],[0,1,0]);
  const profileOpacity = useTransform(scrollYProgress,[0.55,0.7],[0,1]);

  return (

    <section ref={ref} className="relative h-[340vh] bg-black text-white">

      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

        {/* Soft glow */}
        <div className="absolute w-[900px] h-[900px] bg-red-600 blur-[240px] opacity-15"/>

        {/* PHONE */}
        <motion.div
          style={{ scale, y }}
          className="relative w-[360px] md:w-[460px] aspect-[9/19] rounded-[40px] overflow-hidden"
        >

          {/* MAP */}
          <motion.img
            src="src/img/sozialme-map.png"
            style={{ opacity: mapOpacity }}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* CHAT */}
          <motion.img
            src="src/img/sozialme-chat.png"
            style={{ opacity: chatOpacity }}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* PROFILE */}
          <motion.img
            src="src/img/sozialme-profile.png"
            style={{ opacity: profileOpacity }}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Soft reflection */}
          <motion.div
            animate={{ x:["-120%","120%"] }}
            transition={{ duration:12, repeat:Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          />

          {/* Phone frame */}
          <img
            src="https://assets.website-files.com/5e8b3a8d0c9c4b4d4c1b3f2b/64c8e0f3a5d9d5b8d9b5b3f1_iphone-frame.png"
            className="absolute inset-0 w-full h-full pointer-events-none"
          />

        </motion.div>

        {/* TEXT */}
        <motion.div
          style={{ opacity:textOpacity, y:textY }}
          className="absolute left-12 md:left-24 top-[32%] max-w-md"
        >

          <p className="text-sm tracking-widest text-gray-400 uppercase mb-6">
            Featured Project
          </p>

          <h2 className="text-5xl md:text-6xl font-semibold mb-6">
            SozialMe
          </h2>

          <p className="text-lg text-gray-300">
            A location-based social platform engineered with scalable
            infrastructure and cross-platform mobile technology.
          </p>

        </motion.div>

        {/* STORE BADGES */}
        <motion.div
          style={{ opacity:btnOpacity }}
          className="absolute right-12 md:right-24 top-[32%] flex flex-col gap-6"
        >

          <a
            href="https://apps.apple.com/us/app/sozialme/id6469687476"
            target="_blank"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              className="h-14 hover:scale-105 transition"
            />
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.sozialme"
            target="_blank"
          >
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              className="h-16 hover:scale-105 transition"
            />
          </a>

        </motion.div>

      </div>

    </section>
  );
}
