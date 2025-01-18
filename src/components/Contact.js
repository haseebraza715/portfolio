import React from "react";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"; // Icons
import { motion } from "framer-motion"; // For animations

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-h-screen bg-[#161b22] text-[#c9d1d9] py-12 px-6 flex flex-col justify-center items-center"
      aria-labelledby="contact-heading"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h1
          id="contact-heading"
          className="flex justify-center items-center text-5xl font-extrabold md:text-6xl text-[#c9d1d9]"
        >
          Contact
          <span className="text-[#f0e68c] ml-2">.</span>
        </h1>
      </motion.div>

      {/* Content */}
      <div className="text-center max-w-2xl">
        <p className="text-lg text-[#7d8590] mb-8">
          Shoot me an email if you want to connect! You can also find me on
          LinkedIn or Twitter if that's more your speed.
        </p>

        {/* Email Link */}
        <a
          href="mailto:haseebraza715@gmail.com"
          className="inline-flex items-center gap-2 text-[#58a6ff] hover:text-[#f0e68c] transition-colors text-lg mb-8"
        >
          <FaEnvelope size={24} />
          <span>haseebraza715@gmail.com</span>
        </a>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://linkedin.com/in/haseeb-raza-00a845231"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#58a6ff] hover:text-[#f0e68c] transition-colors"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://twitter.com/haseebraza715"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#58a6ff] hover:text-[#f0e68c] transition-colors"
          >
            <FaTwitter size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
