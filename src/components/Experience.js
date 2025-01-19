import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      className="min-h-screen bg-[#161b22] text-[#c9d1d9] py-12 px-6"
      aria-labelledby="experience-heading"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 sm:mb-12" // Adjusted margin for mobile and desktop
      >
        <h1
          id="experience-heading"
          className="flex justify-center items-center text-4xl sm:text-5xl font-extrabold md:text-6xl text-[#c9d1d9]"
        >
          Experience
          <span className="text-[#f0e68c] ml-2">.</span>
        </h1>
      </motion.div>

      {/* Content */}
      <motion.div
        initial="initial"
        animate="animate"
        transition={{ staggerChildren: 0.1 }}
        className="mx-auto max-w-7xl"
      >
        {/* Experience Section */}
        <article className="space-y-6" aria-label="Experience">
          <Block>
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div>
                <h2 className="text-2xl font-bold mb-2 text-[#8b949e]">
                  WaseerHost
                </h2>
                <h3 className="text-xl font-medium mb-4">Web Intern</h3>
              </div>
              <div className="text-right">
                <p className="text-[#7d8590]">2020 - 2022</p>
                <p className="text-[#7d8590]">Pakistan</p>
              </div>
            </div>
            <p className="text-lg leading-relaxed">
              During my time at WaseerHost, I played a key role in optimizing
              website performance, achieving a significant reduction in load
              times, which enhanced the user experience. I collaborated closely
              with clients to design and deliver user-friendly, CMS-based
              websites tailored to their needs. My responsibilities extended
              beyond backend optimization to include working on the frontend
              design, where I leveraged HTML, CSS, and JavaScript to create
              visually appealing and interactive components. This blend of
              technical expertise and design focus enabled me to craft
              responsive, aesthetically pleasing, and highly functional web
              solutions.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "WordPress",
                "Elementor",
                "SEO",
                "Web Design",
                "Web Development",
                "Performance Optimization",
                "Responsive Design",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-[#21262d] text-[#c9d1d9] px-3 py-1 rounded-md text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Block>
        </article>
      </motion.div>
    </section>
  );
};

const Block = ({ className, children }) => {
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 50, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
      className={`rounded-lg border border-[#30363d] bg-[#161b22] p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Experience;
