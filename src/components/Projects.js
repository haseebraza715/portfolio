import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Icons for GitHub and Demo

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#161b22] text-[#c9d1d9] py-12 px-4 sm:px-6"
    >
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="flex justify-center items-center text-4xl sm:text-5xl font-extrabold md:text-6xl text-[#c9d1d9]">
          Projects
          <span className="text-[#f0e68c] ml-2">.</span>
        </h1>
      </div>

      {/* Projects Grid */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Multi-Agent Recruitment System */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#21262d] p-4 sm:p-6 rounded-lg border border-[#30363d] hover:border-[#58a6ff] transition-all relative"
        >
          {/* Featured Tag */}
          <span className="absolute top-4 right-4 bg-[#58a6ff] text-[#161b22] px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </span>

          <h2 className="text-xl sm:text-2xl font-bold text-[#8b949e] mb-2 pr-16">
            Multi-Agent Recruitment System
          </h2>
          <p className="text-base sm:text-lg text-[#7d8590] mb-4">
            An AI-driven recruitment system that automates candidate evaluation,
            filtering, and outreach using multiple agents. Features include
            resume scoring, personalized messaging, and feedback learning.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {["Python", "Flask", "NLP", "API Integration", "JSON"].map(
              (tech) => (
                <span
                  key={tech}
                  className="bg-[#161b22] text-[#c9d1d9] px-3 py-1 rounded-md text-sm font-medium"
                >
                  {tech}
                </span>
              )
            )}
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/haseebraza715/multi_agent_recruitment_system"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#58a6ff] hover:underline flex items-center gap-2"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </motion.div>

        {/* Emotion-Based Movie Recommendation System */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#21262d] p-4 sm:p-6 rounded-lg border border-[#30363d] hover:border-[#58a6ff] transition-all"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-[#8b949e] mb-2">
            Emotion-Based Movie Recommendation System
          </h2>
          <p className="text-base sm:text-lg text-[#7d8590] mb-4">
            A Flask-based movie recommendation system that suggests movies based
            on emotional impact. It uses NLP to analyze user reviews and
            categorize movies into emotional types.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {["Python", "Flask", "NLP", "TMDb API", "HTML", "CSS"].map(
              (tech) => (
                <span
                  key={tech}
                  className="bg-[#161b22] text-[#c9d1d9] px-3 py-1 rounded-md text-sm font-medium"
                >
                  {tech}
                </span>
              )
            )}
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/haseebraza715/Emotion-Based-Movie-Recommendation-System"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#58a6ff] hover:underline flex items-center gap-2"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </motion.div>

        {/* Personal Blog Admin Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#21262d] p-4 sm:p-6 rounded-lg border border-[#30363d] hover:border-[#58a6ff] transition-all"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-[#8b949e] mb-2">
            Personal Blog Admin Dashboard
          </h2>
          <p className="text-base sm:text-lg text-[#7d8590] mb-4">
            A Flask-based web application for managing blog content. Features
            include article creation, editing, deletion, tag filtering, and
            comment management.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {["Flask", "Python", "HTML", "CSS", "Bootstrap", "JSON"].map(
              (tech) => (
                <span
                  key={tech}
                  className="bg-[#161b22] text-[#c9d1d9] px-3 py-1 rounded-md text-sm font-medium"
                >
                  {tech}
                </span>
              )
            )}
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/haseebraza715/Personal_Blog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#58a6ff] hover:underline flex items-center gap-2"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </motion.div>

        {/* Pomodoro Timer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-[#21262d] p-4 sm:p-6 rounded-lg border border-[#30363d] hover:border-[#58a6ff] transition-all"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-[#8b949e] mb-2">
            Pomodoro Timer
          </h2>
          <p className="text-base sm:text-lg text-[#7d8590] mb-4">
            A modern, responsive Pomodoro Timer app built with React. It helps
            users manage tasks, work sessions, and breaks effectively.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {["React", "JavaScript", "HTML", "CSS"].map((tech) => (
              <span
                key={tech}
                className="bg-[#161b22] text-[#c9d1d9] px-3 py-1 rounded-md text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/haseebraza715/Pomodoro-Timer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#58a6ff] hover:underline flex items-center gap-2"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://haseebraza715.github.io/Pomodoro-Timer/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#58a6ff] hover:underline flex items-center gap-2"
            >
              <FaExternalLinkAlt /> Demo
            </a>
          </div>
        </motion.div>

        {/* Digital Note-Taker */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-[#21262d] p-4 sm:p-6 rounded-lg border border-[#30363d] hover:border-[#58a6ff] transition-all"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-[#8b949e] mb-2">
            Digital Note-Taker
          </h2>
          <p className="text-base sm:text-lg text-[#7d8590] mb-4">
            A simple, responsive note-taking web application with local storage
            support. Users can create, edit, delete, and organize notes with
            tags.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {["React", "JavaScript", "HTML", "CSS", "LocalStorage"].map(
              (tech) => (
                <span
                  key={tech}
                  className="bg-[#161b22] text-[#c9d1d9] px-3 py-1 rounded-md text-sm font-medium"
                >
                  {tech}
                </span>
              )
            )}
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/haseebraza715/digital-note-taker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#58a6ff] hover:underline flex items-center gap-2"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://haseebraza715.github.io/digital-note-taker/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#58a6ff] hover:underline flex items-center gap-2"
            >
              <FaExternalLinkAlt /> Demo
            </a>
          </div>
        </motion.div>

        {/* Task Tracker */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-[#21262d] p-4 sm:p-6 rounded-lg border border-[#30363d] hover:border-[#58a6ff] transition-all"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-[#8b949e] mb-2">
            Task Tracker
          </h2>
          <p className="text-base sm:text-lg text-[#7d8590] mb-4">
            A simple yet efficient Task Tracker with light and dark modes. Users
            can manage tasks with options to add, delete, mark as complete, and
            bulk edit.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {["JavaScript", "HTML", "CSS", "LocalStorage"].map((tech) => (
              <span
                key={tech}
                className="bg-[#161b22] text-[#c9d1d9] px-3 py-1 rounded-md text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/haseebraza715/Task_Tracker_JS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#58a6ff] hover:underline flex items-center gap-2"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://haseebraza715.github.io/Task_Tracker_JS/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#58a6ff] hover:underline flex items-center gap-2"
            >
              <FaExternalLinkAlt /> Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
