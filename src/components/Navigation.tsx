import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const links = [
    { id: "home", label: "Home" },
    { id: "services", label: "Solutions" },
    { id: "about", label: "Company" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 backdrop-blur-xl bg-white/60 border-b border-gray-200/40"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

        <div className="flex items-center gap-3">
          <img src="src/img/luna-tech.png" className="h-10"/>
          <span className="font-semibold tracking-tight text-gray-900">
            LunaTech Solutions PH
          </span>
        </div>

        <div className="hidden md:flex gap-8 text-sm text-gray-700">
          {links.map(link => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="hover:text-black transition"
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X/> : <Menu/>}
        </button>

      </div>
    </motion.nav>
  );
}
