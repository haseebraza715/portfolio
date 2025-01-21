import React, { useOptimistic } from "react";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import pic from "../images/pfp.jpg";
import pdf from "../images/ResumeHaseeb.pdf";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="bg-[#161b22] text-[#c9d1d9] max-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <div className="max-h-screen px-6 py-6">
        <motion.div
          initial="initial"
          animate="animate"
          transition={{
            staggerChildren: 0.05,
          }}
          className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
        >
          <HeaderBlock />
          <SocialsBlock />
        </motion.div>
      </div>
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-12 rounded-lg border border-[#30363d] bg-[#161b22] p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <img
      src={pic}
      alt="avatar"
      className="mb-4 h-24 w-24 rounded-full border-4 border-[#30363d] object-cover"
    />
    <h1 className="mb-4 text-3xl font-medium leading-tight md:text-4xl">
      Hi, I'm Haseeb.{" "}
      <span className="text-[#8b949e]">
        I build scalable web solutions with modern technologies.
      </span>
    </h1>
    <a
      href="#contact"
      className="flex items-center gap-1 text-[#58a6ff] hover:text-[#f0e68c] hover:underline"
      aria-label="Contact me"
    >
      Contact me <FiArrowRight />
    </a>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-[#21262d] md:col-span-3"
    >
      <a
        href="https://github.com/haseebraza715"
        target="_blank"
        rel="noopener noreferrer"
        className="grid h-full place-content-center text-2xl text-[#c9d1d9]"
        aria-label="GitHub"
      >
        <SiGithub />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-[#238636] md:col-span-3"
    >
      <a
        href="https://linkedin.com/in/haseeb-raza-00a845231"
        target="_blank"
        rel="noopener noreferrer"
        className="grid h-full place-content-center text-2xl text-white"
        aria-label="LinkedIn"
      >
        <SiLinkedin />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-[#0d1117] md:col-span-3"
    >
      <a
        href="https://x.com/HaseebRaza715"
        target="_blank"
        rel="noopener noreferrer"
        className="grid h-full place-content-center text-2xl text-[#c9d1d9]"
        aria-label="Twitter"
      >
        <SiX />
      </a>
    </Block>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.1,
      }}
      className="col-span-6 bg-[#d73a49] md:col-span-3"
    >
      <DownloadButton />
    </Block>
  </>
);

const DownloadButton = () => {
  const [isDownloading, startDownload] = useOptimistic(
    false,
    (state, action) => {
      if (action === "download") return true;
      return state;
    }
  );

  const handleDownload = async () => {
    try {
      startDownload("download");

      // Fetch the resume file
      const response = await fetch(pdf);
      if (!response.ok) {
        throw new Error("Failed to fetch resume");
      }

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Haseeb_Raza_Resume.pdf"); 
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      startDownload("complete");
    } catch (error) {
      console.error("Download failed:", error);
      startDownload("complete");
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="grid h-full place-content-center text-2xl text-white"
      aria-label="Download Resume"
    >
      {isDownloading ? "Downloading..." : <FiDownload />}
    </button>
  );
};

export default Header;
