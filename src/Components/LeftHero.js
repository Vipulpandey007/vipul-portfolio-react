import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";
import { motion } from "framer-motion";
import resume from "../File/Vipul_Resume.pdf";
const LeftHero = () => {
  const [text] = useTypewriter({
    words: ["Web Developer.", "React Developer.", "Front-End Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.div
      className="w-full lgl:w-1/2 flex flex-col gap-20 mt-10"
      variants={textVariants}
      initial="initial"
      animate="animate"
    >
      <div className="flex flex-col gap-5 dark:text-white">
        <h4 className=" text-lg font-normal">WELCOME TO MY Profile</h4>
        <h1 className="text-4xl font-bold ">
          Hi, I'm&nbsp;
          <span className="text-designColor capitalize">
            Vipul Kumar Pandey
          </span>
        </h1>
        <h2 className="text-4xl font-bold">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I use React to develop performace, large scalable, modular, and
          animated websites that will make user experience good.
        </p>
      </div>
      <Media />
      <div>
        <a href={resume} download="Vipul_Resume.pdf">
          <span className="w-40 h-16 shadow-2xl shadow-black dark:shadow-gray-500 text-black dark:text-white text-xl inline-flex items-center justify-center rounded-md   hover:-translate-y-1 transition-all hover:text-red-700 cursor-pointer duration-300">
            Resume
          </span>
        </a>
      </div>
    </motion.div>
  );
};

export default LeftHero;
