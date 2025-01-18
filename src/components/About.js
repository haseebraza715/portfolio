import React from "react";
import { motion } from "framer-motion";
import {
  FiBook,
  FiCode,
  FiBriefcase,
  FiAward,
  FiGlobe,
  FiUsers,
} from "react-icons/fi";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-zinc-900 p-8 rounded-lg shadow-2xl border border-zinc-800 max-w-6xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-[#f9f9f7] mb-12 text-center">
        About Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Education */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-lg border border-zinc-700 hover:border-[#e5e3d9] transition-all backdrop-blur-sm"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-zinc-700 rounded-full">
              <FiBook className="text-2xl text-[#e5e3d9]" />
            </div>
            <h3 className="text-xl font-semibold text-[#f9f9f7]">Education</h3>
          </div>
          <p className="text-lg text-[#e5e3d9]">
            Currently pursuing a{" "}
            <strong>Bachelor's degree in Computer Science</strong> at{" "}
            <strong>Eötvös Loránd University</strong>, Budapest, Hungary.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-lg border border-zinc-700 hover:border-[#e5e3d9] transition-all backdrop-blur-sm"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-zinc-700 rounded-full">
              <FiCode className="text-2xl text-[#e5e3d9]" />
            </div>
            <h3 className="text-xl font-semibold text-[#f9f9f7]">Skills</h3>
          </div>
          <p className="text-lg text-[#e5e3d9]">
            Proficient in <strong>React</strong>, <strong>Tailwind CSS</strong>,{" "}
            <strong>Node.js</strong>, and modern web technologies. Experienced
            in <strong>Python</strong>, <strong>Java</strong>, and{" "}
            <strong>SQL</strong>.
          </p>
        </motion.div>

        {/* Experience */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-lg border border-zinc-700 hover:border-[#e5e3d9] transition-all backdrop-blur-sm"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-zinc-700 rounded-full">
              <FiBriefcase className="text-2xl text-[#e5e3d9]" />
            </div>
            <h3 className="text-xl font-semibold text-[#f9f9f7]">Experience</h3>
          </div>
          <p className="text-lg text-[#e5e3d9]">
            Web Intern at <strong>WaseerHost</strong> (2020–2022). Designed and
            developed responsive websites using <strong>HTML</strong>,{" "}
            <strong>CSS</strong>, <strong>JavaScript</strong>, and{" "}
            <strong>WordPress</strong>.
          </p>
        </motion.div>

        {/* Achievements */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-lg border border-zinc-700 hover:border-[#e5e3d9] transition-all backdrop-blur-sm"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-zinc-700 rounded-full">
              <FiAward className="text-2xl text-[#e5e3d9]" />
            </div>
            <h3 className="text-xl font-semibold text-[#f9f9f7]">
              Achievements
            </h3>
          </div>
          <p className="text-lg text-[#e5e3d9]">
            Recipient of the <strong>Stipendium Hungaricum Scholarship</strong>{" "}
            (2022) and <strong>PEEF Scholarship</strong> (2018).
          </p>
        </motion.div>

        {/* Languages */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-lg border border-zinc-700 hover:border-[#e5e3d9] transition-all backdrop-blur-sm"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-zinc-700 rounded-full">
              <FiGlobe className="text-2xl text-[#e5e3d9]" />
            </div>
            <h3 className="text-xl font-semibold text-[#f9f9f7]">Languages</h3>
          </div>
          <p className="text-lg text-[#e5e3d9]">
            Fluent in <strong>English</strong>, <strong>Urdu</strong>, and{" "}
            <strong>Punjabi</strong>. Basic proficiency in{" "}
            <strong>Hungarian</strong>.
          </p>
        </motion.div>

        {/* Organizations */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-lg border border-zinc-700 hover:border-[#e5e3d9] transition-all backdrop-blur-sm"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-zinc-700 rounded-full">
              <FiUsers className="text-2xl text-[#e5e3d9]" />
            </div>
            <h3 className="text-xl font-semibold text-[#f9f9f7]">
              Organizations
            </h3>
          </div>
          <p className="text-lg text-[#e5e3d9]">
            Volunteer at <strong>Tech Jobs Fair</strong> and Student Mentor at{" "}
            <strong>HÖOK</strong>, helping international students adapt to
            Hungary.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
