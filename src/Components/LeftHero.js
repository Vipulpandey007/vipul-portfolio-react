import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftHero = () => {
  const [text] = useTypewriter({
    words: ["Web Developer.", "React Developer.", "Front-End Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20 mt-10">
      <div className="flex flex-col gap-5 dark:text-white">
        <h4 className=" text-lg font-normal">WELCOME TO MY Profile</h4>
        <h1 className="text-6xl font-bold ">
          Hi, I'm
          <span className="text-designColor capitalize">Vipul Pandey</span>
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
        <a>
          <span className="w-40 h-16 shadow-2xl shadow-black dark:shadow-gray-500 text-black dark:text-white text-xl inline-flex items-center justify-center rounded-md   hover:-translate-y-1 transition-all hover:text-red-700 cursor-pointer duration-300">
            Resume
          </span>
        </a>
      </div>
    </div>
  );
};

export default LeftHero;
