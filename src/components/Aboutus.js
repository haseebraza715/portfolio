import React from "react";
import { motion } from "framer-motion";
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa"; // Icons for skills
import {
  SiJavascript,
  SiTailwindcss,
  SiSpringboot,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiPhp,
} from "react-icons/si"; // Additional icons

const AboutUs = () => {
  return (
    <section
      id="AboutUs"
      className="min-h-screen bg-[#161b22] text-[#c9d1d9] py-12 px-6"
      aria-labelledby="about-heading"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1
          id="about-heading"
          className="flex justify-center items-center text-5xl font-extrabold md:text-6xl text-[#c9d1d9]"
        >
          About
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
        {/* Introduction */}
        <Block>
          <p className="text-lg leading-relaxed md:text-xl">
            Hi, I'm{" "}
            <span className="font-bold text-[#8b949e]">Haseeb Raza</span>. I am
            currently pursuing a Bachelor's in Computer Science at{" "}
            <span className="text-[#58a6ff] font-semibold">
              Eötvös Loránd University
            </span>{" "}
            in Budapest, Hungary. My expertise spans across modern technologies
            such as <span className="text-[#58a6ff]">Java</span>,{" "}
            <span className="text-[#58a6ff]">Python</span>,{" "}
            <span className="text-[#58a6ff]">HTML</span>,{" "}
            <span className="text-[#58a6ff]">CSS</span>,{" "}
            <span className="text-[#58a6ff]">JavaScript</span>,{" "}
            <span className="text-[#58a6ff]">React.js</span>, and{" "}
            <span className="text-[#58a6ff]">TailwindCSS</span>. I have hands-on
            experience working with SQL databases to manage and query data
            effectively.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            My work focuses on designing responsive, scalable, and optimized web
            applications with an emphasis on clean and maintainable code. During
            my tenure at WaseerHost, I contributed to designing and developing
            responsive, user-friendly websites using HTML, CSS, and JavaScript.
            My work involved optimizing website performance, achieving a
            reduction in load times through clean coding practices and image
            optimization. I also collaborated closely with clients to deliver
            custom CMS-based solutions that aligned with their business
            objectives. Additionally, I worked on designing interactive
            components and enhancing the user experience, ensuring both
            functionality and aesthetic appeal.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            My technical toolkit also includes{" "}
            <span className="text-[#58a6ff]">Spring Boot</span> for backend
            development, <span className="text-[#58a6ff]">MongoDB</span> and{" "}
            <span className="text-[#58a6ff]">PostgreSQL</span> for database
            management, and <span className="text-[#58a6ff]">Git</span> for
            version control. I actively seek to expand my knowledge in areas
            such as API development, cloud computing, and software scalability.
            Beyond coding, I actively mentor international students and
            participate in community events like the Tech Jobs Fair. I thrive on
            learning and collaborating with others to make a meaningful impact.
          </p>
        </Block>

        {/* Skills Section */}
        <Block className="mt-8">
          <h3 className="text-2xl font-bold text-[#8b949e] mb-4">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Java */}
            <div className="flex flex-col items-center text-center">
              <FaJava className="text-4xl text-[#58a6ff]" />
              <span className="mt-2 text-sm">Java</span>
            </div>
            {/* Python */}
            <div className="flex flex-col items-center text-center">
              <FaPython className="text-4xl text-[#58a6ff]" />
              <span className="mt-2 text-sm">Python</span>
            </div>
            {/* HTML */}
            <div className="flex flex-col items-center text-center">
              <FaHtml5 className="text-4xl text-[#58a6ff]" />
              <span className="mt-2 text-sm">HTML</span>
            </div>
            {/* CSS */}
            <div className="flex flex-col items-center text-center">
              <FaCss3Alt className="text-4xl text-[#58a6ff]" />
              <span className="mt-2 text-sm">CSS</span>
            </div>
            {/* JavaScript */}
            <div className="flex flex-col items-center text-center">
              <SiJavascript className="text-4xl text-[#58a6ff]" />
              <span className="mt-2 text-sm">JavaScript</span>
            </div>
            {/* React */}
            <div className="flex flex-col items-center text-center">
              <FaReact className="text-4xl text-[#58a6ff]" />
              <span className="mt-2 text-sm">React</span>
            </div>
            {/* TailwindCSS */}
            <div className="flex flex-col items-center text-center">
              <SiTailwindcss className="text-4xl text-[#58a6ff]" />
              <span className="mt-2 text-sm">TailwindCSS</span>
            </div>
            {/* Spring Boot */}
            <div className="flex flex-col items-center text-center">
              <SiSpringboot className="text-4xl text-[#58a6ff]" />
              <span className="mt-2 text-sm">Spring Boot</span>
            </div>
            {/* PostgreSQL */}
            <div className="flex flex-col items-center text-center">
              <SiPostgresql className="text-4xl text-[#58a6ff]" />
              <span className="mt-2 text-sm">PostgreSQL</span>
            </div>
            {/* MongoDB */}
            <div className="flex flex-col items-center text-center">
              <SiMongodb className="text-4xl text-[#58a6ff]" />
              <span className="mt-2 text-sm">MongoDB</span>
            </div>
            {/* Git */}
            <div className="flex flex-col items-center text-center">
              <SiGit className="text-4xl text-[#58a6ff]" />
              <span className="mt-2 text-sm">Git</span>
            </div>
            {/* PHP */}
            <div className="flex flex-col items-center text-center">
              <SiPhp className="text-4xl text-[#58a6ff]" />
              <span className="mt-2 text-sm">PHP</span>
            </div>
          </div>
        </Block>
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

export default AboutUs;
