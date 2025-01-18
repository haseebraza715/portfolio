import React from "react";
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 p-8 text-center border-t border-zinc-800">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-lg text-[#e5e3d9] mb-4"
      >
        Made with ❤️ by <span className="text-red-300">Haseeb Raza</span>
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center gap-6"
      >
        <a
          href="https://github.com/haseebraza715"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#e5e3d9] hover:text-[#f9f9f7] transition-colors duration-300"
        >
          <SiGithub className="text-2xl hover:scale-110 transition-transform" />
        </a>
        <a
          href="https://linkedin.com/in/haseeb-raza-00a845231"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#e5e3d9] hover:text-[#f9f9f7] transition-colors duration-300"
        >
          <SiLinkedin className="text-2xl hover:scale-110 transition-transform" />
        </a>
        <a
          href="https://twitter.com/haseebraza"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#e5e3d9] hover:text-[#f9f9f7] transition-colors duration-300"
        >
          <SiX className="text-2xl hover:scale-110 transition-transform" />
        </a>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-sm text-[#e5e3d9] mt-4"
      >
        © {new Date().getFullYear()} Haseeb Raza. All rights reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;
