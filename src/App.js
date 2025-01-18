import React from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Aboutus from "./components/Aboutus";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <Header />

      <div className="pt-16 bg-[#161b22]">
        <Aboutus />
      </div>

      <Experience />

      <Projects />
      <Contact />
    </div>
  );
}

export default App;
