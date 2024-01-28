import React from "react";
import bannerImg from "../Images/bannerimg.png";
import { motion } from "framer-motion";
const RightHero = () => {
  const textVariants = {
    initial: {
      x: 500,
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
      className="w-full lgl:w-1/2 flex justify-center items-center relative"
      variants={textVariants}
      initial="initial"
      animate="animate"
    >
      <img
        className="w-[200px] h-[300px] lgl:w-[350px] lgl:h-[500px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[250px] h-[200px] lgl:w-[350px] lgl:h-[400px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </motion.div>
  );
};

export default RightHero;
