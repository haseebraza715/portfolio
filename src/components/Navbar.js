import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for mobile menu

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  // Smooth scrolling for anchor links
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveLink(id);
      setMobileMenuOpen(false); // Close mobile menu after clicking a link
    }
  };

  // Highlight active link on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "AboutUs", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveLink(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-[#161b22] text-[#c9d1d9] shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Branding */}
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "home")}
          className="text-3xl font-extrabold tracking-wider hover:text-[#f0e68c] transition-colors"
        >
          H<span className="text-[#f0e68c]">.</span>
        </a>

        {/* Desktop Navbar Links */}
        <ul className="hidden md:flex items-center gap-8 text-md font-medium">
          <li>
            <a
              href="#AboutUs"
              onClick={(e) => handleScroll(e, "AboutUs")}
              className={`relative ${
                activeLink === "AboutUs" ? "text-[#f0e68c]" : "text-[#c9d1d9]"
              } hover:text-[#f0e68c] transition-colors duration-300`}
            >
              About
              <span
                className={`absolute left-0 bottom-0 h-[2px] w-full ${
                  activeLink === "AboutUs" ? "bg-[#f0e68c]" : "bg-transparent"
                } transition-all duration-300`}
              ></span>
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, "projects")}
              className={`relative ${
                activeLink === "projects" ? "text-[#f0e68c]" : "text-[#c9d1d9]"
              } hover:text-[#f0e68c] transition-colors duration-300`}
            >
              Projects
              <span
                className={`absolute left-0 bottom-0 h-[2px] w-full ${
                  activeLink === "projects" ? "bg-[#f0e68c]" : "bg-transparent"
                } transition-all duration-300`}
              ></span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "contact")}
              className={`relative ${
                activeLink === "contact" ? "text-[#f0e68c]" : "text-[#c9d1d9]"
              } hover:text-[#f0e68c] transition-colors duration-300`}
            >
              Contact
              <span
                className={`absolute left-0 bottom-0 h-[2px] w-full ${
                  activeLink === "contact" ? "bg-[#f0e68c]" : "bg-transparent"
                } transition-all duration-300`}
              ></span>
            </a>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl text-[#c9d1d9] hover:text-[#f0e68c] transition-colors"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Navbar Links */}
        {isMobileMenuOpen && (
          <ul className="md:hidden absolute top-16 left-0 right-0 bg-[#161b22] text-center py-4 shadow-lg">
            <li className="py-2">
              <a
                href="#AboutUs"
                onClick={(e) => handleScroll(e, "AboutUs")}
                className={`block ${
                  activeLink === "AboutUs" ? "text-[#f0e68c]" : "text-[#c9d1d9]"
                } hover:text-[#f0e68c] transition-colors`}
              >
                About
              </a>
            </li>
            <li className="py-2">
              <a
                href="#projects"
                onClick={(e) => handleScroll(e, "projects")}
                className={`block ${
                  activeLink === "projects"
                    ? "text-[#f0e68c]"
                    : "text-[#c9d1d9]"
                } hover:text-[#f0e68c] transition-colors`}
              >
                Projects
              </a>
            </li>
            <li className="py-2">
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "contact")}
                className={`block ${
                  activeLink === "contact" ? "text-[#f0e68c]" : "text-[#c9d1d9]"
                } hover:text-[#f0e68c] transition-colors`}
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
